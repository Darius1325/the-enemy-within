
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

TEW.characters = TEW.characters || {
    Cecile: 1,
    Cheplu: 2,
    Ciara: 3,
    Elja: 4,
    Gala: 5,
    Wanda: 6
};

TEW.stats = TEW.stats || {
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
TEW.statsVerbose = [
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


Game_BattlerBase.prototype.clearBuffs = function() {
    this._buffs = [0,0,0,0,0,0,0,0,0,0,0];
    this._buffTurns = [0,0,0,0,0,0,0,0,0,0,0];
};

Game_BattlerBase.prototype.clearParamPlus = function() {
    this._paramPlus = [0,0,0,0,0,0,0,0,0,0,0];
};

Game_BattlerBase.prototype.param = function(paramId) {
    var value = this.paramBase(paramId) + this.paramPlus(paramId);
    return Math.round(value < 0 ? 0 : value);
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
    const player = $gameActors._data[TEW.characters[playerName]];
    player._paramBase[TEW.stats[statName]] = value;
    console.log(player.param(0));
};


// Windows

Window_Status.prototype.drawBlock3 = function(y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};

Window_Status.prototype.drawParameters = function(x, y, offset) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + lineHeight * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};


// Text

TextManager.param = function(paramId) {
    return TEW.statsVerbose[paramId];
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
