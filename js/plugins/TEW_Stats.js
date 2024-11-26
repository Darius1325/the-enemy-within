
var Imported = Imported || {};
Imported.TEW_Stats = true;
var TEW = TEW || {};

/*
* This plugin replaces the eight defaut character stats of RPG Maker with the eleven stats of Warhammer Fantasy.
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

TEW.stats = TEW.stats || {
    weas: 0,
    bals: 1,
    strg: 2,
    toug: 3,
    init: 4,
    agil: 5,
    dext: 6,
    intl: 7,
    will: 8,
    felw: 9
};

// Game_BattlerBase
Object.defineProperties(Game_BattlerBase.prototype, {
    // hp: { get: function() { return 0; }, configurable: true },
    // mp: { get: function() { return 0; }, configurable: true },
    // tp: { get: function() { return 0; }, configurable: true },
    mhp: { get: function() { return 100; }, configurable: true },
    mmp: { get: function() { return 100; }, configurable: true },
    atk: { get: function() { return 0; }, configurable: true },
    def: { get: function() { return 0; }, configurable: true },
    mat: { get: function() { return 0; }, configurable: true },
    mdf: { get: function() { return 0; }, configurable: true },
    agi: { get: function() { return 0; }, configurable: true },
    luk: { get: function() { return 0; }, configurable: true }
});

Object.defineProperties(Game_BattlerBase.prototype, {
    // Weapon Skill
    weas: { get: function() { return 10; }, configurable: true },
    // Ballistic Skill
    bals: { get: function() { return 20; }, configurable: true },
    // Strength
    strg: { get: function() { return 50; }, configurable: true },
    // Toughness
    toug: { get: function() { return 100; }, configurable: true },
    // Initiative
    init: { get: function() { return 0; }, configurable: true },
    // Agility
    agil: { get: function() { return this.param(5); }, configurable: true },
    // Dexterity
    dext: { get: function() { return this.param(6); }, configurable: true },
    // Intelligence
    intl: { get: function() { return this.param(7); }, configurable: true },
    // Willpower
    will: { get: function() { return this.param(8); }, configurable: true },
    // Fellowship
    felw: { get: function() { return this.param(9); }, configurable: true }
});


Game_BattlerBase.prototype.clearBuffs = function() {
    this._buffs = [0,0,0,0,0,0,0,0,0,0];
    this._buffTurns = [0,0,0,0,0,0,0,0,0,0];
};

Game_BattlerBase.prototype.clearParamPlus = function() {
    this._paramPlus = [0,0,0,0,0,0,0,0,0,0];
};

Game_BattlerBase.prototype.paramMin = function(paramId) {
    return 0;
};

Game_BattlerBase.prototype.paramRate = function(paramId) {
    return 0;
};




// Game_BattlerBase.prototype.die = function() {
//     this._hp = 0;
//     this.clearStates();
//     this.clearBuffs();
// };

// Game_BattlerBase.prototype.revive = function() {
//     if (this._hp === 0) {
//         this._hp = 1;
//     }
// };



// Game_Interpreter

Game_Interpreter.prototype.rollD100 = function() {
    return Math.floor(Math.random() * 100);
};

Game_Interpreter.prototype.testPartySkill = function(skillName, modifier) {
    const actorSkillBaseValues = [];
    for (let i = 0; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i][skillName]);
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifier;
    console.log(maxPartySkill);

    const roll = this.rollD100();
    let success = maxPartySkill >= roll;

    let dr = Math.floor(maxPartySkill / 10) - Math.floor(roll / 10);

    if (roll <= 5) {
        success = true;
        dr = dr > 0 ? dr : 0;
    } else if (roll >= 96) {
        success = false;
        dr = dr < 0 ? dr : 0;
    }

    return {
        dr,
        success,
        critical: roll % 11 === 0 || roll === 100,
    };
};
