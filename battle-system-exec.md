# Battle system - execution notes

Complements `.claude/battle-system.md`. Written during step 1 ("Understand the battle flow") and updated at each following step.

## 1. Battle flow as found (before the overhaul)

### Start of battle
1. `Game_Interpreter.command301` (combat/Game_Interpreter.ts) calls `BattleManager.setup(troopId)` and pushes `Scene_Battle`.
2. `Scene_Map.updateEncounterEffect` calls `BattleManager.createGameObjects()`. It reads the map events' notes (`<Actor:n>`, `<Party:n>`, `<NPC:id>`, `<Troop:n>`) and fills `$gamePartyTs` / `$gameTroopTs`.
3. `Scene_Battle.start` calls `BattleManager.startBattle()`. `BattleManager.update` (`Phase.Start`) rolls the initiative order (`makeTurnOrder`), then moves to `Phase.Battlers`.

### Turn loop (`Phase.Battlers`, driven by `_battlePhase`)
- `Start`: `updateStart` pops the next battler from `_currentTurnOrder`. Actors go to `updateStartPlayer`, enemies to `updateStartEnemy`. Once everyone has played, `TurnEnd` → `startNewTurn`.
- **Enemies**: `updateEnemyPhase` calls the battler's AI (`TEW.DATABASE.NPCS.AI[...]`, constants/TEW_EnemyAI.ts). The AI returns a `BattleDecision`, which `supplementActionParameters` completes with the weapon. Then a `Game_Action` is built *with* the decision and `apply()` runs. The phase is forced to `ProcessMove`, and `updateMove` ends the turn once no legacy move is left (charges attack at that point).
- **Players**: `updateStartPlayer` → `selectActor` → `InputCommand`. `Scene_Battle.updateBattleProcess` opens the command window. Its menus then set the targeting phases:
  - Walk / Run → `InputMove` (`updateSelect`), then `ProcessMove` (`updateMove`). Move/action points are spent **before** targeting, so cancelling does not refund them.
  - Charge → `InputCharge` (`updateChargeTarget`, builds a legacy `Game_Action` just to validate the target), then `ProcessCharge`.
  - Attack / Spell → `refreshRedCells(action)` + `Target` (`updateTarget`). This goes through the RMMV-style flow: `setupAction` → `Open` (`processAction`) → `Action` (`updateAction`/`invokeAction`) → `nextAction` → `InputCommand` or `Close`.
  - Wait → legacy `setWait()` + `setupAction()`.
  - `endAction` → `Close` (`updateClose`) → `Start` (next battler).
- Moves are made of one legacy `Game_Action` per tile (`Game_Battler._moves`, `setMove(direction)` / `applyMove()`). The player path is built by `refreshMovesAction` → `makeShortestMoves`, the charge path by `moveAlongPredefinedPath`.

### Game_Action
`Game_Action.prototype.initialize(subject, forcing, params?, modifiers?)`: with `params` (a `BattleDecision`) it is a "new system" action. Without it, it is a legacy RMMV action (`_item`, `_targetIndex`, `setAttack`, `setSkill`, ...). Both live in the same prototype, and `apply` was defined twice (the second definition silently won).

## 2. Problems confirmed at runtime (baseline)

I built a headless harness (Chromium + Playwright) that boots the game, starts the `B0C0_BATTLE_TEST` battle on the "Debug" map (Map006), and plays scripted turns. On the unmodified `main` branch:

| # | Problem | Cause |
|---|---|---|
| B1 | **Enemies never move.** They decide `WALK` every turn and stay put. | `_moveRoute = this._subject.makeShortestMoves` stores the *function* instead of a path. `applyMove` then sends it as a move command code, and `updateMove` finds no legacy moves. |
| B2 | The `WALK` decision's target is `undefined,undefined`. | `checkEnemyAndReturnClosest` returns `{ enemy, distance }`, not the battler. It also crashes when no enemy is left. |
| B3 | **Player attacks cannot target anything** (buzzer on the enemy tile). | `updateRange` calls `computeEuclideanRange(0, range, x, y)` but the function takes `(d, x, y)`. The range is also always 0 for legacy actions, which have no `_object`. Even when a target is accepted, `invokeNormalAction` → `apply(target)` → new `apply()` with no `_option`, so nothing happens. |
| B4 | An enemy charge attacks whatever is under the **selector**, not its target. | `updateMove(true)` uses `$gameSelector.select()` / `isAdjacentTo($gameSelector)`. |
| B5 | Enemy movement range depends on the player's last menu cursor. | `baseMove()` multiplies by the global `BattleManager.moveMultiplier`, which `Window_TacticsMoveCommand.select` sets (0 after hovering "Switch weapons"). |
| B6 | `SMART_RANGED` crashes. | It calls `UTILITIES.doMove`, which does not exist. |
| B7 | `RANGED_ATTACK`, `RELOAD`, `SWITCH_WEAPONS` and `WAIT` decisions do nothing. | No branch in `Game_Action.apply`. |
| B8 | Hit location armor uses `window.location`. | `armorPointsAtLocation(location, ...)` instead of `hitLocation`. |
| B9 | Walk/Run spend points before the tile is chosen; cancelling loses them. | `Scene_Battle.commandWalk/commandRun` (already marked TODO). |

Unrelated issues seen while testing, left alone: `Samples/Community_Basic.js` throws at boot in a browser (it expects NW.js); the "Debug - Charge" map (Map007) fails because `Game_TroopTs.addEnemy` force-equips weapon index 1 on an NPC that has a single weapon, and its troop id `BATTLE_TEST` does not exist in `TEW_Combats.ts`.

## 3. Questions (with the default I applied, so work could continue)

1. **One decision per enemy turn, or several?** Today an enemy gets a single decision, so it can walk *or* attack, unlike players who can move then act. → *Default:* the AI is asked again after each resolved decision while the enemy still has move or action points. `WAIT` ends the turn, and a decision that spends nothing also ends it, to avoid infinite loops. To revert to one decision per turn, have `BattleManager.onDecisionEnd` end the turn for enemies.
2. **Ranged attacks rules.** The plan does not cover WFRP ranged rules. → *Default:* `RANGED_ATTACK` reuses the weapon attack resolution with the ranged skill (`RANGED_<group>`) against the defender's Dodge, and consumes 1 ammo for reloadable weapons. `RELOAD` sets the ammo to 1 and spends the action. Proper ranged rules (no parry, range bands, aim) are left as TODOs.
3. **`SWITCH_WEAPONS` for the AI**: there is no weapon choice in `BattleDecision`. → *Default:* if `decision.weapon` is given, equip it, otherwise equip the first melee weapon. It spends the move (or the action if no move is left), as the player menu does.
4. **Player point spending**: → *Default:* points are spent when the action resolves (inside `Game_Action`), not when the menu entry is chosen, so cancelling a target selection costs nothing (fixes B9).
5. **Channelling, switching weapons from the menu, and the end-turn/map menus** are not `BattleOption`s. → *Default:* left on their current flow (`commandChannelling` still calls `doChannelling` + `endAction`). Should channelling become a `BattleOption`?
6. **Legacy RMMV skill/item windows** (`Window_TacticsSkill`, `Window_TacticsItem`, `Window_TacticsInfo`, the map/status menu) are unreachable (their commands are commented out). → *Default:* removed in step 5 along with the legacy `Game_Action` code they depend on. Say so if any should be kept for later.
7. **Fixing data/AI bugs found on the way (B2, B6, B8)**: these are small and block testing, so I fixed them. No AI behaviour was otherwise changed.

## 4. Testing approach

No unit tests exist, so each step is checked by:
- `tsc` with the project config, then `plugin_compiler.sh` into a scratch folder (the output must pass `node --check`). Compiled files under `js/plugins/TEW` are **not** committed. Run `src/plugin_compiler.sh` as usual to regenerate them.
- The headless harness, which plays the debug battle (player waits / player walks then attacks / player runs) and records every enemy decision, every position and every HP change.

(Steps 2-5: see section 5, which is filled in as the steps are done.)

## 5. Step log

### Step 2 - Reorganize Game_Action (done)
- `combat/game/Game_Action.ts` now only holds decision-based code (plus the few tile-display helpers both kinds share, grouped at the end). `combat/game/Game_ActionLegacy.ts` (priority 99, compiled first) holds every legacy function.
- The two entry points dispatch explicitly: `initialize` → `initializeDecision(params)` / `initializeLegacy(forcing)`, and `apply(target?)` → `applyDecision()` / `applyLegacy(target)`. `isDecision()` tells them apart. The only state they share is `_range` / `_aoeRange` (tile display).
- Legacy functions no longer go through decision code (and vice versa):
  - `combatOpponentsUnit/combatFriendsUnit` use the legacy `searchBattlers`/`updateRangeLegacy` again, instead of the decision-only `findBattlersInRange`, which reads `_object`.
  - `BattleManager.refreshAoeCells` calls `updateAoeRange()` or `updateAoeRangeLegacy(item, subject)` depending on the action kind.
  - `isMove()` is now legacy-only (per-tile moves). Decision movement is `isMovementDecision()`.
- The legacy friends unit always contains the acting battler (as the original TacticsSystem did). Legacy Wait relies on it.
- Fixed in decision code: `computeEuclideanRange(d, x, y)` was called with 4 arguments (B3, decision side); the `_moveRoute = makeShortestMoves` assignment (B1) is removed; armor now uses `hitLocation` (B8); melee weapons (no `range`) get the default action range.
- The "INFO Legacy ... look into it" traces are kept, centralised in `Game_Action.logLegacyCall`.
- `BattleDecision` / `BattleTarget` are now exported from `_types/battlerAI.ts`. The AI's range-probe actions pass a full decision.
- Runtime check: player wait over 3 full rounds; player walk, then legacy attack targeting (now accepted; the legacy resolution is still a no-op, as before); enemy melee attack resolved by the decision code.
