// $PluginCompiler TEW_Base.js

import { $dataActors } from "../../../rmmv/variables";
import { Career } from "../../_types/career";
import { ConditionId } from "../../_types/enum";
import TEW from "../../_types/tew";
import { Game_BattlerBase } from "./Game_BattlerBase";
export interface Game_Actor extends Game_BattlerBase {
    param: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;
    paramPlus: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;

    availableExp: () => number;
    spendExp: (amount: number) => void;
    statAdvances: (paramId: number) => number;
    compAdvances: (compId: string) => number;
    nextStatAdvanceCost: (paramId: number) => number;
    nextCompAdvanceCost: (compId: string) => number;
    applyStatAdvances: (paramId: number, advances: number) => void;
    applyCompAdvances: (compId: string, advances: number) => void;

    career: () => Career;
    careerName: () => string;
    improvableStats: () => number[];
    improvableComps: () => string[];
    careerTalents: () => string[];
    buyableTalents: () => string[];
    canImproveStat: (paramId: number) => boolean;
    canImproveComp: (compId: string) => boolean;
    canBuyTalent: (talentId: string) => boolean;
};

// $StartCompilation

// Game_Actor
Game_Actor.prototype.initialize = function(actorId : number)  {
    Game_Battler.prototype.initialize.call(this);
    this.setup(actorId);
    this.initTEW(actorId);
};

Game_Actor.prototype.setup = function(actorId) {
    var actor = $dataActors[actorId];
    this._actorId = actorId;
    this._name = actor.name;
    this._nickname = actor.nickname;
    this._career = undefined; // TODO add to actors JSON
    this._exp = actor.exp || 0; // TODO ?
    // this._profile = actor.profile;
    // this._classId = actor.classId;
    // this._level = actor.initialLevel;
    this.initImages();
    // this.initExp();
    // this.initSkills();
    // this.initEquips(actor.equips);
    this.clearParamPlus();
    this.recoverAll();
};

Game_Actor.prototype.initMembers = function() { // TODO remove useless attributes
    Game_Battler.prototype.initMembers.call(this);
    this._actorId = 0;
    this._name = '';
    this._nickname = '';
    this._classId = 1; // TODO
    this._level = 0;
    this._characterName = '';
    this._characterIndex = 0;
    this._faceName = '';
    this._faceIndex = 0;
    this._battlerName = '';
    this._exp = 0;
    // this._skills = [];
    this._equips = []; // TODO remove
    this._actionInputIndex = 0;
    // this._lastMenuSkill = new Game_Item();
    // this._lastBattleSkill = new Game_Item();
    // this._lastCommandSymbol = '';
};

Game_Actor.prototype.paramBase = function(paramId: number) {
    return this._paramBase[paramId];
};

Game_Actor.prototype.paramPlus = function(paramId: number) {
    return Game_Battler.prototype.paramPlus.call(this, paramId);
};

// #region ============================== Levelling ============================== //
// Experience points still available to buy advances
Game_Actor.prototype.availableExp = function() {
    return this._exp;
};

// Consuming experience points. Callers are expected to check availableExp() beforehand
Game_Actor.prototype.spendExp = function(amount: number) {
    this._exp -= amount;
};

// Number of advances already bought for a characteristic (base values are not advances)
Game_Actor.prototype.statAdvances = function(paramId: number) {
    return this.paramPlus(paramId);
};

// Number of advances already bought for a competence (competences have no base value)
Game_Actor.prototype.compAdvances = function(compId: string) {
    return this.compPlus(compId);
};

// Experience cost of the next characteristic advance
Game_Actor.prototype.nextStatAdvanceCost = function(paramId: number) {
    return TEW.LEVELLING.characteristicCost(this.statAdvances(paramId));
};

// Experience cost of the next competence advance
Game_Actor.prototype.nextCompAdvanceCost = function(compId: string) {
    return TEW.LEVELLING.competenceCost(this.compAdvances(compId));
};

// Buying characteristic advances. Max wounds are derived from stats and must be recomputed
Game_Actor.prototype.applyStatAdvances = function(paramId: number, advances: number) {
    if (advances <= 0) {
        return;
    }
    this.addParam(paramId, advances);
    this._paramBase[0] = this.calculateMHP();
};

// Buying competence advances. Advanced competences must be learnt before they can be advanced
Game_Actor.prototype.applyCompAdvances = function(compId: string, advances: number) {
    if (advances <= 0) {
        return;
    }
    this.learnComp(compId);
    this.addComp(compId, advances);
};
// #endregion =========================== Levelling ============================== //

// #region ============================== Career ============================== //
// Career data of the actor. Every playable character is expected to have one
Game_Actor.prototype.career = function() {
    return TEW.DATABASE.CAREERS.SET[this._career];
};

Game_Actor.prototype.careerName = function() {
    return this.career().name;
};

/**
 * Rebuilding the lists of what the career allows to improve. They only change with the career,
 * and are cached rather than filtered on every draw.
 * Wildcard entries (MELEE_ANY and the like) are not resolved yet and are left out.
 */
Game_Actor.prototype.refreshCareerCache = function() {
    const career = this.career();
    this._careerCacheId = this._career;
    this._improvableStats = career.improvableStats
        .map(stat => TEW.CHARACTERS.STATS[stat.toLowerCase()])
        .filter(paramId => paramId !== undefined);
    this._improvableComps = career.competences.filter(compId => !!TEW.DATABASE.COMPS.SET[compId]);
    this._careerTalents = career.talents.filter(talentId => !!TEW.DATABASE.TALENTS.SET[talentId]);
};

// The cache is keyed on the career ID, so that assigning a career directly is enough to drop it
Game_Actor.prototype.checkCareerCache = function() {
    if (this._careerCacheId !== this._career) {
        this.refreshCareerCache();
    }
};

// Param IDs of the characteristics the career allows to improve
Game_Actor.prototype.improvableStats = function() {
    this.checkCareerCache();
    return this._improvableStats;
};

// IDs of the competences the career allows to improve, learnt or not
Game_Actor.prototype.improvableComps = function() {
    this.checkCareerCache();
    return this._improvableComps;
};

// IDs of every talent belonging to the career, acquired or not
Game_Actor.prototype.careerTalents = function() {
    this.checkCareerCache();
    return this._careerTalents;
};

// IDs of the career talents which have not been acquired yet
Game_Actor.prototype.buyableTalents = function() {
    return this.careerTalents().filter(talentId => !this.hasTalent(talentId));
};

Game_Actor.prototype.canImproveStat = function(paramId: number) {
    return this.improvableStats().includes(paramId);
};

Game_Actor.prototype.canImproveComp = function(compId: string) {
    return this.improvableComps().includes(compId);
};

Game_Actor.prototype.canBuyTalent = function(talentId: string) {
    return this.careerTalents().includes(talentId) && !this.hasTalent(talentId);
};
// #endregion =========================== Career ============================== //

Game_Actor.prototype.initTEW = function(actorId : number) {
    switch (actorId) {
        case 1: // Cecile
            this.initCecile();
            break;
        case 2: // Cheplu
            this.initCheplu();
            break;
        case 3: // Ciara
            this.initCiara();
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
    // this._paramBase = [
    //     0, // MHP (13)
    //     110, // WEAS
    //     110, // BALS
    //     110, // STRG
    //     110, // TOUG
    //     130, // INIT
    //     110, // AGIL
    //     110, // DEXT
    //     110, // INTL
    //     110, // WILL
    //     110  // FELW
    // ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 3;
    this._fortune = 3;
    this._resilience = 3;
    this._resolve = 3;

    // Career
    this._career = 'DUELLIST_1';

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
    this.addTalent('COOL_HEADED');
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
    this.addWeapon("GARROTE");
    this.addWeapon("DAGGER");
    this.addWeapon("RAPIER");
    this.addWeapon("SLING");
    this.addWeapon("SHIELD");
    this.addWeapon("CROSSBOW");
    this.equipMainHand(0);

    // armors
    this.addArmor("LEATHER_JACK");
    this.addArmor("LEATHER_LEGGINGS");

    // ammo
    this.addAmmo("PEBBLE", 20);
    this.addAmmo('BOLT', 20);

    // conditions
    this.addCondition("ABLAZE", 3);

    // XP
    this._exp = 500;
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
        36, // INIT // 36
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

    // Career
    this._career = 'HERBALIST_1';

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
    this.addTalent('COOL_HEADED');    

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

    // conditions
    this.addCondition(ConditionId.FATIGUED);
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
        34, // INIT // 34
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

    // Career
    this._career = 'WIZARD_1';

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
    this.addTalent('PETTY_MAGIC');    

    // spells
    this.addSpell("WARNING");
    this.addSpell("PURIFY_WATER");
    this.addSpell("DART");
    this.addSpell("DRAIN");

    // TODO debug
    this.addSpell("WARD");
    this.addSpell("BLAST");

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
    this.addComp('EVALUATE', 5);
    this.addComp('CHARM', 5);
    this.addComp('CLIMB', 5);
    this.addComp('GOSSIP', 5);
    this.addComp('INTUITION', 5);
    this.addComp('PERCEPTION', 5);
    this.addComp('STEALTH_URBAN', 5);
    this.addComp('TRACK', 5);

    // talents
    this.addTalent('ACUTE_SENSE_SIGHT');
    this.addTalent('COOL_HEADED');
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
