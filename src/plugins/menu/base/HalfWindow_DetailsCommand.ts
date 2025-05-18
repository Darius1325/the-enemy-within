// $PluginCompiler TEW_Menus.js 10
// $StartCompilation

//-----------------------------------------------------------------------------
// HalfWindow_DetailsCommand
//
// Super object to manage individual item command windows

function HalfWindow_DetailsCommand() {
    this.initialize.apply(this, arguments);
}

export default HalfWindow_DetailsCommand.prototype = Object.create(Window_Command.prototype);
HalfWindow_DetailsCommand.prototype.constructor = HalfWindow_DetailsCommand;

// Initializing the command window
HalfWindow_DetailsCommand.prototype.initialize = function(actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    this._windowWidth = Graphics.boxWidth / 2;
    this._windowHeight = this.fittingHeight(this._actionsNumber);
    Window_Command.prototype.initialize.call(
        this,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - this._windowHeight);
};

// Window Width
HalfWindow_DetailsCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

HalfWindow_DetailsCommand.prototype.addCommand = function(name: string, symbol: string, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext});
};

HalfWindow_DetailsCommand.prototype.clear = function() {
    this.clearCommandList();
    Window_Selectable.prototype.refresh.call(this);
}
