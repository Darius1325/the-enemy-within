//-----------------------------------------------------------------------------
// Scene_Skill
//

import { RPG_ItemBase } from "../data/RPG_Item";
import { Window_SkillList } from "../windows/Window_SkillList";
import { Window_SkillStatus } from "../windows/Window_SkillStatus";
import { Window_SkillType } from "../windows/Window_SkillType";
import { Scene_ItemBase } from "./Scene_ItemBase";

// The scene class of the skill screen.
export declare class Scene_Skill extends Scene_ItemBase
{
	protected _statusWindow:Window_SkillStatus;
	protected _itemWindow:Window_SkillList;
	protected _skillTypeWindow:Window_SkillType;
	
	public createSkillTypeWindow():void;
	public createStatusWindow():void;
	public createItemWindow():void;
	public refreshActor():void;
	public commandSkill():void;
	public item():RPG_ItemBase;
	public onItemOk():void;
	public onItemCancel():void;
	public playSeForItem():void;
}