// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";
import { $gameSelfSwitches } from "../../../rmmv/variables";
import { BattlePhase, Phase } from "./BattleManager";

// $StartCompilation

//-----------------------------------------------------------------------------
// BattleManager - turns
//
// Initiative order, start and end of each battler's turn.

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

/**
 * Index of the active battler in the turn order (used by Window_TurnOrder)
 */
BattleManager.turnIndex = function() {
    if (!this._turnOrder || !this._currentTurnOrder) {
        return -1;
    }
    return Math.max(this._turnOrder.length - this._currentTurnOrder.length - 1, 0);
};

/**
 * Battler designated by the current turn order entry
 */
BattleManager.battler = function() {
    if (this._currentBattler && this._battlerIndex >= 0) {
        return this._currentBattler.isActor
            ? $gamePartyTs.members()[this._battlerIndex]
            : $gameTroopTs.members()[this._battlerIndex];
    }
    return null;
};

BattleManager.updateStartPhase = function() {
    $gameTroop.increaseTurn(); // Turn count for troop events conditions
    this.makeTurnOrder();
    this._phase = Phase.Battlers;
    this.startNewTurn();
};

BattleManager.startNewTurn = function() {
    this._currentTurnOrder = JSON.parse(JSON.stringify(this._turnOrder)); // deep copy to pop battlers one by one
    $gameSelector.setTransparent(true);
    this._logWindow.startTurn();
    $gameSelector.updateSelect();
    this._battlePhase = BattlePhase.Start;
};

BattleManager.updateStart = function() {
    if (this._currentTurnOrder.length === 0) {
        // All battlers have played, reset turn order
        this._battlePhase = BattlePhase.TurnEnd;
        return;
    }
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
};

BattleManager.updateStartPlayer = function() {
    $gameSelector.performTransfer(this._subject.x, this._subject.y);
    $gameSelector.setTransparent(false);
    this._subject.onTurnStart();
    this.selectActor(this._subject);
};

BattleManager.updateStartEnemy = function() {
    $gameSelector.setTransparent(false);
    this._subject.onTurnStart();
    this.updateEnemyPhase();
};

/**
 * End the active battler's turn
 */
BattleManager.endAction = function() {
    $gameSelector.updateSelect();
    $gameMap.clearTiles();
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

/**
 * Actor events switch to their "damaged" page (self switch A) when KO
 */
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
