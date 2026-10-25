// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import { StatArray } from "../import";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.


Game_Enemy.prototype.initialize = function(enemyId: string, x: number, y: number, ai: string) {
    Game_Battler.prototype.initialize.call(this);
    this.setup(enemyId, x, y);
    this._ai = ai;

    const data = TEW.DATABASE.NPCS.SET[enemyId];

    for (let weapon of data.weapons) {
        this.addWeapon(weapon);
    }
};

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

Game_Enemy.prototype.allBattlersIndex = function() {
    return $gameParty.members().length + $gameTroop.members().indexOf(this);
};

// Enemies move through decisions (see Game_Battler.setMovePath): no legacy per-tile move actions
Game_Enemy.prototype.makeMoves = function() {
    this.clearMoves();
    this.clearMovePath();
};

Game_Enemy.prototype.makeActions = function() {
    // Override
};

Game_Enemy.prototype.paramBase = function(paramId: number) {
    // mhp
    if (paramId === 0) {
        return TEW.DATABASE.NPCS.SET[this._enemyId].wounds;
    }
    return TEW.DATABASE.NPCS.SET[this._enemyId].stats[paramId];
}

// MHP is handled separately
Game_Enemy.prototype.statName = function(paramId: number) {
    return StatArray[paramId];
}

Game_Enemy.prototype.enemy = function() {
    return TEW.DATABASE.NPCS.SET[this._enemyId];
}

Game_Enemy.prototype.getAI = function() {
    return TEW.DATABASE.NPCS.AI[this._ai];
}

Game_Enemy.prototype.refresh = function() {
    Game_BattlerBase.prototype.refresh.call(this);
    if (this.hp <= 0) {
        this.addState(this.deathStateId());
    } else {
        this.removeState(this.deathStateId());
    }
};
