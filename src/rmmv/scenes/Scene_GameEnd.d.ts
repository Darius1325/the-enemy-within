//-----------------------------------------------------------------------------
// Scene_GameEnd
//

import { Window_GameEnd } from "../windows/Window_GameEnd";
import { Scene_MenuBase } from "./Scene_MenuBase";

// The scene class of the game end screen.
export declare class Scene_GameEnd extends Scene_MenuBase
{
	protected _commandWindow:Window_GameEnd;
	
	public createBackground():void;
	public createCommandWindow():void;
	public commandToTitle():void;
}