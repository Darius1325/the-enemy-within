import { WeaponGroup, WeaponGroupLabel, WeaponQuality, Availability } from "./enum";

/**
 * Armor object type
 */
export type RangedWeapon = {
    /**
     * RangedWeapon name
     * @example "Bow"
     */
    name: string;
    /**
     * RangedWeapon icon
     * @see {@link ../constants/icons.ts}
     * @example TEW.DATABASE.ICONS.SET.WEAPON_BOW
     */
    icon: number;
    /**
     * RangedWeapon group
     * @see {@link ../types/enum.ts#WeaponGroup}
     * @example WeaponGroup.BOW
     */
    group: WeaponGroup;
    /**
     * RangedWeapon group label
     * @see {@link ../types/enum.ts#WeaponGroupLabel}
     * @example WeaponGroupLabel.BOW
     */
    groupLabel: WeaponGroupLabel;
    /**
     * Is ranged weapon two handed ?
     */
    twoHanded: boolean;
    /**
     * Price of ranged weapon in copper coins
     * @example 1200
     */
    price: number;
    /**
     * Encumbrance of ranged weapon
     * @example 3
     */
    enc: number;
    /**
     * Availability of ranged weapon
     * @see {@link ../types/enum.ts#Availability}
     * @example Availability.SCARCE
     */
    availability: Availability;
    /**
     * Availability icon
     * @see {@link ../constants/icons.ts}
     * @example TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE
     */
    availabilityIcon: number;
    /**
     * Ranged weapon damage
     * @example 4
     */
    damage: number;
    /**
     * Ranged weapon range
     * @example 100
     */
    range: number;
    /**
     * Does the strength bonus apply to ranged weapon damage ?
     */
    strBonus: boolean;
    /**
     * Qualities of ranged weapon
     * @see {@link ../types/enum.ts#WeaponQuality}
     * @example [WeaponQuality.DAMAGING, WeaponQuality.PISTOL]
     */
    qualities: WeaponQuality[];
    /**
     * Ranged weapon description
     */
    description: string;
};
