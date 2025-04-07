// $PluginCompiler TEW_Menus.js
// $StartCompilation
//-----------------------------------------------------------------------------
// Window_InventoryArmors
//
// Armor list window
function Window_InventoryArmors() {
    this.initialize.apply(this, arguments);
}
Window_InventoryArmors.prototype = Object.create(Window_InventoryList.prototype);
Window_InventoryArmors.prototype.constructor = Window_InventoryArmors;
Window_InventoryArmors.prototype.initialize = function () {
    Window_InventoryList.prototype.initialize.call(this);
};
Window_InventoryArmors.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._armors = [];
        // const unequippedArmors = TEW.ARMORS_ARRAY.filter(armor => actor.hasArmorTEW(armor[0]));
        // const equippedArmors = TEW.ARMORS_ARRAY.filter(armor => actor.hasArmorEquipped(armor[0]));
        actor.equippedArmors.forEach(armor => {
            this._armors.push(TEW.ARMORS_ARRAY.find(a => a[0] === armor));
        });
        actor.armors.forEach(armor => {
            this._armors.push(TEW.ARMORS_ARRAY.find(a => a[0] === armor));
        });
        this._maxItems = this._armors.length;
        this.refresh();
    }
};
Window_InventoryArmors.prototype.drawAllItems = function () {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
Window_InventoryArmors.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU_LINE_HEIGHT;
    const armor = this.armorFromIndex(index);
    if (armor) {
        const iconEquipped = this._actor.hasArmorEquipped(armor[0])
            ? TEW.ICONS_IDS.EQUIPPED_ARMOR
            : 0;
        this.changeTextColor(this.systemColor());
        this.drawIcon(iconEquipped, x - 32, y);
        this.drawIcon(armor[1].icon, x, y);
        this.drawText(armor[1].name, x + 32 + this._iconPadding, y, this.contentsWidth() - (x + 32 + this._iconPadding));
        this.resetTextColor();
    }
};
// Getting an item from its index
Window_InventoryArmors.prototype.armorFromIndex = function (index) {
    return this._armors[index];
};
Window_InventoryArmors.prototype.select = function (index) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_armor_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};
Window_InventoryArmors.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
