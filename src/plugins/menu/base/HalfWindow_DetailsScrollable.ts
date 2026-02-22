// $PluginCompiler TEW_Menus.js 10

import { Game_Actor } from "../../base/stats/Game_Actor";
import TEW from "../../_types/tew";
import HalfWindow_DetailsCommand from "./HalfWindow_DetailsCommand";

export interface IHalfWindow_DetailsScrollable {
    width: number;
    _lines: string[];

    setActor: (actor: Game_Actor) => void;
    // drawUnderlinedtext: (text: string, x: number, y: number, width: number, align: string) => void;
    // drawTable2Columns: (x: number, y: number, width: number, rows: number, textArray: [string, string][]) => void;
    drawLine: (y: number) => void;
    clear: () => void;
    maxItems: () => number;
    isCursorVisible: () => boolean;
};

// $StartCompilation

//-----------------------------------------------------------------------------
// HalfWindow_DetailsScrollable
//
// Super object to manage all item details windows when scrollable content is needed.

function HalfWindow_DetailsScrollable() {
    this.initialize.apply(this, arguments);
};

// reduce contents height a bit to fit 17 lines of text (font size 28)
HalfWindow_DetailsScrollable.OFFSET_Y = 8;

export default HalfWindow_DetailsScrollable.prototype = Object.create(Window_Selectable.prototype);
HalfWindow_DetailsScrollable.prototype.constructor = HalfWindow_DetailsScrollable;

// Initalizing the window
HalfWindow_DetailsScrollable.prototype.initialize = function(fullHeight: boolean = false) {
    Window_Selectable.prototype.initialize.call(this,
        Graphics.boxWidth / 2,
        TEW.MENU.INVENTORY_WINDOW_TOPBAR_HEIGHT,
        Graphics.boxWidth / 2,
        Graphics.boxHeight - TEW.MENU.STATUS_WINDOW_TOPBAR_HEIGHT -
            (fullHeight ? 0 : 2 * HalfWindow_DetailsCommand.MARGIN_Y - HalfWindow_DetailsCommand.TOTAL_HEIGHT)
        );
    this.width = Graphics.boxWidth / 2;
    this._text = "";
    this._lines = [];
    this.activate();
    this.refresh();
};

HalfWindow_DetailsScrollable.prototype.setActor = function(actor: Game_Actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};

HalfWindow_DetailsScrollable.prototype.setText = function(text: string) {
    if (this._text !== text) {
        this._text = text;
        this._lines = this.splitTextToLines(this._text, 0, 0, this.contentsWidth());
        this.refresh();
    }
}

HalfWindow_DetailsScrollable.prototype.maxItems = function(): number {
    return this._lines?.length ?? 1;
};

HalfWindow_DetailsScrollable.prototype.isCursorVisible = function(): boolean {
    return false;
};

HalfWindow_DetailsScrollable.prototype.drawLine = function(y: number) {
    const lineWidth = 40;
    const lineSize = 2;
    this.contents.fillRect(
        (this.contentsWidth() - lineWidth) / 2,
        y,
        lineWidth,
        lineSize,
        this.normalColor()
    );
};

HalfWindow_DetailsScrollable.prototype.clear = function() {
    if (this.contents) {
        this.contents.clear();
    }
};

HalfWindow_DetailsScrollable.prototype.itemHeight = function(): number {
    return this.contents.fontSize * 1.2;
};


HalfWindow_DetailsScrollable.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const y = normalizedIndex * this.itemHeight();

    this.drawText(
        this._lines[index],
        0,
        y,
        this.contentsWidth(),
        'left');
};

HalfWindow_DetailsScrollable.prototype.cursorDown = function() {}
HalfWindow_DetailsScrollable.prototype.cursorUp = function() {}
HalfWindow_DetailsScrollable.prototype.cursorPagedown = function() {}
HalfWindow_DetailsScrollable.prototype.cursorPageup = function() {}

HalfWindow_DetailsScrollable.prototype.processWheel = function() {
    if (this.visible) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.scrollDown();
        }
        if (TouchInput.wheelY <= -threshold) {
            this.scrollUp();
        }
    }
};

HalfWindow_DetailsScrollable.prototype.verticalBorderPadding = function() {
    return Window_Selectable.prototype.verticalBorderPadding.call(this) + HalfWindow_DetailsScrollable.OFFSET_Y;
};
