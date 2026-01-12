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
    console.log(this._comp, comp);
    if (this._comp !== comp) {
        this._comp = comp;
        this.refresh();
    }
};

Window_StatusCompetenceDetails.prototype.refresh = function() {
    this.contents.clear();
    if (this._comp) {
        console.log("window competence details drawing");
        this.drawDetails(this._comp);
    }
};

Window_StatusCompetenceDetails.prototype.empty = function() {
    this._comp = undefined;
};

// Drawing item details
Window_StatusCompetenceDetails.prototype.drawDetails = function(comp: Competence & { level: number, value: number }) {
    // Name
    this.drawUnderlinedText(comp.name, 0, 0, this.contentsWidth(), "center");

    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 4, [
        ["Type :", comp.isBase ? "Base" : "Advanced"],
        ["Characteristic :", comp.stat],
        ["Level :", comp.level],
        ["Value :", comp.value]
    ]);
};
