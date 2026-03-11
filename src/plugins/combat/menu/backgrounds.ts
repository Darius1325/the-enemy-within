// $PluginCompiler TEW_Combat.js 101
// Compiled after defining windows

import Window_TacticsActionCommand from "./action/Window_TacticsActionCommand";
import Window_TacticsMoveCommand from "./move/Window_TacticsMoveCommand";
import Window_TacticsCommand from "./Window_TacticsCommand";
import Window_TurnOrder from "./Window_TurnOrder";

// $StartCompilation

Window_TacticsCommand.prototype.windowWidth = function() {
    return 200; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsCommand.prototype.windowHeight = function() {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};

Window_TacticsActionCommand.prototype.windowWidth = function() {
    return 200; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsActionCommand.prototype.windowHeight = function() {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};

Window_TacticsMoveCommand.prototype.windowWidth = function() {
    return 200; // 4 * line height + 2 * text padding + 2 * bg padding
};
Window_TacticsMoveCommand.prototype.windowHeight = function() {
    return 240; // 4 * line height + 2 * text padding + 2 * bg padding
};

Window_TurnOrder.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};
Window_TurnOrder.prototype.windowHeight = function() {
    return 80;
};
Window_TurnOrder.prototype.backgroundImageName = function() {
    return "bg_turnOrder";
};
