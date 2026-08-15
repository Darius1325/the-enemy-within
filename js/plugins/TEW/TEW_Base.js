// #region ============================== import ============================== //
var Imported = Imported || {};
Imported.TEW_Base = true;
var TEW = TEW || {};
TEW.DICE = TEW.DICE || {};
TEW.CHARACTERS = TEW.CHARACTERS || {};
TEW.MEMORY = TEW.MEMORY || {};
// SceneManager
SceneManager = SceneManager || {};
SceneManager._screenWidth = 1280;
SceneManager._screenHeight = 720;
SceneManager._boxWidth = 1280;
SceneManager._boxHeight = 720;
// #endregion =========================== import ============================== //
// ============================== //
// #region ============================== properties ============================== //
TEW.CHARACTERS.SET = {
    Cecile: 1,
    Cheplu: 2,
    Ciara: 3,
    Elja: 4,
    Galaandril: 5,
    Wanda: 6
};
TEW.CHARACTERS.ARRAY = [
    'Cécile',
    'Cheplu',
    'Ciara',
    'Elja',
    'Galaandril',
    'Wanda'
];
TEW.CHARACTERS.STATS = {
    mhp: 0,
    weas: 1,
    bals: 2,
    strg: 3,
    toug: 4,
    init: 5,
    agil: 6,
    dext: 7,
    intl: 8,
    will: 9,
    felw: 10
};
TEW.CHARACTERS.STATS_VERBOSE = [
    'Max Wounds',
    'Weapon skill',
    'Ballistic skill',
    'Strength',
    'Toughness',
    'Initiative',
    'Agility',
    'Dexterity',
    'Intelligence',
    'Willpower',
    'Fellowship'
];
// 0 for base skills, -1 for acquired
TEW.CHARACTERS.BASE_COMP_VALUES = TEW.DATABASE.COMPS.IDS.reduce((acc, compId) => {
    acc.push(TEW.DATABASE.COMPS.SET[compId].isBase ? 0 : -1);
    return acc;
}, []);
// #endregion =========================== properties ============================== //
// ============================== //
// #region ============================== Input ============================== //
//----------------------------------
// Input
//
// Key inputs detection and history.
Input.isAnyKeyTriggered = function () {
    return Object.keys(this._currentState).some((key) => this._currentState[key])
        && this._pressedTime === 0;
};
// #endregion =========================== Input ============================== //
// ============================== //
// #region ============================== Bitmap ============================== //
// Bitmap
TEW.DICE.DIE_10_POINTS = [
    [0, 22],
    [0, 45],
    [38, 67],
    [42, 67],
    [80, 45],
    [80, 22],
    [40, 0],
    [16, 50],
    [40, 63],
    [40, 67],
    [64, 50]
];
TEW.DICE.drawLine = function (context, start, end) {
    context.moveTo(start[0], start[1]);
    context.lineTo(end[0], end[1]);
};
Bitmap.prototype.drawDie = function (x, size, value, edgeColor, fillColor) {
    const points = [];
    for (let i = 0; i < TEW.DICE.DIE_10_POINTS.length; i++) {
        points.push([TEW.DICE.DIE_10_POINTS[i][0] + x, TEW.DICE.DIE_10_POINTS[i][1]]);
    }
    var context = this._context;
    context.save();
    context.strokeStyle = edgeColor;
    context.fillStyle = fillColor;
    context.beginPath();
    context.moveTo(...points[0]);
    context.lineTo(...points[1]);
    context.lineTo(...points[2]);
    context.lineTo(...points[3]);
    context.lineTo(...points[4]);
    context.lineTo(...points[5]);
    context.lineTo(...points[6]);
    context.closePath();
    context.fill();
    context.stroke();
    TEW.DICE.drawLine(context, points[7], points[1]);
    TEW.DICE.drawLine(context, points[7], points[6]);
    TEW.DICE.drawLine(context, points[7], points[8]);
    TEW.DICE.drawLine(context, points[10], points[8]);
    TEW.DICE.drawLine(context, points[10], points[6]);
    TEW.DICE.drawLine(context, points[10], points[4]);
    TEW.DICE.drawLine(context, points[9], points[8]);
    context.stroke();
    this.drawText(value, 33 + x, 27, 16, 25, 'left');
    context.restore();
    this._setDirty();
};
// #endregion =========================== Bitmap ============================== //
// ============================== //
// #region ============================== Game_Interpreter ============================== //
// Game_Interpreter
TEW.DICE.bonus = function (value) {
    return Math.floor(value / 10);
};
TEW.DICE.roll = function (range = 100) {
    return Math.floor(Math.random() * range) + 1;
};
TEW.DICE.displayDiceRoll = function (range = 100) {
    const result = TEW.DICE.roll(range);
    const windowDice = new Window_Dice(0, 0, Math.floor(result / 10), result % 10);
    SceneManager._scene.addWindow(windowDice);
    return result;
};
TEW.DICE.rollInitiative = function (battler) {
    return TEW.DICE.roll(10) + TEW.DICE.bonus(battler.paramByName("INIT"));
};
TEW.DICE.skillTest = function (battler, compId, modifier = 0, hidden = false) {
    const compValue = battler.compWithModifiers(compId) + modifier;
    const roll = hidden ? TEW.DICE.roll() : TEW.DICE.displayDiceRoll();
    let success = compValue >= roll;
    let sl = Math.floor(compValue / 10) - Math.floor(roll / 10);
    // Special rules : 5 or below is always a success, 96 or above is always a failure
    if (roll <= 5) {
        success = true;
        sl = sl > 0 ? sl : 0;
    }
    else if (roll >= 96) {
        success = false;
        sl = sl < 0 ? sl : 0;
    }
    const critical = roll % 11 === 0 || roll === 100;
    console.log(`Skill test roll: ${roll} (SL: ${sl}, Success: ${success}, Critical: ${critical})`);
    return {
        sl,
        success,
        critical
    };
};
Game_Interpreter.prototype.partySkillTest = function (compId, modifier, hidden = false) {
    const actorSkillBaseValues = [];
    // Select the best character for the job
    for (let i = 1; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i].compWithModifiers(compId));
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifier;
    console.log("Max party stat used for test: ", maxPartySkill);
    const roll = hidden ? TEW.DICE.roll() : TEW.DICE.displayDiceRoll();
    let success = maxPartySkill >= roll;
    let sl = Math.floor(maxPartySkill / 10) - Math.floor(roll / 10);
    // Special rules : 5 or below is always a success, 96 or above is always a failure
    if (roll <= 5) {
        success = true;
        sl = sl > 0 ? sl : 0;
    }
    else if (roll >= 96) {
        success = false;
        sl = sl < 0 ? sl : 0;
    }
    return {
        sl,
        success,
        critical: roll % 11 === 0 || roll === 100,
    };
};
Game_Interpreter.prototype.rollWindsOfMagic = function () {
    const roll = TEW.DICE.roll(10);
    let womModifier = 0;
    if (roll === 1) {
        womModifier = -30;
    }
    else if (roll < 4) {
        womModifier = -10;
    }
    else if (roll === 10) {
        womModifier = 30;
    }
    else if (roll > 7) {
        womModifier = 10;
    }
    $gameVariables.setValue(15, womModifier);
};
// Opposed skill tests
TEW.DICE.opposedTest = function (skillValue, opposedSkillValue, modifier = 0, opposedModifier = 0) {
    const rollPlayer = TEW.DICE.displayDiceRoll();
    const rollNPC = TEW.DICE.roll();
    let slPlayer = Math.floor((skillValue + modifier) / 10) - Math.floor(rollPlayer / 10);
    let slNPC = Math.floor((opposedSkillValue + opposedModifier) / 10) - Math.floor(rollNPC / 10);
    let successRollPlayer = (skillValue + modifier) >= rollPlayer;
    let successRollNpc = (opposedSkillValue + opposedModifier) >= rollNPC;
    if (rollPlayer <= 5) {
        successRollPlayer = true;
        slPlayer = slPlayer > 0 ? slPlayer : 0;
    }
    else if (rollPlayer >= 96) {
        successRollPlayer = false;
        slPlayer = slPlayer < 0 ? slPlayer : 0;
    }
    if (rollNPC <= 5) {
        successRollNpc = true;
        slNPC = slNPC > 0 ? slNPC : 0;
    }
    else if (rollNPC >= 96) {
        successRollNpc = false;
        slNPC = slNPC < 0 ? slNPC : 0;
    }
    let criticalPlayer = rollPlayer % 11 === 0 || rollPlayer === 100;
    // let criticalNPC = rollNPC % 11 === 0 || rollNPC === 100;
    let success;
    // if Player succeed && its SL is greater than the NPC SL, player wins
    if (slPlayer > slNPC && successRollPlayer) {
        success = true;
        // else if SL Player is less than SL NPC or if player misses, player fails
    }
    else if (slPlayer < slNPC || !successRollPlayer) {
        success = false;
        // else draw
    }
    else {
        success = (skillValue >= opposedSkillValue);
    }
    return {
        sl: slPlayer - slNPC,
        success,
        criticalPlayer
    };
};
Game_Interpreter.prototype.opposedSkillTest = function (compIdPlayer, modifierPlayer, skillValueNPC) {
    const actorSkillBaseValues = [];
    for (let i = 1; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i].compWithModifiers(compIdPlayer));
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues);
    return TEW.DICE.opposedTest(maxPartySkill, skillValueNPC, modifierPlayer);
};
// Combat opposed test
// SL = Success level (DR in french)
// TODO loca
TEW.DICE.combatOpposedSkillTest = function (compValueAttacker, compValueDefender, isAttackerPlayer, isDefenderPlayer) {
    const rollAttacker = isAttackerPlayer ? TEW.DICE.displayDiceRoll() : TEW.DICE.roll();
    const rollDefender = isDefenderPlayer ? TEW.DICE.displayDiceRoll() : TEW.DICE.roll();
    let slAttacker = Math.floor(compValueAttacker / 10) - Math.floor(rollAttacker / 10);
    let slDefender = Math.floor(compValueDefender / 10) - Math.floor(rollDefender / 10);
    let successRollAttacker = compValueAttacker >= rollAttacker;
    let successRollDefender = compValueDefender >= rollDefender;
    if (rollAttacker <= 5) {
        successRollAttacker = true;
        slAttacker = slAttacker > 0 ? slAttacker : 0;
    }
    else if (rollAttacker >= 96) {
        successRollAttacker = false;
        slAttacker = slAttacker < 0 ? slAttacker : 0;
    }
    if (rollDefender <= 5) {
        successRollDefender = true;
        slDefender = slDefender > 0 ? slDefender : 0;
    }
    else if (rollDefender >= 96) {
        successRollDefender = false;
        slDefender = slDefender < 0 ? slDefender : 0;
    }
    let criticalAttacker = rollAttacker % 11 === 0 || rollAttacker === 100;
    let criticalDefender = rollDefender % 11 === 0 || rollDefender === 100;
    let success;
    if (!successRollAttacker) {
        success = false;
    }
    else if (slAttacker != slDefender) {
        success = slAttacker > slDefender;
    }
    else {
        success = (compValueAttacker >= compValueDefender);
    }
    console.log(`Attacker roll: ${rollAttacker} (SL: ${slAttacker}, Critical: ${criticalAttacker})`);
    console.log(`Defender roll: ${rollDefender} (SL: ${slDefender}, Critical: ${criticalDefender})`);
    console.log(`Combat result: ${success ? "Attacker wins" : "Defender wins"}`);
    return {
        rollAttacker,
        rollDefender,
        slAttacker,
        slDefender,
        success,
        criticalAttacker,
        criticalDefender
    };
};
// Scene_Dice
// function Scene_Dice() {
//     this.initialize.apply(this, arguments);
// }
// Scene_Dice.prototype = Object.create(Scene_Base.prototype);
// Scene_Dice.prototype.constructor = Scene_Dice;
// Scene_Dice.prototype.initialize = function() {
//     Scene_MenuBase.prototype.initialize.call(this);
// };
// Scene_Dice.prototype.create = function() {
//     Scene_MenuBase.prototype.create.call(this);
// };
// Scene_Dice.prototype.createStatusWindow = function() {
//     this._diceWindow = new Window_Dice(0, 0);
//     this._diceWindow.y = Graphics.boxHeight - this._diceWindow.height; // ???
//     this.addWindow(this._diceWindow);
// };
// Scene_Class.prototype.refreshWindows = function() {
//     this._diceWindow.refresh();
// };
// #endregion =========================== Game_Interpreter ============================== //
// ============================== //
// #region ============================== Window_Dice ============================== //
//---------------------------------------
// Window_Dice
//
// The window for displaying a dice roll.
function Window_Dice() {
    this.initialize.apply(this, arguments);
}
Window_Dice.prototype = Object.create(Window_Base.prototype);
Window_Dice.prototype.constructor = Window_Dice;
Window_Dice.prototype.initialize = function (x, y, tens, units) {
    Window_Base.prototype.initialize.call(this, x, y, 340, 160); // temp !!
    this._tens = tens;
    this._units = units;
    setTimeout(() => {
        this.close();
    }, 3000);
    this.refresh();
};
Window_Dice.prototype.windowWidth = function () {
    return 340;
};
Window_Dice.prototype.windowHeight = function () {
    return 160;
};
Window_Dice.prototype.refresh = function () {
    this.contents.clear();
    this.contents.drawDie(0, 1, this._tens, 'black', 'lightgreen');
    this.contents.drawDie(100, 1, this._units, 'black', 'lightgreen');
};
Window_Dice.prototype.open = function () {
    this.refresh();
    Window_Base.prototype.open.call(this);
};
Window_Dice.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (Input.isAnyKeyTriggered()) {
        this.close();
    }
};
// #endregion =========================== Window_Dice ============================== //
// ============================== //
// #region ============================== Game_Player ============================== //
Game_Player.prototype.canEncounter = function () {
    return false;
};
// #endregion =========================== Game_Player ============================== //
// ============================== //
// #region ============================== Graphics ============================== //
Graphics._createGameFontLoader = function () {
    this._createFontLoader('GameFont');
    this._createFontLoader('handwritten');
};
// #endregion =========================== Graphics ============================== //
// ============================== //
// #region ============================== Game_Actor ============================== //
// Game_Actor
Game_Actor.prototype.initialize = function (actorId) {
    Game_Battler.prototype.initialize.call(this);
    this.setup(actorId);
    this.initTEW(actorId);
};
Game_Actor.prototype.setup = function (actorId) {
    var actor = $dataActors[actorId];
    this._actorId = actorId;
    this._name = actor.name;
    this._nickname = actor.nickname;
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
Game_Actor.prototype.initMembers = function () {
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
Game_Actor.prototype.paramBase = function (paramId) {
    return this._paramBase[paramId];
};
Game_Actor.prototype.paramPlus = function (paramId) {
    return Game_Battler.prototype.paramPlus.call(this, paramId);
};
// #region ============================== Levelling ============================== //
// Experience points still available to buy advances
Game_Actor.prototype.availableExp = function () {
    return this._exp;
};
// Consuming experience points. Callers are expected to check availableExp() beforehand
Game_Actor.prototype.spendExp = function (amount) {
    this._exp -= amount;
};
// Number of advances already bought for a characteristic (base values are not advances)
Game_Actor.prototype.statAdvances = function (paramId) {
    return this.paramPlus(paramId);
};
// Number of advances already bought for a competence (competences have no base value)
Game_Actor.prototype.compAdvances = function (compId) {
    return this.compPlus(compId);
};
// Experience cost of the next characteristic advance
Game_Actor.prototype.nextStatAdvanceCost = function (paramId) {
    return TEW.LEVELLING.characteristicCost(this.statAdvances(paramId));
};
// Experience cost of the next competence advance
Game_Actor.prototype.nextCompAdvanceCost = function (compId) {
    return TEW.LEVELLING.competenceCost(this.compAdvances(compId));
};
// Buying characteristic advances. Max wounds are derived from stats and must be recomputed
Game_Actor.prototype.applyStatAdvances = function (paramId, advances) {
    if (advances <= 0) {
        return;
    }
    this.addParam(paramId, advances);
    this._paramBase[0] = this.calculateMHP();
};
// Buying competence advances
Game_Actor.prototype.applyCompAdvances = function (compId, advances) {
    if (advances <= 0) {
        return;
    }
    this.addComp(compId, advances);
};
// #endregion =========================== Levelling ============================== //
Game_Actor.prototype.initTEW = function (actorId) {
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
};
// #region ============================== Init TEW ============================== //
// Initialization function for Cecile
Game_Actor.prototype.initCecile = function () {
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
        28 // FELW
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
};
// Initialization function for Cheplu
Game_Actor.prototype.initCheplu = function () {
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
        36 // FELW
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
    // conditions
    this.addCondition("FATIGUED" /* ConditionId.FATIGUED */);
};
// Initialization function for Ciara
Game_Actor.prototype.initCiara = function () {
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
        42 // FELW
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
};
// Initialization function for Galaandril
Game_Actor.prototype.initGalaandril = function () {
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
        24 // FELW
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
};
// #endregion =========================== Init TEW ============================== //
// #endregion =========================== Game_Actor ============================== //
// ============================== //
// #region ============================== Game_BattlerBase ============================== //
/*
* Replaces the eight defaut character stats of RPG Maker with the eleven stats of Warhammer Fantasy.
* Max Wounds : mhp
* Weapon Skill : weas
* Ballistic Skill : bals
* Strength : strg
* Toughness : toug
* Initiative : init
* Agility : agil
* Dexterity : dext
* Intelligence : intl
* Willpower : will
* Fellowship : felw
*/
// Game_BattlerBase
Object.defineProperties(Game_BattlerBase.prototype, {
    mp: { get: function () { return 0; }, configurable: true },
    tp: { get: function () { return 0; }, configurable: true },
    mmp: { get: function () { return 1; }, configurable: true }, // TODO 0
    atk: { get: function () { return 0; }, configurable: true },
    def: { get: function () { return 0; }, configurable: true },
    mat: { get: function () { return 0; }, configurable: true },
    mdf: { get: function () { return 0; }, configurable: true },
    agi: { get: function () { return 0; }, configurable: true },
    luk: { get: function () { return 0; }, configurable: true }
});
// Base stats
TEW.MEMORY.battlerBaseInit = Game_BattlerBase.prototype.initialize;
Game_BattlerBase.prototype.initialize = function () {
    TEW.MEMORY.battlerBaseInit.call(this);
    this._paramBase = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._competences = TEW.CHARACTERS.BASE_COMP_VALUES.slice();
    this._spells = [];
    this._talents = {}; // ID: level
    this._items = {}; // ID: quantity
    this._weapons = []; // [{ id: id, isInMainHand: boolean, isInSecondHand: boolean, ammo: quantity, ammoType: id }]
    this._armors = [];
    this._equippedArmors = [];
    this._ammo = {}; // ID: quantity
    this._conditions = {}; // ID: data
    this._exp = 0;
    this._fate = 0;
    this._fortune = 0;
    this._resilience = 0;
    this._resolve = 0;
};
Object.defineProperties(Game_BattlerBase.prototype, {
    // Max wounds
    mhp: { get: function () { return this.param(0); }, configurable: true },
    // Weapon Skill
    weas: { get: function () { return this.param(1); }, configurable: true },
    // Ballistic Skill
    bals: { get: function () { return this.param(2); }, configurable: true },
    // Strength
    strg: { get: function () { return this.param(3); }, configurable: true },
    // Toughness
    toug: { get: function () { return this.param(4); }, configurable: true },
    // Initiative
    init: { get: function () { return this.param(5); }, configurable: true },
    // Agility
    agil: { get: function () { return this.param(6); }, configurable: true },
    // Dexterity
    dext: { get: function () { return this.param(7); }, configurable: true },
    // Intelligence
    intl: { get: function () { return this.param(8); }, configurable: true },
    // Willpower
    will: { get: function () { return this.param(9); }, configurable: true },
    // Fellowship
    felw: { get: function () { return this.param(10); }, configurable: true }
});
Game_BattlerBase.prototype.calculateMHP = function () {
    var isHardy = this.hasTalent("Hardy");
    return Math.floor(this.paramByName("TOUG") / 10) * 2 // (TOUG / 10) * 2
        + Math.floor(this.paramByName("STRG") / 10) // + (STRG / 10)
        + Math.floor(this.paramByName("WILL") / 10) // + (WILL / 10)
        + (isHardy ? Math.floor(this.paramByName("TOUG") / 10) : 0); // + (TOUG / 10) if Hardy talent
};
Game_BattlerBase.prototype.clearBuffs = function () {
    this._buffs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._buffTurns = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};
Game_BattlerBase.prototype.clearParamPlus = function () {
    this._paramPlus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
};
Game_BattlerBase.prototype.param = function (paramId) {
    const value = this.paramBase(paramId) + this.paramPlus(paramId);
    return Math.max(0, value);
};
Game_BattlerBase.prototype.paramByName = function (paramName) {
    return this.param(TEW.CHARACTERS.STATS[paramName.toLowerCase()]);
};
Game_BattlerBase.prototype.paramBonus = function (paramName) {
    return Math.floor(this.param(TEW.CHARACTERS.STATS[paramName.toLowerCase()]) / 10);
};
// Competences
Game_BattlerBase.prototype.compPlus = function (compId) {
    const compValue = this._competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)];
    return compValue === -1 ? 0 : compValue;
};
Game_BattlerBase.prototype.comp = function (compId) {
    const associatedStat = TEW.DATABASE.COMPS.SET[compId].stat;
    return this.compPlus(compId) + this.paramByName(associatedStat);
};
Game_BattlerBase.prototype.compWithModifiers = function (compId) {
    let conditionId;
    let compFinal;
    const associatedStat = TEW.DATABASE.COMPS.SET[compId].stat;
    compFinal = this.compPlus(compId) + this.paramByName(associatedStat);
    for (conditionId in this._conditions) {
        const condition = TEW.DATABASE.CONDITIONS[conditionId];
        if (!condition)
            continue;
        if (condition.testModifier && (condition.testModifier.comps === undefined || condition.testModifier.comps.includes(conditionId))) {
            compFinal += condition.testModifier.mod;
        }
    }
    return compFinal;
};
Game_BattlerBase.prototype.anyCompOfCategory = function (compCategory) {
    const comps = TEW.DATABASE.COMPS.IDS
        .filter(compId => compId.startsWith(compCategory))
        .filter(compId => this.hasComp(compId));
    if (comps.length > 0) {
        return comps[0];
    }
    return null;
};
Game_BattlerBase.prototype.hasComp = function (compId) {
    if (TEW.DATABASE.COMPS.SET[compId].isBase) {
        return true;
    }
    return this._competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] !== -1;
};
Game_BattlerBase.prototype.hasAnyCompOfCategory = function (compCategory) {
    return this.anyCompOfCategory(compCategory) !== null;
};
Game_BattlerBase.prototype.addComp = function (compId, value) {
    this._competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] += value;
    // this.refresh();
};
// Talents
Game_BattlerBase.prototype.talent = function (talentId) {
    return this._talents[talentId] || 0;
};
Game_BattlerBase.prototype.allTalents = function () {
    return Object.keys(this._talents);
};
Game_BattlerBase.prototype.hasTalent = function (talentId) {
    return this._talents[talentId] > 0;
};
Game_BattlerBase.prototype.addTalent = function (talentId) {
    this._talents[talentId] = this.talent(talentId) + 1;
};
// Spells
Game_BattlerBase.prototype.hasSpell = function (spellId) {
    return this._spells.includes(spellId);
};
Game_BattlerBase.prototype.addSpell = function (spellId) {
    if (!this.hasSpell(spellId)) {
        this._spells.push(spellId);
    }
};
// Items
Game_BattlerBase.prototype.item = function (itemId) {
    return this._items[itemId] || 0;
};
Game_BattlerBase.prototype.addItem = function (itemId, quantity = 1) {
    this._items[itemId] = this.item(itemId) + quantity;
};
Game_BattlerBase.prototype.removeItem = function (itemId, quantity = 1) {
    this._items[itemId] = this.item(itemId) - quantity;
    if (this.item(itemId) <= 0) {
        delete this._items[itemId];
    }
    return itemId;
};
Game_BattlerBase.prototype.hasItem = function (itemId) {
    return this._items[itemId] > 0;
};
// Weapons
Game_BattlerBase.prototype.weapon = function (index) {
    return this._weapons[index];
};
Game_BattlerBase.prototype.mainHand = function () {
    return this._weapons.find((weapon) => weapon.isInMainHand);
};
Game_BattlerBase.prototype.secondHand = function () {
    return this._weapons.find((weapon) => weapon.isInSecondHand);
};
Game_BattlerBase.prototype.addWeapon = function (weaponId) {
    const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[weaponId];
    this._weapons.push({
        id: weaponId,
        isInMainHand: false,
        isInSecondHand: false,
        isReloadable: rangedWeapon && (rangedWeapon.group === 14 /* WeaponGroup.BLACKPOWDER */ ||
            rangedWeapon.group === 15 /* WeaponGroup.ENGINEERING */ ||
            rangedWeapon.group === 9 /* WeaponGroup.CROSSBOW */),
        ammo: 0,
        ammoType: undefined // Ammo ID
    });
    this.sortWeapons();
};
Game_BattlerBase.prototype.transferWeapon = function (weapon) {
    this._weapons.push(weapon);
    this.sortWeapons();
};
Game_BattlerBase.prototype.removeWeapon = function (index) {
    const removed = this._weapons.splice(index, 1);
    this.sortWeapons();
    return removed[0];
};
Game_BattlerBase.prototype.sortWeapons = function () {
    this._weapons = this._weapons.sort((a, b) => TEW.DATABASE.WEAPONS.IDS.indexOf(a.id) - TEW.DATABASE.WEAPONS.IDS.indexOf(b.id));
};
Game_BattlerBase.prototype.hasWeaponTEW = function (weaponId) {
    return this._weapons.some((weapon) => weapon.id === weaponId);
};
Game_BattlerBase.prototype.equipMainHand = function (index) {
    this.unequipMainHand();
    this._weapons[index].isInMainHand = true;
};
Game_BattlerBase.prototype.equipSecondHand = function (index) {
    this.unequipSecondHand();
    this._weapons[index].isInSecondHand = true;
};
Game_BattlerBase.prototype.unequipMainHand = function () {
    this._weapons.forEach((weapon) => {
        weapon.isInMainHand = false;
    });
};
Game_BattlerBase.prototype.unequipSecondHand = function () {
    this._weapons.forEach((weapon) => {
        weapon.isInSecondHand = false;
    });
};
// TODO ???
Game_BattlerBase.prototype.equippedWeapon = function () {
    return this.mainHand() || {
        id: 'UNARMED',
        isInMainHand: true,
        isInSecondHand: false,
        isReloadable: false,
        ammo: 0,
        ammoType: undefined
    };
};
// Armors
Game_BattlerBase.prototype.addArmor = function (armorId) {
    this._armors.push(armorId);
    this.sortArmors();
};
Game_BattlerBase.prototype.removeArmor = function (armorId) {
    const removed = this._armors.splice(this._armors.indexOf(armorId), 1);
    this.sortArmors();
    return removed[0];
};
Game_BattlerBase.prototype.hasArmorTEW = function (armorId) {
    return this._armors.some((armor) => armor === armorId);
};
Game_BattlerBase.prototype.hasArmorEquipped = function (armorId) {
    return this._equippedArmors.some((armor) => armor === armorId);
};
Game_BattlerBase.prototype.equipArmor = function (armorId) {
    this._equippedArmors.push(armorId);
    this._armors.splice(this._armors.indexOf(armorId), 1);
    this.sortEquippedArmors();
};
Game_BattlerBase.prototype.unequipArmor = function (armorId) {
    this._armors.push(armorId);
    this._equippedArmors.splice(this._equippedArmors.indexOf(armorId), 1);
    this.sortArmors();
};
Game_BattlerBase.prototype.unequipArmors = function (armorIds) {
    armorIds.forEach(id => {
        this._armors.push(id);
        this._equippedArmors.splice(this._equippedArmors.indexOf(id), 1);
    });
    this.sortArmors();
};
Game_BattlerBase.prototype.armorsAtLocation = function (location) {
    return this._equippedArmors.map((armor) => TEW.DATABASE.ARMORS.SET[armor])
        .filter((armor) => armor.locations.includes(location));
};
Game_BattlerBase.prototype.armorsAtLocations = function (locations) {
    return this._equippedArmors.map((armor) => TEW.DATABASE.ARMORS.SET[armor])
        .filter((armor) => armor.locations.some(location => locations.includes(location)));
};
// Use ignoredAP = -1 to ignore all AP
Game_BattlerBase.prototype.armorPointsAtLocation = function (location, ignoredAP = 0, ignoreMetalArmor = false) {
    let armors = this.armorsAtLocation(location);
    const sumArmorPoints = (armors) => armors.reduce((acc, armor) => acc + armor.ap, 0);
    if (ignoreMetalArmor) {
        const nonMetallicArmors = armors.filter(armor => ![3 /* ArmorGroup.BREASTPLATE */, 2 /* ArmorGroup.PLATE */, 4 /* ArmorGroup.CHAINMAIL */].includes(armor.group));
        if (ignoredAP === -1) { // ignore all metal armor
            return sumArmorPoints(nonMetallicArmors);
        }
        else if (ignoredAP > 0) { // ignore only some metal armor points
            const metallicArmors = armors.filter(armor => armor.group === 3 /* ArmorGroup.BREASTPLATE */ ||
                armor.group === 4 /* ArmorGroup.CHAINMAIL */ ||
                armor.group === 2 /* ArmorGroup.PLATE */);
            return sumArmorPoints(nonMetallicArmors)
                + Math.max(0, sumArmorPoints(metallicArmors) - ignoredAP);
        }
    }
    else {
        return Math.max(0, sumArmorPoints(armors) - ignoredAP);
    }
};
Game_BattlerBase.prototype.lowestArmorPointsByLocation = function () {
    let aggregator = {};
    aggregator[0 /* BodyLocation.ARMS */] = 0;
    aggregator[1 /* BodyLocation.LEGS */] = 0;
    aggregator[2 /* BodyLocation.HEAD */] = 0;
    aggregator[3 /* BodyLocation.BODY */] = 0;
    this._equippedArmors.map((armor) => TEW.DATABASE.ARMORS.SET[armor])
        .reduce((agg, armor) => {
        armor.locations.forEach(location => agg[location] += armor.ap);
    }, aggregator);
    return Math.min(aggregator[0 /* BodyLocation.ARMS */], aggregator[1 /* BodyLocation.LEGS */], aggregator[2 /* BodyLocation.HEAD */], aggregator[3 /* BodyLocation.BODY */]);
};
Game_BattlerBase.prototype.sortArmors = function () {
    this._armors = this._armors.sort((a, b) => TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
};
Game_BattlerBase.prototype.sortEquippedArmors = function () {
    this._equippedArmors = this._equippedArmors.sort((a, b) => TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
};
// Ammo
Game_BattlerBase.prototype.ammo = function (ammoId) {
    return this._ammo[ammoId] || 0;
};
Game_BattlerBase.prototype.ammoFromGroup = function (ammoGroup) {
    let total = 0;
    for (let ammoId in this._ammo) {
        const ammo = TEW.DATABASE.WEAPONS.AMMO_SET[ammoId];
        if (ammo.group === ammoGroup) {
            total += this.ammo(ammoId);
        }
    }
    return total;
};
Game_BattlerBase.prototype.addAmmo = function (ammoId, quantity = 1) {
    this._ammo[ammoId] = this.ammo(ammoId) + quantity;
};
Game_BattlerBase.prototype.removeAmmo = function (ammoId, quantity = 1) {
    this._ammo[ammoId] = this.ammo(ammoId) - quantity;
    if (this.ammo(ammoId) <= 0) {
        delete this._ammo[ammoId];
    }
    return ammoId;
};
Game_BattlerBase.prototype.hasAmmo = function (ammoId) {
    return this._ammo[ammoId] > 0;
};
Game_BattlerBase.prototype.firstAmmoFromGroup = function (ammoGroup) {
    let found = undefined;
    let iterator = 0;
    const ammoTypes = Object.keys(this._ammo);
    while (!found) {
        const ammoId = ammoTypes[iterator];
        const ammo = TEW.DATABASE.WEAPONS.AMMO_SET[ammoId];
        if (ammo.group === ammoGroup) {
            found = ammoId;
        }
        iterator++;
    }
    return found;
};
// Conditions
Game_BattlerBase.prototype.conditionStacks = function (conditionId) {
    var _a;
    return ((_a = this._conditions[conditionId]) === null || _a === void 0 ? void 0 : _a.stacks) || 0;
};
Game_BattlerBase.prototype.hasCondition = function (conditionId) {
    return this.conditionStacks(conditionId) > 0;
};
Game_BattlerBase.prototype.addCondition = function (conditionId, stacks = 1, entangledStrength = undefined) {
    const condition = TEW.DATABASE.CONDITIONS[conditionId];
    if (!condition)
        return;
    const current = this.conditionStacks(conditionId);
    const max = condition.maxStacks === Infinity ? Number.MAX_SAFE_INTEGER : condition.maxStacks;
    this._conditions[conditionId] = {
        stacks: Math.min(current + stacks, max),
        entangledStrength
    };
};
Game_BattlerBase.prototype.removeCondition = function (conditionId, stacks = 1) {
    const current = this.conditionStacks(conditionId);
    const next = current - stacks;
    if (next <= 0) {
        this.clearCondition(conditionId);
    }
    else {
        this._conditions[conditionId].stacks = next;
    }
};
Game_BattlerBase.prototype.clearCondition = function (conditionId) {
    delete this._conditions[conditionId];
    $gameMessage.add(`You lost condition: ${TEW.DATABASE.CONDITIONS[conditionId].name}.`);
    const condition = TEW.DATABASE.CONDITIONS[conditionId];
    if (condition.fatiguedOnRemoval) {
        this.addCondition("FATIGUED" /* ConditionId.FATIGUED */);
    }
    if (condition.proneOnRemoval) {
        this.addCondition("PRONE" /* ConditionId.PRONE */);
    }
};
Game_BattlerBase.prototype.clearAllConditions = function () {
    this._conditions = {};
};
Game_BattlerBase.prototype.applyConditionsOnTurnStart = function () {
    let totalDamage = 0;
    let conditionId;
    console.log(this.name(), this._conditions);
    for (conditionId in this._conditions) {
        const condition = TEW.DATABASE.CONDITIONS[conditionId];
        if (!condition)
            continue;
        // Damage over time
        if (condition.damageOverTime) {
            let damage = this.conditionStacks(conditionId);
            if (conditionId === "ABLAZE" /* ConditionId.ABLAZE */) {
                damage += Math.floor(Math.random() * 10);
                damage -= this.lowestArmorPointsByLocation() + this.paramBonus("TOUG" /* Stat.TOUG */);
                damage = Math.max(damage, 1);
            }
            $gameMessage.add(`You ${condition.message} for ${damage} damage.`);
            totalDamage += damage;
        }
        // Restrictive conditions
        if (condition.blocksMovement) {
            this._moveCount = 0;
        }
        if (condition.blocksAction) {
            this._actionCount = 0;
        }
        // Auto removal
        if (condition.removal === 0 /* ConditionRemoval.AUTO */) {
            this.removeCondition(conditionId);
        }
        else if (condition.removal === 1 /* ConditionRemoval.TEST */) {
            let removalTestResult;
            if (condition.id === "ENTANGLED" /* ConditionId.ENTANGLED */) {
                removalTestResult = TEW.DICE.opposedTest(this.paramByName("STRG" /* Stat.STRG */), this._conditions[conditionId].entangledStrength);
            }
            else {
                removalTestResult = TEW.DICE.skillTest(this, condition.removalTest.comp, 0, false);
            }
            if (removalTestResult.success) {
                this.removeCondition(conditionId, removalTestResult.sl + 1);
            }
        }
    }
    if (totalDamage > 0) {
        this.gainHp(-totalDamage); // TODO use damage execution to trigger animations and shit (+ toughness)
    } // TODO special effects for poison and bleeding when 0 HP remain
    return totalDamage;
};
Game_BattlerBase.prototype.totalConditionModifier = function (compId = 'NONE') {
    return Object.keys(this._conditions)
        .map(conditionId => TEW.DATABASE.CONDITIONS[conditionId].testModifier)
        .filter(testModifier => testModifier && (testModifier.comps === undefined || testModifier.comps.includes(compId)))
        .reduce((acc, testModifier) => acc + testModifier.mod, 0);
};
Game_BattlerBase.prototype.isActionBlockedByCondition = function () {
    return Object.keys(this._conditions)
        .some(conditionId => TEW.DATABASE.CONDITIONS[conditionId].blocksAction);
};
Game_BattlerBase.prototype.isMovementBlockedByCondition = function () {
    return Object.keys(this._conditions)
        .some(conditionId => TEW.DATABASE.CONDITIONS[conditionId].blocksMovement);
};
// #endregion =========================== Game_BattlerBase ============================== //
// ============================== //
// #region ============================== Game_Interpreter ============================== //
// Game_Interpreter
Game_Interpreter.prototype.setBaseStat = function (playerName, statName, value) {
    const player = $gameActors._data[TEW.CHARACTERS.SET[playerName]];
    player._paramBase[TEW.CHARACTERS.STATS[statName]] = value;
};
Game_Interpreter.prototype.partyHasItem = function (itemId) {
    const actors = $gameParty._actors.map((id) => $gameActors.actor(id));
    for (let i = 0; i < actors.length; i++) {
        if (actors[i].hasItem(itemId)) {
            return true;
        }
    }
    return false;
};
Game_Interpreter.prototype.addItemToParty = function (itemId, quantity = 1) {
    const leadActor = $gameParty.leader();
    leadActor.addItem(itemId, quantity);
};
Game_Interpreter.prototype.removeItemFromParty = function (itemId, quantity = 1) {
    const actors = $gameParty._actors.map((id) => $gameActors.actor(id));
    let totalRemoved = 0;
    for (let i = 0; i < actors.length; i++) {
        const quantityToRemove = Math.min(actors[i].item(itemId), quantity);
        if (quantityToRemove > 0) {
            actors[i].removeItem(itemId, quantityToRemove);
            totalRemoved += quantityToRemove;
            if (totalRemoved >= quantity) {
                break;
            }
        }
    }
};
// #endregion =========================== Game_Interpreter ============================== //
// ============================== //
// #region ============================== TextManager ============================== //
// Text
TextManager.param = function (paramId) {
    return TEW.CHARACTERS.STATS_VERBOSE[paramId];
};
// #endregion =========================== TextManager ============================== //
// ============================== //

