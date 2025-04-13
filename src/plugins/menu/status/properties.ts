// $PluginCompiler TEW_Menus.js 1

import TEW from "../../types/tew";

// $StartCompilation

// Init COMMAND_NAMES
TEW.MENU.COMMAND_NAMES[30] = "Stats";
TEW.MENU.COMMAND_NAMES[31] = "Skills";
TEW.MENU.COMMAND_NAMES[32] = "Talents";
TEW.MENU.COMMAND_NAMES[33] = "Spells";

TEW.MENU.LINE_HEIGHT = 36;

// TextManager
// Override commands
TextManager.command = function(commandId) {
    if (commandId <= 25) {
        return $dataSystem.terms.commands[commandId] || '';
    } else {
        return TEW.MENU.COMMAND_NAMES[commandId] || '';
    }
};

TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT = 70;

// The window for selecting a command on the status screen.
// Adding new Commands Entries

Object.defineProperties(TextManager, {
    statusStats :          TextManager.getter('command', 30),
    statusComps :          TextManager.getter('command', 31),
    statusTalents :        TextManager.getter('command', 32),
    statusSpells :         TextManager.getter('command', 33)
});
