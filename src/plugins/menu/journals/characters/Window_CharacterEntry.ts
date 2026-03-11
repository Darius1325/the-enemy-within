// $PluginCompiler TEW_Menus.js

import { Tutorial } from "../../../_types/tutorial";
import Window_JournalPrettyEntry from "../Window_JournalPrettyEntry";

// $StartCompilation

function Window_CharacterEntry() {
    this.initialize.apply(this, arguments);
};

Window_CharacterEntry.IMAGE_CACHE_RID = 'Window_CharacterEntry_RID';

export default Window_CharacterEntry.prototype = Object.create(Window_JournalPrettyEntry.prototype);
Window_CharacterEntry.prototype.constructor = Window_CharacterEntry;

Window_CharacterEntry.prototype.initialize = function() {
    Window_JournalPrettyEntry.prototype.initialize.call(this);
};

Window_CharacterEntry.prototype.reset = function(entry: Tutorial) {
    this._id = entry.id;
    this._title = entry.title;
    this._paragraphs = entry.paragraphs;
    this._formattedContent = undefined;
};

Window_CharacterEntry.prototype.reserveImage = function(image: string) {
    return ImageManager.reserveImage('mugs', image, Window_CharacterEntry.IMAGE_CACHE_RID);
};

Window_CharacterEntry.prototype.loadImage = function(image: string) {
    return ImageManager.reserveImage('mugs', image);
};

Window_CharacterEntry.prototype.close = function() {
    ImageManager.releaseReservation(Window_CharacterEntry.IMAGE_CACHE_RID);
    Window_JournalPrettyEntry.prototype.close.call(this);
};
