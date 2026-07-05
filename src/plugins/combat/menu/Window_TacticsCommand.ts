// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import { Bitmap } from "../../../rmmv/core/Bitmap";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsCommand
//
// The window for selecting an actor's action on the tactics screen.

function Window_TacticsCommand() {
    this.initialize.apply(this, arguments);
}

Window_TacticsCommand.IMAGE_CACHE_RID = 'battleCommand';
Window_TacticsCommand.TEXT_COLOR = "#f0f0f0";
Window_TacticsCommand.X_POS = 368;
Window_TacticsCommand.Y_POS = 485;

export default Window_TacticsCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsCommand.prototype.constructor = Window_TacticsCommand;

Window_TacticsCommand.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, 368, 485);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
    this._iconOrder = ['icon_battleCommand_action', 'icon_battleCommand_move', 'icon_battleCommand_lastUsed', 'icon_battleCommand_wait'];
    
    this._imagesReady = false;
    ImageManager.reserveSystem('icon_battleCommand_action', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_move', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_lastUsed', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_wait', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_action_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_move_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
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
};

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

Window_TacticsCommand.prototype.refresh = function() {
    if (this._actor && this._imagesReady) {
        Window_ActorCommand.prototype.refresh.call(this);
    }
};

Window_TacticsCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addMoveCommand();
        this.addActionCommand();
        this.addAdvantageCommand(); // TODO replace with last used
        this.addWaitCommand();
    }
};

Window_TacticsCommand.prototype.drawItem = function(index: number) {
    const y = index * (TEW.MENU.LINE_HEIGHT + 8);

    let iconName = this._index === index ? this._iconOrder[index] + '_selected' : this._iconOrder[index];
    const bitmap: Bitmap = ImageManager.loadSystem(iconName);
    this.contents.blt(bitmap, 0, 0, bitmap.rect.width, bitmap.rect.height, 0, y);
    this.changeTextColor(Window_TacticsCommand.TEXT_COLOR);
    this.drawText(this.commandName(index), 48, y, 152);
    this.resetTextColor();
};

Window_TacticsCommand.prototype.itemRect = function(index: number) {
    return new Rectangle(
        0, index * (TEW.MENU.LINE_HEIGHT + 8),
        200, TEW.MENU.LINE_HEIGHT
    );
};

Window_TacticsCommand.prototype.itemRectForText = function(index: number) {
    return this.itemRect(index);
};

Window_TacticsCommand.prototype.select = function(index: number) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
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

Window_TacticsCommand.prototype.close = function() {
    ImageManager.releaseReservation(Window_TacticsCommand.IMAGE_CACHE_RID);
    Window_ActorCommand.prototype.close.call(this);
};

Window_TacticsCommand.prototype.horizontalborderPadding = () => 25;
Window_TacticsCommand.prototype.verticalBorderPadding = () => 25;

Window_TacticsCommand.prototype.updateCursor = function() {
    this.setCursorRect(0, 0, 0, 0);
};
