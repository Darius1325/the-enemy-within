// $PluginCompiler TEW_Menus.js

import { Item } from "../../../_types/item";
import HalfWindow_Details, { IHalfWindow_Details } from "../../base/HalfWindow_Details";

type ItemWithQuantity = Item & {
    quantity: number;
};

export interface IWindow_InventoryItemDetails extends IHalfWindow_Details {
    _item: [string, ItemWithQuantity][];

    refresh: () => void;
    drawDetails: (item: [string, ItemWithQuantity]) => void;
    empty: () => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryItemDetails
//
// The window for displaying an item's details

function Window_InventoryItemDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryItemDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_InventoryItemDetails.prototype.constructor = Window_InventoryItemDetails;

Window_InventoryItemDetails.prototype.initialize = function(commandWindowHeight = 0) {
    HalfWindow_Details.prototype.initialize.call(this, commandWindowHeight);
    this._item = null;
};

// Refreshing the window
Window_InventoryItemDetails.prototype.refresh = function() {
    this.contents.clear();
    if (this._item){
        this.drawDetails(this._item);
    }
};

// Erase window content
Window_InventoryItemDetails.prototype.empty = function() {
    this._item = null;
};

// Drawing the details
Window_InventoryItemDetails.prototype.drawDetails = function(item: [string, ItemWithQuantity]){
    // Title
    this.drawUnderlinedText(item[1].name, 0, 0, this.contentsWidth(), "center");

    // Item's Icon
    this.drawIcon(item[1].groupIcon, 0, 0);

    // Availability Icon
    this.drawIcon(item[1].availabilityIcon, this.contentsWidth() - 32, 0)

    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 3, [
        ["Owned :", "x" + item[1].quantity],
        ["Group :", item[1].groupLabel],
        ["Enc. :", item[1].enc]
    ]);

    this.drawLine(200);

    // Description
    this.drawWrappedTextManually(item[1].description, 0, 220, 24);
};
