// $PluginCompiler TEW_Menus.js

import HalfWindow_DetailsCommand from "../../base/HalfWindow_DetailsCommand";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryWeaponCommand
//
// Weapon individual commands window

function Window_InventoryWeaponCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryWeaponCommand.prototype = Object.create(HalfWindow_DetailsCommand.prototype);
Window_InventoryWeaponCommand.prototype.constructor = Window_InventoryWeaponCommand;

// Initializing the command window
Window_InventoryWeaponCommand.prototype.initialize = function() {
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 3);
};

// Making the 3 lines
Window_InventoryWeaponCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
    this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer');
    this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload');
};

Window_InventoryWeaponCommand.prototype.refreshCommand = function(actor: any, weaponIndex = 0){
    if (actor) {
        const weapon = actor.weapon(weaponIndex);
        this.clearCommandList();
        if (weapon.isInMainHand || weapon.isInSecondHand) {
            this.addCommand(TextManager.inventoryWeaponUnequip, 'inventory_weapon_unequip');
        } else {
            this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
        }
        this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer');
        if (weapon.isReloadable) {
            this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload');
        } else {
            this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload', false);
        }
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};
