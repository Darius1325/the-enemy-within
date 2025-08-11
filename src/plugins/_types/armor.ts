// ----------------------

// File: armror.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the armor objects in the game. It includes the properties and types of each armor object, as well as the available armor types and their properties. The file is used to define the armor objects and their properties in the game.

// ----------------------
// Imports
// ----------------------

import { ArmorGroup, ArmorGroupLabel, ArmorQuality, Availability, BodyLocation } from "./enum";

/**
 * Armor object type
 */
export type Armor = {
    /**
     * Armor name
     * @example "Soft Kit"
     */
    name: string;
    /**
     * Armor icon
     * @see {@link ../constants/icons.ts}
     * @example TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_HEAD_SLOT
     */
    icon: number;
    /**
     * Armor group
     * @see {@link ../types/enum.ts#ArmorGroup}
     * @example ArmorGroup.SOFT_KIT
     */
    group: ArmorGroup;
    /**
     * Armor group label
     * @see {@link ../types/enum.ts#ArmorGroupLabel}
     * @example "Soft Kit"
     */
    groupLabel: ArmorGroupLabel;
    /**
     * Price of armor in copper coins
     * @example 216
     */
    price: number;
    /**
     * Armor encumbrance
     * @example 1
     */
    enc: number;
    /**
     * Availability of armor
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
     * Penalty of armor
     * Array of penalties
     * TODO : handle penalty types
     */
    penalty: any[];
    /**
     * Armor locations
     * @see {@link ../types/enum.ts#BodyLocation}
     * @example [BodyLocation.HEAD]
     */
    locations: BodyLocation[];
    /**
     * Armor protection value
     * @example 2
     */
    ap: number;
    /**
     * Armor qualities
     * @see {@link ../types/enum.ts#ArmorQuality}
     * @example [ArmorQuality.IMPENETRABLE, ArmorQuality.OVERCOAT]
     */
    qualities: ArmorQuality[];
    /**
     * Armor group which this armor is forbidden to be used with
     * @see {@link ../types/enum.ts#ArmorGroup}
     * @example [ArmorGroup.PLATE, ArmorGroup.CHAINMAIL]
     */
    forbiddenWith: ArmorGroup[];
    /**
     * Description of armor
     */
    description: string;
};
