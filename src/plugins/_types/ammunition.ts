// ----------------------

// File: ammunition.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the ammunition objects in the game. It includes the properties and types of each ammunition object, as well as the available ammunition types and their properties. The file is used to define the ammunition objects and their properties in the game.

// ----------------------
// Imports
// ----------------------

import { AmmunitionGroup, AmmunitionGroupLabel, Availability, WeaponGroup, WeaponGroupLabel, WeaponQuality } from "./enum";

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
     * @see {@link ../constants/TEW_Icons.ts}
     * @example TEW.DATABASE.ICONS.SET.AMMO_ARROW
     */
    groupIcon: number,
    /**
     * Ammunition group
     * @see {@link ../types/enum.ts#AmmunitionGroup}
     * @example ARROW
     */
    group: AmmunitionGroup,
    /**
     * Ammunition group label
     * @see {@link ../types/enum.ts#AmmunitionGroupLabel}
     * @example "ARROW"
     */
    groupLabel: AmmunitionGroupLabel,
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
