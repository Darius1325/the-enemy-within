// $PluginCompiler TEW_Menus.js 2

import { Sprite } from "../../../rmmv/core/Sprite";
import Window_JournalContentsTable from "./Window_JournalContentsTable";

// $StartCompilation

function Scene_Journal() {
    this.initialize.apply(this, arguments);
};

export default Scene_Journal.prototype = Object.create(Scene_Base.prototype);
Scene_Journal.prototype.constructor = Scene_Journal;

Scene_Journal.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
    this.fetchEntries();
};

Scene_Journal.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createEntryWindow();
    this.createContentsTable();
    this.setupEntryWindow();
};

Scene_Journal.prototype.addFullscreenBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem(this.backgroundImageName()));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

Scene_Journal.prototype.setupEntryWindow = function() {
    this._windowEntryDetails._cancelHandler = () => {
        this._windowEntryDetails.hide();
        this._windowEntryDetails.deactivate();
        this._windowContentsTable.show();
        this._windowContentsTable.activate();
    };
    this._windowEntryDetails.hide();
    this._windowEntryDetails.deactivate();
    this.addWindow(this._windowEntryDetails);
};

Scene_Journal.prototype.createContentsTable = function() {
    this._windowContentsTable = new Window_JournalContentsTable(this._entries);
    this._windowContentsTable.setHandler('cancel', this.popScene.bind(this));
    this._windowContentsTable.setHandler('ok', () => {
        const selectedEntry: { id: number } = this._entries[this._windowContentsTable.index()];
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
