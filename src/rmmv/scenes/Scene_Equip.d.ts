//-----------------------------------------------------------------------------
// Scene_Equip
//

import { RPG_ItemBase } from "../data/RPG_Item";
import { Window_EquipCommand } from "../windows/Window_EquipCommand";
import { Window_EquipItem } from "../windows/Window_EquipItem";
import { Window_EquipSlot } from "../windows/Window_EquipSlot";
import { Window_EquipStatus } from "../windows/Window_EquipStatus";
import { Scene_MenuBase } from "./Scene_MenuBase";

// The scene class of the equipment screen.
export declare class Scene_Equip extends Scene_MenuBase
{
	protected _statusWindow:Window_EquipStatus;
	protected _commandWindow:Window_EquipCommand;
	protected _slotWindow:Window_EquipSlot;
	protected _itemWindow:Window_EquipItem;
	
	public createStatusWindow():void;
	public createCommandWindow():void;
	public createSlotWindow():void;
	public createItemWindow():void;
	public refreshActor():void;
	public commandEquip():void;
	public commandOptimize():void;
	public commandClear():void;
	public item():RPG_ItemBase;
	public onSlotOk():void;
	public onSlotCancel():void;
	public onItemOk():void;
	public onItemCancel():void;
}