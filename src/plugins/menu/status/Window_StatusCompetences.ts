// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Scene_Status.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Scene_Status class, which is responsible for displaying the status screen in the game. It includes methods for creating the command window, stats window, competences window, talents window, and spells window. The class also handles user input and navigation between different windows within the status screen.

// ----------------------
// Imports
// ----------------------
import TEW from "../../types/tew";

// ----------------------
// $StartCompilation
// ----------------------

function Window_StatusCompetences() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusCompetences.prototype = Object.create(Window_Selectable.prototype);
Window_StatusCompetences.prototype.constructor = Window_StatusCompetences;

/**
 * Constructor for the Window_StatusCompetences class.
 */
Window_StatusCompetences.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0,
        TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth,
        Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT);
    this._actor = null;
    this._maxItems = 0;
    this._leftPadding = 10;
    this._compColumnWidth = this.width / 4 - this._leftPadding;
    this._levelColumnWidth = this.width / 8;
    this._statColumnWidth = this.width / 8;
    this.activate();
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
Window_StatusCompetences.prototype.maxCols = () => 2;

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
    const x = index % 2 * this.width / 2 + this._leftPadding;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.LINE_HEIGHT;

    const comp = this.competenceFromIndex(index);
    // Comp name
    this.changeTextColor(this.systemColor());
    this.drawText(comp[1].name, x, y, this._compColumnWidth);
    this.resetTextColor();

    // Level of the comp
    const compLevel = this._actor.compPlus(comp[0])
    const compLevelText = compLevel > 0 ? `Lvl${compLevel}` : "Base";
    this.drawText(
        compLevelText,
        x + this._compColumnWidth,
        y,
        this._levelColumnWidth,
        'left');

    // Stats which the comp depends on
    const statName = comp ? comp[1].stat : null;
    const statNumber = this._actor.comp(comp[0]);
    const statText = `${statName} (${statNumber})`;

    this.drawText(
        statText,
        x + this._compColumnWidth + this._levelColumnWidth,
        y,
        this._statColumnWidth,
        'left'
    )
};

/**
 * Returns the competence from the given index.
 */
Window_StatusCompetences.prototype.competenceFromIndex = function(index: number) {
    return index < TEW.DATABASE.COMPS.BASE_ARRAY.length  // [<internal name>, {<competence data>}]
        ? TEW.DATABASE.COMPS.BASE_ARRAY[index]
        : this._advancedCompsList[index - TEW.DATABASE.COMPS.BASE_ARRAY.length];
};

/**
 * Called when the process successfully completes.
 */
Window_StatusCompetences.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

/**
 * Returns the maximum number of items in the window.
 */
Window_StatusCompetences.prototype.maxItems = function() {
    return this._maxItems;
};
