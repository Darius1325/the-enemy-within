// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Sprite_Grid
//
// The sprite for displaying a grid.

function Sprite_Grid() {
    this.initialize.apply(this, arguments);
}

Sprite_Grid.prototype = Object.create(Sprite_Base.prototype);
Sprite_Grid.prototype.constructor = Sprite_Grid;

Sprite_Grid.prototype.initialize = function() {
    Sprite_Base.prototype.initialize.call(this);
    this.setFrame(0, 0, Graphics.width, Graphics.height);
    this.createBitmap();
    this.z = 1;
    this.opacity = TacticsSystem.gridOpacity || 60;
};

Sprite_Grid.prototype.createBitmap = function() {
    var width = $gameMap.width();
    var height = $gameMap.height();
    this.bitmap = new Bitmap(width * 48, height * 48);
    for (var x = 0; x < width; x++) {
        this.bitmap.drawLine(48 * x, 0, 48 * x, height * 48);
    }
    for (var y = 0; y < height; y++) {
        this.bitmap.drawLine(0, 48 * y, width * 48, 48 * y);
    }
};

Sprite_Grid.prototype.update = function() {
    Sprite_Base.prototype.update.call(this);
    var screen = $gameScreen;
    var scale = screen.zoomScale();
    this.scale.x = scale;
    this.scale.y = scale;
    this.x = Math.round($gameMap.adjustX(0) * 48);
    this.y = Math.round($gameMap.adjustY(0) * 48);
    this.x += Math.round(screen.shake());
};
