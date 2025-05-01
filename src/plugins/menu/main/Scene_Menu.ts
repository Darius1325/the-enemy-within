// $PluginCompiler TEW_Menus.js 2

// ----------------------

// File: Scene_Menu.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Scene_Menu class, which is responsible for the main menu scene in the game. It includes methods for creating the command window, gold window, and status window, as well as handling user input and navigation within the menu. The class extends the Scene_MenuBase class and overrides its methods to provide custom functionality for the main menu.

// ----------------------
// Imports
// ----------------------
import Window_MenuCommand from "./Window_MenuCommand";

// ----------------------
// $StartCompilation
// ----------------------

function Scene_Menu() {
    this.initialize.apply(this, arguments);
}

Scene_Menu.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Menu.prototype.constructor = Scene_Menu;

Scene_Menu.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Menu.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createGoldWindow();
    this.createStatusWindow();
};

Scene_Menu.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this._statusMenuWindow.refresh();
};

Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this._commandWindow.setHandler('menu_status',    this.commandPersonal.bind(this));
    this._commandWindow.setHandler('menu_inventory',     this.commandPersonal.bind(this));
    this._commandWindow.setHandler('menu_formation', this.commandFormation.bind(this));
    this._commandWindow.setHandler('menu_quest',     this.commandQuests.bind(this));
    this._commandWindow.setHandler('options',   this.commandOptions.bind(this));
    this._commandWindow.setHandler('save',      this.commandSave.bind(this));
    this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Menu.prototype.createGoldWindow = function() {
    this._goldWindow = new Window_Gold(0, 0);
    this._goldWindow.y = Graphics.boxHeight - this._goldWindow.height;
    this.addWindow(this._goldWindow);
};

Scene_Menu.prototype.createStatusWindow = function() {
    this._statusMenuWindow = new Window_MenuStatus(this._commandWindow.width, 0);
    this._statusMenuWindow.reserveFaceImages();
    this.addWindow(this._statusMenuWindow);
};

Scene_Menu.prototype.commandPersonal = function() {
    this._statusMenuWindow.setFormationMode(false);
    this._statusMenuWindow.selectLast();
    this._statusMenuWindow.activate();
    this._statusMenuWindow.setHandler('ok',     this.onPersonalOk.bind(this));
    this._statusMenuWindow.setHandler('cancel', this.onPersonalCancel.bind(this));
};

Scene_Menu.prototype.commandFormation = function() {
    this._statusMenuWindow.setFormationMode(true);
    this._statusMenuWindow.selectLast();
    this._statusMenuWindow.activate();
    this._statusMenuWindow.setHandler('ok',     this.onFormationOk.bind(this));
    this._statusMenuWindow.setHandler('cancel', this.onFormationCancel.bind(this));
};

Scene_Menu.prototype.commandQuests = function() {
    // SceneManager.push(Scene_Quests); // TODO
};

Scene_Menu.prototype.commandOptions = function() {
    SceneManager.push(Scene_Options);
};

Scene_Menu.prototype.commandSave = function() {
    SceneManager.push(Scene_Save);
};

Scene_Menu.prototype.commandGameEnd = function() {
    SceneManager.push(Scene_GameEnd);
};

Scene_Menu.prototype.onPersonalOk = function() {
    switch (this._commandWindow.currentSymbol()) {
        case 'menu_status':
            SceneManager.push(Scene_Status);
            break;
        case 'menu_inventory':
            SceneManager.push(Scene_Equip);
            break;
        default:
            break;
    }
};

Scene_Menu.prototype.onPersonalCancel = function() {
    this._statusMenuWindow.deselect();
    this._commandWindow.activate();
};

Scene_Menu.prototype.onFormationOk = function() {
    var index = this._statusMenuWindow.index();
    var actor = $gameParty.members()[index];
    var pendingIndex = this._statusMenuWindow.pendingIndex();
    if (pendingIndex >= 0) {
        $gameParty.swapOrder(index, pendingIndex);
        this._statusMenuWindow.setPendingIndex(-1);
        this._statusMenuWindow.redrawItem(index);
    } else {
        this._statusMenuWindow.setPendingIndex(index);
    }
    this._statusMenuWindow.activate();
};

Scene_Menu.prototype.onFormationCancel = function() {
    if (this._statusMenuWindow.pendingIndex() >= 0) {
        this._statusMenuWindow.setPendingIndex(-1);
        this._statusMenuWindow.activate();
    } else {
        this._statusMenuWindow.deselect();
        this._commandWindow.activate();
    }
};