# Battle system

The battle system is a tactical turn-by-turn system programmed in ./src/plugins/combat and compiled in TEW_Combat.js.
It was originally made to use RPG Maker's native Game_Action system, but an overhaul is in progress: the legacy Game_Action code is mixed with the new one in ./src/plugins/combat/game/Game_Action.ts.

## Overhaul

As part of our work on enemy AI (piloted by ./src/plugins/constants/TEW_EnemyAI.ts), we want to initialize Game_Action objects with a set of parameters defined as the BattleDecision type. Some actions already take this new system into account, for instance melee attacks and charging when decided by the AI.

## Entry points

The enemy AI is linked to the battle system through the BattleManager.updateEnemyPhase function.

Currently, player actions are still computed using legacy Game_Action code. Player phase code is different because of the targetting phase when moving or attacking. Player decisions are linked through the BattlePhase.InputCommand phase which gives control to the battle scene (./src/plugins/combat/menu/Scene_Battle.ts).

## Plan

### Understand the battle flow

Read ./src/plugins/combat/game/BattleManager.ts, ./src/plugins/combat/menu/Scene_Battle.ts, ./src/plugins/combat/game/Game_Action.ts and ./src/plugins/constants/TEW_EnemyAI.ts, as well as any related files necessary to understand the battle system. The goal of this step is to make sure you have all information needed to complete the next ones. Write any questions about preferences or missing information in ./battle-system-exec.md, which will complement this document for the steps that follow.

### Reorganize Game_Action

We've already started separating legacy code from the new system in Game_Action.ts; we need to ensure that the two don't interfere with each other. Then, when the overhaul is complete, we can simply get rid of the legacy code.

### Transform enemy actions

We need to make sure that all decisions coming from enemy AI lead to the new game action code: currently, for instance, an enemy choosing to walk goes through legacy code and creates a list of Game_Action objects, one for each tile, which we want to change.

You may handle this step on a case-by-case basis.

### Transform player actions

Now, player actions can be overhauled too, by integrating the targetting phase into enemy AI flow.

You may handle this step on a case-by-case basis.

### Clean up BattleManager

There is a lot of dead code from the TacticsSystem plugin we started from in the BattleManager and the combat plugin in general. We need to remove useless functions, while being careful about necessary overrides of base RMMV battle functions. Then, consider splitting the BattleManager into smaller coherent files if possible.
