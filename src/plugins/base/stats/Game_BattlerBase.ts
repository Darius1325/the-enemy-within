// $PluginCompiler TEW_Base.js

import { WeaponGroup } from "../../types/enum";
import TEW from "../../types/TEW";

// $StartCompilation

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
    this.competences = TEW.DATABASE.CHARACTERS.BASE_COMP_VALUES.slice();
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
    this.addTalent("WEALTHY");

    // temp Spells
    this.addSpell("AETHYRIC_ARMS");

    // temp Items
    this.addItem("HEARTKILL");
    this.addItem("AMULET");
    this.addItem("BOOTS");
    this.addItem("BROOM");
    this.addItem("WINE_GLASS");
    this.addItem("WINE_GLASS");
    this.addItem("WINE_GLASS");
    this.addItem("HEARTKILL");
    this.addItem("BOOTS");
    this.addItem("LEAFLET");
    this.addItem("BOOTS");
    this.addItem("LEAFLET");
    this.addItem("ROBES_STANDARD");
    this.addItem("WINE_GLASS");
    this.addItem("ROBES_ELABORATE");

    // temp Weapons
    this.addWeapon("AXE");
    this.addWeapon("SHIELD");
    this.addWeapon("CLUB");
    this.addWeapon("CANE_PISTOL");
    this.addWeapon("CANE_PISTOL");
    this.addWeapon("HOCHLAND_LONG_RIFLE");
    this.equipMainHand(0);
    this.equipSecondHand(2);

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

    console.log(this);
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

Game_BattlerBase.prototype.param = function(paramId: number) {
    var value = this.paramBase(paramId) + this.paramPlus(paramId);
    return Math.round(value < 0 ? 0 : value);
};

Game_BattlerBase.prototype.paramByName = function(paramName: string) {
    return this.param(TEW.DATABASE.CHARACTERS.STATS[paramName]);
};

// Competences

Game_BattlerBase.prototype.compPlus = function(compId: string) {
    const compValue = this.competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)];
    return compValue === -1 ? 0 : compValue;
};

Game_BattlerBase.prototype.comp = function(compId: string) {
    const associatedStat = TEW.DATABASE.COMPS.SET[compId].stat;
    return this.compPlus(compId) + this.paramByName(associatedStat);
};

Game_BattlerBase.prototype.hasComp = function(compId: string) {
    if (TEW.DATABASE.COMPS.SET[compId].isBase) {
        return true;
    }
    return this.competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] !== -1;
};

Game_BattlerBase.prototype.addComp = function(compId: string, value: number) {
    this.competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] += value;
    this.refresh();
};

// Talents

Game_BattlerBase.prototype.talent = function(talentId: string) {
    return this.talents[talentId] || 0;
};

Game_BattlerBase.prototype.talents = function() {
    return Object.keys(this.talents);
};

Game_BattlerBase.prototype.hasTalent = function(talentId: string) {
    return this.talents[talentId] > 0;
};

Game_BattlerBase.prototype.addTalent = function(talentId: string) {
    this.talents[talentId] = this.talent(talentId) + 1;
};

// Spells

Game_BattlerBase.prototype.hasSpell = function(spellId: string) {
    return this.spells.includes(spellId);
};

Game_BattlerBase.prototype.addSpell = function(spellId: string) {
    if (!this.hasSpell(spellId)) {
        this.spells.push(spellId);
    }
};

// Items

Game_BattlerBase.prototype.item = function(itemId: string) {
    return this.items[itemId] || 0;
};

Game_BattlerBase.prototype.addItem = function(itemId: string, quantity = 1) {
    this.items[itemId] = this.item(itemId) + quantity;
}

Game_BattlerBase.prototype.hasItem = function(itemId: string) {
    return this.items[itemId] > 0;
}

// Weapons

Game_BattlerBase.prototype.weapon = function(weaponId: string) {
    return this.weapons.find(weapon => weapon.id === weaponId);
}

Game_BattlerBase.prototype.mainHand = function() {
    return this.weapons.find(weapon => weapon.isInMainHand);
}

Game_BattlerBase.prototype.secondHand = function() {
    return this.weapons.find(weapon => weapon.isInSecondHand);
}

Game_BattlerBase.prototype.addWeapon = function(weaponId: string) {
    const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[weaponId];
    this.weapons.push({
        id: weaponId,
        isInMainHand: false,
        isInSecondHand: false,
        isReloadable: rangedWeapon && (
            rangedWeapon.group === WeaponGroup.BLACKPOWDER ||
            rangedWeapon.group === WeaponGroup.ENGINEERING ||
            rangedWeapon.group === WeaponGroup.CROSSBOW),
        ammo: 0,
        ammoType: undefined // Ammo ID
    });
    this.weapons = this.weapons.sort((a, b) =>
        TEW.DATABASE.WEAPONS.IDS.indexOf(a.id) - TEW.DATABASE.WEAPONS.IDS.indexOf(b.id));
}

Game_BattlerBase.prototype.hasWeaponTEW = function(weaponId: string) {
    return this.weapons.some(weapon => weapon.id === weaponId);
}

Game_BattlerBase.prototype.equipMainHand = function(index: number) {
    this.weapons.forEach(weapon => {
        weapon.isInMainHand = false;
    });
    this.weapons[index].isInMainHand = true;
}

Game_BattlerBase.prototype.equipSecondHand = function(index: number) {
    this.weapons.forEach(weapon => {
        weapon.isInSecondHand = false;
    });
    this.weapons[index].isInSecondHand = true;
}

// Armors

Game_BattlerBase.prototype.armor = function(armorId: string){
    return this.armors.find(armor => armor.id === armorId);
}

Game_BattlerBase.prototype.addArmor = function(armorId: string) {
    this.armors.push(armorId);
    this.sortArmors();
}

Game_BattlerBase.prototype.hasArmorTEW = function(armorId: string) {
    return this.armors.some(armor => armor === armorId);
}

Game_BattlerBase.prototype.hasArmorEquipped = function(armorId: string) {
    return this.equippedArmors.some(armor => armor === armorId);
}

Game_BattlerBase.prototype.equipArmor = function(armorId: string) {
    this.equippedArmors.push(armorId);
    this.armors.splice(this.armors.indexOf(armorId), 1);
    this.sortEquippedArmors();
}

Game_BattlerBase.prototype.unequipArmor = function(armorId: string) {
    this.armors.push(armorId);
    this.equippedArmors.splice(this.equippedArmors.indexOf(armorId), 1);
    this.sortArmors();
}

Game_BattlerBase.prototype.sortArmors = function() {
    this.armors = this.armors.sort((a, b) =>
        TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
}

Game_BattlerBase.prototype.sortEquippedArmors = function() {
    this.equippedArmors = this.equippedArmors.sort((a, b) =>
        TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
}

// Ammo
Game_BattlerBase.prototype.ammoType = function(ammoId : string) {
    return this.ammo[ammoId] || 0;
};

Game_BattlerBase.prototype.addAmmo = function(ammoId : string, quantity = 1) {
    this.ammo[ammoId] = this.ammoType(ammoId) + quantity;
}

Game_BattlerBase.prototype.hasAmmo = function(ammoId : string) {
    return this.ammo[ammoId] > 0;
}
