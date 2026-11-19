// $PluginCompiler TEW_Combat.js

import Window_TacticsCommandBase from "../Window_TacticsCommandBase";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsMomentumCommand
//
// The window for selecting a free action paid with momentum on the tactics screen.

function Window_TacticsMomentumCommand() {
    this.initialize.apply(this, arguments);
}

Window_TacticsMomentumCommand.IMAGE_CACHE_RID = 'battleMomentumCommand';
Window_TacticsMomentumCommand.X_POS = 458;
Window_TacticsMomentumCommand.Y_POS = 467;
Window_TacticsMomentumCommand.EXTENDED_WIDTH = 220;
Window_TacticsMomentumCommand.TEXT_MAX_WIDTH = 150;
// TODO dedicated momentum icons: existing icons are used as placeholders
Window_TacticsMomentumCommand.ICONS = ['icon_battleCommand_action', 'icon_battleCommand_move', 'icon_battleCommand_attack'];

export default Window_TacticsMomentumCommand.prototype = Object.create(Window_TacticsCommandBase.prototype);
Window_TacticsMomentumCommand.prototype.constructor = Window_TacticsMomentumCommand;

Window_TacticsMomentumCommand.prototype.initialize = function() {
    Window_TacticsCommandBase.prototype.initialize.call(this);

    this._iconOrder = Window_TacticsMomentumCommand.ICONS;

    this.loadIcons();
};

Window_TacticsMomentumCommand.prototype.loadIcons = function() {
    Window_TacticsMomentumCommand.ICONS.forEach((icon: string) => {
        ImageManager.reserveSystem(icon, 0, Window_TacticsMomentumCommand.IMAGE_CACHE_RID);
        ImageManager.reserveSystem(icon + '_selected', 0, Window_TacticsMomentumCommand.IMAGE_CACHE_RID);
    });
    const readyCheck = resolve => {
        if (ImageManager.isReady()) {
            resolve();
        } else {
            setTimeout(() => readyCheck(resolve), 100);
        }
    };
    new Promise(readyCheck).then(() => {
        this._imagesReady = true;
        this.refresh();
    });
};

Window_TacticsMomentumCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addCommand(TEW.COMBAT.SYSTEM.momentumTransfer, TEW.COMBAT.SYSTEM.momentumTransfer, BattleManager.canTransferMomentum());
        this.addCommand(TEW.COMBAT.SYSTEM.momentumDisengage, TEW.COMBAT.SYSTEM.momentumDisengage, BattleManager.canDisengageWithMomentum());
        this.addCommand(TEW.COMBAT.SYSTEM.momentumOffHandAttack, TEW.COMBAT.SYSTEM.momentumOffHandAttack, BattleManager.canMomentumAttack());
    }
};

Window_TacticsMomentumCommand.prototype.xPos = function() {
    return Window_TacticsMomentumCommand.X_POS;
};
Window_TacticsMomentumCommand.prototype.yPos = function() {
    return Window_TacticsMomentumCommand.Y_POS;
};
Window_TacticsMomentumCommand.prototype.textMaxWidth = function() {
    return Window_TacticsMomentumCommand.TEXT_MAX_WIDTH;
};
Window_TacticsMomentumCommand.prototype.extendedWidth = function() {
    return Window_TacticsMomentumCommand.EXTENDED_WIDTH;
};
Window_TacticsMomentumCommand.prototype.imageCacheRid = function() {
    return Window_TacticsMomentumCommand.IMAGE_CACHE_RID;
};
