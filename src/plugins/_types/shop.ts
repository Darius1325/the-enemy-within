// ----------------------

// File: shop.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: This file contains the type definitions for the shops. A shop is attached to a merchant NPC and describes the goods sold, their limited quantities and the merchant's price multiplier.

// ----------------------
// Imports
// ----------------------

import { Ammunition } from "./ammunition";
import { Armor } from "./armor";
import { Item } from "./item";
import { MeleeWeapon } from "./meleeWeapon";
import { RangedWeapon } from "./rangedWeapon";

/**
 * Goods sold by a merchant
 */
export type ShopItem = {
    /**
     * ID of the sold good, from any sellable database: items, weapons (melee or ranged), armors or ammunition
     * IDs are unique across these databases, so the ID alone tells which one it belongs to
     * @example "BOOTS"
     */
    id: string;
    /**
     * Number of times the good can be bought from this merchant (saved in the game saves)
     * A negative value (TEW.SHOPS.UNLIMITED) means the good can be bought without limit
     * @example 2
     */
    quantity: number;
};

/**
 * Shop object type
 */
export type Shop = {
    /**
     * Percentage applied to every buying and selling price of this merchant
     * @example 120 (city merchant: 20% more expensive, but buys at a higher price)
     */
    multiplier: number;
    /**
     * Goods sold by the merchant
     */
    items: ShopItem[];
};

/**
 * Any good which can be traded
 */
export type ShopGood = Item | MeleeWeapon | RangedWeapon | Armor | Ammunition;

/**
 * A line of the shop lists, computed when opening the menu
 */
export type ShopEntry = {
    /** ID in the good's database */
    id: string;
    /** Good data from its database */
    data: ShopGood;
    /** Buy: remaining purchases (negative if unlimited) ; Sell: unequipped units owned by the party */
    quantity: number;
    /** Units owned by the whole party, equipped or not */
    owned: number;
    /** Unit price with the merchant's multiplier and the haggling modifier, in copper coins */
    price: number;
};

/**
 * Merchant progression, stored in $gameParty to be saved
 */
export type MerchantState = {
    /** Haggling modifier won against this merchant (percentage), null until the first visit */
    haggle: number | null;
    /** Units bought from the merchant, by good ID */
    purchases: Record<string, number>;
    /** Whether a rare or exotic good passed its availability roll, by good ID */
    stock: Record<string, boolean>;
};
