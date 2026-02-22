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
    return Math.floor(Math.random() * (range - 1)) + 1;
};
TEW.DICE.displayDiceRoll = function (range = 100) {
    const result = TEW.DICE.roll(range);
    const windowDice = new Window_Dice(0, 0, Math.floor(result / 10), result % 10);
    SceneManager._scene.addWindow(windowDice);
    return result;
};
TEW.DICE.rollInitiative = function (actor) {
    return TEW.DICE.roll(10) + TEW.DICE.bonus(actor.paramByName("INIT"));
};
TEW.DICE.skillTest = function (actor, compId, modifier = 0, hidden = false) {
    const compValue = actor.comp(compId) + modifier;
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
            actorSkillBaseValues.push($gameActors._data[i].comp(compId));
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifier;
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
// Opposed skill tests
Game_Interpreter.prototype.opposedSkillTest = function (compIdPlayer, modifierPlayer, skillValueNPC) {
    const actorSkillBaseValues = [];
    for (let i = 1; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i].comp(compIdPlayer));
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifierPlayer;
    const rollPlayer = TEW.DICE.displayDiceRoll();
    const rollNPC = TEW.DICE.roll();
    let slPlayer = Math.floor(maxPartySkill / 10) - Math.floor(rollPlayer / 10);
    let slNPC = Math.floor(skillValueNPC / 10) - Math.floor(rollNPC / 10);
    let successRollPlayer = maxPartySkill >= rollPlayer;
    let successRollNpc = skillValueNPC >= rollNPC;
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
        successRollNpc = true;
        slNPC = slNPC < 0 ? slNPC : 0;
    }
    let criticalPlayer = rollPlayer % 11 === 0 || rollPlayer === 100;
    let criticalNPC = rollNPC % 11 === 0 || rollNPC === 100;
    let success;
    // GIGA TODO nothing is right
    if (successRollPlayer && criticalPlayer) {
        success = true;
    }
    else if (successRollNpc && criticalNPC) {
        success = false;
    }
    else if (successRollPlayer && slPlayer > slNPC) {
        success = true;
    }
    else if (slNPC > slPlayer) {
        success = false;
    }
    else {
        success = (maxPartySkill >= skillValueNPC);
    }
    console.log(`Player roll: ${rollPlayer} (SL: ${slPlayer}, Critical: ${criticalPlayer})`);
    console.log(`NPC roll: ${rollNPC} (SL: ${slNPC}, Critical: ${criticalNPC})`);
    console.log(`Opposed test result: ${success ? "Player wins" : "NPC wins"}`);
    return {
        sl: slPlayer - slNPC,
        success,
        criticalPlayer
    };
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
    // GIGA TODO nothing is right
    if (successRollAttacker && criticalAttacker) {
        success = true;
    }
    else if (successRollDefender && criticalDefender) {
        success = false;
    }
    else if (successRollAttacker && slAttacker > slDefender) {
        success = true;
    }
    else if (slDefender > slAttacker) {
        success = false;
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
    Window_Base.prototype.initialize.call(this, x, y, 240, 110); // temp !!
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
    return 100;
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
// #region ============================== Graphics ============================== //
Graphics._createGameFontLoader = function () {
    this._createFontLoader('GameFont');
    this._createFontLoader('handwritten');
};
// #endregion =========================== Graphics ============================== //
// ============================== //
// #region ============================== DataManager ============================== //
DataManager.createGameObjects = function () {
    $gameTemp = new Game_Temp();
    $gameSystem = new Game_System();
    $gameScreen = new Game_Screen();
    $gameTimer = new Game_Timer();
    $gameMessage = new Game_Message();
    $gameSwitches = new Game_Switches();
    $gameVariables = new Game_Variables();
    $gameSelfSwitches = new Game_SelfSwitches();
    $gameActors = new Game_Actors();
    $gameParty = new Game_Party();
    $gameTroop = new Game_Troop();
    $gameMap = new Game_Map();
    $gamePlayer = new Game_Player();
    $gameGlossary = new Game_Glossary();
};
DataManager.makeSaveContents = function () {
    // A save data does not contain $gameTemp, $gameMessage, and $gameTroop.
    var contents = {};
    contents.system = $gameSystem;
    contents.screen = $gameScreen;
    contents.timer = $gameTimer;
    contents.switches = $gameSwitches;
    contents.variables = $gameVariables;
    contents.selfSwitches = $gameSelfSwitches;
    contents.actors = $gameActors;
    contents.party = $gameParty;
    contents.map = $gameMap;
    contents.player = $gamePlayer;
    contents.glossary = $gameGlossary;
    return contents;
};
DataManager.extractSaveContents = function (contents) {
    $gameSystem = contents.system;
    $gameScreen = contents.screen;
    $gameTimer = contents.timer;
    $gameSwitches = contents.switches;
    $gameVariables = contents.variables;
    $gameSelfSwitches = contents.selfSwitches;
    $gameActors = contents.actors;
    $gameParty = contents.party;
    $gameMap = contents.map;
    $gamePlayer = contents.player;
    $gameGlossary = contents.glossary;
};
// #endregion =========================== DataManager ============================== //
// ============================== //
// #region ============================== Game_Glossary ============================== //
function Game_Glossary() {
    this.initialize.apply(this, arguments);
}
;
Game_Glossary.prototype.initialize = function () {
    this.clear();
};
Game_Glossary.prototype.clear = function () {
    this._data = [];
};
Game_Glossary.prototype.unlockEntry = function (id) {
    this._data.push(id);
};
Game_Glossary.prototype.unlockedEntries = function () {
    return this._data;
};
// #endregion =========================== Game_Glossary ============================== //
// ============================== //
// #region ============================== Game_Actor ============================== //
// Game_Actor
Game_Actor.prototype.initialize = function (actorId) {
    Game_Battler.prototype.initialize.call(this);
    this.setup(actorId);
    this.initTEW(actorId);
};
Game_Actor.prototype.paramBase = function (paramId) {
    return this._paramBase[paramId];
};
Game_Actor.prototype.paramPlus = function (paramId) {
    return Game_Battler.prototype.paramPlus.call(this, paramId);
};
Game_Actor.prototype.initTEW = function (actorId) {
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
        36, // INIT
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
        34, // INIT
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
Game_BattlerBase.prototype.hasComp = function (compId) {
    if (TEW.DATABASE.COMPS.SET[compId].isBase) {
        return true;
    }
    return this._competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] !== -1;
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
    return removed;
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
Game_BattlerBase.prototype.ammoType = function (ammoId) {
    return this._ammo[ammoId] || 0;
};
Game_BattlerBase.prototype.addAmmo = function (ammoId, quantity = 1) {
    this._ammo[ammoId] = this.ammoType(ammoId) + quantity;
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

