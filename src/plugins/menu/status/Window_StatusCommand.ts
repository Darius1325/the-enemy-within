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

// Commands are packed on the left of the topbar to leave room for the levelling indicator
Window_StatusCommand.COMMAND_WIDTH = 200;
Window_StatusCommand.INDICATOR_MARGIN_X = 20;

export default Window_StatusCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_StatusCommand.prototype.constructor = Window_StatusCommand;

// Initializing the command window
Window_StatusCommand.prototype.initialize = function(x: number, y: number) {
    this._windowHeight = TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
    this._levelling = null;
    this._levellingMode = false;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};

// Max column number
Window_StatusCommand.prototype.maxCols = function() {
    return 4;
};

// Commands keep a fixed width instead of spreading over the whole topbar
Window_StatusCommand.prototype.itemWidth = function() {
    return Window_StatusCommand.COMMAND_WIDTH;
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

// #region ====== Levelling indicator === //
// Linking the window to the levelling session, so it can display its experience counters
Window_StatusCommand.prototype.setLevelling = function(levelling: any) {
    this._levelling = levelling;
    this.refresh();
};

// Switching between the 'Level up' hint and the experience counters
Window_StatusCommand.prototype.setLevellingMode = function(active: boolean) {
    if (this._levellingMode !== active) {
        this._levellingMode = active;
        this.refresh();
    }
};

Window_StatusCommand.prototype.isLevellingMode = function() {
    return !!this._levellingMode && !!this._levelling;
};

// Left edge of the area left free by the commands
Window_StatusCommand.prototype.indicatorX = function() {
    return this.maxCols() * (Window_StatusCommand.COMMAND_WIDTH + this.spacing())
        + Window_StatusCommand.INDICATOR_MARGIN_X;
};

Window_StatusCommand.prototype.refresh = function() {
    Window_HorzCommand.prototype.refresh.call(this);
    this.drawLevellingIndicator();
};

Window_StatusCommand.prototype.drawLevellingIndicator = function() {
    const x = this.indicatorX();
    const width = this.contentsWidth() - x;
    if (width <= 0) {
        return;
    }
    if (this.isLevellingMode()) {
        this.drawExperienceCounters(x, width);
    } else {
        this.changeTextColor(this.systemColor());
        this.drawText(`${TextManager.statusLevelUp}: ${TEW.MENU.LEVEL_UP_KEY_LABEL}`, x, 0, width, 'right');
        this.resetTextColor();
    }
};

// Remaining and spent experience points, displayed side by side
Window_StatusCommand.prototype.drawExperienceCounters = function(x: number, width: number) {
    const halfWidth = width / 2;

    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.statusExpLeft, x, 0, halfWidth, 'left');
    this.resetTextColor();
    this.drawText(`${this._levelling.remainingExp()}`, x, 0, halfWidth, 'right');

    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.statusExpSpent, x + halfWidth, 0, halfWidth, 'left');
    this.resetTextColor();
    this.drawText(`${this._levelling.spentExp()}`, x + halfWidth, 0, halfWidth, 'right');
};
// #endregion === Levelling indicator === //
