//-----------------------------------------------------------------------------
// Sprite_Base
//

import { Sprite } from "../core/Sprite";
import { Sprite_Animation } from "./Sprite_Animation";

// The sprite class with a feature which displays animations.
export declare class Sprite_Base extends Sprite
{
	protected _animationSprites:Sprite_Animation[];
    protected _effectTarget:Sprite_Base;
    protected _hiding:boolean;

	public show():void;
	public show():void;
	public updateVisibility():void;

	public updateAnimationSprites():void;
	public startAnimation():void;
	public isAnimationPlaying():boolean;
}
