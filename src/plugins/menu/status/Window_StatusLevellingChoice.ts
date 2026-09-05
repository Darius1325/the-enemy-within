// $PluginCompiler TEW_Menus.js 10

// ----------------------

// File: Window_StatusLevellingChoice.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 05/09/2026
// Description: This file contains the implementation of the Window_StatusLevellingChoice class, the picker opened when the player spends one of the grouped skill slots a career grants. Careers list some entries as `Skill (Any)`, which name a group rather than a specialisation: this window lists the specialisations that group still has on offer and binds the one the player confirms. It serves competences and talents alike, as the only difference between them is where the names and the current values are read from.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Window_StatusLevellingChoice
//
// Picker listing the specialisations one grouped skill slot may be filled with

function Window_StatusLevellingChoice() {
    this.initialize.apply(this, arguments);
}

Window_StatusLevellingChoice.MARGIN_Y = 60;
Window_StatusLevellingChoice.TITLE_HEIGHT = 48;
Window_StatusLevellingChoice.NAME_COLUMN_WIDTH = 400;
Window_StatusLevellingChoice.VALUE_COLUMN_WIDTH = 80;

export default Window_StatusLevellingChoice.prototype = Object.create(Window_Selectable.prototype);
Window_StatusLevellingChoice.prototype.constructor = Window_StatusLevellingChoice;

// Initializing the window, horizontally centered under the topbar
Window_StatusLevellingChoice.prototype.initialize = function() {
    this._actor = null;
    this._levelling = null;
    this._slotIndex = -1;
    this._specialisations = [];
    Window_Selectable.prototype.initialize.call(this,
        (Graphics.boxWidth - this.windowWidth()) / 2,
        Window_StatusLevellingChoice.MARGIN_Y,
        this.windowWidth(),
        this.windowHeight()
    );
    this.deactivate();
    this.hide();
};

Window_StatusLevellingChoice.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

// Linking the window to the levelling session holding the pending picks
Window_StatusLevellingChoice.prototype.setLevelling = function(levelling: any) {
    this._levelling = levelling;
    this.refresh();
};

/**
 * Opening the picker on one slot, and listing what that slot still has on offer.
 * The pool is the group minus whatever the career already grants and whatever another slot has
 * taken, so it may well be empty: the caller is expected to check before opening the window.
 * @param slotIndex index of the slot in the actor's list
 */
Window_StatusLevellingChoice.prototype.setSlot = function(slotIndex: number) {
    this._slotIndex = slotIndex;
    this._specialisations = this._levelling ? this._levelling.slotPool(slotIndex) : [];
    this.refresh();
    this.select(0);
};

Window_StatusLevellingChoice.prototype.slot = function() {
    return this._actor ? this._actor.anySlots()[this._slotIndex] : null;
};

Window_StatusLevellingChoice.prototype.slotIndex = function() {
    return this._slotIndex;
};

// Whether the slot picks a competence rather than a talent, which decides where names come from
Window_StatusLevellingChoice.prototype.isCompetenceSlot = function() {
    const slot = this.slot();
    return !!slot && slot.kind === 'comp';
};

Window_StatusLevellingChoice.prototype.specialisationFromIndex = function(index: number) {
    return this._specialisations[index];
};

// ID of the specialisation currently under the cursor
Window_StatusLevellingChoice.prototype.specialisation = function() {
    return this.specialisationFromIndex(this.index());
};

Window_StatusLevellingChoice.prototype.maxItems = function() {
    return this._specialisations.length;
};

Window_StatusLevellingChoice.prototype.maxCols = function() {
    return 1;
};

Window_StatusLevellingChoice.prototype.itemHeight = function() {
    return TEW.MENU.LINE_HEIGHT;
};

// The title names the group being picked from, and the list starts under it
Window_StatusLevellingChoice.prototype.itemRect = function(index: number) {
    const rect = Window_Selectable.prototype.itemRect.call(this, index);
    rect.y += Window_StatusLevellingChoice.TITLE_HEIGHT;
    return rect;
};

// The title takes a row's worth of room away from the list, which scrolls under it
Window_StatusLevellingChoice.prototype.maxPageRows = function() {
    const listHeight = this.contentsHeight() - Window_StatusLevellingChoice.TITLE_HEIGHT;
    return Math.max(1, Math.floor(listHeight / this.itemHeight()));
};

Window_StatusLevellingChoice.prototype.refresh = function() {
    if (!this.contents) {
        return;
    }
    this.contents.clear();
    this.drawTitle();
    this.drawAllItems();
};

// Name of the slot being filled, e.g. "Melee (Any)"
Window_StatusLevellingChoice.prototype.drawTitle = function() {
    const slot = this.slot();
    if (!slot) {
        return;
    }
    this.drawUnderlinedText(this._actor.anySlotName(slot), 0, 0, this.contentsWidth(), 'center');
};

/**
 * Drawing one specialisation, with the value the actor already holds on it.
 * Specialisations the character has advances in are offered like any other, so their value is
 * shown to make the choice an informed one.
 */
Window_StatusLevellingChoice.prototype.drawItem = function(index: number) {
    const rect = this.itemRect(index);
    const specialisationId = this.specialisationFromIndex(index);

    this.changeTextColor(this.systemColor());
    this.drawText(
        this.specialisationName(specialisationId),
        rect.x,
        rect.y,
        Window_StatusLevellingChoice.NAME_COLUMN_WIDTH,
        'left'
    );
    this.resetTextColor();

    const valueText = this.specialisationValueText(specialisationId);
    if (valueText) {
        this.drawText(
            valueText,
            rect.x + Window_StatusLevellingChoice.NAME_COLUMN_WIDTH,
            rect.y,
            Window_StatusLevellingChoice.VALUE_COLUMN_WIDTH,
            'right'
        );
    }
};

Window_StatusLevellingChoice.prototype.specialisationName = function(specialisationId: string) {
    return this.isCompetenceSlot()
        ? this._actor.compName(specialisationId)
        : TEW.DATABASE.TALENTS.SET[specialisationId].name;
};

// Advances already held on a competence, nothing for a talent the actor does not have
Window_StatusLevellingChoice.prototype.specialisationValueText = function(specialisationId: string) {
    if (!this.isCompetenceSlot()) {
        return '';
    }
    const advances = this._actor.compAdvances(specialisationId);
    return advances > 0 ? `${advances}` : '';
};

// Binding the slot to the selected specialisation, which the session holds until confirmation
Window_StatusLevellingChoice.prototype.processOk = function() {
    if (this.index() < 0 || !this.specialisation()) {
        this.playBuzzerSound();
        return;
    }
    this.updateInputData();
    if (this._levelling.pickSlot(this._slotIndex, this.specialisation())) {
        this.playOkSound();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};
