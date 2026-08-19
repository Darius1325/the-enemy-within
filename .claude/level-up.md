# Levelling feature

## Definition

On this branch, an `exp` variable has been added to ./src/plugins/base/stats/Game_Actor.ts
It will be updated through events in-game, and represents Warhammer's experience points which are used to increase stats and buy talents, spells or prayers.

## Rules

Experience points can be spent in four ways, through the Status menu windows defined in ./src/plugins/menu/status/

### Stat augment

Base stats (see `Stat` & `StatName` in ./src/plugins/_types/enum.ts) can be increased using experience points.
The rules dictate which stat a character may increase based on their career, but careers are not yet implemented, thus all stats should be increased without restriction for now.
Each stat's augment cost increases based on this table:

|Current Advances|XP Cost per Advance|XP Cost per Advance|
| |Characteristics|Skills|
|-|-|-|
|0 - 5|25|10|
|6 - 10| 30| 15|
|11 - 15| 40| 20|
|16 - 20| 50| 30|
|21 - 25| 70| 40|
|26 - 30| 90| 60|
|31 - 35| 120| 80|
|36 - 40| 150| 110|
|41 - 45| 190| 140|
|46 - 50| 230| 180|
|51 - 55| 280| 220|
|56 - 60| 330| 270|
|61 - 65| 390| 320|
|66 - 70| 450| 380|
|70+| 520| 440|

Importantly, the current advance is computed using the stat's base value as origin. Base values can be accessed through `Game_BattlerBase.prototype.paramBase(paramId: number)`.
This means stat augments must be tracked, so they are not added to base stats but to `_paramBonus` defined in `Game_BattlerBase`, accessed through `Game_BattlerBase.prototype.paramPlus(paramId: number)`.

### Competence augment

Skills (called 'competences' or 'comps' in TEW plugins to avoid conflicts with base RMMV skills), can be increased the same way as base stats for less experienced points (see table above). Unlike stats, competences have no base value and are only defined by their number of augments, thus the origin is always 0 and augments are stored in `_competences`.
Again, competence augments are gated by career, but for now there will be no such restrictions.

### Talents / Spells / Prayers

Buying talents and spells will be implemented later.

### Career advance

Careers will be implemented later.

## Plan

### Levelling mode

I would like to have a dedicated input key to trigger 'levelling mode' while inside the status menu.

#### Indicator

The four topbar commands will be shifted closer to the left of the screen to make room for an indicator.
While in normal mode, this indicator would display '`Level up: <input key>`'.
While in levelling mode, it would display remaining and spent experience points.
If re-designing the windows is troublesome, you can implement the necessary logic to store and obtain these numbers and I will take care of adding the visual indicator.

#### Confirmation

Levelling mode can be exited using the same input key. With nothing spent, exit is instantaneous.
If levelling mode is exited with spent experience > 0, it should prompt for confirmation (new Window), with a scrollable summary of all augments.

#### Persistence

The player should be able to navigate between the four windows of the status menu in levelling mode. However, quitting the menu altogether (i.e. cancelling while the topbar is active) should be treated as exiting levelling mode and prompt for confirmation accordingly.

### Stat augment

In `Window_StatusStats`, the window should become selectable.
Levelling mode should color the value of all stats that can be augmented in blue (`textColor(1)`).
When the cursor is placed on a given stat, using right of left arrow will change the new value to assign, and consume/refund experience points to match.
It is impossible to go under the current value, or to go above available experience points.
When a competence's displayed value is higher than the current value (expected to level up), it should be colored green.

### Competence augment

In `Window_StatusCompetences`, levelling mode should color the value of all competences that can be augmented in blue (`textColor(1)`).
When the cursor is placed on a given competence, using right of left arrow will change the new value to assign, and consume/refund experience points to match.
It is impossible to go under the current value, or to go above available experience points.
When a competence's displayed value is higher than the current value (expected to level up), it should be colored green.
