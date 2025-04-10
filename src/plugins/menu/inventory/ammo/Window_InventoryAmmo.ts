// $PluginCompiler TEW_Menus.js

import Window_InventoryList from "../Window_InventoryList";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryInfo
//
// TODO

function Window_InventoryAmmo() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryAmmo.prototype = Object.create(Window_InventoryList.prototype);
Window_InventoryAmmo.prototype.constructor = Window_InventoryAmmo;

Window_InventoryAmmo.prototype.initialize = function() {
    Window_InventoryList.prototype.initialize.call(this);
    this._helpWindow = null;
    // this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_InventoryAmmo.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
        // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};
