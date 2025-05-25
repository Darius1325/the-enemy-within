//-----------------------------------------------------------------------------
// Window_DebugEdit
//
// The window for displaying switches and variables on the debug screen.

import { Window_Selectable } from "./Window_Selectable";

export declare class Window_DebugEdit extends Window_Selectable
{
	protected _mode:string;
	protected _topId:number;

	public constructor(x:number, y:number, width:number);

	public itemName(dataId:number):string;
	public itemStatus(dataId:number):string;

	public setMode(mode:string):void;
	public setTopId(id:number):void;

	public currentId():number;

	public updateSwitch():void;
	public updateVariable():void;
}