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
    this._straightPaths = {}; // store paths computed for charging/shooting, as { 'x1,y1': { 'x2,y2': [<path>], ... }, ... }
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

/**
 * Battlers can only charge a target if it's in range and they have direct vision on it.
 * A target is directly in sight if we can trace at least two rays that:
 *  - cross no obstacle
 *  - start from adjacent corners of the subject's tile
 *  - end on the same corner of the target's tile
 */
Game_Map.prototype.chargeRange = function(distance: number, event: Game_CharacterBase, through: boolean = false) {
    const start = { x: event.x, y: event.y };
    const startKey = `${start.x},${start.y}`;
    this._straightPaths[startKey] = this._straightPaths[startKey] || {};

    const enemies: Game_Enemy[] = $gameTroopTs.members();

    for (const enemy of enemies) {
        const enemyPos: Point = { x: enemy._tx, y: enemy._ty };

        if (!this.isInChargeRange(start, enemyPos, distance)) continue;

        const enemyKey = `${enemyPos.x},${enemyPos.y}`;

        const cached = this._straightPaths[startKey][enemyKey];
        if (cached) {
            this.addTile(this.tile(enemyPos.x, enemyPos.y));
            continue;
        }

        const path = this.computeChargePath(start, enemyPos, event);
        if (!path) continue;

        this.storePath(startKey, enemyKey, path);
        this.addTile(this.tile(enemyPos.x, enemyPos.y));
    }
};

/**
 * Store the computed path between two points in the cache, for later retrieval. Also adds the target tile to the map's tiles for move processing.
 */
Game_Map.prototype.storePath = function(startKey: string, enemyKey: string, path) {
    this._straightPaths[startKey][enemyKey] = path;
};

/**
 * Check if the target is in charge range of the subject, i.e. if it's within the maximum charge distance and outside of the minimum one.
 */
Game_Map.prototype.isInChargeRange = function(start: Point, target: Point, maxDist: number) {
    const dx = Math.abs(target.x - start.x);
    const dy = Math.abs(target.y - start.y);
    const manhattan = dx + dy;

    return (
        manhattan >= TEW.COMBAT.SYSTEM.chargeMinimumRange &&
        manhattan <= maxDist
    );
};

/**
 * Compute the path of a charge from start to target
 */
Game_Map.prototype.computeChargePath = function(start: Point, target: Point, event: Game_CharacterBase) {
    const dx = target.x - start.x;
    const dy = target.y - start.y;

    if (dx === 0 || dy === 0) {
        return this.computeStraightLinePath(start, target, event);
    }

    return this.computeRayTracedPath(start, target, event, dx, dy);
};

/**
 * Compute the straight line path between start and target, if it exists and is clear of obstacles.
 */
Game_Map.prototype.computeStraightLinePath = function(start: Point, target: Point, event: Game_CharacterBase) {
    const path = [];

    if (start.x === target.x) {
        const [low, high] = [start.y, target.y].sort((a, b) => a - b);
        for (let y = low; y < high; y++) {
            path.push({ x: start.x, y });
        }
    } else {
        const [low, high] = [start.x, target.x].sort((a, b) => a - b);
        for (let x = low; x < high; x++) {
            path.push({ x, y: start.y });
        }
    }

    if (!this.isPathClear(start, path, event)) return null;
    if (!this.isMapPassableWithoutEventCheck(path.last(), target)) return null;

    path.shift(); // remove start tile
    return path;
};

/**
 * Compute the path of a charge from start to target by ray-tracing rays from the corners of the subject's tile to the corners of the target's tile, and checking for the existence of two rays that are clear of obstacles, start from adjacent corners of the subject's tile, and end on the same corner of the target's tile.
 */
Game_Map.prototype.computeRayTracedPath = function(start: Point, target: Point, event: Game_CharacterBase, dx: number, dy: number) {
    const startCorners = this.computeTileCorners(start.x, start.y);
    const targetCorners = this.computeTileCorners(target.x, target.y);

    const usefulTargetCorners = this.computeUsefulCorners(dx, dy, targetCorners);
    const excluded = this.computeExcludedCornersForRayTracing(dx, dy, startCorners, targetCorners);

    const rays = this.computeAllRays(startCorners, usefulTargetCorners, excluded, event, target);

    return this.selectValidRay(rays, usefulTargetCorners, target);
};

/**
 * Compute the rays from the corners of the subject's tile to the useful corners of the target's tile, excluding some corners as explained in "computeExcludedCornersForRayTracing", and return their paths and supercovers.
 */
Game_Map.prototype.computeAllRays = function(startCorners: Point[], usefulCorners: Point[], excluded: Point[], event: Game_CharacterBase, target: Point) {
    const rays = [];

    for (const s of startCorners) {
        for (const t of usefulCorners) {
            const cover = this.amanatidesWooSupercover(s, t);
            const trimmed = cover.tilesCrossed.filter((p: Point) => !excluded.some(e => e.x === p.x && e.y === p.y));

            if (!this.isPathClear(s, trimmed, event)) continue;
            if (!this.isMapPassableWithoutEventCheck(trimmed.last(), target)) continue;
            rays.push({
                start: s,
                target: t,
                path: cover.path.filter((p: Point) => !excluded.some(e => e.x === p.x && e.y === p.y))
            });
        }
    }

    return rays;
};

/**
 * Select a valid ray among the computed rays, i.e. a ray that is clear of obstacles, starts from a corner adjacent to the start corner of another ray, and ends on the same target corner as another ray with an adjacent start corner. Return the path of the selected ray, or null if no valid ray exists.
 */
Game_Map.prototype.selectValidRay = function(rays: { start: Point, target: Point, path: Point[] }[], usefulCorners: Point[]) {
    for (const corner of usefulCorners) {
        const sameTarget = rays.filter(r => this.samePoint(r.target, corner));
        if (sameTarget.length < 2) continue;

        for (const r1 of sameTarget) {
            for (const r2 of sameTarget) {
                const adjacent =
                    (r1.start.x === r2.start.x) !==
                    (r1.start.y === r2.start.y);
                if (adjacent) {
                    const path = [...r1.path];
                    path.shift();
                    return path;
                }
            }
        }
    }

    return null;
};

/**
 * Compute the coordinates of the corners of a tile, starting from the upper left corner and going clockwise
 */
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
};

/**
 * Trust the process (we are engineers)
 */
Game_Map.prototype.computeExcludedCornersForRayTracing = function(dx: number, dy: number, startCorners: Point[], targetCorners: Point[]) {
    if (dx > 0) {
        if (dy > 0) { // SOUTH EAST - remove all target corners
            return [targetCorners[0], targetCorners[1], targetCorners[2]];
        } else { // NORTH EAST - keep subject N and target SW
            return [startCorners[2], startCorners[3],
                targetCorners[0], targetCorners[3]];
        }
    } else {
        if (dy > 0) { // SOUTH WEST - keep subject W and target NE
            return [startCorners[1], startCorners[3],
                targetCorners[0], targetCorners[3]];
        } else { // NORTH WEST - keep subject NW
            return [startCorners[1], startCorners[2], startCorners[3]];
        }
    }
};

/**
 * Trace a ray from a tile corner to another, and compute the ray's supercover with Amanatides & Woo's algorithm
 */
Game_Map.prototype.amanatidesWooSupercover = function (start: Point, end: Point): { tilesCrossed: Point[], path: Point[] } {
    const tilesCrossed: Point[] = [];
    const path: Point[] = [];
    
    // Skip in case of horizontal or vertical ray
    if (start.x === end.x) {
        const step = Math.sign(end.y - start.y);
        let y = start.y;
        do {
            tilesCrossed.push({ x: start.x, y });
            y += step;
        } while (y !== end.y + step);
        return {
            tilesCrossed,
            path: tilesCrossed
        };
    }
    if (start.y === end.y) {
        const step = Math.sign(end.x - start.x);
        let x = start.x;
        do {
            tilesCrossed.push({ x, y: start.y });
            x += step;
        } while (x !== end.x + step);
        return {
            tilesCrossed,
            path: tilesCrossed
        };
    }

    let x = start.x;
    let y = start.y;

    tilesCrossed.push({ x, y });
    path.push({ x, y })

    const dx = end.x - x;
    const dy = end.y - y;

    const stepX = dx > 0 ? 1 : -1;
    const stepY = dy > 0 ? 1 : -1;

    const invDx = 1 / dx;
    const invDy = 1 / dy;

    const tDeltaX = Math.abs(invDx);
    const tDeltaY = Math.abs(invDy);

    let tMaxX = stepX > 0 ? invDx : 0;
    let tMaxY = stepY > 0 ? invDy : 0;

    const epsilon = 1e-12;

    while (!(x === end.x && y === end.y)) {
        if (Math.abs(tMaxX - tMaxY) < epsilon) { // Endpoint or exact corner hit
            const adjacentTileX: Point = { x: x + stepX, y };
            const adjacentTileY: Point = { x, y: y + stepY };
            // TODO can this be short-circuited?
            // The first condition can only be true in the NE quadrant,
            //  and the second can only be true in the SW quadrant
            if (this.samePoint(adjacentTileX, end)) {
                x += stepX;
            } else if (this.samePoint(adjacentTileY, end)) {
                y += stepY;
            } else {
                x += stepX;
                y += stepY;
                tMaxX += tDeltaX;
                tMaxY += tDeltaY;
                tilesCrossed.push(adjacentTileX, adjacentTileY);
                path.push(adjacentTileX); // only case where path differs from cover
            }
        } else if (tMaxX < tMaxY) {
            x += stepX;
            tMaxX += tDeltaX;
        } else {
            y += stepY;
            tMaxY += tDeltaY;
        }
        tilesCrossed.push({ x, y });
        path.push({ x, y });
    }

    return { tilesCrossed, path };
}

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
Game_Map.prototype.isMapPassableWithoutEventCheck = function(startTile: Point, targetTile: Point) {
    const direction = this.computeDirection(targetTile.x - startTile.x, targetTile.y - startTile.y);
    const oppositeDirection = this.reverseDirection(direction);
    return this.isTilePassable(startTile, direction)
        && this.isTilePassable(targetTile, oppositeDirection);
};

/**
 * Override from RMMV core
 */
Game_Map.prototype.isMapPassable = function(startTile: Point, targetTile: Point, event: Game_CharacterBase) {
    if (startTile.x === targetTile.x && startTile.y === targetTile.y) {
        return true;
    }
    return this.isMapPassableWithoutEventCheck(startTile, targetTile, event)
        && !event.isCollidedWithCharacters(targetTile.x, targetTile.y);
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

Game_Map.prototype.samePoint = function(p1: Point, p2: Point) {
    return p1.x == p2.x && p1.y == p2.y;
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
