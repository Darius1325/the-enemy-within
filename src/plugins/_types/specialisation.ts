// ----------------------

// File: specialisation.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 05/09/2026
// Description: This file contains the type definitions tied to grouped skills and talents. A grouped skill is a heading covering several specialisations, each of which behaves as a skill of its own: Melee (Fencing) and Melee (Flail) are two specialisations of the Melee group. Careers may grant a specialisation of their choice rather than a named one, which opens a slot the player fills once, when the advance is allocated.

// ----------------------
// Imports
// ----------------------

/**
 * A grouped skill or talent, holding every specialisation it covers
 * Built at load from the `group` fields of the competences and talents themselves, rather than
 * matched by ID prefix, so that a placeholder or an unrelated ID sharing the prefix never joins
 * the group by accident
 */
export type SpecialisationGroup = {
    /**
     * Group ID, which is also the prefix its members are named after
     * @example "MELEE"
     */
    id: string;
    /**
     * Displayed name of the group, taken from the members' own names
     * @example "Melee"
     */
    name: string;
    /**
     * IDs of every specialisation the group covers, in database order
     */
    members: string[];
};

/**
 * A wildcard entry a career may list, and the specialisations it opens
 * Most of them offer a whole group — `Melee (Any)` — but some offer a choice between two named
 * specialisations instead, such as `Stealth (Rural or Urban)`. Both open a slot the player fills
 * the same way, and only the pool and the displayed name tell them apart
 */
export type SpecialisationPick = {
    /**
     * Wildcard ID, as the careers write it
     * @example "MELEE_ANY"
     * @example "STEALTH_RURAL_OR_URBAN"
     */
    id: string;
    /**
     * Group the specialisations are drawn from, which names a whole-group pick
     * @example "MELEE"
     */
    group: string;
    /**
     * Displayed name, set only when the pick is not simply `<Group> (Any)`
     * @example "Stealth (Rural or Urban)"
     */
    name?: string;
    /**
     * Specialisations on offer, before the ones the career already grants are taken out
     */
    members: string[];
};

/**
 * Whether a slot is filled with a competence or with a talent
 * They are held in a single list on the actor, and told apart by this
 */
export type AnySlotKind = 'comp' | 'talent';

/**
 * A pick a career grants and the player has yet to make, or has already made
 * Careers list some entries as `Skill (Any)`, meaning one specialisation of that group is the
 * player's to choose. One slot stands for one such pick: a career granting the same group twice
 * opens two slots, and each of them is filled on its own
 */
export type AnySlot = {
    /**
     * Whether the slot is filled with a competence or with a talent
     */
    kind: AnySlotKind;
    /**
     * ID of the career the slot comes from
     * @example "ENTERTAINER_1"
     */
    career: string;
    /**
     * Wildcard entry which opened the slot
     * @example "MELEE_ANY"
     */
    wildcard: string;
    /**
     * ID of the chosen specialisation, or null while the slot is unspent
     * Once written it is permanent, as the rules make the choice part of the career level
     */
    chosen: string | null;
};
