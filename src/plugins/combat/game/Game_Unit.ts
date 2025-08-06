// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Unit
//
// The superclass of Game_Party and Game_Troop.

TEW.MEMORY.gameUnitOnBattleStart = Game_Unit.prototype.onBattleStart;
Game_Unit.prototype.onBattleStart = function() {
    TEW.MEMORY.gameUnitOnBattleStart.call(this);
    if ($gamePartyTs.inBattle()) {
        this._inBattle = false;
    }
};
