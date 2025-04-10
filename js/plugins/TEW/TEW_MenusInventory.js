
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
TEW.COMMAND_NAMES[46] = "Ammo";
TEW.COMMAND_NAMES[47] = "Use";
TEW.COMMAND_NAMES[48] = "Transfer";
TEW.COMMAND_NAMES[49] = "Equip";
TEW.COMMAND_NAMES[50] = "Unequip";
TEW.COMMAND_NAMES[51] = "Transfer";
TEW.COMMAND_NAMES[52] = "Reload";
TEW.COMMAND_NAMES[53] = "Equip";
TEW.COMMAND_NAMES[54] = "Unequip";
TEW.COMMAND_NAMES[55] = "Transfer";

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
    inventoryAmmo :             TextManager.getter('command', 46),
    inventoryItemUse :          TextManager.getter('command', 47),
    inventoryItemTransfer :     TextManager.getter('command', 48),
    inventoryWeaponEquip :      TextManager.getter('command', 49),
    inventoryWeaponUnequip :    TextManager.getter('command', 50),
    inventoryWeaponTransfer :   TextManager.getter('command', 51),
    inventoryWeaponReload :     TextManager.getter('command', 52),
    inventoryArmorEquip :       TextManager.getter('command', 53),
    inventoryArmorUnequip :     TextManager.getter('command', 54),
    inventoryArmorTransfer :    TextManager.getter('command', 55)
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
// #region === Window_InventoryList ===
function Window_InventoryList() {
    this.initialize.apply(this, arguments);
}

Window_InventoryList.prototype = Object.create(Window_Selectable.prototype);
Window_InventoryList.prototype.constructor = Window_InventoryList;

// Inializing the window
Window_InventoryList.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0,
        INVENTORY_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - INVENTORY_WINDOW_TOPBAR_HEIGHT);
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
Window_InventoryList.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

// Refreshing the window
Window_InventoryList.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};

// Returning max Items
Window_InventoryList.prototype.maxItems = function() {
    return this._maxItems;
};

// Returning max Columns
Window_InventoryList.prototype.maxCols = () => 1;
// #endregion === Window_InventoryList ===
// === //
// #region === Window_InventoryDetails ===
function Window_InventoryDetails() {
    this.initialize.apply(this, arguments);
}

Window_InventoryDetails.prototype = Object.create(Window_Base.prototype);
Window_InventoryDetails.prototype.constructor = Window_InventoryDetails;

// Initalizing the window
Window_InventoryDetails.prototype.initialize = function(commandWindowHeight) {
    Window_Base.prototype.initialize.call(this,
        Graphics.boxWidth / 2,
        INVENTORY_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - INVENTORY_WINDOW_TOPBAR_HEIGHT - commandWindowHeight);
    this.width = Graphics.boxWidth / 2;
    this.activate();
    this.refresh();
};

Window_InventoryDetails.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

// Drawing an underlined Text
Window_InventoryDetails.prototype.drawUnderlinedText = function(text, x, y, width, align) {
    // Draw text
    this.drawText(text, x, y, width, align);

    // Getting position of the line
    const textSize = this.contents.fontSize;
    const textWidth = this.textWidth(text); 
    const lineY = y + textSize + 2; 

    // Drawing the line
    this.contents.paintOpacity = 255;
    this.contents.fillRect(
        x + (align === "center" ? (width - textWidth) / 2 : align === "right" ? width - textWidth : 0),
        lineY,
        textWidth,
        2, // Thickness
        this.normalColor()
    );
};

// Drawing a table with 2 columns
Window_InventoryDetails.prototype.drawTable2Columns = function(x, y, width, rows, textArray) {
    const cellWidthFirstRow = width / 3;
    const cellWidthSecondRow = width / 3 * 2;
    const cellHeight = this.lineHeight();

    for (let row = 0; row < rows; row++) {
        const cellXTh = x;
        const cellXTd = x + cellWidthFirstRow;
        const cellY = y + row * cellHeight

        this.drawText(textArray[row][0], cellXTh + 5, cellY, cellWidthFirstRow - 10 , "left");
        this.drawText(textArray[row][1], cellXTd + 5, cellY, cellWidthSecondRow - 10 , "left");
    }
};

// Drawing a wrapped text - used to draw to description
Window_InventoryDetails.prototype.drawWrappedTextManually = function(text, x, y, fontSize) {

    const words = text.split(" ");
    const maxWidth = this.contentsWidth() - x;

    if (text.length <= 100){ this.contents.fontSize = 28; }
    else if (text.length <= 200){ this.contents.fontSize = 20; }
    // else if (text.length <= 200) { this.contents.fontSize = 16; }
    else { this.contents.fontSize = 16; }

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

Window_InventoryDetails.prototype.drawLine = function(y) {
    const lineWidth = 40;
    const lineSize = 2;
    this.contents.fillRect(
        (this.contentsWidth() - lineWidth) / 2,
        y,
        lineWidth,
        lineSize,
        this.normalColor()
    );
};
// #endregion === Window_InventoryDetails ===
// === //
// #region === Window_InventoryDetailsCommand ===
function Window_InventoryDetailsCommand() {
    this.initialize.apply(this, arguments);
}

Window_InventoryDetailsCommand.prototype = Object.create(Window_Command.prototype);
Window_InventoryDetailsCommand.prototype.constructor = Window_InventoryDetailsCommand;

// Initializing the command window
Window_InventoryDetailsCommand.prototype.initialize = function(actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    this._windowWidth = Graphics.boxWidth / 2;
    this._windowHeight = this.fittingHeight(this._actionsNumber);
    Window_Command.prototype.initialize.call(
        this,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - this._windowHeight);
};
    
// Window Width
Window_InventoryDetailsCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

Window_InventoryDetailsCommand.prototype.addCommand = function(name, symbol, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext});
};
    
// #endregion === Window_InventoryDetailsCommand ===
// === //  
// #region === Window_InventoryInfos ===

function Window_InventoryInfos() {
    this.initialize.apply(this, arguments);
}

Window_InventoryInfos.prototype = Object.create(Window_InventoryList.prototype);
Window_InventoryInfos.prototype.constructor = Window_InventoryInfos;

Window_InventoryInfos.prototype.initialize = function() {
    Window_InventoryList.prototype.initialize.call(this);
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

// #endregion === Window_InventoryInfos ===
// === //
// #region === Window_InventoryWeapons ===

function Window_InventoryWeapons() {
    this.initialize.apply(this, arguments);
}

Window_InventoryWeapons.prototype = Object.create(Window_InventoryList.prototype);
Window_InventoryWeapons.prototype.constructor = Window_InventoryWeapons;

Window_InventoryWeapons.prototype.initialize = function() {
    Window_InventoryList.prototype.initialize.call(this);
};

Window_InventoryWeapons.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        
        const unequippedWeapons = actor.weapons.filter(weapon => !weapon.isInMainHand && !weapon.isInSecondHand);
        this._weapons = []; // [<internal name>, {<item data>}]
        unequippedWeapons.forEach(weapon => {
            const weaponData = TEW.WEAPONS_ARRAY.find(w => w[0] === weapon.id);
            weaponData[1].ammo = weapon.ammo;
            weaponData[1].ammoType = weapon.ammoType;
            this._weapons.push(weaponData);
        });

        this._maxItems = this._weapons.length;

        const mainHand = actor.mainHand();
        if (mainHand) {
            this._mainHandWeapon = TEW.WEAPONS_ARRAY.find(w => w[0] === mainHand.id);
            this._mainHandWeapon[1].ammo = mainHand.ammo;
            this._mainHandWeapon[1].ammoType = mainHand.ammoType;
            this._mainHandWeapon[1].equipIcon = TEW.ICONS_IDS.EQUIPPED_MAIN_HAND;
            this._maxItems ++;
        }

        const secondHand = actor.secondHand();
        if (secondHand) {
            this._secondHandWeapon = TEW.WEAPONS_ARRAY.find(w => w[0] === secondHand.id);
            this._secondHandWeapon[1].ammo = secondHand.ammo;
            this._secondHandWeapon[1].ammoType = secondHand.ammoType;
            this._secondHandWeapon[1].equipIcon = TEW.ICONS_IDS.EQUIPPED_SECOND_HAND;
            this._maxItems++;
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

Window_InventoryWeapons.prototype.drawItem = function(index) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU_LINE_HEIGHT;

    const weapon = this.weaponFromIndex(index);
    
    if (weapon) {
        this.changeTextColor(this.systemColor());
        this.drawIcon(weapon[1].equipIcon || 0, x - 32, y)
        this.drawIcon(weapon[1].icon, x , y)
        this.drawText(weapon[1].name, x + 32 + this._iconPadding, y, this.contentsWidth());
        this.resetTextColor();
    }
};

Window_InventoryWeapons.prototype.weaponFromIndex = function(index) {
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

Window_InventoryWeapons.prototype.select = function(index) {
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
// #endregion === Window_InventoryWeapons ===
// === //
// #region === Window_InventoryDetailsWeapon ===
function Window_InventoryDetailsWeapon() {
    this.initialize.apply(this, arguments);
}

Window_InventoryDetailsWeapon.prototype = Object.create(Window_InventoryDetails.prototype);
Window_InventoryDetailsWeapon.prototype.constructor = Window_InventoryDetailsWeapon;

Window_InventoryDetailsWeapon.prototype.initialize = function(commandWindowHeight = 0) {
    Window_InventoryDetails.prototype.initialize.call(this, commandWindowHeight);
    this._weapon = null;
};

// Refreshing the window
Window_InventoryDetailsWeapon.prototype.refresh = function() {
    this.contents.clear();
    if (this._weapon){
        this.drawDetails(this._weapon);
    }
};

// Drawing the details
Window_InventoryDetailsWeapon.prototype.drawDetails = function(weapon){
    // Title
    this.drawUnderlinedText(weapon[1].name, 0, 0, this.contentsWidth(), "center");

    // Item's Icon
    this.drawIcon(weapon[1].icon, 0, 0);

    // Availability Icon
    this.drawIcon(weapon[1].availabilityIcon, this.contentsWidth() - 32, 0)

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

// #endregion === Window_InventoryDetailsWeapon ===
// === //
// #region === Window_InventoryWeaponsCommand ===

function Window_InventoryWeaponsCommand() {
    this.initialize.apply(this, arguments);
}

Window_InventoryWeaponsCommand.prototype = Object.create(Window_InventoryDetailsCommand.prototype);
Window_InventoryWeaponsCommand.prototype.constructor = Window_InventoryWeaponsCommand;

// Initializing the command window
Window_InventoryWeaponsCommand.prototype.initialize = function() {
    Window_InventoryDetailsCommand.prototype.initialize.call(this, 3);
};

// Making the 3 lines
Window_InventoryWeaponsCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
    this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer');
    this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload');
};

Window_InventoryWeaponsCommand.prototype.refreshCommand = function(actor, weaponId = 0){
    if (actor){
        const weapon = actor.weapon(weaponId);
        this.clearCommandList();
        if (weapon.isInMainHand || weapon.isInSecondHand){
            this.addCommand(TextManager.inventoryWeaponUnequip, 'inventory_weapon_unequip');
        } else {
            this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_weapon_equip');
        }
        this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_weapon_transfer');
        if (weapon.isReloadable){
            this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload');
        } else {
            this.addCommand(TextManager.inventoryWeaponReload, 'inventory_weapon_reload', false);
        }
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};

// #endregion === Window_InventoryItemsCommand ===
// === //
// #region === Window_InventoryArmors ===
//-----------------------------------------------------------------------------
// Window_InventoryArmors

function Window_InventoryArmors() {
    this.initialize.apply(this, arguments);
}

Window_InventoryArmors.prototype = Object.create(Window_InventoryList.prototype);
Window_InventoryArmors.prototype.constructor = Window_InventoryArmors;

Window_InventoryArmors.prototype.initialize = function() {
    Window_InventoryList.prototype.initialize.call(this);
};

Window_InventoryArmors.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._armors = [];        

        // const unequippedArmors = TEW.ARMORS_ARRAY.filter(armor => actor.hasArmorTEW(armor[0]));
        // const equippedArmors = TEW.ARMORS_ARRAY.filter(armor => actor.hasArmorEquipped(armor[0]));

        actor.equippedArmors.forEach(armor => {
            this._armors.push(TEW.ARMORS_ARRAY.find(a => a[0] === armor));
        });
        actor.armors.forEach(armor => {
            this._armors.push(TEW.ARMORS_ARRAY.find(a => a[0] === armor));
        });
        this._maxItems = this._armors.length;
        this.refresh();
    }
};

Window_InventoryArmors.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_InventoryArmors.prototype.drawItem = function(index) {
    const normalizedIndex = index - this.topIndex();
    const x = 48;
    const y = normalizedIndex * TEW.MENU_LINE_HEIGHT;

    const armor = this.armorFromIndex(index);
    
    if (armor) {
        const iconEquipped = this._actor.hasArmorEquipped(armor[0])
            ? TEW.ICONS_IDS.EQUIPPED_ARMOR
            : 0;
        this.changeTextColor(this.systemColor());
        this.drawIcon(iconEquipped, x - 32, y)
        this.drawIcon(armor[1].icon, x , y)
        this.drawText(armor[1].name, x + 32 + this._iconPadding, y, this.contentsWidth() - (x + 32 + this._iconPadding));
        this.resetTextColor();
    }
};

// Getting an item from its index
Window_InventoryArmors.prototype.armorFromIndex = function(index) {
    return this._armors[index];
};

Window_InventoryArmors.prototype.select = function(index) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_armor_details");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

Window_InventoryArmors.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};


// #endregion === Window_InventoryArmors ===
// === //
// #region === Window_InventoryDetailsArmor ===
function Window_InventoryDetailsArmor() {
    this.initialize.apply(this, arguments);
}

Window_InventoryDetailsArmor.prototype = Object.create(Window_InventoryDetails.prototype);
Window_InventoryDetailsArmor.prototype.constructor = Window_InventoryDetailsArmor;

Window_InventoryDetailsArmor.prototype.initialize = function(commandWindowHeight = 0) {
    Window_InventoryDetails.prototype.initialize.call(this, commandWindowHeight);
    this._armor = null;
};

// Refreshing the window
Window_InventoryDetailsArmor.prototype.refresh = function() {
    this.contents.clear();
    if (this._armor){
        this.drawDetails(this._armor);
    }
};

// Drawing the details
Window_InventoryDetailsArmor.prototype.drawDetails = function(armor){
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

// #endregion === Window_InventoryDetailsArmor ===
// === //
// #region === Window_InventoryArmorsCommand ===

function Window_InventoryArmorsCommand() {
    this.initialize.apply(this, arguments);
}

Window_InventoryArmorsCommand.prototype = Object.create(Window_InventoryDetailsCommand.prototype);
Window_InventoryArmorsCommand.prototype.constructor = Window_InventoryArmorsCommand;

// Initializing the command window
Window_InventoryArmorsCommand.prototype.initialize = function() {
    Window_InventoryDetailsCommand.prototype.initialize.call(this, 2);
};

// Making the 2 lines
Window_InventoryArmorsCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryWeaponEquip, 'inventory_armor_equip');
    this.addCommand(TextManager.inventoryWeaponTransfer, 'inventory_armor_transfer');
};

Window_InventoryArmorsCommand.prototype.refreshCommand = function(actor, armorId = 0){
    if (actor){
        this.clearCommandList();
        if (actor.hasArmorEquipped(armorId)){
            this.addCommand(TextManager.inventoryArmorUnequip, 'inventory_armor_unequip');
        } else {
            this.addCommand(TextManager.inventoryArmorEquip, 'inventory_armor_equip');
        }
        this.addCommand(TextManager.inventoryArmorTransfer, 'inventory_armor_transfer');
        this.createContents();
        Window_Selectable.prototype.refresh.call(this);
    }
};

// #endregion === Window_InventoryItemsCommand ===
// === //
// #region === Window_InventoryItems ===
function Window_InventoryItems() {
    this.initialize.apply(this, arguments);
}

Window_InventoryItems.prototype = Object.create(Window_InventoryList.prototype);
Window_InventoryItems.prototype.constructor = Window_InventoryItems;

Window_InventoryItems.prototype.initialize = function() {
    Window_InventoryList.prototype.initialize.call(this);
};

Window_InventoryItems.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._items = TEW.ITEMS_ARRAY.filter(item => actor.hasItem(item[0])); // [<internal name>, {<item data>}]
        this._maxItems = this._items.length;
        this.refresh();
    }
};

// Drawing all the items
Window_InventoryItems.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

// Drawing one item
Window_InventoryItems.prototype.drawItem = function(index) {
    const normalizedIndex = index - this.topIndex();
    const x = this._leftPadding; // padding
    const y = normalizedIndex  * TEW.MENU_LINE_HEIGHT;

    const item = this.itemFromIndex(index);
    this.changeTextColor(this.systemColor());
    this.drawIcon(item[1].groupIcon, x, y)
    this.drawText(item[1].name, x + 32 + this._iconPadding, y, this._rightColumnPosition);
    this.resetTextColor();
    this.drawText(this._actor.item(item[0]), this._rightColumnPosition, y, this._rightColumnWidth, 'right');
};

// Getting an item from its index
Window_InventoryItems.prototype.itemFromIndex = function(index) {
    return this._items[index];
};

// Selecting an item
Window_InventoryItems.prototype.select = function(index) {
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
Window_InventoryItems.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

// #endregion === Window_InventoryItems ===
// === //
// #region === Window_InventoryDetailsItem ===

function Window_InventoryDetailsItems() {
    this.initialize.apply(this, arguments);
}

Window_InventoryDetailsItems.prototype = Object.create(Window_InventoryDetails.prototype);
Window_InventoryDetailsItems.prototype.constructor = Window_InventoryDetailsItems;

Window_InventoryDetailsItems.prototype.initialize = function(commandWindowHeight = 0) {
    Window_InventoryDetails.prototype.initialize.call(this, commandWindowHeight);
    this._item = null;
};

// Refreshing the window
Window_InventoryDetailsItems.prototype.refresh = function() {
    this.contents.clear();
    if (this._item){
        this.drawDetails(this._item);
    }
};

// Drawing the details
Window_InventoryDetailsItems.prototype.drawDetails = function(item){
    // Title
    this.drawUnderlinedText(item[1].name, 0, 0, this.contentsWidth(), "center");

    // Item's Icon
    this.drawIcon(item[1].groupIcon, 0, 0);

    // Availability Icon
    this.drawIcon(item[1].availabilityIcon, this.contentsWidth() - 32, 0)

    // Table
    this.drawTable2Columns(0, 80, this.contentsWidth(), 3, [
        ["Owned :", "x" + item[1].quantity],
        ["Group :", item[1].groupLabel],
        ["Enc. :", item[1].enc]
    ]);

    this.drawLine(200);

    // Description
    this.drawWrappedTextManually(item[1].description, 0, 220, 24);
};

// #endregion === Window_InventoryDetailsItem ===
// === //
// #region === Window_InventoryItemsCommand ===
// The window for selecting a command on the items view.

function Window_InventoryItemsCommand() {
    this.initialize.apply(this, arguments);
}

Window_InventoryItemsCommand.prototype = Object.create(Window_InventoryDetailsCommand.prototype);
Window_InventoryItemsCommand.prototype.constructor = Window_InventoryItemsCommand;

// Initializing the command window
Window_InventoryItemsCommand.prototype.initialize = function() {
    Window_InventoryDetailsCommand.prototype.initialize.call(this, 2);
};

// Making the 2 lines
Window_InventoryItemsCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryItemUse, 'inventory_item_use');
    this.addCommand(TextManager.inventoryItemTransfer, 'inventory_item_transfer');
};

// #endregion === Window_InventoryItemsCommand ===
// === //  
// #region === Window_InventoryHelp ===
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
    const yStartPos = Graphics.height - (numLines + 1) * this.lineHeight();
    this.move(0, yStartPos, Graphics.width, Graphics.height - yStartPos);
    this._textArray = [];
    this._iconsArray = [];
};

Window_InventoryHelp.prototype.reshape = function(numLines = 2) {
    // this.height = this.fittingHeight(numLines);
    const yStartPos = Graphics.height - (numLines + 1) * this.lineHeight();
    this.move(0, yStartPos, Graphics.width, Graphics.height - yStartPos);
    this.contents.resize(Graphics.width, this.fittingHeight(numLines));
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
        this.drawText(text.desc, text.x, text.y, Graphics.width, text.align || 'left');
    });

    // Drawing the icons
    this._iconsArray.forEach(icon => {
        this.drawIcon(icon.id, icon.x, icon.y);
    });
};

// #endregion === Window_InventoryHelp ===
// === //
// #region === Window_InventoryCommand ===
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
    return 5;
};

// Making the 5 tabs
Window_InventoryCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.inventoryInfos, 'inventory_infos');
    this.addCommand(TextManager.inventoryWeapons, 'inventory_weapons');
    this.addCommand(TextManager.inventoryArmors, 'inventory_armors');
    this.addCommand(TextManager.inventoryItems, 'inventory_items');
    this.addCommand(TextManager.inventoryAmmo, 'inventory_ammo');
};


Window_InventoryCommand.prototype.cursorRight = function(wrap) {
    Window_HorzCommand.prototype.cursorRight.call(this, wrap);
    this.callHandler('right');
};

Window_InventoryCommand.prototype.cursorLeft = function(wrap) {
    Window_HorzCommand.prototype.cursorLeft.call(this, wrap);
    this.callHandler('left');
};

// #endregion === Window_InventoryCommand ===
// === //
// #region === Window_InventoryAmmo
//-----------------------------------------------------------------------------
// Window_InventoryAmmo

function Window_InventoryAmmo() {
    this.initialize.apply(this, arguments);
}

Window_InventoryAmmo.prototype = Object.create(Window_InventoryList.prototype);
Window_InventoryAmmo.prototype.constructor = Window_InventoryAmmo;

Window_InventoryAmmo.prototype.initialize = function() {
    Window_InventoryList.prototype.initialize.call(this);
    this._helpWindow = null;
    // this.setHandler('ok', this.showHelpWindow.bind(this));
};

Window_InventoryAmmo.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        // this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0])); // TODO
        // this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};

//#endregion === Window_InventoryAmmo
// === //  
// #region === Scene_Equip ===
// Customizing the inventory scene

Scene_Equip.prototype.INFOS_WINDOW_INDEX = 0;
Scene_Equip.prototype.WEAPONS_WINDOW_INDEX = 1;
Scene_Equip.prototype.ARMORS_WINDOW_INDEX = 2;
Scene_Equip.prototype.ITEMS_WINDOW_INDEX = 3;
Scene_Equip.prototype.AMMO_WINDOW_INDEX = 4;

// Creating the scene
Scene_Equip.prototype.create = function() {
    // Init
    Scene_MenuBase.prototype.create.call(this);

    // Command window
    this.createCommandWindow();

    // Info windows
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

    // Ammo Windows
    this.createAmmoWindow();

    // Help window
    this.createHelpWindow();
    this._helpWindow.hide();
    this._weaponsWindow.setHelpWindow(this._helpWindow);
    this._armorsWindow.setHelpWindow(this._helpWindow);
    // this._itemsWindow.setHelpWindow(this._helpWindow);
    this._ammoWindow.setHelpWindow(this._helpWindow);
    this.activateInventoryInfos(); // Deactivate all the windows, except the infos one
    this.refreshActor();
};

// Refreshing the actor
Scene_Equip.prototype.refreshActor = function() {
    var actor = this.actor();
    this._infosWindow.setActor(actor);
    this._weaponsWindow.setActor(actor);
    this._armorsWindow.setActor(actor);
    this._itemsWindow.setActor(actor);
    this._ammoWindow.setActor(actor);
};

// Creating the help window
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
    this._commandWindow.setHandler('inventory_ammo', this.activateInventoryAmmo.bind(this));
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
    this._weaponsWindow.setHandler('ok', () => {
        this.activateCommandWindowWeapon();
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
    this._armorsWindow.setHandler('ok', () => {
        this.activateCommandWindowArmor();
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
    this._itemsWindow.setHandler('ok', () => {
        this.activateCommandWindowItem();
    });
    this._itemsWindow.hide();
    this.addWindow(this._itemsWindow);
};

Scene_Equip.prototype.createItemsCommandWindow = function(){
    this._itemsCommandWindow = new Window_InventoryItemsCommand();
    this._itemsCommandWindow.setHandler('cancel', () => {
        this._itemsCommandWindow.deactivate();
        this._itemsCommandWindow.deselect();
        this.activateInventoryItems(this._itemsWindow.index());
    });
    this._itemsCommandWindow.setHandler('inventory_item_use', this.useItem.bind(this));
    this._itemsCommandWindow.setHandler('inventory_item_transfer', this.transferItem.bind(this));
    this._itemsCommandWindow.hide();
    this._itemsCommandWindow.deselect();
    this.addWindow(this._itemsCommandWindow);
};

Scene_Equip.prototype.createWeaponsCommandWindow = function(){
    this._weaponsCommandWindow = new Window_InventoryWeaponsCommand();
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

Scene_Equip.prototype.createArmorsCommandWindow = function(){
    this._armorsCommandWindow = new Window_InventoryArmorsCommand();
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

// Creating the ammo Window for the scene
Scene_Equip.prototype.createAmmoWindow = function(){
    this._ammoWindow = new Window_InventoryAmmo();
    this._ammoWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._ammoWindow.deselect();
    });
    this._ammoWindow.hide();
    this.addWindow(this._ammoWindow);
};

// Creating the items details Window for the scene
Scene_Equip.prototype.createItemsDetailsWindow = function(){
    this._itemsDetailsWindow = new Window_InventoryDetailsItems(
        this._itemsCommandWindow.fittingHeight(this._itemsCommandWindow._actionsNumber)
    );
    this._itemsWindow.setHandler('show_item_details', () => {
        this.showItemDetails();
    });
    this._itemsDetailsWindow.hide();
    this.addWindow(this._itemsDetailsWindow);
};

// Creating the weapons details Window for the scene
Scene_Equip.prototype.createWeaponsDetailsWindow = function(){
    this._weaponsDetailsWindow = new Window_InventoryDetailsWeapon(
        this._weaponsCommandWindow.fittingHeight(this._weaponsCommandWindow._actionsNumber)
    );
    this._weaponsWindow.setHandler('show_weapon_details', () => {
        this.showWeaponDetails();
    });
    this._weaponsDetailsWindow.hide();
    this.addWindow(this._weaponsDetailsWindow);
};

// Creating the armors details Window for the scene
Scene_Equip.prototype.createArmorsDetailsWindow = function(){
    this._armorsDetailsWindow = new Window_InventoryDetailsArmor(
        this._armorsCommandWindow.fittingHeight(this._armorsCommandWindow._actionsNumber)
    );
    this._armorsWindow.setHandler('show_armor_details', () => {
        this.showArmorDetails();
    });
    this._armorsDetailsWindow.hide();
    this.addWindow(this._armorsDetailsWindow);
};

// Hiding all the windows
Scene_Equip.prototype.hideAllWindows = function(){
    this._infosWindow.hide();
    this._infosWindow.deactivate();

    this._weaponsWindow.hide();
    this._weaponsWindow.deactivate();

    this._weaponsDetailsWindow.hide();
    this._weaponsDetailsWindow.deactivate();

    this._weaponsCommandWindow.hide();
    this._weaponsCommandWindow.deactivate();

    this._armorsWindow.hide();
    this._armorsWindow.deactivate();

    this._armorsDetailsWindow.hide();
    this._armorsDetailsWindow.deactivate();

    this._armorsCommandWindow.hide();
    this._armorsCommandWindow.deactivate();
    
    this._itemsWindow.hide();
    this._itemsWindow.deactivate();

    this._itemsDetailsWindow.hide();
    this._itemsDetailsWindow.deactivate();

    this._itemsCommandWindow.hide();
    this._itemsCommandWindow.deactivate();

    this._ammoWindow.hide();
    this._ammoWindow.deactivate();
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
        this._weaponsDetailsWindow.show();
        this._weaponsCommandWindow.show();
        this._weaponsWindow.refresh();
        this._weaponsDetailsWindow.refresh();
        this._weaponsCommandWindow.refresh();
    } else if (this._commandWindow.index() == this.ARMORS_WINDOW_INDEX){
        this._armorsWindow.show();
        this._armorsDetailsWindow.show();
        this._armorsCommandWindow.show();
        this._armorsWindow.refresh();
        this._armorsDetailsWindow.refresh();
        this._armorsCommandWindow.refresh();
    } else if (this._commandWindow.index() == this.ITEMS_WINDOW_INDEX){
        this._itemsWindow.show();
        this._itemsDetailsWindow.show();
        this._itemsCommandWindow.show();
        this._itemsWindow.refresh();
        this._itemsDetailsWindow.refresh();
        this._itemsCommandWindow.refresh();
    } else if (this._commandWindow.index() == this.AMMO_WINDOW_INDEX){
        this._ammoWindow.show();
        this._ammoWindow.refresh();
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
Scene_Equip.prototype.activateInventoryWeapons = function(index = 0) {
    this.hideAllWindows()
    this._weaponsWindow.show();
    this._commandWindow.deactivate();
    this._weaponsWindow.activate();
    this._weaponsDetailsWindow.show();
    this._weaponsCommandWindow.show();
    this._weaponsWindow.select(index);
    this._weaponsWindow.refresh();
};

// Activating the armors window 
Scene_Equip.prototype.activateInventoryArmors = function(index = 0) {
    this.hideAllWindows();
    this._armorsWindow.show();
    this._commandWindow.deactivate();
    this._armorsWindow.activate();
    this._armorsDetailsWindow.show();
    this._armorsCommandWindow.show();
    this._armorsWindow.select(index);
    this._armorsWindow.refresh();
};

// Activating the items window 
Scene_Equip.prototype.activateInventoryItems = function(index = 0) {
    this.hideAllWindows();
    this._itemsWindow.show();
    this._itemsDetailsWindow.show();
    this._itemsCommandWindow.show();
    this._commandWindow.deactivate();
    this._itemsWindow.activate();
    this._itemsWindow.select(index);
    this._itemsWindow.refresh();
};

// Activating the ammo window 
Scene_Equip.prototype.activateInventoryAmmo = function(index = 0) {
    this.hideAllWindows();
    this._ammoWindow.show();
    this._commandWindow.deactivate();
    this._ammoWindow.activate();
    this._ammoWindow.select(index);
    this._ammoWindow.refresh();
};

Scene_Equip.prototype.activateCommandWindowItem = function(){
    if (this._itemsWindow.isOpenAndActive() && this._itemsWindow.index() >= 0){
        this._itemsWindow.deactivate();
        this._itemsCommandWindow.show();
        this._itemsCommandWindow.activate();
        this._itemsCommandWindow.select(0);
    }
}

Scene_Equip.prototype.activateCommandWindowWeapon = function(){
    if (this._weaponsWindow.isOpenAndActive() && this._weaponsWindow.index() >= 0){
        this._weaponsWindow.deactivate();
        this._weaponsCommandWindow.show();
        this._weaponsCommandWindow.activate();
        this._weaponsCommandWindow.select(0);
    }
}

Scene_Equip.prototype.activateCommandWindowArmor = function(){
    if (this._armorsWindow.isOpenAndActive() && this._armorsWindow.index() >= 0){
        this._armorsWindow.deactivate();
        this._armorsCommandWindow.show();
        this._armorsCommandWindow.activate();
        this._armorsCommandWindow.select(0);
    }
}

// Showing the item details - Triggered on the items window
Scene_Equip.prototype.showItemDetails = function(){
    const item = this._itemsWindow.itemFromIndex(this._itemsWindow.index());
    item[1].quantity = this._itemsWindow._actor.item(item[0]);
    this._itemsDetailsWindow._item = item;
    this._itemsDetailsWindow.refresh();
}

Scene_Equip.prototype.showWeaponDetails = function(){
    const weapon = this._weaponsWindow.weaponFromIndex(this._weaponsWindow.index());
    this._weaponsDetailsWindow._weapon = weapon;
    this._weaponsCommandWindow.refreshCommand(this._actor, weapon[0]);
    this._weaponsDetailsWindow.refresh();
}

Scene_Equip.prototype.showArmorDetails = function(){
    const armor = this._armorsWindow.armorFromIndex(this._armorsWindow.index());
    this._armorsDetailsWindow._armor = armor;
    this._armorsCommandWindow.refreshCommand(this._actor, armor[0]);
    this._armorsDetailsWindow.refresh();
}

// Using an item - Triggered on the items window
Scene_Equip.prototype.useItem = function(){
    console.log("Use item : ", this._itemsWindow.index());
    this._itemsCommandWindow.callHandler('cancel');
}

// Transfering an item - Triggered on the items window
Scene_Equip.prototype.transferItem = function(){
    console.log("Transfer item", this._itemsWindow.index());
    this._itemsCommandWindow.callHandler('cancel');
}

// Equipping a weapon - Triggered on the weapons window
Scene_Equip.prototype.equipWeapon = function(){
    console.log("Equip weapon : ", this._weaponsWindow.index());
    this._weaponsCommandWindow.callHandler('cancel');
}

// Unequipping a weapon - Triggered on the weapons window
Scene_Equip.prototype.unequipWeapon = function(){
    console.log("Unequip weapon : ", this._weaponsWindow.index());
    this._weaponsCommandWindow.callHandler('cancel');
}

// Transfering a weapon - Triggered on the weapons window
Scene_Equip.prototype.transferWeapon = function(){
    console.log("Transfer weapon", this._weaponsWindow.index());
    this._weaponsCommandWindow.callHandler('cancel');
}

// Reloading a weapon - Triggered on the weapons window
Scene_Equip.prototype.reloadWeapon = function(){
    console.log("Reload weapon : ", this._weaponsWindow.index());
    this._weaponsCommandWindow.callHandler('cancel');
}

// Equipping a weapon - Triggered on the weapons window
Scene_Equip.prototype.equipArmor = function(){
    console.log("Equip armor : ", this._armorsWindow.index());
    this._armorsCommandWindow.callHandler('cancel');
}

// Unequipping a weapon - Triggered on the weapons window
Scene_Equip.prototype.unequipArmor = function(){
    console.log("Unequip armor : ", this._armorsWindow.index());
    this._armorsCommandWindow.callHandler('cancel');
}

// Transfering a weapon - Triggered on the weapons window
Scene_Equip.prototype.transferArmor = function(){
    console.log("Transfer armor", this._armorsWindow.index());
    this._armorsCommandWindow.callHandler('cancel');
}

//#endregion === Scene_Equip ===
