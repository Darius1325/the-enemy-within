// $PluginCompiler TEW_Menus.js

import TEW from "../../_types/tew";

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
    this.drawHorzLine(TEW.MENU.LINE_HEIGHT * 7);
    this.drawStats(TEW.MENU.LINE_HEIGHT * 8);
};

Window_StatusStats.prototype.drawCharacterInfo = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + TEW.MENU.LINE_HEIGHT);
    this.drawActorFace(this._actor, 12, y + TEW.MENU.LINE_HEIGHT * 2);
    this.drawBasicInfo(204, y + TEW.MENU.LINE_HEIGHT * 2);
};

Window_StatusStats.prototype.drawBasicInfo = function(x:number, y:number) {
    var lineHeight = this.lineHeight();
    this.drawActorHp(this._actor, x, y + lineHeight * 0);
    this.drawActorExp(this._actor, x, y + lineHeight * 1);
    this.drawActorFate(this._actor, x, y + lineHeight * 2);
    this.drawActorResilience(this._actor, x, y + lineHeight * 3);
};

Window_StatusStats.prototype.drawActorHp = function(actor, x, y) {
    const width = 186;
    const color1 = this.hpGaugeColor1();
    const color2 = this.normalColor();

    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    this.drawCurrentOverMax(actor.hp, actor.mhp, x, y, width, color1, color2, TextManager.hpA);
};

Window_StatusStats.prototype.drawActorExp = function(actor, x, y) {
    const width = 186;
    const valueWidth = this.textWidth(actor._exp);

    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.expA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor._exp, x + width - valueWidth, y, valueWidth, 'right');
}

Window_StatusStats.prototype.drawActorFate = function(actor, x, y) {
    const width = 186;
    this.drawCurrentOverMax(actor._fortune, actor._fate, x, y, width, this.normalColor(), this.normalColor(), 'FATE'); // TODO
}

Window_StatusStats.prototype.drawActorResilience = function(actor, x, y) {
    const width = 186;
    this.drawCurrentOverMax(actor._resolve, actor._resilience, x, y, width, this.normalColor(), this.normalColor(), 'RESIL'); // TODO
}

Window_StatusStats.prototype.drawStats = function(y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};

Window_StatusStats.prototype.drawParameters = function(x, y, offset) {
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + TEW.MENU.LINE_HEIGHT * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};
