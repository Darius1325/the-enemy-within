// #region ============================== import ============================== //
var Imported = Imported || {};
Imported.TEW_Combat = true;
var TEW = TEW || {};
TEW.COMBAT = TEW.COMBAT || {};
// TODO remove
/*:
 * @plugindesc A Tactical Battle System designed for RPG Maker.
 * @author Bilal El Moussaoui (https://twitter.com/arleq1n)
 *
 * @param Basic Parameters
 *
 * @param Selector File
 * @parent Basic Parameters
 * @desc The image to be displayed for the selector.
 * @dir img/system/
 * @default Selector
 * @require 1
 * @type file
 *
 * @param Selector Speed
 * @parent Basic Parameters
 * @desc The selector speed.
 * @default 2
 * @option Slow
 * @value 1
 * @option Normal
 * @value 2
 * @option Fast
 * @value 3
 * @type select
 *
 * @param Grid Opacity
 * @parent Basic Parameters
 * @desc The grid opacity of the battle scene.
 * @default 30
 * @min 0
 * @max 255
 * @type number
 *
 * @param Move Points
 * @parent Basic Parameters
 * @desc The movement distance of a unit if undefined.
 * @default 5
 * @min 0
 * @type number
 *
 * @param Action Range
 * @parent Basic Parameters
 * @desc The range distance of skill or item if undefined.
 * @default 1
 *
 * @param Wait Skill Id
 * @parent Basic Parameters
 * @desc The wait skill id in the database if the unit can't shield.
 * @default 7
 * @min 1
 * @type skill
 *
 * @param Auto Turn End
 * @parent Basic Parameters
 * @desc Automatically end the player turn when all units have played.
 * @default true
 * @on Yes
 * @off No
 * @type boolean
 *
 * @param Tiles Color
 *
 * @param Move Scope Color
 * @parent Tiles Color
 * @desc The color to display the move range.
 * @default #0066CC
 *
 * @param Ally Scope Color
 * @parent Tiles Color
 * @desc The color to display the range of an action on an ally.
 * @default #008000
 *
 * @param Enemy Scope Color
 * @parent Tiles Color
 * @desc The color to display the range of an action on an enemy.
 * @default #B22222
 *
 * @param Display Manager
 *
 * @param Show Hp Gauge
 * @parent Display Manager
 * @desc Show the hp gauge below the unit.
 * @default true
 * @on Yes
 * @off No
 * @type boolean
 *
 * @param Show State Icon
 * @parent Display Manager
 * @desc Show the icon state of a unit.
 * @default true
 * @on Yes
 * @off No
 * @type boolean
 *
 * @param Show Battle Start
 * @parent Display Manager
 * @desc Show the battle start sprite.
 * @default true
 * @on Yes
 * @off No
 * @type boolean
 *
 * @param Duration Start Sprite
 * @parent Display Manager
 * @desc The duration to display the start sprite.
 * @default 300
 * @min 0
 * @type number
 *
 * @param Show Information Window
 * @parent Display Manager
 * @desc Show the information battle window.
 * @default true
 * @on Yes
 * @off No
 * @type boolean
 *
 * @param Fade Out End
 * @parent Display Manager
 * @desc Fade out at the end of the battle. You need to fade in
 * with a command's event after the battle.
 * @default true
 * @on Yes
 * @off No
 * @type boolean
 *
 * @param Set Transparent Unit
 * @parent Display Manager
 * @desc Set Transparent to true at the end of the battle.
 * @default true
 * @on Yes
 * @off No
 * @type boolean
 *
 * @param Show Face Unit
 * @parent Display Manager
 * @desc Show the face of unit otherwise display the charset.
 * @default true
 * @on Yes
 * @off No
 * @type boolean
 *
 * @param Text Manager
 * @default
 *
 * @param Battle Start Term
 * @parent Text Manager
 * @desc The battle start term.
 * @default Battle Start
 *
 * @param End Turn Term
 * @parent Text Manager
 * @desc The end turn term.
 * @default End Turn
 *
 * @param Damage Term
 * @parent Text Manager
 * @desc The damage abbrevation term.
 * @default Damage
 *
 * @param Recover Term
 * @parent Text Manager
 * @desc The recover abbrevation term.
 * @default Recover
 *
 * @param Drain term
 * @parent Text Manager
 * @desc The drain abbrevation term.
 * @default Drain
 *
 * @param Hit Rate Term
 * @parent Text Manager
 * @desc The hit rate abbrevation term.
 * @default Hit Rate
 *
 * @param Critical Rate Term
 * @parent Text Manager
 * @desc The critical rate abbrevation term.
 * @default Cri Rate
 *
 * @param Wait Command Name
 * @parent Text Manager
 * @desc The wait command name to display in actor command window.
 * @default Wait
 *
 * @param Progression Manager
 * @default
 *
 * @param Battle Start Id
 * @parent Progression Manager
 * @desc The switch id to set if the battle has started.
 * @default 1
 * @min 1
 * @@type switch
 *
 * @param Player Phase Id
 * @parent Progression Manager
 * @desc The switch id to set if it's the player phase.
 * @default 2
 * @min 1
 * @@type switch
 *
 * @param Enemy Phase Id
 * @parent Progression Manager
 * @desc The switch id to set if it's the enemy phase.
 * @default 3
 * @min 1
 * @@type switch
 *
 * @param Current Phase Id
 * @parent Progression Manager
 * @desc The variable id to set the current phase.
 * 1: startPhase, 2 : playerPhase, 3 : enemyPhase, 4 : battleEnd (can't to be use)
 * @default 1
 * @min 1
 * @@type variable
 *
 * @param Current Player Phase Id
 * @parent Progression Manager
 * @desc The variable id to set the sub phase of player.
 * 1: explore, 2 : select, 3 : target
 * @default 2
 * @min 1
 * @@type variable
 *
 * @param Current Battle Phase Id
 * @parent Progression Manager
 * @desc The variable id to set the sub phase of player and enemy.
 * 1: start, 2 : move, 3 : action, 4 : turnEnd (can't to be use)
 * @default 3
 * @min 1
 * @@type variable
 *
 * @param Turn Count Id
 * @parent Progression Manager
 * @desc The variable id to set the turn count of battle.
 * @default 4
 * @min 1
 * @@type variable
 *
 * @help
 * -----------------------------------------------------------------------------
 * Basics
 *
 * Use the Battle Processing command of an event (with parallel trigger)
 * to start a tactics battle in the current map.
 * You can't start a battle on another map or without transition.
 *
 * You can define the actors of the battle by creating events with the note
 * <Actor:actorId> or with the note <Party:index> to directly use a member
 * of the party.
 *
 * You can define the enemies of the battle by creating events with the note
 * <Enemy:enemyId> or with this tag <Troop:index> to bind the event to enemy
 * in troops of the database. This will allow you to create events with the
 * conditions of the battle.
 *
 *
 * Note Tag
 *
 * There are several note tags to define parameters specific to the
 * Tactics System.
 *
 * <Move:int> [events, actors, classes, enemies] (MoVe Point)
 *    Defines the movement distance of a unit.
 *
 * <Aggro:int> [events, enemies] (AGGresivity)
 *    Set the distance of action of an enemy. Setting it to 1 allows
 *    to create enemies that don't move.s
 *
 * <Range:int>, <Range:int int>, <Range:int int shape> shape=[diamond,rectangle,line]
 *    Set the range of an action.
 *
 * <Name:string>
 *    Set the name of an event in actor command.
 *
 * <Ts-Parameter:Move int>
 *    Add buff/debuff move for an item/state.
 *
 *
 * Plugin Command
 *
 * TacticsSystem.ProcessVictory
 *     Proceed immediately to the victory of the battle.
 *
 * TacticsSystem.ProcessDefeat
 *     Proceed immediately to the defeat of the battle.
 *
 * TacticsSystem.SelectorMoveTo x y
 *     Move the selector to position x and y.
 *
 * TacticsSystem.SelectorTransfer x y
 *     Move immediately the selector to position x and y.
 *
 * TacticsSystem.SelectorEvent eventId
 *     Move immediately the selector to position at event of eventId.
 *
 * TacticsSystem.ClearAll on/off
 *     Activate or deactivate clear all condition victory.
 *
 * TacticsSystem.BattlerEndAction
 *     Ends the subject's turn.
 *
 *
 * Help
 * If you encounter a error, please report it in the following thread :
 *     https://forums.rpgmakerweb.com/index.php?threads/tactics-system-1-0.117600/
 */
TEW.COMBAT.SYSTEM = TEW.COMBAT.SYSTEM || {};
TEW.COMBAT.SYSTEM.actionRange = '1'; // TODO should be a number ?
TEW.COMBAT.SYSTEM.mvp = 4; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.durationStartSprite = 1; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.gridOpacity = 1;
TEW.COMBAT.SYSTEM.selectorFile = 'Selector';
TEW.COMBAT.SYSTEM.selectorSpeed = 1;
TEW.COMBAT.SYSTEM.allyScopeColor = '#008000';
TEW.COMBAT.SYSTEM.enemyScopeColor = '#B22222';
TEW.COMBAT.SYSTEM.moveScopeColor = '#0066CC';
TEW.COMBAT.SYSTEM.autoTurnEnd = true; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.clearAll = true; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.fadeOutEnd = true;
TEW.COMBAT.SYSTEM.setTransparentUnit = true;
TEW.COMBAT.SYSTEM.showBattleStart = true;
TEW.COMBAT.SYSTEM.showFaceUnit = true;
TEW.COMBAT.SYSTEM.showHpGauge = true;
TEW.COMBAT.SYSTEM.showInformationWindow = true;
TEW.COMBAT.SYSTEM.showStateIcon = true;
TEW.COMBAT.SYSTEM.battleStartTerm = 'Start';
TEW.COMBAT.SYSTEM.criticalRateTerm = 'Crit rate'; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.damageTerm = 'Damage'; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.drainTerm = 'Drain'; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.endTurnTerm = 'End'; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.hitRateTerm = 'Hit rate'; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.recoverTerm = 'Recovery'; // TODO should be removed eventually
// Menu command names
TEW.COMBAT.SYSTEM.move = 'Move';
TEW.COMBAT.SYSTEM.moveWalk = 'Walk';
TEW.COMBAT.SYSTEM.moveRun = 'Run';
TEW.COMBAT.SYSTEM.moveCharge = 'Charge';
TEW.COMBAT.SYSTEM.moveSwitchWeapon = 'Switch weapons';
TEW.COMBAT.SYSTEM.action = 'Action';
TEW.COMBAT.SYSTEM.advantage = 'Advantages';
TEW.COMBAT.SYSTEM.wait = 'Wait';
TEW.COMBAT.SYSTEM.waitSkillId = 7;
TEW.COMBAT.SYSTEM.battleStartId = 1;
TEW.COMBAT.SYSTEM.enemyPhaseId = 3; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.playerPhaseId = 2; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.phaseVarId = 1;
TEW.COMBAT.SYSTEM.battlePhaseVarId = 3;
TEW.COMBAT.SYSTEM.playerPhaseVarId = 2;
TEW.COMBAT.SYSTEM.turnCountVarId = 4;
const StatArray = ['MHP', 'WEAS', 'BALS', 'STRG', 'TOUG', 'INIT', 'AGIL', 'DEXT', 'INTL', 'FELW', 'WILL'];
// #endregion =========================== import ============================== //
// ============================== //
// #region ============================== utils ============================== //
//-----------------------------------------------------------------------------
// Utilities
// String to boolean conversion
String.prototype.toBoolean = function () {
    const s = String(this);
    switch (s) {
        case 'false':
            return false;
        default:
            return true;
    }
};
// Retrieve weapon info
TEW.COMBAT.getWeaponQualityEffects = (weaponId) => {
    const weapon = TEW.COMBAT.getWeaponFromId(weaponId);
    let attackMod = 0;
    let defenceMod = 0;
    let slashLevel = 0;
    let attackBonusDR = 0;
    let defenceBonusDR = 0;
    let bonusPA = 0;
    let ignoredPA = 0;
    let effects = {};
    let ignoredArmorTypes = [];
    weapon.qualities.forEach(quality => {
        if (quality === 2 /* WeaponQuality.IMPALE */) {
            effects.IMPALE = true;
        }
        else if (quality === 5 /* WeaponQuality.DAMAGING */) {
            effects.DAMAGING = true;
        }
        else if (quality === 6 /* WeaponQuality.UNDAMAGING */) {
            effects.UNDAMAGING = true;
        }
        else if (quality === 10 /* WeaponQuality.SHIELD_1 */) {
            bonusPA += 1;
        }
        else if (quality === 11 /* WeaponQuality.SHIELD_2 */) {
            bonusPA += 2;
        }
        else if (quality === 12 /* WeaponQuality.SHIELD_3 */) {
            bonusPA += 3;
        }
        else if (quality === 13 /* WeaponQuality.SHIELD_4 */) {
            bonusPA += 4;
        }
        else if (quality === 14 /* WeaponQuality.SHIELD_5 */) {
            bonusPA += 5;
        }
        else if (quality === 15 /* WeaponQuality.DEFENSIVE */) {
            defenceMod += 10;
        }
        else if (quality === 0 /* WeaponQuality.HACK */) {
            ignoredPA += 1;
        }
        else if (quality === 3 /* WeaponQuality.PENETRATING */) {
            ignoredArmorTypes.push(4 /* ArmorGroup.CHAINMAIL */);
            ignoredArmorTypes.push(3 /* ArmorGroup.BREASTPLATE */);
            ignoredArmorTypes.push(2 /* ArmorGroup.PLATE */);
            ignoredPA += 1;
        }
        else if (quality === 4 /* WeaponQuality.PRECISE */) {
            attackBonusDR += 1;
        }
        else if (quality === 7 /* WeaponQuality.PUMMEL */) {
            effects.PUMMEL = true;
        }
        else if (quality === 8 /* WeaponQuality.SLASH_1 */) {
            slashLevel = 1;
        }
        else if (quality === 9 /* WeaponQuality.SLASH_2 */) {
            slashLevel = 2;
        }
        else if (quality === 1 /* WeaponQuality.UNBALANCED */) {
            defenceBonusDR -= 1;
        }
        else if (quality === 16 /* WeaponQuality.IMPACT */) {
            effects.IMPACT = true;
        }
        else if (quality === 17 /* WeaponQuality.FAST */) {
            attackBonusDR += 1;
        }
        else if (quality === 18 /* WeaponQuality.TRIP */) {
            effects.TRIP = true;
        }
        else if (quality === 19 /* WeaponQuality.ENTANGLE */) {
            effects.ENTANGLE = true;
        }
        else if (quality === 20 /* WeaponQuality.SLOW */) {
            attackBonusDR -= 1;
        }
        else if (quality === 22 /* WeaponQuality.WRAP */) {
            attackBonusDR += 1;
        }
        else if (quality === 26 /* WeaponQuality.IMPRECISE */) {
            attackBonusDR -= 1;
        }
        else if (quality === 23 /* WeaponQuality.TIRING */) {
            effects.TIRING = true;
        }
        else if (quality === 24 /* WeaponQuality.TRAP_BLADE */) {
            effects.TRAP_BLADE = true;
        }
        else if (quality === 25 /* WeaponQuality.DANGEROUS */) {
            effects.DANGEROUS = true;
        }
        else if (quality === 40 /* WeaponQuality.ACCURATE */) {
            attackMod += 10;
        }
    });
    return {
        attackMod,
        defenceMod,
        attackBonusDR,
        defenceBonusDR,
        bonusPA,
        ignoredPA,
        ignoredArmorTypes,
        effects,
        slashLevel
    };
};
// Retrieve armor info // TODO
TEW.COMBAT.getArmorInfos = (armorIds) => {
    return {
        headModifier: [{
                type: 2 /* ArmorGroup.PLATE */, // CHAINMAIL, PLATE, BREASTPLATE
                modifier: 2
            }, {
                type: 4 /* ArmorGroup.CHAINMAIL */,
                modifier: 2
            }],
        bodyModifier: [{
                type: 2 /* ArmorGroup.PLATE */,
                modifier: 2
            }, {
                type: 4 /* ArmorGroup.CHAINMAIL */,
                modifier: 2
            }],
        armsModifier: [{
                type: 2 /* ArmorGroup.PLATE */,
                modifier: 2
            }, {
                type: 4 /* ArmorGroup.CHAINMAIL */,
                modifier: 2
            }],
        legsModifier: [{
                type: 2 /* ArmorGroup.PLATE */,
                modifier: 2
            }, {
                type: 4 /* ArmorGroup.CHAINMAIL */,
                modifier: 2
            }]
    };
};
// Get battler's stat value for combat depending on the wielded weapon's group
TEW.COMBAT.getCombatCompOrDefault = (battler, weaponGroup, isMelee) => {
    const compName = isMelee ? 'MELEE' : 'RANGED' + '_' + TEW.DATABASE.WEAPONS.GROUP_IDS[weaponGroup];
    if (battler.hasComp(compName)) {
        return {
            match: true,
            value: battler.comp(compName)
        };
    }
    else {
        return {
            match: false,
            value: isMelee ? battler.weas : battler.bals
        };
    }
};
// Get weapon data defined in TEW_Weapons.js from its ID
TEW.COMBAT.getWeaponFromId = (weaponId) => {
    const meleeWeapon = TEW.DATABASE.WEAPONS.MELEE_SET[weaponId];
    if (meleeWeapon === undefined) {
        const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[weaponId];
        if (rangedWeapon === undefined) {
            throw new Error(weaponId + ' is not a valid weapon ID');
        }
        return rangedWeapon;
    }
    return meleeWeapon;
};
// #endregion =========================== utils ============================== //
// ============================== //
// #region ============================== BattleManager ============================== //
var Phase;
(function (Phase) {
    Phase["Init"] = "init";
    Phase["Start"] = "startPhase";
    Phase["Battlers"] = "battlersPhase";
    Phase["BattleEnd"] = "battleEnd";
})(Phase || (Phase = {}));
var BattlePhase;
(function (BattlePhase) {
    BattlePhase["Init"] = "init";
    BattlePhase["Start"] = "start";
    BattlePhase["InputMove"] = "inputMove";
    BattlePhase["Explore"] = "explore";
    BattlePhase["Target"] = "target";
    BattlePhase["ProcessMove"] = "processMove";
    BattlePhase["Action"] = "action";
    BattlePhase["TurnEnd"] = "turnEnd";
    BattlePhase["Open"] = "open";
    BattlePhase["InputCommand"] = "inputCommand";
    BattlePhase["Abort"] = "abort";
    BattlePhase["Close"] = "close";
})(BattlePhase || (BattlePhase = {}));
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
BattleManager.canMove = function () {
    return this.actionCount > 0 || this.moveCount > 0;
};
BattleManager.canRun = function () {
    return this.actionCount > 0 && this.moveCount > 0;
};
BattleManager.canAct = function () {
    return this.actionCount > 0;
};
BattleManager.canInput = function () {
    return this.actionCount > 0 || this.moveCount > 0 || this.partyAdvantages > 3;
};
BattleManager.setup = function (troopId, canEscape, canLose) {
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
BattleManager.initMembers = function () {
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
BattleManager.createGameObjects = function () {
    for (let i = 0; i < $gameMap.events().length; i++) {
        const event = $gameMap.events()[i];
        if (event.tparam('Actor') > 0) {
            this.addGameActor(event);
        }
        else if (event.tparam('Party') > 0) {
            this.addGameParty(event);
        }
        else if (event.tparam('NPC')) {
            this.addGameEnemy(event);
        }
        else if (event.tparam('Troop') > 0) {
            this.addGameTroop(event);
        }
    }
};
BattleManager.addGameActor = function (event) {
    const actorId = Number(event.tparam('Actor'));
    $gamePartyTs.addActor(actorId, event);
};
BattleManager.addGameParty = function (event) {
    const partyId = Number(event.tparam('Party'));
    const actorId = $gameParty.memberId(partyId);
    $gamePartyTs.addActor(actorId, event, true);
};
BattleManager.addGameEnemy = function (event) {
    const npcId = event.tparam('NPC');
    $gameTroopTs.addEnemy(npcId, event);
};
BattleManager.addGameTroop = function (event) {
    const index = Number(event.tparam('Troop'));
    $gameTroopTs.addTroop(index, event);
};
BattleManager.setCommandWindow = function (commandWindow) {
    this._commandWindow = commandWindow;
};
BattleManager.setActorWindow = function (actorWindow) {
    this._actorWindow = actorWindow;
};
BattleManager.setEnemyWindow = function (enemyWindow) {
    this._enemyWindow = enemyWindow;
};
BattleManager.setInfoWindow = function (infoWindow) {
    this._infoWindow = infoWindow;
};
BattleManager.onEncounter = function () {
    this._preemptive = (Math.random() < this.ratePreemptive());
    this._surprise = (Math.random() < this.rateSurprise() && !this._preemptive);
};
BattleManager.ratePreemptive = function () {
    return $gameParty.ratePreemptive($gameTroop.agility());
};
BattleManager.rateSurprise = function () {
    return $gameParty.rateSurprise($gameTroop.agility());
};
BattleManager.startBattle = function () {
    $gamePartyTs.onBattleStart();
    $gameTroopTs.onBattleStart();
    $gameScreen.onBattleStart();
    $gameSystem.onBattleStart();
};
BattleManager.isActive = function () {
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
BattleManager.makeEscapeRatio = function () {
    this._escapeRatio = 0.5 * $gameParty.agility() / $gameTroop.agility();
};
BattleManager.update = function () {
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
BattleManager.updateBattlersPhase = function () {
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
BattleManager.updatePhase = function () {
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
BattleManager.isBusy = function () {
    return ($gameMessage.isBusy() || this._spriteset.isBusy() ||
        this._logWindow.isBusy() || $gameSelector.isBusy());
};
BattleManager.updateEvent = function () {
    $gameSwitches.update();
    $gameVariables.update();
    if (this.isActionForced()) {
        this.processForcedAction();
        return true;
    }
    else {
        return this.updateEventMain();
    }
};
BattleManager.isActionForced = function () {
    return false;
};
// RMMV function names are as useful as a hedgehog in a condom factory
// Wdym "updateEventMain" returns false, this makes less sense than the fucking Tenet movie
BattleManager.updateEventMain = function () {
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
BattleManager.phase = function () {
    return this._phase;
};
BattleManager.battlePhase = function () {
    return this._battlePhase;
};
// BattleManager.isPlayerPhase = function() {
//     return this._phase === Phase.Battlers;
// };
// BattleManager.isEnemyPhase = function() {
//     return this._phase === Phase.Battlers;
// };
BattleManager.isBattleEnd = function () {
    return this._phase === Phase.BattleEnd;
};
BattleManager.isInputting = function () {
    return this._battlePhase === BattlePhase.InputCommand;
};
BattleManager.isAborting = function () {
    return this._battlePhase === BattlePhase.Abort;
};
BattleManager.isExploring = function () {
    return this._battlePhase === BattlePhase.Explore;
};
BattleManager.isTurnEnd = function () {
    return this._battlePhase === BattlePhase.TurnEnd;
};
BattleManager.canEscape = function () {
    return this._canEscape;
};
BattleManager.canLose = function () {
    return this._canLose;
};
BattleManager.isEscaped = function () {
    return this._escaped;
};
BattleManager.allBattleMembers = function () {
    return $gamePartyTs.members().concat($gameTroopTs.members());
};
// TODO include enemies ?
BattleManager.actor = function () {
    return this._battlerIndex >= 0 ? $gamePartyTs.members()[this._battlerIndex] : null;
};
BattleManager.battler = function () {
    if (this._currentBattler && this._battlerIndex >= 0) {
        return this._currentBattler.isActor
            ? $gamePartyTs.members()[this._battlerIndex]
            : $gameTroopTs.members()[this._battlerIndex];
    }
    return null;
};
// TODO remove when managing enemies
BattleManager.makeEnemyOrders = function () {
    this._enemiesOrder = $gameTroopTs.battleMembers();
};
// TODO call once when battle starts
BattleManager.makeTurnOrder = function () {
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
        .sort((a, b) => b.initiative - a.initiative);
};
BattleManager.updateStartPhase = function () {
    $gameTroop.increaseTurn(); // useless ?
    this.makeEnemyOrders(); // TODO remove when managing enemies
    this.makeTurnOrder();
    // $gameTroopTs.onTurnStart(); // play enemy related events ?? Idk what this does
    // $gamePartyTs.onTurnStart(); // TODO change flow from here
    this._phase = Phase.Battlers;
    this.startNewTurn();
};
BattleManager.startNewTurn = function () {
    this._currentTurnOrder = JSON.parse(JSON.stringify(this._turnOrder)); // deep copy to pop actors one by one
    $gameSelector.setTransparent(true);
    this._logWindow.startTurn();
    $gameSelector.updateSelect(); // select active battler instead
    // this.refreshMoveTiles(); // SHT
    this._battlePhase = BattlePhase.Start;
};
BattleManager.updateExplore = function () {
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
BattleManager.refreshMoveTiles = function () {
    console.log("refreshMoveTiles");
    var select = $gameSelector.select();
    if (select) {
        $gameMap.setMoveColor();
        console.log("refreshMoveTiles - makeMoves");
        select.makeMoves();
    }
    else {
        $gameMap.clearTiles();
    }
};
BattleManager.selectActor = function (actor) {
    $gameSelector.updateSelect();
    this._subject = actor;
    this._subject.performSelect();
    this._subject.savePosition();
    // $gameParty.setupTactics([this._subject]);
    this._battlePhase = BattlePhase.InputCommand;
};
BattleManager.updateSelect = function () {
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
BattleManager.previousSelect = function () {
    console.log("previousSelect");
    this._battlePhase = BattlePhase.Explore;
    this._subject.restorePosition();
    this._subject = null;
    $gameSelector.updateSelect();
    this.refreshMoveTiles();
    const select = $gameSelector.select();
    if (select && select.isAlive()) {
        this._actorWindow.open(select);
    }
    else {
        this._actorWindow.close();
    }
};
BattleManager.processTarget = function () {
    this._battlePhase = BattlePhase.Target;
    $gameSelector.updateSelect();
};
BattleManager.updateTarget = function () {
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
BattleManager.previousTarget = function () {
    SoundManager.playCancel();
    this._battlePhase = BattlePhase.InputCommand;
    this.processCancel();
    this._enemyWindow.close();
    this._infoWindow.close();
};
BattleManager.inputtingAction = function () {
    return this.actor() ? this.actor().inputtingAction() : null;
};
BattleManager.refreshSubject = function () {
    const selectedBattler = $gameSelector.select();
    if ($gameSelector.isMoving()) {
        this.refreshActorWindow(selectedBattler);
        this.refreshEnemyWindow(selectedBattler);
    }
};
BattleManager.refreshActorWindow = function (selectedBattler) {
    if (selectedBattler && selectedBattler.isAlive() && selectedBattler.isActor()) {
        this._actorWindow.open(selectedBattler);
    }
    else {
        this._actorWindow.close();
    }
};
BattleManager.refreshEnemyWindow = function (selectedBattler) {
    if (selectedBattler && selectedBattler.isAlive() && selectedBattler.isEnemy()) {
        this._enemyWindow.open(selectedBattler);
    }
    else {
        this._enemyWindow.close();
    }
};
BattleManager.refreshTarget = function () {
    var select = $gameSelector.select();
    if (select && select.isAlive()) {
        this._subject.turnTowardCharacter(select);
        this.refreshInfo();
    }
    else {
        this._enemyWindow.close();
        this._infoWindow.close();
    }
};
BattleManager.refreshInfo = function () {
    var select = $gameSelector.select();
    this.refreshEnemyWindow(select);
    var action = this.inputtingAction();
    if (action.isTargetValid(select)) {
        this._infoWindow.open(select);
    }
    else {
        this._infoWindow.close();
    }
};
BattleManager.closeCommand = function () {
    this._commandWindow.close();
};
BattleManager.updateStart = function () {
    // refresh move tiles -> DO NOT DELETE !!!! ?
    // var select = $gameSelector.select();
    // $gameMap.setMoveColor();
    // if (select) {
    //     select.makeRange();
    // }
    if (this._currentTurnOrder.length === 0) {
        // All battlers have played, reset turn order
        this._battlePhase = BattlePhase.TurnEnd;
    }
    else {
        this._currentBattler = this._currentTurnOrder.shift();
        this._battlerIndex = this._currentBattler.battlerIndex;
        this.moveCount = 1;
        this.actionCount = 1;
        this._subject = this.battler();
        if (this._subject.isAlive()) {
            if (this._currentBattler.isActor) {
                this.updateStartPlayer();
            }
            else {
                this.updateStartEnemy();
            }
        }
    }
};
// TODO trigger battle menu here?
// We need to decide when to trigger the explore phase (maybe just cancel from the battle menu?)
BattleManager.updateStartPlayer = function () {
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
BattleManager.updateStartEnemy = function () {
    $gameSelector.setTransparent(false);
    this.updateEnemyPhase();
    // this._battlePhase = BattlePhase.TurnEnd;
};
BattleManager.updateEnemyPhase = function () {
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
BattleManager.updateMove = function () {
    if (!this._subject.isMoving()) {
        var action = this._subject.currentMove();
        if (action && action.isMove()) {
            action.applyMove();
            this._subject.nextMove();
        }
        if (!action || !action.isMove()) {
            if (this.canInput() && this._subject.canInput() && this._subject.isActor()) {
                this._battlePhase = BattlePhase.InputCommand;
            }
            else {
                this.setupAction();
            }
        }
    }
};
BattleManager.setupAction = function () {
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
BattleManager.setupTarget = function () {
    this.setupCombat(this._action);
    var targets = this._action.makeTargets();
    var gameFriends = this._action.friendsUnit();
    var gameOpponents = this._action.opponentsUnit();
    if (this._action.isForFriend()) {
        gameFriends.setupTactics([this._subject].concat(targets));
        gameOpponents.setupTactics([]);
    }
    else {
        gameFriends.setupTactics([this._subject]);
        gameOpponents.setupTactics(targets);
    }
    this._targetIndex = -1;
    this._targets = targets;
    this.setDirectionTargets();
};
BattleManager.processAction = function () {
    var subject = this._subject;
    var action = subject.currentAction();
    this._action = action;
    if (action) {
        action.prepare();
        if (action.isValid()) {
            this.startAction();
        }
        else { // last action
            this.endAction();
        }
    }
    else {
        this.endAction();
    }
};
BattleManager.endAction = function () {
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
BattleManager.updateClose = function () {
    $gameParty.setupTactics($gamePartyTs.members());
    $gameTroop.setupTactics($gameTroopTs.members());
    this._battlePhase = BattlePhase.Start;
    this._subject.onActionEnd();
    this._subject = null;
    this.refreshMoveTiles();
    this.changeDamagedSprites();
};
BattleManager.changeDamagedSprites = function () {
    for (let i = 0; i < $gameMap.events().length; i++) {
        const event = $gameMap.events()[i];
        const actorId = Number(event.tparam('Actor'));
        if (actorId > 0) {
            const actor = $gameActors.actor(actorId);
            $gameSelfSwitches.setValue([event._mapId, event._eventId, 'A'], actor.hp <= 0);
        }
    }
};
BattleManager.startAction = function () {
    this._battlePhase = BattlePhase.Action;
    this._subject.useItem(this._action.item());
    this._action.applyGlobal();
    this._logWindow.startAction(this._subject, this._action, this._targets);
};
BattleManager.updateAction = function () {
    this._targetIndex++;
    var target = this._targets[this._targetIndex];
    if (target) {
        this.turnTowardCharacter(target);
        $gameSelector.performTransfer(target.x, target.y);
        this.invokeAction(this._subject, target);
    }
    else {
        this._logWindow.endAction(this._subject);
        this.nextAction();
    }
};
BattleManager.setDirectionTargets = function () {
    this._targets.forEach(function (target) {
        this.turnTowardCharacter(target);
    }, this);
};
BattleManager.nextAction = function () {
    if (this._subject.canNextAction()) {
        this.processCancel();
        this._enemyWindow.close();
        this._infoWindow.close();
        this._actorWindow.open();
        this._battlePhase = BattlePhase.InputCommand;
    }
    else {
        this.processAction();
    }
};
BattleManager.invokeAction = function (subject, target) {
    this._logWindow.push('pushBaseLine');
    if (Math.random() < this._action.itemCnt(target)) {
        this.invokeCounterAttack(subject, target);
    }
    else if (Math.random() < this._action.itemMrf(target)) {
        this.invokeMagicReflection(subject, target);
    }
    else {
        this.invokeNormalAction(subject, target);
    }
    subject.setLastTarget(target);
    this._logWindow.push('popBaseLine');
};
BattleManager.invokeNormalAction = function (subject, target) {
    // var realTarget = this.applySubstitute(target);
    this._action.apply(target);
    this._logWindow.displayActionResults(subject, target);
};
BattleManager.invokeCounterAttack = function (subject, target) {
    var action = new Game_Action(target);
    action.setAttack();
    action.apply(subject);
    this._logWindow.displayCounter(target);
    this._logWindow.displayActionResults(target, subject);
};
BattleManager.invokeMagicReflection = function (subject, target) {
    this._logWindow.displayReflection(target);
    this._action.apply(subject);
    this._logWindow.displayActionResults(subject, subject);
};
// BattleManager.updateTurnEnd = function() {
//     // reload all battlers
//     // lets do it again :)
//     this._battlePhase = BattlePhase.Start;
// };
BattleManager.endPlayerPhase = function () {
    // this._phase = Phase.EnemyPhase;
    this._battlePhase = BattlePhase.Start;
    $gameTroopTs.members().forEach(function (enemy) {
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
BattleManager.endEnemyPhase = function () {
    this._phase = Phase.Start;
    this._battlePhase = BattlePhase.Start;
    $gamePartyTs.members().forEach(function (actor) {
        actor.onTurnEnd();
        this._logWindow.displayAutoAffectedStatus(actor);
        this._logWindow.displayRegeneration(actor);
    }, this);
    $gameSelector.restorePosition();
    $gameSelector.setTransparent(false);
    $gameMap.clearTiles();
};
BattleManager.setupCombat = function (action) {
    var gameFriends = action.friendsUnit();
    gameFriends.setupTactics(action.combatFriendsUnit(this._subject));
    var gameOpponents = action.opponentsUnit();
    gameOpponents.setupTactics(action.combatOpponentsUnit(this._subject));
};
BattleManager.refreshRedCells = function (action) {
    BattleManager.setEventCallback = function (callback) {
        this._eventCallback = callback;
    };
    $gameMap.clearTiles();
    BattleManager.setupCombat(action);
    $gameMap.setActionColor(action);
    action.showRange();
};
BattleManager.turnTowardCharacter = function (character) {
    this._subject.turnTowardCharacter(character);
    character.turnTowardCharacter(this._subject);
};
BattleManager.processCancel = function () {
    $gameMap.clearTiles();
    var x = this._subject.x;
    var y = this._subject.y;
    $gameSelector.performTransfer(x, y);
};
BattleManager.checkBattleEnd = function () {
    if (this._phase) {
        if ($gamePartyTs.isAllDead()) {
            this.processDefeat();
            return true;
        }
        else if ($gameTroopTs.isAllDead() && TEW.COMBAT.SYSTEM.clearAll) {
            this.processVictory();
            return true;
        }
    }
    return false;
};
BattleManager.processVictory = function () {
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
BattleManager.processDefeat = function () {
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
    }
    else {
        AudioManager.stopBgm();
    }
    this.endBattle(2);
};
BattleManager.endBattle = function (result) {
    this.closeCommand();
    this._phase = Phase.BattleEnd;
    $gameMap.clearTiles();
    if (this._eventCallback) {
        this._eventCallback(result);
    }
    if (result === 0) {
        $gameSystem.onBattleWin();
    }
    else if (this._escaped) {
        $gameSystem.onBattleEscape();
    }
};
BattleManager.playVictoryMe = function () {
    AudioManager.playMe($gameSystem.victoryMe());
};
BattleManager.playDefeatMe = function () {
    AudioManager.playMe($gameSystem.defeatMe());
};
// TODO Obsolete
BattleManager.makeRewards = function () {
    this._rewards = {};
    this._rewards.gold = $gameTroop.goldTotal();
    this._rewards.exp = $gameTroop.expTotal();
    this._rewards.items = $gameTroop.makeDropItems();
};
BattleManager.displayVictoryMessage = function () {
    $gameMessage.add(TextManager.victory.format($gameParty.name()));
};
BattleManager.displayDefeatMessage = function () {
    $gameMessage.add(TextManager.defeat.format($gameParty.name()));
};
BattleManager.displayRewards = function () {
    this.displayExp();
    this.displayGold();
    this.displayDropItems();
};
BattleManager.displayExp = function () {
    var exp = this._rewards.exp;
    if (exp > 0) {
        var text = TextManager.obtainExp.format(exp, TextManager.exp);
        $gameMessage.add('\.' + text);
    }
};
BattleManager.displayGold = function () {
    var gold = this._rewards.gold;
    if (gold > 0) {
        $gameMessage.add('\.' + TextManager.obtainGold.format(gold));
    }
};
BattleManager.displayDropItems = function () {
    var items = this._rewards.items;
    if (items.length > 0) {
        $gameMessage.newPage();
        items.forEach(function (item) {
            $gameMessage.add(TextManager.obtainItem.format(item.name));
        });
    }
};
BattleManager.gainRewards = function () {
    this.gainExp();
    this.gainGold();
    this.gainDropItems();
};
BattleManager.gainExp = function () {
    var exp = this._rewards.exp;
    $gameParty.allMembers().forEach(function (actor) {
        actor.gainExp(exp);
    });
};
BattleManager.gainGold = function () {
    $gameParty.gainGold(this._rewards.gold);
};
BattleManager.gainDropItems = function () {
    var items = this._rewards.items;
    items.forEach(function (item) {
        $gameParty.gainItem(item, 1);
    });
};
BattleManager.updateBattleEnd = function () {
    if (!this._escaped && $gameParty.isAllDead() || TEW.COMBAT.SYSTEM.isDefeated) {
        console.log("END OF BATTLE : YOU LOSE !");
        if (this._canLose) {
            $gameParty.reviveBattleMembers();
            SceneManager.pop();
        }
        else {
            SceneManager.goto(Scene_Gameover);
        }
    }
    else {
        console.log("END OF BATTLE : YOU WIN !");
        SceneManager.pop();
    }
    this._phase = null;
    this.terminate();
};
// TODO Obsolete
BattleManager.onAllTurnEnd = function () {
    this._battlePhase = BattlePhase.TurnEnd;
    $gamePartyTs.onAllTurnEnd();
};
BattleManager.terminate = function () {
    $gameScreen.onBattleEnd();
    $gamePlayer.setThrough(false);
    $gamePlayer.refresh();
    $gamePartyTs.onBattleEnd();
    $gameTroopTs.onBattleEnd();
};
BattleManager.clear = function () {
    $gameSwitches.setValue(TEW.COMBAT.SYSTEM.battleStartId, false);
    $gamePartyTs.onClear();
    $gameTroopTs.onClear();
};
// #endregion =========================== BattleManager ============================== //
// ============================== //
// #region ============================== DataManager ============================== //
//-----------------------------------------------------------------------------
// DataManager
//
// The static class that manages the database and game objects.
TEW.MEMORY.dataManagerCreateGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function () {
    $gameSelector = new Game_Selector();
    $gameTroopTs = new Game_TroopTs();
    $gamePartyTs = new Game_PartyTs();
    TEW.MEMORY.dataManagerCreateGameObjects.call(this);
};
// #endregion =========================== DataManager ============================== //
// ============================== //
// #region ============================== Game_Action ============================== //
//-----------------------------------------------------------------------------
// Game_Action
//
// The game object class for a battle action.
TEW.MEMORY.gameActionInit = Game_Action.prototype.initialize;
Game_Action.prototype.initialize = function (subject, forcing) {
    TEW.MEMORY.gameActionInit.call(this, subject, forcing);
    this._moveRoute = 0;
};
Game_Action.prototype.combatOpponentsUnit = function (battler) {
    var units = battler.opponentsUnitTS().aliveMembers();
    return this.searchBattlers(battler, units);
};
Game_Action.prototype.combatFriendsUnit = function (battler) {
    var friends = battler.friendsUnitTS().aliveMembers();
    var battlers = [battler]; // first since the user keeps the same index !
    if (this.isForFriend()) {
        battlers = battlers.concat(this.searchBattlers(battler, friends));
    }
    return battlers;
};
Game_Action.prototype.searchBattlers = function (battler, units) {
    var battlers = [];
    var item = this.item();
    if (this.isAttackRange(battler)) {
        item = battler.weapons()[0] || battler.weapons()[1];
    }
    this.updateRange(item, battler.tx, battler.ty);
    for (var i = 0; i < this._range.length; i++) {
        var redCell = this._range[i];
        var x = redCell[0];
        var y = redCell[1];
        for (var j = 0; j < units.length; j++) {
            if (units[j].pos(x, y) && units[j] !== battler) {
                battlers.push(units[j]);
            }
        }
    }
    return battlers;
};
Game_Action.prototype.isAttackRange = function (subject) {
    return subject.isActor() && this.isAttack() && !subject.hasNoWeapons();
};
Game_Action.prototype.updateRange = function (item, x, y) {
    var data = this.extractRangeData(item);
    // range: 10 -> range: 0 10
    if (data[1] === undefined) {
        data[1] = data[0];
        data[0] = 0;
    }
    // range:
    if (data[2] === undefined) {
        data[2] = 'diamond';
    }
    this._range = this.createRange(parseInt(data[0]), parseInt(data[1]), x, y, data[2]);
    if (this.isForUser()) {
        this._range = [[x, y]];
    }
};
Game_Action.prototype.extractRangeData = function (object) {
    var data = object.meta['Range'] || TEW.COMBAT.SYSTEM.actionRange;
    return data.trim().split(' ');
};
Game_Action.prototype.createRange = function (d1, d2, x, y, shape) {
    var range = [];
    for (var i = x - d2; i <= x + d2; i++) {
        for (var j = y - d2; j <= y + d2; j++) {
            if (Math.abs(i - x) + Math.abs(j - y) > d1) {
                switch (shape) {
                    case 'diamond':
                        if (Math.abs(i - x) + Math.abs(j - y) <= d2) {
                            range.push([i, j]);
                        }
                        break;
                    case 'rectangle':
                        range.push([i, j]);
                        break;
                    case 'line':
                        if (i === x || j === y) {
                            range.push([i, j]);
                        }
                        break;
                }
            }
        }
    }
    return range;
};
Game_Action.prototype.range = function () {
    return this._range;
};
Game_Action.prototype.showRange = function () {
    this._range.forEach(function (pos) {
        var tile = $gameMap.tile(pos[0], pos[1]);
        $gameMap.addTile(tile);
    }, this);
};
Game_Action.prototype.color = function () {
    return this.isForFriend() ? TEW.COMBAT.SYSTEM.allyScopeColor : TEW.COMBAT.SYSTEM.enemyScopeColor;
};
Game_Action.prototype.testDamageMinMaxValue = function (target, minMax) {
    var item = this.item();
    var baseValue = this.evalDamageFormula(target);
    var value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    value = this.testMinMaxVariance(value, item.damage.variance, minMax);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};
Game_Action.prototype.testMinMaxVariance = function (damage, variance, minMax) {
    var amp = Math.floor(Math.max(Math.abs(damage) * variance / 100, 0));
    var v = minMax ? amp : -amp;
    return damage >= 0 ? damage + v : damage - v;
};
Game_Action.prototype.setMove = function (moveRoute) {
    this._moveRoute = moveRoute;
};
Game_Action.prototype.applyMove = function () {
    var command = { code: this._moveRoute };
    var event = this.subject().event();
    event.processMoveCommand(command);
};
Game_Action.prototype.isTargetValid = function (battler) {
    if (this.isForOpponent()) {
        return battler && !battler.isActor();
    }
    else {
        return battler && battler.isActor();
    }
};
Game_Action.prototype.isMove = function () {
    return this._moveRoute !== 0;
};
Game_Action.prototype.setWait = function () {
    this.setSkill(this.subject().waitSkillId());
};
Game_Action.prototype.isWait = function () {
    return this.item() === $dataSkills[this.subject().waitSkillId()];
};
// TODO fishy
TEW.MEMORY.gameActionSubject = Game_Action.prototype.subject;
Game_Action.prototype.subject = function () {
    TEW.MEMORY.gameActionSubject.call(this);
    if ($gamePartyTs.inBattle()) {
        if (this._subjectActorId <= 0) {
            return $gameTroopTs.members()[this._subjectEnemyIndex];
        }
    }
    return TEW.MEMORY.gameActionSubject.call(this);
};
TEW.MEMORY.gameActionSetSubject = Game_Action.prototype.setSubject;
Game_Action.prototype.setSubject = function (subject) {
    TEW.MEMORY.gameActionSetSubject.call(this, subject);
    // For enemy restriction attack an ally...
    if ($gamePartyTs.inBattle()) {
        if (!subject.isActor()) {
            this._subjectEnemyIndex = $gameTroopTs.members().indexOf(subject);
        }
    }
};
Game_Action.prototype.apply = function (target) {
    var result = target.result();
    this.subject().clearResult();
    result.clear();
    // Damage calc
    //
    // Choose weapon (elsewhere)
    //   Get CC characteristic associated with weapon
    // Get (best) weapon from defender
    //   Get CC characteristic associated with weapon
    // Check for opponent's defensive tools (shield)
    // Check attacker's talents for modifiers (make a list)
    // Check defender's talents for modifiers (make a list)
    // Check weapon effects on bonus (PRECISE)
    // Check sizes
    // Check outnumberment
    //
    // Roll dice
    //
    // Check attacker's talents on dice roll (make a list)
    // Check weapon effects on dice roll (make a list)
    // Check hit/miss
    // Check weapon effects on crit (make a list)
    // Check for crits
    // Compute damage
    //   Add weapon bonus + stat bonus + opposed DR
    //   Check location
    //   Check weapon effects based on location (make a list)
    //   Remove defender's toug + armor points
    // Lookup crit table (help me)
    result.isHit = true;
    result.missed = false;
    if (result.isHit) {
        if (this.item().damage.type > 0) {
            var value = 251;
            this.executeDamage(target, value);
        }
        this.item().effects.forEach(function (effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
    }
};
// Calculating damage value
Game_Action.prototype.makeDamageValue = function (target, critical) {
    var item = this.item();
    var baseValue = this.evalDamageFormula(target);
    var value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
    }
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};
// #endregion =========================== Game_Action ============================== //
// ============================== //
// #region ============================== Game_Actor ============================== //
//-----------------------------------------------------------------------------
// Game_Actor
//
// The game object class for an actor.
TEW.MEMORY.gameActorInitMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function () {
    TEW.MEMORY.gameActorInitMembers.call(this);
    this._actionsButton = [];
};
Game_Actor.prototype.currentData = function () {
    return Game_Battler.prototype.currentData.call(this).concat(this.currentClass());
};
Game_Actor.prototype.setupEvent = function (eventId) {
    Game_Battler.prototype.setupEvent.call(this, eventId);
    this.event().setPriorityType(1);
    // to find a path to through an actor
    this._char.setIsActor(true);
};
Game_Actor.prototype.currentBattler = function () {
    return this.actor();
};
Game_Actor.prototype.indexTs = function () {
    return $gamePartyTs.members().indexOf(this);
};
Game_Actor.prototype.friendsUnitTS = function () {
    return $gamePartyTs;
};
Game_Actor.prototype.opponentsUnitTS = function () {
    return $gameTroopTs;
};
Game_Actor.prototype.savePosition = function () {
    $gameTemp.setPosition(this.x, this.y);
    $gameTemp.setDirection(this.event().direction());
};
Game_Actor.prototype.restorePosition = function () {
    var positionX = $gameTemp.positionX();
    var positionY = $gameTemp.positionY();
    this.event().setPosition(positionX, positionY);
    this.event().setDirection($gameTemp.direction());
    this._tx = positionX;
    this._ty = positionY;
};
Game_Actor.prototype.refreshImage = function () {
    this.event().setImage(this.characterName(), this.characterIndex());
};
Game_Actor.prototype.actionsButton = function () {
    return this._actionsButton;
};
Game_Actor.prototype.canActionButton = function () {
    return this.checkEventTriggerThere();
};
Game_Actor.prototype.checkEventTriggerThere = function () {
    this._actionsButton = [];
    for (var d = 8; d >= 2; d -= 2) {
        var x1 = this.x;
        var y1 = this.y;
        var x2 = $gameMap.roundXWithDirection(x1, d);
        var y2 = $gameMap.roundYWithDirection(y1, d);
        this.checkEventsTriggerHere(x2, y2);
    }
    return this._actionsButton.length > 0;
};
Game_Actor.prototype.checkEventsTriggerHere = function (x, y) {
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
Game_Actor.prototype.checkEventTriggerTouch = function () {
    if (!$gameMap.isEventRunning()) {
        return $gameMap.eventsRangeXy(this.x, this.y).some(function (event) {
            if (event.isTriggerIn([1, 2])) {
                event.start();
                return true;
            }
            return false;
        });
    }
    return false;
};
TEW.MEMORY.gameActorInputtingAction = Game_Actor.prototype.inputtingAction;
Game_Actor.prototype.inputtingAction = function () {
    if ($gamePartyTs.inBattle()) {
        return this.action(this._actionIndex);
    }
    else {
        return TEW.MEMORY.gameActorInputtingAction.call(this);
    }
};
TEW.MEMORY.gameActorPerformCollapse = Game_Actor.prototype.performCollapse;
Game_Actor.prototype.performCollapse = function () {
    TEW.MEMORY.gameActorPerformCollapse.call(this);
    this.requestEffect('bossCollapse');
};
TEW.MEMORY.gameActorIsBattleMember = Game_Actor.prototype.isBattleMember;
Game_Actor.prototype.isBattleMember = function () {
    if ($gamePartyTs.inBattle()) {
        return $gamePartyTs.members().contains(this);
    }
    else {
        return TEW.MEMORY.gameActorIsBattleMember.call(this);
    }
};
Game_Actor.prototype.makeMoves = function (displayTiles = true) {
    Game_Battler.prototype.makeMoves.call(this, displayTiles);
    if (!this.isRestricted() && this.isAutoBattle()) {
        this.autoMoves();
    }
};
Game_Actor.prototype.autoMoves = function () {
    this.makeAutoBattleMoves();
    this.makeShortestMoves();
};
Game_Actor.prototype.makeAutoBattleMoves = function () {
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
Game_Actor.prototype.onActionEnd = function () {
    Game_Battler.prototype.onActionEnd.call(this);
    this.event().setStepAnime(true);
};

// #endregion =========================== Game_Actor ============================== //
// ============================== //
// #region ============================== Game_Battler ============================== //
//-----------------------------------------------------------------------------
// Game_Battler
//
// The superclass of Game_Actor and Game_Enemy. It contains methods for sprites
// and actions.
Object.defineProperties(Game_Battler.prototype, {
    // event position X
    x: { get: function () { return this.event().x; }, configurable: true },
    // event position Y
    y: { get: function () { return this.event().y; }, configurable: true },
    // Tactical position X
    tx: { get: function () { return this._tx; }, configurable: true },
    // Tactical position Y
    ty: { get: function () { return this._ty; }, configurable: true },
    // MoVe Point
    mvp: { get: function () { return this.move(); }, configurable: true }
});
TEW.MEMORY.gameBattlerInitMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function () {
    TEW.MEMORY.gameBattlerInitMembers.call(this);
    this._tx = 0;
    this._ty = 0;
    this._eventId = 0;
    this._char = new Game_Character(); // it's used to calculate the shortest path
    this._actionIndex = 0;
    this._moveIndex = 0;
    this._moves = [];
    this._canAction = true;
    this._active = false;
    this._requestImage = false;
};
Game_Battler.prototype.setupEvent = function (eventId) {
    this._eventId = eventId;
    var event = this.event();
    this._tx = event.x;
    this._ty = event.y;
    event.setBattler(this);
};
Game_Battler.prototype.indexTs = function () {
    return -1;
};
Game_Battler.prototype.clearEvent = function () {
    this._eventId = 0;
    this._tx = 0;
    this._ty = 0;
};
Game_Battler.prototype.event = function () {
    return $gameMap.event(this._eventId);
};
Game_Battler.prototype.dataEvent = function () {
    return this.event().event(); // strange method...
};
Game_Battler.prototype.pos = function (x, y) {
    return this.event().pos(x, y);
};
Game_Battler.prototype.currentBattler = function () {
    return null;
};
Game_Battler.prototype.currentData = function () {
    return [this.currentBattler(), this.dataEvent()];
};
Game_Battler.prototype.tparam = function (paramString) {
    let param = null;
    const battlerData = this.currentData();
    for (let i = 0; i < battlerData.length; i++) {
        param = battlerData[i][paramString] || (battlerData[i].meta && battlerData[i].meta[paramString]);
        if (param) {
            break;
        }
    }
    // Should never be needed - legacy from the Tactics system base plugin
    // if (param) {
    //     param.replace(/\s/g, '');
    // }
    return param;
};
Game_Battler.prototype.onTurnStart = function () {
    if (this.isRestricted) { // What have you smoked
        this._canAction = true;
        this.event().setStepAnime(true);
    }
    this.makeActions();
    this.makeMoves(false);
};
Game_Battler.prototype.onActionEnd = function () {
    this._canAction = false;
};
Game_Battler.prototype.isMoving = function () {
    return this.event().isMoving();
};
Game_Battler.prototype.turnTowardCharacter = function (character) {
    this.event().turnTowardCharacter(character);
};
Game_Battler.prototype.isItemRangeValid = function (item) {
    if (!item) {
        return false;
    }
    else if (DataManager.isSkill(item)) {
        return this.isSkillRangeOk(item);
    }
    else if (DataManager.isItem(item)) {
        return this.isItemRangeOk(item);
    }
    else {
        return false;
    }
};
Game_Battler.prototype.isSkillRangeOk = function (item) {
    var action = new Game_Action(this);
    action.setSkill(item.id);
    if (this.isConfused()) {
        return this.isConfusedRangeOk(action);
    }
    if (action.isForOpponent()) {
        return action.combatOpponentsUnit(this).length > 0;
    }
    if (action.isForFriend()) {
        return action.combatFriendsUnit(this).length > 0;
    }
    return false;
};
Game_Battler.prototype.isItemRangeOk = function (item) {
    var action = new Game_Action(this);
    action.setItem(item.id);
    if (action.isForOpponent()) {
        return action.combatOpponentsUnit(this).length > 0;
    }
    if (action.isForFriend()) {
        return action.combatFriendsUnit(this).length > 0;
    }
    return false;
};
Game_Battler.prototype.nextAction = function () {
    this._actionIndex++;
    if (this._actionIndex < this.numActions()) {
        return true;
    }
    else {
        return false;
    }
};
TEW.MEMORY.gameBattlerCurrentAction = Game_Battler.prototype.currentAction;
Game_Battler.prototype.currentAction = function () {
    if ($gamePartyTs.inBattle()) {
        return this._actions[this._actionIndex];
    }
    else {
        return TEW.MEMORY.gameBattlerCurrentAction.call(this);
    }
};
TEW.MEMORY.gameBattlerClearAction = Game_Battler.prototype.clearActions;
Game_Battler.prototype.clearActions = function () {
    TEW.MEMORY.gameBattlerClearAction.call(this);
    this._actionIndex = 0;
};
Game_Battler.prototype.currentMove = function () {
    return this._moves[this._moveIndex];
};
Game_Battler.prototype.nextMove = function () {
    this._moveIndex++;
    if (this._moveIndex <= this.numMoves()) {
        return true;
    }
    else {
        return false;
    }
};
Game_Battler.prototype.numMoves = function () {
    return this._moves.length;
};
Game_Battler.prototype.makeMoves = function (displayTiles = true) {
    this.clearMoves();
    if (this.canMove()) {
        var moveTimes = this.makeMoveTimes();
        this._moves = [];
        for (var i = 0; i < moveTimes; i++) {
            this._moves.push(new Game_Action(this));
        }
    }
    if (displayTiles) {
        console.log("makeMoves - makeRange");
        this.makeRange();
    }
    // TODO should never happen
    if (this.isRestricted()) {
        this.makeConfusionMove();
    }
};
Game_Battler.prototype.makeMoveTimes = function () {
    return this.mvp;
};
Game_Battler.prototype.clearMoves = function () {
    this._tx = this.x;
    this._ty = this.y;
    this._moves = [];
    this._moveIndex = 0;
};
Game_Battler.prototype.refreshMovesAction = function (x, y) {
    if ($gameMap.isOnTiles(x, y)) {
        this.makeMoves(false);
        this._tx = x;
        this._ty = y;
        this.makeShortestMoves();
    }
    else {
        this.makeMoves(false);
    }
};
Game_Battler.prototype.makeShortestMoves = function () {
    this._char.setPosition(this.x, this.y);
    var index = 0;
    while (!this.tpos() && index < this.numMoves()) {
        var d = this._char.findDirectionTo(this.tx, this.ty);
        this._char.moveStraight(d);
        this._moves[index].setMove(d / 2);
        index++;
    }
    this._tx = this._char.x;
    this._ty = this._char.y;
};
Game_Battler.prototype.tpos = function () {
    return this.tx === this._char.x && this.ty === this._char.y;
};
Game_Battler.prototype.canAction = function () {
    return $gamePartyTs.inBattle() ? this._canAction : true;
};
Game_Battler.prototype.makeRange = function () {
    $gameMap.makeRange(this.numMoves(), this.event());
};
Game_Battler.prototype.makeConfusionMove = function () {
    var action = new Game_Action(this);
    action.setConfusion();
    $gameMap.makeRange(this.mvp, this.event());
    var targets = [new Point(this.x, this.y)];
    for (var i = 0; i < $gameMap.tiles().length; i++) {
        var tile = $gameMap.tiles()[i];
        this._tx = $gameMap.positionTileX(tile);
        this._ty = $gameMap.positionTileY(tile);
        if (this.canUse(action.item())) {
            // actor can't use action in another actor
            if ($gameMap.eventsXy(this.tx, this.ty).length === 0) {
                targets.push({ 'x': this.tx, 'y': this.ty });
            }
        }
    }
    $gameMap.clearTiles();
    var target = targets[Math.floor(Math.random() * targets.length)];
    //var target = targets[Math.randomInt(targets.length)];
    this._tx = target['x'];
    this._ty = target['y'];
};
Game_Battler.prototype.isConfusedRangeOk = function (action) {
    switch (this.confusionLevel()) {
        case 1:
            return action.combatOpponentsUnit(this).length > 0;
        case 2:
            return action.combatOpponentsUnit(this).length > 0 ||
                action.combatFriendsUnit(this).length > 1; // don't count self
        default:
            return action.combatFriendsUnit(this).length > 1;
    }
};
Game_Battler.prototype.performCollapse = function () {
    this.event().setThrough(true);
};
Game_Battler.prototype.performSelect = function () {
    this.requestEffect('whiten');
};
Game_Battler.prototype.setPosition = function (x, y) {
    this.event().setPosition(x, y);
    this._tx = x;
    this._ty = y;
};
Game_Battler.prototype.canNextAction = function () {
    // next action in first for game enemy get next action!
    return this.nextAction() && this.isActor() && !this.isAutoBattle();
};
Game_Battler.prototype.onClear = function () {
    if (TEW.COMBAT.SYSTEM.setTransparentUnit) {
        this.event().setTransparent(true);
        this.event().setThrough(true);
    }
};

// #endregion =========================== Game_Battler ============================== //
// ============================== //
// #region ============================== Game_BattlerBase ============================== //
//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.
Game_BattlerBase.TRAIT_TPARAM = 71;
Game_BattlerBase.TPARAM = {
    'move': 0,
};
Game_BattlerBase.prototype.move = function () {
    return (Number(this.tparam('move')) || TEW.COMBAT.SYSTEM.mvp)
        * BattleManager.moveMultiplier;
};
Game_BattlerBase.prototype.tparamCode = function (tparam) {
    return Game_BattlerBase.TPARAM[tparam];
};
Game_BattlerBase.prototype.tparamTraits = function () {
    return this.traitObjects().reduce(function (r, obj) {
        return r.concat(this.noteTraits(obj));
    }.bind(this), []);
};
Game_BattlerBase.prototype.noteTraits = function (obj) {
    var value = obj.meta['Ts-Parameter'];
    if (value !== undefined) {
        var args = value.trim().split(' ');
        var trait = {
            'code': Game_BattlerBase.TRAIT_TPARAM,
            'dataId': Game_BattlerBase.TPARAM[args[0]],
            'value': eval(args[1])
        };
    }
    return trait || [];
};
// Legacy Tactics system code - looks for traits in *.meta.Ts-Parameter
// TEW.MEMORY.gameBattlerBaseAllTraits = Game_BattlerBase.prototype.allTraits;
// Game_BattlerBase.prototype.allTraits = function() {
//     return TEW.MEMORY.gameBattlerBaseAllTraits.call(this).concat(this.tparamTraits());
// };
TEW.MEMORY.gameBattlerBaseCanUse = Game_BattlerBase.prototype.canUse;
Game_BattlerBase.prototype.canUse = function (item) {
    if ($gamePartyTs.inBattle()) {
        if (!this.isItemRangeValid(item)) {
            return false;
        }
    }
    return TEW.MEMORY.gameBattlerBaseCanUse.call(this, item);
};
Game_BattlerBase.prototype.isOccasionOk = function (item) {
    if ($gameParty.inBattle() || $gamePartyTs.inBattle()) {
        return item.occasion === 0 || item.occasion === 1;
    }
    else {
        return item.occasion === 0 || item.occasion === 2;
    }
};
Game_BattlerBase.prototype.waitSkillId = function () {
    return TEW.COMBAT.SYSTEM.waitSkillId;
};

// #endregion =========================== Game_BattlerBase ============================== //
// ============================== //
// #region ============================== Game_Character ============================== //
//-----------------------------------------------------------------------------
// Game_Character
//
// The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event.
// Sorry what the fuck
Game_Character.prototype.searchLimit = function () {
    return 32; // 12 by default
};
// #endregion =========================== Game_Character ============================== //
// ============================== //
// #region ============================== Game_CharacterBase ============================== //
//-----------------------------------------------------------------------------
// Game_CharacterBase
//
// The superclass of Game_Character. It handles basic information, such as
// coordinates and images, shared by all characters.
Game_CharacterBase.prototype.setIsActor = function (isActor) {
    this._isActor = isActor;
};
Game_CharacterBase.prototype.isActor = function () {
    return this._isActor;
};
TEW.MEMORY.gameCharacterBaseIsCollidedWithEvents = Game_CharacterBase.prototype.isCollidedWithEvents;
Game_CharacterBase.prototype.isCollidedWithEvents = function (x, y) {
    // for an actor to pass through an actor
    if (this.isActor()) {
        var events = $gameMap.eventsXyNt(x, y);
        return events.some(function (event) {
            return event.isNormalPriority() && !event.isActor();
        });
    }
    else {
        return TEW.MEMORY.gameCharacterBaseIsCollidedWithEvents.call(this, x, y);
    }
};
// #endregion =========================== Game_CharacterBase ============================== //
// ============================== //
// #region ============================== Game_Enemy ============================== //
//-----------------------------------------------------------------------------
// Game_Enemy
//
// The game object class for an enemy.
// TODO turn 99 into a TEW battle system constant
Object.defineProperties(Game_Enemy.prototype, {
    // AGGressivity
    agg: { get: function () { return this.tparam('Aggro') || 99; }, configurable: true }
});
Game_Enemy.prototype.currentBattler = function () {
    return this.enemy();
};
Game_Enemy.prototype.friendsUnitTS = function () {
    return $gameTroopTs;
};
Game_Enemy.prototype.opponentsUnitTS = function () {
    return $gamePartyTs;
};
Game_Enemy.prototype.indexTs = function () {
    return $gameTroopTs.members().indexOf(this);
};
Game_Enemy.prototype.makeMoves = function () {
    Game_Battler.prototype.makeMoves.call(this);
};
// TODO make 'DEFAULT' a constant
Game_Enemy.prototype.makeActions = function () {
    Game_Battler.prototype.makeActions.call(this);
    if (this.numActions() > 0) {
        var actionList = this.getAI().actions.filter(function (a) {
            return this.isActionValid(a);
        }, this);
        if (actionList.length > 0) {
            this.selectAllActions(actionList);
        }
    }
    this.setActionState('waiting');
};
Game_Enemy.prototype.findMoves = function () {
    if (!this.isConfused()) {
        this.findPosition();
    }
    this.makeShortestMoves();
};
// TODO simplify this, no use adding all the ratings together here
Game_Enemy.prototype.findPosition = function () {
    // Rewrite this if you want to change the target search behavior.
    this._rate = 0;
    var saveX = this.tx;
    var saveY = this.ty;
    $gameMap.makeRange(this.agg, this.event());
    for (var i = 0; i < $gameMap.tiles().length; i++) {
        var tile = $gameMap.tiles()[i];
        this._tx = $gameMap.positionTileX(tile);
        this._ty = $gameMap.positionTileY(tile);
        var actionList = this.getAI().actions.filter(function (a) {
            return this.isActionValid(a);
        }, this);
        var sum = actionList.reduce(function (r, a) {
            return r + a.rating;
        }, 0);
        if (sum > this._rate) {
            this._rate = sum;
            saveX = this.tx;
            saveY = this.ty;
        }
    }
    $gameMap.clearTiles();
    this._tx = saveX;
    this._ty = saveY;
};
Game_Enemy.prototype.isPattern = function () {
    return this._rate > 0;
};
Game_Enemy.prototype.applyMove = function () {
    var action = this.currentMove();
    if (action) {
        action.applyMove();
    }
};
Game_Enemy.prototype.paramBase = function (paramId) {
    // mhp
    if (paramId === 0) {
        return TEW.DATABASE.NPCS.SET[this._enemyId].wounds;
    }
    return TEW.DATABASE.NPCS.SET[this._enemyId].stats[this.statName(paramId)];
};
// MHP is handled separately
Game_Enemy.prototype.statName = function (paramId) {
    return StatArray[paramId - 1];
};
Game_Enemy.prototype.enemy = function () {
    return TEW.DATABASE.NPCS.SET[this._enemyId];
};
Game_Enemy.prototype.getAI = function () {
    const aiId = this.tparam('AI') || 'DEFAULT';
    return TEW.DATABASE.NPCS.AI[aiId];
};
// #endregion =========================== Game_Enemy ============================== //
// ============================== //
// #region ============================== Game_Event ============================== //
//-----------------------------------------------------------------------------
// Game_Event
//
// The game object class for an event. It contains functionality for event page
// switching and running parallel process events.
TEW.MEMORY.gameEventInitMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function () {
    TEW.MEMORY.gameEventInitMembers.call(this);
    this._battlerId = null;
    this._actor = null;
};
Game_Event.prototype.setBattler = function (battler) {
    this._battler = battler;
};
Game_Event.prototype.isActor = function () {
    return this._battler && this._battler.isActor();
};
Game_Event.prototype.isEnemy = function () {
    return this._battler && this._battler.isEnemy();
};
// in a perfect world Game_Battler inherits from Game Event ;-)
Game_Event.prototype.battler = function () {
    return this._battler;
};
Game_Event.prototype.setActor = function (actor) {
    this._actor = actor;
};
Game_Event.prototype.tparam = function (paramString) {
    var param = this.event().meta[paramString];
    if (typeof param === 'string') {
        param = param.replace(/\s/g, '');
    }
    return param;
};
TEW.MEMORY.gameEventIsCollidedWithEvents = Game_Event.prototype.isCollidedWithEvents;
Game_Event.prototype.isCollidedWithEvents = function (x, y) {
    // for an actor to pass through an actor
    if (this.isActor() || this.isEnemy()) {
        return Game_Character.prototype.isCollidedWithEvents.call(this, x, y);
    }
    else {
        return TEW.MEMORY.gameEventIsCollidedWithEvents.call(this, x, y);
    }
};
Game_Event.prototype.isAppeared = function () {
    return this.findProperPageIndex() !== -1 && !this._erased;
};
TEW.MEMORY.gameEventUpdate = Game_Event.prototype.update;
Game_Event.prototype.update = function () {
    this.updateAppeared();
    TEW.MEMORY.gameEventUpdate.call(this);
};
Game_Event.prototype.updateAppeared = function () {
    if (this.isActor() || this.isEnemy()) {
        if (this.isAppeared()) {
            this._battler.appear();
        }
        else {
            this._battler.hide();
        }
    }
};
Game_Event.prototype.name = function () {
    return this.tparam('Name') || this.event().name;
};
// #endregion =========================== Game_Event ============================== //
// ============================== //
// #region ============================== Game_Map ============================== //
//-----------------------------------------------------------------------------
// Game_Map
//
// The game object class for a map. It contains scrolling and passage
// determination functions.
TEW.MEMORY.gameMapInit = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function () {
    TEW.MEMORY.gameMapInit.call(this);
    this._tiles = [];
    this._color = '';
    this._destinationX = null;
    this._destinationY = null;
};
Game_Map.prototype.addTile = function (tile) {
    this._tiles.push(tile);
};
Game_Map.prototype.positionTileX = function (tile) {
    return tile % $dataMap.width;
};
Game_Map.prototype.positionTileY = function (tile) {
    return Math.floor(tile / $dataMap.width);
};
Game_Map.prototype.isTileAdded = function (tile) {
    return this._tiles.contains(tile);
};
Game_Map.prototype.tile = function (x, y) {
    return y * $dataMap.width + x;
};
Game_Map.prototype.tiles = function () {
    return this._tiles;
};
Game_Map.prototype.clearTiles = function () {
    this._tiles = [];
};
Game_Map.prototype.isOnTiles = function (x, y) {
    return this._tiles.contains(this.tile(x, y));
};
Game_Map.prototype.setMoveColor = function () {
    this._color = TEW.COMBAT.SYSTEM.moveScopeColor;
};
Game_Map.prototype.setActionColor = function (action) {
    this._color = action.color();
};
Game_Map.prototype.color = function () {
    return this._color;
};
Game_Map.prototype.performScroll = function (x, y) {
    var x2 = Math.floor(Math.min(x, $gameMap.width() - this.screenTileX() / 2));
    var y2 = Math.floor(Math.min(y, $gameMap.height() - this.screenTileY() / 2));
    this._destinationX = Math.round(Math.max(x2 - this.screenTileX() / 2, 0));
    this._destinationY = Math.round(Math.max(y2 - this.screenTileY() / 2, 0));
    this._scrollSpeed = 5;
};
Game_Map.prototype.clearDestination = function () {
    this._destinationX = null;
    this._destinationY = null;
};
Game_Map.prototype.isDestinationValid = function () {
    return this._destinationX !== null;
};
TEW.MEMORY.gameMapUpdateScroll = Game_Map.prototype.updateScroll;
Game_Map.prototype.updateScroll = function () {
    if (this.isDestinationValid()) {
        var x = Math.max(this._displayX, 0);
        var y = Math.max(this._displayY, 0);
        if (y < this._destinationY) {
            var d = Math.min(this._destinationY - y, this.scrollDistance());
            $gameMap.scrollDown(d);
        }
        if (x > this._destinationX) {
            var d = Math.min(x - this._destinationX, this.scrollDistance());
            $gameMap.scrollLeft(d);
        }
        if (x < this._destinationX) {
            var d = Math.min(this._destinationX - x, this.scrollDistance());
            $gameMap.scrollRight(d);
        }
        if (y > this._destinationY) {
            var d = Math.min(y - this._destinationY, this.scrollDistance());
            $gameMap.scrollUp(d);
        }
        if (x === this._destinationX && y === this._destinationY) {
            this.clearDestination();
        }
    }
    else {
        TEW.MEMORY.gameMapUpdateScroll.call(this);
    }
};
Game_Map.prototype.makeRange = function (distance, event, through) {
    console.log("making range");
    if (through === undefined) {
        through = false;
    }
    var queue = [];
    var level = [];
    var tiles = [];
    var startTile = this.tile(event.x, event.y);
    this.clearTiles();
    queue.push(startTile);
    level[startTile] = 0;
    this.addTile(startTile);
    while (queue.length && level[queue[0]] < distance) {
        var start = queue.shift();
        var x = this.positionTileX(start);
        var y = this.positionTileY(start);
        for (var d = 8; d >= 2; d -= 2) {
            if (event.canPass(x, y, d) || through) {
                var x2 = this.roundXWithDirection(x, d);
                var y2 = this.roundYWithDirection(y, d);
                var tile = this.tile(x2, y2);
                if (!tiles.includes(tile)) {
                    queue.push(tile);
                    level[tile] = level[start] + 1;
                    tiles.push(tile);
                    if ($gameMap.isPassableTile(x2, y2)) {
                        this.addTile(tile);
                    }
                }
            }
        }
    }
};
Game_Map.prototype.eventsRangeXy = function (tx, ty) {
    return this.events().filter(function (event) {
        var x = event.x;
        var y = event.y;
        var d = Number(event.tparam('range')) || 1;
        for (var i = x - d; i <= x + d; i++) {
            for (var j = y - d; j <= y + d; j++) {
                if (Math.abs(i - x) + Math.abs(j - y) <= d) {
                    if (tx === i && ty === j) {
                        return true;
                    }
                }
            }
        }
        return false;
    }, tx, ty);
};
Game_Map.prototype.isPassableTile = function (x, y) {
    for (var i = 0; i < 4; i++) {
        var direction = 2 + i * 2;
        if ($gameMap.isPassable(x, y, direction)) {
            return true;
        }
    }
    return false;
};
// #endregion =========================== Game_Map ============================== //
// ============================== //
// #region ============================== Game_Party ============================== //
//-----------------------------------------------------------------------------
// Game_Party
//
// The game object class for the party. Information such as gold and items is
// included.
Game_Party.prototype.setupTactics = function (actors) {
    const actorIds = actors.map(actor => actor.actorId());
    this._maxBattleMembers = actorIds.length;
    this._actors = actorIds;
    $gamePlayer.refresh();
    $gameMap.requestRefresh();
};
Game_Party.prototype.setMaxBattleMembers = function () {
    this._maxBattleMembers = this.allMembers().length;
};
Game_Party.prototype.maxBattleMembers = function () {
    return $gamePartyTs.inBattle() ? this._maxBattleMembers : 4;
};
Game_Party.prototype.members = function () {
    return this.inBattle() || $gamePartyTs.inBattle() ? this.battleMembers() : this.allMembers();
};
Game_Party.prototype.memberId = function (partyId) {
    return this.members()[partyId - 1].actorId();
};

// #endregion =========================== Game_Party ============================== //
// ============================== //
// #region ============================== Game_PartyTs ============================== //
//-----------------------------------------------------------------------------
// Game_PartyTs
//
// The game object class for a party tactics.
function Game_PartyTs() {
    this.initialize.apply(this, arguments);
}
Game_PartyTs.prototype = Object.create(Game_UnitTs.prototype);
Game_PartyTs.prototype.constructor = Game_PartyTs;
Game_PartyTs.prototype.initialize = function () {
    Game_UnitTs.prototype.initialize.call(this);
    this.clear();
};
Game_PartyTs.prototype.members = function () {
    return this._actors.map(function (id) {
        return $gameActors.actor(id);
    });
};
Game_PartyTs.prototype.clear = function () {
    this._actors = [];
    this._maxBattleMembers = 0;
    this._inBattle = false;
};
Game_PartyTs.prototype.maxBattleMembers = function () {
    return this._maxBattleMembers;
};
Game_PartyTs.prototype.addActor = function (actorId, event, needRefresh) {
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
Game_PartyTs.prototype.actors = function () {
    return this._actors;
};
Game_PartyTs.prototype.removeActor = function () {
};
Game_PartyTs.prototype.onBattleStart = function () {
    this._inBattle = true;
    $gameParty.onBattleStart();
};
Game_PartyTs.prototype.inBattle = function () {
    return this._inBattle;
};
Game_PartyTs.prototype.allMembers = function () {
    return this._actors.map(function (id) {
        return $gameActors.actor(id);
    });
};
// TODO prolly useless, we should check actor state at the start of its turn
Game_PartyTs.prototype.restrictedMembers = function () {
    return this.members().filter(function (member) {
        return (member.isRestricted() || member.isAutoBattle()) && member.isAlive();
    }, this);
};
Game_PartyTs.prototype.onAllTurnEnd = function () {
    this.aliveMembers().forEach(function (actor) {
        actor.onActionEnd();
    });
};
Game_PartyTs.prototype.onBattleEnd = function () {
    $gameParty.onBattleEnd();
    this._inBattle = false;
};
Game_PartyTs.prototype.onClear = function () {
    Game_UnitTs.prototype.onClear.call(this);
    this._actors = [];
};
// #endregion =========================== Game_PartyTs ============================== //
// ============================== //
// #region ============================== Game_Screen ============================== //
//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.
TEW.MEMORY.gameScreenClear = Game_Screen.prototype.clear;
Game_Screen.prototype.clear = function () {
    TEW.MEMORY.gameScreenClear.call(this);
    this._battleStart = true;
};
TEW.MEMORY.gameScreenOnBattleStart = Game_Screen.prototype.onBattleStart;
Game_Screen.prototype.onBattleStart = function () {
    TEW.MEMORY.gameScreenOnBattleStart.call(this);
    this.clearStart();
};
Game_Screen.prototype.clearStart = function () {
    this._startDuration = this._battleStart ? TEW.COMBAT.SYSTEM.durationStartSprite : 0;
    this._battleStart = false;
};
Game_Screen.prototype.startDuration = function () {
    return this._startDuration;
};
TEW.MEMORY.gameScreenUpdate = Game_Screen.prototype.update;
Game_Screen.prototype.update = function () {
    TEW.MEMORY.gameScreenUpdate.call(this);
    this.updateStart();
};
Game_Screen.prototype.updateStart = function () {
    if (this._startDuration > 0) {
        this._startDuration--;
    }
};
Game_Screen.prototype.onBattleEnd = function () {
    this._battleStart = true;
    if (TEW.COMBAT.SYSTEM.fadeOutEnd) {
        this.startFadeOut(this.fadeSpeed());
    }
};
Game_Screen.prototype.fadeSpeed = function () {
    return 24;
};
// #endregion =========================== Game_Screen ============================== //
// ============================== //
// #region ============================== Game_Selector ============================== //
//-----------------------------------------------------------------------------
// Game_Selector
//
// The object tied to the moveable tile selector.
function Game_Selector() {
    this.initialize.apply(this);
}
Game_Selector.prototype = Object.create(Object.prototype);
Game_Selector.prototype.constructor = Game_Selector;
Object.defineProperties(Game_Selector.prototype, {
    x: { get: function () { return this._x; }, configurable: true },
    y: { get: function () { return this._y; }, configurable: true }
});
Game_Selector.prototype.initialize = function () {
    this.initMembers();
};
Game_Selector.prototype.initMembers = function () {
    this._x = 0;
    this._y = 0;
    this._realX = 0;
    this._realY = 0;
    this._direction = 0;
    this._speed = TEW.COMBAT.SYSTEM.selectorSpeed + 3 || 5;
    this._wait = 0;
    this._selectIndex = -1;
    this._isMoving = false;
    this._transparent = false;
    this._scrolledX = 0;
    this._scrolledY = 0;
    this._active = true;
    this._reachedDest = false;
};
Game_Selector.prototype.pos = function (x, y) {
    return this.x === x && this.y === y;
};
Game_Selector.prototype.setPosition = function (x, y) {
    this._realX = this._x = x;
    this._realY = this._y = y;
};
Game_Selector.prototype.isWaiting = function () {
    return this._wait > 0;
};
Game_Selector.prototype.activate = function () {
    this._active = true;
};
Game_Selector.prototype.deactivate = function () {
    this._active = false;
};
Game_Selector.prototype.select = function () {
    return this.battlers()[this._selectIndex];
};
Game_Selector.prototype.isMoving = function () {
    return this._isMoving;
};
Game_Selector.prototype.getInputDirection = function () {
    return Input.dir4;
};
Game_Selector.prototype.updateMoveByInput = function () {
    if (BattleManager.isActive()) {
        this.moveByInput();
    }
};
Game_Selector.prototype.update = function () {
    this._isMoving = false;
    this.moveByDestination();
    this.updateMove();
    // don't update scroll here if destination...
    if (!$gameMap.isDestinationValid()) {
        this.updateScroll(this._scrolledX, this._scrolledY);
    }
    this.updateWait();
    this._scrolledX = this.scrolledX();
    this._scrolledY = this.scrolledY();
};
Game_Selector.prototype.distancePerFrame = function () {
    return Math.pow(2, this._speed) / 256;
};
Game_Selector.prototype.updateWait = function () {
    if (this.isWaiting()) {
        this._wait -= this.distancePerFrame();
    }
};
Game_Selector.prototype.canMove = function () {
    return !$gameMap.isEventRunning() && !$gameMessage.isBusy() &&
        this._active;
};
Game_Selector.prototype.moveByInput = function () {
    var direction = this.getInputDirection();
    if (this.canMove() && !this.isWaiting() && direction > 0) {
        var x = $gameMap.roundXWithDirection(this.x, direction);
        var y = $gameMap.roundYWithDirection(this.y, direction);
        if (this.isValid(x, y)) {
            SoundManager.playCursor();
            this.executeMove(x, y, direction);
            this.updateSelect();
        }
    }
};
Game_Selector.prototype.moveByDestination = function () {
    if (this.canMove() && !this.isWaiting() && $gameTemp.isDestinationValid()) {
        var x = $gameTemp.destinationX();
        var y = $gameTemp.destinationY();
        var direction = this.findDirectionTo(x, y);
        if (direction > 0) {
            x = $gameMap.roundXWithDirection(this.x, direction);
            y = $gameMap.roundYWithDirection(this.y, direction);
            this.executeMove(x, y, direction);
            this.updateSelect();
        }
        else {
            this._isMoving = true;
            this._reachedDest = true;
            $gameTemp.clearDestination();
        }
    }
};
Game_Selector.prototype.findDirectionTo = function (x, y) {
    if (this.y < y) {
        return 2;
    }
    if (this.x > x) {
        return 4;
    }
    if (this.x < x) {
        return 6;
    }
    if (this.y > y) {
        return 8;
    }
    return 0;
};
Game_Selector.prototype.executeMove = function (x, y, direction) {
    this._wait = 1;
    this._isMoving = true;
    this._x = x;
    this._y = y;
    this._direction = direction;
};
Game_Selector.prototype.performTransfer = function (x, y) {
    $gameMap.performScroll(x, y);
    this._x = this._realX = x;
    this._y = this._realY = y;
    this.updateSelect();
};
Game_Selector.prototype.isValid = function (x, y) {
    return x >= 0 && y >= 0 && x < $gameMap.width() && y < $gameMap.height();
};
Game_Selector.prototype.updateMove = function () {
    if (this._x < this._realX) {
        this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
    }
    if (this._x > this._realX) {
        this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
    }
    if (this._y < this._realY) {
        this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
    }
    if (this._y > this._realY) {
        this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
    }
};
Game_Selector.prototype.battlers = function () {
    return $gamePartyTs.members().concat($gameTroopTs.members());
};
Game_Selector.prototype.updateSelect = function () {
    this._selectIndex = -1;
    for (let i = 0; i < this.battlers().length; i++) {
        const battler = this.battlers()[i];
        if (this.pos(battler.x, battler.y)) {
            if (battler.isAlive()) {
                this._selectIndex = i;
            }
        }
    }
};
Game_Selector.prototype.updateScroll = function (lastScrolledX, lastScrolledY) {
    const x1 = lastScrolledX;
    const y1 = lastScrolledY;
    const x2 = this.scrolledX();
    const y2 = this.scrolledY();
    if (y2 > y1 && y2 > this.centerY()) {
        $gameMap.scrollDown(y2 - y1);
    }
    if (x2 < x1 && x2 < this.centerX()) {
        $gameMap.scrollLeft(x1 - x2);
    }
    if (x2 > x1 && x2 > this.centerX()) {
        $gameMap.scrollRight(x2 - x1);
    }
    if (y2 < y1 && y2 < this.centerY()) {
        $gameMap.scrollUp(y1 - y2);
    }
};
Game_Selector.prototype.centerX = function () {
    return (Graphics.width / $gameMap.tileWidth() - 1) / 2.0;
};
Game_Selector.prototype.centerY = function () {
    return (Graphics.height / $gameMap.tileHeight() - 1) / 2.0;
};
Game_Selector.prototype.moveTo = function (x, y) {
    $gameTemp.setDestination(x, y);
};
Game_Selector.prototype.savePosition = function () {
    $gameTemp.setPosition(this.x, this.y);
};
Game_Selector.prototype.restorePosition = function () {
    if ($gameTemp.isPositionValid()) {
        var positionX = $gameTemp.positionX();
        var positionY = $gameTemp.positionY();
        this.performTransfer(positionX, positionY);
    }
};
Game_Selector.prototype.scrolledX = function () {
    return $gameMap.adjustX(this._realX);
};
Game_Selector.prototype.scrolledY = function () {
    return $gameMap.adjustY(this._realY);
};
Game_Selector.prototype.screenX = function () {
    var tw = $gameMap.tileWidth();
    return Math.round($gameMap.adjustX(this.x) * tw);
};
Game_Selector.prototype.screenY = function () {
    var th = $gameMap.tileHeight();
    return Math.round($gameMap.adjustY(this.y) * th);
};
Game_Selector.prototype.isOk = function () {
    return Input.isTriggered('ok') || this.triggerTouchAction();
};
Game_Selector.prototype.isCancelled = function () {
    return Input.isTriggered('menu') || TouchInput.isCancelled();
};
Game_Selector.prototype.triggerTouchAction = function () {
    if (this._reachedDest) {
        this._reachedDest = false;
        return true;
    }
    return false;
};
Game_Selector.prototype.setTransparent = function (transparent) {
    this._transparent = transparent;
};
Game_Selector.prototype.isTransparent = function () {
    return this._transparent;
};
Game_Selector.prototype.isBusy = function () {
    return ($gameMap.isDestinationValid() || $gameTemp.isDestinationValid());
};
Game_Selector.prototype.selectActor = function () {
    var select = this.select();
    if (select && select.isActor() && select.canAction()) {
        if (this.isOk()) {
            SoundManager.playOk();
            return select;
        }
    }
};
Game_Selector.prototype.checkDestination = function (subject) {
    var battler = this.select();
    if ($gameMap.isOnTiles(this.x, this.y)) {
        if (!battler || subject === battler) {
            if (this.isOk()) {
                return true;
            }
        }
    }
    return false;
};
Game_Selector.prototype.selectTarget = function (action) {
    var select = this.select();
    if ($gameSelector.isOk()) {
        if ($gameMap.isOnTiles(this.x, this.y) && action.isTargetValid(select)) {
            SoundManager.playOk();
            return select.index();
        }
        else {
            SoundManager.playBuzzer();
        }
    }
    return -1;
};
// #endregion =========================== Game_Selector ============================== //
// ============================== //
// #region ============================== Game_Switches ============================== //
//-----------------------------------------------------------------------------
// Game_Switches
//
// The game object class for switches.
Game_Switches.prototype.update = function () {
    this.updatePhase();
};
Game_Switches.prototype.updatePhase = function () {
    this.setValue(TEW.COMBAT.SYSTEM.playerPhaseId, false);
    this.setValue(TEW.COMBAT.SYSTEM.enemyPhaseId, false);
    switch (BattleManager.phase()) {
        case 'playerPhase':
            this.setValue(TEW.COMBAT.SYSTEM.playerPhaseId, true);
            break;
        case 'enemyPhase':
            this.setValue(TEW.COMBAT.SYSTEM.enemyPhaseId, true);
            break;
    }
};
// #endregion =========================== Game_Switches ============================== //
// ============================== //
// #region ============================== Game_Temp ============================== //
//-----------------------------------------------------------------------------
// Game_Temp
//
// The game object class for temporary data that is not included in save data.
TEW.MEMORY.gameTempInit = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function () {
    TEW.MEMORY.gameTempInit.call(this);
    this._positionX = null;
    this._positionY = null;
    this._direction = null;
    this._canCancel = true;
};
Game_Temp.prototype.isPositionValid = function (x, y) {
    this._positionX = x;
    this._positionY = y;
};
Game_Temp.prototype.setPosition = function (x, y) {
    this._positionX = x;
    this._positionY = y;
};
Game_Temp.prototype.setDirection = function (d) {
    this._direction = d;
};
Game_Temp.prototype.direction = function () {
    return this._direction;
};
Game_Temp.prototype.clearDirection = function () {
    this._direction = null;
};
Game_Temp.prototype.clearPosition = function () {
    this._positionX = null;
    this._positionY = null;
};
Game_Temp.prototype.isPositionValid = function () {
    return this._positionX !== null;
};
Game_Temp.prototype.positionX = function () {
    return this._positionX;
};
Game_Temp.prototype.positionY = function () {
    return this._positionY;
};
Game_Temp.prototype.canCancel = function () {
    return this._canCancel;
};
Game_Temp.prototype.setCancel = function (canCancel) {
    this._canCancel = canCancel;
};
// #endregion =========================== Game_Temp ============================== //
// ============================== //
// #region ============================== Game_Troop ============================== //
//-----------------------------------------------------------------------------
// Game_Troop
//
// The game object class for a troop and the battle-related data.
Game_Troop.prototype.setupTactics = function (enemies) {
    this._enemies = [];
    enemies.forEach(function (member) {
        if (member && !member.isBattleMember()) {
            this._enemies.push(member);
        }
    }, this);
};
TEW.MEMORY.gameTroopMeetsCondition = Game_Troop.prototype.meetsConditions;
Game_Troop.prototype.meetsConditions = function (page) {
    var c = page.conditions;
    if (c.enemyValid) {
        var enemy = $gameTroopTs.members()[c.enemyIndex];
        if (!enemy || enemy.hpRate() * 100 > c.enemyHp) {
            return false;
        }
        if (!c.turnEnding && !c.turnValid && !c.actorValid && !c.switchValid) {
            return true; // Only enemy valid
        }
    }
    else {
        page.conditions.enemyValid = false;
        return TEW.MEMORY.gameTroopMeetsCondition.call(this, page);
    }
};
// TODO never call this
Game_Troop.prototype.expTotal = function () {
    return 0;
};
// TODO never call this
Game_Troop.prototype.goldTotal = function () {
    return 0;
};
// TODO never call this
Game_Troop.prototype.goldRate = function () {
    return 0;
};
// TODO never call this
Game_Troop.prototype.makeDropItems = function () {
    return [];
};
// Use TEW NPC data instead of RMMV's enemy database
Game_Troop.prototype.setup = function (troopId) {
    this.clear();
    this._troopId = troopId;
    this._enemies = [];
    this.troop().members.forEach(function (member) {
        if (TEW.DATABASE.NPCS.SET[member.enemyId]) {
            var enemyId = member.enemyId;
            var x = member.x;
            var y = member.y;
            var enemy = new Game_Enemy(enemyId, x, y);
            if (member.hidden) {
                enemy.hide();
            }
            this._enemies.push(enemy);
        }
    }, this);
    this.makeUniqueNames();
};
Game_Troop.prototype.troop = function () {
    const tewTroop = TEW.DATABASE.NPCS.TROOPS[this._troopId];
    return {
        members: tewTroop.members,
        pages: []
    };
};
// #endregion =========================== Game_Troop ============================== //
// ============================== //
// #region ============================== Game_TroopTs ============================== //
//-----------------------------------------------------------------------------
// Game_TroopTs
//
// The game object class for a troop tactic.
function Game_TroopTs() {
    this.initialize.apply(this, arguments);
}
Game_TroopTs.prototype = Object.create(Game_UnitTs.prototype);
Game_TroopTs.prototype.constructor = Game_TroopTs;
Game_TroopTs.prototype.initialize = function () {
    Game_UnitTs.prototype.initialize.call(this);
    this.clear();
};
Game_TroopTs.prototype.clear = function () {
    this._enemies = [];
};
Game_TroopTs.prototype.addEnemy = function (enemyId, event) {
    var enemy = new Game_Enemy(enemyId);
    var eventId = event.eventId();
    this._enemies.push(enemy);
    enemy.setupEvent(eventId);
};
Game_TroopTs.prototype.addTroop = function (index, event) {
    var enemy = $gameTroop.members()[index - 1];
    var eventId = event.eventId();
    this._enemies.splice(index - 1, 0, enemy);
    enemy.setupEvent(eventId);
};
Game_TroopTs.prototype.onBattleStart = function () {
    $gameTroop.onBattleStart();
};
Game_TroopTs.prototype.members = function () {
    return this._enemies.slice(0);
};
Game_TroopTs.prototype.battleMembers = function () {
    return this.members().filter(function (enemy) {
        return enemy.isAlive();
    });
};
Game_TroopTs.prototype.onBattleEnd = function () {
    $gameTroop.onBattleEnd();
};
Game_TroopTs.prototype.onClear = function () {
    Game_UnitTs.prototype.onClear.call(this);
    this._enemies = [];
};
// #endregion =========================== Game_TroopTs ============================== //
// ============================== //
// #region ============================== Game_Unit ============================== //
//-----------------------------------------------------------------------------
// Game_Unit
//
// The superclass of Game_Party and Game_Troop.
TEW.MEMORY.gameUnitOnBattleStart = Game_Unit.prototype.onBattleStart;
Game_Unit.prototype.onBattleStart = function () {
    TEW.MEMORY.gameUnitOnBattleStart.call(this);
    if ($gamePartyTs.inBattle()) {
        this._inBattle = false;
    }
};
// #endregion =========================== Game_Unit ============================== //
// ============================== //
// #region ============================== Game_UnitTs ============================== //
//-----------------------------------------------------------------------------
// Game_UnitTs
//
// The superclass of Game_PartyTs and Game_TroopTs.
function Game_UnitTs() {
    this.initialize.apply(this, arguments);
}
Game_UnitTs.prototype.initialize = function () {
    this._inBattle = false;
};
Game_UnitTs.prototype.members = function () {
    return [];
};
Game_UnitTs.prototype.aliveMembers = function () {
    return this.members().filter(function (member) {
        return member.isAlive();
    });
};
Game_UnitTs.prototype.isAllDead = function () {
    return this.aliveMembers().length === 0;
};
Game_UnitTs.prototype.onTurnStart = function () {
    this.members().forEach(function (member) {
        member.onTurnStart();
    });
};
Game_UnitTs.prototype.canActionMembers = function () {
    return this.aliveMembers().filter(function (member) {
        return member.canAction();
    });
};
Game_UnitTs.prototype.isPhase = function () {
    return this.canActionMembers().length > 0;
};
Game_UnitTs.prototype.onClear = function () {
    this.members().forEach(function (member) {
        member.onClear();
    });
};
// #endregion =========================== Game_UnitTs ============================== //
// ============================== //
// #region ============================== Game_Variables ============================== //
//-----------------------------------------------------------------------------
// Game_Variables
//
// The game object class for variables.
Game_Variables.prototype.update = function () {
    this.updatePhase();
    this.updatePlayerPhase();
    this.updateBattlePhase();
    this.updateTurnCount();
};
Game_Variables.prototype.updatePhase = function () {
    switch (BattleManager.phase()) {
        case 'startPhase':
            var value = 1;
            break;
        case 'playerPhase':
            var value = 2;
            break;
        case 'enemyPhase':
            var value = 3;
            break;
        // can't to be used
        case 'battleEnd':
            var value = 4;
            break;
        default:
            var value = 0;
            break;
    }
    this.setValue(TEW.COMBAT.SYSTEM.phaseVarId, value);
};
Game_Variables.prototype.updatePlayerPhase = function () {
    switch (BattleManager.battlePhase()) {
        case 'explore':
            var value = 1;
            break;
        case 'select':
            var value = 2;
            break;
        case 'target':
            var value = 3;
            break;
        default:
            var value = 0;
            break;
    }
    this.setValue(TEW.COMBAT.SYSTEM.playerPhaseVarId, value);
};
Game_Variables.prototype.updateBattlePhase = function () {
    switch (BattleManager.battlePhase()) {
        case 'start':
            var value = 1;
            break;
        case 'move':
            var value = 2;
            break;
        case 'action':
            var value = 3;
            break;
        case 'turnEnd':
            var value = 4;
            break;
        default:
            var value = 0;
            break;
    }
    this.setValue(TEW.COMBAT.SYSTEM.battlePhaseVarId, value);
};
Game_Variables.prototype.updateTurnCount = function () {
    this.setValue(TEW.COMBAT.SYSTEM.turnCountVarId, $gameTroop.turnCount());
};
// #endregion =========================== Game_Variables ============================== //
// ============================== //
// #region ============================== Game_Interpreter ============================== //
//-----------------------------------------------------------------------------
// Game_Interpreter
//
// The interpreter for running event commands.
// TODO command names
TEW.MEMORY.gameInterpreterPluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    TEW.MEMORY.gameInterpreterPluginCommand.call(this, command, args);
    switch (command) {
        case 'TacticsSystem.BattleProcessing':
            this.battleProcessing(args[0]);
            break;
        case 'TacticsSystem.ProcessVictory':
            this.processVictory();
            break;
        case 'TacticsSystem.ProcessDefeat':
            this.processDefeat();
            break;
        case 'TacticsSystem.ClearAll':
            this.clearAll(args[0]);
            break;
        case 'TacticsSystem.SelectorActive':
            this.selectorActive(args[0]);
            break;
        case 'TacticsSystem.SelectorTransfer':
            this.selectorTransfer(args[0], args[1]);
            break;
        case 'TacticsSystem.SelectorMoveTo':
            this.selectorMoveTo(args[0], args[1]);
            break;
        case 'TacticsSystem.SelectorEvent':
            this.selectorEvent(args[0]);
            break;
        case 'TacticsSystem.SelectorSave':
            this.selectorSave();
            break;
        case 'TacticsSystem.SelectorRestore':
            this.selectorRestore();
            break;
        case 'TacticsSystem.BattlerEndAction':
            this.battlerEndAction();
            break;
        case 'TacticsSystem.WindowCloseCommand':
            this.windowCloseCommand();
            break;
        case 'TacticsSystem.MapClearTiles':
            this.mapClearTiles();
            break;
    }
};
// Clear All
Game_Interpreter.prototype.clearAll = function (active) {
    TEW.COMBAT.SYSTEM.clearAll = active.toLowerCase() !== 'off';
};
// Process Victory
Game_Interpreter.prototype.processVictory = function () {
    BattleManager.processVictory();
};
// Process Defeat
Game_Interpreter.prototype.processDefeat = function () {
    TEW.COMBAT.SYSTEM.isDefeated = true;
    BattleManager.processDefeat();
};
// Selector Active
Game_Interpreter.prototype.selectorActive = function (active) {
    if (active.toLowerCase() === 'off') {
        $gameSelector.deactivate();
    }
    else {
        $gameSelector.activate();
    }
};
// Selector Transfer
Game_Interpreter.prototype.selectorTransfer = function (x, y) {
    $gameSelector.performTransfer(Number(x), Number(y));
    this.setWaitMode('TEW_Combat.selector');
};
// Selector Move To
Game_Interpreter.prototype.selectorMoveTo = function (x, y) {
    $gameSelector.moveTo(Number(x), Number(y));
    this.setWaitMode('TEW_Combat.selector');
};
// Selector Event
Game_Interpreter.prototype.selectorEvent = function (eventId) {
    var event = $gameMap.event(Number(eventId));
    $gameSelector.performTransfer(event.x, event.y);
    this.setWaitMode('TEW_Combat.selector');
};
// Selector Save
Game_Interpreter.prototype.selectorSave = function () {
    $gameSelector.savePosition();
};
// Selector Restore
Game_Interpreter.prototype.selectorRestore = function () {
    $gameSelector.restorePosition();
};
// Battler End Action
Game_Interpreter.prototype.battlerEndAction = function () {
    BattleManager.endAction();
};
// Close Command Window
Game_Interpreter.prototype.windowCloseCommand = function () {
    BattleManager.closeCommand();
};
// Map Clear Tiles
Game_Interpreter.prototype.mapClearTiles = function () {
    $gameMap.clearTiles();
};
TEW.MEMORY.gameInterpreterUpdateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function () {
    var waiting = false;
    switch (this._waitMode) {
        case 'TEW_Combat.battle':
            waiting = SceneManager.isCurrentScene(Scene_Battle) || SceneManager.isSceneChanging();
            break;
        case 'TEW_Combat.selector':
            waiting = $gameSelector.isBusy();
            break;
        default:
            return TEW.MEMORY.gameInterpreterUpdateWaitMode.call(this);
    }
    if (!waiting) {
        if (this._waitMode === 'TEW_Combat.battle') {
            BattleManager.clear();
        }
        this._waitMode = '';
    }
    return waiting;
};
TEW.MEMORY.gameInterpreterIterateEnemyIndex = Game_Interpreter.prototype.iterateEnemyIndex;
Game_Interpreter.prototype.iterateEnemyIndex = function (param, callback) {
    if ($gamePartyTs.inBattle()) {
        if (param < 0) {
            $gameTroopTs.members().forEach(callback);
        }
        else {
            var enemy = $gameTroopTs.members()[param];
            if (enemy) {
                callback(enemy);
            }
        }
    }
    else {
        TEW.MEMORY.gameInterpreterIterateEnemyIndex.call(this, param, callback);
    }
};
// Redefining event command : Battle Processing
// TODO remove useless branches
Game_Interpreter.prototype.command301 = function () {
    this.setWaitMode('TEW_Combat.battle');
    if (!$gameParty.inBattle()) {
        var troopId;
        if (this._params[0] === 0) { // Direct designation
            troopId = this._params[1];
        }
        else if (this._params[0] === 1) { // Designation with a variable
            troopId = $gameVariables.value(this._params[1]);
        }
        else { // Same as Random Encounter
            troopId = $gamePlayer.makeEncounterTroopId();
        }
        if (TEW.DATABASE.NPCS.TROOPS[troopId]) {
            BattleManager.setup(troopId, this._params[2], this._params[3]);
            BattleManager.setEventCallback(function (n) {
                this._branch[this._indent] = n;
            }.bind(this));
            $gamePlayer.makeEncounterCount();
            SceneManager.push(Scene_Battle);
        }
    }
    return true;
};
// #endregion =========================== Game_Interpreter ============================== //
// ============================== //
// #region ============================== Window_MoveCommand ============================== //
//-----------------------------------------------------------------------------
// Window_MoveCommand
//
// The window for selecting an actor's action on the tactics screen.
function Window_MoveCommand() {
    this.initialize.apply(this, arguments);
}
Window_MoveCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_MoveCommand.prototype.constructor = Window_MoveCommand;
Window_MoveCommand.WALK_COMMAND_INDEX = 0;
Window_MoveCommand.WALK_MOVE_MULTIPLIER = 1;
Window_MoveCommand.RUN_COMMAND_INDEX = 1;
Window_MoveCommand.RUN_MOVE_MULTIPLIER = 2;
Window_MoveCommand.CHARGE_COMMAND_INDEX = 2;
Window_MoveCommand.CHARGE_MOVE_MULTIPLIER = 1;
Window_MoveCommand.SWITCH_WEAPON_COMMAND_INDEX = 3;
Window_MoveCommand.SWITCH_WEAPON_MOVE_MULTIPLIER = 0;
Window_MoveCommand.prototype.initialize = function () {
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, this.windowWidth(), y);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};
Window_MoveCommand.prototype.setActor = function (actor) {
    this._actor = actor;
    this.refresh();
    this.selectLast();
    this.activate();
    this.open();
};
Window_MoveCommand.prototype.makeCommandList = function () {
    if (this._actor) {
        this.addWalkCommand();
        this.addRunCommand();
        this.addChargeCommand();
        this.addSwitchWeaponCommand();
    }
};
Window_MoveCommand.prototype.addWalkCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveWalk, 'walk', BattleManager.canMove());
};
Window_MoveCommand.prototype.addRunCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveRun, 'run', BattleManager.canRun());
};
Window_MoveCommand.prototype.addChargeCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveCharge, 'charge', false);
};
Window_MoveCommand.prototype.addSwitchWeaponCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveSwitchWeapon, 'switchWeapon', false);
};
Window_MoveCommand.prototype.select = function (index) {
    Window_ActorCommand.prototype.select.call(this, index);
    if (this._index === Window_MoveCommand.WALK_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_MoveCommand.WALK_MOVE_MULTIPLIER;
    }
    else if (this._index === Window_MoveCommand.RUN_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_MoveCommand.RUN_MOVE_MULTIPLIER;
    }
    else if (this._index === Window_MoveCommand.CHARGE_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_MoveCommand.CHARGE_MOVE_MULTIPLIER;
    }
    else if (this._index === Window_MoveCommand.SWITCH_WEAPON_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_MoveCommand.SWITCH_WEAPON_MOVE_MULTIPLIER;
    }
    BattleManager.refreshMoveTiles();
};
// #endregion =========================== Window_MoveCommand ============================== //
// ============================== //
// #region ============================== Scene_Battle ============================== //
//-----------------------------------------------------------------------------
// Scene_Battle
//
// The scene class of the tactics screen.
function Scene_Battle() {
    this.initialize.apply(this, arguments);
}
Scene_Battle.prototype = Object.create(Scene_Base.prototype);
Scene_Battle.prototype.constructor = Scene_Battle;
Scene_Battle.prototype.initialize = function () {
    Scene_Base.prototype.initialize.call(this);
};
Scene_Battle.prototype.create = function () {
    Scene_Base.prototype.create.call(this);
    this.createDisplayObjects();
};
Scene_Battle.prototype.createDisplayObjects = function () {
    this.createSpriteset();
    this.createWindowLayer();
    this.createAllWindows();
    BattleManager.setLogWindow(this._logWindow);
    BattleManager.setCommandWindow(this._tacticsCommandWindow);
    BattleManager.setActorWindow(this._actorWindow);
    BattleManager.setEnemyWindow(this._enemyWindow);
    BattleManager.setInfoWindow(this._infoWindow);
    BattleManager.setSpriteset(this._spriteset);
    this._logWindow.setSpriteset(this._spriteset);
};
Scene_Battle.prototype.createSpriteset = function () {
    this._spriteset = new Spriteset_Tactics();
    this.addChild(this._spriteset);
};
Scene_Battle.prototype.createAllWindows = function () {
    this.createLogWindow();
    this.createUnitWindow();
    this.createActorCommandWindow();
    this.createHelpWindow();
    this.createSkillWindow();
    this.createItemWindow();
    this.createMessageWindow();
    this.createInfoWindow();
    this.createMapWindow();
    this.createStatusWindow();
    this.createMoveCommandWindow();
};
Scene_Battle.prototype.createLogWindow = function () {
    this._logWindow = new Window_BattleLog();
    this.addWindow(this._logWindow);
};
Scene_Battle.prototype.createUnitWindow = function () {
    this.createActorWindow();
    this.createEnemyWindow();
};
Scene_Battle.prototype.createActorWindow = function () {
    var sx = 32;
    this._actorWindow = new Window_TacticsStatus();
    this._actorWindow.x = Graphics.boxWidth / 2 + sx;
    this.addWindow(this._actorWindow);
};
Scene_Battle.prototype.createEnemyWindow = function () {
    var sx = 32;
    this._enemyWindow = new Window_TacticsStatus();
    this._enemyWindow.x = Graphics.boxWidth / 2 - this._enemyWindow.width - sx;
    this.addWindow(this._enemyWindow);
};
Scene_Battle.prototype.createActorCommandWindow = function () {
    this._tacticsCommandWindow = new Window_TacticsCommand();
    this._tacticsCommandWindow.setHandler('move', this.commandMove.bind(this));
    // this._tacticsCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    // this._tacticsCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    // this._tacticsCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    // this._tacticsCommandWindow.setHandler('item',   this.commandItem.bind(this));
    // this._tacticsCommandWindow.setHandler('event',  this.commandEvent.bind(this));
    // this._tacticsCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this._tacticsCommandWindow.setHandler('wait', this.commandWait.bind(this));
    this.addWindow(this._tacticsCommandWindow);
};
Scene_Battle.prototype.createHelpWindow = function () {
    this._helpWindow = new Window_Help();
    this._helpWindow.visible = false;
    this.addWindow(this._helpWindow);
};
Scene_Battle.prototype.createSkillWindow = function () {
    var wx = this._tacticsCommandWindow.x + this._tacticsCommandWindow.width;
    var ww = Graphics.boxWidth - this._tacticsCommandWindow.width;
    var wh = this._tacticsCommandWindow.fittingHeight(4);
    this._skillWindow = new Window_TacticsSkill(wx, this._tacticsCommandWindow.y, ww, wh);
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.setHandler('ok', this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
};
Scene_Battle.prototype.createItemWindow = function () {
    var wx = this._tacticsCommandWindow.x + this._tacticsCommandWindow.width;
    var ww = Graphics.boxWidth - this._tacticsCommandWindow.width;
    var wh = this._tacticsCommandWindow.fittingHeight(4);
    this._itemWindow = new Window_TacticsItem(wx, this._tacticsCommandWindow.y, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok', this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};
Scene_Battle.prototype.createMessageWindow = function () {
    this._messageWindow = new Window_Message();
    this.addWindow(this._messageWindow);
    this._messageWindow.subWindows().forEach(function (window) {
        this.addWindow(window);
    }, this);
};
Scene_Battle.prototype.createInfoWindow = function () {
    this._infoWindow = new Window_TacticsInfo();
    this._infoWindow.x = Graphics.boxWidth / 2 - this._infoWindow.width / 2;
    this._infoWindow.y = 0;
    this.addWindow(this._infoWindow);
};
// TODO unused
Scene_Battle.prototype.createMapWindow = function () {
    this._mapWindow = new Window_TacticsMap(0, 0);
    this._mapWindow.setHandler('endTurn', this.commandEndTurn.bind(this));
    this._mapWindow.setHandler('equip', this.commandPersonal.bind(this));
    this._mapWindow.setHandler('status', this.commandPersonal.bind(this));
    this._mapWindow.setHandler('options', this.commandOptions.bind(this));
    this._mapWindow.setHandler('gameEnd', this.commandGameEnd.bind(this));
    this._mapWindow.setHandler('cancel', this.commandCancelMapWindow.bind(this));
    this.addWindow(this._mapWindow);
};
Scene_Battle.prototype.createStatusWindow = function () {
    var wx = this._mapWindow.x + this._mapWindow.width;
    this._statusWindow = new Window_MenuStatus(wx, 0);
    this._statusWindow.reserveFaceImages();
    this._statusWindow.hide();
    this.addWindow(this._statusWindow);
};
Scene_Battle.prototype.createMoveCommandWindow = function () {
    this._moveCommandWindow = new Window_MoveCommand();
    this._moveCommandWindow.setHandler('walk', this.commandWalk.bind(this));
    this._moveCommandWindow.setHandler('run', this.commandRun.bind(this));
    this._moveCommandWindow.setHandler('cancel', () => {
        $gameMap.clearTiles();
        this._moveCommandWindow.deactivate();
        this._moveCommandWindow.hide();
        this._tacticsCommandWindow.activate();
    });
    this.addWindow(this._moveCommandWindow);
};
Scene_Battle.prototype.commandPersonal = function () {
    this._statusWindow.setFormationMode(false);
    this._statusWindow.selectLast();
    this._statusWindow.activate();
    this._statusWindow.setHandler('ok', this.onPersonalOk.bind(this));
    this._statusWindow.setHandler('cancel', this.onPersonalCancel.bind(this));
};
Scene_Battle.prototype.commandFormation = function () {
};
// TODO unused ?
Scene_Battle.prototype.commandOptions = function () {
    SceneManager.push(Scene_Options);
    $gameSelector.setTransparent(false);
    this._actorWindow.show();
};
// TODO unused ?
Scene_Battle.prototype.commandGameEnd = function () {
    SceneManager.push(Scene_GameEnd);
};
// TODO unused
Scene_Battle.prototype.commandCancelMapWindow = function () {
    $gameSelector.setTransparent(false);
    this._actorWindow.show();
    this._mapWindow.hide();
    this._statusWindow.hide();
    this._enemyWindow.show();
    this._mapWindow.deactivate();
    this.menuCalling = false;
};
Scene_Battle.prototype.start = function () {
    $gameSwitches.setValue(TEW.COMBAT.SYSTEM.battleStartId, true);
    $gamePlayer.setThrough(true);
    Scene_Base.prototype.start.call(this);
    BattleManager.startBattle();
    this.startFadeIn(this.slowFadeSpeed(), false);
    this.menuCalling = false;
    this.loadFaceset();
};
Scene_Battle.prototype.loadFaceset = function () {
    this._statusWindow.refresh();
    this.loadFacesetActor();
    this.loadFacesetEnemy();
};
Scene_Battle.prototype.loadFacesetActor = function () {
    $gamePartyTs.members().forEach(function (member) {
        ImageManager.loadFace(member.faceName());
    });
};
Scene_Battle.prototype.loadFacesetEnemy = function () {
    $gameTroopTs.members().forEach(function (member) {
        ImageManager.loadEnemy(member.battlerName());
    });
};
Scene_Battle.prototype.update = function () {
    this.updateDestination();
    var active = this.isActive();
    $gameMap.update(active);
    $gameTimer.update(active);
    if (active && !this.isBusy()) {
        this.updateBattleProcess();
    }
    $gameSelector.update();
    $gameScreen.update();
    Scene_Base.prototype.update.call(this);
};
Scene_Battle.prototype.isMenuEnabled = function () {
    return $gameSystem.isMenuEnabled() && !$gameMap.isEventRunning();
};
Scene_Battle.prototype.isMenuCalled = function () {
    return Input.isTriggered('menu') || TouchInput.isCancelled();
};
Scene_Battle.prototype.updateCallMenu = function () {
    if (this.isMenuEnabled()) {
        if (this.menuCalling) {
            $gameSelector.setTransparent(true);
            this._actorWindow.hide();
            SceneManager.snapForBackground();
            SoundManager.playOk();
            this.callMenu();
        }
        if (this.isMenuCalled() && BattleManager.isExploring()) {
            this.menuCalling = true;
        }
    }
    else {
        this.menuCalling = false;
    }
};
Scene_Battle.prototype.callMenu = function () {
    this.menuCalling = false;
    this._mapWindow.show();
    this._statusWindow.show();
    this._actorWindow.hide();
    this._enemyWindow.hide();
    this._mapWindow.activate();
};
// TODO Obsolete
Scene_Battle.prototype.commandEndTurn = function () {
    SoundManager.playOk();
    BattleManager.onAllTurnEnd();
    this.commandCancelMapWindow();
};
Scene_Battle.prototype.updateDestination = function () {
    if (this.isMapTouchOk()) {
        this.processMapTouch();
    }
};
Scene_Battle.prototype.isMapTouchOk = function () {
    return this.isActive() && BattleManager.isActive() && !this.isAnyInputWindowActive();
};
Scene_Battle.prototype.processMapTouch = function () {
    if (TouchInput.isTriggered()) {
        var x = $gameMap.canvasToMapX(TouchInput.x);
        var y = $gameMap.canvasToMapY(TouchInput.y);
        $gameSelector.moveTo(x, y);
    }
};
Scene_Battle.prototype.updateBattleProcess = function () {
    if (!this.isAnyInputWindowActive() || BattleManager.isBattleEnd()) {
        this.updateCallMenu();
        $gameSelector.updateMoveByInput();
        if (BattleManager.isInputting() && !$gameMap.isEventRunning()) {
            this.startActorCommandSelection();
        }
        BattleManager.update();
    }
};
Scene_Battle.prototype.isBusy = function () {
    return ((this._messageWindow && this._messageWindow.isClosing()) ||
        Scene_Base.prototype.isBusy.call(this) || $gameSelector.isBusy());
};
Scene_Battle.prototype.isAnyInputWindowActive = function () {
    return (this._tacticsCommandWindow.active ||
        this._skillWindow.active ||
        this._itemWindow.active ||
        this._mapWindow.active ||
        this._statusWindow.active ||
        this._moveCommandWindow.active);
};
Scene_Battle.prototype.startActorCommandSelection = function () {
    this._actorWindow.show();
    this._tacticsCommandWindow.setup(BattleManager.actor());
};
// Scene_Battle.prototype.commandAttack = function() {
//     var action = BattleManager.inputtingAction();
//     action.setAttack(); // TODO maybe get rid of that
//     // BattleManager.setupCombat(action); // WTF are you doing step bro ?
//     BattleManager.refreshRedCells(action);
//     this.onSelectAction();
// };
// Scene_Battle.prototype.commandSkill = function() {
//     this._actorWindow.hide();
//     this._skillWindow.setActor(BattleManager.actor());
//     this._skillWindow.setStypeId(this._tacticsCommandWindow.currentExt());
//     this._skillWindow.refresh();
//     this._skillWindow.show();
//     this._skillWindow.activate();
// };
// Scene_Battle.prototype.commandGuard = function() {
//     BattleManager.inputtingAction().setGuard();
//     this._tacticsCommandWindow.close();
//     BattleManager.setupAction();
// };
// Scene_Battle.prototype.commandItem = function() {
//     this._actorWindow.hide();
//     this._itemWindow.refresh();
//     this._itemWindow.show();
//     this._itemWindow.activate();
// };
// Scene_Battle.prototype.commandEvent = function() {
//     $gameTemp.setCancel(false);
//     var subject = BattleManager.actor();
//     var eventId = subject.actionsButton()[this._tacticsCommandWindow.index()];
//     var event = $gameMap.event(eventId);
//     event.start();
//     BattleManager.turnTowardCharacter(event);
//     this._tacticsCommandWindow.close();
// };
Scene_Battle.prototype.commandMove = function () {
    this._actorWindow.hide();
    this._moveCommandWindow.setActor(BattleManager.actor());
    this._moveCommandWindow.refresh();
    this._moveCommandWindow.show();
    this._tacticsCommandWindow.deactivate();
    this._moveCommandWindow.activate();
    $gameSelector.performTransfer(BattleManager._subject.x, BattleManager._subject.y);
    BattleManager.refreshMoveTiles();
};
Scene_Battle.prototype.commandWalk = function () {
    // Spend a movement if possible or spend an action to move
    if (BattleManager.moveCount > 0) {
        BattleManager.moveCount -= 1;
        this.commandWalkOrRun();
    }
    else if (BattleManager.actionCount > 0) {
        BattleManager.actionCount -= 1;
        this.commandWalkOrRun();
    }
    else {
        SoundManager.playCancel();
    }
};
Scene_Battle.prototype.commandRun = function () {
    if (BattleManager.canRun()) {
        BattleManager.moveCount -= 1;
        BattleManager.actionCount -= 1;
        this.commandWalkOrRun();
    }
    else {
        SoundManager.playCancel();
    }
};
Scene_Battle.prototype.commandWalkOrRun = function () {
    BattleManager._battlePhase = BattlePhase.InputMove;
    this._moveCommandWindow.close();
    this._tacticsCommandWindow.close();
    BattleManager.refreshMoveTiles();
};
Scene_Battle.prototype.commandWait = function () {
    BattleManager.inputtingAction().setWait();
    BattleManager.setupAction();
    this._tacticsCommandWindow.close();
};
Scene_Battle.prototype.onPersonalOk = function () {
    $gameSelector.setTransparent(false);
    switch (this._mapWindow.currentSymbol()) {
        case 'skill':
            SceneManager.push(Scene_Skill);
            break;
        case 'equip':
            SceneManager.push(Scene_Equip);
            break;
        case 'status':
            SceneManager.push(Scene_Status);
            break;
    }
};
Scene_Battle.prototype.onPersonalCancel = function () {
    this._statusWindow.deselect();
    this._mapWindow.activate();
    $gameSelector.setTransparent(false);
};
Scene_Battle.prototype.selectPreviousCommand = function () {
    if ($gameTemp.canCancel()) {
        SoundManager.playCancel();
        BattleManager.previousSelect();
        this.endCommandSelection();
    }
};
Scene_Battle.prototype.onSkillOk = function () {
    this._actorWindow.show();
    var skill = this._skillWindow.item();
    var action = BattleManager.inputtingAction();
    action.setSkill(skill.id);
    BattleManager.actor().setLastBattleSkill(skill);
    this.onSelectAction();
};
Scene_Battle.prototype.onSkillCancel = function () {
    BattleManager.processCancel();
    this._actorWindow.show();
    this._skillWindow.hide();
    this._tacticsCommandWindow.activate();
};
Scene_Battle.prototype.onItemOk = function () {
    this._actorWindow.show();
    var item = this._itemWindow.item();
    var action = BattleManager.inputtingAction();
    action.setItem(item.id);
    $gameParty.setLastItem(item);
    this.onSelectAction();
};
Scene_Battle.prototype.onItemCancel = function () {
    BattleManager.processCancel();
    this._actorWindow.show();
    this._itemWindow.hide();
    this._tacticsCommandWindow.activate();
};
Scene_Battle.prototype.onSelectAction = function () {
    this._skillWindow.hide();
    this._itemWindow.hide();
    this._tacticsCommandWindow.close();
    BattleManager.processTarget();
};
Scene_Battle.prototype.endCommandSelection = function () {
    this._tacticsCommandWindow.close();
};
Scene_Battle.prototype.stop = function () {
    Scene_Base.prototype.stop.call(this);
    if (this.needsSlowFadeOut()) {
        this.startFadeOut(this.slowFadeSpeed(), false);
    }
    else {
        this.startFadeOut(this.fadeSpeed(), false);
    }
    this._actorWindow.close();
    this._enemyWindow.close();
    this._infoWindow.close();
};
Scene_Battle.prototype.needsSlowFadeOut = function () {
    return (SceneManager.isNextScene(Scene_Title) ||
        SceneManager.isNextScene(Scene_Gameover));
};
Scene_Battle.prototype.terminate = function () {
    Scene_Base.prototype.terminate.call(this);
};
// #endregion =========================== Scene_Battle ============================== //
// ============================== //
// #region ============================== Scene_Map ============================== //
//-----------------------------------------------------------------------------
// Scene_Map
//
// The scene class of the map screen.
Scene_Map.prototype.launchBattle = function () {
    BattleManager.saveBgmAndBgs();
    this.stopAudioOnBattleStart();
    SoundManager.playBattleStart();
    this._encounterEffectDuration = this.encounterEffectSpeed();
    this._mapNameWindow.hide();
};
Scene_Map.prototype.updateEncounterEffect = function () {
    if (this._encounterEffectDuration > 0) {
        this._encounterEffectDuration--;
        var timer = this._encounterEffectDuration;
        var startTimer = this.encounterEffectSpeed();
        if (timer === startTimer - 1) {
            this.startFadeOut(this.slowFadeSpeed());
        }
        if (timer === Math.floor(startTimer / 2)) {
            BattleManager.playBattleBgm();
        }
        if (timer === 1) {
            BattleManager.createGameObjects();
        }
    }
};
Scene_Map.prototype.encounterEffectSpeed = function () {
    return 180;
};
// #endregion =========================== Scene_Map ============================== //
// ============================== //
// #region ============================== SceneManager ============================== //
//-----------------------------------------------------------------------------
// SceneManager
//
// The static class that manages scene transitions.
SceneManager.isCurrentScene = function (sceneClass) {
    return this._scene && this._scene.constructor === sceneClass;
};
// #endregion =========================== SceneManager ============================== //
// ============================== //
// #region ============================== Window_Base ============================== //
//-----------------------------------------------------------------------------
// Window_Base
//
// The superclass of all windows within the game.
Window_Base.prototype.drawEnemyImage = function (battler, x, y) {
    var width = Window_Base._faceWidth;
    var height = Window_Base._faceHeight;
    var bitmap = ImageManager.loadEnemy(battler.battlerName());
    var pw = bitmap.width;
    var ph = bitmap.height;
    var sw = Math.min(width, pw);
    var sh = Math.min(height, ph);
    var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
    var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
    var q = 150 / Math.max(bitmap.width, bitmap.height);
    this.contents.blt(bitmap, 0, 0, pw, ph, dx, dy, bitmap.width * q, bitmap.height * q);
};
// #endregion =========================== Window_Base ============================== //
// ============================== //
// #region ============================== Window_Battlelog ============================== //
//-----------------------------------------------------------------------------
// Window_BattleLog
//
// The window for displaying battle progress. No frame is displayed, but it is
// handled as a window for convenience.
const windowBattleLogShowNormalAnimation = Window_BattleLog.prototype.showNormalAnimation;
Window_BattleLog.prototype.showNormalAnimation = function (targets, animationId, mirror) {
    if ($gamePartyTs.inBattle()) {
        var animation = $dataAnimations[animationId];
        if (animation) {
            targets.forEach(function (target) {
                target.event().requestAnimation(animationId);
            });
        }
    }
    else {
        windowBattleLogShowNormalAnimation.call(this, targets, animationId, mirror);
    }
};
// #endregion =========================== Window_Battlelog ============================== //
// ============================== //
// #region ============================== Window_TacticsCommand ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsCommand
//
// The window for selecting an actor's action on the tactics screen.
function Window_TacticsCommand() {
    this.initialize.apply(this, arguments);
}
Window_TacticsCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsCommand.prototype.constructor = Window_TacticsCommand;
Window_TacticsCommand.prototype.initialize = function () {
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, 0, y);
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};
Window_TacticsCommand.prototype.activate = function () {
    console.log('main window activation');
    Window_ActorCommand.prototype.activate.call(this);
};
Window_TacticsCommand.prototype.deactivate = function () {
    console.log('main window deactivation');
    Window_ActorCommand.prototype.deactivate.call(this);
};
Window_TacticsCommand.prototype.setup = function (actor) {
    this._actor = actor;
    this.refresh();
    // refresh call clear and make command !
    // don't need to call these methods
    // this.clearCommand();
    // this.makeCommand();
    this.selectLast();
    this.activate();
    this.open();
};
Window_TacticsCommand.prototype.makeCommandList = function () {
    if (this._actor) {
        this.addMoveCommand();
        this.addActionCommand();
        this.addAdvantageCommand();
        this.addWaitCommand();
    }
};
// Legacy command list
// Window_TacticsCommand.prototype.makeCommandList = function() {
//     if (this._actor) {
//         this.addActionCommand();
//         this.addAttackCommand();
//         this.addSkillCommands();
//         if (this._actor.canGuard()) {
//             this.addGuardCommand();
//         } else {
//             this.addWaitCommand();
//         }
//         this.addItemCommand();
//     }
// };
// Event-defined actions
// Window_TacticsCommand.prototype.addActionCommand = function() {
//     this._actor.checkEventTriggerThere();
//     this._actor.actionsButton().forEach(function(eventId) {
//         var event = $gameMap.event(eventId);
//         this.addCommand(event.name(), 'event');
//     }, this);
// };
Window_TacticsCommand.prototype.addMoveCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.move, 'move', BattleManager.canMove());
};
Window_TacticsCommand.prototype.addActionCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.action, 'action', false);
};
Window_TacticsCommand.prototype.addAdvantageCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.advantage, 'advantage', false);
};
Window_TacticsCommand.prototype.addWaitCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.wait, 'wait', true);
};
// #endregion =========================== Window_TacticsCommand ============================== //
// ============================== //
// #region ============================== Window_TacticsInfo ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsInfo
//
// The window for displaying the combat information on the battle screen.
function Window_TacticsInfo() {
    this.initialize.apply(this, arguments);
}
Window_TacticsInfo.prototype = Object.create(Window_Status.prototype);
Window_TacticsInfo.prototype.constructor = Window_TacticsInfo;
Window_TacticsInfo.prototype.initialize = function () {
    Window_Status.prototype.initialize.call(this, 0, 0);
    this.openness = 0;
    this.width = this.windowWidth();
    this.height = this.windowHeight();
};
Window_TacticsInfo.prototype.windowWidth = function () {
    return 816 / 2 - 100;
};
Window_TacticsInfo.prototype.windowHeight = function () {
    return this.fittingHeight(this.numVisibleRows());
};
Window_TacticsInfo.prototype.numVisibleRows = function () {
    return 3;
};
Window_TacticsInfo.prototype.open = function (battler) {
    var actor = JsonEx.makeDeepCopy(battler);
    this.setActor(actor);
    this.refresh();
    Window_Base.prototype.open.call(this);
};
Window_TacticsInfo.prototype.refresh = function () {
    this.contents.clear();
    if (this._actor) {
        var lineHeight = this.lineHeight();
        this.drawBlock1(lineHeight * 0);
    }
};
Window_TacticsInfo.prototype.drawBlock1 = function (y) {
    var lineHeight = this.lineHeight();
    this.drawDamage(this._actor, 16, y + lineHeight * 0);
    this.drawHit(this._actor, 16, y + lineHeight * 1);
    this.drawCri(this._actor, 16, y + lineHeight * 2);
};
Window_TacticsInfo.prototype.drawDamage = function (actor, x, y) {
    var width = 168;
    var action = BattleManager.inputtingAction();
    this.drawDamageType(actor, x, y, width);
    var minHit = Math.abs(action.testDamageMinMaxValue(actor, false));
    var maxHit = Math.abs(action.testDamageMinMaxValue(actor, true));
    this.drawText(minHit + '-' + maxHit, x + 120, y, 120, 'right');
};
Window_TacticsInfo.prototype.drawDamageType = function (actor, x, y) {
    var action = BattleManager.inputtingAction();
    this.changeTextColor(this.systemColor());
    if (action.isDamage()) {
        this.drawText(TEW.COMBAT.SYSTEM.damageTerm, x, y, 160);
    }
    else if (action.isRecover()) {
        this.drawText(TEW.COMBAT.SYSTEM.recoverTerm, x, y, 160);
    }
    else {
        this.drawText(TEW.COMBAT.SYSTEM.drainTerm, x, y, 160);
    }
    this.resetTextColor();
};
Window_TacticsInfo.prototype.drawHit = function (actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TEW.COMBAT.SYSTEM.hitRateTerm, x, y, 160);
    this.resetTextColor();
    var action = BattleManager.inputtingAction();
    var hit = action.itemHit(actor) * 100 + '%';
    this.drawText(hit, x + 180, y, 60, 'right');
};
Window_TacticsInfo.prototype.drawCri = function (actor, x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TEW.COMBAT.SYSTEM.criticalRateTerm, x, y, 160);
    this.resetTextColor();
    var action = BattleManager.inputtingAction();
    var crit = Math.round(action.itemCri(actor) * 100) + '%';
    this.drawText(crit, x + 180, y, 60, 'right');
};
// #endregion =========================== Window_TacticsInfo ============================== //
// ============================== //
// #region ============================== Window_TacticsItem ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsItem
//
// The window for selecting a item to use on the tactics screen.
function Window_TacticsItem() {
    this.initialize.apply(this, arguments);
}
Window_TacticsItem.prototype = Object.create(Window_BattleItem.prototype);
Window_TacticsItem.prototype.constructor = Window_TacticsItem;
Window_TacticsItem.prototype.processCursorMove = function () {
    var lastIndex = this.index();
    Window_BattleItem.prototype.processCursorMove.call(this);
    if (this.index() !== lastIndex) {
        var action = BattleManager.inputtingAction();
        action.setItem(this.item().id);
        BattleManager.refreshRedCells(action);
    }
};
Window_TacticsItem.prototype.show = function () {
    Window_BattleItem.prototype.show.call(this);
    if (this.item()) {
        var action = BattleManager.inputtingAction();
        action.setItem(this.item().id);
        BattleManager.refreshRedCells(action);
    }
};
// #endregion =========================== Window_TacticsItem ============================== //
// ============================== //
// #region ============================== Window_TacticsMap ============================== //
// TODO unused !
//-----------------------------------------------------------------------------
// Window_TacticsMap
//
// The window for displaying essential commands for progressing in tactics screen.
function Window_TacticsMap() {
    this.initialize.apply(this, arguments);
}
Window_TacticsMap.prototype = Object.create(Window_MenuCommand.prototype);
Window_TacticsMap.prototype.constructor = Window_TacticsMap;
Window_TacticsMap.prototype.initialize = function (x, y) {
    Window_MenuCommand.prototype.initialize.call(this, x, y);
    this.selectLast();
    this.hide();
    this.deactivate();
};
Window_TacticsMap._lastCommandSymbol = null;
Window_TacticsMap.initCommandPosition = function () {
    this._lastCommandSymbol = null;
};
Window_TacticsMap.prototype.windowWidth = function () {
    return 240;
};
Window_TacticsMap.prototype.numVisibleRows = function () {
    return this.maxItems();
};
Window_TacticsMap.prototype.addMainCommands = function () {
    var enabled = this.areMainCommandsEnabled();
    this.addCommand(TEW.COMBAT.SYSTEM.endTurnTerm, 'endTurn');
    if (this.needsCommand('equip')) {
        this.addCommand(TextManager.equip, 'equip', enabled);
    }
    if (this.needsCommand('status')) {
        this.addCommand(TextManager.status, 'status', enabled);
    }
};
Window_TacticsMap.prototype.addOriginalCommands = function () {
};
Window_TacticsMap.prototype.addSaveCommand = function () {
};
Window_TacticsMap.prototype.addFormationCommand = function () {
};
Window_TacticsMap.prototype.selectLast = function () {
    this.selectSymbol(Window_TacticsMap._lastCommandSymbol);
};
// #endregion =========================== Window_TacticsMap ============================== //
// ============================== //
// #region ============================== Window_TacticsSkill ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsSkill
//
// The window for selecting a skill to use on the tactics screen.
function Window_TacticsSkill() {
    this.initialize.apply(this, arguments);
}
Window_TacticsSkill.prototype = Object.create(Window_BattleSkill.prototype);
Window_TacticsSkill.prototype.constructor = Window_TacticsSkill;
Window_TacticsSkill.prototype.processCursorMove = function () {
    var lastIndex = this.index();
    Window_BattleSkill.prototype.processCursorMove.call(this);
    if (this.index() !== lastIndex) {
        this.refreshRedCells();
    }
};
Window_TacticsSkill.prototype.show = function () {
    Window_BattleSkill.prototype.show.call(this);
    if (this.item()) {
        this.refreshRedCells();
    }
};
Window_TacticsSkill.prototype.onTouch = function (triggered) {
    var lastIndex = this.index();
    Window_BattleSkill.prototype.onTouch.call(this, triggered);
    if (this.index() !== lastIndex) {
        this.refreshRedCells();
    }
};
Window_TacticsSkill.prototype.refreshRedCells = function () {
    var action = BattleManager.inputtingAction();
    action.setSkill(this.item().id);
    BattleManager.refreshRedCells(action);
};
// #endregion =========================== Window_TacticsSkill ============================== //
// ============================== //
// #region ============================== Window_TacticsStatus ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsStatus
//
// The window for displaying the unit status on the tactics screen.
function Window_TacticsStatus() {
    this.initialize.apply(this, arguments);
}
Window_TacticsStatus.prototype = Object.create(Window_Base.prototype);
Window_TacticsStatus.prototype.constructor = Window_TacticsStatus;
Window_TacticsStatus.prototype.initialize = function () {
    var y = Graphics.boxHeight - (this.windowHeight());
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, y, width, height);
    this.openness = 0;
    this._battler = null;
};
Window_TacticsStatus.prototype.windowWidth = function () {
    return 816 / 2 - 32;
};
Window_TacticsStatus.prototype.windowHeight = function () {
    return this.fittingHeight(this.numVisibleRows());
};
Window_TacticsStatus.prototype.numVisibleRows = function () {
    return 4;
};
Window_TacticsStatus.prototype.open = function (battler) {
    if (battler) {
        this._battler = battler;
    }
    this.refresh();
    Window_Base.prototype.open.call(this);
};
Window_TacticsStatus.prototype.refresh = function () {
    this.contents.clear();
    if (this._battler) {
        this.drawBattlerStatus();
    }
};
Window_TacticsStatus.prototype.drawBattlerStatus = function () {
    if (this._battler.isActor()) {
        this.drawActorFrame();
        this.drawActorSimpleStatus(this._battler, 0, 0, 376);
    }
    else {
        this.drawEnemyFrame();
        this.drawEnemySimpleStatus(this._battler, 0, 0, 376);
    }
};
Window_TacticsStatus.prototype.drawActorFrame = function () {
    if (TEW.COMBAT.SYSTEM.showFaceUnit) {
        this.drawActorFace(this._battler, 0, 0, Window_Base._faceWidth, Window_Base._faceHeight);
    }
    else {
        this.drawActorCharacter(this._battler, 48 + 24, 48 * 2);
    }
};
Window_TacticsStatus.prototype.drawEnemyFrame = function () {
    if (TEW.COMBAT.SYSTEM.showFaceUnit) {
        this.drawEnemyImage(this._battler, 0, 0);
    }
    else {
        var event = this._battler.event();
        this.drawCharacter(event.characterName(), event.characterIndex(), 48 + 24, 48 * 2);
    }
};
Window_TacticsStatus.prototype.drawActorSimpleStatus = function (actor, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 150;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(actor, x, y);
    this.drawActorLevel(actor, x, y + lineHeight * 1);
    this.drawActorIcons(actor, x, y + lineHeight * 2);
    this.drawActorClass(actor, x2, y);
    if ($dataSystem.optDisplayTp) {
        this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
        this.drawActorTp(actor, x2, y + lineHeight * 3, width2);
    }
    else {
        this.drawActorHp(actor, x2, y + lineHeight * 1, width2);
        this.drawActorMp(actor, x2, y + lineHeight * 2, width2);
    }
};
Window_TacticsStatus.prototype.drawEnemySimpleStatus = function (enemy, x, y, width) {
    var lineHeight = this.lineHeight();
    var x2 = x + 150;
    var width2 = Math.min(200, width - 180 - this.textPadding());
    this.drawActorName(enemy, x2, y);
    this.drawActorHp(enemy, x2, y + lineHeight * 1, width2);
    this.drawActorMp(enemy, x2, y + lineHeight * 2, width2);
};
// #endregion =========================== Window_TacticsStatus ============================== //
// ============================== //
// #region ============================== Bitmap ============================== //
//-----------------------------------------------------------------------------
/**
 * The basic object that represents an image.
 *
 * @class Bitmap
 * @constructor
 * @param {Number} width The width of the bitmap
 * @param {Number} height The height of the bitmap
 */
/**
 * Draw a line.
 *
 * @method drawLine
 * @param {Number} x1 The x coordinate for the start.
 * @param {Number} y1 The y coordinate for the start.
 * @param {Number} x2 The x coordinate for the destination.
 * @param {Number} y2 The y coordinate for the destination.
 */
Bitmap.prototype.drawLine = function (x1, y1, x2, y2) {
    var context = this._context;
    context.save();
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.restore();
    this._setDirty();
};
// #endregion =========================== Bitmap ============================== //
// ============================== //
// #region ============================== Sprite_BattlerTs ============================== //
//-----------------------------------------------------------------------------
// Sprite_BattlerTs
//
// The sprite for displaying a battler.
function Sprite_BattlerTs() {
    this.initialize.apply(this, arguments);
}
;
Sprite_BattlerTs.prototype = Object.create(Sprite_Character.prototype);
Sprite_BattlerTs.prototype.constructor = Sprite_BattlerTs;
Sprite_BattlerTs.prototype.initialize = function (character) {
    Sprite_Character.prototype.initialize.call(this, character);
    this._damages = [];
    this._appeared = false;
    this._shake = 0; // unused
    this._effectType = null;
    this._effectDuration = 0;
    this._battler = character.battler();
    this.createStateIconSprite();
    if (TEW.COMBAT.SYSTEM.showStateIcon) {
        this.createStateIconSprite();
    }
    if (TEW.COMBAT.SYSTEM.showHpGauge) {
        this.createHpGaugeSprite();
    }
    // if the battler's dead and back on the tactical scene.
    if (!character.battler().isAlive()) {
        this.opacity = 0;
    }
};
Sprite_BattlerTs.prototype.createStateIconSprite = function () {
    this._stateIconSprite = new Sprite_StateIcon();
    this._stateIconSprite.setup(this._battler);
    this._stateIconSprite.y = -5;
    this._stateIconSprite.x = 15;
    this._stateIconSprite.z = this.z;
    this._stateIconSprite.scale.x = 0.6;
    this._stateIconSprite.scale.y = 0.6;
    this.addChild(this._stateIconSprite);
};
Sprite_BattlerTs.prototype.createHpGaugeSprite = function () {
    this._hpGaugeSprite = new Sprite_HpGauge(this._battler);
    this._hpGaugeSprite.z = this.z;
    this.addChild(this._hpGaugeSprite);
};
Sprite_BattlerTs.prototype.initVisibility = function () {
    this._appeared = this._battler.isAlive();
    if (!this._appeared) {
        this.opacity = 0;
    }
};
Sprite_BattlerTs.prototype.isActor = function () {
    return this._character.isActor();
};
Sprite_BattlerTs.prototype.isEnemy = function () {
    return this._character.isEnemy();
};
Sprite_BattlerTs.prototype.update = function () {
    Sprite_Character.prototype.update.call(this);
    this.updateDamagePopup();
    this.updateEffect();
};
Sprite_BattlerTs.prototype.updateDamagePopup = function () {
    this.setupDamagePopup();
    if (this._damages.length > 0) {
        for (var i = 0; i < this._damages.length; i++) {
            this._damages[i].update();
        }
        if (!this._damages[0].isPlaying()) {
            this.parent.removeChild(this._damages[0]);
            this._damages.shift();
        }
    }
};
Sprite_BattlerTs.prototype.setupDamagePopup = function () {
    if (this._battler.isDamagePopupRequested()) {
        var sprite = new Sprite_Damage();
        sprite.x = this.x + this.damageOffsetX();
        sprite.y = this.y + this.damageOffsetY();
        sprite.z = this.z + 1;
        sprite.setup(this._battler);
        this._damages.push(sprite);
        this.parent.addChild(sprite);
        this._battler.clearDamagePopup();
        this._battler.clearResult();
    }
};
Sprite_BattlerTs.prototype.damageOffsetX = function () {
    return 24;
};
Sprite_BattlerTs.prototype.damageOffsetY = function () {
    return 24;
};
Sprite_BattlerTs.prototype.setupEffect = function () {
    if (this._appeared && this._battler.isEffectRequested()) {
        this.startEffect(this._battler.effectType());
        this._battler.clearEffect();
    }
    if (!this._appeared && this._battler.isAlive()) {
        this.startEffect('appear');
    }
    else if (this._appeared && this._battler.isHidden()) {
        this.startEffect('disappear');
    }
};
Sprite_BattlerTs.prototype.startEffect = function (effectType) {
    this._effectType = effectType;
    switch (this._effectType) {
        case 'appear':
            this.startAppear();
            break;
        case 'disappear':
            this.startDisappear();
            break;
        case 'whiten':
            this.startWhiten();
            break;
        case 'blink':
            this.startBlink();
            break;
        case 'collapse':
            this.startCollapse();
            break;
        case 'bossCollapse':
            this.startBossCollapse();
            break;
        case 'instantCollapse':
            this.startInstantCollapse();
            break;
    }
    this.revertToNormal();
};
Sprite_BattlerTs.prototype.startAppear = function () {
    this._effectDuration = 16;
    this._appeared = true;
};
Sprite_BattlerTs.prototype.startDisappear = function () {
    this._effectDuration = 32;
    this._appeared = false;
};
Sprite_BattlerTs.prototype.startWhiten = function () {
    this._effectDuration = 16;
};
Sprite_BattlerTs.prototype.startBlink = function () {
    this._effectDuration = 20;
};
Sprite_BattlerTs.prototype.startCollapse = function () {
    this._effectDuration = 32;
    this._appeared = false;
};
Sprite_BattlerTs.prototype.startBossCollapse = function () {
    this._effectDuration = 60;
    this._appeared = false;
};
Sprite_BattlerTs.prototype.startInstantCollapse = function () {
    this._effectDuration = 16;
    this._appeared = false;
};
Sprite_BattlerTs.prototype.updateEffect = function () {
    this.setupEffect();
    if (this._effectDuration > 0) {
        this._effectDuration--;
        switch (this._effectType) {
            case 'whiten':
                this.updateWhiten();
                break;
            case 'blink':
                this.updateBlink();
                break;
            case 'appear':
                this.updateAppear();
                break;
            case 'disappear':
                this.updateDisappear();
                break;
            case 'collapse':
                this.updateCollapse();
                break;
            case 'bossCollapse':
                this.updateBossCollapse();
                break;
            case 'instantCollapse':
                this.updateInstantCollapse();
                break;
        }
        if (this._effectDuration === 0) {
            this._effectType = null;
        }
    }
};
Sprite_BattlerTs.prototype.isEffecting = function () {
    return this._effectType !== null;
};
Sprite_BattlerTs.prototype.revertToNormal = function () {
    this._shake = 0;
    this.blendMode = 0;
    this.opacity = 255;
    this.setBlendColor([0, 0, 0, 0]);
};
Sprite_BattlerTs.prototype.updateWhiten = function () {
    var alpha = 128 - (16 - this._effectDuration) * 10;
    this.setBlendColor([255, 255, 255, alpha]);
};
Sprite_BattlerTs.prototype.updateBlink = function () {
    this.opacity = (this._effectDuration % 10 < 5) ? 255 : 0;
};
Sprite_BattlerTs.prototype.updateAppear = function () {
    this.opacity = (16 - this._effectDuration) * 16;
};
Sprite_BattlerTs.prototype.updateDisappear = function () {
    this.opacity = 256 - (32 - this._effectDuration) * 10;
};
Sprite_BattlerTs.prototype.updateCollapse = function () {
    this.blendMode = Graphics.BLEND_ADD;
    this.setBlendColor([255, 128, 128, 128]);
    this.opacity *= this._effectDuration / (this._effectDuration + 1);
};
Sprite_BattlerTs.prototype.updateBossCollapse = function () {
    this._shake = this._effectDuration % 2 * 4 - 2;
    this.blendMode = Graphics.BLEND_ADD;
    this.opacity *= this._effectDuration / (this._effectDuration + 1);
    this.setBlendColor([255, 255, 255, 255 - this.opacity]);
    if (this._effectDuration % 20 === 19) {
        SoundManager.playBossCollapse2();
    }
};
Sprite_BattlerTs.prototype.updateInstantCollapse = function () {
    this.opacity = 0;
};
Sprite_BattlerTs.prototype.isEffecting = function () {
    return this._effectType !== null;
};
Sprite_BattlerTs.prototype.updateOther = function () {
    if (this._battler.isAlive()) {
        Sprite_Character.prototype.updateOther.call(this);
    }
};
// #endregion =========================== Sprite_BattlerTs ============================== //
// ============================== //
// #region ============================== Sprite_Grid ============================== //
//-----------------------------------------------------------------------------
// Sprite_Grid
//
// The sprite for displaying a grid.
function Sprite_Grid() {
    this.initialize.apply(this, arguments);
}
Sprite_Grid.prototype = Object.create(Sprite_Base.prototype);
Sprite_Grid.prototype.constructor = Sprite_Grid;
Sprite_Grid.prototype.initialize = function () {
    Sprite_Base.prototype.initialize.call(this);
    this.setFrame(0, 0, Graphics.width, Graphics.height);
    this.createBitmap();
    this.z = 1;
    this.opacity = TEW.COMBAT.SYSTEM.gridOpacity || 60;
};
Sprite_Grid.prototype.createBitmap = function () {
    var width = $gameMap.width();
    var height = $gameMap.height();
    this.bitmap = new Bitmap(width * 48, height * 48);
    for (var x = 0; x < width; x++) {
        this.bitmap.drawLine(48 * x, 0, 48 * x, height * 48);
    }
    for (var y = 0; y < height; y++) {
        this.bitmap.drawLine(0, 48 * y, width * 48, 48 * y);
    }
};
Sprite_Grid.prototype.update = function () {
    Sprite_Base.prototype.update.call(this);
    var screen = $gameScreen;
    var scale = screen.zoomScale();
    this.scale.x = scale;
    this.scale.y = scale;
    this.x = Math.round($gameMap.adjustX(0) * 48);
    this.y = Math.round($gameMap.adjustY(0) * 48);
    this.x += Math.round(screen.shake());
};
// #endregion =========================== Sprite_Grid ============================== //
// ============================== //
// #region ============================== Sprite_HpGauge ============================== //
//-----------------------------------------------------------------------------
// Sprite_HpGauge
//
// The sprite for displaying the hp gauge.
function Sprite_HpGauge() {
    this.initialize.apply(this, arguments);
}
;
Sprite_HpGauge.prototype = Object.create(Sprite_Base.prototype);
Sprite_HpGauge.prototype.constructor = Sprite_HpGauge;
Sprite_HpGauge.prototype.initialize = function (battler) {
    Sprite_Base.prototype.initialize.call(this);
    this.bitmap = new Bitmap(40, 4);
    this.windowskin = ImageManager.loadSystem('Window');
    this.anchor.x = 0.5;
    this.anchor.y = 0;
    this._battler = battler;
};
Sprite_HpGauge.prototype.gaugeBackColor = function () {
    return this.textColor(19);
};
Sprite_HpGauge.prototype.hpGaugeColor1 = function () {
    return this.textColor(20);
};
Sprite_HpGauge.prototype.hpGaugeColor2 = function () {
    return this.textColor(21);
};
Sprite_HpGauge.prototype.textColor = function (n) {
    var px = 96 + (n % 8) * 12 + 6;
    var py = 144 + Math.floor(n / 8) * 12 + 6;
    return this.windowskin.getPixel(px, py);
};
Sprite_HpGauge.prototype.update = function (battler) {
    Sprite_Base.prototype.update.call(this);
    this.bitmap.clear();
    if (this._battler.isAlive()) {
        this.drawBattlerHP();
    }
};
Sprite_HpGauge.prototype.drawBattlerHP = function () {
    var width = 40;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    this.drawGauge(0, 0, width, this._battler.hpRate(), color1, color2);
};
Sprite_HpGauge.prototype.drawGauge = function (x, y, width, rate, color1, color2) {
    var fillW = Math.floor(width * rate);
    this.bitmap.fillRect(x, y, width, 4, this.gaugeBackColor());
    this.bitmap.gradientFillRect(x, y, fillW, 4, color1, color2);
};
// #endregion =========================== Sprite_HpGauge ============================== //
// ============================== //
// #region ============================== Sprite_Selector ============================== //
//-----------------------------------------------------------------------------
// Sprite_Selector
//
// The sprite for displaying a selector.
function Sprite_Selector() {
    this.initialize.apply(this, arguments);
}
Sprite_Selector.prototype = Object.create(Sprite_Base.prototype);
Sprite_Selector.prototype.constructor = Sprite_Selector;
Sprite_Selector.prototype.initialize = function () {
    Sprite_Base.prototype.initialize.call(this);
    this.loadBitmap();
};
Sprite_Selector.prototype.loadBitmap = function () {
    this.bitmap = ImageManager.loadSystem(TEW.COMBAT.SYSTEM.selectorFile);
};
Sprite_Selector.prototype.update = function () {
    Sprite_Base.prototype.update.call(this);
    this.updateVisibility();
    this.x = $gameSelector.screenX();
    this.y = $gameSelector.screenY();
};
Sprite_Selector.prototype.updateVisibility = function () {
    Sprite_Base.prototype.updateVisibility.call(this);
    this.visible = !$gameSelector.isTransparent();
};
// #endregion =========================== Sprite_Selector ============================== //
// ============================== //
// #region ============================== Sprite_Start ============================== //
//-----------------------------------------------------------------------------
// Sprite_Start
//
// The sprite for displaying the start message.
function Sprite_Start() {
    this.initialize.apply(this, arguments);
}
;
Sprite_Start.prototype = Object.create(Sprite_Base.prototype);
Sprite_Start.prototype.constructor = Sprite_Start;
Sprite_Start.prototype.initialize = function () {
    Sprite_Base.prototype.initialize.call(this);
    this.bitmap = new Bitmap(Graphics.width, Graphics.height);
    this._delay = 0;
    this._maxDuration = TEW.COMBAT.SYSTEM.durationStartSprite;
    this.z = 8;
    this.opacity = 0;
};
Sprite_Start.prototype.update = function (battler) {
    Sprite_Base.prototype.update.call(this);
    this.updateMain();
    this.updatePosition();
    this.updateOpacity();
};
Sprite_Start.prototype.isPlaying = function () {
    return $gameScreen.startDuration() > 0;
};
Sprite_Start.prototype.updateMain = function () {
    if (this.isPlaying()) {
        this.drawStart();
        this.updatePosition();
    }
    else {
        this.hide();
    }
};
Sprite_Start.prototype.drawStart = function () {
    var x = 20;
    var y = Graphics.height / 2;
    var maxWidth = Graphics.width - x * 2;
    this.bitmap.clear();
    this.bitmap.outlineColor = 'black';
    this.bitmap.outlineWidth = 8;
    this.bitmap.fontSize = 86;
    var startTerm = TEW.COMBAT.SYSTEM.battleStartTerm;
    this.bitmap.drawText(startTerm, x, y, maxWidth, 48, 'center');
    this.bitmap.outlineWidth = 4;
    this.bitmap.fontSize = 28;
    this.opacity = 255;
    this.show();
};
Sprite_Start.prototype.updatePosition = function () {
    this.x = Graphics.width / 2 - this.bitmap.width / 2;
    this.y = Graphics.height / 2 - this.bitmap.height / 2 - 120;
};
Sprite_Start.prototype.updateOpacity = function () {
    var d = $gameScreen.startDuration();
    if (d < 30) {
        this.opacity = 255 * d / 30;
    }
    if (d > this._maxDuration - 60) {
        this.opacity = 255 * (this._maxDuration - d) / 60;
    }
};
// #endregion =========================== Sprite_Start ============================== //
// ============================== //
// #region ============================== Spriteset_Tactics ============================== //
//-----------------------------------------------------------------------------
// Spriteset_Tactics
//
// The set of sprites on the tactics screen.
function Spriteset_Tactics() {
    this.initialize.apply(this, arguments);
}
Spriteset_Tactics.prototype = Object.create(Spriteset_Map.prototype);
Spriteset_Tactics.prototype.constructor = Spriteset_Tactics;
Spriteset_Tactics.prototype.initialize = function () {
    Spriteset_Map.prototype.initialize.call(this);
    this.createSelector();
    this.createStart();
    this.createGrid();
    this._sign = 1;
};
Spriteset_Tactics.prototype.createLowerLayer = function () {
    Spriteset_Map.prototype.createLowerLayer.call(this);
    this.createBaseTiles();
};
Spriteset_Tactics.prototype.createBaseTiles = function () {
    this._tilesSprite = new Sprite_Base();
    this._tilesSprite.z = 1;
    this._rangeTilesSprite = this.createTiles(TEW.COMBAT.SYSTEM.moveScopeColor);
    this._tilemap.addChild(this._tilesSprite);
};
Spriteset_Tactics.prototype.createSelector = function () {
    this._selectorSprite = new Sprite_Selector();
    this._selectorSprite.z = 1;
    this._tilemap.addChild(this._selectorSprite);
};
Spriteset_Tactics.prototype.createTiles = function (color) {
    var tilesSprite = new Sprite_Base();
    var width = $gameMap.width();
    var height = $gameMap.height();
    tilesSprite.bitmap = new Bitmap(width * 48, height * 48);
    tilesSprite.opacity = 120;
    tilesSprite.color = color;
    this._tilesSprite.addChild(tilesSprite);
    return tilesSprite;
};
Spriteset_Tactics.prototype.updateRangeTiles = function () {
    this._rangeTiles = $gameMap.tiles();
    var width = $gameMap.width();
    var height = $gameMap.height();
    this._rangeTilesSprite.bitmap.clearRect(0, 0, width * 48, height * 48);
    this._rangeTilesSprite.color = $gameMap.color();
    this._rangeTiles.forEach(function (tile) {
        var x = $gameMap.positionTileX(tile) * 48;
        var y = $gameMap.positionTileY(tile) * 48;
        var color = this._rangeTilesSprite.color;
        this._rangeTilesSprite.bitmap.fillRect(x + 2, y + 2, 44, 44, color);
    }, this);
};
Spriteset_Tactics.prototype.updateTiles = function () {
    if (this._tilesSprite.opacity >= 255) {
        this.sign = -1;
    }
    if (this._tilesSprite.opacity <= 160) {
        this.sign = 1;
    }
    if (this._rangeTiles !== $gameMap.tiles()) {
        this.updateRangeTiles();
    }
    this._tilesSprite.opacity = this._tilesSprite.opacity + 3 * this.sign;
    this._tilesSprite.x = $gameScreen.zoomScale();
    this._tilesSprite.y = $gameScreen.zoomScale();
    this._tilesSprite.x = Math.round($gameMap.adjustX(0) * 48);
    this._tilesSprite.y = Math.round($gameMap.adjustY(0) * 48);
    this._tilesSprite.x += Math.round($gameScreen.shake());
};
Spriteset_Tactics.prototype.createCharacters = function () {
    this._characters = [];
    this._characterSprites = [];
    this._actorSprites = [];
    this._enemySprites = [];
    $gameMap.events().forEach(function (event) {
        var sprite = null;
        if (event.isActor() || event.isEnemy()) {
            sprite = new Sprite_BattlerTs(event);
        }
        else {
            sprite = new Sprite_Character(event);
        }
        this._characters.push(event);
        this._characterSprites.push(sprite);
        if (event.isActor()) {
            this._actorSprites.push(sprite);
        }
        if (event.isEnemy()) {
            this._enemySprites.push(sprite);
        }
    }, this);
    for (var i = 0; i < this._characterSprites.length; i++) {
        this._tilemap.addChild(this._characterSprites[i]);
    }
};
Spriteset_Tactics.prototype.createEnemies = function () {
    this._enemySprites = [];
    this._characters.forEach(function (sprite) {
        if (sprite.isEnemy()) {
            this._enemySprites.push(sprite);
        }
    }, this);
};
Spriteset_Tactics.prototype.battlerSprites = function () {
    return this._enemySprites.concat(this._actorSprites);
};
Spriteset_Tactics.prototype.createGrid = function () {
    this._tilemap.addChild(new Sprite_Grid());
};
Spriteset_Tactics.prototype.update = function () {
    Spriteset_Map.prototype.update.call(this);
    this.updateTiles();
};
Spriteset_Tactics.prototype.isBusy = function () {
    return this.isAnimationPlaying() || this.isAnyoneMoving();
};
Spriteset_Tactics.prototype.isAnimationPlaying = function () {
    for (var i = 0; i < this._characterSprites.length; i++) {
        if (this._characterSprites[i].isAnimationPlaying()) {
            return true;
        }
    }
    if (this._startSprite.isPlaying()) {
        return true;
    }
    return false;
};
Spriteset_Tactics.prototype.isAnyoneMoving = function () {
    for (var i = 0; i < this._characters.length; i++) {
        if (this._characters[i].isMoving()) {
            return true;
        }
    }
    return false;
};
Spriteset_Tactics.prototype.createStart = function () {
    this._startSprite = new Sprite_Start();
    this.addChild(this._startSprite);
};
Spriteset_Tactics.prototype.isEffecting = function () {
    return this.battlerSprites().some(function (sprite) {
        return sprite.isEffecting();
    });
};
// #endregion =========================== Spriteset_Tactics ============================== //
// ============================== //

