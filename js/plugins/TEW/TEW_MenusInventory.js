
var Imported = Imported || {};
Imported.TEW_MenusInventory = true;
var TEW = TEW || {};

/*
* This plugin contains windows for the custom status menu.
*/

TEW.COMMAND_NAMES = TEW.COMMAND_NAMES || {};
TEW.COMMAND_NAMES[40] = "InventoryNextChar";
TEW.COMMAND_NAMES[41] = "InventoryPreviousChar";
TEW.COMMAND_NAMES[42] = "Infos";
TEW.COMMAND_NAMES[43] = "Weapons";
TEW.COMMAND_NAMES[44] = "Armors";
TEW.COMMAND_NAMES[45] = "Items";

TEW.MENU_LINE_HEIGHT = 36;

// TextManager
// Override commands
TextManager.command = function(commandId) {
    if (commandId <= 25) {
        return $dataSystem.terms.commands[commandId] || '';
    } else {
        return TEW.COMMAND_NAMES[commandId] || '';
    }
};


// Windows

const INVENTOTY_WINDOW_TOPBAR_HEIGHT = 70;

// The window for selecting a command on the inventory screen.
// Adding new Commands Entries

Object.defineProperties(TextManager, {
    inventoryNextChar :         TextManager.getter('command', 40),
    inventoryPreviousChar :     TextManager.getter('command', 41),
    inventoryInfos :            TextManager.getter('command', 42),
    inventoryWeapons :          TextManager.getter('command', 43),
    inventoryArmors :           TextManager.getter('command', 44),
    inventoryItems :            TextManager.getter('command', 45)
});


//-----------------------------------------------------------------------------
// Window_Selectable (override)
//
// Overriding Window_Selectable cause we know how to code, and you don't :)

Window_Selectable.prototype.setTopRow = function(row) {
    var scrollY = row.clamp(0, this.maxTopRow()) * this.itemHeight();
    // I curse the entire families of every RPG Maker MV developer. Fuck you.
    if (!isNaN(scrollY) && this._scrollY !== scrollY) {
        this._scrollY = scrollY;
        this.refresh();
        this.updateCursor();
    }
};

//-----------------------------------------------------------------------------
// Window_InventoryInfos

function Window_InventoryInfos() {
    this.initialize.apply(this, arguments);
}

Window_InventoryInfos.prototype = Object.create(Window_EquipStatus.prototype);
Window_InventoryInfos.prototype.constructor = Window_InventoryInfos;

Window_InventoryInfos.prototype.initialize = function() {
    Window_EquipStatus.prototype.initialize.call(this);
    this._helpWindow = null;
    // this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_InventoryInfos.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
        // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};

//-----------------------------------------------------------------------------
// Window_InventoryWeapons

function Window_InventoryWeapons() {
    this.initialize.apply(this, arguments);
}

Window_InventoryWeapons.prototype = Object.create(Window_EquipSlot.prototype);
Window_InventoryWeapons.prototype.constructor = Window_InventoryWeapons;

Window_InventoryWeapons.prototype.initialize = function() {
    Window_EquipSlot.prototype.initialize.call(this);
    this._helpWindow = null;
    // this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_InventoryWeapons.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
        // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};

//-----------------------------------------------------------------------------
// Window_InventoryArmors

function Window_InventoryArmors() {
    this.initialize.apply(this, arguments);
}

Window_InventoryArmors.prototype = Object.create(Window_EquipSlot.prototype);
Window_InventoryArmors.prototype.constructor = Window_InventoryArmors;

Window_InventoryArmors.prototype.initialize = function() {
    Window_EquipSlot.prototype.initialize.call(this);
    this._helpWindow = null;
    // this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_InventoryArmors.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
        // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};

//-----------------------------------------------------------------------------
// Window_InventoryItems

function Window_InventoryItems() {
    this.initialize.apply(this, arguments);
}

Window_InventoryItems.prototype = Object.create(Window_EquipSlot.prototype);
Window_InventoryItems.prototype.constructor = Window_InventoryItems;

Window_InventoryItems.prototype.initialize = function() {
    Window_EquipSlot.prototype.initialize.call(this);
    this._helpWindow = null;
    // this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_InventoryItems.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
        // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};


//-----------------------------------------------------------------------------
// Window_InventoryCommand
//
// The window for selecting a command on the inventory screen.

function Window_InventoryCommand() {
    this.initialize.apply(this, arguments);
}

Window_InventoryCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_InventoryCommand.prototype.constructor = Window_InventoryCommand;

// Initializing the command window
Window_InventoryCommand.prototype.initialize = function(x, y, width) {
    this._windowWidth = width;
    this._windowHeight = INVENTOTY_WINDOW_TOPBAR_HEIGHT;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};

// Window Width
Window_InventoryCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

// Max column number
Window_InventoryCommand.prototype.maxCols = function() {
    return 4;
};

// Making the 4 tabs
Window_InventoryCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryInfos, 'inventory_infos');
    this.addCommand(TextManager.inventoryWeapons, 'inventory_weapons');
    this.addCommand(TextManager.inventoryArmors, 'inventory_armors');
    this.addCommand(TextManager.inventoryItems, 'inventory_items');
};


Window_InventoryCommand.prototype.cursorRight = function(wrap) {
    Window_HorzCommand.prototype.cursorRight.call(this, wrap);
    this.callHandler('right');
};

Window_InventoryCommand.prototype.cursorLeft = function(wrap) {
    Window_HorzCommand.prototype.cursorLeft.call(this, wrap);
    this.callHandler('left');
};


// Scenes

//-----------------------------------------------------------------------------
// Scene_Equip
//
// Customizing the inventory scene

Scene_Equip.prototype.INFOS_WINDOW_INDEX = 0;
Scene_Equip.prototype.WEAPONS_WINDOW_INDEX = 1;
Scene_Equip.prototype.ARMORS_WINDOW_INDEX = 2;
Scene_Equip.prototype.ITEMS_WINDOW_INDEX = 3;

// Creating the scene
Scene_Equip.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createInfosWindow();
    this.createWeaponsWindow();
    this.createArmorsWindow();
    this.createItemsWindow();
    // this.createHelpWindow(); // TODO
    // this._helpWindow.hide();
    // this._competencesWindow.setHelpWindow(this._helpWindow);
    // this._talentsWindow.setHelpWindow(this._helpWindow);
    // this._spellsWindow.setHelpWindow(this._helpWindow);
    // this.activateStatusStats(); // Desactivate all the windows, except the stats one
    this.refreshActor();
};

// Refreshing the actor
Scene_Equip.prototype.refreshActor = function() {
    var actor = this.actor();
    this._infosWindow.setActor(actor);
    this._weaponsWindow.setActor(actor);
    this._armorsWindow.setActor(actor);
    this._itemsWindow.setActor(actor);
};

// Creating the commands for this scene
Scene_Equip.prototype.createCommandWindow = function(){
    var wx = 0;
    var wy = 0;
    var ww = Graphics.boxWidth;
    this._commandWindow = new Window_InventoryCommand(wx, wy, ww);
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
    this._commandWindow.setHandler('right', this.displayWindow.bind(this));
    this._commandWindow.setHandler('left', this.displayWindow.bind(this));
    this._commandWindow.setHandler('inventory_infos', this.activateInventoryInfos.bind(this));
    this._commandWindow.setHandler('inventory_weapons', this.activateInventoryWeapons.bind(this));
    this._commandWindow.setHandler('inventory_armors', this.activateInventoryArmors.bind(this));
    this._commandWindow.setHandler('inventory_items', this.activateInventoryItems.bind(this));
    this.addWindow(this._commandWindow);
};

// Creating the infos Window for the scene
Scene_Equip.prototype.createInfosWindow = function(){
    this._infosWindow = new Window_InventoryInfos();
    // this._statsWindow.reserveFaceImages();
    this.addWindow(this._infosWindow);
};

// Creating the weapons Window for the scene
Scene_Equip.prototype.createWeaponsWindow = function(){
    this._weaponsWindow = new Window_InventoryWeapons();
    this._weaponsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._weaponsWindow.deselect();
    });
    this._weaponsWindow.hide();
    this.addWindow(this._weaponsWindow);
};

// Creating the armors Window for the scene
Scene_Equip.prototype.createArmorsWindow = function(){
    this._armorsWindow = new Window_InventoryArmors();
    this._armorsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._armorsWindow.deselect();
    });
    this._armorsWindow.hide();
    this.addWindow(this._armorsWindow);
};

// Creating the items Window for the scene
Scene_Equip.prototype.createItemsWindow = function(){
    this._itemsWindow = new Window_InventoryItems();
    this._itemsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._itemsWindow.deselect();
    });
    this._itemsWindow.hide();
    this.addWindow(this._itemsWindow);
};

// Hiding all the windows
Scene_Equip.prototype.hideAllWindows = function(){
    this._infosWindow.hide();
    this._infosWindow.deactivate();

    this._weaponsWindow.hide();
    this._weaponsWindow.deactivate();

    this._armorsWindow.hide();
    this._armorsWindow.deactivate();
    
    this._itemsWindow.hide();
    this._itemsWindow.deactivate();
};

// Showing the corresponding window according to the current command window index
Scene_Equip.prototype.displayWindow = function(){
    // hide all
    this.hideAllWindows();
    
    // Changing window
    if (this._commandWindow.index() == this.INFOS_WINDOW_INDEX){
        this._infosWindow.show();
        this._infosWindow.refresh();
    } else if (this._commandWindow.index() == this.WEAPONS_WINDOW_INDEX){
        this._weaponsWindow.show();
        this._weaponsWindow.refresh();
    } else if (this._commandWindow.index() == this.ARMORS_WINDOW_INDEX){
        this._armorsWindow.show();
        this._armorsWindow.refresh();
    } else if (this._commandWindow.index() == this.ITEMS_WINDOW_INDEX){
        this._itemsWindow.show();
        this._itemsWindow.refresh();
    }
};

// Activating the infos window 
Scene_Equip.prototype.activateInventoryInfos = function() {
    this.hideAllWindows();
    this._infosWindow.show();
    this._commandWindow.activate();
    this._infosWindow.refresh();
};

// Activating the competences window 
Scene_Equip.prototype.activateInventoryWeapons = function() {
    this.hideAllWindows()
    this._weaponsWindow.show();
    this._commandWindow.deactivate();
    this._weaponsWindow.activate();
    // this._helpWindow.move(0, Graphics.height - 75, Graphics.width, 75);
    this._weaponsWindow.select(0);
    this._weaponsWindow.refresh();
};

// Activating the talents window 
Scene_Equip.prototype.activateInventoryArmors = function() {
    this.hideAllWindows();
    this._armorsWindow.show();
    this._commandWindow.deactivate();
    this._armorsWindow.activate();
    // this._helpWindow.move(0, 70, Graphics.width, Graphics.height - 70);
    this._armorsWindow.select(0);
    this._armorsWindow.refresh();
};

// Activating the spells window 
Scene_Equip.prototype.activateInventoryItems = function() {
    this.hideAllWindows();
    this._itemsWindow.show();
    this._commandWindow.deactivate();
    this._itemsWindow.activate();
    // this._helpWindow.move(0, 70, Graphics.width, Graphics.height - 70);
    this._itemsWindow.select(0);
    this._itemsWindow.refresh();
};
