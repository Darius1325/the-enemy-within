// $PluginCompiler TEW_Menus.js 10

import TEW from "../../types/tew";

// $StartCompilation

//-----------------------------------------------------------------------------
// HalfWindow_List
//
// Super object to manage all inventory list windows

function HalfWindow_List() {
    this.initialize.apply(this, arguments);
}

export default HalfWindow_List.prototype = Object.create(Window_Selectable.prototype);
HalfWindow_List.prototype.constructor = HalfWindow_List;

// Inializing the window
HalfWindow_List.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0,
        TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT);
    this._actor = null;
    this._maxItems = 0;
    this._leftPadding = 10;
    this._rightColumnWidth = 20;
    this._rightColumnPosition = Graphics.boxWidth / 2 - this._rightColumnWidth * 4;
    this._iconPadding = 5;
    this.activate();
    this.refresh();
};

// Setting the actor
HalfWindow_List.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

// Refreshing the window
HalfWindow_List.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};

// Number of items
HalfWindow_List.prototype.maxItems = function() {
    return this._maxItems;
};

// Number of columns
HalfWindow_List.prototype.maxCols = () => 1;
