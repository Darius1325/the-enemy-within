import { ItemGroup, ItemGroupLabel, Availability } from "./enum";

/**
 * Item Object
 */
export type Item = {
    name: string;
    group: ItemGroup;
    groupIcon: number;
    groupLabel: ItemGroupLabel;
    nb : number;
    price : string;
    enc : number;
    availability : Availability,
    availabilityIcon: number;
    description: string;
};
