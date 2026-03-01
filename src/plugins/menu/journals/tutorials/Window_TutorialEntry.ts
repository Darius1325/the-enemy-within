// $PluginCompiler TEW_Menus.js

import { Tutorial } from "../../../_types/tutorial";
import Window_JournalPrettyEntry from "../Window_JournalPrettyEntry";

// $StartCompilation

function Window_TutorialEntry() {
    this.initialize.apply(this, arguments);
};

export default Window_TutorialEntry.prototype = Object.create(Window_JournalPrettyEntry.prototype);
Window_TutorialEntry.prototype.constructor = Window_TutorialEntry;

Window_TutorialEntry.prototype.initialize = function() {
    Window_JournalPrettyEntry.prototype.initialize.call(this);
};

Window_TutorialEntry.prototype.reset = function(entry: Tutorial) {
    this._id = entry.id;
    this._title = entry.title;
    this._paragraphs = entry.paragraphs;
    this._formattedContent = undefined;
};

Window_TutorialEntry.prototype.reserveImage = function(image: string) {
    return ImageManager.reserveImage('tutorials', image, image);
};

Window_TutorialEntry.prototype.loadImage = function(image: string) {
    return ImageManager.reserveImage('tutorials', image);
};
