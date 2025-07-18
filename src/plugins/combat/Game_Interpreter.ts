// $PluginCompiler TEW_Combat.js

import {Scene_Battle} from "../../rmmv/scenes/Scene_Battle";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Interpreter
//
// The interpreter for running event commands.



TacticsSystem.Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    TacticsSystem.Game_Interpreter_pluginCommand.call(this, command, args);
    switch(command) {
        case 'TacticsSystem.BattleProcessing':
            this.battleProcessing(args[0]);
            break;
        case 'TacticsSystem.ProcessVictory':
            this.processVictory();
            break;
        case 'TacticsSystem.ProcessDefeat':
            this.processDefeat();
            break;
        case 'TacticsSystem.ClearAll':
            this.clearAll(args[0]);
            break;
        case 'TacticsSystem.SelectorActive':
            this.selectorActive(args[0]);
            break;
        case 'TacticsSystem.SelectorTransfer':
            this.selectorTransfer(args[0], args[1]);
            break;
        case 'TacticsSystem.SelectorMoveTo':
            this.selectorMoveTo(args[0], args[1]);
            break;
        case 'TacticsSystem.SelectorEvent':
            this.selectorEvent(args[0]);
            break;
        case 'TacticsSystem.SelectorSave':
            this.selectorSave();
            break;
        case 'TacticsSystem.SelectorRestore':
            this.selectorRestore();
            break;
        case 'TacticsSystem.BattlerEndAction':
            this.battlerEndAction();
            break;
        case 'TacticsSystem.WindowCloseCommand':
            this.windowCloseCommand();
            break;
        case 'TacticsSystem.MapClearTiles':
            this.mapClearTiles();
            break;
    }
};

// Clear All
Game_Interpreter.prototype.clearAll = function(active) {
    if (active.toLowerCase() === 'off') {
        TacticsSystem.clearAll = false;
    } else {
        TacticsSystem.clearAll = true;
    }
};

// Process Victory
Game_Interpreter.prototype.processVictory = function() {
    BattleManager.processVictory();
};

// Process Defeat
Game_Interpreter.prototype.processDefeat = function() {
    TacticsSystem.isDefeated = true;
    BattleManager.processDefeat();
};

// Selector Active
Game_Interpreter.prototype.selectorActive = function(active) {
    if (active.toLowerCase() === 'off') {
        $gameSelector.deactivate();
    } else {
        $gameSelector.activate();
    }
};

// Selector Transfer
Game_Interpreter.prototype.selectorTransfer = function(x, y) {
    $gameSelector.performTransfer(Number(x), Number(y));
    this.setWaitMode('TacticsSystem.selector');
};

// Selector Move To
Game_Interpreter.prototype.selectorMoveTo = function(x, y) {
    $gameSelector.moveTo(Number(x), Number(y));
    this.setWaitMode('TacticsSystem.selector');
};

// Selector Event
Game_Interpreter.prototype.selectorEvent = function(eventId) {
    var event = $gameMap.event(Number(eventId));
    $gameSelector.performTransfer(event.x, event.y);
    this.setWaitMode('TacticsSystem.selector');
};

// Selector Save
Game_Interpreter.prototype.selectorSave = function() {
    $gameSelector.savePosition();
};

// Selector Restore
Game_Interpreter.prototype.selectorRestore = function() {
    $gameSelector.restorePosition();
};

// Battler End Action
Game_Interpreter.prototype.battlerEndAction = function() {
    BattleManager.endAction();
};

// Close Command Window
Game_Interpreter.prototype.windowCloseCommand= function() {
    BattleManager.closeCommand();
};

// Map Clear Tiles
Game_Interpreter.prototype.mapClearTiles = function() {
    $gameMap.clearTiles();
};

TacticsSystem.Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function() {
    var waiting = false;
    switch (this._waitMode) {
        case 'TacticsSystem.battle':
            waiting = SceneManager.isCurrentScene(Scene_Battle) || SceneManager.isSceneChanging();
            break;
        case 'TacticsSystem.selector':
            waiting = $gameSelector.isBusy();
            break;
        default:
            return TacticsSystem.Game_Interpreter_updateWaitMode.call(this);
    }
    if (!waiting) {
        if (this._waitMode === 'TacticsSystem.battle') {
            BattleManager.clear();
        }
        this._waitMode = '';
    }
    return waiting;
};

TacticsSystem.Game_Interpreter_iterateEnemyIndex = Game_Interpreter.prototype.iterateEnemyIndex;
Game_Interpreter.prototype.iterateEnemyIndex = function(param, callback) {
    if ($gamePartyTs.inBattle()) {
        if (param < 0) {
            $gameTroopTs.members().forEach(callback);
        } else {
            var enemy = $gameTroopTs.members()[param];
            if (enemy) {
                callback(enemy);
            }
        }
    } else {
        TacticsSystem.Game_Interpreter_iterateEnemyIndex.call(this, param, callback);
    }
};

// Battle Processing
TacticsSystem.Game_Interpreter_command301 = Game_Interpreter.prototype.command301;
Game_Interpreter.prototype.command301 = function() {
    this.setWaitMode('TacticsSystem.battle');
    return TacticsSystem.Game_Interpreter_command301.call(this);
};
