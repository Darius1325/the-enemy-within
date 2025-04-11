// $PluginCompiler TEW_Menus.js

import TEW from "../../types/tew";

// $StartCompilation

// -----------------------------------------------------------------------------
// Window_Status (override)
//
// Character info, stats, competences (skills), talents and spells window

Window_Status.BASE_COMPETENCE_LINE_COUNT = Math.ceil(TEW.DATABASE.COMPS.BASE_ARRAY.length / 2);
Window_Status.BASE_COMPETENCE_WINDOW_HEIGHT = (Window_Status.BASE_COMPETENCE_LINE_COUNT + 1) * TEW.MENU.MENU_LINE_HEIGHT;

Window_Status.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0, TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth, Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT);
    this._actor = null;
    this._maxItems = 0;
    this.activate();
    this.refresh();
};

Window_Status.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

Window_Status.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};

Window_Status.prototype.maxItems = function() {
    return this._maxItems;
};
