//-----------------------------------------------------------------------------
// Window_EquipSlot
//
// The window for selecting an equipment slot on the equipment screen.

import { RPG_EquipBase } from "../data/RPG_Item";
import { Game_Actor } from "../objects/Game_Actor";
import { Window_EquipItem } from "./Window_EquipItem";
import { Window_EquipStatus } from "./Window_EquipStatus";
import { Window_Selectable } from "./Window_Selectable";

export declare class Window_EquipSlot extends Window_Selectable
{
	protected _actor:Game_Actor;

	public setActor(actor:Game_Actor):void;

	public item():RPG_EquipBase;

	public slotName(index:number):string;

	public setStatusWindow(statusWindow:Window_EquipStatus):void;
	public setItemWindow(itemWindow:Window_EquipItem):void;
}