//-----------------------------------------------------------------------------
// Scene_Gameover
//

import { Sprite } from "../core/Sprite";
import { Scene_Base } from "./Scene_Base";

// The scene class of the game over screen.
export declare class Scene_Gameover extends Scene_Base
{
	protected _backSprite:Sprite;
	
	public playGameoverMusic():void;
	public createBackground():void;
	public isTriggered():boolean;
	public gotoTitle():void;
}