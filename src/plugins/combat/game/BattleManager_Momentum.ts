// $PluginCompiler TEW_Combat.js

import Game_Battler from "./Game_Battler";

// $StartCompilation

//-----------------------------------------------------------------------------
// BattleManager - momentum
//
// Momentum (WFRP 5th edition) is an individual state replacing 4th edition advantages: a battler has it or not.
// Gaining and losing it is handled by Game_Battler (damage, conditions) and Game_Action (melee tests, charges).
//
// The active battler can spend it on free actions, which cost no move or action point (Momentum menu):
//  - Transfer: decision BattleOption.MOMENTUM_TRANSFER targetting an ally (see Game_Action.applyMomentumTransfer).
//    Enemies choose it through Game_Battler.momentumDecision, before their AI profile.
//  - Disengage: TODO, will allow to move away from melee for free
//  - Off-hand attack: a melee attack with the second hand weapon (or bare fists), executed as a MELEE_ATTACK decision
//    with { momentumAction } modifiers (see Game_Action.applyAttack). Only one momentum attack per turn.

export enum MomentumAction {
    OFF_HAND_ATTACK = "offHandAttack"
}

/**
 * Momentum only exists in battle: every battler loses it when a battle starts or ends
 */
BattleManager.clearAllMomentum = function() {
    this.allBattleMembers().forEach((battler: Game_Battler) => battler.clearMomentum());
};

// ----------------------
// Availability (battle menu)
// ----------------------

BattleManager.canUseMomentum = function() {
    return !!this._subject && this._subject.hasMomentum();
};

/**
 * Whether the active battler has momentum and at least one free action to spend it on
 */
BattleManager.canUseMomentumAction = function() {
    return this.canTransferMomentum() || this.canDisengageWithMomentum() || this.canMomentumAttack();
};

BattleManager.canTransferMomentum = function() {
    return this.canUseMomentum() && this._subject.momentumTransferTargets().length > 0;
};

BattleManager.canDisengageWithMomentum = function() {
    return false; // TODO disengage mechanic
};

/**
 * Off-hand attack: once per turn, against an opponent in melee range
 */
BattleManager.canMomentumAttack = function() {
    const subject = this._subject;
    return !!subject && subject.canMomentumAttack()
        && subject.opponentsUnitTS().aliveMembers().some((opponent: Game_Battler) => subject.isAdjacentTo(opponent));
};
