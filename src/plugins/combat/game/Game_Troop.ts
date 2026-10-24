// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";

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

// Use TEW NPC data instead of RMMV's enemy database
Game_Troop.prototype.setup = function(battleId: string) {
    this.clear();
    this._troopId = battleId; // TODO renaming might not be possible
    this._enemies = [];
    console.log("Setting up enemies");
    this.troop().members.forEach(function(member) {
        if (TEW.DATABASE.NPCS.SET[member.npc]) {
            var enemyId = member.npc;
            var x = member.x;
            var y = member.y;
            var enemy = new Game_Enemy(enemyId, x, y, member.ai);
            if (member.hidden) {
                enemy.hide();
            }
            this._enemies.push(enemy);
        }
    }, this);
    console.log("Enemies set up")
    this.makeUniqueNames();
};

Game_Troop.prototype.troop = function() {
    const tewTroop = TEW.DATABASE.COMBATS[this._troopId];
    return {
        members: tewTroop.enemies,
        pages: []
    };
};
