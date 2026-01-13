// $PluginCompiler TEW_Menus.js 2

import TEW from '../../../_types/tew';
import { Sprite } from "../../../../rmmv/core/Sprite";
import Window_GlossaryContentsTable from "./Window_GlossaryContentsTable";
import { Glossary } from '../../../_types/glossary';
import Window_GlossaryEntry from './Window_GlossaryEntry';

// $StartCompilation

function Scene_Glossary() {
    this.initialize.apply(this, arguments);
}

export default Scene_Glossary.prototype = Object.create(Scene_Base.prototype);
Scene_Glossary.prototype.constructor = Scene_Glossary;

Scene_Glossary.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
    this.createWindowLayer();
    this.fetchEntries();
};

Scene_Glossary.prototype.fetchEntries = function() {
    const unlockedEntryIds: number[] = $gameGlossary.unlockedEntries();
    this._entries = unlockedEntryIds
        .map(id => TEW.DATABASE.GLOSSARY[id])
        .sort((a, b) => a.title.localeCompare(b.title));
};

Scene_Glossary.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
    this.addFullscreenBackground();
    this.createEntryWindow();
    this.createContentsTable();
};

Scene_Glossary.prototype.addFullscreenBackground = function() {
    this._background = new Sprite(ImageManager.loadSystem('bg_glossary'));
    this.addChildAt(this._background, this.getChildIndex(this._windowLayer));
};

Scene_Glossary.prototype.createEntryWindow = function() {
    this._windowEntryDetails = new Window_GlossaryEntry();
    this._windowEntryDetails._cancelHandler = () => {
        this._windowEntryDetails.hide();
        this._windowEntryDetails.deactivate();
        this._windowContentsTable.show();
        this._windowContentsTable.activate();
    };
    this.addWindow(this._windowEntryDetails);
};

Scene_Glossary.prototype.createContentsTable = function() {
    this._windowContentsTable = new Window_GlossaryContentsTable(this._entries);
    this._windowContentsTable.setHandler('cancel', this.popScene.bind(this));
    this._windowContentsTable.setHandler('ok', () => {
        const selectedEntry: Glossary = this._entries[this._windowContentsTable.index()];
        this._windowEntryDetails._title = selectedEntry.title;
        this._windowEntryDetails._paragraphs = selectedEntry.paragraphs;
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
