// $PluginCompiler TEW_Base.js

import TEW from "../../_types/tew";
import Window_Dice from "./Window_Dice";

// $StartCompilation

// Game_Interpreter

TEW.DICE.rollD100 = function() {
    return Math.floor(Math.random() * 99) + 1;
};

TEW.DICE.displayDiceRoll = function() {
    const result = this.rollD100();
    const windowDice = new Window_Dice(0, 0, Math.floor(result / 10), result % 10);
    SceneManager._scene.addWindow(windowDice);
    return result;
}

Game_Interpreter.prototype.partySkillTest = function(compId: string, modifier: number) {
    const actorSkillBaseValues = [];
    // Select the best character for the job
    for (let i = 1; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i][compId]);
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifier;

    const roll = TEW.DICE.displayDiceRoll();
    let success = maxPartySkill >= roll;

    let dr = Math.floor(maxPartySkill / 10) - Math.floor(roll / 10);

    // Special rules : 5 or below is always a success, 96 or above is always a failure
    if (roll <= 5) {
        success = true;
        dr = dr > 0 ? dr : 0;
    } else if (roll >= 96) {
        success = false;
        dr = dr < 0 ? dr : 0;
    }

    return {
        dr,
        success,
        critical: roll % 11 === 0 || roll === 100,
    };
};

// Opposed skill tests

Game_Interpreter.prototype.opposedSkillTest = function(compIdPlayer: string, modifierPlayer: number, skillValueNPC: number) {
    const actorSkillBaseValues = [];
    for (let i = 1; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i][compIdPlayer]);
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifierPlayer;

    const rollPlayer = TEW.DICE.displayDiceRoll();
    const rollNPC = TEW.DICE.rollD100();

    let drPlayer = Math.floor(maxPartySkill / 10) - Math.floor(rollPlayer / 10);
    let drNPC = Math.floor(skillValueNPC / 10) - Math.floor(rollNPC / 10);

    let successRollPlayer = maxPartySkill >= rollPlayer;
    let successRollNpc = skillValueNPC >= rollNPC;

    if (rollPlayer <= 5) {
        successRollPlayer = true;
        drPlayer = drPlayer > 0 ? drPlayer : 0;
    } else if (rollPlayer >= 96) {
        successRollPlayer = false;
        drPlayer = drPlayer < 0 ? drPlayer : 0;
    }

    if (rollNPC <= 5) {
        successRollNpc = true;
        drNPC = drNPC > 0 ? drNPC : 0;
    } else if (rollNPC >= 96) {
        successRollNpc = true;
        drNPC = drNPC < 0 ? drNPC : 0;
    }

    let criticalPlayer = rollPlayer % 11 === 0 || rollPlayer === 100;
    let criticalNPC = rollNPC % 11 === 0 || rollNPC === 100;

    let success: boolean;
    if (successRollPlayer && criticalPlayer) {
        success = true;
    } else if (successRollNpc && criticalNPC) {
        success = false;
    } else if (drPlayer > drNPC) {
        success = true;
    } else if (drNPC > drPlayer) {
        success = false;
    } else {
        success = (maxPartySkill >= skillValueNPC);
    }

    return {
        dr: drPlayer - drNPC,
        success,
        criticalPlayer
    };
};

// Combat opposed test


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
