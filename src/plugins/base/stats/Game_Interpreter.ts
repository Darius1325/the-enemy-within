// $PluginCompiler TEW_Base.js

import TEW from "../../types/TEW";

// $StartCompilation

// Game_Interpreter

Game_Interpreter.prototype.setBaseStat = function(playerName, statName, value) {
    const player = $gameActors._data[TEW.DATABASE.CHARACTERS.SET[playerName]];
    player._paramBase[TEW.DATABASE.CHARACTERS.STATS[statName]] = value;
};
