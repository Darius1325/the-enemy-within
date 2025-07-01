// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Unit
//
// The superclass of Game_Party and Game_Troop.

TacticsSystem.Game_Unit_onBattleStart = Game_Unit.prototype.onBattleStart;
Game_Unit.prototype.onBattleStart = function() {
    TacticsSystem.Game_Unit_onBattleStart.call(this);
    if ($gamePartyTs.inBattle()) {
        this._inBattle = false;
    }
};
