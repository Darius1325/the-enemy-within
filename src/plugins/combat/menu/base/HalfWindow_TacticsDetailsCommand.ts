// $PluginCompiler TEW_Combat.js

export interface IHalfWindow_TacticsDetailsCommand {
    _actionsNumber: number;
    _windowWidth: number;
    _windowHeight: number;

    windowWidth: () => number;
    addCommand: (name: string, symbol: string, enabled?: boolean, ext?: string) => void;
    clear: () => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// HalfWindow_TacticsDetailsCommand
//
// Super object to manage individual item command windows

function HalfWindow_TacticsDetailsCommand() {
    this.initialize.apply(this, arguments);
}

export default HalfWindow_TacticsDetailsCommand.prototype = Object.create(Window_Command.prototype);
HalfWindow_TacticsDetailsCommand.prototype.constructor = HalfWindow_TacticsDetailsCommand;

// Initializing the command window
HalfWindow_TacticsDetailsCommand.prototype.initialize = function(actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    this._windowWidth = Graphics.boxWidth / 2;
    this._windowHeight = this.fittingHeight(this._actionsNumber);
    Window_Command.prototype.initialize.call(
        this,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - this._windowHeight);
    this.deactivate();
};

// Window Width
HalfWindow_TacticsDetailsCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

HalfWindow_TacticsDetailsCommand.prototype.addCommand = function(name: string, symbol: string, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext});
};

HalfWindow_TacticsDetailsCommand.prototype.clear = function() {
    this.clearCommandList();
    Window_Selectable.prototype.refresh.call(this);
};
