// $PluginCompiler TEW_Menus.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryWeaponCommand
//
// Weapon individual commands window

function Window_InventoryWeaponCommand() {
    this.initialize.apply(this, arguments);
}

Window_InventoryWeaponCommand.prototype = Object.create(Window_InventoryDetailsCommand.prototype);
Window_InventoryWeaponCommand.prototype.constructor = Window_InventoryWeaponCommand;

// Initializing the command window
Window_InventoryWeaponCommand.prototype.initialize = function() {
    Window_InventoryDetailsCommand.prototype.initialize.call(this, 3);
};

// Making the 3 lines
Window_InventoryWeaponCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
    this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer');
    this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload');
};

Window_InventoryWeaponCommand.prototype.refreshCommand = function(actor, weaponId = 0){
    if (actor){
        const weapon = actor.weapon(weaponId);
        this.clearCommandList();
        if (weapon.isInMainHand || weapon.isInSecondHand){
            this.addCommand(TextManager.inventoryWeaponUnequip, 'inventory_weapon_unequip');
        } else {
            this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
        }
        this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer');
        if (weapon.isReloadable){
            this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload');
        } else {
            this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload', false);
        }
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};
