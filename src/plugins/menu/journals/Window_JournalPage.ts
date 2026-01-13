// $PluginCompiler TEW_Menus.js 10

import TEW from "../../_types/tew";

// $StartCompilation

function Window_JournalPage() {
    this.initialize.apply(this, arguments);
}

export default Window_JournalPage.prototype = Object.create(Window_Selectable.prototype);
Window_JournalPage.prototype.constructor = Window_JournalPage;

Window_JournalPage.prototype.initialize = function(isLeftPage = true) {
    const dimensions = TEW.MENU.JOURNALS_PAGE_CONTENT_AREA;
    Window_Selectable.prototype.initialize.call(this,
        isLeftPage ? TEW.MENU.JOURNALS_LEFT_PAGE_X_OFFSET : TEW.MENU.JOURNALS_RIGHT_PAGE_X_OFFSET,
        dimensions.y,
        dimensions.w,
        dimensions.h
    );
};

Window_JournalPage.prototype.maxItems = function() {
    return this._items.length;
};
