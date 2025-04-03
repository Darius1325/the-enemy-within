// $PluginCompiler TEW_Base.js
// $StartCompilation

// Game_Interpreter

Game_Interpreter.prototype.setBaseStat = function(playerName, statName, value) {
    const player = $gameActors._data[TEW.CHARACTERS[playerName]];
    console.log(playerName);
    console.log(TEW.CHARACTERS[playerName]);
    player._paramBase[TEW.STATS[statName]] = value;
};
