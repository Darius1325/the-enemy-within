// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Sprite_Selector
//
// The sprite for displaying a selector.

function Sprite_Selector() {
    this.initialize.apply(this, arguments);
}

Sprite_Selector.prototype = Object.create(Sprite_Base.prototype);
Sprite_Selector.prototype.constructor = Sprite_Selector;

Sprite_Selector.prototype.initialize = function() {
    Sprite_Base.prototype.initialize.call(this);
    this.loadBitmap();
};

Sprite_Selector.prototype.loadBitmap = function() {
    this.bitmap = ImageManager.loadSystem(TacticsSystem.selectorFile);
};

Sprite_Selector.prototype.update = function() {
    Sprite_Base.prototype.update.call(this);
    this.updateVisibility();
    this.x = $gameSelector.screenX();
    this.y = $gameSelector.screenY();
};

Sprite_Selector.prototype.updateVisibility = function() {
    Sprite_Base.prototype.updateVisibility.call(this);
    this.visible = !$gameSelector.isTransparent();
};
