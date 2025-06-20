// $PluginCompiler TEW_Menus.js

import HalfWindow_DetailsCommand, { IHalfWindow_DetailsCommand } from "../../base/HalfWindow_DetailsCommand";

export interface IWindow_InventoryItemCommand extends IHalfWindow_DetailsCommand {
    makeCommandList: () => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryItemCommand
//
// The window for selecting a command on the items view.

function Window_InventoryItemCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryItemCommand.prototype = Object.create(HalfWindow_DetailsCommand.prototype);
Window_InventoryItemCommand.prototype.constructor = Window_InventoryItemCommand;

// Initializing the command window
Window_InventoryItemCommand.prototype.initialize = function() {
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 2);
};

// Making the 2 lines
Window_InventoryItemCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryItemUse, 'inventory_item_use');
    this.addCommand(TextManager.inventoryItemTransfer, 'inventory_item_transfer');
};
