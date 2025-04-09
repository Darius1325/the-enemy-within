// $PluginCompiler TEW_Combat.js
// $StartCompilation

import Sprite_HpGauge from "./Sprite_HpGauge";

//-----------------------------------------------------------------------------
// Sprite_BattlerTs
//
// The sprite for displaying a battler.

function Sprite_BattlerTs() {
    this.initialize.apply(this, arguments);
};

export default Sprite_BattlerTs.prototype = Object.create(Sprite_Character.prototype);
Sprite_BattlerTs.prototype.constructor = Sprite_BattlerTs;

Sprite_BattlerTs.prototype.initialize = function(character) {
    Sprite_Character.prototype.initialize.call(this, character);
    this._damages = [];
    this._appeared = false;
    this._shake = 0;  // unused
    this._effectType = null;
    this._effectDuration = 0;
    this._battler = character.battler();
    this.createStateIconSprite();
    if (TacticsSystem.showStateIcon) {
        this.createStateIconSprite();
    }
    if (TacticsSystem.showHpGauge) {
        this.createHpGaugeSprite();
    }
    // if the battler's dead and back on the tactical scene.
    if (!character.battler().isAlive()) {
        this.opacity = 0;
    }
};

Sprite_BattlerTs.prototype.createStateIconSprite = function() {
    this._stateIconSprite = new Sprite_StateIcon();
    this._stateIconSprite.setup(this._battler);
    this._stateIconSprite.y = -5;
    this._stateIconSprite.x = 15;
    this._stateIconSprite.z = this.z;
    this._stateIconSprite.scale.x = 0.6;
    this._stateIconSprite.scale.y = 0.6;
    this.addChild(this._stateIconSprite);
};

Sprite_BattlerTs.prototype.createHpGaugeSprite = function() {
    this._hpGaugeSprite = new Sprite_HpGauge(this._battler);
    this._hpGaugeSprite.z = this.z;
    this.addChild(this._hpGaugeSprite);
};

Sprite_BattlerTs.prototype.initVisibility = function() {
    this._appeared = this._battler.isAlive();
    if (!this._appeared) {
        this.opacity = 0;
    }
};

Sprite_BattlerTs.prototype.isActor = function() {
    return this._character.isActor();
};

Sprite_BattlerTs.prototype.isEnemy = function() {
    return this._character.isEnemy();
};

Sprite_BattlerTs.prototype.update = function() {
    Sprite_Character.prototype.update.call(this);
    this.updateDamagePopup();
    this.updateColor();
    this.updateEffect();
};

Sprite_BattlerTs.prototype.updateDamagePopup = function() {
    this.setupDamagePopup();
    if (this._damages.length > 0) {
        for (var i = 0; i < this._damages.length; i++) {
            this._damages[i].update();
        }
        if (!this._damages[0].isPlaying()) {
            this.parent.removeChild(this._damages[0]);
            this._damages.shift();
        }
    }
};

Sprite_BattlerTs.prototype.setupDamagePopup = function() {
    if (this._battler.isDamagePopupRequested()) {
        var sprite = new Sprite_Damage();
        sprite.x = this.x + this.damageOffsetX();
        sprite.y = this.y + this.damageOffsetY();
        sprite.z = this.z + 1;
        sprite.setup(this._battler);
        this._damages.push(sprite);
        this.parent.addChild(sprite);
        this._battler.clearDamagePopup();
        this._battler.clearResult();
    }
};

Sprite_BattlerTs.prototype.damageOffsetX = function() {
    return 24;
};

Sprite_BattlerTs.prototype.damageOffsetY = function() {
    return 24;
};

Sprite_BattlerTs.prototype.isChangeColor = function() {
    return this._battler.isActor && this._battler.canAction() && !this._battler.isRestricted();
};

Sprite_BattlerTs.prototype.updateColor = function() {
    if (this.isChangeColor()) {
        this.setColorTone([0, 0, 0, 0]);
    } else {
        this.setColorTone([0, 0, 0, 255]);
    }
};

Sprite_BattlerTs.prototype.setupEffect = function() {
    if (this._appeared && this._battler.isEffectRequested()) {
        this.startEffect(this._battler.effectType());
        this._battler.clearEffect();
    }
    if (!this._appeared && this._battler.isAlive()) {
        this.startEffect('appear');
    } else if (this._appeared && this._battler.isHidden()) {
        this.startEffect('disappear');
    }
};

Sprite_BattlerTs.prototype.startEffect = function(effectType) {
    this._effectType = effectType;
    switch (this._effectType) {
        case 'appear':
            this.startAppear();
            break;
        case 'disappear':
            this.startDisappear();
            break;
        case 'whiten':
            this.startWhiten();
            break;
        case 'blink':
            this.startBlink();
            break;
        case 'collapse':
            this.startCollapse();
            break;
        case 'bossCollapse':
            this.startBossCollapse();
            break;
        case 'instantCollapse':
            this.startInstantCollapse();
            break;
    }
    this.revertToNormal();
};

Sprite_BattlerTs.prototype.startAppear = function() {
    this._effectDuration = 16;
    this._appeared = true;
};

Sprite_BattlerTs.prototype.startDisappear = function() {
    this._effectDuration = 32;
    this._appeared = false;
};

Sprite_BattlerTs.prototype.startWhiten = function() {
    this._effectDuration = 16;
};

Sprite_BattlerTs.prototype.startBlink = function() {
    this._effectDuration = 20;
};

Sprite_BattlerTs.prototype.startCollapse = function() {
    this._effectDuration = 32;
    this._appeared = false;
};

Sprite_BattlerTs.prototype.startBossCollapse = function() {
    this._effectDuration = 60;
    this._appeared = false;
};

Sprite_BattlerTs.prototype.startInstantCollapse = function() {
    this._effectDuration = 16;
    this._appeared = false;
};

Sprite_BattlerTs.prototype.updateEffect = function() {
    this.setupEffect();
    if (this._effectDuration > 0) {
        this._effectDuration--;
        switch (this._effectType) {
            case 'whiten':
                this.updateWhiten();
                break;
            case 'blink':
                this.updateBlink();
                break;
            case 'appear':
                this.updateAppear();
                break;
            case 'disappear':
                this.updateDisappear();
                break;
            case 'collapse':
                this.updateCollapse();
                break;
            case 'bossCollapse':
                this.updateBossCollapse();
                break;
            case 'instantCollapse':
                this.updateInstantCollapse();
                break;
        }
        if (this._effectDuration === 0) {
            this._effectType = null;
        }
    }
};

Sprite_BattlerTs.prototype.isEffecting = function() {
    return this._effectType !== null;
};

Sprite_BattlerTs.prototype.revertToNormal = function() {
    this._shake = 0;
    this.blendMode = 0;
    this.opacity = 255;
    this.setBlendColor([0, 0, 0, 0]);
};

Sprite_BattlerTs.prototype.updateWhiten = function() {
    var alpha = 128 - (16 - this._effectDuration) * 10;
    this.setBlendColor([255, 255, 255, alpha]);
};

Sprite_BattlerTs.prototype.updateBlink = function() {
    this.opacity = (this._effectDuration % 10 < 5) ? 255 : 0;
};

Sprite_BattlerTs.prototype.updateAppear = function() {
    this.opacity = (16 - this._effectDuration) * 16;
};

Sprite_BattlerTs.prototype.updateDisappear = function() {
    this.opacity = 256 - (32 - this._effectDuration) * 10;
};

Sprite_BattlerTs.prototype.updateCollapse = function() {
    this.blendMode = Graphics.BLEND_ADD;
    this.setBlendColor([255, 128, 128, 128]);
    this.opacity *= this._effectDuration / (this._effectDuration + 1);
};

Sprite_BattlerTs.prototype.updateBossCollapse = function() {
    this._shake = this._effectDuration % 2 * 4 - 2;
    this.blendMode = Graphics.BLEND_ADD;
    this.opacity *= this._effectDuration / (this._effectDuration + 1);
    this.setBlendColor([255, 255, 255, 255 - this.opacity]);
    if (this._effectDuration % 20 === 19) {
        SoundManager.playBossCollapse2();
    }
};

Sprite_BattlerTs.prototype.updateInstantCollapse = function() {
    this.opacity = 0;
};

Sprite_BattlerTs.prototype.isEffecting = function() {
    return this._effectType !== null;
};

Sprite_BattlerTs.prototype.updateOther = function() {
    if (this._battler.isAlive()) {
        Sprite_Character.prototype.updateOther.call(this);
    }
};
