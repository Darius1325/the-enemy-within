import { Stat } from "enum";

/**
 * Competence object type
 */
export type Competence = {
    /**
     * Competence name
     * @example "Animal Care"
     */
    name: string;
    /**
     * Stat which is used for competence
     * @see {@link ../types/enum.ts#Stat}
     * @example Stat.INTL
     */
    stat: Stat;
    /**
     * Is competence a base competence ?
     */
    isBase: boolean;
};
