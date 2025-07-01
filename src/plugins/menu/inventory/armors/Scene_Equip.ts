// $PluginCompiler TEW_Menus.js 102

// ----------------------

// File: Scene_Equip.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: Functions to manage the armors inventory window through the main scene

// ----------------------
// Imports
// ----------------------

import { Scene_Equip } from "../Scene_Equip";
import { Armor } from "../../../_types/armor";
import { ArmorGroup, ArmorQuality } from "../../../_types/enum";
import { Game_Actor } from "../../../base/stats/Game_Actor";
import TEW from "../../../_types/tew";
import Window_InventoryTransferCommand from "../Window_InventoryTransferCommand";
import Window_InventoryArmorDetails from "./Window_InventoryArmorDetails";
import Window_InventoryArmorCommand from "./Window_InventoryArmorCommand";
import Window_InventoryArmors from "./Window_InventoryArmors";

// ----------------------
// $StartCompilation
// ----------------------

Scene_Equip.prototype.createArmorsWindow = function() {
    this._armorsWindow = new Window_InventoryArmors();
    this._armorsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._armorsWindow.deselect();
    });
    this._armorsWindow.setHandler('ok', () => {
        this.activateCommandWindowArmor();
    });
    this._armorsWindow.hide();
    this.addWindow(this._armorsWindow);
};

Scene_Equip.prototype.createArmorsCommandWindow = function() {
    this._armorsCommandWindow = new Window_InventoryArmorCommand();
    this._armorsCommandWindow.setHandler('cancel', () => {
        this._armorsCommandWindow.deactivate();
        this._armorsCommandWindow.deselect();
        this.activateInventoryArmors(this._armorsWindow.index());
    });
    this._armorsCommandWindow.setHandler('inventory_armor_equip', this.equipArmor.bind(this));
    this._armorsCommandWindow.setHandler('inventory_armor_unequip', this.unequipArmor.bind(this));
    this._armorsCommandWindow.setHandler('inventory_armor_transfer', this.transferArmor.bind(this));
    this._armorsCommandWindow.hide();
    this._armorsCommandWindow.deselect();
    this.addWindow(this._armorsCommandWindow);
};

Scene_Equip.prototype.createArmorsDetailsWindow = function() {
    this._armorDetailsWindow = new Window_InventoryArmorDetails(
        this._armorsCommandWindow.fittingHeight(this._armorsCommandWindow._actionsNumber)
    );
    this._armorsWindow.setHandler('show_armor_details', () => {
        this.showArmorDetails();
    });
    this._armorDetailsWindow.hide();
    this.addWindow(this._armorDetailsWindow);
};

Scene_Equip.prototype.activateInventoryArmors = function(index = 0) {
    const nbArmors = this._armorsWindow.length();
    this.hideAllWindows();
    this._currentMainWindow = this._armorsWindow;
    this._armorsWindow.show();
    this._armorDetailsWindow.show();
    this._armorsCommandWindow.show();
    this._armorsCommandWindow.deselect();
    if (nbArmors > 0) {
        index = Math.min(index, nbArmors - 1);
        this._commandWindow.deactivate();
        this._armorsWindow.activate();
        this._armorsWindow.select(index);
        this._armorsCommandWindow.refresh();
    } else {
        this._commandWindow.activate();
        this._armorsWindow.deselect();
        this._armorDetailsWindow.empty();
        this._armorDetailsWindow.clear();
        this._armorsCommandWindow.clearCommandList();
        this._armorsCommandWindow.clear();
    }
    this._armorsWindow.refresh();
};

Scene_Equip.prototype.activateCommandWindowArmor = function() {
    if (this._armorsWindow.isOpenAndActive() && this._armorsWindow.index() >= 0){
        this._armorsWindow.deactivate();
        this._armorsCommandWindow.show();
        this._armorsCommandWindow.activate();
        this._armorsCommandWindow.select(0);
    }
}

Scene_Equip.prototype.showArmorDetails = function() {
    const armor = this._armorsWindow.armorFromIndex(this._armorsWindow.index());
    if (armor) {
        this._armorDetailsWindow._armor = armor;
        this._armorsCommandWindow.refreshCommand(armor[1].equipped, armor[0]);
        this._armorDetailsWindow.refresh();
    } else {
        this._armorDetailsWindow.clear();
        this._armorsCommandWindow.clear();
    }
}

// Equipping an armor - Triggered on the armors window
Scene_Equip.prototype.equipArmor = function() {
    const armor: [string, Armor] = this._armorsWindow.item();

    // Check compatibility with all armor groups equipped at relevant locations
    const locations = armor[1].locations;
    const overlappingArmors: Armor[] = locations.length === 1
        ? this._actor.armorsAtLocation(locations[0])
        : this._actor.armorsAtLocations(locations);
    const overlappingGroups = overlappingArmors.map(a => a.group);
    let cannotEquip = [...armor[1].forbiddenWith, armor[1].group]
        .some(group => overlappingGroups.includes(group));

    // Check that soft kit is equipped if needed
    const requiresKit = armor[1].qualities.includes(ArmorQuality.REQUIRES_KIT);
    if (requiresKit) {
        cannotEquip = cannotEquip || !overlappingArmors.some(a => a.group === ArmorGroup.SOFT_KIT);
    }

    if (cannotEquip) {
        // TODO play BGM
        this._armorsCommandWindow.activate();
    } else {
        this._actor.equipArmor(armor[0]);
        this._armorsWindow.syncActor();
        // TODO play BGM
        this._armorsCommandWindow.callHandler('cancel');
    }
}

// Unequipping an armor - Triggered on the armors window
Scene_Equip.prototype.unequipArmor = function() {
    const actor: Game_Actor = this._actor;
    const armor: [string, Armor] = this._armorsWindow.item();
    if (armor[1].group === ArmorGroup.SOFT_KIT) {
        actor.unequipArmors([armor[0], ...actor.equippedArmors.filter(
            armorId => TEW.DATABASE.ARMORS.SET[armorId].qualities.includes(ArmorQuality.REQUIRES_KIT))]);
    } else {
        actor.unequipArmor(armor[0]);
    }

    this._armorsWindow.syncActor();
    // play BGM
    this._armorsCommandWindow.callHandler('cancel');
}

// Transferring an armor - Triggered on the armors window
Scene_Equip.prototype.transferArmor = function() {
    this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.ARMOR)
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
}
