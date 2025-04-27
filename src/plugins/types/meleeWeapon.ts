// ----------------------

// File: meleeWeapon.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the melee weapon objects in the game. It includes the properties and types of each melee weapon object, as well as the available melee weapon types and their properties. The file is used to define the melee weapon objects and their properties in the game.

// ----------------------
// Imports
// ----------------------

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
