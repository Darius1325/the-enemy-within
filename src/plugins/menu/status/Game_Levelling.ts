// $PluginCompiler TEW_Menus.js 10

// ----------------------

// File: Game_Levelling.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 15/08/2026
// Description: This file contains the implementation of the Game_Levelling class, which holds the advances, talents and spells an actor is about to buy while levelling mode is active in the status menu. Nothing is written to the actor until the player confirms: the class only tracks pending purchases and the experience points they would consume, so that the whole session can be discarded at once. What may be bought at all is decided by the actor's career, and for spells by the magical talents they hold or are about to buy.

// ----------------------
// Imports
// ----------------------

import { SpellDomain } from "../../_types/enum";
import { Game_Actor } from "../../base/stats/Game_Actor";
import TEW from "../../_types/tew";

export type LevellingAdvance = {
    /** Displayed name of the characteristic, competence, talent or spell */
    name: string;
    /** Value before the advances */
    from: number;
    /** Value after the advances */
    to: number;
    /** Total experience cost of the advances */
    cost: number;
    /** Displayed in place of the two values above, for purchases which have no level */
    text?: string;
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
    this._spellPurchases = []; // IDs of the spells about to be memorised, in purchase order
    this._spentExp = 0;
};

// #region ====== Experience === //
/**
 * Experience points consumed by the pending advances.
 * Everything but spells is accumulated as it is bought, since each purchase has a cost of its
 * own. Spells share a cost bracket per pool, so their total is replayed from the purchase list
 * instead, which keeps it right whichever spell is refunded.
 */
Game_Levelling.prototype.spentExp = function() {
    return this._spentExp + this.spellExp();
};

// Experience points still available for new advances
Game_Levelling.prototype.remainingExp = function() {
    return this._actor ? this._actor.availableExp() - this.spentExp() : 0;
};

// Whether anything is pending, i.e. whether exiting levelling mode needs a confirmation
Game_Levelling.prototype.hasAdvances = function() {
    return this.spentExp() > 0;
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
    // A refunded magical talent takes the spells it opened along with it
    this.dropUnavailableSpells();
    return true;
};

// Talent level including the purchase about to be made
Game_Levelling.prototype.talentValue = function(talentId: string) {
    return this._actor.talent(talentId) + (this.isTalentBought(talentId) ? 1 : 0);
};
// #endregion === Talents === //
// === //
// #region ====== Spells === //
/**
 * Whether a spell domain is open, counting the magical talents about to be bought.
 * The bare Arcane Magic talent stands for the Arcane Lore of the actor's wind, so buying it
 * opens the generic arcane spells and that lore's own at once.
 */
Game_Levelling.prototype.canCastDomain = function(domain: SpellDomain) {
    if (!this._actor) {
        return false;
    }
    if (this._actor.canCastDomain(domain)) {
        return true;
    }
    if (domain === SpellDomain.PETTY) {
        return this.isTalentBought(TEW.MAGIC.PETTY_TALENT);
    }
    if (!this.isTalentBought(TEW.MAGIC.ARCANE_TALENT) || !this._actor.arcaneTalent()) {
        return false;
    }
    return domain === SpellDomain.ARCANE
        || TEW.MAGIC.WIND_DOMAINS[this._actor.wind()] === domain;
};

// IDs of the spells which may be memorised, i.e. open and not known or pending yet
Game_Levelling.prototype.buyableSpells = function() {
    if (!this._actor) {
        return [];
    }
    return TEW.DATABASE.SPELLS.IDS.filter(spellId =>
        !this._actor.hasSpell(spellId)
        && this.canCastDomain(TEW.DATABASE.SPELLS.SET[spellId].domain));
};

// Cost pool a spell is priced in
Game_Levelling.prototype.spellPool = function(spellId: string) {
    return TEW.MAGIC.spellPool(TEW.DATABASE.SPELLS.SET[spellId].domain);
};

/**
 * Petty spells manifested by the Petty Magic talent and not picked yet, counting the talent
 * about to be bought. They cost nothing, and are spent oldest first.
 */
Game_Levelling.prototype.totalFreePettySpells = function() {
    const granted = this.isTalentBought(TEW.MAGIC.PETTY_TALENT)
        ? this._actor.paramBonus('WILL')
        : 0;
    return this._actor.freePettySpells() + granted;
};

Game_Levelling.prototype.freePettySpells = function() {
    const pending = this._spellPurchases
        .filter((spellId: string) => this.spellPool(spellId) === TEW.MAGIC.PETTY_POOL)
        .length;
    return Math.max(0, this.totalFreePettySpells() - pending);
};

// Number of spells in a pool, including the ones about to be memorised
Game_Levelling.prototype.spellPoolSize = function(pool: string) {
    const pending = this._spellPurchases
        .filter((spellId: string) => this.spellPool(spellId) === pool)
        .length;
    return this._actor.spellsInPool(pool).length + pending;
};

// Experience cost of the next spell of a pool
Game_Levelling.prototype.nextSpellCost = function(spellId: string) {
    const pool = this.spellPool(spellId);
    return this._actor.spellCost(pool, this.spellPoolSize(pool), this.freePettySpells());
};

/**
 * Total cost of the pending spells.
 * A spell's cost depends on how many are already known in its pool, so the whole list is
 * replayed in purchase order rather than accumulated.
 */
Game_Levelling.prototype.spellExp = function() {
    if (!this._actor) {
        return 0;
    }
    return this.spellCosts().reduce((total: number, cost: number) => total + cost, 0);
};

// Cost of each pending spell, in purchase order, as the confirmation summary displays them
Game_Levelling.prototype.spellCosts = function() {
    const poolSizes: Record<string, number> = {};
    let free = this.totalFreePettySpells();
    return this._spellPurchases.map((spellId: string) => {
        const pool = this.spellPool(spellId);
        if (poolSizes[pool] === undefined) {
            poolSizes[pool] = this._actor.spellsInPool(pool).length;
        }
        const cost = this._actor.spellCost(pool, poolSizes[pool], free);
        if (pool === TEW.MAGIC.PETTY_POOL && free > 0) {
            free--;
        }
        poolSizes[pool]++;
        return cost;
    });
};

Game_Levelling.prototype.isSpellBought = function(spellId: string) {
    return this._spellPurchases.indexOf(spellId) >= 0;
};

Game_Levelling.prototype.canBuySpell = function(spellId: string) {
    return !!this._actor
        && !this._actor.hasSpell(spellId)
        && !this.isSpellBought(spellId)
        && this.canCastDomain(TEW.DATABASE.SPELLS.SET[spellId].domain)
        && this.nextSpellCost(spellId) <= this.remainingExp();
};

Game_Levelling.prototype.canRefundSpell = function(spellId: string) {
    return this.isSpellBought(spellId);
};

Game_Levelling.prototype.buySpell = function(spellId: string) {
    if (!this.canBuySpell(spellId)) {
        return false;
    }
    this._spellPurchases.push(spellId);
    return true;
};

Game_Levelling.prototype.refundSpell = function(spellId: string) {
    if (!this.canRefundSpell(spellId)) {
        return false;
    }
    this._spellPurchases.splice(this._spellPurchases.indexOf(spellId), 1);
    return true;
};

// Dropping the pending spells whose domain is no longer open, after a talent is refunded
Game_Levelling.prototype.dropUnavailableSpells = function() {
    this._spellPurchases = this._spellPurchases.filter((spellId: string) =>
        this.canCastDomain(TEW.DATABASE.SPELLS.SET[spellId].domain));
};
// #endregion === Spells === //
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
        .sort((a, b) => this._actor.compName(a).localeCompare(this._actor.compName(b)))
        .forEach(compId => {
            const bought = this._actor.compAdvances(compId);
            const pending = this.compAdvances(compId);
            advances.push({
                name: this._actor.compName(compId),
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

    // Spells keep their purchase order, as each one is priced by how many came before it
    const spellCosts = this.spellCosts();
    this._spellPurchases.forEach((spellId: string, index: number) => {
        advances.push({
            name: TEW.DATABASE.SPELLS.SET[spellId].name,
            from: 0,
            to: 0,
            cost: spellCosts[index],
            text: TextManager.statusSpellLearned
        });
    });

    return advances;
};

/**
 * Writing every pending advance to the actor and consuming the experience points.
 * Talents are applied before spells, so that the free petty spells the Petty Magic talent
 * manifests are already granted when the spells bought with them are memorised.
 */
Game_Levelling.prototype.apply = function() {
    if (!this._actor) {
        return;
    }
    const spentExp = this.spentExp();
    for (let paramId = 0; paramId < this._statAdvances.length; paramId++) {
        this._actor.applyStatAdvances(paramId, this._statAdvances[paramId]);
    }
    Object.keys(this._compAdvances).forEach(compId => {
        this._actor.applyCompAdvances(compId, this._compAdvances[compId]);
    });
    this._talentPurchases.forEach(talentId => {
        this._actor.addTalent(talentId);
    });
    this._spellPurchases.forEach((spellId: string) => {
        this._actor.learnSpell(spellId, this.spellPool(spellId) === TEW.MAGIC.PETTY_POOL);
    });
    this._actor.spendExp(spentExp);
    this.clear();
};
// #endregion === Summary and commit === //
