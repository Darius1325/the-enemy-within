// $PluginCompiler TEW_Base.js

import {AmmunitionGroup, ArmorGroup, BodyLocation, ConditionId, ConditionRemoval, Stat, StatName, WeaponGroup} from "../../_types/enum";
import TEW from "../../_types/tew";
import {Armor} from "../../_types/armor";

export type ActorWeapon = {
    id: string;
    isInMainHand: boolean;
    isInSecondHand: boolean;
    isReloadable: boolean;
    ammo: number;
    ammoType: AmmunitionGroup;
};

export interface Game_BattlerBase {
    _paramBase: [number, number, number, number, number, number, number, number, number, number, number];
    _competences: number[];
    _spells: string[];
    _talents: Record<string, number>;
    _items: Record<string, number>;
    _weapons: ActorWeapon[];
    _armors: string[];
    _equippedArmors: string[];
    _ammo: Record<string, number>;
    _conditions: Record<ConditionId, { stacks: number; entangledStrength?: number }>;

    mhp: number;
    weas: number;
    bals: number;
    strg: number;
    toug: number;
    init: number;
    agil: number;
    dext: number;
    intl: number;
    will: number;
    felw: number;

    param: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;
    paramByName: (paramName: StatName) => number;
    paramBonus: (paramName: StatName) => number;

    compPlus: (compId: string) => number;
    comp: (compId: string) => number;
    compWithModifiers: (compId: string) => number;
    anyCompOfCategory: (compCategory: string) => string | null;
    hasComp: (compId: string) => boolean;
    hasAnyCompOfCategory: (compCategory: string) => boolean;
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
    equippedWeapon: () => ActorWeapon;
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
    armorPointsAtLocation: (location: BodyLocation, ignoredAP: number, ignoreMetalArmor: boolean) => number;
    lowestArmorPointsByLocation: () => number;
    sortArmors: () => void;
    sortEquippedArmors: () => void;

    ammo: (ammoId: string) => number;
    ammoFromGroup: (ammoGroup: AmmunitionGroup) => number;
    hasAmmo: (ammoId: string) => boolean;
    addAmmo: (ammoId: string, quantity?: number) => void;
    removeAmmo: (ammoId: string, quantity?: number) => void;
    firstAmmoFromGroup: (ammoGroup: AmmunitionGroup) => string;

    conditionStacks: (conditionId: ConditionId) => number;
    hasCondition: (conditionId: ConditionId) => boolean;
    addCondition: (conditionId: ConditionId, stacks: number, entangledStrength?: number) => void;
    removeCondition: (conditionId: ConditionId, stacks: number) => void;
    clearCondition: (conditionId: ConditionId) => void;
    clearAllConditions: () => void;
    applyConditionsOnTurnStart: () => number;
    totalConditionModifier: (compId: string) => number;
    isMovementBlockedByCondition: () => boolean;
    isActionBlockedByCondition: () => boolean;
}

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
TEW.MEMORY.battlerBaseInit = Game_BattlerBase.prototype.initialize;
Game_BattlerBase.prototype.initialize = function() {
    TEW.MEMORY.battlerBaseInit.call(this);
    this._paramBase = [1,0,0,0,0,0,0,0,0,0,0];
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

Game_BattlerBase.prototype.calculateMHP = function() {
    var isHardy = this.hasTalent("Hardy");
    return Math.floor(this.paramByName("TOUG") / 10) * 2 // (TOUG / 10) * 2
        + Math.floor(this.paramByName("STRG") / 10)      // + (STRG / 10)
        + Math.floor(this.paramByName("WILL") / 10)      // + (WILL / 10)
        + (isHardy ? Math.floor(this.paramByName("TOUG") / 10) : 0) // + (TOUG / 10) if Hardy talent
}


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

Game_BattlerBase.prototype.paramBonus = function(paramName: StatName) {
    return Math.floor(this.param(TEW.CHARACTERS.STATS[paramName.toLowerCase()]) / 10);
};

// Competences

Game_BattlerBase.prototype.compPlus = function(compId: string) {
    const compValue = this._competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)];
    return compValue === -1 ? 0 : compValue;
};

Game_BattlerBase.prototype.comp = function(compId: string) {
    const associatedStat = TEW.DATABASE.COMPS.SET[compId].stat;
    return this.compPlus(compId) + this.paramByName(associatedStat);
};

Game_BattlerBase.prototype.compWithModifiers = function(compId: string) {
    let conditionId: string;
    let compFinal: number;
    const associatedStat = TEW.DATABASE.COMPS.SET[compId].stat;
    compFinal = this.compPlus(compId) + this.paramByName(associatedStat);
    for (conditionId in this._conditions) {
        const condition = TEW.DATABASE.CONDITIONS[conditionId];
        if (!condition) continue;
        if (condition.testModifier && (condition.testModifier.comps === undefined || condition.testModifier.comps.includes(conditionId))) {
            compFinal += condition.testModifier.mod;
        }
    }
    return compFinal;
};

Game_BattlerBase.prototype.anyCompOfCategory = function(compCategory: string) {
    const comps = TEW.DATABASE.COMPS.IDS
        .filter(compId => compId.startsWith(compCategory))
        .filter(compId => this.hasComp(compId));
    if (comps.length > 0) {
        return comps[0];
    }
    return null;
};

Game_BattlerBase.prototype.hasComp = function(compId: string) {
    if (TEW.DATABASE.COMPS.SET[compId].isBase) {
        return true;
    }
    return this._competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] !== -1;
};

Game_BattlerBase.prototype.hasAnyCompOfCategory = function(compCategory: string) {
    return this.anyCompOfCategory(compCategory) !== null;
};

Game_BattlerBase.prototype.addComp = function(compId: string, value: number) {
    this._competences[TEW.DATABASE.COMPS.IDS.indexOf(compId)] += value;
    // this.refresh();
};

// Talents

Game_BattlerBase.prototype.talent = function(talentId: string) {
    return this._talents[talentId] || 0;
};

Game_BattlerBase.prototype.allTalents = function() {
    return Object.keys(this._talents);
};

Game_BattlerBase.prototype.hasTalent = function(talentId: string) {
    return this._talents[talentId] > 0;
};

Game_BattlerBase.prototype.addTalent = function(talentId: string) {
    this._talents[talentId] = this.talent(talentId) + 1;
};

// Spells

Game_BattlerBase.prototype.hasSpell = function(spellId: string) {
    return this._spells.includes(spellId);
};

Game_BattlerBase.prototype.addSpell = function(spellId: string) {
    if (!this.hasSpell(spellId)) {
        this._spells.push(spellId);
    }
};

// Items

Game_BattlerBase.prototype.item = function(itemId: string) {
    return this._items[itemId] || 0;
};

Game_BattlerBase.prototype.addItem = function(itemId: string, quantity = 1) {
    this._items[itemId] = this.item(itemId) + quantity;
}

Game_BattlerBase.prototype.removeItem = function(itemId: string, quantity = 1) {
    this._items[itemId] = this.item(itemId) - quantity;
    if (this.item(itemId) <= 0) {
        delete this._items[itemId];
    }
    return itemId;
}

Game_BattlerBase.prototype.hasItem = function(itemId: string) {
    return this._items[itemId] > 0;
}

// Weapons

Game_BattlerBase.prototype.weapon = function(index: number) {
    return this._weapons[index];
}

Game_BattlerBase.prototype.mainHand = function() {
    return this._weapons.find((weapon: ActorWeapon) => weapon.isInMainHand);
}

Game_BattlerBase.prototype.secondHand = function() {
    return this._weapons.find((weapon: ActorWeapon) => weapon.isInSecondHand);
}

Game_BattlerBase.prototype.addWeapon = function(weaponId: string) {
    const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[weaponId];
    this._weapons.push({
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
    this._weapons.push(weapon);
    this.sortWeapons();
}

Game_BattlerBase.prototype.removeWeapon = function(index: number) {
    const removed = this._weapons.splice(index, 1);
    this.sortWeapons();
    return removed[0];
}

Game_BattlerBase.prototype.sortWeapons = function() {
    this._weapons = this._weapons.sort((a: ActorWeapon, b: ActorWeapon) =>
        TEW.DATABASE.WEAPONS.IDS.indexOf(a.id) - TEW.DATABASE.WEAPONS.IDS.indexOf(b.id));
}

Game_BattlerBase.prototype.hasWeaponTEW = function(weaponId: string) {
    return this._weapons.some((weapon: ActorWeapon) => weapon.id === weaponId);
}

Game_BattlerBase.prototype.equipMainHand = function(index: number) {
    this.unequipMainHand();
    this._weapons[index].isInMainHand = true;
}

Game_BattlerBase.prototype.equipSecondHand = function(index: number) {
    this.unequipSecondHand();
    this._weapons[index].isInSecondHand = true;
}

Game_BattlerBase.prototype.unequipMainHand = function() {
    this._weapons.forEach((weapon: ActorWeapon) => {
        weapon.isInMainHand = false;
    });
}

Game_BattlerBase.prototype.unequipSecondHand = function() {
    this._weapons.forEach((weapon: ActorWeapon) => {
        weapon.isInSecondHand = false;
    });
}

// TODO ???
Game_BattlerBase.prototype.equippedWeapon = function() {
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
Game_BattlerBase.prototype.addArmor = function(armorId: string) {
    this._armors.push(armorId);
    this.sortArmors();
};

Game_BattlerBase.prototype.removeArmor = function(armorId: string) {
    const removed = this._armors.splice(this._armors.indexOf(armorId), 1);
    this.sortArmors();
    return removed[0];
};

Game_BattlerBase.prototype.hasArmorTEW = function(armorId: string) {
    return this._armors.some((armor: string) => armor === armorId);
};

Game_BattlerBase.prototype.hasArmorEquipped = function(armorId: string) {
    return this._equippedArmors.some((armor: string) => armor === armorId);
};

Game_BattlerBase.prototype.equipArmor = function(armorId: string) {
    this._equippedArmors.push(armorId);
    this._armors.splice(this._armors.indexOf(armorId), 1);
    this.sortEquippedArmors();
};

Game_BattlerBase.prototype.unequipArmor = function(armorId: string) {
    this._armors.push(armorId);
    this._equippedArmors.splice(this._equippedArmors.indexOf(armorId), 1);
    this.sortArmors();
};

Game_BattlerBase.prototype.unequipArmors = function(armorIds: string[]) {
    armorIds.forEach(id => {
        this._armors.push(id)
        this._equippedArmors.splice(this._equippedArmors.indexOf(id), 1);
    });
    this.sortArmors();
};

Game_BattlerBase.prototype.armorsAtLocation = function(location: BodyLocation) {
    return this._equippedArmors.map((armor: string) => TEW.DATABASE.ARMORS.SET[armor])
        .filter((armor: Armor) => armor.locations.includes(location));
};

Game_BattlerBase.prototype.armorsAtLocations = function(locations: BodyLocation[]) {
    return this._equippedArmors.map((armor: string) => TEW.DATABASE.ARMORS.SET[armor])
        .filter((armor: Armor) => armor.locations.some(location => locations.includes(location)));
};

// Use ignoredAP = -1 to ignore all AP
Game_BattlerBase.prototype.armorPointsAtLocation = function(location: BodyLocation, ignoredAP = 0, ignoreMetalArmor = false) {
    let armors: Armor[] = this.armorsAtLocation(location);
    const sumArmorPoints = (armors: Armor[]) => armors.reduce((acc: number, armor) => acc + armor.ap, 0);

    if (ignoreMetalArmor) {

        const nonMetallicArmors = armors.filter(armor =>
            ![ArmorGroup.BREASTPLATE, ArmorGroup.PLATE, ArmorGroup.CHAINMAIL].includes(armor.group));

        if (ignoredAP === -1) { // ignore all metal armor
            return sumArmorPoints(nonMetallicArmors);

        } else if (ignoredAP > 0) { // ignore only some metal armor points
            const metallicArmors = armors.filter(armor =>
                armor.group === ArmorGroup.BREASTPLATE ||
                armor.group === ArmorGroup.CHAINMAIL ||
                armor.group === ArmorGroup.PLATE);
            return sumArmorPoints(nonMetallicArmors)
                + Math.max(0, sumArmorPoints(metallicArmors) - ignoredAP);
        }
    } else {
        return Math.max(0, sumArmorPoints(armors) - ignoredAP);
    }
};

Game_BattlerBase.prototype.lowestArmorPointsByLocation = function() {
    let aggregator: Record<number, number> = {};
    aggregator[BodyLocation.ARMS] = 0;
    aggregator[BodyLocation.LEGS] = 0;
    aggregator[BodyLocation.HEAD] = 0;
    aggregator[BodyLocation.BODY] = 0;
    this._equippedArmors.map((armor: string) => TEW.DATABASE.ARMORS.SET[armor])
        .reduce((agg: Record<BodyLocation, number>, armor: Armor) => {
            armor.locations.forEach(location => agg[location] += armor.ap);
        }, aggregator);
    return Math.min(aggregator[BodyLocation.ARMS],
        aggregator[BodyLocation.LEGS],
        aggregator[BodyLocation.HEAD],
        aggregator[BodyLocation.BODY]);
};

Game_BattlerBase.prototype.sortArmors = function() {
    this._armors = this._armors.sort((a: string, b: string) =>
        TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
};

Game_BattlerBase.prototype.sortEquippedArmors = function() {
    this._equippedArmors = this._equippedArmors.sort((a: string, b: string) =>
        TEW.DATABASE.ARMORS.IDS.indexOf(a) - TEW.DATABASE.ARMORS.IDS.indexOf(b));
};


// Ammo
Game_BattlerBase.prototype.ammo = function(ammoId: string) {
    return this._ammo[ammoId] || 0;
};

Game_BattlerBase.prototype.ammoFromGroup = function(ammoGroup: AmmunitionGroup) {
    let total = 0;
    for (let ammoId in this._ammo) {
        const ammo = TEW.DATABASE.WEAPONS.AMMO_SET[ammoId];
        if (ammo.group === ammoGroup) {
            total +=  this.ammo(ammoId);
        }
    }
    return total;
};

Game_BattlerBase.prototype.addAmmo = function(ammoId : string, quantity = 1) {
    this._ammo[ammoId] = this.ammo(ammoId) + quantity;
};

Game_BattlerBase.prototype.removeAmmo = function(ammoId: string, quantity = 1) {
    this._ammo[ammoId] = this.ammo(ammoId) - quantity;
    if (this.ammo(ammoId) <= 0) {
        delete this._ammo[ammoId];
    }
    return ammoId;
};

Game_BattlerBase.prototype.hasAmmo = function(ammoId : string) {
    return this._ammo[ammoId] > 0;
};

Game_BattlerBase.prototype.firstAmmoFromGroup = function(ammoGroup: AmmunitionGroup) {
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
Game_BattlerBase.prototype.conditionStacks = function(conditionId: ConditionId): number {
    return this._conditions[conditionId]?.stacks || 0;
};

Game_BattlerBase.prototype.hasCondition = function(conditionId: ConditionId): boolean {
    return this.conditionStacks(conditionId) > 0;
};

Game_BattlerBase.prototype.addCondition = function(conditionId: ConditionId, stacks = 1, entangledStrength = undefined): void {
    const condition = TEW.DATABASE.CONDITIONS[conditionId];
    if (!condition) return;

    const current = this.conditionStacks(conditionId);
    const max = condition.maxStacks === Infinity ? Number.MAX_SAFE_INTEGER : condition.maxStacks;
    this._conditions[conditionId] = {
        stacks: Math.min(current + stacks, max),
        entangledStrength
    };
};

Game_BattlerBase.prototype.removeCondition = function(conditionId: ConditionId, stacks: number = 1): void {
    const current = this.conditionStacks(conditionId);
    const next = current - stacks;
    if (next <= 0) {
        this.clearCondition(conditionId);
    } else {
        this._conditions[conditionId].stacks = next;
    }
};

Game_BattlerBase.prototype.clearCondition = function(conditionId: ConditionId): void {
    delete this._conditions[conditionId];
    $gameMessage.add(`You lost condition: ${TEW.DATABASE.CONDITIONS[conditionId].name}.`);
    const condition = TEW.DATABASE.CONDITIONS[conditionId];
    if (condition.fatiguedOnRemoval) {
        this.addCondition(ConditionId.FATIGUED);
    }
    if (condition.proneOnRemoval) {
        this.addCondition(ConditionId.PRONE);
    }
};

Game_BattlerBase.prototype.clearAllConditions = function(): void {
    this._conditions = {};
};

Game_BattlerBase.prototype.applyConditionsOnTurnStart = function(): number {
    let totalDamage = 0;
    let conditionId: string;
    console.log(this.name(), this._conditions);

    for (conditionId in this._conditions) {
        const condition = TEW.DATABASE.CONDITIONS[conditionId];
        if (!condition) continue;

        // Damage over time
        if (condition.damageOverTime) {
            let damage = this.conditionStacks(conditionId);
            if (conditionId === ConditionId.ABLAZE) {
                damage += Math.floor(Math.random() * 10);
                damage -= this.lowestArmorPointsByLocation() + this.paramBonus(Stat.TOUG);
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
        if (condition.removal === ConditionRemoval.AUTO) {
            this.removeCondition(conditionId);
        } else if (condition.removal === ConditionRemoval.TEST) {
            let removalTestResult: { success: boolean; sl: number; };
            if (condition.id === ConditionId.ENTANGLED) {
                removalTestResult = TEW.DICE.opposedTest(this.paramByName(Stat.STRG), this._conditions[conditionId].entangledStrength);
            } else {
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

Game_BattlerBase.prototype.totalConditionModifier = function(compId = 'NONE'): number {
    return Object.keys(this._conditions)
        .map(conditionId => TEW.DATABASE.CONDITIONS[conditionId].testModifier)
        .filter(testModifier => testModifier?.comps === undefined || testModifier?.comps.includes(compId))
        .reduce((acc, testModifier) => acc + testModifier.mod, 0);
};

Game_BattlerBase.prototype.isActionBlockedByCondition = function(): boolean {
    return Object.keys(this._conditions)
        .some(conditionId => TEW.DATABASE.CONDITIONS[conditionId].blocksAction);
};

Game_BattlerBase.prototype.isMovementBlockedByCondition = function(): boolean {
    return Object.keys(this._conditions)
        .some(conditionId => TEW.DATABASE.CONDITIONS[conditionId].blocksMovement);
};
