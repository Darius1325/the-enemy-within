// ----------------------

// File: enum.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the enums used in the game. It includes the properties and types of each enum, as well as the available enum types and their properties. The file is used to define the enums and their properties in the game.

// ----------------------
// Imports
// ----------------------

export const enum Stat {
    MHP = 'MHP',
    WEAS = 'WEAS',
    BALS = 'BALS',
    STRG = 'STRG',
    TOUG = 'TOUG',
    AGIL = 'AGIL',
    DEXT = 'DEXT',
    INIT = 'INIT',
    INTL = 'INTL',
    FELW = 'FELW',
    WILL = 'WILL',
}
export type StatName = 'MHP' | 'WEAS' | 'BALS' | 'STRG' | 'TOUG' | 'AGIL' | 'DEXT' | 'INIT' | 'INTL' | 'FELW' | 'WILL';

/**
 * Armor types
 */
export const enum ArmorGroup {
    SOFT_KIT,
    BOILED_LEATHER,
    PLATE,
    BREASTPLATE,
    CHAINMAIL, 
    BRIGANDINE
}

/**
 * Armor types for display
 */
export const enum ArmorGroupLabel {
    SOFT_KIT = "Soft Kit", 
    BOILED_LEATHER = "Boiled Leather",
    PLATE = "Plate",
    BREASTPLATE = "Breastplate",
    CHAINMAIL = "Chainmail",
    BRIGANDINE = "Brigandine"
}

/**
 * Availibility of Armor, Weapon or Item
 */
export const enum Availability {
    COMMON,
    RARE,
    EXOTIC,
    SCARCE
}

export const enum BodyLocation {
    ARMS, 
    LEGS,
    HEAD,
    BODY
}

export const enum ArmorQuality {
    PARTIAL,
    REINFORCED,
    IMPENETRABLE,
    OVERCOAT,
    VISOR,
    WEAKPOINTS,
    REQUIRES_KIT
}

export const enum WeaponGroup {
    BASIC,
    CAVALRY,
    FENCING,
    BRAWLING,
    FLAIL,
    PARRY,
    POLE_ARM,
    TWO_HANDED,
    BOW,
    CROSSBOW,
    ENTANGLING,
    SLING,
    THROWING,
    EXPLOSIVES,
    BLACKPOWDER,
    ENGINEERING
}

export const enum WeaponGroupLabel {
    BASIC = "Basic",
    CAVALRY = "Cavalry",
    FENCING = "Fencing",
    BRAWLING = "Brawling",
    FLAIL = "Flail",
    PARRY = "Parry",
    POLE_ARM = "Pole arm",
    TWO_HANDED = "Two-Handed",
    BOW = "Bow",
    CROSSBOW = "Crossbow",
    ENTANGLING = "Entangling",
    SLING = "Sling",
    THROWING = "Throwing",
    EXPLOSIVES = "Explosives",
    BLACKPOWDER = "Blackpowder",
    ENGINEERING = "Engineering"
}

export const enum WeaponQuality {
    HACK,
    UNBALANCED,
    IMPALE,
    PENETRATING,
    PRECISE,
    DAMAGING,
    UNDAMAGING,
    PUMMEL,
    SLASH_1,
    SLASH_2,
    SHIELD_1,
    SHIELD_2,
    SHIELD_3,
    SHIELD_4,
    SHIELD_5,
    DEFENSIVE,
    IMPACT,
    FAST,
    TRIP,
    ENTANGLE,
    SLOW,
    DISTRACT,
    WRAP,
    TIRING,
    TRAP_BLADE,
    DANGEROUS,
    IMPRECISE,
    RELOAD_1,
    RELOAD_2,
    RELOAD_3,
    RELOAD_4,
    RELOAD_5,
    RELOAD_6,
    FASTER_RELOAD,
    PISTOL,
    REPEATER,
    REPEATER_2,
    REPEATER_4,
    SPREAD_3,
    SPREAD_5,
    ACCURATE,
    BLAST_4,
    BLAST_5,
    INFECTED
}

export const enum ItemGroup {
    CLOTHES,
    FOOD,
    TOOLS,
    BOOKS,
    DRUGS
}

export const enum ItemGroupLabel {
    CLOTHES = "Clothes",
    FOOD = "Food",
    TOOLS = "Tools",
    BOOKS = "Books",
    DRUGS = "Drugs"
}

export const enum Status {
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

// Spell Specifications

export const enum SpellType {
    SPELL,
    CANTRIP
}

export const enum SpellDomain {
    ARCANE = "Arcane",
    FIRE = "Fire",
    PETTY = "Petty"
}

export const enum SpellTarget {
    SELF = "Self",
    ONE = "One",
    AOE = "AoE",
    SPECIAL = "See Description"
}

export const enum SpellTargetRadius {
    WILL_BONUS = "Willpower Bonus",
    SPECIAL = "Special"
}

export const enum SpellRange {
    SELF = "Self",
    WILL = "Willpower",
    TOUCH = "Touch",
    ONE = "One"
}

export const enum SpellDuration {
    INSTANT = "Instant",
    WILL_BONUS = "Willpower Bonus",
    SPECIAL = "Special",
    NUMBER = "Number",
    INIT_BONUS = "Initiative Bonus",
    WILL = "Willpower",
}
