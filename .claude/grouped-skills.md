# Grouped skills and `(Any)` specialisations

## Definition

Some skills and talents are *grouped*: the name is a heading covering several *specialisations*, each of which
behaves as a skill of its own. Careers may list a grouped skill as `Skill (Any)`, meaning the character picks one
specialisation of that group.

There are currently 13 such competence entries and 11 such talent entries across the 256 careers in
./src/plugins/constants/TEW_Careers.ts:

| Competences | Talents |
|-|-|
| `LANGUAGE_ANY` (41 careers), `MELEE_ANY` (29), `LORE_ANY` (18), `STEALTH_ANY` (12), `PLAY_ANY` (11), `ENTERTAIN_ANY` (11), `TRADE_ANY` (10), `RANGED_ANY` (10), `PERFORM_ANY` (4), `ART_ANY` (4), `SECRET_SIGNS_ANY` (3), `RIDE_ANY` (3), `ANIMAL_TRAINING_ANY` (3) | `ETIQUETTE_ANY` (15), `ACUTE_SENSE_ANY` (5), `STRIDER_ANY` (4), `HATRED_ANY` (4), `SAVANT_ANY` (3), `INVOKE_ANY` (3), `BLESS_ANY` (3), `RESISTANCE_ANY` (2), `MASTER_TRADESMAN_ANY` (2), `CRAFTSMAN_ANY` (2), `FEARLESS_ANY` (2) |

None of these IDs exist in `TEW.DATABASE.COMPS.SET` or `TEW.DATABASE.TALENTS.SET`. The levelling mode currently
drops them, so a career's `(Any)` entries grant nothing at all. 136 of the 256 career levels have no wildcard, 89 have
one, and the rest have between two and six (`ENTERTAINER_4` has six).

### Magic is not part of this

`CHANNELLING_ANY` (12 careers) and `ARCANE_MAGIC_ANY` (1) look like wildcards but are **not** grouped skills, and
this document does not cover them. Both are resolved on their own in `Game_Actor.refreshCareerCache()`, and the rules
behind them live in .claude/spells.md:

- **`CHANNELLING_ANY` resolves to the single `CHANNELLING` competence.** There is no group and no pick to make: one
  ungrouped competence holds the advances for every caster, and `Game_BattlerBase.channellingName()` renames it after
  the caster's wind — "Channelling" while untrained, "Channelling (Aqshy)" once they study that wind's lore. The nine
  `CHANNELLING_<WIND>` entries have been removed from the database, since two competences for one skill would split
  the advances at the moment the caster is attuned.
- **`ARCANE_MAGIC_ANY` resolves to the bare `ARCANE_MAGIC` talent**, which is bought as it stands and transformed
  into the wind's own `ARCANE_MAGIC_<WIND>` by `Game_Actor.addTalent()`. The wind is a property of the character, so
  there is nothing for a picker to offer.

Everything below therefore concerns the thirteen competence groups and eleven talent groups in the table above.

### Divine powers are not part of this

`INVOKE_ANY` and `BLESS_ANY` look like wildcards but are **not** grouped skills, and
this document does not cover them. They will be implemented later in a similar fashion to magic skills, and should
remain hidden in levelling mode for now.

## Settled

Decided during review, and assumed by everything below:

- the career history lives on `Game_Actor` (inside `$gameActors`), not on `$dataActors`;
- the career data must be able to hold several instances of the same `Skill (Any)`;
- the bare unspecialised entries are to be removed from the database, as they cannot be acquired — see
  *Removing the bare group entries*;
- competences and talents gain an explicit `group` field rather than being matched by ID prefix;
- Channelling and Arcane Magic are out of scope, being handled by the magic rules instead — see *Magic is not part
  of this* above;
- Invoke and Bless are out of scope, they will be handled later separately, the religious specialisations need their 
  own limits — see *Divine powers are not part of this* above;
- **breaking existing save files is acceptable.** No migration or conversion path needs writing for any of this. If
  repairing old saves becomes worth doing later, it will be its own feature.

## Findings

### The choice is made when the advance is allocated

> if a Talent or Skill is marked '(Any)' it means you can choose one of the options for that Talent or Skill **when in
> that Career Level** — *Careers, p.46*

> When you gain an Advance in a Grouped Skill, you must allocate the Advance to an appropriate Specialisation.
> Sometimes the Specialisation options will be marked clearly in your Career, so you simply select one of the options
> on offer. In other cases — such as when a Specialisation is marked as 'Any', meaning you can choose one
> Specialisation — you will need to select a Specialisation yourself — *Grouped Skills and Specialisation, p.118*

So the pick is an explicit decision taken at the moment experience is spent, and it is scoped to a career level rather
than to the character. That is a close match for the third approach in the brief (the `(Any)` row opens a list of
relevant skills), and it is the reason it is recommended below.

### `Melee (Basic)` and `Melee (Brawling)` are part of `Melee (Any)`

> Specialisations: Basic, Brawling, Cavalry, Fencing, Flail, Parry, Pole-Arm, Two-Handed — *Melee (WS), p.126*

There is no rule excluding either of them, so the exception in the brief does not hold as written. What probably
prompted it is a different and real problem: some careers list a grouped skill as `(Any)` **and** list one of its
specialisations explicitly. `Entertainer` lists `MELEE_BASIC` outright, and one career level in the rulebook reads
`Intimidate, Melee (Any), Melee (Brawling)`. Spending the `(Any)` pick on a specialisation the same career already
grants is pure waste, so the useful rule is:

> a career's `(Any)` slot never offers a specialisation that the same career lists explicitly

That is data-driven, needs no hardcoded exception list, and covers the `Melee (Basic)` case wherever it actually
matters. A small explicit exclusion list can still be kept on top of it for house rules.

### Career history lives in `$dataActors`

The history belongs on `Game_Actor`, next to `_career`. Note also that `_competences` is a positional array indexed by
`TEW.DATABASE.COMPS.IDS`: the history must store IDs, never indices.

## Removing the bare group entries

Confirmed as unacquirable placeholders, and referenced nowhere outside their own definitions:

| Competences | Talents |
|-|-|
| `ANIMAL_TRAINING`, `STEALTH` | `CRAFTSMAN`, `HATRED`, `MASTER_TRADESMAN`, `SAVANT`, `STRIDER` |

`HATRED` and `SAVANT` carry `//TODO` and a placeholder description, which is what gave them away.

`ARCANE_MAGIC` was on this list and has since been taken off it: it is neither a group heading nor a placeholder but
the talent a caster actually buys, transformed into their wind's own on purchase. It must stay.

### Channelling is already settled, and is not one of these

The rulebook's wording is what put it here in the first place:

> Channelling is a special skill in that it is both Grouped, allowing for Specialisations, and also ungrouped, for
> those not properly trained to channel magic — *Channelling (WP), p.126*

Rather than a group with an extra ungrouped member, this is now modelled as one competence with two names. The nine
`CHANNELLING_<WIND>` entries are gone, a single `CHANNELLING` has replaced them, and the specialisation shows only in
the displayed name. Nothing in this document applies to it. See *Magic is not part of this* above.

### Removing competences shifts every competence index

Talents are stored as `Record<string, number>`, so removing talent entries costs nothing.

Competences are not. `_competences` is a positional array indexed by `TEW.DATABASE.COMPS.IDS`. `ANIMAL_TRAINING`
sits near the top of the list and `STEALTH` two thirds of the way down, so removing them displaces almost every
competence that follows. A save written before the change loads with those values on the wrong skills.

This has already happened once: collapsing the nine `CHANNELLING_<WIND>` entries into a single `CHANNELLING` shifted
every competence after it, and the saves written before it are void.

Breaking saves is allowed, so this is not a blocker and no conversion is needed. It is still worth keying
`_competences` by ID — `Record<string, number>`, exactly like `_talents` — for a different reason: **the failure is
silent**. A displaced positional array does not throw, does not look wrong, and reports plausible numbers on the
wrong skills; the save appears to load fine. A record keyed by ID either finds the entry or does not, so the same
mistake surfaces immediately instead of masquerading as data. Permission to break saves makes loud breakage
acceptable, not silent corruption.

The second reason is that this recurs. The competence list is open-ended — `LORE_*` alone has 47 entries and the
rulebook invites more — so every future addition or removal repeats the problem for as long as the array is
positional.

The change is small and contained: `TEW.CHARACTERS.BASE_COMP_VALUES` and the five accessors that funnel through
`COMPS.IDS.indexOf(...)` (`compPlus`, `hasComp`, `addComp`, `learnComp`, `anyCompOfCategory`). With no migration to
write, it is now cheaper than it was. Worth doing in the same change as the removal.

One detail to preserve: the array currently encodes "advanced competence not yet learnt" as `-1`, distinct from a
learnt competence sitting at `0` advances. In a record, absence of the key is the natural way to say the same thing,
which is clearer — but `hasComp`, `compPlus` and `learnComp` all depend on that distinction and must be moved over
together.

Conclusion: This change will be applied, to make `_competences` a record, and use `undefined` in place of `-1` to
determine whether a skill is displayed / usable or not.

## Career data: several instances of the same `(Any)`

`career.competences` is currently a flat array of unique IDs, already compounded across the levels of a path, and no
career level repeats an entry. A path granting `Lore (Any)` at level 1 *and* again at level 3 — two picks, per the p.46
wording — collapses to a single `LORE_ANY`.

The tidiest fix is to stop mixing the two kinds of entry, and let the wildcard list repeat:

```ts
export type Career = {
    name: string;
    level: number;
    path: CareerPath;
    status: CareerStatus;
    improvableStats: Stat[];
    /** Concrete competence IDs, unique */
    competences: string[];
    /** One entry per pick the career grants; repeats mean several picks */
    anyCompetences: string[];   // e.g. ["LORE_ANY", "LORE_ANY", "MELEE_ANY"]
    /** Concrete talent IDs, unique */
    talents: string[];
    /** One entry per pick, same convention */
    anyTalents: string[];
    /** Derived at load from the presence of Language (Magick) */
    isMagical: boolean;
};
```

This keeps `competences` and `talents` as plain `string[]`, so nothing downstream has to narrow a union type, and the
compounding step simply concatenates the wildcard lists where it unions the concrete ones. `improvableComps()` keeps
returning plain IDs.

Splitting the existing data is mechanical — every `*_ANY` entry moves to the new field, `CHANNELLING_ANY`,
`ARCANE_MAGIC_ANY`, `INVOKE_ANY` and `BLESS_ANY` excepted: those four are not picks, and stay in `competences` and
`talents` where `refreshCareerCache()` already resolves them. The **counts** are the part that has to come from the
rulebook, career level by career level, since the current data cannot tell one pick from two.

Conclusion: this change will be implemented, the new field storing group skills should be called 'groupCompetences'.

## Group membership should be data, not a prefix

`Game_BattlerBase.prototype.anyCompOfCategory` already resolves a category by prefix, and it would be tempting to
reuse that. It is not safe as the source of a picker's contents:

- it sweeps in the bare entries above, and it would just as happily fold `ARCANE_MAGIC` into a group it heads rather
  than belongs to;
- any ID that merely shares a prefix joins the group silently;
- the pools are open-ended in the book ("with GM permission, create a unique Specialisation"), and the data already
  diverges from it — `LORE_*` has 47 entries against the rulebook's ten samples. Which of those 47 to offer is a
  curation decision that wants somewhere to live.

The proposal is an explicit optional field on the existing types:

```ts
export type Competence = {
    name: string;
    stat: Stat;
    isBase: boolean;
    /** Grouped skill this is a specialisation of, e.g. "MELEE" for Melee (Fencing) */
    group?: string;
};
```

with `TEW.DATABASE.COMPS.GROUPS: Record<string, SpecialisationGroup>` derived at load in TEW_Competences.ts, and the
same for talents. `MELEE_ANY` then resolves to `GROUPS.MELEE.members` by construction. The initial values can be
generated from the prefixes and hand-corrected for the few odd entries — a mechanical migration of 197 competences and
242 talents, done once.

Conclusion: this will be implemented.

## Limiting magical and religious specialisations

These groups are not free choices. The rulebook constrains them in two distinct ways, and both need modelling.

**A cap on how many members of a group may be known:**

> Arcane Magic (Lore) — Max: 1 […] Under normal circumstances, you may not learn more than one Arcane Magic (Lore)
> Talent — *p.137*

> Bless (Divine Lore) — Max: 1 […] you may only ever know one Divine Lore for the Bless Talent — *p.137*

> Invoke (Divine Lore) — Max: 1 […] you may not learn more than one Invoke (Divine Lore) Talent — *p.139*

**Exclusions between groups:**

> [Arcane Magic] you may not learn the Bless or Invoke Talents when you have the Arcane Magic Talent — *p.137*

> [Invoke] you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent — *p.139*

> [Magic Resistance] you may never learn the Arcane Magic, Bless, Invoke, Petty Magic, or Witch! Talents — *p.139*

Both fit on the group descriptor rather than on individual talents, which is why `SpecialisationGroup` above is a
record and not a bare array:

```ts
export type SpecialisationGroup = {
    /** Member IDs, filled at load from the `group` fields */
    members: string[];
    /** At most this many members may ever be known; undefined means no limit */
    maxKnown?: number;
    /** Group IDs, or standalone talent IDs, which cannot be held alongside any member */
    excludes?: string[];
};
```

giving, for the talents:

| Group or talent | `maxKnown` | `excludes` |
|-|-|-|
| `BLESS` (group) | 1 | `ARCANE_MAGIC` |
| `INVOKE` (group) | 1 | `ARCANE_MAGIC`, `PETTY_MAGIC` |
| `ARCANE_MAGIC` (single talent) | — | `BLESS`, `INVOKE` |
| `PETTY_MAGIC` (single talent) | — | `INVOKE` |
| `MAGIC_RESISTANCE` (single talent) | — | `ARCANE_MAGIC`, `BLESS`, `INVOKE`, `PETTY_MAGIC`, `WITCH` |

Only Bless and Invoke are groups. Arcane Magic is bought bare and transformed into the wind's own talent, so its
"Max: 1" is enforced by the character having exactly one wind and is already handled in
`Game_Actor.canBuyMagicTalent()`; it appears in the table for the exclusions alone.

Note the book states those asymmetrically — Invoke's entry names Petty Magic and Arcane Magic, Arcane Magic's names
Bless and Invoke, and Bless's entry names nobody. Taken literally, whether the rule bites depends on the order the
player buys them in. They should be **normalised to a symmetric set at load**, so that `A excludes B` always implies
`B excludes A`.

`Game_Actor.canBuyTalent()` then also has to check that the group's `maxKnown` is not already reached and that no
excluded talent is held. Both checks must count the talents pending in the current levelling session, or a player could
buy Bless and Invoke in one go and have it accepted at confirmation. The magic side of that method already works this
way, which is the pattern to follow.

Conclusion: Ignore magic and divine skills, restrictions are in place for arcane magic, and will be implemented
separately for invoke and bless. Do not implement this.

## Plan

### Storing the picks

A flat list of slots on the actor, rather than a nested history, because it survives the multiplicity problem and
keeps the lookups trivial:

```ts
export type AnySlot = {
    /** Career ID the slot comes from, e.g. "ENTERTAINER_1" */
    career: string;
    /** Wildcard entry which opened the slot, e.g. "MELEE_ANY" */
    wildcard: string;
    /** Chosen specialisation ID, or null while the slot is unspent */
    chosen: string | null;
};
```

`Game_Actor._anySlots: AnySlot[]`, alongside `_career`. Slots are added when a career is entered and never removed;
`chosen` is written once and is permanent, which is what the p.118 wording implies.

Career change is not implemented yet, so for now slots can be reconciled lazily: on reading them, add a slot for each
entry of the current career's `anyCompetences` / `anyTalents` that has no slot yet — counting repeats, so two
`LORE_ANY` entries produce two slots — and leave everything already there alone. That behaves correctly with a single
career today and keeps working once career change starts appending to the list.

`Game_Actor.improvableComps()` then returns the concrete career competences plus every `chosen` value, and a new
`openAnySlots()` returns the unspent ones for the window to render. Talents get the same treatment; sharing one list
with a `kind: 'comp' | 'talent'` discriminator is probably tidier than two parallel arrays.

### Three ways to spend a slot

**A — every specialisation lights up, the first advance binds the slot.** The second approach in the brief. No new UI:
all members of the group become improvable, and buying an advance on one of them consumes the slot and returns the
others to the normal colour.

Cheap, and it reads naturally as "allocate the advance to a specialisation". It falls apart on the large groups: an
open `LORE_ANY` would light up 47 rows and, since levelling mode promotes improvable competences to the top of the
list, bury everything else under Lore. `TRADE_ANY` would add 27. It is also ambiguous when two slots of the same group
are open at once — which slot did this advance consume? — and a refund has to release the right one. Now that two
slots of one group are an explicit requirement, that ambiguity is no longer a corner case.

**B — the `(Any)` row is itself an entry, and opens a picker.** The third approach in the brief, and the recommended
one. A single row reading `Melee (Any)` appears in the improvable block. Pressing OK on it opens a chooser listing the
group's specialisations; picking one binds the slot for the session, after which the row is replaced by the bound
skill and the horizontal arrows buy advances on it exactly as they do anywhere else.

One row per slot regardless of pool size, so nothing is buried. N open slots of the same group are simply N rows, so
multiplicity needs no special handling in the UI. The binding is an explicit decision, which makes it undoable and
makes it something the confirmation summary can show. It is also the only one of the three with an obvious place to
report a refusal — "you already know a Divine Lore" belongs in a picker, not in a silently-not-blue row. It costs a
new window (`Window_StatusLevellingCompChoice`, plus a talent equivalent or one shared window) and a scene state.

**C — one row, bound by the first left/right press.** B with a different trigger: the arrows open the picker the first
time and buy advances afterwards. It saves nothing over B and overloads a key that means one thing everywhere else in
levelling mode. Not recommended.

### Fitting B into the existing levelling session

The pieces are mostly already there, since `Game_Levelling` is built around holding pending changes and writing
nothing until the player confirms:

- `Game_Levelling._pendingPicks: Record<number, string>` keyed on slot index, dropped by `clear()` like everything else;
- `Window_StatusCompetences.makeCompsList()` already builds its list explicitly and promotes improvable competences,
  so open slots become extra synthetic rows in the improvable block. They need a distinct look — the levelling colour
  plus a hint that OK opens a list — and they must be skipped by the arrow handlers;
- `Game_Levelling.summary()` gains a line per pick, e.g. `Melee (Any) > Melee (Fencing)`, so the confirmation window
  shows the binding as well as the advances it paid for;
- `apply()` writes `chosen` onto the slot before applying the advances, and `learnComp` already handles the case
  where the specialisation was never learnt;
- refunding every advance bought through a slot should release the pending pick within the session, so a player can
  change their mind without leaving levelling mode. Once confirmed it is permanent.

The pool offered by the picker is `GROUPS[group].members`, minus the specialisations the career lists explicitly, minus
those already bound by another slot of the same group, minus any group cap or exclusion from the section above, minus
any house-rule exclusions. Whether to also hide specialisations the character already has advances in is a design
question — the rules do not forbid picking one, and there are cases where a character has a specialisation from their
species or background and wants the career slot to advance it, so hiding them is probably wrong. Showing their current
value in the picker would help the choice.

### Suggested order of work

1. Key `_competences` by ID, then remove the bare group entries. Existing saves are discarded rather than converted.
2. Add the `group` field and the `GROUPS` index to competences and talents, with `maxKnown` and `excludes` on the
   Bless and Invoke groups. Nothing else changes; the wildcards stay dropped, so the game keeps working.
3. Enforce `maxKnown` and `excludes` in `Game_Actor.canBuyTalent()` and in the levelling session. This is independent
   of the picker and already improves the talents window as it stands today.
4. Split the career wildcards into `anyCompetences` / `anyTalents`, and fill in the counts from the rulebook.
5. Add `AnySlot`, `_anySlots` and the lazy reconciliation to `Game_Actor`, with `improvableComps()` folding in the
   bound picks. Still no UI — but a slot bound by hand in the console becomes improvable, which is enough to test the
   whole read path.
6. Add the picker window and wire it into `Scene_Status` and `Game_Levelling`.
7. Talents, reusing whatever step 6 produced.

The `CHANNELLING` and `ARCANE_MAGIC_*` work that used to bookend this list is done, and lives with the magic rules.

## Open questions

- The book allows unlearning Arcane Magic and Invoke for 100 XP, at the cost of every spell or miracle known. Worth
  deciding whether that is ever exposed, since it is the only escape from a badly chosen Divine Lore.
- `Secret Signs (Guild (any one))` is a nested `(Any)` — the specialisation is itself parameterised.
- `(Local)` is currently modelled as concrete IDs (86 occurrences of `*_LOCAL` in the career data). Per p.46 it is the
  same mechanism as `(Any)`, only drawn from the local area. Leaving it concrete is fine, but it could reuse the slot
  model later, with the pool filtered by region.
- Should a bound pick ever be re-bindable? The rules say no, and leaving it permanent is simpler.

### Answers

For now, treat Secret Signs (Guild (any one)) and (Local) with the same workings as (Any) skills. The entries should still be
recorded as something like SECRET_SIGNS_GUILD_ANY or LORE_LOCAL_ANY, but their own mechanics will be decided later.

Arcane magic and Invoke should not be affected by this feature, and their unlearning is a concern for later.

Using an (Any) slot to pick a skill should be irreversible.

## Data bugs noticed while investigating

Unrelated to this feature, but they will bite whoever implements it:

- `INVOKE_MYMIDIA` is missing an `R`; the display name `Invoke (Myrmidia)` is correct, and `BLESS_MYRMIDIA` is spelt
  properly, so it is the ID alone.
- `FEARLESS_EVERYTHING` ("Fearless (Everything)") shares the generic Fearless description; worth checking it is a real
  specialisation and not a placeholder.

Two more have since been fixed by the magic rules: `ARCANE_MAGIC_*` now covers the eight Arcane Lores keyed by their
wind, and the ungrouped `CHANNELLING` competence exists.

`MYSTIC_4` (Seer) still looks off: it grants `ARCANE_MAGIC_AZYR` and `CHANNELLING` outright, so it only makes sense
for a character tied to Azyr, yet it lists no `LANGUAGE_MAGICK` and so is not flagged as a magical career.
