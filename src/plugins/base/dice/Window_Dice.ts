// $PluginCompiler TEW_Base.js
// $StartCompilation

//---------------------------------------
// Window_Dice
//
// The window for displaying a dice roll.

function Window_Dice() {
    this.initialize.apply(this, arguments);
}

export default Window_Dice.prototype = Object.create(Window_Base.prototype);
Window_Dice.prototype.constructor = Window_Dice;

Window_Dice.prototype.initialize = function(x: number, y: number, tens: number, units: number) {
    Window_Base.prototype.initialize.call(this, x, y, 240, 110); // temp !!
    this._tens = tens;
    this._units = units;
    setTimeout(() => {
        this.close();
    }, 3000);
    this.refresh();
};

Window_Dice.prototype.windowWidth = function() {
    return 340;
};

Window_Dice.prototype.windowHeight = function() {
    return 100;
};

Window_Dice.prototype.refresh = function() {
    this.contents.clear();
    this.contents.drawDie(0, 1, this._tens, 'black', 'lightgreen');
    this.contents.drawDie(100, 1, this._units, 'black', 'lightgreen');
};

Window_Dice.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};

Window_Dice.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (Input.isAnyKeyTriggered()) {
        this.close();
    }
};
