// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Conditions.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: WFRP4e Conditions constants.
// Reference: WFRP4e Core Rulebook p.167-170

// ----------------------
// Imports
// ----------------------

import { ConditionId, ConditionRemoval } from "../_types/enum";
import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

// #region ====== CONDITIONS SET === //
TEW.DATABASE.CONDITIONS = {

    // ---------------------------------------------------------------------------
    // ABLAZE — Le personnage est en feu.
    // Reçoit 1 blessure par pile au début de son tour (ignorant les armures).
    // Peut se retirer en dépensant son Action (test d'Athlétisme TN 0).
    // ---------------------------------------------------------------------------
    ABLAZE: {
        id: ConditionId.ABLAZE,
        name: "Ablaze",
        icon: 64,
        message: "burned",
        description: "You are on fire! You suffer 1 Wound per stack at the start of your turn, ignoring Armour Points. You may spend your Action to attempt an Athletics Test (SL 0) to extinguish the flames.",
        maxStacks: Infinity,
        removal: ConditionRemoval.TEST,
        removalTest: {
            comp: 'ATHLETICS',
        },
        damageOverTime: true,
    },

    // ---------------------------------------------------------------------------
    // BLEEDING — Blessure ouverte qui saigne.
    // Reçoit 1 blessure par pile au début de son tour.
    // Un test de Premiers Soins SL≥stack retire toutes les piles.
    // ---------------------------------------------------------------------------
    BLEEDING: {
        id: ConditionId.BLEEDING,
        name: "Bleeding",
        message: "bled",
        description: "You are bleeding from an open wound. You suffer 1 Wound per stack at the start of your turn. A First Aid Test with SL equal to or greater than your stacks removes all stacks.",
        maxStacks: Infinity,
        removal: ConditionRemoval.NONE,
        fatiguedOnRemoval: true,
        damageOverTime: true,
    },

    BLINDED: {
        id: ConditionId.BLINDED,
        name: "Blinded",
        description: "You are blinded and suffer a penalty to all tests that depend on sight.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
            comps: ['EVALUATE', 'NAVIGATION', 'PERCEPTION', 'TRACK', 'MELEE_BASIC', 'MELEE_BRAWLING', 'MELEE_CAVALRY', 'MELEE_FENCING', 'MELEE_PARRY', 'MELEE_FLAIL', 'MELEE_POLE_ARM', 'MELEE_TWO_HANDED', 'RANGED_BOW', 'RANGED_BLACKPOWDER', 'RANGED_CROSSBOW', 'RANGED_ENGINEERING', 'RANGED_ENTANGLING', 'RANGED_EXPLOSIVES', 'RANGED_SLING', 'RANGED_THROWING'],
        },
        removal: ConditionRemoval.AUTO,
    },

    DEAFENED: {
        id: ConditionId.DEAFENED,
        name: "Deafened",
        description: "You are deafened and suffer a penalty to all tests that depend on hearing.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
            comps: ['LANGUAGE_BATTLE', 'LANGUAGE_BRETONNIAN', 'LANGUAGE_CLASSICAL', 'LANGUAGE_ELTHARIN', 'LANGUAGE_GUILDER', 'LANGUAGE_KHAZALID', 'CASTING_MAGICK', 'LANGUAGE_MIDDENLANDER', 'LANGUAGE_WASTELANDER'],
        },
        removal: ConditionRemoval.AUTO,
    },

    // ---------------------------------------------------------------------------
    // ENTANGLED — Immobilisé par un filet, corde ou tendon.
    // Ne peut pas se déplacer. -20 à tous les tests.
    // ---------------------------------------------------------------------------
    ENTANGLED: {
        id: ConditionId.ENTANGLED,
        name: "Entangled",
        description: "You are caught in a net, rope, or similar restraint. You cannot move voluntarily. You suffer −20 to all Tests. You may spend your Action attempting a Strength Test (SL 0) to free yourself.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
            comps: ['ATHLETICS', 'DODGE'],
        },
        removal: ConditionRemoval.TEST,
        blocksMovement: true,
    },

    // ---------------------------------------------------------------------------
    // FATIGUED — Épuisé par l'effort ou la maladie.
    // -10 à tous les tests par pile.
    // ---------------------------------------------------------------------------
    FATIGUED: {
        id: ConditionId.FATIGUED,
        name: "Fatigued",
        description: "You are exhausted. You suffer −10 to all Tests per stack. Resting for at least 1 hour removes 1 stack.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
        },
        removal: ConditionRemoval.NONE,
    },

    // ---------------------------------------------------------------------------
    // POISONED — Empoisonné.
    // -10 à tous les tests. Reçoit 1 blessure par tour.
    // Un Antidote ou test de Premiers Soins SL≥1 retire 1 pile.
    // ---------------------------------------------------------------------------
    POISONED: {
        id: ConditionId.POISONED,
        name: "Poisoned",
        message: "were poisoned",
        description: "Venom courses through your veins. You suffer −10 to all Tests and 1 Wound per stack at the start of your turn. An antidote or successful First Aid Test (SL 1+) removes 1 stack.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
        },
        removal: ConditionRemoval.TEST,
        removalTest: {
            comp: 'ENDURANCE',
        },
        fatiguedOnRemoval: true,
        damageOverTime: true,
    },

    // ---------------------------------------------------------------------------
    // PRONE — À terre.
    // -20 aux attaques à distance contre la cible (couverte).
    // +20 aux attaques de mêlée contre la cible (avantage de position).
    // Dépenser son déplacement pour se relever.
    // ---------------------------------------------------------------------------
    PRONE: {
        id: ConditionId.PRONE,
        name: "Prone",
        description: "You have been knocked down. Ranged attacks against you suffer −20; melee attacks against you gain +20. You must spend your full Movement to stand up.",
        maxStacks: 1,
        testModifier: {
            mod: -20,
            comps: ['ATHLETICS', 'DODGE'],
        },
        removal: ConditionRemoval.AUTO,
        blocksMovement: true,
    },

    // ---------------------------------------------------------------------------
    // STUNNED — Étourdi. Perd son Action ce tour.
    // Retire 1 pile à la fin de son tour.
    // ---------------------------------------------------------------------------
    STUNNED: {
        id: ConditionId.STUNNED,
        name: "Stunned",
        description: "You are dazed. You lose your Action each turn. Remove 1 stack at the end of your turn.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
        },
        removal: ConditionRemoval.TEST,
        removalTest: {
            comp: 'ENDURANCE',
        },
        fatiguedOnRemoval: true,
    },

    // ---------------------------------------------------------------------------
    // SURPRISED — Pris par surprise. Perd son tour complet.
    // Retiré automatiquement au début du prochain tour du personnage.
    // ---------------------------------------------------------------------------
    SURPRISED: {
        id: ConditionId.SURPRISED,
        name: "Surprised",
        description: "You have been caught off guard. You lose your turn entirely. This condition is automatically removed at the start of your next turn.",
        maxStacks: 1,
        removal: ConditionRemoval.AUTO,
        blocksAction: true,
        blocksMovement: true,
    },

    // ---------------------------------------------------------------------------
    // UNCONSCIOUS — Inconscient. Complètement hors de combat.
    // Les Blessures ne peuvent pas descendre en dessous de 0.
    // ---------------------------------------------------------------------------
    UNCONSCIOUS: {
        id: ConditionId.UNCONSCIOUS,
        name: "Unconscious",
        description: "You have lost consciousness and are completely helpless. You cannot take any actions and cannot be further Wounded beyond 0.",
        maxStacks: 1,
        removal: ConditionRemoval.NONE,
        blocksAction: true,
        blocksMovement: true,
    }

};
// #endregion
