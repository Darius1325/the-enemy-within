import { SpellDomain, SpellDuration, SpellRange, SpellTarget, SpellTargetRadius, SpellType } from "./enum";

/**
 * Spell object type
 */
export type Spell = {
    /**
     * Spell name
     * @example "Aethyric Armour"
     */
    name: string;
    /**
     * Spell type
     * @see {@link ../types/enum.ts#SpellType}
     * @example SpellType.SPELL
     */
    type: SpellType;
    /**
     * Spell domain
     * @see {@link ../types/enum.ts#SpellDomain}
     * @example SpellDomain.ARCANE
     */
    domain: SpellDomain;
    /**
     * Casting Number
     * @example 3
     */
    cn: number;
    /**
     * Target
     */
    target: {
        /**
         * Target type
         * @see {@link ../types/enum.ts#SpellTarget}
         * @example SpellTarget.ONE
         */
        type: SpellTarget;
        /**
         * Target radius
         * @see {@link ../types/enum.ts#SpellTargetRadius}
         * @example SpellTargetRadius.WILL_BONUS
         */
        distance?: SpellTargetRadius;
    };
    /**
     * Range of spell
     */
    range?: {
        /**
         * Range type
         * @see {@link ../types/enum.ts#SpellRange}
         * @example SpellRange.WILL
         */
        type: SpellRange;
    };
    /**
     * Duration of spell
     */
    duration: {
        /**
         * Duration type
         * @see {@link ../types/enum.ts#SpellDuration}
         * @example SpellDuration.SPECIAL
         */
        type: Omit<SpellDuration, SpellDuration.NUMBER>;
        /**
         * Multiplier of duration
         * @example 10
         */
        multiplier?: number;
    } | {
        /**
         * Duration type
         * @see {@link ../types/enum.ts#SpellDuration}
         * @example SpellDuration.NUMBER
         */
        type: SpellDuration.NUMBER;
        /**
         * Duration value
         * @example 600
         */
        duration: number;
    };
    /**
     * Spell description
     */
    desc: string;
};