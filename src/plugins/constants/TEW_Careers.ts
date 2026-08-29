// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Careers.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 16/08/2026

// ----------------------
// Imports
// ----------------------

import { Career } from "../_types/career";
import { CareerClass, CareerStatusTier, Stat } from "../_types/enum";
import TEW from "../_types/tew";

/** A career as written below: its path is linked on load */
type RawCareer = Omit<Career, "path" | "isMagical">;

// ----------------------
// $StartCompilation
// ----------------------

TEW.DATABASE.CAREERS = {};
// #region ====== CAREER PATHS === //
// Career IDs are made of their path ID and their level, and refer to the CAREERS set below
TEW.DATABASE.CAREERS.PATHS = {
    // --- ACADEMIC --- //
    APOTHECARY: {
        name: "Apothecary",
        class: CareerClass.ACADEMIC,
        levels: [
            { career: "APOTHECARY_1", level: 1 },
            { career: "APOTHECARY_2", level: 2 },
            { career: "APOTHECARY_3", level: 3 },
            { career: "APOTHECARY_4", level: 4 }
        ]
    },
    ENGINEER: {
        name: "Engineer",
        class: CareerClass.ACADEMIC,
        levels: [
            { career: "ENGINEER_1", level: 1 },
            { career: "ENGINEER_2", level: 2 },
            { career: "ENGINEER_3", level: 3 },
            { career: "ENGINEER_4", level: 4 }
        ]
    },
    LAWYER: {
        name: "Lawyer",
        class: CareerClass.ACADEMIC,
        levels: [
            { career: "LAWYER_1", level: 1 },
            { career: "LAWYER_2", level: 2 },
            { career: "LAWYER_3", level: 3 },
            { career: "LAWYER_4", level: 4 }
        ]
    },
    NUN: {
        name: "Nun",
        class: CareerClass.ACADEMIC,
        levels: [
            { career: "NUN_1", level: 1 },
            { career: "NUN_2", level: 2 },
            { career: "NUN_3", level: 3 },
            { career: "NUN_4", level: 4 }
        ]
    },
    PHYSICIAN: {
        name: "Physician",
        class: CareerClass.ACADEMIC,
        levels: [
            { career: "PHYSICIAN_1", level: 1 },
            { career: "PHYSICIAN_2", level: 2 },
            { career: "PHYSICIAN_3", level: 3 },
            { career: "PHYSICIAN_4", level: 4 }
        ]
    },
    PRIEST: {
        name: "Priest",
        class: CareerClass.ACADEMIC,
        levels: [
            { career: "PRIEST_1", level: 1 },
            { career: "PRIEST_2", level: 2 },
            { career: "PRIEST_3", level: 3 },
            { career: "PRIEST_4", level: 4 }
        ]
    },
    SCHOLAR: {
        name: "Scholar",
        class: CareerClass.ACADEMIC,
        levels: [
            { career: "SCHOLAR_1", level: 1 },
            { career: "SCHOLAR_2", level: 2 },
            { career: "SCHOLAR_3", level: 3 },
            { career: "SCHOLAR_4", level: 4 }
        ]
    },
    WIZARD: {
        name: "Wizard",
        class: CareerClass.ACADEMIC,
        levels: [
            { career: "WIZARD_1", level: 1 },
            { career: "WIZARD_2", level: 2 },
            { career: "WIZARD_3", level: 3 },
            { career: "WIZARD_4", level: 4 }
        ]
    },

    // --- BURGHER --- //
    AGITATOR: {
        name: "Agitator",
        class: CareerClass.BURGHER,
        levels: [
            { career: "AGITATOR_1", level: 1 },
            { career: "AGITATOR_2", level: 2 },
            { career: "AGITATOR_3", level: 3 },
            { career: "AGITATOR_4", level: 4 }
        ]
    },
    ARTISAN: {
        name: "Artisan",
        class: CareerClass.BURGHER,
        levels: [
            { career: "ARTISAN_1", level: 1 },
            { career: "ARTISAN_2", level: 2 },
            { career: "ARTISAN_3", level: 3 },
            { career: "ARTISAN_4", level: 4 }
        ]
    },
    BEGGAR: {
        name: "Beggar",
        class: CareerClass.BURGHER,
        levels: [
            { career: "BEGGAR_1", level: 1 },
            { career: "BEGGAR_2", level: 2 },
            { career: "BEGGAR_3", level: 3 },
            { career: "BEGGAR_4", level: 4 }
        ]
    },
    INVESTIGATOR: {
        name: "Investigator",
        class: CareerClass.BURGHER,
        levels: [
            { career: "INVESTIGATOR_1", level: 1 },
            { career: "INVESTIGATOR_2", level: 2 },
            { career: "INVESTIGATOR_3", level: 3 },
            { career: "INVESTIGATOR_4", level: 4 }
        ]
    },
    MERCHANT: {
        name: "Merchant",
        class: CareerClass.BURGHER,
        levels: [
            { career: "MERCHANT_1", level: 1 },
            { career: "MERCHANT_2", level: 2 },
            { career: "MERCHANT_3", level: 3 },
            { career: "MERCHANT_4", level: 4 }
        ]
    },
    RAT_CATCHER: {
        name: "Rat Catcher",
        class: CareerClass.BURGHER,
        levels: [
            { career: "RAT_CATCHER_1", level: 1 },
            { career: "RAT_CATCHER_2", level: 2 },
            { career: "RAT_CATCHER_3", level: 3 },
            { career: "RAT_CATCHER_4", level: 4 }
        ]
    },
    TOWNSMAN: {
        name: "Townsman",
        class: CareerClass.BURGHER,
        levels: [
            { career: "TOWNSMAN_1", level: 1 },
            { career: "TOWNSMAN_2", level: 2 },
            { career: "TOWNSMAN_3", level: 3 },
            { career: "TOWNSMAN_4", level: 4 }
        ]
    },
    WATCHMAN: {
        name: "Watchman",
        class: CareerClass.BURGHER,
        levels: [
            { career: "WATCHMAN_1", level: 1 },
            { career: "WATCHMAN_2", level: 2 },
            { career: "WATCHMAN_3", level: 3 },
            { career: "WATCHMAN_4", level: 4 }
        ]
    },

    // --- COURTIER --- //
    ADVISOR: {
        name: "Advisor",
        class: CareerClass.COURTIER,
        levels: [
            { career: "ADVISOR_1", level: 1 },
            { career: "ADVISOR_2", level: 2 },
            { career: "ADVISOR_3", level: 3 },
            { career: "ADVISOR_4", level: 4 }
        ]
    },
    ARTIST: {
        name: "Artist",
        class: CareerClass.COURTIER,
        levels: [
            { career: "ARTIST_1", level: 1 },
            { career: "ARTIST_2", level: 2 },
            { career: "ARTIST_3", level: 3 },
            { career: "ARTIST_4", level: 4 }
        ]
    },
    DUELLIST: {
        name: "Duellist",
        class: CareerClass.COURTIER,
        levels: [
            { career: "DUELLIST_1", level: 1 },
            { career: "DUELLIST_2", level: 2 },
            { career: "DUELLIST_3", level: 3 },
            { career: "DUELLIST_4", level: 4 }
        ]
    },
    ENVOY: {
        name: "Envoy",
        class: CareerClass.COURTIER,
        levels: [
            { career: "ENVOY_1", level: 1 },
            { career: "ENVOY_2", level: 2 },
            { career: "ENVOY_3", level: 3 },
            { career: "ENVOY_4", level: 4 }
        ]
    },
    NOBLE: {
        name: "Noble",
        class: CareerClass.COURTIER,
        levels: [
            { career: "NOBLE_1", level: 1 },
            { career: "NOBLE_2", level: 2 },
            { career: "NOBLE_3", level: 3 },
            { career: "NOBLE_4", level: 4 }
        ]
    },
    SERVANT: {
        name: "Servant",
        class: CareerClass.COURTIER,
        levels: [
            { career: "SERVANT_1", level: 1 },
            { career: "SERVANT_2", level: 2 },
            { career: "SERVANT_3", level: 3 },
            { career: "SERVANT_4", level: 4 }
        ]
    },
    SPY: {
        name: "Spy",
        class: CareerClass.COURTIER,
        levels: [
            { career: "SPY_1", level: 1 },
            { career: "SPY_2", level: 2 },
            { career: "SPY_3", level: 3 },
            { career: "SPY_4", level: 4 }
        ]
    },
    WARDEN: {
        name: "Warden",
        class: CareerClass.COURTIER,
        levels: [
            { career: "WARDEN_1", level: 1 },
            { career: "WARDEN_2", level: 2 },
            { career: "WARDEN_3", level: 3 },
            { career: "WARDEN_4", level: 4 }
        ]
    },

    // --- PEASANT --- //
    BAILIFF: {
        name: "Bailiff",
        class: CareerClass.PEASANT,
        levels: [
            { career: "BAILIFF_1", level: 1 },
            { career: "BAILIFF_2", level: 2 },
            { career: "BAILIFF_3", level: 3 },
            { career: "BAILIFF_4", level: 4 }
        ]
    },
    HEDGE_WITCH: {
        name: "Hedge Witch",
        class: CareerClass.PEASANT,
        levels: [
            { career: "HEDGE_WITCH_1", level: 1 },
            { career: "HEDGE_WITCH_2", level: 2 },
            { career: "HEDGE_WITCH_3", level: 3 },
            { career: "HEDGE_WITCH_4", level: 4 }
        ]
    },
    HERBALIST: {
        name: "Herbalist",
        class: CareerClass.PEASANT,
        levels: [
            { career: "HERBALIST_1", level: 1 },
            { career: "HERBALIST_2", level: 2 },
            { career: "HERBALIST_3", level: 3 },
            { career: "HERBALIST_4", level: 4 }
        ]
    },
    HUNTER: {
        name: "Hunter",
        class: CareerClass.PEASANT,
        levels: [
            { career: "HUNTER_1", level: 1 },
            { career: "HUNTER_2", level: 2 },
            { career: "HUNTER_3", level: 3 },
            { career: "HUNTER_4", level: 4 }
        ]
    },
    MINER: {
        name: "Miner",
        class: CareerClass.PEASANT,
        levels: [
            { career: "MINER_1", level: 1 },
            { career: "MINER_2", level: 2 },
            { career: "MINER_3", level: 3 },
            { career: "MINER_4", level: 4 }
        ]
    },
    MYSTIC: {
        name: "Mystic",
        class: CareerClass.PEASANT,
        levels: [
            { career: "MYSTIC_1", level: 1 },
            { career: "MYSTIC_2", level: 2 },
            { career: "MYSTIC_3", level: 3 },
            { career: "MYSTIC_4", level: 4 }
        ]
    },
    SCOUT: {
        name: "Scout",
        class: CareerClass.PEASANT,
        levels: [
            { career: "SCOUT_1", level: 1 },
            { career: "SCOUT_2", level: 2 },
            { career: "SCOUT_3", level: 3 },
            { career: "SCOUT_4", level: 4 }
        ]
    },
    VILLAGER: {
        name: "Villager",
        class: CareerClass.PEASANT,
        levels: [
            { career: "VILLAGER_1", level: 1 },
            { career: "VILLAGER_2", level: 2 },
            { career: "VILLAGER_3", level: 3 },
            { career: "VILLAGER_4", level: 4 }
        ]
    },

    // --- RANGER --- //
    BOUNTY_HUNTER: {
        name: "Bounty Hunter",
        class: CareerClass.RANGER,
        levels: [
            { career: "BOUNTY_HUNTER_1", level: 1 },
            { career: "BOUNTY_HUNTER_2", level: 2 },
            { career: "BOUNTY_HUNTER_3", level: 3 },
            { career: "BOUNTY_HUNTER_4", level: 4 }
        ]
    },
    COACHMAN: {
        name: "Coachman",
        class: CareerClass.RANGER,
        levels: [
            { career: "COACHMAN_1", level: 1 },
            { career: "COACHMAN_2", level: 2 },
            { career: "COACHMAN_3", level: 3 },
            { career: "COACHMAN_4", level: 4 }
        ]
    },
    ENTERTAINER: {
        name: "Entertainer",
        class: CareerClass.RANGER,
        levels: [
            { career: "ENTERTAINER_1", level: 1 },
            { career: "ENTERTAINER_2", level: 2 },
            { career: "ENTERTAINER_3", level: 3 },
            { career: "ENTERTAINER_4", level: 4 }
        ]
    },
    FLAGELLANT: {
        name: "Flagellant",
        class: CareerClass.RANGER,
        levels: [
            { career: "FLAGELLANT_1", level: 1 },
            { career: "FLAGELLANT_2", level: 2 },
            { career: "FLAGELLANT_3", level: 3 },
            { career: "FLAGELLANT_4", level: 4 }
        ]
    },
    MESSENGER: {
        name: "Messenger",
        class: CareerClass.RANGER,
        levels: [
            { career: "MESSENGER_1", level: 1 },
            { career: "MESSENGER_2", level: 2 },
            { career: "MESSENGER_3", level: 3 },
            { career: "MESSENGER_4", level: 4 }
        ]
    },
    PEDLAR: {
        name: "Pedlar",
        class: CareerClass.RANGER,
        levels: [
            { career: "PEDLAR_1", level: 1 },
            { career: "PEDLAR_2", level: 2 },
            { career: "PEDLAR_3", level: 3 },
            { career: "PEDLAR_4", level: 4 }
        ]
    },
    ROAD_WARDEN: {
        name: "Road Warden",
        class: CareerClass.RANGER,
        levels: [
            { career: "ROAD_WARDEN_1", level: 1 },
            { career: "ROAD_WARDEN_2", level: 2 },
            { career: "ROAD_WARDEN_3", level: 3 },
            { career: "ROAD_WARDEN_4", level: 4 }
        ]
    },
    WITCH_HUNTER: {
        name: "Witch Hunter",
        class: CareerClass.RANGER,
        levels: [
            { career: "WITCH_HUNTER_1", level: 1 },
            { career: "WITCH_HUNTER_2", level: 2 },
            { career: "WITCH_HUNTER_3", level: 3 },
            { career: "WITCH_HUNTER_4", level: 4 }
        ]
    },

    // --- Riverfolk --- //
    BOATMAN: {
        name: "Boatman",
        class: CareerClass.RIVERFOLK,
        levels: [
            { career: "BOATMAN_1", level: 1 },
            { career: "BOATMAN_2", level: 2 },
            { career: "BOATMAN_3", level: 3 },
            { career: "BOATMAN_4", level: 4 }
        ]
    },
    HUFFER: {
        name: "Huffer",
        class: CareerClass.RIVERFOLK,
        levels: [
            { career: "HUFFER_1", level: 1 },
            { career: "HUFFER_2", level: 2 },
            { career: "HUFFER_3", level: 3 },
            { career: "HUFFER_4", level: 4 }
        ]
    },
    RIVERWARDEN: {
        name: "Riverwarden",
        class: CareerClass.RIVERFOLK,
        levels: [
            { career: "RIVERWARDEN_1", level: 1 },
            { career: "RIVERWARDEN_2", level: 2 },
            { career: "RIVERWARDEN_3", level: 3 },
            { career: "RIVERWARDEN_4", level: 4 }
        ]
    },
    RIVERWOMAN: {
        name: "Riverwoman",
        class: CareerClass.RIVERFOLK,
        levels: [
            { career: "RIVERWOMAN_1", level: 1 },
            { career: "RIVERWOMAN_2", level: 2 },
            { career: "RIVERWOMAN_3", level: 3 },
            { career: "RIVERWOMAN_4", level: 4 }
        ]
    },
    SEAMAN: {
        name: "Seaman",
        class: CareerClass.RIVERFOLK,
        levels: [
            { career: "SEAMAN_1", level: 1 },
            { career: "SEAMAN_2", level: 2 },
            { career: "SEAMAN_3", level: 3 },
            { career: "SEAMAN_4", level: 4 }
        ]
    },
    SMUGGLER: {
        name: "Smuggler",
        class: CareerClass.RIVERFOLK,
        levels: [
            { career: "SMUGGLER_1", level: 1 },
            { career: "SMUGGLER_2", level: 2 },
            { career: "SMUGGLER_3", level: 3 },
            { career: "SMUGGLER_4", level: 4 }
        ]
    },
    STEVEDORE: {
        name: "Stevedore",
        class: CareerClass.RIVERFOLK,
        levels: [
            { career: "STEVEDORE_1", level: 1 },
            { career: "STEVEDORE_2", level: 2 },
            { career: "STEVEDORE_3", level: 3 },
            { career: "STEVEDORE_4", level: 4 }
        ]
    },
    WRECKER: {
        name: "Wrecker",
        class: CareerClass.RIVERFOLK,
        levels: [
            { career: "WRECKER_1", level: 1 },
            { career: "WRECKER_2", level: 2 },
            { career: "WRECKER_3", level: 3 },
            { career: "WRECKER_4", level: 4 }
        ]
    },

    // --- ROGUE --- //
    BAWD: {
        name: "Bawd",
        class: CareerClass.ROGUE,
        levels: [
            { career: "BAWD_1", level: 1 },
            { career: "BAWD_2", level: 2 },
            { career: "BAWD_3", level: 3 },
            { career: "BAWD_4", level: 4 }
        ]
    },
    CHARLATAN: {
        name: "Charlatan",
        class: CareerClass.ROGUE,
        levels: [
            { career: "CHARLATAN_1", level: 1 },
            { career: "CHARLATAN_2", level: 2 },
            { career: "CHARLATAN_3", level: 3 },
            { career: "CHARLATAN_4", level: 4 }
        ]
    },
    FENCE: {
        name: "Fence",
        class: CareerClass.ROGUE,
        levels: [
            { career: "FENCE_1", level: 1 },
            { career: "FENCE_2", level: 2 },
            { career: "FENCE_3", level: 3 },
            { career: "FENCE_4", level: 4 }
        ]
    },
    GRAVE_ROBBER: {
        name: "Grave Robber",
        class: CareerClass.ROGUE,
        levels: [
            { career: "GRAVE_ROBBER_1", level: 1 },
            { career: "GRAVE_ROBBER_2", level: 2 },
            { career: "GRAVE_ROBBER_3", level: 3 },
            { career: "GRAVE_ROBBER_4", level: 4 }
        ]
    },
    OUTLAW: {
        name: "Outlaw",
        class: CareerClass.ROGUE,
        levels: [
            { career: "OUTLAW_1", level: 1 },
            { career: "OUTLAW_2", level: 2 },
            { career: "OUTLAW_3", level: 3 },
            { career: "OUTLAW_4", level: 4 }
        ]
    },
    RACKETEER: {
        name: "Racketeer",
        class: CareerClass.ROGUE,
        levels: [
            { career: "RACKETEER_1", level: 1 },
            { career: "RACKETEER_2", level: 2 },
            { career: "RACKETEER_3", level: 3 },
            { career: "RACKETEER_4", level: 4 }
        ]
    },
    THIEF: {
        name: "Thief",
        class: CareerClass.ROGUE,
        levels: [
            { career: "THIEF_1", level: 1 },
            { career: "THIEF_2", level: 2 },
            { career: "THIEF_3", level: 3 },
            { career: "THIEF_4", level: 4 }
        ]
    },
    WITCH: {
        name: "Witch",
        class: CareerClass.ROGUE,
        levels: [
            { career: "WITCH_1", level: 1 },
            { career: "WITCH_2", level: 2 },
            { career: "WITCH_3", level: 3 },
            { career: "WITCH_4", level: 4 }
        ]
    },

    // --- WARRIOR --- //
    CAVALRYMAN: {
        name: "Cavalryman",
        class: CareerClass.WARRIOR,
        levels: [
            { career: "CAVALRYMAN_1", level: 1 },
            { career: "CAVALRYMAN_2", level: 2 },
            { career: "CAVALRYMAN_3", level: 3 },
            { career: "CAVALRYMAN_4", level: 4 }
        ]
    },
    GUARD: {
        name: "Guard",
        class: CareerClass.WARRIOR,
        levels: [
            { career: "GUARD_1", level: 1 },
            { career: "GUARD_2", level: 2 },
            { career: "GUARD_3", level: 3 },
            { career: "GUARD_4", level: 4 }
        ]
    },
    KNIGHT: {
        name: "Knight",
        class: CareerClass.WARRIOR,
        levels: [
            { career: "KNIGHT_1", level: 1 },
            { career: "KNIGHT_2", level: 2 },
            { career: "KNIGHT_3", level: 3 },
            { career: "KNIGHT_4", level: 4 }
        ]
    },
    PIT_FIGHTER: {
        name: "Pit Fighter",
        class: CareerClass.WARRIOR,
        levels: [
            { career: "PIT_FIGHTER_1", level: 1 },
            { career: "PIT_FIGHTER_2", level: 2 },
            { career: "PIT_FIGHTER_3", level: 3 },
            { career: "PIT_FIGHTER_4", level: 4 }
        ]
    },
    PROTAGONIST: {
        name: "Protagonist",
        class: CareerClass.WARRIOR,
        levels: [
            { career: "PROTAGONIST_1", level: 1 },
            { career: "PROTAGONIST_2", level: 2 },
            { career: "PROTAGONIST_3", level: 3 },
            { career: "PROTAGONIST_4", level: 4 }
        ]
    },
    SLAYER: {
        name: "Slayer",
        class: CareerClass.WARRIOR,
        levels: [
            { career: "SLAYER_1", level: 1 },
            { career: "SLAYER_2", level: 2 },
            { career: "SLAYER_3", level: 3 },
            { career: "SLAYER_4", level: 4 }
        ]
    },
    SOLDIER: {
        name: "Soldier",
        class: CareerClass.WARRIOR,
        levels: [
            { career: "SOLDIER_1", level: 1 },
            { career: "SOLDIER_2", level: 2 },
            { career: "SOLDIER_3", level: 3 },
            { career: "SOLDIER_4", level: 4 }
        ]
    },
    WARRIOR_PRIEST: {
        name: "Warrior Priest",
        class: CareerClass.WARRIOR,
        levels: [
            { career: "WARRIOR_PRIEST_1", level: 1 },
            { career: "WARRIOR_PRIEST_2", level: 2 },
            { career: "WARRIOR_PRIEST_3", level: 3 },
            { career: "WARRIOR_PRIEST_4", level: 4 }
        ]
    },
};
// #endregion === CAREER PATHS === //
// === //
// #region ====== CAREER SET === //
TEW.DATABASE.CAREERS.SET = {
    // --- ACADEMIC --- //
    // Apothecary
    APOTHECARY_1: {
        name: "Apothecary's Apprentice",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.TOUG, Stat.DEXT, Stat.INTL],
        competences: [
            "CONSUME_ALCOHOL", "HEAL", "LANGUAGE_CLASSICAL", "LORE_CHEMISTRY", "LORE_MEDICINE", "LORE_PLANTS",
            "TRADE_APOTHECARY", "TRADE_POISONER"
        ],
        talents: ["CONCOCT", "CRAFTSMAN_APOTHECARY", "ETIQUETTE_SCHOLARS", "READ_WRITE"]
    },
    APOTHECARY_2: {
        name: "Apothecary",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.TOUG, Stat.DEXT, Stat.INTL, Stat.FELW],
        competences: [
            "CONSUME_ALCOHOL", "HEAL", "LANGUAGE_CLASSICAL", "LORE_CHEMISTRY", "LORE_MEDICINE", "LORE_PLANTS",
            "TRADE_APOTHECARY", "TRADE_POISONER", "CHARM", "HAGGLE", "LORE_SCIENCE", "GOSSIP", "LANGUAGE_GUILDER",
            "PERCEPTION"
        ],
        talents: ["CRIMINAL", "DEALMAKER", "ETIQUETTE_GUILDERS", "PHARMACIST"]
    },
    APOTHECARY_3: {
        name: "Master Apothecary",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.TOUG, Stat.DEXT, Stat.INTL, Stat.FELW, Stat.INIT],
        competences: [
            "CONSUME_ALCOHOL", "HEAL", "LANGUAGE_CLASSICAL", "LORE_CHEMISTRY", "LORE_MEDICINE", "LORE_PLANTS",
            "TRADE_APOTHECARY", "TRADE_POISONER", "CHARM", "HAGGLE", "LORE_SCIENCE", "GOSSIP", "LANGUAGE_GUILDER",
            "PERCEPTION", "INTUITION", "LEADERSHIP", "RESEARCH", "SECRET_SIGNS_GUILD"
        ],
        talents: ["BOOKISH", "MASTER_TRADESMAN_APOTHECARY", "RESISTANCE_POISON", "SAVVY"]
    },
    APOTHECARY_4: {
        name: "Apothecary-General",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.TOUG, Stat.DEXT, Stat.INTL, Stat.FELW, Stat.INIT, Stat.WILL],
        competences: [
            "CONSUME_ALCOHOL", "HEAL", "LANGUAGE_CLASSICAL", "LORE_CHEMISTRY", "LORE_MEDICINE", "LORE_PLANTS",
            "TRADE_APOTHECARY", "TRADE_POISONER", "CHARM", "HAGGLE", "LORE_SCIENCE", "GOSSIP", "LANGUAGE_GUILDER",
            "PERCEPTION", "INTUITION", "LEADERSHIP", "RESEARCH", "SECRET_SIGNS_GUILD", "INTIMIDATE", "RIDE_HORSE"
        ],
        talents: ["ACUTE_SENSE_TASTE", "COOL_HEADED", "MASTER_TRADESMAN_POISONER", "SAVANT_APOTHECARY"]
    },
    // Engineer
    ENGINEER_1: {
        name: "Student Engineer",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.BALS, Stat.DEXT, Stat.INTL],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "LANGUAGE_CLASSICAL", "LORE_ENGINEERING", "PERCEPTION",
            "RANGED_BLACKPOWDER", "TRADE_ENGINEER"
        ],
        talents: ["ARTISTIC", "GUNNER", "READ_WRITE", "TINKER"]
    },
    ENGINEER_2: {
        name: "Engineer",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.BALS, Stat.DEXT, Stat.INTL, Stat.INIT],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "LANGUAGE_CLASSICAL", "LORE_ENGINEERING", "PERCEPTION",
            "RANGED_BLACKPOWDER", "TRADE_ENGINEER", "DRIVE", "DODGE", "NAVIGATION", "RANGED_ENGINEERING",
            "RESEARCH", "LANGUAGE_GUILDER"
        ],
        talents: ["CRAFTSMAN_ENGINEER", "ETIQUETTE_GUILDERS", "MARKSMAN", "ORIENTATION"]
    },
    ENGINEER_3: {
        name: "Master Engineer",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.BALS, Stat.DEXT, Stat.INTL, Stat.INIT, Stat.TOUG],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "LANGUAGE_CLASSICAL", "LORE_ENGINEERING", "PERCEPTION",
            "RANGED_BLACKPOWDER", "TRADE_ENGINEER", "DRIVE", "DODGE", "NAVIGATION", "RANGED_ENGINEERING",
            "RESEARCH", "LANGUAGE_GUILDER", "LANGUAGE_KHAZALID", "LEADERSHIP", "RIDE_HORSE", "SECRET_SIGNS_GUILD"
        ],
        talents: ["ETIQUETTE_SCHOLARS", "MASTER_TRADESMAN_ENGINEERING", "SNIPER", "SUPER_NUMERATE"]
    },
    ENGINEER_4: {
        name: "Chartered Engineer",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.BALS, Stat.DEXT, Stat.INTL, Stat.INIT, Stat.TOUG, Stat.WILL],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "LANGUAGE_CLASSICAL", "LORE_ENGINEERING", "PERCEPTION",
            "RANGED_BLACKPOWDER", "TRADE_ENGINEER", "DRIVE", "DODGE", "NAVIGATION", "RANGED_ENGINEERING",
            "RESEARCH", "LANGUAGE_GUILDER", "LANGUAGE_KHAZALID", "LEADERSHIP", "RIDE_HORSE", "SECRET_SIGNS_GUILD",
            "LANGUAGE_ANY", "LORE_ANY"
        ],
        talents: ["MAGNUM_OPUS", "RAPID_RELOAD", "SAVANT_ENGINEERING", "UNSHAKABLE"]
    },
    // Lawyer
    LAWYER_1: {
        name: "Student Lawyer",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.INTL],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_LAW", "LORE_THEOLOGY",
            "PERCEPTION", "RESEARCH"
        ],
        talents: ["BLATHER", "ETIQUETTE_SCHOLARS", "READ_WRITE", "SPEED_READER"]
    },
    LAWYER_2: {
        name: "Lawyer",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.INTL, Stat.FELW],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_LAW", "LORE_THEOLOGY",
            "PERCEPTION", "RESEARCH", "BRIBERY", "CHARM", "GOSSIP", "INTUITION", "LANGUAGE_GUILDER",
            "SECRET_SIGNS_GUILD"
        ],
        talents: ["ARGUMENTATIVE", "CRIMINAL", "ETIQUETTE_GUILDERS", "SUAVE"]
    },
    LAWYER_3: {
        name: "Barrister",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.INTL, Stat.FELW, Stat.WILL],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_LAW", "LORE_THEOLOGY",
            "PERCEPTION", "RESEARCH", "BRIBERY", "CHARM", "GOSSIP", "INTUITION", "LANGUAGE_GUILDER",
            "SECRET_SIGNS_GUILD", "ART_WRITING", "ENTERTAIN_SPEECHES", "INTIMIDATE", "LORE_ANY"
        ],
        talents: ["BOOKISH", "CAT_TONGUED", "IMPASSIONED_ZEAL", "SAVVY"]
    },
    LAWYER_4: {
        name: "Judge",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.INTL, Stat.FELW, Stat.WILL, Stat.TOUG],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_LAW", "LORE_THEOLOGY",
            "PERCEPTION", "RESEARCH", "BRIBERY", "CHARM", "GOSSIP", "INTUITION", "LANGUAGE_GUILDER",
            "SECRET_SIGNS_GUILD", "ART_WRITING", "ENTERTAIN_SPEECHES", "INTIMIDATE", "LORE_ANY", "COOL"
        ],
        talents: ["COMMANDING_PRESENCE", "KINGPIN", "SAVANT_LAW", "WEALTHY"]
    },
    // Nun
    NUN_1: {
        name: "Novitiate",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.DEXT, Stat.INTL, Stat.FELW],
        competences: [
            "ART_CALLIGRAPHY", "COOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "LORE_THEOLOGY",
            "PRAY"
        ],
        talents: ["BLESS_ANY", "STONE_SOUP", "PANHANDLE", "READ_WRITE"]
    },
    NUN_2: {
        name: "Nun",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.DEXT, Stat.INTL, Stat.FELW, Stat.WILL],
        competences: [
            "ART_CALLIGRAPHY", "COOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "LORE_THEOLOGY",
            "PRAY", "CHARM", "MELEE_ANY", "RESEARCH", "TRADE_BREWING", "TRADE_HERBALIST", "TRADE_VINTNER"
        ],
        talents: ["ETIQUETTE_CULTISTS", "FIELD_DRESSING", "HOLY_VISIONS", "INVOKE_ANY"]
    },
    NUN_3: {
        name: "Abbess",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.DEXT, Stat.INTL, Stat.FELW, Stat.WILL, Stat.INIT],
        competences: [
            "ART_CALLIGRAPHY", "COOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "LORE_THEOLOGY",
            "PRAY", "CHARM", "MELEE_ANY", "RESEARCH", "TRADE_BREWING", "TRADE_HERBALIST", "TRADE_VINTNER",
            "LEADERSHIP", "LORE_LOCAL", "LORE_POLITICS", "PERCEPTION"
        ],
        talents: ["RESISTANCE_ANY", "ROBUST", "SAVANT_THEOLOGY", "STOUT_HEARTED"]
    },
    NUN_4: {
        name: "Prioress General",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.DEXT, Stat.INTL, Stat.FELW, Stat.WILL, Stat.INIT, Stat.TOUG],
        competences: [
            "ART_CALLIGRAPHY", "COOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "LORE_THEOLOGY",
            "PRAY", "CHARM", "MELEE_ANY", "RESEARCH", "TRADE_BREWING", "TRADE_HERBALIST", "TRADE_VINTNER",
            "LEADERSHIP", "LORE_LOCAL", "LORE_POLITICS", "PERCEPTION", "LANGUAGE_ANY", "LORE_ANY"
        ],
        talents: ["COMMANDING_PRESENCE", "IRON_WILL", "PURE_SOUL", "STRONG_MINDED"]
    },
    // Physician
    PHYSICIAN_1: {
        name: "Physician's Apprentice",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.DEXT, Stat.INTL, Stat.WILL],
        competences: ["BRIBERY", "COOL", "DRIVE", "ENDURANCE", "GOSSIP", "HEAL", "PERCEPTION", "SLEIGHT_OF_HAND"],
        talents: ["BOOKISH", "FIELD_DRESSING", "READ_WRITE", "STRIKE_TO_STUN"]
    },
    PHYSICIAN_2: {
        name: "Physician",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.DEXT, Stat.INTL, Stat.WILL, Stat.FELW],
        competences: [
            "BRIBERY", "COOL", "DRIVE", "ENDURANCE", "GOSSIP", "HEAL", "PERCEPTION", "SLEIGHT_OF_HAND", "CHARM",
            "HAGGLE", "LANGUAGE_GUILDER", "LORE_ANATOMY", "LORE_MEDICINE", "TRADE_BARBER"
        ],
        talents: ["COOL_HEADED", "CRIMINAL", "ETIQUETTE_GUILDERS", "SURGERY"]
    },
    PHYSICIAN_3: {
        name: "Doktor",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.DEXT, Stat.INTL, Stat.WILL, Stat.FELW, Stat.INIT],
        competences: [
            "BRIBERY", "COOL", "DRIVE", "ENDURANCE", "GOSSIP", "HEAL", "PERCEPTION", "SLEIGHT_OF_HAND", "CHARM",
            "HAGGLE", "LANGUAGE_GUILDER", "LORE_ANATOMY", "LORE_MEDICINE", "TRADE_BARBER", "CONSUME_ALCOHOL",
            "INTIMIDATE", "LEADERSHIP", "RESEARCH"
        ],
        talents: ["ETIQUETTE_SCHOLARS", "RESISTANCE_DISEASE", "SAVVY", "STRIKE_TO_INJURE"]
    },
    PHYSICIAN_4: {
        name: "Court Physician",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.DEXT, Stat.INTL, Stat.WILL, Stat.FELW, Stat.INIT, Stat.AGIL],
        competences: [
            "BRIBERY", "COOL", "DRIVE", "ENDURANCE", "GOSSIP", "HEAL", "PERCEPTION", "SLEIGHT_OF_HAND", "CHARM",
            "HAGGLE", "LANGUAGE_GUILDER", "LORE_ANATOMY", "LORE_MEDICINE", "TRADE_BARBER", "CONSUME_ALCOHOL",
            "INTIMIDATE", "LEADERSHIP", "RESEARCH", "LORE_NOBILITY", "PERFORM_DANCING"
        ],
        talents: ["ETIQUETTE_NOBLES", "NIMBLE_FINGERED", "SAVANT_MEDICINE", "STRONG_MINDED"]
    },
    // Priest
    PRIEST_1: {
        name: "Initiate",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.WILL],
        competences: [
            "ATHLETICS", "COOL", "ENDURANCE", "INTUITION", "LORE_THEOLOGY", "PERCEPTION", "PRAY", "RESEARCH"
        ],
        talents: ["BLESS_ANY", "HOLY_VISIONS", "READ_WRITE", "SUAVE"]
    },
    PRIEST_2: {
        name: "Priest",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.WILL, Stat.FELW],
        competences: [
            "ATHLETICS", "COOL", "ENDURANCE", "INTUITION", "LORE_THEOLOGY", "PERCEPTION", "PRAY", "RESEARCH",
            "CHARM", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "INTIMIDATE", "MELEE_BASIC"
        ],
        talents: ["BLATHER", "BOOKISH", "ETIQUETTE_CULTISTS", "INVOKE_ANY"]
    },
    PRIEST_3: {
        name: "High Priest",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.WILL, Stat.FELW, Stat.INTL],
        competences: [
            "ATHLETICS", "COOL", "ENDURANCE", "INTUITION", "LORE_THEOLOGY", "PERCEPTION", "PRAY", "RESEARCH",
            "CHARM", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "INTIMIDATE", "MELEE_BASIC", "ART_WRITING",
            "ENTERTAIN_SPEECHES", "LEADERSHIP", "LORE_HERALDRY"
        ],
        talents: ["ACUTE_SENSE_ANY", "HATRED_ANY", "IMPASSIONED_ZEAL", "STRONG_MINDED"]
    },
    PRIEST_4: {
        name: "Lector",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.WILL, Stat.FELW, Stat.INTL, Stat.INIT],
        competences: [
            "ATHLETICS", "COOL", "ENDURANCE", "INTUITION", "LORE_THEOLOGY", "PERCEPTION", "PRAY", "RESEARCH",
            "CHARM", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "INTIMIDATE", "MELEE_BASIC", "ART_WRITING",
            "ENTERTAIN_SPEECHES", "LEADERSHIP", "LORE_HERALDRY", "LANGUAGE_ANY", "LORE_POLITICS"
        ],
        talents: ["MASTER_ORATOR", "PURE_SOUL", "RESISTANCE_ANY", "SAVANT_THEOLOGY"]
    },
    // Scholar
    SCHOLAR_1: {
        name: "Student",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.TOUG, Stat.INTL, Stat.WILL],
        competences: [
            "CONSUME_ALCOHOL", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL",
            "LORE_ANY", "RESEARCH"
        ],
        talents: ["CAROUSER", "READ_WRITE", "SAVVY", "SUPER_NUMERATE"]
    },
    SCHOLAR_2: {
        name: "Scholar",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.TOUG, Stat.INTL, Stat.WILL, Stat.INIT],
        competences: [
            "CONSUME_ALCOHOL", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL",
            "LORE_ANY", "RESEARCH", "ART_WRITING", "INTUITION", "LANGUAGE_ANY", "PERCEPTION", "TRADE_ANY"
        ],
        talents: ["BOOKISH", "ETIQUETTE_SCHOLARS", "SPEED_READER", "SUAVE"]
    },
    SCHOLAR_3: {
        name: "Fellow",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.TOUG, Stat.INTL, Stat.WILL, Stat.INIT, Stat.FELW],
        competences: [
            "CONSUME_ALCOHOL", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL",
            "LORE_ANY", "RESEARCH", "ART_WRITING", "INTUITION", "LANGUAGE_ANY", "PERCEPTION", "TRADE_ANY",
            "ENTERTAIN_LECTURE", "INTIMIDATE"
        ],
        talents: ["LINGUISTICS", "PUBLIC_SPEAKER", "SAVANT_ANY", "TOWER_OF_MEMORIES"]
    },
    SCHOLAR_4: {
        name: "Professor",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.TOUG, Stat.INTL, Stat.WILL, Stat.INIT, Stat.FELW, Stat.DEXT],
        competences: [
            "CONSUME_ALCOHOL", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL",
            "LORE_ANY", "RESEARCH", "ART_WRITING", "INTUITION", "LANGUAGE_ANY", "PERCEPTION", "TRADE_ANY",
            "ENTERTAIN_LECTURE", "INTIMIDATE", "ENTERTAIN_RHETORIC"
        ],
        talents: ["MAGNUM_OPUS", "MASTER_ORATOR", "SAVANT_ANY", "SHARP"]
    },
    // Wizard
    WIZARD_1: {
        name: "Wizard's Apprentice",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.WEAS, Stat.INTL, Stat.WILL],
        competences: [
            "CHANNELLING_ANY", "DODGE", "INTUITION", "LANGUAGE_MAGICK", "LORE_MAGIC", "MELEE_BASIC",
            "MELEE_POLE_ARM", "PERCEPTION"
        ],
        talents: ["AETHYRIC_ATTUNEMENT", "PETTY_MAGIC", "READ_WRITE", "SECOND_SIGHT"]
    },
    WIZARD_2: {
        name: "Wizard",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.INTL, Stat.WILL, Stat.AGIL],
        competences: [
            "CHANNELLING_ANY", "DODGE", "INTUITION", "LANGUAGE_MAGICK", "LORE_MAGIC", "MELEE_BASIC",
            "MELEE_POLE_ARM", "PERCEPTION", "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "LANGUAGE_BATTLE",
            "LANGUAGE_ANY"
        ],
        talents: ["ARCANE_MAGIC_ANY", "DETECT_ARTEFACT", "FAST_HANDS", "SIXTH_SENSE"]
    },
    WIZARD_3: {
        name: "Master Wizard",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.INTL, Stat.WILL, Stat.AGIL, Stat.INIT],
        competences: [
            "CHANNELLING_ANY", "DODGE", "INTUITION", "LANGUAGE_MAGICK", "LORE_MAGIC", "MELEE_BASIC",
            "MELEE_POLE_ARM", "PERCEPTION", "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "LANGUAGE_BATTLE",
            "LANGUAGE_ANY", "ANIMAL_CARE", "EVALUATE", "LORE_WAR", "RIDE_HORSE"
        ],
        talents: ["DUAL_WIELDER", "INSTINCTIVE_DICTION", "MAGICAL_SENSE", "MENACING"]
    },
    WIZARD_4: {
        name: "Wizard Lord",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.WEAS, Stat.INTL, Stat.WILL, Stat.AGIL, Stat.INIT, Stat.FELW],
        competences: [
            "CHANNELLING_ANY", "DODGE", "INTUITION", "LANGUAGE_MAGICK", "LORE_MAGIC", "MELEE_BASIC",
            "MELEE_POLE_ARM", "PERCEPTION", "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "LANGUAGE_BATTLE",
            "LANGUAGE_ANY", "ANIMAL_CARE", "EVALUATE", "LORE_WAR", "RIDE_HORSE", "LORE_ANY"
        ],
        talents: ["COMBAT_AWARE", "FRIGHTENING", "IRON_WILL", "WAR_WIZARD"]
    },

    // --- BURGHER --- //
    // Agitator
    AGITATOR_1: {
        name: "Pamphleteer",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.BALS, Stat.INTL, Stat.FELW],
        competences: [
            "ART_WRITING", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "GOSSIP", "HAGGLE", "LORE_POLITICS",
            "TRADE_PRINTING"
        ],
        talents: ["BLATHER", "GREGARIOUS", "PANHANDLE", "READ_WRITE"]
    },
    AGITATOR_2: {
        name: "Agitator",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.BALS, Stat.INTL, Stat.FELW, Stat.AGIL],
        competences: [
            "ART_WRITING", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "GOSSIP", "HAGGLE", "LORE_POLITICS",
            "TRADE_PRINTING", "COOL", "DODGE", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTUITION", "LEADERSHIP"
        ],
        talents: ["ALLEY_CAT", "ARGUMENTATIVE", "IMPASSIONED_ZEAL", "PUBLIC_SPEAKER"]
    },
    AGITATOR_3: {
        name: "Rabble Rouser",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.BALS, Stat.INTL, Stat.FELW, Stat.AGIL, Stat.WEAS],
        competences: [
            "ART_WRITING", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "GOSSIP", "HAGGLE", "LORE_POLITICS",
            "TRADE_PRINTING", "COOL", "DODGE", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTUITION", "LEADERSHIP",
            "ATHLETICS", "INTIMIDATE", "MELEE_BRAWLING", "PERCEPTION"
        ],
        talents: ["CAT_TONGUED", "DIRTY_FIGHTING", "FLEE", "STEP_ASIDE"]
    },
    AGITATOR_4: {
        name: "Demagogue",
        level: 4,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.BALS, Stat.INTL, Stat.FELW, Stat.AGIL, Stat.WEAS, Stat.INIT],
        competences: [
            "ART_WRITING", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "GOSSIP", "HAGGLE", "LORE_POLITICS",
            "TRADE_PRINTING", "COOL", "DODGE", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTUITION", "LEADERSHIP",
            "ATHLETICS", "INTIMIDATE", "MELEE_BRAWLING", "PERCEPTION", "LORE_HERALDRY", "RIDE_HORSE"
        ],
        talents: ["ETIQUETTE_ANY", "MASTER_ORATOR", "SCHEMER", "SUAVE"]
    },
    // Artisan
    ARTISAN_1: {
        name: "Apprentice Artisan",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.DEXT],
        competences: [
            "ATHLETICS", "COOL", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "EVALUATE", "STEALTH_URBAN", "TRADE_ANY"
        ],
        talents: ["ARTISTIC", "CRAFTSMAN_ANY", "STRONG_BACK", "VERY_STRONG"]
    },
    ARTISAN_2: {
        name: "Artisan",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.DEXT, Stat.FELW],
        competences: [
            "ATHLETICS", "COOL", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "EVALUATE", "STEALTH_URBAN", "TRADE_ANY",
            "CHARM", "HAGGLE", "LORE_LOCAL", "GOSSIP", "LANGUAGE_GUILDER", "PERCEPTION"
        ],
        talents: ["DEALMAKER", "ETIQUETTE_GUILDERS", "NIMBLE_FINGERED", "STURDY"]
    },
    ARTISAN_3: {
        name: "Master Artisan",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.DEXT, Stat.FELW, Stat.WILL],
        competences: [
            "ATHLETICS", "COOL", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "EVALUATE", "STEALTH_URBAN", "TRADE_ANY",
            "CHARM", "HAGGLE", "LORE_LOCAL", "GOSSIP", "LANGUAGE_GUILDER", "PERCEPTION", "INTUITION", "LEADERSHIP",
            "RESEARCH", "SECRET_SIGNS_GUILD"
        ],
        talents: ["ACUTE_SENSE_TASTE", "ACUTE_SENSE_TOUCH", "MASTER_TRADESMAN_ANY", "READ_WRITE", "TINKER"]
    },
    ARTISAN_4: {
        name: "Guildmaster",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.DEXT, Stat.FELW, Stat.WILL, Stat.INTL],
        competences: [
            "ATHLETICS", "COOL", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "EVALUATE", "STEALTH_URBAN", "TRADE_ANY",
            "CHARM", "HAGGLE", "LORE_LOCAL", "GOSSIP", "LANGUAGE_GUILDER", "PERCEPTION", "INTUITION", "LEADERSHIP",
            "RESEARCH", "SECRET_SIGNS_GUILD", "BRIBERY", "INTIMIDATE"
        ],
        talents: ["BRIBER", "MAGNUM_OPUS", "PUBLIC_SPEAKER", "SCHEMER"]
    },
    // Beggar
    BEGGAR_1: {
        name: "Pauper",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 0 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.FELW],
        competences: [
            "ATHLETICS", "CHARM", "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTUITION", "STEALTH_URBAN"
        ],
        talents: ["PANHANDLE", "RESISTANCE_DISEASE", "STONE_SOUP", "VERY_RESILIENT"]
    },
    BEGGAR_2: {
        name: "Beggar",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.FELW, Stat.WILL],
        competences: [
            "ATHLETICS", "CHARM", "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTUITION", "STEALTH_URBAN",
            "ENTERTAIN_ACTING", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERCEPTION", "SLEIGHT_OF_HAND"
        ],
        talents: ["ALLEY_CAT", "BENEATH_NOTICE", "CRIMINAL", "ETIQUETTE_CRIMINALS"]
    },
    BEGGAR_3: {
        name: "Master Beggar",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.FELW, Stat.WILL, Stat.WEAS],
        competences: [
            "ATHLETICS", "CHARM", "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTUITION", "STEALTH_URBAN",
            "ENTERTAIN_ACTING", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERCEPTION", "SLEIGHT_OF_HAND",
            "CHARM_ANIMAL", "LEADERSHIP", "LORE_LOCAL", "SECRET_SIGNS_VAGABOND"
        ],
        talents: ["BLATHER", "DIRTY_FIGHTING", "HARDY", "STEP_ASIDE"]
    },
    BEGGAR_4: {
        name: "Beggar King",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.FELW, Stat.WILL, Stat.WEAS, Stat.INIT],
        competences: [
            "ATHLETICS", "CHARM", "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTUITION", "STEALTH_URBAN",
            "ENTERTAIN_ACTING", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERCEPTION", "SLEIGHT_OF_HAND",
            "CHARM_ANIMAL", "LEADERSHIP", "LORE_LOCAL", "SECRET_SIGNS_VAGABOND", "BRIBERY", "INTIMIDATE"
        ],
        talents: ["CAT_TONGUED", "FEARLESS_WATCHMEN", "KINGPIN", "SUAVE"]
    },
    // Investigator
    INVESTIGATOR_1: {
        name: "Sleuth",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.INTL],
        competences: ["CHARM", "CLIMB", "COOL", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_URBAN", "TRACK"],
        talents: ["ALLEY_CAT", "BENEATH_NOTICE", "READ_WRITE", "SHARP"]
    },
    INVESTIGATOR_2: {
        name: "Investigator",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.INTL, Stat.FELW],
        competences: [
            "CHARM", "CLIMB", "COOL", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_URBAN", "TRACK",
            "CONSUME_ALCOHOL", "DODGE", "LORE_LAW", "MELEE_BRAWLING", "PICK_LOCK", "SLEIGHT_OF_HAND"
        ],
        talents: ["ETIQUETTE_ANY", "SAVVY", "SHADOW", "TENACIOUS"]
    },
    INVESTIGATOR_3: {
        name: "Master Investigator",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.INTL, Stat.FELW, Stat.DEXT],
        competences: [
            "CHARM", "CLIMB", "COOL", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_URBAN", "TRACK",
            "CONSUME_ALCOHOL", "DODGE", "LORE_LAW", "MELEE_BRAWLING", "PICK_LOCK", "SLEIGHT_OF_HAND", "BRIBERY",
            "EVALUATE", "LEADERSHIP", "LORE_ANY"
        ],
        talents: ["BOOKISH", "BREAK_AND_ENTER", "SIXTH_SENSE", "SUAVE"]
    },
    INVESTIGATOR_4: {
        name: "Detective",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.INTL, Stat.FELW, Stat.DEXT, Stat.WILL],
        competences: [
            "CHARM", "CLIMB", "COOL", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_URBAN", "TRACK",
            "CONSUME_ALCOHOL", "DODGE", "LORE_LAW", "MELEE_BRAWLING", "PICK_LOCK", "SLEIGHT_OF_HAND", "BRIBERY",
            "EVALUATE", "LEADERSHIP", "LORE_ANY", "INTIMIDATE"
        ],
        talents: ["ACUTE_SENSE_ANY", "SAVANT_ANY", "SPEED_READER", "TOWER_OF_MEMORIES"]
    },
    // Merchant
    MERCHANT_1: {
        name: "Trader",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.AGIL, Stat.WILL, Stat.FELW],
        competences: ["ANIMAL_CARE", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "DRIVE", "GAMBLE", "GOSSIP", "HAGGLE"],
        talents: ["BLATHER", "DEALMAKER", "READ_WRITE", "SUAVE"]
    },
    MERCHANT_2: {
        name: "Merchant",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.AGIL, Stat.WILL, Stat.FELW, Stat.INTL],
        competences: [
            "ANIMAL_CARE", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "DRIVE", "GAMBLE", "GOSSIP", "HAGGLE", "EVALUATE",
            "INTUITION", "LANGUAGE_ANY", "LANGUAGE_GUILDER", "LORE_LOCAL", "PERCEPTION"
        ],
        talents: ["BRIBER", "EMBEZZLE", "ETIQUETTE_GUILDERS", "SAVVY"]
    },
    MERCHANT_3: {
        name: "Master Merchant",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.AGIL, Stat.WILL, Stat.FELW, Stat.INTL, Stat.INIT],
        competences: [
            "ANIMAL_CARE", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "DRIVE", "GAMBLE", "GOSSIP", "HAGGLE", "EVALUATE",
            "INTUITION", "LANGUAGE_ANY", "LANGUAGE_GUILDER", "LORE_LOCAL", "PERCEPTION", "COOL",
            "LANGUAGE_CLASSICAL", "NAVIGATION", "SECRET_SIGNS_GUILD"
        ],
        talents: ["CAT_TONGUED", "ETIQUETTE_ANY", "NUMISMATICS", "SHARP"]
    },
    MERCHANT_4: {
        name: "Merchant Prince",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 3 },
        improvableStats: [Stat.AGIL, Stat.WILL, Stat.FELW, Stat.INTL, Stat.INIT, Stat.WEAS],
        competences: [
            "ANIMAL_CARE", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "DRIVE", "GAMBLE", "GOSSIP", "HAGGLE", "EVALUATE",
            "INTUITION", "LANGUAGE_ANY", "LANGUAGE_GUILDER", "LORE_LOCAL", "PERCEPTION", "COOL",
            "LANGUAGE_CLASSICAL", "NAVIGATION", "SECRET_SIGNS_GUILD", "LORE_ANY", "INTIMIDATE"
        ],
        talents: ["IRON_WILL", "LUCK", "SCHEMER", "WEALTHY"]
    },
    // Rat Catcher
    RAT_CATCHER_1: {
        name: "Rat Hunter",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.WEAS, Stat.BALS, Stat.WILL],
        competences: [
            "ATHLETICS", "ANIMAL_TRAINING_DOG", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "ENDURANCE", "MELEE_BASIC",
            "RANGED_SLING", "STEALTH_UNDERGROUND", "STEALTH_URBAN"
        ],
        talents: ["NIGHT_VISION", "RESISTANCE_DISEASE", "STRIKE_MIGHTY_BLOW", "STRIKE_TO_STUN"]
    },
    RAT_CATCHER_2: {
        name: "Rat Catcher",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.BALS, Stat.WILL, Stat.TOUG],
        competences: [
            "ATHLETICS", "ANIMAL_TRAINING_DOG", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "ENDURANCE", "MELEE_BASIC",
            "RANGED_SLING", "STEALTH_UNDERGROUND", "STEALTH_URBAN", "ANIMAL_CARE", "GOSSIP", "HAGGLE",
            "LORE_POISON", "PERCEPTION", "SET_TRAP"
        ],
        talents: ["ENCLOSED_FIGHTER", "ETIQUETTE_GUILDERS", "FEARLESS_RATS", "VERY_RESILIENT"]
    },
    RAT_CATCHER_3: {
        name: "Sewer Jack",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.WEAS, Stat.BALS, Stat.WILL, Stat.TOUG, Stat.INIT],
        competences: [
            "ATHLETICS", "ANIMAL_TRAINING_DOG", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "ENDURANCE", "MELEE_BASIC",
            "RANGED_SLING", "STEALTH_UNDERGROUND", "STEALTH_URBAN", "ANIMAL_CARE", "GOSSIP", "HAGGLE",
            "LORE_POISON", "PERCEPTION", "SET_TRAP", "CLIMB", "COOL", "DODGE", "RANGED_CROSSBOW"
        ],
        talents: ["HARDY", "STOUT_HEARTED", "STRONG_LEGS", "TUNNEL_RAT"]
    },
    RAT_CATCHER_4: {
        name: "Exterminator",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.BALS, Stat.WILL, Stat.TOUG, Stat.INIT, Stat.STRG],
        competences: [
            "ATHLETICS", "ANIMAL_TRAINING_DOG", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "ENDURANCE", "MELEE_BASIC",
            "RANGED_SLING", "STEALTH_UNDERGROUND", "STEALTH_URBAN", "ANIMAL_CARE", "GOSSIP", "HAGGLE",
            "LORE_POISON", "PERCEPTION", "SET_TRAP", "CLIMB", "COOL", "DODGE", "RANGED_CROSSBOW", "LEADERSHIP",
            "TRACK"
        ],
        talents: ["FEARLESS_SKAVEN", "MENACING", "ROBUST", "STRONG_MINDED"]
    },
    // Townsman
    TOWNSMAN_1: {
        name: "Clerk",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.AGIL, Stat.INTL, Stat.FELW],
        competences: ["CHARM", "CLIMB", "CONSUME_ALCOHOL", "DRIVE", "DODGE", "GAMBLE", "GOSSIP", "HAGGLE"],
        talents: ["ALLEY_CAT", "BENEATH_NOTICE", "ETIQUETTE_SERVANTS", "STURDY"]
    },
    TOWNSMAN_2: {
        name: "Townsman",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.AGIL, Stat.INTL, Stat.FELW, Stat.INIT],
        competences: [
            "CHARM", "CLIMB", "CONSUME_ALCOHOL", "DRIVE", "DODGE", "GAMBLE", "GOSSIP", "HAGGLE", "BRIBERY",
            "EVALUATE", "INTUITION", "LORE_LOCAL", "MELEE_BRAWLING", "PLAY_ANY"
        ],
        talents: ["DEALMAKER", "EMBEZZLE", "ETIQUETTE_ANY", "GREGARIOUS"]
    },
    TOWNSMAN_3: {
        name: "Town Councillor",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.AGIL, Stat.INTL, Stat.FELW, Stat.INIT, Stat.DEXT],
        competences: [
            "CHARM", "CLIMB", "CONSUME_ALCOHOL", "DRIVE", "DODGE", "GAMBLE", "GOSSIP", "HAGGLE", "BRIBERY",
            "EVALUATE", "INTUITION", "LORE_LOCAL", "MELEE_BRAWLING", "PLAY_ANY", "COOL", "LORE_LAW", "PERCEPTION",
            "RESEARCH"
        ],
        talents: ["BRIBER", "PUBLIC_SPEAKER", "READ_WRITE", "SUPPORTIVE"]
    },
    TOWNSMAN_4: {
        name: "Burgomeister",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.AGIL, Stat.INTL, Stat.FELW, Stat.INIT, Stat.DEXT, Stat.WILL],
        competences: [
            "CHARM", "CLIMB", "CONSUME_ALCOHOL", "DRIVE", "DODGE", "GAMBLE", "GOSSIP", "HAGGLE", "BRIBERY",
            "EVALUATE", "INTUITION", "LORE_LOCAL", "MELEE_BRAWLING", "PLAY_ANY", "COOL", "LORE_LAW", "PERCEPTION",
            "RESEARCH", "LORE_POLITICS", "INTIMIDATE"
        ],
        talents: ["COMMANDING_PRESENCE", "MASTER_ORATOR", "SCHEMER", "SUAVE"]
    },
    // Watchman
    WATCHMAN_1: {
        name: "Watch Recruit",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.FELW],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GAMBLE", "MELEE_ANY", "PERCEPTION"
        ],
        talents: ["DRILLED", "HARDY", "STRIKE_TO_STUN", "TENACIOUS"]
    },
    WATCHMAN_2: {
        name: "Watchman",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.FELW, Stat.WILL],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GAMBLE", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "INTUITION", "LORE_LOCAL"
        ],
        talents: ["BREAK_AND_ENTER", "CRIMINAL", "NIGHT_VISION", "SPRINTER"]
    },
    WATCHMAN_3: {
        name: "Watch Sergeant",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.FELW, Stat.WILL, Stat.INIT],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GAMBLE", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "INTUITION", "LORE_LOCAL", "ENTERTAIN_STORYTELLING", "HAGGLE",
            "LEADERSHIP", "LORE_LAW"
        ],
        talents: ["DISARM", "ETIQUETTE_SOLDIERS", "FEARLESS_CRIMINALS", "NOSE_FOR_TROUBLE"]
    },
    WATCHMAN_4: {
        name: "Watch Captain",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.FELW, Stat.WILL, Stat.INIT, Stat.INTL],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GAMBLE", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "INTUITION", "LORE_LOCAL", "ENTERTAIN_STORYTELLING", "HAGGLE",
            "LEADERSHIP", "LORE_LAW", "LORE_POLITICS", "RIDE_HORSE"
        ],
        talents: ["PUBLIC_SPEAKER", "ROBUST", "KINGPIN", "SCHEMER"]
    },

    // --- COURTIER --- //
    // Advisor
    ADVISOR_1: {
        name: "Aide",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_POLITICS",
            "PERCEPTION"
        ],
        talents: ["BENEATH_NOTICE", "ETIQUETTE_ANY", "GREGARIOUS", "READ_WRITE"]
    },
    ADVISOR_2: {
        name: "Advisor",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.FELW],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_POLITICS",
            "PERCEPTION", "CHARM", "COOL", "EVALUATE", "GAMBLE", "INTUITION", "LORE_LOCAL"
        ],
        talents: ["BLATHER", "CRIMINAL", "SCHEMER", "SUPPORTIVE"]
    },
    ADVISOR_3: {
        name: "Counsellor",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.FELW, Stat.INTL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_POLITICS",
            "PERCEPTION", "CHARM", "COOL", "EVALUATE", "GAMBLE", "INTUITION", "LORE_LOCAL",
            "ENTERTAIN_STORYTELLING", "LEADERSHIP", "LANGUAGE_ANY", "LORE_ANY"
        ],
        talents: ["ARGUMENTATIVE", "BRIBER", "CAROUSER", "CAT_TONGUED"]
    },
    ADVISOR_4: {
        name: "Chancellor",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 3 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.FELW, Stat.INTL, Stat.WILL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_POLITICS",
            "PERCEPTION", "CHARM", "COOL", "EVALUATE", "GAMBLE", "INTUITION", "LORE_LOCAL",
            "ENTERTAIN_STORYTELLING", "LEADERSHIP", "LANGUAGE_ANY", "LORE_ANY", "LORE_HERALDRY", "RIDE_HORSE"
        ],
        talents: ["COMMANDING_PRESENCE", "EMBEZZLE", "KINGPIN", "SUAVE"]
    },
    // Artist
    ARTIST_1: {
        name: "Apprentice Artist",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.DEXT],
        competences: [
            "ART_ANY", "COOL", "CONSUME_ALCOHOL", "EVALUATE", "ENDURANCE", "GOSSIP", "PERCEPTION", "STEALTH_URBAN"
        ],
        talents: ["ARTISTIC", "SHARP", "STRONG_BACK", "TENACIOUS"]
    },
    ARTIST_2: {
        name: "Artist",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.DEXT, Stat.FELW],
        competences: [
            "ART_ANY", "COOL", "CONSUME_ALCOHOL", "EVALUATE", "ENDURANCE", "GOSSIP", "PERCEPTION", "STEALTH_URBAN",
            "CLIMB", "GAMBLE", "HAGGLE", "INTUITION", "LANGUAGE_CLASSICAL", "TRADE_ART_SUPPLIES"
        ],
        talents: ["CAROUSER", "CRIMINAL", "GREGARIOUS", "NIMBLE_FINGERED"]
    },
    ARTIST_3: {
        name: "Master Artist",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.DEXT, Stat.FELW, Stat.WILL],
        competences: [
            "ART_ANY", "COOL", "CONSUME_ALCOHOL", "EVALUATE", "ENDURANCE", "GOSSIP", "PERCEPTION", "STEALTH_URBAN",
            "CLIMB", "GAMBLE", "HAGGLE", "INTUITION", "LANGUAGE_CLASSICAL", "TRADE_ART_SUPPLIES", "CHARM",
            "LEADERSHIP", "LORE_ART", "LORE_HERALDRY"
        ],
        talents: ["ACUTE_SENSE_ANY", "DEALMAKER", "ETIQUETTE_ANY", "NOSE_FOR_TROUBLE"]
    },
    ARTIST_4: {
        name: "Maestro",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.DEXT, Stat.FELW, Stat.WILL, Stat.INTL],
        competences: [
            "ART_ANY", "COOL", "CONSUME_ALCOHOL", "EVALUATE", "ENDURANCE", "GOSSIP", "PERCEPTION", "STEALTH_URBAN",
            "CLIMB", "GAMBLE", "HAGGLE", "INTUITION", "LANGUAGE_CLASSICAL", "TRADE_ART_SUPPLIES", "CHARM",
            "LEADERSHIP", "LORE_ART", "LORE_HERALDRY", "RESEARCH", "RIDE_HORSE"
        ],
        talents: ["AMBIDEXTROUS", "KINGPIN", "MAGNUM_OPUS", "READ_WRITE"]
    },
    // Duellist
    DUELLIST_1: {
        name: "Fencer",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.AGIL],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "HEAL", "INTUITION", "LANGUAGE_CLASSICAL", "MELEE_ANY", "PERCEPTION"
        ],
        talents: ["BEAT_BLADE", "DISTRACT", "FEINT", "STEP_ASIDE"]
    },
    DUELLIST_2: {
        name: "Duellist",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.AGIL, Stat.BALS],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "HEAL", "INTUITION", "LANGUAGE_CLASSICAL", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GAMBLE", "MELEE_PARRY", "RANGED_BLACKPOWDER", "TRADE_GUNSMITH"
        ],
        talents: ["COMBAT_REFLEXES", "ETIQUETTE_ANY", "FAST_SHOT", "REVERSAL"]
    },
    DUELLIST_3: {
        name: "Duelmaster",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.AGIL, Stat.BALS, Stat.STRG],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "HEAL", "INTUITION", "LANGUAGE_CLASSICAL", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GAMBLE", "MELEE_PARRY", "RANGED_BLACKPOWDER", "TRADE_GUNSMITH", "INTIMIDATE",
            "LEADERSHIP", "MELEE_BASIC", "PERFORM_ACROBATICS"
        ],
        talents: ["AMBIDEXTROUS", "DISARM", "DUAL_WIELDER", "RIPOSTE"]
    },
    DUELLIST_4: {
        name: "Judicial Champion",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 3 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.AGIL, Stat.BALS, Stat.STRG, Stat.WILL],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "HEAL", "INTUITION", "LANGUAGE_CLASSICAL", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GAMBLE", "MELEE_PARRY", "RANGED_BLACKPOWDER", "TRADE_GUNSMITH", "INTIMIDATE",
            "LEADERSHIP", "MELEE_BASIC", "PERFORM_ACROBATICS", "LORE_LAW"
        ],
        talents: ["COMBAT_MASTER", "MENACING", "REACTION_STRIKE", "STRIKE_TO_INJURE"]
    },
    // Envoy
    ENVOY_1: {
        name: "Herald",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.FELW],
        competences: ["ATHLETICS", "CHARM", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "RIDE_HORSE", "ROW"],
        talents: ["BLATHER", "ETIQUETTE_NOBLES", "READ_WRITE", "SUAVE"]
    },
    ENVOY_2: {
        name: "Envoy",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.FELW, Stat.INTL],
        competences: [
            "ATHLETICS", "CHARM", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "RIDE_HORSE", "ROW", "ART_WRITING",
            "BRIBERY", "COOL", "GOSSIP", "HAGGLE", "LORE_POLITICS"
        ],
        talents: ["ATTRACTIVE", "CAT_TONGUED", "ETIQUETTE_ANY", "SEASONED_TRAVELLER"]
    },
    ENVOY_3: {
        name: "Diplomat",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.FELW, Stat.INTL, Stat.INIT],
        competences: [
            "ATHLETICS", "CHARM", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "RIDE_HORSE", "ROW", "ART_WRITING",
            "BRIBERY", "COOL", "GOSSIP", "HAGGLE", "LORE_POLITICS", "INTIMIDATE", "LANGUAGE_ANY", "LEADERSHIP",
            "NAVIGATION"
        ],
        talents: ["CAROUSER", "DEALMAKER", "GREGARIOUS", "SCHEMER"]
    },
    ENVOY_4: {
        name: "Ambassador",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 5 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.FELW, Stat.INTL, Stat.INIT, Stat.WILL],
        competences: [
            "ATHLETICS", "CHARM", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "RIDE_HORSE", "ROW", "ART_WRITING",
            "BRIBERY", "COOL", "GOSSIP", "HAGGLE", "LORE_POLITICS", "INTIMIDATE", "LANGUAGE_ANY", "LEADERSHIP",
            "NAVIGATION", "LORE_ANY"
        ],
        talents: ["BRIBER", "COMMANDING_PRESENCE", "NOBLE_BLOOD", "SAVVY"]
    },
    // Noble
    NOBLE_1: {
        name: "Scion",
        level: 1,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.DEXT],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "INTIMIDATE", "LEADERSHIP", "LORE_HERALDRY", "MELEE_FENCING",
            "PLAY_ANY"
        ],
        talents: ["ETIQUETTE_NOBLES", "LUCK", "NOBLE_BLOOD", "READ_WRITE"]
    },
    NOBLE_2: {
        name: "Noble",
        level: 2,
        status: { tier: CareerStatusTier.GOLD, level: 3 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.DEXT, Stat.FELW],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "INTIMIDATE", "LEADERSHIP", "LORE_HERALDRY", "MELEE_FENCING",
            "PLAY_ANY", "CHARM", "GOSSIP", "LANGUAGE_CLASSICAL", "LORE_LOCAL", "RIDE_HORSE", "MELEE_PARRY"
        ],
        talents: ["ATTRACTIVE", "BRIBER", "CAROUSER", "SUAVE"]
    },
    NOBLE_3: {
        name: "Magnate",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 5 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.DEXT, Stat.FELW, Stat.INTL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "INTIMIDATE", "LEADERSHIP", "LORE_HERALDRY", "MELEE_FENCING",
            "PLAY_ANY", "CHARM", "GOSSIP", "LANGUAGE_CLASSICAL", "LORE_LOCAL", "RIDE_HORSE", "MELEE_PARRY",
            "LANGUAGE_ANY", "INTUITION", "LORE_POLITICS", "PERCEPTION"
        ],
        talents: ["COOL_HEADED", "DEALMAKER", "PUBLIC_SPEAKER", "SCHEMER"]
    },
    NOBLE_4: {
        name: "Noble Lord",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 7 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.DEXT, Stat.FELW, Stat.INTL, Stat.WILL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "INTIMIDATE", "LEADERSHIP", "LORE_HERALDRY", "MELEE_FENCING",
            "PLAY_ANY", "CHARM", "GOSSIP", "LANGUAGE_CLASSICAL", "LORE_LOCAL", "RIDE_HORSE", "MELEE_PARRY",
            "LANGUAGE_ANY", "INTUITION", "LORE_POLITICS", "PERCEPTION", "LORE_ANY", "TRACK"
        ],
        talents: ["COMMANDING_PRESENCE", "IRON_WILL", "WAR_LEADER", "WEALTHY"]
    },
    // Servant
    SERVANT_1: {
        name: "Menial",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL],
        competences: ["ATHLETICS", "CLIMB", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_ANY"],
        talents: ["BENEATH_NOTICE", "STRONG_BACK", "STRONG_MINDED", "STURDY"]
    },
    SERVANT_2: {
        name: "Servant",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.INIT],
        competences: [
            "ATHLETICS", "CLIMB", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_ANY",
            "ANIMAL_CARE", "CONSUME_ALCOHOL", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE"
        ],
        talents: ["ETIQUETTE_SERVANTS", "SHADOW", "TENACIOUS", "WELL_PREPARED"]
    },
    SERVANT_3: {
        name: "Attendant",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.INIT, Stat.INTL],
        competences: [
            "ATHLETICS", "CLIMB", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_ANY",
            "ANIMAL_CARE", "CONSUME_ALCOHOL", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "CHARM", "COOL",
            "INTIMIDATE", "LORE_LOCAL"
        ],
        talents: ["EMBEZZLE", "RESISTANCE_POISON", "SUAVE", "SUPPORTIVE"]
    },
    SERVANT_4: {
        name: "Steward",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.INIT, Stat.INTL, Stat.FELW],
        competences: [
            "ATHLETICS", "CLIMB", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_ANY",
            "ANIMAL_CARE", "CONSUME_ALCOHOL", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "CHARM", "COOL",
            "INTIMIDATE", "LORE_LOCAL", "LEADERSHIP", "MELEE_BASIC"
        ],
        talents: ["ETIQUETTE_ANY", "NUMISMATICS", "READ_WRITE", "SAVVY"]
    },
    // Spy
    SPY_1: {
        name: "Informer",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.AGIL, Stat.WILL, Stat.FELW],
        competences: ["BRIBERY", "CHARM", "COOL", "GAMBLE", "GOSSIP", "HAGGLE", "PERCEPTION", "STEALTH_ANY"],
        talents: ["BLATHER", "CAROUSER", "GREGARIOUS", "SHADOW"]
    },
    SPY_2: {
        name: "Spy",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.AGIL, Stat.WILL, Stat.FELW, Stat.WEAS],
        competences: [
            "BRIBERY", "CHARM", "COOL", "GAMBLE", "GOSSIP", "HAGGLE", "PERCEPTION", "STEALTH_ANY", "CLIMB",
            "ENTERTAIN_ACTING", "INTUITION", "MELEE_BASIC", "SECRET_SIGNS_ANY", "SLEIGHT_OF_HAND"
        ],
        talents: ["ETIQUETTE_ANY", "LIP_READING", "READ_WRITE", "SECRET_IDENTITY"]
    },
    SPY_3: {
        name: "Agent",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.AGIL, Stat.WILL, Stat.FELW, Stat.WEAS, Stat.INIT],
        competences: [
            "BRIBERY", "CHARM", "COOL", "GAMBLE", "GOSSIP", "HAGGLE", "PERCEPTION", "STEALTH_ANY", "CLIMB",
            "ENTERTAIN_ACTING", "INTUITION", "MELEE_BASIC", "SECRET_SIGNS_ANY", "SLEIGHT_OF_HAND", "ANIMAL_CARE",
            "ANIMAL_TRAINING_PIGEON", "LANGUAGE_ANY", "LEADERSHIP"
        ],
        talents: ["ATTRACTIVE", "CAT_TONGUED", "MASTER_OF_DISGUISE", "MIMIC"]
    },
    SPY_4: {
        name: "Spymaster",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 4 },
        improvableStats: [Stat.AGIL, Stat.WILL, Stat.FELW, Stat.WEAS, Stat.INIT, Stat.INTL],
        competences: [
            "BRIBERY", "CHARM", "COOL", "GAMBLE", "GOSSIP", "HAGGLE", "PERCEPTION", "STEALTH_ANY", "CLIMB",
            "ENTERTAIN_ACTING", "INTUITION", "MELEE_BASIC", "SECRET_SIGNS_ANY", "SLEIGHT_OF_HAND", "ANIMAL_CARE",
            "ANIMAL_TRAINING_PIGEON", "LANGUAGE_ANY", "LEADERSHIP", "LORE_ANY", "RESEARCH"
        ],
        talents: ["BRIBER", "SCHEMER", "SUAVE", "TOWER_OF_MEMORIES"]
    },
    // Warden
    WARDEN_1: {
        name: "Custodian",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.WILL],
        competences: [
            "ATHLETICS", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL",
            "PERCEPTION"
        ],
        talents: ["MENACING", "NIGHT_VISION", "SHARP", "STRIKE_TO_STUN"]
    },
    WARDEN_2: {
        name: "Warden",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.WILL, Stat.WEAS],
        competences: [
            "ATHLETICS", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL",
            "PERCEPTION", "ANIMAL_CARE", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "RANGED_BOW", "RIDE_HORSE", "SWIM"
        ],
        talents: ["ANIMAL_AFFINITY", "ETIQUETTE_SERVANTS", "STRIDER_ANY", "ROVER"]
    },
    WARDEN_3: {
        name: "Seneschal",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.WILL, Stat.WEAS, Stat.FELW],
        competences: [
            "ATHLETICS", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL",
            "PERCEPTION", "ANIMAL_CARE", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "RANGED_BOW", "RIDE_HORSE", "SWIM",
            "BRIBERY", "CHARM", "GOSSIP", "LEADERSHIP"
        ],
        talents: ["EMBEZZLE", "NUMISMATICS", "READ_WRITE", "SUPPORTIVE"]
    },
    WARDEN_4: {
        name: "Governor",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 3 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.WILL, Stat.WEAS, Stat.FELW, Stat.INTL],
        competences: [
            "ATHLETICS", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL",
            "PERCEPTION", "ANIMAL_CARE", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "RANGED_BOW", "RIDE_HORSE", "SWIM",
            "BRIBERY", "CHARM", "GOSSIP", "LEADERSHIP", "EVALUATE", "LANGUAGE_ANY"
        ],
        talents: ["COMMANDING_PRESENCE", "ETIQUETTE_ANY", "SAVANT_LOCAL", "SUAVE"]
    },

    // --- PEASANT --- //
    // Bailiff
    BAILIFF_1: {
        name: "Tax Collector",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.WILL],
        competences: ["COOL", "DODGE", "ENDURANCE", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_BASIC", "PERCEPTION"],
        talents: ["EMBEZZLE", "NUMISMATICS", "STRONG_BACK", "TENACIOUS"]
    },
    BAILIFF_2: {
        name: "Bailiff",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.WILL, Stat.FELW],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_BASIC", "PERCEPTION", "BRIBERY",
            "CHARM", "EVALUATE", "INTUITION", "LEADERSHIP", "LORE_LOCAL"
        ],
        talents: ["BREAK_AND_ENTER", "CRIMINAL", "PUBLIC_SPEAKER", "STRIKE_TO_STUN"]
    },
    BAILIFF_3: {
        name: "Reeve",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.WILL, Stat.FELW, Stat.AGIL],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_BASIC", "PERCEPTION", "BRIBERY",
            "CHARM", "EVALUATE", "INTUITION", "LEADERSHIP", "LORE_LOCAL", "ANIMAL_CARE", "LORE_HERALDRY",
            "NAVIGATION", "RIDE_HORSE"
        ],
        talents: ["KINGPIN", "MENACING", "NOSE_FOR_TROUBLE", "READ_WRITE"]
    },
    BAILIFF_4: {
        name: "Magistrate",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 3 },
        improvableStats: [Stat.WEAS, Stat.INIT, Stat.WILL, Stat.FELW, Stat.AGIL, Stat.INTL],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_BASIC", "PERCEPTION", "BRIBERY",
            "CHARM", "EVALUATE", "INTUITION", "LEADERSHIP", "LORE_LOCAL", "ANIMAL_CARE", "LORE_HERALDRY",
            "NAVIGATION", "RIDE_HORSE", "LANGUAGE_CLASSICAL", "LORE_LAW"
        ],
        talents: ["COMMANDING_PRESENCE", "IRON_WILL", "SAVVY", "SCHEMER"]
    },
    // Hedge Witch
    HEDGE_WITCH_1: {
        name: "Hedge Apprentice",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.DEXT],
        competences: [
            "CHANNELLING_ANY", "ENDURANCE", "INTUITION", "LANGUAGE_MAGICK", "LORE_FOLKLORE", "LORE_HERBS",
            "OUTDOOR_SURVIVAL", "PERCEPTION"
        ],
        talents: ["FAST_HANDS", "PETTY_MAGIC", "ROVER", "STRIDER_WOODLANDS"]
    },
    HEDGE_WITCH_2: {
        name: "Hedge Witch",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.DEXT, Stat.INTL],
        competences: [
            "CHANNELLING_ANY", "ENDURANCE", "INTUITION", "LANGUAGE_MAGICK", "LORE_FOLKLORE", "LORE_HERBS",
            "OUTDOOR_SURVIVAL", "PERCEPTION", "COOL", "GOSSIP", "HEAL", "LORE_LOCAL", "TRADE_CHARMS",
            "TRADE_HERBALIST"
        ],
        talents: ["AETHYRIC_ATTUNEMENT", "ANIMAL_AFFINITY", "ARCANE_MAGIC_HEDGECRAFT", "SIXTH_SENSE"]
    },
    HEDGE_WITCH_3: {
        name: "Hedge Master",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.DEXT, Stat.INTL, Stat.FELW],
        competences: [
            "CHANNELLING_ANY", "ENDURANCE", "INTUITION", "LANGUAGE_MAGICK", "LORE_FOLKLORE", "LORE_HERBS",
            "OUTDOOR_SURVIVAL", "PERCEPTION", "COOL", "GOSSIP", "HEAL", "LORE_LOCAL", "TRADE_CHARMS",
            "TRADE_HERBALIST", "HAGGLE", "LORE_GENEALOGY", "LORE_MAGIC", "LORE_SPIRITS"
        ],
        talents: ["CRAFTSMAN_HERBALIST", "MAGICAL_SENSE", "PURE_SOUL", "RESISTANCE_DISEASE"]
    },
    HEDGE_WITCH_4: {
        name: "Hedgewise",
        level: 4,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.DEXT, Stat.INTL, Stat.FELW, Stat.WILL],
        competences: [
            "CHANNELLING_ANY", "ENDURANCE", "INTUITION", "LANGUAGE_MAGICK", "LORE_FOLKLORE", "LORE_HERBS",
            "OUTDOOR_SURVIVAL", "PERCEPTION", "COOL", "GOSSIP", "HEAL", "LORE_LOCAL", "TRADE_CHARMS",
            "TRADE_HERBALIST", "HAGGLE", "LORE_GENEALOGY", "LORE_MAGIC", "LORE_SPIRITS", "INTIMIDATE", "PRAY"
        ],
        talents: ["ACUTE_SENSE_ANY", "MASTER_TRADESMAN_HERBALIST", "NIGHT_VISION", "STRONG_MINDED"]
    },
    // Herbalist
    HERBALIST_1: {
        name: "Herb Gatherer",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_HERBS", "OUTDOOR_SURVIVAL", "PERCEPTION", "SWIM",
            "TRADE_HERBALIST"
        ],
        talents: ["ACUTE_SENSE_TASTE", "ORIENTATION", "ROVER", "STRIDER_ANY"]
    },
    HERBALIST_2: {
        name: "Herbalist",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.DEXT],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_HERBS", "OUTDOOR_SURVIVAL", "PERCEPTION", "SWIM",
            "TRADE_HERBALIST", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "HAGGLE", "HEAL", "LORE_LOCAL"
        ],
        talents: ["DEALMAKER", "NIMBLE_FINGERED", "SHARP", "STURDY"]
    },
    HERBALIST_3: {
        name: "Herb Master",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.DEXT, Stat.FELW],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_HERBS", "OUTDOOR_SURVIVAL", "PERCEPTION", "SWIM",
            "TRADE_HERBALIST", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "HAGGLE", "HEAL", "LORE_LOCAL", "INTUITION",
            "LEADERSHIP", "LORE_MEDICINE", "TRADE_POISONER"
        ],
        talents: ["CRAFTSMAN_HERBALIST", "FIELD_DRESSING", "HARDY", "SAVVY"]
    },
    HERBALIST_4: {
        name: "Herbwise",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.INTL],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_HERBS", "OUTDOOR_SURVIVAL", "PERCEPTION", "SWIM",
            "TRADE_HERBALIST", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "HAGGLE", "HEAL", "LORE_LOCAL", "INTUITION",
            "LEADERSHIP", "LORE_MEDICINE", "TRADE_POISONER", "DRIVE", "NAVIGATION"
        ],
        talents: ["CONCOCT", "MASTER_TRADESMAN_HERBALIST", "RESISTANCE_POISON", "SAVANT_HERBS"]
    },
    // Hunter
    HUNTER_1: {
        name: "Trapper",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.DEXT],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_BEASTS", "OUTDOOR_SURVIVAL", "PERCEPTION", "RANGED_SLING",
            "SET_TRAP"
        ],
        talents: ["HARDY", "ROVER", "STRIDER_ANY", "TRAPPER"]
    },
    HUNTER_2: {
        name: "Hunter",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.DEXT, Stat.BALS],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_BEASTS", "OUTDOOR_SURVIVAL", "PERCEPTION", "RANGED_SLING",
            "SET_TRAP", "COOL", "INTUITION", "MELEE_BASIC", "RANGED_BOW", "SECRET_SIGNS_HUNTER", "STEALTH_RURAL"
        ],
        talents: ["ACCURATE_SHOT", "FAST_SHOT", "HUNTERS_EYE", "MARKSMAN"]
    },
    HUNTER_3: {
        name: "Tracker",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.DEXT, Stat.BALS, Stat.INIT],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_BEASTS", "OUTDOOR_SURVIVAL", "PERCEPTION", "RANGED_SLING",
            "SET_TRAP", "COOL", "INTUITION", "MELEE_BASIC", "RANGED_BOW", "SECRET_SIGNS_HUNTER", "STEALTH_RURAL",
            "NAVIGATION", "RIDE_HORSE", "SWIM", "TRACK"
        ],
        talents: ["ACUTE_SENSE_ANY", "DEADEYE_SHOT", "FEARLESS_ANIMALS", "SHARPSHOOTER"]
    },
    HUNTER_4: {
        name: "Huntsmaster",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.DEXT, Stat.BALS, Stat.INIT, Stat.INTL],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_BEASTS", "OUTDOOR_SURVIVAL", "PERCEPTION", "RANGED_SLING",
            "SET_TRAP", "COOL", "INTUITION", "MELEE_BASIC", "RANGED_BOW", "SECRET_SIGNS_HUNTER", "STEALTH_RURAL",
            "NAVIGATION", "RIDE_HORSE", "SWIM", "TRACK", "ANIMAL_CARE", "ANIMAL_TRAINING_ANY"
        ],
        talents: ["FEARLESS_MONSTERS", "ROBUST", "SNIPER", "SURE_SHOT"]
    },
    // Miner
    MINER_1: {
        name: "Prospector",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.WILL],
        competences: [
            "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "SWIM"
        ],
        talents: ["ROVER", "STRIDER_ROCKY", "STURDY", "TENACIOUS"]
    },
    MINER_2: {
        name: "Miner",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.WILL, Stat.WEAS],
        competences: [
            "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "SWIM", "CLIMB", "CONSUME_ALCOHOL", "EVALUATE", "MELEE_BASIC", "SECRET_SIGNS_MINER", "TRADE_EXPLOSIVES"
        ],
        talents: ["NIGHT_VISION", "STRIKE_MIGHTY_BLOW", "STRONG_BACK", "VERY_STRONG"]
    },
    MINER_3: {
        name: "Master Miner",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.WILL, Stat.WEAS, Stat.INIT],
        competences: [
            "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "SWIM", "CLIMB", "CONSUME_ALCOHOL", "EVALUATE", "MELEE_BASIC", "SECRET_SIGNS_MINER", "TRADE_EXPLOSIVES",
            "GOSSIP", "LORE_GEOLOGY", "STEALTH_UNDERGROUND", "TRADE_ENGINEER"
        ],
        talents: ["CAREFUL_STRIKE", "CRAFTSMAN_EXPLOSIVES", "TINKER", "TUNNEL_RAT"]
    },
    MINER_4: {
        name: "Mine Foreman",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.WILL, Stat.WEAS, Stat.INIT, Stat.FELW],
        competences: [
            "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "SWIM", "CLIMB", "CONSUME_ALCOHOL", "EVALUATE", "MELEE_BASIC", "SECRET_SIGNS_MINER", "TRADE_EXPLOSIVES",
            "GOSSIP", "LORE_GEOLOGY", "STEALTH_UNDERGROUND", "TRADE_ENGINEER", "CHARM", "LEADERSHIP"
        ],
        talents: ["ARGUMENTATIVE", "STRONG_MINDED", "EMBEZZLE", "READ_WRITE"]
    },
    // Mystic
    MYSTIC_1: {
        name: "Fortune Teller",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.FELW],
        competences: [
            "CHARM", "ENTERTAIN_FORTUNE_TELLING", "DODGE", "GOSSIP", "HAGGLE", "INTUITION", "PERCEPTION",
            "SLEIGHT_OF_HAND"
        ],
        talents: ["ATTRACTIVE", "LUCK", "SECOND_SIGHT", "SUAVE"]
    },
    MYSTIC_2: {
        name: "Mystic",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.FELW, Stat.WILL],
        competences: [
            "CHARM", "ENTERTAIN_FORTUNE_TELLING", "DODGE", "GOSSIP", "HAGGLE", "INTUITION", "PERCEPTION",
            "SLEIGHT_OF_HAND", "BRIBERY", "COOL", "ENTERTAIN_PROPHECY", "EVALUATE", "INTIMIDATE", "LORE_ASTROLOGY"
        ],
        talents: ["DETECT_ARTEFACT", "HOLY_VISIONS", "SIXTH_SENSE", "WELL_PREPARED"]
    },
    MYSTIC_3: {
        name: "Sage",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.FELW, Stat.WILL, Stat.AGIL],
        competences: [
            "CHARM", "ENTERTAIN_FORTUNE_TELLING", "DODGE", "GOSSIP", "HAGGLE", "INTUITION", "PERCEPTION",
            "SLEIGHT_OF_HAND", "BRIBERY", "COOL", "ENTERTAIN_PROPHECY", "EVALUATE", "INTIMIDATE", "LORE_ASTROLOGY",
            "ART_WRITING", "CHARM_ANIMAL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY"
        ],
        talents: ["NOSE_FOR_TROUBLE", "PETTY_MAGIC", "READ_WRITE", "WITCH"]
    },
    MYSTIC_4: {
        name: "Seer",
        level: 4,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.FELW, Stat.WILL, Stat.AGIL, Stat.INTL],
        competences: [
            "CHARM", "ENTERTAIN_FORTUNE_TELLING", "DODGE", "GOSSIP", "HAGGLE", "INTUITION", "PERCEPTION",
            "SLEIGHT_OF_HAND", "BRIBERY", "COOL", "ENTERTAIN_PROPHECY", "EVALUATE", "INTIMIDATE", "LORE_ASTROLOGY",
            "ART_WRITING", "CHARM_ANIMAL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY", "LORE_PROPHECY",
            "CHANNELLING"
        ],
        talents: ["ARCANE_MAGIC_AZYR", "MAGICAL_SENSE", "MENACING", "STRONG_MINDED"]
    },
    // Scout
    SCOUT_1: {
        name: "Guide",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION"
        ],
        talents: ["ORIENTATION", "ROVER", "SHARP", "STRIDER_ANY"]
    },
    SCOUT_2: {
        name: "Scout",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.BALS],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "ATHLETICS", "NAVIGATION", "RANGED_BOW", "RIDE_HORSE", "STEALTH_RURAL", "TRACK"
        ],
        talents: ["COMBAT_AWARE", "NIGHT_VISION", "NOSE_FOR_TROUBLE", "SEASONED_TRAVELLER"]
    },
    SCOUT_3: {
        name: "Pathfinder",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.BALS, Stat.INTL],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "ATHLETICS", "NAVIGATION", "RANGED_BOW", "RIDE_HORSE", "STEALTH_RURAL", "TRACK",
            "ANIMAL_CARE", "HAGGLE", "SECRET_SIGNS_HUNTER", "SWIM"
        ],
        talents: ["ACUTE_SENSE_SIGHT", "SIXTH_SENSE", "STRONG_LEGS", "VERY_RESILIENT"]
    },
    SCOUT_4: {
        name: "Explorer",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.BALS, Stat.INTL, Stat.DEXT],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "ATHLETICS", "NAVIGATION", "RANGED_BOW", "RIDE_HORSE", "STEALTH_RURAL", "TRACK",
            "ANIMAL_CARE", "HAGGLE", "SECRET_SIGNS_HUNTER", "SWIM", "LANGUAGE_ANY", "TRADE_CARTOGRAPHER"
        ],
        talents: ["HARDY", "LINGUISTICS", "SAVANT_LOCAL", "TENACIOUS"]
    },
    // Villager
    VILLAGER_1: {
        name: "Peasant",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL],
        competences: [
            "ANIMAL_CARE", "ATHLETICS", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "LORE_LOCAL",
            "OUTDOOR_SURVIVAL"
        ],
        talents: ["ROVER", "STRONG_BACK", "STRONG_MINDED", "STONE_SOUP"]
    },
    VILLAGER_2: {
        name: "Villager",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.WEAS],
        competences: [
            "ANIMAL_CARE", "ATHLETICS", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "LORE_LOCAL",
            "OUTDOOR_SURVIVAL", "DODGE", "DRIVE", "ENTERTAIN_STORYTELLING", "HAGGLE", "MELEE_BASIC", "TRADE_ANY"
        ],
        talents: ["ANIMAL_AFFINITY", "HARDY", "TENACIOUS", "VERY_STRONG"]
    },
    VILLAGER_3: {
        name: "Councillor",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.WEAS, Stat.FELW],
        competences: [
            "ANIMAL_CARE", "ATHLETICS", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "LORE_LOCAL",
            "OUTDOOR_SURVIVAL", "DODGE", "DRIVE", "ENTERTAIN_STORYTELLING", "HAGGLE", "MELEE_BASIC", "TRADE_ANY",
            "BRIBERY", "CHARM", "INTIMIDATE", "LEADERSHIP"
        ],
        talents: ["CRAFTSMAN_ANY", "DEALMAKER", "STOUT_HEARTED", "VERY_RESILIENT"]
    },
    VILLAGER_4: {
        name: "Village Elder",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.WEAS, Stat.FELW, Stat.INTL],
        competences: [
            "ANIMAL_CARE", "ATHLETICS", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "LORE_LOCAL",
            "OUTDOOR_SURVIVAL", "DODGE", "DRIVE", "ENTERTAIN_STORYTELLING", "HAGGLE", "MELEE_BASIC", "TRADE_ANY",
            "BRIBERY", "CHARM", "INTIMIDATE", "LEADERSHIP", "INTUITION", "LORE_HISTORY"
        ],
        talents: ["MASTER_TRADESMAN_ANY", "NIMBLE_FINGERED", "PUBLIC_SPEAKER", "SAVANT_LOCAL"]
    },

    // --- RANGER --- //
    // Bounty Hunter
    BOUNTY_HUNTER_1: {
        name: "Thief-taker",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL],
        competences: [
            "BRIBERY", "CHARM", "GOSSIP", "HAGGLE", "INTUITION", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "PERCEPTION"
        ],
        talents: ["BREAK_AND_ENTER", "SHADOW", "STRIKE_TO_STUN", "SUAVE"]
    },
    BOUNTY_HUNTER_2: {
        name: "Bounty Hunter",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.BALS],
        competences: [
            "BRIBERY", "CHARM", "GOSSIP", "HAGGLE", "INTUITION", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "ATHLETICS", "ENDURANCE", "INTIMIDATE", "RANGED_CROSSBOW", "RANGED_ENTANGLING", "TRACK"
        ],
        talents: ["MARKSMAN", "RELENTLESS", "SEASONED_TRAVELLER", "STRONG_BACK"]
    },
    BOUNTY_HUNTER_3: {
        name: "Master Bounty Hunter",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.BALS, Stat.STRG],
        competences: [
            "BRIBERY", "CHARM", "GOSSIP", "HAGGLE", "INTUITION", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "ATHLETICS", "ENDURANCE", "INTIMIDATE", "RANGED_CROSSBOW", "RANGED_ENTANGLING", "TRACK", "ANIMAL_CARE",
            "CLIMB", "RIDE_HORSE", "SWIM"
        ],
        talents: ["ACCURATE_SHOT", "CAREFUL_STRIKE", "DUAL_WIELDER", "SPRINTER"]
    },
    BOUNTY_HUNTER_4: {
        name: "Bounty Hunter General",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.BALS, Stat.STRG, Stat.INTL],
        competences: [
            "BRIBERY", "CHARM", "GOSSIP", "HAGGLE", "INTUITION", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "ATHLETICS", "ENDURANCE", "INTIMIDATE", "RANGED_CROSSBOW", "RANGED_ENTANGLING", "TRACK", "ANIMAL_CARE",
            "CLIMB", "RIDE_HORSE", "SWIM", "DRIVE", "LORE_LAW"
        ],
        talents: ["DEADEYE_SHOT", "FEARLESS_BOUNTIES", "HARDY", "SURE_SHOT"]
    },
    // Coachman
    COACHMAN_1: {
        name: "Postilion",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.BALS, Stat.TOUG, Stat.WILL],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "CLIMB", "DRIVE", "ENDURANCE", "PERCEPTION", "RANGED_ENTANGLING",
            "RIDE_HORSE"
        ],
        talents: ["ANIMAL_AFFINITY", "SEASONED_TRAVELLER", "TRICK_RIDING", "TENACIOUS"]
    },
    COACHMAN_2: {
        name: "Coachman",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.BALS, Stat.TOUG, Stat.WILL, Stat.AGIL],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "CLIMB", "DRIVE", "ENDURANCE", "PERCEPTION", "RANGED_ENTANGLING",
            "RIDE_HORSE", "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "NAVIGATION", "RANGED_BLACKPOWDER"
        ],
        talents: ["COOL_HEADED", "CRACK_THE_WHIP", "GUNNER", "STRONG_MINDED"]
    },
    COACHMAN_3: {
        name: "Coach Master",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.BALS, Stat.TOUG, Stat.WILL, Stat.AGIL, Stat.WEAS],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "CLIMB", "DRIVE", "ENDURANCE", "PERCEPTION", "RANGED_ENTANGLING",
            "RIDE_HORSE", "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "NAVIGATION",
            "RANGED_BLACKPOWDER", "ANIMAL_TRAINING_HORSE", "INTIMIDATE", "LANGUAGE_ANY", "LORE_ROUTES"
        ],
        talents: ["ACCURATE_SHOT", "DEALMAKER", "FEARLESS_OUTLAWS", "NOSE_FOR_TROUBLE"]
    },
    COACHMAN_4: {
        name: "Route Master",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.BALS, Stat.TOUG, Stat.WILL, Stat.AGIL, Stat.WEAS, Stat.INIT],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "CLIMB", "DRIVE", "ENDURANCE", "PERCEPTION", "RANGED_ENTANGLING",
            "RIDE_HORSE", "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "NAVIGATION",
            "RANGED_BLACKPOWDER", "ANIMAL_TRAINING_HORSE", "INTIMIDATE", "LANGUAGE_ANY", "LORE_ROUTES", "CHARM",
            "LEADERSHIP"
        ],
        talents: ["FEARLESS_BEASTMEN", "MARKSMAN", "ORIENTATION", "RAPID_RELOAD"]
    },
    // Entertainer
    ENTERTAINER_1: {
        name: "Busker",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW],
        competences: [
            "ATHLETICS", "CHARM", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERFORM_ANY", "PLAY_ANY", "SLEIGHT_OF_HAND"
        ],
        talents: ["ATTRACTIVE", "MIMIC", "PUBLIC_SPEAKER", "SUAVE"]
    },
    ENTERTAINER_2: {
        name: "Entertainer",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.WEAS],
        competences: [
            "ATHLETICS", "CHARM", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERFORM_ANY", "PLAY_ANY", "SLEIGHT_OF_HAND",
            "RIDE_ANY", "MELEE_BASIC", "RANGED_THROWING"
        ],
        talents: ["CONTORTIONIST", "JUMP_UP", "SHARPSHOOTER", "TRICK_RIDING"]
    },
    ENTERTAINER_3: {
        name: "Troubadour",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.WEAS, Stat.BALS],
        competences: [
            "ATHLETICS", "CHARM", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERFORM_ANY", "PLAY_ANY", "SLEIGHT_OF_HAND",
            "RIDE_ANY", "MELEE_BASIC", "RANGED_THROWING", "ANIMAL_CARE", "ANIMAL_TRAINING_ANY", "ART_WRITING",
            "LANGUAGE_ANY"
        ],
        talents: ["BLATHER", "MASTER_OF_DISGUISE", "PERFECT_PITCH", "READ_WRITE"]
    },
    ENTERTAINER_4: {
        name: "Troupe Leader",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.WEAS, Stat.BALS, Stat.TOUG],
        competences: [
            "ATHLETICS", "CHARM", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERFORM_ANY", "PLAY_ANY", "SLEIGHT_OF_HAND",
            "RIDE_ANY", "MELEE_BASIC", "RANGED_THROWING", "ANIMAL_CARE", "ANIMAL_TRAINING_ANY", "ART_WRITING",
            "LANGUAGE_ANY", "DRIVE", "LEADERSHIP"
        ],
        talents: ["DEALMAKER", "ETIQUETTE_ANY", "SEASONED_TRAVELLER", "SHARP"]
    },
    // Flagellant
    FLAGELLANT_1: {
        name: "Zealot",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 0 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG],
        competences: [
            "DODGE", "ENDURANCE", "HEAL", "INTIMIDATE", "INTUITION", "LORE_SIGMAR", "MELEE_FLAIL",
            "OUTDOOR_SURVIVAL"
        ],
        talents: ["BERSERK_CHARGE", "FRENZY", "READ_WRITE", "STONE_SOUP"]
    },
    FLAGELLANT_2: {
        name: "Flagellant",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 0 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.WILL],
        competences: [
            "DODGE", "ENDURANCE", "HEAL", "INTIMIDATE", "INTUITION", "LORE_SIGMAR", "MELEE_FLAIL",
            "OUTDOOR_SURVIVAL", "ART_ICONS", "ATHLETICS", "COOL", "LANGUAGE_CLASSICAL", "LORE_EMPIRE",
            "RANGED_SLING"
        ],
        talents: ["HARDY", "HATRED_HERETICS", "FLAGELLANT", "IMPLACABLE"]
    },
    FLAGELLANT_3: {
        name: "Penitent",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 0 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.WILL, Stat.INIT],
        competences: [
            "DODGE", "ENDURANCE", "HEAL", "INTIMIDATE", "INTUITION", "LORE_SIGMAR", "MELEE_FLAIL",
            "OUTDOOR_SURVIVAL", "ART_ICONS", "ATHLETICS", "COOL", "LANGUAGE_CLASSICAL", "LORE_EMPIRE",
            "RANGED_SLING", "CHARM", "LANGUAGE_ANY", "LORE_THEOLOGY", "PERCEPTION"
        ],
        talents: ["FIELD_DRESSING", "FURIOUS_ASSAULT", "MENACING", "SEASONED_TRAVELLER"]
    },
    FLAGELLANT_4: {
        name: "Prophet of Doom",
        level: 4,
        status: { tier: CareerStatusTier.BRASS, level: 0 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.WILL, Stat.INIT, Stat.FELW],
        competences: [
            "DODGE", "ENDURANCE", "HEAL", "INTIMIDATE", "INTUITION", "LORE_SIGMAR", "MELEE_FLAIL",
            "OUTDOOR_SURVIVAL", "ART_ICONS", "ATHLETICS", "COOL", "LANGUAGE_CLASSICAL", "LORE_EMPIRE",
            "RANGED_SLING", "CHARM", "LANGUAGE_ANY", "LORE_THEOLOGY", "PERCEPTION", "ENTERTAIN_SPEECHES",
            "LEADERSHIP"
        ],
        talents: ["BATTLE_RAGE", "FEARLESS_HERETICS", "FRIGHTENING", "IMPASSIONED_ZEAL"]
    },
    // Messenger
    MESSENGER_1: {
        name: "Runner",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL],
        competences: [
            "ATHLETICS", "CLIMB", "DODGE", "ENDURANCE", "GOSSIP", "NAVIGATION", "PERCEPTION", "MELEE_BRAWLING"
        ],
        talents: ["FLEE", "FLEET_FOOTED", "SPRINTER", "STEP_ASIDE"]
    },
    MESSENGER_2: {
        name: "Messenger",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.WEAS],
        competences: [
            "ATHLETICS", "CLIMB", "DODGE", "ENDURANCE", "GOSSIP", "NAVIGATION", "PERCEPTION", "MELEE_BRAWLING",
            "ANIMAL_CARE", "CHARM", "COOL", "LORE_LOCAL", "MELEE_BASIC", "RIDE_HORSE"
        ],
        talents: ["CRACK_THE_WHIP", "CRIMINAL", "ORIENTATION", "SEASONED_TRAVELLER"]
    },
    MESSENGER_3: {
        name: "Courier",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.WEAS, Stat.WILL],
        competences: [
            "ATHLETICS", "CLIMB", "DODGE", "ENDURANCE", "GOSSIP", "NAVIGATION", "PERCEPTION", "MELEE_BRAWLING",
            "ANIMAL_CARE", "CHARM", "COOL", "LORE_LOCAL", "MELEE_BASIC", "RIDE_HORSE", "CHARM_ANIMAL", "BRIBERY",
            "CONSUME_ALCOHOL", "OUTDOOR_SURVIVAL"
        ],
        talents: ["NOSE_FOR_TROUBLE", "RELENTLESS", "TENACIOUS", "TRICK_RIDING"]
    },
    MESSENGER_4: {
        name: "Courier-Captain",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.WEAS, Stat.WILL, Stat.FELW],
        competences: [
            "ATHLETICS", "CLIMB", "DODGE", "ENDURANCE", "GOSSIP", "NAVIGATION", "PERCEPTION", "MELEE_BRAWLING",
            "ANIMAL_CARE", "CHARM", "COOL", "LORE_LOCAL", "MELEE_BASIC", "RIDE_HORSE", "CHARM_ANIMAL", "BRIBERY",
            "CONSUME_ALCOHOL", "OUTDOOR_SURVIVAL", "INTIMIDATE", "LEADERSHIP"
        ],
        talents: ["DEALMAKER", "HATRED_OUTLAWS", "KINGPIN", "VERY_RESILIENT"]
    },
    // Pedlar
    PEDLAR_1: {
        name: "Vagabond",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.TOUG, Stat.DEXT, Stat.WILL],
        competences: [
            "CHARM", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HAGGLE", "INTUITION", "OUTDOOR_SURVIVAL",
            "STEALTH_RURAL", "STEALTH_URBAN"
        ],
        talents: ["FISHERMAN", "FLEE", "ROVER", "TINKER"]
    },
    PEDLAR_2: {
        name: "Pedlar",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.TOUG, Stat.DEXT, Stat.WILL, Stat.FELW],
        competences: [
            "CHARM", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HAGGLE", "INTUITION", "OUTDOOR_SURVIVAL",
            "STEALTH_RURAL", "STEALTH_URBAN", "ANIMAL_CARE", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "EVALUATE",
            "RIDE_HORSE", "TRADE_TINKER"
        ],
        talents: ["DEALMAKER", "ORIENTATION", "SEASONED_TRAVELLER", "STRONG_BACK"]
    },
    PEDLAR_3: {
        name: "Master Pedlar",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.TOUG, Stat.DEXT, Stat.WILL, Stat.FELW, Stat.INIT],
        competences: [
            "CHARM", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HAGGLE", "INTUITION", "OUTDOOR_SURVIVAL",
            "STEALTH_RURAL", "STEALTH_URBAN", "ANIMAL_CARE", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "EVALUATE",
            "RIDE_HORSE", "TRADE_TINKER", "DRIVE", "INTIMIDATE", "LANGUAGE_ANY", "PERCEPTION"
        ],
        talents: ["NUMISMATICS", "STURDY", "WELL_PREPARED", "VERY_RESILIENT"]
    },
    PEDLAR_4: {
        name: "Wandering Trader",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.TOUG, Stat.DEXT, Stat.WILL, Stat.FELW, Stat.INIT, Stat.INTL],
        competences: [
            "CHARM", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HAGGLE", "INTUITION", "OUTDOOR_SURVIVAL",
            "STEALTH_RURAL", "STEALTH_URBAN", "ANIMAL_CARE", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "EVALUATE",
            "RIDE_HORSE", "TRADE_TINKER", "DRIVE", "INTIMIDATE", "LANGUAGE_ANY", "PERCEPTION", "LORE_LOCAL",
            "LORE_GEOGRAPHY"
        ],
        talents: ["CAT_TONGUED", "STRONG_MINDED", "SUAVE", "TENACIOUS"]
    },
    // Road Warden
    ROAD_WARDEN_1: {
        name: "Toll Keeper",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.BALS, Stat.TOUG, Stat.INIT],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "PERCEPTION",
            "RANGED_CROSSBOW"
        ],
        talents: ["COOL_HEADED", "EMBEZZLE", "MARKSMAN", "NUMISMATICS"]
    },
    ROAD_WARDEN_2: {
        name: "Road Warden",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.BALS, Stat.TOUG, Stat.INIT, Stat.WEAS],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "PERCEPTION",
            "RANGED_CROSSBOW", "ANIMAL_CARE", "ENDURANCE", "INTIMIDATE", "INTUITION", "OUTDOOR_SURVIVAL",
            "RIDE_HORSE"
        ],
        talents: ["CRACK_THE_WHIP", "CRIMINAL", "ROUGHRIDER", "SEASONED_TRAVELLER"]
    },
    ROAD_WARDEN_3: {
        name: "Road Sergeant",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.BALS, Stat.TOUG, Stat.INIT, Stat.WEAS, Stat.FELW],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "PERCEPTION",
            "RANGED_CROSSBOW", "ANIMAL_CARE", "ENDURANCE", "INTIMIDATE", "INTUITION", "OUTDOOR_SURVIVAL",
            "RIDE_HORSE", "ATHLETICS", "CHARM", "LEADERSHIP", "RANGED_BLACKPOWDER"
        ],
        talents: ["ETIQUETTE_SOLDIERS", "FEARLESS_OUTLAWS", "HATRED_ANY", "NOSE_FOR_TROUBLE"]
    },
    ROAD_WARDEN_4: {
        name: "Road Captain",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.BALS, Stat.TOUG, Stat.INIT, Stat.WEAS, Stat.FELW, Stat.INTL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "PERCEPTION",
            "RANGED_CROSSBOW", "ANIMAL_CARE", "ENDURANCE", "INTIMIDATE", "INTUITION", "OUTDOOR_SURVIVAL",
            "RIDE_HORSE", "ATHLETICS", "CHARM", "LEADERSHIP", "RANGED_BLACKPOWDER", "LORE_EMPIRE", "NAVIGATION"
        ],
        talents: ["COMBAT_AWARE", "COMMANDING_PRESENCE", "KINGPIN", "PUBLIC_SPEAKER"]
    },
    // Witch Hunter
    WITCH_HUNTER_1: {
        name: "Interrogator",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "HEAL", "INTIMIDATE", "INTUITION", "LORE_TORTURE", "MELEE_BRAWLING",
            "PERCEPTION"
        ],
        talents: ["COOL_HEADED", "MENACING", "READ_WRITE", "RESOLUTE"]
    },
    WITCH_HUNTER_2: {
        name: "Witch Hunter",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.BALS],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "HEAL", "INTIMIDATE", "INTUITION", "LORE_TORTURE", "MELEE_BRAWLING",
            "PERCEPTION", "COOL", "GOSSIP", "MELEE_BASIC", "LORE_WITCHES", "RANGED_ANY", "RIDE_HORSE"
        ],
        talents: ["DUAL_WIELDER", "MARKSMAN", "SEASONED_TRAVELLER", "SHADOW"]
    },
    WITCH_HUNTER_3: {
        name: "Inquisitor",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.BALS, Stat.FELW],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "HEAL", "INTIMIDATE", "INTUITION", "LORE_TORTURE", "MELEE_BRAWLING",
            "PERCEPTION", "COOL", "GOSSIP", "MELEE_BASIC", "LORE_WITCHES", "RANGED_ANY", "RIDE_HORSE", "ENDURANCE",
            "LEADERSHIP", "LORE_LAW", "LORE_LOCAL"
        ],
        talents: ["FEARLESS_WITCHES", "NOSE_FOR_TROUBLE", "RELENTLESS", "STRONG_MINDED"]
    },
    WITCH_HUNTER_4: {
        name: "Witchfinder General",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.BALS, Stat.FELW, Stat.INTL],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "HEAL", "INTIMIDATE", "INTUITION", "LORE_TORTURE", "MELEE_BRAWLING",
            "PERCEPTION", "COOL", "GOSSIP", "MELEE_BASIC", "LORE_WITCHES", "RANGED_ANY", "RIDE_HORSE", "ENDURANCE",
            "LEADERSHIP", "LORE_LAW", "LORE_LOCAL", "LORE_CHAOS", "LORE_POLITICS"
        ],
        talents: ["FRIGHTENING", "IRON_WILL", "MAGICAL_SENSE", "PURE_SOUL"]
    },

    // --- Riverfolk --- //
    // Boatman
    BOATMAN_1: {
        name: "Boat-hand",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL],
        competences: ["CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "ROW", "SAIL", "SWIM"],
        talents: ["DIRTY_FIGHTING", "FISHERMAN", "STRONG_BACK", "STRONG_SWIMMER"]
    },
    BOATMAN_2: {
        name: "Boatman",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.INIT],
        competences: [
            "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "ROW", "SAIL", "SWIM", "ATHLETICS",
            "ENTERTAIN_STORYTELLING", "HAGGLE", "INTUITION", "LORE_RIVERWAYS", "PERCEPTION"
        ],
        talents: ["ETIQUETTE_GUILDERS", "SEASONED_TRAVELLER", "VERY_STRONG", "WATERMAN"]
    },
    BOATMAN_3: {
        name: "Bargeswain",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.INIT, Stat.DEXT],
        competences: [
            "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "ROW", "SAIL", "SWIM", "ATHLETICS",
            "ENTERTAIN_STORYTELLING", "HAGGLE", "INTUITION", "LORE_RIVERWAYS", "PERCEPTION", "CLIMB",
            "ENTERTAIN_SINGING", "HEAL", "TRADE_BOATBUILDING"
        ],
        talents: ["DEALMAKER", "EMBEZZLE", "NOSE_FOR_TROUBLE", "STRIKE_MIGHTY_BLOW"]
    },
    BOATMAN_4: {
        name: "Barge Master",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.STRG, Stat.TOUG, Stat.AGIL, Stat.INIT, Stat.DEXT, Stat.INTL],
        competences: [
            "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "ROW", "SAIL", "SWIM", "ATHLETICS",
            "ENTERTAIN_STORYTELLING", "HAGGLE", "INTUITION", "LORE_RIVERWAYS", "PERCEPTION", "CLIMB",
            "ENTERTAIN_SINGING", "HEAL", "TRADE_BOATBUILDING", "LEADERSHIP", "NAVIGATION"
        ],
        talents: ["MENACING", "ORIENTATION", "PILOT", "PUBLIC_SPEAKER"]
    },
    // Huffer
    HUFFER_1: {
        name: "Riverguide",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.INIT],
        competences: [
            "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "LORE_RIVERWAYS", "PERCEPTION", "ROW", "SWIM"
        ],
        talents: ["FISHERMAN", "NIGHT_VISION", "ORIENTATION", "WATERMAN"]
    },
    HUFFER_2: {
        name: "Huffer",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.INIT, Stat.WILL],
        competences: [
            "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "LORE_RIVERWAYS", "PERCEPTION", "ROW", "SWIM",
            "CHARM", "COOL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY", "MELEE_BASIC", "NAVIGATION"
        ],
        talents: ["DEALMAKER", "ETIQUETTE_GUILDERS", "NOSE_FOR_TROUBLE", "RIVER_GUIDE"]
    },
    HUFFER_3: {
        name: "Pilot",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.INIT, Stat.WILL, Stat.INTL],
        competences: [
            "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "LORE_RIVERWAYS", "PERCEPTION", "ROW", "SWIM",
            "CHARM", "COOL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY", "MELEE_BASIC", "NAVIGATION", "HAGGLE",
            "INTIMIDATE", "LORE_WRECKS"
        ],
        talents: ["ACUTE_SENSE_SIGHT", "PILOT", "SEA_LEGS", "VERY_STRONG"]
    },
    HUFFER_4: {
        name: "Master Pilot",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.INIT, Stat.WILL, Stat.INTL, Stat.FELW],
        competences: [
            "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "LORE_RIVERWAYS", "PERCEPTION", "ROW", "SWIM",
            "CHARM", "COOL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY", "MELEE_BASIC", "NAVIGATION", "HAGGLE",
            "INTIMIDATE", "LORE_WRECKS", "LEADERSHIP", "SAIL"
        ],
        talents: ["SIXTH_SENSE", "SHARP", "STRONG_SWIMMER", "TENACIOUS"]
    },
    // Riverwarden
    RIVERWARDEN_1: {
        name: "River Recruit",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.BALS, Stat.STRG, Stat.FELW],
        competences: ["ATHLETICS", "DODGE", "ENDURANCE", "MELEE_BASIC", "PERCEPTION", "ROW", "SAIL", "SWIM"],
        talents: ["STRONG_SWIMMER", "STRONG_BACK", "VERY_STRONG", "WATERMAN"]
    },
    RIVERWARDEN_2: {
        name: "Riverwarden",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.BALS, Stat.STRG, Stat.FELW, Stat.WEAS],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "MELEE_BASIC", "PERCEPTION", "ROW", "SAIL", "SWIM", "BRIBERY",
            "CHARM", "INTIMIDATE", "GOSSIP", "LORE_RIVERWAYS", "RANGED_BLACKPOWDER"
        ],
        talents: ["CRIMINAL", "GUNNER", "FISHERMAN", "SEASONED_TRAVELLER"]
    },
    RIVERWARDEN_3: {
        name: "Shipsword",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.BALS, Stat.STRG, Stat.FELW, Stat.WEAS, Stat.INIT],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "MELEE_BASIC", "PERCEPTION", "ROW", "SAIL", "SWIM", "BRIBERY",
            "CHARM", "INTIMIDATE", "GOSSIP", "LORE_RIVERWAYS", "RANGED_BLACKPOWDER", "CLIMB", "COOL", "INTUITION",
            "LEADERSHIP"
        ],
        talents: ["FEARLESS_WRECKERS", "HATRED_ANY", "PILOT", "SEA_LEGS"]
    },
    RIVERWARDEN_4: {
        name: "Shipsword Master",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.BALS, Stat.STRG, Stat.FELW, Stat.WEAS, Stat.INIT, Stat.INTL],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "MELEE_BASIC", "PERCEPTION", "ROW", "SAIL", "SWIM", "BRIBERY",
            "CHARM", "INTIMIDATE", "GOSSIP", "LORE_RIVERWAYS", "RANGED_BLACKPOWDER", "CLIMB", "COOL", "INTUITION",
            "LEADERSHIP", "LORE_LAW", "NAVIGATION"
        ],
        talents: ["COMMANDING_PRESENCE", "KINGPIN", "MENACING", "ORIENTATION"]
    },
    // Riverwoman
    RIVERWOMAN_1: {
        name: "Greenfish",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.DEXT],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "OUTDOOR_SURVIVAL", "ROW", "SWIM"
        ],
        talents: ["FISHERMAN", "GREGARIOUS", "STRIDER_MARSHES", "STRONG_SWIMMER"]
    },
    RIVERWOMAN_2: {
        name: "Riverwoman",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.DEXT, Stat.WEAS],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "OUTDOOR_SURVIVAL", "ROW", "SWIM",
            "GAMBLE", "LORE_LOCAL", "LORE_RIVERWAYS", "RANGED_ENTANGLING", "RANGED_THROWING", "SET_TRAP"
        ],
        talents: ["CRAFTSMAN_BOATBUILDER", "ROVER", "STRONG_BACK", "WATERMAN"]
    },
    RIVERWOMAN_3: {
        name: "Riverwise",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.DEXT, Stat.WEAS, Stat.INIT],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "OUTDOOR_SURVIVAL", "ROW", "SWIM",
            "GAMBLE", "LORE_LOCAL", "LORE_RIVERWAYS", "RANGED_ENTANGLING", "RANGED_THROWING", "SET_TRAP", "CHARM",
            "INTUITION", "MELEE_POLE_ARM", "PERCEPTION"
        ],
        talents: ["SAVANT_RIVERWAYS", "STOUT_HEARTED", "TENACIOUS", "VERY_STRONG"]
    },
    RIVERWOMAN_4: {
        name: "River Elder",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.TOUG, Stat.AGIL, Stat.DEXT, Stat.WEAS, Stat.INIT, Stat.FELW],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "OUTDOOR_SURVIVAL", "ROW", "SWIM",
            "GAMBLE", "LORE_LOCAL", "LORE_RIVERWAYS", "RANGED_ENTANGLING", "RANGED_THROWING", "SET_TRAP", "CHARM",
            "INTUITION", "MELEE_POLE_ARM", "PERCEPTION", "ENTERTAIN_STORYTELLING", "LORE_FOLKLORE"
        ],
        talents: ["MASTER_TRADESMAN_BOATBUILDER", "PUBLIC_SPEAKER", "SHARP", "STRONG_MINDED"]
    },
    // Seaman
    SEAMAN_1: {
        name: "Landsman",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW],
        competences: ["CLIMB", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "ROW", "MELEE_BRAWLING", "SAIL", "SWIM"],
        talents: ["FISHERMAN", "STRIDER_COASTAL", "STRONG_BACK", "STRONG_SWIMMER"]
    },
    SEAMAN_2: {
        name: "Seaman",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.WEAS],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "ROW", "MELEE_BRAWLING", "SAIL", "SWIM", "ATHLETICS",
            "DODGE", "ENDURANCE", "ENTERTAIN_SINGING", "LANGUAGE_ANY", "MELEE_BASIC"
        ],
        talents: ["CATFALL", "SEA_LEGS", "SEASONED_TRAVELLER", "STRONG_LEGS"]
    },
    SEAMAN_3: {
        name: "Boatswain",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.WEAS, Stat.INIT],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "ROW", "MELEE_BRAWLING", "SAIL", "SWIM", "ATHLETICS",
            "DODGE", "ENDURANCE", "ENTERTAIN_SINGING", "LANGUAGE_ANY", "MELEE_BASIC", "COOL", "LEADERSHIP",
            "PERCEPTION", "TRADE_CARPENTER"
        ],
        talents: ["OLD_SALT", "STRIKE_MIGHTY_BLOW", "TENACIOUS", "VERY_STRONG"]
    },
    SEAMAN_4: {
        name: "Ship's Master",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.WEAS, Stat.INIT, Stat.INTL],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "ROW", "MELEE_BRAWLING", "SAIL", "SWIM", "ATHLETICS",
            "DODGE", "ENDURANCE", "ENTERTAIN_SINGING", "LANGUAGE_ANY", "MELEE_BASIC", "COOL", "LEADERSHIP",
            "PERCEPTION", "TRADE_CARPENTER", "CHARM", "NAVIGATION"
        ],
        talents: ["ORIENTATION", "PILOT", "PUBLIC_SPEAKER", "SAVVY"]
    },
    // Smuggler
    SMUGGLER_1: {
        name: "River Runner",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.WILL],
        competences: [
            "ATHLETICS", "BRIBERY", "COOL", "CONSUME_ALCOHOL", "ROW", "SAIL", "STEALTH_RURAL", "STEALTH_URBAN",
            "SWIM"
        ],
        talents: ["CRIMINAL", "FISHERMAN", "STRIDER_MARSHES", "STRONG_BACK"]
    },
    SMUGGLER_2: {
        name: "Smuggler",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.WILL, Stat.INIT],
        competences: [
            "ATHLETICS", "BRIBERY", "COOL", "CONSUME_ALCOHOL", "ROW", "SAIL", "STEALTH_RURAL", "STEALTH_URBAN",
            "SWIM", "HAGGLE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "SECRET_SIGNS_SMUGGLER"
        ],
        talents: ["DEALMAKER", "ETIQUETTE_CRIMINALS", "WATERMAN", "VERY_STRONG"]
    },
    SMUGGLER_3: {
        name: "Master Smuggler",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.WILL, Stat.INIT, Stat.INTL],
        competences: [
            "ATHLETICS", "BRIBERY", "COOL", "CONSUME_ALCOHOL", "ROW", "SAIL", "STEALTH_RURAL", "STEALTH_URBAN",
            "SWIM", "HAGGLE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "SECRET_SIGNS_SMUGGLER",
            "EVALUATE", "INTIMIDATE", "INTUITION", "LORE_RIVERWAYS"
        ],
        talents: ["BRIBER", "FEARLESS_RIVERWARDENS", "PILOT", "STRONG_SWIMMER"]
    },
    SMUGGLER_4: {
        name: "Smuggler King",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.WILL, Stat.INIT, Stat.INTL, Stat.FELW],
        competences: [
            "ATHLETICS", "BRIBERY", "COOL", "CONSUME_ALCOHOL", "ROW", "SAIL", "STEALTH_RURAL", "STEALTH_URBAN",
            "SWIM", "HAGGLE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "SECRET_SIGNS_SMUGGLER",
            "EVALUATE", "INTIMIDATE", "INTUITION", "LORE_RIVERWAYS", "LANGUAGE_ANY", "LEADERSHIP"
        ],
        talents: ["KINGPIN", "SAVVY", "STRIDER_COASTAL", "SEA_LEGS"]
    },
    // Stevedore
    STEVEDORE_1: {
        name: "Dockhand",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.INIT],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BASIC", "SWIM"
        ],
        talents: ["DIRTY_FIGHTING", "STRONG_BACK", "STURDY", "VERY_STRONG"]
    },
    STEVEDORE_2: {
        name: "Stevedore",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.INIT, Stat.STRG],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BASIC", "SWIM",
            "BRIBERY", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTIMIDATE", "PERCEPTION", "STEALTH_URBAN"
        ],
        talents: ["CRIMINAL", "ETIQUETTE_GUILDERS", "STRONG_LEGS", "TENACIOUS"]
    },
    STEVEDORE_3: {
        name: "Foreman",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.INIT, Stat.STRG, Stat.WILL],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BASIC", "SWIM",
            "BRIBERY", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTIMIDATE", "PERCEPTION", "STEALTH_URBAN", "COOL",
            "EVALUATE", "INTUITION", "LEADERSHIP"
        ],
        talents: ["DEALMAKER", "EMBEZZLE", "ETIQUETTE_CRIMINALS", "PUBLIC_SPEAKER"]
    },
    STEVEDORE_4: {
        name: "Dock Master",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.INIT, Stat.STRG, Stat.WILL, Stat.INTL],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BASIC", "SWIM",
            "BRIBERY", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTIMIDATE", "PERCEPTION", "STEALTH_URBAN", "COOL",
            "EVALUATE", "INTUITION", "LEADERSHIP", "CHARM", "LORE_TAXES"
        ],
        talents: ["KINGPIN", "MENACING", "NUMISMATICS", "READ_WRITE"]
    },
    // Wrecker
    WRECKER_1: {
        name: "Cargo Scavenger",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.INIT],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "ROW", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "SWIM"
        ],
        talents: ["BREAK_AND_ENTER", "CRIMINAL", "FISHERMAN", "STRONG_BACK"]
    },
    WRECKER_2: {
        name: "Wrecker",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.INIT, Stat.WILL],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "ROW", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "SWIM",
            "BRIBERY", "COOL", "INTUITION", "NAVIGATION", "PERCEPTION", "SET_TRAP"
        ],
        talents: ["FLEE", "ROVER", "STRONG_SWIMMER", "TRAPPER"]
    },
    WRECKER_3: {
        name: "River Pirate",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.INIT, Stat.WILL, Stat.BALS],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "ROW", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "SWIM",
            "BRIBERY", "COOL", "INTUITION", "NAVIGATION", "PERCEPTION", "SET_TRAP", "GOSSIP", "INTIMIDATE",
            "RANGED_CROSSBOW", "STEALTH_RURAL"
        ],
        talents: ["DIRTY_FIGHTING", "ETIQUETTE_CRIMINALS", "MENACING", "WATERMAN"]
    },
    WRECKER_4: {
        name: "Wrecker Captain",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.INIT, Stat.WILL, Stat.BALS, Stat.FELW],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "ROW", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "SWIM",
            "BRIBERY", "COOL", "INTUITION", "NAVIGATION", "PERCEPTION", "SET_TRAP", "GOSSIP", "INTIMIDATE",
            "RANGED_CROSSBOW", "STEALTH_RURAL", "LEADERSHIP", "LORE_RIVERWAYS"
        ],
        talents: ["FURIOUS_ASSAULT", "IN_FIGHTER", "PILOT", "WARRIOR_BORN"]
    },

    // --- ROGUE --- //
    // Bawd
    BAWD_1: {
        name: "Hustler",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW],
        competences: [
            "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "ENTERTAIN_ANY", "GAMBLE", "GOSSIP", "HAGGLE", "INTIMIDATE"
        ],
        talents: ["ATTRACTIVE", "ALLEY_CAT", "BLATHER", "GREGARIOUS"]
    },
    BAWD_2: {
        name: "Bawd",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.INIT],
        competences: [
            "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "ENTERTAIN_ANY", "GAMBLE", "GOSSIP", "HAGGLE", "INTIMIDATE",
            "DODGE", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION"
        ],
        talents: ["AMBIDEXTROUS", "CAROUSER", "CRIMINAL", "RESISTANCE_DISEASE"]
    },
    BAWD_3: {
        name: "Procurer",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.INIT, Stat.WILL],
        competences: [
            "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "ENTERTAIN_ANY", "GAMBLE", "GOSSIP", "HAGGLE", "INTIMIDATE",
            "DODGE", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "COOL", "EVALUATE",
            "LANGUAGE_ANY", "LORE_LAW"
        ],
        talents: ["DEALMAKER", "EMBEZZLE", "ETIQUETTE_ANY", "SUAVE"]
    },
    BAWD_4: {
        name: "Ringleader",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.AGIL, Stat.DEXT, Stat.FELW, Stat.INIT, Stat.WILL, Stat.INTL],
        competences: [
            "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "ENTERTAIN_ANY", "GAMBLE", "GOSSIP", "HAGGLE", "INTIMIDATE",
            "DODGE", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "COOL", "EVALUATE",
            "LANGUAGE_ANY", "LORE_LAW", "LEADERSHIP", "LORE_HERALDRY"
        ],
        talents: ["BRIBER", "KINGPIN", "NUMISMATICS", "SAVVY"]
    },
    // Charlatan
    CHARLATAN_1: {
        name: "Swindler",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.FELW],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "CHARM", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE",
            "SLEIGHT_OF_HAND"
        ],
        talents: ["CARDSHARP", "DICEMAN", "ETIQUETTE_ANY", "LUCK"]
    },
    CHARLATAN_2: {
        name: "Charlatan",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.FELW, Stat.WILL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "CHARM", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE",
            "SLEIGHT_OF_HAND", "COOL", "DODGE", "ENTERTAIN_ACTING", "EVALUATE", "INTUITION", "PERCEPTION"
        ],
        talents: ["BLATHER", "CRIMINAL", "FAST_HANDS", "SECRET_IDENTITY"]
    },
    CHARLATAN_3: {
        name: "Con Artist",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.FELW, Stat.WILL, Stat.AGIL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "CHARM", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE",
            "SLEIGHT_OF_HAND", "COOL", "DODGE", "ENTERTAIN_ACTING", "EVALUATE", "INTUITION", "PERCEPTION",
            "LANGUAGE_THIEF", "LORE_HERALDRY", "PICK_LOCK", "SECRET_SIGNS_THIEF"
        ],
        talents: ["ATTRACTIVE", "CAT_TONGUED", "DEALMAKER", "READ_WRITE"]
    },
    CHARLATAN_4: {
        name: "Scoundrel",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.INIT, Stat.DEXT, Stat.FELW, Stat.WILL, Stat.AGIL, Stat.INTL],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "CHARM", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE",
            "SLEIGHT_OF_HAND", "COOL", "DODGE", "ENTERTAIN_ACTING", "EVALUATE", "INTUITION", "PERCEPTION",
            "LANGUAGE_THIEF", "LORE_HERALDRY", "PICK_LOCK", "SECRET_SIGNS_THIEF", "LORE_GENEALOGY", "RESEARCH"
        ],
        talents: ["GREGARIOUS", "MASTER_OF_DISGUISE", "NOSE_FOR_TROUBLE", "SUAVE"]
    },
    // Fence
    FENCE_1: {
        name: "Broker",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.FELW],
        competences: ["CHARM", "CONSUME_ALCOHOL", "DODGE", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC"],
        talents: ["ALLEY_CAT", "CARDSHARP", "DEALMAKER", "GREGARIOUS"]
    },
    FENCE_2: {
        name: "Fence",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.FELW, Stat.DEXT],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "DODGE", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "COOL",
            "INTIMIDATE", "INTUITION", "PERCEPTION", "SECRET_SIGNS_THIEF", "TRADE_ENGRAVER"
        ],
        talents: ["CRIMINAL", "ETIQUETTE_CRIMINALS", "NUMISMATICS", "SAVVY"]
    },
    FENCE_3: {
        name: "Master Fence",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.FELW, Stat.DEXT, Stat.INTL],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "DODGE", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "COOL",
            "INTIMIDATE", "INTUITION", "PERCEPTION", "SECRET_SIGNS_THIEF", "TRADE_ENGRAVER", "BRIBERY",
            "ENTERTAIN_STORYTELLING", "LORE_ART", "LORE_LOCAL"
        ],
        talents: ["KINGPIN", "STRIKE_TO_STUN", "SUAVE", "SUPER_NUMERATE"]
    },
    FENCE_4: {
        name: "Black Marketeer",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.FELW, Stat.DEXT, Stat.INTL, Stat.WILL],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "DODGE", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "COOL",
            "INTIMIDATE", "INTUITION", "PERCEPTION", "SECRET_SIGNS_THIEF", "TRADE_ENGRAVER", "BRIBERY",
            "ENTERTAIN_STORYTELLING", "LORE_ART", "LORE_LOCAL", "LORE_HERALDRY", "RESEARCH"
        ],
        talents: ["DIRTY_FIGHTING", "IRON_WILL", "MENACING", "BRIBER"]
    },
    // Grave Robber
    GRAVE_ROBBER_1: {
        name: "Body Snatcher",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.WILL],
        competences: ["CLIMB", "COOL", "DODGE", "ENDURANCE", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_ANY"],
        talents: ["ALLEY_CAT", "CRIMINAL", "FLEE", "STRONG_BACK"]
    },
    GRAVE_ROBBER_2: {
        name: "Grave Robber",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.WILL, Stat.WEAS],
        competences: [
            "CLIMB", "COOL", "DODGE", "ENDURANCE", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_ANY", "BRIBERY",
            "DRIVE", "EVALUATE", "HAGGLE", "LORE_MEDICINE", "MELEE_BASIC"
        ],
        talents: ["BREAK_AND_ENTER", "NIGHT_VISION", "RESISTANCE_DISEASE", "VERY_STRONG"]
    },
    GRAVE_ROBBER_3: {
        name: "Tomb Robber",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.WILL, Stat.WEAS, Stat.DEXT],
        competences: [
            "CLIMB", "COOL", "DODGE", "ENDURANCE", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_ANY", "BRIBERY",
            "DRIVE", "EVALUATE", "HAGGLE", "LORE_MEDICINE", "MELEE_BASIC", "LORE_HISTORY", "PICK_LOCK", "RESEARCH",
            "SET_TRAP"
        ],
        talents: ["READ_WRITE", "STRIKE_MIGHTY_BLOW", "TENACIOUS", "TUNNEL_RAT"]
    },
    GRAVE_ROBBER_4: {
        name: "Treasure Hunter",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.WILL, Stat.WEAS, Stat.DEXT, Stat.INTL],
        competences: [
            "CLIMB", "COOL", "DODGE", "ENDURANCE", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_ANY", "BRIBERY",
            "DRIVE", "EVALUATE", "HAGGLE", "LORE_MEDICINE", "MELEE_BASIC", "LORE_HISTORY", "PICK_LOCK", "RESEARCH",
            "SET_TRAP", "NAVIGATION", "TRADE_ENGINEER"
        ],
        talents: ["FEARLESS_UNDEAD", "SIXTH_SENSE", "STRONG_MINDED", "TRAPPER"]
    },
    // Outlaw
    OUTLAW_1: {
        name: "Brigand",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_BASIC",
            "OUTDOOR_SURVIVAL"
        ],
        talents: ["COMBAT_AWARE", "CRIMINAL", "ROVER", "FLEE"]
    },
    OUTLAW_2: {
        name: "Outlaw",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.BALS],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_BASIC",
            "OUTDOOR_SURVIVAL", "DODGE", "HEAL", "LORE_LOCAL", "PERCEPTION", "RANGED_BOW", "STEALTH_RURAL"
        ],
        talents: ["DIRTY_FIGHTING", "MARKSMAN", "STRIKE_TO_STUN", "TRAPPER"]
    },
    OUTLAW_3: {
        name: "Outlaw Chief",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.BALS, Stat.INIT],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_BASIC",
            "OUTDOOR_SURVIVAL", "DODGE", "HEAL", "LORE_LOCAL", "PERCEPTION", "RANGED_BOW", "STEALTH_RURAL",
            "GOSSIP", "INTUITION", "LEADERSHIP", "RIDE_HORSE"
        ],
        talents: ["RAPID_RELOAD", "ROUGHRIDER", "MENACING", "VERY_RESILIENT"]
    },
    OUTLAW_4: {
        name: "Bandit King",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.BALS, Stat.INIT, Stat.FELW],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_BASIC",
            "OUTDOOR_SURVIVAL", "DODGE", "HEAL", "LORE_LOCAL", "PERCEPTION", "RANGED_BOW", "STEALTH_RURAL",
            "GOSSIP", "INTUITION", "LEADERSHIP", "RIDE_HORSE", "CHARM", "LORE_EMPIRE"
        ],
        talents: ["DEADEYE_SHOT", "FEARLESS_ROAD_WARDENS", "IRON_WILL", "ROBUST"]
    },
    // Racketeer
    RACKETEER_1: {
        name: "Thug",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LORE_LOCAL", "MELEE_BRAWLING",
            "STEALTH_URBAN"
        ],
        talents: ["CRIMINAL", "ETIQUETTE_CRIMINALS", "MENACING", "STRIKE_MIGHTY_BLOW"]
    },
    RACKETEER_2: {
        name: "Racketeer",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.FELW],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LORE_LOCAL", "MELEE_BRAWLING",
            "STEALTH_URBAN", "BRIBERY", "CHARM", "EVALUATE", "GOSSIP", "LANGUAGE_ESTALIAN", "LANGUAGE_TILEAN",
            "MELEE_BASIC"
        ],
        talents: ["DIRTY_FIGHTING", "EMBEZZLE", "STRIKE_TO_STUN", "WARRIOR_BORN"]
    },
    RACKETEER_3: {
        name: "Gang Boss",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.FELW, Stat.WILL],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LORE_LOCAL", "MELEE_BRAWLING",
            "STEALTH_URBAN", "BRIBERY", "CHARM", "EVALUATE", "GOSSIP", "LANGUAGE_ESTALIAN", "LANGUAGE_TILEAN",
            "MELEE_BASIC", "INTUITION", "LEADERSHIP", "PERCEPTION", "RANGED_CROSSBOW"
        ],
        talents: ["FEARLESS_WATCHMEN", "IRON_WILL", "RESISTANCE_POISON", "ROBUST"]
    },
    RACKETEER_4: {
        name: "Crime Lord",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.FELW, Stat.WILL, Stat.INTL],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LORE_LOCAL", "MELEE_BRAWLING",
            "STEALTH_URBAN", "BRIBERY", "CHARM", "EVALUATE", "GOSSIP", "LANGUAGE_ESTALIAN", "LANGUAGE_TILEAN",
            "MELEE_BASIC", "INTUITION", "LEADERSHIP", "PERCEPTION", "RANGED_CROSSBOW", "LORE_LAW", "LORE_POLITICS"
        ],
        talents: ["COMMANDING_PRESENCE", "KINGPIN", "FRIGHTENING", "WEALTHY"]
    },
    // Thief
    THIEF_1: {
        name: "Prowler",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.WILL],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_URBAN"
        ],
        talents: ["ALLEY_CAT", "CRIMINAL", "FLEE", "STRIKE_TO_STUN"]
    },
    THIEF_2: {
        name: "Thief",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.WILL, Stat.DEXT],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_URBAN",
            "EVALUATE", "GOSSIP", "LORE_LOCAL", "PICK_LOCK", "SECRET_SIGNS_THIEF", "SLEIGHT_OF_HAND"
        ],
        talents: ["BREAK_AND_ENTER", "ETIQUETTE_CRIMINALS", "FAST_HANDS", "SHADOW"]
    },
    THIEF_3: {
        name: "Master Thief",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.WILL, Stat.DEXT, Stat.STRG],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_URBAN",
            "EVALUATE", "GOSSIP", "LORE_LOCAL", "PICK_LOCK", "SECRET_SIGNS_THIEF", "SLEIGHT_OF_HAND", "BRIBERY",
            "GAMBLE", "INTIMIDATE", "RANGED_CROSSBOW"
        ],
        talents: ["NIGHT_VISION", "NIMBLE_FINGERED", "STEP_ASIDE", "TRAPPER"]
    },
    THIEF_4: {
        name: "Cat Burglar",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.INIT, Stat.AGIL, Stat.WILL, Stat.DEXT, Stat.STRG, Stat.FELW],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_URBAN",
            "EVALUATE", "GOSSIP", "LORE_LOCAL", "PICK_LOCK", "SECRET_SIGNS_THIEF", "SLEIGHT_OF_HAND", "BRIBERY",
            "GAMBLE", "INTIMIDATE", "RANGED_CROSSBOW", "CHARM", "SET_TRAP"
        ],
        talents: ["CATFALL", "SCLA_SHEER_SURFACE", "STRONG_LEGS", "WEALTHY"]
    },
    // Witch
    WITCH_1: {
        name: "Hexer",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL],
        competences: [
            "CHANNELLING_ANY", "COOL", "ENDURANCE", "GOSSIP", "INTIMIDATE", "LANGUAGE_MAGICK", "SLEIGHT_OF_HAND",
            "STEALTH_RURAL"
        ],
        talents: ["CRIMINAL", "INSTINCTIVE_DICTION", "MENACING", "PETTY_MAGIC"]
    },
    WITCH_2: {
        name: "Witch",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.INIT],
        competences: [
            "CHANNELLING_ANY", "COOL", "ENDURANCE", "GOSSIP", "INTIMIDATE", "LANGUAGE_MAGICK", "SLEIGHT_OF_HAND",
            "STEALTH_RURAL", "CHARM_ANIMAL", "DODGE", "INTUITION", "MELEE_POLE_ARM", "PERCEPTION", "TRADE_HERBALIST"
        ],
        talents: ["ARCANE_MAGIC_WITCHERY", "ATTRACTIVE", "SECOND_SIGHT", "WITCH"]
    },
    WITCH_3: {
        name: "Wyrd",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.INIT, Stat.FELW],
        competences: [
            "CHANNELLING_ANY", "COOL", "ENDURANCE", "GOSSIP", "INTIMIDATE", "LANGUAGE_MAGICK", "SLEIGHT_OF_HAND",
            "STEALTH_RURAL", "CHARM_ANIMAL", "DODGE", "INTUITION", "MELEE_POLE_ARM", "PERCEPTION",
            "TRADE_HERBALIST", "BRIBERY", "CHARM", "HAGGLE", "LORE_DARK_MAGIC"
        ],
        talents: ["ANIMAL_AFFINITY", "FAST_HANDS", "FRIGHTENING", "MAGICAL_SENSE"]
    },
    WITCH_4: {
        name: "Warlock",
        level: 4,
        status: { tier: CareerStatusTier.BRASS, level: 5 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.INIT, Stat.FELW, Stat.INTL],
        competences: [
            "CHANNELLING_ANY", "COOL", "ENDURANCE", "GOSSIP", "INTIMIDATE", "LANGUAGE_MAGICK", "SLEIGHT_OF_HAND",
            "STEALTH_RURAL", "CHARM_ANIMAL", "DODGE", "INTUITION", "MELEE_POLE_ARM", "PERCEPTION",
            "TRADE_HERBALIST", "BRIBERY", "CHARM", "HAGGLE", "LORE_DARK_MAGIC", "LORE_DEMONOLOGY", "LORE_MAGIC"
        ],
        talents: ["AETHYRIC_ATTUNEMENT", "LUCK", "STRONG_MINDED", "VERY_RESILIENT"]
    },

    // --- WARRIOR --- //
    // Cavalryman
    CAVALRYMAN_1: {
        name: "Horseman",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.AGIL],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "RIDE_HORSE"
        ],
        talents: ["COMBAT_AWARE", "CRACK_THE_WHIP", "LIGHTNING_REFLEXES", "ROUGHRIDER"]
    },
    CAVALRYMAN_2: {
        name: "Cavalryman",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.AGIL, Stat.BALS],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "RIDE_HORSE", "CHARM", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "MELEE_CAVALRY",
            "RANGED_BLACKPOWDER"
        ],
        talents: ["ETIQUETTE_SOLDIERS", "GUNNER", "SEASONED_TRAVELLER", "TRICK_RIDING"]
    },
    CAVALRYMAN_3: {
        name: "Cavalry Sergeant",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.AGIL, Stat.BALS, Stat.INIT],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "RIDE_HORSE", "CHARM", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "MELEE_CAVALRY",
            "RANGED_BLACKPOWDER", "INTIMIDATE", "INTUITION", "LEADERSHIP", "LORE_WAR"
        ],
        talents: ["COMBAT_REFLEXES", "FAST_SHOT", "HATRED_ANY", "WAR_LEADER"]
    },
    CAVALRYMAN_4: {
        name: "Cavalry Officer",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.AGIL, Stat.BALS, Stat.INIT, Stat.FELW],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "RIDE_HORSE", "CHARM", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "MELEE_CAVALRY",
            "RANGED_BLACKPOWDER", "INTIMIDATE", "INTUITION", "LEADERSHIP", "LORE_WAR", "GAMBLE", "LORE_HERALDRY"
        ],
        talents: ["ACCURATE_SHOT", "INSPIRING", "REACTION_STRIKE", "ROBUST"]
    },
    // Guard
    GUARD_1: {
        name: "Sentry",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "INTUITION",
            "MELEE_BASIC", "PERCEPTION"
        ],
        talents: ["DICEMAN", "ETIQUETTE_SERVANTS", "STRIKE_TO_STUN", "TENACIOUS"]
    },
    GUARD_2: {
        name: "Guard",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.INIT],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "INTUITION",
            "MELEE_BASIC", "PERCEPTION", "ATHLETICS", "COOL", "DODGE", "INTIMIDATE", "MELEE_POLE_ARM", "RANGED_BOW"
        ],
        talents: ["RELENTLESS", "REVERSAL", "SHIELDSMAN", "STRIKE_MIGHTY_BLOW"]
    },
    GUARD_3: {
        name: "Honour Guard",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.INIT, Stat.STRG],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "INTUITION",
            "MELEE_BASIC", "PERCEPTION", "ATHLETICS", "COOL", "DODGE", "INTIMIDATE", "MELEE_POLE_ARM", "RANGED_BOW",
            "HEAL", "LANGUAGE_BATTLE", "LORE_ETIQUETTE", "MELEE_TWO_HANDED"
        ],
        talents: ["FEARLESS_INTRUDERS", "JUMP_UP", "STOUT_HEARTED", "UNSHAKABLE"]
    },
    GUARD_4: {
        name: "Guard Officer",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.INIT, Stat.STRG, Stat.INTL],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "INTUITION",
            "MELEE_BASIC", "PERCEPTION", "ATHLETICS", "COOL", "DODGE", "INTIMIDATE", "MELEE_POLE_ARM", "RANGED_BOW",
            "HEAL", "LANGUAGE_BATTLE", "LORE_ETIQUETTE", "MELEE_TWO_HANDED", "LEADERSHIP", "LORE_WAR"
        ],
        talents: ["COMBAT_MASTER", "FURIOUS_ASSAULT", "IRON_WILL", "ROBUST"]
    },
    // Knight
    KNIGHT_1: {
        name: "Squire",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.AGIL],
        competences: [
            "ATHLETICS", "ANIMAL_CARE", "CHARM_ANIMAL", "HEAL", "LORE_HERALDRY", "MELEE_CAVALRY", "RIDE_HORSE",
            "TRADE_FARRIER"
        ],
        talents: ["ETIQUETTE_ANY", "ROUGHRIDER", "STURDY", "WARRIOR_BORN"]
    },
    KNIGHT_2: {
        name: "Knight",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.AGIL, Stat.WEAS],
        competences: [
            "ATHLETICS", "ANIMAL_CARE", "CHARM_ANIMAL", "HEAL", "LORE_HERALDRY", "MELEE_CAVALRY", "RIDE_HORSE",
            "TRADE_FARRIER", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LANGUAGE_BATTLE", "MELEE_ANY"
        ],
        talents: ["MENACING", "SEASONED_TRAVELLER", "SHIELDSMAN", "STRIKE_MIGHTY_BLOW"]
    },
    KNIGHT_3: {
        name: "First Knight",
        level: 3,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.AGIL, Stat.WEAS, Stat.WILL],
        competences: [
            "ATHLETICS", "ANIMAL_CARE", "CHARM_ANIMAL", "HEAL", "LORE_HERALDRY", "MELEE_CAVALRY", "RIDE_HORSE",
            "TRADE_FARRIER", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LANGUAGE_BATTLE", "MELEE_ANY", "CHARM",
            "CONSUME_ALCOHOL", "LEADERSHIP", "LORE_WAR"
        ],
        talents: ["FEARLESS_ANY", "STOUT_HEARTED", "UNSHAKABLE", "WAR_LEADER"]
    },
    KNIGHT_4: {
        name: "Knight of the Inner Circle",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 4 },
        improvableStats: [Stat.STRG, Stat.INIT, Stat.AGIL, Stat.WEAS, Stat.WILL, Stat.FELW],
        competences: [
            "ATHLETICS", "ANIMAL_CARE", "CHARM_ANIMAL", "HEAL", "LORE_HERALDRY", "MELEE_CAVALRY", "RIDE_HORSE",
            "TRADE_FARRIER", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LANGUAGE_BATTLE", "MELEE_ANY", "CHARM",
            "CONSUME_ALCOHOL", "LEADERSHIP", "LORE_WAR", "LORE_ANY", "SECRET_SIGNS_KNIGHTLY_ORDER"
        ],
        talents: ["DISARM", "INSPIRING", "IRON_WILL", "STRIKE_TO_INJURE"]
    },
    // Pit Fighter
    PIT_FIGHTER_1: {
        name: "Pugilist",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 4 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG],
        competences: [
            "ATHLETICS", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_ANY", "MELEE_BRAWLING"
        ],
        talents: ["DIRTY_FIGHTING", "IN_FIGHTER", "IRON_JAWS", "REVERSAL"]
    },
    PIT_FIGHTER_2: {
        name: "Pit Fighter",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.INIT],
        competences: [
            "ATHLETICS", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_ANY", "MELEE_BRAWLING",
            "HAGGLE", "INTUITION", "MELEE_BASIC", "MELEE_FLAIL", "MELEE_TWO_HANDED", "PERCEPTION",
            "RANGED_ENTANGLING"
        ],
        talents: ["AMBIDEXTROUS", "COMBAT_REFLEXES", "DUAL_WIELDER", "SHIELDSMAN"]
    },
    PIT_FIGHTER_3: {
        name: "Pit Champion",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.INIT, Stat.AGIL],
        competences: [
            "ATHLETICS", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_ANY", "MELEE_BRAWLING",
            "HAGGLE", "INTUITION", "MELEE_BASIC", "MELEE_FLAIL", "MELEE_TWO_HANDED", "PERCEPTION",
            "RANGED_ENTANGLING", "CONSUME_ALCOHOL", "GOSSIP", "LORE_ANATOMY", "PERFORM_FIGHT"
        ],
        talents: ["COMBAT_MASTER", "DISARM", "MENACING", "ROBUST"]
    },
    PIT_FIGHTER_4: {
        name: "Pit Legend",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.TOUG, Stat.INIT, Stat.AGIL, Stat.FELW],
        competences: [
            "ATHLETICS", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_ANY", "MELEE_BRAWLING",
            "HAGGLE", "INTUITION", "MELEE_BASIC", "MELEE_FLAIL", "MELEE_TWO_HANDED", "PERCEPTION",
            "RANGED_ENTANGLING", "CONSUME_ALCOHOL", "GOSSIP", "LORE_ANATOMY", "PERFORM_FIGHT", "CHARM", "RANGED_ANY"
        ],
        talents: ["FRIGHTENING", "FURIOUS_ASSAULT", "IMPLACABLE", "REACTION_STRIKE"]
    },
    // Protagonist
    PROTAGONIST_1: {
        name: "Braggart",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "ENTERTAIN_TAUNT", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_ANY"
        ],
        talents: ["IN_FIGHTER", "DIRTY_FIGHTING", "MENACING", "WARRIOR_BORN"]
    },
    PROTAGONIST_2: {
        name: "Protagonist",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.INIT],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "ENTERTAIN_TAUNT", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_ANY",
            "BRIBERY", "CHARM", "INTUITION", "MELEE_BASIC", "PERCEPTION", "RIDE_HORSE"
        ],
        talents: ["COMBAT_REFLEXES", "CRIMINAL", "REVERSAL", "STRIKE_TO_STUN"]
    },
    PROTAGONIST_3: {
        name: "Hitman",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.INIT, Stat.BALS],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "ENTERTAIN_TAUNT", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_ANY",
            "BRIBERY", "CHARM", "INTUITION", "MELEE_BASIC", "PERCEPTION", "RIDE_HORSE", "CLIMB", "COOL",
            "NAVIGATION", "RANGED_THROWING"
        ],
        talents: ["CAREFUL_STRIKE", "DISARM", "MARKSMAN", "RELENTLESS"]
    },
    PROTAGONIST_4: {
        name: "Assassin",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.AGIL, Stat.INIT, Stat.BALS, Stat.FELW],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "ENTERTAIN_TAUNT", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_ANY",
            "BRIBERY", "CHARM", "INTUITION", "MELEE_BASIC", "PERCEPTION", "RIDE_HORSE", "CLIMB", "COOL",
            "NAVIGATION", "RANGED_THROWING", "ENTERTAIN_ACTING", "RANGED_CROSSBOW"
        ],
        talents: ["ACCURATE_SHOT", "AMBIDEXTROUS", "FURIOUS_ASSAULT", "STRIKE_TO_INJURE"]
    },
    // Slayer
    SLAYER_1: {
        name: "Troll Slayer",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.WILL],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "HEAL", "LORE_TROLLS", "MELEE_BASIC"
        ],
        talents: ["DUAL_WIELDER", "FEARLESS_EVERYTHING", "FRENZY", "SLAYER"]
    },
    SLAYER_2: {
        name: "Giant Slayer",
        level: 2,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.WILL, Stat.TOUG],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "HEAL", "LORE_TROLLS", "MELEE_BASIC",
            "EVALUATE", "INTIMIDATE", "LANGUAGE_BATTLE", "LORE_GIANTS", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL"
        ],
        talents: ["HARDY", "IMPLACABLE", "MENACING", "REVERSAL"]
    },
    SLAYER_3: {
        name: "Dragon Slayer",
        level: 3,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.WILL, Stat.TOUG, Stat.AGIL],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "HEAL", "LORE_TROLLS", "MELEE_BASIC",
            "EVALUATE", "INTIMIDATE", "LANGUAGE_BATTLE", "LORE_GIANTS", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL",
            "ENTERTAIN_STORYTELLING", "LORE_DRAGONS", "PERCEPTION", "RANGED_THROWING"
        ],
        talents: ["AMBIDEXTROUS", "FURIOUS_ASSAULT", "RELENTLESS", "ROBUST"]
    },
    SLAYER_4: {
        name: "Daemon Slayer",
        level: 4,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.STRG, Stat.WILL, Stat.TOUG, Stat.AGIL, Stat.INIT],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "HEAL", "LORE_TROLLS", "MELEE_BASIC",
            "EVALUATE", "INTIMIDATE", "LANGUAGE_BATTLE", "LORE_GIANTS", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL",
            "ENTERTAIN_STORYTELLING", "LORE_DRAGONS", "PERCEPTION", "RANGED_THROWING", "INTUITION", "LORE_CHAOS"
        ],
        talents: ["COMBAT_MASTER", "FRIGHTENING", "STRIKE_MIGHTY_BLOW", "VERY_STRONG"]
    },
    // Soldier
    SOLDIER_1: {
        name: "Recruit",
        level: 1,
        status: { tier: CareerStatusTier.SILVER, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "PLAY_DRUM",
            "PLAY_FIFE"
        ],
        talents: ["DICEMAN", "MARKSMAN", "STRONG_BACK", "WARRIOR_BORN"]
    },
    SOLDIER_2: {
        name: "Soldier",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.BALS],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "PLAY_DRUM",
            "PLAY_FIFE", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "MELEE_ANY", "RANGED_ANY", "OUTDOOR_SURVIVAL"
        ],
        talents: ["DRILLED", "ETIQUETTE_SOLDIERS", "RAPID_RELOAD", "SHIELDSMAN"]
    },
    SOLDIER_3: {
        name: "Sergeant",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 5 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.BALS, Stat.INIT],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "PLAY_DRUM",
            "PLAY_FIFE", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "MELEE_ANY", "RANGED_ANY", "OUTDOOR_SURVIVAL",
            "HEAL", "INTUITION", "LEADERSHIP", "PERCEPTION"
        ],
        talents: ["COMBAT_AWARE", "ENCLOSED_FIGHTER", "UNSHAKABLE", "WAR_LEADER"]
    },
    SOLDIER_4: {
        name: "Officer",
        level: 4,
        status: { tier: CareerStatusTier.GOLD, level: 1 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.BALS, Stat.INIT, Stat.FELW],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "PLAY_DRUM",
            "PLAY_FIFE", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "MELEE_ANY", "RANGED_ANY", "OUTDOOR_SURVIVAL",
            "HEAL", "INTUITION", "LEADERSHIP", "PERCEPTION", "LORE_WAR", "NAVIGATION"
        ],
        talents: ["INSPIRING", "PUBLIC_SPEAKER", "SEASONED_TRAVELLER", "STOUT_HEARTED"]
    },
    // Warrior Priest
    WARRIOR_PRIEST_1: {
        name: "Novitiate",
        level: 1,
        status: { tier: CareerStatusTier.BRASS, level: 2 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL],
        competences: ["COOL", "DODGE", "ENDURANCE", "HEAL", "LEADERSHIP", "LORE_THEOLOGY", "MELEE_ANY", "PRAY"],
        talents: ["BLESS_ANY", "ETIQUETTE_CULTISTS", "READ_WRITE", "STRONG_MINDED"]
    },
    WARRIOR_PRIEST_2: {
        name: "Warrior Priest",
        level: 2,
        status: { tier: CareerStatusTier.SILVER, level: 2 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.STRG],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "HEAL", "LEADERSHIP", "LORE_THEOLOGY", "MELEE_ANY", "PRAY", "CHARM",
            "ENTERTAIN_SPEECHES", "INTIMIDATE", "LANGUAGE_BATTLE", "RANGED_ANY"
        ],
        talents: ["DUAL_WIELDER", "INSPIRING", "INVOKE_ANY", "SEASONED_TRAVELLER"]
    },
    WARRIOR_PRIEST_3: {
        name: "Priest Sergeant",
        level: 3,
        status: { tier: CareerStatusTier.SILVER, level: 3 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.STRG, Stat.INIT],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "HEAL", "LEADERSHIP", "LORE_THEOLOGY", "MELEE_ANY", "PRAY", "CHARM",
            "ENTERTAIN_SPEECHES", "INTIMIDATE", "LANGUAGE_BATTLE", "RANGED_ANY", "ANIMAL_CARE", "INTUITION",
            "PERCEPTION", "RIDE_HORSE"
        ],
        talents: ["COMBAT_AWARE", "HOLY_VISIONS", "PURE_SOUL", "STOUT_HEARTED"]
    },
    WARRIOR_PRIEST_4: {
        name: "Priest Captain",
        level: 4,
        status: { tier: CareerStatusTier.SILVER, level: 4 },
        improvableStats: [Stat.WEAS, Stat.TOUG, Stat.WILL, Stat.STRG, Stat.INIT, Stat.FELW],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "HEAL", "LEADERSHIP", "LORE_THEOLOGY", "MELEE_ANY", "PRAY", "CHARM",
            "ENTERTAIN_SPEECHES", "INTIMIDATE", "LANGUAGE_BATTLE", "RANGED_ANY", "ANIMAL_CARE", "INTUITION",
            "PERCEPTION", "RIDE_HORSE", "CONSUME_ALCOHOL", "LORE_WAR"
        ],
        talents: ["FEARLESS_ANY", "FURIOUS_ASSAULT", "HOLY_HATRED", "WAR_LEADER"]
    },
} as Record<string, RawCareer> as unknown as Record<string, Career>;
// #endregion === CAREER SET === //
// === //
// #region ====== CAREER PATH LINKING === //
// Careers only know their path once it is linked, as paths reference them by ID
Object.keys(TEW.DATABASE.CAREERS.PATHS).forEach((pathId) => {
    const path = TEW.DATABASE.CAREERS.PATHS[pathId];
    path.levels.forEach((pathLevel) => {
        TEW.DATABASE.CAREERS.SET[pathLevel.career].path = path;
    });
});
// #endregion === CAREER PATH LINKING === //
// === //
// #region ====== MAGICAL CAREERS === //
// A career opens the way to magic when it teaches the language spells are cast in
Object.keys(TEW.DATABASE.CAREERS.SET).forEach((careerId) => {
    const career = TEW.DATABASE.CAREERS.SET[careerId];
    career.isMagical = career.competences.indexOf(TEW.MAGIC.MAGICK_COMP) >= 0;
});
TEW.DATABASE.CAREERS.MAGICAL_IDS = Object.keys(TEW.DATABASE.CAREERS.SET)
    .filter((careerId) => TEW.DATABASE.CAREERS.SET[careerId].isMagical);
// #endregion === MAGICAL CAREERS === //
// === //
// #region ====== CAREER IDS === //
// The path IDs are the keys of the PATHS object, the career IDs those of the SET object
TEW.DATABASE.CAREERS.PATH_IDS = Object.keys(TEW.DATABASE.CAREERS.PATHS);
TEW.DATABASE.CAREERS.IDS = Object.keys(TEW.DATABASE.CAREERS.SET);
// #endregion === CAREER IDS === //
