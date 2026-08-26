# Grouped skills and `(Any)` specialisations

## Definition

Some skills and talents are *grouped*: the name is a heading covering several *specialisations*, each of which
behaves as a skill of its own. Careers may list a grouped skill as `Skill (Any)`, meaning the character picks one
specialisation of that group.

There are currently 14 such competence entries and 12 such talent entries across the 256 careers in
./src/plugins/constants/TEW_Careers.ts:

| Competences | Talents |
|-|-|
| `LANGUAGE_ANY` (41 careers), `MELEE_ANY` (29), `LORE_ANY` (18), `STEALTH_ANY` (12), `CHANNELLING_ANY` (12), `PLAY_ANY` (11), `ENTERTAIN_ANY` (11), `TRADE_ANY` (10), `RANGED_ANY` (10), `PERFORM_ANY` (4), `ART_ANY` (4), `SECRET_SIGNS_ANY` (3), `RIDE_ANY` (3), `ANIMAL_TRAINING_ANY` (3) | `ETIQUETTE_ANY` (15), `ACUTE_SENSE_ANY` (5), `STRIDER_ANY` (4), `HATRED_ANY` (4), `SAVANT_ANY` (3), `INVOKE_ANY` (3), `BLESS_ANY` (3), `RESISTANCE_ANY` (2), `MASTER_TRADESMAN_ANY` (2), `CRAFTSMAN_ANY` (2), `FEARLESS_ANY` (2), `ARCANE_MAGIC_ANY` (1) |

None of these IDs exist in `TEW.DATABASE.COMPS.SET` or `TEW.DATABASE.TALENTS.SET`. The levelling mode currently
drops them, so a career's `(Any)` entries grant nothing at all. 136 of the 256 career levels have no wildcard, 89 have
one, and the rest have between two and six (`ENTERTAINER_4` has six).

## Settled

Decided during review, and assumed by everything below:

- the career history lives on `Game_Actor` (inside `$gameActors`), not on `$dataActors`;
- the career data must be able to hold several instances of the same `Skill (Any)`;
- the bare unspecialised entries are to be removed from the database, as they cannot be acquired — with one
  exception found since, see *Removing the bare group entries*;
- competences and talents gain an explicit `group` field rather than being matched by ID prefix;
- magical and religious specialisations need their own limits;
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

### Career history cannot live in `$dataActors`

`$dataActors` is the static database loaded from `data/Actors.json`. RMMV save files hold the `$game*` objects that
`DataManager.makeSaveContents` collects — `$gameActors` among them — and this project does not override that method.
Anything written to `$dataActors` would be shared by every save and lost on reload.

The history belongs on `Game_Actor`, next to `_career`. Note also that `_competences` is a positional array indexed by
`TEW.DATABASE.COMPS.IDS`: the history must store IDs, never indices.

## Removing the bare group entries

Confirmed as unacquirable placeholders, and referenced nowhere outside their own definitions:

| Competences | Talents |
|-|-|
| `ANIMAL_TRAINING`, `STEALTH` | `ARCANE_MAGIC`, `CRAFTSMAN`, `HATRED`, `MASTER_TRADESMAN`, `SAVANT`, `STRIDER` |

`HATRED` and `SAVANT` carry `//TODO` and a placeholder description, which is what gave them away.

### `Channelling` is the exception — and it is missing, not spurious

> Channelling is a special skill in that it is both Grouped, allowing for Specialisations, and also ungrouped, for
> those not properly trained to channel magic — *Channelling (WP), p.126*

So an unspecialised `Channelling` is a real, usable skill for untrained characters, and the database has only the nine
winds (`CHANNELLING_AQSHY` … `CHANNELLING_ULGU`). A bare `CHANNELLING` entry should be **added**. It must then be
excluded from the `CHANNELLING_ANY` pool, since the career grants a wind rather than the untrained skill — which is a
good argument for the `group` field carrying an explicit member list rather than being derived from the prefix.

### Removing two competences shifts every competence index

Talents are stored as `Record<string, number>`, so removing talent entries costs nothing.

Competences are not. `_competences` is a positional array indexed by `TEW.DATABASE.COMPS.IDS`, of which there are
currently 197. `ANIMAL_TRAINING` sits at index 1 and `STEALTH` at index 164, so removing them shifts 195 and 32
entries respectively. A save written before the change loads with almost every competence value displaced by one
position.

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
};
```

This keeps `competences` and `talents` as plain `string[]`, so nothing downstream has to narrow a union type, and the
compounding step simply concatenates the wildcard lists where it unions the concrete ones. `improvableComps()` keeps
returning plain IDs.

Splitting the existing data is mechanical — every `*_ANY` entry moves to the new field. The **counts** are the part
that has to come from the rulebook, career level by career level, since the current data cannot tell one pick from two.

## Group membership should be data, not a prefix

`Game_BattlerBase.prototype.anyCompOfCategory` already resolves a category by prefix, and it would be tempting to
reuse that. It is not safe as the source of a picker's contents:

- it sweeps in the bare entries above — and once `CHANNELLING` is added deliberately, prefix matching would put the
  untrained skill into the `CHANNELLING_ANY` pool, which is wrong;
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

| Group | `maxKnown` | `excludes` |
|-|-|-|
| `ARCANE_MAGIC` | 1 | `BLESS`, `INVOKE` |
| `BLESS` | 1 | `ARCANE_MAGIC` |
| `INVOKE` | 1 | `ARCANE_MAGIC`, `PETTY_MAGIC` |
| `PETTY_MAGIC` (single talent) | — | `INVOKE` |
| `MAGIC_RESISTANCE` (single talent) | — | `ARCANE_MAGIC`, `BLESS`, `INVOKE`, `PETTY_MAGIC`, `WITCH` |

Note the book states these asymmetrically — Invoke's entry names Petty Magic and Arcane Magic, Arcane Magic's names
Bless and Invoke, and Bless's entry names nobody. Taken literally, whether the rule bites depends on the order the
player buys them in. They should be **normalised to a symmetric set at load**, so that `A excludes B` always implies
`B excludes A`.

`Game_Actor.canBuyTalent()` then also has to check that the group's `maxKnown` is not already reached and that no
excluded talent is held. Both checks must count the talents pending in the current levelling session, or a player could
buy Bless and Invoke in one go and have it accepted at confirmation.

### Channelling is a skill, and its constraint is the wind

Careers write `Channelling (Any Colour)`, not `Channelling (Any)`: the pick is a Wind of Magic, and in practice it is
the wind of the lore the character studies. Nothing in the codebase models that yet — `SpellDomain` is a stub with
`ARCANE`, `FIRE` and `PETTY`, and the `ARCANE_MAGIC_*` talents cover only Celestial, Hedgecraft and Witchery out of
the book's eight lores plus the lesser ones.

Two ways to constrain it:

1. **Derive it** from the Arcane Magic talents the character holds, via a lore-to-wind map (Fire/Aqshy,
   Heavens/Azyr, Metal/Chamon, Beasts/Ghur, Life/Ghyran, Light/Hysh, Death/Shyish, Shadow/Ulgu, and Dhar for dark
   magic), falling back to the full list of nine when the character has no Arcane Magic talent. Eight pairs of data,
   and the constraint falls out of what the character already has.
2. **Store it** as an explicit field on the actor, set at character creation.

Option 1 is recommended, but it is blocked on filling in the missing `ARCANE_MAGIC_*` entries — five of the eight
lores are absent, so the map cannot be built yet. Until then `CHANNELLING_ANY` can simply offer all nine winds.

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

1. Key `_competences` by ID, then remove the bare group entries and add the ungrouped `CHANNELLING`. Existing saves
   are discarded rather than converted.
2. Add the `group` field and the `GROUPS` index to competences and talents, with `maxKnown` and `excludes` on the
   magical and religious talent groups. Nothing else changes; the wildcards stay dropped, so the game keeps working.
3. Enforce `maxKnown` and `excludes` in `Game_Actor.canBuyTalent()` and in the levelling session. This is independent
   of the picker and already improves the talents window as it stands today.
4. Split the career wildcards into `anyCompetences` / `anyTalents`, and fill in the counts from the rulebook.
5. Add `AnySlot`, `_anySlots` and the lazy reconciliation to `Game_Actor`, with `improvableComps()` folding in the
   bound picks. Still no UI — but a slot bound by hand in the console becomes improvable, which is enough to test the
   whole read path.
6. Add the picker window and wire it into `Scene_Status` and `Game_Levelling`.
7. Talents, reusing whatever step 6 produced.
8. Fill in the missing `ARCANE_MAGIC_*` lores, then constrain `CHANNELLING_ANY` to the character's wind.

## Open questions

- The book allows unlearning Arcane Magic and Invoke for 100 XP, at the cost of every spell or miracle known. Worth
  deciding whether that is ever exposed, since it is the only escape from a badly chosen Divine Lore.
- `Secret Signs (Guild (any one))` is a nested `(Any)` — the specialisation is itself parameterised.
- `(Local)` is currently modelled as concrete IDs (86 occurrences of `*_LOCAL` in the career data). Per p.46 it is the
  same mechanism as `(Any)`, only drawn from the local area. Leaving it concrete is fine, but it could reuse the slot
  model later, with the pool filtered by region.
- Should a bound pick ever be re-bindable? The rules say no, and leaving it permanent is simpler.

## Data bugs noticed while investigating

Unrelated to this feature, but they will bite whoever implements it:

- `INVOKE_MYMIDIA` is missing an `R`; the display name `Invoke (Myrmidia)` is correct, and `BLESS_MYRMIDIA` is spelt
  properly, so it is the ID alone.
- `ARCANE_MAGIC_*` holds only Celestial, Hedgecraft and Witchery. The book's eight Arcane Lores are Beasts, Death,
  Fire, Heavens, Metal, Shadow, Light and Life, plus lesser lores such as Hedgecraft and Necromancy.
- There is no ungrouped `CHANNELLING` competence, although the rules define one.
- `FEARLESS_EVERYTHING` ("Fearless (Everything)") shares the generic Fearless description; worth checking it is a real
  specialisation and not a placeholder.
