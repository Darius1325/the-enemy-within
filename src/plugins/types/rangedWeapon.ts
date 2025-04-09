import { WeaponGroup, WeaponGroupLabel, WeaponQuality, Availability } from "./enum";

/**
 * Armor Object
 */
export type RangedWeapon = {
    name: string;
    icon: number;
    group: WeaponGroup;
    groupLabel: WeaponGroupLabel;
    twoHanded: boolean;
    price: string;
    enc: number;
    availability: Availability;
    availabilityIcon: number;
    damage: number;
    range: number;
    strBonus: boolean;
    qualities: WeaponQuality[];
    description: string;
};
