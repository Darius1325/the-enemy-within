// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsActionCommand
//
// The window for selecting an actor's action on the tactics screen.

function Window_TacticsActionCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsActionCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsActionCommand.prototype.constructor = Window_TacticsActionCommand;

Window_TacticsActionCommand.prototype.initialize = function() {
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, 240, Graphics.boxHeight - this.windowHeight());
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};

Window_TacticsActionCommand.prototype.setActor = function(actor) {
    this._actor = actor;
    this.refresh();
    this.selectLast();
    this.activate();
    this.open();
};

Window_TacticsActionCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addAttackCommand();
    }
};

Window_TacticsActionCommand.prototype.addAttackCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.actionAttack, 'attack', BattleManager.canAct());
};

Window_TacticsActionCommand.prototype.select = function(index: number) {
    Window_ActorCommand.prototype.select.call(this, index);
    BattleManager.refreshMoveTiles();
};
