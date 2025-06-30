// $PluginCompiler TEW_Menus.js 102

// ----------------------

// File: Scene_Equip.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: Functions to manage the infos window through the main scene

// ----------------------
// Imports
// ----------------------

import { Scene_Equip } from "../Scene_Equip";
import Window_InventoryInfo from "./Window_InventoryInfo";

// ----------------------
// $StartCompilation
// ----------------------

Scene_Equip.prototype.createInfosWindow = function() {
    this._infosWindow = new Window_InventoryInfo();
    // this._statsWindow.reserveFaceImages();
    this.addWindow(this._infosWindow);
};

Scene_Equip.prototype.activateInventoryInfos = function() {
    this.hideAllWindows();
    this._currentMainWindow = this._infosWindow;
    this._infosWindow.show();
    this._commandWindow.activate();
    this._infosWindow.refresh();
};
