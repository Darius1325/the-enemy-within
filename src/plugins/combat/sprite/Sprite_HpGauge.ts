// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Sprite_HpGauge
//
// The sprite for displaying the hp gauge.

function Sprite_HpGauge() {
    this.initialize.apply(this, arguments);
};

export default Sprite_HpGauge.prototype = Object.create(Sprite_Base.prototype);
Sprite_HpGauge.prototype.constructor = Sprite_HpGauge;

Sprite_HpGauge.prototype.initialize = function(battler) {
    Sprite_Base.prototype.initialize.call(this);
    this.bitmap = new Bitmap(40, 4);
    this.windowskin = ImageManager.loadSystem('Window');
    this.anchor.x = 0.5;
    this.anchor.y = 0;
    this._battler = battler;
};

Sprite_HpGauge.prototype.gaugeBackColor = function() {
    return this.textColor(19);
};

Sprite_HpGauge.prototype.hpGaugeColor1 = function() {
    return this.textColor(20);
};

Sprite_HpGauge.prototype.hpGaugeColor2 = function() {
    return this.textColor(21);
};

Sprite_HpGauge.prototype.textColor = function(n) {
    var px = 96 + (n % 8) * 12 + 6;
    var py = 144 + Math.floor (n / 8) * 12 + 6;
    return this.windowskin.getPixel(px, py);
};

Sprite_HpGauge.prototype.update = function(battler) {
    Sprite_Base.prototype.update.call(this);
    this.bitmap.clear();
    if (this._battler.isAlive()) {
        this.drawBattlerHP();
    }
};

Sprite_HpGauge.prototype.drawBattlerHP = function() {
    var width = 40;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    console.log("Battler :", this._battler);
    this.drawGauge(0, 0, width, this._battler.hpRate(), color1, color2)
};

Sprite_HpGauge.prototype.drawGauge = function(x, y, width, rate, color1, color2) {
    var fillW = Math.floor(width * rate);
    this.bitmap.fillRect(x, y, width, 4, this.gaugeBackColor());
    this.bitmap.gradientFillRect(x, y, fillW, 4, color1, color2);
};
