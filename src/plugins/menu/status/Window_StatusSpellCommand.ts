// $PluginCompiler TEW_Menus.js

// ----------------------

// File : Window_StatusSpellCommand.ts
// Author : Ersokili, 7evy, Sebibebi67
// Date : 03/05/2025
// Description : This file contains the implementation of the Window_StatusSpellCommand class, which is used to display the spell commands of a character in the status menu.

// ----------------------
// Imports
// ----------------------

import HalfWindow_DetailsCommand from "../base/HalfWindow_DetailsCommand";

// ----------------------
// $StartCompilation
// ----------------------

function Window_StatusSpellCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_StatusSpellCommand.prototype = Object.create(HalfWindow_DetailsCommand.prototype);
Window_StatusSpellCommand.prototype.constructor = Window_StatusSpellCommand;

// Initializing the command window
Window_StatusSpellCommand.prototype.initialize = function() {
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 1);
};

// Making the 3 lines
Window_StatusSpellCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.statusCastSpell, 'status_cast_spell');
};
