// $PluginCompiler TEW_Menus.js

import { Bitmap } from "../../../../rmmv/core/Bitmap";
import { Tutorial } from "../../../_types/tutorial";
import Window_JournalEntry, { FormattedPage } from "../Window_JournalEntry";

// $StartCompilation

function Window_TutorialEntry() {
    this.initialize.apply(this, arguments);
};

export default Window_TutorialEntry.prototype = Object.create(Window_JournalEntry.prototype);
Window_TutorialEntry.prototype.constructor = Window_TutorialEntry;

Window_TutorialEntry.prototype.initialize = function() {
    Window_JournalEntry.prototype.initialize.call(this);
};

Window_TutorialEntry.prototype.reset = function(entry: Tutorial) {
    this._id = entry.id;
    this._title = entry.title;
    this._paragraphs = entry.paragraphs;
    this._formattedContent = undefined;
};

// TODO preload all images at once if laggy
Window_TutorialEntry.prototype.drawDetails = function() {
    // Title
    if (this._leftPageIndex === 0) {
        this.drawUnderlinedText(this._title, 0, 0, 510, "center");
    }

    // Pre-load all bitmaps
    const images = this._paragraphs
        .map((p: { image?: string }) => p.image)
        .filter((image?: string) => image !== undefined);
    for (let image of images) {
        ImageManager.reserveTutorial(image, image);
    }
    const readyCheck = resolve => {
        if (ImageManager.isReady()) resolve();
        else setTimeout(() => readyCheck(resolve), 100);
    };

    new Promise(readyCheck).then(() => {
        // Format content or read from memory
        if (!this._formattedContent) {
            this._formattedContent = {
                pages: [],
                images: []
            };
            const lineHeight = this.contents.fontSize * 1.2;

            // In case of a page with text + image + text, we need to fuse both text parts into a single formatted page
            let currentPage = 0;
            let fuseWithPreviousPage = false;

            let nextBlockStartY = 80;
            let text = "";
            for (let i = 0; i < this._paragraphs.length; i++) {
                const paragraph = this._paragraphs[i];
                if (paragraph.content) {
                    text += paragraph.content + "\\n \\n ";
                }
                // Cut a text block into pages, because we have an image to place or this is the last bit of content
                if (paragraph.image || i === this._paragraphs.length - 1) {
                    if (text.length) {
                        const block: FormattedPage[] = this.cutTextIntoPages(
                            text,
                            nextBlockStartY,
                            currentPage % 2 * 590,
                            (currentPage + 1) % 2 * 590,
                            510
                        ); // TODO constants ?

                        // Page cut in two by image: we need to fuse both parts
                        if (fuseWithPreviousPage) {
                            fuseWithPreviousPage = false;
                            const currentPageBottomPart = block.shift();
                            this._formattedContent.pages[currentPage].lines =
                                this._formattedContent.pages[currentPage].lines.concat(currentPageBottomPart.lines);
                        }
                        this._formattedContent.pages = this._formattedContent.pages.concat(block);

                        // Find the Y offset of the last line to display the image under. Only one image per page in case of text.
                        const lastPage = block[block.length - 1];
                        nextBlockStartY = lastPage.lines[lastPage.lines.length - 1].y;

                        currentPage += block.length - 1;

                        text = "";
                    }

                    if (paragraph.image) {
                        const previousPage = currentPage;
                        const bitmap: Bitmap = ImageManager.loadTutorial(paragraph.image);

                        // Next page if image is too tall to fit under the text
                        if (nextBlockStartY + bitmap.rect.height > this.contentsHeight()) {
                            nextBlockStartY = 0;
                            currentPage += 1;
                        }

                        this._formattedContent.images.push({
                            page: currentPage,
                            y: nextBlockStartY,
                            name: paragraph.image
                        })
                        nextBlockStartY += bitmap.rect.height + lineHeight;

                        // Next page if we can't display text under the image
                        if (nextBlockStartY + lineHeight > this.contentsHeight()) {
                            nextBlockStartY = 0;
                            currentPage += 1;
                        }
                        if (previousPage === currentPage) {
                            fuseWithPreviousPage = true;
                        }
                    }
                }
            }
        }

        // Render formatted content
        const displayedPages: FormattedPage[] = [this._formattedContent.pages[this._leftPageIndex]];
        if (this._formattedContent.pages.length >= this._leftPageIndex + 2) {
            displayedPages.push(this._formattedContent.pages[this._leftPageIndex + 1]);
        }
        for (let page of displayedPages) {
            for (let line of page.lines) {
                this.drawText(line.text, page.x, line.y, 510, 'left');
            }
        }
        const displayedImages = this._formattedContent.images.filter(
            image => image.page === this._leftPageIndex || image.page === this._leftPageIndex + 1);
        for (let image of displayedImages) {
            const bitmap: Bitmap = ImageManager.loadTutorial(image.name);
            this.contents.blt(
                bitmap,
                0, 0,
                bitmap.rect.width, bitmap.rect.height,
                image.page % 2 * 590, image.y
            );
        }
    });
};

Window_TutorialEntry.prototype.close = function() {

    Window_JournalEntry.prototype.close.call(this);
}
