// $PluginCompiler TEW_Combat.js

export default interface Game_BattlerBase {}
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_BattlerBase
//
// The superclass of Game_Battler. It mainly contains parameters calculation.

Game_BattlerBase.TRAIT_TPARAM = 71;
Game_BattlerBase.TPARAM  = {
    'Move': 0,
};

Game_BattlerBase.prototype.move = function() {
    return Math.max((Number(this.tparam('Move')) || TEW.COMBAT.SYSTEM.mvp) +
        this.traitsSum(Game_BattlerBase.TRAIT_TPARAM, 0), 1);
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

TEW.MEMORY.gameBattlerBaseAllTraits = Game_BattlerBase.prototype.allTraits;
Game_BattlerBase.prototype.allTraits = function() {
    return TEW.MEMORY.gameBattlerBaseAllTraits.call(this).concat(this.tparamTraits());
};

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
