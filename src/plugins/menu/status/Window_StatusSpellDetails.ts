// $PluginCompiler TEW_Menus.js

// ----------------------

// File : Window_StatusSpellDetails.ts
// Author : Ersokili, 7evy, Sebibebi67
// Date : 03/05/2025
// Description : Window for displaying spell details in the status menu

// ----------------------
// Imports
// ----------------------

import { Spell } from "../../types/spell";
import HalfWindow_Details from "../base/HalfWindow_Details";

// ----------------------
// $StartCompilation
// ----------------------

function Window_StatusSpellDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusSpellDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_StatusSpellDetails.prototype.constructor = Window_StatusSpellDetails;

Window_StatusSpellDetails.prototype.initialize = function (commandWindowHeight = 0) {
    HalfWindow_Details.prototype.initialize.call(this, commandWindowHeight);
    this._spell = null;
};

// Refreshing the window
Window_StatusSpellDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._spell) {
        this.drawDetails(this._spell);
    }
};

// Drawing the details
Window_StatusSpellDetails.prototype.drawDetails = function (spell:[string, Spell]) {
    console.log("Drawing spell details", spell);
    // Title
    this.drawUnderlinedText(spell[1].name, 0, 0, this.contentsWidth(), "center");

    // // Item's Icon
    // this.drawIcon(weapon[1].icon, 0, 0);

    // // Availability Icon
    // this.drawIcon(weapon[1].availabilityIcon, this.contentsWidth() - 32, 0)

    // // Table
    // this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
    //     // ["Owned :", "x" + item[1].quantity],
    //     ["Group :", weapon[1].groupLabel],
    //     ["Enc. :", weapon[1].enc]
    // ]);

    // this.drawLine(200);

    // // Description
    // this.drawWrappedTextManually(weapon[1].description, 0, 220, 24);
};