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
TEW.COMBAT.SYSTEM.chargeMinimumRange = 4;
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
TEW.COMBAT.SYSTEM.actionAttack = 'Attack';
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
Array.prototype.last = function () {
    return this[this.length - 1];
};
Array.prototype.addItemsAt = function (index, items) {
    const copy = this.slice();
    copy.splice(index, 0, ...items);
    return copy;
};
// Retrieve weapon info
TEW.COMBAT.getWeaponQualityEffects = (weapon) => {
    let attackMod = 0;
    let defenceMod = 0;
    let slashLevel = 0;
    let attackBonusSL = 0;
    let defenceBonusSL = 0;
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
            attackBonusSL += 1;
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
            defenceBonusSL -= 1;
        }
        else if (quality === 16 /* WeaponQuality.IMPACT */) {
            effects.IMPACT = true;
        }
        else if (quality === 17 /* WeaponQuality.FAST */) {
            attackBonusSL += 1;
        }
        else if (quality === 18 /* WeaponQuality.TRIP */) {
            effects.TRIP = true;
        }
        else if (quality === 19 /* WeaponQuality.ENTANGLE */) {
            effects.ENTANGLE = true;
        }
        else if (quality === 20 /* WeaponQuality.SLOW */) {
            attackBonusSL -= 1;
        }
        else if (quality === 22 /* WeaponQuality.WRAP */) {
            attackBonusSL += 1;
        }
        else if (quality === 26 /* WeaponQuality.IMPRECISE */) {
            attackBonusSL -= 1;
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
        attackBonusSL,
        defenceBonusSL,
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
// Differentiate between melee and ranged weapons
TEW.COMBAT.isMeleeWeapon = (weapon) => {
    return weapon['range'] === undefined;
};
// Get battler's stat value for combat depending on the wielded weapon's group
TEW.COMBAT.getAttackCompOrDefault = (battler, weaponGroup, isMelee) => {
    const compName = (isMelee ? 'MELEE' : 'RANGED') + '_' + TEW.DATABASE.WEAPONS.GROUP_IDS[weaponGroup];
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
// Get battler's stat value for combat depending on the wielded weapon's group
// TODO is Dodge
TEW.COMBAT.getDefenceCompOrDefault = (battler, weaponGroup, ccBonus, isMelee) => {
    const dodgeValue = battler.comp('DODGE');
    if (!isMelee) {
        return {
            match: true,
            value: dodgeValue
        };
    }
    const compName = 'MELEE' + '_' + TEW.DATABASE.WEAPONS.GROUP_IDS[weaponGroup];
    if (battler.hasComp(compName)) {
        const compValue = battler.comp(compName);
        return {
            match: true,
            value: Math.max(compValue, dodgeValue) // TODO opt out if shield
        };
    }
    return {
        match: false,
        value: Math.max(battler.weas, dodgeValue)
    };
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
    BattlePhase["InputCharge"] = "inputCharge";
    BattlePhase["Explore"] = "explore";
    BattlePhase["Target"] = "target";
    BattlePhase["ProcessMove"] = "processMove";
    BattlePhase["ProcessCharge"] = "processCharge";
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
            case BattlePhase.InputCharge:
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
BattleManager.updatePhase = function () {
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
BattleManager.isBusy = function () {
    return ($gameMessage.isBusy() || this._spriteset.isBusy() ||
        this._logWindow.isBusy() || $gameSelector.isBusy());
};
BattleManager.updateEvent = function () {
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
        $gameMap._flexibleMovement = true; // Go back to free movement range
        this._battlePhase = BattlePhase.ProcessMove;
        $gameMap.clearTiles();
    }
    if ($gameSelector.isCancelled()) {
        SoundManager.playCancel();
        this.previousSelect(); // TODO go back to previous menu instead
    }
};
BattleManager.updateChargeTarget = function () {
    const startX = this._subject.x;
    const startY = this._subject.y;
    const targetX = $gameSelector.x;
    const targetY = $gameSelector.y;
    this.refreshEnemyWindow($gameSelector.select());
    const action = new Game_Action(this._subject);
    action.setAttack();
    if ($gameSelector.selectTarget(action) >= 0) { // -1 if invalid target
        SoundManager.playOk();
        BattleManager.moveCount -= 1;
        BattleManager.actionCount -= 1;
        // TODO limit path to actual movement range
        // TODO select target using $gameTroopTs instead of $gameTroop
        this._subject.moveAlongPredefinedPath($gameMap._straightPaths[`${startX},${startY}`][`${targetX},${targetY}`]);
        $gameMap._flexibleMovement = true; // Go back to free movement range for next action
        this._battlePhase = BattlePhase.ProcessCharge;
        $gameMap.clearTiles();
    }
    if ($gameSelector.isCancelled()) {
        SoundManager.playCancel();
        this.previousSelect();
    }
};
BattleManager.previousSelect = function () {
    console.log("previousSelect");
    this._battlePhase = BattlePhase.InputCommand;
    // this._subject = null; // TODO wtf
    $gameSelector.updateSelect();
    this.refreshMoveTiles();
    // const select = $gameSelector.select();
    // if (select && select.isAlive()) {
    //     this._actorWindow.open(select);
    // } else {
    //     this._actorWindow.close();
    // }
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
BattleManager.updateMove = function (forceAttackAfterMove = false) {
    if (!this._subject.isMoving()) {
        var action = this._subject.currentMove();
        if (action && action.isMove()) {
            action.applyMove();
            this._subject.nextMove();
        }
        if (!action || !action.isMove()) {
            if (forceAttackAfterMove) {
                // TODO better handling with processAction ?
                const action = new Game_Action(this._subject);
                action.setAttack();
                const target = $gameSelector.select();
                // TODO only if melee weapon + adjacent to target
                action.apply(target);
                this.endAction();
            }
            else if (this.canInput() && this._subject.canInput() && this._subject.isActor()) {
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
    console.log("end battle");
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
    $gamePlayer.center($gamePlayer.x, $gamePlayer.y);
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
    console.log("Game_Action.prototype.apply");
    console.log("target, ", target);
    console.log("this.subject(), ", this.subject());
    var result = target.result();
    this.subject().clearResult();
    result.clear();
    const attacker = this.subject();
    const attackerWeapon = TEW.COMBAT.getWeaponFromId(attacker.equippedWeapon().id); // TODO attack with second hand
    const attackerWeaponEffects = TEW.COMBAT.getWeaponQualityEffects(attackerWeapon);
    const defenderWeapon = TEW.COMBAT.getWeaponFromId(target.equippedWeapon().id); // TODO defend with second hand
    const defenderWeaponEffects = TEW.COMBAT.getWeaponQualityEffects(defenderWeapon);
    // Damage calc
    //
    // Choose weapon (elsewhere)
    //   Get combat characteristic associated with weapon
    const attackerCombatSkill = TEW.COMBAT.getAttackCompOrDefault(attacker, attackerWeapon.group, TEW.COMBAT.isMeleeWeapon(attackerWeapon));
    // TODO Get (best) weapon from defender
    //   Get combat characteristic associated with weapon
    const defenderCombatSkill = TEW.COMBAT.getDefenceCompOrDefault(target, defenderWeapon.group, 0, // TODO cc bonus
    TEW.COMBAT.isMeleeWeapon(defenderWeapon));
    // TODO Check for opponent's defensive tools (shield)
    // TODO Check attacker's talents for modifiers (make a list)
    // TODO Check defender's talents for modifiers (make a list)
    // TODO Check weapon effects on bonus (PRECISE)
    // TODO Check sizes
    // TODO Check outnumberment
    // Roll dice
    const combatResult = TEW.DICE.combatOpposedSkillTest(attackerCombatSkill.value + attackerWeaponEffects.attackMod, defenderCombatSkill.value + defenderWeaponEffects.defenceMod, true, false // GIGA TODO
    );
    // Special weapon quality checks
    // Impale
    if (attackerWeaponEffects.effects.IMPALE) {
        if (combatResult.rollAttacker % 10 === 0) {
            combatResult.criticalAttacker = true;
        }
    }
    // Damaging
    if (attackerWeaponEffects.effects.DAMAGING) {
        const damagingSL = (combatResult.rollAttacker % 10) || 10; // 10 SL if roll is a multiple of 10
        if (damagingSL > combatResult.slAttacker) {
            combatResult.slAttacker = damagingSL;
        }
    }
    // FIXME do we add bonus SL before or after hit check ?
    combatResult.slAttacker += attackerWeaponEffects.attackBonusSL;
    combatResult.slDefender += attackerWeaponEffects.defenceBonusSL;
    // TODO wait X seconds here for player input (fortune points)
    // TODO Check attacker's talents on dice roll (make a list)
    // TODO Check weapon effects on dice roll (make a list)
    // Check hit/miss
    result.isHit = combatResult.slAttacker >= 0 && combatResult.success;
    result.missed = !result.isHit;
    // TODO Check weapon effects on crit (make a list)
    // TODO Check for crits
    // Compute damage
    //   Add weapon bonus + stat bonus + opposed DR
    //   Check location
    //   Check weapon effects based on location (make a list)
    //   Remove defender's toug + TODO armor points
    const damage = combatResult.slAttacker - combatResult.slDefender
        + attackerWeapon.damage + (attackerWeapon.strBonus ? attacker.paramBonus("STRG" /* Stat.STRG */) : 0)
        - target.paramBonus("TOUG" /* Stat.TOUG */);
    console.log(combatResult, attackerWeapon.damage, attackerWeapon.strBonus, attacker.paramBonus("STRG" /* Stat.STRG */), target.paramBonus("TOUG" /* Stat.TOUG */));
    // TODO Lookup crit table (help me)
    if (result.isHit) {
        if (this.item().damage.type > 0) {
            this.executeDamage(target, damage);
        }
        this.item().effects.forEach(function (effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
    }
};
// Calculating damage value
// Used in auto battle actions
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
// TODO this is RMMV base implem, we need to change KO/death handling
Game_Actor.prototype.refresh = function () {
    Game_BattlerBase.prototype.refresh.call(this);
    if (this.hp === 0) {
        this.addState(this.deathStateId());
    }
    else {
        this.removeState(this.deathStateId());
    }
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
Game_Battler.prototype.moveAlongPredefinedPath = function (path) {
    this._char.setPosition(this.x, this.y);
    this._moves = [];
    for (let i = 0; i < path.length; i++) {
        var d = this._char.findDirectionTo(path[i].x, path[i].y);
        this._char.moveStraight(d);
        this._moves.push(new Game_Action(this));
        this._moves[i].setMove(d / 2);
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
    let totalMove = (Number(this.tparam('move')) || TEW.COMBAT.SYSTEM.mvp) * BattleManager.moveMultiplier;
    if (!$gameMap._flexibleMovement) { // Charge command selected
        totalMove += Math.floor(this.comp('ATHLETICS') / 10) + 2; // Easy athletism test max possible roll
    }
    console.log("Game_BattlerBase.prototype.move : ", totalMove);
    return totalMove;
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
Game_BattlerBase.prototype.isDead = function () {
    console.log('Character: ', this);
    console.log('HP: ', this.hp);
    console.log('Appeared? ', this.isAppeared());
    console.log('Dead? ', this.isDeathStateAffected());
    return this.isAppeared() && this.isDeathStateAffected();
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
    return StatArray[paramId];
};
Game_Enemy.prototype.enemy = function () {
    return TEW.DATABASE.NPCS.SET[this._enemyId];
};
Game_Enemy.prototype.getAI = function () {
    const aiId = this.tparam('AI') || 'DEFAULT';
    return TEW.DATABASE.NPCS.AI[aiId];
};
Game_Enemy.prototype.refresh = function () {
    Game_BattlerBase.prototype.refresh.call(this);
    if (this.hp <= 0) {
        this.addState(this.deathStateId());
    }
    else {
        this.removeState(this.deathStateId());
    }
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
    this._flexibleMovement = true;
    this._tilePassability = {}; // for ranges, contains { 'x,y': boolean } entries
    this._tileBorderPassability = {}; // for ranges, contains { 'x,y,d': boolean } entries
    this._straightPaths = {}; // store paths computed for charging/shooting, as { 'x1,y1': { 'x2,y2': [<path>], ... }, ... }
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
Game_Map.prototype.isMovementFlexible = function () {
    return this._flexibleMovement;
};
Game_Map.prototype.makeRange = function (distance, event, through) {
    if (through === undefined) {
        through = false;
    }
    this.clearTiles();
    if (this.isMovementFlexible()) {
        this.exploreRange(distance, event, through);
    }
    else {
        this.chargeRange(distance, event, through);
    }
};
// Nota bene: "roundXWithDirection" and "roundYWithDirection" is the worst naming I've seen since Ta Mère SCRL
Game_Map.prototype.exploreRange = function (distance, event, through) {
    console.log("making range");
    if (through === undefined) {
        through = false;
    }
    var queue = [];
    var level = [];
    var tiles = [];
    var startTile = this.tile(event.x, event.y);
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
                    if ($gameMap.checkAndStoreTileBorderPassability(x2, y2)) {
                        this.addTile(tile);
                    }
                }
            }
        }
    }
};
/**
 * Battlers can only charge a target if it's in range and they have direct vision on it.
 * A target is directly in sight if we can trace at least two rays that:
 *  - cross no obstacle
 *  - start from adjacent corners of the subject's tile
 *  - end on the same corner of the target's tile
 */
Game_Map.prototype.chargeRange = function (distance, event, through) {
    console.log("making charge range");
    if (through === undefined) {
        through = false;
    }
    const startX = event.x;
    const startY = event.y;
    const startKey = `${startX},${startY}`;
    this._straightPaths[startKey] = this._straightPaths[startKey] || {};
    const enemiesInRange = $gameTroopTs.members(); // TODO exclude dead + adapt for enemy side
    const targettableEnemies = [];
    for (const enemy of enemiesInRange) {
        const enemyX = enemy._tx;
        const enemyY = enemy._ty;
        const enemyKey = `${enemyX},${enemyY}`;
        const enemyPos = { x: enemyX, y: enemyY };
        // GIGA TODO reset memory when anything moves
        if (this._straightPaths[startKey][enemyKey]) {
            targettableEnemies.push(enemyPos);
            this.addTile(this.tile(enemyX, enemyY));
            return this._straightPaths[startKey][enemyKey];
        }
        const dx = enemyX - startX;
        const dy = enemyY - startY;
        const manhattanDistance = Math.floor(dx) + Math.floor(dy);
        if (manhattanDistance < TEW.COMBAT.SYSTEM.chargeMinimumRange || manhattanDistance > distance) {
            continue;
        }
        // If subject and target are on the same row or column, all rays would traverse the same tiles
        // we can skip ray tracing and check for obstacles along the row/column
        if (dx == 0) {
            const lowestY = Math.min(startY, enemyY);
            const highestY = Math.max(startY, enemyY);
            const path = [];
            for (let i = lowestY; i < highestY; i++) {
                path.push({ x: startX, y: i });
            }
            if (this.isPathClear({ x: startX, y: startY }, path, event)
                && this.isMapPassableWithoutEventCheck(path.last(), enemyPos)) {
                targettableEnemies.push(enemyPos);
                this.addTile(this.tile(enemyX, enemyY));
                // Remove start position for move processing
                // FIXME possible optimization by never including start tile ?
                path.shift();
                this._straightPaths[startKey][enemyKey] = path;
            }
        }
        else if (dy == 0) {
            const lowestX = Math.min(startX, enemyX);
            const highestX = Math.max(startX, enemyX);
            const path = [];
            for (let i = lowestX; i < highestX; i++) {
                path.push({ x: i, y: startY });
            }
            if (this.isPathClear({ x: startX, y: startY }, path, event)
                && this.isMapPassableWithoutEventCheck(path.last(), enemyPos)) {
                targettableEnemies.push(enemyPos);
                this.addTile(this.tile(enemyX, enemyY));
                // Remove start position for move processing
                path.shift();
                this._straightPaths[startKey][enemyKey] = path;
            }
        }
        else {
            const startCorners = this.computeTileCorners(startX, startY);
            const targetCorners = this.computeTileCorners(enemyX, enemyY);
            // Exclude the corner(s) of the target furthest away from the subject, because ray-tracing these would be redundant
            const usefulCorners = this.computeUsefulCorners(dx, dy, targetCorners);
            // Skip checking some tiles adjacent to the subject/target.
            // Because tile corners are also tile coordinates, we must exclude the start and end of some rays
            const excludedCorners = this.computeExcludedCornersForRayTracing(dx, dy, startCorners, targetCorners);
            const rays = [];
            for (const start of startCorners) {
                for (const target of usefulCorners) {
                    let supercover = this.amanatidesWooSupercover(start, target);
                    const trimmedCover = supercover.tilesCrossed.filter(point => excludedCorners.every(({ x, y }) => x !== point.x || y !== point.y));
                    if (this.isPathClear(start, trimmedCover, event)) {
                        if (this.isMapPassableWithoutEventCheck(trimmedCover.last(), enemyPos)) {
                            rays.push({
                                start,
                                target,
                                path: supercover.path.filter(point => excludedCorners.every(({ x, y }) => x !== point.x || y !== point.y))
                            });
                        }
                    }
                }
            }
            // Yes I wrote a fucking label in TS code, and yes I'm still better than RMMV devs
            targetValidityCheck: for (const target of usefulCorners) { // same target corner
                const usefulRays = rays.filter(ray => this.samePoint(ray.target, target));
                if (usefulRays.length > 1) {
                    for (const ray1 of usefulRays) {
                        for (const ray2 of usefulRays) {
                            if ((ray1.start.x == ray2.start.x) != (ray1.start.y == ray2.start.y)) { // adjacent subject corners
                                targettableEnemies.push(enemyPos);
                                this.addTile(this.tile(target.x, target.y));
                                // Remove start position for move processing
                                ray1.path.shift();
                                this._straightPaths[startKey][enemyKey] = ray1.path;
                                break targetValidityCheck;
                            }
                        }
                    }
                }
            }
        }
    }
};
Game_Map.prototype.computeTileCorners = function (x, y) {
    return [
        { x: x, y: y }, // UP LEFT
        { x: x + 1, y: y }, // UP RIGHT
        { x: x, y: y + 1 }, // DOWN LEFT
        { x: x + 1, y: y + 1 } // DOWN RIGHT
    ];
};
/**
 * Trust the process (we are engineers)
 */
Game_Map.prototype.computeUsefulCorners = function (dx, dy, corners) {
    if (dx > 0) {
        if (dy > 0) { // SOUTH EAST
            return [corners[0], corners[1], corners[2]];
        }
        else { // NORTH EAST
            return [corners[0], corners[2], corners[3]];
        }
    }
    else {
        if (dy > 0) { // SOUTH WEST
            return [corners[0], corners[1], corners[3]];
        }
        else { // NORTH WEST
            return [corners[1], corners[2], corners[3]];
        }
    }
};
/**
 * Trust the process (we are engineers)
 */
Game_Map.prototype.computeExcludedCornersForRayTracing = function (dx, dy, startCorners, targetCorners) {
    if (dx > 0) {
        if (dy > 0) { // SOUTH EAST - remove all target corners
            return [targetCorners[0], targetCorners[1], targetCorners[2]];
        }
        else { // NORTH EAST - keep subject N and target SW
            return [startCorners[2], startCorners[3],
                targetCorners[0], targetCorners[3]];
        }
    }
    else {
        if (dy > 0) { // SOUTH WEST - keep subject W and target NE
            return [startCorners[1], startCorners[3],
                targetCorners[0], targetCorners[3]];
        }
        else { // NORTH WEST - keep subject NW
            return [startCorners[1], startCorners[2], startCorners[3]];
        }
    }
};
/**
 * Trace a ray from a tile corner to another, and compute the ray's supercover with Amanatides & Woo's algorithm
 */
Game_Map.prototype.amanatidesWooSupercover = function (start, end) {
    const tilesCrossed = [];
    const path = [];
    // Skip in case of horizontal or vertical ray
    if (start.x === end.x) {
        const lowestY = Math.min(start.y, end.y);
        const highestY = Math.max(start.y, end.y);
        for (let y = lowestY; y < highestY; y++) {
            tilesCrossed.push({ x: start.x, y });
        }
        return {
            tilesCrossed,
            path: tilesCrossed
        };
    }
    if (start.y === end.y) {
        const lowestX = Math.min(start.x, end.x);
        const highestX = Math.max(start.x, end.x);
        for (let x = lowestX; x < highestX; x++) {
            tilesCrossed.push({ x, y: start.y });
        }
        return {
            tilesCrossed,
            path: tilesCrossed
        };
    }
    let x = start.x;
    let y = start.y;
    tilesCrossed.push({ x, y });
    path.push({ x, y });
    const dx = end.x - x;
    const dy = end.y - y;
    const stepX = dx > 0 ? 1 : -1;
    const stepY = dy > 0 ? 1 : -1;
    const invDx = 1 / dx;
    const invDy = 1 / dy;
    const tDeltaX = Math.abs(invDx);
    const tDeltaY = Math.abs(invDy);
    let tMaxX = stepX > 0 ? invDx : 0;
    let tMaxY = stepY > 0 ? invDy : 0;
    const epsilon = 1e-12;
    while (!(x === end.x && y === end.y)) {
        if (Math.abs(tMaxX - tMaxY) < epsilon) { // Endpoint or exact corner hit
            const adjacentTileX = { x: x + stepX, y };
            const adjacentTileY = { x, y: y + stepY };
            // TODO can this be short-circuited?
            // The first condition can only be true in the NE quadrant,
            //  and the second can only be true in the SW quadrant
            if (this.samePoint(adjacentTileX, end)) {
                x += stepX;
            }
            else if (this.samePoint(adjacentTileY, end)) {
                y += stepY;
            }
            else {
                x += stepX;
                y += stepY;
                tMaxX += tDeltaX;
                tMaxY += tDeltaY;
                tilesCrossed.push(adjacentTileX, adjacentTileY);
                path.push(adjacentTileX); // only case where path differs from cover
            }
        }
        else if (tMaxX < tMaxY) {
            x += stepX;
            tMaxX += tDeltaX;
        }
        else {
            y += stepY;
            tMaxY += tDeltaY;
        }
        tilesCrossed.push({ x, y });
        path.push({ x, y });
    }
    return { tilesCrossed, path };
};
Game_Map.prototype.isPathClear = function (startTile, tiles, event) {
    if (!tiles.length)
        return true;
    return this.isMapPassable(startTile, tiles[0], event)
        && this.isPathClear(tiles[0], tiles.slice(1), event);
};
/**
 * Whether (x,y) can be walked on
 */
Game_Map.prototype.checkAndStoreTilePassability = function (x, y) {
    const key = `${x},${y}`;
    if (this._tilePassability[key] === undefined) {
        this._tilePassability[key] = this.isValid(x, y) && this.checkAndStoreTileBorderPassability(x, y);
    }
    return this._tilePassability[key];
};
/**
 * Tile passability depends on border passability
 * We can save operations later by storing everything computed here
 */
Game_Map.prototype.checkAndStoreTileBorderPassability = function (x, y) {
    return this.isTilePassable({ x, y }, 2 /* Direction.DOWN */)
        || this.isTilePassable({ x, y }, 8 /* Direction.UP */)
        || this.isTilePassable({ x, y }, 6 /* Direction.RIGHT */)
        || this.isTilePassable({ x, y }, 4 /* Direction.LEFT */);
};
/**
 * Override from RMMV core
 */
Game_Map.prototype.isMapPassableWithoutEventCheck = function (startTile, targetTile) {
    const direction = this.computeDirection(targetTile.x - startTile.x, targetTile.y - startTile.y);
    const oppositeDirection = this.reverseDirection(direction);
    return this.isTilePassable(startTile, direction)
        && this.isTilePassable(targetTile, oppositeDirection);
};
/**
 * Override from RMMV core
 */
Game_Map.prototype.isMapPassable = function (startTile, targetTile, event) {
    if (startTile.x === targetTile.x && startTile.y === targetTile.y) {
        return true;
    }
    return this.isMapPassableWithoutEventCheck(startTile, targetTile, event)
        && !event.isCollidedWithCharacters(targetTile.x, targetTile.y);
};
Game_Map.prototype.isTilePassable = function (tile, d) {
    const key = `${tile.x},${tile.y},${d}`;
    if (this._tileBorderPassability[key] === undefined) {
        this._tileBorderPassability[key] = this.checkPassage(tile.x, tile.y, (1 << (d / 2 - 1)) & 0x0f);
    }
    return this._tileBorderPassability[key];
};
/**
 * Compute the direction of projection of a movement on its longest axis (Y axis increases downwards)
 * The X axis is prioritized for perfect diagonals; this must also be the case when computing Bresenham paths
*/
Game_Map.prototype.computeDirection = function (dx, dy) {
    const isVertical = Math.abs(dx) < Math.abs(dy);
    if (isVertical) {
        if (dy > 0) {
            return 2 /* Direction.DOWN */;
        }
        else {
            return 8 /* Direction.UP */;
        }
    }
    else {
        if (dx > 0) {
            return 6 /* Direction.RIGHT */;
        }
        else {
            return 4 /* Direction.LEFT */;
        }
    }
};
/**
 * RMMV core implementation
 */
Game_Map.prototype.reverseDirection = function (d) {
    return 10 - d;
};
Game_Map.prototype.samePoint = function (p1, p2) {
    return p1.x == p2.x && p1.y == p2.y;
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
    const selectedBattler = this.select();
    if ($gameSelector.isOk()) {
        if ($gameMap.isOnTiles(this.x, this.y) && action.isTargetValid(selectedBattler)) {
            SoundManager.playOk();
            return selectedBattler.index();
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
// #region ============================== Window_TacticsActionCommand ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsActionCommand
//
// The window for selecting an actor's action on the tactics screen.
function Window_TacticsActionCommand() {
    this.initialize.apply(this, arguments);
}
Window_TacticsActionCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsActionCommand.prototype.constructor = Window_TacticsActionCommand;
Window_TacticsActionCommand.prototype.initialize = function () {
    var y = Graphics.boxHeight - this.windowHeight();
    Window_Command.prototype.initialize.call(this, 240, Graphics.boxHeight - this.windowHeight());
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};
Window_TacticsActionCommand.prototype.setActor = function (actor) {
    this._actor = actor;
    this.refresh();
    this.selectLast();
    this.activate();
    this.open();
};
Window_TacticsActionCommand.prototype.makeCommandList = function () {
    if (this._actor) {
        this.addAttackCommand();
    }
};
Window_TacticsActionCommand.prototype.addAttackCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.actionAttack, 'attack', BattleManager.canAct());
};
Window_TacticsActionCommand.prototype.select = function (index) {
    Window_ActorCommand.prototype.select.call(this, index);
    BattleManager.refreshMoveTiles();
};
// #endregion =========================== Window_TacticsActionCommand ============================== //
// ============================== //
// #region ============================== HalfWindow_TacticsDetails ============================== //
//-----------------------------------------------------------------------------
// HalfWindow_TacticsDetails
//
// Super object to manage all item details windows
function HalfWindow_TacticsDetails() {
    this.initialize.apply(this, arguments);
}
HalfWindow_TacticsDetails.prototype = Object.create(Window_Base.prototype);
HalfWindow_TacticsDetails.prototype.constructor = HalfWindow_TacticsDetails;
// Initalizing the window
HalfWindow_TacticsDetails.prototype.initialize = function (commandWindowHeight) {
    Window_Base.prototype.initialize.call(this, Graphics.boxWidth / 2, 0, Graphics.boxWidth / 2, Graphics.boxHeight - commandWindowHeight);
    this.width = Graphics.boxWidth / 2;
    this.deactivate();
    this.refresh();
};
HalfWindow_TacticsDetails.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
// Drawing a table with 2 columns
HalfWindow_TacticsDetails.prototype.drawTable2Columns = function (x, y, width, rows, textArray) {
    const cellWidthFirstRow = width / 3;
    const cellWidthSecondRow = width / 3 * 2;
    const cellHeight = this.lineHeight();
    for (let row = 0; row < rows; row++) {
        const cellXTh = x;
        const cellXTd = x + cellWidthFirstRow;
        const cellY = y + row * cellHeight;
        this.drawText(textArray[row][0], cellXTh + 5, cellY, cellWidthFirstRow - 10, "left");
        this.drawText(textArray[row][1], cellXTd + 5, cellY, cellWidthSecondRow - 10, "left");
    }
};
// // Drawing a wrapped text - used to draw to description
// HalfWindow_TacticsDetails.prototype.drawWrappedTextManually = function(text: string, x: number, y: number, fontSize: number) {
//     const words = text.split(" ");
//     const maxWidth = this.contentsWidth() - x;
//     if (text.length <= 100){ this.contents.fontSize = 28; }
//     else if (text.length <= 200){ this.contents.fontSize = 20; }
//     // else if (text.length <= 200) { this.contents.fontSize = 16; }
//     else { this.contents.fontSize = 16; }
//     const spaceWidth = this.textWidth(" ");
//     const lineHeight = fontSize * 1.2;
//     let currentX = x;
//     let currentY = y;
//     words.forEach(word => {
//         const wordWidth = this.textWidth(word);
//         // If the word is too long, drawing it on the next line
//         if (currentX + wordWidth > maxWidth) {
//             currentX = x; // begining of the line
//             currentY += lineHeight; // next line
//         }
//         // drawing it on the current line
//         this.drawText(word, currentX, currentY, wordWidth, 'left');
//         currentX += wordWidth + spaceWidth;
//     });
//     this.resetFontSettings();
// };
HalfWindow_TacticsDetails.prototype.drawLine = function (y) {
    const lineWidth = 40;
    const lineSize = 2;
    this.contents.fillRect((this.contentsWidth() - lineWidth) / 2, y, lineWidth, lineSize, this.normalColor());
};
HalfWindow_TacticsDetails.prototype.clear = function () {
    if (this.contents) {
        this.contents.clear();
    }
};
// #endregion =========================== HalfWindow_TacticsDetails ============================== //
// ============================== //
// #region ============================== HalfWindow_TacticsDetailsCommand ============================== //
//-----------------------------------------------------------------------------
// HalfWindow_TacticsDetailsCommand
//
// Super object to manage individual item command windows
function HalfWindow_TacticsDetailsCommand() {
    this.initialize.apply(this, arguments);
}
HalfWindow_TacticsDetailsCommand.prototype = Object.create(Window_Command.prototype);
HalfWindow_TacticsDetailsCommand.prototype.constructor = HalfWindow_TacticsDetailsCommand;
// Initializing the command window
HalfWindow_TacticsDetailsCommand.prototype.initialize = function (actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    this._windowWidth = Graphics.boxWidth / 2;
    this._windowHeight = this.fittingHeight(this._actionsNumber);
    Window_Command.prototype.initialize.call(this, Graphics.boxWidth / 2, Graphics.boxHeight - this._windowHeight);
    this.deactivate();
};
// Window Width
HalfWindow_TacticsDetailsCommand.prototype.windowWidth = function () {
    return this._windowWidth;
};
HalfWindow_TacticsDetailsCommand.prototype.addCommand = function (name, symbol, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext });
};
HalfWindow_TacticsDetailsCommand.prototype.clear = function () {
    this.clearCommandList();
    Window_Selectable.prototype.refresh.call(this);
};
// #endregion =========================== HalfWindow_TacticsDetailsCommand ============================== //
// ============================== //
// #region ============================== HalfWindow_TacticsList ============================== //
//-----------------------------------------------------------------------------
// HalfWindow_TacticsList
//
// Super object to manage all inventory list windows
function HalfWindow_TacticsList() {
    this.initialize.apply(this, arguments);
}
HalfWindow_TacticsList.prototype = Object.create(Window_Selectable.prototype);
HalfWindow_TacticsList.prototype.constructor = HalfWindow_TacticsList;
// Inializing the window
HalfWindow_TacticsList.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, 0, Graphics.boxWidth / 2, Graphics.boxHeight);
    this._actor = null;
    this._maxItems = 0;
    this._leftPadding = 10;
    this._rightColumnWidth = 20;
    this._rightColumnPosition = Graphics.boxWidth / 2 - this._rightColumnWidth * 4;
    this._iconPadding = 5;
    this.deactivate();
    this.refresh();
};
// Setting the actor
HalfWindow_TacticsList.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
// Refreshing the window
HalfWindow_TacticsList.prototype.refresh = function () {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};
// Number of items
HalfWindow_TacticsList.prototype.maxItems = function () {
    return this._maxItems;
};
// Number of columns
HalfWindow_TacticsList.prototype.maxCols = () => 1;
// #endregion =========================== HalfWindow_TacticsList ============================== //
// ============================== //
// #region ============================== Window_TacticsMoveCommand ============================== //
//-----------------------------------------------------------------------------
// Window_MoveCommand
//
// The window for selecting an actor's action on the tactics screen.
function Window_TacticsMoveCommand() {
    this.initialize.apply(this, arguments);
}
Window_TacticsMoveCommand.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsMoveCommand.prototype.constructor = Window_TacticsMoveCommand;
Window_TacticsMoveCommand.WALK_COMMAND_INDEX = 0;
Window_TacticsMoveCommand.WALK_MOVE_MULTIPLIER = 1;
Window_TacticsMoveCommand.RUN_COMMAND_INDEX = 1;
Window_TacticsMoveCommand.RUN_MOVE_MULTIPLIER = 2;
Window_TacticsMoveCommand.CHARGE_COMMAND_INDEX = 2;
Window_TacticsMoveCommand.CHARGE_MOVE_MULTIPLIER = 2;
Window_TacticsMoveCommand.SWITCH_WEAPON_COMMAND_INDEX = 3;
Window_TacticsMoveCommand.SWITCH_WEAPON_MOVE_MULTIPLIER = 0;
Window_TacticsMoveCommand.prototype.initialize = function () {
    Window_Command.prototype.initialize.call(this, 240, Graphics.boxHeight - this.windowHeight());
    this.openness = 0;
    this.deactivate();
    this._actor = null;
};
Window_TacticsMoveCommand.prototype.setActor = function (actor) {
    this._actor = actor;
    this.refresh();
    this.selectLast();
    this.activate();
    this.open();
};
Window_TacticsMoveCommand.prototype.makeCommandList = function () {
    if (this._actor) {
        this.addWalkCommand();
        this.addRunCommand();
        this.addChargeCommand();
        this.addSwitchWeaponCommand();
    }
};
Window_TacticsMoveCommand.prototype.addWalkCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveWalk, 'walk', BattleManager.canMove());
};
Window_TacticsMoveCommand.prototype.addRunCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveRun, 'run', BattleManager.canRun());
};
Window_TacticsMoveCommand.prototype.addChargeCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveCharge, 'charge', BattleManager.canRun());
};
Window_TacticsMoveCommand.prototype.addSwitchWeaponCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveSwitchWeapon, 'switchWeapon', BattleManager.canMove());
};
Window_TacticsMoveCommand.prototype.select = function (index) {
    Window_ActorCommand.prototype.select.call(this, index);
    if (this._index === Window_TacticsMoveCommand.WALK_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_TacticsMoveCommand.WALK_MOVE_MULTIPLIER;
        $gameMap._flexibleMovement = true;
    }
    else if (this._index === Window_TacticsMoveCommand.RUN_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_TacticsMoveCommand.RUN_MOVE_MULTIPLIER;
        $gameMap._flexibleMovement = true;
    }
    else if (this._index === Window_TacticsMoveCommand.CHARGE_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_TacticsMoveCommand.CHARGE_MOVE_MULTIPLIER;
        $gameMap._flexibleMovement = false;
    }
    else if (this._index === Window_TacticsMoveCommand.SWITCH_WEAPON_COMMAND_INDEX) {
        BattleManager.moveMultiplier = Window_TacticsMoveCommand.SWITCH_WEAPON_MOVE_MULTIPLIER;
        $gameMap._flexibleMovement = true;
    }
    BattleManager.refreshMoveTiles();
};
// #endregion =========================== Window_TacticsMoveCommand ============================== //
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
    this.createBackground();
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
Scene_Battle.prototype.createBackground = function () {
    this._background = new Sprite(ImageManager.loadSystem('bg_battle_command1'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};
Scene_Battle.prototype.changeBackground = function (commandLevel = 0) {
    console.log("background:" + commandLevel);
    this.removeChildAt(this.getChildIndex(this._background));
    this._background = new Sprite(ImageManager.loadSystem(commandLevel === 0 ? 'bg_battle' : ('bg_battle_command' + commandLevel)));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
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
    this.createActionCommandWindow();
    this.createWeaponCommandWindow();
    this.createWeaponListWindow();
    this.createWeaponDetailsWindow();
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
    this._tacticsCommandWindow.setHandler('action', this.commandAction.bind(this));
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
    this._moveCommandWindow = new Window_TacticsMoveCommand();
    this._moveCommandWindow.setHandler('walk', this.commandWalk.bind(this));
    this._moveCommandWindow.setHandler('run', this.commandRun.bind(this));
    this._moveCommandWindow.setHandler('charge', this.commandCharge.bind(this));
    this._moveCommandWindow.setHandler('switchWeapon', this.commandSwitchWeapon.bind(this));
    this._moveCommandWindow.setHandler('cancel', () => {
        $gameMap.clearTiles();
        $gameMap._flexibleMovement = true; // Go back to free movement range if charge was selected
        this._tacticsCommandWindow.activate();
        this._moveCommandWindow.deactivate();
        this._moveCommandWindow.hide();
        this.changeBackground(1);
    });
    this.addWindow(this._moveCommandWindow);
};
Scene_Battle.prototype.createActionCommandWindow = function () {
    this._actionCommandWindow = new Window_TacticsActionCommand();
    this._actionCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actionCommandWindow.setHandler('cancel', () => {
        $gameMap.clearTiles();
        this._tacticsCommandWindow.activate();
        this._actionCommandWindow.deactivate();
        this._actionCommandWindow.hide();
        this.changeBackground(1);
    });
    this.addWindow(this._actionCommandWindow);
};
Scene_Battle.prototype.createWeaponCommandWindow = function () {
    this._weaponsCommandWindow = new Window_TacticsWeaponCommand();
    this._weaponsCommandWindow.setHandler('cancel', () => {
        this._weaponsCommandWindow.deactivate();
        this._weaponsCommandWindow.deselect();
        this._weaponsWindow.refresh();
        this._weaponsWindow.activate();
    });
    this._weaponsCommandWindow.setHandler('inventory_weapon_equip', this.equipWeapon.bind(this));
    this._weaponsCommandWindow.setHandler('inventory_weapon_unequip', this.unequipWeapon.bind(this));
    this._weaponsCommandWindow.hide();
    this.addWindow(this._weaponsCommandWindow);
};
Scene_Battle.prototype.createWeaponListWindow = function () {
    this._weaponsWindow = new Window_TacticsWeapons();
    this._weaponsWindow.setHandler('cancel', () => {
        this._moveCommandWindow.activate();
        this._weaponsWindow.close();
        this._weaponDetailsWindow.close();
        this._weaponsCommandWindow.close();
        this._moveCommandWindow.refresh();
        this._moveCommandWindow.select(0);
    });
    this._weaponsWindow.setHandler('ok', () => {
        this.activateCommandWindowWeapon();
    });
    this._weaponsWindow.hide();
    this.addWindow(this._weaponsWindow);
};
Scene_Battle.prototype.createWeaponDetailsWindow = function () {
    this._weaponDetailsWindow = new Window_TacticsWeaponDetails(this._weaponsCommandWindow.fittingHeight(this._weaponsCommandWindow._actionsNumber));
    this._weaponsWindow.setHandler('show_weapon_details', () => {
        this.showWeaponDetails();
    });
    this._weaponDetailsWindow.hide();
    this.addWindow(this._weaponDetailsWindow);
};
Scene_Battle.prototype.activateCommandWindowWeapon = function () {
    if (this._weaponsWindow.isOpenAndActive() && this._weaponsWindow.index() >= 0) {
        this._weaponsCommandWindow.activate();
        this._weaponsWindow.deactivate();
        this._weaponsCommandWindow.show();
        this._weaponsCommandWindow.select(0);
    }
};
Scene_Battle.prototype.showWeaponDetails = function () {
    const weapon = this._weaponsWindow.weaponFromIndex(this._weaponsWindow.index());
    if (weapon) {
        this._weaponDetailsWindow._weapon = weapon;
        this._weaponsCommandWindow.refreshCommand(this._actor, weapon.equipIndex);
        this._weaponDetailsWindow.refresh();
    }
    else {
        this._weaponDetailsWindow.clear();
        this._weaponsCommandWindow.clear();
    }
};
Scene_Battle.prototype.equipWeapon = function () {
    const weapon = this._weaponsWindow.item();
    if (weapon.group === 5 /* WeaponGroup.PARRY */
        || weapon.qualities.some((quality) => quality === 10 /* WeaponQuality.SHIELD_1 */
            || quality === 11 /* WeaponQuality.SHIELD_2 */
            || quality === 12 /* WeaponQuality.SHIELD_3 */
            || quality === 13 /* WeaponQuality.SHIELD_4 */
            || quality === 14 /* WeaponQuality.SHIELD_5 */)) {
        BattleManager.actor().unequipSecondHand();
        BattleManager.actor().equipSecondHand(weapon.equipIndex);
    }
    else {
        BattleManager.actor().unequipMainHand();
        BattleManager.actor().equipMainHand(weapon.equipIndex);
    }
    this._weaponsWindow.syncActor();
    this._weaponsCommandWindow.callHandler('cancel');
};
Scene_Battle.prototype.unequipWeapon = function () {
    const weaponIndex = this._weaponsWindow.index();
    if (weaponIndex === 0) {
        BattleManager.actor().unequipMainHand();
    }
    else if (weaponIndex === 1) {
        BattleManager.actor().unequipSecondHand();
    }
    this._weaponsWindow.syncActor();
    this._weaponsCommandWindow.callHandler('cancel');
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
        this._moveCommandWindow.active ||
        this._actionCommandWindow.active ||
        this._weaponsWindow.active ||
        this._weaponsCommandWindow.active);
};
Scene_Battle.prototype.startActorCommandSelection = function () {
    this._actorWindow.show();
    this._tacticsCommandWindow.setup(BattleManager.actor());
    this.changeBackground(1);
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
    this.changeBackground(2);
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
Scene_Battle.prototype.commandCharge = function () {
    if (BattleManager.canRun()) {
        BattleManager._battlePhase = BattlePhase.InputCharge;
        this.changeBackground();
        this._moveCommandWindow.close();
        this._tacticsCommandWindow.close();
        // TODO account for critical failure
        // TODO switch back to flexible movement when done
        // TODO special phase for special pathfinding + no menu
        BattleManager.refreshMoveTiles();
    }
    else {
        SoundManager.playCancel();
    }
};
Scene_Battle.prototype.commandWalkOrRun = function () {
    // TODO restore move/action points
    BattleManager._battlePhase = BattlePhase.InputMove;
    this.changeBackground();
    this._moveCommandWindow.close();
    this._tacticsCommandWindow.close();
    BattleManager.refreshMoveTiles();
};
Scene_Battle.prototype.commandSwitchWeapon = function () {
    // Spend a movement if possible or spend an action to move
    if (BattleManager.moveCount === 0 && BattleManager.actionCount === 0) {
        SoundManager.playCancel();
    }
    else {
        if (BattleManager.moveCount > 0) {
            BattleManager.moveCount -= 1;
        }
        else {
            BattleManager.actionCount -= 1;
        }
        this._weaponsWindow.open();
        this._weaponDetailsWindow.open();
        this._weaponsCommandWindow.open();
        this._weaponsWindow.setActor(BattleManager.actor());
        this._weaponsWindow.select(0);
        this._weaponDetailsWindow.refresh();
        this._weaponsCommandWindow.refresh();
        this._weaponsWindow.show();
        this._weaponDetailsWindow.show();
        this._weaponsCommandWindow.show();
        this._weaponsWindow.activate();
        this._moveCommandWindow.deactivate();
    }
};
Scene_Battle.prototype.commandWait = function () {
    BattleManager.inputtingAction().setWait();
    BattleManager.setupAction();
    this.changeBackground();
    this._tacticsCommandWindow.close();
};
Scene_Battle.prototype.commandAction = function () {
    this._actorWindow.hide();
    this._actionCommandWindow.setActor(BattleManager.actor());
    this._actionCommandWindow.refresh();
    this.changeBackground(2);
    this._actionCommandWindow.show();
    this._actionCommandWindow.activate();
    this._tacticsCommandWindow.deactivate();
    $gameSelector.performTransfer(BattleManager._subject.x, BattleManager._subject.y);
    BattleManager.refreshMoveTiles();
};
Scene_Battle.prototype.commandAttack = function () {
    var action = BattleManager.inputtingAction();
    action.setAttack(); // TODO maybe get rid of that
    // BattleManager.setupCombat(action); // WTF are you doing step bro ?
    BattleManager.refreshRedCells(action);
    this.onSelectAction();
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
    this.changeBackground();
    this._skillWindow.hide();
    this._itemWindow.hide();
    this._actionCommandWindow.close();
    this._tacticsCommandWindow.close();
    BattleManager.processTarget();
};
Scene_Battle.prototype.endCommandSelection = function () {
    this.changeBackground();
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
// #region ============================== Window_TacticsWeaponCommand ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsWeaponCommand
//
// Weapon individual commands window
function Window_TacticsWeaponCommand() {
    this.initialize.apply(this, arguments);
}
Window_TacticsWeaponCommand.prototype = Object.create(HalfWindow_TacticsDetailsCommand.prototype);
Window_TacticsWeaponCommand.prototype.constructor = Window_TacticsWeaponCommand;
// Initializing the command window
Window_TacticsWeaponCommand.prototype.initialize = function () {
    HalfWindow_TacticsDetailsCommand.prototype.initialize.call(this, 1);
};
Window_TacticsWeaponCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
};
Window_TacticsWeaponCommand.prototype.refreshCommand = function (actor, weaponIndex = 0) {
    if (actor) {
        const weapon = actor.weapon(weaponIndex);
        this.clearCommandList();
        if (weapon.isInMainHand || weapon.isInSecondHand) {
            this.addCommand(TextManager.inventoryWeaponUnequip, 'inventory_weapon_unequip');
        }
        else {
            this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
        }
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};
// #endregion =========================== Window_TacticsWeaponCommand ============================== //
// ============================== //
// #region ============================== Window_TacticsWeaponDetails ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsWeaponDetails
//
// Weapon details window
function Window_TacticsWeaponDetails() {
    this.initialize.apply(this, arguments);
}
Window_TacticsWeaponDetails.prototype = Object.create(HalfWindow_TacticsDetails.prototype);
Window_TacticsWeaponDetails.prototype.constructor = Window_TacticsWeaponDetails;
Window_TacticsWeaponDetails.prototype.initialize = function (commandWindowHeight = 0) {
    HalfWindow_TacticsDetails.prototype.initialize.call(this, commandWindowHeight);
    this._weapon = null;
};
// Refreshing the window
Window_TacticsWeaponDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._weapon) {
        this.drawDetails(this._weapon);
    }
};
// Erase window content
Window_TacticsWeaponDetails.prototype.empty = function () {
    this._weapon = null;
};
// Drawing the details
Window_TacticsWeaponDetails.prototype.drawDetails = function (weapon) {
    // Title
    this.drawUnderlinedText(weapon.name, 0, 0, this.contentsWidth(), "center");
    // Item's Icon
    this.drawIcon(weapon.icon, 0, 0);
    // Availability Icon
    this.drawIcon(weapon.availabilityIcon, this.contentsWidth() - 32, 0);
    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
        // ["Owned :", "x" + item[1].quantity],
        ["Group :", weapon.groupLabel],
        ["Enc. :", weapon.enc]
    ]);
    this.drawLine(200);
    // Description
    this.drawWrappedTextManually(weapon.description, 0, 220, 160 // 440 (Height) - 60 (2 * Padding) - 220 (Starting Y)
    );
};
// #endregion =========================== Window_TacticsWeaponDetails ============================== //
// ============================== //
// #region ============================== Window_TacticsWeapons ============================== //
// ----------------------
function Window_TacticsWeapons() {
    this.initialize.apply(this, arguments);
}
Window_TacticsWeapons.prototype = Object.create(HalfWindow_TacticsList.prototype);
Window_TacticsWeapons.prototype.constructor = Window_TacticsWeapons;
Window_TacticsWeapons.prototype.initialize = function () {
    HalfWindow_TacticsList.prototype.initialize.call(this);
};
Window_TacticsWeapons.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor();
    }
};
Window_TacticsWeapons.prototype.length = function () {
    return this._weapons.length
        + (this._mainHandWeapon != undefined ? 1 : 0)
        + (this._secondHandWeapon != undefined ? 1 : 0);
};
Window_TacticsWeapons.prototype.syncActor = function () {
    const actor = this._actor;
    const displayedWeapons = actor._weapons.map((weapon, index) => {
        const weaponData = Object.assign({}, TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === weapon.id));
        return Object.assign(Object.assign(Object.assign({ id: weaponData[0] }, weaponData[1]), weapon), { equipIndex: index, equipIcon: weapon.isInMainHand
                ? TEW.DATABASE.ICONS.SET.EQUIPPED_MAIN_HAND
                : weapon.isInSecondHand
                    ? TEW.DATABASE.ICONS.SET.EQUIPPED_SECOND_HAND
                    : 0 });
    });
    this._weapons = displayedWeapons.filter((weapon) => !weapon.isInMainHand && !weapon.isInSecondHand);
    this._maxItems = this._weapons.length;
    this._mainHandWeapon = displayedWeapons.find((weapon) => weapon.isInMainHand);
    if (this._mainHandWeapon) {
        this._maxItems++;
    }
    this._secondHandWeapon = displayedWeapons.find((weapon) => weapon.isInSecondHand);
    if (this._secondHandWeapon) {
        this._maxItems++;
    }
    this.refresh();
};
Window_TacticsWeapons.prototype.drawAllItems = function () {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
Window_TacticsWeapons.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const weapon = this.weaponFromIndex(index);
    if (weapon) {
        this.changeTextColor(this.systemColor());
        this.drawIcon(weapon.equipIcon || 0, x - 32, y);
        this.drawIcon(weapon.icon, x, y);
        this.drawText(weapon.name, x + 32 + this._iconPadding, y, this.contentsWidth());
        this.resetTextColor();
    }
};
Window_TacticsWeapons.prototype.weaponFromIndex = function (index) {
    index = Math.min(index, this.maxItems() - 1);
    let weapon;
    if (index === 0) {
        if (this._mainHandWeapon) {
            weapon = this._mainHandWeapon;
        }
        else if (this._secondHandWeapon) {
            weapon = this._secondHandWeapon;
        }
        else {
            weapon = this._weapons[0];
        }
    }
    else if (index === 1) {
        if (this._mainHandWeapon && this._secondHandWeapon) {
            weapon = this._secondHandWeapon;
        }
        else if (this._mainHandWeapon || this._secondHandWeapon) {
            weapon = this._weapons[0];
        }
        else {
            weapon = this._weapons[1];
        }
    }
    else {
        let realIndex = index;
        if (this._mainHandWeapon)
            realIndex--;
        if (this._secondHandWeapon)
            realIndex--;
        weapon = this._weapons[realIndex];
    }
    return weapon;
};
// Getting the current selected weapon
Window_TacticsWeapons.prototype.item = function () {
    return this.weaponFromIndex(this.index());
};
Window_TacticsWeapons.prototype.select = function (index) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_weapon_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};
Window_TacticsWeapons.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
// #endregion =========================== Window_TacticsWeapons ============================== //
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
    Window_Command.prototype.initialize.call(this, 40, Graphics.boxHeight - this.windowHeight());
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
    this.addCommand(TEW.COMBAT.SYSTEM.action, 'action', true);
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
// #region ============================== backgrounds ============================== //
Window_TacticsCommand.prototype.windowWidth = function () {
    return 200; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsCommand.prototype.windowHeight = function () {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsActionCommand.prototype.windowWidth = function () {
    return 200; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsActionCommand.prototype.windowHeight = function () {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsMoveCommand.prototype.windowWidth = function () {
    return 200; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsMoveCommand.prototype.windowHeight = function () {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};
// #endregion =========================== backgrounds ============================== //
// ============================== //

