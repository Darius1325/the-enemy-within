// $PluginCompiler TEW_Menus.js

import TEW from "../../../_types/tew";

// $StartCompilation

function Window_QuestDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_QuestDetails.prototype = Object.create(Window_Base.prototype);
Window_QuestDetails.prototype.constructor = Window_QuestDetails;

Window_QuestDetails.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this);

    const dimensions = TEW.MENU.JOURNALS_CONTENT_AREA;
    Window_Selectable.prototype.initialize.call(this,
        TEW.MENU.JOURNALS_RIGHT_PAGE_X_OFFSET,
        dimensions.y,
        dimensions.w,
        dimensions.h
    );

    this._title = undefined;
    this._paragraphs = undefined;
};

Window_QuestDetails.prototype.refresh = function() {
    this.contents.clear();
    if (this._title && this._paragraphs) {
        this.drawDetails();
    }
};

Window_QuestDetails.prototype.drawDetails = function() {
    // Title
    this.drawUnderlinedText(this._title, 0, 0, this.contentsWidth(), "center");

    // // Paragraphs
    // let startY = 80;
    // this._paragraphs?.forEach(paragraph => {
    //     this.drawWrappedTextManually(
    //         paragraph.content,
    //         0, 
    //         startY,

    //     )
    // });
};
