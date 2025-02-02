
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
    this._maxItems = 0;
    this.activate();
    this.refresh();
};

Window_Status.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

Window_Status.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};

Window_Status.prototype.maxItems = function() {
    return this._maxItems;
};


// Window_StatusStats

function Window_StatusStats() {
    this.initialize.apply(this, arguments);
}

Window_StatusStats.prototype = Object.create(Window_Status.prototype);
Window_StatusStats.prototype.constructor = Window_StatusStats;

Window_StatusStats.prototype.initialize = function() {
    Window_Status.prototype.initialize.call(this);
};

Window_StatusStats.prototype.drawAllItems = function() {
    this.drawCharacterInfo(1);
    this.drawHorzLine(TEW.MENU_LINE_HEIGHT * 7);
    this.drawStats(TEW.MENU_LINE_HEIGHT * 8);
};

Window_StatusStats.prototype.drawCharacterInfo = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + TEW.MENU_LINE_HEIGHT);
    this.drawActorFace(this._actor, 12, y + TEW.MENU_LINE_HEIGHT * 2);
    this.drawBasicInfo(204, y + TEW.MENU_LINE_HEIGHT * 2);
};

Window_StatusStats.prototype.drawStats = function(y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};

Window_StatusStats.prototype.drawParameters = function(x, y, offset) {
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + TEW.MENU_LINE_HEIGHT * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};


// Window_StatusCompetences

function Window_StatusCompetences() {
    this.initialize.apply(this, arguments);
}

Window_StatusCompetences.prototype = Object.create(Window_Status.prototype);
Window_StatusCompetences.prototype.constructor = Window_StatusCompetences;

Window_StatusCompetences.prototype.initialize = function() {
    Window_Status.prototype.initialize.call(this);
};

Window_StatusCompetences.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._advancedCompsList = TEW.ADVANCED_COMPS.filter(comp => actor.hasComp(comp[0]));
        this._maxItems = TEW.BASE_COMPS.length + this._advancedCompsList.length;
        this.refresh();
    }
};

Window_StatusCompetences.prototype.maxCols = () => 2;

Window_StatusCompetences.prototype.drawAllItems = function() {
    console.log("drawAllItems");
    console.log(this.topIndex(), this.maxPageItems(), this.maxItems());
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

Window_StatusCompetences.prototype.drawItem = function(index) {
    console.log("drawItem");
    const normalizedIndex = index - this.topIndex();
    const x = index % 2 === 0 ? 48 : 432;
    const y = Math.floor(normalizedIndex / 2) * TEW.MENU_LINE_HEIGHT;

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
    this.createCommandWindow();
    this.createStatsWindow();
    this.createCompsWindow();
    this.createTalentsWindow();
    this.createSpellWindow();
    this.refreshActor();
};

Scene_Status.prototype.refreshActor = function() {
    var actor = this.actor();
    this._statsWindow.setActor(actor);
    this._competencesWindow.setActor(actor);
    // this._talentsWindow.setActor(actor);
    // this._spellsWindow.setActor(actor);
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

// Creating the stats Window for the scene
Scene_Status.prototype.createStatsWindow = function(){
    this._statsWindow = new Window_StatusStats();
    this._statsWindow.reserveFaceImages();
    this.addWindow(this._statsWindow);
}

// Creating the competences Window for the scene
Scene_Status.prototype.createCompsWindow = function(){
    this._competencesWindow = new Window_StatusCompetences();
    this._competencesWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._competencesWindow.deselect();
    });
    this._competencesWindow.hide();
    this.addWindow(this._competencesWindow);
}

// Creating the talents Window for the scene
Scene_Status.prototype.createTalentsWindow = function(){
    
}

// Creating the spells Window for the scene
Scene_Status.prototype.createSpellWindow = function(){
    
}

Scene_Status.prototype.displayStatusStats = function() {
    this._competencesWindow.hide();
    this._statsWindow.show();
    this._commandWindow.activate();
    this._statsWindow.refresh();
};

Scene_Status.prototype.displayStatusComps = function() {
    this._statsWindow.hide();
    this._competencesWindow.show();
    this._commandWindow.deactivate();
    this._competencesWindow.activate();
    this._competencesWindow.select(0);
    this._competencesWindow.refresh();
};

Scene_Status.prototype.displayStatusTalents = function() {
    this._statsWindow.hide();
    this._competencesWindow.hide();
    this._commandWindow.activate();
};

Scene_Status.prototype.displayStatusSpells = function() {
    this._statsWindow.hide();
    this._competencesWindow.hide();
    this._commandWindow.activate();
};
