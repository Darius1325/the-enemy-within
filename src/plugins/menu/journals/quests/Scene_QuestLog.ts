// $PluginCompiler TEW_Menus.js 2

import { Sprite } from "../../../../rmmv/core/Sprite";
import Window_QuestDetails from "./Window_QuestDetails";
import Window_QuestList from "./Window_QuestList";

// $StartCompilation

function Scene_QuestLog() {
    this.initialize.apply(this, arguments);
}

export default Scene_QuestLog.prototype = Object.create(Scene_Base.prototype);
Scene_QuestLog.prototype.constructor = Scene_QuestLog;

Scene_QuestLog.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
    this.fetchQuests();
};

Scene_QuestLog.prototype.fetchQuests = function() {
    this._quests = [];
    for (let quest of TEW.DATABASE.QUESTS) {
        const currentStep = $gameVariables.value(quest.gameVariableId);
        if (currentStep === 1000) { // quest resolved
            this._quests.push(quest);
        } else if (currentStep > 0) { // quest in progress
            this._quests.push({
                title: quest.title,
                description: quest.description,
                objective: quest.objective,
                steps: quest.steps.slice(0, currentStep),
                expandable: quest.steps.length > 0
            });
        }
    }
};

Scene_QuestLog.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createQuestDetails();
    this.createQuestList();
};

Scene_QuestLog.prototype.addFullscreenBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem('bg_questlog'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

Scene_QuestLog.prototype.createQuestDetails = function() {
    this._windowQuestDetails = new Window_QuestDetails();
    this.addWindow(this._windowQuestDetails);
    this._windowQuestDetails.show();
};

Scene_QuestLog.prototype.createQuestList = function() {
    this._windowQuestList = new Window_QuestList(this._quests);
    this._windowQuestList.setHandler('cancel', this.popScene.bind(this));
    this._windowQuestList.setHandler('show_quest_details', () => {
        this._windowQuestDetails._text = this._windowQuestList.selectedQuestDetails();
        this._windowQuestDetails.refresh();
    });
    this.addWindow(this._windowQuestList);
    this._windowQuestList.show();
    this._windowQuestList.activate();
    this._windowQuestList.select(0);
};
