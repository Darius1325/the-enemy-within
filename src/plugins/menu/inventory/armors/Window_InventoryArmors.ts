// $PluginCompiler TEW_Menus.js

import TEW from "../../../types/tew";
import HalfWindow_List from "../../base/HalfWindow_List";

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

Window_InventoryArmors.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._armors = [];

        actor.equippedArmors.forEach((armor: string) => {
            this._armors.push(TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armor));
        });
        actor.armors.forEach((armor: string) => {
            this._armors.push(TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armor));
        });
        this._maxItems = this._armors.length;
        this.refresh();
    }
};

Window_InventoryArmors.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_InventoryArmors.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;

    const armor = this.armorFromIndex(index);

    if (armor) {
        const iconEquipped = this._actor.hasArmorEquipped(armor[0])
            ? TEW.DATABASE.ICONS.SET.EQUIPPED_ARMOR
            : 0;
        this.changeTextColor(this.systemColor());
        this.drawIcon(iconEquipped, x - 32, y)
        this.drawIcon(armor[1].icon, x , y)
        this.drawText(armor[1].name, x + 32 + this._iconPadding, y, this.contentsWidth() - (x + 32 + this._iconPadding));
        this.resetTextColor();
    }
};

// Getting an item from its index
Window_InventoryArmors.prototype.armorFromIndex = function(index: number) {
    return this._armors[index];
};

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
