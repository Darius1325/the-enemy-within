import { Stat } from "./enum";

/**
 * Talent object type
 */
export type Talent = {
    /**
     * Talent name
     * @example "Accurate Shot"
     */
    name: string;
    /**
     * Talent description
     */
    description : string;
    /**
     * Maximum number of ranks in this talent.
     * Can be a number or a Stat.
     * @see {@link ../types/enum.ts#Stat}
     * @example 3
     * @example Stat.BALS
     */
    maxTaken : number | Stat;
}
