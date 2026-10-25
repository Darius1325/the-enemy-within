# Shops: implementation summary

This covers the shopping menu described in `.claude/shops.md`. Everything is in `./src`. The compiled `js/plugins/TEW/*.js` files were **not** touched, so run `src/plugin_compiler.sh` before testing in RPG Maker.

## How to use it in an event

1. Set **game variable #17** to the merchant's NPC ID, using a *Script* command or a *Control Variables* script operand: `$gameVariables.setValue(17, 'GUSTAV_FONDLEBURGER')`. This works like #14 *Current battle ID* for battles.
2. Add a **Shop Processing** command. The goods picked in the editor are ignored, because the shop's content comes from `TEW.DATABASE.SHOPS.SET`. The *Purchase Only* checkbox still works and disables the Sell tab.

On the first visit to a merchant, command302 rolls the Haggle test and waits 2 seconds so the dice can be seen, then opens the menu. The result is saved, so later visits do not roll again. Before opening, the command writes that merchant's modifier into **game variable #18**, and the scene reads its prices from there.

`Game_Interpreter.prototype.haggle(npcId)` can also be called from a script, for example to show a dialogue line about the haggling result before opening the shop. It returns the modifier, sets #18, and only rolls once per merchant.

I'd suggest naming variables #17 *Current merchant ID* and #18 *Haggle modifier* in the editor. I didn't edit `data/System.json`.

## Database: `src/plugins/constants/TEW_Shops.ts`

```ts
TEW.DATABASE.SHOPS.SET = {
    NPC_ID: {
        multiplier: 100,                                      // % applied to all buy/sell prices
        items: [
            { id: "BOOTS", quantity: -1 },                    // -1 = unlimited
            { id: "SIGNET_RING", quantity: 1 },               // limited, purchases are saved
            { id: "DAGGER", quantity: -1 }                    // weapons, armors and ammo work the same way
        ]
    }
};
```

An `id` can come from any sellable database: items, melee or ranged weapons, armors or ammo. IDs are unique across these databases, so the ID alone tells the shop which inventory a bought good goes into. `TEW.SHOPS.duplicateIds()` checks this when the menus load and logs a console warning if two databases ever share an ID.

The only shop in there is a **placeholder** on `GUSTAV_FONDLEBURGER` that I used for testing. It sells items, a weapon, an armor and ammo, with limited, rare and exotic entries.

## Rules as implemented

| Rule | Implementation |
|---|---|
| Money | Everything is in copper (`$gameParty.gold()`). It is shown as `1G 4S 6C` (1G = 20S = 240C) by `TEW.SHOPS.formatMoney`. Zero parts are left out. |
| Haggling | The party's best `compWithModifiers('HAGGLE')` is opposed to the NPC's FELW + HAGGLE advances with `TEW.DICE.opposedTest`. Win: +10%. Win with a critical: +20%. Loss with a critical: −10%. Plain loss: 0. |
| Buy price | `round(unitPrice × multiplier% × (100 − haggle)%)`, with a minimum of 1C. |
| Sell price | `floor(unitPrice × 50% × multiplier% × (100 + haggle)%)`, with a minimum of 1C and capped at that merchant's buy price so buying and reselling can never make a profit. |
| Unit price | Items are priced per batch of `nb` and ammo per `ammountSold` (Arrow: 60C for 12), so each unit costs `price / batch`. |
| Limited goods | `quantity` = how many times the good can be bought. Purchases are saved per merchant in `$gameParty._merchants`. Sold-out goods stay listed, greyed out, with a quantity of 0. |
| Rare / exotic stock | A d100 roll per good on the first visit: RARE 30%, EXOTIC 10%. COMMON and SCARCE are always in stock. The roll is saved, so the stock doesn't change between visits. |
| Buying | Goods go to the leader's inventory, as weapons, armors, ammo or items. Goods are greyed out when the party can't afford one unit. |
| Selling | Lists everything unequipped across the whole party: weapons not in either hand, unequipped armors, items and ammo. Units are taken from the leader first, then the other members. Worthless goods (price 0, such as quest items or UNARMED) are left out. |
| Sorting | The **S** key cycles Name → Weight (highest enc. first) → Price (highest first). The cursor follows the selected good. |

All tuning values are in `src/plugins/menu/shop/properties.ts`, under `TEW.SHOPS.*`: the variable IDs, haggle percentages, `SELL_RATIO`, availability chances, the sort key, `MAX_TRANSACTION` (99) and the labels.

## Interface

The layout copies the inventory:
- **Topbar:** the sort indicator *Sort (S): Name* on the left, then the *Buy* and *Sell* tabs, then *Purse: 5G 7S 3C* on the right.
- **Left:** the list, at full height with no command window. Each line shows the icon, the name and the quantity (∞ when unlimited).
- **Right:** the details. They show the same fields as the inventory plus the actual price, which is *Price* when buying and *Offer* when selling. Stock and party-owned counts are also shown.
- **Confirming a good** opens a spinner window with the good's name, the quantity (up/down ±1, left/right ±10) and the total.
- **Navigation:** Left/right switches tabs. OK enters the list. Cancel goes back to the topbar, and cancel on the topbar closes the shop.

Window sizes and backgrounds are set in `menu/shop/backgrounds.ts`. The windows reuse existing images: `bg_menuTopbarCommands`, `bg_menuHalfWindowFullHeight` and `bg_inventoryTransferCommand`.

## Files

New:
- `src/plugins/_types/shop.ts`: types for `Shop`, `ShopItem`, `ShopEntry` and `MerchantState`
- `src/plugins/constants/TEW_Shops.ts`: the shop database
- `src/plugins/menu/shop/properties.ts`: constants, price and money helpers, texts (command IDs 97–110), the S key mapping
- `src/plugins/menu/shop/Game_Party.ts`: saved merchant state (haggle, purchases, stock rolls), counting party goods, and adding and removing them
- `src/plugins/menu/shop/Game_Interpreter.ts`: `haggle`, `merchantHaggleValue` and the rewritten `command302`
- `src/plugins/menu/shop/Scene_Shop.ts`: overrides RMMV's `Scene_Shop`
- `src/plugins/menu/shop/Window_ShopTopbar.ts`, `Window_ShopList.ts`, `Window_ShopDetails.ts`, `Window_ShopSpinner.ts`
- `src/plugins/menu/shop/backgrounds.ts`

Modified:
- `src/plugins/_types/enum.ts`: added `ShopSortOrder` and `ShopMode`
- `src/plugins/_types/tew.ts`: added `TEW.DATABASE.SHOPS` and `TEW.SHOPS`
- `src/plugins/_types/extensions.d.ts`: declared `Scene_Shop` as a global

Merchant state is created lazily, so older save files load without problems.

## Testing done

- `tsc` type-checks with no errors.
- The output of `plugin_compiler.sh` passes `node --check`.
- I loaded the compiled plugins into the real game page in headless Chromium, using the project's data and images, and drove it with the keyboard and with scripts. Results:
  - The first visit rolls the haggle (a critical loss gave −10%) and later visits don't roll again.
  - Prices match the formulas.
  - Limited goods run out and grey out.
  - Weapon, armor, ammo and item purchases end up in the leader's inventory.
  - Equipped weapons and armors are never offered for sale.
  - Selling everything returns the cursor to the topbar.
  - Purchase Only disables selling.
  - Sorting works.
  - Merchant state survives a save/load round-trip.
  - A missing merchant ID logs a warning and skips the command.

## Questions

1. **Merchant ID source.** The spec only mentions #18, so I read the NPC ID from **variable #17**. Is that OK, or would you rather use something else, such as an event note tag (`<Merchant:NPC_ID>`) or a plugin command?
2. **Sell ratio.** The spec doesn't say what merchants pay. I used **50%** of the price, which is the usual WFRP rule. Should it be something else? Note that 100% would let the player profit from buying and reselling at another merchant.
3. **Availability chances.** I used RARE 30% and EXOTIC 10%, with COMMON and SCARCE always in stock. Should SCARCE also be rolled, and should chances depend on settlement size (village, town, city) as in the WFRP rulebook?
4. **When stock is rolled.** Stock is rolled once per merchant and saved. Should it be rolled again later, for example per chapter, after some in-game time, or through an event call?
5. **"Critical failure" when haggling.** I treat **losing** the opposed test while rolling a double as a critical failure (−10%), even if the player's own roll passed. Should it only count when the player's own roll fails?
6. **Automatic haggling.** command302 rolls the haggle automatically on the first visit. Would you rather have events always call `haggle()` themselves, for dialogue, and have command302 only read #18?
7. **Batches.** Items with `nb > 1` and ammo are sold per unit (`price / batch`). Would you rather sell by batch (12 arrows at a time) to match the books?
8. **Main menu gold window.** It still shows the raw copper value with the system currency unit. Should it use the same `G S C` format?
9. **∞ label.** The ∞ symbol renders correctly with mplus-1m. Do you want to keep it, or use a word or a dash instead?
