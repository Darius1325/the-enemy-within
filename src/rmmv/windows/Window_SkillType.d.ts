//-----------------------------------------------------------------------------
// Window_SkillType
//
// The window for selecting a skill type on the skill screen.

import { Game_Actor } from "../objects/Game_Actor";
import { Window_Command } from "./Window_Command";
import { Window_SkillList } from "./Window_SkillList";

export declare class Window_SkillType extends Window_Command
{
	protected _actor:Game_Actor;

	public setActor(actor:Game_Actor):void;

	public setSkillWindow(skillWindow:Window_SkillList):void;

	public selectLast():void;
}