// $PluginCompiler TEW_Menus.js 1

// ----------------------

// File: properties.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the properties for the TEW menu system. It includes the command names, window dimensions, and other related properties. The properties are defined using the TEW.MENU namespace and are used throughout the menu system to ensure consistency and ease of maintenance.

import TEW from "../../_types/tew";

// $StartCompilation

TEW.MENU.COMMAND_NAMES = TEW.MENU.COMMAND_NAMES || {};

// Main Menu
TEW.MENU.COMMAND_NAMES[30] = "Status";
TEW.MENU.COMMAND_NAMES[31] = "Inventory";
TEW.MENU.COMMAND_NAMES[32] = "Quests";
TEW.MENU.COMMAND_NAMES[33] = "Formation";
TEW.MENU.COMMAND_NAMES[34] = "Options";
TEW.MENU.COMMAND_NAMES[35] = "Save";
TEW.MENU.COMMAND_NAMES[36] = "Quit";

// Status Menu
TEW.MENU.COMMAND_NAMES[50] = "Stats";
TEW.MENU.COMMAND_NAMES[51] = "Skills";
TEW.MENU.COMMAND_NAMES[52] = "Talents";
TEW.MENU.COMMAND_NAMES[53] = "Spells";
TEW.MENU.COMMAND_NAMES[54] = "Cast";

// Inventory Menu
TEW.MENU.COMMAND_NAMES[70] = "InventoryNextChar";
TEW.MENU.COMMAND_NAMES[71] = "InventoryPreviousChar";
TEW.MENU.COMMAND_NAMES[72] = "Infos";
TEW.MENU.COMMAND_NAMES[73] = "Weapons";
TEW.MENU.COMMAND_NAMES[74] = "Armors";
TEW.MENU.COMMAND_NAMES[75] = "Items";
TEW.MENU.COMMAND_NAMES[76] = "Ammo";
TEW.MENU.COMMAND_NAMES[77] = "Use";
TEW.MENU.COMMAND_NAMES[78] = "Transfer";
TEW.MENU.COMMAND_NAMES[79] = "Equip";
TEW.MENU.COMMAND_NAMES[80] = "Unequip";
TEW.MENU.COMMAND_NAMES[81] = "Transfer";
TEW.MENU.COMMAND_NAMES[82] = "Reload";
TEW.MENU.COMMAND_NAMES[83] = "Equip";
TEW.MENU.COMMAND_NAMES[84] = "Unequip";
TEW.MENU.COMMAND_NAMES[85] = "Transfer";
TEW.MENU.COMMAND_NAMES[86] = TEW.CHARACTERS.ARRAY[0];
TEW.MENU.COMMAND_NAMES[87] = TEW.CHARACTERS.ARRAY[1];
TEW.MENU.COMMAND_NAMES[88] = TEW.CHARACTERS.ARRAY[2];
TEW.MENU.COMMAND_NAMES[89] = TEW.CHARACTERS.ARRAY[3];
TEW.MENU.COMMAND_NAMES[90] = TEW.CHARACTERS.ARRAY[4];
TEW.MENU.COMMAND_NAMES[91] = TEW.CHARACTERS.ARRAY[5];

TEW.MENU.LINE_HEIGHT = 36;

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
TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT = 70;
TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT = 140;

// The window for selecting a command on the inventory screen.
// Adding new Commands Entries

Object.defineProperties(TextManager, {
    // Main Menu
    mainMenuStatus :          TextManager.getter('command', 30),
    mainMenuInventory :       TextManager.getter('command', 31),
    mainMenuQuests :          TextManager.getter('command', 32),
    mainMenuFormation :       TextManager.getter('command', 33),
    mainMenuOptions :         TextManager.getter('command', 34),
    mainMenuSave :            TextManager.getter('command', 35),
    mainMenuGameEnd :         TextManager.getter('command', 36),

    // Status Menu
    statusStats :               TextManager.getter('command', 50),
    statusComps :               TextManager.getter('command', 51),
    statusTalents :             TextManager.getter('command', 52),
    statusSpells :              TextManager.getter('command', 53),
    statusCastSpell :           TextManager.getter('command', 54),

    // Inventory Menu
    inventoryNextChar :         TextManager.getter('command', 70),
    inventoryPreviousChar :     TextManager.getter('command', 71),
    inventoryInfos :            TextManager.getter('command', 72),
    inventoryWeapons :          TextManager.getter('command', 73),
    inventoryArmors :           TextManager.getter('command', 74),
    inventoryItems :            TextManager.getter('command', 75),
    inventoryAmmo :             TextManager.getter('command', 76),
    inventoryItemUse :          TextManager.getter('command', 77),
    inventoryItemTransfer :     TextManager.getter('command', 78),
    inventoryWeaponEquip :      TextManager.getter('command', 79),
    inventoryWeaponUnequip :    TextManager.getter('command', 80),
    inventoryWeaponTransfer :   TextManager.getter('command', 81),
    inventoryWeaponReload :     TextManager.getter('command', 82),
    inventoryArmorEquip :       TextManager.getter('command', 83),
    inventoryArmorUnequip :     TextManager.getter('command', 84),
    inventoryArmorTransfer :    TextManager.getter('command', 85),
    inventoryTransferTo0 :      TextManager.getter('command', 86),
    inventoryTransferTo1 :      TextManager.getter('command', 87),
    inventoryTransferTo2 :      TextManager.getter('command', 88),
    inventoryTransferTo3 :      TextManager.getter('command', 89),
    inventoryTransferTo4 :      TextManager.getter('command', 90),
    inventoryTransferTo5 :      TextManager.getter('command', 91),
});
