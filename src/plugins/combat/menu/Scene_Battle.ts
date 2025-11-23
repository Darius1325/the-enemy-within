// $PluginCompiler TEW_Combat.js

import Spriteset_Tactics from "../sprite/Spriteset_Tactics";
import Window_TacticsSkill from "./Window_TacticsSkill";
import Window_TacticsItem from "./Window_TacticsItem";
import Window_TacticsMap from "./Window_TacticsMap";
import Window_TacticsStatus from "./Window_TacticsStatus";
import Window_TacticsCommand from "./Window_TacticsCommand";
import Window_TacticsInfo from "./Window_TacticsInfo";
import Window_TacticsMoveCommand from "./move/Window_TacticsMoveCommand";
import { BattlePhase } from "../game/BattleManager";
import Window_TacticsWeapons, { LoadedWeapon } from "./weapons/Window_TacticsWeapons";
import Window_TacticsWeaponDetails from "./weapons/Window_TacticsWeaponDetails";
import Window_TacticsWeaponCommand from "./weapons/Window_TacticsWeaponCommand";
import { WeaponGroup, WeaponQuality } from "../../_types/enum";

// $StartCompilation

//-----------------------------------------------------------------------------
// Scene_Battle
//
// The scene class of the tactics screen.

function Scene_Battle() {
    this.initialize.apply(this, arguments);
}

Scene_Battle.prototype = Object.create(Scene_Base.prototype);
Scene_Battle.prototype.constructor = Scene_Battle;

Scene_Battle.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

Scene_Battle.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createDisplayObjects();
};

Scene_Battle.prototype.createDisplayObjects = function() {
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

Scene_Battle.prototype.createSpriteset = function() {
    this._spriteset = new Spriteset_Tactics();
    this.addChild(this._spriteset);
};

Scene_Battle.prototype.createAllWindows = function() {
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

    this.createWeaponCommandWindow();
    this.createWeaponListWindow();
    this.createWeaponDetailsWindow();
};

Scene_Battle.prototype.createLogWindow = function() {
    this._logWindow = new Window_BattleLog();
    this.addWindow(this._logWindow);
};

Scene_Battle.prototype.createUnitWindow = function() {
    this.createActorWindow();
    this.createEnemyWindow();
};

Scene_Battle.prototype.createActorWindow = function() {
    var sx = 32;
    this._actorWindow = new Window_TacticsStatus();
    this._actorWindow.x = Graphics.boxWidth / 2 + sx;
    this.addWindow(this._actorWindow);
};

Scene_Battle.prototype.createEnemyWindow = function() {
    var sx = 32;
    this._enemyWindow = new Window_TacticsStatus();
    this._enemyWindow.x = Graphics.boxWidth / 2 - this._enemyWindow.width - sx;
    this.addWindow(this._enemyWindow);
};

Scene_Battle.prototype.createActorCommandWindow = function() {
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

Scene_Battle.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help();
    this._helpWindow.visible = false;
    this.addWindow(this._helpWindow);
};

Scene_Battle.prototype.createSkillWindow = function() {
    var wx = this._tacticsCommandWindow.x + this._tacticsCommandWindow.width;
    var ww = Graphics.boxWidth - this._tacticsCommandWindow.width;
    var wh = this._tacticsCommandWindow.fittingHeight(4);
    this._skillWindow = new Window_TacticsSkill(wx, this._tacticsCommandWindow.y, ww, wh);
    this._skillWindow.setHelpWindow(this._helpWindow);
    this._skillWindow.setHandler('ok',     this.onSkillOk.bind(this));
    this._skillWindow.setHandler('cancel', this.onSkillCancel.bind(this));
    this.addWindow(this._skillWindow);
};

Scene_Battle.prototype.createItemWindow = function() {
    var wx = this._tacticsCommandWindow.x + this._tacticsCommandWindow.width;
    var ww = Graphics.boxWidth - this._tacticsCommandWindow.width;
    var wh = this._tacticsCommandWindow.fittingHeight(4);
    this._itemWindow = new Window_TacticsItem(wx, this._tacticsCommandWindow.y, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this.addWindow(this._itemWindow);
};

Scene_Battle.prototype.createMessageWindow = function() {
    this._messageWindow = new Window_Message();
    this.addWindow(this._messageWindow);
    this._messageWindow.subWindows().forEach(function(window) {
        this.addWindow(window);
    }, this);
};

Scene_Battle.prototype.createInfoWindow = function() {
    this._infoWindow = new Window_TacticsInfo();
    this._infoWindow.x = Graphics.boxWidth / 2 - this._infoWindow.width / 2;
    this._infoWindow.y = 0;
    this.addWindow(this._infoWindow);
};

// TODO unused
Scene_Battle.prototype.createMapWindow = function() {
    this._mapWindow = new Window_TacticsMap(0, 0);
    this._mapWindow.setHandler('endTurn', this.commandEndTurn.bind(this));
    this._mapWindow.setHandler('equip',   this.commandPersonal.bind(this));
    this._mapWindow.setHandler('status',  this.commandPersonal.bind(this));
    this._mapWindow.setHandler('options', this.commandOptions.bind(this));
    this._mapWindow.setHandler('gameEnd', this.commandGameEnd.bind(this));
    this._mapWindow.setHandler('cancel',  this.commandCancelMapWindow.bind(this));
    this.addWindow(this._mapWindow);
};

Scene_Battle.prototype.createStatusWindow = function() {
    var wx = this._mapWindow.x + this._mapWindow.width;
    this._statusWindow = new Window_MenuStatus(wx, 0);
    this._statusWindow.reserveFaceImages();
    this._statusWindow.hide();
    this.addWindow(this._statusWindow);
};

Scene_Battle.prototype.createMoveCommandWindow = function() {
    this._moveCommandWindow = new Window_TacticsMoveCommand();
    this._moveCommandWindow.setHandler('walk', this.commandWalk.bind(this));
    this._moveCommandWindow.setHandler('run', this.commandRun.bind(this));
    this._moveCommandWindow.setHandler('charge', this.commandCharge.bind(this));
    this._moveCommandWindow.setHandler('switchWeapon', this.commandSwitchWeapon.bind(this));
    this._moveCommandWindow.setHandler('cancel', () => {
        $gameMap.clearTiles();
        this._tacticsCommandWindow.activate();
        this._moveCommandWindow.deactivate();
        this._moveCommandWindow.hide();
    });
    this.addWindow(this._moveCommandWindow);
};

Scene_Battle.prototype.createWeaponCommandWindow = function() {
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

Scene_Battle.prototype.createWeaponListWindow = function() {
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

Scene_Battle.prototype.createWeaponDetailsWindow = function() {
    this._weaponDetailsWindow = new Window_TacticsWeaponDetails(
        this._weaponsCommandWindow.fittingHeight(this._weaponsCommandWindow._actionsNumber)
    );
    this._weaponsWindow.setHandler('show_weapon_details', () => {
        this.showWeaponDetails();
    });
    this._weaponDetailsWindow.hide();
    this.addWindow(this._weaponDetailsWindow);
};

Scene_Battle.prototype.activateCommandWindowWeapon = function() {
    if (this._weaponsWindow.isOpenAndActive() && this._weaponsWindow.index() >= 0) {
        this._weaponsCommandWindow.activate();
        this._weaponsWindow.deactivate();
        this._weaponsCommandWindow.show();
        this._weaponsCommandWindow.select(0);
    }
};

Scene_Battle.prototype.showWeaponDetails = function() {
    const weapon: LoadedWeapon = this._weaponsWindow.weaponFromIndex(this._weaponsWindow.index());
    if (weapon) {
        this._weaponDetailsWindow._weapon = weapon;
        this._weaponsCommandWindow.refreshCommand(this._actor, weapon.equipIndex);
        this._weaponDetailsWindow.refresh();
    } else {
        this._weaponDetailsWindow.clear();
        this._weaponsCommandWindow.clear();
    }
};

Scene_Battle.prototype.equipWeapon = function() {
    const weapon: LoadedWeapon = this._weaponsWindow.item();
    if (weapon.group === WeaponGroup.PARRY
        || weapon.qualities.some((quality) =>
            quality === WeaponQuality.SHIELD_1
            || quality === WeaponQuality.SHIELD_2
            || quality === WeaponQuality.SHIELD_3
            || quality === WeaponQuality.SHIELD_4
            || quality === WeaponQuality.SHIELD_5)
    ) {
        BattleManager.actor().unequipSecondHand();
        BattleManager.actor().equipSecondHand(weapon.equipIndex);
    } else {
        BattleManager.actor().unequipMainHand();
        BattleManager.actor().equipMainHand(weapon.equipIndex);
    }
    this._weaponsWindow.syncActor();
    this._weaponsCommandWindow.callHandler('cancel');
}

Scene_Battle.prototype.unequipWeapon = function() {
    const weaponIndex = this._weaponsWindow.index();
    if (weaponIndex === 0) {
        BattleManager.actor().unequipMainHand();
    } else if (weaponIndex === 1) {
        BattleManager.actor().unequipSecondHand();
    }
    this._weaponsWindow.syncActor();
    this._weaponsCommandWindow.callHandler('cancel');
}

Scene_Battle.prototype.commandPersonal = function() {
    this._statusWindow.setFormationMode(false);
    this._statusWindow.selectLast();
    this._statusWindow.activate();
    this._statusWindow.setHandler('ok', this.onPersonalOk.bind(this));
    this._statusWindow.setHandler('cancel', this.onPersonalCancel.bind(this));
};

Scene_Battle.prototype.commandFormation = function() {
};

// TODO unused ?
Scene_Battle.prototype.commandOptions = function() {
    SceneManager.push(Scene_Options);
    $gameSelector.setTransparent(false);
    this._actorWindow.show();
};

// TODO unused ?
Scene_Battle.prototype.commandGameEnd = function() {
    SceneManager.push(Scene_GameEnd);
};

// TODO unused
Scene_Battle.prototype.commandCancelMapWindow = function() {
    $gameSelector.setTransparent(false);
    this._actorWindow.show();
    this._mapWindow.hide();
    this._statusWindow.hide();
    this._enemyWindow.show();
    this._mapWindow.deactivate();
    this.menuCalling = false;
};

Scene_Battle.prototype.start = function() {
    $gameSwitches.setValue(TEW.COMBAT.SYSTEM.battleStartId, true);
    $gamePlayer.setThrough(true);
    Scene_Base.prototype.start.call(this);
    BattleManager.startBattle();
    this.startFadeIn(this.slowFadeSpeed(), false);
    this.menuCalling = false;
    this.loadFaceset();
};

Scene_Battle.prototype.loadFaceset = function() {
    this._statusWindow.refresh();
    this.loadFacesetActor();
    this.loadFacesetEnemy();
};

Scene_Battle.prototype.loadFacesetActor = function() {
    $gamePartyTs.members().forEach(function(member) {
        ImageManager.loadFace(member.faceName());
    });
};

Scene_Battle.prototype.loadFacesetEnemy = function() {
    $gameTroopTs.members().forEach(function(member) {
        ImageManager.loadEnemy(member.battlerName());
    });
};

Scene_Battle.prototype.update = function() {
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

Scene_Battle.prototype.isMenuEnabled = function() {
    return $gameSystem.isMenuEnabled() && !$gameMap.isEventRunning();
};

Scene_Battle.prototype.isMenuCalled = function() {
    return Input.isTriggered('menu') || TouchInput.isCancelled();
};

Scene_Battle.prototype.updateCallMenu = function() {
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
    } else {
        this.menuCalling = false;
    }
};

Scene_Battle.prototype.callMenu = function() {
    this.menuCalling = false;
    this._mapWindow.show();
    this._statusWindow.show();
    this._actorWindow.hide();
    this._enemyWindow.hide();
    this._mapWindow.activate();
};

// TODO Obsolete
Scene_Battle.prototype.commandEndTurn = function() {
    SoundManager.playOk();
    BattleManager.onAllTurnEnd();
    this.commandCancelMapWindow();
};

Scene_Battle.prototype.updateDestination = function() {
    if (this.isMapTouchOk()) {
        this.processMapTouch();
    }
};

Scene_Battle.prototype.isMapTouchOk = function() {
    return this.isActive() && BattleManager.isActive() && !this.isAnyInputWindowActive();
};

Scene_Battle.prototype.processMapTouch = function() {
    if (TouchInput.isTriggered()) {
        var x = $gameMap.canvasToMapX(TouchInput.x);
        var y = $gameMap.canvasToMapY(TouchInput.y);
        $gameSelector.moveTo(x, y);
    }
};

Scene_Battle.prototype.updateBattleProcess = function() {
    if (!this.isAnyInputWindowActive() || BattleManager.isBattleEnd()) {
        this.updateCallMenu();
        $gameSelector.updateMoveByInput();
        if (BattleManager.isInputting() && !$gameMap.isEventRunning()) {
            this.startActorCommandSelection();
        }
        BattleManager.update();
    }
};

Scene_Battle.prototype.isBusy = function() {
    return ((this._messageWindow && this._messageWindow.isClosing()) ||
        Scene_Base.prototype.isBusy.call(this) || $gameSelector.isBusy());
};

Scene_Battle.prototype.isAnyInputWindowActive = function() {
    return (this._tacticsCommandWindow.active ||
        this._skillWindow.active ||
        this._itemWindow.active ||
        this._mapWindow.active ||
        this._statusWindow.active ||
        this._moveCommandWindow.active ||
        this._weaponsWindow.active ||
        this._weaponsCommandWindow.active
    );
};

Scene_Battle.prototype.startActorCommandSelection = function() {
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

Scene_Battle.prototype.commandMove = function() {
    this._actorWindow.hide();
    this._moveCommandWindow.setActor(BattleManager.actor());
    this._moveCommandWindow.refresh();
    this._moveCommandWindow.show();
    this._tacticsCommandWindow.deactivate();
    this._moveCommandWindow.activate();
    $gameSelector.performTransfer(BattleManager._subject.x, BattleManager._subject.y);
    BattleManager.refreshMoveTiles();
};

Scene_Battle.prototype.commandWalk = function() {
    // Spend a movement if possible or spend an action to move
    if (BattleManager.moveCount > 0) {
        BattleManager.moveCount -= 1;
        this.commandWalkOrRun();
    } else if (BattleManager.actionCount > 0) {
        BattleManager.actionCount -= 1;
        this.commandWalkOrRun();
    } else {
        SoundManager.playCancel();
    }
};

Scene_Battle.prototype.commandRun = function() {
    if (BattleManager.canRun()) {
        BattleManager.moveCount -= 1;
        BattleManager.actionCount -= 1;
        this.commandWalkOrRun();
    } else {
        SoundManager.playCancel();
    }
};

Scene_Battle.prototype.commandCharge = function() {
    if (BattleManager.canRun()) {
        BattleManager.moveCount -= 1;
        BattleManager.actionCount -= 1;
        this._moveCommandWindow.close();
        this._tacticsCommandWindow.close();
        // TODO account for critical failure
        // TODO switch back to flexible movement when done
        // TODO special phase for special pathfinding + no menu
        BattleManager._battlePhase = BattlePhase.InputMove;
        BattleManager.refreshMoveTiles();
    } else {
        SoundManager.playCancel();
    }
}

Scene_Battle.prototype.commandWalkOrRun = function() {
    BattleManager._battlePhase = BattlePhase.InputMove;
    this._moveCommandWindow.close();
    this._tacticsCommandWindow.close();
    BattleManager.refreshMoveTiles();
};

Scene_Battle.prototype.commandSwitchWeapon = function() {
    // Spend a movement if possible or spend an action to move
    if (BattleManager.moveCount === 0 && BattleManager.actionCount === 0) {
        SoundManager.playCancel();
    } else {
        if (BattleManager.moveCount > 0) {
            BattleManager.moveCount -= 1;
        } else {
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

Scene_Battle.prototype.commandWait = function() {
    BattleManager.inputtingAction().setWait();
    BattleManager.setupAction();
    this._tacticsCommandWindow.close();
};

Scene_Battle.prototype.onPersonalOk = function() {
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

Scene_Battle.prototype.onPersonalCancel = function() {
    this._statusWindow.deselect();
    this._mapWindow.activate();
    $gameSelector.setTransparent(false);
};


Scene_Battle.prototype.selectPreviousCommand = function() {
    if ($gameTemp.canCancel()) {
        SoundManager.playCancel();
        BattleManager.previousSelect();
        this.endCommandSelection();
    }
};

Scene_Battle.prototype.onSkillOk = function() {
    this._actorWindow.show();
    var skill = this._skillWindow.item();
    var action = BattleManager.inputtingAction();
    action.setSkill(skill.id);
    BattleManager.actor().setLastBattleSkill(skill);
    this.onSelectAction();
};

Scene_Battle.prototype.onSkillCancel = function() {
    BattleManager.processCancel();
    this._actorWindow.show();
    this._skillWindow.hide();
    this._tacticsCommandWindow.activate();
};

Scene_Battle.prototype.onItemOk = function() {
    this._actorWindow.show();
    var item = this._itemWindow.item();
    var action = BattleManager.inputtingAction();
    action.setItem(item.id);
    $gameParty.setLastItem(item);
    this.onSelectAction();
};

Scene_Battle.prototype.onItemCancel = function() {
    BattleManager.processCancel();
    this._actorWindow.show();
    this._itemWindow.hide();
    this._tacticsCommandWindow.activate();
};

Scene_Battle.prototype.onSelectAction = function() {
    this._skillWindow.hide();
    this._itemWindow.hide();
    this._tacticsCommandWindow.close();
    BattleManager.processTarget();
};

Scene_Battle.prototype.endCommandSelection = function() {
    this._tacticsCommandWindow.close();
};

Scene_Battle.prototype.stop = function() {
    Scene_Base.prototype.stop.call(this);
    if (this.needsSlowFadeOut()) {
        this.startFadeOut(this.slowFadeSpeed(), false);
    } else {
        this.startFadeOut(this.fadeSpeed(), false);
    }
    this._actorWindow.close();
    this._enemyWindow.close();
    this._infoWindow.close();
};

Scene_Battle.prototype.needsSlowFadeOut = function() {
    return (SceneManager.isNextScene(Scene_Title) ||
        SceneManager.isNextScene(Scene_Gameover));
};

Scene_Battle.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
};
