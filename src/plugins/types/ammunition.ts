import { Availability, WeaponGroup, WeaponGroupLabel, WeaponQuality } from "./enum";

/**
 * Ammunition object type
 */
export type Ammunition = {
    /**
     * Ammunition name
     * @example "Arrow"
     */
    name: string,
    /**
     * Ammunition icon
     * @see {@link ../constants/icons.ts}
     * @example TEW.DATABASE.ICONS.SET.WEAPON_BOW
     */
    icon: number,
    /**
     * Ammunition group
     * @see {@link ../types/enum.ts#WeaponGroup}
     * @example BOW
     */
    group: WeaponGroup,
    /**
     * Ammunition group label
     * @see {@link ../types/enum.ts#WeaponGroupLabel}
     * @example "BOW"
     */
    groupLabel: WeaponGroupLabel,
    /**
     * Ammount of ammunition sold
     * @example 12
     */
    ammountSold: number,
    /**
     * Price of ammunition in copper coins
     * @example 36
     */
    price: number;
    /**
     * Availability of ammunition
     * @see {@link ../types/enum.ts#Availability}
     * @example Availability.RARE
     */
    availability: Availability;
    /**
     * Availability icon
     * @see {@link ../constants/icons.ts}
     * @example TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE
     */
    availabilityIcon: number;
    /**
     * Range of ammunition
     * TODO: Add modifier types
     * @example "/2"
     */
    range: string;
    /**
     * Damage of ammunition
     * TODO: Add modifier types
     * @example "+0"
     */
    damage: string;
    /**
     * Qualities of ammunition
     * @see {@link ../types/enum.ts#WeaponQuality}
     */
    qualities: WeaponQuality[];
    /**
     * Ammunition description
     */
    description: string;
}
