
var Imported = Imported || {};
Imported.TEW_Menus = true;
var TEW = TEW || {};

/*
* This plugin contains windows for the custom status menu.
*/

TEW.COMMAND_NAMES = {
    26 : "Stats",
    27 : "Skills",
    28 : "Talents",
    29 : "Spells",
}

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

const STATUS_WINDOW_TOPBAR_HEIGHT = 70;

// The window for selecting a command on the status screen.
// Adding new Commands Entries

Object.defineProperties(TextManager, {
    statusStats :          TextManager.getter('command', 26),
    statusComps :          TextManager.getter('command', 27),
    statusTalents :        TextManager.getter('command', 28),
    statusSpells :         TextManager.getter('command', 29)
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
// Window_Status (override)
//
// Character info, stats, competences (skills), talents and spells window

Window_Status.BASE_COMPETENCE_LINE_COUNT = Math.ceil(TEW.BASE_COMPS.length / 2);
Window_Status.BASE_COMPETENCE_WINDOW_HEIGHT = (Window_Status.BASE_COMPETENCE_LINE_COUNT + 1) * TEW.MENU_LINE_HEIGHT;

Window_Status.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0, STATUS_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth, Graphics.boxHeight - STATUS_WINDOW_TOPBAR_HEIGHT);
    this._actor = null;
    this._tab = 'stats';
    this._maxItems = 0;
    this.activate();
    this.refresh();
};

Window_Status.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0]));
        this.refresh();
    }
};

Window_Status.prototype.switchTab = function(tab) {
    this._tab = tab;
    if (this._tab === 'stats') {
        this._maxItems = 0;
    }
    else if (this._tab === 'comps') {
        this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
    }
    this.refresh();
};

Window_Status.prototype.maxItems = function() {
    return this._maxItems;
};

Window_Status.prototype.maxCols = function() {
    return 2;
};

Window_Status.prototype.refresh = function() {
    if (this._actor) {
        if (this._tab === 'stats') {
            this.drawStatsTab();
        }
        else if (this._tab === 'comps') {
            Window_Selectable.prototype.refresh.call(this);
        }
    }
};

// Window_Status.prototype.scrollDown = function() {
//     console.log("DOOOOWWWWNNNNNNN!!!!!");
//     console.log("this.topRow() : ", this.topRow());
//     console.log("this.maxRows() : ", this.maxRows());
//     if (this.topRow() + 1 < this.maxRows()) {
//         this.setTopRow(this.topRow() + 1);
//     }
// };

// Window_Status.prototype.scrollUp = function() {
//     // console.log("UUUUUUUUUUUUPPPPPPPP!!!!!!");
//     // console.log("this.topRow() : ", this.topRow());
//     if (this.topRow() > 0) {
//         this.setTopRow(this.topRow() - 1);
//     }
// };

Window_Status.prototype.drawStatsTab = function() {
    this.drawCharacterInfo(1);
    this.drawHorzLine(TEW.MENU_LINE_HEIGHT * 7);
    this.drawStats(TEW.MENU_LINE_HEIGHT * 8);
};

Window_Status.prototype.drawCharacterInfo = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + TEW.MENU_LINE_HEIGHT);
    this.drawActorFace(this._actor, 12, y + TEW.MENU_LINE_HEIGHT * 2);
    this.drawBasicInfo(204, y + TEW.MENU_LINE_HEIGHT * 2);
};

Window_Status.prototype.drawStats = function(y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};

Window_Status.prototype.drawParameters = function(x, y, offset) {
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + TEW.MENU_LINE_HEIGHT * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};

// Window_Status.prototype.drawCompetences = function(y) {
//     this.drawBaseComps(y);
//     this.drawHorzLine(y + Window_Status.BASE_COMPETENCE_WINDOW_HEIGHT);
//     this.drawAdvancedComps(y + 1 + Window_Status.BASE_COMPETENCE_WINDOW_HEIGHT);
// };

// Window_Status.prototype.drawBaseComps = function (y) {
//     this.drawCompList(y, TEW.BASE_COMPS);
// };

// Window_Status.prototype.drawAdvancedComps = function(y) {
//     this.drawCompList(y, this._advancedCompsList);
// };

// Window_Status.prototype.drawCompList = function(y, compList) {
//     const x1 = 48;
//     const x2 = 432;
//     const halfPoint = Math.floor(compList.length / 2);
//     for (var i = 0; i < halfPoint; i++) {
//         var y2 = y + TEW.MENU_LINE_HEIGHT * i;
//         var comp = compList[i]; // [<internal name>, {<competence data>}]
//         this.changeTextColor(this.systemColor());
//         this.drawText(comp[1].name, x1, y2, 160);
//         this.resetTextColor();
//         this.drawText(this._actor.comp(comp[0]) + '(' + this._actor.compPlus(comp[0]) + ')', x1 + 260, y2, 60, 'right');
//     }
//     for (var i = halfPoint; i < compList.length; i++) {
//         var y2 = y + TEW.MENU_LINE_HEIGHT * (i - halfPoint);
//         var comp = compList[i]; // [<internal name>, {<competence data>}]
//         this.changeTextColor(this.systemColor());
//         this.drawText(comp[1].name, x2, y2, 160);
//         this.resetTextColor();
//         this.drawText(this._actor.comp(comp[0]) + '(' + this._actor.compPlus(comp[0]) + ')', x2 + 260, y2, 60, 'right');
//     }
// };

Window_Status.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        console.log("ALED : ", this._scrollY, this.itemHeight());
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_Status.prototype.drawItem = function(index) {
    console.log("aled", index);
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 === 0 ? 48 : 432;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU_LINE_HEIGHT + STATUS_WINDOW_TOPBAR_HEIGHT;

    const comp = index < TEW.BASE_COMPS.length  // [<internal name>, {<competence data>}]
            ? TEW.BASE_COMPS[index]
            : this._advancedCompsList[index - TEW.BASE_COMPS.length];
    
    this.changeTextColor(this.systemColor());
    this.drawText(comp[1].name, x, y, 160);
    this.resetTextColor();
    this.drawText(this._actor.comp(comp[0]) + '(' + this._actor.compPlus(comp[0]) + ')', x + 260, y, 60, 'right');
};


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
Window_StatusCommand.prototype.initialize = function(x, y, width) {
    this._windowWidth = width;
    this._windowHeight = STATUS_WINDOW_TOPBAR_HEIGHT;
    Window_HorzCommand.prototype.initialize.call(this, x, y);
};

// Window Width
Window_StatusCommand.prototype.windowWidth = function() {
    return this._windowWidth;
};

// Max column number
Window_StatusCommand.prototype.maxCols = function() {
    return 4;
};

// Making the 4 tabs
Window_StatusCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.statusStats, 'status_stats');
    this.addCommand(TextManager.statusComps, 'status_comps');
    this.addCommand(TextManager.statusTalents, 'status_talents');
    this.addCommand(TextManager.statusSpells, 'status_spells');
};


// Scenes

//-----------------------------------------------------------------------------
// Scene_Status
//
// Customizing the status scene

// Creating the scene
Scene_Status.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this._statusWindow = new Window_Status();
    this.createCommandWindow();
    this._statusWindow.reserveFaceImages();
    this.addWindow(this._statusWindow);
};

// Creating the commands for this scene
Scene_Status.prototype.createCommandWindow = function(){
    var wx = 0;
    var wy = 0;
    var ww = Graphics.boxWidth;
    this._commandWindow = new Window_StatusCommand(wx, wy, ww);
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
    this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
    this._commandWindow.setHandler('status_stats', this.displayStatusStats.bind(this));
    this._commandWindow.setHandler('status_comps', this.displayStatusComps.bind(this));
    this._commandWindow.setHandler('status_talents', this.displayStatusTalents.bind(this));
    this._commandWindow.setHandler('status_spells', this.displayStatusSpells.bind(this));
    this.addWindow(this._commandWindow);
}

Scene_Status.prototype.displayStatusStats = function() {
    this._statusWindow.switchTab('stats');
    this._commandWindow.activate();
};

Scene_Status.prototype.displayStatusComps = function() {
    this._statusWindow.switchTab('comps');
    this._commandWindow.activate();
};

Scene_Status.prototype.displayStatusTalents = function() {
    this._statusWindow.switchTab('talents');
    this._commandWindow.activate();
};

Scene_Status.prototype.displayStatusSpells = function() {
    this._statusWindow.switchTab('spells');
    this._commandWindow.activate();
};
