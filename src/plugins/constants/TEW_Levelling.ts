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
    if (advances <= TEW.LEVELLING.BRACKET_SIZE) {
        return 0;
    }
    return Math.min(
        Math.ceil(advances / TEW.LEVELLING.BRACKET_SIZE) - 1,
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
// #endregion === COST COMPUTATION === //
