# Career data

## Definition

Careers define what stats and skills a character may improve with experience points, and which talents they might buy.
They are defined in the 4th edition rulebook `wfrp4e.pdf` from page 46 to 116.
The related types are defined in ./src/plugins/_types/career.ts
Career data is stored in ./src/plugins/constants/TEW_Careers.ts

## Rules

### Class

A class is comprised of several career paths, and defines what part of society the character is part of.
Classes affect how much experience is needed to switch careers (see Career change).

### Career path

A career path defines a progression between 4 related careers.
Paths affect how much experience is needed to switch careers (see Career change).

### Levels

Each career has a level from 1 to 4. These levels are mirrored in the career path's data.
Level 1 of a career path has 8 skills and 3 stats to improve. The next levels have fewer skills, and 1 improvable stat each.
Skills and stats are compounded inside a career path: a character with a level 2 career can still improve the stats and skills of the previous level.
However, that is not the case for talents, which are exclusive to a given career.

### Trappings

Trappings will not be considered in this plugin.

### Career change

Will be implemented later.

## Plan

### Class data

The CareerClass enum in ./src/plugin/_types/enum.ts should be completed with the 4th edition rulebook's data.

### Career data

The TEW_Careers.ts file should be completed with the 4th edition rulebook's data.
The already defined types should cover everything we need.
The stats and skills for a given level should be compounded for ease of access: a level 4 career should list all skills and all 6 stats of its career path as improvable.

### Levelling restrictions

This will be implemented later, as characters have no career yet.
The status menu's levelling mode should take into account the character's career to limit what stats, skills and talents experience may be used on. As before, non improvable items should keep the normal color.
