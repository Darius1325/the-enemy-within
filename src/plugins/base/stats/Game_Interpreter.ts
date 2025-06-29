// $PluginCompiler TEW_Base.js

import TEW from "../../types/tew";
import {StatName} from "../../types/enum";
import { Game_Actor } from "./Game_Actor";

// $StartCompilation

// Game_Interpreter

Game_Interpreter.prototype.setBaseStat = function(playerName: string, statName: StatName, value: number) {
    const player = $gameActors._data[TEW.CHARACTERS.SET[playerName]];
    player._paramBase[TEW.CHARACTERS.STATS[statName]] = value;
};

Game_Interpreter.prototype.partyHasItem = function(itemId: string) {
    const actors: Game_Actor[] = $gameParty._actors.map((id: number) => $gameActors.actor(id));
    console.log(actors);
    for (let i = 0; i < actors.length; i++) {
        if (actors[i].hasItem(itemId)) {
            return true;
        }
    }
    return false;
}

Game_Interpreter.prototype.addItemToParty = function(itemId: string, quantity = 1) {
    const leadActor: Game_Actor = $gameParty.leader();
    leadActor.addItem(itemId, quantity);
}

Game_Interpreter.prototype.removeItemFromParty = function(itemId: string, quantity = 1) {
    const actors: Game_Actor[] = $gameParty._actors.map((id: number) => $gameActors.actor(id));
    let totalRemoved = 0;
    for (let i = 0; i < actors.length; i++) {
        const quantityToRemove = Math.min(actors[i].item(itemId), quantity);
        if (quantityToRemove > 0) {
            actors[i].removeItem(itemId, quantityToRemove);
            totalRemoved += quantityToRemove;
            if (totalRemoved >= quantity) {
                break;
            }
        }
    }
}
