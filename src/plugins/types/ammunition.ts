import { Availability, WeaponGroup, WeaponGroupLabel, WeaponQuality } from "./enum";

export type Ammunition = {
    name: string,
    icon: number, 
    group: WeaponGroup,
    groupLabel: WeaponGroupLabel,
    ammountSold: number,
    price: string; 
    availability: Availability;
    availabilityIcon: number;
    range: string;
    damage: string;
    qualities: WeaponQuality[];
    description: string;
}