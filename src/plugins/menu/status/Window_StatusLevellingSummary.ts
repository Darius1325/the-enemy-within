// $PluginCompiler TEW_Menus.js 10

// ----------------------

// File: Window_StatusLevellingSummary.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 15/08/2026
// Description: This file contains the implementation of the Window_StatusLevellingSummary class, which lists every advance about to be bought when the player leaves levelling mode. The list is scrollable, and the window is never activated: scrolling is driven by the confirmation command window sitting below it.

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
// Scrollable summary of the advances waiting for confirmation

function Window_StatusLevellingSummary() {
    this.initialize.apply(this, arguments);
}

Window_StatusLevellingSummary.MARGIN_Y = 60;
Window_StatusLevellingSummary.NAME_COLUMN_WIDTH = 300;
Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH = 60;
Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH = 30;
Window_StatusLevellingSummary.COST_COLUMN_WIDTH = 130;

export default Window_StatusLevellingSummary.prototype = Object.create(Window_Selectable.prototype);
Window_StatusLevellingSummary.prototype.constructor = Window_StatusLevellingSummary;

// Initializing the window, horizontally centered under the topbar
Window_StatusLevellingSummary.prototype.initialize = function() {
    this._levelling = null;
    this._advances = [];
    Window_Selectable.prototype.initialize.call(this,
        (Graphics.boxWidth - this.windowWidth()) / 2,
        Window_StatusLevellingSummary.MARGIN_Y,
        this.windowWidth(),
        this.windowHeight()
    );
    this.deactivate();
    this.refresh();
};

// Linking the window to the levelling session holding the pending advances
Window_StatusLevellingSummary.prototype.setLevelling = function(levelling: any) {
    this._levelling = levelling;
    this.refreshAdvances();
};

// Rebuilding the list, to be called every time the window is displayed
Window_StatusLevellingSummary.prototype.refreshAdvances = function() {
    this._advances = this._levelling ? this._levelling.summary() : [];
    this.setTopRow(0);
    this.refresh();
};

Window_StatusLevellingSummary.prototype.maxItems = function() {
    return this._advances.length;
};

Window_StatusLevellingSummary.prototype.maxCols = () => 1;

Window_StatusLevellingSummary.prototype.itemHeight = function() {
    return TEW.MENU.LINE_HEIGHT;
};

// The window is only ever read, never selected
Window_StatusLevellingSummary.prototype.isCursorVisible = function() {
    return false;
};

// Drawing one advance: name, current value, new value and total cost
Window_StatusLevellingSummary.prototype.drawItem = function(index: number) {
    const y = (index - this.topIndex()) * this.itemHeight();
    const advance: LevellingAdvance = this._advances[index];
    let x = 0;

    this.changeTextColor(this.systemColor());
    this.drawText(advance.name, x, y, Window_StatusLevellingSummary.NAME_COLUMN_WIDTH, 'left');
    this.resetTextColor();
    x += Window_StatusLevellingSummary.NAME_COLUMN_WIDTH;

    this.drawText(`${advance.from}`, x, y, Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH, 'right');
    x += Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH;

    this.drawText('>', x, y, Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH, 'center');
    x += Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH;

    this.changeTextColor(this.powerUpColor());
    this.drawText(`${advance.to}`, x, y, Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH, 'right');
    this.resetTextColor();
    x += Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH;

    this.drawText(`- ${advance.cost}`, x, y, Window_StatusLevellingSummary.COST_COLUMN_WIDTH, 'right');
};

// Scrolling is driven from the confirmation window, the arrows are left alone
Window_StatusLevellingSummary.prototype.cursorDown = function() {};
Window_StatusLevellingSummary.prototype.cursorUp = function() {};
Window_StatusLevellingSummary.prototype.cursorPagedown = function() {};
Window_StatusLevellingSummary.prototype.cursorPageup = function() {};

Window_StatusLevellingSummary.prototype.processWheel = function() {
    if (this.visible) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.scrollDown();
        }
        if (TouchInput.wheelY <= -threshold) {
            this.scrollUp();
        }
    }
};
