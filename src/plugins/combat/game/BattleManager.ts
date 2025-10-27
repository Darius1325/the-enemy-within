// $PluginCompiler TEW_Combat.js

import Game_Battler from "./Game_Battler";
import Game_Actor from "./Game_Actor";
import { $gameSelfSwitches } from "../../../rmmv/variables";

interface BattleManager {
    _phase: Phase;
    _battlePhase: BattlePhase;
    
    _battlerIndex: number;
    
    _troopId: number;
    _canLose: boolean;
    _canEscape: boolean;
    
    _preemptive: boolean; // TODO Obsolete
    _surprise: boolean; // TODO Obsolete
}

// $StartCompilation

enum Phase {
    Init = "init",
    Start = "startPhase",
    Battlers = "battlersPhase",
    BattleEnd = "battleEnd"
}

export enum BattlePhase {
    Init = "init",
    Start = "start",
    InputMove = "inputMove",
    Explore = "explore", // TODO
    Target = "target",
    ProcessMove = "processMove",
    Action = "action",
    TurnEnd = "turnEnd",
    Open = "open",
    InputCommand = "inputCommand",
    Abort = "abort",
    Close = "close"
}

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages tactics progress.

// One action and one movement per turn unless advantages / specific talents are used
// Action can be used as a second movement
BattleManager.actionCount = 1;
BattleManager.moveCount = 1;

// Advantages accumulated by winning combat rounds or using the Observe action
// Common pool for all actors that can be spent to get better rolls or extra actions
BattleManager.partyAdvantages = 0;

BattleManager.moveMultiplier = 1; // 0 to switch weapons, 1 for walking, 2 for running, ? for charging

BattleManager.canMove = function() {
    return this.actionCount > 0 || this.moveCount > 0;
}

BattleManager.canRun = function() {
    return this.actionCount > 0 && this.moveCount > 0;
}

BattleManager.canAct = function() {
    return this.actionCount > 0;
}

BattleManager.canInput = function() {
    return this.actionCount > 0 || this.moveCount > 0 || this.partyAdvantages > 3;
}

BattleManager.setup = function(troopId: number, canEscape: boolean, canLose: boolean) {
    this.initMembers();
    this._canEscape = canEscape;
    this._canLose = canLose;
    this.makeEscapeRatio();
    $gameTroop.setup(troopId);
    $gameSwitches.update();
    $gameVariables.update();
    $gameSelector.performTransfer($gamePlayer.x, $gamePlayer.y);
    this._phase = Phase.Start;
};

BattleManager.initMembers = function() {
    this._phase = Phase.Init;
    this._battlePhase = BattlePhase.Init;
    this._troopId = 0;
    this._canEscape = false;
    this._canLose = false;
    this._eventCallback = null;
    this._preemptive = false;
    this._surprise = false;
    this._battlerIndex = -1;
    this._actionForcedBattler = null;
    this._actionBattlers = [];
    this._subject = null;
    this._action = null;
    this._targets = [];
    this._targetIndex = -1;
    this._logWindow = null;
    this._actorWindow = null;
    this._enemyWindow = null;
    this._spriteset = null;
    this._escapeRatio = 0;
    this._escaped = false;
    this._rewards = {};
    this._turnForced = false;
};

BattleManager.createGameObjects = function() {
    for (let i = 0; i < $gameMap.events().length; i++) {
        const event = $gameMap.events()[i];
        if (event.tparam('Actor') > 0) {
            this.addGameActor(event);
        } else if (event.tparam('Party') > 0) {
            this.addGameParty(event)
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
    $gameTroopTs.addEnemy(npcId, event);
};

BattleManager.addGameTroop = function(event) {
    const index = Number(event.tparam('Troop'));
    $gameTroopTs.addTroop(index, event);
};

BattleManager.setCommandWindow = function(commandWindow) {
    this._commandWindow = commandWindow;
};

BattleManager.setActorWindow = function(actorWindow) {
    this._actorWindow = actorWindow;
};

BattleManager.setEnemyWindow = function(enemyWindow) {
    this._enemyWindow = enemyWindow;
};

BattleManager.setInfoWindow = function(infoWindow) {
    this._infoWindow = infoWindow;
};

BattleManager.onEncounter = function() {
    this._preemptive = (Math.random() < this.ratePreemptive());
    this._surprise = (Math.random() < this.rateSurprise() && !this._preemptive);
};

BattleManager.ratePreemptive = function() {
    return $gameParty.ratePreemptive($gameTroop.agility());
};

BattleManager.rateSurprise = function() {
    return $gameParty.rateSurprise($gameTroop.agility());
};

BattleManager.startBattle = function() {
    $gamePartyTs.onBattleStart();
    $gameTroopTs.onBattleStart();
    $gameScreen.onBattleStart();
    $gameSystem.onBattleStart();
};

BattleManager.isActive = function() {
    if (!this._logWindow.isBusy()) {
        switch (this._battlePhase) {
            case BattlePhase.Explore:
            case BattlePhase.InputMove:
            case BattlePhase.Target:
                return true;
        }
    }
    return false;
};

// TODO remove
BattleManager.makeEscapeRatio = function() {
    this._escapeRatio = 0.5 * $gameParty.agility() / $gameTroop.agility();
};

BattleManager.update = function() {
    // console.log("BattleManager.update + phase :", this._phase);
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
        }
    }
};

BattleManager.updateBattlersPhase = function() {
    // TODO - if player / enemy
    switch (this._battlePhase) {
        case BattlePhase.Explore:
            this.updateExplore();
            break;
        case BattlePhase.InputMove:
            this.updateSelect();
            break;
        case BattlePhase.Target:
            this.updateTarget();
            break;
        default:
            this.updatePhase();
            break;
    }
};

BattleManager.updatePhase = function() {
    switch (this._battlePhase) {
        case BattlePhase.Start:
            this.updateStart();
            break;
        case BattlePhase.ProcessMove:
            this.updateMove();
            break;
        case BattlePhase.Open:
            this.processAction();
            break;
        case BattlePhase.Action:
            this.updateAction();
            break;
        case BattlePhase.Close:
            this.updateClose();
            break;
        case BattlePhase.TurnEnd:
            this.startNewTurn();
            break;
    }
};

BattleManager.isBusy = function() {
    return ($gameMessage.isBusy() || this._spriteset.isBusy() ||
        this._logWindow.isBusy() || $gameSelector.isBusy());
};

BattleManager.updateEvent = function() {
    $gameSwitches.update();
    $gameVariables.update();
    if (this.isActionForced()) {
        this.processForcedAction();
        return true;
    } else {
        return this.updateEventMain();
    }
};

BattleManager.isActionForced = function() {
    return false;
};

// RMMV function names are as useful as a hedgehog in a condom factory
// Wdym "updateEventMain" returns false, this makes less sense than the fucking Tenet movie
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

BattleManager.phase = function() {
    return this._phase;
};

BattleManager.battlePhase = function() {
    return this._battlePhase;
};

// BattleManager.isPlayerPhase = function() {
//     return this._phase === Phase.Battlers;
// };

// BattleManager.isEnemyPhase = function() {
//     return this._phase === Phase.Battlers;
// };

BattleManager.isBattleEnd = function() {
    return this._phase === Phase.BattleEnd;
};

BattleManager.isInputting = function() {
    return this._battlePhase === BattlePhase.InputCommand;
};

BattleManager.isAborting = function() {
    return this._battlePhase === BattlePhase.Abort;
};

BattleManager.isExploring = function() {
    return this._battlePhase === BattlePhase.Explore;
};

BattleManager.isTurnEnd = function() {
    return this._battlePhase === BattlePhase.TurnEnd;
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

BattleManager.allBattleMembers = function() {
    return $gamePartyTs.members().concat($gameTroopTs.members());
};

// TODO include enemies ?
BattleManager.actor = function() {
    return this._battlerIndex >= 0 ? $gamePartyTs.members()[this._battlerIndex] : null;
};

BattleManager.battler = function() {
    if (this._currentBattler && this._battlerIndex >= 0) {
        return this._currentBattler.isActor 
            ? $gamePartyTs.members()[this._battlerIndex]
            : $gameTroopTs.members()[this._battlerIndex]
    }
    return null;
};

 // TODO remove when managing enemies
BattleManager.makeEnemyOrders = function() {
    this._enemiesOrder = $gameTroopTs.battleMembers();
};

// TODO call once when battle starts
BattleManager.makeTurnOrder = function() {
    const playerInitRolls = $gamePartyTs.members()
        .map((actor, index) => ({
            battlerIndex: index,
            isActor: true,
            initiative: TEW.DICE.rollInitiative(actor)
        }));
    const enemyInitRolls = $gameTroopTs.members()
        .map((enemy, index) => ({
            battlerIndex: index,
            isActor: false,
            initiative: TEW.DICE.rollInitiative(enemy)
        }));
    this._turnOrder = playerInitRolls.concat(enemyInitRolls)
        .sort((a: { initiative: number }, b: { initiative: number }) =>
                b.initiative - a.initiative
        );
};

BattleManager.updateStartPhase = function() {
    $gameTroop.increaseTurn(); // useless ?

    this.makeEnemyOrders(); // TODO remove when managing enemies

    this.makeTurnOrder();

    // $gameTroopTs.onTurnStart(); // play enemy related events ?? Idk what this does
    // $gamePartyTs.onTurnStart(); // TODO change flow from here

    this._phase = Phase.Battlers;
    this.startNewTurn();
};

BattleManager.startNewTurn = function() {
    this._currentTurnOrder = JSON.parse(JSON.stringify(this._turnOrder)); // deep copy to pop actors one by one
    $gameSelector.setTransparent(true);
    this._logWindow.startTurn();
    $gameSelector.updateSelect(); // select active battler instead
    // this.refreshMoveTiles(); // SHT
    this._battlePhase = BattlePhase.Start;
}

BattleManager.updateExplore = function() {
    console.log("updateExplore");
    this.refreshSubject();
    if ($gameSelector.isMoving()) {
        console.log("updateExplore - refreshMoveTiles");
        this.refreshMoveTiles();
    }
    var actor = $gameSelector.selectActor();
    if (actor) {
        this.selectActor(actor);
    }
};

BattleManager.refreshMoveTiles = function() {
    console.log("refreshMoveTiles");
    var select = $gameSelector.select();
    if (select) {
        $gameMap.setMoveColor();
        console.log("refreshMoveTiles - makeMoves");
        select.makeMoves();
    } else {
        $gameMap.clearTiles();
    }
};

BattleManager.selectActor = function(actor: Game_Actor) {
    $gameSelector.updateSelect();
    this._subject = actor;
    this._subject.performSelect();
    this._subject.savePosition();
    // $gameParty.setupTactics([this._subject]);
    this._battlePhase = BattlePhase.InputCommand;
};

BattleManager.updateSelect = function() {
    var x = $gameSelector.x;
    var y = $gameSelector.y;
    this.refreshEnemyWindow($gameSelector.select());
    if ($gameSelector.isMoving()) {
        this._subject.refreshMovesAction(x, y);
    }
    if ($gameSelector.checkDestination(this._subject)) {
        SoundManager.playOk();
        this._battlePhase = BattlePhase.ProcessMove;
        $gameMap.clearTiles();
    }
    if ($gameSelector.isCancelled()) {
        SoundManager.playCancel();
        this.previousSelect(); // TODO go back to previous menu instead
    }
};

// TODO should be removed
BattleManager.previousSelect = function() {
    console.log("previousSelect");
    this._battlePhase = BattlePhase.Explore;
    this._subject.restorePosition();
    this._subject = null;
    $gameSelector.updateSelect();
    this.refreshMoveTiles();
    const select = $gameSelector.select();
    if (select && select.isAlive()) {
        this._actorWindow.open(select);
    } else {
        this._actorWindow.close();
    }
};

BattleManager.processTarget = function() {
    this._battlePhase = BattlePhase.Target;
    $gameSelector.updateSelect();
};

BattleManager.updateTarget = function() {
    if ($gameSelector.isMoving()) {
        this.refreshTarget();
    }
    var action = this.inputtingAction();
    var index = $gameSelector.selectTarget(action);
    if (index >= 0) {
        action.setTarget(index);
        this.setupAction();
    }
    if ($gameSelector.isCancelled()) {
        SoundManager.playCancel();
        this.previousTarget();
    }
};

BattleManager.previousTarget = function() {
    SoundManager.playCancel();
    this._battlePhase = BattlePhase.InputCommand;
    this.processCancel();
    this._enemyWindow.close();
    this._infoWindow.close();
};

BattleManager.inputtingAction = function() {
    return this.actor() ? this.actor().inputtingAction() : null;
};

BattleManager.refreshSubject = function() {
    const selectedBattler = $gameSelector.select();
    if ($gameSelector.isMoving()) {
        this.refreshActorWindow(selectedBattler);
        this.refreshEnemyWindow(selectedBattler);
    }
};

BattleManager.refreshActorWindow = function(selectedBattler: Game_Battler) {
    if (selectedBattler && selectedBattler.isAlive() && selectedBattler.isActor()) {
        this._actorWindow.open(selectedBattler);
    } else {
        this._actorWindow.close();
    }
};

BattleManager.refreshEnemyWindow = function(selectedBattler: Game_Battler) {
    if (selectedBattler && selectedBattler.isAlive() && selectedBattler.isEnemy()) {
        this._enemyWindow.open(selectedBattler);
    } else {
        this._enemyWindow.close();
    }
};

BattleManager.refreshTarget = function() {
    var select = $gameSelector.select();
    if (select && select.isAlive()) {
        this._subject.turnTowardCharacter(select);
        this.refreshInfo();
    } else {
        this._enemyWindow.close();
        this._infoWindow.close();
    }
};

BattleManager.refreshInfo = function() {
    var select = $gameSelector.select();
    this.refreshEnemyWindow(select);
    var action = this.inputtingAction();
    if (action.isTargetValid(select)) {
        this._infoWindow.open(select);
    } else {
        this._infoWindow.close();
    }
};

BattleManager.closeCommand = function() {
    this._commandWindow.close();
};

BattleManager.updateStart = function() {
    // refresh move tiles -> DO NOT DELETE !!!! ?
    // var select = $gameSelector.select();
    // $gameMap.setMoveColor();
    // if (select) {
    //     select.makeRange();
    // }

    if (this._currentTurnOrder.length === 0) {
        // All battlers have played, reset turn order
        this._battlePhase = BattlePhase.TurnEnd;
    } else {
        this._currentBattler = this._currentTurnOrder.shift();
        this._battlerIndex = this._currentBattler.battlerIndex;

        this.moveCount = 1;
        this.actionCount = 1;

        this._subject = this.battler();
        if (this._subject.isAlive()) {
            if (this._currentBattler.isActor) {
                this.updateStartPlayer();
            } else {
                this.updateStartEnemy();
            }
        }
    }
};

// TODO trigger battle menu here?
// We need to decide when to trigger the explore phase (maybe just cancel from the battle menu?)
BattleManager.updateStartPlayer = function() {
    $gameSelector.performTransfer(this._subject.x, this._subject.y);
    $gameSelector.setTransparent(false);
    this._subject.onTurnStart();
    this.selectActor(this._subject);
};

// Only for 'restricted' players (confusion move)
// BattleManager.restrictedPhase = function() {
//     this._battlePhase = 'move';
//     this._subject.makeMoves(); // only for AI?
//     this._subject.makeActions();
//     $gameParty.setupTactics([this._subject]);
//     $gameMap.clearTiles();
//     var x = this._subject.tx;
//     var y = this._subject.ty;
//     $gameSelector.performTransfer(x, y);
// };

BattleManager.updateStartEnemy = function() {
    $gameSelector.setTransparent(false);
    this.updateEnemyPhase();
    // this._battlePhase = BattlePhase.TurnEnd;
};

BattleManager.updateEnemyPhase = function() {
    this._battlePhase = BattlePhase.ProcessMove;
    this._subject = $gameTroopTs.members()[this._battlerIndex];
    $gameTroop.setupTactics([this._subject]);
    this._subject.makeMoves();
    this._subject.findMoves();
    this._subject.makeActions();
    $gameMap.clearTiles();
    if (this._subject.isPattern()) {
        var x = this._subject.tx;
        var y = this._subject.ty;
        $gameSelector.performTransfer(x, y);
    }
};

BattleManager.updateMove = function() {
    if (!this._subject.isMoving()) {
        var action = this._subject.currentMove();
        if (action && action.isMove()) {
            action.applyMove();
            this._subject.nextMove();
        }
        if (!action || !action.isMove()){
            if (this.canInput() && this._subject.canInput() && this._subject.isActor()) {
                this._battlePhase = BattlePhase.InputCommand;
            } else {
                this.setupAction();
            }
        }
    }
};

BattleManager.setupAction = function() {
    $gameTemp.setCancel(false);
    this._action = this._subject.currentAction();
    if (this._action && this._action.isValid()) {
        // Make Targets here before process action.
        this.setupTarget();
    }
    this._battlePhase = BattlePhase.Open;
    this._actorWindow.close();
    this._enemyWindow.close();
    this._infoWindow.close();
};

BattleManager.setupTarget = function() {
    this.setupCombat(this._action);
    var targets = this._action.makeTargets();
    var gameFriends = this._action.friendsUnit();
    var gameOpponents = this._action.opponentsUnit();
    if (this._action.isForFriend()) {
        gameFriends.setupTactics([this._subject].concat(targets));
        gameOpponents.setupTactics([]);
    } else {
        gameFriends.setupTactics([this._subject]);
        gameOpponents.setupTactics(targets);
    }
    this._targetIndex = -1;
    this._targets = targets;
    this.setDirectionTargets();
};

BattleManager.processAction = function() {
    var subject = this._subject;
    var action = subject.currentAction();
    this._action = action;
    if (action) {
        action.prepare();
        if (action.isValid()) {
            this.startAction();
        } else {  // last action
            this.endAction();
        }
    } else {
        this.endAction();
    }
};

BattleManager.endAction = function() {
    $gameSelector.updateSelect();
    $gameMap.clearTiles();
    $gameTemp.setCancel(true);
    var subject = this._subject;
    subject.onAllActionsEnd();
    this._logWindow.displayAutoAffectedStatus(subject);
    this._logWindow.displayCurrentState(subject);
    this._logWindow.displayRegeneration(subject);
    this._battlePhase = BattlePhase.Close;
};

BattleManager.updateClose = function() {
    $gameParty.setupTactics($gamePartyTs.members());
    $gameTroop.setupTactics($gameTroopTs.members());
    this._battlePhase = BattlePhase.Start;
    this._subject.onActionEnd();
    this._subject = null;
    this.refreshMoveTiles();
    this.changeDamagedSprites();
};

BattleManager.changeDamagedSprites = function() {
    for (let i = 0; i < $gameMap.events().length; i++) {
        const event = $gameMap.events()[i];
        const actorId = Number(event.tparam('Actor'));
        if (actorId > 0) {
            const actor = $gameActors.actor(actorId);
            $gameSelfSwitches.setValue([event._mapId, event._eventId, 'A'], actor.hp <= 0);
        }
    }
};

BattleManager.startAction = function() {
    this._battlePhase = BattlePhase.Action;
    this._subject.useItem(this._action.item());
    this._action.applyGlobal();
    this._logWindow.startAction(this._subject, this._action, this._targets);
};

BattleManager.updateAction = function() {
    this._targetIndex++;
    var target = this._targets[this._targetIndex];
    if (target) {
        this.turnTowardCharacter(target);
        $gameSelector.performTransfer(target.x, target.y);
        this.invokeAction(this._subject, target);
    } else {
        this._logWindow.endAction(this._subject);
        this.nextAction();
    }
};

BattleManager.setDirectionTargets = function() {
    this._targets.forEach(function(target) {
        this.turnTowardCharacter(target);
    }, this);
};

BattleManager.nextAction = function() {
    if (this._subject.canNextAction()) {
        this.processCancel();
        this._enemyWindow.close();
        this._infoWindow.close();
        this._actorWindow.open();
        this._battlePhase = BattlePhase.InputCommand;
    } else {
        this.processAction();
    }
};

BattleManager.invokeAction = function(subject, target) {
    this._logWindow.push('pushBaseLine');
    if (Math.random() < this._action.itemCnt(target)) {
        this.invokeCounterAttack(subject, target);
    } else if (Math.random() < this._action.itemMrf(target)) {
        this.invokeMagicReflection(subject, target);
    } else {
        this.invokeNormalAction(subject, target);
    }
    subject.setLastTarget(target);
    this._logWindow.push('popBaseLine');
};

BattleManager.invokeNormalAction = function(subject, target) {
    // var realTarget = this.applySubstitute(target);
    this._action.apply(target);
    this._logWindow.displayActionResults(subject, target);
};

BattleManager.invokeCounterAttack = function(subject, target) {
    var action = new Game_Action(target);
    action.setAttack();
    action.apply(subject);
    this._logWindow.displayCounter(target);
    this._logWindow.displayActionResults(target, subject);
};

BattleManager.invokeMagicReflection = function(subject, target) {
    this._logWindow.displayReflection(target);
    this._action.apply(subject);
    this._logWindow.displayActionResults(subject, subject);
};

// BattleManager.updateTurnEnd = function() {
//     // reload all battlers
    

//     // lets do it again :)
//     this._battlePhase = BattlePhase.Start;
// };

BattleManager.endPlayerPhase = function() {
    // this._phase = Phase.EnemyPhase;
    this._battlePhase = BattlePhase.Start;
    $gameTroopTs.members().forEach(function(enemy) { // TODO fuck this
        enemy.onTurnEnd();
        this._logWindow.displayAutoAffectedStatus(enemy);
        this._logWindow.displayRegeneration(enemy);
    }, this);
    $gamePartyTs.onTurnStart();
    $gameSelector.setTransparent(true);
    $gameSelector.savePosition();
    $gameMap.clearTiles();
    this.makeEnemyOrders();
};

BattleManager.endEnemyPhase = function() {
    this._phase = Phase.Start;
    this._battlePhase = BattlePhase.Start;
    $gamePartyTs.members().forEach(function(actor) {
        actor.onTurnEnd();
        this._logWindow.displayAutoAffectedStatus(actor);
        this._logWindow.displayRegeneration(actor);
    }, this);
    $gameSelector.restorePosition();
    $gameSelector.setTransparent(false);
    $gameMap.clearTiles();
};

BattleManager.setupCombat = function(action) {
    var gameFriends = action.friendsUnit();
    gameFriends.setupTactics(action.combatFriendsUnit(this._subject));
    var gameOpponents = action.opponentsUnit();
    gameOpponents.setupTactics(action.combatOpponentsUnit(this._subject));
};

BattleManager.refreshRedCells = function(action) {

BattleManager.setEventCallback = function(callback) {
    this._eventCallback = callback;
};
    $gameMap.clearTiles();
    BattleManager.setupCombat(action);
    $gameMap.setActionColor(action);
    action.showRange();
};

BattleManager.turnTowardCharacter = function(character) {
    this._subject.turnTowardCharacter(character);
    character.turnTowardCharacter(this._subject);
};

BattleManager.processCancel = function() {
    $gameMap.clearTiles();
    var x = this._subject.x;
    var y = this._subject.y;
    $gameSelector.performTransfer(x, y);
};

BattleManager.checkBattleEnd = function() {
    if (this._phase) {
        if ($gamePartyTs.isAllDead()) {
            this.processDefeat();
            return true;
        } else if ($gameTroopTs.isAllDead() && TEW.COMBAT.SYSTEM.clearAll) {
            this.processVictory();
            return true;
        }
    }
    return false;
};

BattleManager.processVictory = function() {
    if (this._subject) {
        this._logWindow.endAction(this._subject);
    }
    this._actorWindow.close();
    this._enemyWindow.close();
    this._infoWindow.close();
    $gameSelector.setTransparent(true);
    $gameParty.setupTactics($gamePartyTs.members());
    $gameTroop.setupTactics($gameTroopTs.members());
    $gameParty.removeBattleStates();
    $gameParty.performVictory();
    this.playVictoryMe();
    this.replayBgmAndBgs();
    this.makeRewards();
    this.displayVictoryMessage();
    this.displayRewards();
    this.gainRewards();
    this.endBattle(0);
};

BattleManager.processDefeat = function() {
    if (this._subject) {
        this._logWindow.endAction(this._subject);
    }
    $gameSelector.setTransparent(true);
    $gameParty.setupTactics($gamePartyTs.members());
    $gameTroop.setupTactics($gameTroopTs.members());
    this.displayDefeatMessage();
    this.playDefeatMe();
    if (this._canLose) {
        this.replayBgmAndBgs();
    } else {
        AudioManager.stopBgm();
    }
    this.endBattle(2);
};

BattleManager.endBattle = function(result) {
    this.closeCommand();
    this._phase = Phase.BattleEnd;
    $gameMap.clearTiles();
    if (this._eventCallback) {
        this._eventCallback(result);
    }
    if (result === 0) {
        $gameSystem.onBattleWin();
    } else if (this._escaped) {
        $gameSystem.onBattleEscape();
    }
};

BattleManager.playVictoryMe = function() {
    AudioManager.playMe($gameSystem.victoryMe());
};

BattleManager.playDefeatMe = function() {
    AudioManager.playMe($gameSystem.defeatMe());
};

// TODO Obsolete
BattleManager.makeRewards = function() {
    this._rewards = {};
    this._rewards.gold = $gameTroop.goldTotal();
    this._rewards.exp = $gameTroop.expTotal();
    this._rewards.items = $gameTroop.makeDropItems();
};

BattleManager.displayVictoryMessage = function() {
    $gameMessage.add(TextManager.victory.format($gameParty.name()));
};

BattleManager.displayDefeatMessage = function() {
    $gameMessage.add(TextManager.defeat.format($gameParty.name()));
};

BattleManager.displayRewards = function() {
    this.displayExp();
    this.displayGold();
    this.displayDropItems();
};

BattleManager.displayExp = function() {
    var exp = this._rewards.exp;
    if (exp > 0) {
        var text = TextManager.obtainExp.format(exp, TextManager.exp);
        $gameMessage.add('\\.' + text);
    }
};

BattleManager.displayGold = function() {
    var gold = this._rewards.gold;
    if (gold > 0) {
        $gameMessage.add('\\.' + TextManager.obtainGold.format(gold));
    }
};

BattleManager.displayDropItems = function() {
    var items = this._rewards.items;
    if (items.length > 0) {
        $gameMessage.newPage();
        items.forEach(function(item) {
            $gameMessage.add(TextManager.obtainItem.format(item.name));
        });
    }
};

BattleManager.gainRewards = function() {
    this.gainExp();
    this.gainGold();
    this.gainDropItems();
};

BattleManager.gainExp = function() {
    var exp = this._rewards.exp;
    $gameParty.allMembers().forEach(function(actor) {
        actor.gainExp(exp);
    });
};

BattleManager.gainGold = function() {
    $gameParty.gainGold(this._rewards.gold);
};

BattleManager.gainDropItems = function() {
    var items = this._rewards.items;
    items.forEach(function(item) {
        $gameParty.gainItem(item, 1);
    });
};

BattleManager.updateBattleEnd = function() {
    if (!this._escaped && $gameParty.isAllDead() || TEW.COMBAT.SYSTEM.isDefeated) {
        console.log("END OF BATTLE : YOU LOSE !");
        if (this._canLose) {
            $gameParty.reviveBattleMembers();
            SceneManager.pop();
        } else {
            SceneManager.goto(Scene_Gameover);
        }
    } else {
        console.log("END OF BATTLE : YOU WIN !");
        SceneManager.pop();
    }
    this._phase = null;
    this.terminate();
};

// TODO Obsolete
BattleManager.onAllTurnEnd = function() {
    this._battlePhase = BattlePhase.TurnEnd;
    $gamePartyTs.onAllTurnEnd();
};

BattleManager.terminate = function() {
    $gameScreen.onBattleEnd();
    $gamePlayer.setThrough(false);
    $gamePlayer.refresh();
    $gamePartyTs.onBattleEnd();
    $gameTroopTs.onBattleEnd();
};

BattleManager.clear = function() {
    $gameSwitches.setValue(TEW.COMBAT.SYSTEM.battleStartId, false);
    $gamePartyTs.onClear();
    $gameTroopTs.onClear();
};
