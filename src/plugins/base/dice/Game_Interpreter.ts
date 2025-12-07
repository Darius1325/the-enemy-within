// $PluginCompiler TEW_Base.js

import TEW from "../../_types/tew";
import Window_Dice from "./Window_Dice";
import {Game_Actor} from "../stats/Game_Actor";

// $StartCompilation

// Game_Interpreter

TEW.DICE.bonus = function(value: number) {
    return Math.floor(value / 10);
};

TEW.DICE.roll = function(range = 100) {
    return Math.floor(Math.random() * (range - 1)) + 1;
};

TEW.DICE.displayDiceRoll = function(range = 100) {
    const result = TEW.DICE.roll(range);
    const windowDice = new Window_Dice(0, 0, Math.floor(result / 10), result % 10);
    SceneManager._scene.addWindow(windowDice);
    return result;
};

TEW.DICE.rollInitiative = function(actor: Game_Actor) {
    return TEW.DICE.roll(10) + TEW.DICE.bonus(actor.paramByName("INIT"));
};

Game_Interpreter.prototype.partySkillTest = function(compId: string, modifier: number, hidden = false) {
    const actorSkillBaseValues = [];
    // Select the best character for the job
    for (let i = 1; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i].comp(compId));
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifier;

    const roll = hidden ? TEW.DICE.roll() : TEW.DICE.displayDiceRoll();
    let success = maxPartySkill >= roll;

    let sl = Math.floor(maxPartySkill / 10) - Math.floor(roll / 10);

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
        critical: roll % 11 === 0 || roll === 100,
    };
};

// Opposed skill tests

Game_Interpreter.prototype.opposedSkillTest = function(compIdPlayer: string, modifierPlayer: number, skillValueNPC: number) {
    const actorSkillBaseValues = [];
    for (let i = 1; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i].comp(compIdPlayer));
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifierPlayer;

    const rollPlayer = TEW.DICE.displayDiceRoll();
    const rollNPC = TEW.DICE.roll();

    let slPlayer = Math.floor(maxPartySkill / 10) - Math.floor(rollPlayer / 10);
    let slNPC = Math.floor(skillValueNPC / 10) - Math.floor(rollNPC / 10);

    let successRollPlayer = maxPartySkill >= rollPlayer;
    let successRollNpc = skillValueNPC >= rollNPC;

    if (rollPlayer <= 5) {
        successRollPlayer = true;
        slPlayer = slPlayer > 0 ? slPlayer : 0;
    } else if (rollPlayer >= 96) {
        successRollPlayer = false;
        slPlayer = slPlayer < 0 ? slPlayer : 0;
    }

    if (rollNPC <= 5) {
        successRollNpc = true;
        slNPC = slNPC > 0 ? slNPC : 0;
    } else if (rollNPC >= 96) {
        successRollNpc = true;
        slNPC = slNPC < 0 ? slNPC : 0;
    }

    let criticalPlayer = rollPlayer % 11 === 0 || rollPlayer === 100;
    let criticalNPC = rollNPC % 11 === 0 || rollNPC === 100;

    let success: boolean;
    if (successRollPlayer && criticalPlayer) {
        success = true;
    } else if (successRollNpc && criticalNPC) {
        success = false;
    } else if (slPlayer > slNPC) {
        success = true;
    } else if (slNPC > slPlayer) {
        success = false;
    } else {
        success = (maxPartySkill >= skillValueNPC);
    }

    return {
        sl: slPlayer - slNPC,
        success,
        criticalPlayer
    };
};

// Combat opposed test
// SL = Success level (DR in french)
// TODO loca
TEW.DICE.combatOpposedSkillTest = function(
    compValueAttacker: number,
    compValueDefender: number,
    isAttackerPlayer: boolean,
    isDefenderPlayer: boolean
) {
    const rollAttacker = isAttackerPlayer ? TEW.DICE.displayDiceRoll() : TEW.DICE.roll();
    const rollDefender = isDefenderPlayer ? TEW.DICE.displayDiceRoll() : TEW.DICE.roll();

    let slAttacker = Math.floor(compValueAttacker / 10) - Math.floor(rollAttacker / 10);
    let slDefender = Math.floor(compValueDefender / 10) - Math.floor(rollDefender / 10);

    let successRollAttacker = compValueAttacker >= rollAttacker;
    let successRollDefender = compValueDefender >= rollDefender;

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
        successRollDefender = true;
        slDefender = slDefender < 0 ? slDefender : 0;
    }

    let criticalAttacker = rollAttacker % 11 === 0 || rollAttacker === 100;
    let criticalDefender = rollDefender % 11 === 0 || rollDefender === 100;

    let success: boolean;
    if (successRollAttacker && criticalAttacker) {
        success = true;
    } else if (successRollDefender && criticalDefender) {
        success = false;
    } else if (slAttacker > slDefender) {
        success = true;
    } else if (slDefender > slAttacker) {
        success = false;
    } else {
        success = (compValueAttacker >= compValueDefender);
    }

    return {
        slAttacker,
        slDefender,
        success,
        criticalAttacker,
        criticalDefender
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
