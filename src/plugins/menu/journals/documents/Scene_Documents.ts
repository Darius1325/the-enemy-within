// $PluginCompiler TEW_Menus.js 3

import TEW from '../../../_types/tew';
import Window_Document from './Window_Document';
import Scene_Journal from '../Scene_Journal';

// $StartCompilation

function Scene_Documents() {
    this.initialize.apply(this, arguments);
};

export default Scene_Documents.prototype = Object.create(Scene_Journal.prototype);
Scene_Documents.prototype.constructor = Scene_Documents;

Scene_Documents.prototype.initialize = function() {
    Scene_Journal.prototype.initialize.call(this);
};

Scene_Documents.prototype.fetchEntries = function() {
    this._entries = TEW.DATABASE.JOURNAL_DOCUMENTS;
};

Scene_Documents.prototype.backgroundImageName = function() {
    return 'bg_documents';
};

Scene_Documents.prototype.createEntryWindow = function() {
    this._windowEntryDetails = new Window_Document();
};
