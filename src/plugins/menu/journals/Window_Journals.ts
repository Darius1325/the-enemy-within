// $PluginCompiler TEW_Menus.js

// $StartCompilation

function Window_Journals() {
    this.initialize.apply(this, arguments);
}

Window_Journals.COMMAND_INDEX_OFFSET = 92;
Window_Journals.SELECTION_COLOR = "#fedc22ff";

export default Window_Journals.prototype = Object.create(Window_Selectable.prototype);
Window_Journals.prototype.constructor = Window_Journals;

// Initializing the command window
Window_Journals.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);
    this._commandList = [
        "journal_quest_log",
        "journal_documents",
        "journal_characters",
        "journal_glossary",
        "journal_tutorials"
    ];
    this._drawParameters = [{
        x: 400,
        y: 70,
        rect: {
            x: 180,
            y: 70,
            w: 1012,
            h: 136
        },
        fontSize: 80,
        color: "#f0f0f0"
    }, {
        x: 678,
        y: 190,
        rect: {
            x: 200,
            y: 207,
            w: 924,
            h: 62
        },
        fontSize: 52,
        color: "#f0f0f0"
    }, {
        x: 570,
        y: 260,
        rect: {
            x: 276,
            y: 270,
            w: 820,
            h: 75
        },
        fontSize: 44,
        color: "#101010"
    }, {
        x: 455,
        y: 360,
        rect: {
            x: 110,
            y: 346,
            w: 1095,
            h: 163
        },
        fontSize: 92,
        color: "#f0f0f0"
    }, {
        x: 540,
        y: 525,
        rect: {
            x: 156,
            y: 510,
            w: 1073,
            h: 126
        },
        fontSize: 80,
        color: "#f0f0e1"
    }];
    this.refresh();
    this._maxItems = 5;
};

Window_Journals.prototype.drawAllItems = function() {
    this.drawItem(0);
    this.drawItem(1);
    this.drawItem(2);
    this.drawItem(3);
    this.drawItem(4);
};

Window_Journals.prototype.drawItem = function(index: number) {
    const params = this._drawParameters[index];
    this.changeTextColor(this.index() === index ? Window_Journals.SELECTION_COLOR : params.color);
    this.contents.fontSize = params.fontSize;
    this.drawText(TextManager.command(index + Window_Journals.COMMAND_INDEX_OFFSET), params.x, params.y, 500, 'left');
    this.contents.fontSize = this.standardFontSize();
    this.changeTextColor(this.normalColor());
};

Window_Journals.prototype.itemRect = function(index: number) {
    const r = this._drawParameters[index].rect;
    return new Rectangle(r.x, r.y, r.w, r.h);
};

Window_Journals.prototype.hitTest = function(x, y) {
    const params = this._drawParameters;
    for (let i = 0; i < 5; i++) {
        const rect = params[i].rect;
        const right = rect.x + rect.w;
        const bottom = rect.y + rect.h;
        if (x >= rect.x && y >= rect.y && x < right && y < bottom) {
            return i;
        }
    }
    return -1;
};

Window_Journals.prototype.itemRectForText = function(index: number) {
    return this.itemRect(index);
};

Window_Journals.prototype.items = function() {
    return this._commandList;
}

Window_Journals.prototype.item = function() {
    return this._commandList[this.index()];
}

Window_Journals.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

Window_Journals.prototype.standardFontFace = function() {
    return 'handwritten';
};

Window_Journals.prototype.select = function(index: number) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
    }
};

Window_Journals.prototype.updateCursor = function() {
    this.setCursorRect(0, 0, 0, 0);
};

// TODO superclass without extra features
Window_Journals.prototype.maxItems = function() {
    return this._maxItems;
};

Window_Journals.prototype.cursorDown = function() {
    var index = this.index();
    index++;
    if (index > 4) {
        index = 0;
    }
    this.select(index);
};

Window_Journals.prototype.cursorUp = function() {
    var index = this.index();
    index--;
    if (index < 0) {
        index = 4;
    }
    this.select(index);
};

Window_Journals.prototype.cursorRight = () => {};

Window_Journals.prototype.cursorLeft = () => {};

Window_Journals.prototype.cursorPagedown = function() {
    this.select(4);
};

Window_Journals.prototype.cursorPageup = function() {
    this.select(0);
};

Window_Journals.prototype.scrollDown = () => {};

Window_Journals.prototype.scrollUp = () => {};

Window_Journals.prototype.isCursorVisible = () => true;

Window_Journals.prototype.ensureCursorVisible = () => {};

Window_Journals.prototype.topRow = () => 0;

Window_Journals.prototype.maxTopRow = () => 0;

Window_Journals.prototype.setTopRow = () => {};

Window_Journals.prototype.maxCols = () => 1;

Window_Journals.prototype.maxPageRows = () => 5;

Window_Journals.prototype.maxPageItems = () => 5;

Window_Journals.prototype.isHorizontal = () => false;

Window_Journals.prototype.bottomRow = () => 4;

Window_Journals.prototype.setBottomRow = () => {};
