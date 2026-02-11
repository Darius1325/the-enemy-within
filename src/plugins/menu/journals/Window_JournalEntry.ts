// $PluginCompiler TEW_Menus.js 10

export type FormattedPage = {
    x: number;
    lines: {
        text: string;
        y: number;
    }[];
};

// $StartCompilation

function Window_JournalEntry() {
    this.initialize.apply(this, arguments);
}

export default Window_JournalEntry.prototype = Object.create(Window_Base.prototype);
Window_JournalEntry.prototype.constructor = Window_JournalEntry;

Window_JournalEntry.prototype.initialize = function() {
    const dimensions = TEW.MENU.JOURNALS_CONTENT_AREA;
    Window_Base.prototype.initialize.call(this,
        dimensions.x,
        dimensions.y,
        dimensions.w,
        dimensions.h
    );

    this._id = undefined;
    this._title = undefined;
    this._paragraphs = undefined;
    this._leftPageIndex = 0;
    this._formattedContent = undefined;
};

Window_JournalEntry.prototype.refresh = function() {
    this.contents.clear();
    if (this._title && this._paragraphs) {
        this.drawDetails();
    }
};

Window_JournalEntry.prototype.drawDetails = function() {
    // Title
    if (this._leftPageIndex === 0) {
        this.drawUnderlinedText(this._title, 0, 0, 510, "center");
    }

    // Format content or read from memory
    if (!this._formattedContent) {
        const text = this._paragraphs.map((p: { content: string }) => p.content).join('\\n \\n ');
        this._formattedContent = this.cutTextIntoPages(text, 80, 0, 590, 510); // TODO constants ?
    }

    const displayedPages: FormattedPage[] = [this._formattedContent[this._leftPageIndex]];
    if (this._formattedContent.length >= this._leftPageIndex + 2) {
        displayedPages.push(this._formattedContent[this._leftPageIndex + 1]);
    }
    for (let page of displayedPages) {
        for (let line of page.lines) {
            this.drawText(line.text, page.x, line.y, 510, 'left');
        }
    }
};

Window_JournalEntry.prototype.cutTextIntoPages = function(
    text: string,
    firstPageYOffset: number,
    firstPageXOffset: number,
    secondPageXOffset: number,
    width: number
) {
    const words = text.split(" ");
    const spaceWidth = this.textWidth(" ");
    const lineHeight = this.contents.fontSize * 1.2;
    const firstPageMaxLines = Math.floor((this.contentsHeight() - firstPageYOffset) / lineHeight);
    const subsequentPagesMaxLines = Math.floor(this.contentsHeight() / lineHeight);

    const pages: FormattedPage[] = [];

    let pageNumber = 1;
    let currentX = 0;
    let currentY = firstPageYOffset;
    let nbLines = 1;
    let newlineXOffset = 0;
    let currentLine = "";
    let currentPage: {
        x: number;
        lines: {
            text: string;
            y: number;
        }[];
    } = {
        x: firstPageXOffset,
        lines: [{
            text: "",
            y: firstPageYOffset
        }]
    };

    for (let word of words) {
        let startNewLine = false;
        if (word.includes('\\n')) {
            word.replace('\\n', '');
            startNewLine = true;
        }
        const wordWidth = this.textWidth(word);

        // If the word is too long, adding a new line
        if (currentX + wordWidth > width + newlineXOffset) {
            currentPage.lines.push({ text: currentLine, y: currentY });
            currentY += lineHeight;
            currentX = newlineXOffset;
            currentLine = "";
            nbLines++;
        }

        if (nbLines > (pageNumber === 1 ? firstPageMaxLines : subsequentPagesMaxLines)) {
            pages.push(JSON.parse(JSON.stringify(currentPage))); // deep clone
            pageNumber++;
            nbLines = 1;
            newlineXOffset = (pageNumber % 2 === 0) ? secondPageXOffset : firstPageXOffset;
            currentX = newlineXOffset;
            currentY = 0;
            currentLine = "";
            currentPage = {
                x: newlineXOffset,
                lines: [{
                    text: "",
                    y: 0
                }]
            };
        }

        currentLine += word + " ";
        currentX += wordWidth + spaceWidth;

        if (startNewLine) {
            currentPage.lines.push({ text: currentLine, y: currentY })
            currentY += lineHeight;
            currentX = newlineXOffset;
            currentLine = "";
            nbLines++;
        }
    }
    currentPage.lines.push({ text: currentLine, y: currentY });
    pages.push(currentPage);

    return pages;
};

Window_JournalEntry.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.active) {
        if (Input.isRepeated('cancel') && this._cancelHandler) {
            SoundManager.playCancel();
            this._cancelHandler();
            Input.update();
        } else if (Input.isRepeated('right') && this._formattedContent.length > this._leftPageIndex + 2) {
            this._leftPageIndex += 2;
            this.refresh();
            Input.update();
        } else if (Input.isRepeated('left') && this._leftPageIndex >= 2) {
            this._leftPageIndex -= 2;
            this.refresh();
            Input.update();
        }
    }
};
