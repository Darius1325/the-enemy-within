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
    this.addCommand(TEW.COMBAT.SYSTEM.moveWalk, 'walk', true);
};

Window_MoveCommand.prototype.addRunCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveRun, 'run', true);
};

Window_MoveCommand.prototype.addChargeCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveCharge, 'charge', true);
};

Window_MoveCommand.prototype.addSwitchWeaponCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.moveSwitchWeapon, 'switchWeapon', true);
};
