// $PluginCompiler TEW_Combat.js

import TEW from "../../_types/tew";

// $StartCompilation

Game_Item.prototype.isSpell = function() {
    return this._dataClass === 'spell';
};

Game_Item.prototype.object = function() {
    if (this.isSkill()) {
        return $dataSkills[this._itemId];
    } else if (this.isItem()) {
        return $dataItems[this._itemId];
    } else if (this.isWeapon()) {
        return $dataWeapons[this._itemId];
    } else if (this.isArmor()) {
        return $dataArmors[this._itemId];
    } else if (this.isSpell()) {
        return TEW.DATABASE.SPELLS.SET[this._itemId];
    } else {
        return null;
    }
};

TEW.MEMORY.gameItemSetObject = Game_Item.prototype.setObject;
Game_Item.prototype.setObject = function(item) {
    if (TEW.DATABASE.SPELLS.IDS.includes(item[0])) {
        this._dataClass = 'spell';
        this._itemId = item[0];
    } else {
        TEW.MEMORY.gameItemSetObject.call(this, item);
    }
};
