// ----------------------

// File: item.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the item objects in the game. It includes the properties and types of each item object, as well as the available item types and their properties. The file is used to define the item objects and their properties in the game.

// ----------------------
// Imports
// ----------------------

import { ItemGroup, ItemGroupLabel, Availability } from "./enum";

/**
 * Item object type
 */
export type Item = {
    /**
     * Item name
     * @example "Amulet"
     */
    name: string;
    /**
     * Group of item
     * @see {@link ../types/enum.ts#ItemGroup}
     * @example ItemGroup.CLOTHES
     */
    group: ItemGroup;
    /**
     * Group icon
     * @see {@link ../constants/icons.ts}
     * @example TEW.DATABASE.ICONS.SET.ITEM_CLOTHES
     */
    groupIcon: number;
    /**
     * Group label of item
     * @see {@link ../types/enum.ts#ItemGroupLabel}
     * @example "Clothes"
     */
    groupLabel: ItemGroupLabel;
    /**
     * Number of item par slot
     * @example 6
     */
    nb: number;
    /**
     * Price of item in copper coins
     * @example 216
     */
    price: number;
    /**
     * Encumbrance of item
     * @example 0
     */
    enc: number;
    /**
     * Availability of item
     * @see {@link ../types/enum.ts#Availability}
     * @example Availability.SCARCE
     */
    availability: Availability,
    /**
     * Availability icon
     * @see {@link ../constants/icons.ts}
     * @example TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE
     */
    availabilityIcon: number;
    /**
     * Item description
     */
    description: string;
};
