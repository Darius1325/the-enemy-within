//-----------------------------------------------------------------------------
// Window_ItemCategory
//
// The window for selecting a category of items on the item and shop screens.

import { Window_HorzCommand } from "./Window_HorzCommand";
import { Window_ItemList } from "./Window_ItemList";

export declare class Window_ItemCategory extends Window_HorzCommand
{
	public setItemWindow(itemWindow:Window_ItemList):void;
}