// $PluginCompiler TEW_Menus.js

var Window_Base: any;

// $StartCompilation

Window_Base.prototype.drawWrappedText= function(text, x, y, width) {
    const words = text.split(" ");
    let line = "";
    let currentY = y;

    for (const word of words) {
        if (this.textWidth(line + word) > width) {
            this.drawText(line, x, currentY, width);
            line = word + " ";
            currentY += this.lineHeight();
        } else {
            line += word + " ";
        }
    }
    this.drawText(line, x, currentY, width);
}
