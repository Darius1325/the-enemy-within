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
    this.setValue(TEW.COMBAT.SYSTEM.playerPhaseId, false);
    this.setValue(TEW.COMBAT.SYSTEM.enemyPhaseId, false);
    switch (BattleManager.phase()) {
        case 'playerPhase':
            this.setValue(TEW.COMBAT.SYSTEM.playerPhaseId, true);
            break;
        case 'enemyPhase':
            this.setValue(TEW.COMBAT.SYSTEM.enemyPhaseId, true);
            break
    }
};
