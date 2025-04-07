// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Game_Action

// Applying action (damage)
Game_Action.prototype.apply = function(target) {
    var result = target.result();
    this.subject().clearResult();
    result.clear();

    // Damage calc
    //
    // Choose weapon (elsewhere)
    //   Get CC characteristic associated with weapon
    // Get (best) weapon from defender
    //   Get CC characteristic associated with weapon
    // Check for opponent's defensive tools (shield)
    // Check attacker's talents for modifiers (make a list)
    // Check defender's talents for modifiers (make a list)
    // Check weapon effects on bonus (PRECISE)
    // Check sizes
    // Check outnumberment
    //
    // Roll dice
    //
    // Check attacker's talents on dice roll (make a list)
    // Check weapon effects on dice roll (make a list)
    // Check hit/miss
    // Check weapon effects on crit (make a list)
    // Check for crits
    // Compute damage
    //   Add weapon bonus + stat bonus + opposed DR
    //   Check location
    //   Check weapon effects based on location (make a list)
    //   Remove defender's toug + armor points
    // Lookup crit table (help me)

    result.isHit = 0;
    result.missed = false;

    if (result.isHit) {
        if (this.item().damage.type > 0) {
            var value = 4;
            this.executeDamage(target, value);
        }
        this.item().effects.forEach(function(effect) {
            this.applyItemEffect(target, effect);
        }, this);
        this.applyItemUserEffect(target);
    }
};

// Calculating damage value
Game_Action.prototype.makeDamageValue = function(target, critical) {
    var item = this.item();
    var baseValue = this.evalDamageFormula(target);
    var value = baseValue * this.calcElementRate(target);
    if (this.isPhysical()) {
        value *= target.pdr;
    }
    if (this.isMagical()) {
        value *= target.mdr;
    }
    if (baseValue < 0) {
        value *= target.rec;
    }
    if (critical) {
        value = this.applyCritical(value);
    }
    value = this.applyVariance(value, item.damage.variance);
    value = this.applyGuard(value, target);
    value = Math.round(value);
    return value;
};
