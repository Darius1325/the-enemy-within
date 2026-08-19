// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_StatusStats.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Window_StatusStats class, which displays an actor's portrait, wounds, experience, fate and resilience along with their ten characteristics. The characteristics are laid out in two columns of five and are selectable, so that levelling mode can let the player buy and refund characteristic advances with the left and right arrows.

// ----------------------
// Imports
// ----------------------

import { Sprite } from "../../../../rmmv/core/Sprite";
import TEW from "../../../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

// -----------------------------------------------------------------------------
// Window_StatusStats
//
// Character stats window

function Window_StatusStats() {
    this.initialize.apply(this, arguments);
}

// Max wounds are derived from other characteristics, so the list starts at the second param
Window_StatusStats.FIRST_PARAM_ID = 1;
Window_StatusStats.STATS_PER_COLUMN = 5;
Window_StatusStats.COLUMN_COUNT = 2;
Window_StatusStats.COLUMNS_X = [48, 432];
Window_StatusStats.NAME_COLUMN_WIDTH = 160;
Window_StatusStats.VALUE_COLUMN_WIDTH = 60;
// Line, in TEW.MENU.LINE_HEIGHT units, on which the first characteristic of each column is drawn
Window_StatusStats.STATS_FIRST_LINE = 8;
Window_StatusStats.SEPARATOR_LINE = 7;
// Horizontal room left around a characteristic for the selection cursor
Window_StatusStats.CURSOR_PADDING = 8;
Window_StatusStats.BASIC_INFO_WIDTH = 186;

export default Window_StatusStats.prototype = Object.create(Window_Status.prototype);
Window_StatusStats.prototype.constructor = Window_StatusStats;

Window_StatusStats.prototype.initialize = function() {
    this._levelling = null;
    this._levellingMode = false;
    Window_Status.prototype.initialize.call(this);
};

Window_StatusStats.prototype.setActor = function(actor: any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this._bgSprite = new Sprite(ImageManager.loadSystem("bg_menuStats_" + actor.name()));
        this.addChildAt(this._bgSprite, 0);
        this.refresh();
    }
};

// #region ====== Layout === //
/**
 * Characteristics are navigated column by column, so that the horizontal arrows stay free
 * for levelling mode.
 */
Window_StatusStats.prototype.maxCols = () => 1;

Window_StatusStats.prototype.maxItems = function() {
    return Window_StatusStats.STATS_PER_COLUMN * Window_StatusStats.COLUMN_COUNT;
};

/**
 * Param number of the characteristic displayed at the given index.
 */
Window_StatusStats.prototype.paramFromIndex = function(index: number) {
    return index + Window_StatusStats.FIRST_PARAM_ID;
};

Window_StatusStats.prototype.statX = function(index: number) {
    return Window_StatusStats.COLUMNS_X[Math.floor(index / Window_StatusStats.STATS_PER_COLUMN)];
};

Window_StatusStats.prototype.statY = function(index: number) {
    const line = Window_StatusStats.STATS_FIRST_LINE + index % Window_StatusStats.STATS_PER_COLUMN;
    return TEW.MENU.LINE_HEIGHT * line;
};

/**
 * The two columns are hardcoded, so the selection cursor is placed on them rather than on the
 * rows a single-column list would compute.
 */
Window_StatusStats.prototype.itemRect = function(index: number) {
    return new Rectangle(
        this.statX(index) - Window_StatusStats.CURSOR_PADDING,
        this.statY(index),
        Window_StatusStats.NAME_COLUMN_WIDTH
            + Window_StatusStats.VALUE_COLUMN_WIDTH
            + Window_StatusStats.CURSOR_PADDING * 2,
        this.lineHeight()
    );
};
// #endregion === Layout === //
// === //
// #region ====== Drawing === //
Window_StatusStats.prototype.drawAllItems = function() {
    this.drawCharacterInfo(1);
    this.drawHorzLine(TEW.MENU.LINE_HEIGHT * Window_StatusStats.SEPARATOR_LINE);
    this.drawStats();
};

Window_StatusStats.prototype.drawCharacterInfo = function(y) {
    this.drawActorName(this._actor, 6, y);
    this.drawActorCareer(this._actor, 192, y);
    this.drawHorzLine(y + TEW.MENU.LINE_HEIGHT);
    this.drawActorFace(this._actor, 12, y + TEW.MENU.LINE_HEIGHT * 2);
    this.drawBasicInfo(204, y + TEW.MENU.LINE_HEIGHT * 2);
};

Window_StatusStats.prototype.drawBasicInfo = function(x:number, y:number) {
    var lineHeight = this.lineHeight();
    this.drawActorHp(this._actor, x, y + lineHeight * 0);
    this.drawActorExp(this._actor, x, y + lineHeight * 1);
    this.drawActorFate(this._actor, x, y + lineHeight * 2);
    this.drawActorResilience(this._actor, x, y + lineHeight * 3);
};

Window_StatusStats.prototype.drawActorHp = function(actor, x, y) {
    const width = Window_StatusStats.BASIC_INFO_WIDTH;
    const color1 = this.hpGaugeColor1();
    const color2 = this.normalColor();

    this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
    this.drawCurrentOverMax(actor.hp, actor.mhp, x, y, width, color1, color2, TextManager.hpA);
};

Window_StatusStats.prototype.drawActorExp = function(actor, x, y) {
    const width = Window_StatusStats.BASIC_INFO_WIDTH;
    // While levelling, pending advances are already deducted, as in the topbar indicator
    const exp = this.isLevellingMode() ? this._levelling.remainingExp() : actor.availableExp();
    const valueWidth = this.textWidth(exp);

    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.expA, x, y, 48);
    this.resetTextColor();
    this.drawText(exp, x + width - valueWidth, y, valueWidth, 'right');
}

Window_StatusStats.prototype.drawActorFate = function(actor, x, y) {
    const width = Window_StatusStats.BASIC_INFO_WIDTH;
    this.drawCurrentOverMax(actor._fortune, actor._fate, x, y, width, this.normalColor(), this.normalColor(), 'FATE'); // TODO
}

Window_StatusStats.prototype.drawActorResilience = function(actor, x, y) {
    const width = Window_StatusStats.BASIC_INFO_WIDTH;
    this.drawCurrentOverMax(actor._resolve, actor._resilience, x, y, width, this.normalColor(), this.normalColor(), 'RESIL'); // TODO
}

Window_StatusStats.prototype.drawStats = function() {
    for (let index = 0; index < this.maxItems(); index++) {
        this.drawItem(index);
    }
};

/**
 * Draws one characteristic, including the advances about to be bought in levelling mode.
 */
Window_StatusStats.prototype.drawItem = function(index: number) {
    const paramId = this.paramFromIndex(index);
    const x = this.statX(index);
    const y = this.statY(index);

    // Characteristic name
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.param(paramId), x, y, Window_StatusStats.NAME_COLUMN_WIDTH);

    // Characteristic value
    this.changeTextColor(this.statValueColor(paramId));
    this.drawText(
        this.statValue(paramId),
        x + Window_StatusStats.NAME_COLUMN_WIDTH,
        y,
        Window_StatusStats.VALUE_COLUMN_WIDTH,
        'right'
    );
    this.resetTextColor();
};
// #endregion === Drawing === //
// === //
// #region ====== Levelling mode === //
/**
 * Links the window to the levelling session holding the pending advances.
 */
Window_StatusStats.prototype.setLevelling = function(levelling: any) {
    this._levelling = levelling;
    this.refresh();
};

/**
 * Enters or leaves levelling mode.
 */
Window_StatusStats.prototype.setLevellingMode = function(active: boolean) {
    if (this._levellingMode !== active) {
        this._levellingMode = active;
        this.refresh();
    }
};

Window_StatusStats.prototype.isLevellingMode = function() {
    return !!this._levellingMode && !!this._levelling && !!this._actor;
};

/**
 * Displayed value of a characteristic, including the advances about to be bought.
 */
Window_StatusStats.prototype.statValue = function(paramId: number) {
    return this.isLevellingMode()
        ? this._levelling.statValue(paramId)
        : this._actor.param(paramId);
};

/**
 * Green when advances are about to be bought, blue when the career allows them, plain otherwise.
 * Running out of experience does not change the colour, only what the arrows are able to do.
 */
Window_StatusStats.prototype.statValueColor = function(paramId: number) {
    if (!this.isLevellingMode()) {
        return this.normalColor();
    }
    if (this._levelling.statAdvances(paramId) > 0) {
        return this.powerUpColor();
    }
    if (this._levelling.canImproveStat(paramId)) {
        return this.levellingColor();
    }
    return this.normalColor();
};

/**
 * In levelling mode, the horizontal arrows buy and refund advances. Columns are navigated with
 * the vertical arrows, so nothing becomes unreachable.
 */
Window_StatusStats.prototype.cursorRight = function(wrap: boolean) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeStat(true);
    } else {
        Window_Status.prototype.cursorRight.call(this, wrap);
    }
};

Window_StatusStats.prototype.cursorLeft = function(wrap: boolean) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeStat(false);
    } else {
        Window_Status.prototype.cursorLeft.call(this, wrap);
    }
};

/**
 * Buys or refunds one advance on the selected characteristic.
 */
Window_StatusStats.prototype.changeStat = function(increase: boolean) {
    const paramId = this.paramFromIndex(this.index());
    const changed = increase
        ? this._levelling.increaseStat(paramId)
        : this._levelling.decreaseStat(paramId);
    if (changed) {
        SoundManager.playCursor();
        this.refresh();
        this.callHandler('levelling_change');
    }
};
// #endregion === Levelling mode === //
