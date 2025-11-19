// $PluginCompiler TEW_Menus.js 10

export interface IHalfWindow_DetailsCommand {
    _actionsNumber: number;
    _windowWidth: number;
    _windowHeight: number;

    windowWidth: () => number;
    addCommand: (name: string, symbol: string, enabled?: boolean, ext?: string) => void;
    clear: () => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// HalfWindow_DetailsCommand
//
// Super object to manage individual item command windows

function HalfWindow_DetailsCommand() {
    this.initialize.apply(this, arguments);
}

// TODO maybe just fix every window's position?
HalfWindow_DetailsCommand.MARGIN_X = 180;
HalfWindow_DetailsCommand.MARGIN_Y = 20;

export default HalfWindow_DetailsCommand.prototype = Object.create(Window_Command.prototype);
HalfWindow_DetailsCommand.prototype.constructor = HalfWindow_DetailsCommand;

// Initializing the command window
HalfWindow_DetailsCommand.prototype.initialize = function(actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    Window_Command.prototype.initialize.call(
        this,
        Graphics.boxWidth / 2 + HalfWindow_DetailsCommand.MARGIN_X,
        Graphics.boxHeight - this.fittingHeight(actionsNumber) - HalfWindow_DetailsCommand.MARGIN_Y);
};

HalfWindow_DetailsCommand.prototype.backgroundImageName = function() {
    return "bg_inventoryCommand" + this._actionsNumber;
};

HalfWindow_DetailsCommand.prototype.addCommand = function(name: string, symbol: string, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext});
};

HalfWindow_DetailsCommand.prototype.clear = function() {
    this.clearCommandList();
    Window_Selectable.prototype.refresh.call(this);
}
