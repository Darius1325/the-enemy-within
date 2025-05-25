//-----------------------------------------------------------------------------
// Window_ChoiceList
//
// The window used for the event command [Show Choices].

import { Window_Command } from './Window_Command';
import { Window_Message } from './Window_Message';

export declare class Window_ChoiceList extends Window_Command
{
	protected _messageWindow:Window_Message;
	protected _background:number;

	public constructor(messageWindow:Window_Message);

	public start():void;

	public selectDefault():void;

	public updatePlacement():void;
	public updateBackground():void;

	public maxChoiceWidth():number;

	public textWidthEx(text:string):number;
}