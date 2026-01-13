// $PluginCompiler TEW_Menus.js

// $StartCompilation

function Window_GlossaryEntry() {
    this.initialize.apply(this, arguments);
}

export default Window_GlossaryEntry.prototype = Object.create(Window_Base.prototype);
Window_GlossaryEntry.prototype.constructor = Window_GlossaryEntry;

Window_GlossaryEntry.prototype.initialize = function() {
    const dimensions = TEW.MENU.JOURNALS_CONTENT_AREA;
    Window_Base.prototype.initialize.call(this,
        dimensions.x,
        dimensions.y,
        dimensions.w,
        dimensions.h
    );

    this._title = undefined;
    this._paragraphs = undefined;
};

Window_GlossaryEntry.prototype.refresh = function() {
    this.contents.clear();
    if (this._title && this._paragraphs) {
        this.drawDetails();
    }
};

// TODO split on two pages
Window_GlossaryEntry.prototype.drawDetails = function() {
    // Title
    this.drawUnderlinedText(this._title, 0, 0, this.contentsWidth(), "center");

    // Paragraphs
    const text = this._paragraphs.map((p: { content: string }) => p.content).join('\\n \\n ');
    this.drawWrappedTextManually(text, 0, 80, this.contentsHeight());
};

Window_GlossaryEntry.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.active && Input.isRepeated('cancel') && this._cancelHandler) {
        this._cancelHandler();
    }
};
