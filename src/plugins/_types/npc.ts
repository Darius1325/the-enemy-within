// ----------------------

// File: npc.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the NPC (Non-Player Character) objects in the game. It includes the properties and types of each NPC object, as well as the available NPC types and their properties. The file is used to define the NPC objects and their properties in the game.

// ----------------------
// Imports
// ----------------------

import { Status } from "./enum"

/**
 * NPC (Non-Player Character) object type
 */
export type NPC = {
    /**
     * NPC name
     * @example "Gustav Fondleburger"
     */
    name: string;
    /**
     * NPC Stats
     * Array of 9 stats : [WEAS, BALS, STRG, TOUG, INIT, AGIL, DEXT, INTL, WILL, FELW]
     */
    stats: number[] | any;
    /**
     * NPC Health Points
     * @example 13
     */
    wounds: number;
    /**
     * Moves per turn
     * @example 4
     */
    move: number;
    /**
     * NPC Status
     * @see {@link ../types/enum.ts#Status}
     * @example Status.SILVER_2
     */
    status : Status;
    /**
     * NPC Competences
     * Format : {<CompId>: <CompLvl>}
     * @example {{HAGGLE: 10}, {INTUITION: 14}}
     */
    comps: Record<string, number>;
    /**
     * NPC Talents
     * Array of TalentId
     * @example ["READ_WRITE", "STURDY"]
     */
    talents: string[];
    /**
     * NPC Traits
     * Array of TraitId
     * TODO: WIP
     */
    traits: any[];
    /**
     * NPC Weapons
     * Array of WeaponId
     * @example ["BLUNDERBUSS"]
     */
    weapons: string[];
    /**
     * NPC Armor
     * Array of ArmorId
     * @example ["SOFT_KIT"]
     */
    armor: string[];                    // ArmorId[]
    /**
     * NPC Trappings
     * TODO: WIP
     * Format : {<TrappingId>: <TrappingLvl>}
     * @example {{SMALL_SHOT_AND_POWDER: 20}}
     */
    trappings: Record<string, number>;
    /**
     * NPC Spells
     * Format : {<SpellId>: <SpellLvl>}
     * @example {{ROT: 1}, {SHOCK: 1}}
     */
    spells: Record<string, number>;     // <SpellId, SpellLvl>
    /**
     * NPC Prayers
     * Format : {<SpellId>: <SpellLvl>}
     * @example {{BLESSED: 1}, {PROTECTION: 1}}
     */
    prayers: Record<string, number>;
    /*ammo: Record<string, number>;       // <AmmoId, number>*/
};
