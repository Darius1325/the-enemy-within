// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Scene_Status.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Scene_Status class, which is responsible for displaying the status screen in the game. It includes methods for creating the command window, stats window, competences window, talents window, and spells window. The class also handles user input and navigation between different windows within the status screen.

// ----------------------
// Imports
// ----------------------
import TEW from "../../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------


function Window_StatusTalents() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusTalents.prototype = Object.create(Window_Selectable.prototype);
Window_StatusTalents.prototype.constructor = Window_StatusTalents;

/**
 * Constructor for the Window_StatusTalents class.
 */
Window_StatusTalents.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0,
        TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth,
        Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT - TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT);
    this._actor = null;
    this._maxItems = 0;
    this._leftPadding = 10;
    this._talentColumnWidth = (this.width / 4) - this._leftPadding;
    this._levelColumnWidth = this.width / 6;
    this.activate();
    this.refresh();
};

/**
 * Sets the actor for the window.
 */
Window_StatusTalents.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._talents = TEW.DATABASE.TALENTS.ARRAY.filter(talent => actor.hasTalent(talent[0]));   // [<internal name>, {<talent data>}]
        this._maxItems = this._talents.length;
        this.refresh();
    }
};

/**
 * Returns the maximum number of columns in the window.
 */
Window_StatusTalents.prototype.maxCols = () => 2;

/**
 * Draws all items in the window.
 */
Window_StatusTalents.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

/**
 * Draws a single item in the window.
 */
Window_StatusTalents.prototype.drawItem = function(index) {
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 * this.width / 2 + this._leftPadding;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.LINE_HEIGHT;

    const talent = this.talentFromIndex(index);

    // Talent name
    this.changeTextColor(this.systemColor());
    this.drawText(talent[1].name, x, y, this._talentColumnWidth);
    this.resetTextColor();

    // Talent level

    const level = this._actor.talent(talent[0]);
    const levelText = `lvl${level}`;
    this.drawText(
        levelText,
        x + this._talentColumnWidth,
        y,
        this._levelColumnWidth, 'right');
};

/**
 * Returns the talent from the given index.
 */
Window_StatusTalents.prototype.talentFromIndex = function(index) {
    return this._talents[index];
};

// Window_StatusTalents.prototype.item = function() {
//     const talent = this.talentFromIndex(this._index);
//     return talent[1].name + ': ' + talent[1].desc;
// };

// // TODO
// Window_StatusTalents.prototype.select = function(index) {
//     // if (this._index !== index) {
//     //     this.hideHelpWindow();
//     // }
//     // this._index = index;
//     // if (this._index >= 0) {
//     //     this._helpWindow.setText(this.item());
//     // }
//     this._stayCount = 0;
//     this.ensureCursorVisible();
//     this.updateCursor();
//     this.callUpdateHelp();
// };

/**
 * Called when the process successfully completes.
 */
Window_StatusTalents.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

Window_StatusTalents.prototype.select = function(index: number) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_talent_description");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

// Window_StatusTalents.prototype.isCurrentItemEnabled = function() {
//     return true; // TODO
// };

// Window_StatusTalents.prototype.showHelpWindow = function() {
//     if (this._helpWindow && this.active) {
//         this._helpWindow.show();
//         this._helpWindow.refresh();
//     }
// };

// Window_StatusTalents.prototype.updateHelp = () => {};
/**
 * Returns the maximum number of items in the window.
 */
Window_StatusTalents.prototype.maxItems = function() {
    return this._maxItems;
};
