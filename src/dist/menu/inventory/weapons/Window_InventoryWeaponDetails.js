// $PluginCompiler TEW_Menus.js
// $StartCompilation
//-----------------------------------------------------------------------------
// Window_InventoryWeaponDetails
//
// Weapon details window
function Window_InventoryWeaponDetails() {
    this.initialize.apply(this, arguments);
}
Window_InventoryWeaponDetails.prototype = Object.create(Window_InventoryDetails.prototype);
Window_InventoryWeaponDetails.prototype.constructor = Window_InventoryWeaponDetails;
Window_InventoryWeaponDetails.prototype.initialize = function (commandWindowHeight = 0) {
    Window_InventoryDetails.prototype.initialize.call(this, commandWindowHeight);
    this._weapon = null;
};
// Refreshing the window
Window_InventoryWeaponDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._weapon) {
        this.drawDetails(this._weapon);
    }
};
// Drawing the details
Window_InventoryWeaponDetails.prototype.drawDetails = function (weapon) {
    // Title
    this.drawUnderlinedText(weapon[1].name, 0, 0, this.contentsWidth(), "center");
    // Item's Icon
    this.drawIcon(weapon[1].icon, 0, 0);
    // Availability Icon
    this.drawIcon(weapon[1].availabilityIcon, this.contentsWidth() - 32, 0);
    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
        // ["Owned :", "x" + item[1].quantity],
        ["Group :", weapon[1].groupLabel],
        ["Enc. :", weapon[1].enc]
    ]);
    this.drawLine(200);
    // Description
    this.drawWrappedTextManually(weapon[1].description, 0, 220, 24);
};
