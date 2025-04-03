// $PluginCompiler TEW_Menus.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_Selectable (override)
//
// Overriding Window_Selectable because we know how to code, and you don't :)

Window_Selectable.prototype.setTopRow = function(row) {
    var scrollY = row.clamp(0, this.maxTopRow()) * this.itemHeight();
    // I curse the entire families of every RPG Maker MV developer. Fuck you.
    if (!isNaN(scrollY) && this._scrollY !== scrollY) {
        this._scrollY = scrollY;
        this.refresh();
        this.updateCursor();
    }
};
