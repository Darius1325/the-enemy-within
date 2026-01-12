// $PluginCompiler TEW_Menus.js

import { Sprite } from "../../rmmv/core/Sprite";
import TEW from "../_types/tew";

// $StartCompilation

TEW.MEMORY.windowBaseInitialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function(x, y, width, height) {
    TEW.MEMORY.windowBaseInitialize.call(this, x, y, width, height);
    const bg = this.backgroundImageName();
    if (bg) {
        this._bgSprite = new Sprite();
        this._bgSprite.bitmap = ImageManager.loadSystem(bg);
        this.addChildAt(this._bgSprite, 0);
    }
};

Window_Base.prototype.backgroundImageName = function() {
    return undefined;
};

Window_Base.prototype.drawWrappedText = function(text, x, y, width, fontsize = this.contents.fontSize) {
    this.contents.fontSize = fontsize;
    const words = text.split(" ");
    let line = "";
    let currentY = y;

    for (const word of words) {
        if (this.textWidth(line + word) > width) {
            this.drawText(line, x, currentY, width);
            line = word + " ";
            currentY += fontsize;
        } else {
            line += word + " ";
        }
    }
    this.drawText(line, x, currentY, width);
    this.resetFontSettings();
}


// Drawing a wrapped text - used to draw to description
Window_Base.prototype.drawWrappedTextManually = function(text: string, x: number, y: number, maxHeight: number, fontSize = 28) {

    const lineJumpCount = text.split('\\n').length;

    const words = text.split(" ");
    const maxWidth = this.contentsWidth() - x;
    this.contents.fontSize = fontSize;
    let lineHeight = this.contents.fontSize * 1.2;

    const spaceWidth = this.textWidth(" ");
    let doesFit = false;
    let currentX = x;
    let currentY = y;

    do {
        let nbLine = lineJumpCount;
        // Calculating number of lines needed
        words.forEach(word => {
            word.replace('\\n', ''); // They are already counted
            const wordWidth = this.textWidth(word);

            // If the word is too long, adding a new line
            if (currentX + wordWidth > maxWidth) {
                currentX = x; // begining of the line
                nbLine++;
            }
            currentX += wordWidth + spaceWidth;
        });

        // does the text fit ?
        doesFit = nbLine <= Math.floor(maxHeight / lineHeight)

        // If it doesnt fit, lets shrink the font
        if (!doesFit) {
            this.contents.fontSize -= 1;
            lineHeight = this.contents.fontSize * 1.2;
        }

    } while (!doesFit && this.contents.fontSize > 16);

    // Lets reset our positions
    currentX = x;
    currentY = y;
    let startANewLine = false;

    words.forEach(word => {

        const wordWidth = this.textWidth(word.replace('\\n', ''));
        // If the word is too long, drawing it on the next line
        if (currentX + wordWidth > maxWidth || startANewLine) {
            currentX = x; // begining of the line
            currentY += lineHeight; // next line
        }

        // Handling \n
        startANewLine = word.includes('\\n');

        // drawing it on the current line
        this.drawText(word.replace('\\n', ''), currentX, currentY, wordWidth, 'left');
        currentX += wordWidth + spaceWidth;
    });
    this.resetFontSettings();
};

// Window_Base.prototype.drawText = function(text, x, y, maxWidth, align, lineHeight = this.lineHeight()) {
//     this.contents.drawText(text, x, y, maxWidth, lineHeight, align);
// };

Window_Base.prototype.drawCurrentOverMax = function(
    currentValue : number,
    maxValue : number,
    x : number,
    y : number,
    width : number,
    color1 : string,
    color2 : string,
    label : string 
) {
    const labelWidth = this.textWidth(label);
    const currentValueWidth = this.textWidth(currentValue);
    const maxValueWidth = this.textWidth(maxValue);
    const slashWidth = this.textWidth('/');

    const xCurrentValue = x + width - maxValueWidth - slashWidth - currentValueWidth;
    const xSlash = x + width - maxValueWidth - slashWidth;
    const xMaxValue = x + width - maxValueWidth;
    this.changeTextColor(this.systemColor());
    this.drawText(label, x, y, labelWidth);

    this.changeTextColor(color1);
    this.drawText(currentValue, xCurrentValue, y, currentValueWidth, 'right');
    this.resetTextColor();
    this.drawText('/', xSlash, y, slashWidth, 'right');
    this.changeTextColor(color2);
    this.drawText(maxValue, xMaxValue, y, maxValueWidth, 'right');
};

Window_Base.prototype.standardBackOpacity = function() {
    return 255;
};

Window_Base.prototype.verticalBorderPadding = function() {
    return 30;
};

Window_Base.prototype.horizontalBorderPadding = function() {
    return 30;
};

Window_Base.prototype.contentsWidth = function() {
    return this.width - this.horizontalBorderPadding() * 2;
};

Window_Base.prototype.contentsHeight = function() {
    return this.height - this.verticalBorderPadding() * 2;
};

Window_Base.prototype.fittingHeight = function(numLines) {
    return numLines * this.lineHeight() + this.verticalBorderPadding() * 2;
};

// TODO no need for color picker, we can optimize everything here?
Window_Base.prototype.whiteColor = function() {
    return this.textColor(0);
};
Window_Base.prototype.normalColor = function() {
    return this.textColor(15);
};

Window_Base.prototype.resetTextColor = function() {
    this.changeTextColor(this.normalColor());
    this.contents.outlineWidth = 0;
};
