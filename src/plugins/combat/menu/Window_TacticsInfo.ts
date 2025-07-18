// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsInfo
//
// The window for displaying the combat information on the battle screen.

function Window_TacticsInfo() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsInfo.prototype = Object.create(Window_Status.prototype);
Window_TacticsInfo.prototype.constructor = Window_TacticsInfo;

Window_TacticsInfo.prototype.initialize = function() {
    Window_Status.prototype.initialize.call(this, 0, 0);
    this.openness = 0;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
};

Window_TacticsInfo.prototype.windowWidth = function() {
    return 816 / 2 - 100;
};

Window_TacticsInfo.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

Window_TacticsInfo.prototype.numVisibleRows = function() {
    return 3;
};

Window_TacticsInfo.prototype.open = function(battler) {
    var actor = JsonEx.makeDeepCopy(battler);
    this.setActor(actor);
    this.refresh()
    Window_Base.prototype.open.call(this);
};

Window_TacticsInfo.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        var lineHeight = this.lineHeight();
        this.drawBlock1(lineHeight * 0);
    }
};

Window_TacticsInfo.prototype.drawBlock1 = function(y) {
    var lineHeight = this.lineHeight();
    this.drawDamage(this._actor, 16, y + lineHeight * 0);
    this.drawHit(this._actor, 16, y + lineHeight * 1);
    this.drawCri(this._actor, 16, y + lineHeight * 2);
};

Window_TacticsInfo.prototype.drawDamage = function(actor, x, y) {
    var width = 168;
    var action = BattleManager.inputtingAction();
    this.drawDamageType(actor, x, y, width);
    var minHit = Math.abs(action.testDamageMinMaxValue(actor, false));
    var maxHit = Math.abs(action.testDamageMinMaxValue(actor, true));
    this.drawText(minHit + '-' + maxHit, x + 120, y, 120, 'right');
};

Window_TacticsInfo.prototype.drawDamageType = function(actor, x, y) {
    var action = BattleManager.inputtingAction();
    this.changeTextColor(this.systemColor());
    if (action.isDamage()) {
        this.drawText(TacticsSystem.damageTerm, x, y, 160);
    } else if (action.isRecover()) {
        this.drawText(TacticsSystem.recoverTerm, x, y, 160);
    } else {
        this.drawText(TacticsSystem.drainTerm, x, y, 160);
    }
    this.resetTextColor();
};

Window_TacticsInfo.prototype.drawHit = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TacticsSystem.hitRateTerm, x, y, 160);
    this.resetTextColor();
    var action = BattleManager.inputtingAction();
    var hit = action.itemHit(actor) * 100 + '%';
    this.drawText(hit, x + 180, y, 60, 'right');
};

Window_TacticsInfo.prototype.drawCri = function(actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TacticsSystem.criticalRateTerm, x, y, 160);
    this.resetTextColor();
    var action = BattleManager.inputtingAction();
    var crit = Math.round(action.itemCri(actor) * 100) + '%';
    this.drawText(crit, x + 180, y, 60, 'right');
};
