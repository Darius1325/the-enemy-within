//-----------------------------------------------------------------------------
// Window_BattleActor
//
// The window for selecting a target actor on the battle screen.

// Make sure Window_BattleStatus is declared or imported
import { Game_Actor } from '../objects/Game_Actor';
import { Window_BattleStatus } from './Window_BattleStatus';

export declare class Window_BattleActor extends Window_BattleStatus
{
	public constructor(x:number, y:number);
	
	public actor():Game_Actor;
}