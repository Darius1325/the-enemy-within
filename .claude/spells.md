# Spells

## Description

### Using magic

A career's access to magic is defined by the availability of a magical talent: `PETTY_MAGIC`, `ARCANE_MAGIC` and its specialties.
A character can purchase spells after they have bought one of these talents. `PETTY_MAGIC` gives a number of free petty spells equal to their Willpower bonus when purchased.
As written in the wfrp4e.pdf rules, spells are divided into three main categories:
 - petty magic (`SpellDomain.PETTY`)
 - arcane magic (`SpellDomain.ARCANE`)
 - magic tied to a specific wind (`SpellDomain.<WIND>`)

The last two categories of spells can be accessed by buying the `ARCANE_MAGIC` talent.

### Specialized magic

## Plan

### Spells menu

The spell list is already coded in the status menu.

### Levelling up

See 'Spells' in level-up.md

### Innate magical talent

All actors must have an associated wind of magic, or none (`NONE`), determining which (if any) magical talent they can take if their career allows it.
All careers that give access to the `LANGUAGE_MAGICK` skill should be defined as magical careers. Having no wind prevents the character from starting a magical career.

The magical talents thus have two conditions to be buyable: `PETTY_MAGIC`, and `ARCANE_MAGIC` require the actor to have a magical wind, and a career that gives access to those talents.

### Channelling

`CHANNELLING` must not be programmed as a grouped skill. It is a common skill to all magical careers, that changes name depending on two conditions:
 - which wind of magic the actor is tied to
 - whether they have unlocked the `ARCANE_MAGIC_<WIND>` talent yet

### Petty magic

`PETTY_MAGIC` is a talent purchasable with EXP points like any other. Once taken, the actor can buy any spells tied to `SpellDomain.PETTY` in levelling mode.

### Specialized magic

`ARCANE_MAGIC` is a talent purchasable with EXP points like any other. When taken, it must "transform" into the `ARCANE_MAGIC_<WIND>` corresponding to the actor. It must also change the `CHANNELLING` skill into `CHANNELLING_<WIND>`.
Once taken, the actor can buy any spells tied to `SpellDomain.<WIND>` in levelling mode.
We will at least need an enum recording the winds of magic's names.
