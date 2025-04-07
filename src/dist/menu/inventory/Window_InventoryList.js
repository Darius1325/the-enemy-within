// $PluginCompiler TEW_Menus.js 10
// $StartCompilation
//-----------------------------------------------------------------------------
// Window_InventoryList
//
// Super object to manage all inventory list windows
function Window_InventoryList() {
    this.initialize.apply(this, arguments);
}
Window_InventoryList.prototype = Object.create(Window_Selectable.prototype);
Window_InventoryList.prototype.constructor = Window_InventoryList;
// Inializing the window
Window_InventoryList.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, INVENTORY_WINDOW_TOPBAR_HEIGHT, Graphics.boxWidth / 2, Graphics.boxHeight - INVENTORY_WINDOW_TOPBAR_HEIGHT);
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
Window_InventoryList.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
// Refreshing the window
Window_InventoryList.prototype.refresh = function () {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};
// Number of items
Window_InventoryList.prototype.maxItems = function () {
    return this._maxItems;
};
// Number of columns
Window_InventoryList.prototype.maxCols = () => 1;
