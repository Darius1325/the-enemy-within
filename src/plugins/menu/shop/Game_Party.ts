// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Game_Party.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: Party-wide shopping data: each merchant's haggling result, rolled stock and limited purchases are stored in $gameParty to be saved, and the party's unequipped goods can be listed and removed for selling.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { MerchantState, ShopItem } from "../../_types/shop";
import { Game_Actor } from "../../base/stats/Game_Actor";
import { ActorWeapon } from "../../base/stats/Game_BattlerBase";

/** Units carried by the party, by good ID (IDs are unique across the sellable databases) */
export type PartyGoods = Record<string, number>;

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Game_Party
//
// Merchants progression, created lazily so older saves stay compatible

// #region ====== MERCHANTS === //
Game_Party.prototype.merchantState = function(npcId: string): MerchantState {
    if (!this._merchants) {
        this._merchants = {};
    }
    if (!this._merchants[npcId]) {
        this._merchants[npcId] = TEW.SHOPS.newMerchantState();
    }
    return this._merchants[npcId];
};

Game_Party.prototype.hasHaggledWith = function(npcId: string) {
    const haggle = this.merchantState(npcId).haggle;
    return haggle !== null && haggle !== undefined;
};

Game_Party.prototype.merchantHaggle = function(npcId: string) {
    return this.merchantState(npcId).haggle || 0;
};

Game_Party.prototype.setMerchantHaggle = function(npcId: string, haggle: number) {
    this.merchantState(npcId).haggle = haggle;
};

// Units of a good already bought from a merchant
Game_Party.prototype.merchantPurchases = function(npcId: string, shopItem: ShopItem) {
    return this.merchantState(npcId).purchases[shopItem.id] || 0;
};

Game_Party.prototype.addMerchantPurchase = function(npcId: string, shopItem: ShopItem, quantity: number) {
    const purchases = this.merchantState(npcId).purchases;
    purchases[shopItem.id] = (purchases[shopItem.id] || 0) + quantity;
};

// Units of a good the merchant can still sell, negative if unlimited
Game_Party.prototype.merchantRemaining = function(npcId: string, shopItem: ShopItem) {
    if (shopItem.quantity < 0) {
        return TEW.SHOPS.UNLIMITED;
    }
    return Math.max(0, shopItem.quantity - this.merchantPurchases(npcId, shopItem));
};

// Rare and exotic goods are rolled once per merchant, the result being saved
Game_Party.prototype.isInMerchantStock = function(npcId: string, shopItem: ShopItem) {
    const data = TEW.SHOPS.goodData(shopItem.id);
    if (!data) {
        return false;
    }
    const chance = TEW.SHOPS.AVAILABILITY_CHANCES[data.availability];
    if (chance === undefined || chance >= 100) {
        return true;
    }
    const stock = this.merchantState(npcId).stock;
    if (stock[shopItem.id] === undefined) {
        stock[shopItem.id] = TEW.DICE.roll() <= chance;
    }
    return stock[shopItem.id];
};
// #endregion === MERCHANTS === //

// #region ====== PARTY GOODS === //
Game_Party.prototype.shopActors = function(): Game_Actor[] {
    return this.allMembers();
};

// Every good carried by the party (items, ammunition, weapons and armors together)
// unequippedOnly: whether equipped weapons and armors are left out
Game_Party.prototype.goodsCount = function(unequippedOnly: boolean): PartyGoods {
    const goods: PartyGoods = {};
    const add = (id: string, quantity: number) => {
        goods[id] = (goods[id] || 0) + quantity;
    };
    this.shopActors().forEach((actor: Game_Actor) => {
        Object.keys(actor._items).forEach((id: string) => {
            add(id, actor.item(id));
        });
        Object.keys(actor._ammo).forEach((id: string) => {
            add(id, actor.ammo(id));
        });
        actor._weapons.forEach((weapon: ActorWeapon) => {
            if (!unequippedOnly || (!weapon.isInMainHand && !weapon.isInSecondHand)) {
                add(weapon.id, 1);
            }
        });
        actor._armors.forEach((id: string) => {
            add(id, 1);
        });
        if (!unequippedOnly) {
            actor._equippedArmors.forEach((id: string) => {
                add(id, 1);
            });
        }
    });
    return goods;
};

// Units of a good carried by the party
Game_Party.prototype.goodCount = function(id: string, unequippedOnly: boolean) {
    return this.goodsCount(unequippedOnly)[id] || 0;
};

// Giving bought goods to the leader, in the inventory matching the good's database
Game_Party.prototype.addGood = function(id: string, quantity: number) {
    const leader: Game_Actor = this.leader();
    if (TEW.SHOPS.isWeapon(id)) {
        for (let i = 0; i < quantity; i++) {
            leader.addWeapon(id);
        }
    } else if (TEW.SHOPS.isArmor(id)) {
        for (let i = 0; i < quantity; i++) {
            leader.addArmor(id);
        }
    } else if (TEW.SHOPS.isAmmo(id)) {
        leader.addAmmo(id, quantity);
    } else {
        leader.addItem(id, quantity);
    }
};

// Removing unequipped goods from the party, starting with the leader
Game_Party.prototype.removeUnequippedGood = function(id: string, quantity: number) {
    let left = quantity;
    const actors: Game_Actor[] = this.shopActors();
    const isUnequipped = (weapon: ActorWeapon) =>
        weapon.id === id && !weapon.isInMainHand && !weapon.isInSecondHand;
    for (let i = 0; i < actors.length && left > 0; i++) {
        const actor = actors[i];
        if (TEW.SHOPS.isWeapon(id)) {
            let index = actor._weapons.findIndex(isUnequipped);
            while (index >= 0 && left > 0) {
                actor.removeWeapon(index);
                left--;
                index = actor._weapons.findIndex(isUnequipped);
            }
        } else if (TEW.SHOPS.isArmor(id)) {
            while (actor.hasArmorTEW(id) && left > 0) {
                actor.removeArmor(id);
                left--;
            }
        } else if (TEW.SHOPS.isAmmo(id)) {
            const removed = Math.min(actor.ammo(id), left);
            if (removed > 0) {
                actor.removeAmmo(id, removed);
                left -= removed;
            }
        } else {
            const removed = Math.min(actor.item(id), left);
            if (removed > 0) {
                actor.removeItem(id, removed);
                left -= removed;
            }
        }
    }
    return quantity - left;
};
// #endregion === PARTY GOODS === //
