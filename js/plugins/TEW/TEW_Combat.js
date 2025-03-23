var Imported = Imported || {};
Imported.TEW_Constants = true;
var TEW = TEW || {};

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
        } else if (quality === 'DAMAGING') {
            effects.DAMAGING = true;
        } else if (quality === 'UNDAMAGING') {
            effects.UNDAMAGING = true;
        } else if (quality.startsWith('SHIELD_')) {
            bonusPA += quality.split('_')[1];
        } else if (quality === 'DEFENSIVE') {
            defenceMod += 10;
        } else if (quality === 'HACK') {
            ignoredPA += 1;
        } else if (quality === 'PENETRATING') {
            ignoredArmorTypes.push('CHAINMAIL');
            ignoredArmorTypes.push('BREASTPLATE');
            ignoredArmorTypes.push('PLATE');
            ignoredPA += 1;
        } else if (quality === 'PRECISE') {
            attackBonusDR += 1;
        } else if (quality === 'PUMMEL') {
            effects.PUMMEL = true;
        } else if (quality.startsWith('SLASH_')) {
            slashLevel = quality.split('_')[1];
        } else if (quality === 'UNBALANCED') {
            defenceBonusDR -= 1;
        } else if (quality === 'IMPACT') {
            effects.IMPACT = true;
        } else if (quality === 'FAST') {
            attackBonusDR += 1;
        } else if (quality === 'TRIP') {
            effects.TRIP = true;
        } else if (quality === 'ENTANGLE') {
            effects.ENTANGLE = true;
        } else if (quality === 'SLOW') {
            attackBonusDR -= 1;
        } else if (quality === 'WRAP') {
            attackBonusDR += 1;
        } else if (quality === 'IMPRECISE') {
            attackBonusDR -= 1;
        } else if (quality === 'TIRING') {
            effects.TIRING = true;
        } else if (quality === 'TRAP_BLADE') {
            effects.TRAP_BLADE = true;
        } else if (quality === 'DANGEROUS') {
            effects.DANGEROUS = true;
        } else if (quality === 'ACCURATE') {
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
        headModifiers : [{
            type : 'PLATE', // CHAINMAIL, PLATE, BREASTPLATE
            modifier : 2
        }, {
            type : 'CHAINMAIL',
            modifier : 2 
        }],
        bodyModifier : [{
            type : 'PLATE', // CHAINMAIL, PLATE, BREASTPLATE
            modifier : 2
        }, {
            type : 'CHAINMAIL',
            modifier : 2 
        }],
        armsModifier : [{
            type : 'PLATE', // CHAINMAIL, PLATE, BREASTPLATE
            modifier : 2
        }, {
            type : 'CHAINMAIL',
            modifier : 2 
        }],
        legsModifier : [{
            type : 'PLATE', // CHAINMAIL, PLATE, BREASTPLATE
            modifier : 2
        }, {
            type : 'CHAINMAIL',
            modifier : 2 
        }]
    };
};

// Melee or ranged weapon
TEW.getWeaponCombatCategory = (weaponGroup) => {
    if (['BASIC', 'BRAWLING', 'CAVALRY', 'FENCING', 'FLAIL', 'PARRY', 'POLE_ARM', 'TWO_HANDED'].includes(weaponGroup)) {
        return 'MELEE';
    } else {
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
    } else {
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

//-----------------------------------------------------------------------------
// Game_Action

// Applying action (damage)
Game_Action.prototype.apply = function(target) {
    var result = target.result();
    this.subject().clearResult();
    result.clear();

    // Damage calc
    //
    // Choose weapon (elsewhere)
    //   Get CC characteristic associated with weapon
    // Get (best) weapon from defender
    //   Get CC characteristic associated with weapon
    // Check for opponent's defensive tools (shield)
    // Check attacker's talents for modifiers (make a list)
    // Check defender's talents for modifiers (make a list)
    // Check weapon effects on bonus (PRECISE)
    // Check sizes
    // Check outnumberment
    // 
    // Roll dice
    //
    // Check attacker's talents on dice roll (make a list)
    // Check weapon effects on dice roll (make a list)
    // Check hit/miss
    // Check weapon effects on crit (make a list)
    // Check for crits
    // Compute damage
    //   Add weapon bonus + stat bonus + opposed DR
    //   Check location
    //   Check weapon effects based on location (make a list)
    //   Remove defender's toug + armor points
    // Lookup crit table (help me)

    result.isHit = 0;
    result.missed = false;

    if (result.isHit) {
        if (this.item().damage.type > 0) {
            var value = 4;
            this.executeDamage(target, value);
        }
        this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
    }
};

// Calculating damage value
Game_Action.prototype.makeDamageValue = function(target, critical) {
    var item = this.item();
    var baseValue = this.evalDamageFormula(target);
    var value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
    }
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};
