// ----------------------

// File: competence.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/09/2026
// Description: This file contains the type definitions for the combat objects in the game

// ----------------------
// Imports
// ----------------------

import { BattlerAI } from "./battlerAI";

export type Combat = {
    /**
     * NPCs in the fight
     * @example "[PHILLIPE_DESCARTES, DEFAULT]"
     */
    enemies : {
        npc : string,
    }[]
}