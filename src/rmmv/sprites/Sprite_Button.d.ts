//-----------------------------------------------------------------------------
// Sprite_Button
//

import { Rectangle } from "../core/Rectangle";
import { Sprite } from "../core/Sprite";

// The sprite for displaying a button.
export declare class Sprite_Button extends Sprite
{
	protected _touching:boolean;
    protected _coldFrame:Rectangle;
    protected _hotFrame:Rectangle;
    protected _clickHandler:() => void;

	public updateFrame():void;
	public setColdFrame(x:number, y:number, width:number, hieght:number):void;
	public setHotFrame(x:number, y:number, width:number, hieght:number):void;

	public setClickHandler(callback:() => void):void;
	public callClickHandler():void;
	public processTouch():void;

	public isActive():boolean;
	public isButtonTouched():boolean;

	public canvasToLocalX(x:number):number;
	public canvasToLocalY(y:number):number;
}
