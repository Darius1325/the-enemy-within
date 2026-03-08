// $PluginCompiler TEW_Menus.js

import { Bitmap } from "../../../../rmmv/core/Bitmap";
import { JournalDocument } from "../../../_types/journalDocument";
import Window_JournalEntry, { FormattedPage } from "../Window_JournalEntry";

// $StartCompilation

function Window_Document() {
    this.initialize.apply(this, arguments);
};

export default Window_Document.prototype = Object.create(Window_JournalEntry.prototype);
Window_Document.prototype.constructor = Window_Document;

Window_Document.prototype.initialize = function() {
    Window_JournalEntry.prototype.initialize.call(this);
    this._pageIndex = 0;
};

Window_Document.prototype.reset = function(entry: JournalDocument) {
    this._id = entry.id;
    this._title = entry.title;
    this._image = entry.image;
    this._paragraphs = entry.paragraphs;
    this._formattedContent = undefined;
};

Window_Document.prototype.drawDetails = function() {
    // Title
    if (this._pageIndex === 0) {
        this.drawUnderlinedText(this._title, 0, 0, 510, "center");
    }

    // Format content or read from memory
    if (!this._formattedContent) {
        const text = this._paragraphs.map((p: { content: string }) => p.content).join('\\n \\n ');
        this._formattedContent = this.cutTextIntoPages(text, 80, 0, 590, 510); // TODO constants ?
    }

    const page: FormattedPage = this._formattedContent[this._pageIndex];
    for (let line of page.lines) {
        this.drawText(line.text, 0, line.y, 510, 'left');
    }
    
    this.reserveImage(this._image);
    const readyCheck = resolve => {
        if (ImageManager.isReady()) resolve();
        else setTimeout(() => readyCheck(resolve), 100);
    };

    new Promise(readyCheck).then(() => {
        const bitmap: Bitmap = this.loadImage(this._image);
        this.contents.blt(
            bitmap,
            0, 0,
            bitmap.rect.width, bitmap.rect.height,
            590, 0
        );
        this._drawn = true;
    });
};

Window_Document.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.active) {
        if (Input.isRepeated('cancel') && this._cancelHandler) {
            SoundManager.playCancel();
            this._cancelHandler();
            Input.update();
        } else if (Input.isRepeated('right') && this._formattedContent.length > this._pageIndex + 1) {
            this._pageIndex++;
            this.refresh();
            Input.update();
        } else if (Input.isRepeated('left') && this._pageIndex >= 1) {
            this._pageIndex--;
            this.refresh();
            Input.update();
        }
    }
};

Window_Document.prototype.reserveImage = function(image: string) {
    return ImageManager.reserveImage('documents', image, image);
};

Window_Document.prototype.loadImage = function(image: string) {
    return ImageManager.reserveImage('documents', image);
};
