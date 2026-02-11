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
        0, // MHP (13)
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
    this.addWeapon("DAGGER");
    this.addWeapon("RAPIER");
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
        0, // MHP (12)
        26, // WEAS
        37, // BALS
        28, // STRG
        31, // TOUG
        36, // INIT
        32, // AGIL
        43, // DEXT
        41, // INTL
        42, // WILL
        36  // FELW
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
    this.addComp('GOSSIP', 5);
    this.addComp('MELEE_BASIC', 5);
    this.addComp('RANGED_BOW', 5);
    this.addComp('CHARM_ANIMAL', 5);
    this.addComp('CLIMB', 5);
    this.addComp('ENDURANCE', 5);
    this.addComp('LORE_HERBS', 5);
    this.addComp('OUTDOOR_SURVIVAL', 5);
    this.addComp('PERCEPTION', 5);
    this.addComp('SWIM', 5);
    this.addComp('TRADE_HERBALIST', 5);

    // talents
    this.addTalent('SAVVY');
    this.addTalent('ACUTE_SENSE_TASTE');
    this.addTalent('ACUTE_SENSE_SMELL');
    this.addTalent('NIMBLE_FINGERED');
    this.addTalent('COOLHEADED');    

    // spells
    // Test data
    this.addSpell("BOLT");

    // items
    this.addItem('CLOTHING', 1);
    this.addItem('BOOTS', 1);
    //TODO Herbs

    // weapons
    this.addWeapon("CLOAK");
    this.addWeapon("DAGGER");
    this.equipMainHand(1);

    // armors

    // ammo
}

// Initialization function for Ciara
Game_Actor.prototype.initCiara = function() {
    // Set base parameters for Ciara
    this._paramBase = [
        0, // MHP (14)
        38, // WEAS
        33, // BALS
        33, // STRG
        40, // TOUG
        34, // INIT
        39, // AGIL
        34, // DEXT
        42, // INTL
        37, // WILL
        42  // FELW
    ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 4;
    this._fortune = 4;
    this._resilience = 2;
    this._resolve = 2;

    // competences
    this.addComp('LANGUAGE_BRETONNIAN', 3);
    this.addComp('LANGUAGE_WASTELANDER', 3);
    this.addComp('GOSSIP', 3);
    this.addComp('CHARM', 5);
    this.addComp('COOL', 5);
    this.addComp('MELEE_BASIC', 10);
    this.addComp('CHANNELLING_AQSHY', 5);
    this.addComp('DODGE', 5);
    this.addComp('INTUITION', 5);
    this.addComp('LANGUAGE_MAGICK', 5);
    this.addComp('LORE_MAGIC', 5);
    this.addComp('MELEE_POLE_ARM', 5);
    this.addComp('PERCEPTION', 5);

    // talents
    this.addTalent('SAVVY');
    this.addTalent('SUAVE');
    this.addTalent('NIGHT_VISION');
    this.addTalent('WARRIOR_BORN');
    this.addTalent('PETTY_MAGICK');    

    // spells
    this.addSpell("WARNING");
    this.addSpell("PURIFY_WATER");
    this.addSpell("DART");
    this.addSpell("DRAIN");

    // items
    this.addItem('CLOTHING', 1);
    this.addItem('WRITING_KIT', 1);
    this.addItem('PARCHMENT', 5);
    this.addItem('MAGIC_GRIMOIRE', 1);

    // weapons
    this.addWeapon("DAGGER");
    this.addWeapon("QUARTERSTAFF");
    this.equipMainHand(1);

    // armors

    // ammo
}

// Initialization function for Galaandril
Game_Actor.prototype.initGalaandril = function() {
    // Set base parameters for Galaandril
    this._paramBase = [
        0, // MHP (13)
        35, // WEAS
        47, // BALS
        31, // STRG
        36, // TOUG
        46, // INIT
        42, // AGIL
        42, // DEXT
        32, // INTL
        42, // WILL
        24  // FELW
    ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 2;
    this._fortune = 2;
    this._resilience = 0;
    this._resolve = 0;

    // competences
    this.addComp('SWIM', 3);
    this.addComp('PLAY_FLUTE', 3);
    this.addComp('COOL', 8);
    this.addComp('LANGUAGE_ELTHARIN', 5);
    this.addComp('MELEE_BASIC', 5);
    this.addComp('EVALUATION', 5);
    this.addComp('CHARM', 5);
    this.addComp('CLIMB', 5);
    this.addComp('GOSSIP', 5);
    this.addComp('INTUITION', 5);
    this.addComp('PERCEPTION', 5);
    this.addComp('STEALTH_URBAN', 5);
    this.addComp('TRACK', 5);

    // talents
    this.addTalent('ACUTE_SENSE_SIGHT');
    this.addTalent('COOLHEADED');
    this.addTalent('NIGHT_VISION');
    this.addTalent('SIXTH_SENSE');
    this.addTalent('READ_WRITE');    
    this.addTalent('BENEATH_NOTICE'); 

    // spells

    // items
    this.addItem('CLOTHING', 1);
    this.addItem('HAT', 1);
    this.addItem('LANTERN', 1);
    this.addItem('LAMP_OIL', 1);
    this.addItem('WRITING_KIT', 1);

    // weapons
    this.addWeapon("CLOAK");
    this.addWeapon("DAGGER");
    this.equipMainHand(1);

    // armors

    // ammo
}
// #endregion =========================== Init TEW ============================== //
