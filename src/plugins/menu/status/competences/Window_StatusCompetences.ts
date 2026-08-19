// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_StatusCompetences.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Window_StatusCompetences class, which lists every competence available to an actor along with its level. While levelling mode is active, the window also lets the player buy and refund competence advances with the left and right arrows, and the competences the actor's career allows to improve are moved to the top of the list. Those include the career competences which have not been learnt yet, so that they may be bought from scratch.

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
    this._levelling = null;
    this._levellingMode = false;
    this._compsList = [];
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
        this.makeCompsList();
        this.refresh();
    }
};

/**
 * Building the displayed list. Outside of levelling mode it holds every base competence
 * followed by the advanced ones the actor has learnt.
 * In levelling mode, the competences the career allows to improve are moved to the top in
 * alphabetical order, unlearnt ones included, and the rest keeps its usual order.
 */
Window_StatusCompetences.prototype.makeCompsList = function() {
    if (!this._actor) {
        this._compsList = [];
        this._maxItems = 0;
        return;
    }

    const knownComps = TEW.DATABASE.COMPS.BASE_ARRAY.concat(
        TEW.DATABASE.COMPS.ADVANCED_ARRAY.filter(comp => this._actor.hasComp(comp[0]))
    );

    if (!this.isLevellingMode()) {
        this._compsList = knownComps;
    } else {
        const improvableIds = this._actor.improvableComps();
        const improvableComps = improvableIds
            .map(compId => [compId, TEW.DATABASE.COMPS.SET[compId]])
            .sort((a, b) => a[1].name.localeCompare(b[1].name));
        this._compsList = improvableComps.concat(
            knownComps.filter(comp => improvableIds.indexOf(comp[0]) < 0)
        );
    }

    this._maxItems = this._compsList.length;
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

    // Comp bonus, including the advances about to be bought in levelling mode
    const compLevel = comp[1].level;
    const compLevelText = compLevel > 0
        ? `${compLevel}`
        : this._actor.hasComp(comp[0]) ? TextManager.statusCompBase : TextManager.statusCompUnlearned;
    this.changeTextColor(this.competenceLevelColor(comp[0]));
    this.drawText(
        compLevelText,
        Window_StatusCompetences.NAME_COLUMN_WIDTH,
        y,
        Window_StatusCompetences.LEVEL_COLUMN_WIDTH,
        'left'
    );
    this.resetTextColor();

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
    const comp: [string, Competence] = this._compsList[index]; // [<internal name>, {<competence data>}]
    const level = this.isLevellingMode()
        ? this._levelling.compValue(comp[0])
        : this._actor.compPlus(comp[0]);
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

// #region ====== Levelling mode === //
/**
 * Links the window to the levelling session holding the pending advances.
 */
Window_StatusCompetences.prototype.setLevelling = function(levelling: any) {
    this._levelling = levelling;
    this.refresh();
};

/**
 * Enters or leaves levelling mode. The list is reordered, so the selected competence is
 * followed to its new index rather than left behind.
 */
Window_StatusCompetences.prototype.setLevellingMode = function(active: boolean) {
    if (this._levellingMode === active) {
        return;
    }
    const selectedCompId = this.index() >= 0 && this._compsList[this.index()]
        ? this._compsList[this.index()][0]
        : null;
    this._levellingMode = active;
    this.makeCompsList();
    if (selectedCompId) {
        const newIndex = this._compsList.map(comp => comp[0]).indexOf(selectedCompId);
        this.select(newIndex >= 0 ? newIndex : 0);
    }
    this.refresh();
};

Window_StatusCompetences.prototype.isLevellingMode = function() {
    return !!this._levellingMode && !!this._levelling && !!this._actor;
};

/**
 * Green when advances are about to be bought, blue when the career allows them, plain otherwise.
 * Running out of experience does not change the colour, only what the arrows are able to do.
 */
Window_StatusCompetences.prototype.competenceLevelColor = function(compId: string) {
    if (!this.isLevellingMode()) {
        return this.normalColor();
    }
    if (this._levelling.compAdvances(compId) > 0) {
        return this.powerUpColor();
    }
    if (this._levelling.canImproveComp(compId)) {
        return this.levellingColor();
    }
    return this.normalColor();
};

/**
 * In levelling mode, the horizontal arrows buy and refund advances instead of changing column.
 */
Window_StatusCompetences.prototype.cursorRight = function(wrap: boolean) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeCompetence(true);
    } else {
        HalfWindow_List.prototype.cursorRight.call(this, wrap);
    }
};

Window_StatusCompetences.prototype.cursorLeft = function(wrap: boolean) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeCompetence(false);
    } else {
        HalfWindow_List.prototype.cursorLeft.call(this, wrap);
    }
};

/**
 * Buys or refunds one advance on the selected competence.
 */
Window_StatusCompetences.prototype.changeCompetence = function(increase: boolean) {
    const compId = this.competenceFromIndex(this.index())[0];
    const changed = increase
        ? this._levelling.increaseComp(compId)
        : this._levelling.decreaseComp(compId);
    if (changed) {
        SoundManager.playCursor();
        this.refresh();
        this.callHandler('levelling_change');
    }
};
// #endregion === Levelling mode === //
