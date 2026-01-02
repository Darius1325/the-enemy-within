// $PluginCompiler TEW_Menus.js

var Rectangle: any;
var Window_Selectable: any;

// $StartCompilation
//-----------------------------------------------------------------------------
// Window_Selectable (override)
//
// Overriding Window_Selectable because we know how to code, and you don't :)

Window_Selectable.prototype.setTopRow = function(row: number) {
    var scrollY = row.clamp(0, this.maxTopRow()) * this.itemHeight();
    // I curse the entire families of every RPG Maker MV developer. Fuck you.
    if (!isNaN(scrollY) && this._scrollY !== scrollY) {
        this._scrollY = scrollY;
        this.refresh();
        this.updateCursor();
    }
};

// TODO rewrite all this.padding uses OR set padding to 30
Window_Selectable.prototype.itemRect = function(index: number) {
    const maxCols = this.maxCols();
    const width = this.itemWidth();
    const height = this.itemHeight();
    const rect = new Rectangle(
        index % maxCols * (width + this.spacing()) - this._scrollX,
        Math.floor(index / maxCols) * height - this._scrollY,
        width,
        height
    );
    return rect;
};

Window_Selectable.prototype.itemWidth = function() {
    return Math.floor((this.width - this.horizontalBorderPadding() * 2
                + this.spacing()) / this.maxCols() - this.spacing());
};

Window_Selectable.prototype.maxPageRows = function() {
    var pageHeight = this.height - this.verticalBorderPadding() * 2;
    return Math.floor(pageHeight / this.itemHeight());
};
