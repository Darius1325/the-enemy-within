
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
// TODO maybe unnecessary ?
Object.defineProperties(TextManager, {
    statusStats :          TextManager.getter('command', 26),
    statusComps :          TextManager.getter('command', 27),
    statusTalents :        TextManager.getter('command', 28),
    statusSpells :         TextManager.getter('command', 29)
});


//-----------------------------------------------------------------------------
// Window_Base

Window_Base.prototype.isActive = function() {
    return this.active;
};


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

Window_Status.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_Status.prototype.drawItem = function(index) {
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
// Window_Stats

function Window_Stats() {
    this.initialize.apply(this, arguments);
}

Window_Stats.prototype = Object.create(Window_Selectable.prototype);
Window_Stats.prototype.constructor = Window_Stats;

Window_Stats.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0, STATUS_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth, Graphics.boxHeight - STATUS_WINDOW_TOPBAR_HEIGHT);
    this._actor = null;
    this.refresh();
};

Window_Stats.prototype.refresh = function() {
    Window_Selectable.prototype.refresh.call(this);
    if (this._actor) {
        this.drawStatsTab();
    }
};

Window_Stats.prototype.drawHorzLine = Window_Status.prototype.drawHorzLine;

Window_Stats.prototype.drawStatsTab = function() {
    this.drawCharacterInfo(1);
    this.drawHorzLine(TEW.MENU_LINE_HEIGHT * 7);
    this.drawStats(TEW.MENU_LINE_HEIGHT * 8);
};

Window_Stats.prototype.drawBasicInfo = Window_Status.prototype.drawBasicInfo;

Window_Stats.prototype.drawCharacterInfo = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + TEW.MENU_LINE_HEIGHT);
    this.drawActorFace(this._actor, 12, y + TEW.MENU_LINE_HEIGHT * 2);
    this.drawBasicInfo(204, y + TEW.MENU_LINE_HEIGHT * 2);
};

Window_Stats.prototype.drawStats = function(y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};

Window_Stats.prototype.drawParameters = function(x, y, offset) {
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + TEW.MENU_LINE_HEIGHT * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
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
    this._statusWindow = new Window_Stats();
    this._competencesWindow = new Window_Competences();
    this._talentsWindow = new Window_Talents();
    this.createCommandWindow();
    this._statusWindow.reserveFaceImages();
    this._competencesWindow.hide();
    this.addWindow(this._statusWindow);
    this.addWindow(this._competencesWindow);
    this.addWindow(this._talentsWindow);
    this._currentWindow = this._statusWindow;
};

// Creating the commands for this scene
Scene_Status.prototype.createCommandWindow = function(){
    var wx = 0;
    var wy = 0;
    var ww = Graphics.boxWidth;
    this._commandWindow = new Window_StatusCommand(wx, wy, ww);
    this._commandWindow.setHandler('cancel', this.popScene.bind(this));
    this._commandWindow.setHandler('pagedown', this.pageDown.bind(this));
    this._commandWindow.setHandler('pageup', this.pageUp.bind(this));
    this._commandWindow.setHandler('status_stats', this.displayStatusStats.bind(this));
    this._commandWindow.setHandler('status_comps', this.displayStatusComps.bind(this));
    this._commandWindow.setHandler('status_talents', this.displayStatusTalents.bind(this));
    this._commandWindow.setHandler('status_spells', this.displayStatusSpells.bind(this));
    this.addWindow(this._commandWindow);
}

Scene_Status.prototype.pageDown = function() {
    if (this._commandWindow.isActive()) {
        this._commandWindow.deactivate();
        this._currentWindow.activate();
        this._currentWindow.select(0);
    } else if (this._currentWindow.topRow() === this._currentWindow.maxTopRow()) {
        this._currentWindow.deactivate();
        this._commandWindow.activate();
    }
};

Scene_Status.prototype.pageUp = function() {
    if (this._commandWindow.isActive()) {
        this._commandWindow.deactivate();
        this._currentWindow.activate();
        this._currentWindow.select(this._currentWindow.maxItems());
    } else if (this._currentWindow.topRow() === 0) {
        this._currentWindow.deactivate();
        this._commandWindow.activate();
    }
};

Scene_Status.prototype.displayStatusStats = function() {
    this._competencesWindow.hide();
    this._talentsWindow.hide();
    this._statusWindow.show();
    this._commandWindow.activate();
};

Scene_Status.prototype.displayStatusComps = function() {
    this._statusWindow.hide();
    this._talentsWindow.hide();
    this._competencesWindow.show();
    this._commandWindow.activate();
};

Scene_Status.prototype.displayStatusTalents = function() {
    this._statusWindow.hide();
    this._competencesWindow.hide();
    this._talentsWindow.show();
    this._commandWindow.activate();
};

Scene_Status.prototype.displayStatusSpells = function() {
    this._statusWindow.hide();
    this._competencesWindow.hide();
    this._talentsWindow.hide();
    this._commandWindow.activate();
};


//-----------------------------------------------------------------------------
// Window_Scrollable
//
// Streamlined Window_Selectable to use an object instead of overriding drawItems()

function Window_Scrollable() {
    this.initialize.apply(this, arguments);
}

Window_Scrollable.prototype = Object.create(Window_Selectable.prototype);
Window_Scrollable.prototype.constructor = Window_Scrollable;

Window_Scrollable.prototype.initialize = function(x, y, width, height, displayControl) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    const {
        items,
        ...displayData
    } = displayControl;
    this._items = items;
    this._displayData = displayData;
    this._maxItems = items.length;
    this._maxCols = displayData.columnCoordinates.length;
};

Window_Scrollable.prototype.maxItems = function() {
    return this._maxItems;
};

Window_Scrollable.prototype.maxCols = function() {
    return this._maxCols;
};

Window_Scrollable.prototype.drawAllItems = function() {
    const maxIndex = Math.max(this._maxItems, this.maxPageItems() + this.topIndex());
    for (var i = this.topIndex(); i < maxIndex; i++) {
        const horizontalAlignment = this._height + (i - this.topIndex()) / this.maxCols() * TEW.MENU_LINE_HEIGHT;
        for (var j = 0; j < this._items[i].length; j++) {
            const verticalAlignment = this._items[i][j].x ?? this._displayData.columnCoordinates[j];
            const drawItem = this._items[i].drawItem ?? this._displayData.drawItem;
            drawItem({
                window: this,
                item: this._items[i][j].item,
                x: verticalAlignment,
                y: horizontalAlignment
            });
        }
    }
};

Window_Scrollable.prototype.close = function() {
    this._items = undefined;
    this._displayData = undefined;
    Window_Selectable.prototype.close.call(this);
};


//-----------------------------------------------------------------------------
// Window_Competences
//
// Displays competences (skills) in the status menu

function Window_Competences() {
    this.initialize.apply(this, arguments);
}

Window_Competences.prototype = Object.create(Window_Scrollable.prototype);
Window_Competences.prototype.constructor = Window_Competences;

Window_Competences.BASE_SKILLS_TITLE = 'Base skills';
Window_Competences.ADVANCED_SKILLS_TITLE = 'Advanced skills';
Window_Competences.STAT_BASE = 'Based on ';

Window_Competences.prototype.initialize = function() {
    const selectedActor = $gameActors[$gameParty._menuActorId];
    Window_Scrollable.prototype.initialize.call(this,
        0, STATUS_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth, Graphics.boxHeight - STATUS_WINDOW_TOPBAR_HEIGHT,
        {
            drawItem: ({ window, item, x, y }) => {
                window.changeTextColor(window.systemColor());
                window.drawText(item.name, x, y, 160);
                window.resetTextColor();
                window.drawText(item.value + '(' + item.bonus + ')', x + 260, y, 60, 'right');
            },
            columnCoordinates: [48, 432],
            items: [
                {
                    item: Window_Competences.BASE_SKILLS_TITLE,
                    x: 0,
                    drawItem: ({ window, item, x, y }) => {
                        window.resetTextColor();
                        window.drawText(item, x, y, window._width, 'center');
                    }
                },
                ...TEW.BASE_COMPS.map(comp => ({
                    name: comp[0],
                    value: selectedActor.comp(comp[0]),
                    bonus: selectedActor.compPlus(comp[0]),
                    stat: comp.stat
                })),
                {
                    drawItem: ({ window, y }) => {
                        window.drawHorzLine(y);
                    }
                },
                {
                    item: Window_Competences.ADVANCED_SKILLS_TITLE,
                    x: 0,
                    drawItem: ({ window, item, x, y }) => {
                        window.resetTextColor();
                        window.drawText(item, x, y, window._width, 'center');
                    }
                },
                ...TEW.ADVANCED_COMPS
                    .filter(comp => selectedActor.hasComp(comp[0]))
                    .map(comp => ({
                        name: comp[0],
                        value: selectedActor.comp(comp[0]),
                        bonus: selectedActor.compPlus(comp[0]),
                        stat: comp.stat
                    }))
            ]
        }
    );
    this.setHelpWindow(new Window_Help(1));
    this._helpWindow.hide();
}

Window_Competences.prototype.processOk = function() {
    this.playOkSound();
    this.updateInputData();
    this.setHelpWindowItem({
        description: Window_Competences.STAT_BASE +
            TEW.STATS_VERBOSE[TEW.STATS[this._items[this._index].item.stat]]
    });
    this._helpWindow.show();
};


//-----------------------------------------------------------------------------
// Window_Talents
//
// Displays talents in the status menu

function Window_Talents() {
    this.initialize.apply(this, arguments);
}

Window_Talents.prototype = Object.create(Window_Scrollable.prototype);
Window_Talents.prototype.constructor = Window_Talents;

Window_Talents.prototype.initialize = function() {
    const selectedActor = $gameActors[$gameParty._menuActorId];
    Window_Scrollable.prototype.initialize.call(this,
        0, STATUS_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth, Graphics.boxHeight - STATUS_WINDOW_TOPBAR_HEIGHT,
        {
            drawItem: ({ window, item, x, y }) => {
                window.changeTextColor(window.systemColor());
                window.drawText(item, x, y, 300);
            },
            columnCoordinates: [48, 432],
            items: Object.keys(selectedActor.talents)
        }
    );
}

Window_Talents.prototype.processOk = function() {
    this.playOkSound();
    this.updateInputData();
    // display description
};
