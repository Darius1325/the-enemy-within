// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_TacticsItem
//
// The window for selecting a item to use on the tactics screen.

function Window_TacticsItem() {
    this.initialize.apply(this, arguments);
}

export default Window_TacticsItem.prototype = Object.create(Window_BattleItem.prototype);
Window_TacticsItem.prototype.constructor = Window_TacticsItem;

Window_TacticsItem.prototype.processCursorMove = function() {
    var lastIndex = this.index();
    Window_BattleItem.prototype.processCursorMove.call(this);
    if (this.index() !== lastIndex) {
        var action = BattleManager.inputtingAction();
        action.setItem(this.item().id);
        BattleManager.refreshRedCells(action);
    }
};

Window_TacticsItem.prototype.show = function() {
    Window_BattleItem.prototype.show.call(this);
    if (this.item()) {
        var action = BattleManager.inputtingAction();
        action.setItem(this.item().id);
        BattleManager.refreshRedCells(action);
    }
};
