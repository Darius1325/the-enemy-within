// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Competences.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the competences data for the TEW plugin. It includes the competences set, their IDs, and their arrays. The competences are categorized into base and advanced competences, and each competence has a name, a stat associated with it, and a boolean indicating if it is a base competence or not.

// ----------------------
// Imports
// ----------------------

import { Stat } from "../_types/enum";
import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

TEW.DATABASE.COMPS = {};
// #region ====== COMPS SET === //
TEW.DATABASE.COMPS.SET = { 
    ANIMAL_CARE: {
        name: "Animal Care",
        stat: Stat.INTL,
        isBase: false
    },
    ANIMAL_TRAINING: {
        name: "Animal Training",
        stat: Stat.INTL,
        isBase: false
    },
    ART_CARTOGRAPHY: {
        name: "Art (Cartography)",
        stat: Stat.DEXT,
        isBase: false
    },
    ART_ENGRAVING: {
        name: "Art (Engraving)",
        stat: Stat.DEXT,
        isBase: false
    },
    ART_MOSAICS: {
        name: "Art (Mosaics)",
        stat: Stat.DEXT,
        isBase: false
    },
    ART_SCULPTURE: {
        name: "Art (Sculpture)",
        stat: Stat.DEXT,
        isBase: false
    },
    ART_TATTOO: {
        name: "Art (Tattoo)",
        stat: Stat.DEXT,
        isBase: false
    },
    ART_WEAVING: {
        name: "Art (Weaving)",
        stat: Stat.DEXT,
        isBase: false
    },
    ATHLETICS: {
        name: "Athletics",
        stat: Stat.AGIL,
        isBase: true
    },
    BRIBERY: {
        name: "Bribery",
        stat: Stat.FELW,
        isBase: true
    },
    CHANNELLING_AQSHY: {
        name: "Channelling (Aqshy)",
        stat: Stat.WILL,
        isBase: false
    },
    CHANNELLING_AZYR: {
        name: "Channelling (Azyr)",
        stat: Stat.WILL,
        isBase: false
    },
    CHANNELLING_CHAMON: {
        name: "Channelling (Chamon)",
        stat: Stat.WILL,
        isBase: false
    },
    CHANNELLING_DHAR: {
        name: "Channelling (Dhar)",
        stat: Stat.WILL,
        isBase: false
    },
    CHANNELLING_GHUR: {
        name: "Channelling (Ghur)",
        stat: Stat.WILL,
        isBase: false
    },
    CHANNELLING_GHYRAN: {
        name: "Channelling (Ghyran)",
        stat: Stat.WILL,
        isBase: false
    },
    CHANNELLING_HYSH: {
        name: "Channelling (Hysh)",
        stat: Stat.WILL,
        isBase: false
    },
    CHANNELLING_SHYISH: {
        name: "Channelling (Shyish)",
        stat: Stat.WILL,
        isBase: false
    },
    CHANNELLING_ULGU: {
        name: "Channelling (Ulgu)",
        stat: Stat.WILL,
        isBase: false
    },
    CHARM: {
        name: "Charm",
        stat: Stat.FELW,
        isBase: true
    },
    CHARM_ANIMAL: {
        name: "Charm Animal",
        stat: Stat.WILL,
        isBase: true
    },
    CLIMB: {
        name: "Climb",
        stat: Stat.STRG,
        isBase: true
    },
    CONSUME_ALCOHOL: {
        name: "Consume Alcohol",
        stat: Stat.TOUG,
        isBase: true
    },
    COOL: {
        name: "Cool",
        stat: Stat.WILL,
        isBase: true
    },
    DODGE: {
        name: "Dodge",
        stat: Stat.AGIL,
        isBase: true
    },
    DRIVE: {
        name: "Drive",
        stat: Stat.AGIL,
        isBase: true
    },
    ENDURANCE: {
        name: "Endurance",
        stat: Stat.TOUG,
        isBase: true
    },
    ENTERTAIN_ACTING: {
        name: "Entertain (Acting)",
        stat: Stat.FELW,
        isBase: false
    },
    ENTERTAIN_COMEDY: {
        name: "Entertain (Comedy)",
        stat: Stat.FELW,
        isBase: false
    },
    ENTERTAIN_SINGING: {
        name: "Entertain (Singing)",
        stat: Stat.FELW,
        isBase: false
    },
    ENTERTAIN_STORYTELLING: {
        name: "Entertain (Storytelling)",
        stat: Stat.FELW,
        isBase: false
    },
    EVALUATE: {
        name: "Evaluate",
        stat: Stat.INTL,
        isBase: false
    },
    GAMBLE: {
        name: "Gamble",
        stat: Stat.INTL,
        isBase: true
    },
    GOSSIP: {
        name: "Gossip",
        stat: Stat.FELW,
        isBase: true
    },
    HAGGLE: {
        name: "Haggle",
        stat: Stat.FELW,
        isBase: true
    },
    HEAL: {
        name: "Heal",
        stat: Stat.INTL,
        isBase: false
    },
    INTIMIDATE: {
        name: "Intimidate",
        stat: Stat.STRG,
        isBase: true
    },
    INTUITION: {
        name: "Intuition",
        stat: Stat.INIT,
        isBase: true
    },
    LANGUAGE_BATTLE: {
        name: "Language (Battle Tongue)",
        stat: Stat.INTL,
        isBase: false
    },
    LANGUAGE_BRETONNIAN: {
        name: "Language (Bretonnian)",
        stat: Stat.INTL,
        isBase: false
    },
    LANGUAGE_CLASSICAL: {
        name: "Language (Classical)",
        stat: Stat.INTL,
        isBase: false
    },
    LANGUAGE_ELTHARIN: {
        name: "Language (Eltharin)",
        stat: Stat.INTL,
        isBase: false
    },
    LANGUAGE_GUILDER: {
        name: "Language (Guilder)",
        stat: Stat.INTL,
        isBase: false
    },
    LANGUAGE_KHAZALID: {
        name: "Language (Khazalid)",
        stat: Stat.INTL,
        isBase: false
    },
    LANGUAGE_MAGICK: {
        name: "Language (Magick)",
        stat: Stat.INTL,
        isBase: false
    },
    LANGUAGE_MIDDENLANDER: {
        name: "Language (Middenlander)",
        stat: Stat.INTL,
        isBase: false
    },
    LANGUAGE_WASTELANDER: {
        name: "Language (Wastelander)",
        stat: Stat.INTL,
        isBase: false
    },
    LEADERSHIP: {
        name: "Leadership",
        stat: Stat.FELW,
        isBase: true
    },
    LORE_BEASTS: {
        name: "Lore (Beasts)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_CHEMISTRY: {
        name: "Lore (Chemistry)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_DEMONOLOGY: {
        name: "Lore (Demonology)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_EMPIRE: {
        name: "Lore (Empire)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_ENGINEERING: {
        name: "Lore (Engineering)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_HERALDRY: {
        name: "Lore (Heraldry)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_HERBS: {
        name: "Lore (Herbs)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_HISTORY: {
        name: "Lore (History)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_LAW: {
        name: "Lore (Law)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_MAGIC: {
        name: "Lore (Magic)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_MEDICINE: {
        name: "Lore (Medicine)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_MIDDENHEIM: {
        name: "Lore (Middenheim)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_MIDDENLAND: {
        name: "Lore (Middenland)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_MYRMIDIA: {
        name: "Lore (Myrmidia)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_NECROMANCY: {
        name: "Lore (Necromancy)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_NOBILITY: {
        name: "Lore (Nobility)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_REIKLAND: {
        name: "Lore (Reikland)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_SCIENCE: {
        name: "Lore (Science)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_SIGMAR: {
        name: "Lore (Sigmar)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_THEOLOGY: {
        name: "Lore (Theology)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_ULRIC: {
        name: "Lore (Ulric)",
        stat: Stat.INTL,
        isBase: false
    },
    LORE_WAR: {
        name: "Lore (War)",
        stat: Stat.INTL,
        isBase: false
    },
    MELEE_BASIC: {
        name: "Melee (Basic)",
        stat: Stat.WEAS,
        isBase: true
    },
    MELEE_BRAWLING: {
        name: "Melee (Brawling)",
        stat: Stat.WEAS,
        isBase: false
    },
    MELEE_CAVALRY: {
        name: "Melee (Cavalry)",
        stat: Stat.WEAS,
        isBase: false
    },
    MELEE_FENCING: {
        name: "Melee (Fencing)",
        stat: Stat.WEAS,
        isBase: false
    },
    MELEE_FLAIL: {
        name: "Melee (Flail)",
        stat: Stat.WEAS,
        isBase: false
    },
    MELEE_PARRY: {
        name: "Melee (Parry)",
        stat: Stat.WEAS,
        isBase: false
    },
    MELEE_POLE_ARM: {
        name: "Melee (Pole-Arm)",
        stat: Stat.WEAS,
        isBase: false
    },
    MELEE_TWO_HANDED: {
        name: "Melee (Two-Handed)",
        stat: Stat.WEAS,
        isBase: false
    },
    NAVIGATION: {
        name: "Navigation",
        stat: Stat.INIT,
        isBase: true
    },
    OUTDOOR_SURVIVAL: {
        name: "Outdoor Survival",
        stat: Stat.INTL,
        isBase: true
    },
    PERCEPTION: {
        name: "Perception",
        stat: Stat.INIT,
        isBase: true
    },
    PERFORM_ACROBATICS: {
        name: "Perform (Acrobatics)",
        stat: Stat.AGIL,
        isBase: false
    },
    PERFORM_CLOWNING: {
        name: "Perform (Clowning)",
        stat: Stat.AGIL,
        isBase: false
    },
    PERFORM_DANCING: {
        name: "Perform (Dancing)",
        stat: Stat.AGIL,
        isBase: false
    },
    PERFORM_FIREBREATHING: {
        name: "Perform (Firebreathing)",
        stat: Stat.AGIL,
        isBase: false
    },
    PERFORM_JUGGLING: {
        name: "Perform (Juggling)",
        stat: Stat.AGIL,
        isBase: false
    },
    PERFORM_MIMING: {
        name: "Perform (Miming)",
        stat: Stat.AGIL,
        isBase: false
    },
    PERFORM_ROPE_WALKING: {
        name: "Perform (Rope Walking)",
        stat: Stat.AGIL,
        isBase: false
    },
    PICK_LOCK: {
        name: "Pick Lock",
        stat: Stat.DEXT,
        isBase: false
    },
    PLAY_BAGPIPE: {
        name: "Play (Bagpipe)",
        stat: Stat.DEXT,
        isBase: false
    },
    PLAY_DRUM: {
        name: "Play (Drum)",
        stat: Stat.DEXT,
        isBase: false
    },
    PLAY_FLUTE: {
        name: "Play (Flute)",
        stat: Stat.DEXT,
        isBase: false
    },
    PLAY_LUTE: {
        name: "Play (Lute)",
        stat: Stat.DEXT,
        isBase: false
    },
    PLAY_HARPSICHORD: {
        name: "Play (Harpsichord)",
        stat: Stat.DEXT,
        isBase: false
    },
    PLAY_HORN: {
        name: "Play (Horn)",
        stat: Stat.DEXT,
        isBase: false
    },
    PLAY_VIOLIN: {
        name: "Play (Violin)",
        stat: Stat.DEXT,
        isBase: false
    },
    PREY: {
        name: "Prey",
        stat: Stat.FELW,
        isBase: false
    },
    RANGED_BLACKPOWDER: {
        name: "Ranged (Blackpowder)",
        stat: Stat.BALS,
        isBase: false
    },
    RANGED_BOW: {
        name: "Ranged (Bow)",
        stat: Stat.BALS,
        isBase: false
    },
    RANGED_CROSSBOW: {
        name: "Ranged (Crossbow)",
        stat: Stat.BALS,
        isBase: false
    },
    RANGED_ENGINEERING: {
        name: "Ranged (Engineering)",
        stat: Stat.BALS,
        isBase: false
    },
    RANGED_ENTANGLING: {
        name: "Ranged (Entangling)",
        stat: Stat.BALS,
        isBase: false
    },
    RANGED_EXPLOSIVES: {
        name: "Ranged (Explosives)",
        stat: Stat.BALS,
        isBase: false
    },
    RANGED_SLING: {
        name: "Ranged (Sling)",
        stat: Stat.BALS,
        isBase: false
    },
    RANGED_THROWING: {
        name: "Ranged (Throwing)",
        stat: Stat.BALS,
        isBase: false
    },
    RESEARCH: {
        name: "Research",
        stat: Stat.INTL,
        isBase: false
    },
    RIDE_BADGER: {
        name: "Ride (Badger)",
        stat: Stat.AGIL,
        isBase: false
    },
    RIDE_HORSE: {
        name: "Ride (Horse)",
        stat: Stat.AGIL,
        isBase: false
    },
    ROW: {
        name: "Row",
        stat: Stat.STRG,
        isBase: true
    },
    SAIL: {
        name: "Sail",
        stat: Stat.AGIL,
        isBase: false
    },
    SECRET_SIGNS_GUILD: {
        name: "Secret Signs (Guild)",
        stat: Stat.INTL,
        isBase: false
    },
    SECRET_SIGNS_RANGER: {
        name: "Secret Signs (Ranger)",
        stat: Stat.INTL,
        isBase: false
    },
    SECRET_SIGNS_SCOUT: {
        name: "Secret Signs (Scout)",
        stat: Stat.INTL,
        isBase: false
    },
    SECRET_SIGNS_THIEF: {
        name: "Secret Signs (Thief)",
        stat: Stat.INTL,
        isBase: false
    },
    SET_TRAP: {
        name: "Set Trap",
        stat: Stat.DEXT,
        isBase: false
    },
    SLEIGHT_OF_HAND: {
        name: "Sleight Of Hand",
        stat: Stat.DEXT,
        isBase: false
    },
    STEALTH: {
        name: "Stealth",
        stat: Stat.AGIL,
        isBase: true
    },
    STEALTH_RURAL: {
        name: "Stealth (Rural)",
        stat: Stat.AGIL,
        isBase: false
    },
    STEALTH_UNDERGROUND: {
        name: "Stealth (Underground)",
        stat: Stat.AGIL,
        isBase: false
    },
    STEALTH_URBAN: {
        name: "Stealth (Urban)",
        stat: Stat.AGIL,
        isBase: false
    },
    SWIM: {
        name: "Swim",
        stat: Stat.STRG,
        isBase: false
    },
    TRACK: {
        name: "Track",
        stat: Stat.INIT,
        isBase: false
    },
    TRADE_ALCHEMIST: {
        name: "Trade (Alchemist)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_APOTHECARY: {
        name: "Trade (Apothecary)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_BLACKSMITH: {
        name: "Trade (Blacksmith)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_BREWING: {
        name: "Trade (Brewing)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_CALLIGRAPHER: {
        name: "Trade (Calligrapher)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_CHANDLER: {
        name: "Trade (Chandler)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_CARPENTER: {
        name: "Trade (Carpenter)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_COOK: {
        name: "Trade (Cook)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_EMBALMER: {
        name: "Trade (Embalmer)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_ENGINEER: {
        name: "Trade (Engineer)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_FLETCHER: {
        name: "Trade (Fletcher)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_GOLDSMITH: {
        name: "Trade (Goldsmith)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_HERBALIST: {
        name: "Trade (Herbalist)",
        stat: Stat.DEXT,
        isBase: false
    },
    TRADE_TANNER: {
        name: "Trade (Tanner)",
        stat: Stat.DEXT,
        isBase: false
    },
}
// #endregion === COMPS SET === //
// === //
// #region ====== COMPS IDS === //
// The IDs are the keys of the SET object
TEW.DATABASE.COMPS.IDS = Object.keys(TEW.DATABASE.COMPS.SET);
// #endregion === COMPS IDS === //
// === //
// #region ====== COMPS ARRAYS === //
// Those are 2 2D arrays, where the first element is the key and the second element is the value
TEW.DATABASE.COMPS.BASE_ARRAY = Object.keys(TEW.DATABASE.COMPS.SET)
        .filter((comp) => TEW.DATABASE.COMPS.SET[comp].isBase)
        .sort((a, b) => a.localeCompare(b))
        .map(comp => [comp, TEW.DATABASE.COMPS.SET[comp]]);
TEW.DATABASE.COMPS.ADVANCED_ARRAY = Object.keys(TEW.DATABASE.COMPS.SET)
        .filter((comp) => !TEW.DATABASE.COMPS.SET[comp].isBase)
        .sort((a, b) => a.localeCompare(b))
        .map(comp => [comp, TEW.DATABASE.COMPS.SET[comp]]);
// #endregion === COMPS ARRAYS === //

