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
        id: "ABLAZE",
        name: "Ablaze",
        description: "You are on fire! You suffer 1 Wound per stack at the start of your turn, ignoring Armour Points. You may spend your Action to attempt an Athletics Test (SL 0) to extinguish the flames.",
        maxStacks: Infinity,
        effect: {
            damagePerTurn: 1
        }
    },

    // ---------------------------------------------------------------------------
    // BLEEDING — Blessure ouverte qui saigne.
    // Reçoit 1 blessure par pile au début de son tour.
    // Un test de Premiers Soins SL≥stack retire toutes les piles.
    // ---------------------------------------------------------------------------
    BLEEDING: {
        id: "BLEEDING",
        name: "Bleeding",
        description: "You are bleeding from an open wound. You suffer 1 Wound per stack at the start of your turn. A First Aid Test with SL equal to or greater than your stacks removes all stacks.",
        maxStacks: Infinity,
        effect: {
            damagePerTurn: 1
        }
    },

    // ---------------------------------------------------------------------------
    // BROKEN — Psychologie brisée. Le personnage est terrorisé.
    // Doit fuir à chaque tour. Ne peut pas attaquer.
    // Retire 1 pile à chaque fin de tour hors de la portée de la source de peur.
    // ---------------------------------------------------------------------------
    BROKEN: {
        id: "BROKEN",
        name: "Broken",
        description: "Your will is shattered by fear. You must spend your Movement fleeing away from the source of your terror. You cannot take offensive actions. Remove 1 stack at the end of each turn spent out of range of the fear source.",
        maxStacks: Infinity,
        effect: {
            mustFlee: true,
            blocksAction: true,
            testModifier: -10
        }
    },

    // ---------------------------------------------------------------------------
    // ENTANGLED — Immobilisé par un filet, corde ou tendon.
    // Ne peut pas se déplacer. -20 à tous les tests.
    // ---------------------------------------------------------------------------
    ENTANGLED: {
        id: "ENTANGLED",
        name: "Entangled",
        description: "You are caught in a net, rope, or similar restraint. You cannot move voluntarily. You suffer −20 to all Tests. You may spend your Action attempting a Strength Test (SL 0) to free yourself.",
        maxStacks: 1,
        effect: {
            blocksMovement: true,
            testModifier: -20
        }
    },

    // ---------------------------------------------------------------------------
    // FATIGUED — Épuisé par l'effort ou la maladie.
    // -10 à tous les tests par pile.
    // ---------------------------------------------------------------------------
    FATIGUED: {
        id: "FATIGUED",
        name: "Fatigued",
        description: "You are exhausted. You suffer −10 to all Tests per stack. Resting for at least 1 hour removes 1 stack.",
        maxStacks: Infinity,
        effect: {
            testModifier: -10
        }
    },

    // ---------------------------------------------------------------------------
    // POISONED — Empoisonné.
    // -10 à tous les tests. Reçoit 1 blessure par tour.
    // Un Antidote ou test de Premiers Soins SL≥1 retire 1 pile.
    // ---------------------------------------------------------------------------
    POISONED: {
        id: "POISONED",
        name: "Poisoned",
        description: "Venom courses through your veins. You suffer −10 to all Tests and 1 Wound per stack at the start of your turn. An antidote or successful First Aid Test (SL 1+) removes 1 stack.",
        maxStacks: Infinity,
        effect: {
            testModifier: -10,
            damagePerTurn: 1
        }
    },

    // ---------------------------------------------------------------------------
    // PRONE — À terre.
    // -20 aux attaques à distance contre la cible (couverte).
    // +20 aux attaques de mêlée contre la cible (avantage de position).
    // Dépenser son déplacement pour se relever.
    // ---------------------------------------------------------------------------
    PRONE: {
        id: "PRONE",
        name: "Prone",
        description: "You have been knocked down. Ranged attacks against you suffer −20; melee attacks against you gain +20. You must spend your full Movement to stand up.",
        maxStacks: 1,
        effect: {
            blocksMovement: true,
            testModifier: -20
        }
    },

    // ---------------------------------------------------------------------------
    // STUNNED — Étourdi. Perd son Action ce tour.
    // Retire 1 pile à la fin de son tour.
    // ---------------------------------------------------------------------------
    STUNNED: {
        id: "STUNNED",
        name: "Stunned",
        description: "You are dazed. You lose your Action each turn. Remove 1 stack at the end of your turn.",
        maxStacks: Infinity,
        effect: {
            blocksAction: true,
            testModifier: -10
        }
    },

    // ---------------------------------------------------------------------------
    // SURPRISED — Pris par surprise. Perd son tour complet.
    // Retiré automatiquement au début du prochain tour du personnage.
    // ---------------------------------------------------------------------------
    SURPRISED: {
        id: "SURPRISED",
        name: "Surprised",
        description: "You have been caught off guard. You lose your turn entirely. This condition is automatically removed at the start of your next turn.",
        maxStacks: 1,
        removeOnTurnStart: true,
        effect: {
            blocksAction: true,
            blocksMovement: true
        }
    },

    // ---------------------------------------------------------------------------
    // UNCONSCIOUS — Inconscient. Complètement hors de combat.
    // Les Blessures ne peuvent pas descendre en dessous de 0.
    // ---------------------------------------------------------------------------
    UNCONSCIOUS: {
        id: "UNCONSCIOUS",
        name: "Unconscious",
        description: "You have lost consciousness and are completely helpless. You cannot take any actions and cannot be further Wounded beyond 0.",
        maxStacks: 1,
        effect: {
            incapacitated: true,
            blocksAction: true,
            blocksMovement: true
        }
    }

};
// #endregion
