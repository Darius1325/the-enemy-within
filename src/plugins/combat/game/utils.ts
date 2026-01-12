// $PluginCompiler TEW_Combat.js 2

import TEW from "../../_types/tew";
import { ArmorGroup, WeaponGroup, WeaponQuality } from "../../_types/enum";
import {Game_Battler} from "../../../rmmv/objects/Game_Battler";
import {Game_BattlerBase} from "../../base/stats/Game_BattlerBase";
import { MeleeWeapon } from "../../_types/meleeWeapon";
import { RangedWeapon } from "../../_types/rangedWeapon";

// $StartCompilation

//-----------------------------------------------------------------------------
// Utilities

// String to boolean conversion
String.prototype.toBoolean = function() {
    const s = String(this);
    switch (s) {
        case 'false':
            return false;
        default:
            return true;
    }
};

Array.prototype.last = function() {
    return this[this.length - 1];
};

Array.prototype.addItemsAt = function(index: number, items: any[]) {
    const copy = this.slice();
    copy.splice(index, 0, ...items);
    return copy;
};

// Retrieve weapon info
TEW.COMBAT.getWeaponQualityEffects = (weapon: MeleeWeapon | RangedWeapon) => {
    let attackMod: number = 0;
    let defenceMod: number = 0;
    let slashLevel: number = 0;
    let attackBonusSL: number = 0;
    let defenceBonusSL: number = 0;
    let bonusPA: number = 0;
    let ignoredPA: number = 0;
    let effects: Partial<Record<keyof typeof WeaponQuality, boolean>> = {};
    let ignoredArmorTypes: ArmorGroup[] = [];
    weapon.qualities.forEach(quality => {
        if (quality === WeaponQuality.IMPALE) {
            effects.IMPALE = true;
        } else if (quality === WeaponQuality.DAMAGING) {
            effects.DAMAGING = true;
        } else if (quality === WeaponQuality.UNDAMAGING) {
            effects.UNDAMAGING = true;
        } else if (quality === WeaponQuality.SHIELD_1) {
            bonusPA += 1;
        } else if (quality === WeaponQuality.SHIELD_2) {
            bonusPA += 2;
        } else if (quality === WeaponQuality.SHIELD_3) {
            bonusPA += 3;
        } else if (quality === WeaponQuality.SHIELD_4) {
            bonusPA += 4;
        } else if (quality === WeaponQuality.SHIELD_5) {
            bonusPA += 5;
        } else if (quality === WeaponQuality.DEFENSIVE) {
            defenceMod += 10;
        } else if (quality === WeaponQuality.HACK) {
            ignoredPA += 1;
        } else if (quality === WeaponQuality.PENETRATING) {
            ignoredArmorTypes.push(ArmorGroup.CHAINMAIL);
            ignoredArmorTypes.push(ArmorGroup.BREASTPLATE);
            ignoredArmorTypes.push(ArmorGroup.PLATE);
            ignoredPA += 1;
        } else if (quality === WeaponQuality.PRECISE) {
            attackBonusSL += 1;
        } else if (quality === WeaponQuality.PUMMEL) {
            effects.PUMMEL = true;
        } else if (quality === WeaponQuality.SLASH_1) {
            slashLevel = 1;
        } else if (quality === WeaponQuality.SLASH_2) {
            slashLevel = 2;
        } else if (quality === WeaponQuality.UNBALANCED) {
            defenceBonusSL -= 1;
        } else if (quality === WeaponQuality.IMPACT) {
            effects.IMPACT = true;
        } else if (quality === WeaponQuality.FAST) {
            attackBonusSL += 1;
        } else if (quality === WeaponQuality.TRIP) {
            effects.TRIP = true;
        } else if (quality === WeaponQuality.ENTANGLE) {
            effects.ENTANGLE = true;
        } else if (quality === WeaponQuality.SLOW) {
            attackBonusSL -= 1;
        } else if (quality === WeaponQuality.WRAP) {
            attackBonusSL += 1;
        } else if (quality === WeaponQuality.IMPRECISE) {
            attackBonusSL -= 1;
        } else if (quality === WeaponQuality.TIRING) {
            effects.TIRING = true;
        } else if (quality === WeaponQuality.TRAP_BLADE) {
            effects.TRAP_BLADE = true;
        } else if (quality === WeaponQuality.DANGEROUS) {
            effects.DANGEROUS = true;
        } else if (quality === WeaponQuality.ACCURATE) {
            attackMod += 10;
        }
    });

    return {
        attackMod,
        defenceMod,
        attackBonusSL,
        defenceBonusSL,
        bonusPA,
        ignoredPA,
        ignoredArmorTypes,
        effects,
        slashLevel
    };
};

// Retrieve armor info // TODO
TEW.COMBAT.getArmorInfos = (armorIds: string[]) => {
    return {
        headModifier : [{
            type : ArmorGroup.PLATE, // CHAINMAIL, PLATE, BREASTPLATE
            modifier : 2
        }, {
            type : ArmorGroup.CHAINMAIL,
            modifier : 2
        }],
        bodyModifier : [{
            type : ArmorGroup.PLATE,
            modifier : 2
        }, {
            type : ArmorGroup.CHAINMAIL,
            modifier : 2
        }],
        armsModifier : [{
            type : ArmorGroup.PLATE,
            modifier : 2
        }, {
            type : ArmorGroup.CHAINMAIL,
            modifier : 2
        }],
        legsModifier : [{
            type : ArmorGroup.PLATE,
            modifier : 2
        }, {
            type : ArmorGroup.CHAINMAIL,
            modifier : 2
        }]
    };
};

// Differentiate between melee and ranged weapons
TEW.COMBAT.isMeleeWeapon = (weapon: MeleeWeapon | RangedWeapon) => {
    return weapon['range'] === undefined;
};

// Get battler's stat value for combat depending on the wielded weapon's group
TEW.COMBAT.getAttackCompOrDefault = (battler: Game_BattlerBase, weaponGroup: WeaponGroup, isMelee: boolean) => {
    const compName = (isMelee ? 'MELEE' : 'RANGED') + '_' + TEW.DATABASE.WEAPONS.GROUP_IDS[weaponGroup];
    if (battler.hasComp(compName)) {
        return {
            match: true,
            value: battler.comp(compName)
        };
    } else {
        return {
            match: false,
            value: isMelee ? battler.weas : battler.bals
        };
    }
};

// Get battler's stat value for combat depending on the wielded weapon's group
// TODO is Dodge
TEW.COMBAT.getDefenceCompOrDefault = (battler: Game_BattlerBase, weaponGroup: WeaponGroup, isMelee: boolean) => {
    const compName = isMelee ? ('MELEE' + '_' + TEW.DATABASE.WEAPONS.GROUP_IDS[weaponGroup]) : 'DODGE';
    if (battler.hasComp(compName)) {
        return {
            match: true,
            value: battler.comp(compName)
        };
    } else {
        return {
            match: false,
            value: battler.weas
        };
    }
};

// Get weapon data defined in TEW_Weapons.js from its ID
TEW.COMBAT.getWeaponFromId = (weaponId: string) => {
    const meleeWeapon = TEW.DATABASE.WEAPONS.MELEE_SET[weaponId];
    if (meleeWeapon === undefined) {
        const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[weaponId];
        if (rangedWeapon === undefined) {
            throw new Error(weaponId + ' is not a valid weapon ID');
        }
        return rangedWeapon;
    }
    return meleeWeapon;
};
