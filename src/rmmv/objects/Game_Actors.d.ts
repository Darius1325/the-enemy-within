//-----------------------------------------------------------------------------
// Game_Actors
//
// The wrapper class for an actor array.

export declare class Game_Actors
{
	protected _data:Game_Actor[];
	
	public constructor();

	public actor(actorId:number):Game_Actor;
}