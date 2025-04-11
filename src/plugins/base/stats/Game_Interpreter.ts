// $PluginCompiler TEW_Base.js

import TEW from "../../types/tew";

// $StartCompilation

// Game_Interpreter

Game_Interpreter.prototype.setBaseStat = function(playerName, statName, value) {
    const player = $gameActors._data[TEW.CHARACTERS.SET[playerName]];
    player._paramBase[TEW.CHARACTERS.STATS[statName]] = value;
};
