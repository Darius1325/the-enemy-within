import { SpellDomain, SpellDuration, SpellRange, SpellTarget, SpellTargetRadius, SpellType } from "./enum";

export type Spell = {
    name: string;
    type: SpellType;
    domain: SpellDomain;
    cn: number;
    target: {
        type: SpellTarget;
        distance?: SpellTargetRadius;
    };
    range?: {
        type: SpellRange;
    };
    duration: {
        type: Omit<SpellDuration, SpellDuration.NUMBER>;
        multiplier?: number;
    } | {
        type: SpellDuration.NUMBER;
        duration: number;
    };
    desc: string;
};