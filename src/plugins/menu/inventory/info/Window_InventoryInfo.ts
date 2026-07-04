// $PluginCompiler TEW_Menus.js

import TEW from "../../../_types/tew";
import { Sprite } from "../../../../rmmv/core/Sprite";
import { ActorWeapon } from "../../../base/stats/Game_BattlerBase";
import { MeleeWeapon } from "../../../_types/meleeWeapon";
import { RangedWeapon } from "../../../_types/rangedWeapon";
import { Stat } from "../../../_types/enum";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryInfo
//
// TODO

function Window_InventoryInfo() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryInfo.prototype = Object.create(Window_Base.prototype);
Window_InventoryInfo.prototype.constructor = Window_InventoryInfo;

Window_InventoryInfo.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, 0, TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT, this.windowWidth(), this.windowHeight());
    this._iconPadding = 5;
};

Window_InventoryInfo.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._bgSprite = new Sprite(ImageManager.loadSystem("bg_menuStats_" + actor.name()));
        this.addChildAt(this._bgSprite, 0);
        this.refresh();
    }
};

Window_InventoryInfo.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
        if (this._actor) {
            this.drawAllItems();
        }
    }
};

Window_InventoryInfo.prototype.drawAllItems = function() {
    this.drawWeapons();
    this.drawArmors();
};

Window_InventoryInfo.prototype.drawWeapons = function() {
    const mainHand: ActorWeapon = this._actor.mainHand();
    const secondHand = this._actor.secondHand();

    if (mainHand) {
        const mainHandInfo = TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === mainHand.id);
        const isRanged = Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET).includes(mainHand.id);
        this.drawWeapon(mainHandInfo[1], isRanged, 60); // TODO y
    }
    if (secondHand) {
        const secondHandInfo = TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === secondHand.id);
        const isRanged = Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET).includes(secondHand.id);
        this.drawWeapon(secondHandInfo[1], isRanged, 96); // TODO y
    }
};

Window_InventoryInfo.prototype.drawWeapon = function(weapon: MeleeWeapon | RangedWeapon, isRanged: boolean, y: number) {
    this.changeTextColor(this.systemColor());
    this.drawIcon(weapon.icon, 30, y) // TODO x
    this.drawText(weapon.name, 30 + 32 + this._iconPadding, y, this.contentsWidth()); // TODO width
    this.resetTextColor();

    const damageExcludingSL = weapon.damage + (weapon.strBonus ? this._actor.paramBonus(Stat.STRG) : 0); // TODO weapon qualities ?
    this.drawText("Damage: " + damageExcludingSL, 220, y, this.contentsWidth()); // TODO y & width
    
    if (isRanged) {
        const ammoInInventory = this._actor.ammoFromGroup((weapon as RangedWeapon).ammunition[0]);
        this.drawText("Available ammo: " + ammoInInventory, 380, y, this.contentsWidth()); // TODO ammo name ?
    }
};

Window_InventoryInfo.prototype.drawArmors = function() {
    const equippedArmors = this._actor._equippedArmors;
    for (let i = 0; i < equippedArmors.length; i++) {
        this.drawArmor(equippedArmors[i], 170 + (i * TEW.MENU.LINE_HEIGHT)); // TODO height
    }
};

Window_InventoryInfo.prototype.drawArmor = function(armorId: string, y: number) {
    const armorDetails = TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armorId);
    const x = 30; // TODO x
    
    if (armorDetails) {
        this.changeTextColor(this.systemColor());
        this.drawIcon(armorDetails[1].icon, x , y)
        this.drawText(armorDetails[1].name, x + 32 + this._iconPadding, y, this.contentsWidth() - (x + 32 + this._iconPadding));
        this.resetTextColor();
    }    
};
