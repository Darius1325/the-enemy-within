// $PluginCompiler TEW_Menus.js 10

import TEW from "../../_types/tew";

export interface IHalfWindow_DetailsCommand {
    _actionsNumber: number;
    _windowWidth: number;
    _windowHeight: number;

    addCommand(name: string, symbol: string, enabled?: boolean, ext?: string): void;
    clear(): void;
    windowWidth(): number;
    windowHeight(): number;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// HalfWindow_DetailsCommand
//
// Super object to manage individual item command windows

function HalfWindow_DetailsCommand() {
    this.initialize.apply(this, arguments);
};

// TODO maybe just fix every window's position?
HalfWindow_DetailsCommand.MARGIN_X = 20;
HalfWindow_DetailsCommand.MARGIN_Y = 20;
HalfWindow_DetailsCommand.TOTAL_HEIGHT = TEW.MENU.LINE_HEIGHT * 3 + TEW.MENU.STANDARD_PADDING * 2;

export default HalfWindow_DetailsCommand.prototype = Object.create(Window_Command.prototype);
HalfWindow_DetailsCommand.prototype.constructor = HalfWindow_DetailsCommand;

// Initializing the command window
HalfWindow_DetailsCommand.prototype.initialize = function(actionsNumber = 2) {
    this._actionsNumber = actionsNumber;
    Window_Command.prototype.initialize.call(
        this,
        Graphics.boxWidth / 2 + HalfWindow_DetailsCommand.MARGIN_X,
        Graphics.boxHeight - HalfWindow_DetailsCommand.TOTAL_HEIGHT - HalfWindow_DetailsCommand.MARGIN_Y);
};

HalfWindow_DetailsCommand.prototype.addCommand = function(name: string, symbol: string, enabled = true, ext = null) {
    this._list.push({ name: name, symbol: symbol, enabled: enabled, ext: ext});
};

HalfWindow_DetailsCommand.prototype.maxCols = function() {
    return this._actionsNumber <= 3 ? 1 : 2;
};

HalfWindow_DetailsCommand.prototype.clear = function() {
    this.clearCommandList();
    Window_Selectable.prototype.refresh.call(this);
};

HalfWindow_DetailsCommand.prototype.horizontalBorderPadding = function() {
    //const defaultPadding = Window_Command.prototype.horizontalBorderPadding.call(this); // 30
    return this.maxCols === 1 ? 150 : 80;
};

HalfWindow_DetailsCommand.prototype.verticalBorderPadding = function() {
    const defaultPadding = Window_Command.prototype.verticalBorderPadding.call(this); // 30
    switch(this._actionsNumber) {
        // total window height is 168 (bg padding + three lines of text)
        case 1:
            return 66; // total height / 2 - line height / 2 (one line centered)
        case 2:
        case 4:
            return 48; // total height / 2 - line height (two lines centered)
        case 3:
        case 5:
        case 6:
            return 30; // total height / 2 - 3/2 * line height (three lines centered)
        default:
            return defaultPadding;
    }
};
