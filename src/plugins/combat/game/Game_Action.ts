// $PluginCompiler TEW_Combat.js

import { BodyLocation, ConditionId, SpellEffectType, SpellRange, SpellTarget, SpellTargetRadius, Stat, WeaponGroup } from "../../_types/enum";
import { Spell } from "../../_types/spell";
import TEW from "../../_types/tew";
import { Game_BattlerBase } from "../../base/stats/Game_BattlerBase";
import Game_Battler from "./Game_Battler";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.

TEW.MEMORY.gameActionInit = Game_Action.prototype.initialize;
// TODO +10 when deafened and attacking from behind/flank
// TODO +20 if prone
// TODO +20 if surprised
// TODO +10 if blinded
// TODO bonus on unconscious
Game_Action.prototype.initialize = function(subject, forcing, modifiers = {}) {
    TEW.MEMORY.gameActionInit.call(this, subject, forcing);
    this._moveRoute = 0;
    this._modifiers = modifiers;
    this._aoeRange = [];

    this._subjectAbilityRoll = undefined;
};

Game_Action.prototype.combatOpponentsUnit = function(battler) {
    var units = battler.opponentsUnitTS().aliveMembers();
    return this.searchBattlers(battler, units);
};

Game_Action.prototype.combatFriendsUnit = function(battler) {
    var friends = battler.friendsUnitTS().aliveMembers();
    return [battler].concat(this.searchBattlers(battler, friends));
};

Game_Action.prototype.searchBattlers = function(battler, units) {
    var battlers = [];
    var item;
    if (this.isAttackRange(battler)) { // TODO fuse this with base flow ?
        item = TEW.COMBAT.getWeaponFromId(battler.equippedWeapon().id);
    } else {
        item = this.item();
    }
    this.updateRange(item, battler);
    this.updateAoeRange(item, battler);
    for (var i = 0; i < this._range.length; i++) {
        var redCell = this._range[i];
        var x = redCell[0];
        var y = redCell[1];
        for (var j = 0; j < units.length; j++) {
            // TODO unnecessary check in O(n²) here, we should be able to push the active battler here
            if (units[j].pos(x, y) && units[j] !== battler) {
                battlers.push(units[j]);
            }
        }
    }
    return battlers;
};

Game_Action.prototype.isAttackRange = function (subject) {
    return subject.isActor() && this.isAttack();
};

Game_Action.prototype.updateRange = function(item, battler: Game_Battler) {
    const range = this.extractRangeData(item, battler);
    // TODO better algorithm for obstacles
    if (range === 0 || this.isForUser()) {
        this._range = [[battler.tx, battler.ty]];
    } else {
        this._range = this.createRange(0, range, battler.tx, battler.ty, range === 1 ? 'diamond' : 'euclidean');
    }
};

Game_Action.prototype.extractRangeData = function(object, battler: Game_BattlerBase) {
    const range = object?.range;
    if (range) {
        if (typeof range === 'number') {
            return range;
        } else { // Spell range
            const rangeType: SpellRange = range.type;
            switch (rangeType) {
                case SpellRange.SELF: return 0;
                case SpellRange.TOUCH: return 1;
                case SpellRange.WILL: return battler.paramByName(Stat.WILL);
                case SpellRange.ONE: return 0; // TODO WTF
            }
        }
    }
    // Default case, should never happen
    return TEW.COMBAT.SYSTEM.actionRange;
};

Game_Action.prototype.updateAoeRange = function(item, battler: Game_Battler) {
    const aoe = this.extractAoeData(item, battler);
    if (aoe !== 0) {
        this._aoeRange = this.createRange(0, aoe, $gameSelector._x, $gameSelector._y, aoe === 1 ? 'diamond' : 'euclidean');
        this._aoeRange.push([$gameSelector._x, $gameSelector._y]);
    } else {
        this._aoeRange = [];
    }
};

// TODO
Game_Action.prototype.extractAoeData = function(object, battler: Game_BattlerBase) {
    const target = object.target;
    if (target) {
        const targetType: SpellTarget = target.type;
        if (targetType === SpellTarget.AOE) {
            const targetRadius: SpellTargetRadius = target.distance;
            if (targetRadius === SpellTargetRadius.WILL_BONUS) {
                return battler.paramBonus(Stat.WILL);
            }
        }
    }
    // Default case
    return 0;
};

Game_Action.prototype.createRange = function(d1, d2, x, y, shape) {
    var range = [];
    for (var i = x - d2; i <= x + d2; i++) {
        for (var j = y - d2; j <= y + d2; j++) {
            if (Math.abs(i - x) + Math.abs(j - y) > d1) {
                switch (shape) {
                    case 'diamond':
                        if (Math.abs(i - x) + Math.abs(j - y) <= d2) {
                            range.push([i, j]);
                        }
                        break;
                    case 'euclidean':
                        if ((i - x) * (i - x) + (j - y) * (j - y) <= d2 * d2) {
                            range.push([i, j]);
                        }
                        break;
                }
            }
        }
    }
    return range;
};

Game_Action.prototype.range = function() {
    return this._range;
};

Game_Action.prototype.showRange = function() {
    this._range.forEach(function(pos) {
        var tile = $gameMap.tile(pos[0], pos[1]); // Convert from [x, y] to (x + y * width)
        $gameMap.addTile(tile);
    }, this)
};

Game_Action.prototype.showAreaOfEffect = function() {
    this._aoeRange.forEach(function(pos) {
        var tile = $gameMap.tile(pos[0], pos[1]); // Convert from [x, y] to (x + y * width)
        $gameMap.addAoeTile(tile);
    }, this)
};

Game_Action.prototype.isInRange = function(x: number, y: number) {
    return this._range.some(pos => pos[0] === x && pos[1] === y);
};

Game_Action.prototype.color = function() {
    return this.isForFriend() ? TEW.COMBAT.SYSTEM.allyScopeColor : TEW.COMBAT.SYSTEM.enemyScopeColor;
};

Game_Action.prototype.setSpell = function(spellId: string) {
    this._item.setObject(TEW.DATABASE.SPELLS.ARRAY.find(entry => entry[0] === spellId));
};

Game_Action.prototype.isSpell = function() {
    return this._item.isSpell();
};

Game_Action.prototype.testDamageMinMaxValue = function(target, minMax) {
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
    value = this.testMinMaxVariance(value, item.damage.variance, minMax);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};

Game_Action.prototype.testMinMaxVariance = function(damage, variance, minMax) {
    var amp = Math.floor(Math.max(Math.abs(damage) * variance / 100, 0));
    var v = minMax ? amp : - amp;
    return damage >= 0 ? damage + v : damage - v;
};

Game_Action.prototype.setMove = function(moveRoute) {
    this._moveRoute = moveRoute;
};

Game_Action.prototype.applyMove = function() {
    var command = { code : this._moveRoute };
    var event = this.subject().event();
    event.processMoveCommand(command);
};

Game_Action.prototype.isTargetValid = function(battler) {
    return !!battler;
};

Game_Action.prototype.isMove = function() {
    return this._moveRoute !== 0;
};

Game_Action.prototype.setWait = function() {
    this.setSkill(this.subject().waitSkillId());
};

Game_Action.prototype.isWait = function() {
    return this.item() === $dataSkills[this.subject().waitSkillId()];
};

// TODO fishy
TEW.MEMORY.gameActionSubject = Game_Action.prototype.subject;
Game_Action.prototype.subject = function() {
    TEW.MEMORY.gameActionSubject.call(this);
    if ($gamePartyTs.inBattle()) {
        if (this._subjectActorId <= 0) {
            return $gameTroopTs.members()[this._subjectEnemyIndex];
        }
    }
    return TEW.MEMORY.gameActionSubject.call(this);
};

TEW.MEMORY.gameActionSetSubject = Game_Action.prototype.setSubject;
Game_Action.prototype.setSubject = function(subject) {
    TEW.MEMORY.gameActionSetSubject.call(this, subject);
    // For enemy restriction attack an ally...
    if ($gamePartyTs.inBattle()) {
        if (!subject.isActor()) {
            this._subjectEnemyIndex = $gameTroopTs.members().indexOf(subject);
        }
    }
};

Game_Action.prototype.attackRollModifier = function() {
    return this._modifiers.attackRoll || 0;
};

Game_Action.prototype.apply = function(target) {
    if (this.isAttack()) { // TODO may be obsolete if we rework attack actions
        this.applyWeaponAttack(target);
    } else if (this.isSpell()) {
        this.applySpell();
    }
};

// TODO split magic resolution
Game_Action.prototype.applyWeaponAttack = function(target) {
    var result = target.result();
    this.subject().clearResult();
    result.clear();

    const attacker = this.subject();
    const attackerWeapon = TEW.COMBAT.getWeaponFromId(attacker.equippedWeapon().id); // TODO attack with second hand
    const attackerWeaponEffects = TEW.COMBAT.getWeaponQualityEffects(attackerWeapon);
    const isMeleeWeapon = TEW.COMBAT.isMeleeWeapon(attackerWeapon);

    const defenderWeapon = TEW.COMBAT.getWeaponFromId(target.equippedWeapon().id); // TODO defend with second hand
    const defenderWeaponEffects = TEW.COMBAT.getWeaponQualityEffects(defenderWeapon);

    // Damage calc
    //
    // Choose weapon (elsewhere)
    //   Get combat characteristic associated with weapon
    const attackerCombatSkill = TEW.COMBAT.getAttackCompOrDefault(
        attacker,
        attackerWeapon.group,
        isMeleeWeapon
    );

    // TODO Get (best) weapon from defender
    // TODO ranged attacks must be dodged
    //   Get combat characteristic associated with weapon
    const defenderCombatSkill = TEW.COMBAT.getDefenceCompOrDefault(
        target,
        defenderWeapon.group,
        0, // TODO cc bonus
        TEW.COMBAT.isMeleeWeapon(defenderWeapon)
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
    if (isMeleeWeapon) {
        if (target.hasCondition(ConditionId.BLINDED)) {
            attackerConditionMod += 10;
        }
        // TODO deafened
        // TODO prone
    }

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
    // Check hit/miss
    result.isHit = combatResult.slAttacker >= 0 && combatResult.success;
    result.missed = !result.isHit;

    if (result.isHit) {
        // TODO Check weapon effects on crit (make a list)
        // TODO Check for crits

        // Check location
        const hitLocation: BodyLocation = BodyLocation.HEAD; // TODO location table

        // Armor and armor penetration
        let defenderArmorPoints: number = target.armorPointsAtLocation(location, attackerWeaponEffects.ignoredAP, attackerWeaponEffects.ignoreMetalArmor);
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

        this.executeDamage(target, Math.max(damage, 1));
            
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
        if (!isMeleeWeapon) {
            if (attackerWeapon.group === WeaponGroup.BLACKPOWDER) {
                const brokenTestResult = TEW.DICE.skillTest(target, 'CALM', 20);
                if (!brokenTestResult.success) {
                    // add broken condition
                }
            }
        }

        // TODO Lookup crit table (help me)
    }

    // if (result.isHit) {
    //     // old logic
    //     if (this.item().damage.type > 0) { // TODO remove this logic
    //         this.executeDamage(target, damage);
    //     }
    //     // TODO useless?
    //     this.item().effects.forEach(function(effect) {
    //         this.applyItemEffect(target, effect);
    //     }, this);
    //     this.applyItemUserEffect(target);
    // }
};

/**
 * TODO
 * Apply a spell to an unique target. If multiple targets are needed, this function should be called multiple times with the same spell and different targets.
 * The attacker only rolls once tho, as the result is stored and retrieved for each supplementary target.
 */
Game_Action.prototype.applySpell = function(target) {
    var result = target.result();
    this.subject().clearResult();
    result.clear();
    
    const attacker = this.subject();
    const spell: Spell = this.item();
    
    /*
    If Dice roll hasnt been made
        Roll dice
        Store result
    else
        Retrieve result
    */

    // Roll dice
    if (!this._subjectAbilityRoll) {
        const womModifier = $gameVariables.getValue(15);
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
                this.executeDamage(target, Math.max(damage, 1));
                break;
            case SpellEffectType.SCALING_DAMAGE:
                break;
            case SpellEffectType.CONDITION:
                target.addCondition(spell.effect.conditionId);
                break;
            case SpellEffectType.SPECIAL:
                spell.effect.handler(attacker, target, this._subjectAbilityRoll.sl);
                break;
        }
    }
    // GIGA TODO counterspell
};

// Calculating damage value
// Used in auto battle actions
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

Game_Action.prototype.makeTargets = function() {
    const targets = [];
    const aliveBattlersInRange = $gameParty.aliveMembers().concat($gameTroop.aliveMembers());

    // TODO self-targetting
    // TODO multi-targetting?

    // Special case for AOE attacks: user is a valid target and targets can be outside of attack range
    if (this._aoeRange.length > 0) {
        this._aoeRange.forEach((tile: [number, number]) => {
            const x = tile[0];
            const y = tile[1];
            for (let battler of aliveBattlersInRange) {
                if (battler.pos(x, y)) {
                    targets.push(battler);
                    break;
                }
            }
        });
    } else { // Single target
        targets.push(aliveBattlersInRange[Math.max(this._targetIndex, 0)]);
    }

    return targets;
    // return this.repeatTargets(targets); // useless?
};

Game_Action.prototype.targetsForOpponents = function() {
    console.log("Game_Action - targetsForOpponents");
    var targets = [];
    var unit = this.opponentsUnit();
    if (this.isForRandom()) {
        console.log("isForRandom");
        for (var i = 0; i < this.numTargets(); i++) {
            targets.push(unit.randomTarget());
        }
    } else if (this.isForOne()) {
        console.log("isForOne");
        if (this._targetIndex < 0) {
            targets.push(unit.randomTarget());
        } else {
            targets.push(unit.smoothTarget(this._targetIndex));
        }
    } else {
        console.log("else, as always");
        targets = unit.aliveMembers();
    }
    console.log("Targets", targets);
    return targets;
};

Game_Action.prototype.targetsForFriends = function() {
    console.log("Game_Action - targetsForFriends");
    var targets = [];
    var unit = this.friendsUnit();
    if (this.isForUser()) {
        console.log("isForUser");
        return [this.subject()];
    } else if (this.isForDeadFriend()) {
        console.log("isForDeadFriend");
        if (this.isForOne()) {
            targets.push(unit.smoothDeadTarget(this._targetIndex));
        } else {
            targets = unit.deadMembers();
        }
    } else if (this.isForOne()) {
        console.log("isForOne");
        if (this._targetIndex < 0) {
            targets.push(unit.randomTarget());
        } else {
            targets.push(unit.smoothTarget(this._targetIndex));
        }
    } else {
        console.log("else, as always");
        targets = unit.aliveMembers();
    }
    console.log("Targets", targets);
    return targets;
};

// TODO unused for now but interesting
Game_Action.prototype.applyGlobal = function() {
    // this.item().effects.forEach(function(effect) {
    //     if (effect.code === Game_Action.EFFECT_COMMON_EVENT) {
    //         $gameTemp.reserveCommonEvent(effect.dataId);
    //     }
    // }, this);
};
