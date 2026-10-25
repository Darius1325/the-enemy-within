// $PluginCompiler TEW_Combat.js 101

import Spriteset_Tactics from "../sprite/Spriteset_Tactics";
import Window_TacticsStatus from "./Window_TacticsStatus";
import Window_TacticsCommand from "./Window_TacticsCommand";
import Window_TacticsMoveCommand from "./move/Window_TacticsMoveCommand";
import Window_TacticsActionCommand from "./action/Window_TacticsActionCommand";
import Window_TacticsWeapons, { LoadedWeapon } from "./weapons/Window_TacticsWeapons";
import Window_TacticsWeaponDetails from "./weapons/Window_TacticsWeaponDetails";
import Window_TacticsWeaponCommand from "./weapons/Window_TacticsWeaponCommand";
import { BattleOption, WeaponGroup, WeaponQuality } from "../../_types/enum";
import { Sprite } from "../../../rmmv/core/Sprite";
import Window_TurnOrder from "./Window_TurnOrder";
import Window_TacticsSpellList from "./spell/Window_TacticsSpellList";
import Window_TacticsSpellDetails from "./spell/Window_TacticsSpellDetails";

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
    this.createBackground();
    this.createAllWindows();
    BattleManager.setLogWindow(this._logWindow);
    BattleManager.setCommandWindow(this._tacticsCommandWindow);
    BattleManager.setActorWindow(this._actorWindow);
    BattleManager.setEnemyWindow(this._enemyWindow);
    BattleManager.setSpriteset(this._spriteset);
    this._logWindow.setSpriteset(this._spriteset);
};

Scene_Battle.prototype.createSpriteset = function() {
    this._spriteset = new Spriteset_Tactics();
    this.addChild(this._spriteset);
};

Scene_Battle.prototype.createBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem('bg_battle_command1'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

Scene_Battle.prototype.changeBackground = function(commandLevel = 0) {
    this.removeChildAt(this.getChildIndex(this._background));
    this._background = new Sprite(ImageManager.loadSystem(
        commandLevel === 0 ? 'bg_battle' : ('bg_battle_command' + commandLevel)
    ));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

Scene_Battle.prototype.createAllWindows = function() {
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
    this._tacticsCommandWindow.setHandler(TEW.COMBAT.SYSTEM.move, this.commandMove.bind(this));
    this._tacticsCommandWindow.setHandler(TEW.COMBAT.SYSTEM.action, this.commandAction.bind(this));
    this._tacticsCommandWindow.setHandler(TEW.COMBAT.SYSTEM.wait, this.commandWait.bind(this));
    this.addWindow(this._tacticsCommandWindow);
};

Scene_Battle.prototype.createMessageWindow = function() {
    this._messageWindow = new Window_Message();
    this.addWindow(this._messageWindow);
    this._messageWindow.subWindows().forEach(function(window) {
        this.addWindow(window);
    }, this);
};

Scene_Battle.prototype.createMoveCommandWindow = function() {
    this._moveCommandWindow = new Window_TacticsMoveCommand();
    this._moveCommandWindow.setHandler(TEW.COMBAT.SYSTEM.moveWalk, this.commandWalk.bind(this));
    this._moveCommandWindow.setHandler(TEW.COMBAT.SYSTEM.moveRun, this.commandRun.bind(this));
    this._moveCommandWindow.setHandler(TEW.COMBAT.SYSTEM.moveCharge, this.commandCharge.bind(this));
    this._moveCommandWindow.setHandler(TEW.COMBAT.SYSTEM.moveSwitchWeapon, this.commandSwitchWeapon.bind(this));
    this._moveCommandWindow.setHandler('cancel', () => {
        $gameMap.clearTiles();
        BattleManager.previewMoveOption(BattleOption.WALK);
        $gameMap.clearTiles();
        this._tacticsCommandWindow.extend();
        this._tacticsCommandWindow.activate();
        this._moveCommandWindow.deactivate();
        this._moveCommandWindow.hide();
        this.changeBackground(1);
    });
    this.addWindow(this._moveCommandWindow);
};

Scene_Battle.prototype.createActionCommandWindow = function() {
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

Scene_Battle.prototype.createSpellListWindow = function() {
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

Scene_Battle.prototype.createSpellDetailsWindow = function() {
    this._windowSpellDetails = new Window_TacticsSpellDetails();
    this._windowSpellList.setHandler('show_spell_details', () => {
        this.showSpellDetails();
    });
    this._windowSpellDetails.hide();
    this.addWindow(this._windowSpellDetails);
};

Scene_Battle.prototype.createTurnOrderWindow = function() {
    this._turnOrderWindow = new Window_TurnOrder();
    this._turnOrderWindow.deactivate();
    this._turnOrderWindow.show();
    this.addWindow(this._turnOrderWindow);
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

Scene_Battle.prototype.showSpellDetails = function() {
    this._windowSpellDetails._spell = this._windowSpellList.item();
    this._windowSpellDetails.refresh();
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

Scene_Battle.prototype.start = function() {
    $gameSwitches.setValue(TEW.COMBAT.SYSTEM.battleStartId, true);
    $gamePlayer.setThrough(true);
    Scene_Base.prototype.start.call(this);
    BattleManager.startBattle();
    this.startFadeIn(this.slowFadeSpeed(), false);
    this.loadFaceset();
};

Scene_Battle.prototype.loadFaceset = function() {
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
        this._moveCommandWindow.active ||
        this._actionCommandWindow.active ||
        this._weaponsWindow.active ||
        this._weaponsCommandWindow.active ||
        this._windowSpellList.active
    );
};

Scene_Battle.prototype.startActorCommandSelection = function() {
    this._actorWindow.show();
    this._tacticsCommandWindow.setActor(BattleManager.actor());
    this._tacticsCommandWindow.extend();
    this.changeBackground(1);
};

Scene_Battle.prototype.commandMove = function() {
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
Scene_Battle.prototype.commandWalk = function() {
    if (BattleManager.canMove() || BattleManager.canAct()) {
        this.startTargetting({ option: BattleOption.WALK });
    } else {
        SoundManager.playBuzzer();
    }
};

Scene_Battle.prototype.commandRun = function() {
    if (BattleManager.canRun()) {
        this.startTargetting({ option: BattleOption.RUN });
    } else {
        SoundManager.playBuzzer();
    }
};

Scene_Battle.prototype.commandCharge = function() {
    if (BattleManager.canRun()) {
        // TODO account for critical failure
        this.startTargetting({ option: BattleOption.CHARGE });
    } else {
        SoundManager.playBuzzer();
    }
};

/**
 * Close the command windows and let the player select a target for the decision on the map
 */
Scene_Battle.prototype.startTargetting = function(decision: { option: BattleOption, weapon?: any, spell?: any }) {
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

Scene_Battle.prototype.commandSwitchWeapon = function() {
    // Spend a movement if possible or spend an action to move
    if (!BattleManager.canActOrMove()) {
        SoundManager.playCancel();
    } else {
        if (BattleManager.canMove()) {
            BattleManager.spendMove();
        } else {
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

Scene_Battle.prototype.commandWait = function() {
    this.changeBackground();
    this._tacticsCommandWindow.close();
    this._tacticsCommandWindow.deactivate();
    BattleManager.executeDecision({ initiator: BattleManager.actor(), option: BattleOption.WAIT, target: undefined });
};

Scene_Battle.prototype.commandAction = function() {
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
Scene_Battle.prototype.commandAttack = function() {
    const actor = BattleManager.actor();
    const equipped = actor.equippedWeapon();
    const rangedWeapon = TEW.DATABASE.WEAPONS.RANGED_SET[equipped.id];
    if (rangedWeapon && equipped.isReloadable && equipped.ammo <= 0) {
        this.changeBackground();
        this._actionCommandWindow.close();
        this._actionCommandWindow.deactivate();
        this._tacticsCommandWindow.close();
        this._tacticsCommandWindow.deactivate();
        BattleManager.executeDecision({ initiator: actor, option: BattleOption.RELOAD, target: undefined, weapon: rangedWeapon });
        return;
    }
    this.startTargetting({
        option: rangedWeapon ? BattleOption.RANGED_ATTACK : BattleOption.MELEE_ATTACK,
        weapon: rangedWeapon || TEW.DATABASE.WEAPONS.MELEE_SET[equipped.id]
    });
};

Scene_Battle.prototype.commandSpell = function() {
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

Scene_Battle.prototype.commandChannelling = function() {
    this.changeBackground();
    this._actionCommandWindow.close();
    this._tacticsCommandWindow.close();
    // TODO animation + sound
    BattleManager.actor().doChannelling();
    BattleManager.endAction();
};


Scene_Battle.prototype.onSpellOk = function() {
    const spellId: string = this._windowSpellList.item();
    BattleManager.actor().setLastSpell(spellId);
    this.startTargetting({ option: BattleOption.USE_SPELL, spell: TEW.DATABASE.SPELLS.SET[spellId] });
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
};

Scene_Battle.prototype.needsSlowFadeOut = function() {
    return (SceneManager.isNextScene(Scene_Title) ||
        SceneManager.isNextScene(Scene_Gameover));
};

Scene_Battle.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
};
