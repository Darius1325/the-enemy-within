// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import { StatArray } from "../import";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.


// TODO turn 99 into a TEW battle system constant
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

// TODO make 'DEFAULT' a constant
Game_Enemy.prototype.makeActions = function() {
    Game_Battler.prototype.makeActions.call(this);
    if (this.numActions() > 0) {
        var actionList = this.getAI().actions.filter(function(a) {
            return this.isActionValid(a);
        }, this);
        if (actionList.length > 0) {
            this.selectAllActions(actionList);
        }
    }
    this.setActionState('waiting');
};

Game_Enemy.prototype.findMoves = function() {
    if (!this.isConfused()) {
        this.findPosition();
    }
    this.makeShortestMoves();
};

// TODO simplify this, no use adding all the ratings together here
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
        var actionList = this.getAI().actions.filter(function(a) {
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

Game_Enemy.prototype.paramBase = function(paramId: number) {
    // mhp
    if (paramId === 0) {
        return TEW.DATABASE.NPCS.SET[this._enemyId].wounds;
    }
    return TEW.DATABASE.NPCS.SET[this._enemyId].stats[this.statName(paramId)];
}

// MHP is handled separately
Game_Enemy.prototype.statName = function(paramId: number) {
    return StatArray[paramId];
}

Game_Enemy.prototype.enemy = function() {
    return TEW.DATABASE.NPCS.SET[this._enemyId];
}

Game_Enemy.prototype.getAI = function() {
    const aiId = this.tparam('AI') || 'DEFAULT';
    return TEW.DATABASE.NPCS.AI[aiId];
}

// TODO this is RMMV base implem, we need to change KO/death handling
Game_Battler.prototype.refresh = function() {
    Game_BattlerBase.prototype.refresh.call(this);
    if (this.hp === 0) {
        this.addState(this.deathStateId());
    } else {
        this.removeState(this.deathStateId());
    }
};
