// $PluginCompiler TEW_Menus.js 101

// ----------------------

// File: Scene_Equip.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: General functions for the inventory menu scene

// ----------------------
// Imports
// ----------------------

import Window_InventoryCommand from "./Window_InventoryCommand";
import Window_InventoryTransferCommand from "./Window_InventoryTransferCommand";
import Window_InventoryTransferSpinner from "./Window_InventoryTransferSpinner";
import {Scene_Equip} from "_types/Scene_Equip";

// ----------------------
// $StartCompilation
// ----------------------

Scene_Equip.INFOS_WINDOW_INDEX = 0;
Scene_Equip.WEAPONS_WINDOW_INDEX = 1;
Scene_Equip.ARMORS_WINDOW_INDEX = 2;
Scene_Equip.ITEMS_WINDOW_INDEX = 3;
Scene_Equip.AMMO_WINDOW_INDEX = 4;

// Creating the scene
Scene_Equip.prototype.create = function() {
    // Init
    Scene_MenuBase.prototype.create.call(this);

    // Command window
    this.createCommandWindow();

    // Info window
    this.createInfosWindow();

    // Weapons Windows
    this.createWeaponsWindow();
    this.createWeaponsCommandWindow();
    this.createWeaponsDetailsWindow();

    // Armors windows
    this.createArmorsWindow();
    this.createArmorsCommandWindow();
    this.createArmorsDetailsWindow();

    // Items windows
    this.createItemsWindow();
    this.createItemsCommandWindow();
    this.createItemsDetailsWindow();

    // Ammo Windows
    this.createAmmoWindow();

    // // Help window
    // this.createHelpWindow();
    // this._helpWindow.hide();
    // this._weaponsWindow.setHelpWindow(this._helpWindow);
    // this._armorsWindow.setHelpWindow(this._helpWindow);
    // // this._itemsWindow.setHelpWindow(this._helpWindow);
    // this._ammoWindow.setHelpWindow(this._helpWindow);

    // Transfer windows
    this.createTransferCommandWindow();
    this.createTransferSpinnerWindow();

    this._currentMainWindow = this._infosWindow;
    this.activateInventoryInfos(); // Deactivate all windows, except infos
    this.refreshActor();
};

// Refreshing the actor
Scene_Equip.prototype.refreshActor = function() {
    var actor = this.actor();
    this._infosWindow.setActor(actor);
    this._weaponsWindow.setActor(actor);
    this._armorsWindow.setActor(actor);
    this._itemsWindow.setActor(actor);
    this._ammoWindow.setActor(actor);
    this._transferCommandWindow.setActor(actor);
};

// // Creating the help window
// Scene_Equip.prototype.createHelpWindow = function(){
//     this._helpWindow = new Window_InventoryHelp();
//     this.addWindow(this._helpWindow);
// }

// Creating the commands for this scene
Scene_Equip.prototype.createCommandWindow = function() {
    var wx = 0;
    var wy = 0;
    var ww = Graphics.boxWidth;
    this._commandWindow = new Window_InventoryCommand(wx, wy, ww);
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
    this._commandWindow.setHandler('right', this.displayWindow.bind(this));
    this._commandWindow.setHandler('left', this.displayWindow.bind(this));
    this._commandWindow.setHandler('inventory_infos', this.activateInventoryInfos.bind(this));
    this._commandWindow.setHandler('inventory_weapons', this.activateInventoryWeapons.bind(this));
    this._commandWindow.setHandler('inventory_armors', this.activateInventoryArmors.bind(this));
    this._commandWindow.setHandler('inventory_items', this.activateInventoryItems.bind(this));
    this._commandWindow.setHandler('inventory_ammo', this.activateInventoryAmmo.bind(this));
    this.addWindow(this._commandWindow);
};

// Create the character choice window for object transfers
Scene_Equip.prototype.createTransferCommandWindow = function() {
    this._transferCommandWindow = new Window_InventoryTransferCommand();
    this._transferCommandWindow.setHandler('cancel', () => {
        this._transferCommandWindow.deactivate();
        this._transferCommandWindow.deselect();
        switch (this._transferCommandWindow.type) {
            case Window_InventoryTransferCommand.ITEM:
                this.activateInventoryItems(this._itemsWindow.index());
                break;
            case Window_InventoryTransferCommand.WEAPON:
                this.activateInventoryWeapons(this._weaponsWindow.index());
                break;
            case Window_InventoryTransferCommand.ARMOR:
                this.activateInventoryArmors(this._armorsWindow.index());
                break;
            case Window_InventoryTransferCommand.AMMO:
                this.activateInventoryAmmo(this._ammoWindow.index());
                break;
        }
    });
    for (let i = 1; i < $gameActors._data.length; i++) {
        this._transferCommandWindow.setHandler("inventory_transfer_to_" + (i - 1), () => {
            this._transferCommandWindow.targetActor = $gameActors._data[i];
            this.initTransfer();
        });
    }
    this._transferCommandWindow.hide();
    this._transferCommandWindow.deselect();
    this.addWindow(this._transferCommandWindow);
};

// Create the spinner container window for object transfers
Scene_Equip.prototype.createTransferSpinnerWindow = function() {
    this._transferSpinnerWindow = new Window_InventoryTransferSpinner();
    this._transferSpinnerWindow.setHandler('ok', () => {
        this.doTransfer();
    });
    this._transferSpinnerWindow.setHandler('cancel', () => {
        this._transferSpinnerWindow.deactivate(); // TODO needed ?
        this._transferSpinnerWindow.deselect(); // TODO needed ?
        this._transferCommandWindow.callHandler('cancel');
    });
}

// Hide all the windows
Scene_Equip.prototype.hideAllWindows = function() {
    this._infosWindow.hide();
    this._infosWindow.deactivate();

    this._weaponsWindow.hide();
    this._weaponsWindow.deactivate();

    this._weaponDetailsWindow.hide();
    this._weaponDetailsWindow.deactivate();

    this._weaponsCommandWindow.hide();
    this._weaponsCommandWindow.deactivate();

    this._armorsWindow.hide();
    this._armorsWindow.deactivate();

    this._armorDetailsWindow.hide();
    this._armorDetailsWindow.deactivate();

    this._armorsCommandWindow.hide();
    this._armorsCommandWindow.deactivate();

    this._itemsWindow.hide();
    this._itemsWindow.deactivate();

    this._itemDetailsWindow.hide();
    this._itemDetailsWindow.deactivate();

    this._itemsCommandWindow.hide();
    this._itemsCommandWindow.deactivate();

    this._ammoWindow.hide();
    this._ammoWindow.deactivate();

    this._transferCommandWindow.hide();
    this._transferCommandWindow.deactivate();

    this._transferSpinnerWindow.hide();
    this._transferSpinnerWindow.deactivate();
};

// Show the corresponding window according to the current command window index
Scene_Equip.prototype.displayWindow = function() {
    // hide all
    this.hideAllWindows();

    // Change window
    if (this._commandWindow.index() == Scene_Equip.INFOS_WINDOW_INDEX) {
        this._infosWindow.show();
        this._infosWindow.refresh();
    } else if (this._commandWindow.index() == Scene_Equip.WEAPONS_WINDOW_INDEX) {
        this._weaponsWindow.show();
        this._weaponDetailsWindow.show();
        this._weaponsCommandWindow.show();
        this._weaponsWindow.refresh();
        this._weaponDetailsWindow.refresh();
        this._weaponsCommandWindow.clear();
    } else if (this._commandWindow.index() == Scene_Equip.ARMORS_WINDOW_INDEX) {
        this._armorsWindow.show();
        this._armorDetailsWindow.show();
        this._armorsCommandWindow.show();
        this._armorsWindow.refresh();
        this._armorDetailsWindow.refresh();
        this._armorsCommandWindow.clear();
    } else if (this._commandWindow.index() == Scene_Equip.ITEMS_WINDOW_INDEX) {
        this._itemsWindow.show();
        this._itemDetailsWindow.show();
        this._itemsCommandWindow.show();
        this._itemsWindow.refresh();
        this._itemDetailsWindow.refresh();
        this._itemsCommandWindow.clear();
    } else if (this._commandWindow.index() == Scene_Equip.AMMO_WINDOW_INDEX) {
        this._ammoWindow.show();
        this._ammoWindow.refresh();
    }
};

Scene_Equip.prototype.initTransfer = function() {
    switch (this._transferCommandWindow.type) {        
        case Window_InventoryTransferCommand.ITEM:
            this._transferCommandWindow.item = this._itemsWindow.item()[0];
            this._transferSpinnerWindow.activate();
            this._transferSpinnerWindow.show();
            break;
        case Window_InventoryTransferCommand.WEAPON:
            this._transferCommandWindow.item = this._weaponsWindow.item().equipIndex;
            this.doTransfer();
            break;
        case Window_InventoryTransferCommand.ARMOR:
            this._transferCommandWindow.item = this._armorsWindow.item()[0];
            this.doTransfer();
            break;
        case Window_InventoryTransferCommand.AMMO:
            // TODO
    }
}

Scene_Equip.prototype.doTransfer = function() {
    this._transferCommandWindow.doTransfer(this._transferSpinnerWindow._number);
    this._currentMainWindow.syncActor();
    this._transferSpinnerWindow.callHandler('cancel');
}
