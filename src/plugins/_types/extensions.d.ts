// ----------------------

// File: extensions.d.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the extensions used in the game. It includes the properties and types of each extension, as well as the available extension types and their properties. The file is used to define the extensions and their properties in the game.

// ----------------------
// exports
// ----------------------

export {};

declare global {
    interface Number {
        clamp(min:number, max: number) : number;
    }
    interface String {
        toBoolean() : boolean;
    }
    interface Array<T> {
        last() : T;
        addItemsAt(index: number, items: T[]) : Array<T>;
    }

    var Math: Math;

    var $dataSystem: any;
    var $dataAnimations: any;
    var $dataSkills: any;
    var $dataMap: any;
    var $gameActors: any;
    var $gamePartyTs: any;
    var $gameTroopTs: any;
    var $gameSelector: any;
    var $gameMap: any;
    var $gamePlayer: any;
    var $gameSwitches: any;
    var $gameTimer: any;
    var $gameScreen: any;
    var $gameSelfSwitches: any;
    var $gameSystem: any;
    var $gameTemp: any;
    var $gameParty: any;
    var $gameTroop: any;
    var $gameVariables: any;
    var $gameMessage: any;
    var $gameGlossary: any;
    var Input: any;
    var TouchInput: any;
    var TextManager: any;
    var SceneManager: any;
    var DataManager: any;
    var PluginManager: any;
    var BattleManager: any;
    var ImageManager: any;
    var SoundManager: any;
    var AudioManager: any;
    var Game_Interpreter: any;
    var Graphics: any;
    var Scene_Base: any;
    var Scene_MenuBase: any;
    var Scene_Status: any;
    var Scene_Options: any;
    var Scene_Battle: any;
    var Scene_Equip: any;
    var Scene_GameEnd: any;
    var Scene_Skill: any;
    var Scene_Title: any;
    var Scene_Gameover: any;
    var Scene_Map: any;
    var Scene_Save: any;
    var Window_Base: any;
    var Window_Status: any;
    var Window_MenuStatus: any;
    var Window_HorzCommand: any;
    var Window_BattleLog: any;
    var Window_Message: any;
    var Window_Help: any;
    var Window_BattleSkill: any;
    var Window_MenuCommand: any;
    var Window_BattleItem: any;
    var Window_ActorCommand: any;
    var Window_Command: any;
    var Window_Gold: any;
    var Window_TitleCommand: any;
    var Bitmap: any;
    var Game_Actor: any;
    var Game_BattlerBase: any;
    var Game_Battler: any;
    var Game_Action: any;
    var Game_Screen: any;
    var Game_Temp: any;
    var Game_Switches: any;
    var Game_Variables: any;
    var Game_Character: any;
    var Game_Enemy: any;
    var Game_Event: any;
    var Game_CharacterBase: any;
    var Game_Map: any;
    var Game_Troop: any;
    var Game_Party: any;
    var Game_Unit: any;
    var Sprite_Base: any;
    var Sprite_Character: any;
    var Sprite_Damage: any;
    var Sprite_StateIcon: any;
    var Spriteset_Map: any;
    var Point: any;
    var JsonEx: any;
}
