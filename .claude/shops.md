# Shops

## Description

### Shopping

By interacting with specific NPCs in overworld maps, the player can access the shopping interface, where they can buy items that depend on the NPC, and sell any items in the party's inventories that are not equipped.
Those items are exchanged against money, which is a party-wide resource. Money in Warhammer fantasy has three units: gold coins, equal to 20 silver coins, equal to 12 copper coins. In our codebase, everything is computed in copper coins, then converted to human-readable values in menus.

### Haggling

When first interacting with a merchant NPC, the player's team makes a Haggle test using the higher skill value in the team. This test is opposed with the Haggle skill of the merchant. If the player wins, all prices are ten percent better (items cheaper to buy and more expensive to sell). If the player scores a critical succes, all prices are twenty percent better. If the player scores a critical failure, all prices are ten percent worse. If the player loses with no critical, nothing happens.

### Rare items

Some items are limited, meaning the player can only buy it a couple of times. The number of potential purchases is written in the TEW_Shop.ts, which will be detailed later. When the player purchases a limited item, it should be saved in the game saves.
A merchant will not always have its entire stock available: rare and exotic items will depend on dice rolls.


## Plan

### Interface

The shopping menu will have a similar layout to the inventory menus, but with only two tabs in the topbar: Buy and Sell.
Buying will display all items sold by the merchant in the list on the left, with their icon, name and available quantity. On the right, the item's details will be displayed, with the same information as in the inventory, plus the actual price (with haggling taken into account). The bottom-left command window is not needed in this menu, so the list of items will extend to the bottom of the page (HalfWindow_List).
Selling will display the same layout, with a list of all non-equipped items in the party's inventory (weapons, armors, items and ammunition all together).

When an item is confirmed, a confirmation window will open with a spinner to choose the quantity to buy/sell (similar to the transfer command in inventory windows).

When an item is bought, it will be stored in the leader character's inventory.

### Current gold

The topbar will have an indicator of the money currently owned by the party, displayed in readable format (G, S and C for gold, silver, copper coins).

### Sorting

The topbar will have another indicator on the left showing the current sort order of items: alphabetical, by highest weight or by highest price. The S key will cycle through the sort orders.

### Database

As every constants in our game, they will be put in the new file `src/plugins/constants/TEW_Shops`. This file will contain the constant `TEW.DATABASE.SHOPS.SET`, which contains every shop description, following this structure :
```json
{
    NPC_ID: {
        multiplier: number;
        items: {
            id: string;
            quantity: number;
        }[];
    }
}
```
The NPC_ID will be one from TEW_Npc.ts, and the item IDs will be from TEW_Items.ts.
The multiplier is a percentage applied to all buying/selling prices: a city merchant will sell more expensive items but also buy at higher prices.

### Command

We need the Game_Interpreter's command302 to link to this new menu.
The haggling modifier for the current shop (as a percentage increase/decrease) will be stored in game variable #18, which can be read in the command's code.
