// $PluginCompiler TEW_Menus.js

import TEW from "../../../types/tew";
import HalfWindow_List, { IHalfWindow_List } from "../../base/HalfWindow_List";
import { Item } from "../../../types/item";

export interface IWindow_InventoryItems extends IHalfWindow_List {
    _items: [string, Item][];
    _stayCount: number;

    syncActor: () => void;
    drawAllItems: () => void;
    drawItem: (index: number) => void;
    armorFromIndex: (index: number) => [string, Item];
    item: () => [string, Item];
    select: (index: number) => void;
    processOk: () => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryItems
//
// General item list window

function Window_InventoryItems() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryItems.prototype = Object.create(HalfWindow_List.prototype);
Window_InventoryItems.prototype.constructor = Window_InventoryItems;

Window_InventoryItems.prototype.initialize = function() {
    HalfWindow_List.prototype.initialize.call(this);
};

Window_InventoryItems.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor();
    }
};

Window_InventoryItems.prototype.syncActor = function() {
    this._items = TEW.DATABASE.ITEMS.ARRAY.filter( item => this._actor.hasItem(item[0]));
    this._maxItems = this._items.length;
    this.refresh();
};

// Drawing all the items
Window_InventoryItems.prototype.drawAllItems = function() {
    const topIndex = this.topIndex();
    for (let i = 0; i < this.maxPageItems(); i++) {
        const index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

// Drawing one item
Window_InventoryItems.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = this._leftPadding; // padding
    const y = normalizedIndex  * TEW.MENU.LINE_HEIGHT;

    const item = this.itemFromIndex(index);
    this.changeTextColor(this.systemColor());
    this.drawIcon(item[1].groupIcon, x, y)
    this.drawText(item[1].name, x + 32 + this._iconPadding, y, this._rightColumnPosition);
    this.resetTextColor();
    this.drawText(this._actor.item(item[0]), this._rightColumnPosition, y, this._rightColumnWidth, 'right');
};

// Getting an item from its index
Window_InventoryItems.prototype.itemFromIndex = function(index: number) {
    index = Math.min(index, this._items.length - 1);
    return this._items[index];
};

// Getting the current selected item
Window_InventoryItems.prototype.item = function() {
    return this._items(this.index());
}

// Selecting an item
Window_InventoryItems.prototype.select = function(index: number) {
    if (this._index !== index) {
        this.hideHelpWindow();
    }
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_item_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

// handling process OK
Window_InventoryItems.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};
