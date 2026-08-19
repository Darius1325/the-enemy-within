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
import Window_StatusStats from "./stats/Window_StatusStats";
import Window_StatusTalents from "./talents/Window_StatusTalents";
import Window_StatusSpellCommand from "./spells/Window_StatusSpellCommand";
import Window_StatusSpellDetails from "./spells/Window_StatusSpellDetails";
import { Sprite } from "../../../rmmv/core/Sprite";
import Window_StatusTalentDetails from "./talents/Window_StatusTalentDetails";
import Window_StatusCompetenceDetails from "./competences/Window_StatusCompetenceDetails";
import TEW from "../../_types/tew";
import Game_Levelling from "./Game_Levelling";
import Window_StatusLevellingSummary from "./Window_StatusLevellingSummary";
import Window_StatusLevellingConfirm from "./Window_StatusLevellingConfirm";

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

    this.activateStatusStats(); // Desactivate all the windows, except the stats one
    this.refreshActor();
};

// Watching the levelling mode input key
Scene_Status.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
    this.updateLevellingToggle();
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
    this._levelling.setActor(actor);
    this._statsWindow.setActor(actor);
    this._competencesWindow.setActor(actor);
    this._talentsWindow.setActor(actor);
    this._spellsWindow.setActor(actor);
};

// Switching actor from the topbar
Scene_Status.prototype.onActorChange = function() {
    this.refreshActor();
    this._commandWindow.refresh();
    this._commandWindow.activate();
};

// Actors cannot be switched while advances are being bought, to avoid losing them silently
Scene_Status.prototype.onNextActor = function() {
    if (this.isLevellingMode()) {
        this._commandWindow.activate();
    } else {
        this.nextActor();
    }
};

Scene_Status.prototype.onPreviousActor = function() {
    if (this.isLevellingMode()) {
        this._commandWindow.activate();
    } else {
        this.previousActor();
    }
};

// Leaving the menu is treated as leaving levelling mode
Scene_Status.prototype.onStatusCancel = function() {
    if (this.isLevellingMode()) {
        this.requestLevellingExit(true);
    } else {
        this.popScene();
    }
};


// Creating the commands for this scene
Scene_Status.prototype.createCommandWindow = function() {
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
Scene_Status.prototype.createStatsWindow = function() {
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
Scene_Status.prototype.activateStatusStats = function(index:number = 0) {
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
Scene_Status.prototype.createCompsWindow = function() {
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

Scene_Status.prototype.createCompDetailsWindow = function() {
    this._competenceDetailsWindow = new Window_StatusCompetenceDetails();
    this._competenceDetailsWindow.hide();
    this.addWindow(this._competenceDetailsWindow);
};

// Showing the details of the selected competence
Scene_Status.prototype.showCompetenceDetails = function() {
    const selectedComp = this._competencesWindow.competence();
    if (selectedComp) {
        this._competenceDetailsWindow.setCompetence(selectedComp[1]);
    }
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
// === //
// #region ====== Levelling mode === //
// Creating the session holding every advance until it is confirmed
Scene_Status.prototype.createLevelling = function() {
    this._levelling = new Game_Levelling();
    this._levellingMode = false;
    this._levellingPopOnResolve = false;
    this._levellingReturnWindow = null;
};

// Creating the confirmation prompt, hidden until levelling mode is left with pending advances
Scene_Status.prototype.createLevellingWindows = function() {
    this._levellingSummaryWindow = new Window_StatusLevellingSummary();
    this._levellingSummaryWindow.setLevelling(this._levelling);
    this._levellingSummaryWindow.hide();
    this.addWindow(this._levellingSummaryWindow);

    this._levellingConfirmWindow = new Window_StatusLevellingConfirm();
    this._levellingConfirmWindow.setSummaryWindow(this._levellingSummaryWindow);
    this._levellingConfirmWindow.setHandler('levelling_confirm', this.onLevellingConfirm.bind(this));
    this._levellingConfirmWindow.setHandler('levelling_discard', this.onLevellingDiscard.bind(this));
    this._levellingConfirmWindow.setHandler('levelling_back', this.onLevellingBack.bind(this));
    this._levellingConfirmWindow.setHandler('cancel', this.onLevellingBack.bind(this));
    this._levellingConfirmWindow.deactivate();
    this._levellingConfirmWindow.hide();
    this.addWindow(this._levellingConfirmWindow);
};

Scene_Status.prototype.isLevellingMode = function() {
    return this._levellingMode;
};

// Whether the confirmation prompt is currently displayed
Scene_Status.prototype.isLevellingPrompt = function() {
    return this._levellingConfirmWindow && this._levellingConfirmWindow.visible;
};

// Toggling levelling mode with the dedicated input key
Scene_Status.prototype.updateLevellingToggle = function() {
    if (this.isLevellingPrompt()) {
        return;
    }
    if (Input.isTriggered(TEW.MENU.LEVEL_UP_KEY)) {
        if (this.isLevellingMode()) {
            this.requestLevellingExit(false);
        } else {
            this.enterLevellingMode();
        }
    }
};

Scene_Status.prototype.enterLevellingMode = function() {
    this._levellingMode = true;
    this._levelling.clear();
    this.refreshLevellingWindows();
};

Scene_Status.prototype.exitLevellingMode = function() {
    this._levellingMode = false;
    this._levelling.clear();
    this.refreshLevellingWindows();
};

// Propagating the mode and the experience counters to every window displaying them
Scene_Status.prototype.refreshLevellingWindows = function() {
    this._commandWindow.setLevellingMode(this._levellingMode);
    this._commandWindow.refresh();
    this._competencesWindow.setLevellingMode(this._levellingMode);
    this._competencesWindow.refresh();
    this._statsWindow.setLevellingMode(this._levellingMode);
    this._statsWindow.refresh();
};

/**
 * Leaving levelling mode. Exit is instantaneous with nothing spent, and prompts otherwise.
 * @param popOnResolve whether the whole menu should be left once the prompt is resolved
 */
Scene_Status.prototype.requestLevellingExit = function(popOnResolve: boolean) {
    if (!this._levelling.hasAdvances()) {
        this.exitLevellingMode();
        if (popOnResolve) {
            this.popScene();
        }
        return;
    }
    this._levellingPopOnResolve = popOnResolve;
    this.openLevellingPrompt();
};

// Finding the window currently reading inputs, to give it back the focus later on
Scene_Status.prototype.activeStatusWindow = function() {
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

Scene_Status.prototype.openLevellingPrompt = function() {
    this._levellingReturnWindow = this.activeStatusWindow();
    if (this._levellingReturnWindow) {
        this._levellingReturnWindow.deactivate();
    }
    this._levellingSummaryWindow.refreshAdvances();
    this._levellingSummaryWindow.show();
    this._levellingConfirmWindow.show();
    this._levellingConfirmWindow.select(0);
    this._levellingConfirmWindow.activate();
};

Scene_Status.prototype.closeLevellingPrompt = function() {
    this._levellingConfirmWindow.deactivate();
    this._levellingConfirmWindow.hide();
    this._levellingSummaryWindow.hide();
};

// Giving the focus back to whichever window was reading inputs before the prompt
Scene_Status.prototype.restoreLevellingFocus = function() {
    const window = this._levellingReturnWindow || this._commandWindow;
    this._levellingReturnWindow = null;
    window.activate();
};

// Leaving levelling mode once the prompt is resolved, and the menu if it was being left
Scene_Status.prototype.finishLevellingExit = function() {
    this.exitLevellingMode();
    if (this._levellingPopOnResolve) {
        this._levellingPopOnResolve = false;
        this._levellingReturnWindow = null;
        this.popScene();
    } else {
        this.restoreLevellingFocus();
    }
};

Scene_Status.prototype.onLevellingConfirm = function() {
    this._levelling.apply();
    this.closeLevellingPrompt();
    this.finishLevellingExit();
};

Scene_Status.prototype.onLevellingDiscard = function() {
    this.closeLevellingPrompt();
    this.finishLevellingExit();
};

// Going back to levelling mode, keeping every pending advance
Scene_Status.prototype.onLevellingBack = function() {
    this._levellingPopOnResolve = false;
    this.closeLevellingPrompt();
    this.restoreLevellingFocus();
};
// #endregion === Levelling mode === //
