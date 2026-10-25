// $PluginCompiler TEW_Combat.js 99

import Game_Battler from "./Game_Battler";

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Action - legacy
//
// Battles only use decision-based actions (see Game_Action.ts). RMMV may still build actions without a decision
// (e.g. Game_Battler.makeActions, item and skill menus): such actions keep RMMV's behaviour for everything
// except their resolution, which TEW does not implement.
// Compiled before Game_Action.ts, so that the dispatching entry points there always win.

// Trace calls to legacy code at runtime, to spot what still depends on it
Game_Action.logLegacyCall = function(functionName: string) {
    console.log("INFO Legacy Game_Action call " + functionName + ", look into it");
};

Game_Action.prototype.initializeLegacy = function(forcing: boolean) {
    this._forcing = forcing || false;
    this._modifiers = {};
};

Game_Action.prototype.applyLegacy = function(_target: Game_Battler) {
    Game_Action.logLegacyCall('apply');
};
