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
import Window_StatusCompetences from "./competences/Window_StatusCompetences";
import Window_StatusSpells from "./spells/Window_StatusSpells";
import Window_StatusStats from "./Window_StatusStats";
import Window_StatusTalents from "./talents/Window_StatusTalents";
import Window_StatusSpellCommand from "./spells/Window_StatusSpellCommand";
import Window_StatusSpellDetails from "./spells/Window_StatusSpellDetails";
import { Sprite } from "../../../rmmv/core/Sprite";
import Window_StatusTalentDetails from "./talents/Window_StatusTalentDetails";
import Window_StatusCompetenceDetails from "./competences/Window_StatusCompetenceDetails";

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
    this.addFullscreenBackground();

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

    this.activateStatusStats(); // Desactivate all the windows, except the stats one
    this.refreshActor();
};

Scene_Status.prototype.addFullscreenBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem('bg_fullscreen'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

// #region ====== All windows handling === //
// Hiding all the windows
Scene_Status.prototype.hideAllWindows = function() {
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
        this._competenceDetailsWindow.show();
        this._competenceDetailsWindow.refresh();
    } else if (this._commandWindow.index() === this.TALENTS_WINDOW_INDEX){
        this._talentsWindow.show();
        this._talentsWindow.refresh();
        this._talentDetailsWindow.show();
        this._talentDetailsWindow.refresh();
    } else if (this._commandWindow.index() === this.SPELLS_WINDOW_INDEX){
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
Scene_Status.prototype.refreshActor = function() {
    var actor = this.actor();
    this._statsWindow.setActor(actor);
    this._competencesWindow.setActor(actor);
    this._talentsWindow.setActor(actor);
    this._spellsWindow.setActor(actor);
};


// Creating the commands for this scene
Scene_Status.prototype.createCommandWindow = function() {
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
    this._competencesWindow.setHandler('show_details', () => {
        const selectedComp = this._competencesWindow.competence();
        if (selectedComp) {
            this._competenceDetailsWindow.setCompetence(selectedComp[1]);
        }
    });
    this._competencesWindow.hide();
    this.addWindow(this._competencesWindow);
};

Scene_Status.prototype.createCompDetailsWindow = function() {
    this._competenceDetailsWindow = new Window_StatusCompetenceDetails();
    this._competenceDetailsWindow.hide();
    this.addWindow(this._competenceDetailsWindow);
};

// Activating the competences window
Scene_Status.prototype.activateStatusComps = function(index:number = 0) {
    this.hideAllWindows()
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
Scene_Status.prototype.createTalentDetailsWindow = function(){
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
Scene_Status.prototype.activateStatusTalents = function(index:number = 0) {
    const nbTalents = this._talentsWindow._talents.length;
    this.hideAllWindows();
    this._talentsWindow.show();
    this._talentDetailsWindow.show();
    if (nbTalents > 0) {
        this._commandWindow.deactivate();
        this._talentsWindow.activate();
        this._talentsWindow.select(index);
    } else {
        this._commandWindow.activate();
        this._talentsWindow.deselect();
        this._talentDetailsWindow.empty();
        this._talentDetailsWindow.clear();
    }
    this._talentsWindow.refresh();
};

// Showing the talent description
Scene_Status.prototype.showTalentDetails = function() {
    const talent = this._talentsWindow.talentFromIndex(this._talentsWindow.index());
    this._talentDetailsWindow._talent = talent;
    this._talentDetailsWindow.refresh();
};
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
};

Scene_Status.prototype.createSpellDetailsWindow = function() {
    this._spellsDetailsWindow = new Window_StatusSpellDetails();
    this._spellsWindow.setHandler('show_spell_details', () => {
        this.showSpellDetails();
    });
    this._spellsDetailsWindow.hide();
    this.addWindow(this._spellsDetailsWindow);
};

// Activating the spells window
Scene_Status.prototype.activateStatusSpells = function(index = 0) {
    const nbSpells = this._spellsWindow._maxItems;
    this.hideAllWindows();
    this._spellsWindow.show();
    this._spellsDetailsWindow.show();
    this._spellsCommandWindow.show();
    this._spellsCommandWindow.deselect();
    if (nbSpells > 0){
        this._commandWindow.deactivate();
        this._spellsWindow.activate();
        this._spellsWindow.select(index);
        this._spellsCommandWindow.refresh();
    } else {
        this._commandWindow.activate();
        this._spellsWindow.deselect();
        this._spellsDetailsWindow.empty();
        this._spellsDetailsWindow.clear();
        this._spellsCommandWindow.clear();
    }
    this._spellsWindow.refresh();
};

Scene_Status.prototype.showSpellDetails = function() {
    const spell = this._spellsWindow.spellFromIndex(this._spellsWindow.index());
    this._spellsDetailsWindow._spell = spell;
    this._spellsDetailsWindow.refresh();
};

// Casting a spell
Scene_Status.prototype.castSpell = function() {
    this._spellsCommandWindow.callHandler('cancel');
};

// Activating the command window for spells
Scene_Status.prototype.activateCommandWindowSpells = function() {
    if (this._spellsWindow.isOpenAndActive() && this._spellsWindow.index() >= 0){
        this._spellsWindow.deactivate();
        this._spellsCommandWindow.show();
        this._spellsCommandWindow.activate();
        this._spellsCommandWindow.select(0);
    }
};
// #endregion === Spells windows === //
