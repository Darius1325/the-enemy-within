// $PluginCompiler TEW_Combat.js 2
// $StartCompilation
//-----------------------------------------------------------------------------
// Utilities
// Retrieving Weapon info
TEW.getWeaponQualityEffects = (weaponName) => {
    const weapon = getWeaponFromName(weaponName);
    let attackMod = 0;
    let defenceMod = 0;
    let slashLevel = 0;
    let attackBonusDR = 0;
    let defenceBonusDR = 0;
    let bonusPA = 0;
    let ignoredPA = 0;
    let effects = {};
    let ignoredArmorTypes = [];
    weapon.qualities.forEach(quality => {
        if (quality === 'IMPALE') {
            effects.IMPALE = true;
        }
        else if (quality === 'DAMAGING') {
            effects.DAMAGING = true;
        }
        else if (quality === 'UNDAMAGING') {
            effects.UNDAMAGING = true;
        }
        else if (quality.startsWith('SHIELD_')) {
            bonusPA += quality.split('_')[1];
        }
        else if (quality === 'DEFENSIVE') {
            defenceMod += 10;
        }
        else if (quality === 'HACK') {
            ignoredPA += 1;
        }
        else if (quality === 'PENETRATING') {
            ignoredArmorTypes.push('CHAINMAIL');
            ignoredArmorTypes.push('BREASTPLATE');
            ignoredArmorTypes.push('PLATE');
            ignoredPA += 1;
        }
        else if (quality === 'PRECISE') {
            attackBonusDR += 1;
        }
        else if (quality === 'PUMMEL') {
            effects.PUMMEL = true;
        }
        else if (quality.startsWith('SLASH_')) {
            slashLevel = quality.split('_')[1];
        }
        else if (quality === 'UNBALANCED') {
            defenceBonusDR -= 1;
        }
        else if (quality === 'IMPACT') {
            effects.IMPACT = true;
        }
        else if (quality === 'FAST') {
            attackBonusDR += 1;
        }
        else if (quality === 'TRIP') {
            effects.TRIP = true;
        }
        else if (quality === 'ENTANGLE') {
            effects.ENTANGLE = true;
        }
        else if (quality === 'SLOW') {
            attackBonusDR -= 1;
        }
        else if (quality === 'WRAP') {
            attackBonusDR += 1;
        }
        else if (quality === 'IMPRECISE') {
            attackBonusDR -= 1;
        }
        else if (quality === 'TIRING') {
            effects.TIRING = true;
        }
        else if (quality === 'TRAP_BLADE') {
            effects.TRAP_BLADE = true;
        }
        else if (quality === 'DANGEROUS') {
            effects.DANGEROUS = true;
        }
        else if (quality === 'ACCURATE') {
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
// Retrieving Armor infos
TEW.getArmorInfos = (armorNames) => {
    return {
        headModifiers: [{
                type: 'PLATE', // CHAINMAIL, PLATE, BREASTPLATE
                modifier: 2
            }, {
                type: 'CHAINMAIL',
                modifier: 2
            }],
        bodyModifier: [{
                type: 'PLATE', // CHAINMAIL, PLATE, BREASTPLATE
                modifier: 2
            }, {
                type: 'CHAINMAIL',
                modifier: 2
            }],
        armsModifier: [{
                type: 'PLATE', // CHAINMAIL, PLATE, BREASTPLATE
                modifier: 2
            }, {
                type: 'CHAINMAIL',
                modifier: 2
            }],
        legsModifier: [{
                type: 'PLATE', // CHAINMAIL, PLATE, BREASTPLATE
                modifier: 2
            }, {
                type: 'CHAINMAIL',
                modifier: 2
            }]
    };
};
// Melee or ranged weapon
TEW.getWeaponCombatCategory = (weaponGroup) => {
    if (['BASIC', 'BRAWLING', 'CAVALRY', 'FENCING', 'FLAIL', 'PARRY', 'POLE_ARM', 'TWO_HANDED'].includes(weaponGroup)) {
        return 'MELEE';
    }
    else {
        return 'RANGED';
    }
};
// Get battler's stat value for combat depending on the wielded weapon's group
TEW.getCombatCompOrDefault = (battler, weaponGroup) => {
    const category = TEW.getWeaponCombatCategory(weaponGroup);
    const compName = category + '_' + weaponGroup;
    if (battler.hasComp(compName)) {
        return {
            match: true,
            value: battler.comp(compName)
        };
    }
    else {
        return {
            match: false,
            value: category === 'MELEE' ? battler.weas : battler.bals
        };
    }
};
// Get weapon data defined in TEW_Weapons.js from its ID
TEW.getWeaponFromName = (weaponName) => {
    const weapon = TEW.MELEE_WEAPONS[weaponName];
    if (weapon === undefined) {
        weapon = TEW.RANGED_WEAPONS[weaponName];
        if (weapon === undefined) {
            throw new Error(weaponName + ' is not a valid weapon ID');
        }
    }
    return weapon;
};
