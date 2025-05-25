//-----------------------------------------------------------------------------
// Window_ShopCommand
//
// The window for selecting buy/sell on the shop screen.

import { Window_HorzCommand } from "./Window_HorzCommand";

export declare class Window_ShopCommand extends Window_HorzCommand
{
	protected _windowWidth:number;
	protected _purchaseOnly:boolean;

	public constructor(width:number, purchaseOnly:boolean);
}