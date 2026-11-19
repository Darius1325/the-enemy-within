# Critical hits

Critical hits in Warhammer are doubles on a roll: multiples of 11 and 100 (double 0).
As of the 5th edition, a critical success or failure is determined before SL bonuses or maluses apply to the test (see the updated calculation of critical hits in TEW.DICE functions in ./src/plugins/base/dice/Game_Interpreter.ts). This means a successful roll can be a critical failure and vice versa.

Weapon critical hits are described from p173 to p176 in ./wfrp5e.pdf
Fumbles are described on p165.

Spellcasting / channelling rules and miscasts are described from p235 to p238.

## In combat

### Weapon critical hits

Landing a critical success in melee (attack or defense) results in inflicting a critical wound on the opponent. Critical wounds are separate from damage calculation.
A critical failure results in a fumble.

For now, before injuries and long-lasting conditions are implemented, we will only implement critical hits that inflict pure damage or fleeting conditions (those already defined in TEW_Conditions.ts, note that psychological conditions are not implemented yet, such as Broken).

Later, we may also implement alternate tables depending on the weapon used.

### Plan

Write the full crit table in a TEW_Constants plugin file, but make all crits with non-implemented effects inflict a Bleeding condition instead. A critical hit should be represented with a range of values and a handler taking a CompleteBattler (defined in battlerAI.ts) as parameter.

Write a draft for the fumble table, but only one fumble will exist for now for the whole 1 to 10 range: the character takes 1 point of damage.

Resolve melee and ranged critical hit and fumble effects in combat through Game_Action.

### Magic criticals

Following the 5th edition rules (p235-236):
 - Casting: a double on the Casting test (success or failure) causes a Minor Miscast. A critical success with a Petty spell, or with the Instinctive Diction talent, causes no miscast. A critical success with any other spell also grants an extra effect (see Plan).
 - Channelling: a double on a successful Channelling test adds an extra Willpower Bonus SL to the pool of power, without any miscast. A double on a failed test loses 1d10 SL of power, then causes a Minor Miscast with +10 to the roll for each SL lost.

### Plan

Write the full minor and major miscast tables in a TEW_Constants plugin file, but make all miscasts the same as Rupture: inflict a Bleeding condition on the caster.

Resolve magic crits in combat in Game_Action (overworld magic is not implemented yet). For now, all critical casts will use the 'Total Power' rule (p235). A player/AI choice will be implemented later.
