// $PluginCompiler TEW_Menus.js

// ----------------------

// File : Window_StatusSpells.ts
// Author : Ersokili, 7evy, Sebibebi67
// Date : 03/05/2025
// Description : This file contains the implementation of the Window_StatusSpells class, which lists the spells an actor has memorised. While levelling mode is active, the spells their magical talents open and which are not memorised yet are added at the top of the list along with their price. Spells have no level, so they are bought and refunded with the confirmation key rather than with the horizontal arrows.

// ----------------------
// Imports
// ----------------------

import TEW from "../../../_types/tew";
import HalfWindow_List from "../../base/HalfWindow_List";

// ----------------------
// $StartCompilation
// ----------------------

function Window_StatusSpells() {
    this.initialize.apply(this, arguments);
}

Window_StatusSpells.LEFT_PADDING = 48;
Window_StatusSpells.NAME_COLUMN_WIDTH = 400;
Window_StatusSpells.COST_COLUMN_WIDTH = 120;

export default Window_StatusSpells.prototype = Object.create(HalfWindow_List.prototype);
Window_StatusSpells.prototype.constructor = Window_StatusSpells;

Window_StatusSpells.prototype.initialize = function() {
    this._levelling = null;
    this._levellingMode = false;
    this._spells = [];
    HalfWindow_List.prototype.initialize.call(this);
};

Window_StatusSpells.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.makeSpellsList();
        this.refresh();
    }
};

/**
 * Building the displayed list. Outside of levelling mode it only holds the memorised spells.
 * In levelling mode, the spells the actor's magical talents open and which are not memorised
 * yet are added at the top in alphabetical order, so that they may be bought.
 */
Window_StatusSpells.prototype.makeSpellsList = function() {
    if (!this._actor) {
        this._spells = [];
        this._maxItems = 0;
        return;
    }

    // [<internal name>, {<spell data>}]
    const knownSpells = TEW.DATABASE.SPELLS.ARRAY.filter(spell => this._actor.hasSpell(spell[0]));

    if (!this.isLevellingMode()) {
        this._spells = knownSpells;
    } else {
        const buyableSpells = this._levelling.buyableSpells()
            .map((spellId: string) => [spellId, TEW.DATABASE.SPELLS.SET[spellId]])
            .sort((a, b) => a[1].name.localeCompare(b[1].name));
        this._spells = buyableSpells.concat(knownSpells);
    }

    this._maxItems = this._spells.length;
};

Window_StatusSpells.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_StatusSpells.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = Window_StatusSpells.LEFT_PADDING;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;

    const spell = this.spellFromIndex(index);

    // Spell name
    this.changeTextColor(this.spellColor(spell[0]));
    this.drawText(spell[1].name, x, y, Window_StatusSpells.NAME_COLUMN_WIDTH);
    this.resetTextColor();

    // Price of a spell which is not memorised yet, nothing for the ones already known
    const costText = this.spellCostText(spell[0]);
    if (costText) {
        this.changeTextColor(this.spellColor(spell[0]));
        this.drawText(
            costText,
            x + Window_StatusSpells.NAME_COLUMN_WIDTH,
            y,
            Window_StatusSpells.COST_COLUMN_WIDTH,
            'right'
        );
        this.resetTextColor();
    }
};

Window_StatusSpells.prototype.spellFromIndex = function(index: number) {
    return this._spells[index];
};

Window_StatusSpells.prototype.select = function(index: number) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_spell_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

// #region ====== Levelling mode === //
/**
 * Links the window to the levelling session holding the pending purchases.
 */
Window_StatusSpells.prototype.setLevelling = function(levelling: any) {
    this._levelling = levelling;
    this.refresh();
};

/**
 * Enters or leaves levelling mode. The buyable spells appear and disappear with it, so the
 * selected spell is followed to its new index rather than left behind.
 */
Window_StatusSpells.prototype.setLevellingMode = function(active: boolean) {
    if (this._levellingMode === active) {
        return;
    }
    const selectedSpellId = this.index() >= 0 && this._spells[this.index()]
        ? this._spells[this.index()][0]
        : null;
    this._levellingMode = active;
    this.makeSpellsList();
    if (selectedSpellId) {
        const newIndex = this._spells.map(spell => spell[0]).indexOf(selectedSpellId);
        this.select(Math.min(Math.max(newIndex, 0), this.maxItems() - 1));
    }
    this.refresh();
};

Window_StatusSpells.prototype.isLevellingMode = function() {
    return !!this._levellingMode && !!this._levelling && !!this._actor;
};

/**
 * Price of a spell which is not memorised yet, and nothing for the ones already known.
 * The spells manifested by the Petty Magic talent cost no experience at all.
 */
Window_StatusSpells.prototype.spellCostText = function(spellId: string) {
    if (!this.isLevellingMode() || this._actor.hasSpell(spellId)) {
        return '';
    }
    const cost = this._levelling.nextSpellCost(spellId);
    return cost > 0 ? `${cost} ${TextManager.expA}` : TextManager.statusSpellFree;
};

/**
 * Green when the spell is about to be memorised, blue when it may be bought, and the usual
 * colour for the ones already known. Running out of experience does not change the colour.
 */
Window_StatusSpells.prototype.spellColor = function(spellId: string) {
    if (!this.isLevellingMode() || this._actor.hasSpell(spellId)) {
        return this.systemColor();
    }
    if (this._levelling.isSpellBought(spellId)) {
        return this.powerUpColor();
    }
    return this.levellingColor();
};

/**
 * Buys or refunds the selected spell. Spells have no level, so unlike every other levelling
 * window this one is driven by the confirmation key rather than by the horizontal arrows.
 */
Window_StatusSpells.prototype.changeSpell = function() {
    const spellId = this.spellFromIndex(this.index())[0];
    if (this._actor.hasSpell(spellId)) {
        this.playBuzzerSound();
        return;
    }
    const changed = this._levelling.isSpellBought(spellId)
        ? this._levelling.refundSpell(spellId)
        : this._levelling.buySpell(spellId);
    if (changed) {
        this.playOkSound();
        this.refresh();
        this.callHandler('levelling_change');
    } else {
        this.playBuzzerSound();
    }
};
// #endregion === Levelling mode === //

/**
 * Called when the process successfully completes.
 * In levelling mode the confirmation key buys and refunds spells instead of opening the
 * command window, which has nothing to offer on a spell that is not memorised yet.
 */
Window_StatusSpells.prototype.processOk = function() {
    if (!this.isCurrentItemEnabled()) {
        this.playBuzzerSound();
        return;
    }
    if (this.isLevellingMode() && this.index() >= 0) {
        this.updateInputData();
        this.changeSpell();
        return;
    }
    this.playOkSound();
    this.updateInputData();
    this.callOkHandler();
};
