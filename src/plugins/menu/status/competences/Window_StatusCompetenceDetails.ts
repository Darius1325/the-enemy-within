// $PluginCompiler TEW_Menus.js

import { Competence } from "../../../_types/competence";
import HalfWindow_Details from "../../base/HalfWindow_Details";

// $StartCompilation

function Window_StatusCompetenceDetails() {
    this.initialize.apply(this, arguments);
};

export default Window_StatusCompetenceDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_StatusCompetenceDetails.prototype.constructor = Window_StatusCompetenceDetails;

Window_StatusCompetenceDetails.prototype.initialize = function() {
    HalfWindow_Details.prototype.initialize.call(this);
    this._comp = undefined;
    this.refresh();
};

Window_StatusCompetenceDetails.prototype.setCompetence = function(comp: Competence & { level: number }) {
    if (this._comp !== comp) {
        this._comp = comp;
        this.refresh();
    }
};

Window_StatusCompetenceDetails.prototype.refresh = function() {
    this.contents.clear();
    if (this._comp) {
        this.drawDetails(this._comp);
    }
};

Window_StatusCompetenceDetails.prototype.empty = function() {
    this._comp = undefined;
};

// Drawing item details
Window_StatusCompetenceDetails.prototype.drawDetails = function(comp: Competence & { level: number, value: number, isAnySlot?: boolean }) {
    // Name
    this.drawUnderlinedText(comp.name, 0, 0, this.contentsWidth(), "center");

    // An unspent grouped skill pick stands for a whole group, and has no value of its own yet
    if (comp.isAnySlot) {
        this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
            ["Type :", TextManager.statusAnyType],
            ["Level :", TextManager.statusAnyHint]
        ]);
        return;
    }

    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 4, [
        ["Type :", comp.isBase ? "Base" : "Advanced"],
        ["Characteristic :", comp.stat],
        ["Level :", comp.level],
        ["Value :", comp.value]
    ]);
};
