// ----------------------

// File: competence.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the competence objects in the game. It includes the properties and types of each competence object, as well as the available competence types and their properties. The file is used to define the competence objects and their properties in the game.

// ----------------------
// Imports
// ----------------------

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
