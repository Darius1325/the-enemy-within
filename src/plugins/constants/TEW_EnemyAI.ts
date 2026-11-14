// $PluginCompiler TEW_Constants.js

// ----------------------
// Imports
// ----------------------
import { BattleDecision, CompleteBattler } from "../_types/battlerAI";
import { BattleOption, BattleTargetType, WeaponGroup } from "../_types/enum";
import { MeleeWeapon } from "../_types/meleeWeapon";
import { RangedWeapon } from "../_types/rangedWeapon";
import TEW from "../_types/tew";
import Game_Battler from "../combat/game/Game_Battler";

// ----------------------
// $StartCompilation
// ----------------------

TEW.DATABASE.NPCS = TEW.DATABASE.NPCS || {};

TEW.DATABASE.NPCS.UTILITIES = TEW.DATABASE.NPCS.UTILITIES || {};

// Get battler's stat value for combat depending on the wielded weapon's group
TEW.DATABASE.NPCS.UTILITIES.getAttackCompOrDefault = (battler: CompleteBattler, weaponGroup: WeaponGroup, isMelee: boolean): number => {
    const compId = (isMelee ? 'MELEE' : 'RANGED') + '_' + TEW.DATABASE.WEAPONS.GROUP_IDS[weaponGroup];
    console.log("weapon group: ", weaponGroup);
    console.log("comp: ", compId);
    if (battler.hasComp(compId)) {
        return battler.comp(compId)
    } else {
        return isMelee ? battler.weas : battler.bals
    }
};

TEW.DATABASE.NPCS.UTILITIES.checkMeleeWeaponEquipped = (initiator: CompleteBattler) => {
    const mainHand = initiator.mainHand();
    console.log("Main hand:", mainHand);
    return mainHand ? TEW.DATABASE.WEAPONS.MELEE_SET[mainHand.id] : undefined;
};

TEW.DATABASE.NPCS.UTILITIES.checkRangeWeaponEquipped = (initiator: CompleteBattler) => {
    const mainHand = initiator.mainHand();
    console.log("Main hand:", mainHand);
    return mainHand ? TEW.DATABASE.WEAPONS.RANGED_SET[mainHand.id] : undefined;
};

TEW.DATABASE.NPCS.UTILITIES.checkReloadableWeaponEquipped = (initiator: CompleteBattler) => {
    const mainHand = initiator.mainHand();
    return !!mainHand && mainHand.isReloadable;
};

TEW.DATABASE.NPCS.UTILITIES.checkLoadedWeaponEquipped = (initiator: CompleteBattler) => {
    const mainHand = initiator.mainHand();
    return !!mainHand && mainHand.ammo > 0;
};

TEW.DATABASE.NPCS.UTILITIES.checkForUnequippedMeleeWeapon = (initiator: CompleteBattler) => {
    const meleeWeaponsOrderedBySkill = initiator._weapons
        .filter(weapon => TEW.DATABASE.WEAPONS.MELEE_SET[weapon.id] !== undefined)
        .filter(weapon => !weapon.isInMainHand)
        .map(weapon => {
            const data = TEW.DATABASE.WEAPONS.MELEE_SET[weapon.id];
            return {
                ...weapon,
                ...data,
                skillValue: TEW.DATABASE.NPCS.UTILITIES.getAttackCompOrDefault(initiator, data.group, true)
            };
        })
        .sort((a, b) => b.skillValue - a.skillValue);
    if (meleeWeaponsOrderedBySkill.length === 0) {
        return undefined;
    }

    const maxSkillValue = meleeWeaponsOrderedBySkill[0].skillValue;
    const meleeWeaponsOrderedByMaxPotentialDamage = meleeWeaponsOrderedBySkill
        .filter(weapon => weapon.skillValue === maxSkillValue)
        .sort((a, b) => b.damage - a.damage);
    
    return meleeWeaponsOrderedByMaxPotentialDamage.length > 0
        ? meleeWeaponsOrderedByMaxPotentialDamage[0]
        : undefined;
};

TEW.DATABASE.NPCS.UTILITIES.checkForUnequippedRangedWeapon = (initiator: CompleteBattler) => {
    const rangedWeaponsOrderedBySkill = initiator._weapons
        .filter(weapon => TEW.DATABASE.WEAPONS.RANGED_SET[weapon.id] !== undefined)
        .filter(weapon => !weapon.isInMainHand)
        .map(weapon => {
            const data = TEW.DATABASE.WEAPONS.RANGED_SET[weapon.id];
            return {
                ...weapon,
                ...data,
                skillValue: TEW.DATABASE.NPCS.UTILITIES.getAttackCompOrDefault(initiator, data.group, false)
            };
        })
        .sort((a, b) => b.skillValue - a.skillValue);
    if (rangedWeaponsOrderedBySkill.length === 0) {
        return undefined;
    }

    const maxSkillValue = rangedWeaponsOrderedBySkill[0].skillValue;
    const rangedWeaponsOrderedByMaxPotentialDamage = rangedWeaponsOrderedBySkill
        .filter(weapon => weapon.skillValue === maxSkillValue)
        .sort((a, b) => b.damage - a.damage);
    
    return rangedWeaponsOrderedByMaxPotentialDamage.length > 0
        ? rangedWeaponsOrderedByMaxPotentialDamage[0]
        : undefined;
};

TEW.DATABASE.NPCS.UTILITIES.checkCurrentAmmo = (initiator: CompleteBattler) => {
    const mainHand = initiator.mainHand();
    return mainHand.isReloadable ? mainHand.ammo : undefined;
};

TEW.DATABASE.NPCS.UTILITIES.manhattanDistance = (a: Game_Battler, b: Game_Battler) => {
    return Math.abs(a.tx - b.tx) + Math.abs(a.ty - b.ty);
};

// Checks if an enemy is in melee range and returns the closest one
TEW.DATABASE.NPCS.UTILITIES.checkEnemyInMeleeRangeAndChooseAtRandom = (initiator: CompleteBattler, enemies: Game_Battler[]) => {
    const dummyMeleeAttack = new Game_Action(
        initiator,
        false,
        { initiator, option: BattleOption.MELEE_ATTACK, target: undefined, weapon: { range: 1 } }
    );
    const enemiesInRange = dummyMeleeAttack.findBattlersInRange(enemies);
    if (enemiesInRange.length === 0) {
        return undefined;
    }
    return enemiesInRange[Math.floor(Math.random() * enemiesInRange.length)];
};

// Checks if an enemy is in shooting range and returns the closest one
TEW.DATABASE.NPCS.UTILITIES.checkEnemyInShootingRangeAndReturnClosest = (initiator: CompleteBattler, enemies: Game_Battler[]) => {
    const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[initiator.mainHand()?.id]; // TODO second hand
    if (!rangedWeapon) {
        return undefined;
    }
    const dummyRangedAttack = new Game_Action(
        initiator,
        false,
        { initiator, option: BattleOption.RANGED_ATTACK, target: undefined, weapon: rangedWeapon }
    );
    // TODO maybe random tie break here, otherwise the first character in party order will be selected
    const enemiesSortedByProximity = enemies.sort((a, b) =>
        TEW.DATABASE.NPCS.UTILITIES.manhattanDistance(a, initiator)
        - TEW.DATABASE.NPCS.UTILITIES.manhattanDistance(b, initiator)
    );
    const enemiesInRange = dummyRangedAttack.findBattlersInRange(enemiesSortedByProximity);
    if (enemiesInRange.length === 0) {
        return undefined;
    }
    return enemiesInRange[0];
};

// Checks where is the closest enemy in charge range and returns it, if there is one
TEW.DATABASE.NPCS.UTILITIES.checkEnemyInChargeRangeAndReturnClosest = (initiator: CompleteBattler, enemies: Game_Battler[]) => {
    const maxMove = initiator.maxChargeDistance();

    // TODO maybe random tie break here, otherwise the first character in party order will be selected
    const enemiesSortedByProximity = enemies.sort((a, b) =>
        TEW.DATABASE.NPCS.UTILITIES.manhattanDistance(a, initiator)
        - TEW.DATABASE.NPCS.UTILITIES.manhattanDistance(b, initiator)
    );
    // Only keep targets whose charge path can actually be followed (tile edges included)
    const targettableEnemies = $gameMap.chargeRangeForAI(maxMove, initiator.event(), enemiesSortedByProximity)
        .filter((enemy: Game_Battler) => initiator.canFollowPath($gameMap.loadOrComputeChargeRangeForAI(
            { x: initiator.tx, y: initiator.ty },
            { x: enemy.tx, y: enemy.ty },
            initiator.event()
        )));
    if (targettableEnemies.length === 0) {
        return undefined;
    }
    return targettableEnemies[0];
}

// Checks where is the closest enemy and returns it, if there is one
TEW.DATABASE.NPCS.UTILITIES.checkEnemyAndReturnClosest = (initiator: CompleteBattler, enemies: Game_Battler[]) => {
    // Random tie break to avoid party order bias
    const enemiesSortedByProximity = enemies
        .map(enemy => ({ enemy, distance: TEW.DATABASE.NPCS.UTILITIES.manhattanDistance(enemy, initiator) }))
        .sort((a, b) => a.distance - b.distance );
    if (enemiesSortedByProximity.length === 0) {
        return undefined;
    }
    const minimumDistance = enemiesSortedByProximity[0].distance;
    const closestEnemies = enemiesSortedByProximity.filter(enemy => enemy.distance === minimumDistance);
    return closestEnemies[Math.floor(Math.random() * closestEnemies.length)].enemy;
}

// Checks if the initiatior is out of charging range of all enemies
TEW.DATABASE.NPCS.UTILITIES.checkOutOfEnnemyChargingRange = (initiator: CompleteBattler, enemies: Game_Battler[]) => {
    // TODO 
    return true;
}

// Checks if the initiatior can move out of charging range of all enemies
TEW.DATABASE.NPCS.UTILITIES.checkCanMoveOutOfEnnemyChargingRange = (initiator: CompleteBattler, enemies: Game_Battler[]) => {
    // TODO 
    return true;
}

// Get the position out of charging range of all enemies
TEW.DATABASE.NPCS.UTILITIES.getPositionOutOfEnnemyChargingRange = (initiator: CompleteBattler, enemies: Game_Battler[]) => {
    // TODO 
    return {
        x: initiator.tx,
        y: initiator.ty
    };
}

//-----------------------------------------------------------------------------
// Refactoring the AI common methods
//-----------------------------------------------------------------------------
// The iniator attacks the closest enemy with a melee attack
TEW.DATABASE.NPCS.UTILITIES.doMeleeAttack = (initiator: CompleteBattler, closestEnemy: Game_Battler) => {
    return {
        option: BattleOption.MELEE_ATTACK,
        initiator,
        target: {
            type: BattleTargetType.BATTLER,
            target: closestEnemy,
        },
    };
}

// The iniator attacks the closest enemy with a ranged attack
TEW.DATABASE.NPCS.UTILITIES.doRangedAttack = (initiator: CompleteBattler, closestEnemy: Game_Battler) => {
    return {
        option: BattleOption.RANGED_ATTACK,
        initiator,
        target: {
            type: BattleTargetType.BATTLER,
            target: closestEnemy,
        },
    };
}

// The iniator waits for the next turn
TEW.DATABASE.NPCS.UTILITIES.doWait = (initiator: CompleteBattler) => {
    return {
        option: BattleOption.WAIT,
        initiator,
        target: undefined,
    };
}

// The initiator charges to the position
TEW.DATABASE.NPCS.UTILITIES.doCharge = (initiator: CompleteBattler, x: number, y: number) => {
    return {
        option: BattleOption.CHARGE,
        initiator,
        target : {
            type: BattleTargetType.TILE,
            target: {
                x: x,
                y: y
            }
        }
    };
}

// The initiator walks to the position
TEW.DATABASE.NPCS.UTILITIES.doWalk = (initiator: CompleteBattler, x: number, y: number) => {
    return {
        option: BattleOption.WALK,
        initiator,
        target : {
            type: BattleTargetType.TILE,
            target: {
                x: x,
                y: y
            }
        }
    };
}

// The initiator reloads its ranged weapon
TEW.DATABASE.NPCS.UTILITIES.doReload = (initiator: CompleteBattler) => {
    return {
        option: BattleOption.RELOAD,
        initiator,
    };
}

// The initiator switches to a melee weapon
TEW.DATABASE.NPCS.UTILITIES.doSwitchToMainHand = (initiator: CompleteBattler, weapon: MeleeWeapon | RangedWeapon): BattleDecision => {
    return {
        option: BattleOption.SWITCH_WEAPONS,
        initiator,
        weapon,
    };
}
//-----------------------------------------------------------------------------
// AIs :
// - DEBUG :  Used for DEBUG purposes
// - LAZY : Attacks the closest enemy if it has a melee weapon equipped and an enemy is in range, otherwise waits.
// - DEFAULT : Move to the closest enemy and attacks
// - LAZY_RANGED : Do not move and attack at range if reloaded
// - SMART_RANGED : Move away but stay in range to attack at range
TEW.DATABASE.NPCS.AI = {
    // DEBUG AI
    DEBUG: (initiator, allies, enemies) => {
        const actionAvailable: boolean = initiator._actionCount > 0;
        const moveAvailable: boolean = initiator._moveCount > 0;
        const equippedRangedWeapon: boolean = TEW.DATABASE.NPCS.UTILITIES.checkRangeWeaponEquipped(initiator);
        const closestEnemy = TEW.DATABASE.NPCS.UTILITIES.checkEnemyInShootingRangeAndReturnClosest(initiator, enemies);
        const unequippedRangedWeapon = TEW.DATABASE.NPCS.UTILITIES.checkForUnequippedRangedWeapon(initiator);
        console.log("=====");
        console.log("DEBUG AI: ");
        console.log("-----");
        console.log("initiator :", initiator);
        // console.log("allies :", allies);
        // console.log("enemies :", enemies);
        // console.log("-----");
        // console.log("actionAvailable :", actionAvailable);
        // console.log("moveAvailable :", moveAvailable);
        // console.log("equippedMeleeWeapon :", equippedMeleeWeapon);
        // console.log("closestEnemy :", closestEnemy);
        // console.log("equippedRangedWeapon :", equippedRangedWeapon);
        if (equippedRangedWeapon && closestEnemy) {
            const ammo = TEW.DATABASE.NPCS.UTILITIES.checkCurrentAmmo(initiator);
            if (ammo !== undefined && ammo === 0) {
                console.log("reloading");
                return TEW.DATABASE.NPCS.UTILITIES.doReload(initiator);
            }
            console.log("attacking with crossbow");
            return TEW.DATABASE.NPCS.UTILITIES.doRangedAttack(initiator, closestEnemy);
        }
        if (unequippedRangedWeapon) {
            console.log("Switching to:", unequippedRangedWeapon);
            return TEW.DATABASE.NPCS.UTILITIES.doSwitchToMainHand(initiator, unequippedRangedWeapon);
        }
        console.log("=====");
        return TEW.DATABASE.NPCS.UTILITIES.doWait();
    },

    // LAZY AI :
    // Attacks the closest enemy if it has a melee weapon equipped and an enemy is in range, otherwise waits.
    LAZY: (initiator, allies, enemies) => {
        const actionAvailable: boolean = initiator._actionCount > 0;
        const equippedMeleeWeapon: boolean = TEW.DATABASE.NPCS.UTILITIES.checkMeleeWeaponEquipped(initiator);
        // If equipped with a melee weapon
        if (equippedMeleeWeapon) {
            const closestEnemy = TEW.DATABASE.NPCS.UTILITIES.checkEnemyInMeleeRangeAndChooseAtRandom(initiator, enemies);
            // If the closest enemy is in range, attack it
            if (actionAvailable && closestEnemy) {
                return TEW.DATABASE.NPCS.UTILITIES.doMeleeAttack(initiator, closestEnemy);
            }
        }
        // Else, just wait
        return TEW.DATABASE.NPCS.UTILITIES.doWait(initiator);
    },

    // DEFAULT AI :
    // Move to the closest enemy and attacks
    DEFAULT: (initiator, allies, enemies) => {
        const actionAvailable: boolean = initiator._actionCount > 0;
        const moveAvailable: boolean = initiator._moveCount > 0;
        const equippedMeleeWeapon: MeleeWeapon = TEW.DATABASE.NPCS.UTILITIES.checkMeleeWeaponEquipped(initiator);
        // If equipped with a melee weapon
        if (equippedMeleeWeapon) {
            // if the closest enemy is in range, attack it
            const closestEnemyInMeleeRange = TEW.DATABASE.NPCS.UTILITIES.checkEnemyInMeleeRangeAndChooseAtRandom(initiator, enemies);
            if (actionAvailable && closestEnemyInMeleeRange) {
                return TEW.DATABASE.NPCS.UTILITIES.doMeleeAttack(initiator, closestEnemyInMeleeRange);
            }

            // if the closest enemy is in charge range, charge it
            const closestEnemyInChargeRange = TEW.DATABASE.NPCS.UTILITIES.checkEnemyInChargeRangeAndReturnClosest(initiator, enemies);
            if (actionAvailable && moveAvailable && closestEnemyInChargeRange) {
                return TEW.DATABASE.NPCS.UTILITIES.doCharge(initiator, closestEnemyInChargeRange.tx, closestEnemyInChargeRange.ty);
            }
            
            // otherwise, walk to the closest enemy if there is one
            else {
                const closestEnemy = TEW.DATABASE.NPCS.UTILITIES.checkEnemyAndReturnClosest(initiator, enemies);
                if (moveAvailable && closestEnemy) {
                    return TEW.DATABASE.NPCS.UTILITIES.doWalk(initiator, closestEnemy.tx, closestEnemy.ty);
                }
            }
        }
        // Else, just wait
        return TEW.DATABASE.NPCS.UTILITIES.doWait(initiator);
    },

    // LAZY_RANGED AI :
    // Shoot the closest ennemy in range, 
    LAZY_RANGED: (initiator, allies, enemies) => {
        const actionAvailable: boolean = initiator._actionCount > 0;
        const moveAvailable: boolean = initiator._moveCount > 0;
        const equippedRangedWeapon: boolean = TEW.DATABASE.NPCS.UTILITIES.checkRangeWeaponEquipped(initiator);
        
        // If equipped with a ranged weapon
        if (equippedRangedWeapon) {
            const reloadableWeaponEquipped: boolean = TEW.DATABASE.NPCS.UTILITIES.checkReloadableWeaponEquipped(initiator);
            const reloadedWeaponEquipped: boolean = TEW.DATABASE.NPCS.UTILITIES.checkLoadedWeaponEquipped(initiator);
            // If ranged weapon is not reloaded (and it needs to be reloaded), then reload
            if (reloadableWeaponEquipped && !reloadedWeaponEquipped) {
                return TEW.DATABASE.NPCS.UTILITIES.doReload(initiator);
            }

            const closestEnemy = TEW.DATABASE.NPCS.UTILITIES.checkEnemyInShootingRangeAndReturnClosest(initiator, enemies);
            if (actionAvailable && closestEnemy) {
                return TEW.DATABASE.NPCS.UTILITIES.doRangedAttack(initiator, closestEnemy);
            }
        }

        // Else, just wait
        return TEW.DATABASE.NPCS.UTILITIES.doWait(initiator);
    },

    // SMART_RANGED AI :
    // If it can move out of charge range of all enemies, it does
    // If it cant, it switches weapons to melee
    SMART_RANGED: (initiator, allies, enemies) => {
        const actionAvailable: boolean = initiator._actionCount > 0;
        const moveAvailable: boolean = initiator._moveCount > 0;
        const equippedRangedWeapon: boolean = TEW.DATABASE.NPCS.UTILITIES.checkRangeWeaponEquipped(initiator);

        // If equipped with a ranged weapon
        if (equippedRangedWeapon) {
            // If out of charge range of all enemies -> Lazy Ranged AI
            const outOfChargeRangeAllEnemies: boolean = TEW.DATABASE.NPCS.UTILITIES.checkOutOfEnnemyChargingRange(initiator, enemies)
            if (outOfChargeRangeAllEnemies) {
                return TEW.DATABASE.NPCS.AI.LAZY_RANGED(initiator, allies, enemies);
            }

            // If it can move out of charging range of all enemies, it does
            const canMoveOutOfChargeRange: boolean = TEW.DATABASE.NPCS.UTILITIES.checkCanMoveOutOfEnnemyChargingRange(initiator, enemies)
            if (canMoveOutOfChargeRange && moveAvailable) {
                const position = TEW.DATABASE.NPCS.UTILITIES.getPositionOutOfEnnemyChargingRange(initiator, enemies);
                return TEW.DATABASE.NPCS.UTILITIES.doWalk(initiator, position.x, position.y);
            }

            // Else, it switches weapons to melee // TODO invalid now bitch
            return TEW.DATABASE.NPCS.UTILITIES.doSwitchToMainHand(initiator);
        }
        // else, just wait
        return TEW.DATABASE.NPCS.UTILITIES.doWait(initiator);
    }
};
