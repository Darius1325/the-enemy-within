// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_TroopTs
//
// The game object class for a troop tactic.

function Game_TroopTs() {
    this.initialize.apply(this, arguments);
}

Game_TroopTs.prototype = Object.create(Game_UnitTs.prototype);
Game_TroopTs.prototype.constructor = Game_TroopTs;

Game_TroopTs.prototype.initialize = function() {
    Game_UnitTs.prototype.initialize.call(this);
    this.clear();
};

Game_TroopTs.prototype.clear = function() {
    this._enemies = [];
};

Game_TroopTs.prototype.addEnemy = function(enemyId, event) {
    var enemy = new Game_Enemy(enemyId);
    var eventId = event.eventId();
    this._enemies.push(enemy);
    enemy.setupEvent(eventId);
};

Game_TroopTs.prototype.addTroop = function(index, event) {
    var enemy = $gameTroop.members()[index-1];
    var eventId = event.eventId();
    this._enemies.splice(index-1, 0, enemy);
    enemy.setupEvent(eventId);
};

Game_TroopTs.prototype.onBattleStart = function() {
    $gameTroop.onBattleStart();
};

Game_TroopTs.prototype.members = function() {
    return this._enemies.slice(0);
};

Game_TroopTs.prototype.battleMembers = function() {
    return this.members().filter(function(enemy) {
        return enemy.isAlive();
    });
};

Game_TroopTs.prototype.onBattleEnd = function() {
    $gameTroop.onBattleEnd();
};

Game_TroopTs.prototype.onClear = function() {
    Game_UnitTs.prototype.onClear.call(this);
    this._enemies = [];
};
