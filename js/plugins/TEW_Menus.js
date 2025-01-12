
var Imported = Imported || {};
Imported.TEW_Menus = true;
var TEW = TEW || {};

/*
* This plugin contains windows for the custom status menu.
*/

TEW.commandsNames = {
    26 : "Stats",
    27 : "Skills",
    28 : "Talents",
    29 : "Spells",
}


// TextManager
// Override commands
TextManager.command = function(commandId) {
    if (commandId <= 25) {
        return $dataSystem.terms.commands[commandId] || '';
    } else {
        return TEW.commandsNames[commandId] || '';
    }
};


// Windows

const Window_StatusCommand_Height = 70;

// The window for selecting a command on the status screen.
// Adding new Commands Entries

Object.defineProperties(TextManager, {
    status_stats :          TextManager.getter('command', 26),
    status_comps :          TextManager.getter('command', 27),
    status_talents :        TextManager.getter('command', 28),
    status_spells :         TextManager.getter('command', 29)
});


//-----------------------------------------------------------------------------
// Window_Status (override)
//
// Character info, stats, skills, talents and spells window

Window_Status.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0, Window_StatusCommand_Height,
        Graphics.boxWidth, Graphics.boxHeight - Window_StatusCommand_Height);
    this._actor = null;
    this._tab = 'stats';
    this.refresh();
    this.activate();
};

Window_Status.prototype.switchTab = function(tab) {
    this._tab = tab;
    this.refresh();
};

Window_Status.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
        if (this._tab === 'stats') {
            this.drawStatsTab();
        }
        else if (this._tab === 'comps') {
            this.drawCompetences(Window_StatusCommand_Height);
        }
    }
};

Window_Status.prototype.drawStatsTab = function() {
    var lineHeight = this.lineHeight();
    this.drawCharacterInfo(1);
    this.drawHorzLine(lineHeight * 7);
    this.drawStats(lineHeight * 8);
};

Window_Status.prototype.drawCharacterInfo = function(y) {
    var lineHeight = this.lineHeight();
    this.drawActorName(this._actor, 6, y);
    this.drawActorClass(this._actor, 192, y);
    this.drawHorzLine(y + lineHeight);
    this.drawActorFace(this._actor, 12, y + lineHeight * 2);
    this.drawBasicInfo(204, y + lineHeight * 2);
};

Window_Status.prototype.drawStats = function(y) {
    this.drawParameters(48, y, 0);
    this.drawParameters(432, y, 5);
};

Window_Status.prototype.drawParameters = function(x, y, offset) {
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 5; i++) {
        var paramId = i + offset + 1;
        var y2 = y + lineHeight * i;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(paramId), x, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
    }
};

Window_Status.prototype.drawCompetences = function(y) {
    this.drawBaseComps(y);
};

Window_Status.prototype.drawBaseComps = function (y) {
    const halfPoint = TEW.baseComps.length / 2;
    var lineHeight = this.lineHeight();
    const x1 = 48;
    const x2 = 432;
    for (var i = 0; i < halfPoint; i++) {
        var y2 = y + lineHeight * i;
        var comp = TEW.baseComps[i]; // [<internal name>, {<competence data>}]
        this.changeTextColor(this.systemColor());
        this.drawText(comp[1].name, x1, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.comp(comp[0]) + '(' + this._actor.compPlus(comp[0]) + ')', x1 + 160, y2, 60, 'right');
    }
    for (var i = halfPoint; i < TEW.baseComps.length; i++) {
        var y2 = y + lineHeight * (i - halfPoint);
        var comp = TEW.baseComps[i]; // [<internal name>, {<competence data>}]
        this.changeTextColor(this.systemColor());
        this.drawText(comp[1].name, x2, y2, 160);
        this.resetTextColor();
        this.drawText(this._actor.comp(comp[0]) + '(' + this._actor.compPlus(comp[0]) + ')', x2 + 160, y2, 60, 'right');
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
    this._windowHeight = Window_StatusCommand_Height;
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
    this.addCommand(TextManager.status_stats, 'status_stats');
    this.addCommand(TextManager.status_comps, 'status_comps');
    this.addCommand(TextManager.status_talents, 'status_talents');
    this.addCommand(TextManager.status_spells, 'status_spells');
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
