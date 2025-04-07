// $PluginCompiler TEW_Menus.js
// $StartCompilation
//-----------------------------------------------------------------------------
// Window_InventoryHelp
//
// The help window for inventory pages
function Window_InventoryHelp() {
    this.initialize.apply(this, arguments);
}
Window_InventoryHelp.prototype = Object.create(Window_Help.prototype);
Window_InventoryHelp.prototype.constructor = Window_InventoryHelp;
// Initializing the help window
Window_InventoryHelp.prototype.initialize = function (numLines = 2) {
    Window_Help.prototype.initialize.call(this, numLines);
    const yStartPos = Graphics.height - (numLines + 1) * this.lineHeight();
    this.move(0, yStartPos, Graphics.width, Graphics.height - yStartPos);
    this._textArray = [];
    this._iconsArray = [];
};
Window_InventoryHelp.prototype.reshape = function (numLines = 2) {
    // this.height = this.fittingHeight(numLines);
    const yStartPos = Graphics.height - (numLines + 1) * this.lineHeight();
    this.move(0, yStartPos, Graphics.width, Graphics.height - yStartPos);
    this.contents.resize(Graphics.width, this.fittingHeight(numLines));
};
Window_InventoryHelp.prototype.clear = function () {
    this.contents.clear();
    this._textArray = [];
    this._iconsArray = [];
};
Window_InventoryHelp.prototype.addText = function (text, x, y) {
    this._textArray.push({
        desc: text,
        x: x,
        y: y
    });
};
Window_InventoryHelp.prototype.addIcon = function (iconId, x, y) {
    this._iconsArray.push({
        id: iconId,
        x: x,
        y: y
    });
};
Window_InventoryHelp.prototype.refresh = function () {
    this.contents.clear();
    // Drawing the text
    this._textArray.forEach(text => {
        this.drawText(text.desc, text.x, text.y, Graphics.width, text.align || 'left');
    });
    // Drawing the icons
    this._iconsArray.forEach(icon => {
        this.drawIcon(icon.id, icon.x, icon.y);
    });
};
