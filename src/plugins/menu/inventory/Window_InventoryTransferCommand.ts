// $PluginCompiler TEW_Menus.js 10

import TEW from "../../_types/tew";
import { Game_Actor } from "../../base/stats/Game_Actor";
import { ActorWeapon } from "../../base/stats/Game_BattlerBase";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryTransferCommand
//
// Command window to choose which actor to transfer an item to

function Window_InventoryTransferCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryTransferCommand.prototype = Object.create(Window_Command.prototype);
Window_InventoryTransferCommand.prototype.constructor = Window_InventoryTransferCommand;

Window_InventoryTransferCommand.ITEM = 'item';
Window_InventoryTransferCommand.WEAPON = 'weapon';
Window_InventoryTransferCommand.ARMOR = 'armor';
Window_InventoryTransferCommand.AMMO = 'ammo';

Window_InventoryTransferCommand.LEFT_X = 300;
Window_InventoryTransferCommand.TOP_Y = 500;

// Initializing the command window
Window_InventoryTransferCommand.prototype.initialize = function() {
    this.type = 'item';
    this.item = '';
    this.targetActor = undefined;
    this._addAction = Game_Actor.prototype.addItem;
    this._removeAction = Game_Actor.prototype.removeItem;
    Window_Command.prototype.initialize.call(this,
        Window_InventoryTransferCommand.LEFT_X,
        Window_InventoryTransferCommand.TOP_Y);
};

Window_InventoryTransferCommand.prototype.setActor = function(actor: Game_Actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.makeCommandList();
    }
};

Window_InventoryTransferCommand.prototype.setItemType = function(type: string) {
    this.type = type;
    switch (type) {
        case Window_InventoryTransferCommand.ITEM:
            this._addAction = Game_Actor.prototype.addItem;
            this._removeAction = Game_Actor.prototype.removeItem;
            break;
        case Window_InventoryTransferCommand.WEAPON:
            this._addAction = Game_Actor.prototype.transferWeapon;
            this._removeAction = Game_Actor.prototype.removeWeapon;
            break;
        case Window_InventoryTransferCommand.ARMOR:
            this._addAction = Game_Actor.prototype.addArmor;
            this._removeAction = Game_Actor.prototype.removeArmor;
            break;
        case Window_InventoryTransferCommand.AMMO:
            this._addAction = Game_Actor.prototype.addAmmo;
            this._removeAction = Game_Actor.prototype.removeAmmo;
            break;
        default:
            break;
    }
}

Window_InventoryTransferCommand.prototype.doTransfer = function(quantity = 1) {
    const removed: ActorWeapon | string = this._removeAction.call(this._actor, this.item, quantity);
    this._addAction.call(this.targetActor, removed, quantity);
}

Window_InventoryTransferCommand.prototype.makeCommandList = function() {
    if (this._actor != undefined) {
        for (let i = 1; i < $gameActors._data.length; i++) {
            const targetName = TEW.CHARACTERS.ARRAY[i-1];
            if (targetName !== this._actor._name) {
                this.addCommand(TextManager["inventoryTransferTo" + (i-1)], "inventory_transfer_to_" + (i-1));
            }
        }
        Window_Selectable.prototype.refresh.call(this);
    }
}
