// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Selector
//
// The object tied to the moveable tile selector.

function Game_Selector() {
    this.initialize.apply(this);
}

export default Game_Selector.prototype = Object.create(Object.prototype);
Game_Selector.prototype.constructor = Game_Selector;

Object.defineProperties(Game_Selector.prototype, {
    x: { get: function() { return this._x; }, configurable: true },
    y: { get: function() { return this._y; }, configurable: true }
});

Game_Selector.prototype.initialize = function() {
    this.initMembers();
};

Game_Selector.prototype.initMembers = function() {
    this._x = 0;
    this._y = 0;
    this._realX = 0;
    this._realY = 0;
    this._direction = 0;
    this._speed = TEW.COMBAT.SYSTEM.selectorSpeed + 3 || 5;
    this._wait = 0;
    this._selectIndex = -1;
    this._isMoving = false;
    this._transparent = false;
    this._scrolledX = 0;
    this._scrolledY = 0;
    this._active = true;
    this._reachedDest = false;
};

Game_Selector.prototype.pos = function(x, y) {
    return this.x === x && this.y === y;
};

Game_Selector.prototype.setPosition = function(x, y) {
    this._realX = this._x = x;
    this._realY = this._y = y;
};

Game_Selector.prototype.isWaiting = function() {
    return this._wait > 0;
};

Game_Selector.prototype.activate = function() {
    this._active = true;
};

Game_Selector.prototype.deactivate = function() {
    this._active = false;
};

Game_Selector.prototype.select = function() {
    return this.battlers()[this._selectIndex];
};

Game_Selector.prototype.isMoving = function() {
    return this._isMoving;
};

Game_Selector.prototype.getInputDirection = function() {
    return Input.dir4;
};

Game_Selector.prototype.updateMoveByInput = function() {
    if (BattleManager.isActive()) {
        this.moveByInput();
    }
};

Game_Selector.prototype.update = function() {
    this._isMoving = false;
    this.moveByDestination();
    this.updateMove();
    // don't update scroll here if destination...
    if (!$gameMap.isDestinationValid()) {
        this.updateScroll(this._scrolledX, this._scrolledY);
    }
    this.updateWait();
    this._scrolledX = this.scrolledX();
    this._scrolledY = this.scrolledY();
};

Game_Selector.prototype.distancePerFrame = function() {
    return Math.pow(2, this._speed) / 256;
};

Game_Selector.prototype.updateWait = function() {
    if (this.isWaiting()) {
        this._wait -= this.distancePerFrame();
    }
};

Game_Selector.prototype.canMove = function() {
    return !$gameMap.isEventRunning() && !$gameMessage.isBusy() &&
        this._active;
};

Game_Selector.prototype.moveByInput = function() {
    var direction = this.getInputDirection();
    if (this.canMove() && !this.isWaiting() && direction > 0) {
        var x = $gameMap.roundXWithDirection(this.x, direction);
        var y = $gameMap.roundYWithDirection(this.y, direction);
        if (this.isValid(x, y)) {
            SoundManager.playCursor();
            this.executeMove(x, y, direction);
            this.updateSelect();
        }
    }
};

Game_Selector.prototype.moveByDestination = function() {
    if (this.canMove() && !this.isWaiting() && $gameTemp.isDestinationValid()) {
        var x = $gameTemp.destinationX();
        var y = $gameTemp.destinationY();
        var direction = this.findDirectionTo(x, y);
        if (direction > 0) {
            x = $gameMap.roundXWithDirection(this.x, direction);
            y = $gameMap.roundYWithDirection(this.y, direction);
            this.executeMove(x, y, direction);
            this.updateSelect();
        } else {
            this._isMoving = true;
            this._reachedDest = true;
            $gameTemp.clearDestination();
        }
    }
};

Game_Selector.prototype.findDirectionTo = function(x, y) {
    if (this.y < y) {
        return 2;
    }
    if (this.x > x) {
        return 4;
    }
    if (this.x < x) {
        return 6;
    }
    if (this.y > y) {
        return 8;
    }
    return 0;
};

Game_Selector.prototype.executeMove = function(x, y, direction) {
    this._wait = 1;
    this._isMoving = true;
    this._x = x;
    this._y = y;
    this._direction = direction;
};

Game_Selector.prototype.performTransfer = function(x, y) {
    $gameMap.performScroll(x, y);
    this._x = this._realX = x;
    this._y = this._realY = y;
    this.updateSelect();
};

Game_Selector.prototype.isValid = function(x, y) {
    return x >= 0 && y >= 0 && x < $gameMap.width() && y < $gameMap.height();
};

Game_Selector.prototype.updateMove = function() {
    if (this._x < this._realX) {
        this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
    }
    if (this._x > this._realX) {
        this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
    }
    if (this._y < this._realY) {
        this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
    }
    if (this._y > this._realY) {
        this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
    }
};

Game_Selector.prototype.battlers = function() {
    return $gamePartyTs.members().concat($gameTroopTs.members());
};

Game_Selector.prototype.updateSelect = function() {
    this._selectIndex = -1;
    for (let i = 0; i < this.battlers().length; i++) {
        const battler = this.battlers()[i];
        if (this.pos(battler.x, battler.y)) {
            if (battler.isAlive()) {
                this._selectIndex = i;
            }
        }
    }
};

Game_Selector.prototype.updateScroll = function(lastScrolledX: number, lastScrolledY: number) {
    const x1 = lastScrolledX;
    const y1 = lastScrolledY;
    const x2 = this.scrolledX();
    const y2 = this.scrolledY();
    if (y2 > y1 && y2 > this.centerY()) {
        $gameMap.scrollDown(y2 - y1);
    }
    if (x2 < x1 && x2 < this.centerX()) {
        $gameMap.scrollLeft(x1 - x2);
    }
    if (x2 > x1 && x2 > this.centerX()) {
        $gameMap.scrollRight(x2 - x1);
    }
    if (y2 < y1 && y2 < this.centerY()) {
        $gameMap.scrollUp(y1 - y2);
    }
};

Game_Selector.prototype.centerX = function() {
    return (Graphics.width / $gameMap.tileWidth() - 1) / 2.0;
};

Game_Selector.prototype.centerY = function() {
    return (Graphics.height / $gameMap.tileHeight() - 1) / 2.0;
};

Game_Selector.prototype.moveTo = function(x, y) {
    $gameTemp.setDestination(x, y);
};

Game_Selector.prototype.savePosition = function() {
    $gameTemp.setPosition(this.x, this.y);
};

Game_Selector.prototype.restorePosition = function() {
    if ($gameTemp.isPositionValid()) {
        var positionX = $gameTemp.positionX();
        var positionY = $gameTemp.positionY();
        this.performTransfer(positionX, positionY);
    }
};

Game_Selector.prototype.scrolledX = function() {
    return $gameMap.adjustX(this._realX);
};

Game_Selector.prototype.scrolledY = function() {
    return $gameMap.adjustY(this._realY);
};

Game_Selector.prototype.screenX = function() {
    var tw = $gameMap.tileWidth();
    return Math.round($gameMap.adjustX(this.x) * tw);
};

Game_Selector.prototype.screenY = function() {
    var th = $gameMap.tileHeight();
    return Math.round($gameMap.adjustY(this.y) * th);
};

Game_Selector.prototype.isOk = function() {
    return Input.isTriggered('ok') || this.triggerTouchAction();
};

Game_Selector.prototype.isCancelled = function() {
    return Input.isTriggered('menu') || TouchInput.isCancelled();
};

Game_Selector.prototype.triggerTouchAction = function() {
    if (this._reachedDest) {
        this._reachedDest = false;
        return true;
    }
    return false;
};

Game_Selector.prototype.setTransparent = function(transparent) {
    this._transparent = transparent;
};

Game_Selector.prototype.isTransparent = function() {
    return this._transparent;
};

Game_Selector.prototype.isBusy = function() {
    return ($gameMap.isDestinationValid() || $gameTemp.isDestinationValid());
};

Game_Selector.prototype.selectActor = function() {
    var select = this.select();
    if (select && select.isActor() && select.canAction()) {
        if (this.isOk()) {
            SoundManager.playOk();
            return select;
        }
    }
};

Game_Selector.prototype.checkDestination = function(subject) {
    var battler = this.select();
    if ($gameMap.isOnTiles(this.x, this.y)) {
        if (!battler || subject === battler) {
            if (this.isOk()) {
                return true;
            }
        }
    }
    return false;
};

Game_Selector.prototype.selectTarget = function(action) {
    var select = this.select();
    if ($gameSelector.isOk()) {
        if ($gameMap.isOnTiles(this.x, this.y) && action.isTargetValid(select)) {
            SoundManager.playOk();
            return select.index();
        } else {
            SoundManager.playBuzzer();
        }
    }
    return -1;
};
