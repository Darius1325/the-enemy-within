// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_NPc.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the constants for the TEW NPCs. It is used to define the NPCs in the game, their stats, weapons, armor, and other properties. The constants are used throughout the game to reference the NPCs and their properties.

// ----------------------
// Imports
// ----------------------
import TEW from "../_types/tew";
import { Status } from "../_types/enum";

// ----------------------
// $StartCompilation
// ----------------------

TEW.DATABASE.NPCS = {};
// #region ====== NPCS SET === //
TEW.DATABASE.NPCS.SET = {
    GUSTAV_FONDLEBURGER: {
        name: "Gustav Fondleburger",
        stats: {
            WEAS: 28, 
            BALS: 32, 
            STRG: 31, 
            TOUG: 41, 
            INIT: 38, 
            AGIL: 34, 
            DEXT: 35, 
            INTL: 39, 
            WILL: 29, 
            FELW: 52
        },
        wounds: 13,
        move: 4,
        status: Status.SILVER_2,
        comps: {
            HAGGLE: 10,
            INTUITION: 14,
            RANGED_BLACK_POWDER: 10
        },
        talents: ["READ_WRITE", "STURDY"],
        traits: [],
        weapons: ["BLUNDERBUSS"],
        armor: [],
        trappings: {
            SMALL_SHOT_AND_POWDER: 20
        },
        spells: {},
        prayers: {}
    },
    HERPIN_STIGGERWURT: {
        name: "Herpin Stiggerwurt",
        stats: [35, 32, 45, 45, 36, 39, 32, 24, 28, 25],
        wounds: 14,
        move: 4,
        status: Status.BRASS_3,
        comps: {
            MELEE_BASIC: 10,
            TRADE_BREWING: 17
        },
        talents: ["READ_WRITE", "STURDY"],
        traits: [],
        weapons: ["DAGGER"],
        armor: [],
        trappings: {},
        spells: {},
        prayers: {}
    },
    GUNNAR_ANG_HULTZ: {
        name: "Gunnar and Hultz",
        stats: [32, 42, 31, 34, 36, 44, 29, 27, 30, 27],
        wounds: 12,
        move: 4,
        status: Status.SILVER_2,
        comps: {
            ANIMAL_CARE: 10,
            CHARM_ANIMAL: 10,
            CONSUME_ALCOHOL: 10,
            DRIVE: 30,
            RANGED_BLACKPOWDER: 10
        },
        talents: [],
        traits: [],
        weapons: ["BLUNDERBUSS", "SWORD"],
        armor: ["LEATHER_JACK", "LEATHER_LEGGINGS", "LEATHER_SKULLCAP"],
        trappings: {
            COAT: 1,
            SMALL_SHOT_AND_POWDER: 20
        },
        spells: {},
        prayers: {}
    },
    ISODE_VON_STRUDELDORF: {
        name: "Isolde Von Strudeldorf",
        stats: [36, 32, 31, 32, 35, 31, 43, 30, 33, 28],
        wounds: 12,
        move: 4,
        status: Status.GOLD_1,
        comps: {
            INTIMIDATE: 15,
            LEADERSHIP: 14,
            LORE_HERALDRY: 10,
            PLAY_LUTE: 15
        },
        talents: ["ETIQUETTE_NOBLES", "LUCK", "NOBLE_BLOOD", "READ_WRITE"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: {},
        spells: {},
        prayers: {}
    },
    JANNA_ELLEINER: {
        name: "Janna Elleiner",
        stats: [25, 24, 34, 39, 43, 43, 34, 27, 25, 26],
        wounds: 11,
        move: 4,
        status: Status.SILVER_3,
        comps: {
            INTUITION: 11,
            PERCEPTION: 15
        },
        talents: ["BENEATH_NOTICE", "ETIQUETTE_SERVANTS", "WELL_PREPARED"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: {},
        spells: {},
        prayers: {}
    },
    MARIE_SCHUTZ: {
        name: "Marie Schutz",
        stats: [55, 32, 56, 48, 45, 54, 43, 30, 33, 26],
        wounds: 16,
        move: 4,
        status: Status.SILVER_3,
        comps: {
            DODGE: 10,
            ENDURANCE: 15,
            HEAL: 10,
            INTIMIDATE: 15,
            INTUITION: 15,
            MELEE_BASIC: 15,
            MELEE_BRAWLING: 10
        },
        talents: ["JUMP_UP", "RELENTLESS", "STRIKE_MIGHTY_BLOW", "STRIKE_TO_STUN", "TENACIOUS", "VERY_STRONG"],
        traits: [],
        weapons: ["SWORD", "KNUCKLEDUSTERS"],
        armor: ["LEATHER_JACK", "LEATHER_LEGGINGS", "LEATHER_SKULLCAP"],
        trappings: {},
        spells: {},
        prayers: {}
    },
    ERNST_HEIDLEMANN: {
        name: "Ernst Heidlemann",
        stats: [30, 32, 30, 26, 31, 34, 44, 33, 30, 29],
        wounds: 10,
        move: 4,
        status: Status.SILVER_2,
        comps: {
            CHANNELLING_DHAR: 7,
            DODGE: 6,
            INTIMIDATE: 5,
            INTUITION: 5,
            LANGUAGE_CLASSICAL: 10,
            LANGUAGE_MAGICK: 15,
            LORE_MAGICK: 9,
            PERCEPTION: 5
        },
        talents: ["PETTY_MAGICK", "READ_WRITE"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: {},
        spells: {
            ROT: 1,
            SHOCK: 1
        },
        prayers: {}
    },
    PHILLIPE_DESCARTES: {
        name: "Phillipe Descartes",
        stats: [30, 32, 30, 26, 31, 34, 44, 33, 30, 29],
        wounds: 10,
        move: 4,
        status: Status.BRASS_1,
        comps:
        {
            ATHLETICS: 26,
            CLIMB: 32,
            CHARM: 15,
            CONSUME_ALCOHOL: 38,
            COOL: 30,
            DODGE: 26,
            ENDURANCE: 27,
            GAMBLE: 17,
            GOSSIP: 15,
            HEAL: 6,
            HAGGLE: 15,
            INTIMIDATE: 22,
            INTUITION: 19,
            LANGUAGE_BATTLE: 16,
            LEADERSHIP: 20,
            MELEE_BRAWLING: 17,
            MELEE_BASIC: 27,
            PERCEPTION: 24,
            PLAY_DRUM: 1,
            OUTDOOR_SURVIVAL: 11,
            RANGED_BLACKPOWDER: 28,
            SLEIGHT_OF_HAND: 20
        },
        talents: ["ATTRACTIVE", "ALLEY_CAT", "CARD_SHARP", "COMBAT_AWARE", "DICEMAN", "DRILLED", "ETIQUETTE_SOLDIERS", "RAPID_RELOAD", "WAR_LEADER"],
        traits: [],
        weapons: ["PISTOL", "SWORD"],
        armor: [],
        trappings:
        {
            BULLET_AND_POWDER: 30,
            DICE_SET: 2,
            LOADED_DICE_SET: 1,
            PACK_OF_MARKED_CARDS: 1,
            SILVER: 49,
            BRASS: 67
        },
        spells: {},
        prayers: {}
    }
}

// #endregion === NPCS SET === //
