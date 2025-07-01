// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Troop
//
// The game object class for a troop and the battle-related data.

Game_Troop.prototype.setupTactics = function(enemies) {
    this._enemies = [];
    enemies.forEach(function(member) {
        if (member && !member.isBattleMember()) {
            this._enemies.push(member);
        }
    }, this)
};

TacticsSystem.Game_Troop_meetsConditions = Game_Troop.prototype.meetsConditions;
Game_Troop.prototype.meetsConditions = function(page) {
    var c = page.conditions;
    if (c.enemyValid) {
        var enemy = $gameTroopTs.members()[c.enemyIndex];
        if (!enemy || enemy.hpRate() * 100 > c.enemyHp) {
            return false;
        }
        if (!c.turnEnding && !c.turnValid && !c.actorValid && !c.switchValid) {
            return true;  // Only enemy valid
        }
    } else {
        page.conditions.enemyValid = false;
        return TacticsSystem.Game_Troop_meetsConditions.call(this, page);
    }
};
