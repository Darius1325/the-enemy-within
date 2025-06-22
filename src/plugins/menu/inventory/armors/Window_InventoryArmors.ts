// $PluginCompiler TEW_Menus.js

import TEW from "../../../types/tew";
import HalfWindow_List, { IHalfWindow_List } from "../../base/HalfWindow_List";
import { Game_Actor } from "../../../base/stats/Game_Actor";
import { Armor } from "../../../types/armor";

type DisplayedArmor = [string, Armor & { equipped: boolean }];

export interface IWindow_InventoryArmors extends IHalfWindow_List {
    _armors: [string, Armor][];
    _equippedArmors: [string, Armor][];
    _stayCount: number;

    syncActor: () => void;
    drawAllItems: () => void;
    drawItem: (index: number) => void;
    length: () => number;
    items: () => DisplayedArmor[];
    armorFromIndex: (index: number) => DisplayedArmor;
    item: () => DisplayedArmor;
    select: (index: number) => void;
    processOk: () => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryArmors
//
// Armor list window

function Window_InventoryArmors() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryArmors.prototype = Object.create(HalfWindow_List.prototype);
Window_InventoryArmors.prototype.constructor = Window_InventoryArmors;

Window_InventoryArmors.prototype.initialize = function() {
    HalfWindow_List.prototype.initialize.call(this);
};

Window_InventoryArmors.prototype.setActor = function(actor: Game_Actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor(actor);
    }
};

Window_InventoryArmors.prototype.syncActor = function() {
    this._armors = [];
    this._equippedArmors = [];

    this._actor.equippedArmors.forEach((armor: string) => {
        this._equippedArmors.push(TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armor));
    });
    this._actor.armors.forEach((armor: string) => {
        this._armors.push(TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armor));
    });

    console.log(this._equippedArmors);
    console.log(this._armors);

    this._maxItems = this._armors.length + this._equippedArmors.length;
    this.refresh();
};

Window_InventoryArmors.prototype.drawAllItems = function() {
    const topIndex = this.topIndex();
    for (let i = 0; i < this.maxPageItems(); i++) {
        const index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_InventoryArmors.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;

    const armor: DisplayedArmor = this.armorFromIndex(index);

    if (armor) {
        this.changeTextColor(this.systemColor());
        this.drawIcon(armor[1].equipped ? TEW.DATABASE.ICONS.SET.EQUIPPED_ARMOR : 0, x - 32, y)
        this.drawIcon(armor[1].icon, x , y)
        this.drawText(armor[1].name, x + 32 + this._iconPadding, y, this.contentsWidth() - (x + 32 + this._iconPadding));
        this.resetTextColor();
    }
};

Window_InventoryArmors.prototype.length = function() {
    return this._armors.length + this._equippedArmors.length;
};

// Get the armors
Window_InventoryArmors.prototype.items = function() {
    return [...this._armors, ...this._equippedArmors];
}

// Get an item from its index
Window_InventoryArmors.prototype.armorFromIndex = function(index: number) {
    const nbEquipped = this._equippedArmors.length;
    const nbUnequipped = this._armors.length;
    index = Math.min(index, nbEquipped + nbUnequipped - 1);
    if (index < nbEquipped) {
        const armor = this._equippedArmors[index];
        return [armor[0], {
            ...armor[1], equipped: true
        }];
    } else {
        const armor = this._armors[index - nbEquipped];
        return [armor[0], {
            ...armor[1], equipped: false
        }];
    }
};

// Get the current selected armor
Window_InventoryArmors.prototype.item = function() {
    return this.armorFromIndex(this.index());
}

Window_InventoryArmors.prototype.select = function(index: number) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_armor_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

Window_InventoryArmors.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};
