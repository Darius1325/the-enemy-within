
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryTransferSpinner
//
// Spinner to choose how many items to transfer

function Window_InventoryTransferSpinner() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryTransferSpinner.prototype = Object.create(Window_Command.prototype);
Window_InventoryTransferSpinner.prototype.constructor = Window_InventoryTransferSpinner;

// Initializing the command window
Window_InventoryTransferSpinner.prototype.initialize = function() {
    this._windowWidth = Graphics.boxWidth / 4;
    this._windowHeight = this.fittingHeight(3);
    this.type = 'item';
    Window_Command.prototype.initialize.call(
        this,
        this._windowWidth * 3,
        Graphics.boxHeight - this._windowHeight);
};
