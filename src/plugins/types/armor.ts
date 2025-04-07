import { ArmorGroup, ArmorGroupLabel, ArmorQuality, Availability, BodyLocation } from "./enum";

/**
 * Armor Object
 */
export type Armor = {
    name: string;
    icon: number;
    group: ArmorGroup;
    groupLabel: ArmorGroupLabel;
    price: string;
    enc: number;
    availability: Availability;
    availabilityIcon: number;
    penalty: any[];
    locations: BodyLocation[];
    ap: number;
    qualities: ArmorQuality[];
    forbiddenWith: ArmorGroup[];
    description: string;
};
