// $PluginCompiler TEW_Menus.js

var Window_Base: any;

// $StartCompilation

Window_Base.prototype.drawWrappedText= function(text, x, y, width, fontsize = this.contents.fontSize) {
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

// Window_Base.prototype.drawText = function(text, x, y, maxWidth, align, lineHeight = this.lineHeight()) {
//     this.contents.drawText(text, x, y, maxWidth, lineHeight, align);
// };

Window_Base.prototype.standardBackOpacity = function() {
    return 255;
};
