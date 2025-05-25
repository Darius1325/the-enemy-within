// $PluginCompiler TEW_Menus.js

// ----------------------

// File : Window_StatusSpells.ts
// Author : Ersokili, 7evy, Sebibebi67
// Date : 03/05/2025
// Description : This file contains the implementation of the Window_StatusSpells class, which is used to display the spells of a character in the status menu.

// ----------------------
// Imports
// ----------------------

import TEW from "../../types/tew";
import HalfWindow_List from "../base/HalfWindow_List";

// ----------------------
// $StartCompilation
// ----------------------

function Window_StatusSpells() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusSpells.prototype = Object.create(HalfWindow_List.prototype);
Window_StatusSpells.prototype.constructor = Window_StatusSpells;

Window_StatusSpells.prototype.initialize = function() {
    HalfWindow_List.prototype.initialize.call(this);
};

Window_StatusSpells.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._spells = TEW.DATABASE.SPELLS.ARRAY.filter(spell => actor.hasSpell(spell[0]));   // [<internal name>, {<talent data>}] // TODO
        this._maxItems = this._spells.length;
        this.refresh();
    }
};


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
    const x = 48;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;

    const spell = this.spellFromIndex(index);

    this.changeTextColor(this.systemColor());
    this.drawText(spell[1].name, x, y, 160);
    this.resetTextColor();
};

Window_StatusSpells.prototype.spellFromIndex = function(index: number) {
    return this._spells[index];
};

Window_StatusSpells.prototype.select = function(index: number) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_spell_details");
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

