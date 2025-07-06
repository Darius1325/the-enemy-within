// $PluginCompiler TEW_Menus.js 102

// ----------------------

// File: Scene_Equip.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: Functions to manage the ammo inventory window through the main scene

// ----------------------
// Imports
// ----------------------

import { Scene_Equip } from "../_types/Scene_Equip";
import Window_InventoryAmmo from "./Window_InventoryAmmo";

// ----------------------
// $StartCompilation
// ----------------------

Scene_Equip.prototype.createAmmoWindow = function() {
    this._ammoWindow = new Window_InventoryAmmo();
    this._ammoWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._ammoWindow.deselect();
    });
    this._ammoWindow.hide();
    this.addWindow(this._ammoWindow);
};

Scene_Equip.prototype.activateInventoryAmmo = function(index = 0) {
    const nbAmmo = this._ammoWindow._ammo.length; // TODO
    if (nbAmmo > 0){
        index = Math.min(index, nbAmmo - 1);
        this.hideAllWindows();
        this._currentMainWindow = this._ammoWindow;
        this._ammoWindow.show();
        this._commandWindow.deactivate();
        this._ammoWindow.activate();
        this._ammoWindow.select(index);
        this._ammoWindow.refresh();
    }
};
