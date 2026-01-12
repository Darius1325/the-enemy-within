// $PluginCompiler TEW_Menus.js

import TEW from "../../_types/tew";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_StatusCommand
//
// The window for selecting a command on the status screen.

function Window_StatusCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_StatusCommand.prototype.constructor = Window_StatusCommand;

// Initializing the command window
Window_StatusCommand.prototype.initialize = function(x: number, y: number) {
    this._windowHeight = TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};

// Max column number
Window_StatusCommand.prototype.maxCols = function() {
    return 4;
};

// Making the 4 tabs
Window_StatusCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.statusStats, 'status_stats');
    this.addCommand(TextManager.statusComps, 'status_comps');
    this.addCommand(TextManager.statusTalents, 'status_talents');
    this.addCommand(TextManager.statusSpells, 'status_spells');
};

Window_StatusCommand.prototype.cursorRight = function(wrap: boolean) {
    Window_HorzCommand.prototype.cursorRight.call(this, wrap);
    this.callHandler('right');
};

Window_StatusCommand.prototype.cursorLeft = function(wrap: boolean) {
    Window_HorzCommand.prototype.cursorLeft.call(this, wrap);
    this.callHandler('left');
};

Window_StatusCommand.prototype.verticalBorderPadding = function() {
    return 18;
};
