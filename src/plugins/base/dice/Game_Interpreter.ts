// $PluginCompiler TEW_Base.js

import TEW from "../../_types/tew";
import Window_Dice from "./Window_Dice";
import { Game_BattlerBase } from "../stats/Game_BattlerBase";

// $StartCompilation

// Game_Interpreter

TEW.DICE.bonus = function(value: number) {
    return Math.floor(value / 10);
};

TEW.DICE.roll = function(range = 100) {
    return Math.floor(Math.random() * range) + 1;
};

TEW.DICE.invertRoll = function(roll: number) {
    return roll === 100
        ? 100
        : Math.floor(roll / 10) + (roll % 10) * 10;
};

TEW.DICE.displayDiceRoll = function(range = 100) {
    const result = TEW.DICE.roll(range);
    const windowDice = new Window_Dice(0, 0, Math.floor(result / 10), result % 10);
    SceneManager._scene.addWindow(windowDice);
    return result;
};

TEW.DICE.rollInitiative = function(battler: Game_BattlerBase) {
    return TEW.DICE.roll(10) + TEW.DICE.bonus(battler.paramByName("INIT"));
};

TEW.DICE.skillTest = function(battler: Game_BattlerBase, compId: string, slModifier = 0, hidden = false, advantages = 0) {
    const compValue = battler.comp(compId);
    const advantage = advantages > 0;
    const disadvantage = advantages < 0;
    const slFromAdvantage = advantage ? advantages - 1 : (disadvantage ? advantages + 1 : 0);
    const totalSLModifier = slModifier + battler.totalConditionModifier(compId);

    let roll = hidden ? TEW.DICE.roll() : TEW.DICE.displayDiceRoll();
    if (advantage) {
        const invertedRoll = TEW.DICE.invertRoll(roll);
        roll = Math.min(roll, invertedRoll);
    } else if (disadvantage) {
        const invertedRoll = TEW.DICE.invertRoll(roll);
        roll = Math.max(roll, invertedRoll);
    }

    const critical = roll % 11 === 0 || roll === 100;
    let sl = Math.floor(compValue / 10) - Math.floor(roll / 10) + totalSLModifier + slFromAdvantage;

    let success: boolean;
    if (critical) {
        success = compValue >= roll;
        if (success) {
            sl = Math.max(0, sl);
        } else {
            sl = Math.min(0, sl);
        }
    } else {
        if (sl === 0) {
            success = compValue + totalSLModifier * 10 >= roll;
        } else {
            success = sl > 0;
        }
    }

    // Special rules : 5 or below is always a success, 96 or above is always a failure
    if (roll <= 5) {
        success = true;
        sl = sl > 0 ? sl : 0;
    } else if (roll >= 96) {
        success = false;
        sl = sl < 0 ? sl : 0;
    }

    return {
        sl,
        success,
        critical
    }
};

Game_Interpreter.prototype.partySkillTest = function(compId: string, slModifier: number, hidden = false, advantages = 0) {
    // Select the best character for the job
    const partyBestComp = $gameParty.allMembers()
        .map((actor: Game_BattlerBase) => actor.compWithModifiers(compId))
        .sort((a, b) => b.totalValue - a .totalValue)[0];
    const maxPartyCompValue = partyBestComp.baseValue;
    const advantage = advantages > 0;
    const disadvantage = advantages < 0;
    const slFromAdvantage = advantage ? advantages - 1 : (disadvantage ? advantages + 1 : 0);
    const totalSLModifier = slModifier + partyBestComp.modifier + slFromAdvantage;

    let roll = hidden ? TEW.DICE.roll() : TEW.DICE.displayDiceRoll();
    if (advantage) {
        const invertedRoll = TEW.DICE.invertRoll(roll);
        roll = Math.min(roll, invertedRoll);
    } else if (disadvantage) {
        const invertedRoll = TEW.DICE.invertRoll(roll);
        roll = Math.max(roll, invertedRoll);
    }

    const critical = roll % 11 === 0 || roll === 100;
    let sl = Math.floor(maxPartyCompValue / 10) - Math.floor(roll / 10) + totalSLModifier;

    let success: boolean;
    if (critical) {
        success = maxPartyCompValue >= roll;
        if (success) {
            sl = Math.max(0, sl);
        } else {
            sl = Math.min(0, sl);
        }
    } else {
        if (sl === 0) {
            success = maxPartyCompValue + totalSLModifier * 10 >= roll;
        } else {
            success = sl > 0;
        }
    }

    // Special rules : 5 or below is always a success, 96 or above is always a failure
    if (roll <= 5) {
        success = true;
        sl = sl > 0 ? sl : 0;
    } else if (roll >= 96) {
        success = false;
        sl = sl < 0 ? sl : 0;
    }

    return {
        sl,
        success,
        critical,
    };
};

Game_Interpreter.prototype.rollWindsOfMagic = function() {
    const roll = TEW.DICE.roll(10);
    let womModifier = 0;
    if (roll === 1) {
        womModifier = -3;
    } else if (roll < 4) {
        womModifier = -1;
    } else if (roll === 10) {
        womModifier = 3;
    } else if (roll > 7) {
        womModifier = 1;
    }
    $gameVariables.setValue(15, womModifier);
};

// Opposed skill tests

TEW.DICE.opposedTest = function(skillValue: number, opposedSkillValue: number, slModifier = 0, opposedSLModifier = 0, advantages = 0) {
    let rollPlayer = TEW.DICE.displayDiceRoll();
    const advantage = advantages > 0;
    const disadvantage = advantages < 0;
    const slFromAdvantage = advantage ? advantages - 1 : (disadvantage ? advantages + 1 : 0);
    
    if (advantage) {
        const invertedRoll = TEW.DICE.invertRoll(rollPlayer);
        rollPlayer = Math.min(rollPlayer, invertedRoll);
    } else if (disadvantage) {
        const invertedRoll = TEW.DICE.invertRoll(rollPlayer);
        rollPlayer = Math.max(rollPlayer, invertedRoll);
    }

    const rollNPC = TEW.DICE.roll();

    const criticalPlayer = rollPlayer % 11 === 0 || rollPlayer === 100;
    let slPlayer = Math.floor((skillValue) / 10) - Math.floor(rollPlayer / 10) + slModifier + slFromAdvantage;
    let slNPC = Math.floor((opposedSkillValue) / 10) - Math.floor(rollNPC / 10) + opposedSLModifier;

    let successRollPlayer: boolean;

    if (criticalPlayer) {
        successRollPlayer = skillValue >= rollPlayer;
        if (successRollPlayer) {
            slPlayer = Math.max(0, slPlayer);
        } else {
            slPlayer = Math.min(0, slPlayer);
        }
    } else {
        if (slPlayer === 0) {
            successRollPlayer = skillValue + slModifier * 10 >= rollPlayer;
        } else {
            successRollPlayer = slPlayer > 0;
        }
    }

    // Y a ma mère qui m'appelle je reviens

    if (rollPlayer <= 5) {
        successRollPlayer = true;
        slPlayer = slPlayer > 0 ? slPlayer : 0;
    } else if (rollPlayer >= 96) {
        successRollPlayer = false;
        slPlayer = slPlayer < 0 ? slPlayer : 0;
    }

    if (rollNPC <= 5) {
        slNPC = slNPC > 0 ? slNPC : 0;
    } else if (rollNPC >= 96) {
        slNPC = slNPC < 0 ? slNPC : 0;
    }

    let success: boolean;

    // if Player succeed && its SL is greater than the NPC SL, player wins
    if (slPlayer > slNPC && successRollPlayer) {
        success = true;

    // else if SL Player is less than SL NPC or if player misses, player fails
    } else if (slPlayer < slNPC || !successRollPlayer) {
        success = false;        

    // else draw
    } else {
        success = (skillValue >= opposedSkillValue);
    }

    return {
        sl: slPlayer - slNPC,
        success,
        criticalPlayer
    };
};

Game_Interpreter.prototype.opposedSkillTest = function(compIdPlayer: string, slModifierPlayer: number, skillValueNPC: number) {
    // Select the best character for the job
    const partyBestComp = $gameParty.allMembers()
        .map((actor: Game_BattlerBase) => actor.compWithModifiers(compIdPlayer))
        .sort((a, b) => b.totalValue - a .totalValue)[0];
    const maxPartyCompValue = partyBestComp.baseValue;

    return TEW.DICE.opposedTest(maxPartyCompValue, skillValueNPC, slModifierPlayer + partyBestComp.modifier);
};

// Combat opposed test
// SL = Success level (DR in french)
// TODO loca
TEW.DICE.combatOpposedSkillTest = function(
    compValueAttacker: number,
    compValueDefender: number,
    isAttackerPlayer: boolean,
    isDefenderPlayer: boolean,
    slModifierAttacker = 0,
    slModifierDefender = 0,
    advantagesAttacker = 0,
    advantagesDefender = 0
) {
    let rollAttacker = isAttackerPlayer ? TEW.DICE.displayDiceRoll() : TEW.DICE.roll();
    const advantageAttacker = advantagesAttacker > 0;
    const disadvantageAttacker = advantagesAttacker < 0;
    const slFromAdvantageAttacker = advantageAttacker
        ? advantagesAttacker - 1
        : (disadvantageAttacker ? advantagesAttacker + 1 : 0);
    
    if (advantageAttacker) {
        const invertedRoll = TEW.DICE.invertRoll(rollAttacker);
        rollAttacker = Math.min(rollAttacker, invertedRoll);
    } else if (disadvantageAttacker) {
        const invertedRoll = TEW.DICE.invertRoll(rollAttacker);
        rollAttacker = Math.max(rollAttacker, invertedRoll);
    }

    let rollDefender = isDefenderPlayer ? TEW.DICE.displayDiceRoll() : TEW.DICE.roll();
    const advantageDefender = advantagesDefender > 0;
    const disadvantageDefender = advantagesDefender < 0;
    const slFromAdvantageDefender = advantageDefender
        ? advantagesDefender - 1
        : (disadvantageDefender ? advantagesDefender + 1 : 0);
    
    if (advantageDefender) {
        const invertedRoll = TEW.DICE.invertRoll(rollDefender);
        rollDefender = Math.min(rollDefender, invertedRoll);
    } else if (disadvantageDefender) {
        const invertedRoll = TEW.DICE.invertRoll(rollDefender);
        rollDefender = Math.max(rollDefender, invertedRoll);
    }

    let slAttacker = Math.floor(compValueAttacker / 10) - Math.floor(rollAttacker / 10) + slModifierAttacker + slFromAdvantageAttacker;
    let slDefender = Math.floor(compValueDefender / 10) - Math.floor(rollDefender / 10) + slModifierDefender + slFromAdvantageDefender;

    const criticalAttacker = rollAttacker % 11 === 0 || rollAttacker === 100;
    const criticalDefender = rollDefender % 11 === 0 || rollDefender === 100;

    let successRollAttacker: boolean;
    if (criticalAttacker) {
        successRollAttacker = compValueAttacker >= rollAttacker;
        if (successRollAttacker) {
            slAttacker = Math.max(0, slAttacker);
        } else {
            slAttacker = Math.min(0, slAttacker);
        }
    } else {
        if (slAttacker === 0) {
            successRollAttacker = compValueAttacker + slModifierAttacker * 10 >= rollAttacker;
        } else {
            successRollAttacker = slAttacker > 0;
        }
    }

    let successRollDefender: boolean;
    if (criticalDefender) {
        successRollDefender = compValueDefender >= rollDefender;
        if (successRollDefender) {
            slDefender = Math.max(0, slDefender);
        } else {
            slDefender = Math.min(0, slDefender);
        }
    } else {
        if (slDefender === 0) {
            successRollDefender = compValueDefender + slModifierDefender * 10 >= rollDefender;
        } else {
            successRollDefender = slDefender > 0;
        }
    }

    if (rollAttacker <= 5) {
        successRollAttacker = true;
        slAttacker = slAttacker > 0 ? slAttacker : 0;
    } else if (rollAttacker >= 96) {
        successRollAttacker = false;
        slAttacker = slAttacker < 0 ? slAttacker : 0;
    }

    if (rollDefender <= 5) {
        successRollDefender = true;
        slDefender = slDefender > 0 ? slDefender : 0;
    } else if (rollDefender >= 96) {
        successRollDefender = false;
        slDefender = slDefender < 0 ? slDefender : 0;
    }

    let success: boolean;
    if (!successRollAttacker) {
        success = false;
    } else if (slAttacker != slDefender) {
        success = slAttacker > slDefender;
    } else {
        success = (compValueAttacker >= compValueDefender);
    }

    let locationRoll: number;
    if (criticalAttacker) {
        locationRoll = TEW.DICE.roll();
    } else { // Invert attacker roll
        locationRoll = TEW.DICE.invertRoll(rollAttacker);
    }
    const hitLocation = Number.parseInt(Object.keys(TEW.DATABASE.HIT_LOCATION_TABLE).find(loca =>
        locationRoll >= TEW.DATABASE.HIT_LOCATION_TABLE[loca].min
     && locationRoll <= TEW.DATABASE.HIT_LOCATION_TABLE[loca].max));

    console.log("MELEE_ATTACK");
    console.log(`Attacker comp value: ${compValueAttacker}`);
    console.log(`Defender comp value: ${compValueDefender}`);
    console.log(`Attacker roll: ${rollAttacker} (SL: ${slAttacker}, Critical: ${criticalAttacker})`);
    console.log(`Defender roll: ${rollDefender} (SL: ${slDefender}, Critical: ${criticalDefender})`);
    console.log(`Combat result: ${success ? "Attacker wins" : "Defender wins"}`);
    console.log(`Hit location: ${hitLocation}`);
    return {
        rollAttacker,
        rollDefender,
        slAttacker,
        slDefender,
        success,
        criticalAttacker,
        criticalDefender,
        hitLocation
    };
};


// Scene_Dice

// function Scene_Dice() {
//     this.initialize.apply(this, arguments);
// }

// Scene_Dice.prototype = Object.create(Scene_Base.prototype);
// Scene_Dice.prototype.constructor = Scene_Dice;

// Scene_Dice.prototype.initialize = function() {
//     Scene_MenuBase.prototype.initialize.call(this);
// };

// Scene_Dice.prototype.create = function() {
//     Scene_MenuBase.prototype.create.call(this);
// };

// Scene_Dice.prototype.createStatusWindow = function() {
//     this._diceWindow = new Window_Dice(0, 0);
//     this._diceWindow.y = Graphics.boxHeight - this._diceWindow.height; // ???
//     this.addWindow(this._diceWindow);
// };

// Scene_Class.prototype.refreshWindows = function() {
//     this._diceWindow.refresh();
// };
