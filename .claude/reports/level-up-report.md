# Levelling mode & competence augments — implementation report

Date: 15/08/2026
Scope: the "Levelling mode" and "Competence augment" sections of `.claude/level-up.md`.
Out of scope (as requested): stat augment UI, talents/spells/prayers, career advances.

---

## 1. What was built

### Levelling mode

- Toggled with a dedicated input key inside the status menu. The key is **A** (`Input.keyMapper[65] = "A_Key"`,
  already mapped and previously unused). It is referenced through `TEW.MENU.LEVEL_UP_KEY` /
  `TEW.MENU.LEVEL_UP_KEY_LABEL` so changing it is a one-line edit in `menu/main/properties.ts`.
- The four topbar commands are now packed on the left (fixed 200px each instead of spreading over the
  full 1280px), freeing ~350px on the right for the indicator.
- Indicator, drawn by `Window_StatusCommand`:
  - normal mode → `Level up: A`
  - levelling mode → `XP left <n>` and `Spent <n>`
- Pending advances live in a `Game_Levelling` session owned by `Scene_Status`, so they persist while the
  player moves between the four status windows. Nothing is written to the actor until confirmation.
- Exiting (either by pressing the key again, or by cancelling while the topbar is active):
  - nothing spent → instantaneous
  - something spent → confirmation prompt with a scrollable summary of every augment
- The prompt offers **Confirm** / **Discard** / **Back**. `Back` (and Escape) returns to levelling mode with
  every pending advance intact — see §4 for why a third command was added.
- Cancelling out of the menu with pending advances prompts first, then leaves the menu once resolved.

### Competence augment

In `Window_StatusCompetences`, while levelling mode is active:

- every competence whose next advance is affordable has its value drawn in `systemColor()`
- right / left on the selected competence buys / refunds one advance and updates the experience counters
- a competence whose displayed value is above the actor's current value is drawn in `powerUpColor()` (green)
- the value cannot go below the actor's current value, nor above what the remaining experience affords
- the details window on the right follows the displayed (pending) value

### Costs

`TEW.LEVELLING` holds both columns of the table in `level-up.md`. Brackets are `0-5`, then five advances
each, up to `71+`. The cost of an advance is determined by the number of advances **already bought**:

- characteristics: origin is `paramPlus(paramId)` (base values are not advances)
- competences: origin is `0`, i.e. `compPlus(compId)`

Career restrictions are not applied — every stat and competence is augmentable, as specified.

---

## 2. Files

### Created

| File | Purpose |
|---|---|
| `src/plugins/constants/TEW_Levelling.ts` | XP cost tables and bracket/cost/range-cost helpers (`TEW.LEVELLING`) |
| `src/plugins/menu/status/Game_Levelling.ts` | Pending advances for one levelling session: buy, refund, summarise, commit |
| `src/plugins/menu/status/Window_StatusLevellingSummary.ts` | Scrollable list of pending augments |
| `src/plugins/menu/status/Window_StatusLevellingConfirm.ts` | Confirm / Discard / Back command window, drives the summary's scrolling |

### Modified

| File | Change |
|---|---|
| `src/plugins/_types/tew.ts` | Typed `TEW.LEVELLING`; added `MENU.LEVEL_UP_KEY` and `MENU.LEVEL_UP_KEY_LABEL` |
| `src/plugins/constants/import.ts` | `TEW.LEVELLING = TEW.LEVELLING \|\| {}` |
| `src/plugins/base/stats/Game_Actor.ts` | Levelling region: `availableExp`, `spendExp`, `statAdvances`, `compAdvances`, `nextStatAdvanceCost`, `nextCompAdvanceCost`, `applyStatAdvances`, `applyCompAdvances` |
| `src/plugins/menu/main/properties.ts` | `TEW.MENU.LEVEL_UP_KEY`; command names 55–60 and their `TextManager` getters |
| `src/plugins/menu/backgrounds.ts` | Sizes and background images for the two new windows |
| `src/plugins/menu/status/Window_StatusCommand.ts` | Fixed command width + levelling indicator |
| `src/plugins/menu/status/competences/Window_StatusCompetences.ts` | Levelling colours, left/right augment handling |
| `src/plugins/menu/status/Scene_Status.ts` | Mode toggle, session wiring, confirmation flow, focus save/restore |

Nothing outside `./src` was modified. `js/plugins/TEW/*.js` is left untouched — run `src/plugin_compiler.sh`
to regenerate it.

---

## 3. Design notes

**Where the pending state lives.** `Game_Levelling` is a plain game object created by `Scene_Status` and
handed to the windows that read or write it (`setLevelling`). This keeps the actor untouched until the
player confirms, makes "discard everything" a single `clear()`, and means the four status windows share one
source of truth for the experience counters.

**Refund symmetry.** The k-th pending advance costs `cost(origin + k - 1)`. Buying reads that value before
incrementing, refunding reads it after decrementing, so a buy/refund round-trip always returns the exact
amount spent — including across a bracket boundary. This is covered by the tests in §5.

**Layout.** The topbar commands use a fixed `Window_StatusCommand.COMMAND_WIDTH = 200`, so the indicator
area is `contentsWidth - 4 * (200 + spacing) - 20 ≈ 352px`. The summary window reuses the 640×440
`bg_menuHalfWindowList` box (centred, y = 60) and the confirm window the 280×168 `bg_menuDetailsCommand3`
box (centred, y = 520) so both match an existing background asset exactly. If you would rather redesign
these, the logic is fully separated: `Game_Levelling.remainingExp()`, `.spentExp()`, `.summary()` and
`.hasAdvances()` give you everything the visuals need.

**Scrolling the summary.** The summary window is never activated (no cursor). The confirm window owns the
focus: up/down pick a command, page up / page down (Q/W) scroll the summary, and the mouse wheel scrolls it
directly.

---

## 4. Decisions taken where the spec was open

1. **Input key: A.** `A_Key` and `E_Key` were both mapped in `properties.ts` and unused anywhere in the
   codebase. A was picked; change `TEW.MENU.LEVEL_UP_KEY` and `..._LABEL` to move it.
2. **Three prompt commands instead of two.** The spec says exiting with spent experience "should prompt for
   confirmation", but does not say what the negative answer means. Discarding a long session on a mis-press
   seemed harsh, and a plain Confirm/Cancel gives no way to discard on purpose — so the prompt offers
   Confirm (apply), Discard (drop everything) and Back (resume editing). Escape maps to Back.
3. **Actor switching is blocked in levelling mode.** Page up / page down on the topbar do nothing while
   levelling mode is active, since a session belongs to a single actor and switching would silently drop it.
4. **Stat augment: logic only, no UI.** The cost table covers both columns, so `TEW.LEVELLING` and
   `Game_Levelling` implement characteristics too (`increaseStat`, `decreaseStat`, `statValue`, and the
   summary lines). `Window_StatusStats` was **not** touched — wiring it up is a matter of adding the same
   colour and left/right handling that `Window_StatusCompetences` now has.
5. **Max wounds are recomputed on stat advances.** `applyStatAdvances` re-derives `_paramBase[0]` via
   `calculateMHP()`, since MHP is a function of TOUG/STRG/WILL. Inert until the stat UI is wired.

---

## 5. Verification

A full working copy of `./src` was compiled and the plugins were assembled with `plugin_compiler.sh`.

1. **`tsc --project ./tsconfig.json`** — clean, both before and after the change (no new errors, no new
   warnings).
2. **`plugin_compiler.sh`** — all four bundles assemble; `node --check` parses each one.
3. **Change footprint.** The bundles were rebuilt from pristine sources and compared region by region
   against the bundles built from the modified sources. The only differences are the intended ones:
   - `TEW_Constants.js`: new `TEW_Levelling` region, changed `import` region
   - `TEW_Base.js`: changed `Game_Actor` region
   - `TEW_Menus.js`: new `Game_Levelling`, `Window_StatusLevellingSummary`,
     `Window_StatusLevellingConfirm` regions; changed `Scene_Status`, `Window_StatusCommand`,
     `Window_StatusCompetences`, `backgrounds`, `properties`
   - `TEW_Combat.js`: unchanged
4. **Behavioural tests.** The compiled `TEW_Levelling` and `Game_Levelling` regions were loaded in Node
   against a stub actor and exercised:
   - all 30 cost-table boundary values (both columns) transcribed straight from `level-up.md`
   - range costs equal the sum of the individual advances; an empty range costs 0
   - buying across a bracket boundary (4 → 7 on a competence: 10 + 10 + 15 = 35)
   - refunding returns exactly what was spent, and refusing to go below the actor's current value
   - refusing an advance the remaining experience cannot pay for, without touching the counters
   - `summary()` ordering (characteristics first, then competences by display name) and per-line costs
   - `apply()` writing advances to the actor, consuming the experience and clearing the session

   All assertions pass.

### Not verified

The visual result was not run in the engine — no RPG Maker runtime was available. Worth a look on the
first run:

- the indicator's fit in the freed topbar area at your font size (labels and values are drawn in two
  halves of ~176px each)
- the two prompt windows against their background images (both sizes match the assets exactly, but the
  vertical placement, y = 60 and y = 520, is a judgement call)

---

## 6. Incidental observations

- **`Scene_Status.onActorChange` was broken.** The base RMMV implementation calls
  `this._statusWindow.activate()`, and this scene has no `_statusWindow` (it uses `_statsWindow`), so
  switching actors from the status topbar would throw. An override was added — it refreshes the actor and
  reactivates the command window. It is a two-line fix and was needed for the "no actor switching in
  levelling mode" rule to behave sanely, but flagging it since it is outside the requested scope.
- **`js/plugins/TEW/*.js` is stale.** Rebuilding from the current `./src` produces differences in
  `Window_InventoryTransferSpinner` and `Game_BattlerBase` that predate this work — the committed bundles
  are behind the sources.
- **`addComp` on a not-yet-owned advanced competence** starts from `-1`, so `addComp(id, 3)` yields 2.
  Existing behaviour, untouched: augments only apply to competences the actor already owns, which are the
  only ones the window lists.
