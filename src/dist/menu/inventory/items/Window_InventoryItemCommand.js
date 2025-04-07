// $PluginCompiler TEW_Menus.js
// $StartCompilation
//-----------------------------------------------------------------------------
// Window_InventoryItemCommand
//
// The window for selecting a command on the items view.
function Window_InventoryItemCommand() {
    this.initialize.apply(this, arguments);
}
Window_InventoryItemCommand.prototype = Object.create(Window_InventoryDetailsCommand.prototype);
Window_InventoryItemCommand.prototype.constructor = Window_InventoryItemCommand;
// Initializing the command window
Window_InventoryItemCommand.prototype.initialize = function () {
    Window_InventoryDetailsCommand.prototype.initialize.call(this, 2);
};
// Making the 2 lines
Window_InventoryItemCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.inventoryItemUse, 'inventory_item_use');
    this.addCommand(TextManager.inventoryItemTransfer, 'inventory_item_transfer');
};
