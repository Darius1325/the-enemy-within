// $PluginCompiler TEW_Menus.js 2

import TEW from '../../../_types/tew';
import { Sprite } from "../../../../rmmv/core/Sprite";
import Window_JournalContentsTable from "../Window_JournalContentsTable";
import Window_CharacterEntry from './Window_CharacterEntry';
import { CharacterDescription } from '../../../_types/characterDescription';

// $StartCompilation

function Scene_Characters() {
    this.initialize.apply(this, arguments);
};

export default Scene_Characters.prototype = Object.create(Scene_Base.prototype);
Scene_Characters.prototype.constructor = Scene_Characters;

Scene_Characters.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
    this.fetchEntries();
};

Scene_Characters.prototype.fetchEntries = function() {
    this._entries = TEW.DATABASE.CHARACTER_DESCRIPTIONS;
};

Scene_Characters.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createEntryWindow();
    this.createContentsTable();
};

Scene_Characters.prototype.addFullscreenBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem('bg_characters'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

Scene_Characters.prototype.createEntryWindow = function() {
    this._windowEntryDetails = new Window_CharacterEntry();
    this._windowEntryDetails._cancelHandler = () => {
        this._windowEntryDetails.hide();
        this._windowEntryDetails.deactivate();
        this._windowContentsTable.show();
        this._windowContentsTable.activate();
    };
    this.addWindow(this._windowEntryDetails);
};

Scene_Characters.prototype.createContentsTable = function() {
    this._windowContentsTable = new Window_JournalContentsTable(this._entries);
    this._windowContentsTable.setHandler('cancel', this.popScene.bind(this));
    this._windowContentsTable.setHandler('ok', () => {
        const selectedEntry: CharacterDescription = this._entries[this._windowContentsTable.index()];
        if (this._windowEntryDetails._id !== selectedEntry.id) {
            this._windowEntryDetails.reset(selectedEntry);
        }
        this._windowContentsTable.deactivate();
        this._windowContentsTable.hide();
        this._windowEntryDetails.show();
        this._windowEntryDetails.activate();
        this._windowEntryDetails.refresh();
    });
    this.addWindow(this._windowContentsTable);
    this._windowContentsTable.show();
    this._windowContentsTable.activate();
    this._windowContentsTable.refresh();
    this._windowContentsTable.select(0);
};
