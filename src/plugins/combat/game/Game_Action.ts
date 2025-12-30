// $PluginCompiler TEW_Combat.js

import { Stat } from "../../_types/enum";
import TEW from "../../_types/tew";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.

TEW.MEMORY.gameActionInit = Game_Action.prototype.initialize;
Game_Action.prototype.initialize = function(subject, forcing) {
    TEW.MEMORY.gameActionInit.call(this, subject, forcing);
    this._moveRoute = 0;
};

Game_Action.prototype.combatOpponentsUnit = function(battler) {
    var units = battler.opponentsUnitTS().aliveMembers();
    return this.searchBattlers(battler, units);
};

Game_Action.prototype.combatFriendsUnit = function(battler) {
    var friends = battler.friendsUnitTS().aliveMembers();
    var battlers = [battler]; // first since the user keeps the same index !
    if (this.isForFriend()) {
        battlers = battlers.concat(this.searchBattlers(battler, friends));
    }
    return battlers;
};

Game_Action.prototype.searchBattlers = function(battler, units) {
    var battlers = [];
    var item = this.item();
    if (this.isAttackRange(battler)) {
        item = battler.weapons()[0] || battler.weapons()[1];
    }
    this.updateRange(item, battler.tx, battler.ty);
    for (var i = 0; i < this._range.length; i++) {
        var redCell = this._range[i];
        var x = redCell[0];
        var y = redCell[1];
        for (var j = 0; j < units.length; j++) {
            if (units[j].pos(x, y) && units[j] !== battler) {
                battlers.push(units[j]);
            }
        }
    }
    return battlers;
};

Game_Action.prototype.isAttackRange = function (subject) {
    return subject.isActor() && this.isAttack() && !subject.hasNoWeapons();
};

Game_Action.prototype.updateRange = function(item, x, y) {
    var data = this.extractRangeData(item);
    // range: 10 -> range: 0 10
    if (data[1] === undefined) {
        data[1] = data[0];
        data[0] = 0;
    }
    // range:
    if (data[2] === undefined) {
        data[2] = 'diamond';
    }
    this._range = this.createRange(parseInt(data[0]), parseInt(data[1]), x, y, data[2]);
    if (this.isForUser()) {
        this._range = [[x, y]];
    }
};

Game_Action.prototype.extractRangeData = function (object) {
    var data = object.meta['Range'] || TEW.COMBAT.SYSTEM.actionRange;
    return data.trim().split(' ');
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
                    case 'rectangle':
                        range.push([i, j]);
                        break;
                    case 'line':
                        if (i === x || j === y) {
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
        var tile = $gameMap.tile(pos[0], pos[1]);
        $gameMap.addTile(tile);
    }, this)
};

Game_Action.prototype.color = function() {
    return this.isForFriend() ? TEW.COMBAT.SYSTEM.allyScopeColor : TEW.COMBAT.SYSTEM.enemyScopeColor;
}

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
    if (this.isForOpponent()) {
        return battler && !battler.isActor();
    } else {
        return battler && battler.isActor();
    }
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

Game_Action.prototype.apply = function(target) {
    console.log("Game_Action.prototype.apply");
    console.log("target, ", target);
    console.log("this.subject(), ", this.subject());
    var result = target.result();
    this.subject().clearResult();
    result.clear();

    const attacker = this.subject();
    const attackerWeapon = TEW.COMBAT.getWeaponFromId(attacker.equippedWeapon().id); // TODO attack with second hand
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
        TEW.COMBAT.isMeleeWeapon(attackerWeapon)
    );

    // TODO Get (best) weapon from defender
    //   Get combat characteristic associated with weapon
    const defenderCombatSkill = TEW.COMBAT.getDefenceCompOrDefault(
        target,
        defenderWeapon.group,
        TEW.COMBAT.isMeleeWeapon(defenderWeapon)
    );

    // TODO Check for opponent's defensive tools (shield)
    // TODO Check attacker's talents for modifiers (make a list)
    // TODO Check defender's talents for modifiers (make a list)
    // TODO Check weapon effects on bonus (PRECISE)
    // TODO Check sizes
    // TODO Check outnumberment
    
    // Roll dice
    const combatResult = TEW.DICE.combatOpposedSkillTest(
        attackerCombatSkill.value + attackerWeaponEffects.attackMod,
        defenderCombatSkill.value + defenderWeaponEffects.defenceMod,
        true,
        false // GIGA TODO
    );

    // Special weapon quality checks
    // Impale
    if (attackerWeaponEffects.effects.IMPALE) {
        if (combatResult.rollAttacker % 10 === 0) {
            combatResult.criticalAttacker = true;
        }
    }
    // Damaging
    if (attackerWeaponEffects.effects.DAMAGING) {
        const damagingSL = (combatResult.rollAttacker % 10) || 10; // 10 SL if roll is a multiple of 10
        if (damagingSL > combatResult.slAttacker) {
            combatResult.slAttacker = damagingSL;
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

    // TODO Check weapon effects on crit (make a list)
    // TODO Check for crits

    // Compute damage
    //   Add weapon bonus + stat bonus + opposed DR
    //   Check location
    //   Check weapon effects based on location (make a list)
    //   Remove defender's toug + TODO armor points
    const damage = combatResult.slAttacker - combatResult.slDefender
        + attackerWeapon.damage + (attackerWeapon.strBonus ? attacker.paramBonus(Stat.STRG) : 0)
        - target.paramBonus(Stat.TOUG);
    console.log(
        combatResult,
        attackerWeapon.damage,
        attackerWeapon.strBonus,
        attacker.paramBonus(Stat.STRG),
        target.paramBonus(Stat.TOUG)
    );

    // TODO Lookup crit table (help me)

    if (result.isHit) {
        if (this.item().damage.type > 0) {
            this.executeDamage(target, damage);
        }
        this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
    }
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
