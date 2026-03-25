// ----------------------

// File: corruption.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Type definitions for the Corruption & Mutation system.
//
// Corruption accumulates in two forms:
//   - Physical Corruption  → risks physical Mutations (visible, monstrous)
//   - Mental Corruption    → risks Disorders (insanity, obsessions, phobias)
//
// When a character's total Corruption ≥ their Corruption Threshold (= TOUG bonus + WILL bonus),
// they must pass a Challenging (+0) Endurance Test or gain a Mutation/Disorder.
//
// Reference: WFRP4e Core Rulebook p.180-185

// ----------------------

export type CorruptionEntry = {
    /** Unique identifier, all-caps */
    id: string;
    /** Display name */
    name: string;
    /** Flavour description shown in the journal */
    description: string;
    /** Whether this is a physical mutation (true) or mental disorder (false) */
    physical: boolean;
    /**
     * Ongoing stat modifiers applied while this mutation/disorder is active.
     * Key = stat ID, value = modifier (positive or negative).
     */
    statModifier?: Record<string, number>;
    /**
     * Conditions automatically applied at the start of each combat while
     * this mutation/disorder is present.
     */
    combatConditions?: Record<string, number>;
    /**
     * Whether this mutation/disorder is considered a benefit (some mutations grant bonuses).
     */
    beneficial?: boolean;
};
