# Momentum feature

In Warhammer Fantasy 5th edition rules (./wfrp5e.pdf), momentum replaces advantages in combat from the 4th edition.
Instead of a shared pool between players/enemies, it is an individual state: a character either has momentum or does not.

Here are the rules we need to implement in the TEW_Combat plugin (./src/plugins/combat):

 - momentum is gained when winning an opposed melee combat test (attack or defence), or when succeeding at charging from a distance longer than walk distance
 - momentum is lost when taking any damage, suffering any condition, or losing an opposed melee combat test (this includes failing an attack after a successful charge)
 - momentum only exists in combat, and is always lost at the end of a battle

 - momentum passively gives advantage in melee on all targets (best of two rolls, see ./src/plugins/base/dice/Game_Interpreter.ts where TEW.DICE functions take advantage into account).

A character can also spend their momentum to make a free action (costs no movement or action point). These actions will be available in a Momentum main menu option (alongside Move, Action and Wait):
 - Transfer: momentum can be transferred to an ally on a successful Leadership test
 - Disengage: not yet implemented mechanic, will later allow to move away from melee for free
 - Attack with an off-hand weapon (or just a punch with MELEE_BRAWLING): off-hand attacks will later have special rules, but for now will be handled like normal attacks.

Finally, momentum is also needed to trigger some talents, which will be implemented at a later time.
