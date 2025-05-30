// $PluginCompiler TEW_Menus.js

import HalfWindow_DetailsCommand from "../../base/HalfWindow_DetailsCommand";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryArmorCommand
//
// Individual armor command window

function Window_InventoryArmorCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryArmorCommand.prototype = Object.create(HalfWindow_DetailsCommand.prototype);
Window_InventoryArmorCommand.prototype.constructor = Window_InventoryArmorCommand;

// Initializing the command window
Window_InventoryArmorCommand.prototype.initialize = function() {
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 2);
};

// Making the 2 lines
Window_InventoryArmorCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_armor_equip');
    this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_armor_transfer');
};

Window_InventoryArmorCommand.prototype.refreshCommand = function(actor: any, armorId = 0){
    if (actor) {
        this.clearCommandList();
        if (actor.hasArmorEquipped(armorId)) {
            this.addCommand(TextManager.inventoryArmorUnequip, 'inventory_armor_unequip');
        } else {
            this.addCommand(TextManager.inventoryArmorEquip, 'inventory_armor_equip');
        }
        this.addCommand(TextManager.inventoryArmorTransfer, 'inventory_armor_transfer');
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};
