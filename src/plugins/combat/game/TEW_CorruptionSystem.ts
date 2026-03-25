// $PluginCompiler TEW_Combat.js

// ----------------------

// File: TEW_CorruptionSystem.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Runtime logic for the Corruption & Mutation system.
//
// Each PC tracks :
//   - physicalCorruption  : points of physical taint accumulated
//   - mentalCorruption    : points of mental taint accumulated
//   - mutations           : string[] of active mutation IDs
//   - disorders           : string[] of active disorder IDs
//
// Corruption Threshold = TOUG bonus + WILL bonus (standard WFRP4e rule).
// Exceeding the threshold triggers a Challenging Endurance test.
// On failure, roll on the appropriate table and gain a Mutation/Disorder.
// On success, reset the excess corruption back to threshold.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { CorruptionEntry } from "../../_types/corruption";

// ----------------------
// $StartCompilation
// ----------------------

// ---------------------------------------------------------------------------
// Initialisation sur chaque acteur
// ---------------------------------------------------------------------------

TEW.MEMORY.corruptionInitMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
    TEW.MEMORY.corruptionInitMembers.call(this);
    this._physicalCorruption = 0;
    this._mentalCorruption   = 0;
    this._mutations          = [];  // string[] of CorruptionEntry IDs
    this._disorders          = [];  // string[] of CorruptionEntry IDs
};

// ---------------------------------------------------------------------------
// Seuil de corruption (TOUG bonus + WILL bonus)
// ---------------------------------------------------------------------------

Game_Actor.prototype.corruptionThreshold = function(): number {
    return TEW.DICE.bonus(this.paramByName("TOUG")) + TEW.DICE.bonus(this.paramByName("WILL"));
};

// ---------------------------------------------------------------------------
// Accès en lecture
// ---------------------------------------------------------------------------

Game_Actor.prototype.physicalCorruption = function(): number {
    return this._physicalCorruption;
};

Game_Actor.prototype.mentalCorruption = function(): number {
    return this._mentalCorruption;
};

Game_Actor.prototype.totalCorruption = function(): number {
    return this._physicalCorruption + this._mentalCorruption;
};

Game_Actor.prototype.mutations = function(): string[] {
    return this._mutations;
};

Game_Actor.prototype.disorders = function(): string[] {
    return this._disorders;
};

Game_Actor.prototype.hasMutation = function(id: string): boolean {
    return this._mutations.includes(id);
};

Game_Actor.prototype.hasDisorder = function(id: string): boolean {
    return this._disorders.includes(id);
};

/**
 * Cumulated stat modifiers from all active mutations and disorders.
 */
Game_Actor.prototype.corruptionStatModifier = function(statId: string): number {
    const allEntries = [
        ...(TEW.DATABASE.CORRUPTION?.MUTATIONS || []),
        ...(TEW.DATABASE.CORRUPTION?.DISORDERS || [])
    ] as CorruptionEntry[];

    const allIds = [...this._mutations, ...this._disorders];
    return allIds.reduce((total: number, id: string) => {
        const entry = allEntries.find((e: CorruptionEntry) => e.id === id);
        return total + (entry?.statModifier?.[statId] || 0);
    }, 0);
};

// ---------------------------------------------------------------------------
// Gain de corruption
// ---------------------------------------------------------------------------

/**
 * Add physical corruption points.
 * Triggers a threshold check automatically.
 * @param amount   Points to add (default 1)
 * @param source   Optional key from TEW.DATABASE.CORRUPTION.SOURCES for display
 */
Game_Actor.prototype.gainPhysicalCorruption = function(amount: number = 1, source?: string): void {
    this._physicalCorruption += amount;
    this._checkCorruptionThreshold(true);
};

/**
 * Add mental corruption points.
 * Triggers a threshold check automatically.
 */
Game_Actor.prototype.gainMentalCorruption = function(amount: number = 1, source?: string): void {
    this._mentalCorruption += amount;
    this._checkCorruptionThreshold(false);
};

// ---------------------------------------------------------------------------
// Vérification du seuil
// ---------------------------------------------------------------------------

Game_Actor.prototype._checkCorruptionThreshold = function(physical: boolean): void {
    const threshold = this.corruptionThreshold();
    const current   = physical ? this._physicalCorruption : this._mentalCorruption;

    if (current < threshold) return;

    // Challenging (+0) Endurance test
    const enduranceValue = this.comp("ENDURANCE") || this.paramByName("TOUG");
    const test = TEW.DICE.skillTest(this, "ENDURANCE", 0, false);

    if (test.success) {
        // Success : reset excess back to threshold
        if (physical) {
            this._physicalCorruption = Math.min(this._physicalCorruption, threshold - 1);
        } else {
            this._mentalCorruption = Math.min(this._mentalCorruption, threshold - 1);
        }
    } else {
        // Failure : roll a mutation or disorder
        this._rollCorruptionEntry(physical);
        // Reset corruption after gaining mutation/disorder
        if (physical) {
            this._physicalCorruption = 0;
        } else {
            this._mentalCorruption = 0;
        }
    }
};

// ---------------------------------------------------------------------------
// Tirage d'une mutation / désordre
// ---------------------------------------------------------------------------

Game_Actor.prototype._rollCorruptionEntry = function(physical: boolean): void {
    const table = physical
        ? (TEW.DATABASE.CORRUPTION?.MUTATIONS || [])
        : (TEW.DATABASE.CORRUPTION?.DISORDERS || []);

    if (table.length === 0) return;

    // Roll 1d10 and map to table index (wrap around if table < 10 entries)
    const roll  = TEW.DICE.roll(10) - 1;
    const entry = (table as CorruptionEntry[])[roll % table.length];
    if (!entry) return;

    if (physical) {
        if (!this._mutations.includes(entry.id)) {
            this._mutations.push(entry.id);
        }
        // Apply any combat conditions that come with the mutation
        if (entry.combatConditions) {
            for (const [condId, stacks] of Object.entries(entry.combatConditions)) {
                this.addCondition(condId, stacks as number);
            }
        }
    } else {
        if (!this._disorders.includes(entry.id)) {
            this._disorders.push(entry.id);
        }
    }
};

// ---------------------------------------------------------------------------
// Guérison de corruption (Shallya's Mercy, rituals, etc.)
// ---------------------------------------------------------------------------

/**
 * Reduce physical corruption by `amount`.
 */
Game_Actor.prototype.healPhysicalCorruption = function(amount: number = 1): void {
    this._physicalCorruption = Math.max(0, this._physicalCorruption - amount);
};

/**
 * Reduce mental corruption by `amount`.
 */
Game_Actor.prototype.healMentalCorruption = function(amount: number = 1): void {
    this._mentalCorruption = Math.max(0, this._mentalCorruption - amount);
};

/**
 * Remove a specific mutation permanently.
 */
Game_Actor.prototype.removeMutation = function(id: string): void {
    this._mutations = this._mutations.filter((m: string) => m !== id);
};

/**
 * Remove a specific disorder permanently.
 */
Game_Actor.prototype.removeDisorder = function(id: string): void {
    this._disorders = this._disorders.filter((d: string) => d !== id);
};
