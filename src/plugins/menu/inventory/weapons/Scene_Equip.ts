// $PluginCompiler TEW_Menus.js 102

// ----------------------

// File: Scene_Equip.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: Functions to manage the weapons inventory window through the main scene

// ----------------------
// Imports
// ----------------------

import { Scene_Equip } from "../_types/Scene_Equip";
import Window_InventoryWeapons, {LoadedWeapon} from "./Window_InventoryWeapons";
import Window_InventoryWeaponDetails from "./Window_InventoryWeaponDetails";
import {WeaponGroup, WeaponQuality} from "../../../_types/enum";
import Window_InventoryTransferCommand from "../Window_InventoryTransferCommand";
import Window_InventoryWeaponCommand from "./Window_InventoryWeaponCommand";

// ----------------------
// $StartCompilation
// ----------------------

Scene_Equip.prototype.createWeaponsWindow = function() {
    this._weaponsWindow = new Window_InventoryWeapons();
    this._weaponsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._weaponsWindow.deselect();
    });
    this._weaponsWindow.setHandler('ok', () => {
        this.activateCommandWindowWeapon();
    });
    this._weaponsWindow.hide();
    this.addWindow(this._weaponsWindow);
};

Scene_Equip.prototype.createWeaponsDetailsWindow = function() {
    this._weaponDetailsWindow = new Window_InventoryWeaponDetails(
        this._weaponsCommandWindow.fittingHeight(this._weaponsCommandWindow._actionsNumber)
    );
    this._weaponsWindow.setHandler('show_weapon_details', () => {
        this.showWeaponDetails();
    });
    this._weaponDetailsWindow.hide();
    this.addWindow(this._weaponDetailsWindow);
};

Scene_Equip.prototype.createWeaponsCommandWindow = function() {
    this._weaponsCommandWindow = new Window_InventoryWeaponCommand();
    this._weaponsCommandWindow.setHandler('cancel', () => {
        this._weaponsCommandWindow.deactivate();
        this._weaponsCommandWindow.deselect();
        this.activateInventoryWeapons(this._weaponsWindow.index());
    });
    this._weaponsCommandWindow.setHandler('inventory_weapon_equip', this.equipWeapon.bind(this));
    this._weaponsCommandWindow.setHandler('inventory_weapon_unequip', this.unequipWeapon.bind(this));
    this._weaponsCommandWindow.setHandler('inventory_weapon_transfer', this.transferWeapon.bind(this));
    this._weaponsCommandWindow.setHandler('inventory_weapon_reload', this.reloadWeapon.bind(this));
    this._weaponsCommandWindow.hide();
    this._weaponsCommandWindow.deselect();
    this.addWindow(this._weaponsCommandWindow);
};

Scene_Equip.prototype.activateInventoryWeapons = function(index = 0) {
    const nbWeapons = this._weaponsWindow.length();
    this.hideAllWindows();
    this._currentMainWindow = this._weaponsWindow;
    this._weaponsWindow.show();
    this._weaponDetailsWindow.show();
    this._weaponsCommandWindow.show();
    this._weaponsCommandWindow.deselect();
    if (nbWeapons > 0) {
        index = Math.min(index, nbWeapons - 1);
        this._commandWindow.deactivate();
        this._weaponsWindow.activate();
        this._weaponsWindow.select(index);
        this._weaponsCommandWindow.refresh();
    } else {
        this._commandWindow.activate();
        this._weaponsWindow.deselect();
        this._weaponDetailsWindow.empty();
        this._weaponDetailsWindow.clear();
        this._weaponsCommandWindow.clear();
    }
    this._weaponsWindow.refresh();
};

Scene_Equip.prototype.activateCommandWindowWeapon = function() {
    if (this._weaponsWindow.isOpenAndActive() && this._weaponsWindow.index() >= 0){
        this._weaponsWindow.deactivate();
        this._weaponsCommandWindow.show();
        this._weaponsCommandWindow.activate();
        this._weaponsCommandWindow.select(0);
    }
}

Scene_Equip.prototype.showWeaponDetails = function() {
    const weapon: LoadedWeapon = this._weaponsWindow.weaponFromIndex(this._weaponsWindow.index());
    if (weapon) {
        this._weaponDetailsWindow._weapon = weapon;
        this._weaponsCommandWindow.refreshCommand(this._actor, weapon.equipIndex);
        this._weaponDetailsWindow.refresh();
    } else {
        this._weaponDetailsWindow.clear();
        this._weaponsCommandWindow.clear();
    }
}

Scene_Equip.prototype.equipWeapon = function() {
    const weapon: LoadedWeapon = this._weaponsWindow.item();
    if (weapon.group === WeaponGroup.PARRY
        || weapon.qualities.some((quality) =>
            quality === WeaponQuality.SHIELD_1
            || quality === WeaponQuality.SHIELD_2
            || quality === WeaponQuality.SHIELD_3
            || quality === WeaponQuality.SHIELD_4
            || quality === WeaponQuality.SHIELD_5)
    ) {
        this._actor.unequipSecondHand();
        this._actor.equipSecondHand(weapon.equipIndex);
    } else {
        this._actor.unequipMainHand();
        this._actor.equipMainHand(weapon.equipIndex);
    }
    this._weaponsWindow.syncActor();
    this._weaponsCommandWindow.callHandler('cancel');
}

Scene_Equip.prototype.unequipWeapon = function() {
    const weaponIndex = this._weaponsWindow.index();
    if (weaponIndex === 0) {
        this._actor.unequipMainHand();
    } else if (weaponIndex === 1) {
        this._actor.unequipSecondHand();
    }
    this._weaponsWindow.syncActor();
    this._weaponsCommandWindow.callHandler('cancel');
}

Scene_Equip.prototype.transferWeapon = function() {
    this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.WEAPON)
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
}

Scene_Equip.prototype.reloadWeapon = function() {
    console.log("Reload weapon : ", this._weaponsWindow.index());
    this._weaponsCommandWindow.callHandler('cancel');
}
