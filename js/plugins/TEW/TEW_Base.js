// #region ============================== import ============================== //
var Imported = Imported || {};
Imported.TEW_Base = true;
var TEW = TEW || {};
TEW.DICE = TEW.DICE || {};
TEW.CHARACTERS = TEW.CHARACTERS || {};
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
    if (successRollPlayer && criticalPlayer) {
        success = true;
    }
    else if (successRollNpc && criticalNPC) {
        success = false;
    }
    else if (slPlayer > slNPC) {
        success = true;
    }
    else if (slNPC > slPlayer) {
        success = false;
    }
    else {
        success = (maxPartySkill >= skillValueNPC);
    }
    return {
        sl: slPlayer - slNPC,
        success,
        criticalPlayer
    };
};
// Combat opposed test
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
    }, 2000);
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
    this.contents.drawDie(0, 1, this._tens, 'black', 'darkgreen');
    this.contents.drawDie(100, 1, this._units, 'black', 'darkgreen');
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
// #region ============================== Game_Actor ============================== //
// Game_Actor
Game_Actor.prototype.paramBase = function (paramId) {
    return this._paramBase[paramId];
};
Game_Actor.prototype.paramPlus = function (paramId) {
    return Game_Battler.prototype.paramPlus.call(this, paramId);
};

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
const battlerBaseInit = Game_BattlerBase.prototype.initialize;
Game_BattlerBase.prototype.initialize = function () {
    battlerBaseInit.call(this);
    this._paramBase = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.competences = TEW.CHARACTERS.BASE_COMP_VALUES.slice();
    this.spells = [];
    this.talents = {}; // ID: level
    this.items = {}; // ID: quantity
    this.weapons = []; // [{ id: id, isInMainHand: boolean, isInSecondHand: boolean, ammo: quantity, ammoType: id }]
    this.armors = [];
    this.equippedArmors = [];
    this.ammo = []; // ID: quantity
    // temp
    this.competences[8] = 2;
    this.competences[9] = 2;
    this.competences[10] = 2;
    this.competences[11] = 2;
    this.competences[12] = 2;
    this.competences[13] = 2;
    this.competences[0] = 2;
    this.competences[1] = 2;
    this.competences[2] = 2;
    this.competences[3] = 2;
    this.competences[4] = 2;
    this.competences[5] = 2;
    this.competences[6] = 2;
    this.competences[7] = 2;
    this.competences[14] = 2;
    // temp Talents
    this.addTalent("ACCURATE_SHOT");
    this.addTalent("ACCURATE_SHOT");
    this.addTalent("WEALTHY");
    // temp Spells
    this.addSpell("AETHYRIC_ARMS");
    this.addSpell("DART");
    this.addSpell("BLAST");
    this.addSpell("MUNDANE_AURA");
    this.addSpell("PURGE");
    // temp Items
    this.addItem("HEARTKILL");
    this.addItem("HEARTKILL");
    this.addItem("HEARTKILL");
    this.addItem("HEARTKILL");
    this.addItem("HEARTKILL");
    this.addItem("AMULET");
    // this.addItem("BOOTS");
    // this.addItem("BROOM");
    // this.addItem("WINE_GLASS");
    // this.addItem("WINE_GLASS");
    // this.addItem("WINE_GLASS");
    // this.addItem("BOOTS");
    // this.addItem("LEAFLET");
    // this.addItem("BOOTS");
    // this.addItem("LEAFLET");
    // this.addItem("ROBES_STANDARD");
    // this.addItem("WINE_GLASS");
    // this.addItem("ROBES_ELABORATE");
    // temp Weapons
    this.addWeapon("AXE");
    // this.addWeapon("SHIELD");
    // this.addWeapon("CLUB");
    // this.addWeapon("CANE_PISTOL");
    // this.addWeapon("CANE_PISTOL");
    // this.addWeapon("HOCHLAND_LONG_RIFLE");
    // this.equipMainHand(0);
    // this.equipSecondHand(2);
    // temp Armor
    this.addArmor("SOFT_KIT");
    this.addArmor("SALLET");
    this.addArmor("CHAINMAIL_COAT");
    this.addArmor("BRACERS");
    this.addArmor("BRACERS");
    this.equipArmor("SOFT_KIT");
    this.equipArmor("CHAINMAIL_COAT");
    // temp Ammo
    this.addAmmo("ARROW", 64);
    this.addAmmo("LEAD_BULLET", 98);
    this.addAmmo("BULLET_AND_POWDER", 50);
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
// Competences
Game_BattlerBase.prototype.compPlus = function (compId) {
    const compValue = this.competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)];
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
    return this.competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] !== -1;
};
Game_BattlerBase.prototype.addComp = function (compId, value) {
    this.competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] += value;
    // this.refresh();
};
// Talents
Game_BattlerBase.prototype.talent = function (talentId) {
    return this.talents[talentId] || 0;
};
Game_BattlerBase.prototype.allTalents = function () {
    return Object.keys(this.talents);
};
Game_BattlerBase.prototype.hasTalent = function (talentId) {
    return this.talents[talentId] > 0;
};
Game_BattlerBase.prototype.addTalent = function (talentId) {
    this.talents[talentId] = this.talent(talentId) + 1;
};
// Spells
Game_BattlerBase.prototype.hasSpell = function (spellId) {
    return this.spells.includes(spellId);
};
Game_BattlerBase.prototype.addSpell = function (spellId) {
    if (!this.hasSpell(spellId)) {
        this.spells.push(spellId);
    }
};
// Items
Game_BattlerBase.prototype.item = function (itemId) {
    return this.items[itemId] || 0;
};
Game_BattlerBase.prototype.addItem = function (itemId, quantity = 1) {
    this.items[itemId] = this.item(itemId) + quantity;
};
Game_BattlerBase.prototype.removeItem = function (itemId, quantity = 1) {
    this.items[itemId] = this.item(itemId) - quantity;
    if (this.item(itemId) <= 0) {
        delete this.items[itemId];
    }
    return itemId;
};
Game_BattlerBase.prototype.hasItem = function (itemId) {
    return this.items[itemId] > 0;
};
// Weapons
Game_BattlerBase.prototype.weapon = function (index) {
    return this.weapons[index];
};
Game_BattlerBase.prototype.mainHand = function () {
    return this.weapons.find((weapon) => weapon.isInMainHand);
};
Game_BattlerBase.prototype.secondHand = function () {
    return this.weapons.find((weapon) => weapon.isInSecondHand);
};
Game_BattlerBase.prototype.addWeapon = function (weaponId) {
    const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[weaponId];
    this.weapons.push({
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
    this.weapons.push(weapon);
    this.sortWeapons();
};
Game_BattlerBase.prototype.removeWeapon = function (index) {
    const removed = this.weapons.splice(index, 1);
    this.sortWeapons();
    return removed;
};
Game_BattlerBase.prototype.sortWeapons = function () {
    this.weapons = this.weapons.sort((a, b) => TEW.DATABASE.WEAPONS.IDS.indexOf(a.id) - TEW.DATABASE.WEAPONS.IDS.indexOf(b.id));
};
Game_BattlerBase.prototype.hasWeaponTEW = function (weaponId) {
    return this.weapons.some((weapon) => weapon.id === weaponId);
};
Game_BattlerBase.prototype.equipMainHand = function (index) {
    this.unequipMainHand();
    this.weapons[index].isInMainHand = true;
};
Game_BattlerBase.prototype.equipSecondHand = function (index) {
    this.unequipSecondHand();
    this.weapons[index].isInSecondHand = true;
};
Game_BattlerBase.prototype.unequipMainHand = function () {
    this.weapons.forEach((weapon) => {
        weapon.isInMainHand = false;
    });
};
Game_BattlerBase.prototype.unequipSecondHand = function () {
    this.weapons.forEach((weapon) => {
        weapon.isInSecondHand = false;
    });
};
// Armors
Game_BattlerBase.prototype.addArmor = function (armorId) {
    this.armors.push(armorId);
    this.sortArmors();
};
Game_BattlerBase.prototype.removeArmor = function (armorId) {
    const removed = this.armors.splice(this.armors.indexOf(armorId), 1);
    this.sortArmors();
    return removed[0];
};
Game_BattlerBase.prototype.hasArmorTEW = function (armorId) {
    return this.armors.some((armor) => armor === armorId);
};
Game_BattlerBase.prototype.hasArmorEquipped = function (armorId) {
    return this.equippedArmors.some((armor) => armor === armorId);
};
Game_BattlerBase.prototype.equipArmor = function (armorId) {
    this.equippedArmors.push(armorId);
    this.armors.splice(this.armors.indexOf(armorId), 1);
    this.sortEquippedArmors();
};
Game_BattlerBase.prototype.unequipArmor = function (armorId) {
    this.armors.push(armorId);
    this.equippedArmors.splice(this.equippedArmors.indexOf(armorId), 1);
    this.sortArmors();
};
Game_BattlerBase.prototype.unequipArmors = function (armorIds) {
    armorIds.forEach(id => {
        this.armors.push(id);
        this.equippedArmors.splice(this.equippedArmors.indexOf(id), 1);
    });
    this.sortArmors();
};
Game_BattlerBase.prototype.armorsAtLocation = function (location) {
    return this.equippedArmors.map((armor) => TEW.DATABASE.ARMORS.SET[armor])
        .filter((armor) => armor.locations.includes(location));
};
Game_BattlerBase.prototype.armorsAtLocations = function (locations) {
    return this.equippedArmors.map((armor) => TEW.DATABASE.ARMORS.SET[armor])
        .filter((armor) => armor.locations.some(location => locations.includes(location)));
};
Game_BattlerBase.prototype.sortArmors = function () {
    this.armors = this.armors.sort((a, b) => TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
};
Game_BattlerBase.prototype.sortEquippedArmors = function () {
    this.equippedArmors = this.equippedArmors.sort((a, b) => TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
};
// Ammo
Game_BattlerBase.prototype.ammoType = function (ammoId) {
    return this.ammo[ammoId] || 0;
};
Game_BattlerBase.prototype.addAmmo = function (ammoId, quantity = 1) {
    this.ammo[ammoId] = this.ammoType(ammoId) + quantity;
};
Game_BattlerBase.prototype.hasAmmo = function (ammoId) {
    return this.ammo[ammoId] > 0;
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

