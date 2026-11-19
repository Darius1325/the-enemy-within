// ----------------------

// File: critical.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 20/11/2026
// Description: Entries of the critical tables: critical wounds, fumbles (Oops! table) and miscasts.
// Reference: WFRP5e Core Rulebook p165 (fumbles), p171-176 (critical wounds), p235-239 (miscasts)

// ----------------------

import { CompleteBattler } from "./battlerAI";
import { ConditionId } from "./enum";

/**
 * Body locations owning a critical wound table (arms and legs share theirs)
 */
export type CriticalLocation = 'HEAD' | 'BODY' | 'ARMS' | 'LEGS';

/**
 * Effect of a critical entry, applied to the battler suffering it
 * (the wounded target for critical wounds, the fumbler for fumbles, the caster for miscasts)
 */
export type CriticalHandler = (battler: CompleteBattler) => void;

export type Critical = {
    name: string;

    /**
     * Dice rolls triggering this critical effect.
     * Both min and max are inclusive. Rolls can be modified, so the first and last entries
     * of a table use -Infinity and Infinity as bounds.
     */
    interval: {
        min: number;
        max: number;
    };

    /**
     * Wounds lost on top of the effect, ignoring Toughness Bonus and Armour Points
     * (Wounds column of the critical wound tables). Applied after the handler.
     */
    wounds: number;

    /**
     * Whether the handler applies the rulebook effect.
     * When false, the handler applies a placeholder effect instead (a Bleeding Condition)
     */
    implemented: boolean;

    /**
     * Rulebook effect, summarised
     */
    description: string;

    handler: CriticalHandler;
};

/**
 * Building blocks for critical handlers (see TEW_Criticals.ts)
 */
export type CriticalUtilities = {
    /**
     * Placeholder for effects that are not implemented yet: 1 Bleeding Condition
     */
    placeholder: CriticalHandler;
    /**
     * The battler dies instantly
     */
    death: CriticalHandler;
    /**
     * No effect besides the Wounds of the entry
     */
    none: CriticalHandler;
    /**
     * Gain each condition with the given number of stacks
     */
    conditions: (stacks: Partial<Record<ConditionId, number>>) => CriticalHandler;
    /**
     * Make a test, and apply the effect if it fails
     * @param compId competence tested
     * @param slModifier difficulty of the test, in SL (Average is +2, Challenging is 0...)
     * @param onFailure effect applied on a failure
     */
    testOrElse: (compId: string, slModifier: number, onFailure: CriticalHandler) => CriticalHandler;
    /**
     * Apply several effects in order
     */
    combine: (...handlers: CriticalHandler[]) => CriticalHandler;
};
