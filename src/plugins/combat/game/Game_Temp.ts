// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Temp
//
// The game object class for temporary data that is not included in save data.

TEW.MEMORY.gameTempInit = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
    TEW.MEMORY.gameTempInit.call(this);
    this._positionX = null;
    this._positionY = null;
    this._direction = null;
    this._canCancel = true;
};

Game_Temp.prototype.isPositionValid = function(x, y) {
    this._positionX = x;
    this._positionY = y;
};

Game_Temp.prototype.setPosition = function(x, y) {
    this._positionX = x;
    this._positionY = y;
};

Game_Temp.prototype.setDirection = function(d) {
    this._direction = d;
};

Game_Temp.prototype.direction = function() {
    return this._direction;
};

Game_Temp.prototype.clearDirection = function() {
    this._direction = null;
};

Game_Temp.prototype.clearPosition = function() {
    this._positionX = null;
    this._positionY = null;
};

Game_Temp.prototype.isPositionValid = function() {
    return this._positionX !== null;
};

Game_Temp.prototype.positionX = function() {
    return this._positionX;
};

Game_Temp.prototype.positionY = function() {
    return this._positionY;
};

Game_Temp.prototype.canCancel = function() {
    return this._canCancel;
};

Game_Temp.prototype.setCancel = function(canCancel) {
    this._canCancel = canCancel;
};
