// $PluginCompiler TEW_Menus.js 10

// ----------------------

// File: Window_StatusLevellingSummary.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 15/08/2026
// Description: This file contains the implementation of the Window_StatusLevellingSummary class, the confirmation prompt displayed when the player leaves levelling mode with pending advances. It shows a scrollable list of every advance about to be bought, with the Cancel, Confirm and Discard commands anchored in a single selectable row at the bottom of the window. Left and right arrows move the selection between those three commands; up and down arrows leave the selection alone and scroll the list above instead.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { LevellingAdvance } from "./Game_Levelling";

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Window_StatusLevellingSummary
//
// Confirmation prompt: a scrollable summary of the pending advances, with the
// Cancel/Confirm/Discard commands in a single selectable row at the bottom

function Window_StatusLevellingSummary() {
    this.initialize.apply(this, arguments);
}

Window_StatusLevellingSummary.MARGIN_Y = 60;
Window_StatusLevellingSummary.NAME_COLUMN_WIDTH = 300;
Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH = 60;
Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH = 30;
Window_StatusLevellingSummary.COST_COLUMN_WIDTH = 130;
// Room taken by the two values and the arrow between them, or by a label drawn in their place
Window_StatusLevellingSummary.VALUES_WIDTH = 150; // 2 * value column + arrow column
// Gap left between the last visible row of the list and the command row below it
Window_StatusLevellingSummary.LIST_BOTTOM_PADDING = 20;

export default Window_StatusLevellingSummary.prototype = Object.create(Window_HorzCommand.prototype);
Window_StatusLevellingSummary.prototype.constructor = Window_StatusLevellingSummary;

// Initializing the window, horizontally centered under the topbar
Window_StatusLevellingSummary.prototype.initialize = function() {
    this._levelling = null;
    this._advances = [];
    this._listScroll = 0;
    Window_HorzCommand.prototype.initialize.call(this,
        (Graphics.boxWidth - this.windowWidth()) / 2,
        Window_StatusLevellingSummary.MARGIN_Y
    );
};

// Linking the window to the levelling session holding the pending advances
Window_StatusLevellingSummary.prototype.setLevelling = function(levelling: any) {
    this._levelling = levelling;
    this.refreshAdvances();
};

// Rebuilding the list, to be called every time the window is displayed
Window_StatusLevellingSummary.prototype.refreshAdvances = function() {
    this._advances = this._levelling ? this._levelling.summary() : [];
    this._listScroll = 0;
    this.refresh();
};

// #region ====== Bottom command row === //
// Cancel goes back to levelling mode keeping every pending advance, same as the cancel handler
Window_StatusLevellingSummary.prototype.makeCommandList = function() {
    this.addCommand(TextManager.statusLevellingBack, 'levelling_back');
    this.addCommand(TextManager.statusLevellingConfirm, 'levelling_confirm');
    this.addCommand(TextManager.statusLevellingDiscard, 'levelling_discard');
};

// A single row of 3 commands
Window_StatusLevellingSummary.prototype.maxCols = function() {
    return 3;
};

Window_StatusLevellingSummary.prototype.itemHeight = function() {
    return TEW.MENU.LINE_HEIGHT;
};

Window_StatusLevellingSummary.prototype.commandRowY = function() {
    return this.contentsHeight() - this.itemHeight();
};

// The command row is pinned to the bottom of the window, regardless of the list's height
Window_StatusLevellingSummary.prototype.itemRect = function(index: number) {
    const rect = Window_Selectable.prototype.itemRect.call(this, index);
    rect.y = this.commandRowY();
    return rect;
};
// #endregion === Bottom command row === //
// === //
// #region ====== Advances list === //
// Height available to the list above the command row, minus the bottom padding
Window_StatusLevellingSummary.prototype.listAreaHeight = function() {
    return this.commandRowY() - Window_StatusLevellingSummary.LIST_BOTTOM_PADDING;
};

Window_StatusLevellingSummary.prototype.listVisibleRows = function() {
    return Math.max(0, Math.floor(this.listAreaHeight() / this.itemHeight()));
};

Window_StatusLevellingSummary.prototype.maxListScroll = function() {
    return Math.max(0, this._advances.length - this.listVisibleRows());
};

Window_StatusLevellingSummary.prototype.setListScroll = function(scroll: number) {
    const clamped = scroll.clamp(0, this.maxListScroll());
    if (this._listScroll !== clamped) {
        this._listScroll = clamped;
        this.refresh();
    }
};

Window_StatusLevellingSummary.prototype.scrollListDown = function() {
    this.setListScroll(this._listScroll + 1);
};

Window_StatusLevellingSummary.prototype.scrollListUp = function() {
    this.setListScroll(this._listScroll - 1);
};

// Drawing every advance currently visible, above the command row
Window_StatusLevellingSummary.prototype.drawAdvancesList = function() {
    const lastIndex = Math.min(this._listScroll + this.listVisibleRows(), this._advances.length);
    for (let index = this._listScroll; index < lastIndex; index++) {
        this.drawAdvance(index);
    }
};

/**
 * Drawing one advance: name, current value, new value and total cost.
 * Purchases which have no level, spells among them, carry a label instead of the two values.
 */
Window_StatusLevellingSummary.prototype.drawAdvance = function(index: number) {
    const y = (index - this._listScroll) * this.itemHeight();
    const advance: LevellingAdvance = this._advances[index];
    let x = 0;

    this.changeTextColor(this.systemColor());
    this.drawText(advance.name, x, y, Window_StatusLevellingSummary.NAME_COLUMN_WIDTH, 'left');
    this.resetTextColor();
    x += Window_StatusLevellingSummary.NAME_COLUMN_WIDTH;

    if (advance.text) {
        this.changeTextColor(this.powerUpColor());
        this.drawText(advance.text, x, y, Window_StatusLevellingSummary.VALUES_WIDTH, 'right');
        this.resetTextColor();
    } else {
        this.drawText(`${advance.from}`, x, y, Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH, 'right');

        this.drawText(
            '>',
            x + Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH,
            y,
            Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH,
            'center'
        );

        this.changeTextColor(this.powerUpColor());
        this.drawText(
            `${advance.to}`,
            x + Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH
                + Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH,
            y,
            Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH,
            'right'
        );
        this.resetTextColor();
    }
    x += Window_StatusLevellingSummary.VALUES_WIDTH;

    this.drawText(`- ${advance.cost}`, x, y, Window_StatusLevellingSummary.COST_COLUMN_WIDTH, 'right');
};

// Drawing the list first, then the command row on top of it
Window_StatusLevellingSummary.prototype.drawAllItems = function() {
    this.drawAdvancesList();
    Window_Selectable.prototype.drawAllItems.call(this);
};
// #endregion === Advances list === //
// === //
// #region ====== Input === //
// Left and right move the selected command (handled by the base class); up and
// down leave the selection alone and scroll the list instead
Window_StatusLevellingSummary.prototype.cursorDown = function() {
    this.scrollListDown();
};

Window_StatusLevellingSummary.prototype.cursorUp = function() {
    this.scrollListUp();
};

Window_StatusLevellingSummary.prototype.cursorPagedown = function() {
    this.setListScroll(this._listScroll + this.listVisibleRows());
};

Window_StatusLevellingSummary.prototype.cursorPageup = function() {
    this.setListScroll(this._listScroll - this.listVisibleRows());
};

Window_StatusLevellingSummary.prototype.processWheel = function() {
    if (this.visible) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.scrollListDown();
        }
        if (TouchInput.wheelY <= -threshold) {
            this.scrollListUp();
        }
    }
};
// #endregion === Input === //
