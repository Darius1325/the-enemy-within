// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsCommand
//
// The window for selecting an actor's action on the tactics screen.

function Window_TacticsCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsCommand.prototype.constructor = Window_TacticsCommand;

Window_TacticsCommand.prototype.initialize = function() {
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, 0, y);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};

Window_TacticsCommand.prototype.activate = function() {
    console.log('main window activation');
    Window_ActorCommand.prototype.activate.call(this);
}

Window_TacticsCommand.prototype.deactivate = function() {
    console.log('main window deactivation');
    Window_ActorCommand.prototype.deactivate.call(this);
}

Window_TacticsCommand.prototype.setup = function(actor) {
    this._actor = actor;
    this.refresh();
    // refresh call clear and make command !
    // don't need to call these methods
    // this.clearCommand();
    // this.makeCommand();
    this.selectLast();
    this.activate();
    this.open();
};

Window_TacticsCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addMoveCommand();
        this.addActionCommand();
        this.addAdvantageCommand();
        this.addWaitCommand();
    }
};

// Legacy command list
// Window_TacticsCommand.prototype.makeCommandList = function() {
//     if (this._actor) {
//         this.addActionCommand();
//         this.addAttackCommand();
//         this.addSkillCommands();
//         if (this._actor.canGuard()) {
//             this.addGuardCommand();
//         } else {
//             this.addWaitCommand();
//         }
//         this.addItemCommand();
//     }
// };

// Event-defined actions
// Window_TacticsCommand.prototype.addActionCommand = function() {
//     this._actor.checkEventTriggerThere();
//     this._actor.actionsButton().forEach(function(eventId) {
//         var event = $gameMap.event(eventId);
//         this.addCommand(event.name(), 'event');
//     }, this);
// };

Window_TacticsCommand.prototype.addMoveCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.move, 'move', true);
};

Window_TacticsCommand.prototype.addActionCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.action, 'action', true);
};

Window_TacticsCommand.prototype.addAdvantageCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.advantage, 'advantage', true);
};

Window_TacticsCommand.prototype.addWaitCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.wait, 'wait', true);
};
