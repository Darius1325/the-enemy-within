// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Variables
//
// The game object class for variables.

Game_Variables.prototype.update = function() {
    this.updatePhase();
    this.updatePlayerPhase();
    this.updateBattlePhase();
    this.updateTurnCount();
};

Game_Variables.prototype.updatePhase = function() {
    switch (BattleManager.phase()) {
        case 'startPhase':
            var value = 1;
            break;
        case 'playerPhase':
            var value = 2;
            break;
        case 'enemyPhase':
            var value = 3;
            break
        // can't to be used
        case 'battleEnd':
            var value = 4;
            break;
        default:
            var value = 0;
            break;
    }
    this.setValue(TacticsSystem.phaseVarId, value);
};

Game_Variables.prototype.updatePlayerPhase = function() {
    switch (BattleManager.battlePhase()) {
        case 'explore':
            var value = 1;
            break;
        case 'select':
            var value = 2;
            break;
        case 'target':
            var value = 3;
            break
        default:
            var value = 0;
            break;
    }
    this.setValue(TacticsSystem.playerPhaseVarId, value);
};

Game_Variables.prototype.updateBattlePhase = function() {
    switch (BattleManager.battlePhase()) {
        case 'start':
            var value = 1;
            break;
        case 'move':
            var value = 2;
            break;
        case 'action':
            var value = 3;
            break
        case 'turnEnd':
            var value = 4;
            break;
        default:
            var value = 0;
            break;
    }
    this.setValue(TacticsSystem.battlePhaseVarId, value);
};

Game_Variables.prototype.updateTurnCount = function() {
    this.setValue(TacticsSystem.turnCountVarId, $gameTroop.turnCount());
};
