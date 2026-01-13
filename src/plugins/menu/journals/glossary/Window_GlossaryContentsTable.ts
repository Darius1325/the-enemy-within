// $PluginCompiler TEW_Menus.js

import { Glossary } from "../../../_types/glossary";
import TEW from "../../../_types/tew";

// $StartCompilation

function Window_GlossaryContentsTable() {
    this.initialize.apply(this, arguments);
}

export default Window_GlossaryContentsTable.prototype = Object.create(Window_Selectable.prototype);
Window_GlossaryContentsTable.prototype.constructor = Window_GlossaryContentsTable;

Window_GlossaryContentsTable.prototype.initialize = function(entries: Glossary[]) {
    const dimensions = TEW.MENU.JOURNALS_CONTENT_AREA;
    this._entries = entries;
    Window_Selectable.prototype.initialize.call(this,
        dimensions.x,
        dimensions.y,
        dimensions.w,
        dimensions.h
    );
};

Window_GlossaryContentsTable.prototype.refresh = function() {
    this.contents.clear();
    if (this._entries) {
        this.drawAllItems();
    }
};

Window_GlossaryContentsTable.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = normalizedIndex % 2 === 0 ? 0 : 620;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const entry: Glossary = this._entries[index];
    this.drawText(entry.title, x, y, TEW.MENU.JOURNALS_PAGE_CONTENT_AREA.w, 'left');
};

Window_GlossaryContentsTable.prototype.maxCols = () => 2;

Window_GlossaryContentsTable.prototype.maxItems = function() {
    return this._entries.length;
};

Window_GlossaryContentsTable.prototype.itemRect = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = normalizedIndex % 2 === 0 ? 0 : 620;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    return new Rectangle(x, y, 510, TEW.MENU.LINE_HEIGHT);
};
