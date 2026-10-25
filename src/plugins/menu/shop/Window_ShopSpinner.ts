// $PluginCompiler TEW_Menus.js 12

// ----------------------

// File: Window_ShopSpinner.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: Confirmation window of a transaction, with a spinner to choose the quantity to buy or sell and the resulting total price. It works like the inventory transfer spinner (up/down: 1, right/left: 10).

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { ShopEntry } from "../../_types/shop";
import Window_InventoryTransferSpinner from "../inventory/Window_InventoryTransferSpinner";

declare var Rectangle: any;

export interface IWindow_ShopSpinner {
    _entry: ShopEntry;
    _number: number;
    _max: number;

    setEntry: (entry: ShopEntry, max: number) => void;
    number: () => number;
    total: () => number;
    start: () => void;
    hide: () => void;
    deactivate: () => void;
    setHandler: (symbol: string, method: () => void) => void;
};

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Window_ShopSpinner
//
// Spinner to choose how many goods to buy or sell

function Window_ShopSpinner() {
    this.initialize.apply(this, arguments);
}

Window_ShopSpinner.MARGIN_Y = 20;

export default Window_ShopSpinner.prototype = Object.create(Window_InventoryTransferSpinner.prototype);
Window_ShopSpinner.prototype.constructor = Window_ShopSpinner;

// Centered at the bottom of the list window
Window_ShopSpinner.prototype.initialize = function() {
    this._entry = null;
    Window_InventoryTransferSpinner.prototype.initialize.call(this);
    this.x = (Graphics.boxWidth / 2 - this.windowWidth()) / 2;
    this.y = Graphics.boxHeight - this.windowHeight() - Window_ShopSpinner.MARGIN_Y;
    this.hide();
};

Window_ShopSpinner.prototype.setEntry = function(entry: ShopEntry, max: number) {
    this._entry = entry;
    this.setMax(Math.max(1, Math.min(max, TEW.SHOPS.MAX_TRANSACTION)));
};

Window_ShopSpinner.prototype.number = function() {
    return this._number;
};

Window_ShopSpinner.prototype.total = function() {
    return this._entry ? this._entry.price * this._number : 0;
};

// The cursor highlights the quantity line
Window_ShopSpinner.prototype.itemRect = function() {
    return new Rectangle(0, this.lineHeight(), this.contentsWidth(), this.lineHeight());
};

// Good's name, quantity and total price
Window_ShopSpinner.prototype.drawAllItems = function() {
    if (!this._entry) {
        return;
    }
    const width = this.contentsWidth();
    const lineHeight = this.lineHeight();

    this.changeTextColor(this.systemColor());
    this.drawText(this._entry.data.name, 0, 0, width, 'center');
    this.resetTextColor();

    const quantity = '× ' + this._number;
    this.drawText(quantity, 0, lineHeight, width, 'center');

    const totalLabel = TextManager.shopTotal + " : ";
    const totalValue = TEW.SHOPS.formatMoney(this.total());
    const totalWidth = this.textWidth(totalLabel + totalValue);
    const totalX = (width - totalWidth) / 2;
    this.changeTextColor(this.systemColor());
    this.drawText(totalLabel, totalX, lineHeight * 2, this.textWidth(totalLabel), 'left');
    this.resetTextColor();
    this.drawText(totalValue, totalX + this.textWidth(totalLabel), lineHeight * 2, this.textWidth(totalValue), 'left');
};
