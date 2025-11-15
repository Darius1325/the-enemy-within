// $PluginCompiler TEW_Combat.js

import Game_Actor from "../../game/Game_Actor";

export interface IHalfWindow_TacticsList {
    _actor: Game_Actor;
    _maxItems: number;
    _leftPadding: number;
    _rightColumnWidth: number;
    _rightColumnPosition: number;
    _iconPadding: number;
    
    setActor: (actor: Game_Actor) => void;
    refresh: () => void;
    maxItems: () => number;
    maxCols: () => number;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// HalfWindow_TacticsList
//
// Super object to manage all inventory list windows

function HalfWindow_TacticsList() {
    this.initialize.apply(this, arguments);
}

export default HalfWindow_TacticsList.prototype = Object.create(Window_Selectable.prototype);
HalfWindow_TacticsList.prototype.constructor = HalfWindow_TacticsList;

// Inializing the window
HalfWindow_TacticsList.prototype.initialize = function() {
    Window_Selectable.prototype.initialize.call(this,
        0, 0, Graphics.boxWidth / 2, Graphics.boxHeight);
    this._actor = null;
    this._maxItems = 0;
    this._leftPadding = 10;
    this._rightColumnWidth = 20;
    this._rightColumnPosition = Graphics.boxWidth / 2 - this._rightColumnWidth * 4;
    this._iconPadding = 5;
    this.deactivate();
    this.refresh();
};

// Setting the actor
HalfWindow_TacticsList.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

// Refreshing the window
HalfWindow_TacticsList.prototype.refresh = function() {
    if (this.contents) {
        this.contents.clear();
    }
    if (this._actor) {
        this.drawAllItems();
    }
};

// Number of items
HalfWindow_TacticsList.prototype.maxItems = function() {
    return this._maxItems;
};

// Number of columns
HalfWindow_TacticsList.prototype.maxCols = () => 1;
