// $PluginCompiler TEW_Menus.js

import TEW from "../../_types/tew";

// $StartCompilation

function Window_JournalContentsTable() {
    this.initialize.apply(this, arguments);
}

export default Window_JournalContentsTable.prototype = Object.create(Window_Selectable.prototype);
Window_JournalContentsTable.prototype.constructor = Window_JournalContentsTable;

Window_JournalContentsTable.prototype.initialize = function(entries) {
    const dimensions = TEW.MENU.JOURNALS_CONTENT_AREA;
    this._entries = entries;
    Window_Selectable.prototype.initialize.call(this,
        dimensions.x,
        dimensions.y,
        dimensions.w,
        dimensions.h
    );
};

Window_JournalContentsTable.prototype.refresh = function() {
    this.contents.clear();
    if (this._entries) {
        this.drawAllItems();
    }
};

Window_JournalContentsTable.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = normalizedIndex % 2 === 0 ? 0 : 620;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const entry = this._entries[index];
    this.drawText(entry.title, x, y, TEW.MENU.JOURNALS_PAGE_CONTENT_AREA.w, 'left');
};

Window_JournalContentsTable.prototype.maxCols = () => 2;

Window_JournalContentsTable.prototype.maxItems = function() {
    return this._entries.length;
};

Window_JournalContentsTable.prototype.itemRect = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = normalizedIndex % 2 === 0 ? 0 : 620;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    return new Rectangle(x, y, 510, TEW.MENU.LINE_HEIGHT);
};
