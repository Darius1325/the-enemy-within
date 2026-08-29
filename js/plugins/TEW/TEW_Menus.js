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
// #region ============================== ImageManager ============================== //
ImageManager.reserveImage = function (folder, filename, reservationId) {
    return this.reserveBitmap('img/' + folder + '/', filename, 0, true, reservationId);
};
ImageManager.loadImage = function (folder, filename) {
    return this.loadBitmap('img/' + folder + '/', filename, 0, true);
};
// #endregion =========================== ImageManager ============================== //
// ============================== //
// #region ============================== properties ============================== //
TEW.MENU.COMMAND_NAMES = TEW.MENU.COMMAND_NAMES || {};
// Main Menu
TEW.MENU.COMMAND_NAMES[30] = "Status";
TEW.MENU.COMMAND_NAMES[31] = "Inventory";
TEW.MENU.COMMAND_NAMES[32] = "Journals";
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
TEW.MENU.COMMAND_NAMES[55] = "Confirm";
TEW.MENU.COMMAND_NAMES[56] = "Discard";
TEW.MENU.COMMAND_NAMES[57] = "Back";
TEW.MENU.COMMAND_NAMES[58] = "Level up";
TEW.MENU.COMMAND_NAMES[59] = "XP left";
TEW.MENU.COMMAND_NAMES[60] = "Spent";
TEW.MENU.COMMAND_NAMES[61] = "Base";
TEW.MENU.COMMAND_NAMES[62] = "Unlearned";
TEW.MENU.COMMAND_NAMES[63] = "Learned";
TEW.MENU.COMMAND_NAMES[64] = "Free";
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
// Journals
TEW.MENU.COMMAND_NAMES[92] = "Quest log";
TEW.MENU.COMMAND_NAMES[93] = "Documents";
TEW.MENU.COMMAND_NAMES[94] = "Characters";
TEW.MENU.COMMAND_NAMES[95] = "Glossary";
TEW.MENU.COMMAND_NAMES[96] = "Tutorials";
TEW.MENU.LINE_HEIGHT = 36;
// TODO this is wrong and useless
TEW.MENU.STANDARD_PADDING = 30;
TEW.MENU.WINDOW_BACKGROUND_PADDING = 12; // 30px total padding
TEW.MENU.JOURNALS_LEFT_PAGE_X_OFFSET = 60;
TEW.MENU.JOURNALS_RIGHT_PAGE_X_OFFSET = 650;
TEW.MENU.JOURNALS_PAGE_CONTENT_AREA = {
    y: 20, w: 570, h: 670
};
TEW.MENU.JOURNALS_CONTENT_AREA = {
    x: 60, y: 20, w: 1160, h: 670
};
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
// Levelling mode is toggled from the status menu with the A key
TEW.MENU.LEVEL_UP_KEY = "A_Key";
TEW.MENU.LEVEL_UP_KEY_LABEL = "A";
// Windows TODO move
TEW.MENU.CAREER_LABEL_WIDTH = 240;
TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT = 72;
TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT = 72;
TEW.MENU.STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT = 134;
// The window for selecting a command on the inventory screen.
// Adding new Commands Entries
Object.defineProperties(TextManager, {
    // Main Menu
    mainMenuStatus: TextManager.getter('command', 30),
    mainMenuInventory: TextManager.getter('command', 31),
    mainMenuJournals: TextManager.getter('command', 32),
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
    statusLevellingConfirm: TextManager.getter('command', 55),
    statusLevellingDiscard: TextManager.getter('command', 56),
    statusLevellingBack: TextManager.getter('command', 57),
    statusLevelUp: TextManager.getter('command', 58),
    statusExpLeft: TextManager.getter('command', 59),
    statusExpSpent: TextManager.getter('command', 60),
    statusCompBase: TextManager.getter('command', 61),
    statusCompUnlearned: TextManager.getter('command', 62),
    statusSpellLearned: TextManager.getter('command', 63),
    statusSpellFree: TextManager.getter('command', 64),
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
    this._commandWindow.setHandler('menu_journals', this.commandJournals.bind(this));
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
Scene_Menu.prototype.commandJournals = function () {
    SceneManager.push(Scene_Journals);
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
HalfWindow_Details.prototype.initialize = function (fullHeight = false) {
    Window_Base.prototype.initialize.call(this, Graphics.boxWidth / 2, TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT, Graphics.boxWidth / 2, Graphics.boxHeight - TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT);
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
HalfWindow_DetailsCommand.MARGIN_X = 20;
HalfWindow_DetailsCommand.MARGIN_Y = 20;
HalfWindow_DetailsCommand.TOTAL_HEIGHT = TEW.MENU.LINE_HEIGHT * 3 + TEW.MENU.STANDARD_PADDING * 2;
HalfWindow_DetailsCommand.prototype = Object.create(Window_Command.prototype);
HalfWindow_DetailsCommand.prototype.constructor = HalfWindow_DetailsCommand;
// Initializing the command window
HalfWindow_DetailsCommand.prototype.initialize = function (actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    Window_Command.prototype.initialize.call(this, HalfWindow_DetailsCommand.MARGIN_X, Graphics.boxHeight - HalfWindow_DetailsCommand.TOTAL_HEIGHT - HalfWindow_DetailsCommand.MARGIN_Y);
};
HalfWindow_DetailsCommand.prototype.addCommand = function (name, symbol, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext });
};
HalfWindow_DetailsCommand.prototype.maxCols = function () {
    return this._actionsNumber <= 3 ? 1 : 2;
};
HalfWindow_DetailsCommand.prototype.clear = function () {
    this.clearCommandList();
    Window_Selectable.prototype.refresh.call(this);
};
HalfWindow_DetailsCommand.prototype.horizontalBorderPadding = function () {
    //const defaultPadding = Window_Command.prototype.horizontalBorderPadding.call(this); // 30
    return this.maxCols === 1 ? 150 : 80;
};
HalfWindow_DetailsCommand.prototype.verticalBorderPadding = function () {
    const defaultPadding = Window_Command.prototype.verticalBorderPadding.call(this); // 30
    switch (this._actionsNumber) {
        // total window height is 168 (bg padding + three lines of text)
        case 1:
            return 66; // total height / 2 - line height / 2 (one line centered)
        case 2:
        case 4:
            return 48; // total height / 2 - line height (two lines centered)
        case 3:
        case 5:
        case 6:
            return 30; // total height / 2 - 3/2 * line height (three lines centered)
        default:
            return defaultPadding;
    }
};
// #endregion =========================== HalfWindow_DetailsCommand ============================== //
// ============================== //
// #region ============================== HalfWindow_DetailsScrollable ============================== //
//-----------------------------------------------------------------------------
// HalfWindow_DetailsScrollable
//
// Super object to manage all item details windows when scrollable content is needed.
function HalfWindow_DetailsScrollable() {
    this.initialize.apply(this, arguments);
}
;
// reduce contents height a bit to fit 17 lines of text (font size 28)
HalfWindow_DetailsScrollable.OFFSET_Y = 8;
HalfWindow_DetailsScrollable.prototype = Object.create(Window_Selectable.prototype);
HalfWindow_DetailsScrollable.prototype.constructor = HalfWindow_DetailsScrollable;
// Initalizing the window
HalfWindow_DetailsScrollable.prototype.initialize = function (fullHeight = false) {
    Window_Selectable.prototype.initialize.call(this, Graphics.boxWidth / 2, TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT, Graphics.boxWidth / 2, Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT -
        (fullHeight ? 0 : 2 * HalfWindow_DetailsCommand.MARGIN_Y - HalfWindow_DetailsCommand.TOTAL_HEIGHT));
    this.width = Graphics.boxWidth / 2;
    this._text = "";
    this._lines = [];
    this.activate();
    this.refresh();
};
HalfWindow_DetailsScrollable.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
HalfWindow_DetailsScrollable.prototype.setText = function (text) {
    if (this._text !== text) {
        this._text = text;
        this._lines = this.splitTextToLines(this._text, 0, 0, this.contentsWidth());
        this.refresh();
    }
};
HalfWindow_DetailsScrollable.prototype.maxItems = function () {
    var _a, _b;
    return (_b = (_a = this._lines) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 1;
};
HalfWindow_DetailsScrollable.prototype.isCursorVisible = function () {
    return false;
};
HalfWindow_DetailsScrollable.prototype.drawLine = function (y) {
    const lineWidth = 40;
    const lineSize = 2;
    this.contents.fillRect((this.contentsWidth() - lineWidth) / 2, y, lineWidth, lineSize, this.normalColor());
};
HalfWindow_DetailsScrollable.prototype.clear = function () {
    if (this.contents) {
        this.contents.clear();
    }
};
HalfWindow_DetailsScrollable.prototype.itemHeight = function () {
    return this.contents.fontSize * 1.2;
};
HalfWindow_DetailsScrollable.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * this.itemHeight();
    this.drawText(this._lines[index], 0, y, this.contentsWidth(), 'left');
};
HalfWindow_DetailsScrollable.prototype.cursorDown = function () { };
HalfWindow_DetailsScrollable.prototype.cursorUp = function () { };
HalfWindow_DetailsScrollable.prototype.cursorPagedown = function () { };
HalfWindow_DetailsScrollable.prototype.cursorPageup = function () { };
HalfWindow_DetailsScrollable.prototype.processWheel = function () {
    if (this.visible) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.scrollDown();
        }
        if (TouchInput.wheelY <= -threshold) {
            this.scrollUp();
        }
    }
};
HalfWindow_DetailsScrollable.prototype.verticalBorderPadding = function () {
    return Window_Selectable.prototype.verticalBorderPadding.call(this) + HalfWindow_DetailsScrollable.OFFSET_Y;
};
// #endregion =========================== HalfWindow_DetailsScrollable ============================== //
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
// Inializing the window
HalfWindow_List.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT, Graphics.boxWidth / 2, Graphics.boxHeight
        - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT
        - 2 * HalfWindow_DetailsCommand.MARGIN_Y
        - HalfWindow_DetailsCommand.TOTAL_HEIGHT);
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
Window_InventoryTransferCommand.LEFT_X = 300;
Window_InventoryTransferCommand.TOP_Y = 500;
// Initializing the command window
Window_InventoryTransferCommand.prototype.initialize = function () {
    this.type = 'item';
    this.item = '';
    this.targetActor = undefined;
    this._addAction = Game_Actor.prototype.addItem;
    this._removeAction = Game_Actor.prototype.removeItem;
    Window_Command.prototype.initialize.call(this, Window_InventoryTransferCommand.LEFT_X, Window_InventoryTransferCommand.TOP_Y);
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
// #region ============================== Window_JournalEntry ============================== //
function Window_JournalEntry() {
    this.initialize.apply(this, arguments);
}
Window_JournalEntry.prototype = Object.create(Window_Base.prototype);
Window_JournalEntry.prototype.constructor = Window_JournalEntry;
Window_JournalEntry.prototype.initialize = function () {
    const dimensions = TEW.MENU.JOURNALS_CONTENT_AREA;
    Window_Base.prototype.initialize.call(this, dimensions.x, dimensions.y, dimensions.w, dimensions.h);
    this._id = undefined;
    this._title = undefined;
    this._paragraphs = undefined;
    this._leftPageIndex = 0;
    this._formattedContent = undefined;
};
Window_JournalEntry.prototype.refresh = function () {
    this.contents.clear();
    if (this._title && this._paragraphs) {
        this.drawDetails();
    }
};
Window_JournalEntry.prototype.drawDetails = function () {
    // Title
    if (this._leftPageIndex === 0) {
        this.drawUnderlinedText(this._title, 0, 0, 510, "center");
    }
    // Format content or read from memory
    if (!this._formattedContent) {
        const text = this._paragraphs.map((p) => p.content).join('\n \n ');
        this._formattedContent = this.cutTextIntoPages(text, 80, 0, 590, 510); // TODO constants ?
    }
    const displayedPages = [this._formattedContent[this._leftPageIndex]];
    if (this._formattedContent.length >= this._leftPageIndex + 2) {
        displayedPages.push(this._formattedContent[this._leftPageIndex + 1]);
    }
    for (let page of displayedPages) {
        for (let line of page.lines) {
            this.drawText(line.text, page.x, line.y, 510, 'left');
        }
    }
};
Window_JournalEntry.prototype.cutTextIntoPages = function (text, firstPageYOffset, firstPageXOffset, secondPageXOffset, width) {
    const words = text.split(" ");
    const spaceWidth = this.textWidth(" ");
    const lineHeight = this.contents.fontSize * 1.2;
    const firstPageMaxLines = Math.floor((this.contentsHeight() - firstPageYOffset) / lineHeight);
    const subsequentPagesMaxLines = Math.floor(this.contentsHeight() / lineHeight);
    const pages = [];
    let pageNumber = 1;
    let currentX = 0;
    let currentY = firstPageYOffset;
    let nbLines = 1;
    let newlineXOffset = 0;
    let currentLine = "";
    let currentPage = {
        x: firstPageXOffset,
        lines: [{
                text: "",
                y: firstPageYOffset
            }]
    };
    for (let word of words) {
        let startNewLine = false;
        if (word.includes('\n')) {
            word.replace('\n', '');
            startNewLine = true;
        }
        const wordWidth = this.textWidth(word);
        // If the word is too long, adding a new line
        if (currentX + wordWidth > width + newlineXOffset) {
            currentPage.lines.push({ text: currentLine, y: currentY });
            currentY += lineHeight;
            currentX = newlineXOffset;
            currentLine = "";
            nbLines++;
        }
        if (nbLines > (pageNumber === 1 ? firstPageMaxLines : subsequentPagesMaxLines)) {
            pages.push(JSON.parse(JSON.stringify(currentPage))); // deep clone
            pageNumber++;
            nbLines = 1;
            newlineXOffset = (pageNumber % 2 === 0) ? secondPageXOffset : firstPageXOffset;
            currentX = newlineXOffset;
            currentY = 0;
            currentLine = "";
            currentPage = {
                x: newlineXOffset,
                lines: [{
                        text: "",
                        y: 0
                    }]
            };
        }
        currentLine += word + " ";
        currentX += wordWidth + spaceWidth;
        if (startNewLine) {
            currentPage.lines.push({ text: currentLine, y: currentY });
            currentY += lineHeight;
            currentX = newlineXOffset;
            currentLine = "";
            nbLines++;
        }
    }
    currentPage.lines.push({ text: currentLine, y: currentY });
    pages.push(currentPage);
    return pages;
};
Window_JournalEntry.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (this.active) {
        if (Input.isRepeated('cancel') && this._cancelHandler) {
            SoundManager.playCancel();
            this._cancelHandler();
            Input.update();
        }
        else if (Input.isRepeated('right') && this._formattedContent.length > this._leftPageIndex + 2) {
            this._leftPageIndex += 2;
            this.refresh();
            Input.update();
        }
        else if (Input.isRepeated('left') && this._leftPageIndex >= 2) {
            this._leftPageIndex -= 2;
            this.refresh();
            Input.update();
        }
    }
};
// #endregion =========================== Window_JournalEntry ============================== //
// ============================== //
// #region ============================== Window_JournalPage ============================== //
function Window_JournalPage() {
    this.initialize.apply(this, arguments);
}
Window_JournalPage.prototype = Object.create(Window_Selectable.prototype);
Window_JournalPage.prototype.constructor = Window_JournalPage;
Window_JournalPage.prototype.initialize = function (isLeftPage = true) {
    const dimensions = TEW.MENU.JOURNALS_PAGE_CONTENT_AREA;
    Window_Selectable.prototype.initialize.call(this, isLeftPage ? TEW.MENU.JOURNALS_LEFT_PAGE_X_OFFSET : TEW.MENU.JOURNALS_RIGHT_PAGE_X_OFFSET, dimensions.y, dimensions.w, dimensions.h);
};
Window_JournalPage.prototype.maxItems = function () {
    var _a;
    return ((_a = this._items) === null || _a === void 0 ? void 0 : _a.length) || 0;
};
// #endregion =========================== Window_JournalPage ============================== //
// ============================== //
// #region ============================== Game_Levelling ============================== //
// ----------------------
//-----------------------------------------------------------------------------
// Game_Levelling
//
// Pending characteristic and competence advances for a single levelling session
function Game_Levelling() {
    this.initialize.apply(this, arguments);
}
Game_Levelling.prototype = Object.create(Object.prototype);
Game_Levelling.prototype.constructor = Game_Levelling;
// Initializing the session
Game_Levelling.prototype.initialize = function () {
    this._actor = null;
    this.clear();
};
// Setting the actor. Pending advances belong to a single actor and are dropped on change
Game_Levelling.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.clear();
    }
};
// Dropping every pending advance
Game_Levelling.prototype.clear = function () {
    this._compAdvances = {}; // ID: number of pending advances
    this._statAdvances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this._talentPurchases = []; // IDs of the talents about to be bought
    this._spellPurchases = []; // IDs of the spells about to be memorised, in purchase order
    this._spentExp = 0;
};
// #region ====== Experience === //
/**
 * Experience points consumed by the pending advances.
 * Everything but spells is accumulated as it is bought, since each purchase has a cost of its
 * own. Spells share a cost bracket per pool, so their total is replayed from the purchase list
 * instead, which keeps it right whichever spell is refunded.
 */
Game_Levelling.prototype.spentExp = function () {
    return this._spentExp + this.spellExp();
};
// Experience points still available for new advances
Game_Levelling.prototype.remainingExp = function () {
    return this._actor ? this._actor.availableExp() - this.spentExp() : 0;
};
// Whether anything is pending, i.e. whether exiting levelling mode needs a confirmation
Game_Levelling.prototype.hasAdvances = function () {
    return this.spentExp() > 0;
};
// #endregion === Experience === //
// === //
// #region ====== Career restrictions === //
// Careers gate what experience may be spent on, and are expected to always be defined
Game_Levelling.prototype.canImproveStat = function (paramId) {
    return !!this._actor && this._actor.canImproveStat(paramId);
};
Game_Levelling.prototype.canImproveComp = function (compId) {
    return !!this._actor && this._actor.canImproveComp(compId);
};
Game_Levelling.prototype.canBuyTalent = function (talentId) {
    return !!this._actor && this._actor.canBuyTalent(talentId);
};
// #endregion === Career restrictions === //
// === //
// #region ====== Competences === //
// Number of pending advances for a competence
Game_Levelling.prototype.compAdvances = function (compId) {
    return this._compAdvances[compId] || 0;
};
// Competence value including pending advances
Game_Levelling.prototype.compValue = function (compId) {
    return this._actor.compAdvances(compId) + this.compAdvances(compId);
};
// Experience cost of the next competence advance
Game_Levelling.prototype.nextCompCost = function (compId) {
    return TEW.LEVELLING.competenceCost(this.compValue(compId));
};
// Whether the career allows the advance and the remaining experience covers it
Game_Levelling.prototype.canIncreaseComp = function (compId) {
    return this.canImproveComp(compId) && this.nextCompCost(compId) <= this.remainingExp();
};
// It is impossible to go under the actor's current value
Game_Levelling.prototype.canDecreaseComp = function (compId) {
    return this.compAdvances(compId) > 0;
};
// Buying one competence advance
Game_Levelling.prototype.increaseComp = function (compId) {
    if (!this.canIncreaseComp(compId)) {
        return false;
    }
    this._spentExp += this.nextCompCost(compId);
    this._compAdvances[compId] = this.compAdvances(compId) + 1;
    return true;
};
// Refunding one competence advance
Game_Levelling.prototype.decreaseComp = function (compId) {
    if (!this.canDecreaseComp(compId)) {
        return false;
    }
    this._compAdvances[compId] = this.compAdvances(compId) - 1;
    // After the decrement, the next advance is the one that was just refunded
    this._spentExp -= this.nextCompCost(compId);
    if (this._compAdvances[compId] === 0) {
        delete this._compAdvances[compId];
    }
    return true;
};
// #endregion === Competences === //
// === //
// #region ====== Characteristics === //
// Number of pending advances for a characteristic
Game_Levelling.prototype.statAdvances = function (paramId) {
    return this._statAdvances[paramId];
};
// Total number of advances, used to find the cost bracket
Game_Levelling.prototype.statAdvanceCount = function (paramId) {
    return this._actor.statAdvances(paramId) + this._statAdvances[paramId];
};
// Characteristic value including pending advances
Game_Levelling.prototype.statValue = function (paramId) {
    return this._actor.param(paramId) + this._statAdvances[paramId];
};
// Experience cost of the next characteristic advance
Game_Levelling.prototype.nextStatCost = function (paramId) {
    return TEW.LEVELLING.characteristicCost(this.statAdvanceCount(paramId));
};
// Whether the career allows the advance and the remaining experience covers it
Game_Levelling.prototype.canIncreaseStat = function (paramId) {
    return this.canImproveStat(paramId) && this.nextStatCost(paramId) <= this.remainingExp();
};
// It is impossible to go under the actor's current value
Game_Levelling.prototype.canDecreaseStat = function (paramId) {
    return this._statAdvances[paramId] > 0;
};
// Buying one characteristic advance
Game_Levelling.prototype.increaseStat = function (paramId) {
    if (!this.canIncreaseStat(paramId)) {
        return false;
    }
    this._spentExp += this.nextStatCost(paramId);
    this._statAdvances[paramId] += 1;
    return true;
};
// Refunding one characteristic advance
Game_Levelling.prototype.decreaseStat = function (paramId) {
    if (!this.canDecreaseStat(paramId)) {
        return false;
    }
    this._statAdvances[paramId] -= 1;
    // After the decrement, the next advance is the one that was just refunded
    this._spentExp -= this.nextStatCost(paramId);
    return true;
};
// #endregion === Characteristics === //
// === //
// #region ====== Talents === //
// Experience cost of a talent which has not been acquired yet
Game_Levelling.prototype.talentCost = function () {
    return TEW.LEVELLING.TALENT_COST;
};
// Whether a talent is about to be bought
Game_Levelling.prototype.isTalentBought = function (talentId) {
    return this._talentPurchases.indexOf(talentId) >= 0;
};
// Buying a talent twice is not implemented yet, so only new talents may be bought
Game_Levelling.prototype.canBuyMoreTalent = function (talentId) {
    return this.canBuyTalent(talentId)
        && !this.isTalentBought(talentId)
        && this.talentCost() <= this.remainingExp();
};
Game_Levelling.prototype.canRefundTalent = function (talentId) {
    return this.isTalentBought(talentId);
};
Game_Levelling.prototype.buyTalent = function (talentId) {
    if (!this.canBuyMoreTalent(talentId)) {
        return false;
    }
    this._talentPurchases.push(talentId);
    this._spentExp += this.talentCost();
    return true;
};
Game_Levelling.prototype.refundTalent = function (talentId) {
    if (!this.canRefundTalent(talentId)) {
        return false;
    }
    this._talentPurchases.splice(this._talentPurchases.indexOf(talentId), 1);
    this._spentExp -= this.talentCost();
    // A refunded magical talent takes the spells it opened along with it
    this.dropUnavailableSpells();
    return true;
};
// Talent level including the purchase about to be made
Game_Levelling.prototype.talentValue = function (talentId) {
    return this._actor.talent(talentId) + (this.isTalentBought(talentId) ? 1 : 0);
};
// #endregion === Talents === //
// === //
// #region ====== Spells === //
/**
 * Whether a spell domain is open, counting the magical talents about to be bought.
 * The bare Arcane Magic talent stands for the Arcane Lore of the actor's wind, so buying it
 * opens the generic arcane spells and that lore's own at once.
 */
Game_Levelling.prototype.canCastDomain = function (domain) {
    if (!this._actor) {
        return false;
    }
    if (this._actor.canCastDomain(domain)) {
        return true;
    }
    if (domain === "Petty" /* SpellDomain.PETTY */) {
        return this.isTalentBought(TEW.MAGIC.PETTY_TALENT);
    }
    if (!this.isTalentBought(TEW.MAGIC.ARCANE_TALENT) || !this._actor.arcaneTalent()) {
        return false;
    }
    return domain === "Arcane" /* SpellDomain.ARCANE */
        || TEW.MAGIC.WIND_DOMAINS[this._actor.wind()] === domain;
};
// IDs of the spells which may be memorised, i.e. open and not known or pending yet
Game_Levelling.prototype.buyableSpells = function () {
    if (!this._actor) {
        return [];
    }
    return TEW.DATABASE.SPELLS.IDS.filter(spellId => !this._actor.hasSpell(spellId)
        && this.canCastDomain(TEW.DATABASE.SPELLS.SET[spellId].domain));
};
// Cost pool a spell is priced in
Game_Levelling.prototype.spellPool = function (spellId) {
    return TEW.MAGIC.spellPool(TEW.DATABASE.SPELLS.SET[spellId].domain);
};
/**
 * Petty spells manifested by the Petty Magic talent and not picked yet, counting the talent
 * about to be bought. They cost nothing, and are spent oldest first.
 */
Game_Levelling.prototype.totalFreePettySpells = function () {
    const granted = this.isTalentBought(TEW.MAGIC.PETTY_TALENT)
        ? this._actor.paramBonus('WILL')
        : 0;
    return this._actor.freePettySpells() + granted;
};
Game_Levelling.prototype.freePettySpells = function () {
    const pending = this._spellPurchases
        .filter((spellId) => this.spellPool(spellId) === TEW.MAGIC.PETTY_POOL)
        .length;
    return Math.max(0, this.totalFreePettySpells() - pending);
};
// Number of spells in a pool, including the ones about to be memorised
Game_Levelling.prototype.spellPoolSize = function (pool) {
    const pending = this._spellPurchases
        .filter((spellId) => this.spellPool(spellId) === pool)
        .length;
    return this._actor.spellsInPool(pool).length + pending;
};
// Experience cost of the next spell of a pool
Game_Levelling.prototype.nextSpellCost = function (spellId) {
    const pool = this.spellPool(spellId);
    return this._actor.spellCost(pool, this.spellPoolSize(pool), this.freePettySpells());
};
/**
 * Total cost of the pending spells.
 * A spell's cost depends on how many are already known in its pool, so the whole list is
 * replayed in purchase order rather than accumulated.
 */
Game_Levelling.prototype.spellExp = function () {
    if (!this._actor) {
        return 0;
    }
    return this.spellCosts().reduce((total, cost) => total + cost, 0);
};
// Cost of each pending spell, in purchase order, as the confirmation summary displays them
Game_Levelling.prototype.spellCosts = function () {
    const poolSizes = {};
    let free = this.totalFreePettySpells();
    return this._spellPurchases.map((spellId) => {
        const pool = this.spellPool(spellId);
        if (poolSizes[pool] === undefined) {
            poolSizes[pool] = this._actor.spellsInPool(pool).length;
        }
        const cost = this._actor.spellCost(pool, poolSizes[pool], free);
        if (pool === TEW.MAGIC.PETTY_POOL && free > 0) {
            free--;
        }
        poolSizes[pool]++;
        return cost;
    });
};
Game_Levelling.prototype.isSpellBought = function (spellId) {
    return this._spellPurchases.indexOf(spellId) >= 0;
};
Game_Levelling.prototype.canBuySpell = function (spellId) {
    return !!this._actor
        && !this._actor.hasSpell(spellId)
        && !this.isSpellBought(spellId)
        && this.canCastDomain(TEW.DATABASE.SPELLS.SET[spellId].domain)
        && this.nextSpellCost(spellId) <= this.remainingExp();
};
Game_Levelling.prototype.canRefundSpell = function (spellId) {
    return this.isSpellBought(spellId);
};
Game_Levelling.prototype.buySpell = function (spellId) {
    if (!this.canBuySpell(spellId)) {
        return false;
    }
    this._spellPurchases.push(spellId);
    return true;
};
Game_Levelling.prototype.refundSpell = function (spellId) {
    if (!this.canRefundSpell(spellId)) {
        return false;
    }
    this._spellPurchases.splice(this._spellPurchases.indexOf(spellId), 1);
    return true;
};
// Dropping the pending spells whose domain is no longer open, after a talent is refunded
Game_Levelling.prototype.dropUnavailableSpells = function () {
    this._spellPurchases = this._spellPurchases.filter((spellId) => this.canCastDomain(TEW.DATABASE.SPELLS.SET[spellId].domain));
};
// #endregion === Spells === //
// === //
// #region ====== Summary and commit === //
// Listing every pending advance, to be displayed in the confirmation window
Game_Levelling.prototype.summary = function () {
    const advances = [];
    if (!this._actor) {
        return advances;
    }
    for (let paramId = 0; paramId < this._statAdvances.length; paramId++) {
        const pending = this._statAdvances[paramId];
        if (pending > 0) {
            const bought = this._actor.statAdvances(paramId);
            advances.push({
                name: TEW.CHARACTERS.STATS_VERBOSE[paramId],
                from: this._actor.param(paramId),
                to: this._actor.param(paramId) + pending,
                cost: TEW.LEVELLING.characteristicRangeCost(bought, bought + pending)
            });
        }
    }
    Object.keys(this._compAdvances)
        .sort((a, b) => this._actor.compName(a).localeCompare(this._actor.compName(b)))
        .forEach(compId => {
        const bought = this._actor.compAdvances(compId);
        const pending = this.compAdvances(compId);
        advances.push({
            name: this._actor.compName(compId),
            from: bought,
            to: bought + pending,
            cost: TEW.LEVELLING.competenceRangeCost(bought, bought + pending)
        });
    });
    this._talentPurchases
        .slice()
        .sort((a, b) => TEW.DATABASE.TALENTS.SET[a].name.localeCompare(TEW.DATABASE.TALENTS.SET[b].name))
        .forEach(talentId => {
        const bought = this._actor.talent(talentId);
        advances.push({
            name: TEW.DATABASE.TALENTS.SET[talentId].name,
            from: bought,
            to: bought + 1,
            cost: this.talentCost()
        });
    });
    // Spells keep their purchase order, as each one is priced by how many came before it
    const spellCosts = this.spellCosts();
    this._spellPurchases.forEach((spellId, index) => {
        advances.push({
            name: TEW.DATABASE.SPELLS.SET[spellId].name,
            from: 0,
            to: 0,
            cost: spellCosts[index],
            text: TextManager.statusSpellLearned
        });
    });
    return advances;
};
/**
 * Writing every pending advance to the actor and consuming the experience points.
 * Talents are applied before spells, so that the free petty spells the Petty Magic talent
 * manifests are already granted when the spells bought with them are memorised.
 */
Game_Levelling.prototype.apply = function () {
    if (!this._actor) {
        return;
    }
    const spentExp = this.spentExp();
    for (let paramId = 0; paramId < this._statAdvances.length; paramId++) {
        this._actor.applyStatAdvances(paramId, this._statAdvances[paramId]);
    }
    Object.keys(this._compAdvances).forEach(compId => {
        this._actor.applyCompAdvances(compId, this._compAdvances[compId]);
    });
    this._talentPurchases.forEach(talentId => {
        this._actor.addTalent(talentId);
    });
    this._spellPurchases.forEach((spellId) => {
        this._actor.learnSpell(spellId, this.spellPool(spellId) === TEW.MAGIC.PETTY_POOL);
    });
    this._actor.spendExp(spentExp);
    this.clear();
};
// #endregion === Summary and commit === //
// #endregion =========================== Game_Levelling ============================== //
// ============================== //
// #region ============================== Window_StatusLevellingConfirm ============================== //
// ----------------------
//-----------------------------------------------------------------------------
// Window_StatusLevellingConfirm
//
// Confirming, discarding or resuming a levelling session
function Window_StatusLevellingConfirm() {
    this.initialize.apply(this, arguments);
}
Window_StatusLevellingConfirm.MARGIN_Y = 520;
Window_StatusLevellingConfirm.prototype = Object.create(Window_Command.prototype);
Window_StatusLevellingConfirm.prototype.constructor = Window_StatusLevellingConfirm;
// Initializing the command window, horizontally centered under the summary
Window_StatusLevellingConfirm.prototype.initialize = function () {
    this._summaryWindow = null;
    Window_Command.prototype.initialize.call(this, (Graphics.boxWidth - this.windowWidth()) / 2, Window_StatusLevellingConfirm.MARGIN_Y);
};
Window_StatusLevellingConfirm.prototype.makeCommandList = function () {
    this.addCommand(TextManager.statusLevellingConfirm, 'levelling_confirm');
    this.addCommand(TextManager.statusLevellingDiscard, 'levelling_discard');
    this.addCommand(TextManager.statusLevellingBack, 'levelling_back');
};
Window_StatusLevellingConfirm.prototype.maxCols = function () {
    return 1;
};
// Linking the summary window so page up and page down can scroll it
Window_StatusLevellingConfirm.prototype.setSummaryWindow = function (summaryWindow) {
    this._summaryWindow = summaryWindow;
};
Window_StatusLevellingConfirm.prototype.cursorPagedown = function () {
    if (this._summaryWindow) {
        this._summaryWindow.scrollDown();
    }
};
Window_StatusLevellingConfirm.prototype.cursorPageup = function () {
    if (this._summaryWindow) {
        this._summaryWindow.scrollUp();
    }
};
// #endregion =========================== Window_StatusLevellingConfirm ============================== //
// ============================== //
// #region ============================== Window_StatusLevellingSummary ============================== //
// ----------------------
//-----------------------------------------------------------------------------
// Window_StatusLevellingSummary
//
// Confirmation prompt: a scrollable summary of the pending advances, with the
// Cancel/Confirm/Discard commands in a single selectable row at the bottom
function Window_StatusLevellingSummary() {
    this.initialize.apply(this, arguments);
}
Window_StatusLevellingSummary.MARGIN_Y = 60;
Window_StatusLevellingSummary.NAME_COLUMN_WIDTH = 300;
Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH = 60;
Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH = 30;
Window_StatusLevellingSummary.COST_COLUMN_WIDTH = 130;
// Room taken by the two values and the arrow between them, or by a label drawn in their place
Window_StatusLevellingSummary.VALUES_WIDTH = 150; // 2 * value column + arrow column
// Gap left between the last visible row of the list and the command row below it
Window_StatusLevellingSummary.LIST_BOTTOM_PADDING = 20;
Window_StatusLevellingSummary.prototype = Object.create(Window_HorzCommand.prototype);
Window_StatusLevellingSummary.prototype.constructor = Window_StatusLevellingSummary;
// Initializing the window, horizontally centered under the topbar
Window_StatusLevellingSummary.prototype.initialize = function () {
    this._levelling = null;
    this._advances = [];
    this._listScroll = 0;
    Window_HorzCommand.prototype.initialize.call(this, (Graphics.boxWidth - this.windowWidth()) / 2, Window_StatusLevellingSummary.MARGIN_Y);
};
// Linking the window to the levelling session holding the pending advances
Window_StatusLevellingSummary.prototype.setLevelling = function (levelling) {
    this._levelling = levelling;
    this.refreshAdvances();
};
// Rebuilding the list, to be called every time the window is displayed
Window_StatusLevellingSummary.prototype.refreshAdvances = function () {
    this._advances = this._levelling ? this._levelling.summary() : [];
    this._listScroll = 0;
    this.refresh();
};
// #region ====== Bottom command row === //
// Cancel goes back to levelling mode keeping every pending advance, same as the cancel handler
Window_StatusLevellingSummary.prototype.makeCommandList = function () {
    this.addCommand(TextManager.statusLevellingBack, 'levelling_back');
    this.addCommand(TextManager.statusLevellingConfirm, 'levelling_confirm');
    this.addCommand(TextManager.statusLevellingDiscard, 'levelling_discard');
};
// A single row of 3 commands
Window_StatusLevellingSummary.prototype.maxCols = function () {
    return 3;
};
Window_StatusLevellingSummary.prototype.itemHeight = function () {
    return TEW.MENU.LINE_HEIGHT;
};
Window_StatusLevellingSummary.prototype.commandRowY = function () {
    return this.contentsHeight() - this.itemHeight();
};
// The command row is pinned to the bottom of the window, regardless of the list's height
Window_StatusLevellingSummary.prototype.itemRect = function (index) {
    const rect = Window_Selectable.prototype.itemRect.call(this, index);
    rect.y = this.commandRowY();
    return rect;
};
// #endregion === Bottom command row === //
// === //
// #region ====== Advances list === //
// Height available to the list above the command row, minus the bottom padding
Window_StatusLevellingSummary.prototype.listAreaHeight = function () {
    return this.commandRowY() - Window_StatusLevellingSummary.LIST_BOTTOM_PADDING;
};
Window_StatusLevellingSummary.prototype.listVisibleRows = function () {
    return Math.max(0, Math.floor(this.listAreaHeight() / this.itemHeight()));
};
Window_StatusLevellingSummary.prototype.maxListScroll = function () {
    return Math.max(0, this._advances.length - this.listVisibleRows());
};
Window_StatusLevellingSummary.prototype.setListScroll = function (scroll) {
    const clamped = scroll.clamp(0, this.maxListScroll());
    if (this._listScroll !== clamped) {
        this._listScroll = clamped;
        this.refresh();
    }
};
Window_StatusLevellingSummary.prototype.scrollListDown = function () {
    this.setListScroll(this._listScroll + 1);
};
Window_StatusLevellingSummary.prototype.scrollListUp = function () {
    this.setListScroll(this._listScroll - 1);
};
// Drawing every advance currently visible, above the command row
Window_StatusLevellingSummary.prototype.drawAdvancesList = function () {
    const lastIndex = Math.min(this._listScroll + this.listVisibleRows(), this._advances.length);
    for (let index = this._listScroll; index < lastIndex; index++) {
        this.drawAdvance(index);
    }
};
/**
 * Drawing one advance: name, current value, new value and total cost.
 * Purchases which have no level, spells among them, carry a label instead of the two values.
 */
Window_StatusLevellingSummary.prototype.drawAdvance = function (index) {
    const y = (index - this._listScroll) * this.itemHeight();
    const advance = this._advances[index];
    let x = 0;
    this.changeTextColor(this.systemColor());
    this.drawText(advance.name, x, y, Window_StatusLevellingSummary.NAME_COLUMN_WIDTH, 'left');
    this.resetTextColor();
    x += Window_StatusLevellingSummary.NAME_COLUMN_WIDTH;
    if (advance.text) {
        this.changeTextColor(this.powerUpColor());
        this.drawText(advance.text, x, y, Window_StatusLevellingSummary.VALUES_WIDTH, 'right');
        this.resetTextColor();
    }
    else {
        this.drawText(`${advance.from}`, x, y, Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH, 'right');
        this.drawText('>', x + Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH, y, Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH, 'center');
        this.changeTextColor(this.powerUpColor());
        this.drawText(`${advance.to}`, x + Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH
            + Window_StatusLevellingSummary.ARROW_COLUMN_WIDTH, y, Window_StatusLevellingSummary.VALUE_COLUMN_WIDTH, 'right');
        this.resetTextColor();
    }
    x += Window_StatusLevellingSummary.VALUES_WIDTH;
    this.drawText(`- ${advance.cost}`, x, y, Window_StatusLevellingSummary.COST_COLUMN_WIDTH, 'right');
};
// Drawing the list first, then the command row on top of it
Window_StatusLevellingSummary.prototype.drawAllItems = function () {
    this.drawAdvancesList();
    Window_Selectable.prototype.drawAllItems.call(this);
};
// #endregion === Advances list === //
// === //
// #region ====== Input === //
// Left and right move the selected command (handled by the base class); up and
// down leave the selection alone and scroll the list instead
Window_StatusLevellingSummary.prototype.cursorDown = function () {
    this.scrollListDown();
};
Window_StatusLevellingSummary.prototype.cursorUp = function () {
    this.scrollListUp();
};
Window_StatusLevellingSummary.prototype.cursorPagedown = function () {
    this.setListScroll(this._listScroll + this.listVisibleRows());
};
Window_StatusLevellingSummary.prototype.cursorPageup = function () {
    this.setListScroll(this._listScroll - this.listVisibleRows());
};
Window_StatusLevellingSummary.prototype.processWheel = function () {
    if (this.visible) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.scrollListDown();
        }
        if (TouchInput.wheelY <= -threshold) {
            this.scrollListUp();
        }
    }
};
// #endregion === Input === //
// #endregion =========================== Window_StatusLevellingSummary ============================== //
// ============================== //
// #region ============================== Window_InventoryTransferSpinner ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryTransferSpinner
//
// Spinner to choose how many items to transfer
function Window_InventoryTransferSpinner() {
    this.initialize.apply(this, arguments);
}
Window_InventoryTransferSpinner.prototype = Object.create(Window_Selectable.prototype);
Window_InventoryTransferSpinner.prototype.constructor = Window_InventoryTransferSpinner;
Window_InventoryTransferSpinner.LEFT_X = Window_InventoryTransferCommand.LEFT_X + 380;
Window_InventoryTransferSpinner.TOP_Y = Window_InventoryTransferCommand.TOP_Y;
Window_InventoryTransferSpinner.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, Window_InventoryTransferSpinner.LEFT_X, Window_InventoryTransferSpinner.TOP_Y, this.windowWidth(), this.windowHeight());
    this._number = 1;
    this._max = 1;
    this._maxDigits = 2;
    this.openness = 0;
    this.deactivate();
};
Window_InventoryTransferSpinner.prototype.setMax = function (max) {
    this._max = max;
};
Window_InventoryTransferSpinner.prototype.start = function () {
    this._number = 1;
    // this.placeButtons();
    // this.updateButtonsVisiblity();
    this.createContents();
    this.refresh();
    this.open();
    this.activate();
    this.show();
    this.select(0);
};
Window_InventoryTransferSpinner.prototype.drawAllItems = function () {
    this.resetTextColor();
    const signWidth = this.textWidth('× ');
    this.drawText('× ', 0, 0, signWidth, 'left');
    this.drawText(this._number, signWidth, 0, this.textWidth('00'), 'right');
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
// #region ============================== Window_JournalPrettyEntry ============================== //
function Window_JournalPrettyEntry() {
    this.initialize.apply(this, arguments);
}
;
Window_JournalPrettyEntry.prototype = Object.create(Window_JournalEntry.prototype);
Window_JournalPrettyEntry.prototype.constructor = Window_JournalPrettyEntry;
Window_JournalPrettyEntry.prototype.initialize = function () {
    Window_JournalEntry.prototype.initialize.call(this);
};
// TODO preload all images at once if laggy
Window_JournalPrettyEntry.prototype.drawDetails = function () {
    // Title
    if (this._leftPageIndex === 0) {
        this.drawUnderlinedText(this._title, 0, 0, 510, "center");
    }
    // Pre-load all bitmaps
    const images = this._paragraphs
        .map((p) => p.image)
        .filter((image) => image !== undefined);
    for (let image of images) {
        this.reserveImage(image);
    }
    const readyCheck = resolve => {
        if (ImageManager.isReady())
            resolve();
        else
            setTimeout(() => readyCheck(resolve), 100);
    };
    new Promise(readyCheck).then(() => {
        // Format content or read from memory
        if (!this._formattedContent) {
            this._formattedContent = {
                pages: [],
                images: []
            };
            const lineHeight = this.contents.fontSize * 1.2;
            // In case of a page with text + image + text, we need to fuse both text parts into a single formatted page
            let currentPage = 0;
            let fuseWithPreviousPage = false;
            let nextBlockStartY = 80;
            let text = "";
            for (let i = 0; i < this._paragraphs.length; i++) {
                const paragraph = this._paragraphs[i];
                if (paragraph.content) {
                    text += paragraph.content + "\n \n ";
                }
                // Cut a text block into pages, because we have an image to place or this is the last bit of content
                if (paragraph.image || i === this._paragraphs.length - 1) {
                    if (text.length) {
                        const block = this.cutTextIntoPages(text, nextBlockStartY, currentPage % 2 * 590, (currentPage + 1) % 2 * 590, 510); // TODO constants ?
                        // Page cut in two by image: we need to fuse both parts
                        if (fuseWithPreviousPage) {
                            fuseWithPreviousPage = false;
                            const currentPageBottomPart = block.shift();
                            if (this._formattedContent.pages[currentPage]) {
                                this._formattedContent.pages[currentPage].lines =
                                    this._formattedContent.pages[currentPage].lines.concat(currentPageBottomPart === null || currentPageBottomPart === void 0 ? void 0 : currentPageBottomPart.lines);
                            }
                            else {
                                this._formattedContent.pages.push(currentPageBottomPart);
                            }
                        }
                        this._formattedContent.pages = this._formattedContent.pages.concat(block);
                        // Find the Y offset of the last line to display the image under. Only one image per page in case of text.
                        const lastPage = block[block.length - 1];
                        nextBlockStartY = lastPage.lines[lastPage.lines.length - 1].y;
                        currentPage += block.length - 1;
                        text = "";
                    }
                    if (paragraph.image) {
                        const previousPage = currentPage;
                        const bitmap = this.loadImage(paragraph.image);
                        // Next page if image is too tall to fit under the text
                        if (nextBlockStartY + bitmap.rect.height > this.contentsHeight()) {
                            nextBlockStartY = 0;
                            currentPage += 1;
                        }
                        this._formattedContent.images.push({
                            page: currentPage,
                            y: nextBlockStartY,
                            name: paragraph.image
                        });
                        nextBlockStartY += bitmap.rect.height + lineHeight;
                        // Next page if we can't display text under the image
                        if (nextBlockStartY + lineHeight > this.contentsHeight()) {
                            nextBlockStartY = 0;
                            currentPage += 1;
                        }
                        if (previousPage === currentPage) {
                            fuseWithPreviousPage = true;
                        }
                    }
                }
            }
        }
        // Render formatted content
        const displayedPages = [this._formattedContent.pages[this._leftPageIndex]];
        if (this._formattedContent.pages.length >= this._leftPageIndex + 2) {
            displayedPages.push(this._formattedContent.pages[this._leftPageIndex + 1]);
        }
        for (let page of displayedPages) {
            for (let line of page.lines) {
                this.drawText(line.text, page.x, line.y, 510, 'left');
            }
        }
        const displayedImages = this._formattedContent.images.filter(image => image.page === this._leftPageIndex || image.page === this._leftPageIndex + 1);
        for (let image of displayedImages) {
            const bitmap = this.loadImage(image.name);
            this.contents.blt(bitmap, 0, 0, bitmap.rect.width, bitmap.rect.height, image.page % 2 * 590, image.y);
        }
    });
};
Window_JournalPrettyEntry.prototype.close = function () {
    Window_JournalEntry.prototype.close.call(this);
};
// #endregion =========================== Window_JournalPrettyEntry ============================== //
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
    this.drawWrappedTextManually(armor[1].description, 0, 220, 160 // 440 (Height) - 60 (2 * Padding) - 220 (Starting Y)
    );
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
Window_InventoryInfo.prototype = Object.create(Window_Base.prototype);
Window_InventoryInfo.prototype.constructor = Window_InventoryInfo;
Window_InventoryInfo.prototype.initialize = function () {
    Window_Base.prototype.initialize.call(this, 0, TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT, this.windowWidth(), this.windowHeight());
    this._iconPadding = 5;
};
Window_InventoryInfo.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._bgSprite = new Sprite(ImageManager.loadSystem("bg_menuStats_" + actor.name()));
        this.addChildAt(this._bgSprite, 0);
        this.refresh();
    }
};
Window_InventoryInfo.prototype.refresh = function () {
    if (this.contents) {
        this.contents.clear();
        if (this._actor) {
            this.drawAllItems();
        }
    }
};
Window_InventoryInfo.prototype.drawAllItems = function () {
    this.drawWeapons();
    this.drawArmors();
};
Window_InventoryInfo.prototype.drawWeapons = function () {
    const mainHand = this._actor.mainHand();
    const secondHand = this._actor.secondHand();
    if (mainHand) {
        const mainHandInfo = TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === mainHand.id);
        const isRanged = Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET).includes(mainHand.id);
        this.drawWeapon(mainHandInfo[1], isRanged, 60); // TODO y
    }
    if (secondHand) {
        const secondHandInfo = TEW.DATABASE.WEAPONS.ARRAY.find(w => w[0] === secondHand.id);
        const isRanged = Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET).includes(secondHand.id);
        this.drawWeapon(secondHandInfo[1], isRanged, 96); // TODO y
    }
};
Window_InventoryInfo.prototype.drawWeapon = function (weapon, isRanged, y) {
    this.changeTextColor(this.systemColor());
    this.drawIcon(weapon.icon, 30, y); // TODO x
    this.drawText(weapon.name, 30 + 32 + this._iconPadding, y, this.contentsWidth()); // TODO width
    this.resetTextColor();
    const damageExcludingSL = weapon.damage + (weapon.strBonus ? this._actor.paramBonus("STRG" /* Stat.STRG */) : 0); // TODO weapon qualities ?
    this.drawText("Damage: " + damageExcludingSL, 220, y, this.contentsWidth()); // TODO y & width
    if (isRanged) {
        const ammoInInventory = this._actor.ammoFromGroup(weapon.ammunition[0]);
        this.drawText("Available ammo: " + ammoInInventory, 380, y, this.contentsWidth()); // TODO ammo name ?
    }
};
Window_InventoryInfo.prototype.drawArmors = function () {
    const equippedArmors = this._actor._equippedArmors;
    for (let i = 0; i < equippedArmors.length; i++) {
        this.drawArmor(equippedArmors[i], 170 + (i * TEW.MENU.LINE_HEIGHT)); // TODO height
    }
};
Window_InventoryInfo.prototype.drawArmor = function (armorId, y) {
    const armorDetails = TEW.DATABASE.ARMORS.ARRAY.find(a => a[0] === armorId);
    const x = 30; // TODO x
    if (armorDetails) {
        this.changeTextColor(this.systemColor());
        this.drawIcon(armorDetails[1].icon, x, y);
        this.drawText(armorDetails[1].name, x + 32 + this._iconPadding, y, this.contentsWidth() - (x + 32 + this._iconPadding));
        this.resetTextColor();
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
    this.drawWrappedTextManually(item[1].description, 0, 220, 160 // 440 (Height) - 60 (2 * Padding) - 220 (Starting Y)
    );
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
    this.drawWrappedTextManually(ammo[1].description, 0, 220, 160 // 440 (Height) - 60 (2 * Padding) - 220 (Starting Y)
    );
};
// #endregion =========================== Window_InventoryItemDetails ============================== //
// ============================== //
// #region ============================== Window_InventoryItems ============================== //
//-----------------------------------------------------------------------------
// Window_InventoryItems
//
// General item list window
Window_InventoryItems.RIGHT_COLUMN_WIDTH = 80;
Window_InventoryItems.LEFT_COLUMN_WIDTH = 500;
Window_InventoryItems.RIGHT_COLUMN_POSITION = 500;
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
    const x = 0;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const itemOrAmmo = this.itemOrAmmoFromIndex(index);
    this.changeTextColor(this.systemColor());
    this.drawIcon(itemOrAmmo[1].groupIcon, x, y);
    this.drawText(itemOrAmmo[1].name, x + 32 + this._iconPadding, y, Window_InventoryItems.LEFT_COLUMN_WIDTH);
    this.resetTextColor();
    if (index < this._ammo.length) {
        this.drawText(this._actor.ammo(itemOrAmmo[0]), Window_InventoryItems.RIGHT_COLUMN_POSITION, y, Window_InventoryItems.RIGHT_COLUMN_WIDTH, 'right');
    }
    else {
        this.drawText(this._actor.item(itemOrAmmo[0]), Window_InventoryItems.RIGHT_COLUMN_POSITION, y, Window_InventoryItems.RIGHT_COLUMN_WIDTH, 'right');
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
    const table = [
        // ["Owned :", "x" + item[1].quantity],
        ["Group :", weapon.groupLabel],
        ["Enc. :", weapon.enc]
    ];
    const hasAmmo = weapon.ammo > 0;
    if (hasAmmo) {
        table.push(["Ammo :", weapon.ammoType + " (" + weapon.ammo + ")"]);
    }
    this.drawTable2Columns(0, 80, this.contentsWidth(), hasAmmo ? 3 : 2, table);
    this.drawLine(200);
    // Description
    this.drawWrappedTextManually(weapon.description, 0, 220, 160 // 440 (Height) - 60 (2 * Padding) - 220 (Starting Y)
    );
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
    return 18;
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
// #region ============================== Window_CharacterEntry ============================== //
function Window_CharacterEntry() {
    this.initialize.apply(this, arguments);
}
;
Window_CharacterEntry.IMAGE_CACHE_RID = 'Window_CharacterEntry_RID';
Window_CharacterEntry.prototype = Object.create(Window_JournalPrettyEntry.prototype);
Window_CharacterEntry.prototype.constructor = Window_CharacterEntry;
Window_CharacterEntry.prototype.initialize = function () {
    Window_JournalPrettyEntry.prototype.initialize.call(this);
};
Window_CharacterEntry.prototype.reset = function (entry) {
    this._id = entry.id;
    this._title = entry.title;
    this._paragraphs = entry.paragraphs;
    this._formattedContent = undefined;
};
Window_CharacterEntry.prototype.reserveImage = function (image) {
    return ImageManager.reserveImage('mugs', image, Window_CharacterEntry.IMAGE_CACHE_RID);
};
Window_CharacterEntry.prototype.loadImage = function (image) {
    return ImageManager.reserveImage('mugs', image);
};
Window_CharacterEntry.prototype.close = function () {
    ImageManager.releaseReservation(Window_CharacterEntry.IMAGE_CACHE_RID);
    Window_JournalPrettyEntry.prototype.close.call(this);
};
// #endregion =========================== Window_CharacterEntry ============================== //
// ============================== //
// #region ============================== Window_Document ============================== //
function Window_Document() {
    this.initialize.apply(this, arguments);
}
;
Window_Document.IMAGE_CACHE_RID = 'Window_Document_RID';
Window_Document.prototype = Object.create(Window_JournalEntry.prototype);
Window_Document.prototype.constructor = Window_Document;
Window_Document.prototype.initialize = function () {
    Window_JournalEntry.prototype.initialize.call(this);
    this._pageIndex = 0;
};
Window_Document.prototype.reset = function (entry) {
    this._id = entry.id;
    this._title = entry.title;
    this._image = entry.image;
    this._paragraphs = entry.paragraphs;
    this._formattedContent = undefined;
};
Window_Document.prototype.drawDetails = function () {
    // Title
    if (this._pageIndex === 0) {
        this.drawUnderlinedText(this._title, 0, 0, 510, "center");
    }
    // Format content or read from memory
    if (!this._formattedContent) {
        const text = this._paragraphs.map((p) => p.content).join('\n \n ');
        this._formattedContent = this.cutTextIntoPages(text, 80, 0, 590, 510); // TODO constants ?
    }
    const page = this._formattedContent[this._pageIndex];
    for (let line of page.lines) {
        this.drawText(line.text, 0, line.y, 510, 'left');
    }
    this.reserveImage(this._image);
    const readyCheck = resolve => {
        if (ImageManager.isReady())
            resolve();
        else
            setTimeout(() => readyCheck(resolve), 100);
    };
    new Promise(readyCheck).then(() => {
        const bitmap = this.loadImage(this._image);
        this.contents.blt(bitmap, 0, 0, bitmap.rect.width, bitmap.rect.height, 590, 0);
    });
};
Window_Document.prototype.update = function () {
    Window_Base.prototype.update.call(this);
    if (this.active) {
        if (Input.isRepeated('cancel') && this._cancelHandler) {
            SoundManager.playCancel();
            this._cancelHandler();
            Input.update();
        }
        else if (Input.isRepeated('right') && this._formattedContent.length > this._pageIndex + 1) {
            this._pageIndex++;
            this.refresh();
            Input.update();
        }
        else if (Input.isRepeated('left') && this._pageIndex >= 1) {
            this._pageIndex--;
            this.refresh();
            Input.update();
        }
    }
};
Window_Document.prototype.reserveImage = function (image) {
    return ImageManager.reserveImage('documents', image, Window_Document.IMAGE_CACHE_RID);
};
Window_Document.prototype.loadImage = function (image) {
    return ImageManager.reserveImage('documents', image);
};
Window_Document.prototype.close = function () {
    ImageManager.releaseReservation(Window_Document.IMAGE_CACHE_RID);
    Window_JournalEntry.prototype.close.call(this);
};
// #endregion =========================== Window_Document ============================== //
// ============================== //
// #region ============================== Window_GlossaryEntry ============================== //
function Window_GlossaryEntry() {
    this.initialize.apply(this, arguments);
}
;
Window_GlossaryEntry.prototype = Object.create(Window_JournalEntry.prototype);
Window_GlossaryEntry.prototype.constructor = Window_GlossaryEntry;
Window_GlossaryEntry.prototype.initialize = function () {
    Window_JournalEntry.prototype.initialize.call(this);
};
Window_GlossaryEntry.prototype.reset = function (entry) {
    this._id = entry.id;
    this._title = entry.title;
    this._paragraphs = entry.paragraphs;
    this._formattedContent = undefined;
};
// #endregion =========================== Window_GlossaryEntry ============================== //
// ============================== //
// #region ============================== Window_QuestDetails ============================== //
function Window_QuestDetails() {
    this.initialize.apply(this, arguments);
}
Window_QuestDetails.prototype = Object.create(Window_Base.prototype);
Window_QuestDetails.prototype.constructor = Window_QuestDetails;
Window_QuestDetails.prototype.initialize = function () {
    const dimensions = TEW.MENU.JOURNALS_PAGE_CONTENT_AREA;
    Window_Base.prototype.initialize.call(this, TEW.MENU.JOURNALS_RIGHT_PAGE_X_OFFSET, dimensions.y, dimensions.w, dimensions.h);
    this._title = undefined;
    this._paragraphs = undefined;
};
Window_QuestDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._title && this._paragraphs) {
        this.drawDetails();
    }
};
Window_QuestDetails.prototype.drawDetails = function () {
    // Title
    this.drawUnderlinedText(this._title, 0, 0, this.contentsWidth(), "center");
    // Paragraphs
    const text = this._paragraphs.map((p) => p.content).join('\n \n ');
    this.drawWrappedTextManually(text, 0, 80, this.contentsHeight());
};
// #endregion =========================== Window_QuestDetails ============================== //
// ============================== //
// #region ============================== Window_QuestList ============================== //
function Window_QuestList() {
    this.initialize.apply(this, arguments);
}
Window_QuestList.prototype = Object.create(Window_JournalPage.prototype);
Window_QuestList.prototype.constructor = Window_QuestList;
Window_QuestList.prototype.initialize = function (quests) {
    Window_JournalPage.prototype.initialize.call(this, true);
    this._quests = quests;
    this._collapsedState = this._quests.map(quest => quest.title); // display when no quest is expanded
    this._items = this._collapsedState.slice();
    this._expandedIndex = undefined;
    this.refresh();
};
// Add selected quest steps to display under the main entry with an offset
Window_QuestList.prototype.expandSelectedQuest = function () {
    const index = this.index();
    let isQuestSelected = true;
    let questIndex = index;
    if (this._expandedIndex !== undefined) {
        const questCount = this._collapsedState.length;
        const collapsibleCount = this._items.length - questCount;
        const indexBeforeExpanded = index <= this._expandedIndex;
        questIndex = indexBeforeExpanded ? index : index - collapsibleCount;
        isQuestSelected = indexBeforeExpanded || (index > this._expandedIndex + collapsibleCount);
    }
    if (isQuestSelected && this._quests[questIndex].expandable) {
        this._items = this._collapsedState.addItemsAt(index + 1, this._quests[questIndex].steps.map((step) => "    " + step.title));
        this._expandedIndex = questIndex;
        this.select(questIndex);
    }
    this.refresh();
};
// Drawing one item
// TODO add arrow icon for expandable quests
Window_QuestList.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    this.drawText(this._items[index], 0, y, this._width, 'left');
};
// Getting the current selected quest or step description
Window_QuestList.prototype.selectedQuestDetails = function () {
    // TODO extract function
    const index = this.index();
    let isQuestSelected = true;
    let questIndex = index;
    if (this._expandedIndex !== undefined) {
        const questCount = this._collapsedState.length;
        const collapsibleCount = this._items.length - questCount;
        const indexBeforeExpanded = index <= this._expandedIndex;
        questIndex = indexBeforeExpanded ? index : index - collapsibleCount;
        isQuestSelected = indexBeforeExpanded || (index > this._expandedIndex + collapsibleCount);
    }
    const selected = isQuestSelected
        ? this._quests[questIndex]
        : this._quests[this._expandedIndex]
            .steps[index - this._expandedIndex - 1];
    return { title: selected.title, paragraphs: selected.paragraphs };
};
// Selecting an item
Window_QuestList.prototype.select = function (index) {
    if (this._index !== index) {
        this._index = index;
        if (this._index >= 0) {
            this.callHandler("show_quest_details");
        }
        this._stayCount = 0;
        this.ensureCursorVisible();
        this.updateCursor();
    }
};
Window_QuestList.prototype.isOkEnabled = () => true;
// handling process OK
Window_QuestList.prototype.processOk = function () {
    this.playOkSound(); // TODO other sound ?
    this.updateInputData();
    this.expandSelectedQuest();
};
// #endregion =========================== Window_QuestList ============================== //
// ============================== //
// #region ============================== Window_TutorialCategoryList ============================== //
function Window_TutorialCategoryList() {
    this.initialize.apply(this, arguments);
}
Window_TutorialCategoryList.prototype = Object.create(Window_JournalPage.prototype);
Window_TutorialCategoryList.prototype.constructor = Window_TutorialCategoryList;
Window_TutorialCategoryList.prototype.initialize = function () {
    Window_JournalPage.prototype.initialize.call(this, true);
    this.refresh();
};
Window_TutorialCategoryList.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    this.drawText(TEW.DATABASE.TUTORIALS[index].category, 0, y, this._width, 'left');
};
// Selecting an item
Window_TutorialCategoryList.prototype.select = function (index) {
    if (this._index !== index) {
        this._index = index;
        if (this._index >= 0) {
            this.callHandler("show_category_tutorials");
        }
        this._stayCount = 0;
        this.ensureCursorVisible();
        this.updateCursor();
    }
};
Window_TutorialCategoryList.prototype.maxItems = () => TEW.DATABASE.TUTORIALS.length;
Window_TutorialCategoryList.prototype.isOkEnabled = () => true;
// handling process OK
Window_TutorialCategoryList.prototype.processOk = function () {
    this.playOkSound(); // TODO other sound ?
    this.updateInputData();
    this.callHandler("select_category");
};
// #endregion =========================== Window_TutorialCategoryList ============================== //
// ============================== //
// #region ============================== Window_TutorialEntry ============================== //
function Window_TutorialEntry() {
    this.initialize.apply(this, arguments);
}
;
Window_TutorialEntry.IMAGE_CACHE_RID = 'Window_TutorialEntry_RID';
Window_TutorialEntry.prototype = Object.create(Window_JournalPrettyEntry.prototype);
Window_TutorialEntry.prototype.constructor = Window_TutorialEntry;
Window_TutorialEntry.prototype.initialize = function () {
    Window_JournalPrettyEntry.prototype.initialize.call(this);
    this._cachedImages = {};
};
Window_TutorialEntry.prototype.reset = function (entry) {
    this._title = entry.title;
    this._paragraphs = entry.paragraphs;
    this._formattedContent = undefined;
};
Window_TutorialEntry.prototype.reserveImage = function (image) {
    return ImageManager.reserveImage('tutorials', image, Window_TutorialEntry.IMAGE_CACHE_RID);
};
Window_TutorialEntry.prototype.loadImage = function (image) {
    return ImageManager.reserveImage('tutorials', image);
};
Window_TutorialEntry.prototype.close = function () {
    ImageManager.releaseReservation(Window_TutorialEntry.IMAGE_CACHE_RID);
    Window_JournalPrettyEntry.prototype.close.call(this);
};
// #endregion =========================== Window_TutorialEntry ============================== //
// ============================== //
// #region ============================== Window_TutorialList ============================== //
function Window_TutorialList() {
    this.initialize.apply(this, arguments);
}
Window_TutorialList.prototype = Object.create(Window_JournalPage.prototype);
Window_TutorialList.prototype.constructor = Window_TutorialList;
Window_TutorialList.prototype.initialize = function () {
    Window_JournalPage.prototype.initialize.call(this, false);
    this._items = [];
    this.refresh();
};
Window_TutorialList.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    this.drawText(this._items[index].title, 0, y, this._width, 'left');
};
Window_TutorialList.prototype.selectedEntry = function () {
    return this._items[this.index()];
};
Window_TutorialList.prototype.isOkEnabled = () => true;
// handling process OK
Window_TutorialList.prototype.processOk = function () {
    this.playOkSound(); // TODO other sound ?
    this.updateInputData();
    this.callHandler("show_tutorial_entry");
};
// #endregion =========================== Window_TutorialList ============================== //
// ============================== //
// #region ============================== Window_JournalContentsTable ============================== //
function Window_JournalContentsTable() {
    this.initialize.apply(this, arguments);
}
Window_JournalContentsTable.prototype = Object.create(Window_Selectable.prototype);
Window_JournalContentsTable.prototype.constructor = Window_JournalContentsTable;
Window_JournalContentsTable.prototype.initialize = function (entries) {
    const dimensions = TEW.MENU.JOURNALS_CONTENT_AREA;
    this._entries = entries;
    Window_Selectable.prototype.initialize.call(this, dimensions.x, dimensions.y, dimensions.w, dimensions.h);
};
Window_JournalContentsTable.prototype.refresh = function () {
    this.contents.clear();
    if (this._entries && this._entries.length > 0) {
        this.drawAllItems();
    }
};
Window_JournalContentsTable.prototype.drawItem = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = normalizedIndex % 2 === 0 ? 0 : 620;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.LINE_HEIGHT;
    const entry = this._entries[index];
    this.drawText(entry.title, x, y, TEW.MENU.JOURNALS_PAGE_CONTENT_AREA.w, 'left');
};
Window_JournalContentsTable.prototype.maxCols = () => 2;
Window_JournalContentsTable.prototype.maxItems = function () {
    var _a;
    return ((_a = this._entries) === null || _a === void 0 ? void 0 : _a.length) || 0;
};
Window_JournalContentsTable.prototype.itemRect = function (index) {
    const normalizedIndex = index - this.topIndex();
    const x = normalizedIndex % 2 === 0 ? 0 : 620;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU.LINE_HEIGHT;
    return new Rectangle(x, y, 510, TEW.MENU.LINE_HEIGHT);
};
// #endregion =========================== Window_JournalContentsTable ============================== //
// ============================== //
// #region ============================== Window_Journals ============================== //
function Window_Journals() {
    this.initialize.apply(this, arguments);
}
Window_Journals.COMMAND_INDEX_OFFSET = 92;
Window_Journals.SELECTION_COLOR = "#fedc22ff";
Window_Journals.prototype = Object.create(Window_Selectable.prototype);
Window_Journals.prototype.constructor = Window_Journals;
// Initializing the command window
Window_Journals.prototype.initialize = function () {
    Window_Selectable.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);
    this._commandList = [
        "journal_quest_log",
        "journal_documents",
        "journal_characters",
        "journal_glossary",
        "journal_tutorials"
    ];
    this._drawParameters = [{
            x: 400,
            y: 70,
            rect: {
                x: 180,
                y: 70,
                w: 1012,
                h: 136
            },
            fontSize: 80,
            color: "#f0f0f0"
        }, {
            x: 678,
            y: 190,
            rect: {
                x: 200,
                y: 207,
                w: 924,
                h: 62
            },
            fontSize: 52,
            color: "#f0f0f0"
        }, {
            x: 570,
            y: 260,
            rect: {
                x: 276,
                y: 270,
                w: 820,
                h: 75
            },
            fontSize: 44,
            color: "#101010"
        }, {
            x: 455,
            y: 360,
            rect: {
                x: 110,
                y: 346,
                w: 1095,
                h: 163
            },
            fontSize: 92,
            color: "#f0f0f0"
        }, {
            x: 540,
            y: 525,
            rect: {
                x: 156,
                y: 510,
                w: 1073,
                h: 126
            },
            fontSize: 80,
            color: "#f0f0e1"
        }];
    this.refresh();
    this._maxItems = 5;
};
Window_Journals.prototype.drawAllItems = function () {
    this.drawItem(0);
    this.drawItem(1);
    this.drawItem(2);
    this.drawItem(3);
    this.drawItem(4);
};
Window_Journals.prototype.drawItem = function (index) {
    const params = this._drawParameters[index];
    this.changeTextColor(this.index() === index ? Window_Journals.SELECTION_COLOR : params.color);
    this.contents.fontSize = params.fontSize;
    this.drawText(TextManager.command(index + Window_Journals.COMMAND_INDEX_OFFSET), params.x, params.y, 500, 'left');
    this.contents.fontSize = this.standardFontSize();
    this.changeTextColor(this.normalColor());
};
Window_Journals.prototype.itemRect = function (index) {
    const r = this._drawParameters[index].rect;
    return new Rectangle(r.x, r.y, r.w, r.h);
};
Window_Journals.prototype.hitTest = function (x, y) {
    const params = this._drawParameters;
    for (let i = 0; i < 5; i++) {
        const rect = params[i].rect;
        const right = rect.x + rect.w;
        const bottom = rect.y + rect.h;
        if (x >= rect.x && y >= rect.y && x < right && y < bottom) {
            return i;
        }
    }
    return -1;
};
Window_Journals.prototype.itemRectForText = function (index) {
    return this.itemRect(index);
};
Window_Journals.prototype.items = function () {
    return this._commandList;
};
Window_Journals.prototype.item = function () {
    return this._commandList[this.index()];
};
Window_Journals.prototype.processOk = function () {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    }
    else {
        this.playBuzzerSound();
    }
};
Window_Journals.prototype.standardFontFace = function () {
    return 'handwritten';
};
Window_Journals.prototype.select = function (index) {
    const changed = index >= 0 && index !== this.index();
    Window_Selectable.prototype.select.call(this, index);
    if (changed) {
        this.refresh();
    }
};
Window_Journals.prototype.updateCursor = function () {
    this.setCursorRect(0, 0, 0, 0);
};
// TODO superclass without extra features
Window_Journals.prototype.maxItems = function () {
    return this._maxItems;
};
Window_Journals.prototype.cursorDown = function () {
    var index = this.index();
    index++;
    if (index > 4) {
        index = 0;
    }
    this.select(index);
};
Window_Journals.prototype.cursorUp = function () {
    var index = this.index();
    index--;
    if (index < 0) {
        index = 4;
    }
    this.select(index);
};
Window_Journals.prototype.cursorRight = () => { };
Window_Journals.prototype.cursorLeft = () => { };
Window_Journals.prototype.cursorPagedown = function () {
    this.select(4);
};
Window_Journals.prototype.cursorPageup = function () {
    this.select(0);
};
Window_Journals.prototype.scrollDown = () => { };
Window_Journals.prototype.scrollUp = () => { };
Window_Journals.prototype.isCursorVisible = () => true;
Window_Journals.prototype.ensureCursorVisible = () => { };
Window_Journals.prototype.topRow = () => 0;
Window_Journals.prototype.maxTopRow = () => 0;
Window_Journals.prototype.setTopRow = () => { };
Window_Journals.prototype.maxCols = () => 1;
Window_Journals.prototype.maxPageRows = () => 5;
Window_Journals.prototype.maxPageItems = () => 5;
Window_Journals.prototype.isHorizontal = () => false;
Window_Journals.prototype.bottomRow = () => 4;
Window_Journals.prototype.setBottomRow = () => { };
// #endregion =========================== Window_Journals ============================== //
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
    this.addCommand(TextManager.mainMenuJournals, 'menu_journals', true);
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
// #region ============================== Window_StatusCompetenceDetails ============================== //
function Window_StatusCompetenceDetails() {
    this.initialize.apply(this, arguments);
}
;
Window_StatusCompetenceDetails.prototype = Object.create(HalfWindow_Details.prototype);
Window_StatusCompetenceDetails.prototype.constructor = Window_StatusCompetenceDetails;
Window_StatusCompetenceDetails.prototype.initialize = function () {
    HalfWindow_Details.prototype.initialize.call(this);
    this._comp = undefined;
    this.refresh();
};
Window_StatusCompetenceDetails.prototype.setCompetence = function (comp) {
    if (this._comp !== comp) {
        this._comp = comp;
        this.refresh();
    }
};
Window_StatusCompetenceDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._comp) {
        this.drawDetails(this._comp);
    }
};
Window_StatusCompetenceDetails.prototype.empty = function () {
    this._comp = undefined;
};
// Drawing item details
Window_StatusCompetenceDetails.prototype.drawDetails = function (comp) {
    // Name
    this.drawUnderlinedText(comp.name, 0, 0, this.contentsWidth(), "center");
    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 4, [
        ["Type :", comp.isBase ? "Base" : "Advanced"],
        ["Characteristic :", comp.stat],
        ["Level :", comp.level],
        ["Value :", comp.value]
    ]);
};
// #endregion =========================== Window_StatusCompetenceDetails ============================== //
// ============================== //
// #region ============================== Window_StatusCompetences ============================== //
// ----------------------
function Window_StatusCompetences() {
    this.initialize.apply(this, arguments);
}
;
Window_StatusCompetences.NAME_COLUMN_WIDTH = 500;
Window_StatusCompetences.LEVEL_COLUMN_WIDTH = 80;
Window_StatusCompetences.prototype = Object.create(HalfWindow_List.prototype);
Window_StatusCompetences.prototype.constructor = Window_StatusCompetences;
/**
 * Constructor for the Window_StatusCompetences class.
 */
Window_StatusCompetences.prototype.initialize = function () {
    this._levelling = null;
    this._levellingMode = false;
    this._compsList = [];
    HalfWindow_List.prototype.initialize.call(this);
    this._actor = null;
    this._maxItems = 0;
    this.refresh();
};
/**
 * Sets the actor for the window.
 */
Window_StatusCompetences.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.makeCompsList();
        this.refresh();
    }
};
/**
 * Building the displayed list. Outside of levelling mode it holds every base competence
 * followed by the advanced ones the actor has learnt.
 * In levelling mode, the competences the career allows to improve are moved to the top in
 * alphabetical order, unlearnt ones included, and the rest keeps its usual order.
 */
Window_StatusCompetences.prototype.makeCompsList = function () {
    if (!this._actor) {
        this._compsList = [];
        this._maxItems = 0;
        return;
    }
    const knownComps = TEW.DATABASE.COMPS.BASE_ARRAY.concat(TEW.DATABASE.COMPS.ADVANCED_ARRAY.filter(comp => this._actor.hasComp(comp[0])));
    if (!this.isLevellingMode()) {
        this._compsList = knownComps;
    }
    else {
        const improvableIds = this._actor.improvableComps();
        const improvableComps = improvableIds
            .map(compId => [compId, TEW.DATABASE.COMPS.SET[compId]])
            .sort((a, b) => this._actor.compName(a[0]).localeCompare(this._actor.compName(b[0])));
        this._compsList = improvableComps.concat(knownComps.filter(comp => improvableIds.indexOf(comp[0]) < 0));
    }
    this._maxItems = this._compsList.length;
};
/**
 * Returns the maximum number of columns in the window.
 */
Window_StatusCompetences.prototype.maxCols = () => 1;
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
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const comp = this.competenceFromIndex(index);
    // Comp name
    this.changeTextColor(this.systemColor());
    this.drawText(comp[1].name, 0, y, Window_StatusCompetences.NAME_COLUMN_WIDTH, 'left');
    this.resetTextColor();
    // Comp bonus, including the advances about to be bought in levelling mode
    const compLevel = comp[1].level;
    const compLevelText = compLevel > 0
        ? `${compLevel}`
        : this._actor.hasComp(comp[0]) ? TextManager.statusCompBase : TextManager.statusCompUnlearned;
    this.changeTextColor(this.competenceLevelColor(comp[0]));
    this.drawText(compLevelText, Window_StatusCompetences.NAME_COLUMN_WIDTH, y, Window_StatusCompetences.LEVEL_COLUMN_WIDTH, 'left');
    this.resetTextColor();
    // Stats which the comp depends on
    // const statName = comp ? comp[1].stat : null;
    // const statNumber = this._actor.comp(comp[0]);
    // const statText = `${statName} (${statNumber})`;
    // this.drawText(
    //     statText,
    //     x + this._compColumnWidth + this._levelColumnWidth,
    //     y,
    //     this._statColumnWidth,
    //     'left'
    // )
};
/**
 * Returns the competence from the given index.
 */
Window_StatusCompetences.prototype.competenceFromIndex = function (index) {
    const comp = this._compsList[index]; // [<internal name>, {<competence data>}]
    const level = this.isLevellingMode()
        ? this._levelling.compValue(comp[0])
        : this._actor.compPlus(comp[0]);
    return [comp[0], Object.assign(Object.assign({}, comp[1]), { 
            // Channelling is named after the actor's wind, thus depends on the actor
            name: this._actor.compName(comp[0]), level, value: level + this._actor.paramByName(comp[1].stat) })];
};
Window_StatusCompetences.prototype.competence = function () {
    return this.competenceFromIndex(this.index());
};
/**
 * Called when the process successfully completes.
 */
Window_StatusCompetences.prototype.select = function (index) {
    const changed = this.index() !== index;
    HalfWindow_List.prototype.select.call(this, index);
    if (changed && this.index() >= 0) {
        this.callHandler("show_details");
    }
};
/**
 * Returns the maximum number of items in the window.
 */
Window_StatusCompetences.prototype.maxItems = function () {
    return this._maxItems;
};
// #region ====== Levelling mode === //
/**
 * Links the window to the levelling session holding the pending advances.
 */
Window_StatusCompetences.prototype.setLevelling = function (levelling) {
    this._levelling = levelling;
    this.refresh();
};
/**
 * Enters or leaves levelling mode. The list is reordered, so the selected competence is
 * followed to its new index rather than left behind.
 */
Window_StatusCompetences.prototype.setLevellingMode = function (active) {
    if (this._levellingMode === active) {
        return;
    }
    const selectedCompId = this.index() >= 0 && this._compsList[this.index()]
        ? this._compsList[this.index()][0]
        : null;
    this._levellingMode = active;
    this.makeCompsList();
    if (selectedCompId) {
        const newIndex = this._compsList.map(comp => comp[0]).indexOf(selectedCompId);
        this.select(newIndex >= 0 ? newIndex : 0);
    }
    this.refresh();
};
Window_StatusCompetences.prototype.isLevellingMode = function () {
    return !!this._levellingMode && !!this._levelling && !!this._actor;
};
/**
 * Green when advances are about to be bought, blue when the career allows them, plain otherwise.
 * Running out of experience does not change the colour, only what the arrows are able to do.
 */
Window_StatusCompetences.prototype.competenceLevelColor = function (compId) {
    if (!this.isLevellingMode()) {
        return this.normalColor();
    }
    if (this._levelling.compAdvances(compId) > 0) {
        return this.powerUpColor();
    }
    if (this._levelling.canImproveComp(compId)) {
        return this.levellingColor();
    }
    return this.normalColor();
};
/**
 * In levelling mode, the horizontal arrows buy and refund advances instead of changing column.
 */
Window_StatusCompetences.prototype.cursorRight = function (wrap) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeCompetence(true);
    }
    else {
        HalfWindow_List.prototype.cursorRight.call(this, wrap);
    }
};
Window_StatusCompetences.prototype.cursorLeft = function (wrap) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeCompetence(false);
    }
    else {
        HalfWindow_List.prototype.cursorLeft.call(this, wrap);
    }
};
/**
 * Buys or refunds one advance on the selected competence.
 */
Window_StatusCompetences.prototype.changeCompetence = function (increase) {
    const compId = this.competenceFromIndex(this.index())[0];
    const changed = increase
        ? this._levelling.increaseComp(compId)
        : this._levelling.decreaseComp(compId);
    if (changed) {
        SoundManager.playCursor();
        this.refresh();
        this.callHandler('levelling_change');
    }
};
// #endregion === Levelling mode === //
// #endregion =========================== Window_StatusCompetences ============================== //
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
    // Levelling session, shared by every window able to buy advances
    this.createLevelling();
    // Command window
    this.createCommandWindow();
    // Info window
    this.createStatsWindow();
    // Competences window
    this.createCompsWindow();
    this.createCompDetailsWindow();
    // Talents windows
    this.createTalentsWindow();
    this.createTalentDetailsWindow();
    // Spells windows
    this.createSpellsWindow();
    this.createSpellCommandWindow();
    this.createSpellDetailsWindow();
    // Levelling confirmation, created last so it is drawn above every other window
    this.createLevellingWindows();
    this._commandWindow.activate();
    this.refreshActor();
};
// Watching the levelling mode input key
Scene_Status.prototype.update = function () {
    Scene_MenuBase.prototype.update.call(this);
    this.updateLevellingToggle();
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
    this._competenceDetailsWindow.hide();
    this._competenceDetailsWindow.deactivate();
    this._talentsWindow.hide();
    this._talentsWindow.deactivate();
    this._talentDetailsWindow.hide();
    this._talentDetailsWindow.deactivate();
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
        this._competenceDetailsWindow.show();
        this._competenceDetailsWindow.refresh();
    }
    else if (this._commandWindow.index() === this.TALENTS_WINDOW_INDEX) {
        this._talentsWindow.show();
        this._talentsWindow.refresh();
        this._talentDetailsWindow.show();
        this._talentDetailsWindow.refresh();
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
    this._levelling.setActor(actor);
    this._statsWindow.setActor(actor);
    this._competencesWindow.setActor(actor);
    this._talentsWindow.setActor(actor);
    this._spellsWindow.setActor(actor);
};
// Switching actor from the topbar
Scene_Status.prototype.onActorChange = function () {
    this.refreshActor();
    this._commandWindow.refresh();
    this._commandWindow.activate();
};
// Actors cannot be switched while advances are being bought, to avoid losing them silently
Scene_Status.prototype.onNextActor = function () {
    if (this.isLevellingMode()) {
        this._commandWindow.activate();
    }
    else {
        this.nextActor();
    }
};
Scene_Status.prototype.onPreviousActor = function () {
    if (this.isLevellingMode()) {
        this._commandWindow.activate();
    }
    else {
        this.previousActor();
    }
};
// Leaving the menu is treated as leaving levelling mode
Scene_Status.prototype.onStatusCancel = function () {
    if (this.isLevellingMode()) {
        this.requestLevellingExit();
    }
    else {
        this.popScene();
    }
};
// Creating the commands for this scene
Scene_Status.prototype.createCommandWindow = function () {
    this._commandWindow = new Window_StatusCommand(0, 0);
    this._commandWindow.setLevelling(this._levelling);
    this._commandWindow.setHandler('cancel', this.onStatusCancel.bind(this));
    this._commandWindow.setHandler('pagedown', this.onNextActor.bind(this));
    this._commandWindow.setHandler('pageup', this.onPreviousActor.bind(this));
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
    this._statsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._statsWindow.deselect();
    });
    this._statsWindow.setHandler('levelling_change', () => {
        this._commandWindow.refresh();
    });
    this._statsWindow.setLevelling(this._levelling);
    this.addWindow(this._statsWindow);
};
// Activating the stats window
Scene_Status.prototype.activateStatusStats = function (index = 0) {
    this.hideAllWindows();
    this._statsWindow.show();
    this._commandWindow.deactivate();
    this._statsWindow.activate();
    this._statsWindow.select(index);
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
    this._competencesWindow.setHandler('show_details', () => {
        this.showCompetenceDetails();
    });
    this._competencesWindow.setHandler('levelling_change', () => {
        this._commandWindow.refresh();
        this.showCompetenceDetails();
    });
    this._competencesWindow.setLevelling(this._levelling);
    this._competencesWindow.hide();
    this.addWindow(this._competencesWindow);
};
Scene_Status.prototype.createCompDetailsWindow = function () {
    this._competenceDetailsWindow = new Window_StatusCompetenceDetails();
    this._competenceDetailsWindow.hide();
    this.addWindow(this._competenceDetailsWindow);
};
// Showing the details of the selected competence
Scene_Status.prototype.showCompetenceDetails = function () {
    const selectedComp = this._competencesWindow.competence();
    if (selectedComp) {
        this._competenceDetailsWindow.setCompetence(selectedComp[1]);
    }
};
// Activating the competences window
Scene_Status.prototype.activateStatusComps = function (index = 0) {
    this.hideAllWindows();
    this._competencesWindow.show();
    this._commandWindow.deactivate();
    this._competencesWindow.activate();
    this._competencesWindow.select(index);
    this._competencesWindow.refresh();
    this._competenceDetailsWindow.show();
    this._competenceDetailsWindow.refresh();
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
    this._talentsWindow.setHandler('levelling_change', () => {
        this._commandWindow.refresh();
    });
    this._talentsWindow.setLevelling(this._levelling);
    this._talentsWindow.hide();
    this.addWindow(this._talentsWindow);
};
// Creating the items details Window for the scene
Scene_Status.prototype.createTalentDetailsWindow = function () {
    this._talentDetailsWindow = new Window_StatusTalentDetails();
    this._talentsWindow.setHandler('show_talent_description', () => {
        // this._talentsWindow.deactivate();
        // this._talentDetailWindow.activate();
        this.showTalentDetails();
    });
    this._talentDetailsWindow.hide();
    this.addWindow(this._talentDetailsWindow);
};
// Activating the talents window
Scene_Status.prototype.activateStatusTalents = function (index = 0) {
    const nbTalents = this._talentsWindow._talents.length;
    this.hideAllWindows();
    this._talentsWindow.show();
    this._talentDetailsWindow.show();
    if (nbTalents > 0) {
        this._commandWindow.deactivate();
        this._talentsWindow.activate();
        this._talentsWindow.select(index);
    }
    else {
        this._commandWindow.activate();
        this._talentsWindow.deselect();
        this._talentDetailsWindow.empty();
        this._talentDetailsWindow.clear();
    }
    this._talentsWindow.refresh();
};
// Showing the talent description
Scene_Status.prototype.showTalentDetails = function () {
    const talent = this._talentsWindow.talentFromIndex(this._talentsWindow.index());
    this._talentDetailsWindow._talent = talent;
    this._talentDetailsWindow.refresh();
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
    this._spellsWindow.setHandler('levelling_change', () => {
        this._commandWindow.refresh();
        this._spellsWindow.refresh();
    });
    this._spellsWindow.setLevelling(this._levelling);
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
    this._spellsDetailsWindow = new Window_StatusSpellDetails();
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
// === //
// #region ====== Levelling mode === //
// Creating the session holding every advance until it is confirmed
Scene_Status.prototype.createLevelling = function () {
    this._levelling = new Game_Levelling();
    this._levellingMode = false;
    this._levellingReturnWindow = null;
};
// Creating the confirmation prompt, hidden until levelling mode is left with pending advances
Scene_Status.prototype.createLevellingWindows = function () {
    this._levellingSummaryWindow = new Window_StatusLevellingSummary();
    this._levellingSummaryWindow.setLevelling(this._levelling);
    this._levellingSummaryWindow.setHandler('levelling_confirm', this.onLevellingConfirm.bind(this));
    this._levellingSummaryWindow.setHandler('levelling_discard', this.onLevellingDiscard.bind(this));
    this._levellingSummaryWindow.setHandler('levelling_back', this.onLevellingBack.bind(this));
    this._levellingSummaryWindow.setHandler('cancel', this.onLevellingBack.bind(this));
    this._levellingSummaryWindow.deactivate();
    this._levellingSummaryWindow.hide();
    this.addWindow(this._levellingSummaryWindow);
};
Scene_Status.prototype.isLevellingMode = function () {
    return this._levellingMode;
};
// Whether the confirmation prompt is currently displayed
Scene_Status.prototype.isLevellingPrompt = function () {
    return this._levellingSummaryWindow && this._levellingSummaryWindow.visible;
};
// Toggling levelling mode with the dedicated input key
Scene_Status.prototype.updateLevellingToggle = function () {
    if (this.isLevellingPrompt()) {
        return;
    }
    if (Input.isTriggered(TEW.MENU.LEVEL_UP_KEY)) {
        if (this.isLevellingMode()) {
            this.requestLevellingExit();
        }
        else {
            this.enterLevellingMode();
        }
    }
};
Scene_Status.prototype.enterLevellingMode = function () {
    this._levellingMode = true;
    this._levelling.clear();
    this.refreshLevellingWindows();
};
Scene_Status.prototype.exitLevellingMode = function () {
    this._levellingMode = false;
    this._levelling.clear();
    this.refreshLevellingWindows();
};
// Propagating the mode and the experience counters to every window displaying them
Scene_Status.prototype.refreshLevellingWindows = function () {
    this._commandWindow.setLevellingMode(this._levellingMode);
    this._commandWindow.refresh();
    this._competencesWindow.setLevellingMode(this._levellingMode);
    this._competencesWindow.refresh();
    this._statsWindow.setLevellingMode(this._levellingMode);
    this._statsWindow.refresh();
    this._talentsWindow.setLevellingMode(this._levellingMode);
    this._talentsWindow.refresh();
    this._spellsWindow.setLevellingMode(this._levellingMode);
    this._spellsWindow.refresh();
};
/**
 * Leaving levelling mode. Exit is instantaneous with nothing spent, and prompts otherwise.
 * @param popOnResolve whether the whole menu should be left once the prompt is resolved
 */
Scene_Status.prototype.requestLevellingExit = function () {
    if (!this._levelling.hasAdvances()) {
        this.exitLevellingMode();
        return;
    }
    this.openLevellingPrompt();
};
// Finding the window currently reading inputs, to give it back the focus later on
Scene_Status.prototype.activeStatusWindow = function () {
    const windows = [
        this._commandWindow,
        this._statsWindow,
        this._competencesWindow,
        this._talentsWindow,
        this._spellsWindow,
        this._spellsCommandWindow
    ];
    return windows.filter(window => window.active)[0] || null;
};
Scene_Status.prototype.openLevellingPrompt = function () {
    this._levellingReturnWindow = this.activeStatusWindow();
    if (this._levellingReturnWindow) {
        this._levellingReturnWindow.deactivate();
    }
    this._levellingSummaryWindow.refreshAdvances();
    this._levellingSummaryWindow.show();
    this._levellingSummaryWindow.selectSymbol('levelling_back'); // defaulting to Back avoids misclicks confirming/discarding
    this._levellingSummaryWindow.activate();
};
Scene_Status.prototype.closeLevellingPrompt = function () {
    this._levellingSummaryWindow.deactivate();
    this._levellingSummaryWindow.hide();
};
// Giving the focus back to whichever window was reading inputs before the prompt
Scene_Status.prototype.restoreLevellingFocus = function () {
    const window = this._levellingReturnWindow || this._commandWindow;
    this._levellingReturnWindow = null;
    window.activate();
};
// Leaving levelling mode once the prompt is resolved, and the menu if it was being left
Scene_Status.prototype.finishLevellingExit = function () {
    this.exitLevellingMode();
    this.restoreLevellingFocus();
};
Scene_Status.prototype.onLevellingConfirm = function () {
    this._levelling.apply();
    this.closeLevellingPrompt();
    this.finishLevellingExit();
};
Scene_Status.prototype.onLevellingDiscard = function () {
    this.closeLevellingPrompt();
    this.finishLevellingExit();
};
// Going back to levelling mode, keeping every pending advance
Scene_Status.prototype.onLevellingBack = function () {
    this.closeLevellingPrompt();
    this.restoreLevellingFocus();
};
// #endregion === Levelling mode === //
// #endregion =========================== Scene_Status ============================== //
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
    HalfWindow_DetailsCommand.prototype.initialize.call(this, 5);
};
// Making the 3 lines
Window_StatusSpellCommand.prototype.makeCommandList = function () {
    this.addCommand(TextManager.statusCastSpell, 'status_cast_spell');
    this.addCommand('test1', 'a', false);
    this.addCommand('test2', 'b', false);
    this.addCommand('test3', 'c', false);
    this.addCommand('test4', 'c', false);
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
    this.drawWrappedTextManually(spell[1].desc, 0, 280, 100 // 440 (Height) - 60 (2 * Padding) - 280 (Starting Y)
    );
};
// #endregion =========================== Window_StatusSpellDetails ============================== //
// ============================== //
// #region ============================== Window_StatusSpells ============================== //
// ----------------------
function Window_StatusSpells() {
    this.initialize.apply(this, arguments);
}
Window_StatusSpells.LEFT_PADDING = 48;
Window_StatusSpells.NAME_COLUMN_WIDTH = 400;
Window_StatusSpells.COST_COLUMN_WIDTH = 120;
Window_StatusSpells.prototype = Object.create(HalfWindow_List.prototype);
Window_StatusSpells.prototype.constructor = Window_StatusSpells;
Window_StatusSpells.prototype.initialize = function () {
    this._levelling = null;
    this._levellingMode = false;
    this._spells = [];
    HalfWindow_List.prototype.initialize.call(this);
};
Window_StatusSpells.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.makeSpellsList();
        this.refresh();
    }
};
/**
 * Building the displayed list. Outside of levelling mode it only holds the memorised spells.
 * In levelling mode, the spells the actor's magical talents open and which are not memorised
 * yet are added at the top in alphabetical order, so that they may be bought.
 */
Window_StatusSpells.prototype.makeSpellsList = function () {
    if (!this._actor) {
        this._spells = [];
        this._maxItems = 0;
        return;
    }
    // [<internal name>, {<spell data>}]
    const knownSpells = TEW.DATABASE.SPELLS.ARRAY.filter(spell => this._actor.hasSpell(spell[0]));
    if (!this.isLevellingMode()) {
        this._spells = knownSpells;
    }
    else {
        const buyableSpells = this._levelling.buyableSpells()
            .map((spellId) => [spellId, TEW.DATABASE.SPELLS.SET[spellId]])
            .sort((a, b) => a[1].name.localeCompare(b[1].name));
        this._spells = buyableSpells.concat(knownSpells);
    }
    this._maxItems = this._spells.length;
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
    const x = Window_StatusSpells.LEFT_PADDING;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const spell = this.spellFromIndex(index);
    // Spell name
    this.changeTextColor(this.spellColor(spell[0]));
    this.drawText(spell[1].name, x, y, Window_StatusSpells.NAME_COLUMN_WIDTH);
    this.resetTextColor();
    // Price of a spell which is not memorised yet, nothing for the ones already known
    const costText = this.spellCostText(spell[0]);
    if (costText) {
        this.changeTextColor(this.spellColor(spell[0]));
        this.drawText(costText, x + Window_StatusSpells.NAME_COLUMN_WIDTH, y, Window_StatusSpells.COST_COLUMN_WIDTH, 'right');
        this.resetTextColor();
    }
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
// #region ====== Levelling mode === //
/**
 * Links the window to the levelling session holding the pending purchases.
 */
Window_StatusSpells.prototype.setLevelling = function (levelling) {
    this._levelling = levelling;
    this.refresh();
};
/**
 * Enters or leaves levelling mode. The buyable spells appear and disappear with it, so the
 * selected spell is followed to its new index rather than left behind.
 */
Window_StatusSpells.prototype.setLevellingMode = function (active) {
    if (this._levellingMode === active) {
        return;
    }
    const selectedSpellId = this.index() >= 0 && this._spells[this.index()]
        ? this._spells[this.index()][0]
        : null;
    this._levellingMode = active;
    this.makeSpellsList();
    if (selectedSpellId) {
        const newIndex = this._spells.map(spell => spell[0]).indexOf(selectedSpellId);
        this.select(Math.min(Math.max(newIndex, 0), this.maxItems() - 1));
    }
    this.refresh();
};
Window_StatusSpells.prototype.isLevellingMode = function () {
    return !!this._levellingMode && !!this._levelling && !!this._actor;
};
/**
 * Price of a spell which is not memorised yet, and nothing for the ones already known.
 * The spells manifested by the Petty Magic talent cost no experience at all.
 */
Window_StatusSpells.prototype.spellCostText = function (spellId) {
    if (!this.isLevellingMode() || this._actor.hasSpell(spellId)) {
        return '';
    }
    const cost = this._levelling.nextSpellCost(spellId);
    return cost > 0 ? `${cost} ${TextManager.expA}` : TextManager.statusSpellFree;
};
/**
 * Green when the spell is about to be memorised, blue when it may be bought, and the usual
 * colour for the ones already known. Running out of experience does not change the colour.
 */
Window_StatusSpells.prototype.spellColor = function (spellId) {
    if (!this.isLevellingMode() || this._actor.hasSpell(spellId)) {
        return this.systemColor();
    }
    if (this._levelling.isSpellBought(spellId)) {
        return this.powerUpColor();
    }
    return this.levellingColor();
};
/**
 * Buys or refunds the selected spell. Spells have no level, so unlike every other levelling
 * window this one is driven by the confirmation key rather than by the horizontal arrows.
 */
Window_StatusSpells.prototype.changeSpell = function () {
    const spellId = this.spellFromIndex(this.index())[0];
    if (this._actor.hasSpell(spellId)) {
        this.playBuzzerSound();
        return;
    }
    const changed = this._levelling.isSpellBought(spellId)
        ? this._levelling.refundSpell(spellId)
        : this._levelling.buySpell(spellId);
    if (changed) {
        this.playOkSound();
        this.refresh();
        this.callHandler('levelling_change');
    }
    else {
        this.playBuzzerSound();
    }
};
// #endregion === Levelling mode === //
/**
 * Called when the process successfully completes.
 * In levelling mode the confirmation key buys and refunds spells instead of opening the
 * command window, which has nothing to offer on a spell that is not memorised yet.
 */
Window_StatusSpells.prototype.processOk = function () {
    if (!this.isCurrentItemEnabled()) {
        this.playBuzzerSound();
        return;
    }
    if (this.isLevellingMode() && this.index() >= 0) {
        this.updateInputData();
        this.changeSpell();
        return;
    }
    this.playOkSound();
    this.updateInputData();
    this.callOkHandler();
};
// #endregion =========================== Window_StatusSpells ============================== //
// ============================== //
// #region ============================== Window_StatusStats ============================== //
// ----------------------
// -----------------------------------------------------------------------------
// Window_StatusStats
//
// Character stats window
function Window_StatusStats() {
    this.initialize.apply(this, arguments);
}
// Max wounds are derived from other characteristics, so the list starts at the second param
Window_StatusStats.FIRST_PARAM_ID = 1;
Window_StatusStats.STATS_PER_COLUMN = 5;
Window_StatusStats.COLUMN_COUNT = 2;
Window_StatusStats.COLUMNS_X = [48, 432];
Window_StatusStats.NAME_COLUMN_WIDTH = 160;
Window_StatusStats.VALUE_COLUMN_WIDTH = 60;
// Line, in TEW.MENU.LINE_HEIGHT units, on which the first characteristic of each column is drawn
Window_StatusStats.STATS_FIRST_LINE = 8;
Window_StatusStats.SEPARATOR_LINE = 7;
// Horizontal room left around a characteristic for the selection cursor
Window_StatusStats.CURSOR_PADDING = 8;
Window_StatusStats.BASIC_INFO_WIDTH = 186;
Window_StatusStats.prototype = Object.create(Window_Status.prototype);
Window_StatusStats.prototype.constructor = Window_StatusStats;
Window_StatusStats.prototype.initialize = function () {
    this._levelling = null;
    this._levellingMode = false;
    Window_Status.prototype.initialize.call(this);
};
Window_StatusStats.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._bgSprite = new Sprite(ImageManager.loadSystem("bg_menuStats_" + actor.name()));
        this._bgSprite = new Sprite(ImageManager.loadSystem("bg_menuStats"));
        this.addChildAt(this._bgSprite, 0);
        this.refresh();
    }
};
// #region ====== Layout === //
/**
 * Characteristics are navigated column by column, so that the horizontal arrows stay free
 * for levelling mode.
 */
Window_StatusStats.prototype.maxCols = () => 1;
Window_StatusStats.prototype.maxItems = function () {
    return Window_StatusStats.STATS_PER_COLUMN * Window_StatusStats.COLUMN_COUNT;
};
/**
 * Param number of the characteristic displayed at the given index.
 */
Window_StatusStats.prototype.paramFromIndex = function (index) {
    return index + Window_StatusStats.FIRST_PARAM_ID;
};
Window_StatusStats.prototype.statX = function (index) {
    return Window_StatusStats.COLUMNS_X[Math.floor(index / Window_StatusStats.STATS_PER_COLUMN)];
};
Window_StatusStats.prototype.statY = function (index) {
    const line = Window_StatusStats.STATS_FIRST_LINE + index % Window_StatusStats.STATS_PER_COLUMN;
    return TEW.MENU.LINE_HEIGHT * line;
};
/**
 * The two columns are hardcoded, so the selection cursor is placed on them rather than on the
 * rows a single-column list would compute.
 */
Window_StatusStats.prototype.itemRect = function (index) {
    return new Rectangle(this.statX(index) - Window_StatusStats.CURSOR_PADDING, this.statY(index), Window_StatusStats.NAME_COLUMN_WIDTH
        + Window_StatusStats.VALUE_COLUMN_WIDTH
        + Window_StatusStats.CURSOR_PADDING * 2, this.lineHeight());
};
// #endregion === Layout === //
// === //
// #region ====== Drawing === //
Window_StatusStats.prototype.drawAllItems = function () {
    this.drawCharacterInfo(1);
    this.drawHorzLine(TEW.MENU.LINE_HEIGHT * Window_StatusStats.SEPARATOR_LINE);
    this.drawStats();
};
Window_StatusStats.prototype.drawCharacterInfo = function (y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorCareer(this._actor, 192, y);
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
    const width = Window_StatusStats.BASIC_INFO_WIDTH;
    const color1 = this.hpGaugeColor1();
    const color2 = this.normalColor();
    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    this.drawCurrentOverMax(actor.hp, actor.mhp, x, y, width, color1, color2, TextManager.hpA);
};
Window_StatusStats.prototype.drawActorExp = function (actor, x, y) {
    const width = Window_StatusStats.BASIC_INFO_WIDTH;
    // While levelling, pending advances are already deducted, as in the topbar indicator
    const exp = this.isLevellingMode() ? this._levelling.remainingExp() : actor.availableExp();
    const valueWidth = this.textWidth(exp);
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.expA, x, y, 48);
    this.resetTextColor();
    this.drawText(exp, x + width - valueWidth, y, valueWidth, 'right');
};
Window_StatusStats.prototype.drawActorFate = function (actor, x, y) {
    const width = Window_StatusStats.BASIC_INFO_WIDTH;
    this.drawCurrentOverMax(actor._fortune, actor._fate, x, y, width, this.normalColor(), this.normalColor(), 'FATE'); // TODO
};
Window_StatusStats.prototype.drawActorResilience = function (actor, x, y) {
    const width = Window_StatusStats.BASIC_INFO_WIDTH;
    this.drawCurrentOverMax(actor._resolve, actor._resilience, x, y, width, this.normalColor(), this.normalColor(), 'RESIL'); // TODO
};
Window_StatusStats.prototype.drawStats = function () {
    for (let index = 0; index < this.maxItems(); index++) {
        this.drawItem(index);
    }
};
/**
 * Draws one characteristic, including the advances about to be bought in levelling mode.
 */
Window_StatusStats.prototype.drawItem = function (index) {
    const paramId = this.paramFromIndex(index);
    const x = this.statX(index);
    const y = this.statY(index);
    // Characteristic name
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.param(paramId), x, y, Window_StatusStats.NAME_COLUMN_WIDTH);
    // Characteristic value
    this.changeTextColor(this.statValueColor(paramId));
    this.drawText(this.statValue(paramId), x + Window_StatusStats.NAME_COLUMN_WIDTH, y, Window_StatusStats.VALUE_COLUMN_WIDTH, 'right');
    this.resetTextColor();
};
// #endregion === Drawing === //
// === //
// #region ====== Levelling mode === //
/**
 * Links the window to the levelling session holding the pending advances.
 */
Window_StatusStats.prototype.setLevelling = function (levelling) {
    this._levelling = levelling;
    this.refresh();
};
/**
 * Enters or leaves levelling mode.
 */
Window_StatusStats.prototype.setLevellingMode = function (active) {
    if (this._levellingMode !== active) {
        this._levellingMode = active;
        this.refresh();
    }
};
Window_StatusStats.prototype.isLevellingMode = function () {
    return !!this._levellingMode && !!this._levelling && !!this._actor;
};
/**
 * Displayed value of a characteristic, including the advances about to be bought.
 */
Window_StatusStats.prototype.statValue = function (paramId) {
    return this.isLevellingMode()
        ? this._levelling.statValue(paramId)
        : this._actor.param(paramId);
};
/**
 * Green when advances are about to be bought, blue when the career allows them, plain otherwise.
 * Running out of experience does not change the colour, only what the arrows are able to do.
 */
Window_StatusStats.prototype.statValueColor = function (paramId) {
    if (!this.isLevellingMode()) {
        return this.normalColor();
    }
    if (this._levelling.statAdvances(paramId) > 0) {
        return this.powerUpColor();
    }
    if (this._levelling.canImproveStat(paramId)) {
        return this.levellingColor();
    }
    return this.normalColor();
};
/**
 * In levelling mode, the horizontal arrows buy and refund advances. Columns are navigated with
 * the vertical arrows, so nothing becomes unreachable.
 */
Window_StatusStats.prototype.cursorRight = function (wrap) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeStat(true);
    }
    else {
        Window_Status.prototype.cursorRight.call(this, wrap);
    }
};
Window_StatusStats.prototype.cursorLeft = function (wrap) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeStat(false);
    }
    else {
        Window_Status.prototype.cursorLeft.call(this, wrap);
    }
};
/**
 * Buys or refunds one advance on the selected characteristic.
 */
Window_StatusStats.prototype.changeStat = function (increase) {
    const paramId = this.paramFromIndex(this.index());
    const changed = increase
        ? this._levelling.increaseStat(paramId)
        : this._levelling.decreaseStat(paramId);
    if (changed) {
        SoundManager.playCursor();
        this.refresh();
        this.callHandler('levelling_change');
    }
};
// #endregion === Levelling mode === //
// #endregion =========================== Window_StatusStats ============================== //
// ============================== //
// #region ============================== Window_StatusTalentDetails ============================== //
// ----------------------
function Window_StatusTalentDetails() {
    this.initialize.apply(this, arguments);
}
Window_StatusTalentDetails.prototype = Object.create(HalfWindow_DetailsScrollable.prototype);
Window_StatusTalentDetails.prototype.constructor = Window_StatusTalentDetails;
/**
 * Constructor for the Window_StatusTalentDetails class.
 */
Window_StatusTalentDetails.prototype.initialize = function () {
    HalfWindow_DetailsScrollable.prototype.initialize.call(this, true);
    this._talent = undefined;
};
/**
 * Refreshes the content of the window.
 */
Window_StatusTalentDetails.prototype.refresh = function () {
    this.contents.clear();
    if (this._talent) {
        this.drawDetails(this._talent);
    }
};
/** Clear all contents */
Window_StatusTalentDetails.prototype.empty = function () {
    this._talent = null;
};
/**
 * Draws the description of the selected talent.
 */
Window_StatusTalentDetails.prototype.drawDetails = function (talent) {
    this.setText(talent[1].description);
    this.drawAllItems();
    // this.drawWrappedTextManually(
    //     talent[1].description,
    //     10,
    //     0,
    //     588 // 720 (Height) - 60 (2 * Padding) - 0 (Starting Y) - 68 (Top Bar Height)
    // );
};
// #endregion =========================== Window_StatusTalentDetails ============================== //
// ============================== //
// #region ============================== Window_StatusTalents ============================== //
// ----------------------
function Window_StatusTalents() {
    this.initialize.apply(this, arguments);
}
Window_StatusTalents.LEFT_PADDING = 48;
Window_StatusTalents.NAME_COLUMN_WIDTH = 400;
Window_StatusTalents.LEVEL_COLUMN_WIDTH = 120;
Window_StatusTalents.prototype = Object.create(HalfWindow_List.prototype);
Window_StatusTalents.prototype.constructor = Window_StatusTalents;
/**
 * Constructor for the Window_StatusTalents class.
 */
Window_StatusTalents.prototype.initialize = function () {
    this._levelling = null;
    this._levellingMode = false;
    this._talents = [];
    HalfWindow_List.prototype.initialize.call(this);
};
/**
 * Sets the actor for the window.
 */
Window_StatusTalents.prototype.setActor = function (actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.makeTalentsList();
        this.refresh();
    }
};
/**
 * Building the displayed list. Outside of levelling mode it only holds the acquired talents.
 * In levelling mode, the career talents which have not been acquired yet are added at the top
 * in alphabetical order, so that they may be bought.
 */
Window_StatusTalents.prototype.makeTalentsList = function () {
    if (!this._actor) {
        this._talents = [];
        this._maxItems = 0;
        return;
    }
    // [<internal name>, {<talent data>}]
    const ownedTalents = TEW.DATABASE.TALENTS.ARRAY.filter(talent => this._actor.hasTalent(talent[0]));
    if (!this.isLevellingMode()) {
        this._talents = ownedTalents;
    }
    else {
        const buyableTalents = this._actor.buyableTalents()
            .map(talentId => [talentId, TEW.DATABASE.TALENTS.SET[talentId]])
            .sort((a, b) => a[1].name.localeCompare(b[1].name));
        this._talents = buyableTalents.concat(ownedTalents);
    }
    this._maxItems = this._talents.length;
};
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
    const x = Window_StatusTalents.LEFT_PADDING;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    const talent = this.talentFromIndex(index);
    // Talent name
    this.changeTextColor(this.systemColor());
    this.drawText(talent[1].name, x, y, Window_StatusTalents.NAME_COLUMN_WIDTH);
    this.resetTextColor();
    // Talent level, or the price of a talent which has not been bought yet
    this.changeTextColor(this.talentLevelColor(talent[0]));
    this.drawText(this.talentLevelText(talent[0]), x + Window_StatusTalents.NAME_COLUMN_WIDTH, y, Window_StatusTalents.LEVEL_COLUMN_WIDTH, 'right');
    this.resetTextColor();
};
/**
 * Returns the talent from the given index.
 */
Window_StatusTalents.prototype.talentFromIndex = function (index) {
    return this._talents[index];
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
// #region ====== Levelling mode === //
/**
 * Links the window to the levelling session holding the pending purchases.
 */
Window_StatusTalents.prototype.setLevelling = function (levelling) {
    this._levelling = levelling;
    this.refresh();
};
/**
 * Enters or leaves levelling mode. The buyable talents appear and disappear with it, so the
 * selected talent is followed to its new index rather than left behind.
 */
Window_StatusTalents.prototype.setLevellingMode = function (active) {
    if (this._levellingMode === active) {
        return;
    }
    const selectedTalentId = this.index() >= 0 && this._talents[this.index()]
        ? this._talents[this.index()][0]
        : null;
    this._levellingMode = active;
    this.makeTalentsList();
    if (selectedTalentId) {
        const newIndex = this._talents.map(talent => talent[0]).indexOf(selectedTalentId);
        this.select(Math.min(Math.max(newIndex, 0), this.maxItems() - 1));
    }
    this.refresh();
};
Window_StatusTalents.prototype.isLevellingMode = function () {
    return !!this._levellingMode && !!this._levelling && !!this._actor;
};
/**
 * Level of a talent, including the purchase about to be made.
 */
Window_StatusTalents.prototype.talentLevel = function (talentId) {
    return this.isLevellingMode()
        ? this._levelling.talentValue(talentId)
        : this._actor.talent(talentId);
};
/**
 * Talents which are not acquired yet display their price instead of a level of 0.
 */
Window_StatusTalents.prototype.talentLevelText = function (talentId) {
    const level = this.talentLevel(talentId);
    if (level > 0 || !this.isLevellingMode()) {
        return `lvl${level}`;
    }
    return `${this._levelling.talentCost()} ${TextManager.expA}`;
};
/**
 * Green when the talent is about to be bought, blue when the career allows buying it,
 * plain otherwise. Running out of experience does not change the colour.
 */
Window_StatusTalents.prototype.talentLevelColor = function (talentId) {
    if (!this.isLevellingMode()) {
        return this.normalColor();
    }
    if (this._levelling.isTalentBought(talentId)) {
        return this.powerUpColor();
    }
    if (this._levelling.canBuyTalent(talentId)) {
        return this.levellingColor();
    }
    return this.normalColor();
};
/**
 * In levelling mode, the horizontal arrows buy and refund talents.
 */
Window_StatusTalents.prototype.cursorRight = function (wrap) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeTalent(true);
    }
    else {
        HalfWindow_List.prototype.cursorRight.call(this, wrap);
    }
};
Window_StatusTalents.prototype.cursorLeft = function (wrap) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeTalent(false);
    }
    else {
        HalfWindow_List.prototype.cursorLeft.call(this, wrap);
    }
};
/**
 * Buys or refunds the selected talent.
 */
Window_StatusTalents.prototype.changeTalent = function (buy) {
    const talentId = this.talentFromIndex(this.index())[0];
    const changed = buy
        ? this._levelling.buyTalent(talentId)
        : this._levelling.refundTalent(talentId);
    if (changed) {
        SoundManager.playCursor();
        this.refresh();
        this.callHandler('levelling_change');
    }
};
// #endregion === Levelling mode === //
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
// Window_StatusTalents.prototype.maxItems = function() {
//     return this._maxItems;
// };
// #endregion =========================== Window_StatusTalents ============================== //
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
// Commands are packed on the left of the topbar to leave room for the levelling indicator
Window_StatusCommand.COMMAND_WIDTH = 200;
Window_StatusCommand.INDICATOR_MARGIN_X = 20;
Window_StatusCommand.prototype = Object.create(Window_HorzCommand.prototype);
Window_StatusCommand.prototype.constructor = Window_StatusCommand;
// Initializing the command window
Window_StatusCommand.prototype.initialize = function (x, y) {
    this._windowHeight = TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
    this._levelling = null;
    this._levellingMode = false;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};
// Max column number
Window_StatusCommand.prototype.maxCols = function () {
    return 4;
};
// Commands keep a fixed width instead of spreading over the whole topbar
Window_StatusCommand.prototype.itemWidth = function () {
    return Window_StatusCommand.COMMAND_WIDTH;
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
    return 18;
};
// #region ====== Levelling indicator === //
// Linking the window to the levelling session, so it can display its experience counters
Window_StatusCommand.prototype.setLevelling = function (levelling) {
    this._levelling = levelling;
    this.refresh();
};
// Switching between the 'Level up' hint and the experience counters
Window_StatusCommand.prototype.setLevellingMode = function (active) {
    if (this._levellingMode !== active) {
        this._levellingMode = active;
        this.refresh();
    }
};
Window_StatusCommand.prototype.isLevellingMode = function () {
    return !!this._levellingMode && !!this._levelling;
};
// Left edge of the area left free by the commands
Window_StatusCommand.prototype.indicatorX = function () {
    return this.maxCols() * (Window_StatusCommand.COMMAND_WIDTH + this.spacing())
        + Window_StatusCommand.INDICATOR_MARGIN_X;
};
Window_StatusCommand.prototype.refresh = function () {
    Window_HorzCommand.prototype.refresh.call(this);
    this.drawLevellingIndicator();
};
Window_StatusCommand.prototype.drawLevellingIndicator = function () {
    const x = this.indicatorX();
    const width = this.contentsWidth() - x;
    if (width <= 0) {
        return;
    }
    if (this.isLevellingMode()) {
        this.drawExperienceCounters(x, width);
    }
    else {
        this.changeTextColor(this.systemColor());
        this.drawText(`${TextManager.statusLevelUp}: ${TEW.MENU.LEVEL_UP_KEY_LABEL}`, x, 0, width, 'right');
        this.resetTextColor();
    }
};
// Remaining and spent experience points, displayed side by side
Window_StatusCommand.prototype.drawExperienceCounters = function (x, width) {
    const halfWidth = width / 2;
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.statusExpLeft, x, 0, halfWidth, 'left');
    this.resetTextColor();
    this.drawText(`${this._levelling.remainingExp()}`, x, 0, halfWidth, 'right');
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.statusExpSpent, x + halfWidth, 0, halfWidth, 'left');
    this.resetTextColor();
    this.drawText(`${this._levelling.spentExp()}`, x + halfWidth, 0, halfWidth, 'right');
};
// #endregion === Levelling indicator === //
// #endregion =========================== Window_StatusCommand ============================== //
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
        this._bgSprite = new Sprite(ImageManager.loadSystem(bg));
        this.addChildAt(this._bgSprite, 0);
    }
};
Window_Base.prototype.backgroundImageName = function () {
    return undefined;
};
// Careers replace RMMV's classes, which are left unused
Window_Base.prototype.drawActorCareer = function (actor, x, y, width = TEW.MENU.CAREER_LABEL_WIDTH) {
    this.changeTextColor(this.systemColor());
    this.drawText(actor.careerName(), x, y, width);
    this.resetTextColor();
};
// Drawing an underlined Text
Window_Base.prototype.drawUnderlinedText = function (text, x, y, width, align) {
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
Window_Base.prototype.drawWrappedText = function (text, x, y, maxWidth, fontSize = this.contents.fontSize) {
    this.contents.fontSize = fontSize;
    const words = text.split(" ");
    this.drawWrappedTextWordByWord(words, x, y, maxWidth);
};
// Drawing a wrapped text - used to draw to description
Window_Base.prototype.drawWrappedTextManually = function (text, x, y, maxHeight, fontSize = 28) {
    const lineJumpCount = text.split('\n').length;
    const words = text.split(" ");
    const maxWidth = this.contentsWidth() - x;
    this.contents.fontSize = fontSize;
    let lineHeight = this.contents.fontSize * 1.2;
    const spaceWidth = this.textWidth(" ");
    let doesFit = false;
    let currentX = x;
    do {
        let nbLine = lineJumpCount;
        // Calculating number of lines needed
        words.forEach(word => {
            word.replace('\n', ''); // They are already counted
            const wordWidth = this.textWidth(word);
            // If the word is too long, adding a new line
            if (currentX + wordWidth > maxWidth) {
                currentX = x; // begining of the line
                nbLine++;
            }
            currentX += wordWidth + spaceWidth;
        });
        // does the text fit ?
        doesFit = nbLine <= Math.floor(maxHeight / lineHeight);
        // If it doesnt fit, lets shrink the font
        if (!doesFit) {
            this.contents.fontSize -= 1;
            lineHeight = this.contents.fontSize * 1.2;
        }
    } while (!doesFit && this.contents.fontSize > 16);
    this.drawWrappedTextWordByWord(words, x, y, maxWidth);
};
Window_Base.prototype.drawWrappedTextWordByWord = function (words, x, y, width) {
    let currentX = x;
    let currentY = y;
    let startANewLine = false;
    let spaceWidth = this.textWidth(" ");
    let lineHeight = this.contents.fontSize * 1.2;
    words.forEach(word => {
        const wordWidth = this.textWidth(word.replace('\n', ''));
        // If the word is too long, drawing it on the next line
        if (currentX + wordWidth > width || startANewLine) {
            currentX = x; // begining of the line
            currentY += lineHeight; // next line
        }
        // Handling 

        startANewLine = word.includes('\n');
        // drawing it on the current line
        this.drawText(word.replace('\n', ''), currentX, currentY, wordWidth, 'left');
        currentX += wordWidth + spaceWidth;
    });
    this.resetFontSettings();
};
Window_Base.prototype.splitTextToLines = function (text, x, y, maxWidth, fontSize = this.contents.fontSize) {
    let currentX = x;
    let currentY = y;
    let startANewLine = false;
    const spaceWidth = this.textWidth(" ");
    const lineHeight = fontSize * 1.2;
    const words = text.split(" ");
    let currentLine = "";
    const lines = [];
    words.forEach(word => {
        const wordWidth = this.textWidth(word.replace('\n', ''));
        // If the word is too long, drawing it on the next line
        if (currentX + wordWidth > maxWidth || startANewLine) {
            currentX = x; // begining of the line
            currentY += lineHeight; // next line
            lines.push(currentLine.trim());
            currentLine = "";
        }
        // Handling 

        startANewLine = word.includes('\n');
        // Adding the current line into the array
        currentLine += word + " ";
        currentX += wordWidth + spaceWidth;
    });
    lines.push(currentLine.trim());
    return lines;
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
Window_Base.prototype.whiteColor = function () {
    return this.textColor(0);
};
Window_Base.prototype.normalColor = function () {
    return this.textColor(15);
};
// Colour of an improvable value in levelling mode
Window_Base.prototype.levellingColor = function () {
    return this.textColor(9);
};
// Colour of an improved value in levelling mode
Window_Base.prototype.powerUpColor = function () {
    return this.textColor(28);
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
Window_Journals.prototype.backgroundImageName = function () {
    return "bg_journals";
};
Window_Journals.prototype.windowWidth = function () {
    return Graphics.boxWidth;
};
Window_Journals.prototype.windowHeight = function () {
    return Graphics.boxHeight;
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
    return 440; // total height - topbar height - (3 commands window height + margins)
};
HalfWindow_List.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindowList";
};
Window_StatusStats.prototype.windowWidth = function () {
    return Graphics.boxWidth;
};
Window_StatusStats.prototype.windowHeight = function () {
    return Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
};
Window_StatusLevellingSummary.prototype.windowWidth = function () {
    return Graphics.boxWidth / 2; // TODO: adjust once the background is redrawn
};
Window_StatusLevellingSummary.prototype.windowHeight = function () {
    return 650;
};
Window_StatusTalents.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindowFullHeight";
};
Window_StatusTalents.prototype.windowHeight = function () {
    return Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
};
HalfWindow_Details.prototype.windowWidth = function () {
    return Graphics.boxWidth / 2;
};
HalfWindow_Details.prototype.windowHeight = function () {
    return 648; // total height - topbar height
};
HalfWindow_Details.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindowFullHeight";
};
Window_StatusTalentDetails.prototype.backgroundImageName = function () {
    return "bg_menuHalfWindowFullHeight";
};
Window_StatusTalentDetails.prototype.windowHeight = function () {
    return Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT;
};
HalfWindow_DetailsCommand.prototype.backgroundImageName = function () {
    return "bg_menuDetailsCommand";
};
HalfWindow_DetailsCommand.prototype.windowWidth = function () {
    return 600; // total width / 2 - margins
};
HalfWindow_DetailsCommand.prototype.windowHeight = function () {
    return 168; // line height * 3 + bg padding
};
Window_InventoryInfo.prototype.windowWidth = function () {
    return Graphics.boxWidth;
};
Window_InventoryInfo.prototype.windowHeight = function () {
    return Graphics.boxHeight - TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT;
};
Window_InventoryTransferCommand.prototype.backgroundImageName = function () {
    return "bg_inventoryTransferCommand";
};
Window_InventoryTransferCommand.prototype.windowWidth = function () {
    return 380;
};
Window_InventoryTransferCommand.prototype.windowHeight = function () {
    return 168; // line height * 3 + bg padding
};
Window_InventoryTransferSpinner.prototype.backgroundImageName = function () {
    return "bg_numberSpinner";
};
Window_InventoryTransferSpinner.prototype.windowWidth = function () {
    return 160;
};
Window_InventoryTransferSpinner.prototype.windowHeight = function () {
    return 96; // line height + bg padding
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
// #region ============================== Scene_Journal ============================== //
function Scene_Journal() {
    this.initialize.apply(this, arguments);
}
;
Scene_Journal.prototype = Object.create(Scene_Base.prototype);
Scene_Journal.prototype.constructor = Scene_Journal;
Scene_Journal.prototype.initialize = function () {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
    this.fetchEntries();
};
Scene_Journal.prototype.create = function () {
    Scene_Base.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createEntryWindow();
    this.createContentsTable();
    this.setupEntryWindow();
};
Scene_Journal.prototype.addFullscreenBackground = function () {
    this._background = new Sprite(ImageManager.loadSystem(this.backgroundImageName()));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};
Scene_Journal.prototype.setupEntryWindow = function () {
    this._windowEntryDetails._cancelHandler = () => {
        this._windowEntryDetails.hide();
        this._windowEntryDetails.deactivate();
        this._windowContentsTable.show();
        this._windowContentsTable.activate();
    };
    this._windowEntryDetails.hide();
    this._windowEntryDetails.deactivate();
    this.addWindow(this._windowEntryDetails);
};
Scene_Journal.prototype.createContentsTable = function () {
    this._windowContentsTable = new Window_JournalContentsTable(this._entries);
    this._windowContentsTable.setHandler('cancel', this.popScene.bind(this));
    this._windowContentsTable.setHandler('ok', () => {
        const selectedEntry = this._entries[this._windowContentsTable.index()];
        if (this._windowEntryDetails._id !== selectedEntry.id) {
            this._windowEntryDetails.reset(selectedEntry);
        }
        this._windowContentsTable.deactivate();
        this._windowContentsTable.hide();
        this._windowEntryDetails.show();
        this._windowEntryDetails.activate();
        this._windowEntryDetails.refresh();
    });
    this.addWindow(this._windowContentsTable);
    this._windowContentsTable.show();
    this._windowContentsTable.activate();
    this._windowContentsTable.refresh();
    this._windowContentsTable.select(0);
};
// #endregion =========================== Scene_Journal ============================== //
// ============================== //
// #region ============================== Scene_Journals ============================== //
function Scene_Journals() {
    this.initialize.apply(this, arguments);
}
Scene_Journals.prototype = Object.create(Scene_Base.prototype);
Scene_Journals.prototype.constructor = Scene_Journals;
Scene_Journals.prototype.initialize = function () {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
};
Scene_Journals.prototype.create = function () {
    Scene_Base.prototype.create.call(this);
    this.createJournalsCommands();
};
Scene_Journals.prototype.createJournalsCommands = function () {
    this._windowJournals = new Window_Journals();
    this._windowJournals.setHandler('cancel', this.popScene.bind(this));
    this._windowJournals.setHandler('ok', this.openJournal.bind(this));
    this.addWindow(this._windowJournals);
    this._windowJournals.show();
    this._windowJournals.activate();
    this._windowJournals.select(0);
};
Scene_Journals.prototype.openJournal = function () {
    const selectedJournal = this._windowJournals.item();
    switch (selectedJournal) {
        case "journal_quest_log":
            SceneManager.push(Scene_QuestLog);
            break;
        case "journal_documents":
            SceneManager.push(Scene_Documents);
            break;
        case "journal_characters":
            SceneManager.push(Scene_Characters);
            break;
        case "journal_glossary":
            SceneManager.push(Scene_Glossary);
            break;
        case "journal_tutorials":
            SceneManager.push(Scene_Tutorials);
            break;
    }
};
// #endregion =========================== Scene_Journals ============================== //
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
    const weaponData = this._weaponsWindow.item();
    console.log("Reload attempt");
    if (weaponData.isReloadable) {
        let actorWeaponAccessor;
        if (weaponData.isInSecondHand) {
            actorWeaponAccessor = this._actor.secondHand();
        }
        else {
            if (!weaponData.isInMainHand) {
                this._actor.unequipMainHand();
                this._actor.equipMainHand(weaponData.equipIndex);
            }
            actorWeaponAccessor = this._actor.mainHand();
        }
        // TODO skill test only in combat
        let maxReload = 1;
        if (weaponData.qualities.includes(35 /* WeaponQuality.REPEATER */)) {
            maxReload = 2;
            // } else if (weapon.qualities.includes(WeaponQuality.REPEATER_2)) {
            //     reloadAmount = 3;
        }
        else if (weaponData.qualities.includes(37 /* WeaponQuality.REPEATER_4 */)) {
            maxReload = 5;
        }
        if (weaponData.ammo > 0 && weaponData.ammo < maxReload && weaponData.ammoType) { // Reload with same ammo type or fail
            const availableAmmo = this._actor.ammo(weaponData.ammoType);
            if (availableAmmo > 0) {
                const reloadedAmount = Math.min(availableAmmo, maxReload - weaponData.ammo);
                this._actor.removeAmmo(weaponData.ammoType, reloadedAmount);
                actorWeaponAccessor.ammo = weaponData.ammo + reloadedAmount;
            }
            else {
                // TODO failure message/sound effect
            }
        }
        else if (weaponData.ammo === 0) { // TODO take the first valid ammunition type from inventory for now
            const validAmmo = weaponData.ammunition;
            for (let ammoGroup of validAmmo) {
                const firstAvailableAmmoType = this._actor.firstAmmoFromGroup(ammoGroup);
                const availableAmmo = this._actor.ammo(firstAvailableAmmoType);
                if (availableAmmo > 0) {
                    const reloadedAmount = Math.min(availableAmmo, maxReload);
                    this._actor.removeAmmo(firstAvailableAmmoType, reloadedAmount);
                    actorWeaponAccessor.ammo = reloadedAmount;
                    actorWeaponAccessor.ammoType = firstAvailableAmmoType;
                    console.log("Reloaded: ", this._actor.mainHand());
                    break; // TODO success message/sound effect
                }
            }
        }
        this._weaponsWindow.syncActor();
    }
    this._weaponsCommandWindow.callHandler('cancel');
};
// #endregion =========================== Scene_Equip ============================== //
// ============================== //
// #region ============================== Scene_Characters ============================== //
function Scene_Characters() {
    this.initialize.apply(this, arguments);
}
;
Scene_Characters.prototype = Object.create(Scene_Journal.prototype);
Scene_Characters.prototype.constructor = Scene_Characters;
Scene_Characters.prototype.initialize = function () {
    Scene_Journal.prototype.initialize.call(this);
};
Scene_Characters.prototype.fetchEntries = function () {
    this._entries = TEW.DATABASE.CHARACTER_DESCRIPTIONS
        .filter(char => $gameSwitches.value(char.id));
};
Scene_Characters.prototype.backgroundImageName = function () {
    return 'bg_characters';
};
Scene_Characters.prototype.createEntryWindow = function () {
    this._windowEntryDetails = new Window_CharacterEntry();
};
// #endregion =========================== Scene_Characters ============================== //
// ============================== //
// #region ============================== Scene_Documents ============================== //
function Scene_Documents() {
    this.initialize.apply(this, arguments);
}
;
Scene_Documents.prototype = Object.create(Scene_Journal.prototype);
Scene_Documents.prototype.constructor = Scene_Documents;
Scene_Documents.prototype.initialize = function () {
    Scene_Journal.prototype.initialize.call(this);
};
Scene_Documents.prototype.fetchEntries = function () {
    this._entries = TEW.DATABASE.JOURNAL_DOCUMENTS
        .filter(doc => $gameSwitches.value(doc.id));
};
Scene_Documents.prototype.backgroundImageName = function () {
    return 'bg_documents';
};
Scene_Documents.prototype.createEntryWindow = function () {
    this._windowEntryDetails = new Window_Document();
};
// #endregion =========================== Scene_Documents ============================== //
// ============================== //
// #region ============================== Scene_Glossary ============================== //
function Scene_Glossary() {
    this.initialize.apply(this, arguments);
}
Scene_Glossary.prototype = Object.create(Scene_Journal.prototype);
Scene_Glossary.prototype.constructor = Scene_Glossary;
Scene_Glossary.prototype.initialize = function () {
    Scene_Journal.prototype.initialize.call(this);
};
Scene_Glossary.prototype.fetchEntries = function () {
    this._entries = TEW.DATABASE.GLOSSARY
        .filter(entry => $gameSwitches.value(entry))
        .sort((a, b) => a.title.localeCompare(b.title));
};
Scene_Glossary.prototype.backgroundImageName = function () {
    return 'bg_glossary';
};
Scene_Glossary.prototype.createEntryWindow = function () {
    this._windowEntryDetails = new Window_GlossaryEntry();
};
// #endregion =========================== Scene_Glossary ============================== //
// ============================== //
// #region ============================== Scene_QuestLog ============================== //
function Scene_QuestLog() {
    this.initialize.apply(this, arguments);
}
Scene_QuestLog.prototype = Object.create(Scene_Base.prototype);
Scene_QuestLog.prototype.constructor = Scene_QuestLog;
Scene_QuestLog.prototype.initialize = function () {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
    this.fetchQuests();
};
Scene_QuestLog.prototype.fetchQuests = function () {
    this._quests = [];
    for (let quest of TEW.DATABASE.QUESTS) {
        const currentStep = $gameVariables.value(quest.gameVariableId);
        if (currentStep === 1000) { // quest resolved
            this._quests.push(quest);
        }
        else if (currentStep > 0) { // quest in progress
            this._quests.push({
                title: quest.title,
                paragraphs: quest.paragraphs,
                objective: quest.objective,
                steps: quest.steps.slice(0, currentStep),
                expandable: quest.steps.length > 0
            });
        }
    }
};
Scene_QuestLog.prototype.create = function () {
    Scene_Base.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createQuestDetails();
    this.createQuestList();
};
Scene_QuestLog.prototype.addFullscreenBackground = function () {
    this._background = new Sprite(ImageManager.loadSystem('bg_questlog'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};
Scene_QuestLog.prototype.createQuestDetails = function () {
    this._windowQuestDetails = new Window_QuestDetails();
    this.addWindow(this._windowQuestDetails);
    this._windowQuestDetails.show();
};
Scene_QuestLog.prototype.createQuestList = function () {
    this._windowQuestList = new Window_QuestList(this._quests);
    this._windowQuestList.setHandler('cancel', this.popScene.bind(this));
    this._windowQuestList.setHandler('show_quest_details', () => {
        const details = this._windowQuestList.selectedQuestDetails();
        this._windowQuestDetails._title = details.title;
        this._windowQuestDetails._paragraphs = details.paragraphs;
        this._windowQuestDetails.refresh();
    });
    this.addWindow(this._windowQuestList);
    this._windowQuestList.show();
    this._windowQuestList.activate();
    this._windowQuestList.select(0);
};
// #endregion =========================== Scene_QuestLog ============================== //
// ============================== //
// #region ============================== Scene_Tutorials ============================== //
function Scene_Tutorials() {
    this.initialize.apply(this, arguments);
}
;
Scene_Tutorials.prototype = Object.create(Scene_Base.prototype);
Scene_Tutorials.prototype.constructor = Scene_Tutorials;
Scene_Tutorials.prototype.initialize = function () {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
};
Scene_Tutorials.prototype.create = function () {
    Scene_Base.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createEntryWindow();
    this.createTutorialList();
    this.createTutorialCategoryList();
    this.setupEntryWindow();
    this.setupTutorialList();
    this.setupTutorialCategoryList();
};
Scene_Tutorials.prototype.addFullscreenBackground = function () {
    this._background = new Sprite(ImageManager.loadSystem('bg_tutorials'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};
Scene_Tutorials.prototype.createEntryWindow = function () {
    this._windowEntry = new Window_TutorialEntry();
};
Scene_Tutorials.prototype.setupEntryWindow = function () {
    this._windowEntry._cancelHandler = () => {
        this._windowEntry.hide();
        this._windowEntry.deactivate();
        this._windowTutorialCategoryList.show();
        this._windowTutorialList.show();
        this._windowTutorialList.activate();
    };
    this._windowEntry.hide();
    this._windowEntry.deactivate();
    this.addWindow(this._windowEntry);
};
Scene_Tutorials.prototype.createTutorialCategoryList = function () {
    this._windowTutorialCategoryList = new Window_TutorialCategoryList();
};
Scene_Tutorials.prototype.setupTutorialCategoryList = function () {
    this._windowTutorialCategoryList.setHandler('cancel', this.popScene.bind(this));
    this._windowTutorialCategoryList.setHandler('show_category_tutorials', () => {
        const categoryIndex = this._windowTutorialCategoryList._index;
        this._windowTutorialList._items = TEW.DATABASE.TUTORIALS[categoryIndex].subTutorials;
        this._windowTutorialList.refresh();
    });
    this._windowTutorialCategoryList.setHandler('select_category', () => {
        this._windowTutorialCategoryList.deactivate();
        this._windowTutorialList.activate();
        this._windowTutorialList.select(0);
    });
    this.addWindow(this._windowTutorialCategoryList);
    this._windowTutorialCategoryList.show();
    this._windowTutorialCategoryList.activate();
    this._windowTutorialCategoryList.select(0);
};
Scene_Tutorials.prototype.createTutorialList = function () {
    this._windowTutorialList = new Window_TutorialList(this._quests);
};
Scene_Tutorials.prototype.setupTutorialList = function () {
    this._windowTutorialList.setHandler('cancel', () => {
        this._windowTutorialList.deselect();
        this._windowTutorialList.deactivate();
        this._windowTutorialCategoryList.activate();
    });
    this._windowTutorialList.setHandler('show_tutorial_entry', () => {
        const tutorialEntry = this._windowTutorialList.selectedEntry();
        this._windowEntry.reset(tutorialEntry);
        this._windowTutorialCategoryList.hide();
        this._windowTutorialList.deactivate();
        this._windowTutorialList.hide();
        this._windowEntry.show();
        this._windowEntry.activate();
        this._windowEntry.refresh();
    });
    this.addWindow(this._windowTutorialList);
    this._windowTutorialList.show();
};
// #endregion =========================== Scene_Tutorials ============================== //
// ============================== //

