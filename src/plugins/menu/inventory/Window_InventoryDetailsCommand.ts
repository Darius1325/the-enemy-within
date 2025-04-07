// $PluginCompiler TEW_Menus.js 10
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryDetails
//
// Super object to manage individual item command windows

function Window_InventoryDetailsCommand() {
    this.initialize.apply(this, arguments);
}

Window_InventoryDetailsCommand.prototype = Object.create(Window_Command.prototype);
Window_InventoryDetailsCommand.prototype.constructor = Window_InventoryDetailsCommand;

// Initializing the command window
Window_InventoryDetailsCommand.prototype.initialize = function(actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    this._windowWidth = Graphics.boxWidth / 2;
    this._windowHeight = this.fittingHeight(this._actionsNumber);
    Window_Command.prototype.initialize.call(
        this,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - this._windowHeight);
};

// Window Width
Window_InventoryDetailsCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

Window_InventoryDetailsCommand.prototype.addCommand = function(name, symbol, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext});
};
