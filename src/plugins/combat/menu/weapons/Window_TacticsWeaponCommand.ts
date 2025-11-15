// $PluginCompiler TEW_Combat.js

import { Game_Actor } from "../../../base/stats/Game_Actor";
import HalfWindow_TacticsDetailsCommand, { IHalfWindow_TacticsDetailsCommand } from "../base/HalfWindow_TacticsDetailsCommand";

export interface IWindow_TacticsWeaponCommand extends IHalfWindow_TacticsDetailsCommand {
    makeCommandList: () => void;
    refreshCommand: (actor: Game_Actor, weaponIndex?: number) => void;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsWeaponCommand
//
// Weapon individual commands window

function Window_TacticsWeaponCommand() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsWeaponCommand.prototype = Object.create(HalfWindow_TacticsDetailsCommand.prototype);
Window_TacticsWeaponCommand.prototype.constructor = Window_TacticsWeaponCommand;

// Initializing the command window
Window_TacticsWeaponCommand.prototype.initialize = function() {
    HalfWindow_TacticsDetailsCommand.prototype.initialize.call(this, 1);
};

Window_TacticsWeaponCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
}

Window_TacticsWeaponCommand.prototype.refreshCommand = function(actor: Game_Actor, weaponIndex = 0){
    if (actor) {
        const weapon = actor.weapon(weaponIndex);
        this.clearCommandList();
        if (weapon.isInMainHand || weapon.isInSecondHand) {
            this.addCommand(TextManager.inventoryWeaponUnequip, 'inventory_weapon_unequip');
        } else {
            this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
        }
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};
