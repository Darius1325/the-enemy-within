// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_StatusTalentDescription.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025 
// Description: This file contains the implementation of the Window_StatusTalentDescription class, which is responsible for displaying the description of a selected talent in the status screen. It includes methods for initializing the window, refreshing its content, and drawing the talent description.

import TEW from "../../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

function Window_StatusTalentDescription() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusTalentDescription.prototype = Object.create(Window_Base.prototype);
Window_StatusTalentDescription.prototype.constructor = Window_StatusTalentDescription;

/**
 * Constructor for the Window_StatusTalentDescription class.
 */
Window_StatusTalentDescription.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this,
        0,
        Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT,
        Graphics.boxWidth,
        TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT);
    this.activate();
    this.refresh();
    this._talent = null;
};

/**
 * Refreshes the content of the window.
 */
Window_StatusTalentDescription.prototype.refresh = function () {
    this.contents.clear();
    if (this._talent) {
        this.drawDescription(this._talent);
    }
};

/** Clear all contents */
Window_StatusTalentDescription.prototype.empty = function() {
    this._talent = null;
};

Window_StatusTalentDescription.prototype.clear = function() {
    if (this.contents) {
        this.contents.clear();
    }
}

/**
 * Draws the description of the selected talent.
 */
Window_StatusTalentDescription.prototype.drawDescription = function(talent) {
    this.drawWrappedTextManually(talent[1].description, 10, 0, 24);
    // this.drawWrappedText(
    //     talent[1].description,
    //     10,
    //     0,
    //     Graphics.boxWidth
    // );
};

Window_StatusTalentDescription.prototype.verticalBorderPadding = function() {
    return 18;
};
