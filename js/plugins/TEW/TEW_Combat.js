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
TEW.COMBAT.SYSTEM.actionRange = 1;
TEW.COMBAT.SYSTEM.mvp = 4; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.runMultiplier = 2;
TEW.COMBAT.SYSTEM.chargeTestModifier = 20; // Easy athletics test
TEW.COMBAT.SYSTEM.chargeMinimumRange = 4;
TEW.COMBAT.SYSTEM.durationStartSprite = 1; // TODO should be removed eventually
TEW.COMBAT.SYSTEM.gridOpacity = 1;
TEW.COMBAT.SYSTEM.selectorFile = 'Selector';
TEW.COMBAT.SYSTEM.selectorSpeed = 1;
TEW.COMBAT.SYSTEM.allyScopeColor = '#008000';
TEW.COMBAT.SYSTEM.enemyScopeColor = '#B22222';
TEW.COMBAT.SYSTEM.moveScopeColor = '#0066CC';
TEW.COMBAT.SYSTEM.aoeHighlightColor = '#ffb300';
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
TEW.COMBAT.SYSTEM.actionSpell = 'Spell';
TEW.COMBAT.SYSTEM.actionChannelling = 'Channelling';
TEW.COMBAT.SYSTEM.advantage = 'Advantages';
TEW.COMBAT.SYSTEM.wait = 'Wait';
TEW.COMBAT.SYSTEM.waitSkillId = 7;
TEW.COMBAT.SYSTEM.battleStartId = 1;
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
    let bonusAP = 0;
    let ignoredAP = 0;
    let ignoreMetalArmor = false;
    let effects = {};
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
            bonusAP += 1;
        }
        else if (quality === 11 /* WeaponQuality.SHIELD_2 */) {
            bonusAP += 2;
        }
        else if (quality === 12 /* WeaponQuality.SHIELD_3 */) {
            bonusAP += 3;
        }
        else if (quality === 13 /* WeaponQuality.SHIELD_4 */) {
            bonusAP += 4;
        }
        else if (quality === 14 /* WeaponQuality.SHIELD_5 */) {
            bonusAP += 5;
        }
        else if (quality === 15 /* WeaponQuality.DEFENSIVE */) {
            defenceMod += 10;
        }
        else if (quality === 0 /* WeaponQuality.HACK */) {
            ignoredAP += 1;
        }
        else if (quality === 3 /* WeaponQuality.PENETRATING */) {
            ignoreMetalArmor = true;
            ignoredAP += 1;
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
        bonusAP,
        ignoredAP,
        ignoreMetalArmor,
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
    const compId = (isMelee ? 'MELEE' : 'RANGED') + '_' + TEW.DATABASE.WEAPONS.GROUP_IDS[weaponGroup];
    if (battler.hasComp(compId)) {
        return {
            compId,
            match: true,
            value: battler.comp(compId)
        };
    }
    else {
        return {
            compId: 'NONE',
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
// #region ============================== Window_TacticsCommandBase ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsCommandBase
//
// The window for selecting an actor's action on the tactics screen.
function Window_TacticsCommandBase() {
    this.initialize.apply(this, arguments);
}
Window_TacticsCommandBase.TEXT_COLOR = "#c0c0c0";
Window_TacticsCommandBase.SELECTED_TEXT_COLOR = "#f0f0f0";
Window_TacticsCommandBase.COLLAPSED_WIDTH = 86;
Window_TacticsCommandBase.STATE_COLLAPSED = 'collapsed';
Window_TacticsCommandBase.STATE_EXTENDED = 'extended';
Window_TacticsCommandBase.LINE_HEIGHT = 54;
Window_TacticsCommandBase.ICON_SLOT_WIDTH = 54;
Window_TacticsCommandBase.TEXT_OFFSET_FROM_ICON = 8;
Window_TacticsCommandBase.FONT_SIZE = 32;
Window_TacticsCommandBase.BG_PADDING = 13;
Window_TacticsCommandBase.prototype = Object.create(Window_ActorCommand.prototype);
Window_TacticsCommandBase.prototype.constructor = Window_TacticsCommandBase;
Window_TacticsCommandBase.prototype.initialize = function () {
    Window_Command.prototype.initialize.call(this, this.xPos(), this.yPos());
    this.openness = 0;
    this.deactivate();
    this._actor = null;
    this._state = Window_TacticsCommandBase.STATE_EXTENDED;
    this._imagesReady = false;
};
Window_TacticsCommandBase.prototype.setActor = function (actor) {
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
Window_TacticsCommandBase.prototype.refresh = function () {
    if (this._actor && this._imagesReady) {
        Window_ActorCommand.prototype.refresh.call(this);
    }
};
Window_TacticsCommandBase.prototype.drawAllItems = function () {
    this.contents.fontSize = Window_TacticsCommandBase.FONT_SIZE;
    Window_ActorCommand.prototype.drawAllItems.call(this);
    this.contents.fontSize = this.standardFontSize();
    this.resetTextColor();
};
Window_TacticsCommandBase.prototype.drawItem = function (index) {
    const y = index * Window_TacticsCommandBase.LINE_HEIGHT;
    let iconName = this._iconOrder[index];
    if (this._index === index) {
        iconName += '_selected';
    }
    const bitmap = ImageManager.loadSystem(iconName);
    this.contents.blt(bitmap, 0, 0, bitmap.rect.width, bitmap.rect.height, 0, y);
    // Extended view
    console.log('Window_TacticsCommandBase.prototype.drawItem', this._state);
    if (this._state === Window_TacticsCommandBase.STATE_EXTENDED) {
        let textColor = Window_TacticsCommandBase.TEXT_COLOR;
        if (this._index === index) {
            textColor = Window_TacticsCommandBase.SELECTED_TEXT_COLOR;
        }
        this.changeTextColor(textColor);
        this.drawText(this.commandName(index), Window_TacticsCommandBase.LINE_HEIGHT, y + Window_TacticsCommandBase.TEXT_OFFSET_FROM_ICON, this.textMaxWidth());
    }
};
Window_TacticsCommandBase.prototype.itemRect = function (index) {
    return new Rectangle(0, index * Window_TacticsCommandBase.LINE_HEIGHT, Window_TacticsCommandBase.ICON_SLOT_WIDTH + this.textMaxWidth(), Window_TacticsCommandBase.LINE_HEIGHT);
};
Window_TacticsCommandBase.prototype.itemRectForText = function (index) {
    return this.itemRect(index);
};
Window_TacticsCommandBase.prototype.select = function (index) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
    }
};
Window_TacticsCommandBase.prototype.collapse = function () {
    if (this._state == Window_TacticsCommandBase.STATE_EXTENDED) {
        this._state = Window_TacticsCommandBase.STATE_COLLAPSED;
        this.width = Window_TacticsCommandBase.COLLAPSED_WIDTH;
        this.refresh();
    }
};
Window_TacticsCommandBase.prototype.extend = function () {
    if (this._state == Window_TacticsCommandBase.STATE_COLLAPSED) {
        this._state = Window_TacticsCommandBase.STATE_EXTENDED;
        this.width = this.extendedWidth();
        this.refresh();
    }
};
// Legacy command list
// Window_TacticsCommandBase.prototype.makeCommandList = function() {
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
// Window_TacticsCommandBase.prototype.addActionCommand = function() {
//     this._actor.checkEventTriggerThere();
//     this._actor.actionsButton().forEach(function(eventId) {
//         var event = $gameMap.event(eventId);
//         this.addCommand(event.name(), 'event');
//     }, this);
// };
Window_TacticsCommandBase.prototype.close = function () {
    ImageManager.releaseReservation(this.imageCacheRid());
    Window_ActorCommand.prototype.close.call(this);
};
Window_TacticsCommandBase.prototype.horizontalBorderPadding = () => Window_TacticsCommandBase.BG_PADDING;
Window_TacticsCommandBase.prototype.verticalBorderPadding = () => Window_TacticsCommandBase.BG_PADDING;
Window_TacticsCommandBase.prototype.updateCursor = function () {
    this.setCursorRect(0, 0, 0, 0);
};
Window_TacticsCommandBase.prototype.close = function () {
    ImageManager.releaseReservation(this.imageCacheRid());
    Window_ActorCommand.prototype.close.call(this);
};
Window_TacticsCommandBase.prototype.xPos = function () {
    return 0;
};
Window_TacticsCommandBase.prototype.yPos = function () {
    return 0;
};
Window_TacticsCommandBase.prototype.textMaxWidth = function () {
    return 0;
};
Window_TacticsCommandBase.prototype.extendedWidth = function () {
    return 0;
};
Window_TacticsCommandBase.prototype.imageCacheRid = function () {
    return '';
};
// #endregion =========================== Window_TacticsCommandBase ============================== //
// ============================== //
// #region ============================== Game_ActionLegacy ============================== //
//-----------------------------------------------------------------------------
// Game_Action - legacy
//
// Battles only use decision-based actions (see Game_Action.ts). RMMV may still build actions without a decision
// (e.g. Game_Battler.makeActions, item and skill menus): such actions keep RMMV's behaviour for everything
// except their resolution, which TEW does not implement.
// Compiled before Game_Action.ts, so that the dispatching entry points there always win.
// Trace calls to legacy code at runtime, to spot what still depends on it
Game_Action.logLegacyCall = function (functionName) {
    console.log("INFO Legacy Game_Action call " + functionName + ", look into it");
};
Game_Action.prototype.initializeLegacy = function (forcing) {
    this._forcing = forcing || false;
    this._modifiers = {};
};
Game_Action.prototype.applyLegacy = function (_target) {
    Game_Action.logLegacyCall('apply');
};

// #endregion =========================== Game_ActionLegacy ============================== //
// ============================== //
// #region ============================== BattleManager ============================== //
//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages tactics progress. Split into several files:
//  - BattleManager.ts: phases, setup, main update loop, state accessors and RMMV overrides needed by the engine
//  - BattleManager_Turns.ts: initiative order and turn start of each battler
//  - BattleManager_Decisions.ts: execution of battle decisions (AI and player), action/move points
//  - BattleManager_Input.ts: player command input, targetting and map tiles display
//  - BattleManager_End.ts: victory, defeat and battle termination
var Phase;
(function (Phase) {
    Phase["Init"] = "init";
    Phase["Start"] = "startPhase";
    Phase["Battlers"] = "battlersPhase";
    Phase["BattleEnd"] = "battleEnd";
    Phase["Aborting"] = "aborting"; // Set by RMMV's BattleManager.abort (e.g. "Abort Battle" event command)
})(Phase || (Phase = {}));
var BattlePhase;
(function (BattlePhase) {
    BattlePhase["Init"] = "init";
    BattlePhase["Start"] = "start";
    BattlePhase["InputCommand"] = "inputCommand";
    BattlePhase["InputMove"] = "inputMove";
    BattlePhase["InputCharge"] = "inputCharge";
    BattlePhase["Target"] = "target";
    BattlePhase["ProcessMove"] = "processMove";
    BattlePhase["Close"] = "close";
    BattlePhase["TurnEnd"] = "turnEnd"; // All battlers have played
})(BattlePhase || (BattlePhase = {}));
BattleManager.setup = function (battleId, canEscape, canLose) {
    this.initMembers();
    this._canEscape = canEscape;
    this._canLose = canLose;
    $gameTroop.setup(battleId);
    $gameSelector.performTransfer($gamePlayer.x, $gamePlayer.y);
    this._phase = Phase.Start;
};
BattleManager.initMembers = function () {
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
    this._previewMoveOption = 1 /* BattleOption.WALK */;
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
    const ai = event.tparam('AI') || TEW.DATABASE.NPCS.SET[npcId].ai || "DEFAULT";
    $gameTroopTs.addEnemy(npcId, event, ai);
};
BattleManager.addGameTroop = function (event) {
    const index = Number(event.tparam('Troop'));
    $gameTroopTs.addTroop(index, event);
};
BattleManager.startBattle = function () {
    $gamePartyTs.onBattleStart();
    $gameTroopTs.onBattleStart();
    $gameScreen.onBattleStart();
    $gameSystem.onBattleStart();
};
// ----------------------
// Main loop
// ----------------------
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
            case Phase.Aborting:
                this.processAbort();
                break;
        }
    }
};
BattleManager.updateBattlersPhase = function () {
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
BattleManager.isBusy = function () {
    return ($gameMessage.isBusy() || this._spriteset.isBusy() ||
        this._logWindow.isBusy() || $gameSelector.isBusy());
};
BattleManager.updateEvent = function () {
    switch (this._phase) {
        case Phase.Start:
        case Phase.Battlers:
            return this.updateEventMain();
        default:
            return false;
    }
};
// Returns true while a battle event (troop or map) is running, or when the battle has ended
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
// ----------------------
// State accessors
// ----------------------
BattleManager.phase = function () {
    return this._phase;
};
BattleManager.battlePhase = function () {
    return this._battlePhase;
};
BattleManager.allBattleMembers = function () {
    return $gamePartyTs.members().concat($gameTroopTs.members());
};
/**
 * Active battler if it is an actor
 */
BattleManager.actor = function () {
    return this._subject && this._subject.isActor() ? this._subject : null;
};
// Map selector and touch input are only active while the player targets something
BattleManager.isActive = function () {
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
BattleManager.isBattleEnd = function () {
    return this._phase === Phase.BattleEnd;
};
BattleManager.isInputting = function () {
    return this._battlePhase === BattlePhase.InputCommand;
};
BattleManager.isAborting = function () {
    return this._phase === Phase.Aborting;
};
BattleManager.isTurnEnd = function () {
    return this._battlePhase === BattlePhase.TurnEnd;
};
BattleManager.isActionForced = function () {
    return false;
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
BattleManager.setEventCallback = function (callback) {
    this._eventCallback = callback;
};
// #endregion =========================== BattleManager ============================== //
// ============================== //
// #region ============================== BattleManager_Decisions ============================== //
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
BattleManager.canMove = function () {
    return !!this._subject && this._subject.hasMovePoint();
};
BattleManager.canRun = function () {
    return !!this._subject && this._subject.hasActionPoint() && this._subject.hasMovePoint();
};
BattleManager.canAct = function () {
    return !!this._subject && this._subject.hasActionPoint();
};
BattleManager.canActOrMove = function () {
    return !!this._subject && (this._subject.hasActionPoint() || this._subject.hasMovePoint());
};
BattleManager.canInput = function () {
    return this.canActOrMove() || $gamePartyTs._advantages > 3;
};
BattleManager.spendMove = function () {
    if (this._subject) {
        this._subject.spendMovePoint();
    }
};
BattleManager.spendAction = function () {
    if (this._subject) {
        this._subject.spendActionPoint();
    }
};
// ----------------------
// Decisions
// ----------------------
BattleManager.updateEnemyPhase = function () {
    $gameTroop.setupTactics([this._subject]); // TODO optimization
    // Call custom decision algorithm
    const decisionAlgorithm = this._subject.getAI();
    const decision = decisionAlgorithm(this._subject, $gameTroopTs.aliveMembers(), $gamePartyTs.aliveMembers());
    console.log("Decision: ", decision);
    this.executeDecision(decision);
};
/**
 * Resolve a decision taken by the active battler. Movements are then processed in the ProcessMove phase,
 * other actions end right away.
 */
BattleManager.executeDecision = function (decision) {
    this.supplementActionParameters(decision);
    this._decisionPointsBefore = this._subject.actionAndMovePoints();
    this._decisionAction = new Game_Action(this._subject, false, decision);
    this._decisionAction.apply();
    $gameMap.clearTiles();
    if (this._decisionAction.hasPendingMove()) {
        this._battlePhase = BattlePhase.ProcessMove;
    }
    else {
        this.onDecisionEnd();
    }
};
/**
 * Complete a decision with the subject's equipped weapon when it needs one and none was given
 */
BattleManager.supplementActionParameters = function (decision) {
    const option = decision.option;
    if (!decision.weapon && (option === 6 /* BattleOption.MELEE_ATTACK */ || option === 7 /* BattleOption.RANGED_ATTACK */ || option === 10 /* BattleOption.RELOAD */)) {
        const weaponId = this._subject.equippedWeapon().id;
        decision.weapon = TEW.DATABASE.WEAPONS.MELEE_SET[weaponId] || TEW.DATABASE.WEAPONS.RANGED_SET[weaponId]; // TODO second hand
    }
    else if (option === 9 /* BattleOption.USE_ITEM */) {
        // TODO
    }
    else if (option === 8 /* BattleOption.USE_SPELL */) {
        // TODO
    }
};
/**
 * ProcessMove phase: move the subject along its decision path, one tile at a time
 */
BattleManager.updateMove = function () {
    if (this._subject.isMoving()) {
        return;
    }
    if (this._subject.hasPendingMoveStep()) {
        this._subject.processMoveStep();
    }
    else {
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
BattleManager.onDecisionEnd = function () {
    const action = this._decisionAction;
    this._decisionAction = null;
    $gameMap.clearTiles();
    const isWait = action.option() === 0 /* BattleOption.WAIT */;
    if (this._subject.isEnemy()) {
        const hasSpentPoints = this._subject.actionAndMovePoints() < this._decisionPointsBefore;
        if (!isWait && hasSpentPoints && this._subject.isAlive() && this.canActOrMove()) {
            this.updateEnemyPhase();
            return;
        }
    }
    else if (!isWait && this._subject.isAlive() && this.canInput() && this._subject.canInput()) {
        // Players keep control until they wait or have nothing left to do
        this._previewMoveOption = 1 /* BattleOption.WALK */;
        $gameSelector.performTransfer(this._subject.x, this._subject.y);
        this._battlePhase = BattlePhase.InputCommand;
        return;
    }
    this.endAction();
};
// #endregion =========================== BattleManager_Decisions ============================== //
// ============================== //
// #region ============================== BattleManager_End ============================== //
//-----------------------------------------------------------------------------
// BattleManager - end of battle
//
// Victory, defeat and termination. RMMV's playVictoryMe, playDefeatMe, displayVictoryMessage, displayDefeatMessage
// and processAbort are used as is.
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
/**
 * RMMV rewards (exp, gold, drops) are not used: TEW handles progression and loot elsewhere
 */
BattleManager.processVictory = function () {
    if (this._subject) {
        this._logWindow.endAction(this._subject);
    }
    this._actorWindow.close();
    this._enemyWindow.close();
    $gameSelector.setTransparent(true);
    $gameParty.setupTactics($gamePartyTs.members());
    $gameTroop.setupTactics($gameTroopTs.members());
    $gameParty.removeBattleStates();
    $gameParty.performVictory();
    this.playVictoryMe();
    this.replayBgmAndBgs();
    this.displayVictoryMessage();
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
BattleManager.updateBattleEnd = function () {
    if (!this._escaped && $gameParty.isAllDead() || TEW.COMBAT.SYSTEM.isDefeated) {
        if (this._canLose) {
            $gameParty.reviveBattleMembers();
            SceneManager.pop();
        }
        else {
            SceneManager.goto(Scene_Gameover);
        }
    }
    else {
        SceneManager.pop();
    }
    this._phase = null;
    this.terminate();
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
// #endregion =========================== BattleManager_End ============================== //
// ============================== //
// #region ============================== BattleManager_Input ============================== //
//-----------------------------------------------------------------------------
// BattleManager - player input
//
// Battle menu windows, map tiles display, and targetting phases: a player command starts an incomplete decision
// (option, weapon, spell...), the targetting phase completes it with a target, then it is executed like any AI decision
// (see BattleManager_Decisions.ts).
BattleManager.setCommandWindow = function (commandWindow) {
    this._commandWindow = commandWindow;
};
BattleManager.setActorWindow = function (actorWindow) {
    this._actorWindow = actorWindow;
};
BattleManager.setEnemyWindow = function (enemyWindow) {
    this._enemyWindow = enemyWindow;
};
BattleManager.closeCommand = function () {
    this._commandWindow.close();
};
BattleManager.selectActor = function (actor) {
    $gameSelector.updateSelect();
    this._subject = actor;
    this._subject.performSelect();
    this._subject.savePosition();
    this._previewMoveOption = 1 /* BattleOption.WALK */;
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
BattleManager.refreshMoveTiles = function () {
    const battler = $gameSelector.select();
    if (battler) {
        const option = battler === this._subject ? this._previewMoveOption : 1 /* BattleOption.WALK */;
        this.showMoveRange(battler, option);
    }
    else {
        $gameMap.clearTiles();
    }
};
BattleManager.previewMoveOption = function (option) {
    this._previewMoveOption = option;
    this.refreshMoveTiles();
};
/**
 * Highlight the tiles a battler can reach with a move option
 */
BattleManager.showMoveRange = function (battler, option) {
    $gameMap.clearTiles();
    $gameMap.setMoveColor();
    switch (option) {
        case 1 /* BattleOption.WALK */:
            $gameMap.makeRange(battler.walkDistance(), battler.event());
            break;
        case 2 /* BattleOption.RUN */:
            $gameMap.makeRange(battler.runDistance(), battler.event());
            break;
        case 3 /* BattleOption.CHARGE */:
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
BattleManager.startTargetting = function (decision) {
    this._pendingDecision = Object.assign({ initiator: this._subject, target: undefined }, decision);
    this.supplementActionParameters(this._pendingDecision);
    $gameMap.clearAoeTiles();
    $gameSelector.performTransfer(this._subject.x, this._subject.y);
    switch (decision.option) {
        case 1 /* BattleOption.WALK */:
        case 2 /* BattleOption.RUN */:
            this.showMoveRange(this._subject, decision.option);
            this._battlePhase = BattlePhase.InputMove;
            break;
        case 3 /* BattleOption.CHARGE */:
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
BattleManager.confirmTarget = function (target) {
    const decision = this._pendingDecision;
    decision.target = target;
    this._pendingDecision = null;
    this._targettingAction = null;
    $gameMap.clearAoeTiles();
    this._enemyWindow.close();
    this.executeDecision(decision);
};
BattleManager.cancelTargetting = function () {
    SoundManager.playCancel();
    this._pendingDecision = null;
    this._targettingAction = null;
    $gameMap.clearAoeTiles();
    this._enemyWindow.close();
    this.processCancel();
    this.previousSelect();
};
// InputMove phase - walk or run: select a free tile in range
BattleManager.updateSelect = function () {
    this.refreshEnemyWindow($gameSelector.select());
    if ($gameSelector.checkDestination(this._subject)) {
        SoundManager.playOk();
        this.confirmTarget({
            type: 1 /* BattleTargetType.TILE */,
            target: { x: $gameSelector.x, y: $gameSelector.y }
        });
    }
    else if ($gameSelector.isCancelled()) {
        this.cancelTargetting();
    }
};
// InputCharge phase: select an enemy in charge range
BattleManager.updateChargeTarget = function () {
    const selected = $gameSelector.select();
    this.refreshEnemyWindow(selected); // TODO change enemy window
    if ($gameSelector.isOk()) {
        if (selected && selected.isAlive() && selected.isEnemy() && $gameMap.isOnTiles($gameSelector.x, $gameSelector.y)) {
            SoundManager.playOk();
            this.confirmTarget({ type: 0 /* BattleTargetType.BATTLER */, target: selected });
        }
        else {
            SoundManager.playBuzzer();
        }
    }
    else if ($gameSelector.isCancelled()) {
        this.cancelTargetting();
    }
};
// Target phase - attacks and spells: select a battler in range (or a tile for area spells)
BattleManager.updateTarget = function () {
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
        }
        else if (action.extractAoeData() > 0) {
            SoundManager.playOk();
            this.confirmTarget({ type: 1 /* BattleTargetType.TILE */, target: { x, y } });
        }
        else if (selected && selected.isAlive() && selected !== this._subject) {
            SoundManager.playOk();
            this.confirmTarget({ type: 0 /* BattleTargetType.BATTLER */, target: selected });
        }
        else {
            SoundManager.playBuzzer();
        }
    }
    else if ($gameSelector.isCancelled()) {
        this.cancelTargetting();
    }
};
/**
 * Back to the battle menu
 */
BattleManager.previousSelect = function () {
    this._battlePhase = BattlePhase.InputCommand;
    $gameSelector.updateSelect();
    this.refreshMoveTiles();
};
/**
 * Selector back on the active battler
 */
BattleManager.processCancel = function () {
    $gameMap.clearTiles();
    $gameSelector.performTransfer(this._subject.x, this._subject.y);
};
// ----------------------
// Display
// ----------------------
BattleManager.refreshEnemyWindow = function (selectedBattler) {
    if (selectedBattler && selectedBattler.isAlive() && selectedBattler.isEnemy()) {
        this._enemyWindow.open(selectedBattler);
    }
    else {
        this._enemyWindow.close();
    }
};
BattleManager.refreshTarget = function () {
    const select = $gameSelector.select();
    if (select && select.isAlive()) {
        this._subject.turnTowardCharacter(select);
    }
    else {
        this._enemyWindow.close();
    }
};
/**
 * Highlight the range (and area of effect) of an action
 */
BattleManager.refreshRedCells = function (action) {
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
BattleManager.refreshAoeCells = function (action) {
    var _a;
    if (((_a = action._aoeRange) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        $gameMap.clearAoeTiles();
        action.updateAoeRange();
        action.showAreaOfEffect();
    }
};
// #endregion =========================== BattleManager_Input ============================== //
// ============================== //
// #region ============================== BattleManager_Turns ============================== //
//-----------------------------------------------------------------------------
// BattleManager - turns
//
// Initiative order, start and end of each battler's turn.
// TODO call once when battle starts
BattleManager.makeTurnOrder = function () {
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
        .sort((a, b) => b.initiative - a.initiative);
};
/**
 * Index of the active battler in the turn order (used by Window_TurnOrder)
 */
BattleManager.turnIndex = function () {
    if (!this._turnOrder || !this._currentTurnOrder) {
        return -1;
    }
    return Math.max(this._turnOrder.length - this._currentTurnOrder.length - 1, 0);
};
/**
 * Battler designated by the current turn order entry
 */
BattleManager.battler = function () {
    if (this._currentBattler && this._battlerIndex >= 0) {
        return this._currentBattler.isActor
            ? $gamePartyTs.members()[this._battlerIndex]
            : $gameTroopTs.members()[this._battlerIndex];
    }
    return null;
};
BattleManager.updateStartPhase = function () {
    $gameTroop.increaseTurn(); // Turn count for troop events conditions
    this.makeTurnOrder();
    this._phase = Phase.Battlers;
    this.startNewTurn();
};
BattleManager.startNewTurn = function () {
    this._currentTurnOrder = JSON.parse(JSON.stringify(this._turnOrder)); // deep copy to pop battlers one by one
    $gameSelector.setTransparent(true);
    this._logWindow.startTurn();
    $gameSelector.updateSelect();
    this._battlePhase = BattlePhase.Start;
};
BattleManager.updateStart = function () {
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
        }
        else {
            this.updateStartEnemy();
        }
    }
    else { // remove battler from turn order
        this._turnOrder.splice(this.turnIndex(), 1);
    }
};
BattleManager.updateStartPlayer = function () {
    $gameSelector.performTransfer(this._subject.x, this._subject.y);
    $gameSelector.setTransparent(false);
    this._subject.onTurnStart();
    this.selectActor(this._subject);
};
BattleManager.updateStartEnemy = function () {
    $gameSelector.setTransparent(false);
    this._subject.onTurnStart();
    this.updateEnemyPhase();
};
/**
 * End the active battler's turn
 */
BattleManager.endAction = function () {
    $gameSelector.updateSelect();
    $gameMap.clearTiles();
    this._subject.onAllActionsEnd();
    this._logWindow.displayAutoAffectedStatus(this._subject);
    this._logWindow.displayCurrentState(this._subject);
    this._logWindow.displayRegeneration(this._subject);
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
/**
 * Actor events switch to their "damaged" page (self switch A) when KO
 */
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
// #endregion =========================== BattleManager_Turns ============================== //
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
//
// A Game_Action is either:
//  - a decision-based action, built from a BattleDecision (enemy AI and player input): everything in this file
//  - a legacy RMMV action, built without a decision by RMMV itself: see Game_ActionLegacy.ts
// Entry points (initialize, apply) dispatch on isDecision().
// TODO +10 when deafened and attacking from behind/flank
// TODO +20 if prone
// TODO +20 if surprised
// TODO +10 if blinded
// TODO bonus on unconscious
Game_Action.prototype.initialize = function (subject, forcing, params = undefined, modifiers = {}) {
    this._subjectActorId = 0;
    this._subjectEnemyIndex = -1;
    this._subject = subject;
    this.setSubject(subject);
    this.clear();
    // Ranges are shared by both kinds of actions, to display tiles
    this._range = [];
    this._aoeRange = [];
    if (params === undefined) {
        this.initializeLegacy(forcing);
    }
    else {
        this.initializeDecision(params, modifiers);
    }
};
Game_Action.prototype.initializeDecision = function (params, modifiers = {}) {
    var _a, _b;
    this._decision = params;
    this._option = params.option;
    this._modifiers = modifiers;
    this._subjectAbilityRoll = undefined;
    this._object = undefined;
    this._objectType = 2 /* GameActionUsableObject.ITEM */;
    this._targets = [];
    this._targetTile = undefined;
    if (params.weapon) {
        this._object = params.weapon;
        this._objectType = 0 /* GameActionUsableObject.WEAPON */;
    }
    else if (params.spell) {
        this._object = params.spell;
        this._objectType = 1 /* GameActionUsableObject.SPELL */;
    }
    else if (params.item) {
        this._object = params.item;
    }
    if (((_a = params.target) === null || _a === void 0 ? void 0 : _a.type) === 0 /* BattleTargetType.BATTLER */) {
        this._targets = [params.target.target];
    }
    else if (((_b = params.target) === null || _b === void 0 ? void 0 : _b.type) === 1 /* BattleTargetType.TILE */) {
        this._targetTile = params.target.target;
    }
};
/**
 * Whether this action was built from a BattleDecision (new system) rather than through legacy RMMV setters
 */
Game_Action.prototype.isDecision = function () {
    return this._decision !== undefined;
};
Game_Action.prototype.decision = function () {
    return this._decision;
};
Game_Action.prototype.option = function () {
    return this._option;
};
Game_Action.prototype.subject = function () {
    return this._subject;
};
Game_Action.prototype.targets = function () {
    return this._targets;
};
Game_Action.prototype.isMovementDecision = function () {
    return this._option === 1 /* BattleOption.WALK */ || this._option === 2 /* BattleOption.RUN */;
};
// ----------------------
// Ranges
// ----------------------
Game_Action.prototype.getTargettableEnemies = function () {
    const battlers = this._subject.opponentsUnitTS().aliveMembers();
    return this.findBattlersInRange(battlers);
};
Game_Action.prototype.getTargettableAllies = function () {
    const battlers = this._subject.friendsUnitTS().aliveMembers();
    return this.findBattlersInRange(battlers);
};
Game_Action.prototype.findBattlersInRange = function (battlers) {
    const battlersInRange = [];
    const range = this.updateRange();
    this.updateAoeRange();
    const rangeSquared = range * range;
    for (let battler of battlers) {
        if (this.isInEuclideanDistance(rangeSquared, battler.tx, battler.ty, this._subject.tx, this._subject.ty)) {
            battlersInRange.push(battler);
        }
    }
    return battlersInRange;
};
Game_Action.prototype.updateRange = function () {
    const range = this.extractRangeData();
    // TODO better algorithm for obstacles
    this._range = this.computeEuclideanRange(range, this._subject.tx, this._subject.ty);
    return range;
};
Game_Action.prototype.extractRangeData = function () {
    var _a;
    const range = (_a = this._object) === null || _a === void 0 ? void 0 : _a.range;
    if (range) {
        if (typeof range === 'number') {
            return range;
        }
        else { // Spell range
            const rangeType = range.type;
            switch (rangeType) {
                case "Self" /* SpellRange.SELF */: return 0;
                case "Touch" /* SpellRange.TOUCH */: return 1;
                case "Willpower" /* SpellRange.WILL */: return this._subject.paramByName("WILL" /* Stat.WILL */);
                case "One" /* SpellRange.ONE */: return 0; // TODO WTF
            }
        }
    }
    // Melee weapons have no range property
    if (this._objectType === 0 /* GameActionUsableObject.WEAPON */) {
        return TEW.COMBAT.SYSTEM.actionRange;
    }
    return 0;
};
Game_Action.prototype.updateAoeRange = function () {
    const aoe = this.extractAoeData();
    if (aoe !== 0) {
        this._aoeRange = this.computeEuclideanRange(aoe, $gameSelector._x, $gameSelector._y);
        this._aoeRange.push([$gameSelector._x, $gameSelector._y]);
    }
    else {
        this._aoeRange = [];
    }
    return aoe;
};
// TODO
Game_Action.prototype.extractAoeData = function () {
    var _a;
    const target = (_a = this._object) === null || _a === void 0 ? void 0 : _a.target;
    if (target) {
        const targetType = target.type;
        if (targetType === "AoE" /* SpellTarget.AOE */) {
            const targetRadius = target.distance;
            if (targetRadius === "Willpower Bonus" /* SpellTargetRadius.WILL_BONUS */) {
                return this._subject.paramBonus("WILL" /* Stat.WILL */);
            }
        }
    }
    // Default case
    return 0;
};
/**
 * All tiles [x, y] at euclidean distance d or less from (x, y), (x, y) included
 */
Game_Action.prototype.computeEuclideanRange = function (d, x, y) {
    const range = [];
    const dSquared = d * d;
    for (let i = x - d; i <= x + d; i++) {
        for (let j = y - d; j <= y + d; j++) {
            if (this.isInEuclideanDistance(dSquared, i, j, x, y)) {
                range.push([i, j]);
            }
        }
    }
    return range;
};
Game_Action.prototype.isInEuclideanDistance = function (dSquared, x, y, centerX, centerY) {
    return (x - centerX) * (x - centerX) + (y - centerY) * (y - centerY) <= dSquared;
};
// ----------------------
// Resolution
// ----------------------
Game_Action.prototype.attackRollModifier = function () {
    return this._modifiers.attackRoll || 0;
};
/**
 * Entry point to resolve an action. Legacy actions get their target as a parameter (RMMV flow),
 * decision-based actions already know their targets.
 */
Game_Action.prototype.apply = function (target) {
    if (this.isDecision()) {
        this.applyDecision();
    }
    else {
        this.applyLegacy(target);
    }
};
Game_Action.prototype.applyDecision = function () {
    switch (this._option) {
        case 0 /* BattleOption.WAIT */:
            break; // Ends the battler's turn, see BattleManager.onDecisionEnd
        case 1 /* BattleOption.WALK */:
            this.applyWalk(false);
            break;
        case 2 /* BattleOption.RUN */:
            this.applyWalk(true);
            break;
        case 3 /* BattleOption.CHARGE */:
            this.applyCharge();
            break;
        case 5 /* BattleOption.SWITCH_WEAPONS */:
            this.applySwitchWeapons();
            break;
        case 6 /* BattleOption.MELEE_ATTACK */:
            this.applyAttack(true);
            break;
        case 7 /* BattleOption.RANGED_ATTACK */:
            this.applyAttack(false);
            break;
        case 10 /* BattleOption.RELOAD */:
            this.applyReload();
            break;
        case 8 /* BattleOption.USE_SPELL */:
            this.applySpellDecision();
            break;
        case 9 /* BattleOption.USE_ITEM */: // TODO
        case 4 /* BattleOption.DISENGAGE */: // TODO
        default:
            console.log("TODO Game_Action decision option not handled:", this._option);
            break;
    }
};
/**
 * Whether the decision moves its subject, i.e. BattleManager must wait for the move to end
 */
Game_Action.prototype.hasPendingMove = function () {
    return this._subject.hasPendingMoveStep();
};
/**
 * Called by BattleManager once the subject has finished moving
 */
Game_Action.prototype.onMoveEnd = function () {
    if (this._option === 3 /* BattleOption.CHARGE */) {
        this.applyChargeAttack();
    }
};
/**
 * Walk (1 move point, or 1 action point if no move point is left) or run (1 move and 1 action point)
 * toward the target tile, as far as the subject's movement allows
 */
Game_Action.prototype.applyWalk = function (run) {
    const subject = this._subject;
    if (run ? !(subject.hasMovePoint() && subject.hasActionPoint()) : !(subject.hasMovePoint() || subject.hasActionPoint())) {
        return;
    }
    const target = this.targetPosition();
    if (!target) {
        return;
    }
    const distance = run ? subject.runDistance() : subject.walkDistance();
    const path = subject.computePathTowards(target.x, target.y, distance);
    if (path.length === 0) {
        return; // Nowhere to go: nothing is spent
    }
    if (run) {
        subject.spendMovePoint();
        subject.spendActionPoint();
    }
    else {
        subject.spendMoveOrActionPoint();
    }
    subject.setMovePath(path);
};
/**
 * Charge (1 move and 1 action point) in a straight line toward the target, then attack it if it is reached
 */
Game_Action.prototype.applyCharge = function () {
    const subject = this._subject;
    if (!subject.hasMovePoint() || !subject.hasActionPoint()) {
        return;
    }
    const targetTile = this.targetPosition();
    if (!targetTile) {
        return;
    }
    const path = $gameMap.loadOrComputeChargeRangeForAI({ x: subject.tx, y: subject.ty }, { x: targetTile.x, y: targetTile.y }, subject.event());
    if (!subject.canFollowPath(path)) {
        return; // No clear charge path: nothing is spent
    }
    subject.spendMovePoint();
    subject.spendActionPoint();
    // TODO handle crit fail?
    this._chargeTestResult = TEW.DICE.skillTest(subject, 'ATHLETICS', TEW.COMBAT.SYSTEM.chargeTestModifier, !subject.isActor());
    const maxMove = subject.runDistance() + this._chargeTestResult.sl;
    this._chargeTarget = this._targets[0] || this.opponentAt(targetTile.x, targetTile.y);
    subject.setMovePath(path.slice(0, Math.max(maxMove, 0)));
    $gameMap._flexibleMovement = true; // Go back to free movement range for next action
};
/**
 * Attack at the end of a charge: no point is spent (the charge already spent them),
 * and a successful charge test gives a bonus
 */
Game_Action.prototype.applyChargeAttack = function () {
    var _a;
    const target = this._chargeTarget;
    if (target && target.isAlive() && this._subject.isAdjacentTo(target)) {
        const attack = Game_Action.chargeAttack(this._subject, target, (_a = this._chargeTestResult) === null || _a === void 0 ? void 0 : _a.success);
        attack.resolveWeaponAttack(true);
    }
};
/**
 * Equip the decision's weapon, or the first melee weapon available (1 move point, or 1 action point)
 */
Game_Action.prototype.applySwitchWeapons = function () {
    const subject = this._subject;
    if (!subject.hasMovePoint() && !subject.hasActionPoint()) {
        return;
    }
    const weapons = subject._weapons || [];
    const weaponId = this._object && this._objectType === 0 /* GameActionUsableObject.WEAPON */
        ? Object.keys(TEW.DATABASE.WEAPONS.MELEE_SET).concat(Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET))
            .find(id => TEW.DATABASE.WEAPONS.MELEE_SET[id] === this._object || TEW.DATABASE.WEAPONS.RANGED_SET[id] === this._object)
        : undefined;
    const index = weapons.findIndex(weapon => weaponId
        ? weapon.id === weaponId
        : TEW.DATABASE.WEAPONS.MELEE_SET[weapon.id] !== undefined);
    if (index < 0 || weapons[index].isInMainHand) {
        return;
    }
    subject.equipMainHand(index);
    subject.spendMoveOrActionPoint();
};
/**
 * Weapon attack against the decision's target (1 action point)
 */
Game_Action.prototype.applyAttack = function (isMelee) {
    const subject = this._subject;
    const target = this._targets[0];
    if (!subject.hasActionPoint() || !target || !target.isAlive() || !this._object) {
        return;
    }
    if (!isMelee) {
        const mainHand = subject.mainHand();
        if (mainHand && mainHand.isReloadable) {
            if (mainHand.ammo <= 0) {
                return;
            }
            mainHand.ammo -= 1;
        }
    }
    subject.spendActionPoint();
    this.resolveWeaponAttack(isMelee);
};
/**
 * Load the equipped ranged weapon (1 action point)
 */
Game_Action.prototype.applyReload = function () {
    const subject = this._subject;
    const mainHand = subject.mainHand();
    if (!subject.hasActionPoint() || !mainHand || !mainHand.isReloadable || mainHand.ammo > 0) {
        return;
    }
    // TODO RELOAD_X qualities (several actions), ammunition from the inventory
    mainHand.ammo = 1;
    subject.spendActionPoint();
};
/**
 * Cast the decision's spell on its target battler, or on every battler in the area of effect around its target tile (1 action point)
 */
Game_Action.prototype.applySpellDecision = function () {
    const subject = this._subject;
    if (!subject.hasActionPoint() || !this._object) {
        return;
    }
    let targets = this._targets;
    const tile = this.targetPosition();
    const aoe = this.extractAoeData();
    if (aoe > 0 && tile) {
        const aoeTiles = this.computeEuclideanRange(aoe, tile.x, tile.y);
        targets = BattleManager.allBattleMembers().filter((battler) => battler.isAlive() && aoeTiles.some(pos => battler.pos(pos[0], pos[1])));
    }
    subject.spendActionPoint();
    targets.forEach(target => this.applySpell(target));
};
/**
 * Tile targeted by the decision: the target tile, or the target battler's position
 */
Game_Action.prototype.targetPosition = function () {
    if (this._targetTile && this._targetTile.x !== undefined && this._targetTile.y !== undefined) {
        return this._targetTile;
    }
    const target = this._targets[0];
    if (target) {
        return { x: target.x, y: target.y };
    }
    return undefined;
};
Game_Action.prototype.opponentAt = function (x, y) {
    return this._subject.opponentsUnitTS().aliveMembers().find((battler) => battler.pos(x, y));
};
/**
 * Remove HP from the target, and make it collapse if it dies.
 * RMMV's executeDamage can't be used: it checks the RMMV item damage type, which TEW does not use (see checkDamageType)
 */
Game_Action.prototype.dealDamage = function (target, value) {
    this.executeHpDamage(target, value);
    console.log(`Damage: ${target.name()} loses ${value} HP (${target.hp} left)`);
    if (target.isDead()) {
        target.performCollapse();
    }
};
/**
 * Roll and resolve a weapon attack against the first target. Does not spend any point.
 * TODO ranged attack rules (no parry, range bands, aiming)
 */
Game_Action.prototype.resolveWeaponAttack = function (isMelee) {
    const attacker = this._subject;
    const attackerWeapon = this._object;
    const target = this._targets[0];
    attacker.turnTowardCharacter(target);
    target.turnTowardCharacter(attacker);
    // TODO attack with second hand
    const attackerWeaponEffects = TEW.COMBAT.getWeaponQualityEffects(attackerWeapon);
    const defenderWeapon = TEW.COMBAT.getWeaponFromId(target.equippedWeapon().id); // TODO defend with second hand
    const defenderWeaponEffects = TEW.COMBAT.getWeaponQualityEffects(defenderWeapon);
    // Damage calc
    //
    // Choose weapon (elsewhere)
    //   Get combat characteristic associated with weapon
    const attackerCombatSkill = TEW.COMBAT.getAttackCompOrDefault(attacker, attackerWeapon.group, isMelee);
    // TODO Get (best) weapon from defender
    // TODO ranged attacks must be dodged
    //   Get combat characteristic associated with weapon
    const defenderCombatSkill = TEW.COMBAT.getDefenceCompOrDefault(target, defenderWeapon.group, 0, // TODO cc bonus
    isMelee && TEW.COMBAT.isMeleeWeapon(defenderWeapon) // Ranged attacks are dodged
    );
    // TODO Check for opponent's defensive tools (shield)
    // TODO Check attacker's talents for modifiers (make a list)
    // TODO Check defender's talents for modifiers (make a list)
    // TODO Check weapon effects on bonus (PRECISE)
    // TODO Check sizes
    // TODO Check outnumberment
    // Attacker condition modifiers
    let attackerConditionMod = attacker.totalConditionModifier(attackerCombatSkill.compId);
    if (target.hasCondition("SURPRISED" /* ConditionId.SURPRISED */)) {
        attackerConditionMod += 20;
        target.removeCondition("SURPRISED" /* ConditionId.SURPRISED */);
    }
    if (target.hasCondition("BLINDED" /* ConditionId.BLINDED */)) {
        attackerConditionMod += 10;
    }
    // TODO deafened
    // TODO prone
    // Defender condition modifiers
    const defenderConditionMod = target.totalConditionModifier();
    // Roll dice
    const combatResult = TEW.DICE.combatOpposedSkillTest(attackerCombatSkill.value + attackerWeaponEffects.attackMod + this.attackRollModifier() + attackerConditionMod, defenderCombatSkill.value + defenderWeaponEffects.defenceMod + defenderConditionMod, true, false // GIGA TODO
    );
    // Special weapon quality checks
    // Impale - critical hit on tens
    if (attackerWeaponEffects.effects.IMPALE) {
        if (combatResult.rollAttacker % 10 === 0) {
            combatResult.criticalAttacker = true;
        }
    }
    // Damaging - SL can be replaced with unit die if higher
    if (attackerWeaponEffects.effects.DAMAGING) {
        const damagingSL = (combatResult.rollAttacker % 10) || 10; // 10 SL if roll ends in 0
        if (damagingSL > combatResult.slAttacker) {
            combatResult.slAttacker = damagingSL;
        }
    }
    // Dangerous - ??? on a failed roll ending in 9
    if (attackerWeaponEffects.effects.DANGEROUS) {
        if (!combatResult.success && combatResult.rollAttacker % 10 === 9) {
            // TODO maladresse ??
        }
    }
    // FIXME do we add bonus SL before or after hit check ?
    combatResult.slAttacker += attackerWeaponEffects.attackBonusSL;
    combatResult.slDefender += attackerWeaponEffects.defenceBonusSL;
    // TODO wait X seconds here for player input (fortune points)
    // TODO Check attacker's talents on dice roll (make a list)
    // TODO Check weapon effects on dice roll (make a list)
    // TODO miss
    if (combatResult.slAttacker >= 0 && combatResult.success) {
        // TODO Check weapon effects on crit (make a list)
        // TODO Check for crits
        // Check location
        const hitLocation = 2 /* BodyLocation.HEAD */; // TODO location table
        // Armor and armor penetration
        let defenderArmorPoints = target.armorPointsAtLocation(hitLocation, attackerWeaponEffects.ignoredAP, attackerWeaponEffects.ignoreMetalArmor);
        if (attackerWeaponEffects.effects.UNDAMAGING) {
            defenderArmorPoints *= 2;
        }
        // Compute damage
        //   Add weapon bonus + stat bonus + opposed DR
        //   Remove defender's toug + TODO armor points
        let damage = combatResult.slAttacker - combatResult.slDefender
            + attackerWeapon.damage + (attackerWeapon.strBonus ? attacker.paramBonus("STRG" /* Stat.STRG */) : 0)
            - target.paramBonus("TOUG" /* Stat.TOUG */) - defenderArmorPoints;
        // Impact - add unit die to damage
        if (attackerWeaponEffects.effects.IMPACT) {
            damage += (combatResult.rollAttacker % 10) || 10;
        }
        this.dealDamage(target, Math.max(damage, 1));
        //   Check weapon effects based on location (make a list)
        if (attackerWeaponEffects.effects.PUMMEL && hitLocation === 2 /* BodyLocation.HEAD */) {
            const pummelTestResult = TEW.DICE.opposedTest(attacker.paramByName("STRG" /* Stat.STRG */), target.paramByName("STRG" /* Stat.STRG */));
            if (pummelTestResult.success) {
                target.addCondition("STUNNED" /* ConditionId.STUNNED */);
            }
        }
        if (attackerWeaponEffects.effects.ENTANGLE) {
            target.addCondition("ENTANGLED" /* ConditionId.ENTANGLED */, 1, attacker.paramBonus("STRG" /* Stat.STRG */));
        }
        // if (!isMeleeWeapon) {
        //     if (attackerWeapon.group === WeaponGroup.BLACKPOWDER) {
        //         const brokenTestResult = TEW.DICE.skillTest(target, 'CALM', 20);
        //         if (!brokenTestResult.success) {
        //             // add broken condition
        //         }
        //     }
        // }
        // TODO Lookup crit table (help me)
    }
};
/**
 * TODO
 * Apply a spell to an unique target. If multiple targets are needed, this function should be called multiple times with the same spell and different targets.
 * The attacker only rolls once tho, as the result is stored and retrieved for each supplementary target.
 */
Game_Action.prototype.applySpell = function (target) {
    const attacker = this._subject;
    const spell = this._object;
    // Roll dice once, then reuse the result for every target
    if (!this._subjectAbilityRoll) {
        const womModifier = $gameVariables.value(15); // Winds of magic
        this._subjectAbilityRoll = TEW.DICE.skillTest(attacker, TEW.MAGIC.MAGIC_COMP, womModifier, false);
        // Add channelled SL
        this._subjectAbilityRoll.sl += attacker._channellingLevel;
        attacker._channellingLevel = 0;
        // TODO handle criticals
        // TODO critical failure
    }
    // Resolve spell
    if (this._subjectAbilityRoll.sl >= spell.cn) {
        // TODO Prompt for spell bonus effects (e.g. additional targets, increased range... etc)
        // handled by spell effect ?
        // TODO Resolve spell domain effects (e.g. Chamon ignoring metal armor)
        switch (spell.effect.type) {
            case 0 /* SpellEffectType.MAGIC_MISSILE */:
                const damage = this._subjectAbilityRoll.sl + spell.effect.damage
                    - target.paramBonus("TOUG" /* Stat.TOUG */);
                this.dealDamage(target, Math.max(damage, 1));
                break;
            case 1 /* SpellEffectType.SCALING_DAMAGE */:
                break;
            case 2 /* SpellEffectType.CONDITION */:
                target.addCondition(spell.effect.conditionId, 1);
                break;
            case 3 /* SpellEffectType.SPECIAL */:
                spell.effect.handler(attacker, target, this._subjectAbilityRoll.sl);
                break;
        }
    }
    // GIGA TODO counterspell
};
/**
 * Melee attack performed at the end of a charge, with the charge bonus
 */
Game_Action.chargeAttack = function (subject, target, success) {
    return new Game_Action(subject, false, {
        initiator: subject,
        option: 6 /* BattleOption.MELEE_ATTACK */,
        target: {
            type: 0 /* BattleTargetType.BATTLER */,
            target,
        },
        weapon: TEW.DATABASE.WEAPONS.MELEE_SET[subject.equippedWeapon().id] || TEW.DATABASE.WEAPONS.MELEE_SET.UNARMED
    }, { attackRoll: success ? 10 : 0 });
};
// ----------------------
// Tile display
// ----------------------
Game_Action.prototype.range = function () {
    return this._range;
};
Game_Action.prototype.showRange = function () {
    this._range.forEach(function (pos) {
        const tile = $gameMap.tile(pos[0], pos[1]); // Convert from [x, y] to (x + y * width)
        $gameMap.addTile(tile);
    }, this);
};
Game_Action.prototype.showAreaOfEffect = function () {
    this._aoeRange.forEach(function (pos) {
        const tile = $gameMap.tile(pos[0], pos[1]); // Convert from [x, y] to (x + y * width)
        $gameMap.addAoeTile(tile);
    }, this);
};
Game_Action.prototype.isInRange = function (x, y) {
    return this._range.some(pos => pos[0] === x && pos[1] === y);
};
Game_Action.prototype.color = function () {
    return TEW.COMBAT.SYSTEM.enemyScopeColor; // TODO ally color for supportive spells and items
};
Game_Action.prototype.isTargetValid = function (battler) {
    return !!battler;
};
Game_Action.prototype.checkDamageType = function (_) {
    return false;
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
    this._lastSpell = new Game_Item();
    this._lastBattleCommands = [];
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
Game_Actor.prototype.setLastSpell = function (spellId) {
    this._lastSpell.setObject(spellId);
};
Game_Actor.prototype.onActionEnd = function () {
    Game_Battler.prototype.onActionEnd.call(this);
    this.event().setStepAnime(true);
};
Game_Actor.prototype.getTurnOrderSpriteName = function () {
    return this.name();
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
Game_Actor.prototype.updateLastBattleCommands = function (commandName, requirement) {
    this._lastBattleCommands.unshift({ name: commandName, canUse: requirement });
    if (this._lastBattleCommands.length > 4) { // TODO constant
        this._lastBattleCommands.pop();
    }
};
// unused RMMV base function
Game_Actor.prototype.hasNoWeapons = function () {
    return false;
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
    ty: { get: function () { return this._ty; }, configurable: true }
});
TEW.MEMORY.gameBattlerInitMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function () {
    TEW.MEMORY.gameBattlerInitMembers.call(this);
    this._tx = 0;
    this._ty = 0;
    this._eventId = 0;
    this._char = new Game_Character(); // it's used to calculate the shortest path
    this._movePath = []; // directions of the move being performed by a decision (see setMovePath)
    this._moveStepsBuffer = [];
    this._active = false;
    this._requestImage = false;
    this._channellingLevel = 0;
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
    this.event().setStepAnime(true);
    this._moveCount = 1;
    this._actionCount = 1;
    this.applyConditionsOnTurnStart();
    this.syncTacticalPosition();
    this.clearMovePath();
};
// ----------------------
// Action & move points
// ----------------------
Game_Battler.prototype.hasMovePoint = function () {
    return this._moveCount > 0;
};
Game_Battler.prototype.hasActionPoint = function () {
    return this._actionCount > 0;
};
Game_Battler.prototype.spendMovePoint = function () {
    this._moveCount -= 1;
};
Game_Battler.prototype.spendActionPoint = function () {
    this._actionCount -= 1;
};
/**
 * Spend a move point, or an action point if no move point is left
 */
Game_Battler.prototype.spendMoveOrActionPoint = function () {
    if (this.hasMovePoint()) {
        this.spendMovePoint();
    }
    else {
        this.spendActionPoint();
    }
};
Game_Battler.prototype.actionAndMovePoints = function () {
    return this._actionCount + this._moveCount;
};
// ----------------------
// Decision moves
// ----------------------
/**
 * Compute a path (list of tiles, start excluded) of at most maxSteps steps that gets the battler as close as possible
 * to (x, y), "close" being the walking distance on the map. Battlers block the way, so the path never ends on an occupied tile.
 */
Game_Battler.prototype.computePathTowards = function (x, y, maxSteps) {
    if (x === undefined || y === undefined || maxSteps <= 0) {
        return [];
    }
    const distancesToTarget = $gameMap.walkingDistancesFrom(x, y);
    const startKey = $gameMap.tile(this.x, this.y);
    const parents = { [startKey]: -1 };
    const steps = { [startKey]: 0 };
    const queue = [startKey];
    let best = startKey;
    // Tiles with no walking route to the target come after all others, ranked by straight distance
    const score = (tile) => distancesToTarget[tile] !== undefined
        ? distancesToTarget[tile]
        : $gameMap.width() * $gameMap.height() + Math.abs($gameMap.positionTileX(tile) - x) + Math.abs($gameMap.positionTileY(tile) - y);
    // Breadth-first search over the tiles reachable within maxSteps
    while (queue.length > 0) {
        const tile = queue.shift();
        if (score(tile) < score(best) || (score(tile) === score(best) && steps[tile] < steps[best])) {
            best = tile;
        }
        if (steps[tile] >= maxSteps) {
            continue;
        }
        const tx = $gameMap.positionTileX(tile);
        const ty = $gameMap.positionTileY(tile);
        for (const d of [2, 4, 6, 8]) {
            if (!this._char.canPass(tx, ty, d)) {
                continue;
            }
            const next = $gameMap.tile($gameMap.roundXWithDirection(tx, d), $gameMap.roundYWithDirection(ty, d));
            if (parents[next] === undefined) {
                parents[next] = tile;
                steps[next] = steps[tile] + 1;
                queue.push(next);
            }
        }
    }
    const path = [];
    for (let tile = best; tile !== startKey; tile = parents[tile]) {
        path.unshift({ x: $gameMap.positionTileX(tile), y: $gameMap.positionTileY(tile) });
    }
    return path;
};
/**
 * Set the path followed by the next decision move, as a list of tiles (start excluded).
 * Each tile is reached in one step: adjacent tiles directly, others (e.g. charge ray waypoints) through pathfinding.
 * The tactical position is updated right away to the end of the path.
 */
Game_Battler.prototype.setMovePath = function (path) {
    const result = this.buildMoveSteps(path);
    this._movePath = result.directions;
    this._tx = result.x;
    this._ty = result.y;
};
/**
 * Whether the whole path can be followed from the battler's current position
 */
Game_Battler.prototype.canFollowPath = function (path) {
    return path.length > 0 && this.buildMoveSteps(path).complete;
};
/**
 * Simulate a path with this._char: directions to take, end position, and whether the whole path is passable
 */
Game_Battler.prototype.buildMoveSteps = function (path) {
    this._moveStepsBuffer = [];
    this._char.setPosition(this.x, this.y);
    let complete = true;
    for (const tile of path) {
        if (!this.addMoveStepsTo(tile)) {
            complete = false;
            break;
        }
    }
    const directions = this._moveStepsBuffer;
    this._moveStepsBuffer = [];
    return { directions, x: this._char.x, y: this._char.y, complete };
};
/**
 * Add the steps leading this._char to a tile of a path: one step for an adjacent tile, two for a diagonal one
 * (through whichever corner tile is passable), pathfinding otherwise. Returns false if the tile can't be reached.
 */
Game_Battler.prototype.addMoveStepsTo = function (tile) {
    const x = this._char.x;
    const y = this._char.y;
    if (x === tile.x && y === tile.y) {
        return true;
    }
    let directions = [];
    const adjacent = this.directionBetween(x, y, tile.x, tile.y);
    if (adjacent !== 0) {
        directions = [adjacent];
    }
    else if (Math.abs(tile.x - x) === 1 && Math.abs(tile.y - y) === 1) {
        const horizontal = tile.x > x ? 6 : 4;
        const vertical = tile.y > y ? 2 : 8;
        directions = this.canPassSequence(x, y, [horizontal, vertical]) ? [horizontal, vertical] : [vertical, horizontal];
    }
    else {
        directions = [this._char.findDirectionTo(tile.x, tile.y)];
    }
    for (const direction of directions) {
        if (direction === 0 || !this._char.canPass(this._char.x, this._char.y, direction)) {
            return false;
        }
        this._char.moveStraight(direction);
        this._moveStepsBuffer.push(direction);
    }
    return true;
};
/**
 * Whether this._char could take the given steps from (x, y), without moving it
 */
Game_Battler.prototype.canPassSequence = function (x, y, directions) {
    let cx = x;
    let cy = y;
    for (const direction of directions) {
        if (!this._char.canPass(cx, cy, direction)) {
            return false;
        }
        cx = $gameMap.roundXWithDirection(cx, direction);
        cy = $gameMap.roundYWithDirection(cy, direction);
    }
    return true;
};
Game_Battler.prototype.directionBetween = function (x1, y1, x2, y2) {
    if (x2 === x1 && y2 === y1 + 1) {
        return 2;
    }
    else if (x2 === x1 - 1 && y2 === y1) {
        return 4;
    }
    else if (x2 === x1 + 1 && y2 === y1) {
        return 6;
    }
    else if (x2 === x1 && y2 === y1 - 1) {
        return 8;
    }
    return 0;
};
Game_Battler.prototype.hasPendingMoveStep = function () {
    return this._movePath.length > 0;
};
/**
 * Move the battler's event one tile along the decision path. If the step fails (unexpected obstacle),
 * the rest of the path is dropped and the tactical position is synced with the event.
 */
Game_Battler.prototype.processMoveStep = function () {
    const direction = this._movePath.shift();
    const event = this.event();
    event.moveStraight(direction);
    if (!event.isMovementSucceeded()) {
        this._movePath = [];
        this._tx = event.x;
        this._ty = event.y;
    }
};
Game_Battler.prototype.clearMovePath = function () {
    this._movePath = [];
};
Game_Battler.prototype.onActionEnd = function () {
    // Override
};
Game_Battler.prototype.isMoving = function () {
    return this.event().isMoving();
};
Game_Battler.prototype.turnTowardCharacter = function (character) {
    this.event().turnTowardCharacter(character);
};
Game_Battler.prototype.doChannelling = function () {
    const channellingCompId = this.anyCompOfCategory('CHANNELLING');
    const womModifier = $gameVariables.value(15);
    const testResult = TEW.DICE.skillTest(this, channellingCompId, womModifier);
    const previousChannellingLevel = this._channellingLevel;
    if (testResult.success) {
        if (testResult.critical) {
            this._channellingLevel += testResult.sl + this.paramBonus('WILL');
            if (!this.hasTalent('AETHYRIC_ATTUNEMENT')) {
                // minor magical crit
            }
        }
        else {
            if (testResult.sl === 0) {
                this._channellingLevel += 1;
            }
            else {
                this._channellingLevel += testResult.sl;
            }
        }
        $gameMessage.add("You gained " + String(this._channellingLevel - previousChannellingLevel) + " channelling levels.");
    }
    else {
        if (testResult.critical) {
            this._channellingLevel = 0;
            if (this._channellingLevel > this.paramBonus('WILL')) {
                // major magical crit
            }
            else {
                // minor magical crit
            }
        }
        else {
            this._channellingLevel += testResult.sl;
            this._channellingLevel = Math.max(this._channellingLevel, 0);
        }
        $gameMessage.add("You lost " + String(previousChannellingLevel - this._channellingLevel) + " channelling levels.");
    }
};
/**
 * Tactical position = event position (they only differ while a move is planned or performed)
 */
Game_Battler.prototype.syncTacticalPosition = function () {
    this._tx = this.x;
    this._ty = this.y;
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
Game_Battler.prototype.onClear = function () {
    if (TEW.COMBAT.SYSTEM.setTransparentUnit) {
        this.event().setTransparent(true);
        this.event().setThrough(true);
    }
};
Game_Battler.prototype.isAdjacentTo = function (target) {
    return (Math.abs(this.x - target.x) === 1 && this.y === target.y)
        || (Math.abs(this.y - target.y) === 1 && this.x === target.x);
};
Game_Battler.prototype.getTurnOrderSpriteName = function () {
    return this._turnOrderSpriteName || 'default';
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
/**
 * Walking distance in tiles: <move:n> note tag, TEW.COMBAT.SYSTEM.mvp by default
 */
Game_BattlerBase.prototype.walkDistance = function () {
    return Number(this.tparam('move')) || TEW.COMBAT.SYSTEM.mvp;
};
Game_BattlerBase.prototype.runDistance = function () {
    return this.walkDistance() * TEW.COMBAT.SYSTEM.runMultiplier;
};
/**
 * Charging distance is the run distance plus the charge (athletics) test SL,
 * maxChargeDistance being the highest reachable value (Easy athletics test, best roll)
 */
Game_BattlerBase.prototype.maxChargeDistance = function () {
    return this.runDistance() + Math.floor(this.comp('ATHLETICS') / 10) + 2;
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
Game_BattlerBase.prototype.canUse = function () {
    return true; // let's keep it simple.
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
    // actors cannot pass through other actors (this is real life)
    if (this.isActor()) {
        var events = $gameMap.eventsXyNt(x, y);
        return events.some(function (event) {
            return event.isNormalPriority();
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
Game_Enemy.prototype.initialize = function (enemyId, x, y, ai) {
    Game_Battler.prototype.initialize.call(this);
    this.setup(enemyId, x, y);
    this._ai = ai;
    const data = TEW.DATABASE.NPCS.SET[enemyId];
    for (let weapon of data.weapons) {
        this.addWeapon(weapon);
    }
};
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
// RMMV's implementation reads RMMV enemy actions, which TEW NPCs don't have: enemies act through their AI
Game_Enemy.prototype.makeActions = function () {
    // Override
};
Game_Enemy.prototype.paramBase = function (paramId) {
    // mhp
    if (paramId === 0) {
        return TEW.DATABASE.NPCS.SET[this._enemyId].wounds;
    }
    return TEW.DATABASE.NPCS.SET[this._enemyId].stats[paramId];
};
// MHP is handled separately
Game_Enemy.prototype.statName = function (paramId) {
    return StatArray[paramId];
};
Game_Enemy.prototype.enemy = function () {
    return TEW.DATABASE.NPCS.SET[this._enemyId];
};
Game_Enemy.prototype.getAI = function () {
    return TEW.DATABASE.NPCS.AI[this._ai];
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
// #region ============================== Game_Item ============================== //
Game_Item.prototype.isSpell = function () {
    return this._dataClass === 'spell';
};
Game_Item.prototype.object = function () {
    if (this.isSkill()) {
        return $dataSkills[this._itemId];
    }
    else if (this.isItem()) {
        return $dataItems[this._itemId];
    }
    else if (this.isWeapon()) {
        return $dataWeapons[this._itemId];
    }
    else if (this.isArmor()) {
        return $dataArmors[this._itemId];
    }
    else if (this.isSpell()) {
        return TEW.DATABASE.SPELLS.SET[this._itemId];
    }
    else {
        return null;
    }
};
TEW.MEMORY.gameItemSetObject = Game_Item.prototype.setObject;
Game_Item.prototype.setObject = function (item) {
    if (TEW.DATABASE.SPELLS.IDS.includes(item[0])) {
        this._dataClass = 'spell';
        this._itemId = item[0];
    }
    else {
        TEW.MEMORY.gameItemSetObject.call(this, item);
    }
};
// #endregion =========================== Game_Item ============================== //
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
    this._aoeTiles = []; // to highlight AOE targetting for spells & items
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
Game_Map.prototype.addAoeTile = function (tile) {
    this._aoeTiles.push(tile);
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
Game_Map.prototype.aoeTiles = function () {
    return this._aoeTiles;
};
Game_Map.prototype.clearTiles = function () {
    this._tiles = [];
};
Game_Map.prototype.clearAoeTiles = function () {
    this._aoeTiles = [];
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
Game_Map.prototype.chargeRange = function (distance, event, through = false) {
    const start = { x: event.x, y: event.y };
    const startKey = `${start.x},${start.y}`;
    this._straightPaths[startKey] = this._straightPaths[startKey] || {};
    const enemies = $gameTroopTs.members();
    for (const enemy of enemies) {
        const enemyPos = { x: enemy._tx, y: enemy._ty };
        if (!this.isInChargeRange(start, enemyPos, distance))
            continue;
        const enemyKey = `${enemyPos.x},${enemyPos.y}`;
        const cached = this._straightPaths[startKey][enemyKey];
        if (cached) {
            this.addAllTiles(cached);
            this.addTile(this.tile(enemyPos.x, enemyPos.y));
            continue;
        }
        const path = this.computeChargePath(start, enemyPos, event);
        if (!path)
            continue;
        this.storePath(startKey, enemyKey, path);
        this.addAllTiles(path);
        this.addTile(this.tile(enemyPos.x, enemyPos.y));
    }
};
// TODO deduplicate?
Game_Map.prototype.chargeRangeForAI = function (distance, event, enemies, through = false) {
    const start = { x: event.x, y: event.y };
    const startKey = `${start.x},${start.y}`;
    this._straightPaths[startKey] = this._straightPaths[startKey] || {};
    const targettableEnemies = [];
    for (const enemy of enemies) {
        const enemyPos = { x: enemy.tx, y: enemy.ty };
        if (!this.isInChargeRange(start, enemyPos, distance))
            continue;
        const enemyKey = `${enemyPos.x},${enemyPos.y}`;
        const cached = this._straightPaths[startKey][enemyKey];
        if (cached) {
            targettableEnemies.push(enemy);
            continue;
        }
        const path = this.computeChargePath(start, enemyPos, event);
        if (!path)
            continue;
        targettableEnemies.push(enemy);
        this.storePath(startKey, enemyKey, path);
    }
    return targettableEnemies;
};
Game_Map.prototype.loadOrComputeChargeRangeForAI = function (start, target, event) {
    const startKey = `${start.x},${start.y}`;
    this._straightPaths[startKey] = this._straightPaths[startKey] || {};
    const targetKey = `${target.x},${target.y}`;
    let path = this._straightPaths[startKey][targetKey];
    if (!path) {
        path = this.computeChargePath(start, target, event);
        if (!path) {
            return [];
        }
        this.storePath(startKey, targetKey, path);
    }
    return path;
};
/**
 * Store the computed path between two points in the cache, for later retrieval. Also adds the target tile to the map's tiles for move processing.
 */
Game_Map.prototype.storePath = function (startKey, enemyKey, path) {
    this._straightPaths[startKey][enemyKey] = path;
};
/**
 * Add all tiles of a path to highlight on the map
 */
Game_Map.prototype.addAllTiles = function (path) {
    for (let tile of path) {
        this.addTile(this.tile(tile.x, tile.y));
    }
};
/**
 * Check if the target is in charge range of the subject, i.e. if it's within the maximum charge distance and outside of the minimum one.
 */
Game_Map.prototype.isInChargeRange = function (start, target, maxDist) {
    const dx = Math.abs(target.x - start.x);
    const dy = Math.abs(target.y - start.y);
    const manhattan = dx + dy;
    return (manhattan >= TEW.COMBAT.SYSTEM.chargeMinimumRange &&
        manhattan <= maxDist);
};
/**
 * Compute the path of a charge from start to target
 */
Game_Map.prototype.computeChargePath = function (start, target, event) {
    const dx = target.x - start.x;
    const dy = target.y - start.y;
    if (dx === 0 || dy === 0) {
        return this.computeStraightLinePath(start, target, event);
    }
    return this.computeRayTracedPath(start, target, event, dx, dy);
};
/**
 * Compute the straight line path between start and target, if it exists and is clear of obstacles.
 */
Game_Map.prototype.computeStraightLinePath = function (start, target, event) {
    const path = [];
    console.log("Straight charge");
    if (start.x === target.x) {
        const direction = target.y - start.y;
        if (direction > 0) {
            for (let y = start.y; y < target.y; y++) {
                path.push({ x: start.x, y });
            }
        }
        else {
            for (let y = start.y; y > target.y; y--) {
                path.push({ x: start.x, y });
            }
        }
    }
    else {
        const direction = target.x - start.x;
        if (direction > 0) {
            for (let x = start.x; x < target.x; x++) {
                path.push({ x, y: start.y });
            }
        }
        else {
            for (let x = start.x; x > target.x; x--) {
                path.push({ x, y: start.y });
            }
        }
    }
    if (!this.isPathClear(start, path, event))
        return null;
    if (!this.isMapPassableWithoutEventCheck(path.last(), target))
        return null;
    path.shift(); // remove start tile
    return path;
};
/**
 * Compute the path of a charge from start to target by ray-tracing rays from the corners of the subject's tile to the corners of the target's tile, and checking for the existence of two rays that are clear of obstacles, start from adjacent corners of the subject's tile, and end on the same corner of the target's tile.
 */
Game_Map.prototype.computeRayTracedPath = function (start, target, event, dx, dy) {
    const startCorners = this.computeTileCorners(start.x, start.y);
    const targetCorners = this.computeTileCorners(target.x, target.y);
    const usefulTargetCorners = this.computeUsefulCorners(dx, dy, targetCorners);
    const excluded = this.computeExcludedCornersForRayTracing(dx, dy, startCorners, targetCorners);
    const rays = this.computeAllRays(startCorners, usefulTargetCorners, excluded, event, target);
    return this.selectValidRay(rays, usefulTargetCorners, target);
};
/**
 * Compute the rays from the corners of the subject's tile to the useful corners of the target's tile, excluding some corners as explained in "computeExcludedCornersForRayTracing", and return their paths and supercovers.
 */
Game_Map.prototype.computeAllRays = function (startCorners, usefulCorners, excluded, event, target) {
    const rays = [];
    for (const s of startCorners) {
        for (const t of usefulCorners) {
            const cover = this.amanatidesWooSupercover(s, t);
            const trimmed = cover.tilesCrossed.filter((p) => !excluded.some(e => e.x === p.x && e.y === p.y));
            if (!this.isPathClear(s, trimmed, event))
                continue;
            if (!this.isMapPassableWithoutEventCheck(trimmed.last(), target))
                continue;
            rays.push({
                start: s,
                target: t,
                path: cover.path.filter((p) => !excluded.some(e => e.x === p.x && e.y === p.y))
            });
        }
    }
    return rays;
};
/**
 * Select a valid ray among the computed rays, i.e. a ray that is clear of obstacles, starts from a corner adjacent to the start corner of another ray, and ends on the same target corner as another ray with an adjacent start corner. Return the path of the selected ray, or null if no valid ray exists.
 */
Game_Map.prototype.selectValidRay = function (rays, usefulCorners) {
    for (const corner of usefulCorners) {
        const sameTarget = rays.filter(r => this.samePoint(r.target, corner));
        if (sameTarget.length < 2)
            continue;
        for (const r1 of sameTarget) {
            for (const r2 of sameTarget) {
                const adjacent = (r1.start.x === r2.start.x) !==
                    (r1.start.y === r2.start.y);
                if (adjacent) {
                    const path = [...r1.path];
                    path.shift();
                    return path;
                }
            }
        }
    }
    return null;
};
/**
 * Compute the coordinates of the corners of a tile, starting from the upper left corner and going clockwise
 */
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
        const step = Math.sign(end.y - start.y);
        let y = start.y;
        do {
            tilesCrossed.push({ x: start.x, y });
            y += step;
        } while (y !== end.y + step);
        return {
            tilesCrossed,
            path: tilesCrossed
        };
    }
    if (start.y === end.y) {
        const step = Math.sign(end.x - start.x);
        let x = start.x;
        do {
            tilesCrossed.push({ x, y: start.y });
            x += step;
        } while (x !== end.x + step);
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
/**
 * Walking distance from (x, y) to every tile of the map that can reach it, as { tile: distance }.
 * Only the map's passability is considered (not events), so occupied tiles can be targets.
 */
Game_Map.prototype.walkingDistancesFrom = function (x, y) {
    const start = this.tile(x, y);
    const distances = { [start]: 0 };
    const queue = [start];
    while (queue.length > 0) {
        const tile = queue.shift();
        const tx = this.positionTileX(tile);
        const ty = this.positionTileY(tile);
        for (const d of [2, 4, 6, 8]) {
            const nx = this.roundXWithDirection(tx, d);
            const ny = this.roundYWithDirection(ty, d);
            const next = this.tile(nx, ny);
            // Moving from next to tile: next's border toward tile and tile's border toward next must be passable
            if (distances[next] === undefined && this.isValid(nx, ny)
                && this.isPassable(nx, ny, this.reverseDirection(d)) && this.isPassable(tx, ty, d)) {
                distances[next] = distances[tile] + 1;
                queue.push(next);
            }
        }
    }
    return distances;
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
// #endregion =========================== Game_Selector ============================== //
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
Game_Troop.prototype.setup = function (battleId) {
    this.clear();
    this._troopId = battleId; // TODO renaming might not be possible
    this._enemies = [];
    console.log("Setting up enemies");
    this.troop().members.forEach(function (member) {
        if (TEW.DATABASE.NPCS.SET[member.npc]) {
            var enemyId = member.npc;
            var x = member.x;
            var y = member.y;
            var enemy = new Game_Enemy(enemyId, x, y, member.ai);
            if (member.hidden) {
                enemy.hide();
            }
            this._enemies.push(enemy);
        }
    }, this);
    console.log("Enemies set up");
    this.makeUniqueNames();
};
Game_Troop.prototype.troop = function () {
    const tewTroop = TEW.DATABASE.COMBATS[this._troopId];
    return {
        members: tewTroop.enemies,
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
Game_TroopTs.prototype.addEnemy = function (enemyId, event, ai = "DEFAULT") {
    var enemy = new Game_Enemy(enemyId, 0, 0, ai);
    var eventId = event.eventId();
    this._enemies.push(enemy);
    enemy.setupEvent(eventId);
    // temp
    enemy.equipMainHand(1);
    // temp
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
    // Advantages accumulated by winning combat rounds or using the Observe action
    // Common pool for all battlers that can be spent to get better rolls or extra actions
    this._advantages = 0;
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
Game_UnitTs.prototype.onClear = function () {
    this.members().forEach(function (member) {
        member.onClear();
    });
};
// #endregion =========================== Game_UnitTs ============================== //
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
        if (TEW.DATABASE.COMBATS[troopId]) {
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
Window_TacticsActionCommand.IMAGE_CACHE_RID = 'battleActionCommand';
Window_TacticsActionCommand.X_POS = 458;
Window_TacticsActionCommand.Y_POS = 467;
Window_TacticsActionCommand.EXTENDED_WIDTH = 220;
Window_TacticsActionCommand.TEXT_MAX_WIDTH = 150;
Window_TacticsActionCommand.prototype = Object.create(Window_TacticsCommandBase.prototype);
Window_TacticsActionCommand.prototype.constructor = Window_TacticsActionCommand;
Window_TacticsActionCommand.prototype.initialize = function () {
    Window_TacticsCommandBase.prototype.initialize.call(this);
    this._iconOrder = ['icon_battleCommand_attack', 'icon_battleCommand_spell', 'icon_battleCommand_channelling'];
    this.loadIcons();
};
Window_TacticsActionCommand.prototype.loadIcons = function () {
    ImageManager.reserveSystem('icon_battleCommand_attack', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_spell', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_channelling', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_attack_selected', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_spell_selected', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_channelling_selected', 0, Window_TacticsActionCommand.IMAGE_CACHE_RID);
    const readyCheck = resolve => {
        if (ImageManager.isReady())
            resolve();
        else
            setTimeout(() => readyCheck(resolve), 100);
    };
    new Promise(readyCheck).then(() => {
        this._imagesReady = true;
        this.refresh();
    });
};
Window_TacticsActionCommand.prototype.makeCommandList = function () {
    if (this._actor) {
        this.addCommand(TEW.COMBAT.SYSTEM.actionAttack, TEW.COMBAT.SYSTEM.actionAttack, BattleManager.canAct());
        this.addCommand(TEW.COMBAT.SYSTEM.actionSpell, TEW.COMBAT.SYSTEM.actionSpell, BattleManager.canAct());
        this.addCommand(TEW.COMBAT.SYSTEM.actionChannelling, TEW.COMBAT.SYSTEM.actionChannelling, BattleManager.canAct());
    }
};
Window_TacticsActionCommand.prototype.select = function (index) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
        BattleManager.refreshMoveTiles();
    }
};
Window_TacticsActionCommand.prototype.xPos = function () {
    return Window_TacticsActionCommand.X_POS;
};
Window_TacticsActionCommand.prototype.yPos = function () {
    return Window_TacticsActionCommand.Y_POS;
};
Window_TacticsActionCommand.prototype.textMaxWidth = function () {
    return Window_TacticsActionCommand.TEXT_MAX_WIDTH;
};
Window_TacticsActionCommand.prototype.extendedWidth = function () {
    return Window_TacticsActionCommand.EXTENDED_WIDTH;
};
Window_TacticsActionCommand.prototype.imageCacheRid = function () {
    return Window_TacticsActionCommand.IMAGE_CACHE_RID;
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
// #region ============================== Window_TacticsLastUsedCommand ============================== //
//-----------------------------------------------------------------------------
// Window_TacticsActionCommand
//
// The window for selecting an actor's action on the tactics screen.
function Window_TacticsLastUsedCommand() {
    this.initialize.apply(this, arguments);
}
Window_TacticsLastUsedCommand.IMAGE_CACHE_RID = 'battleLastUsedCommand';
Window_TacticsLastUsedCommand.X_POS = 458;
Window_TacticsLastUsedCommand.Y_POS = 467;
Window_TacticsLastUsedCommand.EXTENDED_WIDTH = 220;
Window_TacticsLastUsedCommand.TEXT_MAX_WIDTH = 150;
Window_TacticsLastUsedCommand.prototype = Object.create(Window_TacticsCommandBase.prototype);
Window_TacticsLastUsedCommand.prototype.constructor = Window_TacticsLastUsedCommand;
Window_TacticsLastUsedCommand.prototype.initialize = function () {
    Window_TacticsCommandBase.prototype.initialize.call(this);
    this.loadIcons();
};
Window_TacticsLastUsedCommand.prototype.loadIcons = function () {
    ImageManager.reserveSystem('icon_battleCommand_attack', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_spell', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_channelling', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_attack_selected', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_spell_selected', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_channelling_selected', 0, Window_TacticsLastUsedCommand.IMAGE_CACHE_RID);
    const readyCheck = resolve => {
        if (ImageManager.isReady())
            resolve();
        else
            setTimeout(() => readyCheck(resolve), 100);
    };
    new Promise(readyCheck).then(() => {
        this._imagesReady = true;
        this.refresh();
    });
};
Window_TacticsLastUsedCommand.prototype.makeCommandList = function () {
    if (this._actor) {
        let recentCommand;
        for (recentCommand of this._actor._lastBattleCommands) {
            this.addCommand(recentCommand.name, recentCommand.name, recentCommand.canUse());
            this._iconOrder.push('icon_battleCommand_' + recentCommand.name);
        }
    }
};
Window_TacticsLastUsedCommand.prototype.select = function (index) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
        BattleManager.refreshMoveTiles();
    }
};
Window_TacticsLastUsedCommand.prototype.xPos = function () {
    return Window_TacticsLastUsedCommand.X_POS;
};
Window_TacticsLastUsedCommand.prototype.yPos = function () {
    return Window_TacticsLastUsedCommand.Y_POS;
};
Window_TacticsLastUsedCommand.prototype.textMaxWidth = function () {
    return Window_TacticsLastUsedCommand.TEXT_MAX_WIDTH;
};
Window_TacticsLastUsedCommand.prototype.extendedWidth = function () {
    return Window_TacticsLastUsedCommand.EXTENDED_WIDTH;
};
Window_TacticsLastUsedCommand.prototype.imageCacheRid = function () {
    return Window_TacticsLastUsedCommand.IMAGE_CACHE_RID;
};
// #endregion =========================== Window_TacticsLastUsedCommand ============================== //
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
// Move option previewed on the map for each command (see BattleManager.previewMoveOption)
Window_TacticsMoveCommand.PREVIEWED_OPTIONS = [1 /* BattleOption.WALK */, 2 /* BattleOption.RUN */, 3 /* BattleOption.CHARGE */, 5 /* BattleOption.SWITCH_WEAPONS */];
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
    this.addCommand(TEW.COMBAT.SYSTEM.moveWalk, TEW.COMBAT.SYSTEM.moveWalk, BattleManager.canMove());
};
Window_TacticsMoveCommand.prototype.addRunCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveRun, TEW.COMBAT.SYSTEM.moveRun, BattleManager.canRun());
};
Window_TacticsMoveCommand.prototype.addChargeCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveCharge, TEW.COMBAT.SYSTEM.moveCharge, BattleManager.canRun());
};
Window_TacticsMoveCommand.prototype.addSwitchWeaponCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.moveSwitchWeapon, TEW.COMBAT.SYSTEM.moveSwitchWeapon, BattleManager.canMove());
};
Window_TacticsMoveCommand.prototype.select = function (index) {
    Window_ActorCommand.prototype.select.call(this, index);
    const option = Window_TacticsMoveCommand.PREVIEWED_OPTIONS[this._index];
    if (option !== undefined) {
        BattleManager.previewMoveOption(option);
    }
};
// #endregion =========================== Window_TacticsMoveCommand ============================== //
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
// #region ============================== Window_TacticsSpellDetails ============================== //
function Window_TacticsSpellDetails() {
    this.initialize.apply(this, arguments);
}
Window_TacticsSpellDetails.prototype = Object.create(Window_Base.prototype);
Window_TacticsSpellDetails.prototype.constructor = Window_TacticsSpellDetails;
Window_TacticsSpellDetails.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this, 1040, Graphics.boxHeight - this.windowHeight());
    this._spell = null;
};
Window_TacticsSpellDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._spell) {
        this.drawDetails(this._spell);
    }
};
Window_TacticsSpellDetails.prototype.empty = function () {
    this._spell = null;
};
Window_TacticsSpellDetails.prototype.drawDetails = function (spell) {
};
// #endregion =========================== Window_TacticsSpellDetails ============================== //
// ============================== //
// #region ============================== Window_TacticsSpellList ============================== //
// ----------------------
function Window_TacticsSpellList() {
    this.initialize.apply(this, arguments);
}
Window_TacticsSpellList.prototype = Object.create(Window_Selectable.prototype);
Window_TacticsSpellList.prototype.constructor = Window_TacticsSpellList;
Window_TacticsSpellList.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 440, Graphics.boxHeight - this.windowHeight(), this.windowWidth(), this.windowHeight());
};
Window_TacticsSpellList.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor();
    }
};
Window_TacticsSpellList.prototype.syncActor = function () {
    console.log(this._actor._spells);
    this._maxItems = this._actor._spells.length;
    this.refresh();
};
Window_TacticsSpellList.prototype.drawAllItems = function () {
    var topIndex = this.topIndex();
    console.log(this.maxPageItems());
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
Window_TacticsSpellList.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = 160 * (normalizedIndex % this.maxCols()); // TODO constant
    const y = Math.floor(normalizedIndex / this.maxCols()) * TEW.MENU.LINE_HEIGHT;
    const spell = TEW.DATABASE.SPELLS.SET[this.spellFromIndex(index)];
    this.drawText(spell.name, x, y, this.contentsWidth());
};
Window_TacticsSpellList.prototype.spellFromIndex = function (index) {
    return this._actor._spells[index];
};
Window_TacticsSpellList.prototype.item = function () {
    return this.spellFromIndex(this.index());
};
Window_TacticsSpellList.prototype.select = function (index) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_spell_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};
Window_TacticsSpellList.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
Window_TacticsSpellList.prototype.maxItems = function () {
    return this._maxItems;
};
Window_TacticsSpellList.prototype.maxCols = () => 3;
// #endregion =========================== Window_TacticsSpellList ============================== //
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
Window_TacticsCommand.IMAGE_CACHE_RID = 'battleCommand';
Window_TacticsCommand.X_POS = 368;
Window_TacticsCommand.Y_POS = 467;
Window_TacticsCommand.EXTENDED_WIDTH = 220;
Window_TacticsCommand.TEXT_MAX_WIDTH = 150;
Window_TacticsCommand.prototype = Object.create(Window_TacticsCommandBase.prototype);
Window_TacticsCommand.prototype.constructor = Window_TacticsCommand;
Window_TacticsCommand.prototype.initialize = function () {
    Window_TacticsCommandBase.prototype.initialize.call(this);
    this._iconOrder = ['icon_battleCommand_move', 'icon_battleCommand_action', 'icon_battleCommand_lastUsed', 'icon_battleCommand_wait'];
    this.loadIcons();
};
Window_TacticsCommand.prototype.loadIcons = function () {
    ImageManager.reserveSystem('icon_battleCommand_move', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_action', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_lastUsed', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_wait', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_move_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_action_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_lastUsed_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    ImageManager.reserveSystem('icon_battleCommand_wait_selected', 0, Window_TacticsCommand.IMAGE_CACHE_RID);
    const readyCheck = resolve => {
        if (ImageManager.isReady())
            resolve();
        else
            setTimeout(() => readyCheck(resolve), 100);
    };
    new Promise(readyCheck).then(() => {
        this._imagesReady = true;
        this.refresh();
    });
};
Window_TacticsCommand.prototype.makeCommandList = function () {
    if (this._actor) {
        this.addMoveCommand();
        this.addActionCommand();
        this.addAdvantageCommand(); // TODO replace with last used
        this.addWaitCommand();
    }
};
Window_TacticsCommand.prototype.select = function (index) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
    }
};
Window_TacticsCommand.prototype.addMoveCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.move, TEW.COMBAT.SYSTEM.move, BattleManager.canMove());
};
Window_TacticsCommand.prototype.addActionCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.action, TEW.COMBAT.SYSTEM.action, true);
};
Window_TacticsCommand.prototype.addAdvantageCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.advantage, TEW.COMBAT.SYSTEM.advantage, false);
};
Window_TacticsCommand.prototype.addWaitCommand = function () {
    this.addCommand(TEW.COMBAT.SYSTEM.wait, TEW.COMBAT.SYSTEM.wait, true);
};
Window_TacticsCommand.prototype.xPos = function () {
    return Window_TacticsCommand.X_POS;
};
Window_TacticsCommand.prototype.yPos = function () {
    return Window_TacticsCommand.Y_POS;
};
Window_TacticsCommand.prototype.textMaxWidth = function () {
    return Window_TacticsCommand.TEXT_MAX_WIDTH;
};
Window_TacticsCommand.prototype.extendedWidth = function () {
    return Window_TacticsCommand.EXTENDED_WIDTH;
};
Window_TacticsCommand.prototype.imageCacheRid = function () {
    return Window_TacticsCommand.IMAGE_CACHE_RID;
};
// #endregion =========================== Window_TacticsCommand ============================== //
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
// #region ============================== Window_TurnOrder ============================== //
function Window_TurnOrder() {
    this.initialize.apply(this, arguments);
}
Window_TurnOrder.SOURCE_DIR = 'sv_turn_order';
Window_TurnOrder.IMAGE_CACHE_RID = 'Window_TurnOrder_RID';
Window_TurnOrder.STATE_COLLAPSED = 'collapsed';
Window_TurnOrder.STATE_EXTENDED = 'extended';
Window_TurnOrder.prototype = Object.create(Window_Base.prototype);
Window_TurnOrder.prototype.constructor = Window_TurnOrder;
Window_TurnOrder.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this, 0, 0, 0, Graphics.boxHeight); // TODO constant
    this._aliveBattlerCount = -1;
    this._turnIndex = -1;
    this.contents.resize(296, Graphics.boxHeight);
    this.width = 96;
    this.background = new Sprite(new Bitmap(296, Graphics.boxHeight));
    this.background.setFrame(200, 0, 96, Graphics.boxHeight);
    this.addChild(this.background);
    this._state = Window_TurnOrder.STATE_COLLAPSED;
    this._imagesReady = false;
    this.infoDisplay = new Sprite(new Bitmap(296, Graphics.boxHeight));
    this.infoDisplay.setFrame(0, 0, 96, Graphics.boxHeight);
    this.infoDisplay.fontSize = 16;
    this.infoDisplay.textColor = '#f0f0f0';
    this.addChild(this.infoDisplay);
};
Window_TurnOrder.prototype.setTurnOrder = function () {
    if (BattleManager._turnOrder && BattleManager._turnOrder.length !== this._aliveBattlerCount) {
        this._imagesReady = false;
        this._aliveBattlerCount = BattleManager._turnOrder.length;
        for (let image of BattleManager._turnOrder.map(battler => battler.turnOrderSpriteName)) {
            this.reserveImage(image);
        }
        this.reserveImage("bg_actor_extended");
        this.reserveImage("bg_enemy_extended");
        const readyCheck = resolve => {
            if (ImageManager.isReady())
                resolve();
            else
                setTimeout(() => readyCheck(resolve), 100);
        };
        new Promise(readyCheck).then(() => {
            this._imagesReady = true;
            this.refresh();
        });
    }
};
Window_TurnOrder.prototype.refresh = function () {
    if (this._imagesReady && this._aliveBattlerCount > 0) {
        this.infoDisplay.bitmap.clear();
        for (let iterator = 0; iterator < 9; iterator++) {
            const rolloverIndex = (iterator + this._turnIndex) % this._aliveBattlerCount;
            const battlerAccessor = BattleManager._turnOrder[rolloverIndex];
            this.drawBackground(battlerAccessor, iterator);
            this.drawCharacterInfo(battlerAccessor, iterator);
        }
    }
};
Window_TurnOrder.prototype.drawBackground = function (battlerAccessor, iterator) {
    const background = this.loadImage(battlerAccessor.isActor ? 'bg_actor_extended' : 'bg_enemy_extended');
    const bgYOffset = iterator * 80;
    this.background.bitmap.blt(background, 0, 0, background.rect.width, background.rect.height, 0, bgYOffset);
};
Window_TurnOrder.prototype.drawCharacterInfo = function (battlerAccessor, iterator) {
    const battler = this.battler(battlerAccessor.battlerIndex, battlerAccessor.isActor);
    const character = this.loadImage(battlerAccessor.turnOrderSpriteName);
    const spriteYOffset = iterator * 80 + Math.floor((80 - character.rect.height) / 2);
    this.infoDisplay.bitmap.blt(character, 0, 0, character.rect.width, character.rect.height, 16, spriteYOffset);
    let conditionIterator = 0;
    for (let conditionId of Object.keys(battler._conditions).sort()) {
        const icon = TEW.DATABASE.CONDITIONS[conditionId].icon || 0;
        const iconXOffset = conditionIterator * 40 + 112; // TODO constants
        const iconYOffset = iterator * 80 + 40;
        const textXOffset = iconXOffset + 28;
        const textYOffset = iconYOffset - 16;
        this.drawIcon(icon, iconXOffset, iconYOffset);
        const stacks = battler._conditions[conditionId].stacks;
        if (stacks > 1) {
            this.drawText(stacks, textXOffset, textYOffset, 8);
        }
        conditionIterator++;
    }
};
Window_TurnOrder.prototype.battler = function (battlerIndex, isActor) {
    return isActor
        ? $gamePartyTs.members()[battlerIndex]
        : $gameTroopTs.members()[battlerIndex];
};
Window_TurnOrder.prototype.windowWidth = function () {
    return this.width;
};
Window_TurnOrder.prototype.windowHeight = function () {
    return Graphics.boxHeight;
};
Window_TurnOrder.prototype.collapse = function () {
    this._state = Window_TurnOrder.STATE_COLLAPSED;
    this.width = 96;
    this.background.setFrame(200, 0, 96, Graphics.boxHeight);
    this.infoDisplay.setFrame(0, 0, 96, Graphics.boxHeight);
};
Window_TurnOrder.prototype.extend = function () {
    this._state = Window_TurnOrder.STATE_EXTENDED;
    this.width = 296;
    this.background.setFrame(0, 0, 296, Graphics.boxHeight);
    this.infoDisplay.setFrame(0, 0, 296, Graphics.boxHeight);
};
Window_TurnOrder.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (Input.isTriggered('tab')) {
        if (this._state === Window_TurnOrder.STATE_COLLAPSED) {
            this.extend();
        }
        else if (this._state === Window_TurnOrder.STATE_EXTENDED) {
            this.collapse();
        }
    }
    const turnIndex = BattleManager.turnIndex();
    if (this._turnIndex !== turnIndex) {
        this._turnIndex = turnIndex;
        this.setTurnOrder();
        this.refresh();
    }
};
Window_TurnOrder.prototype.reserveImage = function (image) {
    return ImageManager.reserveImage(Window_TurnOrder.SOURCE_DIR, image, Window_TurnOrder.IMAGE_CACHE_RID);
};
Window_TurnOrder.prototype.loadImage = function (image) {
    return ImageManager.loadImage(Window_TurnOrder.SOURCE_DIR, image);
};
Window_TurnOrder.prototype.close = function () {
    ImageManager.releaseReservation(Window_TurnOrder.IMAGE_CACHE_RID);
    Window_Base.prototype.close.call(this);
};
Window_TurnOrder.prototype.horizontalBorderPadding = function () {
    return 0;
};
Window_TurnOrder.prototype.verticalBorderPadding = function () {
    return 0;
};
Window_TurnOrder.prototype.drawText = function (text, x, y, maxWidth, align = 'left') {
    this.infoDisplay.bitmap.drawText(text, x, y, maxWidth, this.lineHeight(), align);
};
Window_TurnOrder.prototype.drawIcon = function (iconIndex, x, y) {
    var bitmap = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    this.infoDisplay.bitmap.blt(bitmap, sx, sy, pw, ph, x, y);
};
// #endregion =========================== Window_TurnOrder ============================== //
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
        this._rangeTilesSprite.bitmap.fillRect(x + 2, y + 2, 44, 44, this._rangeTilesSprite.color);
    }, this);
};
Spriteset_Tactics.prototype.updateAoeTiles = function () {
    this._aoeTiles = $gameMap.aoeTiles();
    this._aoeTiles.forEach(function (tile) {
        var x = $gameMap.positionTileX(tile) * 48;
        var y = $gameMap.positionTileY(tile) * 48;
        this._rangeTilesSprite.bitmap.fillRect(x + 2, y + 2, 44, 44, TEW.COMBAT.SYSTEM.aoeHighlightColor);
    }, this);
};
Spriteset_Tactics.prototype.updateTiles = function () {
    if (this._tilesSprite.opacity >= 255) {
        this.sign = -1;
    }
    if (this._tilesSprite.opacity <= 160) {
        this.sign = 1;
    }
    if (this._aoeTiles !== $gameMap.aoeTiles()) {
        this.updateRangeTiles(); // Erase previous AOE highlight and redraw
        this.updateAoeTiles();
    }
    else if (this._rangeTiles !== $gameMap.tiles()) {
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
Window_TacticsCommand.prototype.windowHeight = function () {
    return 244;
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
Window_TacticsSpellList.prototype.windowHeight = function () {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsSpellDetails.prototype.windowHeight = function () {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsSpellList.prototype.windowWidth = function () {
    return 540; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsSpellDetails.prototype.windowWidth = function () {
    return 340; // 4 * line height + 2 * text padding + 2 * bg padding
};
// #endregion =========================== backgrounds ============================== //
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
    this.removeChildAt(this.getChildIndex(this._background));
    this._background = new Sprite(ImageManager.loadSystem(commandLevel === 0 ? 'bg_battle' : ('bg_battle_command' + commandLevel)));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};
Scene_Battle.prototype.createAllWindows = function () {
    this.createLogWindow();
    this.createUnitWindow();
    this.createActorCommandWindow();
    this.createMessageWindow();
    this.createMoveCommandWindow();
    this.createActionCommandWindow();
    this.createWeaponCommandWindow();
    this.createWeaponListWindow();
    this.createWeaponDetailsWindow();
    this.createSpellListWindow();
    this.createSpellDetailsWindow();
    this.createTurnOrderWindow();
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
    this._tacticsCommandWindow.setHandler(TEW.COMBAT.SYSTEM.move, this.commandMove.bind(this));
    this._tacticsCommandWindow.setHandler(TEW.COMBAT.SYSTEM.action, this.commandAction.bind(this));
    this._tacticsCommandWindow.setHandler(TEW.COMBAT.SYSTEM.wait, this.commandWait.bind(this));
    this.addWindow(this._tacticsCommandWindow);
};
Scene_Battle.prototype.createMessageWindow = function () {
    this._messageWindow = new Window_Message();
    this.addWindow(this._messageWindow);
    this._messageWindow.subWindows().forEach(function (window) {
        this.addWindow(window);
    }, this);
};
Scene_Battle.prototype.createMoveCommandWindow = function () {
    this._moveCommandWindow = new Window_TacticsMoveCommand();
    this._moveCommandWindow.setHandler(TEW.COMBAT.SYSTEM.moveWalk, this.commandWalk.bind(this));
    this._moveCommandWindow.setHandler(TEW.COMBAT.SYSTEM.moveRun, this.commandRun.bind(this));
    this._moveCommandWindow.setHandler(TEW.COMBAT.SYSTEM.moveCharge, this.commandCharge.bind(this));
    this._moveCommandWindow.setHandler(TEW.COMBAT.SYSTEM.moveSwitchWeapon, this.commandSwitchWeapon.bind(this));
    this._moveCommandWindow.setHandler('cancel', () => {
        $gameMap.clearTiles();
        BattleManager.previewMoveOption(1 /* BattleOption.WALK */);
        $gameMap.clearTiles();
        this._tacticsCommandWindow.extend();
        this._tacticsCommandWindow.activate();
        this._moveCommandWindow.deactivate();
        this._moveCommandWindow.hide();
        this.changeBackground(1);
    });
    this.addWindow(this._moveCommandWindow);
};
Scene_Battle.prototype.createActionCommandWindow = function () {
    this._actionCommandWindow = new Window_TacticsActionCommand();
    this._actionCommandWindow.setHandler(TEW.COMBAT.SYSTEM.actionAttack, this.commandAttack.bind(this));
    this._actionCommandWindow.setHandler(TEW.COMBAT.SYSTEM.actionSpell, this.commandSpell.bind(this));
    this._actionCommandWindow.setHandler(TEW.COMBAT.SYSTEM.actionChannelling, this.commandChannelling.bind(this));
    this._actionCommandWindow.setHandler('cancel', () => {
        $gameMap.clearTiles();
        this._tacticsCommandWindow.extend();
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
Scene_Battle.prototype.createSpellListWindow = function () {
    this._windowSpellList = new Window_TacticsSpellList();
    this._windowSpellList.setHandler('cancel', () => {
        this._actionCommandWindow.activate();
        this._windowSpellList.close();
        this._windowSpellDetails.close();
        this._actionCommandWindow.refresh();
        this._actionCommandWindow.select(1);
    });
    this._windowSpellList.setHandler('ok', () => {
        this._windowSpellList.deactivate();
        this.onSpellOk();
    });
    this._windowSpellList.hide();
    this.addWindow(this._windowSpellList);
};
Scene_Battle.prototype.createSpellDetailsWindow = function () {
    this._windowSpellDetails = new Window_TacticsSpellDetails();
    this._windowSpellList.setHandler('show_spell_details', () => {
        this.showSpellDetails();
    });
    this._windowSpellDetails.hide();
    this.addWindow(this._windowSpellDetails);
};
Scene_Battle.prototype.createTurnOrderWindow = function () {
    this._turnOrderWindow = new Window_TurnOrder();
    this._turnOrderWindow.deactivate();
    this._turnOrderWindow.show();
    this.addWindow(this._turnOrderWindow);
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
Scene_Battle.prototype.showSpellDetails = function () {
    this._windowSpellDetails._spell = this._windowSpellList.item();
    this._windowSpellDetails.refresh();
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
Scene_Battle.prototype.start = function () {
    $gameSwitches.setValue(TEW.COMBAT.SYSTEM.battleStartId, true);
    $gamePlayer.setThrough(true);
    Scene_Base.prototype.start.call(this);
    BattleManager.startBattle();
    this.startFadeIn(this.slowFadeSpeed(), false);
    this.loadFaceset();
};
Scene_Battle.prototype.loadFaceset = function () {
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
        this._moveCommandWindow.active ||
        this._actionCommandWindow.active ||
        this._weaponsWindow.active ||
        this._weaponsCommandWindow.active ||
        this._windowSpellList.active);
};
Scene_Battle.prototype.startActorCommandSelection = function () {
    this._actorWindow.show();
    this._tacticsCommandWindow.setActor(BattleManager.actor());
    this._tacticsCommandWindow.extend();
    this.changeBackground(1);
};
Scene_Battle.prototype.commandMove = function () {
    this._actorWindow.hide();
    this._moveCommandWindow.setActor(BattleManager.actor());
    this._moveCommandWindow.refresh();
    this.changeBackground(2);
    this._moveCommandWindow.show();
    this._tacticsCommandWindow.deactivate();
    this._tacticsCommandWindow.collapse();
    this._moveCommandWindow.activate();
    $gameSelector.performTransfer(BattleManager._subject.x, BattleManager._subject.y);
    BattleManager.refreshMoveTiles();
};
// Move and action points are spent when the decision is executed, so cancelling a target selection costs nothing
Scene_Battle.prototype.commandWalk = function () {
    if (BattleManager.canMove() || BattleManager.canAct()) {
        this.startTargetting({ option: 1 /* BattleOption.WALK */ });
    }
    else {
        SoundManager.playBuzzer();
    }
};
Scene_Battle.prototype.commandRun = function () {
    if (BattleManager.canRun()) {
        this.startTargetting({ option: 2 /* BattleOption.RUN */ });
    }
    else {
        SoundManager.playBuzzer();
    }
};
Scene_Battle.prototype.commandCharge = function () {
    if (BattleManager.canRun()) {
        // TODO account for critical failure
        this.startTargetting({ option: 3 /* BattleOption.CHARGE */ });
    }
    else {
        SoundManager.playBuzzer();
    }
};
/**
 * Close the command windows and let the player select a target for the decision on the map
 */
Scene_Battle.prototype.startTargetting = function (decision) {
    this.changeBackground();
    this._windowSpellList.close();
    this._windowSpellDetails.close();
    this._moveCommandWindow.close();
    this._moveCommandWindow.deactivate();
    this._actionCommandWindow.close();
    this._actionCommandWindow.deactivate();
    this._tacticsCommandWindow.close();
    this._tacticsCommandWindow.deactivate();
    BattleManager.startTargetting(decision);
};
Scene_Battle.prototype.commandSwitchWeapon = function () {
    // Spend a movement if possible or spend an action to move
    if (!BattleManager.canActOrMove()) {
        SoundManager.playCancel();
    }
    else {
        if (BattleManager.canMove()) {
            BattleManager.spendMove();
        }
        else {
            BattleManager.spendAction();
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
    this.changeBackground();
    this._tacticsCommandWindow.close();
    this._tacticsCommandWindow.deactivate();
    BattleManager.executeDecision({ initiator: BattleManager.actor(), option: 0 /* BattleOption.WAIT */, target: undefined });
};
Scene_Battle.prototype.commandAction = function () {
    this._actorWindow.hide();
    this._actionCommandWindow.setActor(BattleManager.actor());
    this._actionCommandWindow.refresh();
    this.changeBackground(2);
    this._actionCommandWindow.show();
    this._actionCommandWindow.activate();
    this._tacticsCommandWindow.deactivate();
    this._tacticsCommandWindow.collapse();
    $gameSelector.performTransfer(BattleManager._subject.x, BattleManager._subject.y);
    BattleManager.refreshMoveTiles();
};
/**
 * Attack with the main hand weapon. An unloaded reloadable weapon is reloaded instead (TODO dedicated reload command)
 */
Scene_Battle.prototype.commandAttack = function () {
    const actor = BattleManager.actor();
    const equipped = actor.equippedWeapon();
    const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[equipped.id];
    if (rangedWeapon && equipped.isReloadable && equipped.ammo <= 0) {
        this.changeBackground();
        this._actionCommandWindow.close();
        this._actionCommandWindow.deactivate();
        this._tacticsCommandWindow.close();
        this._tacticsCommandWindow.deactivate();
        BattleManager.executeDecision({ initiator: actor, option: 10 /* BattleOption.RELOAD */, target: undefined, weapon: rangedWeapon });
        return;
    }
    this.startTargetting({
        option: rangedWeapon ? 7 /* BattleOption.RANGED_ATTACK */ : 6 /* BattleOption.MELEE_ATTACK */,
        weapon: rangedWeapon || TEW.DATABASE.WEAPONS.MELEE_SET[equipped.id]
    });
};
Scene_Battle.prototype.commandSpell = function () {
    this.changeBackground(3); // bg_battle_commandSpell.png does not exist, which stopped the game
    this._windowSpellList.setActor(BattleManager.actor());
    this._actionCommandWindow.deactivate();
    this._windowSpellList.open();
    this._windowSpellList.activate();
    this._windowSpellList.select(0); // TODO keep previous spell selection ? Last selected spell is stored in actor data
    this._windowSpellList.show();
    this._windowSpellDetails.open();
    this._windowSpellDetails.activate();
    this._windowSpellDetails.show();
};
Scene_Battle.prototype.commandChannelling = function () {
    this.changeBackground();
    this._actionCommandWindow.close();
    this._tacticsCommandWindow.close();
    // TODO animation + sound
    BattleManager.actor().doChannelling();
    BattleManager.endAction();
};
Scene_Battle.prototype.onSpellOk = function () {
    const spellId = this._windowSpellList.item();
    BattleManager.actor().setLastSpell(spellId);
    this.startTargetting({ option: 8 /* BattleOption.USE_SPELL */, spell: TEW.DATABASE.SPELLS.SET[spellId] });
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

