// $PluginCompiler TEW_Combat.js

import { BattleOption } from "../../../_types/enum";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_MoveCommand
//
// The window for selecting an actor's action on the tactics screen.

function Window_TacticsMoveCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsMoveCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsMoveCommand.prototype.constructor = Window_TacticsMoveCommand;

// Move option previewed on the map for each command (see BattleManager.previewMoveOption)
Window_TacticsMoveCommand.PREVIEWED_OPTIONS = [BattleOption.WALK, BattleOption.RUN, BattleOption.CHARGE, BattleOption.SWITCH_WEAPONS];

Window_TacticsMoveCommand.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 240, Graphics.boxHeight - this.windowHeight());
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};

Window_TacticsMoveCommand.prototype.setActor = function(actor) {
    this._actor = actor;
    this.refresh();
    this.selectLast();
    this.activate();
    this.open();
};

Window_TacticsMoveCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addWalkCommand();
        this.addRunCommand();
        this.addChargeCommand();
        this.addSwitchWeaponCommand();
    }
};

Window_TacticsMoveCommand.prototype.addWalkCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveWalk, TEW.COMBAT.SYSTEM.moveWalk, BattleManager.canMove());
};

Window_TacticsMoveCommand.prototype.addRunCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveRun, TEW.COMBAT.SYSTEM.moveRun, BattleManager.canRun());
};

Window_TacticsMoveCommand.prototype.addChargeCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveCharge, TEW.COMBAT.SYSTEM.moveCharge, BattleManager.canRun());
};

Window_TacticsMoveCommand.prototype.addSwitchWeaponCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveSwitchWeapon, TEW.COMBAT.SYSTEM.moveSwitchWeapon, BattleManager.canMove());
};

Window_TacticsMoveCommand.prototype.select = function(index: number) {
    Window_ActorCommand.prototype.select.call(this, index);
    const option = Window_TacticsMoveCommand.PREVIEWED_OPTIONS[this._index];
    if (option !== undefined) {
        BattleManager.previewMoveOption(option);
    }
};
