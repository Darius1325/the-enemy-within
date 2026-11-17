// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Levelling.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 15/08/2026
// Description: This file contains the experience costs used to buy advances, following the Advancement XP Costs table of the 5th edition rules (wfrp5e.pdf, p191). Every characteristic or competence advance adds +5 to its value, and costs more than the one before it: the price of an advance is read from the number of advances already taken. Talents have a flat price, and spells are priced in brackets of five spells already known in their pool.

// ----------------------
// Imports
// ----------------------

import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

// #region ====== COSTS === //
// Every advance raises a characteristic or a competence by this much
TEW.LEVELLING.ADVANCE_STEP = 5;

// Talents have a flat cost, and each one may only be taken once
TEW.LEVELLING.TALENT_COST = 100;

/**
 * A new spell is priced on the number of spells already known in its pool, in brackets of five:
 * up to 5 known, 6 to 10, 11 to 15, 16 to 20, and 21 and up. Each bracket costs one more time the
 * pool's base cost, 50 XP for Petty Magic and 100 XP for Arcane Magic (see Petty Magic, p123,
 * and Arcane Magic (Lore), p115, in wfrp5e.pdf).
 * The generic arcane spells count as lore spells "in all ways" (p242), so they share the arcane
 * pool with the caster's lore.
 */
TEW.LEVELLING.PETTY_SPELL_COST = 50;
TEW.LEVELLING.ARCANE_SPELL_COST = 100;
TEW.LEVELLING.SPELL_BRACKET_SIZE = 5;
TEW.LEVELLING.SPELL_LAST_BRACKET = 4; // 21 and up

// Learning Arcane Magic grants one spell of the chosen lore, as Petty Magic manifests Willpower bonus spells
TEW.LEVELLING.FREE_ARCANE_SPELLS = 1;

/**
 * Cost of each advance, indexed by the number of advances already taken. The rules list costs up
 * to +75 only, "for even the most ambitious campaigns", so nothing past the last entry may be bought.
 * The two 850 of the competence column (+40 and +45) are printed as such in the rulebook, and its
 * cumulative column agrees with them.
 */
TEW.LEVELLING.CHARACTERISTIC_COSTS = [
    125,   // +5
    175,   // +10
    250,   // +15
    350,   // +20
    500,   // +25
    700,   // +30
    950,   // +35
    1300,  // +40
    1800,  // +45
    2550,  // +50
    3600,  // +55
    5025,  // +60
    6950,  // +65
    9000,  // +70
    11250  // +75
];

TEW.LEVELLING.COMPETENCE_COSTS = [
    50,    // +5
    75,    // +10
    100,   // +15
    150,   // +20
    250,   // +25
    400,   // +30
    600,   // +35
    850,   // +40
    850,   // +45
    1700,  // +50
    2500,  // +55
    3500,  // +60
    4750,  // +65
    6500,  // +70
    8500   // +75
];
// #endregion === COSTS === //
// === //
// #region ====== COST COMPUTATION === //
/**
 * Number of advances a value stands for. Values are stored as points, so that tests keep reading
 * them directly; a value which is not a multiple of the step only counts its full advances.
 */
TEW.LEVELLING.advancesFromValue = function(value: number) {
    return Math.floor(Math.max(0, value) / TEW.LEVELLING.ADVANCE_STEP);
};

// Past the last listed advance there is no price, which no amount of experience can pay
TEW.LEVELLING.characteristicCost = function(advances: number) {
    const cost = TEW.LEVELLING.CHARACTERISTIC_COSTS[advances];
    return cost === undefined ? Infinity : cost;
};

TEW.LEVELLING.competenceCost = function(advances: number) {
    const cost = TEW.LEVELLING.COMPETENCE_COSTS[advances];
    return cost === undefined ? Infinity : cost;
};

TEW.LEVELLING.characteristicRangeCost = function(fromAdvances: number, toAdvances: number) {
    let total = 0;
    for (let advances = fromAdvances; advances < toAdvances; advances++) {
        total += TEW.LEVELLING.characteristicCost(advances);
    }
    return total;
};

TEW.LEVELLING.competenceRangeCost = function(fromAdvances: number, toAdvances: number) {
    let total = 0;
    for (let advances = fromAdvances; advances < toAdvances; advances++) {
        total += TEW.LEVELLING.competenceCost(advances);
    }
    return total;
};

/**
 * Bracket a number of known spells falls in. The first one covers up to 5 spells, so it holds
 * six values (0 through 5) where every following one holds five.
 * @param known number of spells already known in the pool
 */
TEW.LEVELLING.spellBracket = function(known: number) {
    if (known <= TEW.LEVELLING.SPELL_BRACKET_SIZE) {
        return 0;
    }
    return Math.min(
        Math.ceil(known / TEW.LEVELLING.SPELL_BRACKET_SIZE) - 1,
        TEW.LEVELLING.SPELL_LAST_BRACKET
    );
};

/**
 * Cost of one more spell in a pool
 * @param known number of spells already known in the pool
 * @param cost the pool's base cost, paid once per bracket
 */
TEW.LEVELLING.spellCost = function(known: number, cost: number) {
    return (TEW.LEVELLING.spellBracket(known) + 1) * cost;
};

/**
 * Total cost of every spell bought between two pool sizes
 * @param fromKnown number of spells already known in the pool
 * @param toKnown targeted number of spells
 * @param cost the pool's base cost, paid once per bracket
 */
TEW.LEVELLING.spellRangeCost = function(fromKnown: number, toKnown: number, cost: number) {
    let total = 0;
    for (let known = fromKnown; known < toKnown; known++) {
        total += TEW.LEVELLING.spellCost(known, cost);
    }
    return total;
};
// #endregion === COST COMPUTATION === //
