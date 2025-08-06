// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Event
//
// The game object class for an event. It contains functionality for event page
// switching and running parallel process events.

TEW.MEMORY.gameEventInitMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function() {
    TEW.MEMORY.gameEventInitMembers.call(this);
    this._battlerId = null;
    this._actor = null;
};

Game_Event.prototype.setBattler = function(battler) {
    this._battler = battler;
};

Game_Event.prototype.isActor = function() {
    return this._battler && this._battler.isActor();
};

Game_Event.prototype.isEnemy = function() {
    return this._battler && this._battler.isEnemy();
};

// in a perfect world Game_Battler inherits from Game Event ;-)
Game_Event.prototype.battler = function() {
    return this._battler;
};

Game_Event.prototype.setActor = function(actor) {
    this._actor = actor;
};

Game_Event.prototype.tparam = function(paramString) {
    var param = this.event().meta[paramString];
    if (typeof param === 'string') {
        param = param.replace(/\s/g, '');
    }
    return param
};

TEW.MEMORY.gameEventIsCollidedWithEvents = Game_Event.prototype.isCollidedWithEvents;
Game_Event.prototype.isCollidedWithEvents = function(x, y) {
    // for an actor to pass through an actor
    if (this.isActor() || this.isEnemy()) {
        return Game_Character.prototype.isCollidedWithEvents.call(this, x, y)
    } else {
        return TEW.MEMORY.gameEventIsCollidedWithEvents.call(this, x, y);
    }
};

Game_Event.prototype.isAppeared = function() {
    return this.findProperPageIndex() !== -1 && !this._erased;
};

TEW.MEMORY.gameEventUpdate = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
    this.updateAppeared();
    TEW.MEMORY.gameEventUpdate.call(this);
};

Game_Event.prototype.updateAppeared = function() {
    if (this.isActor() || this.isEnemy()) {
        if (this.isAppeared()) {
            this._battler.appear();
        } else {
            this._battler.hide();
        }
    }
};

Game_Event.prototype.name = function() {
    return this.tparam('Name') || this.event().name;
};
