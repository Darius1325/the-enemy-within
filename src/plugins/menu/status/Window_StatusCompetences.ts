// $PluginCompiler TEW_Menus.js

import TEW from "../../types/tew";

// $StartCompilation

// -----------------------------------------------------------------------------
// Window_StatusCompetences
//
// Competence list window

function Window_StatusCompetences() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusCompetences.prototype = Object.create(Window_Status.prototype);
Window_StatusCompetences.prototype.constructor = Window_StatusCompetences;

Window_StatusCompetences.prototype.initialize = function() {
    Window_Status.prototype.initialize.call(this);
    this._helpWindow = null;
    this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_StatusCompetences.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._advancedCompsList = TEW.DATABASE.COMPS.ADVANCED_ARRAY.filter(comp => actor.hasComp(comp[0]));
        this._maxItems = TEW.DATABASE.COMPS.BASE_ARRAY.length + this._advancedCompsList.length;
        this.refresh();
    }
};

Window_StatusCompetences.prototype.maxCols = () => 2;

Window_StatusCompetences.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_StatusCompetences.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 === 0 ? 48 : 432;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.MENU_LINE_HEIGHT;

    const comp = this.competenceFromIndex(index);

    this.changeTextColor(this.systemColor());
    this.drawText(comp[1].name, x, y, 160);
    this.resetTextColor();
    this.drawText(this._actor.comp(comp[0]) + '(' + this._actor.compPlus(comp[0]) + ')', x + 260, y, 60, 'right');
};

Window_StatusCompetences.prototype.competenceFromIndex = function(index: number) {
    return index < TEW.DATABASE.COMPS.BASE_ARRAY.length  // [<internal name>, {<competence data>}]
        ? TEW.DATABASE.COMPS.BASE_ARRAY[index]
        : this._advancedCompsList[index - TEW.DATABASE.COMPS.BASE_ARRAY.length];
};

Window_StatusCompetences.prototype.item = function() {
    return 'Depends on ' + TEW.CHARACTERS.STATS_VERBOSE[TEW.CHARACTERS.STATS[
        this.competenceFromIndex(this._index)[1].stat
    ]];
};

Window_StatusCompetences.prototype.select = function(index: number) {
    if (this._index !== index) {
        this.hideHelpWindow();
    }
    this._index = index;
    if (this._index >= 0) {
        this._helpWindow.setText(this.item());
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

Window_StatusCompetences.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

Window_StatusCompetences.prototype.updateHelp = () => {};

Window_StatusCompetences.prototype.isCurrentItemEnabled = function() {
    return true; // TODO
};

Window_StatusCompetences.prototype.showHelpWindow = function() {
    if (this._helpWindow && this.active) {
        this._helpWindow.show();
        this._helpWindow.refresh();
    }
};
