// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import { BattleOption } from "../../_types/enum";

// $StartCompilation

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages tactics progress. Split into several files:
//  - BattleManager.ts: phases, setup, main update loop, state accessors and RMMV overrides needed by the engine
//  - BattleManager_Turns.ts: initiative order and turn start of each battler
//  - BattleManager_Decisions.ts: execution of battle decisions (AI and player), action/move points
//  - BattleManager_Input.ts: player command input, targetting and map tiles display
//  - BattleManager_End.ts: victory, defeat and battle termination

export enum Phase {
    Init = "init",
    Start = "startPhase",
    Battlers = "battlersPhase",
    BattleEnd = "battleEnd",
    Aborting = "aborting" // Set by RMMV's BattleManager.abort (e.g. "Abort Battle" event command)
}

export enum BattlePhase {
    Init = "init",
    Start = "start", // Next battler in the turn order
    InputCommand = "inputCommand", // Player chooses a command in the battle menu
    InputMove = "inputMove", // Player chooses where to walk/run
    InputCharge = "inputCharge", // Player chooses an enemy to charge
    Target = "target", // Player chooses the target of an attack/spell
    ProcessMove = "processMove", // A decision is moving its subject
    Close = "close", // The active battler's turn is over
    TurnEnd = "turnEnd" // All battlers have played
}

BattleManager.setup = function(battleId: string, canEscape: boolean, canLose: boolean) {
    this.initMembers();
    this._canEscape = canEscape;
    this._canLose = canLose;
    $gameTroop.setup(battleId);
    $gameSelector.performTransfer($gamePlayer.x, $gamePlayer.y);
    this._phase = Phase.Start;
};

BattleManager.initMembers = function() {
    this._phase = Phase.Init;
    this._battlePhase = BattlePhase.Init;
    this._canEscape = false;
    this._canLose = false;
    this._eventCallback = null;
    this._escaped = false;
    this._turnForced = false;
    this._logWindow = null;
    this._commandWindow = null;
    this._actorWindow = null;
    this._enemyWindow = null;
    this._spriteset = null;
    // Turn order
    this._turnOrder = [];
    this._currentTurnOrder = [];
    this._currentBattler = null;
    this._battlerIndex = -1;
    this._subject = null;
    // Decisions
    this._decisionAction = null;
    this._decisionPointsBefore = 0;
    // Player input
    this._pendingDecision = null;
    this._targettingAction = null;
    this._previewMoveOption = BattleOption.WALK;
};

BattleManager.createGameObjects = function() {
    for (let i = 0; i < $gameMap.events().length; i++) {
        const event = $gameMap.events()[i];
        if (event.tparam('Actor') > 0) {
            this.addGameActor(event);
        } else if (event.tparam('Party') > 0) {
            this.addGameParty(event);
        } else if (event.tparam('NPC')) {
            this.addGameEnemy(event);
        } else if (event.tparam('Troop') > 0) {
            this.addGameTroop(event);
        }
    }
};

BattleManager.addGameActor = function(event) {
    const actorId = Number(event.tparam('Actor'));
    $gamePartyTs.addActor(actorId, event);
};

BattleManager.addGameParty = function(event) {
    const partyId = Number(event.tparam('Party'));
    const actorId = $gameParty.memberId(partyId);
    $gamePartyTs.addActor(actorId, event, true);
};

BattleManager.addGameEnemy = function(event) {
    const npcId : string = event.tparam('NPC');
    const ai: string = event.tparam('AI') || TEW.DATABASE.NPCS.SET[npcId].ai || "DEFAULT";
    $gameTroopTs.addEnemy(npcId, event, ai);
};

BattleManager.addGameTroop = function(event) {
    const index = Number(event.tparam('Troop'));
    $gameTroopTs.addTroop(index, event);
};

BattleManager.startBattle = function() {
    $gamePartyTs.onBattleStart();
    $gameTroopTs.onBattleStart();
    $gameScreen.onBattleStart();
    $gameSystem.onBattleStart();
};

// ----------------------
// Main loop
// ----------------------

BattleManager.update = function() {
    if (!this.isBusy() && !this.updateEvent()) {
        switch (this._phase) {
            case Phase.Start:
                this.updateStartPhase();
                break;
            case Phase.Battlers:
                this.updateBattlersPhase();
                break;
            case Phase.BattleEnd:
                this.updateBattleEnd();
                break;
            case Phase.Aborting:
                this.processAbort();
                break;
        }
    }
};

BattleManager.updateBattlersPhase = function() {
    switch (this._battlePhase) {
        case BattlePhase.Start:
            this.updateStart();
            break;
        case BattlePhase.InputMove:
            this.updateSelect();
            break;
        case BattlePhase.InputCharge:
            this.updateChargeTarget();
            break;
        case BattlePhase.Target:
            this.updateTarget();
            break;
        case BattlePhase.ProcessMove:
            this.updateMove();
            break;
        case BattlePhase.Close:
            this.updateClose();
            break;
        case BattlePhase.TurnEnd:
            this.startNewTurn();
            break;
        // InputCommand: handled by Scene_Battle's command windows
    }
};

BattleManager.isBusy = function() {
    return ($gameMessage.isBusy() || this._spriteset.isBusy() ||
        this._logWindow.isBusy() || $gameSelector.isBusy());
};

BattleManager.updateEvent = function() {
    switch (this._phase) {
        case Phase.Start:
        case Phase.Battlers:
            return this.updateEventMain();
        default:
            return false;
    }
};

// Returns true while a battle event (troop or map) is running, or when the battle has ended
BattleManager.updateEventMain = function() {
    $gameTroop.updateInterpreter();
    $gameParty.requestMotionRefresh();
    if ($gameTroop.isEventRunning() || this.checkBattleEnd()) {
        return true;
    }
    $gameTroop.setupBattleEvent();
    if ($gameTroop.isEventRunning() || SceneManager.isSceneChanging()) {
        return true;
    }
    if ($gameMap.isEventRunning()) {
        return true;
    }
    return false;
};

// ----------------------
// State accessors
// ----------------------

BattleManager.phase = function() {
    return this._phase;
};

BattleManager.battlePhase = function() {
    return this._battlePhase;
};

BattleManager.allBattleMembers = function() {
    return $gamePartyTs.members().concat($gameTroopTs.members());
};

/**
 * Active battler if it is an actor
 */
BattleManager.actor = function() {
    return this._subject && this._subject.isActor() ? this._subject : null;
};

// Map selector and touch input are only active while the player targets something
BattleManager.isActive = function() {
    if (!this._logWindow.isBusy()) {
        switch (this._battlePhase) {
            case BattlePhase.InputMove:
            case BattlePhase.InputCharge:
            case BattlePhase.Target:
                return true;
        }
    }
    return false;
};

// ----------------------
// RMMV overrides used by the engine (windows, sprites, interpreter)
// ----------------------

BattleManager.isBattleEnd = function() {
    return this._phase === Phase.BattleEnd;
};

BattleManager.isInputting = function() {
    return this._battlePhase === BattlePhase.InputCommand;
};

BattleManager.isAborting = function() {
    return this._phase === Phase.Aborting;
};

BattleManager.isTurnEnd = function() {
    return this._battlePhase === BattlePhase.TurnEnd;
};

BattleManager.isActionForced = function() {
    return false;
};

BattleManager.canEscape = function() {
    return this._canEscape;
};

BattleManager.canLose = function() {
    return this._canLose;
};

BattleManager.isEscaped = function() {
    return this._escaped;
};

BattleManager.setEventCallback = function(callback) {
    this._eventCallback = callback;
};
