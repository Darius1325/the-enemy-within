// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Scene_Status.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Scene_Status class, which is responsible for displaying the status screen in the game. It includes methods for creating the command window, stats window, competences window, talents window, and spells window. The class also handles user input and navigation between different windows within the status screen.

// ----------------------
// Imports
// ----------------------

import Window_StatusCommand from "./Window_StatusCommand";
import Window_StatusCompetences from "./Window_StatusCompetences";
import Window_StatusSpells from "./Window_StatusSpells";
import Window_StatusStats from "./Window_StatusStats";
import Window_StatusTalents from "./Window_StatusTalents";
import Window_StatusTalentDescription from "./Window_StatusTalentDescription";

// ----------------------
// $StartCompilation
// ----------------------

Scene_Status.prototype.STATS_WINDOW_INDEX = 0;
Scene_Status.prototype.COMPS_WINDOW_INDEX = 1;
Scene_Status.prototype.TALENTS_WINDOW_INDEX = 2;
Scene_Status.prototype.SPELLS_WINDOW_INDEX = 3;

// Creating the scene
Scene_Status.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCommandWindow();
    this.createStatsWindow();
    this.createCompsWindow();
    this.createTalentsWindow();
    this.createTalentDescriptionWindow();
    this.createSpellWindow();
    this.createHelpWindow();
    this._helpWindow.hide();
    this._competencesWindow.setHelpWindow(this._helpWindow);
    this._talentsWindow.setHelpWindow(this._helpWindow);
    this._spellsWindow.setHelpWindow(this._helpWindow);
    this.activateStatusStats(); // Desactivate all the windows, except the stats one
    this.refreshActor();
};

// Refreshing the actor
Scene_Status.prototype.refreshActor = function() {
    var actor = this.actor();
    this._statsWindow.setActor(actor);
    this._competencesWindow.setActor(actor);
    this._talentsWindow.setActor(actor);
    this._spellsWindow.setActor(actor);
};

// Creating the commands for this scene
Scene_Status.prototype.createCommandWindow = function() {
    var wx = 0;
    var wy = 0;
    var ww = Graphics.boxWidth;
    this._commandWindow = new Window_StatusCommand(wx, wy, ww);
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

// Creating the stats Window for the scene
Scene_Status.prototype.createStatsWindow = function() {
    this._statsWindow = new Window_StatusStats();
    this._statsWindow.reserveFaceImages();
    this.addWindow(this._statsWindow);
};

// Creating the competences Window for the scene
Scene_Status.prototype.createCompsWindow = function() {
    this._competencesWindow = new Window_StatusCompetences();
    this._competencesWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._competencesWindow.deselect();
    });
    this._competencesWindow.hide();
    this.addWindow(this._competencesWindow);
};

// Creating the talents Window for the scene
Scene_Status.prototype.createTalentsWindow = function() {
    this._talentsWindow = new Window_StatusTalents();
    this._talentsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._talentsWindow.deselect();
    });
    this._talentsWindow.hide();
    this.addWindow(this._talentsWindow);
};

// Creating the items details Window for the scene
Scene_Status.prototype.createTalentDescriptionWindow = function(){
    this._talentDescriptionWindow = new Window_StatusTalentDescription();
    this._talentsWindow.setHandler('show_talent_description', () => {
        this.showTalentDescription();
    });
    this._talentDescriptionWindow.hide();
    this.addWindow(this._talentDescriptionWindow);
};

// Creating the spells Window for the scene
Scene_Status.prototype.createSpellWindow = function() {
    this._spellsWindow = new Window_StatusSpells();
    this._spellsWindow.setHandler('cancel', () => {
        this._commandWindow.activate();
        this._spellsWindow.deselect();
    });
    this._spellsWindow.hide();
    this.addWindow(this._spellsWindow);
};

// Hiding all the windows
Scene_Status.prototype.hideAllWindows = function() {
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
};

// Showing the corresponding window according to the current command window index
Scene_Status.prototype.displayWindow = function() {
    // hide all
    this.hideAllWindows();

    // Changing window
    if (this._commandWindow.index() === this.STATS_WINDOW_INDEX){
        this._statsWindow.show();
        this._statsWindow.refresh();
    } else if (this._commandWindow.index() === this.COMPS_WINDOW_INDEX){
        this._competencesWindow.show();
        this._competencesWindow.refresh();
    } else if (this._commandWindow.index() === this.TALENTS_WINDOW_INDEX){
        this._talentsWindow.show();
        this._talentsWindow.refresh();
        this._talentDescriptionWindow.show();
        this._talentDescriptionWindow.refresh();
    } else if (this._commandWindow.index() === this.SPELLS_WINDOW_INDEX){
        this._spellsWindow.show();
        this._spellsWindow.refresh();
    }
};

// Activating the stats window
Scene_Status.prototype.activateStatusStats = function() {
    this.hideAllWindows();
    this._statsWindow.show();
    this._commandWindow.activate();
    this._statsWindow.refresh();
};

// Activating the competences window
Scene_Status.prototype.activateStatusComps = function(index:number = 0) {
    this.hideAllWindows()
    this._competencesWindow.show();
    this._commandWindow.deactivate();
    this._competencesWindow.activate();
    this._competencesWindow.select(index);
    this._competencesWindow.refresh();
};

// Activating the talents window
Scene_Status.prototype.activateStatusTalents = function(index:number = 0) {
    this.hideAllWindows();
    this._talentsWindow.show();
    this._talentDescriptionWindow.show();
    this._commandWindow.deactivate();
    this._talentsWindow.activate();
    this._talentsWindow.select(index);
    this._talentsWindow.refresh();
};

// Activating the spells window
Scene_Status.prototype.activateStatusSpells = function() {
    this.hideAllWindows();
    this._spellsWindow.show();
    this._commandWindow.deactivate();
    this._spellsWindow.activate();
    this._helpWindow.move(0, 70, Graphics.width, Graphics.height - 70);
    this._spellsWindow.select(0);
    this._spellsWindow.refresh();
};

// Showing the talent description
Scene_Status.prototype.showTalentDescription = function(){
    const talent = this._talentsWindow.talentFromIndex(this._talentsWindow.index());
    this._talentDescriptionWindow._talent = talent;
    this._talentDescriptionWindow.refresh();
}
