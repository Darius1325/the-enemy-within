// $PluginCompiler TEW_Combat.js

import {Scene_Battle} from "../../rmmv/scenes/Scene_Battle";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Interpreter
//
// The interpreter for running event commands.

// TODO command names
TEW.MEMORY.gameInterpreterPluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    TEW.MEMORY.gameInterpreterPluginCommand.call(this, command, args);
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
Game_Interpreter.prototype.clearAll = function(active: string) {
    TEW.COMBAT.SYSTEM.clearAll = active.toLowerCase() !== 'off';
};

// Process Victory
Game_Interpreter.prototype.processVictory = function() {
    BattleManager.processVictory();
};

// Process Defeat
Game_Interpreter.prototype.processDefeat = function() {
    TEW.COMBAT.SYSTEM.isDefeated = true;
    BattleManager.processDefeat();
};

// Selector Active
Game_Interpreter.prototype.selectorActive = function(active: string) {
    if (active.toLowerCase() === 'off') {
        $gameSelector.deactivate();
    } else {
        $gameSelector.activate();
    }
};

// Selector Transfer
Game_Interpreter.prototype.selectorTransfer = function(x, y) {
    $gameSelector.performTransfer(Number(x), Number(y));
    this.setWaitMode('TEW_Combat.selector');
};

// Selector Move To
Game_Interpreter.prototype.selectorMoveTo = function(x, y) {
    $gameSelector.moveTo(Number(x), Number(y));
    this.setWaitMode('TEW_Combat.selector');
};

// Selector Event
Game_Interpreter.prototype.selectorEvent = function(eventId) {
    var event = $gameMap.event(Number(eventId));
    $gameSelector.performTransfer(event.x, event.y);
    this.setWaitMode('TEW_Combat.selector');
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

TEW.MEMORY.gameInterpreterUpdateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function() {
    var waiting = false;
    switch (this._waitMode) {
        case 'TEW_Combat.battle':
            waiting = SceneManager.isCurrentScene(Scene_Battle) || SceneManager.isSceneChanging();
            break;
        case 'TEW_Combat.selector':
            waiting = $gameSelector.isBusy();
            break;
        default:
            return TEW.MEMORY.gameInterpreterUpdateWaitMode.call(this);
    }
    if (!waiting) {
        if (this._waitMode === 'TEW_Combat.battle') {
            BattleManager.clear();
        }
        this._waitMode = '';
    }
    return waiting;
};

TEW.MEMORY.gameInterpreterIterateEnemyIndex = Game_Interpreter.prototype.iterateEnemyIndex;
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
        TEW.MEMORY.gameInterpreterIterateEnemyIndex.call(this, param, callback);
    }
};

// Redefining event command : Battle Processing
// TODO remove useless branches
Game_Interpreter.prototype.command301 = function() {
    this.setWaitMode('TEW_Combat.battle');
    console.log('save me');
    if (!$gameParty.inBattle()) {
        var troopId;
        if (this._params[0] === 0) {  // Direct designation
            troopId = this._params[1];
        } else if (this._params[0] === 1) {  // Designation with a variable
            troopId = $gameVariables.value(this._params[1]);
        } else {  // Same as Random Encounter
            troopId = $gamePlayer.makeEncounterTroopId();
        }
        if (TEW.DATABASE.NPCS.TROOPS[troopId]) {
            BattleManager.setup(troopId, this._params[2], this._params[3]);
            BattleManager.setEventCallback(function(n) {
                this._branch[this._indent] = n;
            }.bind(this));
            $gamePlayer.makeEncounterCount();
            SceneManager.push(Scene_Battle);
        }
    }
    return true;
};
