// $PluginCompiler TEW_Menus.js 1

import {Game_Actor} from "../../../base/stats/Game_Actor";
import {IWindow_InventoryItems} from "../items/Window_InventoryItems";
import {IWindow_InventoryItemDetails} from "../items/Window_InventoryItemDetails";
import {IWindow_InventoryItemCommand} from "../items/Window_InventoryItemCommand";
import {IWindow_InventoryWeapons} from "../weapons/Window_InventoryWeapons";
import {IWindow_InventoryWeaponDetails} from "../weapons/Window_InventoryWeaponDetails";
import {IWindow_InventoryWeaponCommand} from "../weapons/Window_InventoryWeaponCommand";
import {IWindow_InventoryArmors} from "../armors/Window_InventoryArmors";
import {IWindow_InventoryArmorDetails} from "../armors/Window_InventoryArmorDetails";
import {IWindow_InventoryArmorCommand} from "../armors/Window_InventoryArmorCommand";

export interface Scene_Equip {
    INFOS_WINDOW_INDEX: 0;
    WEAPONS_WINDOW_INDEX: 1;
    ARMORS_WINDOW_INDEX: 2;
    ITEMS_WINDOW_INDEX: 3;
    AMMO_WINDOW_INDEX: 4;

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

    create: () => void;
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
}

// $StartCompilation
