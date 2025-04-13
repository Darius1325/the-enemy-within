import { Status } from "./enum"

/**
 * * NPC (Non-Player Character) object type
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
    stats: number[];
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
