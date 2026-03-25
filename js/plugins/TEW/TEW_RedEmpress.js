// TEW_RedEmpress.js
// Mini-jeu de cartes "Red Empress" — The Enemy Within
// Lancé via Plugin Command : StartRedEmpress
// Résultat stocké dans $gameVariables[57] :
//   1=Victoire  2=Défaite  3=Triche détectée  4=Triche non détectée

(function() {

// ============================================================================
// Helpers
// ============================================================================

function drawCard_RE() {
    return TEW.DICE.roll(11);
}

function handTotal_RE(cards) {
    return cards.reduce(function(s, c) { return s + c; }, 0);
}

function isBust_RE(cards) {
    return handTotal_RE(cards) > 21;
}

function hasEmpress_RE(cards) {
    return cards.indexOf(11) !== -1;
}

function compareHands_RE(p, n) {
    var pb = isBust_RE(p), nb = isBust_RE(n);
    if (pb && nb) return 0;
    if (pb) return -1;
    if (nb) return 1;
    var pe = hasEmpress_RE(p), ne = hasEmpress_RE(n);
    if (pe && !ne) return 1;
    if (!pe && ne) return -1;
    var pt = handTotal_RE(p), nt = handTotal_RE(n);
    if (pt > nt) return 1;
    if (pt < nt) return -1;
    return 1; // égalité → joueur gagne
}

// ============================================================================
// Window_RedEmpress
// ============================================================================

function Window_RedEmpress(scene) {
    this.initialize.apply(this, arguments);
}
Window_RedEmpress.prototype = Object.create(Window_Base.prototype);
Window_RedEmpress.prototype.constructor = Window_RedEmpress;

Window_RedEmpress.prototype.initialize = function(scene) {
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);
    this._scene = scene;
    this.opacity = 0;
    this.refresh();
};

Window_RedEmpress.prototype.refresh = function() {
    this.contents.clear();
    var sc = this._scene;
    if (!sc) return;
    this._drawTable();
    if (sc._phase === 'intro') {
        this._drawIntro();
    } else {
        this._drawGame();
    }
};

Window_RedEmpress.prototype._borderRect = function(x, y, w, h, color, t) {
    var b = this.contents;
    b.fillRect(x, y, w, t, color);
    b.fillRect(x, y + h - t, w, t, color);
    b.fillRect(x, y, t, h, color);
    b.fillRect(x + w - t, y, t, h, color);
};

Window_RedEmpress.prototype._drawTable = function() {
    var b = this.contents;
    b.fillRect(0, 0, b.width, b.height, '#0a0a0a');
    b.fillRect(40, 40, b.width - 80, b.height - 80, '#1a4a1a');
    b.fillRect(50, 50, b.width - 100, b.height - 100, '#2d7a2d');
    this._borderRect(40, 40, b.width - 80, b.height - 80, '#d4af37', 3);
};

Window_RedEmpress.prototype._drawIntro = function() {
    var cx = this.contents.width;
    var cy = this.contents.height;
    this.contents.fontSize = 36;
    this.changeTextColor('#d4af37');
    this.drawText('RED EMPRESS', 0, cy / 2 - 60, cx, 'center');
    this.contents.fontSize = 20;
    this.changeTextColor('#f0f0f0');
    this.drawText('Jeu de cartes de Phillipe Descartes', 0, cy / 2 - 10, cx, 'center');
    this.drawText('[Z / Entree] Tirer    [X / Echap] Rester', 0, cy / 2 + 40, cx, 'center');
    this.resetFontSettings();
};

Window_RedEmpress.prototype._drawGame = function() {
    var sc = this._scene;
    var cx = this.contents.width;
    var cy = this.contents.height;

    // Score bar
    this.contents.fontSize = 22;
    this.changeTextColor('#f0f0f0');
    this.drawText('Round ' + sc._round + ' / 3', 0, 56, cx, 'center');
    this.changeTextColor(sc._playerScore >= sc._npcScore ? '#d4af37' : '#888888');
    this.drawText('Vous : ' + sc._playerScore, 60, 56, 200);
    this.changeTextColor(sc._npcScore >= sc._playerScore ? '#d4af37' : '#888888');
    this.drawText('Phillipe : ' + sc._npcScore, cx - 260, 56, 200, 'right');

    // NPC hand
    this.contents.fontSize = 18;
    this.changeTextColor('#d4af37');
    this.drawText('Phillipe Descartes', 60, 96, cx - 120);
    this._drawHand(sc._npcCards, 60, 122, sc._npcCardRevealed, true);

    // Player hand
    this.changeTextColor('#d4af37');
    this.drawText('Votre main', 60, cy - 210, cx - 120);
    this._drawHand(sc._playerCards, 60, cy - 184, true, false);

    // Message
    if (sc._resultMessage) {
        this._drawMessage(sc._resultMessage);
    }

    // Input prompt
    if (sc._phase === 'player_turn') {
        this.contents.fontSize = 16;
        this.changeTextColor('#cccccc');
        this.drawText('[Z / Entree] Tirer    [X / Echap] Rester', 0, cy - 46, cx, 'center');
    }

    // Game end overlay
    if (sc._phase === 'game_end') {
        this._drawGameEnd();
    }

    this.resetFontSettings();
};

Window_RedEmpress.prototype._drawHand = function(cards, x, y, reveal, isNpc) {
    var GAP = 70, CW = 58, CH = 82;
    for (var i = 0; i < cards.length; i++) {
        var hidden = isNpc && !reveal && i === 1;
        this._drawCard(x + i * GAP, y, cards[i], hidden);
    }
    if (reveal || !isNpc) {
        var total = handTotal_RE(cards);
        var bust = total > 21;
        this.contents.fontSize = 20;
        this.changeTextColor(bust ? '#cc2200' : '#f0f0f0');
        this.drawText(bust ? 'BUST (' + total + ')' : 'Total : ' + total,
            x + cards.length * GAP + 10, y + 28, 160);
        this.resetFontSettings();
    }
};

Window_RedEmpress.prototype._drawCard = function(x, y, value, hidden) {
    var b = this.contents;
    var CW = 58, CH = 82;
    if (hidden) {
        b.fillRect(x, y, CW, CH, '#8b0000');
        this._borderRect(x, y, CW, CH, '#440000', 2);
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 2; c++) {
                b.fillRect(x + 8 + c * 22, y + 12 + r * 22, 14, 14, '#aa0000');
            }
        }
        return;
    }
    var isE = (value === 11);
    b.fillRect(x, y, CW, CH, isE ? '#2a0000' : '#f0f0f0');
    this._borderRect(x, y, CW, CH, isE ? '#d4af37' : '#aaaaaa', 2);
    b.fontSize = isE ? 22 : 28;
    b.textColor = isE ? '#d4af37' : (value % 2 === 0 ? '#cc2200' : '#0044cc');
    this.drawText(isE ? 'RE' : String(value), x, y + CH / 2 - 20, CW, 'center');
    if (isE) {
        b.fontSize = 9;
        b.textColor = '#d4af37';
        this.drawText('RED', x, y + 6, CW, 'center');
        this.drawText('EMPRESS', x, y + CH - 18, CW, 'center');
    } else {
        b.fontSize = 12;
        b.textColor = (value % 2 === 0 ? '#cc2200' : '#0044cc');
        this.drawText(String(value), x + 4, y + 4, 18);
    }
    this.resetFontSettings();
};

Window_RedEmpress.prototype._drawMessage = function(msg) {
    var cx = this.contents.width, cy = this.contents.height;
    var bx = 80, bw = cx - 160, bh = 50, by = cy / 2 - 25;
    this.contents.fillRect(bx, by, bw, bh, 'rgba(0,0,0,0.75)');
    this._borderRect(bx, by, bw, bh, '#d4af37', 2);
    this.contents.fontSize = 20;
    this.changeTextColor('#f0f0f0');
    this.drawText(msg, bx, by + 12, bw, 'center');
    this.resetFontSettings();
};

Window_RedEmpress.prototype._drawGameEnd = function() {
    var sc = this._scene;
    var cx = this.contents.width, cy = this.contents.height;
    var win = sc._playerScore > sc._npcScore;
    var cheat = sc._cheatDetected;
    var title    = cheat ? 'TRICHEUR !' : (win ? 'VICTOIRE !' : 'DEFAITE');
    var subtitle = cheat ? 'Phillipe est demasque !' : (sc._playerScore + ' - ' + sc._npcScore);
    var color    = cheat ? '#cc2200' : (win ? '#d4af37' : '#888888');
    this.contents.fillRect(0, cy / 2 - 80, cx, 160, 'rgba(0,0,0,0.85)');
    this._borderRect(0, cy / 2 - 80, cx, 160, color, 3);
    this.contents.fontSize = 40;
    this.changeTextColor(color);
    this.drawText(title, 0, cy / 2 - 54, cx, 'center');
    this.contents.fontSize = 22;
    this.changeTextColor('#f0f0f0');
    this.drawText(subtitle, 0, cy / 2 + 8, cx, 'center');
    this.contents.fontSize = 14;
    this.changeTextColor('#aaaaaa');
    this.drawText('[Appuyez sur une touche]', 0, cy / 2 + 50, cx, 'center');
    this.resetFontSettings();
};

// ============================================================================
// Scene_RedEmpress
// ============================================================================

function Scene_RedEmpress() {
    this.initialize.apply(this, arguments);
}
Scene_RedEmpress.prototype = Object.create(Scene_MenuBase.prototype);
Scene_RedEmpress.prototype.constructor = Scene_RedEmpress;

Scene_RedEmpress.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
    this._playerCards = [];
    this._npcCards    = [];
    this._round       = 1;
    this._playerScore = 0;
    this._npcScore    = 0;
    this._phase       = 'intro';
    this._cheatAttempted  = false;
    this._cheatDetected   = false;
    this._npcCardRevealed = false;
    this._ticker          = 0;
    this._resultMessage   = '';
    this._roundWinner     = null;
};

Scene_RedEmpress.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this._tableWindow = new Window_RedEmpress(this);
    this.addWindow(this._tableWindow);
    this._startTicker = 90;
};

Scene_RedEmpress.prototype.startRound = function() {
    this._playerCards     = [drawCard_RE(), drawCard_RE()];
    this._npcCards        = [drawCard_RE(), drawCard_RE()];
    this._npcCardRevealed = false;
    this._cheatAttempted  = false;
    this._roundWinner     = null;
    this._resultMessage   = '';
    this._phase = 'player_turn';
    this._tableWindow.refresh();
};

Scene_RedEmpress.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
    this._ticker++;
    switch (this._phase) {
        case 'intro':       this._updateIntro();      break;
        case 'player_turn': this._updatePlayerTurn(); break;
        case 'npc_turn':    this._updateNpcTurn();    break;
        case 'reveal':      this._updateReveal();     break;
        case 'round_end':   this._updateRoundEnd();   break;
        case 'game_end':    this._updateGameEnd();    break;
    }
    this._tableWindow.refresh();
};

Scene_RedEmpress.prototype._updateIntro = function() {
    this._startTicker--;
    if (this._startTicker <= 0) this.startRound();
};

Scene_RedEmpress.prototype._updatePlayerTurn = function() {
    if (Input.isTriggered('ok')) {
        if (this._playerCards.length < 5) {
            this._playerCards.push(drawCard_RE());
            if (isBust_RE(this._playerCards) || this._playerCards.length === 5) {
                this._phase = 'npc_turn';
                this._npcDelay = 45;
            }
        } else {
            this._phase = 'npc_turn';
            this._npcDelay = 45;
        }
    }
    if (Input.isTriggered('cancel')) {
        this._phase = 'npc_turn';
        this._npcDelay = 45;
    }
};

Scene_RedEmpress.prototype._updateNpcTurn = function() {
    this._npcDelay--;
    if (this._npcDelay > 0) return;

    var wouldLose = compareHands_RE(this._playerCards, this._npcCards) === 1;
    if (this._round === 3 && wouldLose && !this._cheatAttempted) {
        this._cheatAttempted = true;
        this._npcCards[0] = 11;
        this._resultMessage = 'Phillipe glisse sa main sous la table...';
    }
    if (!isBust_RE(this._npcCards) && handTotal_RE(this._npcCards) < 16 && this._npcCards.length < 5) {
        this._npcCards.push(drawCard_RE());
    }
    this._phase = 'reveal';
    this._revealDelay = 60;
};

Scene_RedEmpress.prototype._updateReveal = function() {
    this._revealDelay--;
    if (this._revealDelay > 0) return;

    this._npcCardRevealed = true;

    if (this._cheatAttempted) {
        var actor = $gameActors.actor(1);
        var perc   = TEW.DICE.skillTest(actor, 'PERCEPTION', 0, true);
        var gamble = TEW.DICE.skillTest(actor, 'GAMBLE',     0, true);
        this._cheatDetected = perc.success || gamble.success;
        if (this._cheatDetected) {
            this._resultMessage = 'Vous surprenez Phillipe en train de tricher !';
        }
    }

    var result = compareHands_RE(this._playerCards, this._npcCards);
    if (isBust_RE(this._playerCards)) {
        this._roundWinner   = 'npc';
        this._resultMessage = 'Trop de cartes ! Vous perdez ce round.';
    } else if (isBust_RE(this._npcCards)) {
        this._roundWinner   = 'player';
        this._resultMessage = 'Phillipe depasse 21 ! Vous gagnez ce round !';
    } else if (result === 1) {
        this._roundWinner   = 'player';
        this._resultMessage = 'Vous remportez ce round !';
    } else if (result === -1) {
        this._roundWinner   = 'npc';
        this._resultMessage = 'Phillipe remporte ce round.';
    } else {
        this._roundWinner   = 'draw';
        this._resultMessage = 'Egalite !';
    }

    if (this._roundWinner === 'player') this._playerScore++;
    if (this._roundWinner === 'npc')    this._npcScore++;

    this._phase = 'round_end';
    this._roundEndDelay = 180;
};

Scene_RedEmpress.prototype._updateRoundEnd = function() {
    if (Input.isTriggered('ok') || Input.isTriggered('cancel')) {
        this._roundEndDelay = 1;
    }
    this._roundEndDelay--;
    if (this._roundEndDelay > 0) return;

    if (this._round === 3 || this._playerScore === 2 || this._npcScore === 2) {
        this._phase = 'game_end';
        this._gameEndDelay = 60;
    } else {
        this._round++;
        this.startRound();
    }
};

Scene_RedEmpress.prototype._updateGameEnd = function() {
    if (Input.isTriggered('ok') || Input.isTriggered('cancel')) {
        this._gameEndDelay = 1;
    }
    this._gameEndDelay--;
    if (this._gameEndDelay > 0) return;

    var result;
    if (this._cheatDetected)                               result = 3;
    else if (this._cheatAttempted && !this._cheatDetected) result = 4;
    else if (this._playerScore > this._npcScore)           result = 1;
    else                                                   result = 2;

    $gameVariables.setValue(57, result);
    SceneManager.pop();
};

// ============================================================================
// Plugin Command
// ============================================================================

var _pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _pluginCommand.call(this, command, args);
    if (command === 'StartRedEmpress') {
        SceneManager.push(Scene_RedEmpress);
    }
};

})();
