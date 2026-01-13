// $PluginCompiler TEW_Menus.js

import { Quest } from "../../../_types/quest";
import TEW from "../../../_types/tew";
import Window_JournalPage from "../Window_JournalPage";

// $StartCompilation

function Window_QuestList() {
    this.initialize.apply(this, arguments);
}

export default Window_QuestList.prototype = Object.create(Window_JournalPage.prototype);
Window_QuestList.prototype.constructor = Window_QuestList;

Window_QuestList.prototype.initialize = function(quests: Quest[]) {
    Window_JournalPage.prototype.initialize.call(this, true);

    this._quests = quests;
    this._collapsedState = this._quests.map(quest => quest.title); // display when no quest is expanded
    this._items = this._collapsedState.slice();
    this._expandedIndex = undefined;
    
    this.refresh();
};

// Add selected quest steps to display under the main entry with an offset
Window_QuestList.prototype.expandSelectedQuest = function() {
    const index: number = this.index();
    let isQuestSelected = true;
    let questIndex = index;
    if (this._expandedIndex !== undefined) {
        const questCount = this._collapsedState.length;
        const collapsibleCount = this._items.length - questCount;
        const indexBeforeExpanded = index <= this._expandedIndex;
        questIndex = indexBeforeExpanded ? index : index - collapsibleCount;
        isQuestSelected = indexBeforeExpanded || (index > this._expandedIndex + collapsibleCount); 
    }
    if (isQuestSelected && this._quests[questIndex].expandable) {
        this._items = this._collapsedState.addItemsAt(index + 1, this._quests[questIndex].steps.map(
            (step: { title: string }) => "    " + step.title)
        );
        this._expandedIndex = questIndex;
        this.select(questIndex);
    }
    this.refresh();
};

// Drawing one item
// TODO add arrow icon for expandable quests
Window_QuestList.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;
    this.drawText(this._items[index], 0, y, this._width, 'left');
};

// Getting the current selected quest or step description
Window_QuestList.prototype.selectedQuestDetails = function() {
    // TODO extract function
    const index: number = this.index();
    let isQuestSelected = true;
    let questIndex = index;
    if (this._expandedIndex !== undefined) {
        const questCount = this._collapsedState.length;
        const collapsibleCount = this._items.length - questCount;
        const indexBeforeExpanded = index <= this._expandedIndex;
        questIndex = indexBeforeExpanded ? index : index - collapsibleCount;
        isQuestSelected = indexBeforeExpanded || (index > this._expandedIndex + collapsibleCount); 
    }

    const selected = isQuestSelected
        ? this._quests[questIndex]
        : this._quests[this._expandedIndex]
            .steps[index - this._expandedIndex - 1];
    return { title: selected.title, paragraphs: selected.paragraphs };
}

// Selecting an item
Window_QuestList.prototype.select = function(index: number) {
    if (this._index !== index) {
        this._index = index;
        if (this._index >= 0) {
            this.callHandler("show_quest_details");
        }
        this._stayCount = 0;
        this.ensureCursorVisible();
        this.updateCursor();
    }
};

Window_QuestList.prototype.isOkEnabled = () => true;

// handling process OK
Window_QuestList.prototype.processOk = function() {
    this.playOkSound(); // TODO other sound ?
    this.updateInputData();
    this.expandSelectedQuest();
};
