//-----------------------------------------------------------------------------
// Window_BattleEnemy
//
// The window for selecting a target enemy on the battle screen.

import { Window_Selectable } from './Window_Selectable';
import { Game_Enemy } from '../objects/Game_Enemy';

export declare class Window_BattleEnemy extends Window_Selectable
{
	protected _enemies:Game_Enemy[];
	
	public constructor(x: number, y: number);
	
	public windowWidth():number;
	public windowHeight():number;
	
	public enemy():Game_Enemy;
	public enemyIndex():number;
}