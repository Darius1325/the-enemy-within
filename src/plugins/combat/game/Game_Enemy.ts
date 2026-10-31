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
    for (let armor of data.armor) {
        this.equipArmor(armor);
    }
    for (let itemOrAmmo in data.trappings) {
        const isAmmo = TEW.DATABASE.WEAPONS.AMMO_SET[itemOrAmmo] !== undefined;
        if (isAmmo) {
            this.addAmmo(itemOrAmmo, data.trappings[itemOrAmmo]);
        } else {
            this.addItem(itemOrAmmo, data.trappings[itemOrAmmo]);
        }
    }
    for (let comp in data.comps) {
        this._competences[comp] = data.comps[comp];
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

// RMMV's implementation reads RMMV enemy actions, which TEW NPCs don't have: enemies act through their AI
Game_Enemy.prototype.makeActions = function() {
    // Override
};

Game_Enemy.prototype.paramBase = function(paramId: number) {
    // mhp
    if (paramId === 0) {
        return TEW.DATABASE.NPCS.SET[this._enemyId].wounds;
    } // stat array starts at 0 for weapon skill
    return TEW.DATABASE.NPCS.SET[this._enemyId].stats[paramId - 1];
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
