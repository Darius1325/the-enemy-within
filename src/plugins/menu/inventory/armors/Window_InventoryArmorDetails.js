// $PluginCompiler TEW_Menus.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_InventoryArmorDetails
//
// The window for displaying an armor's details

function Window_InventoryArmorDetails() {
    this.initialize.apply(this, arguments);
}

Window_InventoryArmorDetails.prototype = Object.create(Window_InventoryDetails.prototype);
Window_InventoryArmorDetails.prototype.constructor = Window_InventoryArmorDetails;

Window_InventoryArmorDetails.prototype.initialize = function(commandWindowHeight = 0) {
    Window_InventoryDetails.prototype.initialize.call(this, commandWindowHeight);
    this._armor = null;
};

// Refreshing the window
Window_InventoryArmorDetails.prototype.refresh = function() {
    this.contents.clear();
    if (this._armor){
        this.drawDetails(this._armor);
    }
};

// Drawing the details
Window_InventoryArmorDetails.prototype.drawDetails = function(armor){
    // Title
    this.drawUnderlinedText(armor[1].name, 0, 0, this.contentsWidth(), "center");

    // Item's Icon
    this.drawIcon(armor[1].icon, 0, 0);

    // Availability Icon
    this.drawIcon(armor[1].availabilityIcon, this.contentsWidth() - 32, 0)

    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
        // ["Owned :", "x" + item[1].quantity],
        ["Group :", armor[1].groupLabel],
        ["Enc. :", armor[1].enc]
    ]);

    this.drawLine(200);

    // Description
    this.drawWrappedTextManually(armor[1].description, 0, 220, 24);
};
