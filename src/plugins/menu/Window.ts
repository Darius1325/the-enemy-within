// $PluginCompiler TEW_Menus.js

import { Window } from "../../rmmv/core/Window";

// $StartCompilation

Window.prototype.horizontalBorderPadding = function() {
    return this.padding;
};

Window.prototype.verticalBorderPadding = function() {
    return this.padding;
};

Window.prototype._refreshContents = function() {
    this._windowContentsSprite.move(this.horizontalBorderPadding(), this.verticalBorderPadding());
};

Window.prototype._refreshCursor = function() {
    var x = this._cursorRect.x + this.horizontalBorderPadding() - this.origin.x;
    var y = this._cursorRect.y + this.verticalBorderPadding() - this.origin.y;
    var w = this._cursorRect.width;
    var h = this._cursorRect.height;
    var m = 4;
    var x2 = Math.max(x, this.horizontalBorderPadding());
    var y2 = Math.max(y, this.verticalBorderPadding());
    var ox = x - x2;
    var oy = y - y2;
    var w2 = Math.min(w, this._width - this.horizontalBorderPadding() - x2);
    var h2 = Math.min(h, this._height - this.verticalBorderPadding() - y2);
    var bitmap = new Bitmap(w2, h2);

    this._windowCursorSprite.bitmap = bitmap;
    this._windowCursorSprite.setFrame(0, 0, w2, h2);
    this._windowCursorSprite.move(x2, y2);

    if (w > 0 && h > 0 && this._windowskin) {
        var skin = this._windowskin;
        var p = 96;
        var q = 48;
        bitmap.blt(skin, p+m, p+m, q-m*2, q-m*2, ox+m, oy+m, w-m*2, h-m*2);
        bitmap.blt(skin, p+m, p+0, q-m*2, m, ox+m, oy+0, w-m*2, m);
        bitmap.blt(skin, p+m, p+q-m, q-m*2, m, ox+m, oy+h-m, w-m*2, m);
        bitmap.blt(skin, p+0, p+m, m, q-m*2, ox+0, oy+m, m, h-m*2);
        bitmap.blt(skin, p+q-m, p+m, m, q-m*2, ox+w-m, oy+m, m, h-m*2);
        bitmap.blt(skin, p+0, p+0, m, m, ox+0, oy+0, m, m);
        bitmap.blt(skin, p+q-m, p+0, m, m, ox+w-m, oy+0, m, m);
        bitmap.blt(skin, p+0, p+q-m, m, m, ox+0, oy+h-m, m, m);
        bitmap.blt(skin, p+q-m, p+q-m, m, m, ox+w-m, oy+h-m, m, m);
    }
};

Window.prototype._updateContents = function() {
    var w = this._width - this.horizontalBorderPadding() * 2;
    var h = this._height - this.verticalBorderPadding() * 2;
    if (w > 0 && h > 0) {
        this._windowContentsSprite.setFrame(this.origin.x, this.origin.y, w, h);
        this._windowContentsSprite.visible = this.isOpen();
    } else {
        this._windowContentsSprite.visible = false;
    }
};
