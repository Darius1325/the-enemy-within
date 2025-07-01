// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Switches
//
// The game object class for switches.

Game_Switches.prototype.update = function() {
    this.updatePhase();
};

Game_Switches.prototype.updatePhase = function() {
    this.setValue(TacticsSystem.playerPhaseId, false);
    this.setValue(TacticsSystem.enemyPhaseId, false);
    switch (BattleManager.phase()) {
        case 'playerPhase':
            this.setValue(TacticsSystem.playerPhaseId, true);
            break;
        case 'enemyPhase':
            this.setValue(TacticsSystem.enemyPhaseId, true);
            break
    }
};
