// $PluginCompiler TEW_Combat.js

import Game_PartyTs from "./Game_PartyTs";
import Game_Selector from "./Game_Selector";
import Game_TroopTs from "./Game_TroopTs";

// $StartCompilation

//-----------------------------------------------------------------------------
// DataManager
//
// The static class that manages the database and game objects.

TacticsSystem.DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
    $gameSelector = new Game_Selector();
    $gameTroopTs  = new Game_TroopTs();
    $gamePartyTs  = new Game_PartyTs();
    TacticsSystem.DataManager_createGameObjects.call(this);
};
