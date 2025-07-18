// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_MenuCommand.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Window_MenuCommand class, which is responsible for displaying the command window in the main menu. It includes methods for creating the command list, handling user input, and managing the visibility of commands based on game conditions.

// ----------------------
// $StartCompilation
// ----------------------

Window_MenuCommand.prototype.makeCommandList = function () {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOptionsCommand();
    this.addSaveCommand();
    this.addGameEndCommand();
};

Window_MenuCommand.prototype.addMainCommands = function () {
    this.addCommand(TextManager.mainMenuStatus, 'menu_status', true);
    this.addCommand(TextManager.mainMenuInventory, 'menu_inventory', true);
    this.addCommand(TextManager.mainMenuQuests, 'menu_quests', false);
};

Window_MenuCommand.prototype.addFormationCommand = function () {
    this.addCommand(TextManager.mainMenuFormation, 'menu_formation', false); // TODO
};

Window_MenuCommand.prototype.addOptionsCommand = function () {
    this.addCommand(TextManager.mainMenuOptions, 'options', true);
};

Window_MenuCommand.prototype.addSaveCommand = function () {
    this.addCommand(TextManager.mainMenuSave, 'save', true);
};

Window_MenuCommand.prototype.addGameEndCommand = function () {
    this.addCommand(TextManager.mainMenuGameEnd, 'gameEnd', true);
};

Window_MenuCommand.prototype.processOk = function () {
    Window_MenuCommand._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};

Window_MenuCommand.prototype.selectLast = function () {
    this.selectSymbol(Window_MenuCommand._lastCommandSymbol);
};