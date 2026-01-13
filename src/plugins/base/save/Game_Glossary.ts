// $PluginCompiler TEW_Base.js

export default Game_Glossary;

// $StartCompilation

function Game_Glossary() {
    this.initialize.apply(this, arguments);
};

Game_Glossary.prototype.initialize = function() {
    this.clear();
};

Game_Glossary.prototype.clear = function() {
    this._data = [];
};

Game_Glossary.prototype.unlockEntry = function(id: number) {
    this._data.push(id);
};

Game_Glossary.prototype.unlockedEntries = function() {
    return this._data;
};
