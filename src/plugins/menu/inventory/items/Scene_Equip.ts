// $PluginCompiler TEW_Menus.js 102

// ----------------------

// File: Scene_Equip.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: Functions to manage the items inventory window through the main scene

// ----------------------
// Imports
// ----------------------

import { Scene_Equip } from "../Scene_Equip";
import Window_InventoryItems from "./Window_InventoryItems";
import Window_InventoryItemDetails from "./Window_InventoryItemDetails";
import Window_InventoryItemCommand from "./Window_InventoryItemCommand";
import Window_InventoryTransferCommand from "../Window_InventoryTransferCommand";

// ----------------------
// $StartCompilation
// ----------------------

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

Scene_Equip.prototype.activateCommandWindowItem = function() {
    if (this._itemsWindow.isOpenAndActive() && this._itemsWindow.index() >= 0){
        this._itemsWindow.deactivate();
        this._itemsCommandWindow.show();
        this._itemsCommandWindow.activate();
        this._itemsCommandWindow.select(0);
    }
}

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

Scene_Equip.prototype.useItem = function() {
    console.log("Use item : ", this._itemsWindow.index());
    this._itemsCommandWindow.callHandler('cancel');
}

Scene_Equip.prototype.transferItem = function() {
    this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.ITEM)
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
}
