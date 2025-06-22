// $PluginCompiler TEW_Menus.js 101

import { Sprite_Button } from '../../../rmmv/sprites/Sprite_Button';

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryTransferSpinner
//
// Spinner to choose how many items to transfer

function Window_InventoryTransferSpinner() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryTransferSpinner.prototype = Object.create(Window_Selectable.prototype);
Window_InventoryTransferSpinner.prototype.constructor = Window_InventoryTransferSpinner;

// Initializing the command window
Window_InventoryTransferSpinner.prototype.initialize = function() {
    this._windowWidth = Graphics.boxWidth / 4;
    this._windowHeight = this.fittingHeight(3);
    this.type = 'item';
    this._number = 1;
    Window_Command.prototype.initialize.call(
        this,
        this._windowWidth * 3,
        Graphics.boxHeight - this._windowHeight);
};

Window_InventoryTransferSpinner.prototype.createButtons = function() {
    var bitmap = ImageManager.loadSystem('ButtonSet');
    var buttonWidth = 48;
    var buttonHeight = 48;
    this._buttons = [];
    for (var i = 0; i < 5; i++) {
        var button = new Sprite_Button();
        var x = buttonWidth * i;
        var w = buttonWidth * (i === 4 ? 2 : 1);
        button.bitmap = bitmap;
        button.setColdFrame(x, 0, w, buttonHeight);
        button.setHotFrame(x, buttonHeight, w, buttonHeight);
        button.visible = false;
        this._buttons.push(button);
        this.addChild(button);
    }
    this._buttons[0].setClickHandler(this.onButtonDown2.bind(this));
    this._buttons[1].setClickHandler(this.onButtonDown.bind(this));
    this._buttons[2].setClickHandler(this.onButtonUp.bind(this));
    this._buttons[3].setClickHandler(this.onButtonUp2.bind(this));
    this._buttons[4].setClickHandler(this.onButtonOk.bind(this));
};

Window_InventoryTransferSpinner.prototype.placeButtons = function() {
    var numButtons = this._buttons.length;
    var spacing = 16;
    var totalWidth = -spacing;
    for (var i = 0; i < numButtons; i++) {
        totalWidth += this._buttons[i].width + spacing;
    }
    var x = (this.width - totalWidth) / 2;
    for (var j = 0; j < numButtons; j++) {
        var button = this._buttons[j];
        button.x = x;
        button.y = this.buttonY();
        x += button.width + spacing;
    }
};

Window_InventoryTransferSpinner.prototype.drawMultiplicationSign = function() {
    var sign = '\u00d7';
    var width = this.textWidth(sign);
    var x = this.cursorX() - width * 2;
    var y = this.itemY();
    this.resetTextColor();
    this.drawText(sign, x, y, width);
};

Window_InventoryTransferSpinner.prototype.drawNumber = function() {
    var x = this.cursorX();
    var y = this.itemY();
    var width = this.cursorWidth() - this.textPadding();
    this.resetTextColor();
    this.drawText(this._number, x, y, width, 'right');
};

Window_InventoryTransferSpinner.prototype.itemY = function() {
    return Math.round(this.contentsHeight() / 2 - this.lineHeight() * 1.5);
};

Window_InventoryTransferSpinner.prototype.buttonY = function() {
    return Math.round(this.lineHeight() * 2.5);
};

Window_InventoryTransferSpinner.prototype.cursorWidth = function() {
    var digitWidth = this.textWidth('0');
    return this.maxDigits() * digitWidth + this.textPadding() * 2;
};

Window_InventoryTransferSpinner.prototype.cursorX = function() {
    return this.contentsWidth() - this.cursorWidth() - this.textPadding();
};

Window_InventoryTransferSpinner.prototype.maxDigits = function() {
    return 2;
};

Window_InventoryTransferSpinner.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    this.processNumberChange();
};

Window_InventoryTransferSpinner.prototype.isOkTriggered = function() {
    return Input.isTriggered('ok');
};

Window_InventoryTransferSpinner.prototype.playOkSound = function() {
};

Window_InventoryTransferSpinner.prototype.processNumberChange = function() {
    if (this.isOpenAndActive()) {
        if (Input.isRepeated('right')) {
            this.changeNumber(1);
        }
        if (Input.isRepeated('left')) {
            this.changeNumber(-1);
        }
        if (Input.isRepeated('up')) {
            this.changeNumber(10);
        }
        if (Input.isRepeated('down')) {
            this.changeNumber(-10);
        }
    }
};

Window_InventoryTransferSpinner.prototype.changeNumber = function(amount) {
    var lastNumber = this._number;
    this._number = (this._number + amount).clamp(1, this._max);
    if (this._number !== lastNumber) {
        SoundManager.playCursor();
        this.refresh();
    }
};

Window_InventoryTransferSpinner.prototype.updateCursor = function() {
    this.setCursorRect(this.cursorX(), this.itemY(),
                       this.cursorWidth(), this.lineHeight());
};

Window_InventoryTransferSpinner.prototype.onButtonUp = function() {
    this.changeNumber(1);
};

Window_InventoryTransferSpinner.prototype.onButtonUp2 = function() {
    this.changeNumber(10);
};

Window_InventoryTransferSpinner.prototype.onButtonDown = function() {
    this.changeNumber(-1);
};

Window_InventoryTransferSpinner.prototype.onButtonDown2 = function() {
    this.changeNumber(-10);
};

Window_InventoryTransferSpinner.prototype.onButtonOk = function() {
    this.processOk();
};
