// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_CharacterBase
//
// The superclass of Game_Character. It handles basic information, such as
// coordinates and images, shared by all characters.

Game_CharacterBase.prototype.setIsActor = function(isActor) {
    this._isActor = isActor;
};

Game_CharacterBase.prototype.isActor = function() {
    return this._isActor;
};

TEW.MEMORY.gameCharacterBaseIsCollidedWithEvents = Game_CharacterBase.prototype.isCollidedWithEvents;
Game_CharacterBase.prototype.isCollidedWithEvents = function(x, y) {
    // for an actor to pass through an actor
    if (this.isActor()) {
        var events = $gameMap.eventsXyNt(x, y);
        return events.some(function(event) {
            return event.isNormalPriority() && !event.isActor();
        });
    } else {
        return TEW.MEMORY.gameCharacterBaseIsCollidedWithEvents.call(this, x, y);
    }
};
