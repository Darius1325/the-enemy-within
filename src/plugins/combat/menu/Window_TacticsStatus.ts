// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsStatus
//
// The window for displaying the unit status on the tactics screen.

function Window_TacticsStatus() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsStatus.prototype = Object.create(Window_Base.prototype);
Window_TacticsStatus.prototype.constructor = Window_TacticsStatus;

Window_TacticsStatus.prototype.initialize = function() {
    var y = Graphics.boxHeight - (this.windowHeight());
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, y, width, height);
    this.openness = 0;
    this._battler = null;
};

Window_TacticsStatus.prototype.windowWidth = function() {
    return 816/2 - 32;
};

Window_TacticsStatus.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

Window_TacticsStatus.prototype.numVisibleRows = function() {
    return 4;
};

Window_TacticsStatus.prototype.open = function(battler) {
    if (battler) {
        this._battler = battler;
    }
    this.refresh();
    Window_Base.prototype.open.call(this);
};

Window_TacticsStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._battler) {
        this.drawBattlerStatus();
    }
};

Window_TacticsStatus.prototype.drawBattlerStatus = function() {
    if (this._battler.isActor()) {
        this.drawActorFrame();
        this.drawActorSimpleStatus(this._battler, 0, 0, 376);
    } else {
        this.drawEnemyFrame();
        this.drawEnemySimpleStatus(this._battler, 0, 0, 376);
    }
};

Window_TacticsStatus.prototype.drawActorFrame = function() {
    if (TEW.COMBAT.SYSTEM.showFaceUnit) {
        this.drawActorFace(this._battler, 0, 0, Window_Base._faceWidth, Window_Base._faceHeight);
    } else {
        this.drawActorCharacter(this._battler, 48+24, 48*2);
    }
};

Window_TacticsStatus.prototype.drawEnemyFrame = function() {
    if (TEW.COMBAT.SYSTEM.showFaceUnit) {
        this.drawEnemyImage(this._battler, 0, 0);
    } else {
        var event = this._battler.event();
        this.drawCharacter(event.characterName(), event.characterIndex(), 48+24, 48*2);
    }
};

Window_TacticsStatus.prototype.drawActorSimpleStatus = function(actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 150;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y);
    if ($dataSystem.optDisplayTp) {
        this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
        this.drawActorTp(actor, x2, y + lineHeight * 3, width2);
    } else {
        this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    }
};

Window_TacticsStatus.prototype.drawEnemySimpleStatus = function(enemy, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 150;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(enemy, x2, y);
    this.drawActorHp(enemy, x2, y + lineHeight * 1, width2);
    this.drawActorMp(enemy, x2, y + lineHeight * 2, width2);
};
