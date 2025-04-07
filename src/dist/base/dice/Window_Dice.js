// $PluginCompiler TEW_Constants.js
// $StartCompilation
//---------------------------------------
// Window_Dice
//
// The window for displaying a dice roll.
function Window_Dice() {
    this.initialize.apply(this, arguments);
}
Window_Dice.prototype = Object.create(Window_Base.prototype);
Window_Dice.prototype.constructor = Window_Dice;
Window_Dice.prototype.initialize = function (x, y, tens, units) {
    Window_Base.prototype.initialize.call(this, x, y, 240, 110); // temp !!
    this._tens = tens;
    this._units = units;
    this.refresh();
};
Window_Dice.prototype.windowWidth = function () {
    return 340;
};
Window_Dice.prototype.windowHeight = function () {
    return 100;
};
Window_Dice.prototype.refresh = function () {
    this.contents.clear();
    this.contents.drawDie(0, 1, this._tens, 'black', 'lightblue');
    this.contents.drawDie(100, 1, this._units, 'black', 'lightblue');
};
Window_Dice.prototype.open = function () {
    this.refresh();
    Window_Base.prototype.open.call(this);
};
