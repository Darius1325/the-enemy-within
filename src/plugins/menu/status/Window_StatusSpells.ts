// $PluginCompiler TEW_Menus.js

import TEW from "../../types/TEW";

// $StartCompilation

// -----------------------------------------------------------------------------
// Window_StatusSpells
//
// Spell list window

function Window_StatusSpells() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusSpells.prototype = Object.create(Window_Status.prototype);
Window_StatusSpells.prototype.constructor = Window_StatusSpells;

Window_StatusSpells.prototype.initialize = function() {
    Window_Status.prototype.initialize.call(this);
    this._helpWindow = null;
    this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_StatusSpells.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._spells = TEW.DATABASE.SPELLS.ARRAY.filter(spell => actor.hasSpell(spell[0]));   // [<internal name>, {<talent data>}] // TODO
        this._maxItems = this._spells.length;
        this.refresh();
    }
};

Window_StatusSpells.prototype.maxCols = () => 2;

Window_StatusSpells.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_StatusSpells.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 === 0 ? 48 : 432;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.MENU_LINE_HEIGHT;

    const spell = this.spellFromIndex(index);

    this.changeTextColor(this.systemColor());
    this.drawText(spell[1].name, x, y, 160);
    this.resetTextColor();
};

Window_StatusSpells.prototype.spellFromIndex = function(index: number) {
    return this._spells[index];
};

Window_StatusSpells.prototype.item = function() {
    const spell = this.spellFromIndex(this._index);
    return spell[1].name + ': ' + spell[1].desc;
};

Window_StatusSpells.prototype.select = function(index: number) {
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

Window_StatusSpells.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

Window_StatusSpells.prototype.isCurrentItemEnabled = function() {
    return true; // TODO
};

Window_StatusSpells.prototype.showHelpWindow = function() {
    if (this._helpWindow && this.active) {
        this._helpWindow.show();
        this._helpWindow.refresh();
    }
};

Window_StatusSpells.prototype.updateHelp = () => {};
