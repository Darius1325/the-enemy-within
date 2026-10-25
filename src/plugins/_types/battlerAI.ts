import { Game_BattlerBase } from "../base/stats/Game_BattlerBase";
import Game_Battler from "../combat/game/Game_Battler";
import { BattleOption, BattleTargetType } from "./enum";
import { Item } from "./item";
import { MeleeWeapon } from "./meleeWeapon";
import { RangedWeapon } from "./rangedWeapon";
import { Spell } from "./spell";

export type CompleteBattler = Game_Battler & Game_BattlerBase;

export type BattleTarget = {
    type: BattleTargetType.BATTLER;
    target: Game_Battler;
} | {
    type: BattleTargetType.TILE;
    target: { x: number; y: number; };
}

export type BattleDecision = {
    initiator: CompleteBattler;
    option: BattleOption;
    target: BattleTarget;
    weapon?: MeleeWeapon | RangedWeapon;
    spell?: Spell;
    item?: Item;
};

export type BattlerAI = (initiator: CompleteBattler, allies: Game_Battler[], enemies: Game_Battler[]) => BattleDecision;
