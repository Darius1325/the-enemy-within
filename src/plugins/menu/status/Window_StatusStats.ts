// $PluginCompiler TEW_Menus.js

import TEW from "../../types/TEW";

// $StartCompilation

// -----------------------------------------------------------------------------
// Window_StatusStats
//
// Character stats window

function Window_StatusStats() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusStats.prototype = Object.create(Window_Status.prototype);
Window_StatusStats.prototype.constructor = Window_StatusStats;

Window_StatusStats.prototype.initialize = function() {
    Window_Status.prototype.initialize.call(this);
};

Window_StatusStats.prototype.drawAllItems = function() {
    this.drawCharacterInfo(1);
    this.drawHorzLine(TEW.MENU.MENU_LINE_HEIGHT * 7);
    this.drawStats(TEW.MENU.MENU_LINE_HEIGHT * 8);
};

Window_StatusStats.prototype.drawCharacterInfo = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + TEW.MENU.MENU_LINE_HEIGHT);
    this.drawActorFace(this._actor, 12, y + TEW.MENU.MENU_LINE_HEIGHT * 2);
    this.drawBasicInfo(204, y + TEW.MENU.MENU_LINE_HEIGHT * 2);
};

Window_StatusStats.prototype.drawStats = function(y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};

Window_StatusStats.prototype.drawParameters = function(x, y, offset) {
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + TEW.MENU.MENU_LINE_HEIGHT * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};
