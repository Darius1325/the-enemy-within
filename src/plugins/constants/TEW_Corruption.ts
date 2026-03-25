// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Corruption.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Corruption sources, Mutation and Disorder tables.
// Reference: WFRP4e Core Rulebook p.180-185 & Tome of Corruption

// ----------------------
// Imports
// ----------------------

import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

TEW.DATABASE.CORRUPTION = {};

// ===========================================================================
// PHYSICAL MUTATIONS — rolled when physical Corruption threshold is exceeded
// ===========================================================================
TEW.DATABASE.CORRUPTION.MUTATIONS = [

    // d10 table : roll 1d10, pick matching entry
    { id: "MUTATION_WARPED_LIMB",     name: "Warped Limb",
      description: "One of your limbs twists into a grotesque shape. It still functions, but people recoil at the sight.",
      physical: true, statModifier: { FELW: -10 } },

    { id: "MUTATION_EXTRA_EYE",       name: "Extra Eye",
      description: "A third eye opens on your forehead, bloodshot and unblinking. You gain uncanny peripheral vision.",
      physical: true, statModifier: { FELW: -5, INIT: 5 } },

    { id: "MUTATION_SCALY_SKIN",      name: "Scaly Skin",
      description: "Patches of iridescent scales erupt across your skin. They offer some protection.",
      physical: true, statModifier: { FELW: -10, TOUG: 5 }, beneficial: false },

    { id: "MUTATION_TENTACLE",        name: "Tentacle",
      description: "A rubbery tentacle grows from your shoulder. You have learned to use it as a clumsy extra hand.",
      physical: true, statModifier: { FELW: -15, DEXT: 5 } },

    { id: "MUTATION_FORKED_TONGUE",   name: "Forked Tongue",
      description: "Your tongue splits and lengthens. You hiss when you speak. Others find it unsettling.",
      physical: true, statModifier: { FELW: -5 } },

    { id: "MUTATION_CLOVEN_HOOVES",   name: "Cloven Hooves",
      description: "Your feet are replaced by hooves. You move with strange, clicking steps.",
      physical: true, statModifier: { AGIL: -5, FELW: -10 } },

    { id: "MUTATION_CHAOS_AURA",      name: "Chaos Aura",
      description: "A faint glow of malevolent energy surrounds you. Animals panic in your presence.",
      physical: true, statModifier: { FELW: -20, WILL: 5 } },

    { id: "MUTATION_IRON_SKIN",       name: "Iron Skin",
      description: "Your skin hardens into plates of near-metallic tissue. Painful but protective.",
      physical: true, statModifier: { FELW: -15, TOUG: 10 }, beneficial: true },

    { id: "MUTATION_BEAST_EYES",      name: "Beast Eyes",
      description: "Your eyes turn black and gain the slit pupils of a predatory animal. You see well in darkness.",
      physical: true, statModifier: { FELW: -5, INIT: 10 }, beneficial: true },

    { id: "MUTATION_HORNS",           name: "Horns",
      description: "Bony horns erupt from your skull. You can attack with them as a Brawling weapon (SB+3).",
      physical: true, statModifier: { FELW: -10 }, beneficial: true }
];

// ===========================================================================
// MENTAL DISORDERS — rolled when mental Corruption threshold is exceeded
// ===========================================================================
TEW.DATABASE.CORRUPTION.DISORDERS = [

    { id: "DISORDER_PARANOIA",        name: "Paranoia",
      description: "You see conspiracies everywhere. You trust no one, and your allies notice your constant suspicion.",
      physical: false, statModifier: { FELW: -10 },
      combatConditions: {} },

    { id: "DISORDER_PHOBIA_FIRE",     name: "Pyrophobia",
      description: "Fire terrifies you beyond reason. The sight of open flame triggers a panic response.",
      physical: false, statModifier: {},
      combatConditions: { BROKEN: 1 } },

    { id: "DISORDER_COMPULSION",      name: "Obsessive Compulsion",
      description: "You must perform a specific ritual (counting, touching walls, reciting prayers) or suffer crippling anxiety.",
      physical: false, statModifier: { INTL: -5, WILL: -5 } },

    { id: "DISORDER_DELUSIONS",       name: "Delusions",
      description: "You hear whispers and see things that aren't there. Reality blurs at the edges of your vision.",
      physical: false, statModifier: { INTL: -10 } },

    { id: "DISORDER_MANIAS",          name: "Mania",
      description: "Your moods swing without warning between euphoria and despair. Your companions walk on eggshells around you.",
      physical: false, statModifier: { WILL: -10, FELW: -5 } },

    { id: "DISORDER_NIGHTMARES",      name: "Recurring Nightmares",
      description: "Sleep brings no rest, only visions of darkness. You wake exhausted every morning.",
      physical: false, statModifier: { INIT: -5 },
      combatConditions: { FATIGUED: 1 } },

    { id: "DISORDER_HATRED",          name: "Hatred",
      description: "An irrational hatred for a specific group (determined by the GM) boils inside you.",
      physical: false, statModifier: {} },

    { id: "DISORDER_ADDICTION",       name: "Addiction",
      description: "You have become dependent on a substance (alcohol, Obscura, Mandrake root). Without it, you suffer −10 to all tests.",
      physical: false, statModifier: {} },

    { id: "DISORDER_FUGUE",           name: "Fugue States",
      description: "You sometimes lose time, coming back to yourself in strange places with no memory of what happened.",
      physical: false, statModifier: { INTL: -5 } },

    { id: "DISORDER_VOICES",          name: "Voices",
      description: "The Ruinous Powers whisper to you directly. The voices grow louder in times of stress.",
      physical: false, statModifier: { WILL: -15 } }
];

// ===========================================================================
// Corruption gain sources (used to display narrative messages)
// ===========================================================================
TEW.DATABASE.CORRUPTION.SOURCES = {
    CHAOS_TAINT:       "Tainted by the Winds of Chaos",
    DARK_RITUAL:       "Participating in a dark ritual",
    WARPSTONE:         "Touching Warpstone",
    CHAOS_CREATURE:    "Struck by a creature of Chaos",
    FORBIDDEN_TOME:    "Reading from a forbidden tome",
    DARK_SPELL:        "Channelling a forbidden spell",
    CHAOS_REWARD:      "Accepting a reward from Chaos"
};
