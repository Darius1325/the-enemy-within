// $PluginCompiler TEW_Combat.js
// $StartCompilation

import { Stat, StatName } from "../../_types/enum";

//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.

Object.defineProperties(Game_Enemy.prototype, {
    // AGGressivity
    agg: { get: function() { return this.tparam('Aggro') || 99; }, configurable: true }
});

Game_Enemy.prototype.currentBattler = function() {
    return this.enemy();
};

Game_Enemy.prototype.friendsUnitTS = function() {
    return $gameTroopTs;
};

Game_Enemy.prototype.opponentsUnitTS = function() {
    return $gamePartyTs;
};

Game_Enemy.prototype.indexTs = function() {
    return $gameTroopTs.members().indexOf(this);
};

Game_Enemy.prototype.makeMoves = function() {
    Game_Battler.prototype.makeMoves.call(this);
};

Game_Enemy.prototype.findMoves = function() {
    if (!this.isConfused()) {
        this.findPosition();
    }
    this.makeShortestMoves();
};

Game_Enemy.prototype.findPosition = function() {
    // Rewrite this if you want to change the target search behavior.
    this._rate = 0;
    var saveX = this.tx;
    var saveY = this.ty;
    $gameMap.makeRange(this.agg, this.event());
    for (var i = 0; i < $gameMap.tiles().length; i++) {
        var tile = $gameMap.tiles()[i];
        this._tx = $gameMap.positionTileX(tile);
        this._ty = $gameMap.positionTileY(tile);
        var actionList = this.enemy().actions.filter(function(a) {
            return this.isActionValid(a);
        }, this);
        var sum = actionList.reduce(function(r, a) {
            return r + a.rating;
        }, 0);
        if (sum > this._rate) {
            this._rate = sum;
            saveX = this.tx;
            saveY = this.ty;
        }
    }
    $gameMap.clearTiles();
    this._tx = saveX;
    this._ty = saveY;
};

Game_Enemy.prototype.isPattern = function() {
    return this._rate > 0;
};

Game_Enemy.prototype.applyMove = function() {
    var action = this.currentMove();
    if (action) {
        action.applyMove();
    }
};

Game_Enemy.prototype.paramBase = function(paramId) {
    console.log(this._enemyId);
    if (paramId === 'mhp') {
        return TEW.DATABASE.NPCS.SET[this._enemyId].wounds;
    }
    return TEW.DATABASE.NPCS.SET[this._enemyId].stats[paramId];
}
