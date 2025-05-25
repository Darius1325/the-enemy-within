//-----------------------------------------------------------------------------
// Window_TitleCommand
//
// The window for selecting New Game/Continue on the title screen.

export declare class Window_TitleCommand extends Window_Command
{
	protected static _lastCommandSymbol:string;

	public constructor();

	public updatePlacement():void;

	public isContinueEnabled():boolean;

	public selectLast():void;
}