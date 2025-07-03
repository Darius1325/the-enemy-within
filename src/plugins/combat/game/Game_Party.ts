// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Party
//
// The game object class for the party. Information such as gold and items is
// included.


import {Game_Actor} from "../../../rmmv/objects/Game_Actor";

Game_Party.prototype.setupTactics = function(actors: Game_Actor[]) {
    const actorIds = actors.map(actor => actor.actorId());
    this._maxBattleMembers = actorIds.length;
    this._actors = actorIds;
    $gamePlayer.refresh();
    $gameMap.requestRefresh();
};

Game_Party.prototype.setMaxBattleMembers = function() {
    this._maxBattleMembers = this.allMembers().length;
};

Game_Party.prototype.maxBattleMembers = function() {
    return $gamePartyTs.inBattle() ? this._maxBattleMembers : 4;
};

Game_Party.prototype.members = function() {
    return this.inBattle() || $gamePartyTs.inBattle() ? this.battleMembers() : this.allMembers();
};

Game_Party.prototype.memberId = function(partyId: number) {
    return this.members()[partyId - 1].actorId();
};
