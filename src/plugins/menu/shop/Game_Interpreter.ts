// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Game_Interpreter.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: Event commands opening the shop menu. The merchant's NPC ID is read from TEW.SHOPS.MERCHANT_VARIABLE_ID, and the haggling modifier of the shop is stored in TEW.SHOPS.HAGGLE_VARIABLE_ID.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { NPC } from "../../_types/npc";

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Game_Interpreter
//
// Shopping commands

// Haggle skill value of a merchant: Fellowship + Haggle advances
Game_Interpreter.prototype.merchantHaggleValue = function(npcId: string) {
    const npc: NPC = TEW.DATABASE.NPCS.SET[npcId];
    if (!npc) {
        return 0;
    }
    const statName = TEW.DATABASE.COMPS.SET[TEW.SHOPS.HAGGLE_COMP].stat;
    let statValue: number;
    if (Array.isArray(npc.stats)) {
        // Stat arrays do not hold the max wounds: [WEAS, BALS, ..., FELW]
        statValue = npc.stats[TEW.CHARACTERS.STATS[statName.toLowerCase()] - 1];
    } else {
        statValue = npc.stats[statName];
    }
    return (statValue || 0) + (npc.comps[TEW.SHOPS.HAGGLE_COMP] || 0);
};

/**
 * Haggle with a merchant, opposing the party's best Haggle to the merchant's
 * The test is only rolled on the first visit, its result being saved for later ones
 * The modifier (percentage, positive in the player's favour) is stored in TEW.SHOPS.HAGGLE_VARIABLE_ID
 * @param npcId merchant's ID in TEW.DATABASE.NPCS.SET
 * @returns the haggling modifier
 */
Game_Interpreter.prototype.haggle = function(npcId: string) {
    if (!$gameParty.hasHaggledWith(npcId)) {
        let modifier = TEW.SHOPS.HAGGLE_LOSS;
        const partyValue = Math.max(...$gameParty.allMembers().map((actor: any) =>
            actor.compWithModifiers(TEW.SHOPS.HAGGLE_COMP)));
        const result = TEW.DICE.opposedTest(partyValue, this.merchantHaggleValue(npcId));
        if (result.success) {
            modifier = result.criticalPlayer ? TEW.SHOPS.HAGGLE_CRITICAL_WIN : TEW.SHOPS.HAGGLE_WIN;
        } else if (result.criticalPlayer) {
            modifier = TEW.SHOPS.HAGGLE_CRITICAL_LOSS;
        }
        console.log(`Haggling with ${npcId}: SL ${result.sl}, success ${result.success}, critical ${result.criticalPlayer} => ${modifier}%`);
        $gameParty.setMerchantHaggle(npcId, modifier);
    }
    const haggle = $gameParty.merchantHaggle(npcId);
    $gameVariables.setValue(TEW.SHOPS.HAGGLE_VARIABLE_ID, haggle);
    return haggle;
};

// Redefining event command : Shop Processing
// The goods chosen in the editor are ignored, the shop is described in TEW.DATABASE.SHOPS.SET
// Parameter 4 (purchase only) is kept
Game_Interpreter.prototype.command302 = function() {
    if (!$gameParty.inBattle()) {
        const npcId: string = $gameVariables.value(TEW.SHOPS.MERCHANT_VARIABLE_ID);
        if (!TEW.DATABASE.SHOPS.SET[npcId]) {
            console.warn(`No shop found for merchant "${npcId}" (game variable #${TEW.SHOPS.MERCHANT_VARIABLE_ID})`);
            this.skipShopGoods();
            return true;
        }

        // First visit: haggling, then waiting for the dice to be seen before this command runs again
        if (!$gameParty.hasHaggledWith(npcId)) {
            this.haggle(npcId);
            this.wait(TEW.SHOPS.HAGGLE_DICE_WAIT);
            return false;
        }

        // Restoring this merchant's modifier, the variable may hold another merchant's
        this.haggle(npcId);
        this.skipShopGoods();
        SceneManager.push(Scene_Shop);
        SceneManager.prepareNextScene(npcId, $gameVariables.value(TEW.SHOPS.HAGGLE_VARIABLE_ID), this._params[4]);
    }
    return true;
};

// Skipping the 'more goods' lines following the Shop Processing command
Game_Interpreter.prototype.skipShopGoods = function() {
    while (this.nextEventCode() === 605) {
        this._index++;
    }
};
