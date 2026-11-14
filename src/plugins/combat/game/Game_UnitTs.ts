// $PluginCompiler TEW_Combat.js

export default Game_UnitTs.prototype;

// $StartCompilation

//-----------------------------------------------------------------------------
// Game_UnitTs
//
// The superclass of Game_PartyTs and Game_TroopTs.

function Game_UnitTs() {
    this.initialize.apply(this, arguments);

    // Advantages accumulated by winning combat rounds or using the Observe action
    // Common pool for all battlers that can be spent to get better rolls or extra actions
    this._advantages = 0;
}

Game_UnitTs.prototype.initialize = function() {
    this._inBattle = false;
};

Game_UnitTs.prototype.members = function() {
    return [];
};

Game_UnitTs.prototype.aliveMembers = function() {
    return this.members().filter(function(member) {
        return member.isAlive();
    });
};

Game_UnitTs.prototype.isAllDead = function() {
    return this.aliveMembers().length === 0;
};

Game_UnitTs.prototype.onTurnStart = function() {
    this.members().forEach(function(member) {
        member.onTurnStart();
    });
};

Game_UnitTs.prototype.onClear = function() {
    this.members().forEach(function(member) {
        member.onClear();
    });
};
