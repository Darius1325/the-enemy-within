// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import { Point } from "../../_types/point";
import Game_BattlerBase from "./Game_BattlerBase";

export default interface Game_Battler extends Game_BattlerBase {
    x: number;
    y: number;

    isAlive: () => boolean;
    isActor: () => boolean;
    isEnemy: () => boolean;
    
    onTurnStart: () => void;
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
    this._moves = [];
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
    this.makeActions();
    this.makeMoves(false);
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

Game_Battler.prototype.isItemRangeValid = function(item) {
    if (!item) {
        return false;
    } else if (DataManager.isSkill(item)) {
        return this.isSkillRangeOk(item);
    } else if (DataManager.isItem(item)) {
        return this.isItemRangeOk(item);
    } else {
        return false;
    }
};

Game_Battler.prototype.isSkillRangeOk = function(item) {
    var action = new Game_Action(this);
    action.setSkill(item.id);
    if (this.isConfused()) {
        return this.isConfusedRangeOk(action);
    } if (action.isForOpponent()) {
        return action.combatOpponentsUnit(this).length > 0;
    }
    if (action.isForFriend()) {
        return action.combatFriendsUnit(this).length > 0;
    }
    return false;
};

Game_Battler.prototype.isItemRangeOk = function(item) {
    var action = new Game_Action(this);
    action.setItem(item.id);
    if (action.isForOpponent()) {
        return action.combatOpponentsUnit(this).length > 0;
    }
    if (action.isForFriend()) {
        return action.combatFriendsUnit(this).length > 0;
    }
    return false;
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
