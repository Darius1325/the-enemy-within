
var Imported = Imported || {};
Imported.TEW_Stats = true;
var TEW = TEW || {};

/*
* This plugin replaces the eight defaut character stats of RPG Maker with the eleven stats of Warhammer Fantasy.
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

TEW.CHARACTERS = TEW.CHARACTERS || {
    Cecile: 1,
    Cheplu: 2,
    Ciara: 3,
    Elja: 4,
    Gala: 5,
    Wanda: 6
};

TEW.STATS = TEW.STATS || {
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
TEW.STATS_VERBOSE = [
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
TEW.BASE_COMP_VALUES = TEW.COMPS_ARRAY.reduce((acc, compName) => {
    acc.push(TEW.COMPS[compName].isBase ? 0 : -1);
    return acc;
}, []);

// Game_BattlerBase
Object.defineProperties(Game_BattlerBase.prototype, {
    mp: { get: function() { return 0; }, configurable: true },
    tp: { get: function() { return 0; }, configurable: true },
    mmp: { get: function() { return 1; }, configurable: true }, // TODO 0
    atk: { get: function() { return 0; }, configurable: true },
    def: { get: function() { return 0; }, configurable: true },
    mat: { get: function() { return 0; }, configurable: true },
    mdf: { get: function() { return 0; }, configurable: true },
    agi: { get: function() { return 0; }, configurable: true },
    luk: { get: function() { return 0; }, configurable: true }
});

// Base stats
const battlerBaseInit = Game_BattlerBase.prototype.initialize;
Game_BattlerBase.prototype.initialize = function() {
    battlerBaseInit.call(this);
    this._paramBase = [1,0,0,0,0,0,0,0,0,0,0];
    this.competences = TEW.BASE_COMP_VALUES.slice();
    this.talents = {};
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
};

Object.defineProperties(Game_BattlerBase.prototype, {
    // Max wounds
    mhp: { get: function() { return this.param(0); }, configurable: true },
    // Weapon Skill
    weas: { get: function() { return this.param(1); }, configurable: true },
    // Ballistic Skill
    bals: { get: function() { return this.param(2); }, configurable: true },
    // Strength
    strg: { get: function() { return this.param(3); }, configurable: true },
    // Toughness
    toug: { get: function() { return this.param(4); }, configurable: true },
    // Initiative
    init: { get: function() { return this.param(5); }, configurable: true },
    // Agility
    agil: { get: function() { return this.param(6); }, configurable: true },
    // Dexterity
    dext: { get: function() { return this.param(7); }, configurable: true },
    // Intelligence
    intl: { get: function() { return this.param(8); }, configurable: true },
    // Willpower
    will: { get: function() { return this.param(9); }, configurable: true },
    // Fellowship
    felw: { get: function() { return this.param(10); }, configurable: true }
});


Game_BattlerBase.prototype.clearBuffs = function() {};

Game_BattlerBase.prototype.clearParamPlus = function() {};

Game_BattlerBase.prototype.param = function(paramId) {
    var value = this.paramBase(paramId) + this.paramPlus(paramId);
    return Math.round(value < 0 ? 0 : value);
};

Game_BattlerBase.prototype.paramByName = function(paramName) {
    return this.param(TEW.STATS[paramName]);
};

Game_BattlerBase.prototype.compPlus = function(compName) {
    const compValue = this.competences[TEW.COMPS_ARRAY.indexOf(compName)];
    return compValue === -1 ? 0 : compValue;
};

Game_BattlerBase.prototype.comp = function(compName) {
    const associatedStat = TEW.COMPS[compName].stat;
    return this.compPlus(compName) + this.paramByName(associatedStat);
};

Game_BattlerBase.prototype.hasComp = function(compName) {
    if (TEW.COMPS[compName].isBase) {
        return true;
    }
    return this.competences[TEW.COMPS_ARRAY.indexOf(compName)] !== -1;
};

Game_BattlerBase.prototype.addComp = function(compName, value) {
    this.competences[TEW.COMPS_ARRAY.indexOf(compName)] += value;
    this.refresh();
};

Game_BattlerBase.prototype.talent = function(talentName) {
    return this.talents[talentName] ?? 0;
};

Game_BattlerBase.prototype.addTalent = function(talentName) {
    this.talents[talentName] = this.talent(talentName) + 1;
};


// Game_Actor

Game_Actor.prototype.paramBase = function(paramId) {
    return this._paramBase[paramId];
};

Game_Actor.prototype.paramPlus = function(paramId) {
    return Game_Battler.prototype.paramPlus.call(this, paramId);
};


// Game_Interpreter

Game_Interpreter.prototype.setBaseStat = function(playerName, statName, value) {
    const player = $gameActors._data[TEW.CHARACTERS[playerName]];
    player._paramBase[TEW.STATS[statName]] = value;
};


// Text

TextManager.param = function(paramId) {
    return TEW.STATS_VERBOSE[paramId];
};


// Replacing HP

// TODO
Game_BattlerBase.prototype.die = function() {
    this._hp = 0;
};

// TODO
Game_BattlerBase.prototype.revive = function() {
    if (this._hp === 0) {
        this._hp = 1;
    }
};
