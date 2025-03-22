
var Imported = Imported || {};
Imported.TEW_DiceRolls = true;
var TEW = TEW || {};

/*
* This plugin contains interpreter commands to simulate dice rolls.
*/

// Game_Interpreter

TEW.rollD100 = function() {
    return Math.floor(Math.random() * 99) + 1;
};

TEW.displayDiceRoll = function() {
    const result = this.rollD100();
    SceneManager._scene.addWindow(new Window_Dice(0, 0, Math.floor(result / 10), result % 10));
    return result;
}

Game_Interpreter.prototype.partySkillTest = function(skillName, modifier) {
    const actorSkillBaseValues = [];
    // Select the best character for the job
    for (let i = 0; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i][skillName]);
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifier;

    const roll = TEW.displayDiceRoll();
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

Game_Interpreter.prototype.opposedSkillTest = function(skillNamePlayer, modifierPlayer, skillValueNPC) {
    const actorSkillBaseValues = [];
    for (let i = 0; i < $gameActors._data.length; i++) {
        if ($gameActors._data[i]) {
            actorSkillBaseValues.push($gameActors._data[i][skillNamePlayer]);
        }
    }
    const maxPartySkill = Math.max(...actorSkillBaseValues) + modifierPlayer;

    const rollPlayer = TEW.displayDiceRoll();
    const rollNPC = TEW.rollD100(); 

    let drPlayer = Math.floor(maxPartySkill / 10) - Math.floor(rollPlayer / 10);
    let drNPC = Math.floor(skillValueNPC / 10) - Math.floor(rollNPC / 10);

    let successRollPlayer = maxPartySkill >= roll;
    let successRollNpc = skillValueNPC >= roll;

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

    let success;
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



//---------------------------------------
// Window_Dice
//
// The window for displaying a dice roll.

function Window_Dice() {
    this.initialize.apply(this, arguments);
}

Window_Dice.prototype = Object.create(Window_Base.prototype);
Window_Dice.prototype.constructor = Window_Dice;

Window_Dice.prototype.initialize = function(x, y, tens, units) {
    Window_Base.prototype.initialize.call(this, x, y, 240, 110); // temp !!
    this._tens = tens;
    this._units = units;
    this.refresh();
};

Window_Dice.prototype.windowWidth = function() {
    return 340;
};

Window_Dice.prototype.windowHeight = function() {
    return 100;
};

Window_Dice.prototype.refresh = function() {
    this.contents.clear();
    this.contents.drawDie(0, 1, this._tens, 'black', 'lightblue');
    this.contents.drawDie(100, 1, this._units, 'black', 'lightblue');
};

Window_Dice.prototype.open = function() {
    this.refresh();
    Window_Base.prototype.open.call(this);
};


// Bitmap

TEW.DIE_10_POINTS = [
    [0, 22],
    [0, 45],
    [38, 67],
    [42, 67],
    [80, 45],
    [80, 22],
    [40, 0],
    [16, 50],
    [40, 63],
    [40, 67],
    [64, 50]
];

TEW.drawLine = function(context, start, end) {
    context.moveTo(start[0], start[1]);
    context.lineTo(end[0], end[1]);
};

Bitmap.prototype.drawDie = function(x, size, value, edgeColor, fillColor) {
    const points = [];
    for (let i = 0; i < TEW.DIE_10_POINTS.length; i++) {
        points.push([TEW.DIE_10_POINTS[i][0] + x, TEW.DIE_10_POINTS[i][1]]);
    }

    var context = this._context;
    context.save();

    context.strokeStyle = edgeColor;
    context.fillStyle = fillColor;

    context.beginPath();
    context.moveTo(...points[0]);
    context.lineTo(...points[1]);
    context.lineTo(...points[2]);
    context.lineTo(...points[3]);
    context.lineTo(...points[4]);
    context.lineTo(...points[5]);
    context.lineTo(...points[6]);
    context.closePath();

    context.fill();
    context.stroke();

    TEW.drawLine(context, points[7], points[1]);
    TEW.drawLine(context, points[7], points[6]);
    TEW.drawLine(context, points[7], points[8]);
    TEW.drawLine(context, points[10], points[8]);
    TEW.drawLine(context, points[10], points[6]);
    TEW.drawLine(context, points[10], points[4]);
    TEW.drawLine(context, points[9], points[8]);

    context.stroke();

    this.drawText(value, 33 + x, 27, 16, 25, 'left');

    context.restore();
    this._setDirty();
}

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
