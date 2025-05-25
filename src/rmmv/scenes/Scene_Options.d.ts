//-----------------------------------------------------------------------------
// Scene_Options
//

import { Window_Options } from "../windows/Window_Options";
import { Scene_MenuBase } from "./Scene_MenuBase";

// The scene class of the options screen.
export declare class Scene_Options extends Scene_MenuBase
{
	protected _optionsWindow:Window_Options;
	
	public createOptionsWindow():void;
}