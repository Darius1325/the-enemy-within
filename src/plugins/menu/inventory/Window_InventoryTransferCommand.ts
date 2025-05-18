// $PluginCompiler TEW_Menus.js 10

import TEW from "../../types/tew";
import { Game_Actor } from "../../base/stats/Game_Actor";
import { ActorWeapon } from "../../base/stats/Game_BattlerBase";

type Removable = number | string;

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

// Initializing the command window
Window_InventoryTransferCommand.prototype.initialize = function() {
    this._windowWidth = Graphics.boxWidth / 4;
    this._windowHeight = this.fittingHeight(5); // actor count - 1
    this.type = 'item';
    this._addAction = Game_Actor.prototype.addItem;
    this._removeAction = Game_Actor.prototype.removeItem;
    Window_Command.prototype.initialize.call(
        this,
        this._windowWidth * 3,
        Graphics.boxHeight - this._windowHeight);
};

Window_InventoryTransferCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

Window_InventoryTransferCommand.prototype.windowHeight = function() {
    return this._windowHeight;
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
        case 'item':
            this._addAction = Game_Actor.prototype.addItem;
            this._removeAction = Game_Actor.prototype.removeItem;
            break;
        case 'weapon':
            this._addAction = Game_Actor.prototype.transferWeapon;
            this._removeAction = Game_Actor.prototype.removeWeapon;
            break;
        case 'armor':
            this._addAction = Game_Actor.prototype.addArmor;
            this._removeAction = Game_Actor.prototype.removeArmor;
            break;
        case 'ammo':
            this._addAction = Game_Actor.prototype.addAmmo;
            this._removeAction = Game_Actor.prototype.removeAmmo;
            break;
        default:
            break;
    }
}

Window_InventoryTransferCommand.prototype.doTransfer = function(targetActor: Game_Actor, item: Removable) {
    console.log("this should work if I was good at coding");
    const removed: ActorWeapon | string = this._removeAction.call(this._actor, item);
    this._addAction.call(targetActor, removed);
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
