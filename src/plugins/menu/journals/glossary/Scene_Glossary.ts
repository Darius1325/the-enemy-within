// $PluginCompiler TEW_Menus.js 3

import TEW from '../../../_types/tew';
import Window_GlossaryEntry from './Window_GlossaryEntry';
import Scene_Journal from '../Scene_Journal';

// $StartCompilation

function Scene_Glossary() {
    this.initialize.apply(this, arguments);
}

export default Scene_Glossary.prototype = Object.create(Scene_Journal.prototype);
Scene_Glossary.prototype.constructor = Scene_Glossary;

Scene_Glossary.prototype.initialize = function() {
    Scene_Journal.prototype.initialize.call(this);
};

Scene_Glossary.prototype.fetchEntries = function() {
    this._entries = TEW.DATABASE.GLOSSARY
        .filter(entry => $gameSwitches.value(entry))
        .sort((a, b) => a.title.localeCompare(b.title));
};

Scene_Glossary.prototype.backgroundImageName = function() {
    return 'bg_glossary';
};

Scene_Glossary.prototype.createEntryWindow = function() {
    this._windowEntryDetails = new Window_GlossaryEntry();
};
