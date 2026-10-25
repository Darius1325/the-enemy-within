// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_ShopList.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: List of the goods sold by the merchant (Buy tab) or carried by the party (Sell tab), with their icon, name and available quantity. Unlike inventory lists, it extends to the bottom of the screen.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import HalfWindow_List, { IHalfWindow_List } from "../base/HalfWindow_List";
import { ShopEntry } from "../../_types/shop";

export interface IWindow_ShopList extends IHalfWindow_List {
    _entries: ShopEntry[];
    _enabledChecker: (entry: ShopEntry) => boolean;
    _stayCount: number;

    setEntries: (entries: ShopEntry[]) => void;
    setEnabledChecker: (checker: (entry: ShopEntry) => boolean) => void;
    entries: () => ShopEntry[];
    entryFromIndex: (index: number) => ShopEntry;
    item: () => ShopEntry;
    indexOfEntry: (entry: ShopEntry) => number;
    isEnabled: (entry: ShopEntry) => boolean;
    select: (index: number) => void;
    deselect: () => void;
    index: () => number;
    activate: () => void;
    deactivate: () => void;
    show: () => void;
    hide: () => void;
    setHandler: (symbol: string, method: () => void) => void;
};

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Window_ShopList
//
// Shop goods list window

function Window_ShopList() {
    this.initialize.apply(this, arguments);
}

Window_ShopList.LEFT_COLUMN_WIDTH = 500;
Window_ShopList.RIGHT_COLUMN_WIDTH = 80;
Window_ShopList.RIGHT_COLUMN_POSITION = 500;

export default Window_ShopList.prototype = Object.create(HalfWindow_List.prototype);
Window_ShopList.prototype.constructor = Window_ShopList;

// Same as HalfWindow_List, without the bottom command window
Window_ShopList.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0,
        TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT,
        this.windowWidth(),
        this.windowHeight()
    );
    this._actor = null;
    this._entries = [];
    this._maxItems = 0;
    this._enabledChecker = null;
    this._leftPadding = 10;
    this._iconPadding = 5;
    this.deactivate();
    this.refresh();
};

Window_ShopList.prototype.setEntries = function(entries: ShopEntry[]) {
    this._entries = entries;
    this._maxItems = entries.length;
    if (this.index() >= this._maxItems) {
        this._index = this._maxItems - 1;
    }
    this.refresh();
};

// The scene decides whether an entry can be traded (money, stock...)
Window_ShopList.prototype.setEnabledChecker = function(checker: (entry: ShopEntry) => boolean) {
    this._enabledChecker = checker;
};

Window_ShopList.prototype.entries = function() {
    return this._entries;
};

Window_ShopList.prototype.isEnabled = function(entry: ShopEntry) {
    return !!entry && (!this._enabledChecker || this._enabledChecker(entry));
};

Window_ShopList.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.item());
};

// Entries do not depend on an actor
Window_ShopList.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
        this.drawAllItems();
    }
};

Window_ShopList.prototype.drawAllItems = function() {
    const topIndex = this.topIndex();
    for (let i = 0; i < this.maxPageItems(); i++) {
        const index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_ShopList.prototype.drawItem = function(index: number) {
    const entry: ShopEntry = this.entryFromIndex(index);
    if (!entry) {
        return;
    }
    const normalizedIndex = index - this.topIndex();
    const x = 0;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const quantity = entry.quantity < 0 ? TEW.SHOPS.UNLIMITED_LABEL : entry.quantity;

    this.changePaintOpacity(this.isEnabled(entry));
    this.changeTextColor(this.systemColor());
    this.drawIcon(TEW.SHOPS.goodIcon(entry.id), x, y);
    this.drawText(entry.data.name, x + 32 + this._iconPadding, y, Window_ShopList.LEFT_COLUMN_WIDTH - 32 - this._iconPadding);
    this.resetTextColor();
    this.drawText(quantity, Window_ShopList.RIGHT_COLUMN_POSITION, y, Window_ShopList.RIGHT_COLUMN_WIDTH, 'right');
    this.changePaintOpacity(true);
};

Window_ShopList.prototype.entryFromIndex = function(index: number) {
    return this._entries[index];
};

// Getting the current selected entry
Window_ShopList.prototype.item = function() {
    return this.entryFromIndex(this.index());
};

// Finding an entry after the list was rebuilt (same good)
Window_ShopList.prototype.indexOfEntry = function(entry: ShopEntry) {
    if (!entry) {
        return -1;
    }
    return this._entries.findIndex((e: ShopEntry) => e.id === entry.id);
};

// Selecting an entry, the details window following the cursor
Window_ShopList.prototype.select = function(index: number) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

Window_ShopList.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.deactivate();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};
