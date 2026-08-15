// $PluginCompiler TEW_Menus.js 10

// ----------------------

// File: Window_StatusLevellingConfirm.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 15/08/2026
// Description: This file contains the implementation of the Window_StatusLevellingConfirm class, the command window displayed under the levelling summary when the player leaves levelling mode with pending advances. It also drives the summary window's scrolling, since the summary is never activated itself.

// ----------------------
// Imports
// ----------------------

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Window_StatusLevellingConfirm
//
// Confirming, discarding or resuming a levelling session

function Window_StatusLevellingConfirm() {
    this.initialize.apply(this, arguments);
}

Window_StatusLevellingConfirm.MARGIN_Y = 520;

export default Window_StatusLevellingConfirm.prototype = Object.create(Window_Command.prototype);
Window_StatusLevellingConfirm.prototype.constructor = Window_StatusLevellingConfirm;

// Initializing the command window, horizontally centered under the summary
Window_StatusLevellingConfirm.prototype.initialize = function() {
    this._summaryWindow = null;
    Window_Command.prototype.initialize.call(this,
        (Graphics.boxWidth - this.windowWidth()) / 2,
        Window_StatusLevellingConfirm.MARGIN_Y
    );
};

Window_StatusLevellingConfirm.prototype.makeCommandList = function() {
    this.addCommand(TextManager.statusLevellingConfirm, 'levelling_confirm');
    this.addCommand(TextManager.statusLevellingDiscard, 'levelling_discard');
    this.addCommand(TextManager.statusLevellingBack, 'levelling_back');
};

Window_StatusLevellingConfirm.prototype.maxCols = function() {
    return 1;
};

// Linking the summary window so page up and page down can scroll it
Window_StatusLevellingConfirm.prototype.setSummaryWindow = function(summaryWindow: any) {
    this._summaryWindow = summaryWindow;
};

Window_StatusLevellingConfirm.prototype.cursorPagedown = function() {
    if (this._summaryWindow) {
        this._summaryWindow.scrollDown();
    }
};

Window_StatusLevellingConfirm.prototype.cursorPageup = function() {
    if (this._summaryWindow) {
        this._summaryWindow.scrollUp();
    }
};
