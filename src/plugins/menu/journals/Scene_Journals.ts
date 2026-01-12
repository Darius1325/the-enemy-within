// $PluginCompiler TEW_Menus.js 2

import Sprite_Selector from "../../combat/sprite/Sprite_Selector";
import Scene_QuestLog from "./quests/Scene_QuestLog";
import Window_Journals from "./Window_Journals";

// $StartCompilation

function Scene_Journals() {
    this.initialize.apply(this, arguments);
}

export default Scene_Journals.prototype = Object.create(Scene_Base.prototype);
Scene_Journals.prototype.constructor = Scene_Journals;

Scene_Journals.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
};

Scene_Journals.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.createJournalsCommands();
};

Scene_Journals.prototype.createJournalsCommands = function() {
    this._windowJournals = new Window_Journals();
    this._windowJournals.setHandler('cancel', this.popScene.bind(this));
    this._windowJournals.setHandler('ok', this.openJournal.bind(this));
    this.addWindow(this._windowJournals);
    this._windowJournals.show();
    this._windowJournals.activate();
    this._windowJournals.select(0);
};

Scene_Journals.prototype.openJournal = function() {
    const selectedJournal = this._windowJournals.item();
    switch (selectedJournal) {
        case "journal_quest_log":
            SceneManager.push(Scene_QuestLog);
            break;
        case "journal_documents":
            break;
        case "journal_characters":
            break;
        case "journal_glossary":
            break;
        case "journal_tutorials":
            break;
    } 
};
