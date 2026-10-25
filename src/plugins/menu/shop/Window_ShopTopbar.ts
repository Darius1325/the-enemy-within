// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_ShopTopbar.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: Topbar of the shop menu: the sort order indicator on the left, the Buy and Sell tabs, and the party's money on the right.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { ShopMode, ShopSortOrder } from "../../_types/enum";

export interface IWindow_ShopTopbar {
    _purchaseOnly: boolean;
    _sortOrder: ShopSortOrder;

    mode: () => ShopMode;
    setSortOrder: (order: ShopSortOrder) => void;
    refresh: () => void;
    activate: () => void;
    deactivate: () => void;
    setHandler: (symbol: string, method: () => void) => void;
};

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Window_ShopTopbar
//
// The window for selecting a tab on the shop screen.

function Window_ShopTopbar() {
    this.initialize.apply(this, arguments);
}

// The tabs are placed right after the sort indicator, the money being drawn in the remaining space
Window_ShopTopbar.SORT_INDICATOR_WIDTH = 300;
Window_ShopTopbar.COMMAND_WIDTH = 200;
Window_ShopTopbar.INDICATOR_MARGIN_X = 20;

export default Window_ShopTopbar.prototype = Object.create(Window_HorzCommand.prototype);
Window_ShopTopbar.prototype.constructor = Window_ShopTopbar;

// Initializing the command window
Window_ShopTopbar.prototype.initialize = function(x: number, y: number, purchaseOnly = false) {
    this._purchaseOnly = !!purchaseOnly;
    this._sortOrder = TEW.SHOPS.SORT_ORDERS[0];
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};

Window_ShopTopbar.prototype.maxCols = function() {
    return 2;
};

// Tabs keep a fixed width instead of spreading over the whole topbar
Window_ShopTopbar.prototype.itemWidth = function() {
    return Window_ShopTopbar.COMMAND_WIDTH;
};

// Tabs are shifted to leave room for the sort indicator
Window_ShopTopbar.prototype.itemRect = function(index: number) {
    const rect = Window_HorzCommand.prototype.itemRect.call(this, index);
    rect.x = this.contentsWidth() / 2 + (index - 1) * rect.width;
    return rect;
};

// Making the 2 tabs
Window_ShopTopbar.prototype.makeCommandList = function() {
    this.addCommand(TextManager.shopBuy, 'shop_buy');
    this.addCommand(TextManager.shopSell, 'shop_sell', !this._purchaseOnly);
};

Window_ShopTopbar.prototype.cursorRight = function(wrap: boolean) {
    Window_HorzCommand.prototype.cursorRight.call(this, wrap);
    this.callHandler('right');
};

Window_ShopTopbar.prototype.cursorLeft = function(wrap: boolean) {
    Window_HorzCommand.prototype.cursorLeft.call(this, wrap);
    this.callHandler('left');
};

Window_ShopTopbar.prototype.verticalBorderPadding = function() {
    return 18;
};

// Current tab
Window_ShopTopbar.prototype.mode = function() {
    return this.currentSymbol() === 'shop_sell' ? ShopMode.SELL : ShopMode.BUY;
};

// #region ====== Indicators === //
Window_ShopTopbar.prototype.setSortOrder = function(order: ShopSortOrder) {
    if (this._sortOrder !== order) {
        this._sortOrder = order;
        this.refresh();
    }
};

Window_ShopTopbar.prototype.refresh = function() {
    Window_HorzCommand.prototype.refresh.call(this);
    this.drawSortIndicator();
    this.drawMoney();
};

Window_ShopTopbar.prototype.sortOrderLabel = function() {
    switch (this._sortOrder) {
        case ShopSortOrder.WEIGHT:
            return TextManager.shopSortWeight;
        case ShopSortOrder.PRICE:
            return TextManager.shopSortPrice;
        default:
            return TextManager.shopSortName;
    }
};

// "Sort (S): Name" on the left of the tabs
Window_ShopTopbar.prototype.drawSortIndicator = function() {
    const width = Window_ShopTopbar.SORT_INDICATOR_WIDTH;
    const label = `${TextManager.shopSort} (${TEW.SHOPS.SORT_KEY_LABEL}): `;
    const labelWidth = this.textWidth(label);
    this.changeTextColor(this.systemColor());
    this.drawText(label, Window_ShopTopbar.INDICATOR_MARGIN_X, 0, labelWidth, 'left');
    this.resetTextColor();
    this.drawText(
        this.sortOrderLabel(),
        labelWidth + Window_ShopTopbar.INDICATOR_MARGIN_X, 0,
        width - labelWidth - Window_ShopTopbar.INDICATOR_MARGIN_X,
        'left'
    );
};

// Party's money, in readable format, on the right of the tabs
Window_ShopTopbar.prototype.drawMoney = function() {
    const label = `${TextManager.shopMoney}: `;
    const value = TEW.SHOPS.formatMoney($gameParty.gold());
    const labelWidth = this.textWidth(label);
    const valueWidth = this.textWidth(value);

    const x = this.contentsWidth()
        - labelWidth - valueWidth
        - this.spacing()
        - Window_ShopTopbar.INDICATOR_MARGIN_X;
    const width = this.contentsWidth() - x - Window_ShopTopbar.INDICATOR_MARGIN_X;

    this.changeTextColor(this.systemColor());
    this.drawText(label, x, 0, width - valueWidth, 'right');
    this.resetTextColor();
    this.drawText(value, x + labelWidth + this.spacing(), 0, width - labelWidth - this.spacing(), 'right');
};
// #endregion === Indicators === //
