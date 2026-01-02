// $PluginCompiler TEW_Combat.js

import Game_Actor from "../../game/Game_Actor";

export interface IHalfWindow_TacticsDetails {
    width: number;

    setActor: (actor: Game_Actor) => void;
    drawUnderlinedtext: (text: string, x: number, y: number, width: number, align: string) => void;
    drawTable2Columns: (x: number, y: number, width: number, rows: number, textArray: [string, string][]) => void;
    drawWrappedtextManually: (text: string, x: number, y: number, fontSize: number) => void;
    drawLine: (y: number) => void;
    clear: () => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// HalfWindow_TacticsDetails
//
// Super object to manage all item details windows

function HalfWindow_TacticsDetails() {
    this.initialize.apply(this, arguments);
}

export default HalfWindow_TacticsDetails.prototype = Object.create(Window_Base.prototype);
HalfWindow_TacticsDetails.prototype.constructor = HalfWindow_TacticsDetails;

// Initalizing the window
HalfWindow_TacticsDetails.prototype.initialize = function(commandWindowHeight: number) {
    Window_Base.prototype.initialize.call(this,
        Graphics.boxWidth / 2, 0,
        Graphics.boxWidth / 2, Graphics.boxHeight - commandWindowHeight);
    this.width = Graphics.boxWidth / 2;
    this.deactivate();
    this.refresh();
};

HalfWindow_TacticsDetails.prototype.setActor = function(actor: Game_Actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

// Drawing an underlined Text
HalfWindow_TacticsDetails.prototype.drawUnderlinedText = function(text: string, x: number, y: number, width: number, align: string) {
    // Draw text
    this.drawText(text, x, y, width, align);

    // Getting position of the line
    const textSize = this.contents.fontSize;
    const textWidth = this.textWidth(text);
    const lineY = y + textSize + 2;

    // Drawing the line
    this.contents.paintOpacity = 255;
    this.contents.fillRect(
        x + (align === "center" ? (width - textWidth) / 2 : align === "right" ? width - textWidth : 0),
        lineY,
        textWidth,
        2, // Thickness
        this.normalColor()
    );
};

// Drawing a table with 2 columns
HalfWindow_TacticsDetails.prototype.drawTable2Columns = function(x: number, y: number, width: number, rows: number, textArray: [string, string][]) {
    const cellWidthFirstRow = width / 3;
    const cellWidthSecondRow = width / 3 * 2;
    const cellHeight = this.lineHeight();

    for (let row = 0; row < rows; row++) {
        const cellXTh = x;
        const cellXTd = x + cellWidthFirstRow;
        const cellY = y + row * cellHeight

        this.drawText(textArray[row][0], cellXTh + 5, cellY, cellWidthFirstRow - 10 , "left");
        this.drawText(textArray[row][1], cellXTd + 5, cellY, cellWidthSecondRow - 10 , "left");
    }
};

// // Drawing a wrapped text - used to draw to description
// HalfWindow_TacticsDetails.prototype.drawWrappedTextManually = function(text: string, x: number, y: number, fontSize: number) {

//     const words = text.split(" ");
//     const maxWidth = this.contentsWidth() - x;

//     if (text.length <= 100){ this.contents.fontSize = 28; }
//     else if (text.length <= 200){ this.contents.fontSize = 20; }
//     // else if (text.length <= 200) { this.contents.fontSize = 16; }
//     else { this.contents.fontSize = 16; }

//     const spaceWidth = this.textWidth(" ");
//     const lineHeight = fontSize * 1.2;
//     let currentX = x;
//     let currentY = y;

//     words.forEach(word => {
//         const wordWidth = this.textWidth(word);

//         // If the word is too long, drawing it on the next line
//         if (currentX + wordWidth > maxWidth) {
//             currentX = x; // begining of the line
//             currentY += lineHeight; // next line
//         }

//         // drawing it on the current line
//         this.drawText(word, currentX, currentY, wordWidth, 'left');
//         currentX += wordWidth + spaceWidth;
//     });
//     this.resetFontSettings();
// };

HalfWindow_TacticsDetails.prototype.drawLine = function(y: number) {
    const lineWidth = 40;
    const lineSize = 2;
    this.contents.fillRect(
        (this.contentsWidth() - lineWidth) / 2,
        y,
        lineWidth,
        lineSize,
        this.normalColor()
    );
};

HalfWindow_TacticsDetails.prototype.clear = function() {
    if (this.contents) {
        this.contents.clear();
    }
};
