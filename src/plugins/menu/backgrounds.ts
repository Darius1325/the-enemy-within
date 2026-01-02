// $PluginCompiler TEW_Menus.js 101
// Compiled after defining windows

import HalfWindow_Details from "./base/HalfWindow_Details";
import HalfWindow_DetailsCommand from "./base/HalfWindow_DetailsCommand";
import HalfWindow_List from "./base/HalfWindow_List";
import Window_InventoryArmorCommand from "./inventory/armors/Window_InventoryArmorCommand";
import Window_InventoryArmorDetails from "./inventory/armors/Window_InventoryArmorDetails";
import Window_InventoryItemCommand from "./inventory/items/Window_InventoryItemCommand";
import Window_InventoryItemDetails from "./inventory/items/Window_InventoryItemDetails";
import Window_InventoryWeaponCommand from "./inventory/weapons/Window_InventoryWeaponCommand";
import Window_InventoryWeaponDetails from "./inventory/weapons/Window_InventoryWeaponDetails";
import Window_InventoryCommand from "./inventory/Window_InventoryCommand";
import Window_StatusCommand from "./status/Window_StatusCommand";
import Window_StatusCompetences from "./status/Window_StatusCompetences";
import Window_StatusSpellCommand from "./status/Window_StatusSpellCommand";
import Window_StatusSpellDetails from "./status/Window_StatusSpellDetails";
import Window_StatusTalentDescription from "./status/Window_StatusTalentDescription";
import Window_StatusTalents from "./status/Window_StatusTalents";

// $StartCompilation

Window_TitleCommand.prototype.backgroundImageName = function() {
    return "bg_menuDetailsCommand3";
};
Window_TitleCommand.prototype.windowHeight = function() {
    return 168; // 3 * line height + 2 * text padding + 2 * bg padding
};


Window_StatusCompetences.prototype.backgroundImageName = function() {
    return "bg_statusCompetences";
};

Window_StatusTalents.prototype.backgroundImageName = function() {
    return "bg_statusTalents";
};

Window_StatusTalentDescription.prototype.backgroundImageName = function() {
    return "bg_statusTalentDescription";
};


Window_StatusCommand.prototype.backgroundImageName = function() {
    return "bg_menuTopbarCommands";
};
Window_StatusCommand.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

Window_InventoryCommand.prototype.backgroundImageName = function() {
    return "bg_menuTopbarCommands";
};
Window_InventoryCommand.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};


HalfWindow_List.prototype.windowWidth = function() {
    return Graphics.boxWidth / 2;
};
HalfWindow_List.prototype.windowHeight = function() {
    return 648; // total height - topbar height
};
HalfWindow_List.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindow";
};


HalfWindow_Details.prototype.windowWidth = function() {
    return Graphics.boxWidth / 2;
};

Window_StatusSpellDetails.prototype.windowHeight = function() {
    return 512; // total height - topbar height - (1 command window height + margins)
};
Window_StatusSpellDetails.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowDetails1";
};

Window_InventoryItemDetails.prototype.windowHeight = function() {
    return 476; // total height - topbar height - (2 commands window height + margins)
};
Window_InventoryItemDetails.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowDetails2";
};

Window_InventoryArmorDetails.prototype.windowHeight = function() {
    return 476; // total height - topbar height - (2 commands window height + margins)
};
Window_InventoryArmorDetails.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowDetails2";
};

Window_InventoryWeaponDetails.prototype.windowHeight = function() {
    return 440; // total height - topbar height - (3 commands window height + margins)
};
Window_InventoryWeaponDetails.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowDetails3";
};


HalfWindow_DetailsCommand.prototype.backgroundImageName = function() {
    return "bg_inventoryCommand" + this._actionsNumber;
};
HalfWindow_DetailsCommand.prototype.windowWidth = function() {
    return 280; // total width / 2 - margins
};

Window_StatusSpellCommand.prototype.windowHeight = function() {
    return 96; // line height + 2 * text padding + 2 * bg padding
};
Window_StatusSpellCommand.prototype.backgroundImageName = function() {
    return "bg_menuDetailsCommand1";
};

Window_InventoryItemCommand.prototype.windowHeight = function() {
    return 132; // 2 * line height + 2 * text padding + 2 * bg padding
};
Window_InventoryItemCommand.prototype.backgroundImageName = function() {
    return "bg_menuDetailsCommand2";
};

Window_InventoryArmorCommand.prototype.windowHeight = function() {
    return 132; // 2 * line height + 2 * text padding + 2 * bg padding
};
Window_InventoryArmorCommand.prototype.backgroundImageName = function() {
    return "bg_menuDetailsCommand2";
};

Window_InventoryWeaponCommand.prototype.windowHeight = function() {
    return 168; // 3 * line height + 2 * text padding + 2 * bg padding
};
Window_InventoryWeaponCommand.prototype.backgroundImageName = function() {
    return "bg_menuDetailsCommand3";
};
