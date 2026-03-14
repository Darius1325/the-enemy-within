// $PluginCompiler TEW_Combat.js

import { Spell } from "../../../_types/spell";
import Game_Actor from "../../game/Game_Actor";

// ----------------------
// $StartCompilation
// ----------------------

function Window_TacticsSpellList() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsSpellList.prototype = Object.create(Window_Selectable.prototype);
Window_TacticsSpellList.prototype.constructor = Window_TacticsSpellList;

Window_TacticsSpellList.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this, 440, Graphics.boxHeight - this.windowHeight());
};

Window_TacticsSpellList.prototype.setActor = function(actor: Game_Actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor();
    }
};

Window_TacticsSpellList.prototype.syncActor = function() {
    this._maxItems = this._actor._spells.length;
    this.refresh();
}

Window_TacticsSpellList.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_TacticsSpellList.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = 0;
    const y = Math.floor(normalizedIndex / this.maxCols()) * TEW.MENU.LINE_HEIGHT;

    const spell: Spell = this.spellFromIndex(index);
    this.drawText(spell.name, x, y, this.contentsWidth());
};

Window_TacticsSpellList.prototype.spellFromIndex = function(index: number) {
    return this._actor._spells[index];
};

Window_TacticsSpellList.prototype.item = function() {
    return this.spellFromIndex(this.index());
}

Window_TacticsSpellList.prototype.select = function(index: number) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_spell_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

Window_TacticsSpellList.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

Window_TacticsSpellList.prototype.maxCols = () => 3;
