// ----------------------

// File: condition.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Type definitions for the WFRP4e Conditions system.
// Conditions are stackable status effects applied during combat and exploration.
// Reference: WFRP4e Core Rulebook p.167

// ----------------------

export type ConditionEffect = {
    /** Modifier applied to all Skill Tests while condition is active (per stack) */
    testModifier?: number;
    /** Whether the battler cannot voluntarily move */
    blocksMovement?: boolean;
    /** Whether the battler loses their Action this turn */
    blocksAction?: boolean;
    /** Wounds lost at the start of each turn (per stack) */
    damagePerTurn?: number;
    /** Whether the battler must spend their movement fleeing away from the Fear source */
    mustFlee?: boolean;
    /** Whether the battler is entirely incapacitated (no actions, no movement) */
    incapacitated?: boolean;
    /** Modifier to Melee/Ballistic Weapon Skill (per stack) */
    weaponSkillModifier?: number;
    /** Modifier to Initiative (per stack) */
    initiativeModifier?: number;
};

export type Condition = {
    /** Unique identifier, all caps */
    id: string;
    /** Display name */
    name: string;
    /** Description shown in the UI */
    description: string;
    /** Icon index from the RMMV icon sheet */
    icon?: number;
    /**
     * Maximum number of stacks this condition can reach.
     * Use 1 for binary conditions (Prone, Surprised, Unconscious).
     * Use Infinity for freely stackable ones (Bleeding).
     */
    maxStacks: number;
    /**
     * Whether this condition is automatically removed at the start of the
     * afflicted battler's next turn (e.g. Surprised).
     */
    removeOnTurnStart?: boolean;
    /** Effects applied per stack */
    effect: ConditionEffect;
};
