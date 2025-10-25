// ----------------------

/**
 * Battler AI object type
 */

type BattlerAction = {
    conditionParam1: number;
    conditionParam2: number;
    conditionType: number;
    rating: number;
    skillId: number;
};

export type BattlerAI = {
    actions: BattlerAction[]
};
