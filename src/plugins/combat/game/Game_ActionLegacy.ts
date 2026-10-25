// $PluginCompiler TEW_Combat.js 99

import { SpellRange, SpellTarget, SpellTargetRadius, Stat } from "../../_types/enum";
import TEW from "../../_types/tew";
import { Game_BattlerBase } from "../../base/stats/Game_BattlerBase";
import Game_Battler from "./Game_Battler";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Action - legacy
//
// RMMV / TacticsSystem flavoured part of Game_Action, used by actions built without a BattleDecision
// (see Game_Action.ts). Everything in this file is meant to be deleted once the overhaul is complete.
// Compiled before Game_Action.ts, so that the dispatching entry points there always win.

// Trace calls to legacy code at runtime, to spot what still depends on it
Game_Action.logLegacyCall = function(functionName: string) {
    console.log("INFO Legacy Game_Action call " + functionName + ", look into it");
};

Game_Action.prototype.initializeLegacy = function(forcing: boolean) {
    Game_Action.logLegacyCall('initialize');
    this._forcing = forcing || false;
    this._moveRoute = 0; // Per-tile move actions (see Game_Battler._moves)
    this._modifiers = {};
};

Game_Action.prototype.applyLegacy = function(_target: Game_Battler) {
    // Legacy actions never had a working resolution in TEW: their effects are not implemented
    Game_Action.logLegacyCall('apply');
};

// ----------------------
// Per-tile moves
// ----------------------

Game_Action.prototype.setMove = function(moveRoute: number) {
    this._moveRoute = moveRoute;
};

Game_Action.prototype.applyMove = function() {
    const command = { code: this._moveRoute };
    const event = this.subject().event();
    event.processMoveCommand(command);
};

Game_Action.prototype.isMove = function() {
    return !this.isDecision() && this._moveRoute !== 0;
};

// ----------------------
// Targetting
// ----------------------

Game_Action.prototype.combatOpponentsUnit = function(battler: Game_Battler) {
    Game_Action.logLegacyCall('combatOpponentsUnit');
    if (!this.isForOpponent()) {
        return [];
    }
    return this.searchBattlers(battler, battler.opponentsUnitTS().aliveMembers());
};

// The acting battler is always part of its own combat unit
Game_Action.prototype.combatFriendsUnit = function(battler: Game_Battler) {
    Game_Action.logLegacyCall('combatFriendsUnit');
    if (!this.isForFriend()) {
        return [battler];
    }
    return [battler].concat(this.searchBattlers(battler, battler.friendsUnitTS().aliveMembers()));
};

Game_Action.prototype.searchBattlers = function(battler, units) {
    Game_Action.logLegacyCall('searchBattlers');
    const battlers = [];
    let item;
    if (this.isAttackRange(battler)) { // TODO fuse this with base flow ?
        item = TEW.COMBAT.getWeaponFromId(battler.equippedWeapon().id);
    } else {
        item = this.item();
    }
    this.updateRangeLegacy(item, battler);
    this.updateAoeRangeLegacy(item, battler);
    for (let i = 0; i < this._range.length; i++) {
        const redCell = this._range[i];
        const x = redCell[0];
        const y = redCell[1];
        for (let j = 0; j < units.length; j++) {
            // TODO unnecessary check in O(n²) here, we should be able to push the active battler here
            if (units[j].pos(x, y) && units[j] !== battler) {
                battlers.push(units[j]);
            }
        }
    }
    return battlers;
};

Game_Action.prototype.isAttackRange = function (subject) {
    Game_Action.logLegacyCall('isAttackRange');
    return subject.isActor() && this.isAttack();
};

Game_Action.prototype.updateRangeLegacy = function(item, battler: Game_Battler) {
    Game_Action.logLegacyCall('updateRangeLegacy');
    const range = this.extractRangeDataLegacy(item, battler);
    // TODO better algorithm for obstacles
    if (range === 0 || this.isForUser()) {
        this._range = [[battler.tx, battler.ty]];
    } else {
        this._range = this.createRange(0, range, battler.tx, battler.ty, range === 1 ? 'diamond' : 'euclidean');
    }
};

Game_Action.prototype.extractRangeDataLegacy = function(object, battler: Game_BattlerBase) {
    Game_Action.logLegacyCall('extractRangeDataLegacy');
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

Game_Action.prototype.updateAoeRangeLegacy = function(item, battler: Game_Battler) {
    Game_Action.logLegacyCall('updateAoeRangeLegacy');
    const aoe = this.extractAoeDataLegacy(item, battler);
    if (aoe !== 0) {
        this._aoeRange = this.createRange(0, aoe, $gameSelector._x, $gameSelector._y, aoe === 1 ? 'diamond' : 'euclidean');
        this._aoeRange.push([$gameSelector._x, $gameSelector._y]);
    } else {
        this._aoeRange = [];
    }
};

// TODO
Game_Action.prototype.extractAoeDataLegacy = function(object, battler: Game_BattlerBase) {
    Game_Action.logLegacyCall('extractAoeDataLegacy');
    const target = object?.target;
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
    Game_Action.logLegacyCall('createRange');
    const range = [];
    for (let i = x - d2; i <= x + d2; i++) {
        for (let j = y - d2; j <= y + d2; j++) {
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

Game_Action.prototype.makeTargets = function() {
    Game_Action.logLegacyCall('makeTargets');
    const targets = [];
    const aliveBattlersInRange = $gameParty.aliveMembers().concat($gameTroop.aliveMembers());

    // TODO self-targetting
    // TODO multi-targetting?

    // TODO optimize using euclidean distance
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
};

// ----------------------
// RMMV items, skills and spells
// ----------------------

Game_Action.prototype.setSpell = function(spellId: string) {
    Game_Action.logLegacyCall('setSpell');
    this._item.setObject(TEW.DATABASE.SPELLS.ARRAY.find(entry => entry[0] === spellId));
};

Game_Action.prototype.isSpell = function() {
    Game_Action.logLegacyCall('isSpell');
    return this._item.isSpell();
};

Game_Action.prototype.setWait = function() {
    Game_Action.logLegacyCall('setWait');
    this.setSkill(this.subject().waitSkillId());
};

Game_Action.prototype.isWait = function() {
    Game_Action.logLegacyCall('isWait');
    return this.item() === $dataSkills[this.subject().waitSkillId()];
};

Game_Action.prototype.testDamageMinMaxValue = function(target, minMax) {
    Game_Action.logLegacyCall('testDamageMinMaxValue');
    const item = this.item();
    const baseValue = this.evalDamageFormula(target);
    let value = baseValue * this.calcElementRate(target);
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
    Game_Action.logLegacyCall('testMinMaxVariance');
    const amp = Math.floor(Math.max(Math.abs(damage) * variance / 100, 0));
    const v = minMax ? amp : - amp;
    return damage >= 0 ? damage + v : damage - v;
};

// Calculating damage value
// Used in auto battle actions
Game_Action.prototype.makeDamageValue = function(target, critical) {
    Game_Action.logLegacyCall('makeDamageValue');
    const item = this.item();
    const baseValue = this.evalDamageFormula(target);
    let value = baseValue * this.calcElementRate(target);
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

Game_Action.prototype.targetsForOpponents = function() {
    Game_Action.logLegacyCall('targetsForOpponents');
    let targets = [];
    const unit = this.opponentsUnit();
    if (this.isForRandom()) {
        for (let i = 0; i < this.numTargets(); i++) {
            targets.push(unit.randomTarget());
        }
    } else if (this.isForOne()) {
        if (this._targetIndex < 0) {
            targets.push(unit.randomTarget());
        } else {
            targets.push(unit.smoothTarget(this._targetIndex));
        }
    } else {
        targets = unit.aliveMembers();
    }
    return targets;
};

Game_Action.prototype.targetsForFriends = function() {
    Game_Action.logLegacyCall('targetsForFriends');
    let targets = [];
    const unit = this.friendsUnit();
    if (this.isForUser()) {
        return [this.subject()];
    } else if (this.isForDeadFriend()) {
        if (this.isForOne()) {
            targets.push(unit.smoothDeadTarget(this._targetIndex));
        } else {
            targets = unit.deadMembers();
        }
    } else if (this.isForOne()) {
        if (this._targetIndex < 0) {
            targets.push(unit.randomTarget());
        } else {
            targets.push(unit.smoothTarget(this._targetIndex));
        }
    } else {
        targets = unit.aliveMembers();
    }
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
