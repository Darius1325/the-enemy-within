// $PluginCompiler TEW_Combat.js

import Window_TacticsCommandBase from "../Window_TacticsCommandBase";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsActionCommand
//
// The window for selecting an actor's action on the tactics screen.

function Window_TacticsActionCommand() {
    this.initialize.apply(this, arguments);
}

Window_TacticsActionCommand.IMAGE_CACHE_RID = 'battleActionCommand';
Window_TacticsActionCommand.X_POS = 458;
Window_TacticsActionCommand.Y_POS = 467;
Window_TacticsActionCommand.EXTENDED_WIDTH = 220;
Window_TacticsActionCommand.TEXT_MAX_WIDTH = 150;

export default Window_TacticsActionCommand.prototype = Object.create(Window_TacticsCommandBase.prototype);
Window_TacticsActionCommand.prototype.constructor = Window_TacticsActionCommand;

Window_TacticsActionCommand.prototype.initialize = function() {
    Window_TacticsCommandBase.prototype.initialize.call(this);

    this._iconOrder = ['icon_battleCommand_attack', 'icon_battleCommand_spell', 'icon_battleCommand_channelling'];

    this.loadIcons();
};

Window_TacticsActionCommand.prototype.loadIcons = function() {
    ImageManager.reserveSystem('icon_battleCommand_attack', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_spell', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_channelling', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_attack_selected', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_spell_selected', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_channelling_selected', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    const readyCheck = resolve => {
        if (ImageManager.isReady()) resolve();
        else setTimeout(() => readyCheck(resolve), 100);
    };
    new Promise(readyCheck).then(() => {
        this._imagesReady = true;
        this.refresh();
    });
};

Window_TacticsActionCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addCommand(TEW.COMBAT.SYSTEM.actionAttack, TEW.COMBAT.SYSTEM.actionAttack, BattleManager.canAct());
        this.addCommand(TEW.COMBAT.SYSTEM.actionSpell, TEW.COMBAT.SYSTEM.actionSpell, BattleManager.canAct());
        this.addCommand(TEW.COMBAT.SYSTEM.actionChannelling, TEW.COMBAT.SYSTEM.actionChannelling, BattleManager.canAct());
    }
};

Window_TacticsActionCommand.prototype.select = function(index: number) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
        BattleManager.refreshMoveTiles();
    }
};

Window_TacticsActionCommand.prototype.xPos = function() {
    return Window_TacticsActionCommand.X_POS;
};
Window_TacticsActionCommand.prototype.yPos = function() {
    return Window_TacticsActionCommand.Y_POS;
};
Window_TacticsActionCommand.prototype.textMaxWidth = function() {
    return Window_TacticsActionCommand.TEXT_MAX_WIDTH;
};
Window_TacticsActionCommand.prototype.extendedWidth = function() {
    return Window_TacticsActionCommand.EXTENDED_WIDTH;
};
Window_TacticsActionCommand.prototype.imageCacheRid = function() {
    return Window_TacticsActionCommand.IMAGE_CACHE_RID;
};
