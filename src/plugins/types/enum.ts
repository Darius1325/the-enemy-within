// $PluginCompiler TEW_Constants.js 0
import { Armor } from "./armor";
import { Item } from "./item";
import { Competence } from "./competence";

const TEW: {
    ICONS_IDS?: Record<string, number>;
    
    ARMORS?: Record<string, Armor>;
    ARMOR_IDS?: string[];
    ARMORS_ARRAY?: [string, Armor][]

    COMPS?: Record<string, Competence>;
    COMP_IDS?: string[];
    BASE_COMPS?: [string, Competence][];
    ADVANCED_COMPS?: [string, Competence][];

    ITEMS?: Record<string, Item>;
    ITEM_IDS?: string[];
    ITEMS_ARRAY?: [string, Item][];
} = {};
export default TEW;

// $StartCompilation
var Imported = Imported || {};
Imported.TEW_Constants = true;
// var TEW = TEW || {};

//
export enum Stat {
    MHP = 'mhp',
    WEAS = 'weas',
    BALS = 'bals',
    STRG = 'strg',
    TOUG = 'toug',
    AGIL = 'agil',
    DEXT = 'dext',
    INIT = 'init',
    INTL = 'intl',
    FELW = 'felw',
    WILL = 'will',
};

/**
 * Armor types
 */
export enum ArmorGroup {
    SOFT_KIT,
    BOILED_LEATHER,
    PLATE,
    BREASTPLATE,
    CHAINMAIL, 
    BRIGANDINE
};

/**
 * Armor types for display
 */
export enum ArmorGroupLabel {
    SOFT_KIT = "Soft Kit", 
    BOILED_LEATHER = "Boiled Leather",
    PLATE = "Plate",
    BREASTPLATE = "Breastplate",
    CHAINMAIL = "Chainmail",
    BRIGANDINE = "Brigandine"
} ;

/**
 * Availibility of Armor, Weapon or Item
 */
export enum Availability {
    COMMON,
    RARE,
    EXOTIC,
    SCARCE
};

export enum BodyLocation {
    ARMS, 
    LEGS,
    HEAD,
    BODY
};

export enum ArmorQuality {
    PARTIAL,
    REINFORCED,
    IMPENETRABLE,
    OVERCOAT,
    VISOR,
    WEAKPOINTS,
    REQUIRES_KIT
};


export enum ItemGroup {
    CLOTHES,
    FOOD,
    TOOLS,
    BOOKS,
    DRUGS
}

export enum ItemGroupLabel {
    CLOTHES = "Clothes",
    FOOD = "Food",
    TOOLS = "Tools",
    BOOKS = "Books",
    DRUGS = "Drugs"
}

export enum Status {
    BRASS_1,
    BRASS_2,
    BRASS_3,
    SILVER_1,
    SILVER_2,
    SILVER_3,
    GOLD_1,
    GOLD_2,
    GOLD_3
}