// $PluginCompiler TEW_Combat.js
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
