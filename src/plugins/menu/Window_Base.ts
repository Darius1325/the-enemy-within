// $PluginCompiler TEW_Menus.js
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
Window_Base.prototype.normalColor = function() {
    return this.textColor(15);
};

Window_Base.prototype.resetTextColor = function() {
    this.changeTextColor(this.normalColor());
    this.contents.outlineWidth = 0;
};
