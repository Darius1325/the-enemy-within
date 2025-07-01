// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Character
//
// The superclass of Game_Player, Game_Follower, GameVehicle, and Game_Event.

// Sorry what the fuck
Game_Character.prototype.searchLimit = function() {
    return 32; // 12 by default
};
