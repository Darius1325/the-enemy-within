// $PluginCompiler TEW_Menus.js 1

// ----------------------

// File: properties.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: This file contains the constants, utilities and texts of the shop menu. Money is always computed in copper coins, and only converted to gold crowns, silver shillings and copper coins for display.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { Availability, ShopSortOrder } from "../../_types/enum";
import { Ammunition } from "../../_types/ammunition";
import { Item } from "../../_types/item";
import { ShopEntry } from "../../_types/shop";

// ----------------------
// $StartCompilation
// ----------------------

TEW.SHOPS = TEW.SHOPS || {};

// #region ====== MONEY === //
// 1 gold crown = 20 silver shillings = 240 copper coins
TEW.SHOPS.COPPER_PER_SILVER = 12;
TEW.SHOPS.COPPER_PER_GOLD = 20 * TEW.SHOPS.COPPER_PER_SILVER;
TEW.SHOPS.GOLD_LABEL = "G";
TEW.SHOPS.SILVER_LABEL = "S";
TEW.SHOPS.COPPER_LABEL = "C";

TEW.SHOPS.formatMoney = function(copper: number) {
    const amount = Math.max(0, Math.floor(copper));
    const gold = Math.floor(amount / TEW.SHOPS.COPPER_PER_GOLD);
    const silver = Math.floor((amount % TEW.SHOPS.COPPER_PER_GOLD) / TEW.SHOPS.COPPER_PER_SILVER);
    const rest = amount % TEW.SHOPS.COPPER_PER_SILVER;
    const parts: string[] = [];
    if (gold > 0) {
        parts.push(gold + TEW.SHOPS.GOLD_LABEL);
    }
    if (silver > 0) {
        parts.push(silver + TEW.SHOPS.SILVER_LABEL);
    }
    if (rest > 0 || parts.length === 0) {
        parts.push(rest + TEW.SHOPS.COPPER_LABEL);
    }
    return parts.join(" ");
};
// #endregion === MONEY === //

// #region ====== HAGGLING === //
TEW.SHOPS.MERCHANT_VARIABLE_ID = 17;
TEW.SHOPS.HAGGLE_VARIABLE_ID = 18;
TEW.SHOPS.HAGGLE_COMP = "HAGGLE";
TEW.SHOPS.HAGGLE_WIN = 10;
TEW.SHOPS.HAGGLE_CRITICAL_WIN = 20;
TEW.SHOPS.HAGGLE_LOSS = 0;
TEW.SHOPS.HAGGLE_CRITICAL_LOSS = -10;
TEW.SHOPS.HAGGLE_DICE_WAIT = 120;
// #endregion === HAGGLING === //

// #region ====== STOCK AND PRICES === //
TEW.SHOPS.SELL_RATIO = 50;
// Only rare and exotic goods depend on a roll
TEW.SHOPS.AVAILABILITY_CHANCES = {
    [Availability.COMMON]: 100,
    [Availability.SCARCE]: 100,
    [Availability.RARE]: 30,
    [Availability.EXOTIC]: 10
};
TEW.SHOPS.UNLIMITED = -1;
TEW.SHOPS.UNLIMITED_LABEL = "∞";
TEW.SHOPS.MAX_TRANSACTION = 99;

// #region ====== SELLABLE DATABASES === //
// IDs are unique across items, weapons, armors and ammunition, so a good is found by its ID alone
TEW.SHOPS.isItem = function(id: string) {
    return !!TEW.DATABASE.ITEMS.SET[id];
};

TEW.SHOPS.isWeapon = function(id: string) {
    return !!(TEW.DATABASE.WEAPONS.MELEE_SET[id] || TEW.DATABASE.WEAPONS.RANGED_SET[id]);
};

TEW.SHOPS.isArmor = function(id: string) {
    return !!TEW.DATABASE.ARMORS.SET[id];
};

TEW.SHOPS.isAmmo = function(id: string) {
    return !!TEW.DATABASE.WEAPONS.AMMO_SET[id];
};

TEW.SHOPS.goodData = function(id: string) {
    return TEW.DATABASE.ITEMS.SET[id]
        || TEW.DATABASE.WEAPONS.MELEE_SET[id]
        || TEW.DATABASE.WEAPONS.RANGED_SET[id]
        || TEW.DATABASE.ARMORS.SET[id]
        || TEW.DATABASE.WEAPONS.AMMO_SET[id];
};

// Items and ammunition only have a group icon
TEW.SHOPS.goodIcon = function(id: string) {
    const data: any = TEW.SHOPS.goodData(id);
    if (!data) {
        return 0;
    }
    if (TEW.SHOPS.isItem(id) || TEW.SHOPS.isAmmo(id)) {
        return (data as Item | Ammunition).groupIcon;
    }
    return data.icon;
};

// Ammunition has no encumbrance
TEW.SHOPS.goodEnc = function(id: string) {
    const data: any = TEW.SHOPS.goodData(id);
    return (data && data.enc) || 0;
};

// Items are priced by batch of 'nb', ammunition by batch of 'ammountSold'
TEW.SHOPS.unitPrice = function(id: string) {
    const data: any = TEW.SHOPS.goodData(id);
    if (!data) {
        return 0;
    }
    let batch = 1;
    if (TEW.SHOPS.isItem(id)) {
        batch = (data as Item).nb || 1;
    } else if (TEW.SHOPS.isAmmo(id)) {
        batch = (data as Ammunition).ammountSold || 1;
    }
    return (data.price || 0) / batch;
};

// IDs found in several sellable databases, which would make goods ambiguous
TEW.SHOPS.duplicateIds = function() {
    const ids = [
        ...Object.keys(TEW.DATABASE.ITEMS.SET),
        ...Object.keys(TEW.DATABASE.WEAPONS.MELEE_SET),
        ...Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET),
        ...Object.keys(TEW.DATABASE.ARMORS.SET),
        ...Object.keys(TEW.DATABASE.WEAPONS.AMMO_SET)
    ];
    return ids.filter((id: string, index: number) => ids.indexOf(id) !== index);
};

if (TEW.SHOPS.duplicateIds().length > 0) {
    console.warn("IDs shared by several sellable databases, shops will pick the first one found "
        + "(items, melee weapons, ranged weapons, armors, ammunition):", TEW.SHOPS.duplicateIds());
}
// #endregion === SELLABLE DATABASES === //

// A better haggle makes goods cheaper
TEW.SHOPS.buyPrice = function(basePrice: number, multiplier: number, haggle: number) {
    if (basePrice <= 0) {
        return 0;
    }
    return Math.max(1, Math.round(basePrice * multiplier / 100 * (100 - haggle) / 100));
};

// A better haggle makes the merchant pay more, but never more than his own selling price
TEW.SHOPS.sellPrice = function(basePrice: number, multiplier: number, haggle: number) {
    if (basePrice <= 0) {
        return 0;
    }
    const price = Math.max(1, Math.floor(basePrice * TEW.SHOPS.SELL_RATIO / 100 * multiplier / 100 * (100 + haggle) / 100));
    return Math.min(price, TEW.SHOPS.buyPrice(basePrice, multiplier, haggle));
};

TEW.SHOPS.newMerchantState = function() {
    return {
        haggle: null,
        purchases: {},
        stock: {}
    };
};
// #endregion === STOCK AND PRICES === //

// #region ====== SORTING === //
Input.keyMapper[83] = "S_Key";
TEW.SHOPS.SORT_KEY = "S_Key";
TEW.SHOPS.SORT_KEY_LABEL = "S";
TEW.SHOPS.SORT_ORDERS = [ShopSortOrder.NAME, ShopSortOrder.WEIGHT, ShopSortOrder.PRICE];

TEW.SHOPS.sortEntries = function(entries: ShopEntry[], order: ShopSortOrder) {
    const byName = (a: ShopEntry, b: ShopEntry) => a.data.name.localeCompare(b.data.name);
    return entries.slice().sort((a: ShopEntry, b: ShopEntry) => {
        let difference = 0;
        if (order === ShopSortOrder.WEIGHT) {
            difference = TEW.SHOPS.goodEnc(b.id) - TEW.SHOPS.goodEnc(a.id);
        } else if (order === ShopSortOrder.PRICE) {
            difference = b.price - a.price;
        }
        return difference !== 0 ? difference : byName(a, b);
    });
};
// #endregion === SORTING === //

// #region ====== TEXTS === //
TEW.MENU.COMMAND_NAMES = TEW.MENU.COMMAND_NAMES || {};
TEW.MENU.COMMAND_NAMES[97] = "Buy";
TEW.MENU.COMMAND_NAMES[98] = "Sell";
TEW.MENU.COMMAND_NAMES[99] = "Sort";
TEW.MENU.COMMAND_NAMES[100] = "Name";
TEW.MENU.COMMAND_NAMES[101] = "Weight";
TEW.MENU.COMMAND_NAMES[102] = "Price";
TEW.MENU.COMMAND_NAMES[103] = "Purse";
TEW.MENU.COMMAND_NAMES[104] = "Price";
TEW.MENU.COMMAND_NAMES[105] = "Offer";
TEW.MENU.COMMAND_NAMES[106] = "In stock";
TEW.MENU.COMMAND_NAMES[107] = "Owned";
TEW.MENU.COMMAND_NAMES[108] = "Group";
TEW.MENU.COMMAND_NAMES[109] = "Enc.";
TEW.MENU.COMMAND_NAMES[110] = "Total";

Object.defineProperties(TextManager, {
    shopBuy :               TextManager.getter('command', 97),
    shopSell :              TextManager.getter('command', 98),
    shopSort :              TextManager.getter('command', 99),
    shopSortName :          TextManager.getter('command', 100),
    shopSortWeight :        TextManager.getter('command', 101),
    shopSortPrice :         TextManager.getter('command', 102),
    shopMoney :             TextManager.getter('command', 103),
    shopBuyPrice :          TextManager.getter('command', 104),
    shopSellPrice :         TextManager.getter('command', 105),
    shopStock :             TextManager.getter('command', 106),
    shopOwned :             TextManager.getter('command', 107),
    shopGroup :             TextManager.getter('command', 108),
    shopEnc :               TextManager.getter('command', 109),
    shopTotal :             TextManager.getter('command', 110),
});
// #endregion === TEXTS === //
