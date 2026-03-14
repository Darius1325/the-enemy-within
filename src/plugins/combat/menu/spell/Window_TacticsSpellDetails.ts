// $PluginCompiler TEW_Combat.js

import { Spell } from "../../../_types/spell";

// $StartCompilation

function Window_TacticsSpellDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsSpellDetails.prototype = Object.create(Window_Base.prototype);
Window_TacticsSpellDetails.prototype.constructor = Window_TacticsSpellDetails;

Window_TacticsSpellDetails.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, 1040, Graphics.boxHeight - this.windowHeight());
    this._spell = null;
};

Window_TacticsSpellDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._spell) {
        this.drawDetails(this._spell);
    }
};

Window_TacticsSpellDetails.prototype.empty = function() {
    this._spell = null;
};

Window_TacticsSpellDetails.prototype.drawDetails = function (spell: Spell) {
};
