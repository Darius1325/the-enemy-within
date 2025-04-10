// $PluginCompiler TEW_Menus.js 10
// $StartCompilation

import TEW from "../../types/TEW";

//-----------------------------------------------------------------------------
// Window_InventoryDetails
//
// Super object to manage all item details windows

function Window_InventoryDetails() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryDetails.prototype = Object.create(Window_Base.prototype);
Window_InventoryDetails.prototype.constructor = Window_InventoryDetails;

// Initalizing the window
Window_InventoryDetails.prototype.initialize = function(commandWindowHeight: number) {
    Window_Base.prototype.initialize.call(this,
        Graphics.boxWidth / 2,
        TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT - commandWindowHeight);
    this.width = Graphics.boxWidth / 2;
    this.activate();
    this.refresh();
};

Window_InventoryDetails.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

// Drawing an underlined Text
Window_InventoryDetails.prototype.drawUnderlinedText = function(text: string, x: number, y: number, width: number, align: string) {
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
Window_InventoryDetails.prototype.drawTable2Columns = function(x: number, y: number, width: number, rows: number, textArray: [string, string][]) {
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

// Drawing a wrapped text - used to draw to description
Window_InventoryDetails.prototype.drawWrappedTextManually = function(text: string, x: number, y: number, fontSize: number) {

    const words = text.split(" ");
    const maxWidth = this.contentsWidth() - x;

    if (text.length <= 100){ this.contents.fontSize = 28; }
    else if (text.length <= 200){ this.contents.fontSize = 20; }
    // else if (text.length <= 200) { this.contents.fontSize = 16; }
    else { this.contents.fontSize = 16; }

    const spaceWidth = this.textWidth(" ");
    const lineHeight = fontSize * 1.2;
    let currentX = x;
    let currentY = y;

    words.forEach(word => {
        const wordWidth = this.textWidth(word);

        // If the word is too long, drawing it on the next line
        if (currentX + wordWidth > maxWidth) {
            currentX = x; // begining of the line
            currentY += lineHeight; // next line
        }

        // drawing it on the current line
        this.drawText(word, currentX, currentY, wordWidth, 'left');
        currentX += wordWidth + spaceWidth;
    });
    this.resetFontSettings();
};

Window_InventoryDetails.prototype.drawLine = function(y: number) {
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
