var Imported = Imported || {};
Imported.TEW_Constants = true;
var TEW = TEW || {};

//-----------------------------------------------------------------------------
// Utilities

// Retrieving Weapon info
TEW.getWeaponInfos = (weaponName) => {
    return {
        modifier : 20,
        modifierDR : 1,
        modifierPA : 2,
        isDamaging : false,
        isImpaling : false,
        effects : [],
        ignoredArmorType : []
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

// Retrieving Talents Infos
TEW.getTalentsInfos = (TalentNames) => {
    return {
        modifier : 0,
        modifierDR : 0
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

// Get weapon data defined in TEW_Weapons.js from EquipItem
// Weapons should be registered in RPG Maker's database with a note containing only the weapon ID
TEW.getWeaponFromEquipItem = (item) => {
    const meleeWeapon = TEW.MELEE_WEAPONS[item.note];
    if (meleeWeapon === undefined) {
        const rangedWeapon = TEW.RANGED_WEAPONS[item.note];
        if (rangedWeapon === undefined) {
            throw new Error(item.note + ' is not a valid weapon ID');
        }
        return rangedWeapon;
    }
    return meleeWeapon;
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
    // Get weapon from attacker
    //   Get CC characteristic associated with weapon
    // Get (best) weapon from defender
    //   Get CC characteristic associated with weapon
    // Check for opponent's defensive tools (shield)
    // Check attacker's talents for modifiers (make a list)
    // Check defender's talents for modifiers (make a list)
    // Check weapon effects on bonus (PRECISE)
    // Check sizes
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
