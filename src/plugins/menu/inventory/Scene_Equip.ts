// $PluginCompiler TEW_Menus.js 101

// ----------------------

// File: Scene_Equip.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Scene_Equip class, which is responsible for displaying the equipment screen in the game. It includes methods for creating the command window, stats window, weapons window, armors window, items window, and ammo window. The class also handles user input and navigation between different windows within the equipment screen.

// ----------------------
// Imports
// ----------------------

import { ArmorGroup, ArmorQuality, WeaponGroup, WeaponQuality } from "../../types/enum";
import Window_InventoryAmmo from "./ammo/Window_InventoryAmmo";
import Window_InventoryArmorCommand, { IWindow_InventoryArmorCommand } from "./armors/Window_InventoryArmorCommand";
import Window_InventoryArmorDetails, { IWindow_InventoryArmorDetails } from "./armors/Window_InventoryArmorDetails";
import Window_InventoryArmors, { IWindow_InventoryArmors } from "./armors/Window_InventoryArmors";
import Window_InventoryInfo from "./info/Window_InventoryInfo";
import Window_InventoryItemCommand, {IWindow_InventoryItemCommand} from "./items/Window_InventoryItemCommand";
import Window_InventoryItemDetails, {IWindow_InventoryItemDetails} from "./items/Window_InventoryItemDetails";
import Window_InventoryItems, {IWindow_InventoryItems} from "./items/Window_InventoryItems";
import Window_InventoryWeaponCommand, { IWindow_InventoryWeaponCommand } from "./weapons/Window_InventoryWeaponCommand";
import Window_InventoryWeaponDetails, { IWindow_InventoryWeaponDetails } from "./weapons/Window_InventoryWeaponDetails";
import Window_InventoryWeapons, { IWindow_InventoryWeapons, LoadedWeapon } from "./weapons/Window_InventoryWeapons";
import Window_InventoryCommand from "./Window_InventoryCommand";
import Window_InventoryTransferCommand from "./Window_InventoryTransferCommand";
import { Armor } from "../../types/armor";
import { Game_Actor } from "../../base/stats/Game_Actor";
import TEW from "../../types/tew";
import Window_InventoryTransferSpinner from "./Window_InventoryTransferSpinner";

export interface Scene_Equip {
    _actor: Game_Actor;

    _itemsWindow: IWindow_InventoryItems;
    _itemDetailsWindow: IWindow_InventoryItemDetails;
    _itemsCommandWindow: IWindow_InventoryItemCommand;

    _weaponsWindow: IWindow_InventoryWeapons;
    _weaponDetailsWindow: IWindow_InventoryWeaponDetails;
    _weaponsCommandWindow: IWindow_InventoryWeaponCommand;

    _armorsWindow: IWindow_InventoryArmors;
    _armorDetailsWindow: IWindow_InventoryArmorDetails;
    _armorsCommandWindow: IWindow_InventoryArmorCommand;

    _currentMainWindow: any;

    createCommandWindow: () => void;
    createWeaponsWindow: () => void;
    createWeaponsCommandWindow: () => void;
    createWeaponsDetailsWindow: () => void;
    createArmorsWindow: () => void;
    createArmorsCommandWindow: () => void;
    createArmorsDetailsWindow: () => void;
    createItemsWindow: () => void;
    createItemsCommandWindow: () => void;
    createItemsDetailsWindow: () => void;
    createAmmoWindow: () => void;
    createTransferCommandWindow: () => void;
    createTransferSpinnerWindow: () => void;

    hideAllWindows: () => void;
    displayWindow: () => void;

    activateInventoryInfos: () => void;
    activateInventoryWeapons: () => void;
    activateInventoryArmors: () => void;
    activateInventoryItems: () => void;
    activateInventoryAmmo: () => void;
    activateCommandWindowItem: () => void;
    activateCommandWindowWeapon: () => void;
    activateCommandWindowArmor: () => void;

    showItemDetails: () => void;
    showWeaponDetails: () => void;
    showArmorDetails: () => void;

    useItem: () => void;
    transferItem: () => void;

    equipWeapon: () => void;
    unequipWeapon: () => void;
    transferWeapon: () => void;
    reloadWeapon: () => void;

    equipArmor: () => void;
    unequipArmor: () => void;
    transferArmor: () => void;

    initTransfer: () => void;
    doTransfer: () => void;

    refreshActor: () => void;
};

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

    // Transfer objects (armors, weapons, items, ammo)
    this.createTransferCommandWindow();
    this.createTransferSpinnerWindow();

    this._currentMainWindow = this._infosWindow;
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

// Create the ammo Window for the scene
Scene_Equip.prototype.createAmmoWindow = function() {
    this._ammoWindow = new Window_InventoryAmmo();
    this._ammoWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._ammoWindow.deselect();
    });
    this._ammoWindow.hide();
    this.addWindow(this._ammoWindow);
};

// Create the items details Window for the scene
Scene_Equip.prototype.createItemsDetailsWindow = function() {
    this._itemDetailsWindow = new Window_InventoryItemDetails(
        this._itemsCommandWindow.fittingHeight(this._itemsCommandWindow._actionsNumber)
    );
    this._itemsWindow.setHandler('show_item_details', () => {
        this.showItemDetails();
    });
    this._itemDetailsWindow.hide();
    this.addWindow(this._itemDetailsWindow);
};

// Create the weapons details Window for the scene
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

// Create the armors details Window for the scene
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
    if (this._commandWindow.index() == this.INFOS_WINDOW_INDEX) {
        this._infosWindow.show();
        this._infosWindow.refresh();
    } else if (this._commandWindow.index() == this.WEAPONS_WINDOW_INDEX) {
        this._weaponsWindow.show();
        this._weaponDetailsWindow.show();
        this._weaponsCommandWindow.show();
        this._weaponsWindow.refresh();
        this._weaponDetailsWindow.refresh();
        this._weaponsCommandWindow.clear();
    } else if (this._commandWindow.index() == this.ARMORS_WINDOW_INDEX) {
        this._armorsWindow.show();
        this._armorDetailsWindow.show();
        this._armorsCommandWindow.show();
        this._armorsWindow.refresh();
        this._armorDetailsWindow.refresh();
        this._armorsCommandWindow.clear();
    } else if (this._commandWindow.index() == this.ITEMS_WINDOW_INDEX) {
        this._itemsWindow.show();
        this._itemDetailsWindow.show();
        this._itemsCommandWindow.show();
        this._itemsWindow.refresh();
        this._itemDetailsWindow.refresh();
        this._itemsCommandWindow.clear();
    } else if (this._commandWindow.index() == this.AMMO_WINDOW_INDEX) {
        this._ammoWindow.show();
        this._ammoWindow.refresh();
    }
};

// Activate the infos window
Scene_Equip.prototype.activateInventoryInfos = function() {
    this.hideAllWindows();
    this._currentMainWindow = this._infosWindow;
    this._infosWindow.show();
    this._commandWindow.activate();
    this._infosWindow.refresh();
};

// Activate the weapons window
Scene_Equip.prototype.activateInventoryWeapons = function(index = 0) {
    const nbWeapons = this._weaponsWindow.length();
    console.log("activateInventoryWeapons - nbWeapons : ", nbWeapons)
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
        this._weaponsCommandWindow.clearCommandList();
        this._weaponsCommandWindow.clear();
    }
    this._weaponsWindow.refresh();
};

// Activate the armors window
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

// Activate the items window
Scene_Equip.prototype.activateInventoryItems = function(index = 0) {
    const nbItems = this._itemsWindow._items.length;
    console.log("activateInventoryItems - nbItems : ", nbItems)
    this.hideAllWindows();
    this._currentMainWindow = this._itemsWindow;
    this._itemsWindow.show();
    this._itemDetailsWindow.show();
    this._itemsCommandWindow.show();
    this._itemsCommandWindow.deselect();
    if (nbItems > 0) {
        index = Math.min(index, nbItems - 1);
        this._commandWindow.deactivate();
        this._itemsWindow.activate();
        this._itemsWindow.select(index);
        this._itemsCommandWindow.refresh();
    } else {
        this._commandWindow.activate();
        this._itemsWindow.deselect();
        this._itemDetailsWindow.empty();
        this._itemDetailsWindow.clear();
        this._itemsCommandWindow.clearCommandList();
        this._itemsCommandWindow.clear();
    }
    this._itemsWindow.refresh();
};

// Activate the ammo window
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
        this._itemDetailsWindow._item = item;
        this._itemDetailsWindow.refresh();
    } else {
        this._itemDetailsWindow.clear();
        this._itemsCommandWindow.clear();
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

// Using an item - Triggered on the items window
Scene_Equip.prototype.useItem = function() {
    console.log("Use item : ", this._itemsWindow.index());
    this._itemsCommandWindow.callHandler('cancel');
}

// Transfering an item - Triggered on the items window
Scene_Equip.prototype.transferItem = function() {
    this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.ITEM)
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
}

// Equipping a weapon - Triggered on the weapons window
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
    this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.WEAPON)
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
}

// Reloading a weapon - Triggered on the weapons window
Scene_Equip.prototype.reloadWeapon = function() {
    console.log("Reload weapon : ", this._weaponsWindow.index());
    this._weaponsCommandWindow.callHandler('cancel');
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
