// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Shops.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: This file contains the shops of the TEW game. Each shop is attached to a merchant NPC (from TEW_Npc.ts) and lists the goods sold (from TEW_Items.ts by default), how many times each good can be bought, and the merchant's price multiplier.

// ----------------------
// Imports
// ----------------------

import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

TEW.DATABASE.SHOPS = {};
// #region ====== SHOPS SET === //
// quantity: number of purchases allowed (saved), -1 for unlimited
// id: any ID from TEW_Items.ts, TEW_Weapons.ts (melee, ranged or ammunition) or TEW_Armors.ts
// Rare and exotic goods are only in stock if they pass an availability roll (see TEW.SHOPS.AVAILABILITY_CHANCES)
TEW.DATABASE.SHOPS.SET = {
    // TODO placeholder shop, to be replaced by actual merchants
    GUSTAV_FONDLEBURGER: {
        multiplier: 100,
        items: [
            { id: "BOOTS", quantity: -1 },
            { id: "COAT", quantity: -1 },
            { id: "HAT", quantity: -1 },
            { id: "CANDLE", quantity: -1 },
            { id: "ROPE", quantity: -1 },
            { id: "RATIONS_ONE_DAY", quantity: -1 },
            { id: "HEALING_POULTICE", quantity: 5 },
            { id: "HEALING_DRAUGHT", quantity: 2 },
            { id: "SIGNET_RING", quantity: 1 },
            { id: "HAND_MIRROR", quantity: 1 },
            { id: "DAGGER", quantity: -1 },
            { id: "LEATHER_JACK", quantity: 2 },
            { id: "ARROW", quantity: -1 }
        ]
    }
};
// #endregion === SHOPS SET === //
