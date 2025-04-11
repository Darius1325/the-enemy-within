// $PluginCompiler TEW_Base.js

import TEW from "../../types/tew";

// $StartCompilation

// Text

TextManager.param = function(paramId: number) {
    return TEW.CHARACTERS.STATS_VERBOSE[paramId];
};
