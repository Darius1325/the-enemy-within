// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.

TEW.MEMORY.gameScreenClear = Game_Screen.prototype.clear;
Game_Screen.prototype.clear = function() {
    TEW.MEMORY.gameScreenClear.call(this);
    this._battleStart = true;
};

TEW.MEMORY.gameScreenOnBattleStart = Game_Screen.prototype.onBattleStart;
Game_Screen.prototype.onBattleStart = function() {
    TEW.MEMORY.gameScreenOnBattleStart.call(this);
    this.clearStart();
};

Game_Screen.prototype.clearStart = function() {
    this._startDuration = this._battleStart ? TEW.COMBAT.SYSTEM.durationStartSprite : 0;
    this._battleStart = false;
};

Game_Screen.prototype.startDuration = function() {
    return this._startDuration;
};

TEW.MEMORY.gameScreenUpdate = Game_Screen.prototype.update;
Game_Screen.prototype.update = function() {
    TEW.MEMORY.gameScreenUpdate.call(this);
    this.updateStart();
};

Game_Screen.prototype.updateStart = function() {
    if (this._startDuration > 0) {
        this._startDuration--;
    }
};

Game_Screen.prototype.onBattleEnd = function() {
    this._battleStart = true;
    if (TEW.COMBAT.SYSTEM.fadeOutEnd) {
        this.startFadeOut(this.fadeSpeed());
    }
};

Game_Screen.prototype.fadeSpeed = function() {
    return 24;
};
