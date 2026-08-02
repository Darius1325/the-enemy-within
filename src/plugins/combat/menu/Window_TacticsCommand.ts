// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import Window_TacticsCommandBase from "./Window_TacticsCommandBase";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsCommand
//
// The window for selecting an actor's action on the tactics screen.

function Window_TacticsCommand() {
    this.initialize.apply(this, arguments);
}

Window_TacticsCommand.IMAGE_CACHE_RID = 'battleCommand';
Window_TacticsCommand.X_POS = 368;
Window_TacticsCommand.Y_POS = 467;
Window_TacticsCommand.EXTENDED_WIDTH = 220;
Window_TacticsCommand.TEXT_MAX_WIDTH = 150;

export default Window_TacticsCommand.prototype = Object.create(Window_TacticsCommandBase.prototype);
Window_TacticsCommand.prototype.constructor = Window_TacticsCommand;

Window_TacticsCommand.prototype.initialize = function() {
    Window_TacticsCommandBase.prototype.initialize.call(this);

    this._iconOrder = ['icon_battleCommand_move', 'icon_battleCommand_action', 'icon_battleCommand_lastUsed', 'icon_battleCommand_wait'];

    this.loadIcons();
};

Window_TacticsCommand.prototype.loadIcons = function() {
    ImageManager.reserveSystem('icon_battleCommand_move', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_action', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_lastUsed', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_wait', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_move_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_action_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_lastUsed_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_wait_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    const readyCheck = resolve => {
        if (ImageManager.isReady()) resolve();
        else setTimeout(() => readyCheck(resolve), 100);
    };
    new Promise(readyCheck).then(() => {
        this._imagesReady = true;
        this.refresh();
    });
}

Window_TacticsCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addMoveCommand();
        this.addActionCommand();
        this.addAdvantageCommand(); // TODO replace with last used
        this.addWaitCommand();
    }
};

Window_TacticsCommand.prototype.select = function(index: number) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
    }
};

Window_TacticsCommand.prototype.addMoveCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.move, 'move', BattleManager.canMove());
};

Window_TacticsCommand.prototype.addActionCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.action, 'action', true);
};

Window_TacticsCommand.prototype.addAdvantageCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.advantage, 'advantage', false);
};

Window_TacticsCommand.prototype.addWaitCommand = function() {
    this.addCommand(TEW.COMBAT.SYSTEM.wait, 'wait', true);
};

Window_TacticsCommand.prototype.xPos = function() {
    return Window_TacticsCommand.X_POS;
};
Window_TacticsCommand.prototype.yPos = function() {
    return Window_TacticsCommand.Y_POS;
};
Window_TacticsCommand.prototype.textMaxWidth = function() {
    return Window_TacticsCommand.TEXT_MAX_WIDTH;
};
Window_TacticsCommand.prototype.extendedWidth = function() {
    return Window_TacticsCommand.EXTENDED_WIDTH;
};
Window_TacticsCommand.prototype.imageCacheRid = function() {
    return Window_TacticsCommand.IMAGE_CACHE_RID;
};
