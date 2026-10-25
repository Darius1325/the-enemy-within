// $PluginCompiler TEW_Menus.js 101
// Compiled after defining windows

import TEW from "../../_types/tew";
import Window_ShopTopbar from "./Window_ShopTopbar";
import Window_ShopList from "./Window_ShopList";
import Window_ShopDetails from "./Window_ShopDetails";
import Window_ShopSpinner from "./Window_ShopSpinner";

// $StartCompilation

Window_ShopTopbar.prototype.backgroundImageName = function() {
    return "bg_menuTopbarCommands";
};
Window_ShopTopbar.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};
Window_ShopTopbar.prototype.windowHeight = function() {
    return TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT;
};

// No command window below the list, it takes the whole height
Window_ShopList.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowFullHeight";
};
Window_ShopList.prototype.windowWidth = function() {
    return Graphics.boxWidth / 2;
};
Window_ShopList.prototype.windowHeight = function() {
    return 648; // total height - topbar height
};

Window_ShopDetails.prototype.backgroundImageName = function() {
    return "bg_menuHalfWindowFullHeight";
};
Window_ShopDetails.prototype.windowWidth = function() {
    return Graphics.boxWidth / 2;
};
Window_ShopDetails.prototype.windowHeight = function() {
    return 648; // total height - topbar height
};

Window_ShopSpinner.prototype.backgroundImageName = function() {
    return "bg_inventoryTransferCommand";
};
Window_ShopSpinner.prototype.windowWidth = function() {
    return 380;
};
Window_ShopSpinner.prototype.windowHeight = function() {
    return 168; // line height * 3 + bg padding
};
