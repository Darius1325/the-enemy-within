// #region ============================== import ============================== //
var Imported = Imported || {};
Imported.TEW_Menus = true;
var TEW = TEW || {};
TEW.MENU = TEW.MENU || {};
// #endregion =========================== import ============================== //
// ============================== //
// #region ============================== Scene_Equip ============================== //
// #endregion =========================== Scene_Equip ============================== //
// ============================== //
// #region ============================== properties ============================== //
TEW.MENU.COMMAND_NAMES = TEW.MENU.COMMAND_NAMES || {};
// Main Menu
TEW.MENU.COMMAND_NAMES[30] = "Status";
TEW.MENU.COMMAND_NAMES[31] = "Inventory";
TEW.MENU.COMMAND_NAMES[32] = "Quests";
TEW.MENU.COMMAND_NAMES[33] = "Formation";
TEW.MENU.COMMAND_NAMES[34] = "Options";
TEW.MENU.COMMAND_NAMES[35] = "Save";
TEW.MENU.COMMAND_NAMES[36] = "Quit";
// Status Menu
TEW.MENU.COMMAND_NAMES[50] = "Stats";
TEW.MENU.COMMAND_NAMES[51] = "Skills";
TEW.MENU.COMMAND_NAMES[52] = "Talents";
TEW.MENU.COMMAND_NAMES[53] = "Spells";
TEW.MENU.COMMAND_NAMES[54] = "Cast";
// Inventory Menu
TEW.MENU.COMMAND_NAMES[70] = "InventoryNextChar";
TEW.MENU.COMMAND_NAMES[71] = "InventoryPreviousChar";
TEW.MENU.COMMAND_NAMES[72] = "Infos";
TEW.MENU.COMMAND_NAMES[73] = "Weapons";
TEW.MENU.COMMAND_NAMES[74] = "Armors";
TEW.MENU.COMMAND_NAMES[75] = "Items";
TEW.MENU.COMMAND_NAMES[76] = "Ammo";
TEW.MENU.COMMAND_NAMES[77] = "Use";
TEW.MENU.COMMAND_NAMES[78] = "Transfer";
TEW.MENU.COMMAND_NAMES[79] = "Equip";
TEW.MENU.COMMAND_NAMES[80] = "Unequip";
TEW.MENU.COMMAND_NAMES[81] = "Transfer";
TEW.MENU.COMMAND_NAMES[82] = "Reload";
TEW.MENU.COMMAND_NAMES[83] = "Equip";
TEW.MENU.COMMAND_NAMES[84] = "Unequip";
TEW.MENU.COMMAND_NAMES[85] = "Transfer";
TEW.MENU.COMMAND_NAMES[86] = TEW.CHARACTERS.ARRAY[0];
TEW.MENU.COMMAND_NAMES[87] = TEW.CHARACTERS.ARRAY[1];
TEW.MENU.COMMAND_NAMES[88] = TEW.CHARACTERS.ARRAY[2];
TEW.MENU.COMMAND_NAMES[89] = TEW.CHARACTERS.ARRAY[3];
TEW.MENU.COMMAND_NAMES[90] = TEW.CHARACTERS.ARRAY[4];
TEW.MENU.COMMAND_NAMES[91] = TEW.CHARACTERS.ARRAY[5];
TEW.MENU.LINE_HEIGHT = 36;
TEW.MENU.STANDARD_PADDING = 18;
TEW.MENU.WINDOW_BACKGROUND_PADDING = 12; // 30px total padding
// TextManager
// Override commands
TextManager.command = function (commandId) {
    if (commandId <= 25) {
        return $dataSystem.terms.commands[commandId] || '';
    }
    else {
        return TEW.MENU.COMMAND_NAMES[commandId] || '';
    }
};
// A key
Input.keyMapper[65] = "A_Key";
Input.keyMapper[69] = "E_Key";
// Windows TODO move
TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT = 72;
TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT = 72;
TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT = 134;
// The window for selecting a command on the inventory screen.
// Adding new Commands Entries
Object.defineProperties(TextManager, {
    // Main Menu
    mainMenuStatus: TextManager.getter('command', 30),
    mainMenuInventory: TextManager.getter('command', 31),
    mainMenuQuests: TextManager.getter('command', 32),
    mainMenuFormation: TextManager.getter('command', 33),
    mainMenuOptions: TextManager.getter('command', 34),
    mainMenuSave: TextManager.getter('command', 35),
    mainMenuGameEnd: TextManager.getter('command', 36),
    // Status Menu
    statusStats: TextManager.getter('command', 50),
    statusComps: TextManager.getter('command', 51),
    statusTalents: TextManager.getter('command', 52),
    statusSpells: TextManager.getter('command', 53),
    statusCastSpell: TextManager.getter('command', 54),
    // Inventory Menu
    inventoryNextChar: TextManager.getter('command', 70),
    inventoryPreviousChar: TextManager.getter('command', 71),
    inventoryInfos: TextManager.getter('command', 72),
    inventoryWeapons: TextManager.getter('command', 73),
    inventoryArmors: TextManager.getter('command', 74),
    inventoryItems: TextManager.getter('command', 75),
    inventoryAmmo: TextManager.getter('command', 76),
    inventoryItemUse: TextManager.getter('command', 77),
    inventoryItemTransfer: TextManager.getter('command', 78),
    inventoryWeaponEquip: TextManager.getter('command', 79),
    inventoryWeaponUnequip: TextManager.getter('command', 80),
    inventoryWeaponTransfer: TextManager.getter('command', 81),
    inventoryWeaponReload: TextManager.getter('command', 82),
    inventoryArmorEquip: TextManager.getter('command', 83),
    inventoryArmorUnequip: TextManager.getter('command', 84),
    inventoryArmorTransfer: TextManager.getter('command', 85),
    inventoryTransferTo0: TextManager.getter('command', 86),
    inventoryTransferTo1: TextManager.getter('command', 87),
    inventoryTransferTo2: TextManager.getter('command', 88),
    inventoryTransferTo3: TextManager.getter('command', 89),
    inventoryTransferTo4: TextManager.getter('command', 90),
    inventoryTransferTo5: TextManager.getter('command', 91),
});
// #endregion =========================== properties ============================== //
// ============================== //
// #region ============================== Scene_Menu ============================== //
// ----------------------
function Scene_Menu() {
    this.initialize.apply(this, arguments);
}
Scene_Menu.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Menu.prototype.constructor = Scene_Menu;
Scene_Menu.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
};
Scene_Menu.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createCommandWindow();
    this.createGoldWindow();
    this.createStatusWindow();
};
Scene_Menu.prototype.start = function () {
    Scene_MenuBase.prototype.start.call(this);
    this._statusMenuWindow.refresh();
};
Scene_Menu.prototype.addFullscreenBackground = function () {
    this._background = new Sprite(ImageManager.loadSystem('bg_fullscreen'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};
Scene_Menu.prototype.createCommandWindow = function () {
    this._commandWindow = new Window_MenuCommand(50, 30); // TODO constants
    this._commandWindow.setHandler('menu_status', this.commandPersonal.bind(this));
    this._commandWindow.setHandler('menu_inventory', this.commandPersonal.bind(this));
    this._commandWindow.setHandler('menu_formation', this.commandFormation.bind(this));
    this._commandWindow.setHandler('menu_quest', this.commandQuests.bind(this));
    this._commandWindow.setHandler('options', this.commandOptions.bind(this));
    this._commandWindow.setHandler('save', this.commandSave.bind(this));
    this._commandWindow.setHandler('gameEnd', this.commandGameEnd.bind(this));
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};
Scene_Menu.prototype.createGoldWindow = function () {
    this._goldWindow = new Window_Gold(50, 584); // TODO constants
    this.addWindow(this._goldWindow);
};
Scene_Menu.prototype.createStatusWindow = function () {
    this._statusMenuWindow = new Window_MenuStatus(460, 10); // TODO constants
    this._statusMenuWindow.reserveFaceImages();
    this.addWindow(this._statusMenuWindow);
};
Scene_Menu.prototype.commandPersonal = function () {
    this._statusMenuWindow.setFormationMode(false);
    this._statusMenuWindow.selectLast();
    this._statusMenuWindow.activate();
    this._statusMenuWindow.setHandler('ok', this.onPersonalOk.bind(this));
    this._statusMenuWindow.setHandler('cancel', this.onPersonalCancel.bind(this));
};
Scene_Menu.prototype.commandFormation = function () {
    this._statusMenuWindow.setFormationMode(true);
    this._statusMenuWindow.selectLast();
    this._statusMenuWindow.activate();
    this._statusMenuWindow.setHandler('ok', this.onFormationOk.bind(this));
    this._statusMenuWindow.setHandler('cancel', this.onFormationCancel.bind(this));
};
Scene_Menu.prototype.commandQuests = function () {
    // SceneManager.push(Scene_Quests); // TODO
};
Scene_Menu.prototype.commandOptions = function () {
    SceneManager.push(Scene_Options);
};
Scene_Menu.prototype.commandSave = function () {
    SceneManager.push(Scene_Save);
};
Scene_Menu.prototype.commandGameEnd = function () {
    SceneManager.push(Scene_GameEnd);
};
Scene_Menu.prototype.onPersonalOk = function () {
    switch (this._commandWindow.currentSymbol()) {
        case 'menu_status':
            SceneManager.push(Scene_Status);
            break;
        case 'menu_inventory':
            SceneManager.push(Scene_Equip);
            break;
        default:
            break;
    }
};
Scene_Menu.prototype.onPersonalCancel = function () {
    this._statusMenuWindow.deselect();
    this._commandWindow.activate();
};
Scene_Menu.prototype.onFormationOk = function () {
    var index = this._statusMenuWindow.index();
    var actor = $gameParty.members()[index];
    var pendingIndex = this._statusMenuWindow.pendingIndex();
    if (pendingIndex >= 0) {
        $gameParty.swapOrder(index, pendingIndex);
        this._statusMenuWindow.setPendingIndex(-1);
        this._statusMenuWindow.redrawItem(index);
    }
    else {
        this._statusMenuWindow.setPendingIndex(index);
    }
    this._statusMenuWindow.activate();
};
Scene_Menu.prototype.onFormationCancel = function () {
    if (this._statusMenuWindow.pendingIndex() >= 0) {
        this._statusMenuWindow.setPendingIndex(-1);
        this._statusMenuWindow.activate();
    }
    else {
        this._statusMenuWindow.deselect();
        this._commandWindow.activate();
    }
};
// #endregion =========================== Scene_Menu ============================== //
// ============================== //
// #region ============================== HalfWindow_Details ============================== //
//-----------------------------------------------------------------------------
// HalfWindow_Details
//
// Super object to manage all item details windows
function HalfWindow_Details() {
    this.initialize.apply(this, arguments);
}
HalfWindow_Details.prototype = Object.create(Window_Base.prototype);
HalfWindow_Details.prototype.constructor = HalfWindow_Details;
// Initalizing the window
HalfWindow_Details.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this, Graphics.boxWidth / 2, TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT, this.windowWidth(), this.windowHeight());
    this.width = Graphics.boxWidth / 2;
    this.activate();
    this.refresh();
};
HalfWindow_Details.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
// Drawing an underlined Text
HalfWindow_Details.prototype.drawUnderlinedText = function (text, x, y, width, align) {
    // Draw text
    this.drawText(text, x, y, width, align);
    // Getting position of the line
    const textSize = this.contents.fontSize;
    const textWidth = this.textWidth(text);
    const lineY = y + textSize + 2;
    // Drawing the line
    this.contents.paintOpacity = 255;
    this.contents.fillRect(x + (align === "center" ? (width - textWidth) / 2 : align === "right" ? width - textWidth : 0), lineY, textWidth, 2, // Thickness
    this.normalColor());
};
// Drawing a table with 2 columns
HalfWindow_Details.prototype.drawTable2Columns = function (x, y, width, rows, textArray) {
    const cellWidthFirstRow = width / 3;
    const cellWidthSecondRow = width / 3 * 2;
    const cellHeight = this.lineHeight();
    for (let row = 0; row < rows; row++) {
        const cellXTh = x;
        const cellXTd = x + cellWidthFirstRow;
        const cellY = y + row * cellHeight;
        this.drawText(textArray[row][0], cellXTh + 5, cellY, cellWidthFirstRow - 10, "left");
        this.drawText(textArray[row][1], cellXTd + 5, cellY, cellWidthSecondRow - 10, "left");
    }
};
// // Drawing a wrapped text - used to draw to description
// HalfWindow_Details.prototype.drawWrappedTextManually = function(text: string, x: number, y: number, fontSize: number) {
//     const words = text.split(" ");
//     const maxWidth = this.contentsWidth() - x;
//     if (text.length <= 100){ this.contents.fontSize = 28; }
//     else if (text.length <= 200){ this.contents.fontSize = 20; }
//     // else if (text.length <= 200) { this.contents.fontSize = 16; }
//     else { this.contents.fontSize = 16; }
//     const spaceWidth = this.textWidth(" ");
//     const lineHeight = fontSize * 1.2;
//     let currentX = x;
//     let currentY = y;
//     words.forEach(word => {
//         const wordWidth = this.textWidth(word);
//         // If the word is too long, drawing it on the next line
//         if (currentX + wordWidth > maxWidth) {
//             currentX = x; // begining of the line
//             currentY += lineHeight; // next line
//         }
//         // drawing it on the current line
//         this.drawText(word, currentX, currentY, wordWidth, 'left');
//         currentX += wordWidth + spaceWidth;
//     });
//     this.resetFontSettings();
// };
HalfWindow_Details.prototype.drawLine = function (y) {
    const lineWidth = 40;
    const lineSize = 2;
    this.contents.fillRect((this.contentsWidth() - lineWidth) / 2, y, lineWidth, lineSize, this.normalColor());
};
HalfWindow_Details.prototype.clear = function () {
    if (this.contents) {
        this.contents.clear();
    }
};
// #endregion =========================== HalfWindow_Details ============================== //
// ============================== //
// #region ============================== HalfWindow_DetailsCommand ============================== //
//-----------------------------------------------------------------------------
// HalfWindow_DetailsCommand
//
// Super object to manage individual item command windows
function HalfWindow_DetailsCommand() {
    this.initialize.apply(this, arguments);
}
;
// TODO maybe just fix every window's position?
HalfWindow_DetailsCommand.MARGIN_X = 180;
HalfWindow_DetailsCommand.MARGIN_Y = 20;
HalfWindow_DetailsCommand.prototype = Object.create(Window_Command.prototype);
HalfWindow_DetailsCommand.prototype.constructor = HalfWindow_DetailsCommand;
// Initializing the command window
HalfWindow_DetailsCommand.prototype.initialize = function (actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    Window_Command.prototype.initialize.call(this, Graphics.boxWidth / 2 + HalfWindow_DetailsCommand.MARGIN_X, Graphics.boxHeight - this.fittingHeight(actionsNumber) - HalfWindow_DetailsCommand.MARGIN_Y);
};
HalfWindow_DetailsCommand.prototype.addCommand = function (name, symbol, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext });
};
HalfWindow_DetailsCommand.prototype.clear = function () {
    this.clearCommandList();
    Window_Selectable.prototype.refresh.call(this);
};
// #endregion =========================== HalfWindow_DetailsCommand ============================== //
// ============================== //
// #region ============================== HalfWindow_List ============================== //
//-----------------------------------------------------------------------------
// HalfWindow_List
//
// Super object to manage all inventory list windows
function HalfWindow_List() {
    this.initialize.apply(this, arguments);
}
HalfWindow_List.prototype = Object.create(Window_Selectable.prototype);
HalfWindow_List.prototype.constructor = HalfWindow_List;
// TODO define fixed window dimensions (and graphical details?) in dedicated file
HalfWindow_List.prototype.windowWidth = function () {
    return 640;
};
HalfWindow_List.prototype.windowHeight = function () {
    return 648;
};
HalfWindow_List.prototype.backgroundImageName = function () {
    return "bg_statusHalfWindowLeft";
};
// Inializing the window
HalfWindow_List.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT, Graphics.boxWidth / 2, Graphics.boxHeight - TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT);
    this._actor = null;
    this._maxItems = 0;
    this._leftPadding = 10;
    this._rightColumnWidth = 20;
    this._rightColumnPosition = Graphics.boxWidth / 2 - this._rightColumnWidth * 4;
    this._iconPadding = 5;
    this.activate();
    this.refresh();
};
// Setting the actor
HalfWindow_List.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
// Refreshing the window
HalfWindow_List.prototype.refresh = function () {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};
// Number of items
HalfWindow_List.prototype.maxItems = function () {
    return this._maxItems;
};
// Number of columns
HalfWindow_List.prototype.maxCols = () => 1;
// #endregion =========================== HalfWindow_List ============================== //
// ============================== //
// #region ============================== Window_InventoryTransferCommand ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryTransferCommand
//
// Command window to choose which actor to transfer an item to
function Window_InventoryTransferCommand() {
    this.initialize.apply(this, arguments);
}
Window_InventoryTransferCommand.prototype = Object.create(Window_Command.prototype);
Window_InventoryTransferCommand.prototype.constructor = Window_InventoryTransferCommand;
Window_InventoryTransferCommand.ITEM = 'item';
Window_InventoryTransferCommand.WEAPON = 'weapon';
Window_InventoryTransferCommand.ARMOR = 'armor';
Window_InventoryTransferCommand.AMMO = 'ammo';
// Initializing the command window
Window_InventoryTransferCommand.prototype.initialize = function () {
    this._windowWidth = Graphics.boxWidth / 4;
    this._windowHeight = this.fittingHeight(5); // actor count - 1
    this.type = 'item';
    this.item = '';
    this.targetActor = undefined;
    this._addAction = Game_Actor.prototype.addItem;
    this._removeAction = Game_Actor.prototype.removeItem;
    Window_Command.prototype.initialize.call(this, this._windowWidth * 3, Graphics.boxHeight - this._windowHeight);
};
Window_InventoryTransferCommand.prototype.windowWidth = function () {
    return this._windowWidth;
};
Window_InventoryTransferCommand.prototype.windowHeight = function () {
    return this._windowHeight;
};
Window_InventoryTransferCommand.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.makeCommandList();
    }
};
Window_InventoryTransferCommand.prototype.setItemType = function (type) {
    this.type = type;
    switch (type) {
        case Window_InventoryTransferCommand.ITEM:
            this._addAction = Game_Actor.prototype.addItem;
            this._removeAction = Game_Actor.prototype.removeItem;
            break;
        case Window_InventoryTransferCommand.WEAPON:
            this._addAction = Game_Actor.prototype.transferWeapon;
            this._removeAction = Game_Actor.prototype.removeWeapon;
            break;
        case Window_InventoryTransferCommand.ARMOR:
            this._addAction = Game_Actor.prototype.addArmor;
            this._removeAction = Game_Actor.prototype.removeArmor;
            break;
        case Window_InventoryTransferCommand.AMMO:
            this._addAction = Game_Actor.prototype.addAmmo;
            this._removeAction = Game_Actor.prototype.removeAmmo;
            break;
        default:
            break;
    }
};
Window_InventoryTransferCommand.prototype.doTransfer = function (quantity = 1) {
    const removed = this._removeAction.call(this._actor, this.item, quantity);
    this._addAction.call(this.targetActor, removed, quantity);
};
Window_InventoryTransferCommand.prototype.makeCommandList = function () {
    if (this._actor != undefined) {
        for (let i = 1; i < $gameActors._data.length; i++) {
            const targetName = TEW.CHARACTERS.ARRAY[i - 1];
            if (targetName !== this._actor._name) {
                this.addCommand(TextManager["inventoryTransferTo" + (i - 1)], "inventory_transfer_to_" + (i - 1));
            }
        }
        Window_Selectable.prototype.refresh.call(this);
    }
};
// #endregion =========================== Window_InventoryTransferCommand ============================== //
// ============================== //
// #region ============================== Window_InventoryAmmo ============================== //
// //-----------------------------------------------------------------------------
// // Window_InventoryInfo
// //
// // TODO
// function Window_InventoryAmmo() {
//     this.initialize.apply(this, arguments);
// }
// Window_InventoryAmmo.prototype = Object.create(HalfWindow_List.prototype);
// Window_InventoryAmmo.prototype.constructor = Window_InventoryAmmo;
// Window_InventoryAmmo.prototype.initialize = function() {
//     HalfWindow_List.prototype.initialize.call(this);
//     this._helpWindow = null;
//     // this.setHandler('ok', this.showHelpWindow.bind(this));
// };
// Window_InventoryAmmo.prototype.setActor = function(actor: any) {
//     if (this._actor !== actor) {
//         this._actor = actor;
//         // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
//         // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
//         this.refresh();
//     }
// };
// #endregion =========================== Window_InventoryAmmo ============================== //
// ============================== //
// #region ============================== Window_InventoryArmorCommand ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryArmorCommand
//
// Individual armor command window
function Window_InventoryArmorCommand() {
    this.initialize.apply(this, arguments);
}
Window_InventoryArmorCommand.prototype = Object.create(HalfWindow_DetailsCommand.prototype);
Window_InventoryArmorCommand.prototype.constructor = Window_InventoryArmorCommand;
// Initializing the command window
Window_InventoryArmorCommand.prototype.initialize = function () {
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 2);
};
// Making the 2 lines
// TODO REMOVE
Window_InventoryArmorCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_armor_equip');
    this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_armor_transfer');
};
Window_InventoryArmorCommand.prototype.refreshCommand = function (equipped, armorId) {
    if (armorId) {
        this.clearCommandList();
        if (equipped) {
            this.addCommand(TextManager.inventoryArmorUnequip, 'inventory_armor_unequip');
            this.addCommand(TextManager.inventoryArmorTransfer, 'inventory_armor_transfer', false);
        }
        else {
            this.addCommand(TextManager.inventoryArmorEquip, 'inventory_armor_equip');
            this.addCommand(TextManager.inventoryArmorTransfer, 'inventory_armor_transfer');
        }
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};
// #endregion =========================== Window_InventoryArmorCommand ============================== //
// ============================== //
// #region ============================== Window_InventoryArmorDetails ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryArmorDetails
//
// The window for displaying an armor's details
function Window_InventoryArmorDetails() {
    this.initialize.apply(this, arguments);
}
Window_InventoryArmorDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_InventoryArmorDetails.prototype.constructor = Window_InventoryArmorDetails;
Window_InventoryArmorDetails.prototype.initialize = function () {
    HalfWindow_Details.prototype.initialize.call(this);
    this._armor = null;
};
// Refreshing the window
Window_InventoryArmorDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._armor) {
        this.drawDetails(this._armor);
    }
};
// Erase window content
Window_InventoryArmorDetails.prototype.empty = function () {
    this._armor = null;
};
// Drawing the details
Window_InventoryArmorDetails.prototype.drawDetails = function (armor) {
    // Title
    this.drawUnderlinedText(armor[1].name, 0, 0, this.contentsWidth(), "center");
    // Item's Icon
    this.drawIcon(armor[1].icon, 0, 0);
    // Availability Icon
    this.drawIcon(armor[1].availabilityIcon, this.contentsWidth() - 32, 0);
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
// #endregion =========================== Window_InventoryArmorDetails ============================== //
// ============================== //
// #region ============================== Window_InventoryArmors ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryArmors
//
// Armor list window
function Window_InventoryArmors() {
    this.initialize.apply(this, arguments);
}
Window_InventoryArmors.prototype = Object.create(HalfWindow_List.prototype);
Window_InventoryArmors.prototype.constructor = Window_InventoryArmors;
Window_InventoryArmors.prototype.initialize = function () {
    HalfWindow_List.prototype.initialize.call(this);
};
Window_InventoryArmors.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor(actor);
    }
};
Window_InventoryArmors.prototype.syncActor = function () {
    this._armors = [];
    this._equippedArmors = [];
    this._actor._equippedArmors.forEach((armor) => {
        this._equippedArmors.push(TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armor));
    });
    this._actor._armors.forEach((armor) => {
        this._armors.push(TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armor));
    });
    this._maxItems = this._armors.length + this._equippedArmors.length;
    this.refresh();
};
Window_InventoryArmors.prototype.drawAllItems = function () {
    const topIndex = this.topIndex();
    for (let i = 0; i < this.maxPageItems(); i++) {
        const index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
Window_InventoryArmors.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const armor = this.armorFromIndex(index);
    if (armor) {
        this.changeTextColor(this.systemColor());
        this.drawIcon(armor[1].equipped ? TEW.DATABASE.ICONS.SET.EQUIPPED_ARMOR : 0, x - 32, y);
        this.drawIcon(armor[1].icon, x, y);
        this.drawText(armor[1].name, x + 32 + this._iconPadding, y, this.contentsWidth() - (x + 32 + this._iconPadding));
        this.resetTextColor();
    }
};
Window_InventoryArmors.prototype.length = function () {
    return this._armors.length + this._equippedArmors.length;
};
// Get the armors
Window_InventoryArmors.prototype.items = function () {
    return [...this._armors, ...this._equippedArmors];
};
// Get an item from its index
Window_InventoryArmors.prototype.armorFromIndex = function (index) {
    const nbEquipped = this._equippedArmors.length;
    const nbUnequipped = this._armors.length;
    index = Math.min(index, nbEquipped + nbUnequipped - 1);
    if (index < nbEquipped) {
        const armor = this._equippedArmors[index];
        return [armor[0], Object.assign(Object.assign({}, armor[1]), { equipped: true })];
    }
    else {
        const armor = this._armors[index - nbEquipped];
        return [armor[0], Object.assign(Object.assign({}, armor[1]), { equipped: false })];
    }
};
// Get the current selected armor
Window_InventoryArmors.prototype.item = function () {
    return this.armorFromIndex(this.index());
};
Window_InventoryArmors.prototype.select = function (index) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_armor_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};
Window_InventoryArmors.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
// #endregion =========================== Window_InventoryArmors ============================== //
// ============================== //
// #region ============================== Window_InventoryInfo ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryInfo
//
// TODO
function Window_InventoryInfo() {
    this.initialize.apply(this, arguments);
}
Window_InventoryInfo.prototype = Object.create(HalfWindow_List.prototype);
Window_InventoryInfo.prototype.constructor = Window_InventoryInfo;
Window_InventoryInfo.prototype.initialize = function () {
    HalfWindow_List.prototype.initialize.call(this);
    this._helpWindow = null;
    // this.setHandler('ok', this.showHelpWindow.bind(this));
};
Window_InventoryInfo.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
        // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};
// #endregion =========================== Window_InventoryInfo ============================== //
// ============================== //
// #region ============================== Window_InventoryItemCommand ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryItemCommand
//
// The window for selecting a command on the items view.
function Window_InventoryItemCommand() {
    this.initialize.apply(this, arguments);
}
Window_InventoryItemCommand.prototype = Object.create(HalfWindow_DetailsCommand.prototype);
Window_InventoryItemCommand.prototype.constructor = Window_InventoryItemCommand;
// Initializing the command window
Window_InventoryItemCommand.prototype.initialize = function () {
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 2);
};
// Making the 2 lines
Window_InventoryItemCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.inventoryItemUse, 'inventory_item_use');
    this.addCommand(TextManager.inventoryItemTransfer, 'inventory_item_transfer');
};
// #endregion =========================== Window_InventoryItemCommand ============================== //
// ============================== //
// #region ============================== Window_InventoryItemDetails ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryItemDetails
//
// The window for displaying an item's details
function Window_InventoryItemDetails() {
    this.initialize.apply(this, arguments);
}
Window_InventoryItemDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_InventoryItemDetails.prototype.constructor = Window_InventoryItemDetails;
Window_InventoryItemDetails.prototype.initialize = function () {
    HalfWindow_Details.prototype.initialize.call(this);
    this._item = null;
};
// Refreshing the window
Window_InventoryItemDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._item) {
        this.drawItemDetails(this._item);
    }
    else if (this._ammo) {
        this.drawAmmoDetails(this._ammo);
    }
};
// Erase window content
Window_InventoryItemDetails.prototype.empty = function () {
    this._item = undefined;
};
// Drawing item details
Window_InventoryItemDetails.prototype.drawItemDetails = function (item) {
    // Title
    this.drawUnderlinedText(item[1].name, 0, 0, this.contentsWidth(), "center");
    // Item's Icon
    this.drawIcon(item[1].groupIcon, 0, 0);
    // Availability Icon
    this.drawIcon(item[1].availabilityIcon, this.contentsWidth() - 32, 0);
    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 3, [
        ["Owned :", "x" + item[1].quantity],
        ["Group :", item[1].groupLabel],
        ["Enc. :", item[1].enc || 0]
    ]);
    this.drawLine(200);
    // Description
    this.drawWrappedTextManually(item[1].description, 0, 220, 24);
};
// Drawing ammunition details
Window_InventoryItemDetails.prototype.drawAmmoDetails = function (ammo) {
    // Title
    this.drawUnderlinedText(ammo[1].name, 0, 0, this.contentsWidth(), "center");
    // Item's Icon
    this.drawIcon(ammo[1].groupIcon, 0, 0);
    // Availability Icon
    this.drawIcon(ammo[1].availabilityIcon, this.contentsWidth() - 32, 0);
    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
        ["Owned :", "x" + ammo[1].quantity],
        ["Group :", ammo[1].groupLabel]
    ]);
    this.drawLine(200);
    // Description
    this.drawWrappedTextManually(ammo[1].description, 0, 220, 24);
};
// #endregion =========================== Window_InventoryItemDetails ============================== //
// ============================== //
// #region ============================== Window_InventoryItems ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryItems
//
// General item list window
function Window_InventoryItems() {
    this.initialize.apply(this, arguments);
}
Window_InventoryItems.prototype = Object.create(HalfWindow_List.prototype);
Window_InventoryItems.prototype.constructor = Window_InventoryItems;
Window_InventoryItems.prototype.initialize = function () {
    HalfWindow_List.prototype.initialize.call(this);
};
Window_InventoryItems.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor();
    }
};
Window_InventoryItems.prototype.syncActor = function () {
    this._items = TEW.DATABASE.ITEMS.ARRAY.filter(item => this._actor.hasItem(item[0]));
    this._ammo = TEW.DATABASE.WEAPONS.AMMO_ARRAY.filter(ammo => this._actor.hasAmmo(ammo[0]));
    this._maxItems = this._ammo.length + this._items.length;
    this.refresh();
};
// Drawing all the items
Window_InventoryItems.prototype.drawAllItems = function () {
    const topIndex = this.topIndex();
    for (let i = 0; i < this.maxPageItems(); i++) {
        const index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
// Drawing one item
Window_InventoryItems.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = this._leftPadding; // padding
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const itemOrAmmo = this.itemOrAmmoFromIndex(index);
    this.changeTextColor(this.systemColor());
    this.drawIcon(itemOrAmmo[1].groupIcon, x, y);
    this.drawText(itemOrAmmo[1].name, x + 32 + this._iconPadding, y, this._rightColumnPosition);
    this.resetTextColor();
    if (index < this._ammo.length) {
        this.drawText(this._actor.ammo(itemOrAmmo[0]), this._rightColumnPosition, y, this._rightColumnWidth, 'right');
    }
    else {
        this.drawText(this._actor.item(itemOrAmmo[0]), this._rightColumnPosition, y, this._rightColumnWidth, 'right');
    }
};
// Getting an item from its index
Window_InventoryItems.prototype.itemOrAmmoFromIndex = function (index) {
    if (index < this._ammo.length) {
        return this._ammo[index];
    }
    index = Math.min(index, this._items.length - 1);
    return this._items[index - this._ammo.length];
};
// Getting the current selected item
Window_InventoryItems.prototype.item = function () {
    return this.itemOrAmmoFromIndex(this.index());
};
// Selecting an item
Window_InventoryItems.prototype.select = function (index) {
    if (this._index !== index) {
        this.hideHelpWindow();
    }
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_item_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};
// handling process OK
Window_InventoryItems.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
// #endregion =========================== Window_InventoryItems ============================== //
// ============================== //
// #region ============================== Window_InventoryWeaponCommand ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryWeaponCommand
//
// Weapon individual commands window
function Window_InventoryWeaponCommand() {
    this.initialize.apply(this, arguments);
}
Window_InventoryWeaponCommand.prototype = Object.create(HalfWindow_DetailsCommand.prototype);
Window_InventoryWeaponCommand.prototype.constructor = Window_InventoryWeaponCommand;
// Initializing the command window
Window_InventoryWeaponCommand.prototype.initialize = function () {
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 3);
};
// Making the 3 lines
// TODO REMOVE
Window_InventoryWeaponCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
    this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer');
    this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload');
};
Window_InventoryWeaponCommand.prototype.refreshCommand = function (actor, weaponIndex = 0) {
    if (actor) {
        const weapon = actor.weapon(weaponIndex);
        this.clearCommandList();
        if (weapon.isInMainHand || weapon.isInSecondHand) {
            this.addCommand(TextManager.inventoryWeaponUnequip, 'inventory_weapon_unequip');
            this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer', false);
        }
        else {
            this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
            this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer');
        }
        if (weapon.isReloadable) {
            this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload');
        }
        else {
            this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload', false);
        }
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};
// #endregion =========================== Window_InventoryWeaponCommand ============================== //
// ============================== //
// #region ============================== Window_InventoryWeaponDetails ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryWeaponDetails
//
// Weapon details window
function Window_InventoryWeaponDetails() {
    this.initialize.apply(this, arguments);
}
Window_InventoryWeaponDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_InventoryWeaponDetails.prototype.constructor = Window_InventoryWeaponDetails;
Window_InventoryWeaponDetails.prototype.initialize = function () {
    HalfWindow_Details.prototype.initialize.call(this);
    this._weapon = null;
};
// Refreshing the window
Window_InventoryWeaponDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._weapon) {
        this.drawDetails(this._weapon);
    }
};
// Erase window content
Window_InventoryWeaponDetails.prototype.empty = function () {
    this._weapon = null;
};
// Drawing the details
Window_InventoryWeaponDetails.prototype.drawDetails = function (weapon) {
    // Title
    this.drawUnderlinedText(weapon.name, 0, 0, this.contentsWidth(), "center");
    // Item's Icon
    this.drawIcon(weapon.icon, 0, 0);
    // Availability Icon
    this.drawIcon(weapon.availabilityIcon, this.contentsWidth() - 32, 0);
    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 2, [
        // ["Owned :", "x" + item[1].quantity],
        ["Group :", weapon.groupLabel],
        ["Enc. :", weapon.enc]
    ]);
    this.drawLine(200);
    // Description
    this.drawWrappedTextManually(weapon.description, 0, 220, 24);
};
// #endregion =========================== Window_InventoryWeaponDetails ============================== //
// ============================== //
// #region ============================== Window_InventoryWeapons ============================== //
// ----------------------
function Window_InventoryWeapons() {
    this.initialize.apply(this, arguments);
}
Window_InventoryWeapons.prototype = Object.create(HalfWindow_List.prototype);
Window_InventoryWeapons.prototype.constructor = Window_InventoryWeapons;
Window_InventoryWeapons.prototype.initialize = function () {
    HalfWindow_List.prototype.initialize.call(this);
};
Window_InventoryWeapons.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.syncActor();
    }
};
Window_InventoryWeapons.prototype.length = function () {
    return this._weapons.length
        + (this._mainHandWeapon != undefined ? 1 : 0)
        + (this._secondHandWeapon != undefined ? 1 : 0);
};
Window_InventoryWeapons.prototype.syncActor = function () {
    const actor = this._actor;
    const displayedWeapons = actor._weapons.map((weapon, index) => {
        const weaponData = Object.assign({}, TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === weapon.id));
        return Object.assign(Object.assign(Object.assign({ id: weaponData[0] }, weaponData[1]), weapon), { equipIndex: index, equipIcon: weapon.isInMainHand
                ? TEW.DATABASE.ICONS.SET.EQUIPPED_MAIN_HAND
                : weapon.isInSecondHand
                    ? TEW.DATABASE.ICONS.SET.EQUIPPED_SECOND_HAND
                    : 0 });
    });
    this._weapons = displayedWeapons.filter((weapon) => !weapon.isInMainHand && !weapon.isInSecondHand);
    this._maxItems = this._weapons.length;
    this._mainHandWeapon = displayedWeapons.find((weapon) => weapon.isInMainHand);
    if (this._mainHandWeapon) {
        this._maxItems++;
    }
    this._secondHandWeapon = displayedWeapons.find((weapon) => weapon.isInSecondHand);
    if (this._secondHandWeapon) {
        this._maxItems++;
    }
    this.refresh();
};
Window_InventoryWeapons.prototype.drawAllItems = function () {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
Window_InventoryWeapons.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const weapon = this.weaponFromIndex(index);
    if (weapon) {
        this.changeTextColor(this.systemColor());
        this.drawIcon(weapon.equipIcon || 0, x - 32, y);
        this.drawIcon(weapon.icon, x, y);
        this.drawText(weapon.name, x + 32 + this._iconPadding, y, this.contentsWidth());
        this.resetTextColor();
    }
};
Window_InventoryWeapons.prototype.weaponFromIndex = function (index) {
    index = Math.min(index, this.maxItems() - 1);
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
    }
    else if (index === 1) {
        if (this._mainHandWeapon && this._secondHandWeapon) {
            weapon = this._secondHandWeapon;
        }
        else if (this._mainHandWeapon || this._secondHandWeapon) {
            weapon = this._weapons[0];
        }
        else {
            weapon = this._weapons[1];
        }
    }
    else {
        let realIndex = index;
        if (this._mainHandWeapon)
            realIndex--;
        if (this._secondHandWeapon)
            realIndex--;
        weapon = this._weapons[realIndex];
    }
    return weapon;
};
// Getting the current selected weapon
Window_InventoryWeapons.prototype.item = function () {
    return this.weaponFromIndex(this.index());
};
Window_InventoryWeapons.prototype.select = function (index) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_weapon_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};
Window_InventoryWeapons.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
// #endregion =========================== Window_InventoryWeapons ============================== //
// ============================== //
// #region ============================== Window_InventoryCommand ============================== //
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
Window_InventoryCommand.prototype.initialize = function (x, y, width) {
    this._windowHeight = TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};
// Max column number
Window_InventoryCommand.prototype.maxCols = function () {
    return 4;
};
// Making the 5 tabs
Window_InventoryCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.inventoryInfos, 'inventory_infos');
    this.addCommand(TextManager.inventoryWeapons, 'inventory_weapons');
    this.addCommand(TextManager.inventoryArmors, 'inventory_armors');
    this.addCommand(TextManager.inventoryItems, 'inventory_items');
};
Window_InventoryCommand.prototype.cursorRight = function (wrap) {
    Window_HorzCommand.prototype.cursorRight.call(this, wrap);
    this.callHandler('right');
};
Window_InventoryCommand.prototype.cursorLeft = function (wrap) {
    Window_HorzCommand.prototype.cursorLeft.call(this, wrap);
    this.callHandler('left');
};
Window_InventoryCommand.prototype.verticalBorderPadding = function () {
    return TEW.MENU.STANDARD_PADDING;
};
// #endregion =========================== Window_InventoryCommand ============================== //
// ============================== //
// #region ============================== Window_InventoryHelp ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryHelp
//
// The help window for inventory pages
function Window_InventoryHelp() {
    this.initialize.apply(this, arguments);
}
Window_InventoryHelp.prototype = Object.create(Window_Help.prototype);
Window_InventoryHelp.prototype.constructor = Window_InventoryHelp;
// Initializing the help window
Window_InventoryHelp.prototype.initialize = function (numLines = 2) {
    Window_Help.prototype.initialize.call(this, numLines);
    const yStartPos = Graphics.height - (numLines + 1) * this.lineHeight();
    this.move(0, yStartPos, Graphics.width, Graphics.height - yStartPos);
    this._textArray = [];
    this._iconsArray = [];
};
Window_InventoryHelp.prototype.reshape = function (numLines = 2) {
    // this.height = this.fittingHeight(numLines);
    const yStartPos = Graphics.height - (numLines + 1) * this.lineHeight();
    this.move(0, yStartPos, Graphics.width, Graphics.height - yStartPos);
    this.contents.resize(Graphics.width, this.fittingHeight(numLines));
};
Window_InventoryHelp.prototype.clear = function () {
    this.contents.clear();
    this._textArray = [];
    this._iconsArray = [];
};
Window_InventoryHelp.prototype.addText = function (text, x, y) {
    this._textArray.push({
        desc: text,
        x: x,
        y: y
    });
};
Window_InventoryHelp.prototype.addIcon = function (iconId, x, y) {
    this._iconsArray.push({
        id: iconId,
        x: x,
        y: y
    });
};
Window_InventoryHelp.prototype.refresh = function () {
    this.contents.clear();
    // Drawing the text
    this._textArray.forEach((text) => {
        this.drawText(text.desc, text.x, text.y, Graphics.width, text.align || 'left');
    });
    // Drawing the icons
    this._iconsArray.forEach((icon) => {
        this.drawIcon(icon.id, icon.x, icon.y);
    });
};
// #endregion =========================== Window_InventoryHelp ============================== //
// ============================== //
// #region ============================== Window_Gold ============================== //
// TODO define fixed window dimensions (and graphical details?) in dedicated file
Window_Gold.prototype.windowWidth = function () {
    return 280;
};
Window_Gold.prototype.windowHeight = function () {
    return 96;
};
Window_Gold.prototype.backgroundImageName = function () {
    return "bg_gold";
};
Window_Gold.prototype.refresh = function () {
    const x = this.textPadding();
    const textWidth = this.contents.width - this.textPadding() * 2 - this.horizontalBorderPadding() * 2;
    this.contents.clear();
    this.drawCurrencyValue(this.value(), this.currencyUnit(), x, 0, textWidth);
};
// #endregion =========================== Window_Gold ============================== //
// ============================== //
// #region ============================== Window_MenuCommand ============================== //
// ----------------------
// TODO define fixed window dimensions (and graphical details?) in dedicated file
Window_MenuCommand.prototype.windowWidth = function () {
    return 280;
};
Window_MenuCommand.prototype.windowHeight = function () {
    return 312;
};
Window_MenuCommand.prototype.backgroundImageName = function () {
    return "bg_menuCommand";
};
Window_MenuCommand.prototype.makeCommandList = function () {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOptionsCommand();
    this.addSaveCommand();
    this.addGameEndCommand();
};
Window_MenuCommand.prototype.addMainCommands = function () {
    this.addCommand(TextManager.mainMenuStatus, 'menu_status', true);
    this.addCommand(TextManager.mainMenuInventory, 'menu_inventory', true);
    this.addCommand(TextManager.mainMenuQuests, 'menu_quests', false);
};
Window_MenuCommand.prototype.addFormationCommand = function () {
    this.addCommand(TextManager.mainMenuFormation, 'menu_formation', false); // TODO
};
Window_MenuCommand.prototype.addOptionsCommand = function () {
    this.addCommand(TextManager.mainMenuOptions, 'options', true);
};
Window_MenuCommand.prototype.addSaveCommand = function () {
    this.addCommand(TextManager.mainMenuSave, 'save', true);
};
Window_MenuCommand.prototype.addGameEndCommand = function () {
    this.addCommand(TextManager.mainMenuGameEnd, 'gameEnd', true);
};
Window_MenuCommand.prototype.processOk = function () {
    Window_MenuCommand._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};
Window_MenuCommand.prototype.selectLast = function () {
    this.selectSymbol(Window_MenuCommand._lastCommandSymbol);
};
// #endregion =========================== Window_MenuCommand ============================== //
// ============================== //
// #region ============================== Window_MenuStatus ============================== //
// TODO define fixed window dimensions (and graphical details?) in dedicated file
Window_MenuStatus.prototype.windowWidth = function () {
    return 800;
};
Window_MenuStatus.prototype.windowHeight = function () {
    return 700;
};
Window_MenuStatus.prototype.backgroundImageName = function () {
    return "bg_menuStatus";
};
// #endregion =========================== Window_MenuStatus ============================== //
// ============================== //
// #region ============================== Scene_Status ============================== //
// ----------------------
Scene_Status.prototype.STATS_WINDOW_INDEX = 0;
Scene_Status.prototype.COMPS_WINDOW_INDEX = 1;
Scene_Status.prototype.TALENTS_WINDOW_INDEX = 2;
Scene_Status.prototype.SPELLS_WINDOW_INDEX = 3;
// Creating the scene
Scene_Status.prototype.create = function () {
    // Init
    Scene_MenuBase.prototype.create.call(this);
    this.addFullscreenBackground();
    // Command window
    this.createCommandWindow();
    // Info window
    this.createStatsWindow();
    // Competences window
    this.createCompsWindow();
    // Talents windows
    this.createTalentsWindow();
    this.createTalentDescriptionWindow();
    // Spells windows
    this.createSpellsWindow();
    this.createSpellCommandWindow();
    this.createSpellDetailsWindow();
    this.activateStatusStats(); // Desactivate all the windows, except the stats one
    this.refreshActor();
};
Scene_Status.prototype.addFullscreenBackground = function () {
    this._background = new Sprite(ImageManager.loadSystem('bg_fullscreen'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};
// #region ====== All windows handling === //
// Hiding all the windows
Scene_Status.prototype.hideAllWindows = function () {
    this._statsWindow.hide();
    this._statsWindow.deactivate();
    this._competencesWindow.hide();
    this._competencesWindow.deactivate();
    this._talentsWindow.hide();
    this._talentsWindow.deactivate();
    this._talentDescriptionWindow.hide();
    this._talentDescriptionWindow.deactivate();
    this._spellsWindow.hide();
    this._spellsWindow.deactivate();
    this._spellsCommandWindow.hide();
    this._spellsCommandWindow.deactivate();
    this._spellsDetailsWindow.hide();
    this._spellsDetailsWindow.deactivate();
};
// Showing the corresponding window according to the current command window index
Scene_Status.prototype.displayWindow = function () {
    // hide all
    this.hideAllWindows();
    // Changing window
    if (this._commandWindow.index() === this.STATS_WINDOW_INDEX) {
        this._statsWindow.show();
        this._statsWindow.refresh();
    }
    else if (this._commandWindow.index() === this.COMPS_WINDOW_INDEX) {
        this._competencesWindow.show();
        this._competencesWindow.refresh();
    }
    else if (this._commandWindow.index() === this.TALENTS_WINDOW_INDEX) {
        this._talentsWindow.show();
        this._talentsWindow.refresh();
        this._talentDescriptionWindow.show();
        this._talentDescriptionWindow.refresh();
    }
    else if (this._commandWindow.index() === this.SPELLS_WINDOW_INDEX) {
        this._spellsWindow.show();
        this._spellsDetailsWindow.show();
        this._spellsCommandWindow.show();
        this._spellsWindow.refresh();
        this._spellsDetailsWindow.refresh();
        this._spellsCommandWindow.clear();
    }
};
// #endregion === All windows handling === //
// #region ====== Actor and command Window === //
// Refreshing the actor
Scene_Status.prototype.refreshActor = function () {
    var actor = this.actor();
    this._statsWindow.setActor(actor);
    this._competencesWindow.setActor(actor);
    this._talentsWindow.setActor(actor);
    this._spellsWindow.setActor(actor);
};
// Creating the commands for this scene
Scene_Status.prototype.createCommandWindow = function () {
    this._commandWindow = new Window_StatusCommand(0, 0);
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
    this._commandWindow.setHandler('right', this.displayWindow.bind(this));
    this._commandWindow.setHandler('left', this.displayWindow.bind(this));
    this._commandWindow.setHandler('status_stats', this.activateStatusStats.bind(this));
    this._commandWindow.setHandler('status_comps', this.activateStatusComps.bind(this));
    this._commandWindow.setHandler('status_talents', this.activateStatusTalents.bind(this));
    this._commandWindow.setHandler('status_spells', this.activateStatusSpells.bind(this));
    this.addWindow(this._commandWindow);
};
// #endregion === Actor and command Window === //
// === //
// #region ====== Stats window === //
// Creating the stats Window for the scene
Scene_Status.prototype.createStatsWindow = function () {
    this._statsWindow = new Window_StatusStats();
    this._statsWindow.reserveFaceImages();
    this.addWindow(this._statsWindow);
};
// Activating the stats window
Scene_Status.prototype.activateStatusStats = function () {
    this.hideAllWindows();
    this._statsWindow.show();
    this._commandWindow.activate();
    this._statsWindow.refresh();
};
// #endregion === Stats window === //
// === //
// #region ====== Competences window === //
// Creating the competences Window for the scene
Scene_Status.prototype.createCompsWindow = function () {
    this._competencesWindow = new Window_StatusCompetences();
    this._competencesWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._competencesWindow.deselect();
    });
    this._competencesWindow.hide();
    this.addWindow(this._competencesWindow);
};
// Activating the competences window
Scene_Status.prototype.activateStatusComps = function (index = 0) {
    this.hideAllWindows();
    this._competencesWindow.show();
    this._commandWindow.deactivate();
    this._competencesWindow.activate();
    this._competencesWindow.select(index);
    this._competencesWindow.refresh();
};
// #endregion === Competences window === //
// === //
// #region ====== Talents windows === //
// Creating the talents Window for the scene
Scene_Status.prototype.createTalentsWindow = function () {
    this._talentsWindow = new Window_StatusTalents();
    this._talentsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._talentsWindow.deselect();
    });
    this._talentsWindow.hide();
    this.addWindow(this._talentsWindow);
};
// Creating the items details Window for the scene
Scene_Status.prototype.createTalentDescriptionWindow = function () {
    this._talentDescriptionWindow = new Window_StatusTalentDescription();
    this._talentsWindow.setHandler('show_talent_description', () => {
        this.showTalentDescription();
    });
    this._talentDescriptionWindow.hide();
    this.addWindow(this._talentDescriptionWindow);
};
// Activating the talents window
Scene_Status.prototype.activateStatusTalents = function (index = 0) {
    const nbTalents = this._talentsWindow._talents.length;
    this.hideAllWindows();
    this._talentsWindow.show();
    this._talentDescriptionWindow.show();
    if (nbTalents > 0) {
        this._commandWindow.deactivate();
        this._talentsWindow.activate();
        this._talentsWindow.select(index);
    }
    else {
        this._commandWindow.activate();
        this._talentsWindow.deselect();
        this._talentDescriptionWindow.empty();
        this._talentDescriptionWindow.clear();
    }
    this._talentsWindow.refresh();
};
// Showing the talent description
Scene_Status.prototype.showTalentDescription = function () {
    const talent = this._talentsWindow.talentFromIndex(this._talentsWindow.index());
    this._talentDescriptionWindow._talent = talent;
    this._talentDescriptionWindow.refresh();
};
// #endregion === Talents windows === //
// === //
// #region ====== Spells windows === //
// Creating the spells Window for the scene
Scene_Status.prototype.createSpellsWindow = function () {
    this._spellsWindow = new Window_StatusSpells();
    this._spellsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._spellsWindow.deselect();
    });
    this._spellsWindow.setHandler('ok', () => {
        this.activateCommandWindowSpells();
    });
    this._spellsWindow.hide();
    this.addWindow(this._spellsWindow);
};
Scene_Status.prototype.createSpellCommandWindow = function () {
    this._spellsCommandWindow = new Window_StatusSpellCommand();
    this._spellsCommandWindow.setHandler('cancel', () => {
        this._spellsCommandWindow.deactivate();
        this._spellsCommandWindow.deselect();
        this.activateStatusSpells(this._spellsWindow.index());
    });
    this._spellsCommandWindow.setHandler('status_cast_spell', this.castSpell.bind(this));
    this._spellsCommandWindow.hide();
    this._spellsCommandWindow.deselect();
    this.addWindow(this._spellsCommandWindow);
};
Scene_Status.prototype.createSpellDetailsWindow = function () {
    this._spellsDetailsWindow = new Window_StatusSpellDetails(this._spellsCommandWindow.fittingHeight(this._spellsCommandWindow._actionsNumber));
    this._spellsWindow.setHandler('show_spell_details', () => {
        this.showSpellDetails();
    });
    this._spellsDetailsWindow.hide();
    this.addWindow(this._spellsDetailsWindow);
};
// Activating the spells window
Scene_Status.prototype.activateStatusSpells = function (index = 0) {
    const nbSpells = this._spellsWindow._maxItems;
    this.hideAllWindows();
    this._spellsWindow.show();
    this._spellsDetailsWindow.show();
    this._spellsCommandWindow.show();
    this._spellsCommandWindow.deselect();
    if (nbSpells > 0) {
        this._commandWindow.deactivate();
        this._spellsWindow.activate();
        this._spellsWindow.select(index);
        this._spellsCommandWindow.refresh();
    }
    else {
        this._commandWindow.activate();
        this._spellsWindow.deselect();
        this._spellsDetailsWindow.empty();
        this._spellsDetailsWindow.clear();
        this._spellsCommandWindow.clear();
    }
    this._spellsWindow.refresh();
};
Scene_Status.prototype.showSpellDetails = function () {
    const spell = this._spellsWindow.spellFromIndex(this._spellsWindow.index());
    this._spellsDetailsWindow._spell = spell;
    this._spellsDetailsWindow.refresh();
};
// Casting a spell
Scene_Status.prototype.castSpell = function () {
    this._spellsCommandWindow.callHandler('cancel');
};
// Activating the command window for spells
Scene_Status.prototype.activateCommandWindowSpells = function () {
    if (this._spellsWindow.isOpenAndActive() && this._spellsWindow.index() >= 0) {
        this._spellsWindow.deactivate();
        this._spellsCommandWindow.show();
        this._spellsCommandWindow.activate();
        this._spellsCommandWindow.select(0);
    }
};
// #endregion === Spells windows === //
// #endregion =========================== Scene_Status ============================== //
// ============================== //
// #region ============================== Window_Status ============================== //
// -----------------------------------------------------------------------------
// Window_Status (override)
//
// Character info, stats, competences (skills), talents and spells window
Window_Status.BASE_COMPETENCE_LINE_COUNT = Math.ceil(TEW.DATABASE.COMPS.BASE_ARRAY.length / 2);
Window_Status.BASE_COMPETENCE_WINDOW_HEIGHT = (Window_Status.BASE_COMPETENCE_LINE_COUNT + 1) * TEW.MENU.LINE_HEIGHT;
Window_Status.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT, Graphics.boxWidth, Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT);
    this._actor = null;
    this._maxItems = 0;
    this.activate();
    this.refresh();
};
Window_Status.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
Window_Status.prototype.refresh = function () {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};
Window_Status.prototype.maxItems = function () {
    return this._maxItems;
};
// #endregion =========================== Window_Status ============================== //
// ============================== //
// #region ============================== Window_StatusCommand ============================== //
//-----------------------------------------------------------------------------
// Window_StatusCommand
//
// The window for selecting a command on the status screen.
function Window_StatusCommand() {
    this.initialize.apply(this, arguments);
}
Window_StatusCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_StatusCommand.prototype.constructor = Window_StatusCommand;
// Initializing the command window
Window_StatusCommand.prototype.initialize = function (x, y) {
    this._windowHeight = TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};
// Max column number
Window_StatusCommand.prototype.maxCols = function () {
    return 4;
};
// Making the 4 tabs
Window_StatusCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.statusStats, 'status_stats');
    this.addCommand(TextManager.statusComps, 'status_comps');
    this.addCommand(TextManager.statusTalents, 'status_talents');
    this.addCommand(TextManager.statusSpells, 'status_spells');
};
Window_StatusCommand.prototype.cursorRight = function (wrap) {
    Window_HorzCommand.prototype.cursorRight.call(this, wrap);
    this.callHandler('right');
};
Window_StatusCommand.prototype.cursorLeft = function (wrap) {
    Window_HorzCommand.prototype.cursorLeft.call(this, wrap);
    this.callHandler('left');
};
Window_StatusCommand.prototype.verticalBorderPadding = function () {
    return TEW.MENU.STANDARD_PADDING;
};
// #endregion =========================== Window_StatusCommand ============================== //
// ============================== //
// #region ============================== Window_StatusCompetences ============================== //
// ----------------------
function Window_StatusCompetences() {
    this.initialize.apply(this, arguments);
}
Window_StatusCompetences.prototype = Object.create(Window_Selectable.prototype);
Window_StatusCompetences.prototype.constructor = Window_StatusCompetences;
/**
 * Constructor for the Window_StatusCompetences class.
 */
Window_StatusCompetences.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT, Graphics.boxWidth, Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT);
    this._actor = null;
    this._maxItems = 0;
    this._leftPadding = 10;
    this._compColumnWidth = 340; // TODO constants
    this._levelColumnWidth = 100;
    this._statColumnWidth = 140;
    this.refresh();
};
/**
 * Sets the actor for the window.
 */
Window_StatusCompetences.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._advancedCompsList = TEW.DATABASE.COMPS.ADVANCED_ARRAY.filter(comp => actor.hasComp(comp[0]));
        this._maxItems = TEW.DATABASE.COMPS.BASE_ARRAY.length + this._advancedCompsList.length;
        this.refresh();
    }
};
/**
 * Returns the maximum number of columns in the window.
 */
Window_StatusCompetences.prototype.maxCols = () => 2;
/**
 * Draws all items in the window.
 */
Window_StatusCompetences.prototype.drawAllItems = function () {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
/**
 * Draws a single item in the window.
 */
Window_StatusCompetences.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 * this.width / 2 + this._leftPadding;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.LINE_HEIGHT;
    const comp = this.competenceFromIndex(index);
    // Comp name
    this.changeTextColor(this.systemColor());
    this.drawText(comp[1].name, x, y, this._compColumnWidth);
    this.resetTextColor();
    // Level of the comp
    const compLevel = this._actor.compPlus(comp[0]);
    const compLevelText = compLevel > 0 ? `Lvl${compLevel}` : "Base";
    this.drawText(compLevelText, x + this._compColumnWidth, y, this._levelColumnWidth, 'left');
    // Stats which the comp depends on
    const statName = comp ? comp[1].stat : null;
    const statNumber = this._actor.comp(comp[0]);
    const statText = `${statName} (${statNumber})`;
    this.drawText(statText, x + this._compColumnWidth + this._levelColumnWidth, y, this._statColumnWidth, 'left');
};
/**
 * Returns the competence from the given index.
 */
Window_StatusCompetences.prototype.competenceFromIndex = function (index) {
    return index < TEW.DATABASE.COMPS.BASE_ARRAY.length // [<internal name>, {<competence data>}]
        ? TEW.DATABASE.COMPS.BASE_ARRAY[index]
        : this._advancedCompsList[index - TEW.DATABASE.COMPS.BASE_ARRAY.length];
};
/**
 * Called when the process successfully completes.
 */
Window_StatusCompetences.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
/**
 * Returns the maximum number of items in the window.
 */
Window_StatusCompetences.prototype.maxItems = function () {
    return this._maxItems;
};
// #endregion =========================== Window_StatusCompetences ============================== //
// ============================== //
// #region ============================== Window_StatusSpellCommand ============================== //
// ----------------------
function Window_StatusSpellCommand() {
    this.initialize.apply(this, arguments);
}
Window_StatusSpellCommand.prototype = Object.create(HalfWindow_DetailsCommand.prototype);
Window_StatusSpellCommand.prototype.constructor = Window_StatusSpellCommand;
// Initializing the command window
Window_StatusSpellCommand.prototype.initialize = function () {
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 1);
};
// Making the 3 lines
Window_StatusSpellCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.statusCastSpell, 'status_cast_spell');
};
// #endregion =========================== Window_StatusSpellCommand ============================== //
// ============================== //
// #region ============================== Window_StatusSpellDetails ============================== //
// ----------------------
function Window_StatusSpellDetails() {
    this.initialize.apply(this, arguments);
}
Window_StatusSpellDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_StatusSpellDetails.prototype.constructor = Window_StatusSpellDetails;
Window_StatusSpellDetails.prototype.initialize = function () {
    HalfWindow_Details.prototype.initialize.call(this);
    this._spell = null;
};
// Refreshing the window
Window_StatusSpellDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._spell) {
        this.drawDetails(this._spell);
    }
};
/** Clear all contents */
Window_StatusSpellDetails.prototype.empty = function () {
    this._spell = null;
};
// Drawing the details
Window_StatusSpellDetails.prototype.drawDetails = function (spell) {
    var _a;
    // Title
    this.drawUnderlinedText(spell[1].name, 0, 0, this.contentsWidth(), "center");
    // // Item's Icon
    // this.drawIcon(weapon[1].icon, 0, 0);
    // // Availability Icon
    // this.drawIcon(weapon[1].availabilityIcon, this.contentsWidth() - 32, 0)
    // Target text
    const targetText = spell[1].target.type === "AoE" /* SpellTarget.AOE */
        ? `${spell[1].target.type} (${spell[1].target.distance})`
        : spell[1].target.type;
    // Duration text
    const duration = spell[1].duration;
    let durationText;
    if (duration.type === "Number" /* SpellDuration.NUMBER */) {
        durationText = `${duration.duration} rounds`;
    }
    else if (duration.multiplier > 0) {
        durationText = `${duration.type} x ${duration.multiplier}`;
    }
    else {
        durationText = `${duration.type}`;
    }
    // Table
    this.drawTable2Columns(0, 60, this.contentsWidth(), 5, [
        ["Domain", spell[1].domain],
        ["CN", spell[1].cn],
        ["Target", targetText],
        ["Range", ((_a = spell[1].range) === null || _a === void 0 ? void 0 : _a.type) || "N/A"],
        ["Duration", durationText]
    ]);
    this.drawLine(260);
    // Description
    // const descPadding = 20;
    this.drawWrappedTextManually(spell[1].desc, 0, 280, 24);
};
// #endregion =========================== Window_StatusSpellDetails ============================== //
// ============================== //
// #region ============================== Window_StatusSpells ============================== //
// ----------------------
function Window_StatusSpells() {
    this.initialize.apply(this, arguments);
}
Window_StatusSpells.prototype = Object.create(HalfWindow_List.prototype);
Window_StatusSpells.prototype.constructor = Window_StatusSpells;
Window_StatusSpells.prototype.initialize = function () {
    HalfWindow_List.prototype.initialize.call(this);
};
Window_StatusSpells.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._spells = TEW.DATABASE.SPELLS.ARRAY.filter(spell => actor.hasSpell(spell[0])); // [<internal name>, {<talent data>}] // TODO
        this._maxItems = this._spells.length;
        this.refresh();
    }
};
Window_StatusSpells.prototype.drawAllItems = function () {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
Window_StatusSpells.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const spell = this.spellFromIndex(index);
    this.changeTextColor(this.systemColor());
    this.drawText(spell[1].name, x, y, 160);
    this.resetTextColor();
};
Window_StatusSpells.prototype.spellFromIndex = function (index) {
    return this._spells[index];
};
Window_StatusSpells.prototype.select = function (index) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_spell_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};
Window_StatusSpells.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
// #endregion =========================== Window_StatusSpells ============================== //
// ============================== //
// #region ============================== Window_StatusStats ============================== //
// -----------------------------------------------------------------------------
// Window_StatusStats
//
// Character stats window
function Window_StatusStats() {
    this.initialize.apply(this, arguments);
}
Window_StatusStats.prototype = Object.create(Window_Status.prototype);
Window_StatusStats.prototype.constructor = Window_StatusStats;
Window_StatusStats.prototype.initialize = function () {
    Window_Status.prototype.initialize.call(this);
};
Window_StatusStats.prototype.drawAllItems = function () {
    this.drawCharacterInfo(1);
    this.drawHorzLine(TEW.MENU.LINE_HEIGHT * 7);
    this.drawStats(TEW.MENU.LINE_HEIGHT * 8);
};
Window_StatusStats.prototype.drawCharacterInfo = function (y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + TEW.MENU.LINE_HEIGHT);
    this.drawActorFace(this._actor, 12, y + TEW.MENU.LINE_HEIGHT * 2);
    this.drawBasicInfo(204, y + TEW.MENU.LINE_HEIGHT * 2);
};
Window_StatusStats.prototype.drawBasicInfo = function (x, y) {
    var lineHeight = this.lineHeight();
    this.drawActorHp(this._actor, x, y + lineHeight * 0);
    this.drawActorExp(this._actor, x, y + lineHeight * 1);
    this.drawActorFate(this._actor, x, y + lineHeight * 2);
    this.drawActorResilience(this._actor, x, y + lineHeight * 3);
};
Window_StatusStats.prototype.drawActorHp = function (actor, x, y) {
    const width = 186;
    const color1 = this.hpGaugeColor1();
    const color2 = this.normalColor();
    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    this.drawCurrentOverMax(actor.hp, actor.mhp, x, y, width, color1, color2, TextManager.hpA);
};
Window_StatusStats.prototype.drawActorExp = function (actor, x, y) {
    const width = 186;
    const valueWidth = this.textWidth(actor._exp);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.expA, x, y, 48);
    this.resetTextColor();
    this.drawText(actor._exp, x + width - valueWidth, y, valueWidth, 'right');
};
Window_StatusStats.prototype.drawActorFate = function (actor, x, y) {
    const width = 186;
    this.drawCurrentOverMax(actor._fortune, actor._fate, x, y, width, this.normalColor(), this.normalColor(), 'FATE'); // TODO
};
Window_StatusStats.prototype.drawActorResilience = function (actor, x, y) {
    const width = 186;
    this.drawCurrentOverMax(actor._resolve, actor._resilience, x, y, width, this.normalColor(), this.normalColor(), 'RESIL'); // TODO
};
Window_StatusStats.prototype.drawStats = function (y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};
Window_StatusStats.prototype.drawParameters = function (x, y, offset) {
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + TEW.MENU.LINE_HEIGHT * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};
// #endregion =========================== Window_StatusStats ============================== //
// ============================== //
// #region ============================== Window_StatusTalentDescription ============================== //
// ----------------------
function Window_StatusTalentDescription() {
    this.initialize.apply(this, arguments);
}
Window_StatusTalentDescription.prototype = Object.create(Window_Base.prototype);
Window_StatusTalentDescription.prototype.constructor = Window_StatusTalentDescription;
/**
 * Constructor for the Window_StatusTalentDescription class.
 */
Window_StatusTalentDescription.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this, 0, Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT, Graphics.boxWidth, TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT);
    this.activate();
    this.refresh();
    this._talent = null;
};
/**
 * Refreshes the content of the window.
 */
Window_StatusTalentDescription.prototype.refresh = function () {
    this.contents.clear();
    if (this._talent) {
        this.drawDescription(this._talent);
    }
};
/** Clear all contents */
Window_StatusTalentDescription.prototype.empty = function () {
    this._talent = null;
};
Window_StatusTalentDescription.prototype.clear = function () {
    if (this.contents) {
        this.contents.clear();
    }
};
/**
 * Draws the description of the selected talent.
 */
Window_StatusTalentDescription.prototype.drawDescription = function (talent) {
    this.drawWrappedTextManually(talent[1].description, 10, 0, 24);
    // this.drawWrappedText(
    //     talent[1].description,
    //     10,
    //     0,
    //     Graphics.boxWidth
    // );
};
Window_StatusTalentDescription.prototype.verticalBorderPadding = function () {
    return 18;
};
// #endregion =========================== Window_StatusTalentDescription ============================== //
// ============================== //
// #region ============================== Window_StatusTalents ============================== //
// ----------------------
function Window_StatusTalents() {
    this.initialize.apply(this, arguments);
}
Window_StatusTalents.prototype = Object.create(Window_Selectable.prototype);
Window_StatusTalents.prototype.constructor = Window_StatusTalents;
/**
 * Constructor for the Window_StatusTalents class.
 */
Window_StatusTalents.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT, Graphics.boxWidth, Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT - TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT);
    this._actor = null;
    this._maxItems = 0;
    this._leftPadding = 10;
    this._talentColumnWidth = (this.width / 4) - this._leftPadding;
    this._levelColumnWidth = this.width / 6;
    this.activate();
    this.refresh();
};
/**
 * Sets the actor for the window.
 */
Window_StatusTalents.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._talents = TEW.DATABASE.TALENTS.ARRAY.filter(talent => actor.hasTalent(talent[0])); // [<internal name>, {<talent data>}]
        this._maxItems = this._talents.length;
        this.refresh();
    }
};
/**
 * Returns the maximum number of columns in the window.
 */
Window_StatusTalents.prototype.maxCols = () => 2;
/**
 * Draws all items in the window.
 */
Window_StatusTalents.prototype.drawAllItems = function () {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};
/**
 * Draws a single item in the window.
 */
Window_StatusTalents.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 * this.width / 2 + this._leftPadding;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.LINE_HEIGHT;
    const talent = this.talentFromIndex(index);
    // Talent name
    this.changeTextColor(this.systemColor());
    this.drawText(talent[1].name, x, y, this._talentColumnWidth);
    this.resetTextColor();
    // Talent level
    const level = this._actor.talent(talent[0]);
    const levelText = `lvl${level}`;
    this.drawText(levelText, x + this._talentColumnWidth, y, this._levelColumnWidth, 'right');
};
/**
 * Returns the talent from the given index.
 */
Window_StatusTalents.prototype.talentFromIndex = function (index) {
    return this._talents[index];
};
// Window_StatusTalents.prototype.item = function() {
//     const talent = this.talentFromIndex(this._index);
//     return talent[1].name + ': ' + talent[1].desc;
// };
// // TODO
// Window_StatusTalents.prototype.select = function(index) {
//     // if (this._index !== index) {
//     //     this.hideHelpWindow();
//     // }
//     // this._index = index;
//     // if (this._index >= 0) {
//     //     this._helpWindow.setText(this.item());
//     // }
//     this._stayCount = 0;
//     this.ensureCursorVisible();
//     this.updateCursor();
//     this.callUpdateHelp();
// };
/**
 * Called when the process successfully completes.
 */
Window_StatusTalents.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
Window_StatusTalents.prototype.select = function (index) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_talent_description");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};
// Window_StatusTalents.prototype.isCurrentItemEnabled = function() {
//     return true; // TODO
// };
// Window_StatusTalents.prototype.showHelpWindow = function() {
//     if (this._helpWindow && this.active) {
//         this._helpWindow.show();
//         this._helpWindow.refresh();
//     }
// };
// Window_StatusTalents.prototype.updateHelp = () => {};
/**
 * Returns the maximum number of items in the window.
 */
Window_StatusTalents.prototype.maxItems = function () {
    return this._maxItems;
};
// #endregion =========================== Window_StatusTalents ============================== //
// ============================== //
// #region ============================== Window ============================== //
Window.prototype.horizontalBorderPadding = function () {
    return this.padding;
};
Window.prototype.verticalBorderPadding = function () {
    return this.padding;
};
Window.prototype._refreshContents = function () {
    this._windowContentsSprite.move(this.horizontalBorderPadding(), this.verticalBorderPadding());
};
Window.prototype._refreshCursor = function () {
    var x = this._cursorRect.x + this.horizontalBorderPadding() - this.origin.x;
    var y = this._cursorRect.y + this.verticalBorderPadding() - this.origin.y;
    var w = this._cursorRect.width;
    var h = this._cursorRect.height;
    var m = 4;
    var x2 = Math.max(x, this.horizontalBorderPadding());
    var y2 = Math.max(y, this.verticalBorderPadding());
    var ox = x - x2;
    var oy = y - y2;
    var w2 = Math.min(w, this._width - this.horizontalBorderPadding() - x2);
    var h2 = Math.min(h, this._height - this.verticalBorderPadding() - y2);
    var bitmap = new Bitmap(w2, h2);
    this._windowCursorSprite.bitmap = bitmap;
    this._windowCursorSprite.setFrame(0, 0, w2, h2);
    this._windowCursorSprite.move(x2, y2);
    if (w > 0 && h > 0 && this._windowskin) {
        var skin = this._windowskin;
        var p = 96;
        var q = 48;
        bitmap.blt(skin, p + m, p + m, q - m * 2, q - m * 2, ox + m, oy + m, w - m * 2, h - m * 2);
        bitmap.blt(skin, p + m, p + 0, q - m * 2, m, ox + m, oy + 0, w - m * 2, m);
        bitmap.blt(skin, p + m, p + q - m, q - m * 2, m, ox + m, oy + h - m, w - m * 2, m);
        bitmap.blt(skin, p + 0, p + m, m, q - m * 2, ox + 0, oy + m, m, h - m * 2);
        bitmap.blt(skin, p + q - m, p + m, m, q - m * 2, ox + w - m, oy + m, m, h - m * 2);
        bitmap.blt(skin, p + 0, p + 0, m, m, ox + 0, oy + 0, m, m);
        bitmap.blt(skin, p + q - m, p + 0, m, m, ox + w - m, oy + 0, m, m);
        bitmap.blt(skin, p + 0, p + q - m, m, m, ox + 0, oy + h - m, m, m);
        bitmap.blt(skin, p + q - m, p + q - m, m, m, ox + w - m, oy + h - m, m, m);
    }
};
Window.prototype._updateContents = function () {
    var w = this._width - this.horizontalBorderPadding() * 2;
    var h = this._height - this.verticalBorderPadding() * 2;
    if (w > 0 && h > 0) {
        this._windowContentsSprite.setFrame(this.origin.x, this.origin.y, w, h);
        this._windowContentsSprite.visible = this.isOpen();
    }
    else {
        this._windowContentsSprite.visible = false;
    }
};
// #endregion =========================== Window ============================== //
// ============================== //
// #region ============================== Window_Base ============================== //
TEW.MEMORY.windowBaseInitialize = Window_Base.prototype.initialize;
Window_Base.prototype.initialize = function (x, y, width, height) {
    TEW.MEMORY.windowBaseInitialize.call(this, x, y, width, height);
    const bg = this.backgroundImageName();
    if (bg) {
        this._bgSprite = new Sprite();
        this._bgSprite.bitmap = ImageManager.loadSystem(bg);
        this.addChildAt(this._bgSprite, 0);
    }
};
Window_Base.prototype.backgroundImageName = function () {
    return undefined;
};
Window_Base.prototype.drawWrappedText = function (text, x, y, width, fontsize = this.contents.fontSize) {
    this.contents.fontSize = fontsize;
    const words = text.split(" ");
    let line = "";
    let currentY = y;
    for (const word of words) {
        if (this.textWidth(line + word) > width) {
            this.drawText(line, x, currentY, width);
            line = word + " ";
            currentY += fontsize;
        }
        else {
            line += word + " ";
        }
    }
    this.drawText(line, x, currentY, width);
    this.resetFontSettings();
};
// Drawing a wrapped text - used to draw to description
Window_Base.prototype.drawWrappedTextManually = function (text, x, y, fontSize) {
    const words = text.split(" ");
    const maxWidth = this.contentsWidth() - x;
    if (text.length <= 100) {
        this.contents.fontSize = 28;
    }
    else if (text.length <= 200) {
        this.contents.fontSize = 20;
    }
    // else if (text.length <= 200) { this.contents.fontSize = 16; }
    else {
        this.contents.fontSize = 16;
    }
    const spaceWidth = this.textWidth(" ");
    const lineHeight = fontSize * 1.2;
    let currentX = x;
    let currentY = y;
    words.forEach(word => {
        const wordWidth = this.textWidth(word);
        // If the word is too long, drawing it on the next line
        if (currentX + wordWidth > maxWidth) {
            currentX = x; // begining of the line
            currentY += lineHeight; // next line
        }
        // drawing it on the current line
        this.drawText(word, currentX, currentY, wordWidth, 'left');
        currentX += wordWidth + spaceWidth;
    });
    this.resetFontSettings();
};
// Window_Base.prototype.drawText = function(text, x, y, maxWidth, align, lineHeight = this.lineHeight()) {
//     this.contents.drawText(text, x, y, maxWidth, lineHeight, align);
// };
Window_Base.prototype.drawCurrentOverMax = function (currentValue, maxValue, x, y, width, color1, color2, label) {
    const labelWidth = this.textWidth(label);
    const currentValueWidth = this.textWidth(currentValue);
    const maxValueWidth = this.textWidth(maxValue);
    const slashWidth = this.textWidth('/');
    const xCurrentValue = x + width - maxValueWidth - slashWidth - currentValueWidth;
    const xSlash = x + width - maxValueWidth - slashWidth;
    const xMaxValue = x + width - maxValueWidth;
    this.changeTextColor(this.systemColor());
    this.drawText(label, x, y, labelWidth);
    this.changeTextColor(color1);
    this.drawText(currentValue, xCurrentValue, y, currentValueWidth, 'right');
    this.resetTextColor();
    this.drawText('/', xSlash, y, slashWidth, 'right');
    this.changeTextColor(color2);
    this.drawText(maxValue, xMaxValue, y, maxValueWidth, 'right');
};
Window_Base.prototype.standardBackOpacity = function () {
    return 255;
};
Window_Base.prototype.verticalBorderPadding = function () {
    return 30;
};
Window_Base.prototype.horizontalBorderPadding = function () {
    return 30;
};
Window_Base.prototype.contentsWidth = function () {
    return this.width - this.horizontalBorderPadding() * 2;
};
Window_Base.prototype.contentsHeight = function () {
    return this.height - this.verticalBorderPadding() * 2;
};
Window_Base.prototype.fittingHeight = function (numLines) {
    return numLines * this.lineHeight() + this.verticalBorderPadding() * 2;
};
// TODO no need for color picker, we can optimize everything here?
Window_Base.prototype.normalColor = function () {
    return this.textColor(15);
};
Window_Base.prototype.resetTextColor = function () {
    this.changeTextColor(this.normalColor());
    this.contents.outlineWidth = 0;
};
// #endregion =========================== Window_Base ============================== //
// ============================== //
// #region ============================== Window_Command ============================== //
Window_Command.prototype.windowWidth = function () {
    return 280;
};
// #endregion =========================== Window_Command ============================== //
// ============================== //
// #region ============================== Window_Selectable ============================== //
//-----------------------------------------------------------------------------
// Window_Selectable (override)
//
// Overriding Window_Selectable because we know how to code, and you don't :)
Window_Selectable.prototype.setTopRow = function (row) {
    var scrollY = row.clamp(0, this.maxTopRow()) * this.itemHeight();
    // I curse the entire families of every RPG Maker MV developer. Fuck you.
    if (!isNaN(scrollY) && this._scrollY !== scrollY) {
        this._scrollY = scrollY;
        this.refresh();
        this.updateCursor();
    }
};
// TODO rewrite all this.padding uses OR set padding to 30
Window_Selectable.prototype.itemRect = function (index) {
    const maxCols = this.maxCols();
    const width = this.itemWidth();
    const height = this.itemHeight();
    const rect = new Rectangle(index % maxCols * (width + this.spacing()) - this._scrollX, Math.floor(index / maxCols) * height - this._scrollY, width, height);
    return rect;
};
Window_Selectable.prototype.itemWidth = function () {
    return Math.floor((this.width - this.horizontalBorderPadding() * 2
        + this.spacing()) / this.maxCols() - this.spacing());
};
Window_Selectable.prototype.maxPageRows = function () {
    var pageHeight = this.height - this.verticalBorderPadding() * 2;
    return Math.floor(pageHeight / this.itemHeight());
};
// #endregion =========================== Window_Selectable ============================== //
// ============================== //
// #region ============================== backgrounds ============================== //
Window_TitleCommand.prototype.backgroundImageName = function () {
    return "bg_menuDetailsCommand3";
};
Window_TitleCommand.prototype.windowHeight = function () {
    return 168; // 3 * line height + 2 * text padding + 2 * bg padding
};
Window_StatusCompetences.prototype.backgroundImageName = function () {
    return "bg_statusCompetences";
};
Window_StatusTalents.prototype.backgroundImageName = function () {
    return "bg_statusTalents";
};
Window_StatusTalentDescription.prototype.backgroundImageName = function () {
    return "bg_statusTalentDescription";
};
Window_StatusCommand.prototype.backgroundImageName = function () {
    return "bg_menuTopbarCommands";
};
Window_StatusCommand.prototype.windowWidth = function () {
    return Graphics.boxWidth;
};
Window_InventoryCommand.prototype.backgroundImageName = function () {
    return "bg_menuTopbarCommands";
};
Window_InventoryCommand.prototype.windowWidth = function () {
    return Graphics.boxWidth;
};
HalfWindow_List.prototype.windowWidth = function () {
    return Graphics.boxWidth / 2;
};
HalfWindow_List.prototype.windowHeight = function () {
    return 648; // total height - topbar height
};
HalfWindow_List.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindow";
};
HalfWindow_Details.prototype.windowWidth = function () {
    return Graphics.boxWidth / 2;
};
Window_StatusSpellDetails.prototype.windowHeight = function () {
    return 512; // total height - topbar height - (1 command window height + margins)
};
Window_StatusSpellDetails.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindowDetails1";
};
Window_InventoryItemDetails.prototype.windowHeight = function () {
    return 476; // total height - topbar height - (2 commands window height + margins)
};
Window_InventoryItemDetails.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindowDetails2";
};
Window_InventoryArmorDetails.prototype.windowHeight = function () {
    return 476; // total height - topbar height - (2 commands window height + margins)
};
Window_InventoryArmorDetails.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindowDetails2";
};
Window_InventoryWeaponDetails.prototype.windowHeight = function () {
    return 440; // total height - topbar height - (3 commands window height + margins)
};
Window_InventoryWeaponDetails.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindowDetails3";
};
HalfWindow_DetailsCommand.prototype.backgroundImageName = function () {
    return "bg_inventoryCommand" + this._actionsNumber;
};
HalfWindow_DetailsCommand.prototype.windowWidth = function () {
    return 280; // total width / 2 - margins
};
Window_StatusSpellCommand.prototype.windowHeight = function () {
    return 96; // line height + 2 * text padding + 2 * bg padding
};
Window_StatusSpellCommand.prototype.backgroundImageName = function () {
    return "bg_menuDetailsCommand1";
};
Window_InventoryItemCommand.prototype.windowHeight = function () {
    return 132; // 2 * line height + 2 * text padding + 2 * bg padding
};
Window_InventoryItemCommand.prototype.backgroundImageName = function () {
    return "bg_menuDetailsCommand2";
};
Window_InventoryArmorCommand.prototype.windowHeight = function () {
    return 132; // 2 * line height + 2 * text padding + 2 * bg padding
};
Window_InventoryArmorCommand.prototype.backgroundImageName = function () {
    return "bg_menuDetailsCommand2";
};
Window_InventoryWeaponCommand.prototype.windowHeight = function () {
    return 168; // 3 * line height + 2 * text padding + 2 * bg padding
};
Window_InventoryWeaponCommand.prototype.backgroundImageName = function () {
    return "bg_menuDetailsCommand3";
};
// #endregion =========================== backgrounds ============================== //
// ============================== //
// #region ============================== Scene_Equip ============================== //
// ----------------------
Scene_Equip.INFOS_WINDOW_INDEX = 0;
Scene_Equip.WEAPONS_WINDOW_INDEX = 1;
Scene_Equip.ARMORS_WINDOW_INDEX = 2;
Scene_Equip.ITEMS_WINDOW_INDEX = 3;
// Creating the scene
Scene_Equip.prototype.create = function () {
    // Init
    Scene_MenuBase.prototype.create.call(this);
    this.addFullscreenBackground();
    // Command window
    this.createCommandWindow();
    // Info window
    this.createInfosWindow();
    // Weapons Windows
    this.createWeaponsWindow();
    this.createWeaponsCommandWindow();
    this.createWeaponsDetailsWindow();
    // Armors windows
    this.createArmorsWindow();
    this.createArmorsCommandWindow();
    this.createArmorsDetailsWindow();
    // Items windows
    this.createItemsWindow();
    this.createItemsCommandWindow();
    this.createItemsDetailsWindow();
    // // Help window
    // this.createHelpWindow();
    // this._helpWindow.hide();
    // this._weaponsWindow.setHelpWindow(this._helpWindow);
    // this._armorsWindow.setHelpWindow(this._helpWindow);
    // // this._itemsWindow.setHelpWindow(this._helpWindow);
    // Transfer windows
    this.createTransferCommandWindow();
    this.createTransferSpinnerWindow();
    this._currentMainWindow = this._infosWindow;
    this.activateInventoryInfos(); // Deactivate all windows, except infos
    this.refreshActor();
};
Scene_Equip.prototype.addFullscreenBackground = function () {
    this._background = new Sprite(ImageManager.loadSystem('bg_fullscreen'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};
// Refreshing the actor
Scene_Equip.prototype.refreshActor = function () {
    var actor = this.actor();
    this._infosWindow.setActor(actor);
    this._weaponsWindow.setActor(actor);
    this._armorsWindow.setActor(actor);
    this._itemsWindow.setActor(actor);
    this._transferCommandWindow.setActor(actor);
};
// // Creating the help window
// Scene_Equip.prototype.createHelpWindow = function(){
//     this._helpWindow = new Window_InventoryHelp();
//     this.addWindow(this._helpWindow);
// }
// Creating the commands for this scene
Scene_Equip.prototype.createCommandWindow = function () {
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
// Create the character choice window for object transfers
Scene_Equip.prototype.createTransferCommandWindow = function () {
    this._transferCommandWindow = new Window_InventoryTransferCommand();
    this._transferCommandWindow.setHandler('cancel', () => {
        this._transferCommandWindow.deactivate();
        this._transferCommandWindow.hide();
        switch (this._transferCommandWindow.type) {
            case Window_InventoryTransferCommand.ITEM:
                this.activateInventoryItems(this._itemsWindow.index());
                break;
            case Window_InventoryTransferCommand.WEAPON:
                this.activateInventoryWeapons(this._weaponsWindow.index());
                break;
            case Window_InventoryTransferCommand.ARMOR:
                this.activateInventoryArmors(this._armorsWindow.index());
                break;
            case Window_InventoryTransferCommand.AMMO:
                this.activateInventoryItems(this._itemsWindow.index());
                break;
        }
    });
    for (let i = 1; i < $gameActors._data.length; i++) {
        this._transferCommandWindow.setHandler("inventory_transfer_to_" + (i - 1), () => {
            this._transferCommandWindow.targetActor = $gameActors._data[i];
            this.initTransfer();
        });
    }
    this._transferCommandWindow.hide();
    this._transferCommandWindow.deselect();
    this.addWindow(this._transferCommandWindow);
};
// Create the spinner container window for object transfers
Scene_Equip.prototype.createTransferSpinnerWindow = function () {
    this._transferSpinnerWindow = new Window_InventoryTransferSpinner();
    this._transferSpinnerWindow.setHandler('ok', () => {
        this.doTransfer();
    });
    this._transferSpinnerWindow.setHandler('cancel', () => {
        this._transferSpinnerWindow.deselect();
        this._transferCommandWindow.callHandler('cancel');
    });
    this.addWindow(this._transferSpinnerWindow);
};
// Hide all the windows
Scene_Equip.prototype.hideAllWindows = function () {
    this._infosWindow.hide();
    this._infosWindow.deactivate();
    this._weaponsWindow.hide();
    this._weaponsWindow.deactivate();
    this._weaponDetailsWindow.hide();
    this._weaponDetailsWindow.deactivate();
    this._weaponsCommandWindow.hide();
    this._weaponsCommandWindow.deactivate();
    this._armorsWindow.hide();
    this._armorsWindow.deactivate();
    this._armorDetailsWindow.hide();
    this._armorDetailsWindow.deactivate();
    this._armorsCommandWindow.hide();
    this._armorsCommandWindow.deactivate();
    this._itemsWindow.hide();
    this._itemsWindow.deactivate();
    this._itemDetailsWindow.hide();
    this._itemDetailsWindow.deactivate();
    this._itemsCommandWindow.hide();
    this._itemsCommandWindow.deactivate();
    this._transferCommandWindow.hide();
    this._transferCommandWindow.deactivate();
    this._transferSpinnerWindow.hide();
    this._transferSpinnerWindow.deactivate();
};
// Show the corresponding window according to the current command window index
Scene_Equip.prototype.displayWindow = function () {
    // hide all
    this.hideAllWindows();
    // Change window
    if (this._commandWindow.index() == Scene_Equip.INFOS_WINDOW_INDEX) {
        this._infosWindow.show();
        this._infosWindow.refresh();
    }
    else if (this._commandWindow.index() == Scene_Equip.WEAPONS_WINDOW_INDEX) {
        this._weaponsWindow.show();
        this._weaponDetailsWindow.show();
        this._weaponsCommandWindow.show();
        this._weaponsWindow.refresh();
        this._weaponDetailsWindow.refresh();
        this._weaponsCommandWindow.clear();
    }
    else if (this._commandWindow.index() == Scene_Equip.ARMORS_WINDOW_INDEX) {
        this._armorsWindow.show();
        this._armorDetailsWindow.show();
        this._armorsCommandWindow.show();
        this._armorsWindow.refresh();
        this._armorDetailsWindow.refresh();
        this._armorsCommandWindow.clear();
    }
    else if (this._commandWindow.index() == Scene_Equip.ITEMS_WINDOW_INDEX) {
        this._itemsWindow.show();
        this._itemDetailsWindow.show();
        this._itemsCommandWindow.show();
        this._itemsWindow.refresh();
        this._itemDetailsWindow.refresh();
        this._itemsCommandWindow.clear();
    }
};
Scene_Equip.prototype.initTransfer = function () {
    switch (this._transferCommandWindow.type) {
        case Window_InventoryTransferCommand.ITEM:
            const selectedItem = this._itemsWindow.item()[0];
            this._transferCommandWindow.item = selectedItem;
            this._transferCommandWindow.deactivate();
            this._transferSpinnerWindow.setMax(this._actor.item(selectedItem));
            this._transferSpinnerWindow.start();
            break;
        case Window_InventoryTransferCommand.WEAPON:
            this._transferCommandWindow.item = this._weaponsWindow.item().equipIndex;
            this.doTransfer();
            break;
        case Window_InventoryTransferCommand.ARMOR:
            this._transferCommandWindow.item = this._armorsWindow.item()[0];
            this.doTransfer();
            break;
        case Window_InventoryTransferCommand.AMMO:
            const selectedAmmo = this._itemsWindow.item()[0];
            this._transferCommandWindow.item = selectedAmmo;
            this._transferCommandWindow.deactivate();
            this._transferSpinnerWindow.setMax(this._actor.ammo(selectedAmmo));
            this._transferSpinnerWindow.start();
            break;
    }
};
Scene_Equip.prototype.doTransfer = function () {
    this._transferCommandWindow.doTransfer(this._transferSpinnerWindow._number);
    this._currentMainWindow.syncActor();
    this._transferSpinnerWindow.callHandler('cancel');
};
// #endregion =========================== Scene_Equip ============================== //
// ============================== //
// #region ============================== Window_InventoryTransferSpinner ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryTransferSpinner
//
// Spinner to choose how many items to transfer
function Window_InventoryTransferSpinner() {
    this.initialize.apply(this, arguments);
}
Window_InventoryTransferSpinner.prototype = Object.create(Window_NumberInput.prototype);
Window_InventoryTransferSpinner.prototype.constructor = Window_InventoryTransferSpinner;
Window_InventoryTransferSpinner.prototype.initialize = function () {
    const width = 100;
    const height = 80;
    Window_Selectable.prototype.initialize.call(this, Graphics.boxWidth - width, Graphics.boxHeight - this.fittingHeight(5) - height, width, height);
    this._number = 1;
    this._max = 1;
    this._maxDigits = 2;
    this.openness = 0;
    this.createButtons();
    this.deactivate();
};
Window_InventoryTransferSpinner.prototype.setMax = function (max) {
    this._max = max;
};
Window_InventoryTransferSpinner.prototype.start = function () {
    this._number = 1;
    this.placeButtons();
    this.updateButtonsVisiblity();
    this.createContents();
    this.refresh();
    this.open();
    this.activate();
    this.show();
    this.select(0);
};
Window_NumberInput.prototype.buttonY = function () {
    return this.height + 8;
};
Window_InventoryTransferSpinner.prototype.update = function () {
    Window_Selectable.prototype.update.call(this);
    this.processNumberChange();
};
Window_InventoryTransferSpinner.prototype.isCancelEnabled = function () {
    return true;
};
Window_InventoryTransferSpinner.prototype.processOk = function () {
    SoundManager.playOk();
    this.updateInputData();
    this.callOkHandler();
    this.deactivate();
    this.hide();
};
// Window_InventoryTransferSpinner.prototype = Object.create(Window_Selectable.prototype);
// Window_InventoryTransferSpinner.prototype.constructor = Window_InventoryTransferSpinner;
// // Initializing the command window
// Window_InventoryTransferSpinner.prototype.initialize = function() {
//     this._windowWidth = Graphics.boxWidth / 4;
//     this._windowHeight = this.fittingHeight(3);
//     this.type = 'item';
//     this._number = 1;
//     Window_Selectable.prototype.initialize.call(
//         this,
//         this._windowWidth * 3,
//         Graphics.boxHeight - this._windowHeight);
//     this.createButtons();
// };
// Window_InventoryTransferSpinner.prototype.activate = function() {
//     Window_Selectable.prototype.activate.call(this);
//     this._number = 1;
// };
// Window_InventoryTransferSpinner.prototype.deactivate = function() {
//     Window_Selectable.prototype.deactivate.call(this);
//     this._number = 1;
// };
// Window_InventoryTransferSpinner.prototype.createButtons = function() {
//     var bitmap = ImageManager.loadSystem('ButtonSet');
//     var buttonWidth = 48;
//     var buttonHeight = 48;
//     this._buttons = [];
//     for (var i = 0; i < 5; i++) {
//         var button = new Sprite_Button();
//         var x = buttonWidth * i;
//         var w = buttonWidth * (i === 4 ? 2 : 1);
//         button.bitmap = bitmap;
//         button.setColdFrame(x, 0, w, buttonHeight);
//         button.setHotFrame(x, buttonHeight, w, buttonHeight);
//         button.visible = false;
//         this._buttons.push(button);
//         this.addChild(button);
//     }
//     this._buttons[0].setClickHandler(this.onButtonDown2.bind(this));
//     this._buttons[1].setClickHandler(this.onButtonDown.bind(this));
//     this._buttons[2].setClickHandler(this.onButtonUp.bind(this));
//     this._buttons[3].setClickHandler(this.onButtonUp2.bind(this));
//     this._buttons[4].setClickHandler(this.onButtonOk.bind(this));
// };
// Window_InventoryTransferSpinner.prototype.placeButtons = function() {
//     var numButtons = this._buttons.length;
//     var spacing = 16;
//     var totalWidth = -spacing;
//     for (var i = 0; i < numButtons; i++) {
//         totalWidth += this._buttons[i].width + spacing;
//     }
//     var x = (this.width - totalWidth) / 2;
//     for (var j = 0; j < numButtons; j++) {
//         var button = this._buttons[j];
//         button.x = x;
//         button.y = this.buttonY();
//         x += button.width + spacing;
//     }
// };
// Window_InventoryTransferSpinner.prototype.drawMultiplicationSign = function() {
//     var sign = '×';
//     var width = this.textWidth(sign);
//     var x = this.cursorX() - width * 2;
//     var y = this.itemY();
//     this.resetTextColor();
//     this.drawText(sign, x, y, width);
// };
// Window_InventoryTransferSpinner.prototype.drawNumber = function() {
//     var x = this.cursorX();
//     var y = this.itemY();
//     var width = this.cursorWidth() - this.textPadding();
//     this.resetTextColor();
//     this.drawText(this._number, x, y, width, 'right');
// };
// Window_InventoryTransferSpinner.prototype.itemY = function() {
//     return Math.round(this.contentsHeight() / 2 - this.lineHeight() * 1.5);
// };
// Window_InventoryTransferSpinner.prototype.buttonY = function() {
//     return Math.round(this.lineHeight() * 2.5);
// };
// Window_InventoryTransferSpinner.prototype.cursorWidth = function() {
//     var digitWidth = this.textWidth('0');
//     return this.maxDigits() * digitWidth + this.textPadding() * 2;
// };
// Window_InventoryTransferSpinner.prototype.cursorX = function() {
//     return this.contentsWidth() - this.cursorWidth() - this.textPadding();
// };
// Window_InventoryTransferSpinner.prototype.maxDigits = function() {
//     return 2;
// };
// Window_InventoryTransferSpinner.prototype.update = function() {
//     Window_Selectable.prototype.update.call(this);
//     this.processNumberChange();
// };
// Window_InventoryTransferSpinner.prototype.isOkTriggered = function() {
//     return Input.isTriggered('ok');
// };
// Window_InventoryTransferSpinner.prototype.playOkSound = function() {
// };
Window_InventoryTransferSpinner.prototype.processNumberChange = function () {
    if (this.isOpenAndActive()) {
        if (Input.isRepeated('up')) {
            this.changeNumber(1);
        }
        if (Input.isRepeated('down')) {
            this.changeNumber(-1);
        }
        if (Input.isRepeated('right')) {
            this.changeNumber(10);
        }
        if (Input.isRepeated('left')) {
            this.changeNumber(-10);
        }
    }
};
Window_InventoryTransferSpinner.prototype.changeNumber = function (amount) {
    const lastNumber = this._number;
    this._number = (this._number + amount).clamp(1, this._max);
    if (this._number !== lastNumber) {
        SoundManager.playCursor();
        this.refresh();
    }
};
// Window_InventoryTransferSpinner.prototype.updateCursor = function() {
//     this.setCursorRect(this.cursorX(), this.itemY(),
//                        this.cursorWidth(), this.lineHeight());
// };
Window_InventoryTransferSpinner.prototype.onButtonUp = function () {
    this.changeNumber(1);
};
Window_InventoryTransferSpinner.prototype.onButtonUp2 = function () {
    this.changeNumber(10);
};
Window_InventoryTransferSpinner.prototype.onButtonDown = function () {
    this.changeNumber(-1);
};
Window_InventoryTransferSpinner.prototype.onButtonDown2 = function () {
    this.changeNumber(-10);
};
// Window_InventoryTransferSpinner.prototype.onButtonOk = function() {
//     this.processOk();
// };
// #endregion =========================== Window_InventoryTransferSpinner ============================== //
// ============================== //
// #region ============================== Scene_Equip ============================== //
// // ----------------------
// Scene_Equip.prototype.createAmmoWindow = function() {
//     this._ammoWindow = new Window_InventoryAmmo();
//     this._ammoWindow.setHandler('cancel', () => {
//         this._commandWindow.activate();
//         this._ammoWindow.deselect();
//     });
//     this._ammoWindow.hide();
//     this.addWindow(this._ammoWindow);
// };
// Scene_Equip.prototype.activateInventoryAmmo = function(index = 0) {
//     const nbAmmo = this._ammoWindow._ammo.length; // TODO
//     if (nbAmmo > 0){
//         index = Math.min(index, nbAmmo - 1);
//         this.hideAllWindows();
//         this._currentMainWindow = this._ammoWindow;
//         this._ammoWindow.show();
//         this._commandWindow.deactivate();
//         this._ammoWindow.activate();
//         this._ammoWindow.select(index);
//         this._ammoWindow.refresh();
//     }
// };
// #endregion =========================== Scene_Equip ============================== //
// ============================== //
// #region ============================== Scene_Equip ============================== //
// ----------------------
Scene_Equip.prototype.createArmorsWindow = function () {
    this._armorsWindow = new Window_InventoryArmors();
    this._armorsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._armorsWindow.deselect();
    });
    this._armorsWindow.setHandler('ok', () => {
        this.activateCommandWindowArmor();
    });
    this._armorsWindow.hide();
    this.addWindow(this._armorsWindow);
};
Scene_Equip.prototype.createArmorsCommandWindow = function () {
    this._armorsCommandWindow = new Window_InventoryArmorCommand();
    this._armorsCommandWindow.setHandler('cancel', () => {
        this._armorsCommandWindow.deactivate();
        this._armorsCommandWindow.deselect();
        this.activateInventoryArmors(this._armorsWindow.index());
    });
    this._armorsCommandWindow.setHandler('inventory_armor_equip', this.equipArmor.bind(this));
    this._armorsCommandWindow.setHandler('inventory_armor_unequip', this.unequipArmor.bind(this));
    this._armorsCommandWindow.setHandler('inventory_armor_transfer', this.transferArmor.bind(this));
    this._armorsCommandWindow.hide();
    this._armorsCommandWindow.deselect();
    this.addWindow(this._armorsCommandWindow);
};
Scene_Equip.prototype.createArmorsDetailsWindow = function () {
    this._armorDetailsWindow = new Window_InventoryArmorDetails(this._armorsCommandWindow.fittingHeight(this._armorsCommandWindow._actionsNumber));
    this._armorsWindow.setHandler('show_armor_details', () => {
        this.showArmorDetails();
    });
    this._armorDetailsWindow.hide();
    this.addWindow(this._armorDetailsWindow);
};
Scene_Equip.prototype.activateInventoryArmors = function (index = 0) {
    const nbArmors = this._armorsWindow.length();
    this.hideAllWindows();
    this._currentMainWindow = this._armorsWindow;
    this._armorsWindow.show();
    this._armorDetailsWindow.show();
    this._armorsCommandWindow.show();
    this._armorsCommandWindow.deselect();
    if (nbArmors > 0) {
        index = Math.min(index, nbArmors - 1);
        this._commandWindow.deactivate();
        this._armorsWindow.activate();
        this._armorsWindow.select(index);
        this._armorsCommandWindow.refresh();
    }
    else {
        this._commandWindow.activate();
        this._armorsWindow.deselect();
        this._armorDetailsWindow.empty();
        this._armorDetailsWindow.clear();
        this._armorsCommandWindow.clear();
    }
    this._armorsWindow.refresh();
};
Scene_Equip.prototype.activateCommandWindowArmor = function () {
    if (this._armorsWindow.isOpenAndActive() && this._armorsWindow.index() >= 0) {
        this._armorsWindow.deactivate();
        this._armorsCommandWindow.show();
        this._armorsCommandWindow.activate();
        this._armorsCommandWindow.select(0);
    }
};
Scene_Equip.prototype.showArmorDetails = function () {
    const armor = this._armorsWindow.armorFromIndex(this._armorsWindow.index());
    if (armor) {
        this._armorDetailsWindow._armor = armor;
        this._armorsCommandWindow.refreshCommand(armor[1].equipped, armor[0]);
        this._armorDetailsWindow.refresh();
    }
    else {
        this._armorDetailsWindow.clear();
        this._armorsCommandWindow.clear();
    }
};
// Equipping an armor - Triggered on the armors window
Scene_Equip.prototype.equipArmor = function () {
    const armor = this._armorsWindow.item();
    // Check compatibility with all armor groups equipped at relevant locations
    const locations = armor[1].locations;
    const overlappingArmors = locations.length === 1
        ? this._actor.armorsAtLocation(locations[0])
        : this._actor.armorsAtLocations(locations);
    const overlappingGroups = overlappingArmors.map(a => a.group);
    let cannotEquip = [...armor[1].forbiddenWith, armor[1].group]
        .some(group => overlappingGroups.includes(group));
    // Check that soft kit is equipped if needed
    const requiresKit = armor[1].qualities.includes(6 /* ArmorQuality.REQUIRES_KIT */);
    if (requiresKit) {
        cannotEquip = cannotEquip || !overlappingArmors.some(a => a.group === 0 /* ArmorGroup.SOFT_KIT */);
    }
    if (cannotEquip) {
        // TODO play BGM
        this._armorsCommandWindow.activate();
    }
    else {
        this._actor.equipArmor(armor[0]);
        this._armorsWindow.syncActor();
        // TODO play BGM
        this._armorsCommandWindow.callHandler('cancel');
    }
};
// Unequipping an armor - Triggered on the armors window
Scene_Equip.prototype.unequipArmor = function () {
    const actor = this._actor;
    const armor = this._armorsWindow.item();
    if (armor[1].group === 0 /* ArmorGroup.SOFT_KIT */) {
        actor.unequipArmors([armor[0], ...actor._equippedArmors.filter(armorId => TEW.DATABASE.ARMORS.SET[armorId].qualities.includes(6 /* ArmorQuality.REQUIRES_KIT */))]);
    }
    else {
        actor.unequipArmor(armor[0]);
    }
    this._armorsWindow.syncActor();
    // play BGM
    this._armorsCommandWindow.callHandler('cancel');
};
// Transferring an armor - Triggered on the armors window
Scene_Equip.prototype.transferArmor = function () {
    this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.ARMOR);
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
};
// #endregion =========================== Scene_Equip ============================== //
// ============================== //
// #region ============================== Scene_Equip ============================== //
// ----------------------
Scene_Equip.prototype.createInfosWindow = function () {
    this._infosWindow = new Window_InventoryInfo();
    // this._statsWindow.reserveFaceImages();
    this.addWindow(this._infosWindow);
};
Scene_Equip.prototype.activateInventoryInfos = function () {
    this.hideAllWindows();
    this._currentMainWindow = this._infosWindow;
    this._infosWindow.show();
    this._commandWindow.activate();
    this._infosWindow.refresh();
};
// #endregion =========================== Scene_Equip ============================== //
// ============================== //
// #region ============================== Scene_Equip ============================== //
// ----------------------
Scene_Equip.prototype.createItemsWindow = function () {
    this._itemsWindow = new Window_InventoryItems();
    this._itemsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._itemsWindow.deselect();
    });
    this._itemsWindow.setHandler('ok', () => {
        this.activateCommandWindowItem();
    });
    this._itemsWindow.hide();
    this.addWindow(this._itemsWindow);
};
Scene_Equip.prototype.createItemsDetailsWindow = function () {
    this._itemDetailsWindow = new Window_InventoryItemDetails(this._itemsCommandWindow.fittingHeight(this._itemsCommandWindow._actionsNumber));
    this._itemsWindow.setHandler('show_item_details', () => {
        this.showItemDetails();
    });
    this._itemDetailsWindow.hide();
    this.addWindow(this._itemDetailsWindow);
};
Scene_Equip.prototype.createItemsCommandWindow = function () {
    this._itemsCommandWindow = new Window_InventoryItemCommand();
    this._itemsCommandWindow.setHandler('cancel', () => {
        this._itemsCommandWindow.deactivate();
        this.activateInventoryItems(this._itemsWindow.index());
    });
    this._itemsCommandWindow.setHandler('inventory_item_use', this.useItem.bind(this));
    this._itemsCommandWindow.setHandler('inventory_item_transfer', this.transferItem.bind(this));
    this._itemsCommandWindow.hide();
    this._itemsCommandWindow.deselect();
    this.addWindow(this._itemsCommandWindow);
};
Scene_Equip.prototype.activateInventoryItems = function (index = 0) {
    const nbItems = this._itemsWindow._maxItems;
    this.hideAllWindows();
    this._currentMainWindow = this._itemsWindow;
    this._itemsWindow.show();
    this._itemDetailsWindow.show();
    this._itemsCommandWindow.show();
    this._itemsCommandWindow.deselect();
    if (nbItems > 0) {
        index = Math.min(index, nbItems - 1);
        this._commandWindow.deactivate();
        this._itemsWindow.activate();
        this._itemsWindow.select(index);
        this._itemsCommandWindow.refresh();
    }
    else {
        this._commandWindow.activate();
        this._itemsWindow.deselect();
        this._itemDetailsWindow.empty();
        this._itemDetailsWindow.clear();
        this._itemsCommandWindow.clear();
    }
    this._itemsWindow.refresh();
};
Scene_Equip.prototype.activateCommandWindowItem = function () {
    if (this._itemsWindow.isOpenAndActive() && this._itemsWindow.index() >= 0) {
        this._itemsWindow.deactivate();
        this._itemsCommandWindow.show();
        this._itemsCommandWindow.activate();
        this._itemsCommandWindow.select(0);
    }
};
Scene_Equip.prototype.showItemDetails = function () {
    const itemOrAmmo = this._itemsWindow.itemOrAmmoFromIndex(this._itemsWindow.index());
    if (itemOrAmmo) {
        if (itemOrAmmo.enc) { // If Item
            itemOrAmmo[1].quantity = this._itemsWindow._actor.item(itemOrAmmo[0]);
            this._itemDetailsWindow._ammo = undefined;
            this._itemDetailsWindow._item = itemOrAmmo;
            this._itemDetailsWindow.refresh();
        }
        else { // Else Ammo
            itemOrAmmo[1].quantity = this._itemsWindow._actor.ammo(itemOrAmmo[0]);
            this._itemDetailsWindow._item = undefined;
            this._itemDetailsWindow._ammo = itemOrAmmo;
            this._itemDetailsWindow.refresh();
        }
    }
    else {
        this._itemDetailsWindow.clear();
        this._itemsCommandWindow.clear();
    }
};
Scene_Equip.prototype.useItem = function () {
    console.log("Use item : ", this._itemsWindow.index());
    this._itemsCommandWindow.callHandler('cancel');
};
Scene_Equip.prototype.transferItem = function () {
    const itemOrAmmo = this._itemsWindow.item();
    if (itemOrAmmo.enc) { // if Item
        this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.ITEM);
    }
    else { // Else Ammo
        this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.AMMO);
    }
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
};
// #endregion =========================== Scene_Equip ============================== //
// ============================== //
// #region ============================== Scene_Equip ============================== //
// ----------------------
Scene_Equip.prototype.createWeaponsWindow = function () {
    this._weaponsWindow = new Window_InventoryWeapons();
    this._weaponsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._weaponsWindow.deselect();
    });
    this._weaponsWindow.setHandler('ok', () => {
        this.activateCommandWindowWeapon();
    });
    this._weaponsWindow.hide();
    this.addWindow(this._weaponsWindow);
};
Scene_Equip.prototype.createWeaponsDetailsWindow = function () {
    this._weaponDetailsWindow = new Window_InventoryWeaponDetails(this._weaponsCommandWindow.fittingHeight(this._weaponsCommandWindow._actionsNumber));
    this._weaponsWindow.setHandler('show_weapon_details', () => {
        this.showWeaponDetails();
    });
    this._weaponDetailsWindow.hide();
    this.addWindow(this._weaponDetailsWindow);
};
Scene_Equip.prototype.createWeaponsCommandWindow = function () {
    this._weaponsCommandWindow = new Window_InventoryWeaponCommand();
    this._weaponsCommandWindow.setHandler('cancel', () => {
        this._weaponsCommandWindow.deactivate();
        this._weaponsCommandWindow.deselect();
        this.activateInventoryWeapons(this._weaponsWindow.index());
    });
    this._weaponsCommandWindow.setHandler('inventory_weapon_equip', this.equipWeapon.bind(this));
    this._weaponsCommandWindow.setHandler('inventory_weapon_unequip', this.unequipWeapon.bind(this));
    this._weaponsCommandWindow.setHandler('inventory_weapon_transfer', this.transferWeapon.bind(this));
    this._weaponsCommandWindow.setHandler('inventory_weapon_reload', this.reloadWeapon.bind(this));
    this._weaponsCommandWindow.hide();
    this._weaponsCommandWindow.deselect();
    this.addWindow(this._weaponsCommandWindow);
};
Scene_Equip.prototype.activateInventoryWeapons = function (index = 0) {
    const nbWeapons = this._weaponsWindow.length();
    this.hideAllWindows();
    this._currentMainWindow = this._weaponsWindow;
    this._weaponsWindow.show();
    this._weaponDetailsWindow.show();
    this._weaponsCommandWindow.show();
    this._weaponsCommandWindow.deselect();
    if (nbWeapons > 0) {
        index = Math.min(index, nbWeapons - 1);
        this._commandWindow.deactivate();
        this._weaponsWindow.activate();
        this._weaponsWindow.select(index);
        this._weaponsCommandWindow.refresh();
    }
    else {
        this._commandWindow.activate();
        this._weaponsWindow.deselect();
        this._weaponDetailsWindow.empty();
        this._weaponDetailsWindow.clear();
        this._weaponsCommandWindow.clear();
    }
    this._weaponsWindow.refresh();
};
Scene_Equip.prototype.activateCommandWindowWeapon = function () {
    if (this._weaponsWindow.isOpenAndActive() && this._weaponsWindow.index() >= 0) {
        this._weaponsWindow.deactivate();
        this._weaponsCommandWindow.show();
        this._weaponsCommandWindow.activate();
        this._weaponsCommandWindow.select(0);
    }
};
Scene_Equip.prototype.showWeaponDetails = function () {
    const weapon = this._weaponsWindow.weaponFromIndex(this._weaponsWindow.index());
    if (weapon) {
        this._weaponDetailsWindow._weapon = weapon;
        this._weaponsCommandWindow.refreshCommand(this._actor, weapon.equipIndex);
        this._weaponDetailsWindow.refresh();
    }
    else {
        this._weaponDetailsWindow.clear();
        this._weaponsCommandWindow.clear();
    }
};
Scene_Equip.prototype.equipWeapon = function () {
    const weapon = this._weaponsWindow.item();
    if (weapon.group === 5 /* WeaponGroup.PARRY */
        || weapon.qualities.some((quality) => quality === 10 /* WeaponQuality.SHIELD_1 */
            || quality === 11 /* WeaponQuality.SHIELD_2 */
            || quality === 12 /* WeaponQuality.SHIELD_3 */
            || quality === 13 /* WeaponQuality.SHIELD_4 */
            || quality === 14 /* WeaponQuality.SHIELD_5 */)) {
        this._actor.unequipSecondHand();
        this._actor.equipSecondHand(weapon.equipIndex);
    }
    else {
        this._actor.unequipMainHand();
        this._actor.equipMainHand(weapon.equipIndex);
    }
    this._weaponsWindow.syncActor();
    this._weaponsCommandWindow.callHandler('cancel');
};
Scene_Equip.prototype.unequipWeapon = function () {
    const weaponIndex = this._weaponsWindow.index();
    if (weaponIndex === 0) {
        this._actor.unequipMainHand();
    }
    else if (weaponIndex === 1) {
        this._actor.unequipSecondHand();
    }
    this._weaponsWindow.syncActor();
    this._weaponsCommandWindow.callHandler('cancel');
};
Scene_Equip.prototype.transferWeapon = function () {
    this._transferCommandWindow.setItemType(Window_InventoryTransferCommand.WEAPON);
    this._transferCommandWindow.activate();
    this._transferCommandWindow.show();
    this._transferCommandWindow.select(0);
};
Scene_Equip.prototype.reloadWeapon = function () {
    console.log("Reload weapon : ", this._weaponsWindow.index());
    this._weaponsCommandWindow.callHandler('cancel');
};
// #endregion =========================== Scene_Equip ============================== //
// ============================== //

