// $PluginCompiler TEW_Menus.js

import HalfWindow_Details, { IHalfWindow_Details } from "../../base/HalfWindow_Details";
import { LoadedWeapon } from "./Window_InventoryWeapons";

export interface IWindow_InventoryWeaponDetails extends IHalfWindow_Details {
    _weapon: LoadedWeapon;

    refresh: () => void;
    empty: () => void;
    drawDetails: (weapon: LoadedWeapon) => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryWeaponDetails
//
// Weapon details window

function Window_InventoryWeaponDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryWeaponDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_InventoryWeaponDetails.prototype.constructor = Window_InventoryWeaponDetails;

Window_InventoryWeaponDetails.prototype.initialize = function (commandWindowHeight = 0) {
    HalfWindow_Details.prototype.initialize.call(this, commandWindowHeight);
    this._weapon = null;
};

// Refreshing the window
Window_InventoryWeaponDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._weapon) {
        this.drawDetails(this._weapon);
    }
};

// Erase window content
Window_InventoryWeaponDetails.prototype.empty = function() {
    this._weapon = null;
};

// Drawing the details
Window_InventoryWeaponDetails.prototype.drawDetails = function (weapon: LoadedWeapon) {
    // Title
    this.drawUnderlinedText(weapon.name, 0, 0, this.contentsWidth(), "center");

    // Item's Icon
    this.drawIcon(weapon.icon, 0, 0);

    // Availability Icon
    this.drawIcon(weapon.availabilityIcon, this.contentsWidth() - 32, 0)

    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
        // ["Owned :", "x" + item[1].quantity],
        ["Group :", weapon.groupLabel],
        ["Enc. :", weapon.enc]
    ]);

    this.drawLine(200);

    // Description
    this.drawWrappedTextManually(weapon.description, 0, 220, 24);
};
