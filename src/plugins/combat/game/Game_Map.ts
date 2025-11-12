// $PluginCompiler TEW_Combat.js

import { Game_CharacterBase } from "../../../rmmv/objects/Game_CharacterBase";
import { Direction } from "../../_types/enum";

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
}

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
}

// "roundXWithDirection" andd "roundYWithDirection" is the worst naming I've seen since Ta Mère SCRL
Game_Map.prototype.exploreRange = function(distance: number, event: Game_CharacterBase, through: boolean) {
    console.log("making range");
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

// TODO store global variables to re-use for every call
Game_Map.prototype.chargeRange = function (distance: number, event: Game_CharacterBase, through: boolean) {
    console.log("making experimental charge range");
    const startX = event.x;
    const startY = event.y;
    let x = startX;
    let y = startY;
    const ignoreImpassableTiles = through || event.isThrough() || event.isDebugThrough(); // e.g. teleportation
    const tilesToExplore: [number, number][] = [[startX, startY]];
    const reachableTiles: [number, number][] = [];
    const allDirections = [Direction.DOWN, Direction.UP, Direction.RIGHT, Direction.LEFT];
    let distanceReached: number = 0;

    while (tilesToExplore.length > 0 && distanceReached <= distance) {
        const currentTile = tilesToExplore.shift();
        if (ignoreImpassableTiles || this.isPathClear(event, currentTile, currentTile[0] - startX, currentTile[1] - startY, reachableTiles)) {
            reachableTiles.push(currentTile);
        }
        for (const direction of allDirections) {
            x = this.roundXWithDirection(currentTile[0], direction);
            y = this.roundYWithDirection(currentTile[1], direction);
            if (tilesToExplore.includes([x, y])) continue;
            if (reachableTiles.includes([x, y])) continue;
            if (this.checkAndStoreTilePassability(x, y)) {
                tilesToExplore.push([x, y]);
            }
        }
        distanceReached = Math.abs(currentTile[0] - startX) + Math.abs(currentTile[1] - startY);
    }
};

// TODO check for two paths if not on row/column/diagonal ?
/**
 * Check recursively if there is a straight-ish path of passable tiles from event to tile
 */
Game_Map.prototype.isPathClear = function(
    event: Game_CharacterBase,
    tile: [number, number],
    dx: number, dy: number,
    reachableTiles: [number, number][]
) {
    if (reachableTiles.includes(tile)) return true;
    if (dx === 0 && dy === 0) return true;

    const x = tile[0];
    const y = tile[1];
    // Same row or column, we only need to check that one
    if (dx === 0) {
        if (dy < 0) {
            return this.isMapPassable(x, y, Direction.DOWN, event)
                && this.isPathClear(event, [x, y + 1], 0, dy + 1, reachableTiles);
        } else {
            return this.isMapPassable(x, y, Direction.UP, event)
                && this.isPathClear(event, [x, y - 1], 0, dy - 1, reachableTiles);
        }
    }
    if (dy === 0) {
        if (dx < 0) {
            return this.isMapPassable(x, y, Direction.RIGHT, event)
                && this.isPathClear(event, [x + 1, y], dx + 1, 0, reachableTiles);
        } else {
            return this.isMapPassable(x, y, Direction.LEFT, event)
                && this.isPathClear(event, [x - 1, y], dx - 1, 0, reachableTiles);
        }
    }
    // Not on the same row or column, and not a perfect diagonal:
    //  join the nearest row/column with a tangential diagonal
    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) {
            if (dy < 0) {
                return this.isMapPassable(x, y, Direction.RIGHT, event)
                    && this.isMapPassable(x + 1, y, Direction.DOWN, event)
                    && this.isPathClear(event, [x + 1, y + 1], dx + 1, dy + 1, reachableTiles);
            } else {
                return this.isMapPassable(x, y, Direction.RIGHT, event)
                    && this.isMapPassable(x + 1, y, Direction.UP, event)
                    && this.isPathClear(event, [x + 1, y - 1], dx + 1, dy - 1, reachableTiles);
            }
        } else {
            if (dy < 0) {
                return this.isMapPassable(x, y, Direction.LEFT, event)
                    && this.isMapPassable(x - 1, y, Direction.DOWN, event)
                    && this.isPathClear(event, [x - 1, y + 1], dx - 1, dy + 1, reachableTiles);
            } else {
                return this.isMapPassable(x, y, Direction.LEFT, event)
                    && this.isMapPassable(x - 1, y, Direction.UP, event)
                    && this.isPathClear(event, [x - 1, y - 1], dx - 1, dy - 1, reachableTiles);
            }
        }
    } else if (Math.abs(dx) < Math.abs(dy)) {
        if (dx < 0) {
            if (dy < 0) {
                return this.isMapPassable(x, y, Direction.DOWN, event)
                    && this.isMapPassable(x, y + 1, Direction.RIGHT, event)
                    && this.isPathClear(event, [x + 1, y + 1], dx + 1, dy + 1, reachableTiles);
            } else {
                return this.isMapPassable(x, y, Direction.UP, event)
                    && this.isMapPassable(x, y - 1, Direction.RIGHT, event)
                    && this.isPathClear(event, [x + 1, y - 1], dx + 1, dy - 1, reachableTiles);
            }
        } else {
            if (dy < 0) {
                return this.isMapPassable(x, y, Direction.DOWN, event)
                    && this.isMapPassable(x, y + 1, Direction.LEFT, event)
                    && this.isPathClear(event, [x - 1, y + 1], dx - 1, dy + 1, reachableTiles);
            } else {
                return this.isMapPassable(x, y, Direction.UP, event)
                    && this.isMapPassable(x, y - 1, Direction.LEFT, event)
                    && this.isPathClear(event, [x - 1, y - 1], dx - 1, dy - 1, reachableTiles);
            }
        }
    } else {
        // Perfect diagonal: check tiles on the diagonal and every surrounding tile
        if (dx < 0) {
            if (dy < 0) {
                return this.isMapPassable(x, y, Direction.DOWN, event)
                    && this.isMapPassable(x, y, Direction.RIGHT, event)
                    && this.isMapPassable(x + 1, y, Direction.DOWN, event)
                    && this.isMapPassable(x, y + 1, Direction.RIGHT, event)
                    && this.isPathClear(event, [x + 1, y + 1], dx + 1, dy + 1, reachableTiles);
            } else {
                return this.isMapPassable(x, y, Direction.UP, event)
                    && this.isMapPassable(x, y, Direction.RIGHT, event)
                    && this.isMapPassable(x + 1, y, Direction.UP, event)
                    && this.isMapPassable(x, y - 1, Direction.RIGHT, event)
                    && this.isPathClear(event, [x + 1, y - 1], dx + 1, dy - 1, reachableTiles);
            }
        } else {
            if (dy < 0) {
                return this.isMapPassable(x, y, Direction.DOWN, event)
                    && this.isMapPassable(x, y, Direction.LEFT, event)
                    && this.isMapPassable(x - 1, y, Direction.DOWN, event)
                    && this.isMapPassable(x, y + 1, Direction.LEFT, event)
                    && this.isPathClear(event, [x - 1, y + 1], dx - 1, dy + 1, reachableTiles);
            } else {
                return this.isMapPassable(x, y, Direction.UP, event)
                    && this.isMapPassable(x, y, Direction.LEFT, event)
                    && this.isMapPassable(x - 1, y, Direction.UP, event)
                    && this.isMapPassable(x, y - 1, Direction.LEFT, event)
                    && this.isPathClear(event, [x - 1, y - 1], dx - 1, dy - 1, reachableTiles);
            }
        }
    }
}

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
    return this.isPassable(x, y, Direction.DOWN)
        || this.isPassable(x, y, Direction.UP)
        || this.isPassable(x, y, Direction.RIGHT)
        || this.isPassable(x, y, Direction.LEFT);
};

Game_Map.prototype.isMapPassable = function(x1: number, y1: number, direction: Direction, event: Game_CharacterBase) {
    const x2 = this.roundXWithDirection(x1, direction);
    const y2 = this.roundYWithDirection(y1, direction);
    const oppositeDirection = this.reverseDirection(direction);
    return event.isCollidedWithCharacters(x1, y1)
        && this.isPassable(x1, y1, direction)
        && this.isPassable(x2, y2, oppositeDirection);
};

/**
 * RMMV core implementation
 */
Game_Map.prototype.reverseDirection = function(d: Direction) {
    return 10 - d;
};

// Special pathfinding for charge action: Bresenham's paths approximating 2D ray tracing canceled by any obstacle
Game_Map.prototype.rayTraceRange = function(distance: number, event: Game_CharacterBase, through: boolean) {
    console.log("making charge range");
    const startX = event.x;
    const startY = event.y;
    const passable: Record<string, boolean> = {};
    const pathCache: Record<string, [number, number][]> = {};

    // Precompute passability in the Manhattan diamond
    for (let y = startY - distance; y <= startY + distance; y++) {
        for (let x = startX - distance; x <= startX + distance; x++) {
            if (x + y <= distance) {
                passable[`${x},${y}`] = $gameMap.isValid(x, y) && $gameMap.isPassableTile(x, y);
            }
        }
    }

    // Loop through all tiles in range
    for (let dy = -distance; dy <= distance; dy++) {
        for (let dx = -distance; dx <= distance; dx++) {
            const cost = Math.abs(dx) + Math.abs(dy);
            if (cost === 0 || cost > distance) continue;

            const tx = startX + dx;
            const ty = startY + dy;

            // Compute normalized direction for caching
            const longerAxisProjection = Math.max(Math.abs(dx), Math.abs(dy)) || 1;
            const ndx = dx / longerAxisProjection;
            const ndy = dy / longerAxisProjection;
            // Cache similar lines with 1 digit of precision (e.g. the lines to [1, 3] and [2, 7] will use the same cached path for index '3,10')
            const dirKey = `${Math.round(ndx * 10)},${Math.round(ndy * 10)}`;

            // Retrieve or compute Bresenham path for this direction & distance
            if (!pathCache[dirKey]) {
                pathCache[dirKey] = this.computeBresenhamPath(0, 0, Math.round(ndx * distance), Math.round(ndy * distance));
            }

            // Compute path up to this specific (dx, dy)
            const path = pathCache[dirKey].filter(
                step => Math.abs(step[0]) <= Math.abs(dx) && Math.abs(step[1]) <= Math.abs(dy)
            );

            if (this.isPathClear(startX, startY, path, passable, event, through)) {
                this.addTile(this.tile(tx, ty));
            }
        }
    }
};

/**
 * Checks whether all tiles along a given Bresenham path are passable.
 */
// Game_Map.prototype.isPathClear = function(startX: number, startY: number, path: [number, number][], passable: Record<string, boolean>, event: Game_CharacterBase, through: boolean) {
//     for (let i = 0; i < path.length; i++) {
//         const [dx, dy] = path[i];
//         const x = startX + dx;
//         const y = startY + dy;

//         // FIXME
//         // Check directional passability from previous tile (on tile border)
//         const direction = this.computeDirection(dx, dy);
//         const oppositeDirection = event.reverseDir(direction);
//         const previousX = this.roundXWithDirection(x, oppositeDirection);
//         const previousY = this.roundYWithDirection(y, oppositeDirection);
//         const tileBorderIsPassable = through || event.canPass(previousX, previousY, direction);

//         const key = `${x},${y}`;
//         const tileIsReachable = (tileBorderIsPassable && passable[key]) || i === 0; // ignore starting tile
//         if (!tileIsReachable) return false;
//     }
//     return true;
// };

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
 * Bresenham line generator between two relative points.
 * Returns array of [[relativeX, relativeY], [dx, dy]] offsets from the start.
 */
Game_Map.prototype.computeBresenhamPath = function(x0: number, y0: number, x1: number, y1: number) {
    const points = [];
    let xDistance = Math.abs(x1 - x0);
    let yDistance = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = xDistance;
    while (true) {
        points.push([x0, y0]);
        if (x0 === x1 && y0 === y1) break;
        const e2 = 2 * err;
        if (e2 > -yDistance) {
            err -= yDistance;
            x0 += sx;
        }
        if (e2 < xDistance) {
            err += xDistance;
            y0 += sy;
        }
    }
    return points;
};

Game_Map.prototype.eventsRangeXy = function (tx: number, ty: number) {
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

// TODO unused (optimized)
Game_Map.prototype.isPassableTile = function (x: number, y: number) {
    for (var i = 0; i < 4; i++) {
        var direction = 2 + i * 2;
        if ($gameMap.isPassable(x, y, direction)) {
            return true;
        }
    }
    return false;
};

/**
 * Override from RMMV core
 */
Game_Map.prototype.isPassable = function(x: number, y: number, d: Direction) {
    const key = `${x},${y},${d}`;
    if (this._tileBorderPassability[key] === undefined) {
        this._tileBorderPassability[key] = this.checkPassage(x, y, (1 << (d / 2 - 1)) & 0x0f);
    }
    return this._tileBorderPassability[key];
};
