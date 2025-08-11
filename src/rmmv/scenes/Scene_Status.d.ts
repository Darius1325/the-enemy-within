//-----------------------------------------------------------------------------
// Scene_Status
//

import { Window_Status } from "../windows/Window_Status";
import { Scene_MenuBase } from "./Scene_MenuBase";

// The scene class of the status screen.
export declare class Scene_Status extends Scene_MenuBase
{
	private _statusWindow:Window_Status;
	
	public refreshActor():void;
	public onActorChange():void;
}