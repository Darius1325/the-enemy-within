// $PluginCompiler TEW_Base.js

import TEW from "../../types/TEW";

// $StartCompilation

// Text

TextManager.param = function(paramId: number) {
    return TEW.DATABASE.CHARACTERS.STATS_VERBOSE[paramId];
};
