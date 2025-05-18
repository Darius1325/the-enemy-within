// $PluginCompiler TEW_Menus.js 101

// ----------------------

// File: Scene_Equip.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Scene_Equip class, which is responsible for displaying the equipment screen in the game. It includes methods for creating the command window, stats window, weapons window, armors window, items window, and ammo window. The class also handles user input and navigation between different windows within the equipment screen.

// ----------------------
// Imports
// ----------------------

import { WeaponGroup, WeaponQuality } from "../../types/enum";
import HalfWindow_List from "../base/HalfWindow_List";
import Window_InventoryAmmo from "./ammo/Window_InventoryAmmo";
import Window_InventoryArmorCommand from "./armors/Window_InventoryArmorCommand";
import Window_InventoryArmorDetails from "./armors/Window_InventoryArmorDetails";
import Window_InventoryArmors from "./armors/Window_InventoryArmors";
import Window_InventoryInfo from "./info/Window_InventoryInfo";
import Window_InventoryItemCommand from "./items/Window_InventoryItemCommand";
import Window_InventoryItemDetails from "./items/Window_InventoryItemDetails";
import Window_InventoryItems from "./items/Window_InventoryItems";
import Window_InventoryWeaponCommand from "./weapons/Window_InventoryWeaponCommand";
import Window_InventoryWeaponDetails from "./weapons/Window_InventoryWeaponDetails";
import Window_InventoryWeapons, { LoadedWeapon } from "./weapons/Window_InventoryWeapons";
import Window_InventoryCommand from "./Window_InventoryCommand";
import Window_InventoryTransferCommand from "./Window_InventoryTransferCommand";
import TEW from "../../types/tew";

// ----------------------
// $StartCompilation
// ----------------------

Scene_Equip.prototype.INFOS_WINDOW_INDEX = 0;
Scene_Equip.prototype.WEAPONS_WINDOW_INDEX = 1;
Scene_Equip.prototype.ARMORS_WINDOW_INDEX = 2;
Scene_Equip.prototype.ITEMS_WINDOW_INDEX = 3;
Scene_Equip.prototype.AMMO_WINDOW_INDEX = 4;

// Creating the scene
Scene_Equip.prototype.create = function() {
    // Init
    Scene_MenuBase.prototype.create.call(this);

    // Command window
    this.createCommandWindow();

    // Info windows
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

    // Transfer weapon
    this.createTransferCommandWindow();

    this.activateInventoryInfos(); // Deactivate all the windows, except the infos one
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

// Creating the infos Window for the scene
Scene_Equip.prototype.createInfosWindow = function() {
    this._infosWindow = new Window_InventoryInfo();
    // this._statsWindow.reserveFaceImages();
    this.addWindow(this._infosWindow);
};

// Creating the weapons Window for the scene
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

// Creating the armors Window for the scene
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

// Creating the items Window for the scene
Scene_Equip.prototype.createItemsWindow = function() {
    this._itemsWindow = new Window_InventoryItems();
    this._itemsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._itemsWindow.deselect();
    });
    this._itemsWindow.setHandler('ok', () => {
        this.activateCommandWindowItem();
    });
    this._itemsWindow.hide();
    this.addWindow(this._itemsWindow);
};

Scene_Equip.prototype.createItemsCommandWindow = function() {
    this._itemsCommandWindow = new Window_InventoryItemCommand();
    this._itemsCommandWindow.setHandler('cancel', () => {
        this._itemsCommandWindow.deactivate();
        this._itemsCommandWindow.deselect();
        this.activateInventoryItems(this._itemsWindow.index());
    });
    this._itemsCommandWindow.setHandler('inventory_item_use', this.useItem.bind(this));
    this._itemsCommandWindow.setHandler('inventory_item_transfer', this.transferItem.bind(this));
    this._itemsCommandWindow.hide();
    this._itemsCommandWindow.deselect();
    this.addWindow(this._itemsCommandWindow);
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

// Creating the ammo Window for the scene
Scene_Equip.prototype.createAmmoWindow = function() {
    this._ammoWindow = new Window_InventoryAmmo();
    this._ammoWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._ammoWindow.deselect();
    });
    this._ammoWindow.hide();
    this.addWindow(this._ammoWindow);
};

// Creating the items details Window for the scene
Scene_Equip.prototype.createItemsDetailsWindow = function() {
    this._itemsDetailsWindow = new Window_InventoryItemDetails(
        this._itemsCommandWindow.fittingHeight(this._itemsCommandWindow._actionsNumber)
    );
    this._itemsWindow.setHandler('show_item_details', () => {
        this.showItemDetails();
    });
    this._itemsDetailsWindow.hide();
    this.addWindow(this._itemsDetailsWindow);
};

// Creating the weapons details Window for the scene
Scene_Equip.prototype.createWeaponsDetailsWindow = function() {
    this._weaponsDetailsWindow = new Window_InventoryWeaponDetails(
        this._weaponsCommandWindow.fittingHeight(this._weaponsCommandWindow._actionsNumber)
    );
    this._weaponsWindow.setHandler('show_weapon_details', () => {
        this.showWeaponDetails();
    });
    this._weaponsDetailsWindow.hide();
    this.addWindow(this._weaponsDetailsWindow);
};

// Creating the armors details Window for the scene
Scene_Equip.prototype.createArmorsDetailsWindow = function() {
    this._armorsDetailsWindow = new Window_InventoryArmorDetails(
        this._armorsCommandWindow.fittingHeight(this._armorsCommandWindow._actionsNumber)
    );
    this._armorsWindow.setHandler('show_armor_details', () => {
        this.showArmorDetails();
    });
    this._armorsDetailsWindow.hide();
    this.addWindow(this._armorsDetailsWindow);
};

// Creating the armors details Window for the scene
Scene_Equip.prototype.createTransferCommandWindow = function() {
    this._transferCommandWindow = new Window_InventoryTransferCommand();
    this._transferCommandWindow.setHandler('cancel', () => {
        this._transferCommandWindow.deactivate();
        this._transferCommandWindow.deselect();
        switch (this._transferCommandWindow.type) {
        case "item":
            this.activateInventoryItems(this._itemsWindow.index());
            break;
        case "weapon":
            this.activateInventoryWeapons(this._weaponsWindow.index());
            break;
        case "armor":
            this.activateInventoryArmors(this._armorsWindow.index());
            break;
        case "ammo":
            this.activateInventoryAmmo(this._ammoWindow.index());
            break;
        };
    });
    for (let i = 1; i < $gameActors._data.length; i++) {
        this._transferCommandWindow.setHandler("inventory_transfer_to_" + (i - 1), () => {
            this.doTransfer(i);
        });
    }
    this._transferCommandWindow.hide();
    this._transferCommandWindow.deselect();
    this.addWindow(this._transferCommandWindow);
};

// Hiding all the windows
Scene_Equip.prototype.hideAllWindows = function() {
    this._infosWindow.hide();
    this._infosWindow.deactivate();

    this._weaponsWindow.hide();
    this._weaponsWindow.deactivate();

    this._weaponsDetailsWindow.hide();
    this._weaponsDetailsWindow.deactivate();

    this._weaponsCommandWindow.hide();
    this._weaponsCommandWindow.deactivate();

    this._armorsWindow.hide();
    this._armorsWindow.deactivate();

    this._armorsDetailsWindow.hide();
    this._armorsDetailsWindow.deactivate();

    this._armorsCommandWindow.hide();
    this._armorsCommandWindow.deactivate();

    this._itemsWindow.hide();
    this._itemsWindow.deactivate();

    this._itemsDetailsWindow.hide();
    this._itemsDetailsWindow.deactivate();

    this._itemsCommandWindow.hide();
    this._itemsCommandWindow.deactivate();

    this._ammoWindow.hide();
    this._ammoWindow.deactivate();

    this._transferCommandWindow.hide();
    this._transferCommandWindow.deactivate();
};

// Showing the corresponding window according to the current command window index
Scene_Equip.prototype.displayWindow = function() {
    // hide all
    this.hideAllWindows();

    // Changing window
    if (this._commandWindow.index() == this.INFOS_WINDOW_INDEX) {
        this._infosWindow.show();
        this._infosWindow.refresh();
    } else if (this._commandWindow.index() == this.WEAPONS_WINDOW_INDEX) {
        this._weaponsWindow.show();
        this._weaponsDetailsWindow.show();
        this._weaponsCommandWindow.show();
        this._weaponsWindow.refresh();
        this._weaponsDetailsWindow.refresh();
        this._weaponsCommandWindow.refresh();
    } else if (this._commandWindow.index() == this.ARMORS_WINDOW_INDEX) {
        this._armorsWindow.show();
        this._armorsDetailsWindow.show();
        this._armorsCommandWindow.show();
        this._armorsWindow.refresh();
        this._armorsDetailsWindow.refresh();
        this._armorsCommandWindow.refresh();
    } else if (this._commandWindow.index() == this.ITEMS_WINDOW_INDEX) {
        this._itemsWindow.show();
        this._itemsDetailsWindow.show();
        this._itemsCommandWindow.show();
        this._itemsWindow.refresh();
        this._itemsDetailsWindow.refresh();
        this._itemsCommandWindow.refresh();
    } else if (this._commandWindow.index() == this.AMMO_WINDOW_INDEX) {
        this._ammoWindow.show();
        this._ammoWindow.refresh();
    }
};

// Activating the infos window
Scene_Equip.prototype.activateInventoryInfos = function() {
    this.hideAllWindows();
    this._infosWindow.show();
    this._commandWindow.activate();
    this._infosWindow.refresh();
};

// Activating the weapons window
Scene_Equip.prototype.activateInventoryWeapons = function(index = 0) {
    index = Math.min(index, this._weaponsWindow._weapons.length - 1);
    this.hideAllWindows()
    this._weaponsWindow.show();
    this._commandWindow.deactivate();
    this._weaponsWindow.activate();
    this._weaponsDetailsWindow.show();
    this._weaponsCommandWindow.show();
    this._weaponsWindow.select(index);
    this._weaponsWindow.refresh();
};

// Activating the armors window
Scene_Equip.prototype.activateInventoryArmors = function(index = 0) {
    index = Math.min(index, this._armorsWindow._armors.length - 1);
    this.hideAllWindows();
    this._armorsWindow.show();
    this._commandWindow.deactivate();
    this._armorsWindow.activate();
    this._armorsDetailsWindow.show();
    this._armorsCommandWindow.show();
    this._armorsWindow.select(index);
    this._armorsWindow.refresh();
};

// Activating the items window
Scene_Equip.prototype.activateInventoryItems = function(index = 0) {
    index = Math.min(index, this._itemsWindow._items.length - 1);
    this.hideAllWindows();
    this._itemsWindow.show();
    this._itemsDetailsWindow.show();
    this._itemsCommandWindow.show();
    this._itemsCommandWindow.deselect();
    this._commandWindow.deactivate();
    this._itemsWindow.activate();
    this._itemsWindow.select(index);
    this._itemsWindow.refresh();
};

// Activating the ammo window
Scene_Equip.prototype.activateInventoryAmmo = function(index = 0) {
    index = Math.min(index, this._ammoWindow._ammo.length - 1);
    this.hideAllWindows();
    this._ammoWindow.show();
    this._commandWindow.deactivate();
    this._ammoWindow.activate();
    this._ammoWindow.select(index);
    this._ammoWindow.refresh();
};

Scene_Equip.prototype.activateCommandWindowItem = function() {
    if (this._itemsWindow.isOpenAndActive() && this._itemsWindow.index() >= 0){
        this._itemsWindow.deactivate();
        this._itemsCommandWindow.show();
        this._itemsCommandWindow.activate();
        this._itemsCommandWindow.select(0);
    }
}

Scene_Equip.prototype.activateCommandWindowWeapon = function() {
    if (this._weaponsWindow.isOpenAndActive() && this._weaponsWindow.index() >= 0){
        this._weaponsWindow.deactivate();
        this._weaponsCommandWindow.show();
        this._weaponsCommandWindow.activate();
        this._weaponsCommandWindow.select(0);
    }
}

Scene_Equip.prototype.activateCommandWindowArmor = function() {
    if (this._armorsWindow.isOpenAndActive() && this._armorsWindow.index() >= 0){
        this._armorsWindow.deactivate();
        this._armorsCommandWindow.show();
        this._armorsCommandWindow.activate();
        this._armorsCommandWindow.select(0);
    }
}

// Showing the item details - Triggered on the items window
Scene_Equip.prototype.showItemDetails = function() {
    const item = this._itemsWindow.itemFromIndex(this._itemsWindow.index());
    if (item) {
        item[1].quantity = this._itemsWindow._actor.item(item[0]);
        this._itemsDetailsWindow._item = item;
        this._itemsDetailsWindow.refresh();
    } else {
        this._itemsDetailsWindow.clear();
        this._itemsCommandWindow.clear();
    }
}

Scene_Equip.prototype.showWeaponDetails = function() {
    const weapon: LoadedWeapon = this._weaponsWindow.weaponFromIndex(this._weaponsWindow.index());
    this._weaponsDetailsWindow._weapon = weapon;
    this._weaponsCommandWindow.refreshCommand(this._actor, weapon.equipIndex);
    this._weaponsDetailsWindow.refresh();
}

Scene_Equip.prototype.showArmorDetails = function() {
    const armor = this._armorsWindow.armorFromIndex(this._armorsWindow.index());
    this._armorsDetailsWindow._armor = armor;
    this._armorsCommandWindow.refreshCommand(this._actor, armor[0]);
    this._armorsDetailsWindow.refresh();
}

// Using an item - Triggered on the items window
Scene_Equip.prototype.useItem = function() {
    console.log("Use item : ", this._itemsWindow.index());
    this._itemsCommandWindow.callHandler('cancel');
}

// Transfering an item - Triggered on the items window
Scene_Equip.prototype.transferItem = function() {
    // console.log("Transfer item", this._itemsWindow.index());
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
}

// Equipping a weapon - Triggered on the weapons window
Scene_Equip.prototype.equipWeapon = function() {
    const weapon: LoadedWeapon = this._weaponsWindow.weaponFromIndex(this._weaponsWindow.index());
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

// Unequipping a weapon - Triggered on the weapons window
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

// Transfering a weapon - Triggered on the weapons window
Scene_Equip.prototype.transferWeapon = function() {
    console.log("Transfer weapon", this._weaponsWindow.index());
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
}

// Reloading a weapon - Triggered on the weapons window
Scene_Equip.prototype.reloadWeapon = function() {
    console.log("Reload weapon : ", this._weaponsWindow.index());
    this._weaponsCommandWindow.callHandler('cancel');
}

// Equipping a weapon - Triggered on the weapons window
Scene_Equip.prototype.equipArmor = function() {
    console.log("Equip armor : ", this._armorsWindow.index());
    this._armorsCommandWindow.callHandler('cancel');
}

// Unequipping a weapon - Triggered on the weapons window
Scene_Equip.prototype.unequipArmor = function() {
    console.log("Unequip armor : ", this._armorsWindow.index());
    this._armorsCommandWindow.callHandler('cancel');
}

// Transfering a weapon - Triggered on the weapons window
Scene_Equip.prototype.transferArmor = function() {
    console.log("Transfer armor", this._armorsWindow.index());
    this._transferCommandWindow.activate();
}

Scene_Equip.prototype.doTransfer = function(actorIndex: number) {
    let item: string | number;
    let currentWindow;
    switch (this._transferCommandWindow.type) {        
        case "item":
            item = this._itemsWindow.item()[0];
            currentWindow = this._itemsWindow;
            break;
        case "weapon":
            item = this._weaponsWindow.item().equipIndex;
            currentWindow = this._weaponsWindow;
            break;
        case "armor":
            item = this._armorsWindow.item()[0];
            currentWindow = this._armorsWindow;
            break;
        case "ammo":
            item = this._ammoWindow.item()[0];
            currentWindow = this._ammoWindow;
            break;
    }
    this._transferCommandWindow.doTransfer($gameActors._data[actorIndex], item);
    currentWindow.syncActor();
    this._transferCommandWindow.callHandler('cancel');
}
