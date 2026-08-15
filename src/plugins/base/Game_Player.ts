// $PluginCompiler TEW_Base.js

import { Game_Player } from "../../rmmv/objects/Game_Player";

// $StartCompilation

Game_Player.prototype.canEncounter = function() {
    return false;
};
