// $PluginCompiler TEW_Menus.js 101

// ----------------------

// File: Scene_Shop.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 24/10/2026
// Description: Shop menu scene, replacing RMMV's. It is laid out like the inventory: a topbar with the Buy and Sell tabs, a list of goods on the left and the selected good's details on the right. Confirming a good opens a spinner to choose the quantity to trade.

// ----------------------
// Imports
// ----------------------

import TEW from "../../_types/tew";
import { Sprite } from "../../../rmmv/core/Sprite";
import { ShopMode, ShopSortOrder } from "../../_types/enum";
import { Shop, ShopEntry, ShopItem } from "../../_types/shop";
import Window_ShopTopbar, { IWindow_ShopTopbar } from "./Window_ShopTopbar";
import Window_ShopList, { IWindow_ShopList } from "./Window_ShopList";
import Window_ShopDetails, { IWindow_ShopDetails } from "./Window_ShopDetails";
import Window_ShopSpinner, { IWindow_ShopSpinner } from "./Window_ShopSpinner";

export interface IScene_Shop {
    _npcId: string;
    _shop: Shop;
    _haggle: number;
    _purchaseOnly: boolean;
    _sortOrder: ShopSortOrder;

    _topbarWindow: IWindow_ShopTopbar;
    _listWindow: IWindow_ShopList;
    _detailsWindow: IWindow_ShopDetails;
    _spinnerWindow: IWindow_ShopSpinner;
};

// ----------------------
// $StartCompilation
// ----------------------

//-----------------------------------------------------------------------------
// Scene_Shop (override)
//
// The scene class of the shop screen.

/**
 * Preparing the scene, called through SceneManager.prepareNextScene
 * @param npcId merchant's ID, key of TEW.DATABASE.SHOPS.SET
 * @param haggle haggling modifier (percentage, positive in the player's favour)
 * @param purchaseOnly whether the Sell tab is disabled
 */
Scene_Shop.prototype.prepare = function(npcId: string, haggle = 0, purchaseOnly = false) {
    this._npcId = npcId;
    this._shop = TEW.DATABASE.SHOPS.SET[npcId] || { multiplier: 100, items: [] };
    this._haggle = Number(haggle) || 0;
    this._purchaseOnly = !!purchaseOnly;
    this._sortOrder = TEW.SHOPS.SORT_ORDERS[0];
};

Scene_Shop.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createTopbarWindow();
    this.createListWindow();
    this.createDetailsWindow();
    this.createSpinnerWindow();
    this.displayWindow();
};

Scene_Shop.prototype.addFullscreenBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem('bg_fullscreen'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

// Watching the sort input key
Scene_Shop.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
    this.updateSortToggle();
};

// #region ====== Windows creation === //
Scene_Shop.prototype.createTopbarWindow = function() {
    this._topbarWindow = new Window_ShopTopbar(0, 0, this._purchaseOnly);
    this._topbarWindow.setHandler('cancel', this.popScene.bind(this));
    this._topbarWindow.setHandler('right', this.displayWindow.bind(this));
    this._topbarWindow.setHandler('left', this.displayWindow.bind(this));
    this._topbarWindow.setHandler('shop_buy', this.activateList.bind(this));
    this._topbarWindow.setHandler('shop_sell', this.activateList.bind(this));
    this.addWindow(this._topbarWindow);
};

Scene_Shop.prototype.createListWindow = function() {
    this._listWindow = new Window_ShopList();
    this._listWindow.setEnabledChecker(this.isEntryEnabled.bind(this));
    this._listWindow.setHandler('ok', this.onListOk.bind(this));
    this._listWindow.setHandler('cancel', this.onListCancel.bind(this));
    this._listWindow.setHandler('show_details', this.showDetails.bind(this));
    this.addWindow(this._listWindow);
};

Scene_Shop.prototype.createDetailsWindow = function() {
    this._detailsWindow = new Window_ShopDetails();
    this.addWindow(this._detailsWindow);
};

Scene_Shop.prototype.createSpinnerWindow = function() {
    this._spinnerWindow = new Window_ShopSpinner();
    this._spinnerWindow.setHandler('ok', this.onSpinnerOk.bind(this));
    this._spinnerWindow.setHandler('cancel', this.onSpinnerCancel.bind(this));
    this.addWindow(this._spinnerWindow);
};
// #endregion === Windows creation === //

// #region ====== Entries === //
Scene_Shop.prototype.mode = function() {
    return this._topbarWindow.mode();
};

// Goods of the merchant which are in stock (unknown IDs are left out)
Scene_Shop.prototype.makeBuyEntries = function(): ShopEntry[] {
    const owned = $gameParty.goodsCount(false);
    return this._shop.items
        .filter((shopItem: ShopItem) => $gameParty.isInMerchantStock(this._npcId, shopItem))
        .map((shopItem: ShopItem) => {
            return {
                id: shopItem.id,
                data: TEW.SHOPS.goodData(shopItem.id),
                quantity: $gameParty.merchantRemaining(this._npcId, shopItem),
                owned: owned[shopItem.id] || 0,
                price: TEW.SHOPS.buyPrice(TEW.SHOPS.unitPrice(shopItem.id), this._shop.multiplier, this._haggle)
            };
        });
};

// Unequipped goods of the whole party, worthless ones excepted
Scene_Shop.prototype.makeSellEntries = function(): ShopEntry[] {
    const unequipped = $gameParty.goodsCount(true);
    const owned = $gameParty.goodsCount(false);
    const entries: ShopEntry[] = [];
    Object.keys(unequipped).forEach((id: string) => {
        const data = TEW.SHOPS.goodData(id);
        const quantity = unequipped[id];
        if (!data || quantity <= 0) {
            return;
        }
        const price = TEW.SHOPS.sellPrice(TEW.SHOPS.unitPrice(id), this._shop.multiplier, this._haggle);
        if (price > 0) {
            entries.push({
                id: id,
                data: data,
                quantity: quantity,
                owned: owned[id] || 0,
                price: price
            });
        }
    });
    return entries;
};

// Rebuilding the list, keeping the cursor on the same good if it is still listed
Scene_Shop.prototype.refreshEntries = function() {
    const previous: ShopEntry = this._listWindow.index() >= 0 ? this._listWindow.item() : null;
    const entries = this.mode() === ShopMode.SELL ? this.makeSellEntries() : this.makeBuyEntries();
    this._listWindow.setEntries(TEW.SHOPS.sortEntries(entries, this._sortOrder));
    if (previous && this._listWindow.index() >= 0) {
        const index = this._listWindow.indexOfEntry(previous);
        this._listWindow.select(index >= 0 ? index : Math.min(this._listWindow.index(), entries.length - 1));
    }
    this._topbarWindow.refresh();
};

// Max units of a good which can be traded at once
Scene_Shop.prototype.maxQuantity = function(entry: ShopEntry) {
    let max = TEW.SHOPS.MAX_TRANSACTION;
    if (this.mode() === ShopMode.SELL) {
        return Math.min(max, entry.quantity);
    }
    if (entry.quantity >= 0) {
        max = Math.min(max, entry.quantity);
    }
    if (entry.price > 0) {
        max = Math.min(max, Math.floor($gameParty.gold() / entry.price));
    }
    return max;
};

Scene_Shop.prototype.isEntryEnabled = function(entry: ShopEntry) {
    if (this.mode() === ShopMode.SELL && this._purchaseOnly) {
        return false;
    }
    return this.maxQuantity(entry) > 0;
};
// #endregion === Entries === //

// #region ====== Navigation === //
// Showing the list matching the topbar's current tab
Scene_Shop.prototype.displayWindow = function() {
    this._spinnerWindow.hide();
    this._spinnerWindow.deactivate();
    this._listWindow.deactivate();
    this._listWindow.deselect();
    this.refreshEntries();
    this._detailsWindow.empty();
    this._topbarWindow.activate();
};

Scene_Shop.prototype.activateList = function(index = 0) {
    const nbEntries = this._listWindow.maxItems();
    if (nbEntries > 0) {
        this._topbarWindow.deactivate();
        this._listWindow.activate();
        this._listWindow.select(Math.max(0, Math.min(index, nbEntries - 1)));
    } else {
        this.displayWindow();
    }
};

Scene_Shop.prototype.showDetails = function() {
    const entry = this._listWindow.item();
    if (entry) {
        this._detailsWindow.setEntry(entry, this.mode());
    } else {
        this._detailsWindow.empty();
    }
};

Scene_Shop.prototype.onListOk = function() {
    const entry: ShopEntry = this._listWindow.item();
    this._spinnerWindow.setEntry(entry, this.maxQuantity(entry));
    this._spinnerWindow.start();
};

Scene_Shop.prototype.onListCancel = function() {
    this.displayWindow();
};

Scene_Shop.prototype.onSpinnerOk = function() {
    const entry: ShopEntry = this._listWindow.item();
    const quantity = this._spinnerWindow.number();
    if (this.mode() === ShopMode.SELL) {
        this.doSell(entry, quantity);
    } else {
        this.doBuy(entry, quantity);
    }
    this.closeSpinner();
};

Scene_Shop.prototype.onSpinnerCancel = function() {
    this.closeSpinner();
};

Scene_Shop.prototype.closeSpinner = function() {
    this._spinnerWindow.hide();
    this._spinnerWindow.deactivate();
    this.refreshEntries();
    this.activateList(this._listWindow.index());
};

// Cycling through sort orders, unless a transaction is being confirmed
Scene_Shop.prototype.updateSortToggle = function() {
    if (Input.isTriggered(TEW.SHOPS.SORT_KEY) && !this._spinnerWindow.active) {
        SoundManager.playCursor();
        const orders = TEW.SHOPS.SORT_ORDERS;
        this._sortOrder = orders[(orders.indexOf(this._sortOrder) + 1) % orders.length];
        this._topbarWindow.setSortOrder(this._sortOrder);
        this.refreshEntries();
    }
};
// #endregion === Navigation === //

// #region ====== Transactions === //
// Bought goods go to the leader's inventory
Scene_Shop.prototype.doBuy = function(entry: ShopEntry, quantity: number) {
    const shopItem: ShopItem = this._shop.items.find((item: ShopItem) => item.id === entry.id);
    $gameParty.loseGold(entry.price * quantity);
    $gameParty.addGood(entry.id, quantity);
    if (shopItem && shopItem.quantity >= 0) {
        $gameParty.addMerchantPurchase(this._npcId, shopItem, quantity);
    }
    SoundManager.playShop();
};

// Sold goods are taken from the party's unequipped goods
Scene_Shop.prototype.doSell = function(entry: ShopEntry, quantity: number) {
    const sold = $gameParty.removeUnequippedGood(entry.id, quantity);
    $gameParty.gainGold(entry.price * sold);
    SoundManager.playShop();
};
// #endregion === Transactions === //
