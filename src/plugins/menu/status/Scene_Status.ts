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
import Window_StatusSpellCommand from "./Window_StatusSpellCommand";
import Window_StatusSpellDetails from "./Window_StatusSpellDetails";

// ----------------------
// $StartCompilation
// ----------------------

Scene_Status.prototype.STATS_WINDOW_INDEX = 0;
Scene_Status.prototype.COMPS_WINDOW_INDEX = 1;
Scene_Status.prototype.TALENTS_WINDOW_INDEX = 2;
Scene_Status.prototype.SPELLS_WINDOW_INDEX = 3;

// Creating the scene
Scene_Status.prototype.create = function() {

    // Init
    Scene_MenuBase.prototype.create.call(this);

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
// #region ====== All windows handling === //
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
    this._spellsCommandWindow.hide();
    this._spellsCommandWindow.deactivate();
    this._spellsDetailsWindow.hide();
    this._spellsDetailsWindow.deactivate();
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
        this._spellsDetailsWindow.show();
        this._spellsCommandWindow.show();
        this._spellsWindow.refresh();
        this._spellsDetailsWindow.refresh();
        this._spellsCommandWindow.refresh();
    }
};
// #endregion === All windows handling === //
// #region ====== Actor and command Window === //
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
// #endregion === Actor and command Window === //
// === //
// #region ====== Stats window === //
// Creating the stats Window for the scene
Scene_Status.prototype.createStatsWindow = function() {
    this._statsWindow = new Window_StatusStats();
    this._statsWindow.reserveFaceImages();
    this.addWindow(this._statsWindow);
};

// Activating the stats window
Scene_Status.prototype.activateStatusStats = function() {
    this.hideAllWindows();
    this._statsWindow.show();
    this._commandWindow.activate();
    this._statsWindow.refresh();
};
// #endregion === Stats window === //
// === //
// #region ====== Competences window === //
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

// Activating the competences window
Scene_Status.prototype.activateStatusComps = function(index:number = 0) {
    this.hideAllWindows()
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

// Showing the talent description
Scene_Status.prototype.showTalentDescription = function(){
    const talent = this._talentsWindow.talentFromIndex(this._talentsWindow.index());
    this._talentDescriptionWindow._talent = talent;
    this._talentDescriptionWindow.refresh();
}
// #endregion === Talents windows === //
// === //
// #region ====== Spells windows === //
// Creating the spells Window for the scene
Scene_Status.prototype.createSpellsWindow = function() {
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

Scene_Status.prototype.createSpellCommandWindow = function() {
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

}

Scene_Status.prototype.createSpellDetailsWindow = function() {
    this._spellsDetailsWindow = new Window_StatusSpellDetails(
        this._spellsCommandWindow.fittingHeight(this._spellsCommandWindow._actionsNumber)
    );
    this._spellsWindow.setHandler('show_spell_details', () => {
        this.showSpellDetails();
    });
    this._spellsDetailsWindow.hide();
    this.addWindow(this._spellsDetailsWindow);
}

// Activating the spells window
Scene_Status.prototype.activateStatusSpells = function(index = 0) {
    this.hideAllWindows();
    this._spellsWindow.show();
    this._commandWindow.deactivate();
    this._spellsWindow.activate();
    this._spellsDetailsWindow.show();
    this._spellsCommandWindow.show();
    this._spellsWindow.select(index);
    this._spellsWindow.refresh();
};

Scene_Status.prototype.showSpellDetails = function() {
    const spell = this._spellsWindow.spellFromIndex(this._spellsWindow.index());
    this._spellsDetailsWindow._spell = spell;
    this._spellsDetailsWindow.refresh();
}

// Casting a spell
Scene_Status.prototype.castSpell = function() {
    this._spellsCommandWindow.callHandler('cancel');
}

// Activating the command window for spells
Scene_Status.prototype.activateCommandWindowSpells = function() {
    if (this._spellsWindow.isOpenAndActive() && this._spellsWindow.index() >= 0){
        this._spellsWindow.deactivate();
        this._spellsCommandWindow.show();
        this._spellsCommandWindow.activate();
        this._spellsCommandWindow.select(0);
    }
}
// #endregion === Spells windows === //
