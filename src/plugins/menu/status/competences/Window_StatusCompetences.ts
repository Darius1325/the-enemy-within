// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Scene_Status.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Scene_Status class, which is responsible for displaying the status screen in the game. It includes methods for creating the command window, stats window, competences window, talents window, and spells window. The class also handles user input and navigation between different windows within the status screen.

// ----------------------
// Imports
// ----------------------
import { Competence } from "../../../_types/competence";
import TEW from "../../../_types/tew";
import HalfWindow_List from "../../base/HalfWindow_List";

// ----------------------
// $StartCompilation
// ----------------------

function Window_StatusCompetences() {
    this.initialize.apply(this, arguments);
};

Window_StatusCompetences.NAME_COLUMN_WIDTH = 500;
Window_StatusCompetences.LEVEL_COLUMN_WIDTH = 80;

export default Window_StatusCompetences.prototype = Object.create(HalfWindow_List.prototype);
Window_StatusCompetences.prototype.constructor = Window_StatusCompetences;

/**
 * Constructor for the Window_StatusCompetences class.
 */
Window_StatusCompetences.prototype.initialize = function() {
    HalfWindow_List.prototype.initialize.call(this);
    this._actor = null;
    this._maxItems = 0;
    this.refresh();
};

/**
 * Sets the actor for the window.
 */
Window_StatusCompetences.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._advancedCompsList = TEW.DATABASE.COMPS.ADVANCED_ARRAY.filter(comp => actor.hasComp(comp[0]));
        this._maxItems = TEW.DATABASE.COMPS.BASE_ARRAY.length + this._advancedCompsList.length;
        this.refresh();
    }
};

/**
 * Returns the maximum number of columns in the window.
 */
Window_StatusCompetences.prototype.maxCols = () => 1;

/**
 * Draws all items in the window.
 */
Window_StatusCompetences.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

/**
 * Draws a single item in the window.
 */
Window_StatusCompetences.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const comp = this.competenceFromIndex(index);

    // Comp name
    this.changeTextColor(this.systemColor());
    this.drawText(comp[1].name, 0, y, Window_StatusCompetences.NAME_COLUMN_WIDTH, 'left');
    this.resetTextColor();

    // Comp bonus
    const compLevel = this._actor.compPlus(comp[0])
    const compLevelText = compLevel > 0 ? `${compLevel}` : "Base";
    this.drawText(
        compLevelText,
        Window_StatusCompetences.NAME_COLUMN_WIDTH,
        y,
        Window_StatusCompetences.LEVEL_COLUMN_WIDTH,
        'left'
    );

    // Stats which the comp depends on
    // const statName = comp ? comp[1].stat : null;
    // const statNumber = this._actor.comp(comp[0]);
    // const statText = `${statName} (${statNumber})`;

    // this.drawText(
    //     statText,
    //     x + this._compColumnWidth + this._levelColumnWidth,
    //     y,
    //     this._statColumnWidth,
    //     'left'
    // )
};

/**
 * Returns the competence from the given index.
 */
Window_StatusCompetences.prototype.competenceFromIndex = function(index: number) {
    const comp: [string, Competence] = index < TEW.DATABASE.COMPS.BASE_ARRAY.length  // [<internal name>, {<competence data>}]
        ? TEW.DATABASE.COMPS.BASE_ARRAY[index]
        : this._advancedCompsList[index - TEW.DATABASE.COMPS.BASE_ARRAY.length];
    const level = this._actor.compPlus(comp[0]);

        console.log([comp[0], {
        ...comp[1],
        level,
        value: level + this._actor.paramByName(comp[1].stat)
    }]);
    return [comp[0], {
        ...comp[1],
        level,
        value: level + this._actor.paramByName(comp[1].stat)
    }];
};

Window_StatusCompetences.prototype.competence = function() {
    return this.competenceFromIndex(this.index());
};

/**
 * Called when the process successfully completes.
 */
Window_StatusCompetences.prototype.select = function(index: number) {
    const changed = this.index() !== index;
    HalfWindow_List.prototype.select.call(this, index);
    if (changed && this.index() >= 0) {
        this.callHandler("show_details");
    }
}

/**
 * Returns the maximum number of items in the window.
 */
Window_StatusCompetences.prototype.maxItems = function() {
    return this._maxItems;
};
