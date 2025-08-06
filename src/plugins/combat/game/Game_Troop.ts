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

TEW.MEMORY.gameTroopMeetsCondition = Game_Troop.prototype.meetsConditions;
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
        return TEW.MEMORY.gameTroopMeetsCondition.call(this, page);
    }
};

// TODO never call this
Game_Troop.prototype.expTotal = function() {
    return 0;
};

// TODO never call this
Game_Troop.prototype.goldTotal = function() {
    return 0;
};

// TODO never call this
Game_Troop.prototype.goldRate = function() {
    return 0;
};

// TODO never call this
Game_Troop.prototype.makeDropItems = function() {
    return [];
};
