// $PluginCompiler TEW_Menus.js

import TEW from "../../types/tew";

// $StartCompilation

// -----------------------------------------------------------------------------
// Window_StatusTalents
//
// Talent list window

function Window_StatusTalents() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusTalents.prototype = Object.create(Window_Status.prototype);
Window_StatusTalents.prototype.constructor = Window_StatusTalents;

Window_StatusTalents.prototype.initialize = function() {
    Window_Status.prototype.initialize.call(this);
    this._helpWindow = null;
    this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_StatusTalents.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._talents = TEW.DATABASE.TALENTS.ARRAY.filter(talent => actor.hasTalent(talent[0]));   // [<internal name>, {<talent data>}]
        this._maxItems = this._talents.length;
        this.refresh();
    }
};

Window_StatusTalents.prototype.maxCols = () => 2;

Window_StatusTalents.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_StatusTalents.prototype.drawItem = function(index) { // TODO
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 === 0 ? 48 : 432;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.MENU_LINE_HEIGHT;

    const talent = this.talentFromIndex(index);

    this.changeTextColor(this.systemColor());
    this.drawText(talent[1].name, x, y, 160);
    this.resetTextColor();
    this.drawText(this._actor.talent(talent[0]), x + 260, y, 60, 'right');
};

Window_StatusTalents.prototype.talentFromIndex = function(index) {
    return this._talents[index];
};

Window_StatusTalents.prototype.item = function() {
    const talent = this.talentFromIndex(this._index);
    return talent[1].name + ': ' + talent[1].desc;
};

Window_StatusTalents.prototype.select = function(index) {
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

Window_StatusTalents.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

Window_StatusTalents.prototype.isCurrentItemEnabled = function() {
    return true; // TODO
};

Window_StatusTalents.prototype.showHelpWindow = function() {
    if (this._helpWindow && this.active) {
        this._helpWindow.show();
        this._helpWindow.refresh();
    }
};

Window_StatusTalents.prototype.updateHelp = () => {};
