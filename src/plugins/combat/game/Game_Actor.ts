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
    this._actionsButton = [];
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

Game_Actor.prototype.actionsButton = function() {
    return this._actionsButton;
};

Game_Actor.prototype.canActionButton = function() {
    return this.checkEventTriggerThere();
};

Game_Actor.prototype.checkEventTriggerThere = function() {
    this._actionsButton = []
    for (var d = 8; d >= 2; d -= 2) {
        var x1 = this.x;
        var y1 = this.y;
        var x2 = $gameMap.roundXWithDirection(x1, d);
        var y2 = $gameMap.roundYWithDirection(y1, d);
        this.checkEventsTriggerHere(x2, y2);
    }
    return this._actionsButton.length > 0;
};

Game_Actor.prototype.checkEventsTriggerHere = function(x, y) {
    if (!$gameMap.isEventRunning()) {
        var events = $gameMap.eventsXy(x, y);
        for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (event.page()) {
                var list = event.list();
                if (event.isTriggerIn([0]) && list && list.length > 1) {
                    this._actionsButton.push(event.eventId());
                }
            }
        }
    }
};

Game_Actor.prototype.checkEventTriggerTouch = function() {
    if (!$gameMap.isEventRunning()) {
        return $gameMap.eventsRangeXy(this.x, this.y).some(function(event) {
            if (event.isTriggerIn([1,2])) {
                event.start();
                return true;
            }
            return false;
        });
    }
    return false;
};

TEW.MEMORY.gameActorInputtingAction = Game_Actor.prototype.inputtingAction;
Game_Actor.prototype.inputtingAction = function() {
    if ($gamePartyTs.inBattle()) {
        return this.action(this._actionIndex);
    } else {
        return TEW.MEMORY.gameActorInputtingAction.call(this);
    }
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

Game_Actor.prototype.makeMoves = function() {
    Game_Battler.prototype.makeMoves.call(this);
    if (!this.isRestricted() && this.isAutoBattle()) {
        this.autoMoves();
    }
};

Game_Actor.prototype.autoMoves = function() {
    this.makeAutoBattleMoves();
    this.makeShortestMoves();
};

Game_Actor.prototype.makeAutoBattleMoves = function() {
    var saveX = this.tx;
    var saveY = this.ty;
    $gameMap.makeRange(16, this.event());
    var maxValue = Number.MIN_VALUE;
    for (var i = 0; i < $gameMap.tiles().length; i++) {
        var tile = $gameMap.tiles()[i];
        this._tx = $gameMap.positionTileX(tile);
        this._ty = $gameMap.positionTileY(tile);
        var list = this.makeActionList();
        var value = 0;
        for (var j = 0; j < list.length; j++) {
            value += list[j].evaluate();
        }
        if (value > maxValue) {
            maxValue = value;
            saveX = this.tx;
            saveY = this.ty;
        }
    }
    $gameMap.clearTiles();
    this._tx = saveX;
    this._ty = saveY;
};

Game_Actor.prototype.onActionEnd = function() {
    Game_Battler.prototype.onActionEnd.call(this);
    this.event().setStepAnime(true);
};
