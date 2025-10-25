// $PluginCompiler TEW_Combat.js
// $StartCompilation

// TODO unused !
//-----------------------------------------------------------------------------
// Window_TacticsMap
//
// The window for displaying essential commands for progressing in tactics screen.

function Window_TacticsMap() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsMap.prototype = Object.create(Window_MenuCommand.prototype);
Window_TacticsMap.prototype.constructor = Window_TacticsMap;

Window_TacticsMap.prototype.initialize = function(x, y) {
    Window_MenuCommand.prototype.initialize.call(this, x, y);
    this.selectLast();
    this.hide();
    this.deactivate();
};

Window_TacticsMap._lastCommandSymbol = null;

Window_TacticsMap.initCommandPosition = function() {
    this._lastCommandSymbol = null;
};

Window_TacticsMap.prototype.windowWidth = function() {
    return 240;
};

Window_TacticsMap.prototype.numVisibleRows = function() {
    return this.maxItems();
};

Window_TacticsMap.prototype.addMainCommands = function() {
    var enabled = this.areMainCommandsEnabled();
    this.addCommand(TEW.COMBAT.SYSTEM.endTurnTerm, 'endTurn');
    if (this.needsCommand('equip')) {
        this.addCommand(TextManager.equip, 'equip', enabled);
    }
    if (this.needsCommand('status')) {
        this.addCommand(TextManager.status, 'status', enabled);
    }
};

Window_TacticsMap.prototype.addOriginalCommands = function() {
};

Window_TacticsMap.prototype.addSaveCommand = function() {
};

Window_TacticsMap.prototype.addFormationCommand = function() {
};

Window_TacticsMap.prototype.selectLast = function() {
    this.selectSymbol(Window_TacticsMap._lastCommandSymbol);
};
