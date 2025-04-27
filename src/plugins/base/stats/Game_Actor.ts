// $PluginCompiler TEW_Base.js

import { Game_BattlerBase } from "./Game_BattlerBase";
export interface Game_Actor extends Game_BattlerBase {
    param: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;
    paramPlus: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;
}

// $StartCompilation

// Game_Actor

Game_Actor.prototype.paramBase = function(paramId: number) {
    return this._paramBase[paramId];
};

Game_Actor.prototype.paramPlus = function(paramId: number) {
    return Game_Battler.prototype.paramPlus.call(this, paramId);
};
