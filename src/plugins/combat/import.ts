// $PluginCompiler TEW_Combat.js 0

import { StatName } from "../_types/enum";

// $StartCompilation

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

export const StatArray: StatName[] = ['MHP', 'WEAS', 'BALS', 'STRG', 'TOUG', 'INIT', 'AGIL', 'DEXT', 'INTL', 'FELW', 'WILL'];
