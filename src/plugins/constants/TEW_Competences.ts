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
import { SpecialisationGroup, SpecialisationPick } from "../_types/specialisation";
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
    ANIMAL_TRAINING_DOG: {
        name: "Animal Training (Dog)",
        stat: Stat.INTL,
        isBase: false,
        group: "ANIMAL_TRAINING"
    },
    ANIMAL_TRAINING_HORSE: {
        name: "Animal Training (Horse)",
        stat: Stat.INTL,
        isBase: false,
        group: "ANIMAL_TRAINING"
    },
    ANIMAL_TRAINING_PIGEON: {
        name: "Animal Training (Pigeon)",
        stat: Stat.INTL,
        isBase: false,
        group: "ANIMAL_TRAINING"
    },
    ART_CALLIGRAPHY: {
        name: "Art (Calligraphy)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
    },
    ART_CARTOGRAPHY: {
        name: "Art (Cartography)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
    },
    ART_ENGRAVING: {
        name: "Art (Engraving)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
    },
    ART_ICONS: {
        name: "Art (Icons)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
    },
    ART_MOSAICS: {
        name: "Art (Mosaics)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
    },
    ART_SCULPTURE: {
        name: "Art (Sculpture)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
    },
    ART_TATTOO: {
        name: "Art (Tattoo)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
    },
    ART_WEAVING: {
        name: "Art (Weaving)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
    },
    ART_WRITING: {
        name: "Art (Writing)",
        stat: Stat.DEXT,
        isBase: false,
        group: "ART"
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
    /**
     * The tongue spells are cast in, which marks a career as magical
     * It is named like a Language specialisation but is not one of them: it cannot be had by
     * spending a Language (Any) pick, so it carries no group and keeps an ID of its own
     */
    CASTING_MAGICK: {
        name: "Language (Magick)",
        stat: Stat.INTL,
        isBase: false
    },
    /**
     * Channelling is both grouped and ungrouped: casters trained in a lore channel their own
     * wind, everyone else channels raw magic. Rather than one entry per wind, a single
     * competence holds the advances and Game_Actor renames it after the caster's wind
     */
    CHANNELLING: {
        name: "Channelling",
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
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_COMEDY: {
        name: "Entertain (Comedy)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_FORTUNE_TELLING: {
        name: "Entertain (Fortune Telling)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_LECTURE: {
        name: "Entertain (Lecture)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_PROPHECY: {
        name: "Entertain (Prophecy)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_RHETORIC: {
        name: "Entertain (Rhetoric)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_SINGING: {
        name: "Entertain (Singing)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_SPEECHES: {
        name: "Entertain (Speeches)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_STORYTELLING: {
        name: "Entertain (Storytelling)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
    },
    ENTERTAIN_TAUNT: {
        name: "Entertain (Taunt)",
        stat: Stat.FELW,
        isBase: false,
        group: "ENTERTAIN"
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
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_BRETONNIAN: {
        name: "Language (Bretonnian)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_CLASSICAL: {
        name: "Language (Classical)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_ELTHARIN: {
        name: "Language (Eltharin)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_ESTALIAN: {
        name: "Language (Estalian)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_GUILDER: {
        name: "Language (Guilder)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_KHAZALID: {
        name: "Language (Khazalid)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_MIDDENLANDER: {
        name: "Language (Middenlander)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_THIEF: {
        name: "Language (Thief)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_TILEAN: {
        name: "Language (Tilean)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LANGUAGE_WASTELANDER: {
        name: "Language (Wastelander)",
        stat: Stat.INTL,
        isBase: false,
        group: "LANGUAGE"
    },
    LEADERSHIP: {
        name: "Leadership",
        stat: Stat.FELW,
        isBase: true
    },
    LORE_ANATOMY: {
        name: "Lore (Anatomy)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_ART: {
        name: "Lore (Art)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_ASTROLOGY: {
        name: "Lore (Astrology)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_BEASTS: {
        name: "Lore (Beasts)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_CHAOS: {
        name: "Lore (Chaos)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_CHEMISTRY: {
        name: "Lore (Chemistry)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_DARK_MAGIC: {
        name: "Lore (Dark Magic)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_DEMONOLOGY: {
        name: "Lore (Demonology)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_DRAGONS: {
        name: "Lore (Dragons)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_EMPIRE: {
        name: "Lore (Empire)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_ENGINEERING: {
        name: "Lore (Engineering)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_ETIQUETTE: {
        name: "Lore (Etiquette)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_FOLKLORE: {
        name: "Lore (Folklore)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_GENEALOGY: {
        name: "Lore (Genealogy)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_GEOGRAPHY: {
        name: "Lore (Geography)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_GEOLOGY: {
        name: "Lore (Geology)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_GIANTS: {
        name: "Lore (Giants)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_HERALDRY: {
        name: "Lore (Heraldry)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_HERBS: {
        name: "Lore (Herbs)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_HISTORY: {
        name: "Lore (History)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_LAW: {
        name: "Lore (Law)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_LOCAL: {
        name: "Lore (Local)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_MAGIC: {
        name: "Lore (Magic)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_MEDICINE: {
        name: "Lore (Medicine)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_MIDDENHEIM: {
        name: "Lore (Middenheim)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_MIDDENLAND: {
        name: "Lore (Middenland)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_MYRMIDIA: {
        name: "Lore (Myrmidia)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_NECROMANCY: {
        name: "Lore (Necromancy)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_NOBILITY: {
        name: "Lore (Nobility)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_PLANTS: {
        name: "Lore (Plants)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_POISON: {
        name: "Lore (Poison)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_POLITICS: {
        name: "Lore (Politics)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_PROPHECY: {
        name: "Lore (Prophecy)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_REIKLAND: {
        name: "Lore (Reikland)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_RIVERWAYS: {
        name: "Lore (Riverways)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_ROUTES: {
        name: "Lore (Routes)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_SCIENCE: {
        name: "Lore (Science)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_SIGMAR: {
        name: "Lore (Sigmar)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_SPIRITS: {
        name: "Lore (Spirits)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_TAXES: {
        name: "Lore (Taxes)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_THEOLOGY: {
        name: "Lore (Theology)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_TORTURE: {
        name: "Lore (Torture)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_TROLLS: {
        name: "Lore (Trolls)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_ULRIC: {
        name: "Lore (Ulric)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_WAR: {
        name: "Lore (War)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_WITCHES: {
        name: "Lore (Witches)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    LORE_WRECKS: {
        name: "Lore (Wrecks)",
        stat: Stat.INTL,
        isBase: false,
        group: "LORE"
    },
    MELEE_BASIC: {
        name: "Melee (Basic)",
        stat: Stat.WEAS,
        isBase: true,
        group: "MELEE"
    },
    MELEE_BRAWLING: {
        name: "Melee (Brawling)",
        stat: Stat.WEAS,
        isBase: false,
        group: "MELEE"
    },
    MELEE_CAVALRY: {
        name: "Melee (Cavalry)",
        stat: Stat.WEAS,
        isBase: false,
        group: "MELEE"
    },
    MELEE_FENCING: {
        name: "Melee (Fencing)",
        stat: Stat.WEAS,
        isBase: false,
        group: "MELEE"
    },
    MELEE_FLAIL: {
        name: "Melee (Flail)",
        stat: Stat.WEAS,
        isBase: false,
        group: "MELEE"
    },
    MELEE_PARRY: {
        name: "Melee (Parry)",
        stat: Stat.WEAS,
        isBase: false,
        group: "MELEE"
    },
    MELEE_POLE_ARM: {
        name: "Melee (Pole-Arm)",
        stat: Stat.WEAS,
        isBase: false,
        group: "MELEE"
    },
    MELEE_TWO_HANDED: {
        name: "Melee (Two-Handed)",
        stat: Stat.WEAS,
        isBase: false,
        group: "MELEE"
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
        isBase: false,
        group: "PERFORM"
    },
    PERFORM_CLOWNING: {
        name: "Perform (Clowning)",
        stat: Stat.AGIL,
        isBase: false,
        group: "PERFORM"
    },
    PERFORM_DANCING: {
        name: "Perform (Dancing)",
        stat: Stat.AGIL,
        isBase: false,
        group: "PERFORM"
    },
    PERFORM_FIGHT: {
        name: "Perform (Fight)",
        stat: Stat.AGIL,
        isBase: false,
        group: "PERFORM"
    },
    PERFORM_FIREBREATHING: {
        name: "Perform (Firebreathing)",
        stat: Stat.AGIL,
        isBase: false,
        group: "PERFORM"
    },
    PERFORM_JUGGLING: {
        name: "Perform (Juggling)",
        stat: Stat.AGIL,
        isBase: false,
        group: "PERFORM"
    },
    PERFORM_MIMING: {
        name: "Perform (Miming)",
        stat: Stat.AGIL,
        isBase: false,
        group: "PERFORM"
    },
    PERFORM_ROPE_WALKING: {
        name: "Perform (Rope Walking)",
        stat: Stat.AGIL,
        isBase: false,
        group: "PERFORM"
    },
    PICK_LOCK: {
        name: "Pick Lock",
        stat: Stat.DEXT,
        isBase: false
    },
    PLAY_BAGPIPE: {
        name: "Play (Bagpipe)",
        stat: Stat.DEXT,
        isBase: false,
        group: "PLAY"
    },
    PLAY_DRUM: {
        name: "Play (Drum)",
        stat: Stat.DEXT,
        isBase: false,
        group: "PLAY"
    },
    PLAY_FIFE: {
        name: "Play (Fife)",
        stat: Stat.DEXT,
        isBase: false,
        group: "PLAY"
    },
    PLAY_FLUTE: {
        name: "Play (Flute)",
        stat: Stat.DEXT,
        isBase: false,
        group: "PLAY"
    },
    PLAY_LUTE: {
        name: "Play (Lute)",
        stat: Stat.DEXT,
        isBase: false,
        group: "PLAY"
    },
    PLAY_HARPSICHORD: {
        name: "Play (Harpsichord)",
        stat: Stat.DEXT,
        isBase: false,
        group: "PLAY"
    },
    PLAY_HORN: {
        name: "Play (Horn)",
        stat: Stat.DEXT,
        isBase: false,
        group: "PLAY"
    },
    PLAY_VIOLIN: {
        name: "Play (Violin)",
        stat: Stat.DEXT,
        isBase: false,
        group: "PLAY"
    },
    PRAY: {
        name: "Pray",
        stat: Stat.FELW,
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
        isBase: false,
        group: "RANGED"
    },
    RANGED_BOW: {
        name: "Ranged (Bow)",
        stat: Stat.BALS,
        isBase: false,
        group: "RANGED"
    },
    RANGED_CROSSBOW: {
        name: "Ranged (Crossbow)",
        stat: Stat.BALS,
        isBase: false,
        group: "RANGED"
    },
    RANGED_ENGINEERING: {
        name: "Ranged (Engineering)",
        stat: Stat.BALS,
        isBase: false,
        group: "RANGED"
    },
    RANGED_ENTANGLING: {
        name: "Ranged (Entangling)",
        stat: Stat.BALS,
        isBase: false,
        group: "RANGED"
    },
    RANGED_EXPLOSIVES: {
        name: "Ranged (Explosives)",
        stat: Stat.BALS,
        isBase: false,
        group: "RANGED"
    },
    RANGED_SLING: {
        name: "Ranged (Sling)",
        stat: Stat.BALS,
        isBase: false,
        group: "RANGED"
    },
    RANGED_THROWING: {
        name: "Ranged (Throwing)",
        stat: Stat.BALS,
        isBase: false,
        group: "RANGED"
    },
    RESEARCH: {
        name: "Research",
        stat: Stat.INTL,
        isBase: false
    },
    RIDE_BADGER: {
        name: "Ride (Badger)",
        stat: Stat.AGIL,
        isBase: false,
        group: "RIDE"
    },
    RIDE_HORSE: {
        name: "Ride (Horse)",
        stat: Stat.AGIL,
        isBase: false,
        group: "RIDE"
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
        isBase: false,
        group: "SECRET_SIGNS"
    },
    SECRET_SIGNS_HUNTER: {
        name: "Secret Signs (Hunter)",
        stat: Stat.INTL,
        isBase: false,
        group: "SECRET_SIGNS"
    },
    SECRET_SIGNS_KNIGHTLY_ORDER: {
        name: "Secret Signs (Knightly Order)",
        stat: Stat.INTL,
        isBase: false,
        group: "SECRET_SIGNS"
    },
    SECRET_SIGNS_MINER: {
        name: "Secret Signs (Miner)",
        stat: Stat.INTL,
        isBase: false,
        group: "SECRET_SIGNS"
    },
    SECRET_SIGNS_RANGER: {
        name: "Secret Signs (Ranger)",
        stat: Stat.INTL,
        isBase: false,
        group: "SECRET_SIGNS"
    },
    SECRET_SIGNS_SCOUT: {
        name: "Secret Signs (Scout)",
        stat: Stat.INTL,
        isBase: false,
        group: "SECRET_SIGNS"
    },
    SECRET_SIGNS_SMUGGLER: {
        name: "Secret Signs (Smuggler)",
        stat: Stat.INTL,
        isBase: false,
        group: "SECRET_SIGNS"
    },
    SECRET_SIGNS_THIEF: {
        name: "Secret Signs (Thief)",
        stat: Stat.INTL,
        isBase: false,
        group: "SECRET_SIGNS"
    },
    SECRET_SIGNS_VAGABOND: {
        name: "Secret Signs (Vagabond)",
        stat: Stat.INTL,
        isBase: false,
        group: "SECRET_SIGNS"
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
    STEALTH_RURAL: {
        name: "Stealth (Rural)",
        stat: Stat.AGIL,
        isBase: false,
        group: "STEALTH"
    },
    STEALTH_UNDERGROUND: {
        name: "Stealth (Underground)",
        stat: Stat.AGIL,
        isBase: false,
        group: "STEALTH"
    },
    STEALTH_URBAN: {
        name: "Stealth (Urban)",
        stat: Stat.AGIL,
        isBase: false,
        group: "STEALTH"
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
        isBase: false,
        group: "TRADE"
    },
    TRADE_APOTHECARY: {
        name: "Trade (Apothecary)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_ART_SUPPLIES: {
        name: "Trade (Art Supplies)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_BARBER: {
        name: "Trade (Barber)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_BLACKSMITH: {
        name: "Trade (Blacksmith)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_BOATBUILDING: {
        name: "Trade (Boatbuilding)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_BREWING: {
        name: "Trade (Brewing)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_CALLIGRAPHER: {
        name: "Trade (Calligrapher)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_CARTOGRAPHER: {
        name: "Trade (Cartographer)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_CHANDLER: {
        name: "Trade (Chandler)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_CARPENTER: {
        name: "Trade (Carpenter)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_CHARMS: {
        name: "Trade (Charms)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_COOK: {
        name: "Trade (Cook)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_EMBALMER: {
        name: "Trade (Embalmer)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_ENGINEER: {
        name: "Trade (Engineer)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_ENGRAVER: {
        name: "Trade (Engraver)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_EXPLOSIVES: {
        name: "Trade (Explosives)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_FARRIER: {
        name: "Trade (Farrier)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_FLETCHER: {
        name: "Trade (Fletcher)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_GOLDSMITH: {
        name: "Trade (Goldsmith)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_GUNSMITH: {
        name: "Trade (Gunsmith)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_HERBALIST: {
        name: "Trade (Herbalist)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_POISONER: {
        name: "Trade (Poisoner)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_PRINTING: {
        name: "Trade (Printing)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_TANNER: {
        name: "Trade (Tanner)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_TINKER: {
        name: "Trade (Tinker)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
    },
    TRADE_VINTNER: {
        name: "Trade (Vintner)",
        stat: Stat.DEXT,
        isBase: false,
        group: "TRADE"
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
// === //
// #region ====== COMPS GROUPS === //
/**
 * Grouped skills, gathered from the `group` field the specialisations carry
 * The group's displayed name is the heading its members share, e.g. "Melee" for Melee (Fencing)
 */
TEW.DATABASE.COMPS.GROUPS = TEW.DATABASE.COMPS.IDS.reduce((groups: Record<string, SpecialisationGroup>, compId) => {
    const groupId = TEW.DATABASE.COMPS.SET[compId].group;
    if (!groupId) {
        return groups;
    }
    if (!groups[groupId]) {
        groups[groupId] = {
            id: groupId,
            name: TEW.DATABASE.COMPS.SET[compId].name.split(' (')[0],
            members: []
        };
    }
    groups[groupId].members.push(compId);
    return groups;
}, {});
// #endregion === COMPS GROUPS === //
// === //
// #region ====== COMPS PICKS === //
/**
 * Career entries granting one specialisation of a group, picked by the player
 * Every group has a plain `<GROUP>_ANY` wildcard offering the whole group
 */
TEW.DATABASE.COMPS.PICKS = Object.keys(TEW.DATABASE.COMPS.GROUPS)
    .reduce((picks: Record<string, SpecialisationPick>, groupId) => {
        picks[`${groupId}_ANY`] = {
            id: `${groupId}_ANY`,
            group: groupId,
            members: TEW.DATABASE.COMPS.GROUPS[groupId].members
        };
        return picks;
    }, {});

/**
 * Lore (Local) is drawn from the character's own region rather than from the whole group. The
 * region is not modelled yet, so the pool is the whole group and will be narrowed by game events
 */
TEW.DATABASE.COMPS.PICKS.LORE_LOCAL_ANY = {
    id: 'LORE_LOCAL_ANY',
    group: 'LORE',
    name: 'Lore (Local)',
    members: TEW.DATABASE.COMPS.GROUPS.LORE.members
};

/**
 * Careers offering a choice between two named specialisations rather than a whole group
 * They behave exactly like a group pick, only with a pool of two
 */
TEW.DATABASE.COMPS.PICKS.LANGUAGE_ESTALIAN_OR_TILEAN = {
    id: 'LANGUAGE_ESTALIAN_OR_TILEAN',
    group: 'LANGUAGE',
    name: 'Language (Estalian or Tilean)',
    members: ['LANGUAGE_ESTALIAN', 'LANGUAGE_TILEAN']
};
TEW.DATABASE.COMPS.PICKS.MELEE_FLAIL_OR_TWO_HANDED = {
    id: 'MELEE_FLAIL_OR_TWO_HANDED',
    group: 'MELEE',
    name: 'Melee (Flail or Two-Handed)',
    members: ['MELEE_FLAIL', 'MELEE_TWO_HANDED']
};
TEW.DATABASE.COMPS.PICKS.PLAY_DRUM_OR_FIFE = {
    id: 'PLAY_DRUM_OR_FIFE',
    group: 'PLAY',
    name: 'Play (Drum or Fife)',
    members: ['PLAY_DRUM', 'PLAY_FIFE']
};
TEW.DATABASE.COMPS.PICKS.STEALTH_RURAL_OR_URBAN = {
    id: 'STEALTH_RURAL_OR_URBAN',
    group: 'STEALTH',
    name: 'Stealth (Rural or Urban)',
    members: ['STEALTH_RURAL', 'STEALTH_URBAN']
};
TEW.DATABASE.COMPS.PICKS.STEALTH_UNDERGROUND_OR_URBAN = {
    id: 'STEALTH_UNDERGROUND_OR_URBAN',
    group: 'STEALTH',
    name: 'Stealth (Underground or Urban)',
    members: ['STEALTH_UNDERGROUND', 'STEALTH_URBAN']
};
// #endregion === COMPS PICKS === //

