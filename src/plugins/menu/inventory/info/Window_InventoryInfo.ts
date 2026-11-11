// $PluginCompiler TEW_Menus.js

import TEW from "../../../_types/tew";
import { Sprite } from "../../../../rmmv/core/Sprite";
import { ActorWeapon } from "../../../base/stats/Game_BattlerBase";
import { MeleeWeapon } from "../../../_types/meleeWeapon";
import { RangedWeapon } from "../../../_types/rangedWeapon";
import { BodyLocation, Stat } from "../../../_types/enum";
import { Armor } from "../../../_types/armor";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryInfo
//
// TODO contentsWidth calls

function Window_InventoryInfo() {
    this.initialize.apply(this, arguments);
}

Window_InventoryInfo.ENC_LABEL = "Total encumberment: ";
Window_InventoryInfo.ENC_X_OFFSET = 98;
Window_InventoryInfo.ENC_Y_OFFSET = 10;

Window_InventoryInfo.DAMAGE_LABEL = "Damage: ";
Window_InventoryInfo.AMMO_LABEL = "Available ammo: ";
Window_InventoryInfo.QUALITY_JOINER = ", ";
Window_InventoryInfo.WEAPONS_X_OFFSET = 500;
Window_InventoryInfo.WEAPONS_Y_OFFSET = 10;
Window_InventoryInfo.WEAPON_TRAITS_X_OFFSET = 580;

Window_InventoryInfo.ARMORS_X_OFFSET = 540;
Window_InventoryInfo.ARMORS_Y_OFFSET = 194;

Window_InventoryInfo.ARMOR_POINTS_FONT_SIZE = 48;
Window_InventoryInfo.ARMOR_POINTS_OFFSETS = {
    HEAD: {
        x: 228,
        y: 182
    },
    BODY: {
        x: 228,
        y: 358
    },
    LEFT_ARM: {
        x: 48,
        y: 358
    },
    RIGHT_ARM: {
        x: 408,
        y: 358
    },
    LEFT_LEG: {
        x: 138,
        y: 534
    },
    RIGHT_LEG: {
        x: 318,
        y: 534
    }
};

export default Window_InventoryInfo.prototype = Object.create(Window_Base.prototype);
Window_InventoryInfo.prototype.constructor = Window_InventoryInfo;

Window_InventoryInfo.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, 0, TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT, this.windowWidth(), this.windowHeight());
    this._iconPadding = 5;
    this._encumberment = 0;
    this._armorPoints = {};
};

Window_InventoryInfo.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._bgSprite = new Sprite(ImageManager.loadSystem("bg_menuInventoryInfo_" + actor.name()));
        this.addChildAt(this._bgSprite, 0);
        this.syncActor();
    }
};

Window_InventoryInfo.prototype.syncActor = function() {
    this._encumberment = this._actor.totalEncumberment();

    const sumArmorPoints = (armors: Armor[]) => armors.reduce((acc: number, armor) => acc + armor.ap, 0);
    this._armorPoints = {
        [BodyLocation.HEAD]: sumArmorPoints(this._actor.armorsAtLocation(BodyLocation.HEAD)),
        [BodyLocation.BODY]: sumArmorPoints(this._actor.armorsAtLocation(BodyLocation.BODY)),
        [BodyLocation.ARMS]: sumArmorPoints(this._actor.armorsAtLocation(BodyLocation.ARMS)),
        [BodyLocation.LEGS]: sumArmorPoints(this._actor.armorsAtLocation(BodyLocation.LEGS))
    };

    this.refresh();
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
    this.drawEncumberment();
    this.drawWeapons();
    this.drawArmorPoints();
    this.drawArmors();
};

Window_InventoryInfo.prototype.drawEncumberment = function() {
    this.drawText(
        Window_InventoryInfo.ENC_LABEL + this._encumberment,
        Window_InventoryInfo.ENC_X_OFFSET,
        Window_InventoryInfo.ENC_Y_OFFSET,
        this.contentsWidth()
    );
};

Window_InventoryInfo.prototype.drawWeapons = function() {
    const mainHand: ActorWeapon = this._actor.mainHand();
    const secondHand = this._actor.secondHand();

    if (mainHand) {
        const mainHandInfo = TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === mainHand.id);
        const isRanged = Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET).includes(mainHand.id);
        this.drawWeapon(mainHandInfo[1], isRanged, Window_InventoryInfo.WEAPONS_Y_OFFSET);
    }
    if (secondHand) {
        const secondHandInfo = TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === secondHand.id);
        const isRanged = Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET).includes(secondHand.id);
        this.drawWeapon(secondHandInfo[1], isRanged, Window_InventoryInfo.WEAPONS_Y_OFFSET + 2 * TEW.MENU.LINE_HEIGHT);
    }
};

Window_InventoryInfo.prototype.drawWeapon = function(weapon: MeleeWeapon | RangedWeapon, isRanged: boolean, y: number) {
    let x = Window_InventoryInfo.WEAPONS_X_OFFSET;
    this.changeTextColor(this.systemColor());
    this.drawIcon(weapon.icon, x, y);
    x += 32 + this._iconPadding;
    const nameWidth = this.textWidth(weapon.name);
    this.drawText(weapon.name, x, y, nameWidth);
    x += nameWidth + 48; // TODO constant
    this.resetTextColor();

    const damageExcludingSL = weapon.damage + (weapon.strBonus ? this._actor.paramBonus(Stat.STRG) : 0);
    const damageText = Window_InventoryInfo.DAMAGE_LABEL + damageExcludingSL;
    const damageWidth = this.textWidth(damageText);
    this.drawText(damageText, x, y, damageWidth);
    x += damageWidth + 48;
    
    if (isRanged) {
        const ammoInInventory = this._actor.ammoFromGroup((weapon as RangedWeapon).ammunition[0]); // TODO ammo qualities ?
        this.drawText(Window_InventoryInfo.AMMO_LABEL + ammoInInventory, x, y, this.contentsWidth()); // TODO ammo name ?
    }

    if (weapon.qualities.length > 0) {
        this.drawText(
            weapon.qualities.join(Window_InventoryInfo.QUALITY_JOINER),
            Window_InventoryInfo.WEAPON_TRAITS_X_OFFSET,
            y + TEW.MENU.LINE_HEIGHT,
            this.contentsWidth()
        );
    }
};

Window_InventoryInfo.prototype.drawArmorPoints = function() {
    this.contents.fontSize = Window_InventoryInfo.ARMOR_POINTS_FONT_SIZE;
    this.drawText(
        this._armorPoints[BodyLocation.HEAD],
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.HEAD.x,
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.HEAD.y,
        this.contentsWidth()
    );
    this.drawText(
        this._armorPoints[BodyLocation.BODY],
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.BODY.x,
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.BODY.y,
        this.contentsWidth()
    );
    this.drawText(
        this._armorPoints[BodyLocation.ARMS],
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.LEFT_ARM.x,
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.LEFT_ARM.y,
        this.contentsWidth()
    );
    this.drawText(
        this._armorPoints[BodyLocation.ARMS],
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.RIGHT_ARM.x,
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.RIGHT_ARM.y,
        this.contentsWidth()
    );
    this.drawText(
        this._armorPoints[BodyLocation.LEGS],
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.LEFT_LEG.x,
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.LEFT_LEG.y,
        this.contentsWidth()
    );
    this.drawText(
        this._armorPoints[BodyLocation.LEGS],
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.RIGHT_LEG.x,
        Window_InventoryInfo.ARMOR_POINTS_OFFSETS.RIGHT_LEG.y,
        this.contentsWidth()
    );
    this.contents.fontSize = this.standardFontSize();
};

Window_InventoryInfo.prototype.drawArmors = function() {
    const equippedArmors = this._actor._equippedArmors;
    for (let i = 0; i < equippedArmors.length; i++) {
        this.drawArmor(equippedArmors[i], Window_InventoryInfo.ARMORS_Y_OFFSET + (i * TEW.MENU.LINE_HEIGHT));
    }
};

Window_InventoryInfo.prototype.drawArmor = function(armorId: string, y: number) {
    const armorDetails = TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armorId);
    const x = Window_InventoryInfo.ARMORS_X_OFFSET;
    
    if (armorDetails) {
        const nameWidth = this.textWidth(armorDetails[1].name);
        this.changeTextColor(this.systemColor());
        this.drawIcon(armorDetails[1].icon, x , y)
        this.drawText(armorDetails[1].name, x + 32 + this._iconPadding, y, nameWidth);
        this.resetTextColor();
        this.drawText(
            armorDetails[1].qualities.join(Window_InventoryInfo.QUALITY_JOINER),
            x + nameWidth, y, this.contentsWidth()
        );
    }    
};
