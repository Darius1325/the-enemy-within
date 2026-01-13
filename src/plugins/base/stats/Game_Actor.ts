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
    this.recoverAll(); // Set max wounds to MAX (HP)
}

// #region ============================== Init TEW ============================== //
// Initialization function for Cecile
Game_Actor.prototype.initCecile = function() {
    // Set base parameters for Cecile
    this._paramBase = [
        0, // MHP (11)
        37, // WEAS
        28, // BALS
        35, // STRG
        37, // TOUG
        27, // INIT
        22, // AGIL
        33, // DEXT
        29, // INTL
        40, // WILL
        28  // FELW
    ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 3;
    this._fortune = 3;
    this._resilience = 3;
    this._resolve = 3;

    // competences
    this.addComp('CHARM', 3);
    this.addComp('LEADERSHIP', 3);
    this.addComp('LORE_REIKLAND', 3);
    this.addComp('LANGUAGE_BRETONNIAN', 5);
    this.addComp('GOSSIP', 5);
    this.addComp('MELEE_BASIC', 5);
    this.addComp('ATHLETICS', 5);
    this.addComp('DODGE', 5);
    this.addComp('ENDURANCE', 5);
    this.addComp('HEAL', 5);
    this.addComp('INTUITION', 5);
    this.addComp('LANGUAGE_CLASSICAL', 5);
    this.addComp('MELEE_FENCING', 5);
    this.addComp('PERCEPTION', 5);

    // talents
    this.addTalent('SAVVY');
    this.addTalent('PURE_SOUL');
    this.addTalent('COOLHEADED');
    this.addTalent('WARRIOR_BORN');
    this.addTalent('FEINT');
    // test
    this.addTalent('DUAL_WIELDER');
    

    // spells

    // items
    this.addItem('BANDAGE', 5);
    this.addItem('CLOTHING', 1);
    this.addItem('TWEEZERS', 1);
    this.addItem('EAR_PICK', 1);
    this.addItem('COMB', 1);

    // weapons
    this.addWeapon("RAPIER");
    this.addWeapon("DAGGER");
    this.addWeapon("SLING");
    this.equipMainHand(1);

    // armors

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

    // Test data
    this.addSpell("BOLT");
}
// #endregion =========================== Init TEW ============================== //
