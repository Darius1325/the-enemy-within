// $PluginCompiler TEW_Combat.js 101
// Compiled after defining windows

import Window_TacticsCommand from "./Window_TacticsCommand";

// $StartCompilation

Window_TacticsCommand.prototype.backgroundImageName = function() {
    return "bg_battle";
};
Window_TitleCommand.prototype.windowWidth = function() {
    return 204; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TitleCommand.prototype.windowHeight = function() {
    return 204; // 4 * line height + 2 * text padding + 2 * bg padding
};
