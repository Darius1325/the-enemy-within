// $PluginCompiler TEW_Combat.js

import { BattleOption, BattleTargetType } from "../../_types/enum";
import { BattleTarget } from "../../_types/battlerAI";
import { BattlePhase } from "./BattleManager";
import Game_Battler from "./Game_Battler";
import Game_Actor from "./Game_Actor";

// $StartCompilation

//-----------------------------------------------------------------------------
// BattleManager - player input
//
// Battle menu windows, map tiles display, and targetting phases: a player command starts an incomplete decision
// (option, weapon, spell...), the targetting phase completes it with a target, then it is executed like any AI decision
// (see BattleManager_Decisions.ts).

BattleManager.setCommandWindow = function(commandWindow) {
    this._commandWindow = commandWindow;
};

BattleManager.setActorWindow = function(actorWindow) {
    this._actorWindow = actorWindow;
};

BattleManager.setEnemyWindow = function(enemyWindow) {
    this._enemyWindow = enemyWindow;
};

BattleManager.closeCommand = function() {
    this._commandWindow.close();
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
// Move ranges
// ----------------------

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

// ----------------------
// Targetting
// ----------------------

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
    this.executeDecision(decision);
};

BattleManager.cancelTargetting = function() {
    SoundManager.playCancel();
    this._pendingDecision = null;
    this._targettingAction = null;
    $gameMap.clearAoeTiles();
    this._enemyWindow.close();
    this.processCancel();
    this.previousSelect();
};

// InputMove phase - walk or run: select a free tile in range
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

// InputCharge phase: select an enemy in charge range
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

// Target phase - attacks and spells: select a battler in range (or a tile for area spells)
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

/**
 * Back to the battle menu
 */
BattleManager.previousSelect = function() {
    this._battlePhase = BattlePhase.InputCommand;
    $gameSelector.updateSelect();
    this.refreshMoveTiles();
};

/**
 * Selector back on the active battler
 */
BattleManager.processCancel = function() {
    $gameMap.clearTiles();
    $gameSelector.performTransfer(this._subject.x, this._subject.y);
};

// ----------------------
// Display
// ----------------------

BattleManager.refreshEnemyWindow = function(selectedBattler: Game_Battler) {
    if (selectedBattler && selectedBattler.isAlive() && selectedBattler.isEnemy()) {
        this._enemyWindow.open(selectedBattler);
    } else {
        this._enemyWindow.close();
    }
};

BattleManager.refreshTarget = function() {
    const select = $gameSelector.select();
    if (select && select.isAlive()) {
        this._subject.turnTowardCharacter(select);
    } else {
        this._enemyWindow.close();
    }
};

/**
 * Highlight the range (and area of effect) of an action
 */
BattleManager.refreshRedCells = function(action) {
    $gameMap.clearTiles();
    $gameMap.clearAoeTiles();
    action.updateRange();
    action.updateAoeRange();
    $gameMap.setActionColor(action);
    action.showRange();
    action.showAreaOfEffect();
};

/**
 * Move the area of effect with the selector
 */
BattleManager.refreshAoeCells = function(action) {
    if (action._aoeRange?.length > 0) {
        $gameMap.clearAoeTiles();
        action.updateAoeRange();
        action.showAreaOfEffect();
    }
};
