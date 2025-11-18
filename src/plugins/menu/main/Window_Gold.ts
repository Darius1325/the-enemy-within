// $PluginCompiler TEW_Menus.js
// $StartCompilation

// TODO define fixed window dimensions (and graphical details?) in dedicated file
Window_Gold.prototype.windowWidth = function() {
    return 280;
};

Window_Gold.prototype.windowHeight = function() {
    return 96;
};

Window_Gold.prototype.refresh = function() {
    const x = this.textPadding();
    const textWidth = this.contents.width - this.textPadding() * 2 - this.horizontalBorderPadding() * 2;
    this.contents.clear();
    this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, textWidth);
};
