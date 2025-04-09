import { WeaponGroup, WeaponGroupLabel, WeaponQuality, Availability } from "./enum";

/**
 * Armor Object
 */
export type MeleeWeapon = {
    name: string;
    icon: number;
    group: WeaponGroup;
    groupLabel: WeaponGroupLabel;
    price: string;
    enc: number;
    availability: Availability;
    availabilityIcon: number;
    damage: number;
    longReach: boolean;
    strBonus: boolean;
    qualities: WeaponQuality[];
    description: string;
};
