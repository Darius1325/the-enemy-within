//-----------------------------------------------------------------------------
// Window_MenuActor
//
// The window for selecting a target actor on the item and skill screens.

import { RPG_ItemBase } from "../data/RPG_Item";
import { Window_MenuStatus } from "./Window_MenuStatus";

export declare class Window_MenuActor extends Window_MenuStatus
{
	public constructor();

	public selectForItem(item:RPG_ItemBase):void;
}