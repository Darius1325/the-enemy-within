// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Sprite_Start
//
// The sprite for displaying the start message.

function Sprite_Start() {
    this.initialize.apply(this, arguments);
};

Sprite_Start.prototype = Object.create(Sprite_Base.prototype);
Sprite_Start.prototype.constructor = Sprite_Start;

Sprite_Start.prototype.initialize = function() {
    Sprite_Base.prototype.initialize.call(this);
    this.bitmap = new Bitmap(Graphics.width, Graphics.height);
    this._delay = 0;
    this._maxDuration = TacticsSystem.durationStartSprite;
    this.z = 8;
    this.opacity = 0;
};

Sprite_Start.prototype.update = function(battler) {
    Sprite_Base.prototype.update.call(this);
    this.updateMain();
    this.updatePosition();
    this.updateOpacity();
};

Sprite_Start.prototype.isPlaying = function() {
    return $gameScreen.startDuration() > 0;
};

Sprite_Start.prototype.updateMain = function() {
    if (this.isPlaying()) {
        this.drawStart();
        this.updatePosition();
    } else {
        this.hide();
    }
};

Sprite_Start.prototype.drawStart = function() {
    var x = 20;
    var y = Graphics.height / 2;
    var maxWidth = Graphics.width - x * 2;
    this.bitmap.clear();
    this.bitmap.outlineColor = 'black';
    this.bitmap.outlineWidth = 8;
    this.bitmap.fontSize = 86;
    var startTerm = TacticsSystem.battleStartTerm;
    this.bitmap.drawText(startTerm, x, y, maxWidth, 48, 'center');
    this.bitmap.outlineWidth = 4;
    this.bitmap.fontSize = 28;
    this.opacity = 255;
    this.show();
};

Sprite_Start.prototype.updatePosition = function() {
    this.x = Graphics.width / 2 - this.bitmap.width / 2;
    this.y = Graphics.height / 2 - this.bitmap.height / 2 - 120;
};

Sprite_Start.prototype.updateOpacity = function() {
    var d = $gameScreen.startDuration();
    if (d < 30) {
        this.opacity = 255 * d / 30;
    }
    if (d > this._maxDuration - 60) {
        this.opacity = 255 * (this._maxDuration - d) / 60;
    }
};
