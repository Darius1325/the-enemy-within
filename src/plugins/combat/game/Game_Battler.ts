// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import { Point } from "../../_types/point";
import Game_BattlerBase from "./Game_BattlerBase";
import { Game_CharacterBase } from "../../../rmmv/objects/Game_CharacterBase";

export default interface Game_Battler extends Game_BattlerBase {
    x: number;
    y: number;

    tx: number;
    ty: number;

    _actionCount: number;
    _moveCount: number;

    isAlive: () => boolean;
    isActor: () => boolean;
    isEnemy: () => boolean;
    
    onTurnStart: () => void;

    event: () => Game_CharacterBase;

    friendsUnitTS: () => any;
    opponentsUnitTS: () => any;

    name: () => string;
    hp: number;
    pos: (x: number, y: number) => boolean;
    isDead: () => boolean;
    performCollapse: () => void;
    turnTowardCharacter: (character: any) => void;
    isAdjacentTo: (target: { x: number, y: number }) => boolean;

    hasMovePoint: () => boolean;
    hasActionPoint: () => boolean;
    spendMovePoint: () => void;
    spendActionPoint: () => void;
    spendMoveOrActionPoint: () => void;
    actionAndMovePoints: () => number;

    computePathTowards: (x: number, y: number, maxSteps: number) => Point[];
    setMovePath: (path: Point[]) => void;
    canFollowPath: (path: Point[]) => boolean;
    hasPendingMoveStep: () => boolean;
    processMoveStep: () => void;
    clearMovePath: () => void;

    walkDistance: () => number;
    runDistance: () => number;
    maxChargeDistance: () => number;
}

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Battler
//
// The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.

Object.defineProperties(Game_Battler.prototype, {
    // event position X
    x: { get: function() { return this.event().x; }, configurable: true },
    // event position Y
    y: { get: function() { return this.event().y; }, configurable: true },
    // Tactical position X
    tx: { get: function() { return this._tx; }, configurable: true },
    // Tactical position Y
    ty: { get: function() { return this._ty; }, configurable: true },
    // MoVe Point
    mvp: { get: function() { return this.move(); }, configurable: true }
});

TEW.MEMORY.gameBattlerInitMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    TEW.MEMORY.gameBattlerInitMembers.call(this);
    this._tx = 0;
    this._ty = 0;
    this._eventId = 0;
    this._char = new Game_Character();  // it's used to calculate the shortest path
    this._actionIndex = 0;
    this._moveIndex = 0;
    this._moves = []; // legacy per-tile move actions (player input)
    this._movePath = []; // directions of the move being performed by a decision (see setMovePath)
    this._canAction = true;
    this._active = false;
    this._requestImage = false;
    this._channellingLevel = 0;
};

Game_Battler.prototype.setupEvent = function(eventId) {
    this._eventId = eventId;
    var event = this.event();
    this._tx = event.x;
    this._ty = event.y;
    event.setBattler(this);
};

Game_Battler.prototype.indexTs = function() {
    return -1;
};

Game_Battler.prototype.clearEvent = function() {
    this._eventId = 0;
    this._tx = 0;
    this._ty = 0;
};

Game_Battler.prototype.event = function() {
    return $gameMap.event(this._eventId);
};

Game_Battler.prototype.dataEvent = function() {
    return this.event().event();  // strange method...
};

Game_Battler.prototype.pos = function(x, y) {
    return this.event().pos(x, y);
};

Game_Battler.prototype.currentBattler = function() {
    return null;
};

Game_Battler.prototype.currentData = function() {
    return [this.currentBattler(), this.dataEvent()];
};

Game_Battler.prototype.tparam = function(paramString: string) {
    let param = null;
    const battlerData = this.currentData();
    for (let i = 0; i < battlerData.length; i++) {
        param = battlerData[i][paramString] || (
            battlerData[i].meta && battlerData[i].meta[paramString]);
        if (param) {
            break;
        }
    }
    // Should never be needed - legacy from the Tactics system base plugin
    // if (param) {
    //     param.replace(/\s/g, '');
    // }
    return param;
};

Game_Battler.prototype.onTurnStart = function() {
    if (this.isRestricted) { // What have you smoked
        this._canAction = true;
        this.event().setStepAnime(true);
    }
    this._moveCount = 1;
    this._actionCount = 1;
    this.applyConditionsOnTurnStart();
    this.makeActions();
    this.makeMoves(false);
};

// ----------------------
// Action & move points
// ----------------------

Game_Battler.prototype.hasMovePoint = function() {
    return this._moveCount > 0;
};

Game_Battler.prototype.hasActionPoint = function() {
    return this._actionCount > 0;
};

Game_Battler.prototype.spendMovePoint = function() {
    this._moveCount -= 1;
};

Game_Battler.prototype.spendActionPoint = function() {
    this._actionCount -= 1;
};

/**
 * Spend a move point, or an action point if no move point is left
 */
Game_Battler.prototype.spendMoveOrActionPoint = function() {
    if (this.hasMovePoint()) {
        this.spendMovePoint();
    } else {
        this.spendActionPoint();
    }
};

Game_Battler.prototype.actionAndMovePoints = function() {
    return this._actionCount + this._moveCount;
};

// ----------------------
// Decision moves
// ----------------------

/**
 * Compute a path (list of tiles, start excluded) of at most maxSteps steps that gets the battler as close as possible
 * to (x, y), "close" being the walking distance on the map. Battlers block the way, so the path never ends on an occupied tile.
 */
Game_Battler.prototype.computePathTowards = function(x: number, y: number, maxSteps: number) {
    if (x === undefined || y === undefined || maxSteps <= 0) {
        return [];
    }
    const distancesToTarget = $gameMap.walkingDistancesFrom(x, y);
    const startKey = $gameMap.tile(this.x, this.y);
    const parents = { [startKey]: -1 };
    const steps = { [startKey]: 0 };
    const queue = [startKey];
    let best = startKey;
    // Tiles with no walking route to the target come after all others, ranked by straight distance
    const score = (tile: number) => distancesToTarget[tile] !== undefined
        ? distancesToTarget[tile]
        : $gameMap.width() * $gameMap.height() + Math.abs($gameMap.positionTileX(tile) - x) + Math.abs($gameMap.positionTileY(tile) - y);

    // Breadth-first search over the tiles reachable within maxSteps
    while (queue.length > 0) {
        const tile = queue.shift();
        if (score(tile) < score(best) || (score(tile) === score(best) && steps[tile] < steps[best])) {
            best = tile;
        }
        if (steps[tile] >= maxSteps) {
            continue;
        }
        const tx = $gameMap.positionTileX(tile);
        const ty = $gameMap.positionTileY(tile);
        for (const d of [2, 4, 6, 8]) {
            if (!this._char.canPass(tx, ty, d)) {
                continue;
            }
            const next = $gameMap.tile($gameMap.roundXWithDirection(tx, d), $gameMap.roundYWithDirection(ty, d));
            if (parents[next] === undefined) {
                parents[next] = tile;
                steps[next] = steps[tile] + 1;
                queue.push(next);
            }
        }
    }

    const path: Point[] = [];
    for (let tile = best; tile !== startKey; tile = parents[tile]) {
        path.unshift({ x: $gameMap.positionTileX(tile), y: $gameMap.positionTileY(tile) });
    }
    return path;
};

/**
 * Set the path followed by the next decision move, as a list of tiles (start excluded).
 * Each tile is reached in one step: adjacent tiles directly, others (e.g. charge ray waypoints) through pathfinding.
 * The tactical position is updated right away to the end of the path.
 */
Game_Battler.prototype.setMovePath = function(path: Point[]) {
    const result = this.buildMoveSteps(path);
    this._movePath = result.directions;
    this._tx = result.x;
    this._ty = result.y;
};

/**
 * Whether the whole path can be followed from the battler's current position
 */
Game_Battler.prototype.canFollowPath = function(path: Point[]) {
    return path.length > 0 && this.buildMoveSteps(path).complete;
};

/**
 * Simulate a path with this._char: directions to take, end position, and whether the whole path is passable
 */
Game_Battler.prototype.buildMoveSteps = function(path: Point[]) {
    this._moveStepsBuffer = [];
    this._char.setPosition(this.x, this.y);
    let complete = true;
    for (const tile of path) {
        if (!this.addMoveStepsTo(tile)) {
            complete = false;
            break;
        }
    }
    const directions = this._moveStepsBuffer;
    this._moveStepsBuffer = [];
    return { directions, x: this._char.x, y: this._char.y, complete };
};

/**
 * Add the steps leading this._char to a tile of a path: one step for an adjacent tile, two for a diagonal one
 * (through whichever corner tile is passable), pathfinding otherwise. Returns false if the tile can't be reached.
 */
Game_Battler.prototype.addMoveStepsTo = function(tile: Point) {
    const x = this._char.x;
    const y = this._char.y;
    if (x === tile.x && y === tile.y) {
        return true;
    }
    let directions: number[] = [];
    const adjacent = this.directionBetween(x, y, tile.x, tile.y);
    if (adjacent !== 0) {
        directions = [adjacent];
    } else if (Math.abs(tile.x - x) === 1 && Math.abs(tile.y - y) === 1) {
        const horizontal = tile.x > x ? 6 : 4;
        const vertical = tile.y > y ? 2 : 8;
        directions = this.canPassSequence(x, y, [horizontal, vertical]) ? [horizontal, vertical] : [vertical, horizontal];
    } else {
        directions = [this._char.findDirectionTo(tile.x, tile.y)];
    }
    for (const direction of directions) {
        if (direction === 0 || !this._char.canPass(this._char.x, this._char.y, direction)) {
            return false;
        }
        this._char.moveStraight(direction);
        this._moveStepsBuffer.push(direction);
    }
    return true;
};

/**
 * Whether this._char could take the given steps from (x, y), without moving it
 */
Game_Battler.prototype.canPassSequence = function(x: number, y: number, directions: number[]) {
    let cx = x;
    let cy = y;
    for (const direction of directions) {
        if (!this._char.canPass(cx, cy, direction)) {
            return false;
        }
        cx = $gameMap.roundXWithDirection(cx, direction);
        cy = $gameMap.roundYWithDirection(cy, direction);
    }
    return true;
};

Game_Battler.prototype.directionBetween = function(x1: number, y1: number, x2: number, y2: number) {
    if (x2 === x1 && y2 === y1 + 1) {
        return 2;
    } else if (x2 === x1 - 1 && y2 === y1) {
        return 4;
    } else if (x2 === x1 + 1 && y2 === y1) {
        return 6;
    } else if (x2 === x1 && y2 === y1 - 1) {
        return 8;
    }
    return 0;
};

Game_Battler.prototype.hasPendingMoveStep = function() {
    return this._movePath.length > 0;
};

/**
 * Move the battler's event one tile along the decision path. If the step fails (unexpected obstacle),
 * the rest of the path is dropped and the tactical position is synced with the event.
 */
Game_Battler.prototype.processMoveStep = function() {
    const direction = this._movePath.shift();
    const event = this.event();
    event.moveStraight(direction);
    if (!event.isMovementSucceeded()) {
        this._movePath = [];
        this._tx = event.x;
        this._ty = event.y;
    }
};

Game_Battler.prototype.clearMovePath = function() {
    this._movePath = [];
};

Game_Battler.prototype.onActionEnd = function() {
    this._canAction = false;
};

Game_Battler.prototype.isMoving = function() {
    return this.event().isMoving();
};

Game_Battler.prototype.turnTowardCharacter = function(character) {
    this.event().turnTowardCharacter(character)
};

Game_Battler.prototype.doChannelling = function() {
    const channellingCompId = this.anyCompOfCategory('CHANNELLING');
    const womModifier = $gameVariables.value(15);
    const testResult = TEW.DICE.skillTest(this, channellingCompId, womModifier);
    const previousChannellingLevel = this._channellingLevel;

    if (testResult.success) {
        if (testResult.critical) {
            this._channellingLevel += testResult.sl + this.paramBonus('WILL');

            if (!this.hasTalent('AETHYRIC_ATTUNEMENT')) {
                // minor magical crit
            }
        } else {
            if (testResult.sl === 0) {
                this._channellingLevel += 1;
            }
            else {
                this._channellingLevel += testResult.sl;
            }
        }
        $gameMessage.add("You gained " + String(this._channellingLevel - previousChannellingLevel) + " channelling levels.");
    } else {
        if (testResult.critical) {
            this._channellingLevel = 0;
            if (this._channellingLevel > this.paramBonus('WILL')) {
                // major magical crit
            } else {
                // minor magical crit
            }
        } else {
            this._channellingLevel += testResult.sl;
            this._channellingLevel = Math.max(this._channellingLevel, 0);
        }
        $gameMessage.add("You lost " + String(previousChannellingLevel - this._channellingLevel) + " channelling levels.");
    }
};

Game_Battler.prototype.nextAction = function() {
    this._actionIndex++;
    if (this._actionIndex < this.numActions()) {
        return true;
    } else {
        return false;
    }
};

TEW.MEMORY.gameBattlerCurrentAction = Game_Battler.prototype.currentAction;
Game_Battler.prototype.currentAction = function() {
    if ($gamePartyTs.inBattle()) {
        return this._actions[this._actionIndex];
    } else {
        return TEW.MEMORY.gameBattlerCurrentAction.call(this);
    }
};

TEW.MEMORY.gameBattlerClearAction  = Game_Battler.prototype.clearActions;
Game_Battler.prototype.clearActions = function() {
    TEW.MEMORY.gameBattlerClearAction.call(this);
    this._actionIndex = 0;
};

Game_Battler.prototype.currentMove = function() {
    return this._moves[this._moveIndex];
};

Game_Battler.prototype.nextMove = function() {
    this._moveIndex++;
    if (this._moveIndex <= this.numMoves()) {
        return true;
    } else {
        return false;
    }
};

Game_Battler.prototype.numMoves = function() {
    return this._moves.length;
};

Game_Battler.prototype.makeMoves = function(displayTiles = true) {
    this.clearMoves();
    if (this.canMove()) {
        var moveTimes = this.makeMoveTimes();
        this._moves = [];
        for (var i = 0; i < moveTimes; i++) {
            this._moves.push(new Game_Action(this));
        }
    }
    if (displayTiles) {
        this.makeRange();
    }
    // TODO should never happen
    if (this.isRestricted()) {
        this.makeConfusionMove()
    }
};

Game_Battler.prototype.makeMoveTimes = function() {
    return this.mvp;
};

Game_Battler.prototype.clearMoves = function() {
    this._tx = this.x;
    this._ty = this.y;
    this._moves = [];
    this._moveIndex = 0;
};

Game_Battler.prototype.refreshMovesAction = function(x, y) {
    if ($gameMap.isOnTiles(x, y)) {
        this.makeMoves(false);
        this._tx = x;
        this._ty = y;
        this.makeShortestMoves();
    } else {
        this.makeMoves(false);
    }
};

Game_Battler.prototype.makeShortestMoves = function() {
    this._char.setPosition(this.x, this.y);
    var index = 0;
    while (!this.tpos() && index < this.numMoves()) {
        var d = this._char.findDirectionTo(this.tx, this.ty);
        this._char.moveStraight(d);
        this._moves[index].setMove(d / 2);
        index++;
    }
    this._tx = this._char.x;
    this._ty = this._char.y;
};

Game_Battler.prototype.moveAlongPredefinedPath = function(path: Point[]) {
    this._char.setPosition(this.x, this.y);
    this._moves = [];
    for (let i = 0; i < path.length; i++) {
        var d = this._char.findDirectionTo(path[i].x, path[i].y);
        this._char.moveStraight(d);
        this._moves.push(new Game_Action(this));
        this._moves[i].setMove(d / 2);
    }
    this._tx = this._char.x;
    this._ty = this._char.y;
};

Game_Battler.prototype.tpos = function() {
    return this.tx === this._char.x && this.ty === this._char.y;
}

Game_Battler.prototype.canAction = function() {
    return $gamePartyTs.inBattle() ? this._canAction : true;
};

Game_Battler.prototype.makeRange = function() {
    $gameMap.makeRange(this.numMoves(), this.event());
};

Game_Battler.prototype.makeConfusionMove = function() {
    var action = new Game_Action(this);
    action.setConfusion();
    $gameMap.makeRange(this.mvp, this.event());
    var targets = [new Point(this.x, this.y)];
    for (var i = 0; i < $gameMap.tiles().length; i++) {
        var tile = $gameMap.tiles()[i];
        this._tx = $gameMap.positionTileX(tile);
        this._ty = $gameMap.positionTileY(tile);
        if (this.canUse(action.item())) {
            // actor can't use action in another actor
            if ($gameMap.eventsXy(this.tx, this.ty).length === 0) {
                targets.push({'x': this.tx, 'y': this.ty});
            }
        }
    }
    $gameMap.clearTiles();
    var target = targets[Math.floor(Math.random() * targets.length)]
    //var target = targets[Math.randomInt(targets.length)];
    this._tx = target['x'];
    this._ty = target['y'];
};

Game_Battler.prototype.isConfusedRangeOk = function(action) {
    switch (this.confusionLevel()) {
        case 1:
            return action.combatOpponentsUnit(this).length > 0;
        case 2:
            return action.combatOpponentsUnit(this).length > 0 ||
                action.combatFriendsUnit(this).length > 1;  // don't count self
        default:
            return action.combatFriendsUnit(this).length > 1;
    }
};

Game_Battler.prototype.performCollapse = function() {
    this.event().setThrough(true);
};

Game_Battler.prototype.performSelect = function() {
    this.requestEffect('whiten');
};

Game_Battler.prototype.setPosition = function(x, y) {
    this.event().setPosition(x, y);
    this._tx = x;
    this._ty = y;
};

Game_Battler.prototype.canNextAction = function() {
    // next action in first for game enemy get next action!
    return this.nextAction() && this.isActor() && !this.isAutoBattle();
};

Game_Battler.prototype.onClear = function() {
    if (TEW.COMBAT.SYSTEM.setTransparentUnit) {
        this.event().setTransparent(true);
        this.event().setThrough(true);
    }
};

Game_Battler.prototype.isAdjacentTo = function(target: { x: number, y: number }) {
    return (Math.abs(this.x - target.x) === 1 && this.y === target.y)
        || (Math.abs(this.y - target.y) === 1 && this.x === target.x);
};

Game_Battler.prototype.getTurnOrderSpriteName = function() {
    return this._turnOrderSpriteName || 'default';
};
