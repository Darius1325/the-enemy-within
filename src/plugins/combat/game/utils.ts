// $PluginCompiler TEW_Combat.js 2

import TEW from "../../_types/tew";
import { ArmorGroup, WeaponGroup, WeaponQuality } from "../../_types/enum";
import {Game_Battler} from "../../../rmmv/objects/Game_Battler";
import {Game_BattlerBase} from "../../base/stats/Game_BattlerBase";

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

// Retrieve weapon info
TEW.COMBAT.getWeaponQualityEffects = (weaponId: string) => {
    const weapon = TEW.COMBAT.getWeaponFromId(weaponId);

    let attackMod: number = 0;
    let defenceMod: number = 0;
    let slashLevel: number = 0;
    let attackBonusDR: number = 0;
    let defenceBonusDR: number = 0;
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
            attackBonusDR += 1;
        } else if (quality === WeaponQuality.PUMMEL) {
            effects.PUMMEL = true;
        } else if (quality === WeaponQuality.SLASH_1) {
            slashLevel = 1;
        } else if (quality === WeaponQuality.SLASH_2) {
            slashLevel = 2;
        } else if (quality === WeaponQuality.UNBALANCED) {
            defenceBonusDR -= 1;
        } else if (quality === WeaponQuality.IMPACT) {
            effects.IMPACT = true;
        } else if (quality === WeaponQuality.FAST) {
            attackBonusDR += 1;
        } else if (quality === WeaponQuality.TRIP) {
            effects.TRIP = true;
        } else if (quality === WeaponQuality.ENTANGLE) {
            effects.ENTANGLE = true;
        } else if (quality === WeaponQuality.SLOW) {
            attackBonusDR -= 1;
        } else if (quality === WeaponQuality.WRAP) {
            attackBonusDR += 1;
        } else if (quality === WeaponQuality.IMPRECISE) {
            attackBonusDR -= 1;
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
        attackBonusDR,
        defenceBonusDR,
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

// Get battler's stat value for combat depending on the wielded weapon's group
TEW.COMBAT.getCombatCompOrDefault = (battler: Game_BattlerBase, weaponGroup: WeaponGroup, isMelee: boolean) => {
    const compName = isMelee ? 'MELEE' : 'RANGED' + '_' + TEW.DATABASE.WEAPONS.GROUP_IDS[weaponGroup];
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
