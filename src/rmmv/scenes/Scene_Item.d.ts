//-----------------------------------------------------------------------------
// Scene_Item
//

import { Window_ItemCategory } from "../windows/Window_ItemCategory";
import { Window_ItemList } from "../windows/Window_ItemList";
import { Scene_ItemBase } from "./Scene_ItemBase";

// The scene class of the item screen.
export declare class Scene_Item extends Scene_ItemBase
{
	protected _categoryWindow:Window_ItemCategory;
	protected _itemWindow:Window_ItemList;
	
	public createCategoryWindow():void;
	public createItemWindow():void;
	public onCategoryOk():void;
	public onItemOk():void;
	public onItemCancel():void;
	public playSeForItem():void;
}