//-----------------------------------------------------------------------------
// Game_SelfSwitches
//
// The game object class for self switches.

export declare class Game_SelfSwitches
{
	protected _data:{ [s:string]:boolean };

	public constructor();

	public clear():void;
	public onChange():void;

	public value(accessor:[number,number,string]):boolean;
	public setValue(accessor:[number,number,string], value:boolean):void;

}