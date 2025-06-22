// $PluginCompiler TEW_Menus.js

import HalfWindow_DetailsCommand, { IHalfWindow_DetailsCommand } from "../../base/HalfWindow_DetailsCommand";
import { Game_Actor } from "../../../base/stats/Game_Actor";

export interface IWindow_InventoryArmorCommand extends IHalfWindow_DetailsCommand {
    makeCommandList: () => void;
    refreshCommand: (equipped: boolean, armorId?: string) => void;
};

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
// TODO REMOVE
Window_InventoryArmorCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_armor_equip');
    this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_armor_transfer');
};

Window_InventoryArmorCommand.prototype.refreshCommand = function(equipped: boolean, armorId?: string){
    if (armorId) {
        this.clearCommandList();
        if (equipped) {
            this.addCommand(TextManager.inventoryArmorUnequip, 'inventory_armor_unequip');
            this.addCommand(TextManager.inventoryArmorTransfer, 'inventory_armor_transfer', false);
        } else {
            this.addCommand(TextManager.inventoryArmorEquip, 'inventory_armor_equip');
            this.addCommand(TextManager.inventoryArmorTransfer, 'inventory_armor_transfer');
        }
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};
