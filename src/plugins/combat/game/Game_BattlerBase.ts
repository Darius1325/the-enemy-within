// $PluginCompiler TEW_Combat.js

export default interface Game_BattlerBase {}
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

Game_BattlerBase.TRAIT_TPARAM = 71;
Game_BattlerBase.TPARAM = {
    'move': 0,
};

Game_BattlerBase.prototype.baseMove = function() {
    return (Number(this.tparam('move')) || TEW.COMBAT.SYSTEM.mvp) * BattleManager.moveMultiplier;
};

Game_BattlerBase.prototype.move = function() {
    let totalMove = this.baseMove();
    if (!$gameMap._flexibleMovement) { // Charge command selected
        totalMove += Math.floor(this.comp('ATHLETICS') / 10) + 2; // Easy athletics test max possible roll
    }
    return totalMove;
};

Game_BattlerBase.prototype.tparamCode = function(tparam) {
    return Game_BattlerBase.TPARAM[tparam];
};

Game_BattlerBase.prototype.tparamTraits = function() {
    return this.traitObjects().reduce(function(r, obj) {
        return r.concat(this.noteTraits(obj));
    }.bind(this), []);
};

Game_BattlerBase.prototype.noteTraits = function(obj) {
    var value = obj.meta['Ts-Parameter'];
    if (value !== undefined) {
        var args = value.trim().split(' ');
        var trait = {
            'code':   Game_BattlerBase.TRAIT_TPARAM,
            'dataId': Game_BattlerBase.TPARAM[args[0]],
            'value':  eval(args[1])
        }
    }
    return trait || [];
};

// Legacy Tactics system code - looks for traits in *.meta.Ts-Parameter
// TEW.MEMORY.gameBattlerBaseAllTraits = Game_BattlerBase.prototype.allTraits;
// Game_BattlerBase.prototype.allTraits = function() {
//     return TEW.MEMORY.gameBattlerBaseAllTraits.call(this).concat(this.tparamTraits());
// };

TEW.MEMORY.gameBattlerBaseCanUse = Game_BattlerBase.prototype.canUse;
Game_BattlerBase.prototype.canUse = function(item) {
    if ($gamePartyTs.inBattle()) {
        if (!this.isItemRangeValid(item)) {
            return false;
        }
    }
    return TEW.MEMORY.gameBattlerBaseCanUse.call(this, item);
};

Game_BattlerBase.prototype.isOccasionOk = function(item) {
    if ($gameParty.inBattle() || $gamePartyTs.inBattle()) {
        return item.occasion === 0 || item.occasion === 1;
    } else {
        return item.occasion === 0 || item.occasion === 2;
    }
};

Game_BattlerBase.prototype.waitSkillId = function() {
    return TEW.COMBAT.SYSTEM.waitSkillId;
};

Game_BattlerBase.prototype.isDead = function() {
    return this.isAppeared() && this.isDeathStateAffected();
};
