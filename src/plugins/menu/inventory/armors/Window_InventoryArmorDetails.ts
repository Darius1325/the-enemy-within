// $PluginCompiler TEW_Menus.js

import { Armor } from "../../../_types/armor";
import HalfWindow_Details, { IHalfWindow_Details } from "../../base/HalfWindow_Details";
import { LoadedWeapon } from "../weapons/Window_InventoryWeapons";

export interface IWindow_InventoryArmorDetails extends IHalfWindow_Details {
    _armor: [string, Armor];

    refresh: () => void;
    empty: () => void;
    drawDetails: (weapon: LoadedWeapon) => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryArmorDetails
//
// The window for displaying an armor's details

function Window_InventoryArmorDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryArmorDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_InventoryArmorDetails.prototype.constructor = Window_InventoryArmorDetails;

Window_InventoryArmorDetails.prototype.initialize = function() {
    HalfWindow_Details.prototype.initialize.call(this);
    this._armor = null;
};

// Refreshing the window
Window_InventoryArmorDetails.prototype.refresh = function() {
    this.contents.clear();
    if (this._armor){
        this.drawDetails(this._armor);
    }
};

// Erase window content
Window_InventoryArmorDetails.prototype.empty = function() {
    this._armor = null;
};

// Drawing the details
Window_InventoryArmorDetails.prototype.drawDetails = function(armor: [string, Armor]) {
    // Title
    this.drawUnderlinedText(armor[1].name, 0, 0, this.contentsWidth(), "center");

    // Item's Icon
    this.drawIcon(armor[1].icon, 0, 0);

    // Availability Icon
    this.drawIcon(armor[1].availabilityIcon, this.contentsWidth() - 32, 0)

    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
        // ["Owned :", "x" + item[1].quantity],
        ["Group :", armor[1].groupLabel],
        ["Enc. :", armor[1].enc]
    ]);

    this.drawLine(200);

    // Description
    this.drawWrappedTextManually(armor[1].description, 0, 220, 24);
};
