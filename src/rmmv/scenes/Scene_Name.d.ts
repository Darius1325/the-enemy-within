//-----------------------------------------------------------------------------
// Scene_Name
//

import { Game_Actor } from "../objects/Game_Actor";
import { Window_NameEdit } from "../windows/Window_NameEdit";
import { Window_NameInput } from "../windows/Window_NameInput";
import { Scene_MenuBase } from "./Scene_MenuBase";

// The scene class of the name input screen.
export declare class Scene_Name extends Scene_MenuBase
{
	protected _actorId:number;
	protected _actor:Game_Actor;
	protected _maxLength:number;
	protected _editWindow:Window_NameEdit;
	protected _inputWindow:Window_NameInput;
	
	public prepare():void;
	public createEditWindow():void;
	public createInputWindow():void;
	public onInputOk():void;
}