// $PluginCompiler TEW_Base.js

import TEW from "../../types/tew";
import {StatName} from "../../types/enum";

// $StartCompilation

// Game_Interpreter

Game_Interpreter.prototype.setBaseStat = function(playerName: string, statName: StatName, value: number) {
    const player = $gameActors._data[TEW.CHARACTERS.SET[playerName]];
    player._paramBase[TEW.CHARACTERS.STATS[statName]] = value;
};
