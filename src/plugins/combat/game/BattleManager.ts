// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages tactics progress.

BattleManager.setup = function(troopId, canEscape, canLose) {
    this.initMembers();
    this._canEscape = canEscape;
    this._canLose = canLose;
    this.makeEscapeRatio();
    $gameTroop.setup(troopId);
    $gameSwitches.update();
    $gameVariables.update();
    var x = $gamePlayer.x;
    var y = $gamePlayer.y;
    $gameSelector.performTransfer(x, y);
    this._phase = 'startPhase';
};

BattleManager.initMembers = function() {
    this._phase = 'init';
    this._battlePhase = 'init';
    this._troopId = 0;
    this._canEscape = false;
    this._canLose = false;
    this._eventCallback = null;
    this._preemptive = false;
    this._surprise = false;
    this._actorIndex = -1;
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
    for (var i = 0; i < $gameMap.events().length; i++) {
        var event = $gameMap.events()[i];
        if (event.tparam('Actor') > 0) {
            this.addGameActor(event);
        } else if (event.tparam('Party') > 0) {
            this.addGameParty(event)
        } else if (event.tparam('Enemy') > 0) {
            this.addGameEnemy(event);
        } else if (event.tparam('Troop') > 0) {
            this.addGameTroop(event);
        } else {
            continue;
        }
    }
};

BattleManager.addGameActor = function(event) {
    var actorId = Number(event.tparam('Actor'));
    $gamePartyTs.addActor(actorId, event);
};

BattleManager.addGameParty = function(event) {
    var partyId = Number(event.tparam('Party'));
    var actorId = $gameParty.memberId(partyId);
    $gamePartyTs.addActor(actorId, event, true);
};

BattleManager.addGameEnemy = function(event) {
    var enemyId = Number(event.tparam('Enemy'));
    $gameTroopTs.addEnemy(enemyId, event);
};

BattleManager.addGameTroop = function(event) {
    var index = Number(event.tparam('Troop'));
    $gameTroopTs.addTroop(index, event);
};

BattleManager.setEventCallback = function(callback) {
    this._eventCallback = callback;
};

BattleManager.setLogWindow = function(logWindow) {
    this._logWindow = logWindow;
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

BattleManager.setSpriteset = function(spriteset) {
    this._spriteset = spriteset;
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
            case 'explore':
            case 'select':
            case 'target':
                return true;
        }
    }
    return false;
};

BattleManager.makeEscapeRatio = function() {
    this._escapeRatio = 0.5 * $gameParty.agility() / $gameTroop.agility();
};

BattleManager.update = function() {
    if (!this.isBusy() && !this.updateEvent()) {
        switch (this._phase) {
            case 'startPhase':
                this.updateStartPhase();
                break;
            case 'playerPhase':
                this.updatePlayerPhase();
                break;
            case 'enemyPhase':
                this.updatePhase();
                break;
            case 'battleEnd':
                this.updateBattleEnd();
                break;
        }
    }
};

BattleManager.updatePlayerPhase = function() {
    switch (this._battlePhase) {
        case 'explore':
            this.updateExplore();
            break;
        case 'select':
            this.updateSelect();
            break;
        case 'target':
            this.updateTarget();
            break;
        default:
            this.updatePhase();
            break;
    }
};

BattleManager.updatePhase = function() {
    switch (this._battlePhase) {
        case 'start':
            this.updateStart();
            break;
        case 'move':
            this.updateMove();
            break;
        case 'open':
            this.processAction();
            break;
        case 'action':
            this.updateAction();
            break;
        case 'close':
            this.updateClose();
            break;
        case 'turnEnd':
            this.updateTurnEnd();
            break;
    }
};

BattleManager.isBusy = function() {
    return ($gameMessage.isBusy() || this._spriteset.isBusy() ||
        this._logWindow.isBusy() || $gameSelector.isBusy());
};

BattleManager.updateEvent = function() {
    switch (this._phase) {
        case 'startPhase':
        case 'playerPhase':
        case 'enemyPhase':
            $gameSwitches.update();
            $gameVariables.update();
            if (this.isActionForced()) {
                this.processForcedAction();
                return true;
            } else {
                return this.updateEventMain();
            }
    }
};

BattleManager.isActionForced = function() {
    return false;
};

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

BattleManager.isPlayerPhase = function() {
    return this._phase === 'playerPhase';
};

BattleManager.isEnemyPhase = function() {
    return this._phase === 'enemyPhase';
};

BattleManager.isBattleEnd = function() {
    return this._phase === 'battleEnd';
};

BattleManager.isInputting = function() {
    return this._battlePhase === 'input';
};

BattleManager.isAborting = function() {
    return this._battlePhase === 'aborting';
};

BattleManager.isExploring = function() {
    return this._battlePhase === 'explore';
};

BattleManager.isTurnEnd = function() {
    return this._battlePhase === 'turnEnd';
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

BattleManager.allBattlerMembers = function() {
    return $gamePartyTs.members().concat($gameTroopTs.members());
};

BattleManager.actor = function() {
    return this._actorIndex >= 0 ? $gamePartyTs.members()[this._actorIndex] : null;
};

BattleManager.makePlayerOrders = function() {
    this._playersOrder = $gamePartyTs.restrictedMembers();
};

BattleManager.makeEnemyOrders = function() {
    this._enemiesOrder = $gameTroopTs.battleMembers();
};

BattleManager.updateStartPhase = function() {
    this.makePlayerOrders();
    $gameTroop.increaseTurn();
    $gameTroopTs.onTurnStart();
    $gamePartyTs.onTurnStart();
    $gameSelector.setTransparent(true);
    this._logWindow.startTurn();
    this._phase = 'playerPhase';
    this._battlePhase = 'start';
    $gameSelector.updateSelect();
    this.refreshMoveTiles();
};


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

BattleManager.refreshMoveTiles = function() {
    var select = $gameSelector.select();
    if (select) {
        $gameMap.setMoveColor();
        select.makeMoves();
    } else {
        $gameMap.clearTiles();
    }
};

BattleManager.selectActor = function(actor) {
    this._battlePhase = 'select';
    $gameSelector.updateSelect();
    this._subject = actor;
    this._subject.performSelect();
    this._actorIndex = this._subject.indexTs();
    this._subject.savePosition();
    $gameParty.setupTactics([this._subject]);
    this.refreshMoveTiles();
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
        this._battlePhase = 'move';
        $gameMap.clearTiles();
    }
    if ($gameSelector.isCancelled()) {
        SoundManager.playCancel();
        this.previousSelect();
    }
};

BattleManager.previousSelect = function() {
    this._battlePhase = 'explore';
    this._subject.restorePosition();
    var select = $gameSelector.select();
    this._subject = null;
    $gameSelector.updateSelect();
    this.refreshMoveTiles();
    var select = $gameSelector.select();
    if (select && select.isAlive()) {
        this._actorWindow.open(select);
    } else {
        this._actorWindow.close();
    }
};

BattleManager.processTarget = function() {
    this._battlePhase = 'target';
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
    this._battlePhase = 'input';
    this.processCancel();
    this._enemyWindow.close();
    this._infoWindow.close();
};

BattleManager.inputtingAction = function() {
    return this.actor() ? this.actor().inputtingAction() : null;
};

BattleManager.refreshSubject = function() {
    var select = $gameSelector.select();
    if ($gameSelector.isMoving()) {
        this.refreshActorWindow(select);
        this.refreshEnemyWindow(select);
    }
};

BattleManager.refreshActorWindow = function(select) {
    if (select && select.isAlive() && select.isActor()) {
        this._actorWindow.open(select);
    } else {
        this._actorWindow.close();
    }
};

BattleManager.refreshEnemyWindow = function(select) {
    if (select && select.isAlive() && select.isEnemy()) {
        this._enemyWindow.open(select);
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
    var select = $gameSelector.select();
    $gameMap.setMoveColor();
    if (select) {
        select.makeRange();
    }
    if (this._phase === 'playerPhase') {
        this.updateStartPlayer();
    } else {
        this.updateStartEnemy();
    }
};

BattleManager.updateStartPlayer = function() {
    this._subject = this._playersOrder.shift();
    if (this._subject) {
        this.restrictedPhase();
    } else if ($gamePartyTs.isPhase() || !TacticsSystem.autoTurnEnd) {
        $gameSelector.setTransparent(false);
        this._battlePhase = 'explore';
    } else {
        this._battlePhase = 'turnEnd';
    }
};

BattleManager.restrictedPhase = function() {
    this._battlePhase = 'move';
    this._subject.makeMoves();
    this._subject.makeActions();
    $gameParty.setupTactics([this._subject]);
    $gameMap.clearTiles();
    var x = this._subject.tx;
    var y = this._subject.ty;
    $gameSelector.performTransfer(x, y);
};

BattleManager.updateStartEnemy = function() {
    if ($gameTroopTs.isPhase()) {
        $gameSelector.setTransparent(false);
        this.updateEnemyPhase();
    } else {
        this._battlePhase = 'turnEnd';
    }
};

BattleManager.updateEnemyPhase = function() {
    this._battlePhase = 'move';
    this._subject = this._enemiesOrder.shift();
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
            if (this._subject.canInput() && this._subject.isActor()) {
                this._battlePhase = 'input';
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
    this._battlePhase = 'open';
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
    this._battlePhase = 'close';
};

BattleManager.updateClose = function() {
    $gameParty.setupTactics($gamePartyTs.members());
    $gameTroop.setupTactics($gameTroopTs.members());
    this._battlePhase = 'start';
    this._subject.onActionEnd();
    this._subject = null;
    this.refreshMoveTiles();
};

BattleManager.startAction = function() {
    this._battlePhase = 'action';
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
        this._battlePhase = 'input';
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

BattleManager.updateTurnEnd = function() {
    if (this._phase === 'playerPhase') {
        this.endPlayerPhase();
    } else {
        this.endEnemyPhase();
    }
};

BattleManager.endPlayerPhase = function() {
    this._phase = 'enemyPhase';
    this._battlePhase = 'start';
    $gameTroopTs.members().forEach(function(enemy) {
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
    this._phase = 'startPhase';
    this._battlePhase = 'start';
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
        } else if ($gameTroopTs.isAllDead() && TacticsSystem.clearAll) {
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
    this._phase = 'battleEnd';
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
    if (!this._escaped && $gameParty.isAllDead() || TacticsSystem.isDefeated) {
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

BattleManager.onAllTurnEnd = function() {
    this._battlePhase = 'turnEnd';
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
    $gameSwitches.setValue(TacticsSystem.battleStartId, false);
    $gamePartyTs.onClear();
    $gameTroopTs.onClear();
};
