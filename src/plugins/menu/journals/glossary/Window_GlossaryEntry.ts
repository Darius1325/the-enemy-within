// $PluginCompiler TEW_Menus.js

import Window_JournalEntry from "../Window_JournalEntry";

// $StartCompilation

function Window_GlossaryEntry() {
    this.initialize.apply(this, arguments);
};

export default Window_GlossaryEntry.prototype = Object.create(Window_JournalEntry.prototype);
Window_GlossaryEntry.prototype.constructor = Window_GlossaryEntry;

Window_GlossaryEntry.prototype.initialize = function() {
    Window_JournalEntry.prototype.initialize.call(this);
};
