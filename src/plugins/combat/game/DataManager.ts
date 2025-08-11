// $PluginCompiler TEW_Combat.js

import Game_PartyTs from "./Game_PartyTs";
import Game_Selector from "./Game_Selector";
import Game_TroopTs from "./Game_TroopTs";

// $StartCompilation

//-----------------------------------------------------------------------------
// DataManager
//
// The static class that manages the database and game objects.

TEW.MEMORY.dataManagerCreateGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
    $gameSelector = new Game_Selector();
    $gameTroopTs  = new Game_TroopTs();
    $gamePartyTs  = new Game_PartyTs();
    TEW.MEMORY.dataManagerCreateGameObjects.call(this);
};
