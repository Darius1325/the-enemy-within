// $PluginCompiler TEW_Combat.js

import { Game_CharacterBase } from "../../../rmmv/objects/Game_CharacterBase";
import { Game_Enemy } from "../../../rmmv/objects/Game_Enemy";
import { Direction } from "../../_types/enum";
import { Point } from "../../_types/point";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Map
//
// The game object class for a map. It contains scrolling and passage
// determination functions.

TEW.MEMORY.gameMapInit = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
    TEW.MEMORY.gameMapInit.call(this);
    this._tiles = [];
    this._color = '';
    this._destinationX = null;
    this._destinationY = null;
    this._flexibleMovement = true;
    this._tilePassability = {}; // for ranges, contains { 'x,y': boolean } entries
    this._tileBorderPassability = {}; // for ranges, contains { 'x,y,d': boolean } entries
};

Game_Map.prototype.addTile = function(tile) {
    this._tiles.push(tile);
};

Game_Map.prototype.positionTileX = function(tile) {
    return tile % $dataMap.width;
};

Game_Map.prototype.positionTileY = function(tile) {
    return Math.floor(tile / $dataMap.width);
};

Game_Map.prototype.isTileAdded = function(tile) {
    return this._tiles.contains(tile);
};

Game_Map.prototype.tile = function(x, y) {
    return y * $dataMap.width + x;
};

Game_Map.prototype.tiles = function() {
    return this._tiles;
};

Game_Map.prototype.clearTiles = function() {
    this._tiles = [];
};

Game_Map.prototype.isOnTiles = function(x, y) {
    return this._tiles.contains(this.tile(x, y));
};

Game_Map.prototype.setMoveColor = function() {
    this._color = TEW.COMBAT.SYSTEM.moveScopeColor;
};

Game_Map.prototype.setActionColor = function(action) {
    this._color = action.color();
};

Game_Map.prototype.color = function() {
    return this._color;
};

Game_Map.prototype.performScroll = function(x:number, y:number) {
    var x2 = Math.floor(Math.min(x, $gameMap.width() - this.screenTileX() / 2));
    var y2 = Math.floor(Math.min(y, $gameMap.height() - this.screenTileY() / 2));
    this._destinationX = Math.round(Math.max(x2 - this.screenTileX() / 2, 0));
    this._destinationY = Math.round(Math.max(y2 - this.screenTileY() / 2, 0));
    this._scrollSpeed = 5;
};

Game_Map.prototype.clearDestination = function() {
    this._destinationX = null;
    this._destinationY = null;
};

Game_Map.prototype.isDestinationValid = function() {
    return this._destinationX !== null;
};

TEW.MEMORY.gameMapUpdateScroll = Game_Map.prototype.updateScroll;
Game_Map.prototype.updateScroll = function() {
    if (this.isDestinationValid()) {
        var x = Math.max(this._displayX, 0);
        var y = Math.max(this._displayY, 0);
        if (y < this._destinationY) {
            var d = Math.min(this._destinationY - y, this.scrollDistance());
            $gameMap.scrollDown(d);
        }
        if (x > this._destinationX) {
            var d = Math.min(x - this._destinationX, this.scrollDistance());
            $gameMap.scrollLeft(d);
        }
        if (x < this._destinationX) {
            var d = Math.min(this._destinationX - x, this.scrollDistance());
            $gameMap.scrollRight(d);
        }
        if (y > this._destinationY) {
            var d = Math.min(y - this._destinationY, this.scrollDistance());
            $gameMap.scrollUp(d);
        }
        if (x === this._destinationX && y === this._destinationY) {
            this.clearDestination();
        }
    } else {
        TEW.MEMORY.gameMapUpdateScroll.call(this);
    }
};

Game_Map.prototype.isMovementFlexible = function() {
    return this._flexibleMovement;
};

Game_Map.prototype.makeRange = function(distance: number, event: Game_CharacterBase, through: boolean) {
    if (through === undefined) {
        through = false;
    }
    this.clearTiles();
    if (this.isMovementFlexible()) {
        this.exploreRange(distance, event, through);
    } else {
        this.chargeRange(distance, event, through);
    }
};

// Nota bene: "roundXWithDirection" and "roundYWithDirection" is the worst naming I've seen since Ta Mère SCRL
Game_Map.prototype.exploreRange = function(distance: number, event: Game_CharacterBase, through: boolean) {
    console.log("making range");
    if (through === undefined) {
        through = false;
    }
    var queue = [];
    var level = [];
    var tiles: number[] = [];
    var startTile = this.tile(event.x, event.y)

    queue.push(startTile);
    level[startTile] = 0;
    this.addTile(startTile);

    while (queue.length && level[queue[0]] < distance) {
        var start = queue.shift();
        var x = this.positionTileX(start);
        var y = this.positionTileY(start);
        for (var d = 8; d >= 2; d -= 2) {
            if (event.canPass(x, y, d) || through) {
                var x2 = this.roundXWithDirection(x, d);
                var y2 = this.roundYWithDirection(y, d);
                var tile = this.tile(x2, y2);
                if (!tiles.includes(tile)) {
                    queue.push(tile);
                    level[tile] = level[start] + 1;
                    tiles.push(tile)
                    if ($gameMap.checkAndStoreTileBorderPassability(x2, y2)) {
                        this.addTile(tile);
                    }
                }
            }
        }
    }
};

// TODO special pathfinding for charge action: absolute shortest path canceled by any obstacle
Game_Map.prototype.chargeRange = function(distance: number, event: Game_CharacterBase, through: boolean) {
    console.log("making charge range");
    if (through === undefined) {
        through = false;
    }

    const startX = event.x;
    const startY = event.y;
    const validTargets: Game_Enemy[] = $gameTroopTs.members(); // TODO exclude dead + adapt for enemy side
    const reachableTargets: {
        x: number,
        y: number,
        path: Point[]
    }[] = [];

    for (const enemy of validTargets) {
        // TODO skip target if outside max range

        const targetX = enemy._tx;
        const targetY = enemy._ty;

        const dx = targetX - startX;
        const dy  = targetY - startY;

        if (dx == 0) {
            const lowestY = Math.min(startY, targetY);
            const highestY = Math.max(startY, targetY);
            const path = [];
            for (let i = lowestY; i < highestY; i++) {
                path.push({ x: startX, y: i });
            }
            if (this.isPathClear({ x: startX, y: startY }, path, event)) {
                reachableTargets.push({
                    x: targetX,
                    y: targetY,
                    path
                });
                this.addTile(this.tile(targetX, targetY));
                this.addTile(this.tile(path[path.length].x, path[path.length].y));
            }
        } else if (dy == 0) {
            const lowestX = Math.min(startX, targetX);
            const highestX = Math.max(startX, targetX);
            const path = [];
            for (let i = lowestX; i < highestX; i++) {
                path.push({ x: i, y: startY });
            }
            if (this.isPathClear({ x: startX, y: startY }, path, event)) {
                reachableTargets.push({
                    x: targetX,
                    y: targetY,
                    path
                });
                this.addTile(this.tile(targetX, targetY));
                this.addTile(this.tile(path[path.length].x, path[path.length].y));
            }
        } else {
            const startCorners: Point[] = this.computeTileCorners(startX, startY);
            const targetCorners: Point[] = this.computeTileCorners(targetX, targetY);
            const usefulCorners: Point[] = this.computeUsefulCorners(dx, dy, targetCorners);
            const excludedCorners: Point[] = this.computeExcludedCornersForRayTracing(dx, dy, startCorners, targetCorners);

            // TODO skip A&W if same row or column

            const rays: {
                start: Point,
                target: Point,
                path: Point[]
            }[] = [];
            for (const start of startCorners) {
                for (const target of usefulCorners) {
                    let path: Point[] = this.amanatidesWooSupercover(start, target);
                    path = path.filter(point => !excludedCorners.includes(point));
                    if (this.isPathClear(start, path, event)) {
                        rays.push({start, target, path});
                    }
                }
            }

            let isValidPath = false;
            for (const target of usefulCorners) {
                const usefulRays = rays.filter(ray => ray.target.x == target.x && ray.target.y == target.y);
                if (usefulRays.length > 1) {
                    for (const ray1 of usefulRays) {
                        for (const ray2 of usefulRays) {
                            if ((ray1.start.x == ray2.start.x) != (ray1.start.y == ray2.start.y)) {
                                reachableTargets.push({
                                    x: target.x,
                                    y: target.y,
                                    path: ray1.path
                                });
                                this.addTile(this.tile(target.x, target.y));
                                this.addTile(this.tile(ray1.path[ray1.path.length].x, ray1.path[ray1.path.length].y));
                                break;
                            }
                        }
                        if (isValidPath) break;
                    }
                }
                if (isValidPath) break;
            }
            // TODO store and re-use path
            // TODO special check for target : don't check event collision because enemy is here (duh)
        }
    }
};

Game_Map.prototype.computeTileCorners = function(x: number, y: number){
    return [
        {x: x,     y: y    }, // UP LEFT
        {x: x + 1, y: y    }, // UP RIGHT
        {x: x,     y: y + 1}, // DOWN LEFT
        {x: x + 1, y: y + 1}  // DOWN RIGHT
    ];
};

/**
 * Trust the process (we are engineers)
 */
Game_Map.prototype.computeUsefulCorners = function(dx: number, dy: number, corners: Point[]) {
    if (dx == 0) {
        if (dy < 0) { // target on NORTH
            return [corners[2], corners[3]];
        } else { // target on SOUTH
            return [corners[0], corners[1]];
        }
    } else if (dy == 0) {
        if (dx < 0) { // target on WEST
            return [corners[1], corners[3]];
        } else { // target on EAST
            return [corners[0], corners[2]];
        }
    } else { // remove the farthest corner
        if (dx > 0) {
            if (dy > 0) { // SOUTH EAST
                return [corners[0], corners[1], corners[2]];
            } else { // NORTH EAST
                return [corners[0], corners[2], corners[3]];
            }
        } else {
            if (dy > 0) { // SOUTH WEST
                return [corners[0], corners[1], corners[3]];
            } else { // NORTH WEST
                return [corners[1], corners[2], corners[3]];
            }
        }
    }
};

/**
 * Trust the process (we are engineers)
 */
Game_Map.prototype.computeExcludedCornersForRayTracing = function(dx: number, dy: number, startCorners: Point[], targetCorners: Point[]) {
    let result : Point[] = [];
    if (dx > 0) {
        if (dy > 0) { // SOUTH EAST
            result = targetCorners;
        } else { // NORTH EAST - keep start NE and target SW
            result.push(startCorners[1],
                targetCorners[0], targetCorners[2]);
        }
    } else {
        if (dy > 0) { // SOUTH WEST - keep start SW and target NE
            result.push(startCorners[2],
                targetCorners[0], targetCorners[1]);
        } else { // NORTH WEST
            result = startCorners;
        }
    }
    return [];
};

/**
 * Trace a ray from a tile corner to another, and compute the ray's supercover with Amanatides & Woo's algorithm
 */
Game_Map.prototype.amanatidesWooSupercover = function (start: Point, end: Point): Point[] {
    const points: Point[] = [];

    const dx = end.x - start.x;
    const dy = end.y - start.y;

    const stepX = dx > 0 ? 1 : -1;
    const stepY = dy > 0 ? 1 : -1;

    const tDeltaX = Math.abs(1 / dx);
    const tDeltaY = Math.abs(1 / dy);

    let x = start.x;
    let y = start.y;

    let tMaxX = tDeltaX * (dx > 0 ? 1 : 0);
    let tMaxY = tDeltaY * (dy > 0 ? 1 : 0);

    points.push({ x, y });

    while (x !== end.x || y !== end.y) {
        if (tMaxX < tMaxY) {
            tMaxX += tDeltaX;
            x += stepX;
        } else {
            tMaxY += tDeltaY;
            y += stepY;
        }
        points.push({ x, y });
    }

    return points;
};

Game_Map.prototype.isPathClear = function(startTile: Point, tiles: Point[], event: Game_CharacterBase) {
    if (!tiles.length) return true;

    return this.isMapPassable(startTile, tiles[0], event)
        && this.isPathClear(tiles[0], tiles.slice(1), event);
};

/**
 * Whether (x,y) can be walked on
 */
Game_Map.prototype.checkAndStoreTilePassability = function(x: number, y: number) {
    const key =`${x},${y}`;
    if (this._tilePassability[key] === undefined) {
        this._tilePassability[key] = this.isValid(x, y) && this.checkAndStoreTileBorderPassability(x, y);
    }
    return this._tilePassability[key];
};

/**
 * Tile passability depends on border passability
 * We can save operations later by storing everything computed here
 */
Game_Map.prototype.checkAndStoreTileBorderPassability = function(x: number, y: number) {
    return this.isTilePassable({x, y}, Direction.DOWN)
        || this.isTilePassable({x, y}, Direction.UP)
        || this.isTilePassable({x, y}, Direction.RIGHT)
        || this.isTilePassable({x, y}, Direction.LEFT);
};

/**
 * Override from RMMV core
 */
Game_Map.prototype.isMapPassable = function(startTile: Point, targetTile: Point, event: Game_CharacterBase) {
    const direction = this.computeDirection(targetTile.x - startTile.x, targetTile.y - startTile.y);
    const oppositeDirection = this.reverseDirection(direction);
    return event.isCollidedWithCharacters(targetTile.x, targetTile.y)
        && this.isTilePassable(startTile, direction)
        && this.isTilePassable(targetTile, oppositeDirection);
};

Game_Map.prototype.isTilePassable = function(tile: Point, d: Direction) {
    const key = `${tile.x},${tile.y},${d}`;
    if (this._tileBorderPassability[key] === undefined) {
        this._tileBorderPassability[key] = this.checkPassage(tile.x, tile.y, (1 << (d / 2 - 1)) & 0x0f);
    }
    return this._tileBorderPassability[key];
};

/**
 * Compute the direction of projection of a movement on its longest axis (Y axis increases downwards)
 * The X axis is prioritized for perfect diagonals; this must also be the case when computing Bresenham paths
*/
Game_Map.prototype.computeDirection = function(dx: number, dy: number) {
    const isVertical = Math.abs(dx) < Math.abs(dy);
    if (isVertical) {
        if (dy > 0) {
            return Direction.DOWN;
        } else {
            return Direction.UP;
        }
    } else {
        if (dx > 0) {
            return Direction.RIGHT;
        } else {
            return Direction.LEFT;    
        }
    }
};

/**
 * RMMV core implementation
 */
Game_Map.prototype.reverseDirection = function(d: Direction) {
    return 10 - d;
};

Game_Map.prototype.eventsRangeXy = function(tx, ty) {
    return this.events().filter(function(event) {
        var x = event.x;
        var y = event.y;
        var d = Number(event.tparam('range')) || 1;
        for (var i = x - d; i <= x + d; i++) {
            for (var j = y - d; j <= y + d; j++) {
                if (Math.abs(i - x) + Math.abs(j - y) <= d) {
                    if (tx === i && ty === j) {
                        return true
                    }
                }
            }
        }
        return false;
    }, tx, ty);
};
