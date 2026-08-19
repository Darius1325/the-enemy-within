// $PluginCompiler TEW_Menus.js

// ----------------------

// File: Window_StatusTalents.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 01/05/2025
// Description: This file contains the implementation of the Window_StatusTalents class, which lists the talents an actor has acquired along with their level. While levelling mode is active, the talents belonging to the actor's career which have not been acquired yet are added at the top of the list, and can be bought and refunded with the left and right arrows.

// ----------------------
// Imports
// ----------------------
import TEW from "../../../_types/tew";
import HalfWindow_List from "../../base/HalfWindow_List";

// ----------------------
// $StartCompilation
// ----------------------


function Window_StatusTalents() {
    this.initialize.apply(this, arguments);
}

Window_StatusTalents.LEFT_PADDING = 48;
Window_StatusTalents.NAME_COLUMN_WIDTH = 400;
Window_StatusTalents.LEVEL_COLUMN_WIDTH = 120;

export default Window_StatusTalents.prototype = Object.create(HalfWindow_List.prototype);
Window_StatusTalents.prototype.constructor = Window_StatusTalents;

/**
 * Constructor for the Window_StatusTalents class.
 */
Window_StatusTalents.prototype.initialize = function() {
    this._levelling = null;
    this._levellingMode = false;
    this._talents = [];
    HalfWindow_List.prototype.initialize.call(this);
};

/**
 * Sets the actor for the window.
 */
Window_StatusTalents.prototype.setActor = function(actor:any) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.makeTalentsList();
        this.refresh();
    }
};

/**
 * Building the displayed list. Outside of levelling mode it only holds the acquired talents.
 * In levelling mode, the career talents which have not been acquired yet are added at the top
 * in alphabetical order, so that they may be bought.
 */
Window_StatusTalents.prototype.makeTalentsList = function() {
    if (!this._actor) {
        this._talents = [];
        this._maxItems = 0;
        return;
    }

    // [<internal name>, {<talent data>}]
    const ownedTalents = TEW.DATABASE.TALENTS.ARRAY.filter(talent => this._actor.hasTalent(talent[0]));

    if (!this.isLevellingMode()) {
        this._talents = ownedTalents;
    } else {
        const buyableTalents = this._actor.buyableTalents()
            .map(talentId => [talentId, TEW.DATABASE.TALENTS.SET[talentId]])
            .sort((a, b) => a[1].name.localeCompare(b[1].name));
        this._talents = buyableTalents.concat(ownedTalents);
    }

    this._maxItems = this._talents.length;
};

/**
 * Draws all items in the window.
 */
Window_StatusTalents.prototype.drawAllItems = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
        var index = topIndex + i;
        if (index < this.maxItems()) {
            this.drawItem(index);
        }
    }
};

/**
 * Draws a single item in the window.
 */
Window_StatusTalents.prototype.drawItem = function(index: number) {
    const normalizedIndex = index - this.topIndex();
    const x = Window_StatusTalents.LEFT_PADDING;
    const y = normalizedIndex * TEW.MENU.LINE_HEIGHT;

    const talent = this.talentFromIndex(index);

    // Talent name
    this.changeTextColor(this.systemColor());
    this.drawText(talent[1].name, x, y, Window_StatusTalents.NAME_COLUMN_WIDTH);
    this.resetTextColor();

    // Talent level, or the price of a talent which has not been bought yet
    this.changeTextColor(this.talentLevelColor(talent[0]));
    this.drawText(
        this.talentLevelText(talent[0]),
        x + Window_StatusTalents.NAME_COLUMN_WIDTH,
        y,
        Window_StatusTalents.LEVEL_COLUMN_WIDTH,
        'right'
    );
    this.resetTextColor();
};

/**
 * Returns the talent from the given index.
 */
Window_StatusTalents.prototype.talentFromIndex = function(index) {
    return this._talents[index];
};

Window_StatusTalents.prototype.select = function(index: number) {
    this._index = index;
    if (this._index >= 0) {
        this.callHandler("show_talent_description");
    }
    this._stayCount = 0;
    this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

// Window_StatusTalents.prototype.item = function() {
//     const talent = this.talentFromIndex(this._index);
//     return talent[1].name + ': ' + talent[1].desc;
// };

// // TODO
// Window_StatusTalents.prototype.select = function(index) {
//     // if (this._index !== index) {
//     //     this.hideHelpWindow();
//     // }
//     // this._index = index;
//     // if (this._index >= 0) {
//     //     this._helpWindow.setText(this.item());
//     // }
//     this._stayCount = 0;
//     this.ensureCursorVisible();
//     this.updateCursor();
//     this.callUpdateHelp();
// };

// #region ====== Levelling mode === //
/**
 * Links the window to the levelling session holding the pending purchases.
 */
Window_StatusTalents.prototype.setLevelling = function(levelling: any) {
    this._levelling = levelling;
    this.refresh();
};

/**
 * Enters or leaves levelling mode. The buyable talents appear and disappear with it, so the
 * selected talent is followed to its new index rather than left behind.
 */
Window_StatusTalents.prototype.setLevellingMode = function(active: boolean) {
    if (this._levellingMode === active) {
        return;
    }
    const selectedTalentId = this.index() >= 0 && this._talents[this.index()]
        ? this._talents[this.index()][0]
        : null;
    this._levellingMode = active;
    this.makeTalentsList();
    if (selectedTalentId) {
        const newIndex = this._talents.map(talent => talent[0]).indexOf(selectedTalentId);
        this.select(Math.min(Math.max(newIndex, 0), this.maxItems() - 1));
    }
    this.refresh();
};

Window_StatusTalents.prototype.isLevellingMode = function() {
    return !!this._levellingMode && !!this._levelling && !!this._actor;
};

/**
 * Level of a talent, including the purchase about to be made.
 */
Window_StatusTalents.prototype.talentLevel = function(talentId: string) {
    return this.isLevellingMode()
        ? this._levelling.talentValue(talentId)
        : this._actor.talent(talentId);
};

/**
 * Talents which are not acquired yet display their price instead of a level of 0.
 */
Window_StatusTalents.prototype.talentLevelText = function(talentId: string) {
    const level = this.talentLevel(talentId);
    if (level > 0 || !this.isLevellingMode()) {
        return `lvl${level}`;
    }
    return `${this._levelling.talentCost()} ${TextManager.expA}`;
};

/**
 * Green when the talent is about to be bought, blue when the career allows buying it,
 * plain otherwise. Running out of experience does not change the colour.
 */
Window_StatusTalents.prototype.talentLevelColor = function(talentId: string) {
    if (!this.isLevellingMode()) {
        return this.normalColor();
    }
    if (this._levelling.isTalentBought(talentId)) {
        return this.powerUpColor();
    }
    if (this._levelling.canBuyTalent(talentId)) {
        return this.levellingColor();
    }
    return this.normalColor();
};

/**
 * In levelling mode, the horizontal arrows buy and refund talents.
 */
Window_StatusTalents.prototype.cursorRight = function(wrap: boolean) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeTalent(true);
    } else {
        HalfWindow_List.prototype.cursorRight.call(this, wrap);
    }
};

Window_StatusTalents.prototype.cursorLeft = function(wrap: boolean) {
    if (this.isLevellingMode() && this.index() >= 0) {
        this.changeTalent(false);
    } else {
        HalfWindow_List.prototype.cursorLeft.call(this, wrap);
    }
};

/**
 * Buys or refunds the selected talent.
 */
Window_StatusTalents.prototype.changeTalent = function(buy: boolean) {
    const talentId = this.talentFromIndex(this.index())[0];
    const changed = buy
        ? this._levelling.buyTalent(talentId)
        : this._levelling.refundTalent(talentId);
    if (changed) {
        SoundManager.playCursor();
        this.refresh();
        this.callHandler('levelling_change');
    }
};
// #endregion === Levelling mode === //

/**
 * Called when the process successfully completes.
 */
Window_StatusTalents.prototype.processOk = function() {
    if (this.isCurrentItemEnabled()) {
        this.playOkSound();
        this.updateInputData();
        this.callOkHandler();
    } else {
        this.playBuzzerSound();
    }
};

// Window_StatusTalents.prototype.isCurrentItemEnabled = function() {
//     return true; // TODO
// };

// Window_StatusTalents.prototype.showHelpWindow = function() {
//     if (this._helpWindow && this.active) {
//         this._helpWindow.show();
//         this._helpWindow.refresh();
//     }
// };

// Window_StatusTalents.prototype.updateHelp = () => {};
/**
 * Returns the maximum number of items in the window.
 */
// Window_StatusTalents.prototype.maxItems = function() {
//     return this._maxItems;
// };
