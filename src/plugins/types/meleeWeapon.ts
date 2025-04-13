import { WeaponGroup, WeaponGroupLabel, WeaponQuality, Availability } from "./enum";

/**
 * MeleeWeapon object type
 */
export type MeleeWeapon = {
    /**
     * MeleeWeapon name
     * @example "Dagger"
     */
    name: string;
    /**
     * MeleeWeapon icon
     * @see {@link ../constants/icons.ts}
     * @example TEW.DATABASE.ICONS.SET.WEAPON_KNIFE
     */
    icon: number;
    /**
     * MeleeWeapon group
     * @see {@link ../types/enum.ts#WeaponGroup}
     * @example WeaponGroup.BASIC
     */
    group: WeaponGroup;
   /**
    * MeleeWeapon group Label
    * @see {@link ../types/enum.ts#WeaponGroupLabel}
    * @example "Basic"
    */
    groupLabel: WeaponGroupLabel;
    /**
     * price of melee weapon in copper coins
     * @example 216
     */
    price: number;
    /**
     * Encumbrance of melee weapon
     * @example 1
     */
    enc: number;
    /**
     * Availability of melee weapon
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
     * Melee weapon damage
     * @example 4
     */
    damage: number;
    /**
     * Has melee weapon long reach ?
     */
    longReach: boolean;
    /**
     * Does the strength bonus apply to the melee weapon ?
     */
    strBonus: boolean;
    /**
     * Qualities of melee weapon
     * @see {@link ../types/enum.ts#WeaponQuality}
     * @example [WeaponQuality.UNDAMAGING, WeaponQuality.UNBALANCED]
     */
    qualities: WeaponQuality[];
    /**
     * Melee weapon description
     */
    description: string;
};
