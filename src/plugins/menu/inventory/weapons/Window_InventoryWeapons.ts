// $PluginCompiler TEW_Menus.js

// ----------------------

// File : Window_InventoryWeapons.ts
// Author : Ersokili, 7evy, Sebibebi67
// Date : 03/05/2025
// Description : This file contains the implementation of the Window_InventoryWeapons class, which is used to display the weapons of a character in the inventory menu.

// ----------------------
// Imports
// ----------------------

import { Game_Actor } from "../../../base/stats/Game_Actor";
import { ActorWeapon } from "../../../base/stats/Game_BattlerBase";
import { MeleeWeapon } from "../../../types/meleeWeapon";
import { RangedWeapon } from "../../../types/rangedWeapon";
import TEW from "../../../types/tew";
import HalfWindow_List, { IHalfWindow_List } from "../../base/HalfWindow_List";

// ----------------------
// Exports
// ----------------------

export type LoadedWeapon = (MeleeWeapon | RangedWeapon) & ActorWeapon & {
    equipIndex: number;
    equipIcon?: number;
};

export interface IWindow_InventoryWeapons extends IHalfWindow_List {
    _weapons: LoadedWeapon[];
    _mainHandWeapon: LoadedWeapon;
    _secondHandWeapon: LoadedWeapon;
    _stayCount: number;

    length: () => number;
    syncActor: () => void;
    drawAllItems: () => void;
    drawItem: (index: number) => void;
    weaponFromIndex: (index: number) => LoadedWeapon;
    item: () => LoadedWeapon;
    select: (index: number) => void;
    processOk: () => void;
};

// ----------------------
// $StartCompilation
// ----------------------


function Window_InventoryWeapons() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryWeapons.prototype = Object.create(HalfWindow_List.prototype);
Window_InventoryWeapons.prototype.constructor = Window_InventoryWeapons;

Window_InventoryWeapons.prototype.initialize = function() {
    HalfWindow_List.prototype.initialize.call(this);
};

Window_InventoryWeapons.prototype.setActor = function(actor: Game_Actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor();
    }
};

Window_InventoryWeapons.prototype.length = function() {
    return this._weapons.length
        + (this._mainHandWeapon != undefined ? 1 : 0)
        + (this._secondHandWeapon != undefined ? 1 : 0);
};

Window_InventoryWeapons.prototype.syncActor = function() {
    const actor: Game_Actor = this._actor;
    const displayedWeapons = actor.weapons.map((weapon: ActorWeapon, index: number): LoadedWeapon => {
        const weaponData = Object.assign({},
            TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === weapon.id));
        return {
            id: weaponData[0],
            ...weaponData[1],
            ...weapon,
            equipIndex: index,
            equipIcon: weapon.isInMainHand
                ? TEW.DATABASE.ICONS.SET.EQUIPPED_MAIN_HAND
                : weapon.isInSecondHand
                    ? TEW.DATABASE.ICONS.SET.EQUIPPED_SECOND_HAND
                    : 0
        };
    });

    this._weapons = displayedWeapons.filter((weapon) => !weapon.isInMainHand && !weapon.isInSecondHand);

    this._maxItems = this._weapons.length;

    this._mainHandWeapon = displayedWeapons.find((weapon) => weapon.isInMainHand);
    if (this._mainHandWeapon) {
        this._maxItems ++;
    }

    this._secondHandWeapon = displayedWeapons.find((weapon) => weapon.isInSecondHand);
    if (this._secondHandWeapon) {
        this._maxItems ++;
    }

    this.refresh();
}

Window_InventoryWeapons.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_InventoryWeapons.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;

    const weapon = this.weaponFromIndex(index);
    if (weapon) {
        this.changeTextColor(this.systemColor());
        this.drawIcon(weapon.equipIcon || 0, x - 32, y)
        this.drawIcon(weapon.icon, x , y)
        this.drawText(weapon.name, x + 32 + this._iconPadding, y, this.contentsWidth());
        this.resetTextColor();
    }
};

Window_InventoryWeapons.prototype.weaponFromIndex = function(index: number) {
    index = Math.min(index, this._weapons.length - 1);
    let weapon;

    if (index === 0) {
        if (this._mainHandWeapon) {
            weapon = this._mainHandWeapon;
        }
        else if (this._secondHandWeapon) {
            weapon = this._secondHandWeapon;
        }
        else {
            weapon = this._weapons[0];
        }
    } else if (index === 1) {
        if (this._mainHandWeapon && this._secondHandWeapon) {
            weapon = this._secondHandWeapon;
        }
        else if (this._mainHandWeapon || this._secondHandWeapon) {
            weapon = this._weapons[0];
        }
        else {
            weapon = this._weapons[1];
        }
    } else {
        let realIndex = index;
        if (this._mainHandWeapon) realIndex--;
        if (this._secondHandWeapon) realIndex--;
        weapon = this._weapons[realIndex];
    }

    return weapon;
};

// Getting the current selected weapon
Window_InventoryWeapons.prototype.item = function() {
    return this.weaponFromIndex(this.index());
}

Window_InventoryWeapons.prototype.select = function(index: number) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_weapon_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

Window_InventoryWeapons.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};
