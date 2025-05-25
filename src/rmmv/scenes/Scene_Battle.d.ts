//-----------------------------------------------------------------------------
// Scene_Battle
//

import { RPG_ItemBase } from "../data/RPG_Item";
import { Spriteset_Battle } from "../sprites/Spriteset_Battle";
import { Window_ActorCommand } from "../windows/Window_ActorCommand";
import { Window_BattleActor } from "../windows/Window_BattleActor";
import { Window_BattleEnemy } from "../windows/Window_BattleEnemy";
import { Window_BattleItem } from "../windows/Window_BattleItem";
import { Window_BattleLog } from "../windows/Window_BattleLog";
import { Window_BattleSkill } from "../windows/Window_BattleSkill";
import { Window_BattleStatus } from "../windows/Window_BattleStatus";
import { Window_Help } from "../windows/Window_Help";
import { Window_Message } from "../windows/Window_Message";
import { Window_PartyCommand } from "../windows/Window_PartyCommand";
import { Window_ScrollText } from "../windows/Window_ScrollText";
import { Scene_Base } from "./Scene_Base";

// The scene class of the battle screen.
export declare class Scene_Battle extends Scene_Base
{
	protected _statusWindow:Window_BattleStatus;
	protected _partyCommandWindow:Window_PartyCommand;
	protected _actorCommandWindow:Window_ActorCommand;
	protected _logWindow:Window_BattleLog;
	protected _helpWindow:Window_Help;
	protected _skillWindow:Window_BattleSkill;
	protected _itemWindow:Window_BattleItem;
	protected _actorWindow:Window_BattleActor;
	protected _enemyWindow:Window_BattleEnemy;
	protected _messageWindow:Window_Message;
	protected _scrollTextWindow:Window_ScrollText;
	
	protected _spriteset:Spriteset_Battle;
	
	public item():RPG_ItemBase;
	public updateBattleProcess():void;
	public isAnyInputWindowActive():boolean;
	public changeInputWindow():void;
	public needsSlowFadeOut():boolean;
	public updateStatusWindow():void;
	public updateWindowPositions():void;
	public createDisplayObjects():void;
	public createSpriteset():void;
	public createAllWindows():void;
	public createLogWindow():void;
	public createStatusWindow():void;
	public createPartyCommandWindow():void;
	public createActorCommandWindow():void;
	public createHelpWindow():void;
	public createSkillWindow():void;
	public createItemWindow():void;
	public createActorWindow():void;
	public createEnemyWindow():void;
	public createMessageWindow():void;
	public createScrolltextWindow():void;
	public refreshStatus():void;
	public startPartyCommandSelection():void;
	public commandFight():void;
	public commandEscape():void;
	public commandGuard():void;
	public startActorCommandSelection():void;
	public commandAttack():void;
	public commandSkill():void;
	public commandGuard():void;
	public commandItem():void;
	public selectNextCommand():void;
	public selectPreviousCommand():void;
	public selectActorSelection():void;
	public onActorOk():void;
	public onActorCancel():void;
	public selectEnemySelection():void;
	public onEnemyOk():void;
	public onEnemyCancel():void;
	public onSkillOk():void;
	public onSkillCancel():void;
	public onItemOk():void;
	public onItemCancel():void;
	public onSelectAction():void;
	public endCommandSelection():void;
}