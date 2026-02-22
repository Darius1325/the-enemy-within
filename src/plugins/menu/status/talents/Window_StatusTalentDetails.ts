// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_StatusTalentDetails.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025 
// Description: This file contains the implementation of the Window_StatusTalentDetails class, which is responsible for displaying the description of a selected talent in the status screen. It includes methods for initializing the window, refreshing its content, and drawing the talent description.

import TEW from "../../../_types/tew";
import { Talent } from "../../../_types/talent";
import HalfWindow_Details from "../../base/HalfWindow_Details";
import HalfWindow_DetailsScrollable from "../../base/HalfWindow_DetailsScrollable";

// ----------------------
// $StartCompilation
// ----------------------

function Window_StatusTalentDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusTalentDetails.prototype = Object.create(HalfWindow_DetailsScrollable.prototype);
Window_StatusTalentDetails.prototype.constructor = Window_StatusTalentDetails;

/**
 * Constructor for the Window_StatusTalentDetails class.
 */
Window_StatusTalentDetails.prototype.initialize = function () {
    HalfWindow_DetailsScrollable.prototype.initialize.call(this, true);
    this._talent = undefined;
};

/**
 * Refreshes the content of the window.
 */
Window_StatusTalentDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._talent) {
        this.drawDetails(this._talent);
    }
};

/** Clear all contents */
Window_StatusTalentDetails.prototype.empty = function() {
    this._talent = null;
};

/**
 * Draws the description of the selected talent.
 */
Window_StatusTalentDetails.prototype.drawDetails = function(talent: [string, Talent]) {
    this.setText(talent[1].description);
    this.drawAllItems();

    // this.drawWrappedTextManually(
    //     talent[1].description,
    //     10,
    //     0,
    //     588 // 720 (Height) - 60 (2 * Padding) - 0 (Starting Y) - 68 (Top Bar Height)
    // );
};