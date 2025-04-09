import { Status } from "./enum"

export type NPC = {
    name: string;
    stats: number[];                    // Array of 9
    wounds: number;
    move: number;
    status : Status;
    comps: Record<string, number>;      // <CompId, CompLvl>
    talents: string[];                  // talentId[]
    traits: any[];                      // utility ?
    weapons: string[];                  // WeaponId[]
    armor: string[];                    // ArmorId[]
    trappings: Record<string, number>;  // utility ?
    spells: Record<string, number>;     // <SpellId, SpellLvl>
    prayers: Record<string, number>;    // <SpellId, SpellLvl>
    /*ammo: Record<string, number>;       // <AmmoId, number>*/
};