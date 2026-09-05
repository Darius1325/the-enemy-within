// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Levelling.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 15/08/2026
// Description: This file contains the experience costs used to buy advances. Characteristics and competences share the same bracket structure: the first bracket covers the first six advances (0 through 5), every following bracket covers five advances, and every advance past the last bracket costs the same. Costs are given per advance, and the bracket is determined by the number of advances already bought.

// ----------------------
// Imports
// ----------------------

import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

// #region ====== COST BRACKETS === //
TEW.LEVELLING.BRACKET_SIZE = 5;
TEW.LEVELLING.LAST_BRACKET = 14;

// Talents have a flat cost for now, as buying one several times is not implemented yet
TEW.LEVELLING.TALENT_COST = 100;

/**
 * Spells do not use the brackets below: their cost is a flat amount per bracket, and a bracket
 * is worth as many spells as the caster's relevant characteristic bonus.
 * Petty Magic uses the Willpower bonus and 50 XP, Arcane Magic the Intelligence bonus and
 * 100 XP (see Petty Magic and Arcane Magic (Lore) in wfrp4e.pdf, Chapter 4: Skills and Talents).
 */
TEW.LEVELLING.PETTY_SPELL_COST = 50;
TEW.LEVELLING.ARCANE_SPELL_COST = 100;

// Brackets: 0-5, 6-10, 11-15, ..., 66-70, 71+
TEW.LEVELLING.CHARACTERISTIC_COSTS = [
    25,  // 0 - 5
    30,  // 6 - 10
    40,  // 11 - 15
    50,  // 16 - 20
    70,  // 21 - 25
    90,  // 26 - 30
    120, // 31 - 35
    150, // 36 - 40
    190, // 41 - 45
    230, // 46 - 50
    280, // 51 - 55
    330, // 56 - 60
    390, // 61 - 65
    450, // 66 - 70
    520  // 71 +
];

TEW.LEVELLING.COMPETENCE_COSTS = [
    10,  // 0 - 5
    15,  // 6 - 10
    20,  // 11 - 15
    30,  // 16 - 20
    40,  // 21 - 25
    60,  // 26 - 30
    80,  // 31 - 35
    110, // 36 - 40
    140, // 41 - 45
    180, // 46 - 50
    220, // 51 - 55
    270, // 56 - 60
    320, // 61 - 65
    380, // 66 - 70
    440  // 71 +
];
// #endregion === COST BRACKETS === //
// === //
// #region ====== COST COMPUTATION === //
TEW.LEVELLING.bracket = function(advances: number) {
    return Math.min(
        Math.ceil((advances + 1) / TEW.LEVELLING.BRACKET_SIZE) - 1,
        TEW.LEVELLING.LAST_BRACKET
    );
};

TEW.LEVELLING.characteristicCost = function(advances: number) {
    return TEW.LEVELLING.CHARACTERISTIC_COSTS[TEW.LEVELLING.bracket(advances)];
};

TEW.LEVELLING.competenceCost = function(advances: number) {
    return TEW.LEVELLING.COMPETENCE_COSTS[TEW.LEVELLING.bracket(advances)];
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
 * Cost of one more spell in a pool.
 * The first bracket covers everything up to one bonus worth of spells, the second up to two,
 * and so on, so a caster with a Willpower bonus of 3 holding 3 petty spells still pays the
 * first bracket and pays the second for the next three.
 * A bonus of 0 would leave no bracket to fall in, so it counts as 1.
 * @param known number of spells already known in the pool
 * @param bonus Willpower bonus for petty spells, Intelligence bonus for arcane ones
 * @param cost XP cost of one bracket
 */
TEW.LEVELLING.spellCost = function(known: number, bonus: number, cost: number) {
    return Math.max(1, Math.ceil((known + 1) / Math.max(1, bonus))) * cost;
};

/**
 * Total cost of every spell bought between two pool sizes
 * @param fromKnown number of spells already known in the pool
 * @param toKnown targeted number of spells
 * @param bonus Willpower bonus for petty spells, Intelligence bonus for arcane ones
 * @param cost XP cost of one bracket
 */
TEW.LEVELLING.spellRangeCost = function(fromKnown: number, toKnown: number, bonus: number, cost: number) {
    let total = 0;
    for (let known = fromKnown; known < toKnown; known++) {
        total += TEW.LEVELLING.spellCost(known, bonus, cost);
    }
    return total;
};
// #endregion === COST COMPUTATION === //
