// $PluginCompiler TEW_Menus.js

import { Game_Actor } from "../../../base/stats/Game_Actor";
import { ActorWeapon } from "../../../base/stats/Game_BattlerBase";
import { MeleeWeapon } from "../../../types/meleeWeapon";
import { RangedWeapon } from "../../../types/rangedWeapon";
import TEW from "../../../types/tew";
import HalfWindow_List from "../../base/HalfWindow_List";

export type LoadedWeapon = (MeleeWeapon | RangedWeapon) & ActorWeapon & {
    equipIndex: number;
    equipIcon?: number;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryWeapons
//
// Weapons list window

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

        const displayedWeapons = actor.weapons.map((weapon: ActorWeapon, index: number): LoadedWeapon => {
            const weaponData = Object.assign({},
                TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === weapon.id));
            return {
                ...weaponData[1],
                ...weapon,
                equipIndex: index,
                equipIcon: weapon.isInMainHand
                    ? TEW.DATABASE.ICONS.SET.EQUIPPED_MAIN_HAND
                    : weapon.isInSecondHand
                        ? TEW.DATABASE.ICONS.SET.EQUIPPED_SECOND_HAND
                        : undefined
            };
        });

        this._weapons = displayedWeapons // [<internal name>, {<item data>}]
            .filter((weapon) => !weapon.isInMainHand && !weapon.isInSecondHand)
            .map((weapon) => [weapon.id, weapon]);

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
};

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
        this.drawIcon(weapon[1].equipIcon || 0, x - 32, y)
        this.drawIcon(weapon[1].icon, x , y)
        this.drawText(weapon[1].name, x + 32 + this._iconPadding, y, this.contentsWidth());
        this.resetTextColor();
    }
};

Window_InventoryWeapons.prototype.weaponFromIndex = function(index: number) {
    let weapon;

    if (index === 0){
        if (this._mainHandWeapon){ weapon = this._mainHandWeapon; }
        else if (this._secondHandWeapon) { weapon = this._secondHandWeapon; }
        else { weapon = this._weapons[index] }
    } else if (index === 1){
        if (this._mainHandWeapon && this._secondHandWeapon) { weapon = this._secondHandWeapon; }
        else { weapon = this._weapons[index - 1] }
    } else {
        let realIndex = index;
        if (this._mainHandWeapon) { realIndex--; }
        if (this._secondHandWeapon) { realIndex--; }
        weapon = this._weapons[realIndex];
    }

    return weapon;
};

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

// Window_InventoryWeapons.prototype.drawHelp = function(index) {
//     // console.log(index, this.isCurrentItemEnabled());
//     if (this.isCurrentItemEnabled()){
//         const weapon = this.weaponFromIndex(index);
//         const lineHeight = this._helpWindow.lineHeight();
//         const group = 'Group : ' + weapon[1].group + '(';
//         this._helpWindow.addText(weapon[1].name, 0, 0);
//         this._helpWindow.addText(group, 0, lineHeight);
//         this._helpWindow.addIcon(weapon[1].iconGroupId, this.textWidth(group), lineHeight)
//         this._helpWindow.addText(')', this.textWidth(group) + 32, lineHeight)
//         this._helpWindow.addText('Range : ' + weapon[1].range, 0, lineHeight * 2);
//         this._helpWindow.addText('Damage : ' + weapon[1].damage, 0, lineHeight * 3);
//         this._helpWindow.addText('Qualities : ' + weapon[1].qualities, 0, lineHeight * 4)
//     }


//     // const item = this.itemFromIndex(index)
//     // const lineHeight = this._helpWindow.lineHeight();
//     // const group = 'Group : ' + item[1].group + '(';
//     // this._helpWindow.addTt(item[1].name, 0, 0);
//     // this._helpWindow.addTextex(group, 0, lineHeight);
//     // this._helpWindow.addIcon(item[1].iconGroupId, this.textWidth(group), lineHeight)
//     // this._helpWindow.addText(')', this.textWidth(group) + 32, lineHeight);
// };

Window_InventoryWeapons.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

// Window_InventoryWeapons.prototype.isCurrentItemEnabled = function() {
//     return this.index() > 1
//         || this.index() === 0 && this._mainHandWeapon
//         || this.index() === 1 && this._secondHandWeapon;
// };

// Window_InventoryWeapons.prototype.showHelpWindow = function() {
//     if (this._helpWindow && this.active) {
//         this._helpWindow.show();
//         this._helpWindow.refresh();
//     }
// };

Window_InventoryWeapons.prototype.updateHelp = () => {};
