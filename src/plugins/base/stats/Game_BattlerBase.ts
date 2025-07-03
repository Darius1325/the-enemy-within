// $PluginCompiler TEW_Base.js

import {BodyLocation, StatName, WeaponGroup} from "../../_types/enum";
import TEW from "../../_types/tew";
import {Armor} from "../../_types/armor";

export type ActorWeapon = {
    id: string;
    isInMainHand: boolean;
    isInSecondHand: boolean;
    isReloadable: boolean;
    ammo: number;
    ammoType: string;
};

export interface Game_BattlerBase {
    _paramBase: [number, number, number, number, number, number, number, number, number, number, number];
    competences: number[];
    spells: string[];
    talents: Record<string, number>;
    items: Record<string, number>;
    weapons: {
        id: string,
        isInMainHand: boolean,
        isInSecondHand: boolean,
        ammo: number,
        ammoType: string
    }[];
    armors: string[];
    equippedArmors: string[];
    ammo: Record<string, number>;

    param: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;
    paramByName: (paramName: StatName) => number;

    compPlus: (compId: string) => number;
    comp: (compId: string) => number;
    hasComp: (compId: string) => boolean;
    addComp: (compId: string, value: number) => void;

    talent: (talentId: string) => number;
    allTalents: () => string[];
    hasTalent: (talentId: string) => boolean;
    addTalent: (talentId: string) => void;

    hasSpell: (spellId: string) => boolean;
    addSpell: (spellId: string) => void;

    item: (itemId: string) => number;
    hasItem: (itemId: string) => boolean;
    addItem: (itemId: string, quantity?: number) => void;
    removeItem: (itemId: string, quantity?: number) => string;

    weapon: (index: number) => ActorWeapon;
    mainHand: () => ActorWeapon;
    secondHand: () => ActorWeapon;
    equipMainHand: (index: number) => void;
    equipSecondHand: (index: number) => void;
    unequipMainHand: () => void;
    unequipSecondHand: () => void;
    hasWeaponTEW: (weaponId: string) => boolean;
    addWeapon: (weaponId: string) => void;
    transferWeapon: (weapon: ActorWeapon) => void;
    removeWeapon: (index: number) => ActorWeapon;

    hasArmorTEW: (armorId: string) => boolean;
    hasArmorEquipped: (armorId: string) => boolean;
    addArmor: (armorId: string) => void;
    removeArmor: (armorId: string) => string;
    equipArmor: (armorId: string) => void;
    unequipArmor: (armorId: string) => void;
    unequipArmors: (armorIds: string[]) => void;
    armorsAtLocation: (location: BodyLocation) => Armor[];
    armorsAtLocations: (locations: BodyLocation[]) => Armor[];
    sortArmors: () => void;
    sortEquippedArmors: () => void;

    ammoType: (ammoId: string) => number;
    hasAmmo: (ammoId: string) => boolean;
    addAmmo: (ammoId: string, quantity?: number) => void;
};

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
    // this.addItem("AMULET");
    // this.addItem("BOOTS");
    // this.addItem("BROOM");
    // this.addItem("WINE_GLASS");
    // this.addItem("WINE_GLASS");
    // this.addItem("WINE_GLASS");
    // this.addItem("HEARTKILL");
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

    // console.log(this);
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
    const value = this.paramBase(paramId) + this.paramPlus(paramId);
    return Math.max(0, value);
};

Game_BattlerBase.prototype.paramByName = function(paramName: StatName) {
    return this.param(TEW.CHARACTERS.STATS[paramName.toLowerCase()]);
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
    // this.refresh();
};

// Talents

Game_BattlerBase.prototype.talent = function(talentId: string) {
    return this.talents[talentId] || 0;
};

Game_BattlerBase.prototype.allTalents = function() {
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
    console.log("adding " + itemId + " to " + this.name());
    this.items[itemId] = this.item(itemId) + quantity;
}

Game_BattlerBase.prototype.removeItem = function(itemId: string, quantity = 1) {
    console.log("removing " + itemId + " from " + this.name());
    this.items[itemId] = this.item(itemId) - quantity;
    if (this.item(itemId) <= 0) {
        delete this.items[itemId];
    }
    return itemId;
}

Game_BattlerBase.prototype.hasItem = function(itemId: string) {
    return this.items[itemId] > 0;
}

// Weapons

Game_BattlerBase.prototype.weapon = function(index: number) {
    return this.weapons[index];
}

Game_BattlerBase.prototype.mainHand = function() {
    return this.weapons.find((weapon: ActorWeapon) => weapon.isInMainHand);
}

Game_BattlerBase.prototype.secondHand = function() {
    return this.weapons.find((weapon: ActorWeapon) => weapon.isInSecondHand);
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
    this.sortWeapons();
}

Game_BattlerBase.prototype.transferWeapon = function(weapon: ActorWeapon) {
    this.weapons.push(weapon);
    this.sortWeapons();
}

Game_BattlerBase.prototype.removeWeapon = function(index: number) {
    const removed = this.weapons.splice(index, 1);
    this.sortWeapons();
    return removed;
}

Game_BattlerBase.prototype.sortWeapons = function() {
    this.weapons = this.weapons.sort((a: ActorWeapon, b: ActorWeapon) =>
        TEW.DATABASE.WEAPONS.IDS.indexOf(a.id) - TEW.DATABASE.WEAPONS.IDS.indexOf(b.id));
}

Game_BattlerBase.prototype.hasWeaponTEW = function(weaponId: string) {
    return this.weapons.some((weapon: ActorWeapon) => weapon.id === weaponId);
}

Game_BattlerBase.prototype.equipMainHand = function(index: number) {
    this.unequipMainHand();
    this.weapons[index].isInMainHand = true;
}

Game_BattlerBase.prototype.equipSecondHand = function(index: number) {
    this.unequipSecondHand();
    this.weapons[index].isInSecondHand = true;
}

Game_BattlerBase.prototype.unequipMainHand = function() {
    this.weapons.forEach((weapon: ActorWeapon) => {
        weapon.isInMainHand = false;
    });
}

Game_BattlerBase.prototype.unequipSecondHand = function() {
    this.weapons.forEach((weapon: ActorWeapon) => {
        weapon.isInSecondHand = false;
    });
}

// Armors

Game_BattlerBase.prototype.addArmor = function(armorId: string) {
    this.armors.push(armorId);
    this.sortArmors();
}

Game_BattlerBase.prototype.removeArmor = function(armorId: string) {
    const removed = this.armors.splice(this.armors.indexOf(armorId), 1);
    this.sortArmors();
    return removed[0];
}

Game_BattlerBase.prototype.hasArmorTEW = function(armorId: string) {
    return this.armors.some((armor: string) => armor === armorId);
}

Game_BattlerBase.prototype.hasArmorEquipped = function(armorId: string) {
    return this.equippedArmors.some((armor: string) => armor === armorId);
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

Game_BattlerBase.prototype.unequipArmors = function(armorIds: string[]) {
    armorIds.forEach(id => {
        this.armors.push(id)
        this.equippedArmors.splice(this.equippedArmors.indexOf(id), 1);
    });
    this.sortArmors();
}

Game_BattlerBase.prototype.armorsAtLocation = function(location: BodyLocation) {
    return this.equippedArmors.map((armor: string) => TEW.DATABASE.ARMORS.SET[armor])
        .filter((armor: Armor) => armor.locations.includes(location));
}

Game_BattlerBase.prototype.armorsAtLocations = function(locations: BodyLocation[]) {
    return this.equippedArmors.map((armor: string) => TEW.DATABASE.ARMORS.SET[armor])
        .filter((armor: Armor) => armor.locations.some(location => locations.includes(location)));
}

Game_BattlerBase.prototype.sortArmors = function() {
    this.armors = this.armors.sort((a: string, b: string) =>
        TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
}

Game_BattlerBase.prototype.sortEquippedArmors = function() {
    this.equippedArmors = this.equippedArmors.sort((a: string, b: string) =>
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
