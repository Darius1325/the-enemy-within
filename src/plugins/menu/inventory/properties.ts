// $PluginCompiler TEW_Menus.js 1

import TEW from "../../types/TEW";

// $StartCompilation

TEW.MENU.COMMAND_NAMES = TEW.MENU.COMMAND_NAMES || {};
TEW.MENU.COMMAND_NAMES[40] = "InventoryNextChar";
TEW.MENU.COMMAND_NAMES[41] = "InventoryPreviousChar";
TEW.MENU.COMMAND_NAMES[42] = "Infos";
TEW.MENU.COMMAND_NAMES[43] = "Weapons";
TEW.MENU.COMMAND_NAMES[44] = "Armors";
TEW.MENU.COMMAND_NAMES[45] = "Items";
TEW.MENU.COMMAND_NAMES[46] = "Ammo";
TEW.MENU.COMMAND_NAMES[47] = "Use";
TEW.MENU.COMMAND_NAMES[48] = "Transfer";
TEW.MENU.COMMAND_NAMES[49] = "Equip";
TEW.MENU.COMMAND_NAMES[50] = "Unequip";
TEW.MENU.COMMAND_NAMES[51] = "Transfer";
TEW.MENU.COMMAND_NAMES[52] = "Reload";
TEW.MENU.COMMAND_NAMES[53] = "Equip";
TEW.MENU.COMMAND_NAMES[54] = "Unequip";
TEW.MENU.COMMAND_NAMES[55] = "Transfer";

TEW.MENU.MENU_LINE_HEIGHT = 36;

// TextManager
// Override commands
TextManager.command = function(commandId) {
    if (commandId <= 25) {
        return $dataSystem.terms.commands[commandId] || '';
    } else {
        return TEW.MENU.COMMAND_NAMES[commandId] || '';
    }
};

// A key
Input.keyMapper[65] = "A_Key";
Input.keyMapper[69] = "E_Key";


// Windows
TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT = 70;

// The window for selecting a command on the inventory screen.
// Adding new Commands Entries

Object.defineProperties(TextManager, {
    inventoryNextChar :         TextManager.getter('command', 40),
    inventoryPreviousChar :     TextManager.getter('command', 41),
    inventoryInfos :            TextManager.getter('command', 42),
    inventoryWeapons :          TextManager.getter('command', 43),
    inventoryArmors :           TextManager.getter('command', 44),
    inventoryItems :            TextManager.getter('command', 45),
    inventoryAmmo :             TextManager.getter('command', 46),
    inventoryItemUse :          TextManager.getter('command', 47),
    inventoryItemTransfer :     TextManager.getter('command', 48),
    inventoryWeaponEquip :      TextManager.getter('command', 49),
    inventoryWeaponUnequip :    TextManager.getter('command', 50),
    inventoryWeaponTransfer :   TextManager.getter('command', 51),
    inventoryWeaponReload :     TextManager.getter('command', 52),
    inventoryArmorEquip :       TextManager.getter('command', 53),
    inventoryArmorUnequip :     TextManager.getter('command', 54),
    inventoryArmorTransfer :    TextManager.getter('command', 55)
});
