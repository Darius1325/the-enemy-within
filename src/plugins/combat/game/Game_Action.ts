// $PluginCompiler TEW_Combat.js

import { BattleDecision, CompleteBattler } from "../../_types/battlerAI";
import { BattleOption, BattleTargetType, BodyLocation, ConditionId, GameActionUsableObject, SpellEffectType, SpellRange, SpellTarget, SpellTargetRadius, Stat } from "../../_types/enum";
import { MeleeWeapon } from "../../_types/meleeWeapon";
import { RangedWeapon } from "../../_types/rangedWeapon";
import { Spell } from "../../_types/spell";
import TEW from "../../_types/tew";
import Game_Battler from "./Game_Battler";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.
//
// A Game_Action is either:
//  - a decision-based action, built from a BattleDecision (enemy AI and player input): everything in this file
//  - a legacy RMMV action, built without a decision by RMMV itself: see Game_ActionLegacy.ts
// Entry points (initialize, apply) dispatch on isDecision().

// TODO +10 when deafened and attacking from behind/flank
// TODO +20 if prone
// TODO +20 if surprised
// TODO +10 if blinded
// TODO bonus on unconscious
Game_Action.prototype.initialize = function(subject: CompleteBattler, forcing: boolean, params: BattleDecision = undefined, modifiers = {}) {
    this._subjectActorId = 0;
    this._subjectEnemyIndex = -1;
    this._subject = subject;
    this.setSubject(subject);
    this.clear();

    // Ranges are shared by both kinds of actions, to display tiles
    this._range = [];
    this._aoeRange = [];

    if (params === undefined) {
        this.initializeLegacy(forcing);
    } else {
        this.initializeDecision(params, modifiers);
    }
};

Game_Action.prototype.initializeDecision = function(params: BattleDecision, modifiers = {}) {
    this._decision = params;
    this._option = params.option;
    this._modifiers = modifiers;
    this._subjectAbilityRoll = undefined;
    this._object = undefined;
    this._objectType = GameActionUsableObject.ITEM;
    this._targets = [];
    this._targetTile = undefined;

    if (params.weapon) {
        this._object = params.weapon;
        this._objectType = GameActionUsableObject.WEAPON;
    } else if (params.spell) {
        this._object = params.spell;
        this._objectType = GameActionUsableObject.SPELL;
    } else if (params.item) {
        this._object = params.item;
    }

    if (params.target?.type === BattleTargetType.BATTLER) {
        this._targets = [params.target.target];
    } else if (params.target?.type === BattleTargetType.TILE) {
        this._targetTile = params.target.target;
    }
};

/**
 * Whether this action was built from a BattleDecision (new system) rather than through legacy RMMV setters
 */
Game_Action.prototype.isDecision = function() {
    return this._decision !== undefined;
};

Game_Action.prototype.decision = function(): BattleDecision {
    return this._decision;
};

Game_Action.prototype.option = function(): BattleOption {
    return this._option;
};

Game_Action.prototype.subject = function() {
    return this._subject;
};

Game_Action.prototype.targets = function(): Game_Battler[] {
    return this._targets;
};

Game_Action.prototype.isMovementDecision = function() {
    return this._option === BattleOption.WALK || this._option === BattleOption.RUN;
};

// ----------------------
// Ranges
// ----------------------

Game_Action.prototype.getTargettableEnemies = function() {
    const battlers = this._subject.opponentsUnitTS().aliveMembers();
    return this.findBattlersInRange(battlers);
};

Game_Action.prototype.getTargettableAllies = function() {
    const battlers = this._subject.friendsUnitTS().aliveMembers();
    return this.findBattlersInRange(battlers);
};

Game_Action.prototype.findBattlersInRange = function(battlers: Game_Battler[]) {
    const battlersInRange = [];

    const range: number = this.updateRange();
    this.updateAoeRange();

    const rangeSquared = range * range;
    for (let battler of battlers) {
        if (this.isInEuclideanDistance(rangeSquared, battler.tx, battler.ty, this._subject.tx, this._subject.ty)) {
            battlersInRange.push(battler);
        }
    }
    return battlersInRange;
};

Game_Action.prototype.updateRange = function() {
    const range = this.extractRangeData();
    // TODO better algorithm for obstacles
    this._range = this.computeEuclideanRange(range, this._subject.tx, this._subject.ty);
    return range;
};

Game_Action.prototype.extractRangeData = function() {
    const range = this._object?.range;
    if (range) {
        if (typeof range === 'number') {
            return range;
        } else { // Spell range
            const rangeType: SpellRange = range.type;
            switch (rangeType) {
                case SpellRange.SELF: return 0;
                case SpellRange.TOUCH: return 1;
                case SpellRange.WILL: return this._subject.paramByName(Stat.WILL);
                case SpellRange.ONE: return 0; // TODO WTF
            }
        }
    }
    // Melee weapons have no range property
    if (this._objectType === GameActionUsableObject.WEAPON) {
        return TEW.COMBAT.SYSTEM.actionRange;
    }
    return 0;
};

Game_Action.prototype.updateAoeRange = function() {
    const aoe = this.extractAoeData();
    if (aoe !== 0) {
        this._aoeRange = this.computeEuclideanRange(aoe, $gameSelector._x, $gameSelector._y);
        this._aoeRange.push([$gameSelector._x, $gameSelector._y]);
    } else {
        this._aoeRange = [];
    }
    return aoe;
};

// TODO
Game_Action.prototype.extractAoeData = function() {
    const target = this._object?.target;
    if (target) {
        const targetType: SpellTarget = target.type;
        if (targetType === SpellTarget.AOE) {
            const targetRadius: SpellTargetRadius = target.distance;
            if (targetRadius === SpellTargetRadius.WILL_BONUS) {
                return this._subject.paramBonus(Stat.WILL);
            }
        }
    }
    // Default case
    return 0;
};

/**
 * All tiles [x, y] at euclidean distance d or less from (x, y), (x, y) included
 */
Game_Action.prototype.computeEuclideanRange = function(d: number, x: number, y: number) {
    const range = [];
    const dSquared = d * d;
    for (let i = x - d; i <= x + d; i++) {
        for (let j = y - d; j <= y + d; j++) {
            if (this.isInEuclideanDistance(dSquared, i, j, x, y)) {
                range.push([i, j]);
            }
        }
    }
    return range;
};

Game_Action.prototype.isInEuclideanDistance = function(dSquared: number, x: number, y: number, centerX: number, centerY: number) {
    return (x - centerX) * (x - centerX) + (y - centerY) * (y - centerY) <= dSquared;
};

// ----------------------
// Resolution
// ----------------------

Game_Action.prototype.attackRollModifier = function() {
    return this._modifiers.attackRoll || 0;
};

/**
 * Entry point to resolve an action. Legacy actions get their target as a parameter (RMMV flow),
 * decision-based actions already know their targets.
 */
Game_Action.prototype.apply = function(target?: Game_Battler) {
    if (this.isDecision()) {
        this.applyDecision();
    } else {
        this.applyLegacy(target);
    }
};

Game_Action.prototype.applyDecision = function() {
    switch (this._option) {
        case BattleOption.WAIT:
            break; // Ends the battler's turn, see BattleManager.onDecisionEnd
        case BattleOption.WALK:
            this.applyWalk(false);
            break;
        case BattleOption.RUN:
            this.applyWalk(true);
            break;
        case BattleOption.CHARGE:
            this.applyCharge();
            break;
        case BattleOption.SWITCH_WEAPONS:
            this.applySwitchWeapons();
            break;
        case BattleOption.MELEE_ATTACK:
            this.applyAttack(true);
            break;
        case BattleOption.RANGED_ATTACK:
            this.applyAttack(false);
            break;
        case BattleOption.RELOAD:
            this.applyReload();
            break;
        case BattleOption.USE_SPELL:
            this.applySpellDecision();
            break;
        case BattleOption.USE_ITEM: // TODO
        case BattleOption.DISENGAGE: // TODO
        default:
            console.log("TODO Game_Action decision option not handled:", this._option);
            break;
    }
};

/**
 * Whether the decision moves its subject, i.e. BattleManager must wait for the move to end
 */
Game_Action.prototype.hasPendingMove = function() {
    return this._subject.hasPendingMoveStep();
};

/**
 * Called by BattleManager once the subject has finished moving
 */
Game_Action.prototype.onMoveEnd = function() {
    if (this._option === BattleOption.CHARGE) {
        this.applyChargeAttack();
    }
};

/**
 * Walk (1 move point, or 1 action point if no move point is left) or run (1 move and 1 action point)
 * toward the target tile, as far as the subject's movement allows
 */
Game_Action.prototype.applyWalk = function(run: boolean) {
    const subject = this._subject;
    if (run ? !(subject.hasMovePoint() && subject.hasActionPoint()) : !(subject.hasMovePoint() || subject.hasActionPoint())) {
        return;
    }
    const target = this.targetPosition();
    if (!target) {
        return;
    }
    const distance = run ? subject.runDistance() : subject.walkDistance();
    const path = subject.computePathTowards(target.x, target.y, distance);
    if (path.length === 0) {
        return; // Nowhere to go: nothing is spent
    }
    if (run) {
        subject.spendMovePoint();
        subject.spendActionPoint();
    } else {
        subject.spendMoveOrActionPoint();
    }
    subject.setMovePath(path);
};

/**
 * Charge (1 move and 1 action point) in a straight line toward the target, then attack it if it is reached
 */
Game_Action.prototype.applyCharge = function() {
    const subject = this._subject;
    if (!subject.hasMovePoint() || !subject.hasActionPoint()) {
        return;
    }
    const targetTile = this.targetPosition();
    if (!targetTile) {
        return;
    }
    const path = $gameMap.loadOrComputeChargeRangeForAI(
        { x: subject.tx, y: subject.ty },
        { x: targetTile.x, y: targetTile.y },
        subject.event()
    );
    if (!subject.canFollowPath(path)) {
        return; // No clear charge path: nothing is spent
    }
    subject.spendMovePoint();
    subject.spendActionPoint();

    // TODO handle crit fail?
    this._chargeTestResult = TEW.DICE.skillTest(subject, 'ATHLETICS', TEW.COMBAT.SYSTEM.chargeTestModifier, !subject.isActor());
    const maxMove = subject.runDistance() + this._chargeTestResult.sl;

    this._chargeTarget = this._targets[0] || this.opponentAt(targetTile.x, targetTile.y);

    subject.setMovePath(path.slice(0, Math.max(maxMove, 0)));
    $gameMap._flexibleMovement = true; // Go back to free movement range for next action
};

/**
 * Attack at the end of a charge: no point is spent (the charge already spent them),
 * and a successful charge test gives a bonus
 */
Game_Action.prototype.applyChargeAttack = function() {
    const target: CompleteBattler = this._chargeTarget;
    if (target && target.isAlive() && this._subject.isAdjacentTo(target)) {
        const attack = Game_Action.chargeAttack(this._subject, target, this._chargeTestResult?.success);
        attack.resolveWeaponAttack(true);
    }
};

/**
 * Equip the decision's weapon, or the first melee weapon available (1 move point, or 1 action point)
 */
Game_Action.prototype.applySwitchWeapons = function() {
    const subject = this._subject;
    if (!subject.hasMovePoint() && !subject.hasActionPoint()) {
        return;
    }
    const weapons = subject._weapons || [];
    const weaponId = this._object && this._objectType === GameActionUsableObject.WEAPON
        ? Object.keys(TEW.DATABASE.WEAPONS.MELEE_SET).concat(Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET))
            .find(id => TEW.DATABASE.WEAPONS.MELEE_SET[id] === this._object || TEW.DATABASE.WEAPONS.RANGED_SET[id] === this._object)
        : undefined;
    const index = weapons.findIndex(weapon => weaponId
        ? weapon.id === weaponId
        : TEW.DATABASE.WEAPONS.MELEE_SET[weapon.id] !== undefined);
    if (index < 0 || weapons[index].isInMainHand) {
        return;
    }
    subject.equipMainHand(index);
    subject.spendMoveOrActionPoint();
};

/**
 * Weapon attack against the decision's target (1 action point)
 */
Game_Action.prototype.applyAttack = function(isMelee: boolean) {
    const subject = this._subject;
    const target: CompleteBattler = this._targets[0];
    if (!subject.hasActionPoint() || !target || !target.isAlive() || !this._object) {
        return;
    }
    if (!isMelee) {
        const mainHand = subject.mainHand();
        if (mainHand && mainHand.isReloadable) {
            if (mainHand.ammo <= 0) {
                return;
            }
            mainHand.ammo -= 1;
        }
    }
    subject.spendActionPoint();
    this.resolveWeaponAttack(isMelee);
};

/**
 * Load the equipped ranged weapon (1 action point)
 */
Game_Action.prototype.applyReload = function() {
    const subject = this._subject;
    const mainHand = subject.mainHand();
    if (!subject.hasActionPoint() || !mainHand || !mainHand.isReloadable || mainHand.ammo > 0) {
        return;
    }
    // TODO RELOAD_X qualities (several actions), ammunition from the inventory
    mainHand.ammo = 1;
    subject.spendActionPoint();
};

/**
 * Cast the decision's spell on its target battler, or on every battler in the area of effect around its target tile (1 action point)
 */
Game_Action.prototype.applySpellDecision = function() {
    const subject = this._subject;
    if (!subject.hasActionPoint() || !this._object) {
        return;
    }
    let targets: CompleteBattler[] = this._targets;
    const tile = this.targetPosition();
    const aoe = this.extractAoeData();
    if (aoe > 0 && tile) {
        const aoeTiles = this.computeEuclideanRange(aoe, tile.x, tile.y);
        targets = BattleManager.allBattleMembers().filter((battler: CompleteBattler) =>
            battler.isAlive() && aoeTiles.some(pos => battler.pos(pos[0], pos[1])));
    }
    subject.spendActionPoint();
    targets.forEach(target => this.applySpell(target));
};

/**
 * Tile targeted by the decision: the target tile, or the target battler's position
 */
Game_Action.prototype.targetPosition = function(): { x: number, y: number } {
    if (this._targetTile && this._targetTile.x !== undefined && this._targetTile.y !== undefined) {
        return this._targetTile;
    }
    const target = this._targets[0];
    if (target) {
        return { x: target.x, y: target.y };
    }
    return undefined;
};

Game_Action.prototype.opponentAt = function(x: number, y: number) {
    return this._subject.opponentsUnitTS().aliveMembers().find((battler: Game_Battler) => battler.pos(x, y));
};

/**
 * Remove HP from the target, and make it collapse if it dies.
 * RMMV's executeDamage can't be used: it checks the RMMV item damage type, which TEW does not use (see checkDamageType)
 */
Game_Action.prototype.dealDamage = function(target: CompleteBattler, value: number) {
    this.executeHpDamage(target, value);
    console.log(`Damage: ${target.name()} loses ${value} HP (${target.hp} left)`);
    if (target.isDead()) {
        target.performCollapse();
    }
};

/**
 * Roll and resolve a weapon attack against the first target. Does not spend any point.
 * TODO ranged attack rules (no parry, range bands, aiming)
 */
Game_Action.prototype.resolveWeaponAttack = function(isMelee: boolean) {
    const attacker = this._subject;
    const attackerWeapon: MeleeWeapon | RangedWeapon = this._object;
    const target = this._targets[0];
    attacker.turnTowardCharacter(target);
    target.turnTowardCharacter(attacker);
    // TODO attack with second hand
    const attackerWeaponEffects = TEW.COMBAT.getWeaponQualityEffects(attackerWeapon);

    const defenderWeapon = TEW.COMBAT.getWeaponFromId(target.equippedWeapon().id); // TODO defend with second hand
    const defenderWeaponEffects = TEW.COMBAT.getWeaponQualityEffects(defenderWeapon);

    // Damage calc
    //
    // Choose weapon (elsewhere)
    //   Get combat characteristic associated with weapon
    const attackerCombatSkill = TEW.COMBAT.getAttackCompOrDefault(
        attacker,
        attackerWeapon.group,
        isMelee
    );

    // TODO Get (best) weapon from defender
    // TODO ranged attacks must be dodged
    //   Get combat characteristic associated with weapon
    const defenderCombatSkill = TEW.COMBAT.getDefenceCompOrDefault(
        target,
        defenderWeapon.group,
        0, // TODO cc bonus
        isMelee && TEW.COMBAT.isMeleeWeapon(defenderWeapon) // Ranged attacks are dodged
    );

    // TODO Check for opponent's defensive tools (shield)
    // TODO Check attacker's talents for modifiers (make a list)
    // TODO Check defender's talents for modifiers (make a list)
    // TODO Check weapon effects on bonus (PRECISE)
    // TODO Check sizes
    // TODO Check outnumberment

    // Attacker condition modifiers
    let attackerConditionMod = attacker.totalConditionModifier(attackerCombatSkill.compId);
    if (target.hasCondition(ConditionId.SURPRISED)) {
        attackerConditionMod += 20;
        target.removeCondition(ConditionId.SURPRISED);
    }
    if (target.hasCondition(ConditionId.BLINDED)) {
        attackerConditionMod += 10;
    }
    // TODO deafened
    // TODO prone

    // Defender condition modifiers
    const defenderConditionMod = target.totalConditionModifier();

    // Roll dice
    const combatResult = TEW.DICE.combatOpposedSkillTest(
        attackerCombatSkill.value + attackerWeaponEffects.attackMod + this.attackRollModifier() + attackerConditionMod,
        defenderCombatSkill.value + defenderWeaponEffects.defenceMod + defenderConditionMod,
        true,
        false // GIGA TODO
    );

    // Special weapon quality checks
    // Impale - critical hit on tens
    if (attackerWeaponEffects.effects.IMPALE) {
        if (combatResult.rollAttacker % 10 === 0) {
            combatResult.criticalAttacker = true;
        }
    }
    // Damaging - SL can be replaced with unit die if higher
    if (attackerWeaponEffects.effects.DAMAGING) {
        const damagingSL = (combatResult.rollAttacker % 10) || 10; // 10 SL if roll ends in 0
        if (damagingSL > combatResult.slAttacker) {
            combatResult.slAttacker = damagingSL;
        }
    }
    // Dangerous - ??? on a failed roll ending in 9
    if (attackerWeaponEffects.effects.DANGEROUS) {
        if (!combatResult.success && combatResult.rollAttacker % 10 === 9) {
            // TODO maladresse ??
        }
    }

    // FIXME do we add bonus SL before or after hit check ?
    combatResult.slAttacker += attackerWeaponEffects.attackBonusSL;
    combatResult.slDefender += attackerWeaponEffects.defenceBonusSL;

    // TODO wait X seconds here for player input (fortune points)

    // TODO Check attacker's talents on dice roll (make a list)
    // TODO Check weapon effects on dice roll (make a list)
    // TODO miss

    if (combatResult.slAttacker >= 0 && combatResult.success) {
        // TODO Check weapon effects on crit (make a list)
        // TODO Check for crits

        // Check location
        const hitLocation: BodyLocation = BodyLocation.HEAD; // TODO location table

        // Armor and armor penetration
        let defenderArmorPoints: number = target.armorPointsAtLocation(hitLocation, attackerWeaponEffects.ignoredAP, attackerWeaponEffects.ignoreMetalArmor);
        if (attackerWeaponEffects.effects.UNDAMAGING) {
            defenderArmorPoints *= 2;
        }

        // Compute damage
        //   Add weapon bonus + stat bonus + opposed DR
        //   Remove defender's toug + TODO armor points
        let damage = combatResult.slAttacker - combatResult.slDefender
            + attackerWeapon.damage + (attackerWeapon.strBonus ? attacker.paramBonus(Stat.STRG) : 0)
            - target.paramBonus(Stat.TOUG) - defenderArmorPoints;

        // Impact - add unit die to damage
        if (attackerWeaponEffects.effects.IMPACT) {
            damage += (combatResult.rollAttacker % 10) || 10;
        }

        this.dealDamage(target, Math.max(damage, 1));

        //   Check weapon effects based on location (make a list)
        if (attackerWeaponEffects.effects.PUMMEL && hitLocation === BodyLocation.HEAD) {
            const pummelTestResult = TEW.DICE.opposedTest(attacker.paramByName(Stat.STRG), target.paramByName(Stat.STRG));
            if (pummelTestResult.success) {
                target.addCondition(ConditionId.STUNNED);
            }
        }
        if (attackerWeaponEffects.effects.ENTANGLE) {
            target.addCondition(ConditionId.ENTANGLED, 1, attacker.paramBonus(Stat.STRG));
        }
        // if (!isMeleeWeapon) {
        //     if (attackerWeapon.group === WeaponGroup.BLACKPOWDER) {
        //         const brokenTestResult = TEW.DICE.skillTest(target, 'CALM', 20);
        //         if (!brokenTestResult.success) {
        //             // add broken condition
        //         }
        //     }
        // }

        // TODO Lookup crit table (help me)
    }
};

/**
 * TODO
 * Apply a spell to an unique target. If multiple targets are needed, this function should be called multiple times with the same spell and different targets.
 * The attacker only rolls once tho, as the result is stored and retrieved for each supplementary target.
 */
Game_Action.prototype.applySpell = function(target: CompleteBattler) {
    const attacker = this._subject;
    const spell: Spell = this._object;

    // Roll dice once, then reuse the result for every target
    if (!this._subjectAbilityRoll) {
        const womModifier = $gameVariables.value(15); // Winds of magic
        this._subjectAbilityRoll = TEW.DICE.skillTest(attacker, TEW.MAGIC.MAGIC_COMP, womModifier, false);

        // Add channelled SL
        this._subjectAbilityRoll.sl += attacker._channellingLevel;
        attacker._channellingLevel = 0;

        // TODO handle criticals

        // TODO critical failure
    }

    // Resolve spell
    if (this._subjectAbilityRoll.sl >= spell.cn) {
        // TODO Prompt for spell bonus effects (e.g. additional targets, increased range... etc)
        // handled by spell effect ?

        // TODO Resolve spell domain effects (e.g. Chamon ignoring metal armor)

        switch (spell.effect.type) {
            case SpellEffectType.MAGIC_MISSILE:
                const damage = this._subjectAbilityRoll.sl + spell.effect.damage
                    - target.paramBonus(Stat.TOUG);
                this.dealDamage(target, Math.max(damage, 1));
                break;
            case SpellEffectType.SCALING_DAMAGE:
                break;
            case SpellEffectType.CONDITION:
                target.addCondition(spell.effect.conditionId, 1);
                break;
            case SpellEffectType.SPECIAL:
                spell.effect.handler(attacker, target, this._subjectAbilityRoll.sl);
                break;
        }
    }
    // GIGA TODO counterspell
};

/**
 * Melee attack performed at the end of a charge, with the charge bonus
 */
Game_Action.chargeAttack = function(subject: CompleteBattler, target: Game_Battler, success: boolean) {
    return new Game_Action(
        subject,
        false,
        {
            initiator: subject,
            option: BattleOption.MELEE_ATTACK,
            target: {
                type: BattleTargetType.BATTLER,
                target,
            },
            weapon: TEW.DATABASE.WEAPONS.MELEE_SET[subject.equippedWeapon().id] || TEW.DATABASE.WEAPONS.MELEE_SET.UNARMED
        },
        { attackRoll: success ? 10 : 0 }
    );
};

// ----------------------
// Tile display
// ----------------------

Game_Action.prototype.range = function() {
    return this._range;
};

Game_Action.prototype.showRange = function() {
    this._range.forEach(function(pos) {
        const tile = $gameMap.tile(pos[0], pos[1]); // Convert from [x, y] to (x + y * width)
        $gameMap.addTile(tile);
    }, this);
};

Game_Action.prototype.showAreaOfEffect = function() {
    this._aoeRange.forEach(function(pos) {
        const tile = $gameMap.tile(pos[0], pos[1]); // Convert from [x, y] to (x + y * width)
        $gameMap.addAoeTile(tile);
    }, this);
};

Game_Action.prototype.isInRange = function(x: number, y: number) {
    return this._range.some(pos => pos[0] === x && pos[1] === y);
};

Game_Action.prototype.color = function() {
    return TEW.COMBAT.SYSTEM.enemyScopeColor; // TODO ally color for supportive spells and items
};

Game_Action.prototype.isTargetValid = function(battler) {
    return !!battler;
};

Game_Action.prototype.checkDamageType = function(_) {
    return false;
};
