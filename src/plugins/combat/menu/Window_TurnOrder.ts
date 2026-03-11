// $PluginCompiler TEW_Combat.js

import { Bitmap } from "../../../rmmv/core/Bitmap";

// $StartCompilation

function Window_TurnOrder() {
    this.initialize.apply(this, arguments);
}

Window_TurnOrder.SOURCE_DIR = 'sv_turn_order';
Window_TurnOrder.IMAGE_CACHE_RID = 'Window_TurnOrder_RID';

export default Window_TurnOrder.prototype = Object.create(Window_Base.prototype);
Window_TurnOrder.prototype.constructor = Window_TurnOrder;

Window_TurnOrder.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, 80); // TODO constant
    this._orderedImageNames = [];
    this._turnIndex = -1;
};

Window_TurnOrder.prototype.setTurnOrder = function() {
    if (BattleManager._turnOrder && BattleManager._turnOrder.length !== this._orderedImageNames.length) {
        this._orderedImageNames = BattleManager._turnOrder.map(battler => battler.turnOrderSpriteName);
        console.log("turn order registered sprites: ", this._orderedImageNames)
        for (let image of this._orderedImageNames) {
            this.reserveImage(image);
        }
    }
};

Window_TurnOrder.prototype.refresh = function() {
    this.contents.clear();
    this.setTurnOrder();

    if (this._orderedImageNames.length > 0) {
        const readyCheck = resolve => {
            if (ImageManager.isReady()) resolve();
            else setTimeout(() => readyCheck(resolve), 100);
        };
        new Promise(readyCheck).then(() => {
            for (let iterator = 0; iterator < 11; iterator++) {
                const index = (iterator + this._turnIndex) % this._orderedImageNames.length;
                const bitmap: Bitmap = this.loadImage(this._orderedImageNames[index]);

                // 100px sprites + 18px separators: 1280 = 11 * 100 + 10 * 18
                // Add an offset to center the sprite in a 100px slot
                const xOffset = iterator * 118 + Math.floor((100 - bitmap.rect.width) / 2);

                this.contents.blt(bitmap, 0, 0, bitmap.rect.width, bitmap.rect.height, xOffset, 0);
            }
        });
    }
};

Window_TurnOrder.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    const turnIndex = BattleManager.turnIndex();
    if (this._turnIndex !== turnIndex) {
        this._turnIndex = turnIndex;
        this.refresh();
    }
};

Window_TurnOrder.prototype.reserveImage = function(image: string) {
    return ImageManager.reserveImage(Window_TurnOrder.SOURCE_DIR, image, Window_TurnOrder.IMAGE_CACHE_RID);
};

Window_TurnOrder.prototype.loadImage = function(image: string) {
    return ImageManager.loadImage(Window_TurnOrder.SOURCE_DIR, image);
};

Window_TurnOrder.prototype.close = function() {
    ImageManager.releaseReservation(Window_TurnOrder.IMAGE_CACHE_RID);
    Window_Base.prototype.close.call(this);
};

Window_TurnOrder.prototype.horizontalBorderPadding = function() {
    return 0;
};

Window_TurnOrder.prototype.verticalBorderPadding = function() {
    return 0;
};