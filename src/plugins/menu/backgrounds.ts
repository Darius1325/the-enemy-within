// $PluginCompiler TEW_Menus.js 101
// Compiled after defining windows

import HalfWindow_Details from "./base/HalfWindow_Details";
import HalfWindow_DetailsCommand from "./base/HalfWindow_DetailsCommand";
import HalfWindow_List from "./base/HalfWindow_List";
import Window_InventoryCommand from "./inventory/Window_InventoryCommand";
import Window_Journals from "./journals/Window_Journals";
import Window_StatusCommand from "./status/Window_StatusCommand";
import Window_StatusTalentDetails from "./status/talents/Window_StatusTalentDetails";

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
    return 648; // total height - topbar height
};
HalfWindow_List.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindow";
};


HalfWindow_Details.prototype.windowWidth = function() {
    return Graphics.boxWidth / 2;
};
HalfWindow_Details.prototype.windowHeight = function() {
    return 440; // total height - topbar height - (3 commands window height + margins)
};
HalfWindow_Details.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowDetails3";
};

Window_StatusTalentDetails.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindow";
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
