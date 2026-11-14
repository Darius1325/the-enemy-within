// $PluginCompiler TEW_Combat.js

import Game_Battler from "./Game_Battler";

export default interface Game_Actor extends Game_Battler {

};

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.

TEW.MEMORY.gameActorInitMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
    TEW.MEMORY.gameActorInitMembers.call(this);
    this._lastSpell = new Game_Item();
    this._lastBattleCommands = [];
};

Game_Actor.prototype.currentData = function() {
    return Game_Battler.prototype.currentData.call(this).concat(this.currentClass());
};

Game_Actor.prototype.setupEvent = function(eventId) {
    Game_Battler.prototype.setupEvent.call(this, eventId);
    this.event().setPriorityType(1);
    // to find a path to through an actor
    this._char.setIsActor(true);
};

Game_Actor.prototype.currentBattler = function() {
    return this.actor();
};

Game_Actor.prototype.indexTs = function() {
    return $gamePartyTs.members().indexOf(this);
};

Game_Actor.prototype.friendsUnitTS = function() {
    return $gamePartyTs;
};

Game_Actor.prototype.opponentsUnitTS = function() {
    return $gameTroopTs;
};

Game_Actor.prototype.savePosition = function() {
    $gameTemp.setPosition(this.x, this.y);
    $gameTemp.setDirection(this.event().direction());
};

Game_Actor.prototype.restorePosition = function() {
    var positionX = $gameTemp.positionX();
    var positionY = $gameTemp.positionY();
    this.event().setPosition(positionX, positionY);
    this.event().setDirection($gameTemp.direction());
    this._tx = positionX;
    this._ty = positionY;
};

Game_Actor.prototype.refreshImage = function() {
    this.event().setImage(this.characterName(), this.characterIndex());
};

TEW.MEMORY.gameActorPerformCollapse = Game_Actor.prototype.performCollapse;
Game_Actor.prototype.performCollapse = function() {
    TEW.MEMORY.gameActorPerformCollapse.call(this);
    this.requestEffect('bossCollapse');
};

TEW.MEMORY.gameActorIsBattleMember = Game_Actor.prototype.isBattleMember;
Game_Actor.prototype.isBattleMember = function() {
    if ($gamePartyTs.inBattle()) {
        return $gamePartyTs.members().contains(this);
    } else {
        return TEW.MEMORY.gameActorIsBattleMember.call(this);
    }
};

Game_Actor.prototype.setLastSpell = function(spellId: string) {
    this._lastSpell.setObject(spellId);
};

Game_Actor.prototype.onActionEnd = function() {
    Game_Battler.prototype.onActionEnd.call(this);
    this.event().setStepAnime(true);
};

Game_Actor.prototype.getTurnOrderSpriteName = function() {
    return this.name();
};

// TODO this is RMMV base implem, we need to change KO/death handling
Game_Actor.prototype.refresh = function() {
    Game_BattlerBase.prototype.refresh.call(this);
    if (this.hp === 0) {
        this.addState(this.deathStateId());
    } else {
        this.removeState(this.deathStateId());
    }
};

Game_Actor.prototype.updateLastBattleCommands = function(commandName: string, requirement: () => boolean) {
    this._lastBattleCommands.unshift({ name: commandName, canUse: requirement });
    if (this._lastBattleCommands.length > 4) { // TODO constant
        this._lastBattleCommands.pop();
    }
};

// unused RMMV base function
Game_Actor.prototype.hasNoWeapons = function() {
    return false;
};
