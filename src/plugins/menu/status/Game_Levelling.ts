// $PluginCompiler TEW_Menus.js 10

// ----------------------

// File: Game_Levelling.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 15/08/2026
// Description: This file contains the implementation of the Game_Levelling class, which holds the advances and talents an actor is about to buy while levelling mode is active in the status menu. Nothing is written to the actor until the player confirms: the class only tracks pending purchases and the experience points they would consume, so that the whole session can be discarded at once. What may be bought at all is decided by the actor's career.

// ----------------------
// Imports
// ----------------------

import { Game_Actor } from "../../base/stats/Game_Actor";
import TEW from "../../_types/tew";

export type LevellingAdvance = {
    /** Displayed name of the characteristic or competence */
    name: string;
    /** Value before the advances */
    from: number;
    /** Value after the advances */
    to: number;
    /** Total experience cost of the advances */
    cost: number;
};

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Game_Levelling
//
// Pending characteristic and competence advances for a single levelling session

function Game_Levelling() {
    this.initialize.apply(this, arguments);
}

export default Game_Levelling.prototype = Object.create(Object.prototype);
Game_Levelling.prototype.constructor = Game_Levelling;

// Initializing the session
Game_Levelling.prototype.initialize = function() {
    this._actor = null;
    this.clear();
};

// Setting the actor. Pending advances belong to a single actor and are dropped on change
Game_Levelling.prototype.setActor = function(actor: Game_Actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.clear();
    }
};

// Dropping every pending advance
Game_Levelling.prototype.clear = function() {
    this._compAdvances = {}; // ID: number of pending advances
    this._statAdvances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._talentPurchases = []; // IDs of the talents about to be bought
    this._spentExp = 0;
};

// #region ====== Experience === //
// Experience points consumed by the pending advances
Game_Levelling.prototype.spentExp = function() {
    return this._spentExp;
};

// Experience points still available for new advances
Game_Levelling.prototype.remainingExp = function() {
    return this._actor ? this._actor.availableExp() - this._spentExp : 0;
};

// Whether anything is pending, i.e. whether exiting levelling mode needs a confirmation
Game_Levelling.prototype.hasAdvances = function() {
    return this._spentExp > 0;
};
// #endregion === Experience === //
// === //
// #region ====== Career restrictions === //
// Careers gate what experience may be spent on, and are expected to always be defined
Game_Levelling.prototype.canImproveStat = function(paramId: number) {
    return !!this._actor && this._actor.canImproveStat(paramId);
};

Game_Levelling.prototype.canImproveComp = function(compId: string) {
    return !!this._actor && this._actor.canImproveComp(compId);
};

Game_Levelling.prototype.canBuyTalent = function(talentId: string) {
    return !!this._actor && this._actor.canBuyTalent(talentId);
};
// #endregion === Career restrictions === //
// === //
// #region ====== Competences === //
// Number of pending advances for a competence
Game_Levelling.prototype.compAdvances = function(compId: string) {
    return this._compAdvances[compId] || 0;
};

// Competence value including pending advances
Game_Levelling.prototype.compValue = function(compId: string) {
    return this._actor.compAdvances(compId) + this.compAdvances(compId);
};

// Experience cost of the next competence advance
Game_Levelling.prototype.nextCompCost = function(compId: string) {
    return TEW.LEVELLING.competenceCost(this.compValue(compId));
};

// Whether the career allows the advance and the remaining experience covers it
Game_Levelling.prototype.canIncreaseComp = function(compId: string) {
    return this.canImproveComp(compId) && this.nextCompCost(compId) <= this.remainingExp();
};

// It is impossible to go under the actor's current value
Game_Levelling.prototype.canDecreaseComp = function(compId: string) {
    return this.compAdvances(compId) > 0;
};

// Buying one competence advance
Game_Levelling.prototype.increaseComp = function(compId: string) {
    if (!this.canIncreaseComp(compId)) {
        return false;
    }
    this._spentExp += this.nextCompCost(compId);
    this._compAdvances[compId] = this.compAdvances(compId) + 1;
    return true;
};

// Refunding one competence advance
Game_Levelling.prototype.decreaseComp = function(compId: string) {
    if (!this.canDecreaseComp(compId)) {
        return false;
    }
    this._compAdvances[compId] = this.compAdvances(compId) - 1;
    // After the decrement, the next advance is the one that was just refunded
    this._spentExp -= this.nextCompCost(compId);
    if (this._compAdvances[compId] === 0) {
        delete this._compAdvances[compId];
    }
    return true;
};
// #endregion === Competences === //
// === //
// #region ====== Characteristics === //
// Number of pending advances for a characteristic
Game_Levelling.prototype.statAdvances = function(paramId: number) {
    return this._statAdvances[paramId];
};

// Total number of advances, used to find the cost bracket
Game_Levelling.prototype.statAdvanceCount = function(paramId: number) {
    return this._actor.statAdvances(paramId) + this._statAdvances[paramId];
};

// Characteristic value including pending advances
Game_Levelling.prototype.statValue = function(paramId: number) {
    return this._actor.param(paramId) + this._statAdvances[paramId];
};

// Experience cost of the next characteristic advance
Game_Levelling.prototype.nextStatCost = function(paramId: number) {
    return TEW.LEVELLING.characteristicCost(this.statAdvanceCount(paramId));
};

// Whether the career allows the advance and the remaining experience covers it
Game_Levelling.prototype.canIncreaseStat = function(paramId: number) {
    return this.canImproveStat(paramId) && this.nextStatCost(paramId) <= this.remainingExp();
};

// It is impossible to go under the actor's current value
Game_Levelling.prototype.canDecreaseStat = function(paramId: number) {
    return this._statAdvances[paramId] > 0;
};

// Buying one characteristic advance
Game_Levelling.prototype.increaseStat = function(paramId: number) {
    if (!this.canIncreaseStat(paramId)) {
        return false;
    }
    this._spentExp += this.nextStatCost(paramId);
    this._statAdvances[paramId] += 1;
    return true;
};

// Refunding one characteristic advance
Game_Levelling.prototype.decreaseStat = function(paramId: number) {
    if (!this.canDecreaseStat(paramId)) {
        return false;
    }
    this._statAdvances[paramId] -= 1;
    // After the decrement, the next advance is the one that was just refunded
    this._spentExp -= this.nextStatCost(paramId);
    return true;
};
// #endregion === Characteristics === //
// === //
// #region ====== Talents === //
// Experience cost of a talent which has not been acquired yet
Game_Levelling.prototype.talentCost = function() {
    return TEW.LEVELLING.TALENT_COST;
};

// Whether a talent is about to be bought
Game_Levelling.prototype.isTalentBought = function(talentId: string) {
    return this._talentPurchases.indexOf(talentId) >= 0;
};

// Buying a talent twice is not implemented yet, so only new talents may be bought
Game_Levelling.prototype.canBuyMoreTalent = function(talentId: string) {
    return this.canBuyTalent(talentId)
        && !this.isTalentBought(talentId)
        && this.talentCost() <= this.remainingExp();
};

Game_Levelling.prototype.canRefundTalent = function(talentId: string) {
    return this.isTalentBought(talentId);
};

Game_Levelling.prototype.buyTalent = function(talentId: string) {
    if (!this.canBuyMoreTalent(talentId)) {
        return false;
    }
    this._talentPurchases.push(talentId);
    this._spentExp += this.talentCost();
    return true;
};

Game_Levelling.prototype.refundTalent = function(talentId: string) {
    if (!this.canRefundTalent(talentId)) {
        return false;
    }
    this._talentPurchases.splice(this._talentPurchases.indexOf(talentId), 1);
    this._spentExp -= this.talentCost();
    return true;
};

// Talent level including the purchase about to be made
Game_Levelling.prototype.talentValue = function(talentId: string) {
    return this._actor.talent(talentId) + (this.isTalentBought(talentId) ? 1 : 0);
};
// #endregion === Talents === //
// === //
// #region ====== Summary and commit === //
// Listing every pending advance, to be displayed in the confirmation window
Game_Levelling.prototype.summary = function() {
    const advances: LevellingAdvance[] = [];
    if (!this._actor) {
        return advances;
    }

    for (let paramId = 0; paramId < this._statAdvances.length; paramId++) {
        const pending = this._statAdvances[paramId];
        if (pending > 0) {
            const bought = this._actor.statAdvances(paramId);
            advances.push({
                name: TEW.CHARACTERS.STATS_VERBOSE[paramId],
                from: this._actor.param(paramId),
                to: this._actor.param(paramId) + pending,
                cost: TEW.LEVELLING.characteristicRangeCost(bought, bought + pending)
            });
        }
    }

    Object.keys(this._compAdvances)
        .sort((a, b) => TEW.DATABASE.COMPS.SET[a].name.localeCompare(TEW.DATABASE.COMPS.SET[b].name))
        .forEach(compId => {
            const bought = this._actor.compAdvances(compId);
            const pending = this.compAdvances(compId);
            advances.push({
                name: TEW.DATABASE.COMPS.SET[compId].name,
                from: bought,
                to: bought + pending,
                cost: TEW.LEVELLING.competenceRangeCost(bought, bought + pending)
            });
        });

    this._talentPurchases
        .slice()
        .sort((a, b) => TEW.DATABASE.TALENTS.SET[a].name.localeCompare(TEW.DATABASE.TALENTS.SET[b].name))
        .forEach(talentId => {
            const bought = this._actor.talent(talentId);
            advances.push({
                name: TEW.DATABASE.TALENTS.SET[talentId].name,
                from: bought,
                to: bought + 1,
                cost: this.talentCost()
            });
        });

    return advances;
};

// Writing every pending advance to the actor and consuming the experience points
Game_Levelling.prototype.apply = function() {
    if (!this._actor) {
        return;
    }
    for (let paramId = 0; paramId < this._statAdvances.length; paramId++) {
        this._actor.applyStatAdvances(paramId, this._statAdvances[paramId]);
    }
    Object.keys(this._compAdvances).forEach(compId => {
        this._actor.applyCompAdvances(compId, this._compAdvances[compId]);
    });
    this._talentPurchases.forEach(talentId => {
        this._actor.addTalent(talentId);
    });
    this._actor.spendExp(this._spentExp);
    this.clear();
};
// #endregion === Summary and commit === //
