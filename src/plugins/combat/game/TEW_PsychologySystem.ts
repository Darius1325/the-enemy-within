// $PluginCompiler TEW_Combat.js

// ----------------------

// File: TEW_PsychologySystem.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: WFRP4e Psychology — Fear, Terror and Frenzy.
//
// FEAR (Peur)
//   Triggered when a character encounters a Fear-rated creature or situation.
//   The character makes a Cool Test (= WILL-based skill).
//   On failure  → gains Broken condition equal to Fear rating.
//   On success  → immune to that source for the rest of the encounter.
//
// TERROR (Terreur)
//   Like Fear but harder. Test is at a negative modifier equal to Terror rating × 10.
//   On failure  → gains Broken condition AND a Disorder.
//   On success  → immune for the encounter but gains 1 Mental Corruption point.
//
// FRENZY (Frénésie)
//   A character with the Frenzy talent may choose to enter Frenzy.
//   In Frenzy :  +1 SL on all attacks, immune to Fear/Terror, cannot retreat or use ranged.
//   Frenzy ends when no enemies remain in sight.
//
// Reference: WFRP4e Core Rulebook p.190-191

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

// ---------------------------------------------------------------------------
// Initialisation
// ---------------------------------------------------------------------------

TEW.MEMORY.psychologyInitMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
    TEW.MEMORY.psychologyInitMembers.call(this);
    /** Set of source IDs the battler is currently immune to (after passing a Fear/Terror test) */
    this._fearImmunity = new Set();
    /** Whether the battler is in Frenzy state */
    this._inFrenzy = false;
};

// ---------------------------------------------------------------------------
// FEAR
// ---------------------------------------------------------------------------

/**
 * Trigger a Fear test for this battler.
 *
 * @param fearRating   Fear rating of the source (1–5). Determines Broken stacks on failure.
 * @param sourceId     Unique string identifying the fear source (for immunity tracking).
 * @param hidden       If true, the dice roll is not displayed.
 * @returns            true if the test was passed (or already immune).
 */
Game_BattlerBase.prototype.resolveFearTest = function(
    fearRating: number,
    sourceId: string,
    hidden: boolean = false
): boolean {
    // Already immune to this specific source?
    if (this._fearImmunity.has(sourceId)) return true;

    // Frenzied characters are immune to Fear
    if (this._inFrenzy) return true;

    const test = TEW.DICE.skillTest(this, "COOL", 0, hidden);

    if (test.success) {
        // Immune to this source for the rest of the encounter
        this._fearImmunity.add(sourceId);
        return true;
    } else {
        // Apply Broken condition equal to Fear rating
        this.addCondition("BROKEN", fearRating);
        return false;
    }
};

// ---------------------------------------------------------------------------
// TERROR
// ---------------------------------------------------------------------------

/**
 * Trigger a Terror test for this battler.
 * Terror = Fear with an additional penalty and a Disorder on failure.
 *
 * @param terrorRating   Terror rating (1–5). Modifier = −terrorRating × 10.
 * @param sourceId       Unique string identifying the terror source.
 * @param hidden         If true, the dice roll is not displayed.
 * @returns              true if the test was passed.
 */
Game_BattlerBase.prototype.resolveTerrorTest = function(
    terrorRating: number,
    sourceId: string,
    hidden: boolean = false
): boolean {
    if (this._fearImmunity.has(sourceId)) return true;
    if (this._inFrenzy) return true;

    const modifier = -terrorRating * 10;
    const test = TEW.DICE.skillTest(this, "COOL", modifier, hidden);

    if (test.success) {
        this._fearImmunity.add(sourceId);
        // Even on success, witnessing true Terror leaves a mark
        if (this.isActor && this.isActor()) {
            (this as any).gainMentalCorruption(1);
        }
        return true;
    } else {
        // Broken stacks = Terror rating
        this.addCondition("BROKEN", terrorRating);
        // Also gain a mental disorder from the trauma
        if (this.isActor && this.isActor()) {
            (this as any)._rollCorruptionEntry(false);
        }
        return false;
    }
};

// ---------------------------------------------------------------------------
// FRENZY
// ---------------------------------------------------------------------------

/**
 * Enter Frenzy state (requires Frenzy talent or special ability).
 * While frenzied, the character is immune to Fear/Terror and gains +1 SL on attacks.
 */
Game_BattlerBase.prototype.enterFrenzy = function(): void {
    this._inFrenzy = true;
    // Clear any Broken condition — frenzy overrides fear
    this.clearCondition("BROKEN");
};

/**
 * Exit Frenzy state (automatically called when no enemies are visible).
 * After frenzy ends, gain Fatigued 1.
 */
Game_BattlerBase.prototype.exitFrenzy = function(): void {
    if (!this._inFrenzy) return;
    this._inFrenzy = false;
    // Frenzy crash — gain Fatigued
    this.addCondition("FATIGUED", 1);
};

/**
 * Whether this battler is currently in Frenzy.
 */
Game_BattlerBase.prototype.isInFrenzy = function(): boolean {
    return this._inFrenzy;
};

// ---------------------------------------------------------------------------
// End-of-encounter cleanup
// ---------------------------------------------------------------------------

/**
 * Clear fear immunity tracker at the end of combat.
 * Called by BattleManager when the encounter ends.
 */
Game_BattlerBase.prototype.clearFearImmunity = function(): void {
    this._fearImmunity.clear();
};

// ---------------------------------------------------------------------------
// Hook into BattleManager.endBattle to auto-cleanup
// ---------------------------------------------------------------------------

TEW.MEMORY.psychologyEndBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result: number) {
    TEW.MEMORY.psychologyEndBattle.call(this, result);
    // Clear fear immunity for all battlers after the encounter
    const allBattlers = [
        ...$gamePartyTs.members(),
        ...$gameTroopTs.members()
    ];
    for (const battler of allBattlers) {
        if (battler.clearFearImmunity) battler.clearFearImmunity();
        if (battler.isInFrenzy?.()) battler.exitFrenzy();
    }
};
