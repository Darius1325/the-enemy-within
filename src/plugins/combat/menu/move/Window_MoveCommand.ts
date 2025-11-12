// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_MoveCommand
//
// The window for selecting an actor's action on the tactics screen.

function Window_MoveCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_MoveCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_MoveCommand.prototype.constructor = Window_MoveCommand;

Window_MoveCommand.WALK_COMMAND_INDEX = 0;
Window_MoveCommand.WALK_MOVE_MULTIPLIER = 1;

Window_MoveCommand.RUN_COMMAND_INDEX = 1;
Window_MoveCommand.RUN_MOVE_MULTIPLIER = 2;

Window_MoveCommand.CHARGE_COMMAND_INDEX = 2;
Window_MoveCommand.CHARGE_MOVE_MULTIPLIER = 2;

Window_MoveCommand.SWITCH_WEAPON_COMMAND_INDEX = 3;
Window_MoveCommand.SWITCH_WEAPON_MOVE_MULTIPLIER = 0;

Window_MoveCommand.prototype.initialize = function() {
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, this.windowWidth(), y);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};

Window_MoveCommand.prototype.setActor = function(actor) {
    this._actor = actor;
    this.refresh();
    this.selectLast();
    this.activate();
    this.open();
};

Window_MoveCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addWalkCommand();
        this.addRunCommand();
        this.addChargeCommand();
        this.addSwitchWeaponCommand();
    }
};

Window_MoveCommand.prototype.addWalkCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveWalk, 'walk', BattleManager.canMove());
};

Window_MoveCommand.prototype.addRunCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveRun, 'run', BattleManager.canRun());
};

Window_MoveCommand.prototype.addChargeCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveCharge, 'charge', BattleManager.canRun());
};

Window_MoveCommand.prototype.addSwitchWeaponCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveSwitchWeapon, 'switchWeapon', false);
};

Window_MoveCommand.prototype.select = function(index: number) {
    Window_ActorCommand.prototype.select.call(this, index);
    if (this._index === Window_MoveCommand.WALK_COMMAND_INDEX) {
        $gameMap._flexibleMovement = true;
        BattleManager.moveMultiplier = Window_MoveCommand.WALK_MOVE_MULTIPLIER;
    } else if (this._index === Window_MoveCommand.RUN_COMMAND_INDEX) {
        $gameMap._flexibleMovement = true;
        BattleManager.moveMultiplier = Window_MoveCommand.RUN_MOVE_MULTIPLIER;
    } else if (this._index === Window_MoveCommand.CHARGE_COMMAND_INDEX) {
        $gameMap._flexibleMovement = false;
        BattleManager.moveMultiplier = Window_MoveCommand.CHARGE_MOVE_MULTIPLIER;
    } else if (this._index === Window_MoveCommand.SWITCH_WEAPON_COMMAND_INDEX) {
        $gameMap._flexibleMovement = true;
        BattleManager.moveMultiplier = Window_MoveCommand.SWITCH_WEAPON_MOVE_MULTIPLIER;
    }
    BattleManager.refreshMoveTiles();
};
