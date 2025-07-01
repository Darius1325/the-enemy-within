// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.

TacticsSystem.Game_Screen_clear = Game_Screen.prototype.clear;
Game_Screen.prototype.clear = function() {
    TacticsSystem.Game_Screen_clear.call(this);
    this._battleStart = true;
};

TacticsSystem.Game_Screen_onBattleStart = Game_Screen.prototype.onBattleStart;
Game_Screen.prototype.onBattleStart = function() {
    TacticsSystem.Game_Screen_onBattleStart.call(this);
    this.clearStart();
};

Game_Screen.prototype.clearStart = function() {
    this._startDuration = this._battleStart ? TacticsSystem.durationStartSprite : 0;
    this._battleStart = false;
};

Game_Screen.prototype.startDuration = function() {
    return this._startDuration;
};

TacticsSystem.Game_Screen_update = Game_Screen.prototype.update;
Game_Screen.prototype.update = function() {
    TacticsSystem.Game_Screen_update.call(this);
    this.updateStart();
};

Game_Screen.prototype.updateStart = function() {
    if (this._startDuration > 0) {
        this._startDuration--;
    }
};

Game_Screen.prototype.onBattleEnd = function() {
    this._battleStart = true;
    if (TacticsSystem.fadeOutEnd) {
        this.startFadeOut(this.fadeSpeed());
    }
};

Game_Screen.prototype.fadeSpeed = function() {
    return 24;
};
