//-----------------------------------------------------------------------------
// Window_ActorCommand
//
// The window for selecting an actor's action on the battle screen.

import { Game_Actor } from "../objects/Game_Actor";
import { Window_Command } from "./Window_Command";

export declare class Window_ActorCommand extends Window_Command
{
	public openness:number;

	protected _actor:Game_Actor;
	
	public constructor();

	public addAttackCommand():void;
	public addSkillCommands():void;
	public addGuardCommand():void;
	public addItemCommand():void;

	public setup(actor:Game_Actor):void;

	public selectLast():void;
}