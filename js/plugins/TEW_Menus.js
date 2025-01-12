
var Imported = Imported || {};
Imported.TEW_Menus = true;
var TEW = TEW || {};

/*
* This plugin contains windows for the custom status menu.
*/

TEW.windowNames = TEW.windowNames || {};

// Scenes




// Windows
// Character info and stats window

Window_Status.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this, 0, 100, Graphics.boxWidth, Graphics.boxHeight - 100);
    this._actor = null;
    this._tab = 'stats';
    this.refresh();
    this.activate();
};

Window_Status.prototype.switchTab = function(tab) {
    this._tab = tab;
};

Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        if (this.tab === 'comps') {
            this.drawCompetences(100);
        }
    }
};

Window_Status.prototype.drawStatsTab = function() {
    var lineHeight = this.lineHeight();
    this.drawCharacterInfo(1);
    this.drawHorzLine(lineHeight * 7);
    this.drawStats(lineHeight * 8);
};

Window_Status.prototype.drawCharacterInfo = function(y) {
    var lineHeight = this.lineHeight();
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + lineHeight);
    this.drawActorFace(this._actor, 12, y + lineHeight * 2);
    this.drawBasicInfo(204, y + lineHeight * 2);
};

Window_Status.prototype.drawStats = function(y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};

Window_Status.prototype.drawParameters = function(x, y, offset) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + lineHeight * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};

Window_Status.prototype.drawCompetences = function(y) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 5; i++) {
        var compName = i + offset + 1;
        var y2 = y + lineHeight * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};

Window_Status.prototype.drawBaseComps = function (y) {
    const x1 = 48;
    const x2 = 432;
    for (var i = 0; i < TEW.baseComps.length / 2; i++) {
        var y2 = y + lineHeight * i;
        var compName = TEW.baseComps[i].name;
        this.changeTextColor(this.systemColor());
        this.drawText(compName, x1, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.comp(compName) + '(' + this._actor.compPlus(compName) + ')', x1 + 160, y2, 60, 'right');
    }
    for (var i = TEW.baseComps.length / 2; i < TEW.baseComps.length; i++) {
        var y2 = y + lineHeight * i;
        var compName = TEW.baseComps[i].name;
        this.changeTextColor(this.systemColor());
        this.drawText(compName, x2, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.comp(compName) + '(' + this._actor.compPlus(compName) + ')', x2 + 160, y2, 60, 'right');
    }
};
