// $PluginCompiler TEW_Menus.js

import HalfWindow_List from "../../main/HalfWindow_List";

// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryInfo
//
// TODO

function Window_InventoryInfo() {
    this.initialize.apply(this, arguments);
}

export default Window_InventoryInfo.prototype = Object.create(HalfWindow_List.prototype);
Window_InventoryInfo.prototype.constructor = Window_InventoryInfo;

Window_InventoryInfo.prototype.initialize = function() {
    HalfWindow_List.prototype.initialize.call(this);
    this._helpWindow = null;
    // this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_InventoryInfo.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
        // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};
