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
 * in alphabetical order, so that they may be bought, and the grouped talent picks the career
 * still owes the player are added above them, one row per pick.
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
        const slotRows = this.makeSlotRows();
        const pickedIds = slotRows.map(row => row[0]);
        const buyableTalents = this._actor.buyableTalents()
            .filter(talentId => pickedIds.indexOf(talentId) < 0)
            .map(talentId => [talentId, TEW.DATABASE.TALENTS.SET[talentId]])
            .sort((a, b) => a[1].name.localeCompare(b[1].name));
        this._talents = slotRows.concat(buyableTalents).concat(ownedTalents);
    }

    this._maxItems = this._talents.length;
};

/**
 * One row per grouped talent pick the career still owes the player.
 * A pick made earlier in this session is displayed as the talent it bound, so that the arrows
 * buy it exactly as they buy any other career talent; an unspent one keeps the group's name and
 * waits for the confirmation key to open the picker.
 * Rows are `[key, talent data, slot index]`, the third element being what tells them apart from
 * an ordinary talent.
 */
Window_StatusTalents.prototype.makeSlotRows = function() {
    return this._actor.openAnySlots()
        .filter(slot => slot.kind === 'talent')
        .map(slot => {
            const slotIndex = this._actor.anySlotIndex(slot);
            const chosen = this._levelling.slotChoice(slotIndex);
            return chosen
                ? [chosen, TEW.DATABASE.TALENTS.SET[chosen], slotIndex]
                : [`${slot.wildcard}#${slotIndex}`, null, slotIndex];
        })
        .sort((a, b) => this.rowName(a).localeCompare(this.rowName(b)));
};

// Name a row goes by, whether it stands for a talent or for an unspent pick
Window_StatusTalents.prototype.rowName = function(row: any[]) {
    return row[1] ? row[1].name : this._actor.anySlotName(this._actor.anySlots()[row[2]]);
};

// Whether the row at the given index is a grouped talent pick which is still to be made
Window_StatusTalents.prototype.isOpenSlotIndex = function(index: number) {
    return index >= 0 && !!this._talents[index] && !this._talents[index][1];
};

// Index of the slot the row at the given index belongs to, -1 for an ordinary talent
Window_StatusTalents.prototype.slotIndexAt = function(index: number) {
    const talent = this._talents[index];
    return talent && talent[2] !== undefined ? talent[2] : -1;
};

// Index of the slot the cursor is on, for the scene to open the picker on it
Window_StatusTalents.prototype.selectedSlotIndex = function() {
    return this.slotIndexAt(this.index());
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
    const isOpenSlot = this.isOpenSlotIndex(index);

    // Talent name, or the name of the group an unspent pick draws from
    this.changeTextColor(this.systemColor());
    this.drawText(
        isOpenSlot ? this.rowName(talent) : talent[1].name,
        x,
        y,
        Window_StatusTalents.NAME_COLUMN_WIDTH
    );
    this.resetTextColor();

    // Talent level, the price of a talent which has not been bought yet, or a call to pick one
    this.changeTextColor(isOpenSlot ? this.levellingColor() : this.talentLevelColor(talent[0]));
    this.drawText(
        isOpenSlot ? TextManager.statusAnyChoose : this.talentLevelText(talent[0]),
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
 * An unspent pick has no talent to buy and is left alone: it is spent with the confirmation key,
 * which opens the picker.
 */
Window_StatusTalents.prototype.cursorRight = function(wrap: boolean) {
    if (this.isLevellingMode() && this.index() >= 0) {
        if (!this.isOpenSlotIndex(this.index())) {
            this.changeTalent(true);
        }
    } else {
        HalfWindow_List.prototype.cursorRight.call(this, wrap);
    }
};

Window_StatusTalents.prototype.cursorLeft = function(wrap: boolean) {
    if (this.isLevellingMode() && this.index() >= 0) {
        if (!this.isOpenSlotIndex(this.index())) {
            this.changeTalent(false);
        }
    } else {
        HalfWindow_List.prototype.cursorLeft.call(this, wrap);
    }
};

/**
 * Buys or refunds the selected talent.
 * Refunding a talent bought through a pick releases that pick, and so does refunding a pick
 * whose talent was never bought: either way the row goes back to being a free choice.
 */
Window_StatusTalents.prototype.changeTalent = function(buy: boolean) {
    const talentId = this.talentFromIndex(this.index())[0];
    const slotIndex = this.slotIndexAt(this.index());
    let changed = buy
        ? this._levelling.buyTalent(talentId)
        : this._levelling.refundTalent(talentId);
    if (!changed && !buy && slotIndex >= 0) {
        changed = this._levelling.releasePick(slotIndex);
    }
    if (changed) {
        SoundManager.playCursor();
        this.makeTalentsList();
        this.refresh();
        this.callHandler('levelling_change');
    }
};
// #endregion === Levelling mode === //

Window_StatusTalents.prototype.isOkEnabled = function() {
    return this.isLevellingMode();
};

/**
 * Called when the process successfully completes.
 * In levelling mode the confirmation key opens the picker on an unspent grouped talent pick. An
 * empty pool means every specialisation the group had on offer is already held or taken, so
 * there is nothing to open.
 */
Window_StatusTalents.prototype.processOk = function() {
    if (!this.isCurrentItemEnabled()) {
        this.playBuzzerSound();
        return;
    }
    if (this.isLevellingMode() && this.isOpenSlotIndex(this.index())) {
        this.updateInputData();
        if (this._levelling.slotPool(this.slotIndexAt(this.index())).length === 0) {
            this.playBuzzerSound();
            return;
        }
        this.playOkSound();
        this.callHandler('open_any_choice');
        return;
    }
    this.playOkSound();
    this.updateInputData();
    this.callOkHandler();
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
