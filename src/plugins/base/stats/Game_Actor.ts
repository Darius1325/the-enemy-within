// $PluginCompiler TEW_Base.js

import { Game_BattlerBase } from "./Game_BattlerBase";
export interface Game_Actor extends Game_BattlerBase {
    param: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;
    paramPlus: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;
};

// $StartCompilation

// Game_Actor
Game_Actor.prototype.initialize = function(actorId : number)  {
    Game_Battler.prototype.initialize.call(this);
    this.setup(actorId);
    this.initTEW(actorId);
};

Game_Actor.prototype.paramBase = function(paramId: number) {
    return this._paramBase[paramId];
};

Game_Actor.prototype.paramPlus = function(paramId: number) {
    return Game_Battler.prototype.paramPlus.call(this, paramId);
};

Game_Actor.prototype.initTEW = function(actorId : number) {
    switch (actorId) {
        case 1: // Cecile
            this.initCecile();
            break;
        case 2: // Cheplu
            this.initCheplu();
            break;
        default:
            break;
    }
    console.log(this);
}

// #region ============================== Init TEW ============================== //
// Initialization function for Cecile
Game_Actor.prototype.initCecile = function() {
    // Set base parameters for Cecile
    this._paramBase = [
        0, // MHP (11)
        40, // WEAS
        25, // BALS
        26, // STRG
        30, // TOUG
        38, // INIT
        35, // AGIL
        22, // DEXT
        21, // INTL
        36, // WILL
        23  // FELW
    ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 3;
    this._fortune = 3;
    this._resilience = 3;
    this._resolve = 3;

    // competences
    this.addComp('ATHLETICS', 5);
    this.addComp('DODGE', 5);
    this.addComp('ENDURANCE', 5);

    // talents
    this.addTalent('BEAT_BLADE');

    // spells
    this.addSpell('BLAST');

    // items
    this.addItem('BANDAGE', 5);

    // weapons
    this.addWeapon("SWORD");
    this.addWeapon("SLING");

    // armors
    this.addArmor("LEATHER_JERKIN");

    // ammo
    this.addAmmo("PEBBLE", 20);
}

// Initialization function for Cheplu
Game_Actor.prototype.initCheplu = function() {
    // Set base parameters for Cheplu
    this._paramBase = [
        0, // MHP (11)
        23, // WEAS
        39, // BALS
        27, // STRG
        32, // TOUG
        21, // INIT
        39, // AGIL
        24, // DEXT
        34, // INTL
        30, // WILL
        40  // FELW
    ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 4;
    this._fortune = 4;
    this._resilience = 2;
    this._resolve = 2;
}
// #endregion =========================== Init TEW ============================== //
