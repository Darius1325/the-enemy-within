// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import Game_Battler from "./Game_Battler";
import Game_Actor from "./Game_Actor";
import { $gameSelfSwitches } from "../../../rmmv/variables";
import { BattleOption, BattleTargetType } from "../../_types/enum";
import { BattleDecision, BattleTarget } from "../../_types/battlerAI";

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
    InputCharge = "inputCharge", // TODO
    Explore = "explore", // TODO remove?
    Target = "target",
    ProcessMove = "processMove",
    ProcessCharge = "processCharge",
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

BattleManager.canMove = function() {
    return this._subject && this._subject._moveCount > 0;
}

BattleManager.canRun = function() {
    return this._subject && (this._subject._actionCount > 0 && this._subject._moveCount > 0);
}

BattleManager.canAct = function() {
    return this._subject && this._subject._actionCount > 0;
}

BattleManager.canActOrMove = function() {
    return this._subject && (this._subject._actionCount > 0 || this._subject._moveCount > 0);
}

BattleManager.canInput = function() {
    return this._subject && (this._subject._actionCount > 0 || this._subject._moveCount > 0 || $gamePartyTs._advantages > 3);
}

BattleManager.spendMove = function() {
    if (this._subject) {
        this._subject.spendMovePoint();
    }
}

BattleManager.spendAction = function() {
    if (this._subject) {
        this._subject.spendActionPoint();
    }
}

BattleManager.setup = function(battleId: string, canEscape: boolean, canLose: boolean) {
    this.initMembers();
    this._canEscape = canEscape;
    this._canLose = canLose;
    console.log("Setup battle processing")
    $gameTroop.setup(battleId);
    $gameSwitches.update();
    $gameVariables.update();
    $gameSelector.performTransfer($gamePlayer.x, $gamePlayer.y);
    console.log("Battle start")
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
    this._decisionAction = null;
    this._decisionPointsBefore = 0;
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
    const ai: string = event.tparam('AI') || TEW.DATABASE.NPCS.SET[npcId].ai || "DEFAULT";
    $gameTroopTs.addEnemy(npcId, event, ai);
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
            case BattlePhase.InputCharge:
            case BattlePhase.Target:
                return true;
        }
    }
    return false;
};

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
        case BattlePhase.InputCharge:
            this.updateChargeTarget();
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
            this.updateMove(false);
            break;
        case BattlePhase.ProcessCharge:
            this.updateMove(true);
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
    switch (this._phase) {
        case Phase.Start:
        case Phase.Battlers:
            $gameSwitches.update();
            $gameVariables.update();
            return this.updateEventMain();
        case Phase.BattleEnd:
        default:
            return false;
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

BattleManager.setBattlePhase = function(battlePhase: BattlePhase) {
    this._battlePhase = battlePhase;
};

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

// TODO call once when battle starts
BattleManager.makeTurnOrder = function() {
    const playerInitRolls = $gamePartyTs.members()
        .map((actor, index) => ({
            battlerIndex: index,
            isActor: true,
            initiative: TEW.DICE.rollInitiative(actor),
            turnOrderSpriteName: actor.getTurnOrderSpriteName()
        }));
    const enemyInitRolls = $gameTroopTs.members()
        .map((enemy, index) => ({
            battlerIndex: index,
            isActor: false,
            initiative: TEW.DICE.rollInitiative(enemy),
            turnOrderSpriteName: enemy.getTurnOrderSpriteName()
        }));
    this._turnOrder = playerInitRolls.concat(enemyInitRolls)
        .sort((a: { initiative: number }, b: { initiative: number }) =>
                b.initiative - a.initiative
        );
};

BattleManager.turnIndex = function() {
    if (!this._turnOrder || !this._currentTurnOrder) {
        return -1;
    }
    return Math.max(this._turnOrder.length - this._currentTurnOrder.length - 1, 0);
}

BattleManager.updateStartPhase = function() {
    $gameTroop.increaseTurn(); // useless ?

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

// TODO
BattleManager.updateExplore = function() {
    this.refreshSubject();
    if ($gameSelector.isMoving()) {
        this.refreshMoveTiles();
    }
    var actor = $gameSelector.selectActor();
    if (actor) {
        this.selectActor(actor);
    }
};

/**
 * Display the move range of the battler under the selector: the active battler's range depends on the move option
 * previewed in the move menu (see previewMoveOption), other battlers show their walking range
 */
BattleManager.refreshMoveTiles = function() {
    const battler = $gameSelector.select();
    if (battler) {
        const option = battler === this._subject ? this._previewMoveOption : BattleOption.WALK;
        this.showMoveRange(battler, option);
    } else {
        $gameMap.clearTiles();
    }
};

BattleManager.previewMoveOption = function(option: BattleOption) {
    this._previewMoveOption = option;
    this.refreshMoveTiles();
};

/**
 * Highlight the tiles a battler can reach with a move option
 */
BattleManager.showMoveRange = function(battler: Game_Battler, option: BattleOption) {
    $gameMap.clearTiles();
    $gameMap.setMoveColor();
    switch (option) {
        case BattleOption.WALK:
            $gameMap.makeRange(battler.walkDistance(), battler.event());
            break;
        case BattleOption.RUN:
            $gameMap.makeRange(battler.runDistance(), battler.event());
            break;
        case BattleOption.CHARGE:
            $gameMap._flexibleMovement = false; // straight charge paths toward enemies
            $gameMap.makeRange(battler.maxChargeDistance(), battler.event());
            $gameMap._flexibleMovement = true;
            break;
        default:
            break; // No movement
    }
};

BattleManager.selectActor = function(actor: Game_Actor) {
    $gameSelector.updateSelect();
    this._subject = actor;
    this._subject.performSelect();
    this._subject.savePosition();
    this._previewMoveOption = BattleOption.WALK;
    $gameParty.setupTactics([this._subject]);
    this._battlePhase = BattlePhase.InputCommand;
};

// ----------------------
// Player targetting
// ----------------------
// A player command starts an incomplete decision (option, weapon, spell...), the targetting phase completes it with a target,
// then it is executed like any AI decision (see executeDecision).

BattleManager.startTargetting = function(decision: { option: BattleOption, weapon?: any, spell?: any, item?: any }) {
    this._pendingDecision = {
        initiator: this._subject,
        target: undefined,
        ...decision
    };
    this.supplementActionParameters(this._pendingDecision);
    $gameMap.clearAoeTiles();
    $gameSelector.performTransfer(this._subject.x, this._subject.y);
    switch (decision.option) {
        case BattleOption.WALK:
        case BattleOption.RUN:
            this.showMoveRange(this._subject, decision.option);
            this._battlePhase = BattlePhase.InputMove;
            break;
        case BattleOption.CHARGE:
            this.showMoveRange(this._subject, decision.option);
            this._battlePhase = BattlePhase.InputCharge;
            break;
        default:
            this._targettingAction = new Game_Action(this._subject, false, this._pendingDecision);
            this.refreshRedCells(this._targettingAction);
            this._battlePhase = BattlePhase.Target;
            break;
    }
};

BattleManager.confirmTarget = function(target: BattleTarget) {
    const decision = this._pendingDecision;
    decision.target = target;
    this._pendingDecision = null;
    this._targettingAction = null;
    $gameMap.clearAoeTiles();
    this._enemyWindow.close();
    this._infoWindow.close();
    this.executeDecision(decision);
};

BattleManager.cancelTargetting = function() {
    SoundManager.playCancel();
    this._pendingDecision = null;
    this._targettingAction = null;
    $gameMap.clearAoeTiles();
    this._enemyWindow.close();
    this._infoWindow.close();
    this.processCancel();
    this.previousSelect();
};

// Walk or run: select a free tile in range
BattleManager.updateSelect = function() {
    this.refreshEnemyWindow($gameSelector.select());
    if ($gameSelector.checkDestination(this._subject)) {
        SoundManager.playOk();
        this.confirmTarget({
            type: BattleTargetType.TILE,
            target: { x: $gameSelector.x, y: $gameSelector.y }
        });
    } else if ($gameSelector.isCancelled()) {
        this.cancelTargetting();
    }
};

// Charge: select an enemy in charge range
BattleManager.updateChargeTarget = function() {
    const selected = $gameSelector.select();
    this.refreshEnemyWindow(selected); // TODO change enemy window
    if ($gameSelector.isOk()) {
        if (selected && selected.isAlive() && selected.isEnemy() && $gameMap.isOnTiles($gameSelector.x, $gameSelector.y)) {
            SoundManager.playOk();
            this.confirmTarget({ type: BattleTargetType.BATTLER, target: selected });
        } else {
            SoundManager.playBuzzer();
        }
    } else if ($gameSelector.isCancelled()) {
        this.cancelTargetting();
    }
};

BattleManager.previousSelect = function() {
    this._battlePhase = BattlePhase.InputCommand;
    $gameSelector.updateSelect();
    this.refreshMoveTiles();
};

// Attacks and spells: select a battler in range (or a tile for area spells)
BattleManager.updateTarget = function() {
    const action = this._targettingAction;
    if ($gameSelector.isMoving()) {
        this.refreshTarget();
        this.refreshAoeCells(action);
    }
    if ($gameSelector.isOk()) {
        const x = $gameSelector.x;
        const y = $gameSelector.y;
        const selected = $gameSelector.select();
        if (!action.isInRange(x, y)) {
            SoundManager.playBuzzer();
        } else if (action.extractAoeData() > 0) {
            SoundManager.playOk();
            this.confirmTarget({ type: BattleTargetType.TILE, target: { x, y } });
        } else if (selected && selected.isAlive() && selected !== this._subject) {
            SoundManager.playOk();
            this.confirmTarget({ type: BattleTargetType.BATTLER, target: selected });
        } else {
            SoundManager.playBuzzer();
        }
    } else if ($gameSelector.isCancelled()) {
        this.cancelTargetting();
    }
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
    } else {
        this._enemyWindow.close();
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

        this._subject = this.battler();
        if (this._subject.isAlive()) {
            if (this._currentBattler.isActor) {
                this.updateStartPlayer();
            } else {
                this.updateStartEnemy();
            }
        } else { // remove battler from turn order
            this._turnOrder.splice(this.turnIndex(), 1);
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
    this._subject.onTurnStart();
    this.updateEnemyPhase();
};

BattleManager.updateEnemyPhase = function() {
    $gameTroop.setupTactics([this._subject]); // TODO optimization

    // Call custom decision algorithm
    const decisionAlgorithm = this._subject.getAI();
    const decision: BattleDecision = decisionAlgorithm(this._subject, $gameTroopTs.aliveMembers(), $gamePartyTs.aliveMembers());
    console.log("Decision: ", decision);

    this.executeDecision(decision);
};

/**
 * Resolve a decision taken by the active battler. Movements are then processed in the ProcessMove phase,
 * other actions end right away.
 */
BattleManager.executeDecision = function(decision: BattleDecision) {
    this.supplementActionParameters(decision);
    this._decisionPointsBefore = this._subject.actionAndMovePoints();
    this._decisionAction = new Game_Action(this._subject, false, decision);
    this._decisionAction.apply();
    $gameMap.clearTiles();
    if (this._decisionAction.hasPendingMove()) {
        this._battlePhase = BattlePhase.ProcessMove;
    } else {
        this.onDecisionEnd();
    }
};

/**
 * Move the subject along its decision path, one tile at a time
 */
BattleManager.updateDecisionMove = function() {
    if (this._subject.hasPendingMoveStep()) {
        this._subject.processMoveStep();
    } else {
        this._decisionAction.onMoveEnd();
        this.onDecisionEnd();
    }
};

/**
 * After a decision is resolved: an enemy is asked for another decision as long as it can act and its last decision
 * did something (spent points), otherwise its turn ends.
 */
BattleManager.onDecisionEnd = function() {
    const action = this._decisionAction;
    this._decisionAction = null;
    $gameMap.clearTiles();
    const isWait = action.option() === BattleOption.WAIT;
    if (this._subject.isEnemy()) {
        const hasSpentPoints = this._subject.actionAndMovePoints() < this._decisionPointsBefore;
        if (!isWait && hasSpentPoints && this._subject.isAlive() && this.canActOrMove()) {
            this.updateEnemyPhase();
            return;
        }
    } else if (!isWait && this._subject.isAlive() && this.canInput() && this._subject.canInput()) {
        // Players keep control until they wait or have nothing left to do
        this._previewMoveOption = BattleOption.WALK;
        $gameSelector.performTransfer(this._subject.x, this._subject.y);
        this._battlePhase = BattlePhase.InputCommand;
        return;
    }
    this.endAction();
};

BattleManager.updateMove = function(forceAttackAfterMove = false) {
    if (this._subject.isMoving()) {
        return;
    }
    if (this._decisionAction) {
        this.updateDecisionMove();
        return;
    }
    // Legacy per-tile moves (player input)
    const action = this._subject.currentMove();
    if (action && action.isMove()) {
        action.applyMove();
        this._subject.nextMove();
    }
    // TODO dead cases
    if (!action || !action.isMove()) {
        if (forceAttackAfterMove) {
            // TODO better handling with processAction ?
            const attack = Game_Action.chargeAttack(this._subject, $gameSelector.select(), true); // TODO find charge roll

            // TODO melee weapon or hit unarmed
            if (this._subject.isAdjacentTo($gameSelector)) {
                attack.resolveWeaponAttack(true);
            }
            this.endAction();
        } else if (this.canInput() && this._subject.canInput() && this._subject.isActor()) {
            this._battlePhase = BattlePhase.InputCommand;
        } else {
            this.endAction();
        }
    }
};

/**
 * Complete a decision with the subject's equipped weapon when it needs one and none was given
 */
BattleManager.supplementActionParameters = function(decision: BattleDecision) {
    const option = decision.option;
    if (!decision.weapon && (option === BattleOption.MELEE_ATTACK || option === BattleOption.RANGED_ATTACK || option === BattleOption.RELOAD)) {
        const weaponId = this._subject.equippedWeapon().id;
        decision.weapon = TEW.DATABASE.WEAPONS.MELEE_SET[weaponId] || TEW.DATABASE.WEAPONS.RANGED_SET[weaponId]; // TODO second hand
    } else if (option === BattleOption.USE_ITEM) {
        // TODO
    } else if (option === BattleOption.USE_SPELL) {
        // TODO
    }
};

BattleManager.setupAction = function() {
    console.log("BattleManager - setup action");
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
    this.setupCombat(this._action); // TODO duplicate? Already called when highlighting tiles
    var targets = this._action.makeTargets();
    // TODO is this duplicate code?
    // var gameFriends = this._action.friendsUnit();
    // var gameOpponents = this._action.opponentsUnit();
    // if (this._action.isForFriend()) {
    //     gameFriends.setupTactics([this._subject].concat(targets));
    //     gameOpponents.setupTactics([]);
    // } else {
    //     gameFriends.setupTactics([this._subject]);
    //     gameOpponents.setupTactics(targets);
    // }
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
    this._subject.onAllActionsEnd();
    this._logWindow.displayAutoAffectedStatus(this._subject);
    this._logWindow.displayCurrentState(this._subject);
    this._logWindow.displayRegeneration(this._subject);
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
    // this._logWindow.startAction(this._subject, this._action, this._targets);
};

BattleManager.updateAction = function() {
    this._targetIndex++;
    var target = this._targets[this._targetIndex];
    console.log("BattleManager - update action");
    console.log("Target index", this._targetIndex);
    console.log("Targets", this._targets);
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
    // TODO useless cases
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

// TODO $gamePartyTs & $gameTroopTs contain all battlers
// $gameParty & $gameTroop have been modified to store battlers involved by a single action
// so they change everytime an action is selected (TODO every frame? *vomits*)
// In the example of a melee attack, $gameParty would contain the active battler and $gameTroop all adjacent opponents
BattleManager.setupCombat = function(action) {
    var gameFriends = action.friendsUnit();
    gameFriends.setupTactics(action.combatFriendsUnit(this._subject));
    var gameOpponents = action.opponentsUnit();
    gameOpponents.setupTactics(action.combatOpponentsUnit(this._subject));
};

BattleManager.refreshRedCells = function(action) {
    $gameMap.clearTiles();
    $gameMap.clearAoeTiles();
    if (action.isDecision()) {
        action.updateRange();
        action.updateAoeRange();
    } else {
        BattleManager.setupCombat(action);
    }
    $gameMap.setActionColor(action);
    action.showRange();
    action.showAreaOfEffect();
};

BattleManager.refreshAoeCells = function(action) {
    if (action._aoeRange?.length > 0) { // If this action targets an AOE
        $gameMap.clearAoeTiles();
        if (action.isDecision()) {
            action.updateAoeRange();
        } else {
            action.updateAoeRangeLegacy(action.item(), this._subject);
        }
        action.showAreaOfEffect();
    }
};

BattleManager.setEventCallback = function(callback) {
    this._eventCallback = callback;
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
        if (this._canLose) {
            $gameParty.reviveBattleMembers();
            SceneManager.pop();
        } else {
            SceneManager.goto(Scene_Gameover);
        }
    } else {
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
