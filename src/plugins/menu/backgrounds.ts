// $PluginCompiler TEW_Menus.js 101
// Compiled after defining windows

import HalfWindow_Details from "./base/HalfWindow_Details";
import HalfWindow_DetailsCommand from "./base/HalfWindow_DetailsCommand";
import HalfWindow_List from "./base/HalfWindow_List";
import Window_InventoryCommand from "./inventory/Window_InventoryCommand";
import Window_InventoryTransferCommand from "./inventory/Window_InventoryTransferCommand";
import Window_InventoryTransferSpinner from "./inventory/Window_InventoryTransferSpinner";
import Window_InventoryInfo from "./inventory/info/Window_InventoryInfo";
import Window_Journals from "./journals/Window_Journals";
import Window_StatusCommand from "./status/Window_StatusCommand";
import Window_StatusStats from "./status/Window_StatusStats";
import Window_StatusTalentDetails from "./status/talents/Window_StatusTalentDetails";
import Window_StatusTalents from "./status/talents/Window_StatusTalents";

// $StartCompilation

Window_TitleCommand.prototype.backgroundImageName = function() {
    return "bg_menuDetailsCommand3";
};
Window_TitleCommand.prototype.windowHeight = function() {
    return 168; // 3 * line height + 2 * text padding + 2 * bg padding
};


Window_Journals.prototype.backgroundImageName = function() {
    return "bg_journals";
};
Window_Journals.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};
Window_Journals.prototype.windowHeight = function() {
    return Graphics.boxHeight;
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
    return 440; // total height - topbar height - (3 commands window height + margins)
};
HalfWindow_List.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowList";
};

Window_StatusStats.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};
Window_StatusStats.prototype.windowHeight = function() {
    return Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
};

Window_StatusTalents.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowFullHeight";
};
Window_StatusTalents.prototype.windowHeight = function() {
    return Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
};


HalfWindow_Details.prototype.windowWidth = function() {
    return Graphics.boxWidth / 2;
};
HalfWindow_Details.prototype.windowHeight = function() {
    return 648; // total height - topbar height
};
HalfWindow_Details.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowFullHeight";
};

Window_StatusTalentDetails.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowFullHeight";
};
Window_StatusTalentDetails.prototype.windowHeight = function() {
    return Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
};


HalfWindow_DetailsCommand.prototype.backgroundImageName = function() {
    return "bg_menuDetailsCommand";
};
HalfWindow_DetailsCommand.prototype.windowWidth = function() {
    return 600; // total width / 2 - margins
};
HalfWindow_DetailsCommand.prototype.windowHeight = function() {
    return 168; // line height * 3 + bg padding
};

Window_InventoryInfo.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};
Window_InventoryInfo.prototype.windowHeight = function() {
    return Graphics.boxHeight - TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT;
};

Window_InventoryTransferCommand.prototype.backgroundImageName = function() {
    return "bg_inventoryTransferCommand";
};
Window_InventoryTransferCommand.prototype.windowWidth = function() {
    return 380;
};
Window_InventoryTransferCommand.prototype.windowHeight = function() {
    return 168; // line height * 3 + bg padding
};

Window_InventoryTransferSpinner.prototype.backgroundImageName = function() {
    return "bg_numberSpinner";
};
Window_InventoryTransferSpinner.prototype.windowWidth = function() {
    return 160;
};
Window_InventoryTransferSpinner.prototype.windowHeight = function() {
    return 96; // line height + bg padding
};
