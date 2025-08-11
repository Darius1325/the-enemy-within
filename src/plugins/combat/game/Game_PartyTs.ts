// $PluginCompiler TEW_Combat.js

import Game_UnitTs from "./Game_UnitTs";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_PartyTs
//
// The game object class for a party tactics.

function Game_PartyTs() {
    this.initialize.apply(this, arguments);
}

export default Game_PartyTs.prototype = Object.create(Game_UnitTs.prototype);
Game_PartyTs.prototype.constructor = Game_PartyTs;

Game_PartyTs.prototype.initialize = function() {
    Game_UnitTs.prototype.initialize.call(this);
    this.clear();
};

Game_PartyTs.prototype.members = function() {
    return this._actors.map(function(id) {
        return $gameActors.actor(id);
    });
};

Game_PartyTs.prototype.clear = function() {
    this._actors = [];
    this._maxBattleMembers = 0;
    this._inBattle = false;
};

Game_PartyTs.prototype.maxBattleMembers = function() {
    return this._maxBattleMembers;
};

Game_PartyTs.prototype.addActor = function(actorId, event, needRefresh) {
    if (!this._actors.contains(actorId)) {
        var actor = $gameActors.actor(actorId);
        var eventId = event.eventId();
        actor.setupEvent(eventId);
        this._maxBattleMembers++;
        this._actors.push(actorId);
        if (needRefresh) {
            actor.refreshImage();
        }
    }
};

Game_PartyTs.prototype.actors = function() {
    return this._actors;
};

Game_PartyTs.prototype.removeActor = function() {
};

Game_PartyTs.prototype.onBattleStart = function() {
    this._inBattle = true;
    $gameParty.onBattleStart();
};

Game_PartyTs.prototype.inBattle = function() {
    return this._inBattle;
};

Game_PartyTs.prototype.allMembers = function() {
    return this._actors.map(function(id) {
        return $gameActors.actor(id);
    });
};

// TODO prolly useless, we should check actor state at the start of its turn
Game_PartyTs.prototype.restrictedMembers = function() {
    return this.members().filter(function(member) {
        return (member.isRestricted() || member.isAutoBattle()) && member.isAlive();
    }, this);
};

Game_PartyTs.prototype.onAllTurnEnd = function() {
    this.aliveMembers().forEach(function(actor) {
        actor.onActionEnd();
    });
};

Game_PartyTs.prototype.onBattleEnd = function() {
    $gameParty.onBattleEnd();
    this._inBattle = false;
};

Game_PartyTs.prototype.onClear = function() {
    Game_UnitTs.prototype.onClear.call(this);
    this._actors = [];
};
