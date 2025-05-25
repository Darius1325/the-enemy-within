//-----------------------------------------------------------------------------
// Scene_Save
//

import { Scene_File } from "./Scene_File";

// The scene class of the save screen.
export declare class Scene_Save extends Scene_File
{
	public onSaveSuccess():void;
	public onSaveFailure():void;
}