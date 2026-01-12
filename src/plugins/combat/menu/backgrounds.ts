// $PluginCompiler TEW_Combat.js 101
// Compiled after defining windows

import Window_TacticsCommand from "./Window_TacticsCommand";

// $StartCompilation

Window_TacticsCommand.prototype.windowWidth = function() {
    return 230; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsCommand.prototype.windowHeight = function() {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};
