// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_ShopDetails.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: Details of the selected good: the same information as in the inventory, plus its actual price (merchant multiplier and haggling included).

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { ShopMode } from "../../_types/enum";
import { ShopEntry } from "../../_types/shop";
import HalfWindow_Details, { IHalfWindow_Details } from "../base/HalfWindow_Details";

export interface IWindow_ShopDetails extends IHalfWindow_Details {
    _entry: ShopEntry;
    _mode: ShopMode;

    setEntry: (entry: ShopEntry, mode: ShopMode) => void;
    empty: () => void;
    refresh: () => void;
    show: () => void;
    hide: () => void;
};

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Window_ShopDetails
//
// The window for displaying a good's details and price

function Window_ShopDetails() {
    this.initialize.apply(this, arguments);
}

Window_ShopDetails.TABLE_Y = 80;
Window_ShopDetails.LINE_MARGIN_Y = 12;
Window_ShopDetails.DESCRIPTION_MARGIN_Y = 20;

export default Window_ShopDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_ShopDetails.prototype.constructor = Window_ShopDetails;

Window_ShopDetails.prototype.initialize = function() {
    this._entry = null;
    this._mode = ShopMode.BUY;
    HalfWindow_Details.prototype.initialize.call(this);
};

Window_ShopDetails.prototype.setEntry = function(entry: ShopEntry, mode: ShopMode) {
    this._entry = entry;
    this._mode = mode;
    this.refresh();
};

// Erase window content
Window_ShopDetails.prototype.empty = function() {
    this._entry = null;
    this.refresh();
};

Window_ShopDetails.prototype.refresh = function() {
    if (!this.contents) {
        return;
    }
    this.contents.clear();
    if (this._entry) {
        this.drawDetails(this._entry);
    }
};

// Rows of the details table
Window_ShopDetails.prototype.detailsTable = function(entry: ShopEntry): [string, string][] {
    const table: [string, string][] = [];
    if (this._mode === ShopMode.BUY) {
        table.push([TextManager.shopBuyPrice + " :", TEW.SHOPS.formatMoney(entry.price)]);
        table.push([TextManager.shopStock + " :", entry.quantity < 0 ? TEW.SHOPS.UNLIMITED_LABEL : "x" + entry.quantity]);
    } else {
        table.push([TextManager.shopSellPrice + " :", TEW.SHOPS.formatMoney(entry.price)]);
    }
    table.push([TextManager.shopOwned + " :", "x" + entry.owned]);
    table.push([TextManager.shopGroup + " :", (entry.data as any).groupLabel]);
    if (!TEW.SHOPS.isAmmo(entry.id)) {
        table.push([TextManager.shopEnc + " :", "" + TEW.SHOPS.goodEnc(entry.id)]);
    }
    return table;
};

Window_ShopDetails.prototype.drawDetails = function(entry: ShopEntry) {
    // Title
    this.drawUnderlinedText(entry.data.name, 0, 0, this.contentsWidth(), "center");

    // Good's icon
    this.drawIcon(TEW.SHOPS.goodIcon(entry.id), 0, 0);

    // Availability icon
    this.drawIcon(entry.data.availabilityIcon, this.contentsWidth() - 32, 0);

    // Table
    const table = this.detailsTable(entry);
    this.drawTable2Columns(0, Window_ShopDetails.TABLE_Y, this.contentsWidth(), table.length, table);

    const lineY = Window_ShopDetails.TABLE_Y + table.length * this.lineHeight() + Window_ShopDetails.LINE_MARGIN_Y;
    this.drawLine(lineY);

    // Description
    const descriptionY = lineY + Window_ShopDetails.DESCRIPTION_MARGIN_Y;
    this.drawWrappedTextManually(
        entry.data.description || "",
        0,
        descriptionY,
        this.contentsHeight() - descriptionY
    );
};
