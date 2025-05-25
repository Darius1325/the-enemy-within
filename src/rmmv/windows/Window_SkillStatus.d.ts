//-----------------------------------------------------------------------------
// Window_SkillStatus
//
// The window for displaying the skill user's status on the skill screen.

import { Game_Actor } from "../objects/Game_Actor";
import { Window_Base } from "./Window_Base";

export declare class Window_SkillStatus extends Window_Base
{
	protected _actor:Game_Actor;

	public setActor(actor:Game_Actor):void;
}