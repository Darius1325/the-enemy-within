// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Scene_Map
//
// The scene class of the map screen.

TacticsSystem.Scene_Map_launchBattle = Scene_Map.prototype.launchBattle;
Scene_Map.prototype.launchBattle = function() {
    BattleManager.saveBgmAndBgs();
    this.stopAudioOnBattleStart();
    SoundManager.playBattleStart();
    this._encounterEffectDuration = this.encounterEffectSpeed();
    this._mapNameWindow.hide();
};

Scene_Map.prototype.updateEncounterEffect = function() {
    if (this._encounterEffectDuration > 0) {
        this._encounterEffectDuration--;
        var timer = this._encounterEffectDuration;
        var startTimer = this.encounterEffectSpeed();
        if (timer === startTimer - 1) {
            this.startFadeOut(this.slowFadeSpeed());
        }
        if (timer === Math.floor(startTimer / 2)) {
            BattleManager.playBattleBgm();
        }
        if (timer === 1) {
            BattleManager.createGameObjects();
        }
    }
};

TacticsSystem.Scene_Map_encounterEffectSpeed = Scene_Map.prototype.encounterEffectSpeed;
Scene_Map.prototype.encounterEffectSpeed = function() {
    return 180;
};
