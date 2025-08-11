//-----------------------------------------------------------------------------
// Game_Troop
//
// The game object class for a troop and the battle-related data.

import { DataTroop, DropItem, TroopEventPage } from "../data/RPG_Enemy";
import { Game_Enemy } from "./Game_Enemy";
import { Game_Interpreter } from "./Game_Interpreter";
import { Game_Unit } from "./Game_Unit";

export declare class Game_Troop extends Game_Unit
{
	public readonly LETTER_TABLE_HALF:string[];
	public readonly LETTER_TABLE_FULL:string[];

	protected _interpreter:Game_Interpreter;
	protected _troopId:number;
	protected _eventFlags:{ [id:number]: boolean };
	protected _enemies:Game_Enemy[];
	protected _turnCount:number;
	protected _namesCount:{ [s:string]: number };

	public constructor();

	public isEventRunning():boolean;
	public updateInterpreter():void;

	public turnCount():number;

	public clear():void;

	public troop():DataTroop;

	public setup(troopId:number):void;
	public makeUniqueNames():void;
	public letterTable():string[];
	public enemyNames():string[];

	public meetsConditions(page:TroopEventPage):boolean;
	public setupBattleEvent():void;

	public increaseTurn():void;

	public expTotal():number;
	public goldTotal():number;
	public goldRate():number;

	public makeDropItems():DropItem[];
}