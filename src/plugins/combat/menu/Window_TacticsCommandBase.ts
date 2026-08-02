// $PluginCompiler TEW_Combat.js 10

import { Bitmap } from "../../../rmmv/core/Bitmap";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsCommandBase
//
// The window for selecting an actor's action on the tactics screen.

function Window_TacticsCommandBase() {
    this.initialize.apply(this, arguments);
}

Window_TacticsCommandBase.TEXT_COLOR = "#c0c0c0";
Window_TacticsCommandBase.SELECTED_TEXT_COLOR = "#f0f0f0";
Window_TacticsCommandBase.COLLAPSED_WIDTH = 86;
Window_TacticsCommandBase.STATE_COLLAPSED = 'collapsed';
Window_TacticsCommandBase.STATE_EXTENDED = 'extended';
Window_TacticsCommandBase.LINE_HEIGHT = 54;
Window_TacticsCommandBase.ICON_SLOT_WIDTH = 54;
Window_TacticsCommandBase.TEXT_OFFSET_FROM_ICON = 8;
Window_TacticsCommandBase.FONT_SIZE = 32;
Window_TacticsCommandBase.BG_PADDING = 13;

export default Window_TacticsCommandBase.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsCommandBase.prototype.constructor = Window_TacticsCommandBase;

Window_TacticsCommandBase.prototype.initialize = function() {
    Window_Command.prototype.initialize.call(this, this.xPos(), this.yPos());
    this.openness = 0;
    this.deactivate();
    this._actor = null;
    
    this._state = Window_TacticsCommandBase.STATE_EXTENDED;

    this._imagesReady = false;
};

Window_TacticsCommandBase.prototype.setActor = function(actor) {
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

Window_TacticsCommandBase.prototype.refresh = function() {
    if (this._actor && this._imagesReady) {
        Window_ActorCommand.prototype.refresh.call(this);
    }
};

Window_TacticsCommandBase.prototype.drawAllItems = function() {
    this.contents.fontSize = Window_TacticsCommandBase.FONT_SIZE;
    Window_ActorCommand.prototype.drawAllItems.call(this);
    this.contents.fontSize = this.standardFontSize();
    this.resetTextColor();
};

Window_TacticsCommandBase.prototype.drawItem = function(index: number) {
    const y = index * Window_TacticsCommandBase.LINE_HEIGHT;

    let iconName = this._iconOrder[index];
    if (this._index === index) {
        iconName += '_selected';
    }

    const bitmap: Bitmap = ImageManager.loadSystem(iconName);
    this.contents.blt(bitmap, 0, 0, bitmap.rect.width, bitmap.rect.height, 0, y);

    // Extended view
    console.log('Window_TacticsCommandBase.prototype.drawItem', this._state);
    if (this._state === Window_TacticsCommandBase.STATE_EXTENDED) {
        let textColor = Window_TacticsCommandBase.TEXT_COLOR;
        if (this._index === index) {
            textColor = Window_TacticsCommandBase.SELECTED_TEXT_COLOR;
        }
        this.changeTextColor(textColor);
        this.drawText(this.commandName(index),
            Window_TacticsCommandBase.LINE_HEIGHT,
            y + Window_TacticsCommandBase.TEXT_OFFSET_FROM_ICON,
            this.textMaxWidth()
        );
    }
};

Window_TacticsCommandBase.prototype.itemRect = function(index: number) {
    return new Rectangle(
        0, index * Window_TacticsCommandBase.LINE_HEIGHT,
        Window_TacticsCommandBase.ICON_SLOT_WIDTH + this.textMaxWidth(), Window_TacticsCommandBase.LINE_HEIGHT
    );
};

Window_TacticsCommandBase.prototype.itemRectForText = function(index: number) {
    return this.itemRect(index);
};

Window_TacticsCommandBase.prototype.select = function(index: number) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
    }
};

Window_TacticsCommandBase.prototype.collapse = function() {
    if (this._state == Window_TacticsCommandBase.STATE_EXTENDED) {
        this._state = Window_TacticsCommandBase.STATE_COLLAPSED;
        this.width = Window_TacticsCommandBase.COLLAPSED_WIDTH;
        this.refresh();
    }
};

Window_TacticsCommandBase.prototype.extend = function() {
    if (this._state == Window_TacticsCommandBase.STATE_COLLAPSED) {
        this._state = Window_TacticsCommandBase.STATE_EXTENDED;
        this.width = this.extendedWidth();
        this.refresh();
    }
};

// Legacy command list
// Window_TacticsCommandBase.prototype.makeCommandList = function() {
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
// Window_TacticsCommandBase.prototype.addActionCommand = function() {
//     this._actor.checkEventTriggerThere();
//     this._actor.actionsButton().forEach(function(eventId) {
//         var event = $gameMap.event(eventId);
//         this.addCommand(event.name(), 'event');
//     }, this);
// };

Window_TacticsCommandBase.prototype.close = function() {
    ImageManager.releaseReservation(this.imageCacheRid());
    Window_ActorCommand.prototype.close.call(this);
};

Window_TacticsCommandBase.prototype.horizontalBorderPadding = () => Window_TacticsCommandBase.BG_PADDING;
Window_TacticsCommandBase.prototype.verticalBorderPadding = () => Window_TacticsCommandBase.BG_PADDING;

Window_TacticsCommandBase.prototype.updateCursor = function() {
    this.setCursorRect(0, 0, 0, 0);
};

Window_TacticsCommandBase.prototype.close = function() {
    ImageManager.releaseReservation(this.imageCacheRid());
    Window_ActorCommand.prototype.close.call(this);
};

Window_TacticsCommandBase.prototype.xPos = function() {
    return 0;
};
Window_TacticsCommandBase.prototype.yPos = function() {
    return 0;
};
Window_TacticsCommandBase.prototype.textMaxWidth = function() {
    return 0;
};
Window_TacticsCommandBase.prototype.extendedWidth = function() {
    return 0;
};
Window_TacticsCommandBase.prototype.imageCacheRid = function() {
    return '';
};
