
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
TEW.COMMAND_NAMES[46] = "Use";
TEW.COMMAND_NAMES[47] = "Transfer";

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

// A key
Input.keyMapper[65] = "A_Key";
Input.keyMapper[69] = "E_Key";


// Windows

const INVENTORY_WINDOW_TOPBAR_HEIGHT = 70;

// The window for selecting a command on the inventory screen.
// Adding new Commands Entries

Object.defineProperties(TextManager, {
    inventoryNextChar :         TextManager.getter('command', 40),
    inventoryPreviousChar :     TextManager.getter('command', 41),
    inventoryInfos :            TextManager.getter('command', 42),
    inventoryWeapons :          TextManager.getter('command', 43),
    inventoryArmors :           TextManager.getter('command', 44),
    inventoryItems :            TextManager.getter('command', 45),
    inventoryItemUse :          TextManager.getter('command', 46),
    inventoryItemTransfer :     TextManager.getter('command', 47)
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
// Window_Inventory

function Window_Inventory() {
    this.initialize.apply(this, arguments);
}

Window_Inventory.prototype = Object.create(Window_Selectable.prototype);
Window_Inventory.prototype.constructor = Window_Inventory;

Window_Inventory.prototype.initialize = function(nbLineHeader = 0, nbLineFooter = 0) {
    Window_Selectable.prototype.initialize.call(this,
        0,
        INVENTORY_WINDOW_TOPBAR_HEIGHT * (nbLineHeader + 1),
        Graphics.boxWidth,
        Graphics.boxHeight - INVENTORY_WINDOW_TOPBAR_HEIGHT * (nbLineHeader + nbLineFooter +1));
    this._actor = null;
    this._maxItems = 0;
    this.activate();
    this.refresh();
};

Window_Inventory.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

Window_Inventory.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};

Window_Inventory.prototype.maxItems = function() {
    return this._maxItems;
};


//-----------------------------------------------------------------------------
// Window_InventoryInfos

function Window_InventoryInfos() {
    this.initialize.apply(this, arguments);
}

Window_InventoryInfos.prototype = Object.create(Window_Inventory.prototype);
Window_InventoryInfos.prototype.constructor = Window_InventoryInfos;

Window_InventoryInfos.prototype.initialize = function() {
    Window_Inventory.prototype.initialize.call(this);
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

Window_InventoryWeapons.prototype = Object.create(Window_Inventory.prototype);
Window_InventoryWeapons.prototype.constructor = Window_InventoryWeapons;

Window_InventoryWeapons.prototype.initialize = function() {
    Window_Inventory.prototype.initialize.call(this);
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

Window_InventoryArmors.prototype = Object.create(Window_Inventory.prototype);
Window_InventoryArmors.prototype.constructor = Window_InventoryArmors;

Window_InventoryArmors.prototype.initialize = function() {
    Window_Inventory.prototype.initialize.call(this);
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

Window_InventoryItems.prototype = Object.create(Window_Inventory.prototype);
Window_InventoryItems.prototype.constructor = Window_InventoryItems;

Window_InventoryItems.prototype.initialize = function() {
    Window_Inventory.prototype.initialize.call(this);
    this._helpWindow = null;
    this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_InventoryItems.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._items = TEW.ITEMS_ARRAY.filter(item => actor.hasItem(item[0])); // [<internal name>, {<item data>}]
        this._maxItems = this._items.length;
        this.refresh();
    }
};

Window_InventoryItems.prototype.maxCols = () => 2;

Window_InventoryItems.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_InventoryItems.prototype.drawItem = function(index) { // TODO
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 === 0 ? 48 : 432;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU_LINE_HEIGHT;

    const item = this.itemFromIndex(index);
    
    this.changeTextColor(this.systemColor());
    this.drawIcon(item[1].iconGroupId, x, y)
    this.drawText(item[1].name, x + 32, y, Graphics.width / 2);
    this.resetTextColor();
    this.drawText(' (' + this._actor.item(item[0]) + ')', x + 32 + this.textWidth(item[1].name), y, Graphics.width / 2);
};

Window_InventoryItems.prototype.itemFromIndex = function(index) {
    return this._items[index];
};

Window_InventoryItems.prototype.select = function(index) {
    if (this._index !== index) {
        this.hideHelpWindow();
    }
    this._index = index;
    if (this._index >= 0) {
        this._helpWindow.clear();
        this.drawHelp(this._index);
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

Window_InventoryItems.prototype.drawHelp = function(index) {
    const item = this.itemFromIndex(index)
    const lineHeight = this._helpWindow.lineHeight();
    const group = 'Group : ' + item[1].group + '(';
    this._helpWindow.addText(item[1].name, 0, 0);
    this._helpWindow.addText(group, 0, lineHeight);
    this._helpWindow.addIcon(item[1].iconGroupId, this.textWidth(group), lineHeight)
    this._helpWindow.addText(')', this.textWidth(group) + 32, lineHeight);
}

Window_InventoryItems.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

Window_InventoryItems.prototype.processHandling = function() {
    Window_Selectable.prototype.processHandling.call(this);

    // Custom handling
    if (this.isOpenAndActive()) {
        if (this.isHandled('E_Key') && Input.isTriggered('E_Key')){
            this.callHandler('E_Key');
        }
    }
};

Window_InventoryItems.prototype.isCurrentItemEnabled = function() {
    return true; // TODO
};

Window_InventoryItems.prototype.showHelpWindow = function() {
    if (this._helpWindow && this.active) {
        this._helpWindow.show();
        this._helpWindow.refresh();
    }
};

Window_InventoryItems.prototype.updateHelp = () => {};

//-----------------------------------------------------------------------------
// Window_InventoryHelp
//
// The help window for the inventory pages

function Window_InventoryHelp() {
    this.initialize.apply(this, arguments);
}

Window_InventoryHelp.prototype = Object.create(Window_Help.prototype);
Window_InventoryHelp.prototype.constructor = Window_InventoryHelp;

// Initializing the help window
Window_InventoryHelp.prototype.initialize = function(numLines = 2) {
    Window_Help.prototype.initialize.call(this, numLines);
    this._yStartPos = Graphics.height - (numLines + 1) * this.lineHeight();
    this.move(0, this._yStartPos, Graphics.width, Graphics.height - this._yStartPos);
    this._textArray = [];
    this._iconsArray = [];
};

Window_InventoryHelp.prototype.clear = function (){
    this.contents.clear();
    this._textArray = [];
    this._iconsArray = [];
}

Window_InventoryHelp.prototype.addText = function (text, x, y){
    this._textArray.push({
        desc:text,
        x:x,
        y:y
    });
}

Window_InventoryHelp.prototype.addIcon = function(iconId, x, y){
    this._iconsArray.push({
        id:iconId,
        x:x,
        y:y
    });
}

Window_InventoryHelp.prototype.refresh = function() {
    this.contents.clear();
    // Drawing the text
    this._textArray.forEach(text => {
        this.drawText(text.desc, text.x, text.y, Graphics.width, 'left');
    });

    // Drawing the icons
    this._iconsArray.forEach(icon => {
        this.drawIcon(icon.id, icon.x, icon.y);
    });
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
    this._windowHeight = INVENTORY_WINDOW_TOPBAR_HEIGHT;
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

//-----------------------------------------------------------------------------
// Window_InventoryCommandItems
//
// The window for selecting a command on the items view.

function Window_InventoryCommandItems() {
    this.initialize.apply(this, arguments);
}

Window_InventoryCommandItems.prototype = Object.create(Window_Command.prototype);
Window_InventoryCommandItems.prototype.constructor = Window_InventoryCommandItems;

// Initializing the command window
Window_InventoryCommandItems.prototype.initialize = function(x, y) {
    this._windowWidth = 200;
    this._windowHeight = 200;
    Window_Command.prototype.initialize.call(
        this,
        (Graphics.boxWidth - this._windowWidth) / 2,
        (Graphics.boxHeight - this._windowHeight) / 2);
};

// Window Width
Window_InventoryCommandItems.prototype.windowWidth = function() {
    return this._windowWidth;
};

// Making the 4 tabs
Window_InventoryCommandItems.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryItemUse, 'inventory_item_use');
    this.addCommand(TextManager.inventoryItemTransfer, 'inventory_item_transfer');
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
    this.createItemsCommandWindow();
    this.createHelpWindow();
    this._helpWindow.hide();
    // this._weaponsWindow.setHelpWindow(this._helpWindow);
    // this._armorsWindow.setHelpWindow(this._helpWindow);
    this._itemsWindow.setHelpWindow(this._helpWindow);
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

Scene_Equip.prototype.createHelpWindow = function(){
    this._helpWindow = new Window_InventoryHelp();
    this.addWindow(this._helpWindow);
}

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
    this._itemsWindow.setHandler('E_Key', () => {
        this.openCommandWindowItem();
    });
    this._itemsWindow.hide();
    this.addWindow(this._itemsWindow);
};

Scene_Equip.prototype.createItemsCommandWindow = function(){
    this._itemsCommandWindow = new Window_InventoryCommandItems();
    this._itemsCommandWindow.setHandler('cancel', () => {
        this._itemsCommandWindow.deactivate();
        this._itemsCommandWindow.hide();
        this.activateInventoryItems(this._itemsWindow.index());
        this._itemsWindow._helpWindow.refresh();
    });
    this._itemsCommandWindow.setHandler('inventory_item_use', this.useItem.bind(this));
    this._itemsCommandWindow.setHandler('inventory_item_transfer', this.transferItem.bind(this));
    this._itemsCommandWindow.hide();
    this.addWindow(this._itemsCommandWindow);
}

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

// Activating the weapons window 
Scene_Equip.prototype.activateInventoryWeapons = function() {
    this.hideAllWindows()
    this._weaponsWindow.show();
    this._commandWindow.deactivate();
    this._weaponsWindow.activate();
    // this._helpWindow.move(0, Graphics.height - 75, Graphics.width, 75);
    this._weaponsWindow.select(0);
    this._weaponsWindow.refresh();
};

// Activating the armors window 
Scene_Equip.prototype.activateInventoryArmors = function() {
    this.hideAllWindows();
    this._armorsWindow.show();
    this._commandWindow.deactivate();
    this._armorsWindow.activate();
    // this._helpWindow.move(0, 70, Graphics.width, Graphics.height - 70);
    this._armorsWindow.select(0);
    this._armorsWindow.refresh();
};

// Activating the items window 
Scene_Equip.prototype.activateInventoryItems = function(index = 0) {
    this.hideAllWindows();
    this._itemsWindow.show();
    this._commandWindow.deactivate();
    this._itemsWindow.activate();
    this._itemsWindow.select(index);
    this._itemsWindow.refresh();
};

Scene_Equip.prototype.openCommandWindowItem = function(){
    if (this._itemsWindow.isOpenAndActive() && this._itemsWindow.index() >= 0){
        console.log("item selected : ", this._itemsWindow.index());
        this._itemsWindow.deactivate();
        this._itemsCommandWindow.show();
        this._itemsCommandWindow.activate();
        this._itemsCommandWindow.select(0);
        this._itemsWindow._helpWindow.show();
        this._itemsWindow._helpWindow.refresh();
    }
}

Scene_Equip.prototype.useItem = function(){
    console.log("Use item : ", this._itemsWindow.index());
    this._itemsCommandWindow.callHandler('cancel');
}

Scene_Equip.prototype.transferItem = function(){
    console.log("Transfer item", this._itemsWindow.index());
    this._itemsCommandWindow.callHandler('cancel');
}