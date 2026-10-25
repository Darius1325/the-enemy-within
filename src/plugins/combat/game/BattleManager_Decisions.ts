// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import { BattleOption } from "../../_types/enum";
import { BattleDecision } from "../../_types/battlerAI";
import { BattlePhase } from "./BattleManager";

// $StartCompilation

//-----------------------------------------------------------------------------
// BattleManager - decisions
//
// Every action of a battle goes through a BattleDecision (see _types/battlerAI.ts):
//  - enemies get theirs from their AI (TEW_EnemyAI.ts) in updateEnemyPhase
//  - players build theirs through the battle menu and the targetting phases (BattleManager_Input.ts)
// executeDecision then resolves it with a Game_Action.

// ----------------------
// Action & move points of the active battler
// ----------------------

BattleManager.canMove = function() {
    return !!this._subject && this._subject.hasMovePoint();
};

BattleManager.canRun = function() {
    return !!this._subject && this._subject.hasActionPoint() && this._subject.hasMovePoint();
};

BattleManager.canAct = function() {
    return !!this._subject && this._subject.hasActionPoint();
};

BattleManager.canActOrMove = function() {
    return !!this._subject && (this._subject.hasActionPoint() || this._subject.hasMovePoint());
};

BattleManager.canInput = function() {
    return this.canActOrMove() || $gamePartyTs._advantages > 3;
};

BattleManager.spendMove = function() {
    if (this._subject) {
        this._subject.spendMovePoint();
    }
};

BattleManager.spendAction = function() {
    if (this._subject) {
        this._subject.spendActionPoint();
    }
};

// ----------------------
// Decisions
// ----------------------

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

/**
 * ProcessMove phase: move the subject along its decision path, one tile at a time
 */
BattleManager.updateMove = function() {
    if (this._subject.isMoving()) {
        return;
    }
    if (this._subject.hasPendingMoveStep()) {
        this._subject.processMoveStep();
    } else {
        this._decisionAction.onMoveEnd();
        this.onDecisionEnd();
    }
};

/**
 * After a decision is resolved:
 *  - an enemy is asked for another decision as long as it can act and its last decision did something (spent points)
 *  - a player gets the battle menu back as long as it can act
 * Otherwise, or after a WAIT decision, the battler's turn ends.
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
