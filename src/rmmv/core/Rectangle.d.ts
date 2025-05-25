//-----------------------------------------------------------------------------
// Rectangle
//

import { PIXI } from "../pixi";

// The rectangle class.
export declare class Rectangle extends PIXI.Rectangle
{
	public static emptyRectangle():Rectangle;

	public constructor(x:number, y:number, width:number, height:number);
}