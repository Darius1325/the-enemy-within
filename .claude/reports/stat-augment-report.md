# Stat augments — implementation report

Date: 16/08/2026
Scope: the "Stat augment" section of `.claude/level-up.md`, plus the blue colour the competence values
were missing.
Out of scope: talents/spells/prayers, career advances.

---

## 1. What was built

### Blue values

`level-up.md` asks for augmentable values in `textColor(1)`. `Window_StatusCompetences` was using
`systemColor()`, which is the same colour as the competence label next to it — hence values that never
looked blue on entering levelling mode.

- `Window_Base.prototype.levellingColor()` was added next to `whiteColor` / `normalColor`, returning
  `textColor(1)`.
- Both `Window_StatusCompetences.competenceLevelColor` and the new
  `Window_StatusStats.statValueColor` use it.

### Stat augment

`Window_StatusStats` is now selectable and drives the same three-colour scheme as the competences list:

- ten items, one per characteristic — max wounds (param 0) is excluded, since it is derived from
  TOUG / STRG / WILL rather than bought
- while levelling mode is active, a characteristic whose next advance is affordable is drawn in
  `levellingColor()`, and one with pending advances in `powerUpColor()` (green)
- right / left on the selected characteristic buys / refunds one advance and updates the experience
  counters; the value cannot go below the actor's current value nor above what the remaining
  experience affords
- every characteristic is augmentable — no career gating, as specified

Career restrictions are not applied anywhere.

---

## 2. Files

### Modified

| File | Change |
|---|---|
| `src/plugins/menu/Window_Base.ts` | `levellingColor()` returning `textColor(1)` |
| `src/plugins/menu/status/competences/Window_StatusCompetences.ts` | augmentable values use `levellingColor()` instead of `systemColor()` |
| `src/plugins/menu/status/stats/Window_StatusStats.ts` | selectable list, two-column `itemRect`, levelling colours, left/right handling, layout constants |
| `src/plugins/menu/status/Scene_Status.ts` | stats window takes focus, `cancel` / `levelling_change` handlers, levelling session and mode wiring, focus save/restore |

Nothing outside `./src` was modified. `js/plugins/TEW/*.js` is untouched — run `src/plugin_compiler.sh`
to regenerate it.

---

## 3. Design notes

**Column-major navigation.** The window keeps `maxCols() === 1` and overrides `itemRect` instead: index
0–4 are the left column (x = 48), 5–9 the right (x = 432), five rows each starting at line 8. Indices map
to params by `index + 1`.

This matters because levelling mode takes the horizontal arrows over. Had the window used
`maxCols() === 2` the way the layout suggests, buying an advance and moving between columns would both be
bound to left/right, and the right-hand column would be unreachable while levelling. With one logical
column, up/down walks all ten characteristics — down from Toughness lands on Initiative at the top of the
right column — and left/right are free.

The ten cells fit in the contents area (bottom row ends at y = 468, contents height is 588), so
`maxTopRow()` is 0 and the window never scrolls. The custom rects therefore stay valid, and mouse
selection lands on the visible cells.

**Focus.** The stats tab now behaves like the competences tab: picking `Stats` in the topbar moves the
cursor into the window, cancel returns to the topbar. This was your call — it keeps the four tabs
consistent and means entering levelling mode needs no special-casing for the stats page.

**Layout constants.** The magic numbers that were inline in `drawStats` / `drawParameters` are now named
statics on the window (`COLUMNS_X`, `NAME_COLUMN_WIDTH`, `VALUE_COLUMN_WIDTH`, `STATS_FIRST_LINE`,
`SEPARATOR_LINE`, `CURSOR_PADDING`, `BASIC_INFO_WIDTH`), so the drawing code and the cursor rects cannot
drift apart.

**The EXP line.** In levelling mode `drawActorExp` shows `Game_Levelling.remainingExp()` rather than the
actor's total, so it agrees with the `XP left` counter in the topbar instead of contradicting it. Outside
levelling mode it shows `actor.availableExp()`, which is the same value it read before via `actor._exp`.

---

## 4. Known gaps

- **Max wounds do not preview.** The wounds gauge keeps showing the committed `actor.mhp` while TOUG,
  STRG or WILL advances are pending. `Game_Actor.applyStatAdvances` re-derives `_paramBase[0]` on
  confirmation, so the number is correct as soon as the session is applied — it just does not move while
  you are still choosing. Say the word if you would rather it previewed.
- **No details panel.** Unlike competences, the stats page has no right-hand window, so there is nowhere
  to show the cost of the next advance before buying it. The cost is only visible as the change in
  `XP left`.

---

## 5. Verification

1. **Type check.** `tsc` runs clean over the part of `./plugins` reachable from the change — every file
   that imports or is imported by the four modified ones, including `menu/backgrounds.ts`,
   `Game_Levelling.ts` and `TEW_Levelling.ts`. Modules outside that set were stubbed, so this is not a
   substitute for a full `tsc --project ./tsconfig.json` on your machine; nothing in the change should
   affect them.
2. **Parse check.** The four files were transpiled and put through the same rewrites
   `plugin_compiler.sh` applies before concatenation; `node --check` parses each resulting region.
3. **Behavioural tests.** The compiled `TEW_Levelling`, `Game_Levelling` and `Window_StatusStats`
   regions were loaded in Node against a stub actor and exercised:
   - all 30 cost-table boundary values, both columns, transcribed from `level-up.md`
   - ten items mapping to params 1–10, max wounds excluded
   - two columns of five, cells distinct, all inside the contents area
   - values plain outside levelling mode; blue when affordable, green when pending, plain when the
     remaining experience cannot pay
   - right buys, left refunds, a round trip returns exactly what was spent, and the floor is the
     actor's current value
   - crossing a bracket boundary (4 → 7 advances: 25 + 25 + 30) and refunding back across it
   - an unaffordable advance is refused without touching the counters or notifying the scene
   - all ten characteristics augmentable, confirming no career gating
   - the EXP line tracking the pending spend
   - `apply()` writing the advances to the actor and consuming the experience
   - a full draw pass: ten labels in system colour, ten values, the pending one green

   All assertions pass.

### Not verified

The visual result was not run in the engine. Worth a look on the first run:

- the selection cursor's fit around a characteristic — it spans the label and the value with 8px of
  padding either side (`CURSOR_PADDING`)
- whether handing focus to the stats window feels right when arriving from the topbar
