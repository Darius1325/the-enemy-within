// $PluginCompiler TEW_Constants.js

import { HitLocation } from "../_types/enum";
import TEW from "../_types/tew";

// $StartCompilation

TEW.DATABASE.HIT_LOCATION_TABLE = {
    [HitLocation.HEAD]: {
        min: 1,
        max: 9
    },
    [HitLocation.LEFT_ARM]: {
        min: 10,
        max: 24
    },
    [HitLocation.RIGHT_ARM]: {
        min: 25,
        max: 44
    },
    [HitLocation.BODY]: {
        min: 45,
        max: 79
    },
    [HitLocation.LEFT_LEG]: {
        min: 80,
        max: 89
    },
    [HitLocation.RIGHT_LEG]: {
        min: 90,
        max: 100
    },
};
