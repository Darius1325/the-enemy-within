// $PluginCompiler TEW_Combat.js
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

Window_TacticsMoveCommand.WALK_COMMAND_INDEX = 0;
Window_TacticsMoveCommand.WALK_MOVE_MULTIPLIER = 1;

Window_TacticsMoveCommand.RUN_COMMAND_INDEX = 1;
Window_TacticsMoveCommand.RUN_MOVE_MULTIPLIER = 2;

Window_TacticsMoveCommand.CHARGE_COMMAND_INDEX = 2;
Window_TacticsMoveCommand.CHARGE_MOVE_MULTIPLIER = 2;

Window_TacticsMoveCommand.SWITCH_WEAPON_COMMAND_INDEX = 3;
Window_TacticsMoveCommand.SWITCH_WEAPON_MOVE_MULTIPLIER = 0;

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
    this.addCommand(TEW.COMBAT.SYSTEM.moveWalk, 'walk', BattleManager.canMove());
};

Window_TacticsMoveCommand.prototype.addRunCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveRun, 'run', BattleManager.canRun());
};

Window_TacticsMoveCommand.prototype.addChargeCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveCharge, 'charge', BattleManager.canRun());
};

Window_TacticsMoveCommand.prototype.addSwitchWeaponCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveSwitchWeapon, 'switchWeapon', BattleManager.canMove());
};

Window_TacticsMoveCommand.prototype.select = function(index: number) {
    Window_ActorCommand.prototype.select.call(this, index);
    if (this._index === Window_TacticsMoveCommand.WALK_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_TacticsMoveCommand.WALK_MOVE_MULTIPLIER;
        $gameMap._flexibleMovement = true;
    } else if (this._index === Window_TacticsMoveCommand.RUN_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_TacticsMoveCommand.RUN_MOVE_MULTIPLIER;
        $gameMap._flexibleMovement = true;
    } else if (this._index === Window_TacticsMoveCommand.CHARGE_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_TacticsMoveCommand.CHARGE_MOVE_MULTIPLIER;
        $gameMap._flexibleMovement = false;
    } else if (this._index === Window_TacticsMoveCommand.SWITCH_WEAPON_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_TacticsMoveCommand.SWITCH_WEAPON_MOVE_MULTIPLIER;
        $gameMap._flexibleMovement = true;
    }
    BattleManager.refreshMoveTiles();
};
