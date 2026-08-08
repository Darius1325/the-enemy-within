// $PluginCompiler TEW_Combat.js

import Window_TacticsCommandBase from "../Window_TacticsCommandBase";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsActionCommand
//
// The window for selecting an actor's action on the tactics screen.

function Window_TacticsLastUsedCommand() {
    this.initialize.apply(this, arguments);
}

Window_TacticsLastUsedCommand.IMAGE_CACHE_RID = 'battleLastUsedCommand';
Window_TacticsLastUsedCommand.X_POS = 458;
Window_TacticsLastUsedCommand.Y_POS = 467;
Window_TacticsLastUsedCommand.EXTENDED_WIDTH = 220;
Window_TacticsLastUsedCommand.TEXT_MAX_WIDTH = 150;

export default Window_TacticsLastUsedCommand.prototype = Object.create(Window_TacticsCommandBase.prototype);
Window_TacticsLastUsedCommand.prototype.constructor = Window_TacticsLastUsedCommand;

Window_TacticsLastUsedCommand.prototype.initialize = function() {
    Window_TacticsCommandBase.prototype.initialize.call(this);

    this.loadIcons();
};

Window_TacticsLastUsedCommand.prototype.loadIcons = function() { // GIGA TODO reserve all images at battle start?
    ImageManager.reserveSystem('icon_battleCommand_attack', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_spell', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_channelling', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_attack_selected', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_spell_selected', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_channelling_selected', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    const readyCheck = resolve => {
        if (ImageManager.isReady()) resolve();
        else setTimeout(() => readyCheck(resolve), 100);
    };
    new Promise(readyCheck).then(() => {
        this._imagesReady = true;
        this.refresh();
    });
};

Window_TacticsLastUsedCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        let recentCommand: { name: string, canUse: () => boolean };
        for (recentCommand of this._actor._lastBattleCommands) {
            this.addCommand(recentCommand.name, recentCommand.name, recentCommand.canUse());
            this._iconOrder.push('icon_battleCommand_' + recentCommand.name);
        }
    }
};

Window_TacticsLastUsedCommand.prototype.select = function(index: number) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
        BattleManager.refreshMoveTiles();
    }
};

Window_TacticsLastUsedCommand.prototype.xPos = function() {
    return Window_TacticsLastUsedCommand.X_POS;
};
Window_TacticsLastUsedCommand.prototype.yPos = function() {
    return Window_TacticsLastUsedCommand.Y_POS;
};
Window_TacticsLastUsedCommand.prototype.textMaxWidth = function() {
    return Window_TacticsLastUsedCommand.TEXT_MAX_WIDTH;
};
Window_TacticsLastUsedCommand.prototype.extendedWidth = function() {
    return Window_TacticsLastUsedCommand.EXTENDED_WIDTH;
};
Window_TacticsLastUsedCommand.prototype.imageCacheRid = function() {
    return Window_TacticsLastUsedCommand.IMAGE_CACHE_RID;
};
