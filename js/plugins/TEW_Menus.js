
var Imported = Imported || {};
Imported.TEW_Menus = true;
var TEW = TEW || {};

/*
* This plugin contains windows for the custom status menu.
*/

TEW.windowNames = TEW.windowNames || {};

// Windows

Window_ShopStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var lineHeight = this.lineHeight();
        this.drawCharacterInfo(0);
        this.drawHorzLine(lineHeight);
        this.drawStats(lineHeight);
    }
};

// // Draw the different tabs in the status window
// Window_Status.prototype.drawTabs = function(){
//     this.addCommand("name1", 'skill', true, stypeId);
// }

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

Window_Status.prototype.drawCharacterInfo = function(y) {
    var lineHeight = this.lineHeight();
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + lineHeight);
    this.drawActorFace(this._actor, 12, y + lineHeight * 2);
    this.drawBasicInfo(204, y + lineHeight * 2);
};

