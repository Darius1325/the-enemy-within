// $PluginCompiler TEW_Menus.js

import TEW from "../../../_types/tew";
import Window_JournalPage from "../Window_JournalPage";

// $StartCompilation

function Window_TutorialList() {
    this.initialize.apply(this, arguments);
}

export default Window_TutorialList.prototype = Object.create(Window_JournalPage.prototype);
Window_TutorialList.prototype.constructor = Window_TutorialList;

Window_TutorialList.prototype.initialize = function() {
    Window_JournalPage.prototype.initialize.call(this, false);
    this._items = [];
    this.refresh();
};

Window_TutorialList.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    this.drawText(this._items[index].title, 0, y, this._width, 'left');
};

Window_TutorialList.prototype.selectedEntry = function() {
    return this._items[this.index()];
};

Window_TutorialList.prototype.isOkEnabled = () => true;

// handling process OK
Window_TutorialList.prototype.processOk = function() {
    this.playOkSound(); // TODO other sound ?
    this.updateInputData();
    this.callHandler("show_tutorial_entry");
};
