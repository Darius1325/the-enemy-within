// $PluginCompiler TEW_Combat.js

// ----------------------

// File: TEW_ConditionsSystem.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Runtime logic for WFRP4e Conditions.
// Conditions are tracked per-battler as a Record<conditionId, stacks>.
// Methods are attached to Game_BattlerBase.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

// ---------------------------------------------------------------------------
// Initialisation des conditions sur chaque combattant
// ---------------------------------------------------------------------------

TEW.MEMORY.conditionsInitMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
    TEW.MEMORY.conditionsInitMembers.call(this);
    /** Record<conditionId, stacks> */
    this._conditions = {};
};

// ---------------------------------------------------------------------------
// Accès en lecture
// ---------------------------------------------------------------------------

/**
 * Retourne le nombre de piles de la condition donnée (0 si absente).
 */
Game_BattlerBase.prototype.conditionStacks = function(conditionId: string): number {
    return this._conditions[conditionId] || 0;
};

/**
 * Vrai si le battler a au moins 1 pile de cette condition.
 */
Game_BattlerBase.prototype.hasCondition = function(conditionId: string): boolean {
    return this.conditionStacks(conditionId) > 0;
};

/**
 * Retourne toutes les conditions actives sous forme [{id, stacks}].
 */
Game_BattlerBase.prototype.activeConditions = function(): { id: string; stacks: number }[] {
    return Object.entries(this._conditions)
        .filter(([, stacks]) => stacks > 0)
        .map(([id, stacks]) => ({ id, stacks }));
};

// ---------------------------------------------------------------------------
// Modification des piles
// ---------------------------------------------------------------------------

/**
 * Ajoute `amount` piles à une condition (respecte maxStacks).
 * Crée la condition si elle n'existe pas encore.
 */
Game_BattlerBase.prototype.addCondition = function(conditionId: string, amount: number = 1): void {
    const condDef = TEW.DATABASE.CONDITIONS[conditionId];
    if (!condDef) return;

    const current = this.conditionStacks(conditionId);
    const max = condDef.maxStacks === Infinity ? Number.MAX_SAFE_INTEGER : condDef.maxStacks;
    this._conditions[conditionId] = Math.min(current + amount, max);
};

/**
 * Retire `amount` piles d'une condition. Si le résultat est ≤ 0, retire la condition.
 */
Game_BattlerBase.prototype.removeCondition = function(conditionId: string, amount: number = 1): void {
    const current = this.conditionStacks(conditionId);
    const next = current - amount;
    if (next <= 0) {
        delete this._conditions[conditionId];
    } else {
        this._conditions[conditionId] = next;
    }
};

/**
 * Retire entièrement une condition (toutes ses piles).
 */
Game_BattlerBase.prototype.clearCondition = function(conditionId: string): void {
    delete this._conditions[conditionId];
};

/**
 * Retire toutes les conditions du battler.
 */
Game_BattlerBase.prototype.clearAllConditions = function(): void {
    this._conditions = {};
};

// ---------------------------------------------------------------------------
// Effets au début du tour (dégâts de saignement, feu, poison)
// ---------------------------------------------------------------------------

/**
 * Appelé au début du tour du battler.
 * Applique les dégâts par tour de toutes les conditions actives.
 * Retire les conditions avec removeOnTurnStart = true (ex. Surprised).
 * Retourne le total de blessures infligées (pour affichage).
 */
Game_BattlerBase.prototype.applyConditionsTurnStart = function(): number {
    let totalDamage = 0;
    const toRemove: string[] = [];

    for (const [condId, stacks] of Object.entries(this._conditions)) {
        const condDef = TEW.DATABASE.CONDITIONS[condId];
        if (!condDef) continue;

        // Dégâts par pile
        if (condDef.effect.damagePerTurn) {
            totalDamage += condDef.effect.damagePerTurn * stacks;
        }

        // Conditions auto-retirées au début du tour
        if (condDef.removeOnTurnStart) {
            toRemove.push(condId);
        }
    }

    toRemove.forEach(id => this.clearCondition(id));

    if (totalDamage > 0) {
        this.gainHp(-totalDamage);
    }

    return totalDamage;
};

// ---------------------------------------------------------------------------
// Bonus/malus de test de compétence cumulés
// ---------------------------------------------------------------------------

/**
 * Retourne le modificateur total de test dû aux conditions actives.
 * (sommation des testModifier * stacks pour chaque condition active)
 */
Game_BattlerBase.prototype.conditionTestModifier = function(): number {
    let mod = 0;
    for (const [condId, stacks] of Object.entries(this._conditions)) {
        const condDef = TEW.DATABASE.CONDITIONS[condId];
        if (condDef?.effect.testModifier) {
            mod += condDef.effect.testModifier * stacks;
        }
    }
    return mod;
};

/**
 * Vrai si le battler ne peut pas agir à cause d'une condition active.
 */
Game_BattlerBase.prototype.isBlockedByCondition = function(): boolean {
    for (const [condId] of Object.entries(this._conditions)) {
        const condDef = TEW.DATABASE.CONDITIONS[condId];
        if (condDef?.effect.blocksAction || condDef?.effect.incapacitated) {
            return true;
        }
    }
    return false;
};

/**
 * Vrai si le battler ne peut pas se déplacer à cause d'une condition active.
 */
Game_BattlerBase.prototype.isMovementBlockedByCondition = function(): boolean {
    for (const [condId] of Object.entries(this._conditions)) {
        const condDef = TEW.DATABASE.CONDITIONS[condId];
        if (condDef?.effect.blocksMovement || condDef?.effect.incapacitated) {
            return true;
        }
    }
    return false;
};

/**
 * Vrai si le battler doit fuir (Broken condition).
 */
Game_BattlerBase.prototype.mustFleeDueToCondition = function(): boolean {
    for (const [condId] of Object.entries(this._conditions)) {
        const condDef = TEW.DATABASE.CONDITIONS[condId];
        if (condDef?.effect.mustFlee) {
            return true;
        }
    }
    return false;
};
