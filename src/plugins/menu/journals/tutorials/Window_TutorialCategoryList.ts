// $PluginCompiler TEW_Menus.js

import TEW from "../../../_types/tew";
import Window_JournalPage from "../Window_JournalPage";

// $StartCompilation

function Window_TutorialCategoryList() {
    this.initialize.apply(this, arguments);
}

export default Window_TutorialCategoryList.prototype = Object.create(Window_JournalPage.prototype);
Window_TutorialCategoryList.prototype.constructor = Window_TutorialCategoryList;

Window_TutorialCategoryList.prototype.initialize = function() {
    Window_JournalPage.prototype.initialize.call(this, true);
    this.refresh();
};

Window_TutorialCategoryList.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    this.drawText(TEW.DATABASE.TUTORIALS[index].category, 0, y, this._width, 'left');
};

// Selecting an item
Window_TutorialCategoryList.prototype.select = function(index: number) {
    if (this._index !== index) {
        this._index = index;
        if (this._index >= 0) {
            this.callHandler("show_category_tutorials");
        }
        this._stayCount = 0;
        this.ensureCursorVisible();
        this.updateCursor();
    }
};

Window_TutorialCategoryList.prototype.maxItems = () => TEW.DATABASE.TUTORIALS.length;

Window_TutorialCategoryList.prototype.isOkEnabled = () => true;

// handling process OK
Window_TutorialCategoryList.prototype.processOk = function() {
    this.playOkSound(); // TODO other sound ?
    this.updateInputData();
    this.callHandler("select_category");
};
