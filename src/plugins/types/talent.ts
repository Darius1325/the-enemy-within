// ----------------------

// File: talent.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the competence objects in the game. It includes the properties and types of each competence object, as well as the available competence types and their properties. The file is used to define the competence objects and their properties in the game.

// ----------------------
// Imports
// ----------------------

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
