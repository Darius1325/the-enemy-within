// $PluginCompiler TEW_Menus.js 3

import TEW from '../../../_types/tew';
import Window_CharacterEntry from './Window_CharacterEntry';
import Scene_Journal from '../Scene_Journal';

// $StartCompilation

function Scene_Characters() {
    this.initialize.apply(this, arguments);
};

export default Scene_Characters.prototype = Object.create(Scene_Journal.prototype);
Scene_Characters.prototype.constructor = Scene_Characters;

Scene_Characters.prototype.initialize = function() {
    Scene_Journal.prototype.initialize.call(this);
};

Scene_Characters.prototype.fetchEntries = function() {
    this._entries = TEW.DATABASE.CHARACTER_DESCRIPTIONS;
};

Scene_Characters.prototype.backgroundImageName = function() {
    return 'bg_characters';
};

Scene_Characters.prototype.createEntryWindow = function() {
    this._windowEntryDetails = new Window_CharacterEntry();
};
