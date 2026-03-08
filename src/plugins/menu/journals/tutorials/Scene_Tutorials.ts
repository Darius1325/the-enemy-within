// $PluginCompiler TEW_Menus.js 3

import TEW from '../../../_types/tew';
import Window_TutorialEntry from './Window_TutorialEntry';
import Scene_Journal from '../Scene_Journal';

// $StartCompilation

function Scene_Tutorials() {
    this.initialize.apply(this, arguments);
};

export default Scene_Tutorials.prototype = Object.create(Scene_Journal.prototype);
Scene_Tutorials.prototype.constructor = Scene_Tutorials;

Scene_Tutorials.prototype.initialize = function() {
    Scene_Journal.prototype.initialize.call(this);
};

Scene_Tutorials.prototype.fetchEntries = function() {
    this._entries = TEW.DATABASE.TUTORIALS.sort((a, b) => a.title.localeCompare(b.title));
};

Scene_Tutorials.prototype.backgroundImageName = function() {
    return 'bg_tutorials';
};

Scene_Tutorials.prototype.createEntryWindow = function() {
    this._windowEntryDetails = new Window_TutorialEntry();
};
