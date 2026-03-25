// $PluginCompiler TEW_Combat.js

// ----------------------

// File: TEW_CriticalInjuriesSystem.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Resolution logic for WFRP4e Critical Injuries.
//
// How it works :
//   1. A hit that deals damage ≥ target's current Wounds triggers a critical.
//   2. Roll 1d100 + excessDamage (damage beyond 0 Wounds) to get the critRoll.
//   3. Determine the hit location from the attacker's roll (units digit method).
//   4. Look up the matching CriticalInjury entry in TEW.DATABASE.CRITICAL_INJURIES.
//   5. Apply conditions, stat reductions, and check for fatality.
//
// Hit location from d100 units digit (WFRP4e p.159):
//   1-2   → HEAD
//   3-4   → ARMS
//   5-9   → BODY
//   0     → LEGS

// ----------------------
// Imports
// ----------------------

import { BodyLocation } from "../../_types/enum";
import TEW from "../../_types/tew";
import { CriticalInjury } from "../../_types/criticalInjury";

// ----------------------
// $StartCompilation
// ----------------------

// ---------------------------------------------------------------------------
// Initialisation sur chaque combattant
// ---------------------------------------------------------------------------

TEW.MEMORY.criticalInjuriesInitMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
    TEW.MEMORY.criticalInjuriesInitMembers.call(this);
    /** Array of IDs of all critical injuries currently suffered */
    this._criticalInjuries = [];
};

// ---------------------------------------------------------------------------
// Accès en lecture
// ---------------------------------------------------------------------------

Game_BattlerBase.prototype.criticalInjuries = function(): string[] {
    return this._criticalInjuries || [];
};

Game_BattlerBase.prototype.hasCriticalInjury = function(injuryId: string): boolean {
    return this._criticalInjuries.includes(injuryId);
};

/**
 * Cumulated permanent test modifier from all active critical injuries.
 */
Game_BattlerBase.prototype.criticalInjuryTestModifier = function(): number {
    return this._criticalInjuries.reduce((total: number, id: string) => {
        const inj = TEW.DATABASE.CRITICAL_INJURIES.find((i: CriticalInjury) => i.id === id);
        return total + (inj?.permanentTestModifier || 0);
    }, 0);
};

// ---------------------------------------------------------------------------
// Logique de résolution
// ---------------------------------------------------------------------------

/**
 * Derive the hit location from the units digit of the attacker's dice roll.
 * WFRP4e p.159:  1-2 → HEAD | 3-4 → ARMS | 5-9 → BODY | 0 → LEGS
 */
TEW.COMBAT.getHitLocationFromRoll = function(attackRoll: number): BodyLocation {
    const units = attackRoll % 10;
    if (units === 1 || units === 2) return BodyLocation.HEAD;
    if (units === 3 || units === 4) return BodyLocation.ARMS;
    if (units === 0)                return BodyLocation.LEGS;
    return BodyLocation.BODY;
};

/**
 * Find the CriticalInjury entry matching the given location and critRoll.
 */
TEW.COMBAT.lookupCriticalInjury = function(location: BodyLocation, critRoll: number): CriticalInjury | null {
    const entries = (TEW.DATABASE.CRITICAL_INJURIES as CriticalInjury[])
        .filter(i => i.location === location && critRoll >= i.minRoll && critRoll <= i.maxRoll);
    return entries.length > 0 ? entries[0] : null;
};

/**
 * Resolve a critical hit on a target battler.
 *
 * @param target         The battler receiving the injury
 * @param attackRoll     The attacker's original d100 roll (used for hit location)
 * @param excessDamage   Damage dealt beyond 0 Wounds (minimum 0)
 * @returns              The resolved CriticalInjury (or null if no table match)
 */
TEW.COMBAT.resolveCriticalInjury = function(
    target: Game_BattlerBase,
    attackRoll: number,
    excessDamage: number
): CriticalInjury | null {
    const location = TEW.COMBAT.getHitLocationFromRoll(attackRoll);
    const critRoll  = TEW.DICE.roll(100) + Math.max(0, excessDamage);
    const injury    = TEW.COMBAT.lookupCriticalInjury(location, critRoll);

    if (!injury) return null;

    // Record the injury on the battler
    if (!target._criticalInjuries.includes(injury.id)) {
        target._criticalInjuries.push(injury.id);
    }

    // Apply conditions
    if (injury.applyConditions) {
        for (const [condId, stacks] of Object.entries(injury.applyConditions)) {
            target.addCondition(condId, stacks as number);
        }
    }

    // Apply stat reductions
    if (injury.statReduction) {
        for (const [statId, amount] of Object.entries(injury.statReduction)) {
            const current = target.paramByName(statId);
            if (current !== undefined) {
                // Store permanent stat penalty in a dedicated map
                if (!target._criticalStatPenalties) target._criticalStatPenalties = {};
                target._criticalStatPenalties[statId] = (target._criticalStatPenalties[statId] || 0) + (amount as number);
            }
        }
    }

    // Handle fatal injuries
    if (injury.fatal) {
        target.addState(target.deathStateId());
    }

    return injury;
};

/**
 * Remove a critical injury from a battler (after successful healing).
 * Also reverts the stat penalties associated with that injury.
 */
TEW.COMBAT.healCriticalInjury = function(target: Game_BattlerBase, injuryId: string): void {
    const idx = target._criticalInjuries.indexOf(injuryId);
    if (idx === -1) return;

    target._criticalInjuries.splice(idx, 1);

    const injury = (TEW.DATABASE.CRITICAL_INJURIES as CriticalInjury[]).find(i => i.id === injuryId);
    if (!injury?.statReduction || !target._criticalStatPenalties) return;

    for (const [statId, amount] of Object.entries(injury.statReduction)) {
        const current = target._criticalStatPenalties[statId] || 0;
        const next    = current - (amount as number);
        if (next <= 0) {
            delete target._criticalStatPenalties[statId];
        } else {
            target._criticalStatPenalties[statId] = next;
        }
    }
};
