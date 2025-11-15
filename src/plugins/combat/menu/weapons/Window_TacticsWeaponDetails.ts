// $PluginCompiler TEW_Combat.js

import HalfWindow_TacticsDetails, { IHalfWindow_TacticsDetails } from "../base/HalfWindow_TacticsDetails";
import { LoadedWeapon } from "./Window_TacticsWeapons";

export interface Window_TacticsWeaponDetails extends IHalfWindow_TacticsDetails {
    _weapon: LoadedWeapon;

    refresh: () => void;
    empty: () => void;
    drawDetails: (weapon: LoadedWeapon) => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsWeaponDetails
//
// Weapon details window

function Window_TacticsWeaponDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsWeaponDetails.prototype = Object.create(HalfWindow_TacticsDetails.prototype);
Window_TacticsWeaponDetails.prototype.constructor = Window_TacticsWeaponDetails;

Window_TacticsWeaponDetails.prototype.initialize = function (commandWindowHeight = 0) {
    HalfWindow_TacticsDetails.prototype.initialize.call(this, commandWindowHeight);
    this._weapon = null;
};

// Refreshing the window
Window_TacticsWeaponDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._weapon) {
        this.drawDetails(this._weapon);
    }
};

// Erase window content
Window_TacticsWeaponDetails.prototype.empty = function() {
    this._weapon = null;
};

// Drawing the details
Window_TacticsWeaponDetails.prototype.drawDetails = function (weapon: LoadedWeapon) {
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
