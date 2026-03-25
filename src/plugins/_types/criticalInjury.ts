// ----------------------

// File: criticalInjury.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Type definitions for the WFRP4e Critical Injuries system.
// When a hit reduces a target to 0 Wounds or deals excess damage,
// a critical injury is rolled on a location-based table.
// Reference: WFRP4e Core Rulebook p.159-163

// ----------------------

import { BodyLocation } from "./enum";

export type CriticalInjury = {
    /** Unique identifier */
    id: string;
    /** Display name */
    name: string;
    /** Narrative description shown in the UI */
    description: string;
    /** Hit location this entry belongs to */
    location: BodyLocation;
    /**
     * Minimum roll value (1-100) that produces this injury.
     * The roll = d100 + excess damage dealt.
     */
    minRoll: number;
    /** Maximum roll value (1-100) that produces this injury. */
    maxRoll: number;
    /**
     * Condition IDs to immediately apply to the target.
     * Key = conditionId, value = number of stacks added.
     */
    applyConditions?: Record<string, number>;
    /**
     * Whether this injury kills the target outright.
     * Triggers a separate death/dying sequence.
     */
    fatal?: boolean;
    /**
     * Modifier applied to all subsequent tests by the victim
     * (on top of any condition modifiers) until healed.
     */
    permanentTestModifier?: number;
    /**
     * Which stat is permanently reduced (WFRP4e "lasting injuries").
     * Key = stat ID, value = amount reduced.
     */
    statReduction?: Record<string, number>;
    /**
     * Difficulty modifier applied to Heal / Chirurgery tests
     * needed to remove this injury.
     * Positive = easier, negative = harder.
     */
    healModifier?: number;
    /**
     * Free-text note displayed to the GM about special rulings
     * (e.g. "needs a Chirurgeon within 1 hour or gains Festering Wound").
     */
    gmNote?: string;
};
