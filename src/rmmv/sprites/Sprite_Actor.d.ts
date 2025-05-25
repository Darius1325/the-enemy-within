//-----------------------------------------------------------------------------
// Sprite_Actor
//

import { Sprite } from "../core/Sprite";
import { Sprite_Base } from "./Sprite_Base";
import { Sprite_Battler } from "./Sprite_Battler";
import { Sprite_StateOverlay } from "./Sprite_StateOverlay";
import { Sprite_Weapon } from "./Sprite_Weapon";

// The sprite for displaying an actor.
export declare class Sprite_Actor extends Sprite_Battler
{
	public static readonly MOTIONS:{ [state:string]: ActorMotion }

    protected _motion:ActorMotion;
    protected _motionCount:number;
    protected _pattern:number;	
    protected _effectTarget:Sprite_Base;	
    protected _mainSprite:Sprite_Base;	
    protected _shadowSprite:Sprite;	
    protected _weaponSprite:Sprite_Weapon;	
    protected _stateSprite:Sprite_StateOverlay;

	public moveToStartPosition():void;
	public setActorHome(index:number):void;

	public updateShadow():void;
	public updateTargetPosition():void;

	public setupMotion():void;
	public startMotion():void;
	public updateMotion():void;
	public updateMotionCount():void;
	public motionSpeed():number;
	public refreshMotion():void;
	public startEntryMotion():void;

	public stepForward():void;
	public stepBack():void;
	public retreat():void;
	public setupWeaponAnimation():void;
}

export declare class ActorMotion
{
	index:number;
	loop:boolean;
}