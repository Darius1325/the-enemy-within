# Development Guidelines

This document contains critical information about working with this codebase. Follow these guidelines precisely.

## Project definition

Our goal is to develop a game mirroring (and expanding on) the Warhammer Fantasy campaign: The Enemy Within (TEW).
The TEW plugins are intended to implement Warhammer Fantasy's rules with some minor adjustments, in a tactical RPG context.
The first book of the campaign is ./volume1.pdf ; more documents can be added to this repository at your request for ease of access.

## Game principles

1. Basics
 - The game is exclusively single-player, and the player controls a party of characters that follow the leader (except in battle where each member is controlled individually by the player)

2. Battle System
 - The battle system is tactical combat, taking place on the same maps as the base gameplay
 - Players (instances of `Game_Actor`) and AIs (instances of `Game_Enemy`) take individual turns in order of initiative

## Core Development Rules

1. Codebase
 - You are working with RPG Maker MV 1.6.2 (referred to as RMMV): the base code is in ./plugins/rpg_*.js files
 - Documentation on base RMMV is available at https://kinoar.github.io/rmmv-doc-web/ should you need it
 - Some unfinished Typescript (or TS) typings for base RMMV classes are situated in ./src/rmmv
 - Our plugins are written with Typescript, under ./src/plugins, and transpiled to Javascript (or JS) under ./plugins/TEW (by ./src/plugin_compiler.sh)
 - Each folder in ./src/plugins corresponds to a specific TEW plugin. They are loaded in order: constants, base, menus, combat
 
2. Compilation
 - Once transpiled and loaded as plugins by RMMV's engine, files under ./src/plugins will be appended to a single JS file. This means all imports and exports must not be part of compilation (see in ./src/plugin_compiler.sh what will be ignored)
 - Any *.ts should begin with the same two annotations:
   - `// $PluginCompiler <plugin_name> [priority]` will indicate which file in ./js/plugins/TEW should contain this code, and where it should be appended
   - `// $StartCompilation` should appear after imports and type definitions. Anything before will not be transpiled
   - Compilation priority should be handled in terms of dependencies: a class inheriting another must be compiled after its parent. The default priority is 100, and Scene_*.ts files for instance are compiled with priority 101 to go after all window definitions.

3. Expanding the codebase
 - Only *.ts files under ./src/** should be modified. *.js files should only be used as reference
 - Incidentally, to modify/extend a base RMMV class, a TS file matching the class's name should be created (such as ./plugins/menu/Window_Base.ts)
 - Incidentally, to modify a base RMMV function, it should be re-written in the corresponding TS file, which will overload the base function once loaded. If the base function is still needed, it should be stored in TEW.MEMORY. An example here:
 ```
    TEW.MEMORY.windowBaseInitialize = Window_Base.prototype.initialize;
    Window_Base.prototype.initialize = function(x, y, width, height) {
        TEW.MEMORY.windowBaseInitialize.call(this, x, y, width, height);
        const bg = this.backgroundImageName();
        if (bg) {
            this._bgSprite = new Sprite(ImageManager.loadSystem(bg));
            this.addChildAt(this._bgSprite, 0);
        }
    };
 ```
 - Any new class should begin with the same initialization block: definition, export, constructor and initilize. An example here:
 ```
    function HalfWindow_List() {
    this.initialize.apply(this, arguments);
    }

    export default HalfWindow_List.prototype = Object.create(Window_Selectable.prototype);
    HalfWindow_List.prototype.constructor = HalfWindow_List;

    // Inializing the window
    HalfWindow_List.prototype.initialize = function() {
        // ...
    }
 ```

4. General coding rules
 - Follow existing patterns where possible
 - TS typing is loose, it is used for code clarity, but if no satisfactory typing should be found, `any` or no typing is fine.
 - `const` and `let` should be preferred over `var`
 - Variable names should be written in camelCase
 - Class variables should be prefixed by `_` if they are not meant to be accessed outside that class
 - Class names should be written as such: `Category_ObjectName`, following RMMV's pattern.
 - No loop (if, for, while...) should be written on a single line, all should have brackets
 - Constants and TextManager declarations should be written in properties.ts files, in SNAKE_CASE
 - Constants that do not belong to a single class should be stored in the TEW object (see ./src/plugins/_types/tew.ts for its structure)
 - Fixed game data should be written in a TEW_*.ts file under ./src/plugins/constants, and typed in ./src/plugins/_types
 - Expanding native JS objects should be done in ./src/plugins/_types/extensions.d.ts
 - Window sizes should be hardcoded or computed with hardcoded constants, and written in backgrounds.ts files
 - Do not hesitate to ask for clarification if there is any uncertainty

5. Interaction with the engine
 - Any function intended to be used through events should belong to the `Game_Interpreter`
 - All code in the TEW_Combat plugin is intended to be called only during battle

## Authorizations

### Scope
 - All operations and commands within ./src are allowed, without the need to prompt for authorization
 - Deleting files is discouraged but still allowed without prompt
 - No file should be modified outside of ./src without prompting for authorization

### Commands
 - All file reading/editing commands within this repository are allowed
 - Any command outside the repository must prompt for authorization
 - Incidentally, you should always use `cd` as a standalone command, then execute other commands in place, so as to easily check whether it is executed inside this repository
 - Git commands are allowed except `git commit` and `git push`, all updates to the online repository will be handled by a developer
