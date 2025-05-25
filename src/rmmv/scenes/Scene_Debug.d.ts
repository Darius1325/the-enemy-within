import { Window_Base } from "../windows/Window_Base";
import { Window_DebugEdit } from "../windows/Window_DebugEdit";
import { Window_DebugRange } from "../windows/Window_DebugRange";
import { Scene_MenuBase } from "./Scene_MenuBase";

export declare class Scene_Debug extends Scene_MenuBase
{
	protected _rangeWindow:Window_DebugRange;
	protected _editWindow:Window_DebugEdit;
	protected _debugHelpWindow:Window_Base;
	
	public createRangeWindow():void;
	public createEditWindow():void;
	public createDebugHelpWindow():void;
	public onRangeOk():void;
	public onEditCancel():void;
	public refreshHelpWindow():void;
	public helpText():string;
}