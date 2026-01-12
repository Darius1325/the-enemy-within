// $PluginCompiler TEW_Menus.js

import TEW from "../../_types/tew";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryCommand
//
// The window for selecting a command on the inventory screen.

function Window_InventoryCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_InventoryCommand.prototype.constructor = Window_InventoryCommand;

// Initializing the command window
Window_InventoryCommand.prototype.initialize = function(x: number, y: number, width: number) {
    this._windowHeight = TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};

// Max column number
Window_InventoryCommand.prototype.maxCols = function() {
    return 4;
};

// Making the 5 tabs
Window_InventoryCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryInfos, 'inventory_infos');
    this.addCommand(TextManager.inventoryWeapons, 'inventory_weapons');
    this.addCommand(TextManager.inventoryArmors, 'inventory_armors');
    this.addCommand(TextManager.inventoryItems, 'inventory_items');
};


Window_InventoryCommand.prototype.cursorRight = function(wrap: boolean) {
    Window_HorzCommand.prototype.cursorRight.call(this, wrap);
    this.callHandler('right');
};

Window_InventoryCommand.prototype.cursorLeft = function(wrap: boolean) {
    Window_HorzCommand.prototype.cursorLeft.call(this, wrap);
    this.callHandler('left');
};

Window_InventoryCommand.prototype.verticalBorderPadding = function() {
    return 18;
};
