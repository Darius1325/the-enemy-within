// $PluginCompiler TEW_Combat.js

import Sprite_BattlerTs from "./Sprite_BattlerTs";

// $StartCompilation

//-----------------------------------------------------------------------------
// Spriteset_Tactics
//
// The set of sprites on the tactics screen.

function Spriteset_Tactics() {
    this.initialize.apply(this, arguments);
}

export default Spriteset_Tactics.prototype = Object.create(Spriteset_Map.prototype);
Spriteset_Tactics.prototype.constructor = Spriteset_Tactics;

Spriteset_Tactics.prototype.initialize = function() {
    Spriteset_Map.prototype.initialize.call(this);
    this.createSelector();
    this.createStart();
    this.createGrid();
    this._sign = 1;
};

Spriteset_Tactics.prototype.createLowerLayer = function() {
    Spriteset_Map.prototype.createLowerLayer.call(this);
    this.createBaseTiles();
};

Spriteset_Tactics.prototype.createBaseTiles = function() {
    this._tilesSprite = new Sprite_Base();
    this._tilesSprite.z = 1;
    this._rangeTilesSprite = this.createTiles(TacticsSystem.moveScopeColor);
    this._tilemap.addChild(this._tilesSprite);
};

Spriteset_Tactics.prototype.createSelector = function() {
    this._selectorSprite = new Sprite_Selector();
    this._selectorSprite.z = 1;
    this._tilemap.addChild(this._selectorSprite);
};

Spriteset_Tactics.prototype.createTiles = function(color) {
    var tilesSprite = new Sprite_Base();
    var width = $gameMap.width();
    var height = $gameMap.height();
    tilesSprite.bitmap = new Bitmap(width * 48, height * 48);
    tilesSprite.opacity = 120;
    tilesSprite.color = color;
    this._tilesSprite.addChild(tilesSprite);
    return tilesSprite
};

Spriteset_Tactics.prototype.updateRangeTiles = function() {
    this._rangeTiles = $gameMap.tiles();
    var width = $gameMap.width();
    var height = $gameMap.height();
    this._rangeTilesSprite.bitmap.clearRect(0, 0, width * 48, height * 48);
    this._rangeTilesSprite.color = $gameMap.color();
    this._rangeTiles.forEach(function(tile) {
        var x = $gameMap.positionTileX(tile) * 48;
        var y = $gameMap.positionTileY(tile) * 48;
        var color = this._rangeTilesSprite.color;
        this._rangeTilesSprite.bitmap.fillRect(x + 2, y + 2, 44, 44, color);
    }, this);
};

Spriteset_Tactics.prototype.updateTiles = function() {
    if (this._tilesSprite.opacity >= 255) {
        this.sign = -1;
    }
    if (this._tilesSprite.opacity <= 160) {
        this.sign = 1;
    }
    if (this._rangeTiles !== $gameMap.tiles()) {
        this.updateRangeTiles();
    }
    this._tilesSprite.opacity = this._tilesSprite.opacity + 3 * this.sign;
    this._tilesSprite.x = $gameScreen.zoomScale();
    this._tilesSprite.y = $gameScreen.zoomScale();
    this._tilesSprite.x = Math.round($gameMap.adjustX(0) * 48);
    this._tilesSprite.y = Math.round($gameMap.adjustY(0) * 48);
    this._tilesSprite.x += Math.round($gameScreen.shake());
};

Spriteset_Tactics.prototype.createCharacters = function() {
    this._characters = [];
    this._characterSprites = [];
    this._actorSprites = [];
    this._enemySprites = [];
    $gameMap.events().forEach(function(event) {
        var sprite = null;
        if (event.isActor() || event.isEnemy()) {
            sprite = new Sprite_BattlerTs(event);
        } else {
            sprite = new Sprite_Character(event);
        }
        this._characters.push(event);
        this._characterSprites.push(sprite);
        if (event.isActor()) {
            this._actorSprites.push(sprite);
        }
        if (event.isEnemy()) {
            this._enemySprites.push(sprite);
        }
    }, this);
    for (var i = 0; i < this._characterSprites.length; i++) {
        this._tilemap.addChild(this._characterSprites[i]);
    }
};

Spriteset_Tactics.prototype.createEnemies = function() {
    this._enemySprites = [];
    this._characters.forEach(function(sprite) {
        if (sprite.isEnemy()) {
            this._enemySprites.push(sprite);
        }
    }, this);
};

Spriteset_Tactics.prototype.battlerSprites = function() {
    return this._enemySprites.concat(this._actorSprites);
};

Spriteset_Tactics.prototype.createGrid = function() {
    this._tilemap.addChild(new Sprite_Grid());
};

Spriteset_Tactics.prototype.update = function() {
    Spriteset_Map.prototype.update.call(this);
    this.updateTiles();
};

Spriteset_Tactics.prototype.isBusy = function() {
    return this.isAnimationPlaying() || this.isAnyoneMoving();
};

Spriteset_Tactics.prototype.isAnimationPlaying = function() {
    for (var i = 0; i < this._characterSprites.length; i++) {
        if (this._characterSprites[i].isAnimationPlaying()) {
            return true;
        }
    }
    if (this._startSprite.isPlaying()) {
        return true;
    }
    return false;
};

Spriteset_Tactics.prototype.isAnyoneMoving = function() {
    for (var i = 0; i < this._characters.length; i++) {
        if (this._characters[i].isMoving()) {
            return true;
        }
    }
    return false;
};

Spriteset_Tactics.prototype.createStart = function() {
    this._startSprite = new Sprite_Start();
    this.addChild(this._startSprite);
};

Spriteset_Tactics.prototype.isEffecting = function() {
    return this.battlerSprites().some(function(sprite) {
        return sprite.isEffecting();
    });
};
