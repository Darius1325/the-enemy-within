// $PluginCompiler TEW_Menus.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryItems
//
// General item list window

function Window_InventoryItems() {
    this.initialize.apply(this, arguments);
}

Window_InventoryItems.prototype = Object.create(Window_InventoryList.prototype);
Window_InventoryItems.prototype.constructor = Window_InventoryItems;

Window_InventoryItems.prototype.initialize = function() {
    Window_InventoryList.prototype.initialize.call(this);
};

Window_InventoryItems.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._items = TEW.ITEMS_ARRAY.filter(item => actor.hasItem(item[0])); // [<internal name>, {<item data>}]
        this._maxItems = this._items.length;
        this.refresh();
    }
};

// Drawing all the items
Window_InventoryItems.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

// Drawing one item
Window_InventoryItems.prototype.drawItem = function(index) {
    const normalizedIndex = index - this.topIndex();
    const x = this._leftPadding; // padding
    const y = normalizedIndex  * TEW.MENU_LINE_HEIGHT;

    const item = this.itemFromIndex(index);
    this.changeTextColor(this.systemColor());
    this.drawIcon(item[1].groupIcon, x, y)
    this.drawText(item[1].name, x + 32 + this._iconPadding, y, this._rightColumnPosition);
    this.resetTextColor();
    this.drawText(this._actor.item(item[0]), this._rightColumnPosition, y, this._rightColumnWidth, 'right');
};

// Getting an item from its index
Window_InventoryItems.prototype.itemFromIndex = function(index) {
    return this._items[index];
};

// Selecting an item
Window_InventoryItems.prototype.select = function(index) {
    if (this._index !== index) {
        this.hideHelpWindow();
    }
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_item_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

// handling process OK
Window_InventoryItems.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};
