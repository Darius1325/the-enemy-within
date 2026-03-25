// $PluginCompiler TEW_Menus.js

// ----------------------
// File: Window_RedEmpress.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Affichage de la table de jeu "Red Empress".
// ----------------------

// $StartCompilation

function Window_RedEmpress(scene: any, x: number, y: number, w: number, h: number) {
    this.initialize.apply(this, arguments);
}

Window_RedEmpress.prototype = Object.create(Window_Base.prototype);
Window_RedEmpress.prototype.constructor = Window_RedEmpress;

Window_RedEmpress.prototype.initialize = function(scene: any, x: number, y: number, w: number, h: number) {
    Window_Base.prototype.initialize.call(this, x, y, w, h);
    this._scene = scene;
    this.opacity = 0;       // fond transparent — on dessine tout à la main
    this.refresh();
};

// ---------------------------------------------------------------------------
// Constantes visuelles
// ---------------------------------------------------------------------------

const RE_CARD_W      = 58;
const RE_CARD_H      = 82;
const RE_CARD_RADIUS = 6;
const RE_TABLE_COLOR = '#1a4a1a';
const RE_FELT_COLOR  = '#2d7a2d';
const RE_CARD_BACK   = '#8b0000';
const RE_GOLD        = '#d4af37';
const RE_WHITE       = '#f0f0f0';
const RE_RED         = '#cc2200';
const RE_BLUE        = '#0044cc';

// ---------------------------------------------------------------------------
// Refresh principal
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.refresh = function() {
    this.contents.clear();
    const sc = this._scene;
    if (!sc) return;

    // Fond de table
    this.drawTable();

    switch (sc._phase) {
        case 'intro':
            this.drawIntro();
            break;
        case 'player_turn':
        case 'npc_turn':
        case 'reveal':
        case 'round_end':
        case 'game_end':
            this.drawGame();
            break;
    }
};

// ---------------------------------------------------------------------------
// Table verte
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawTable = function() {
    const bmp = this.contents;
    // Fond sombre
    bmp.fillRect(0, 0, bmp.width, bmp.height, '#0a0a0a');
    // Tapis vert
    const margin = 40;
    bmp.fillRect(margin, margin, bmp.width - margin * 2, bmp.height - margin * 2, RE_TABLE_COLOR);
    // Feutre intérieur
    const inner = margin + 10;
    bmp.fillRect(inner, inner, bmp.width - inner * 2, bmp.height - inner * 2, RE_FELT_COLOR);
    // Bordure dorée
    this.drawBorderRect(margin, margin, bmp.width - margin * 2, bmp.height - margin * 2, RE_GOLD, 3);
};

// ---------------------------------------------------------------------------
// Intro (2 secondes avant le début de la partie)
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawIntro = function() {
    this.contents.fontSize = 36;
    this.changeTextColor(RE_GOLD);
    this.drawText('RED EMPRESS', 0, Graphics.boxHeight / 2 - 60, this.contents.width, 'center');
    this.contents.fontSize = 20;
    this.changeTextColor(RE_WHITE);
    this.drawText('Jeu de cartes de Phillipe Descartes', 0, Graphics.boxHeight / 2 - 10, this.contents.width, 'center');
    this.drawText('Z / Entrée : Tirer une carte    X / Échap : Rester', 0, Graphics.boxHeight / 2 + 40, this.contents.width, 'center');
    this.resetFontSettings();
};

// ---------------------------------------------------------------------------
// Table de jeu
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawGame = function() {
    const sc  = this._scene;
    const cx  = this.contents.width;
    const cy  = this.contents.height;

    // Titre et score
    this.drawScoreBar();

    // Zone NPC (haut)
    this.contents.fontSize = 18;
    this.changeTextColor(RE_GOLD);
    this.drawText('Phillipe Descartes', 60, 80, cx - 120);
    this.resetFontSettings();
    this.drawHand(sc._npcCards, 60, 110, sc._npcCardRevealed, true);

    // Zone joueur (bas)
    this.contents.fontSize = 18;
    this.changeTextColor(RE_GOLD);
    this.drawText('Votre main', 60, cy - 200, cx - 120);
    this.resetFontSettings();
    this.drawHand(sc._playerCards, 60, cy - 170, true, false);

    // Message de résultat / action
    if (sc._resultMessage) {
        this.drawResultMessage(sc._resultMessage);
    }

    // Instructions joueur
    if (sc._phase === 'player_turn') {
        this.drawInputPrompt();
    }

    // Phase fin de partie
    if (sc._phase === 'game_end') {
        this.drawGameEndScreen();
    }
};

// ---------------------------------------------------------------------------
// Barre de score
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawScoreBar = function() {
    const sc  = this._scene;
    const cx  = this.contents.width;

    this.contents.fontSize = 22;
    this.changeTextColor(RE_WHITE);
    this.drawText(`Round ${sc._round} / 3`, 0, 40, cx, 'center');

    // Score gauche / droite
    this.changeTextColor(sc._playerScore >= sc._npcScore ? RE_GOLD : '#888');
    this.drawText(`Vous : ${sc._playerScore}`, 60, 40, 200);
    this.changeTextColor(sc._npcScore >= sc._playerScore ? RE_GOLD : '#888');
    this.drawText(`Phillipe : ${sc._npcScore}`, cx - 260, 40, 200, 'right');

    this.resetFontSettings();
};

// ---------------------------------------------------------------------------
// Main de cartes
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawHand = function(
    cards: number[], x: number, y: number, reveal: boolean, isNpc: boolean
) {
    const spacing = RE_CARD_W + 12;
    for (let i = 0; i < cards.length; i++) {
        // La deuxième carte du NPC est face cachée tant que reveal = false
        const hidden = isNpc && !reveal && i === 1;
        this.drawCard(x + i * spacing, y, cards[i], hidden);
    }

    // Total visible
    if (reveal || !isNpc) {
        const total    = cards.reduce((s, c) => s + c, 0);
        const bust     = total > 21;
        this.contents.fontSize = 20;
        this.changeTextColor(bust ? RE_RED : RE_WHITE);
        const labelX = x + cards.length * spacing + 10;
        this.drawText(bust ? `BUST (${total})` : `Total : ${total}`, labelX, y + RE_CARD_H / 2 - 12, 160);
        this.resetFontSettings();
    }
};

// ---------------------------------------------------------------------------
// Dessin d'une carte
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawCard = function(x: number, y: number, value: number, hidden: boolean) {
    const bmp = this.contents;

    if (hidden) {
        // Dos de carte
        this.drawRoundRect(x, y, RE_CARD_W, RE_CARD_H, RE_CARD_RADIUS, RE_CARD_BACK);
        this.drawBorderRect(x, y, RE_CARD_W, RE_CARD_H, '#440000', 2);
        // Motif de dos
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 2; col++) {
                bmp.fillRect(x + 8 + col * 22, y + 12 + row * 22, 14, 14, '#aa0000');
            }
        }
        return;
    }

    const isEmpress = value === 11;
    const bgColor   = isEmpress ? '#2a0000' : RE_WHITE;
    const textColor = isEmpress ? RE_GOLD : (value % 2 === 0 ? RE_RED : RE_BLUE);

    this.drawRoundRect(x, y, RE_CARD_W, RE_CARD_H, RE_CARD_RADIUS, bgColor);
    this.drawBorderRect(x, y, RE_CARD_W, RE_CARD_H, isEmpress ? RE_GOLD : '#aaa', 2);

    bmp.fontSize = isEmpress ? 14 : 22;
    bmp.textColor = textColor;
    const label = isEmpress ? '♛' : String(value);
    this.drawText(label, x, y + RE_CARD_H / 2 - 16, RE_CARD_W, 'center');

    if (isEmpress) {
        bmp.fontSize = 10;
        bmp.textColor = RE_GOLD;
        this.drawText('RED', x, y + 6, RE_CARD_W, 'center');
        this.drawText('EMPRESS', x, y + RE_CARD_H - 20, RE_CARD_W, 'center');
    } else {
        // Coins
        bmp.fontSize = 12;
        bmp.textColor = textColor;
        this.drawText(String(value), x + 4, y + 4, 20);
        this.drawText(String(value), x + RE_CARD_W - 22, y + RE_CARD_H - 18, 20);
    }

    this.resetFontSettings();
};

// ---------------------------------------------------------------------------
// Message résultat
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawResultMessage = function(msg: string) {
    const cx = this.contents.width;
    const cy = this.contents.height;
    const bx = 80;
    const bw = cx - 160;
    const bh = 50;
    const by = cy / 2 - bh / 2;

    this.contents.fillRect(bx, by, bw, bh, 'rgba(0,0,0,0.7)');
    this.drawBorderRect(bx, by, bw, bh, RE_GOLD, 2);
    this.contents.fontSize = 20;
    this.changeTextColor(RE_WHITE);
    this.drawText(msg, bx, by + 12, bw, 'center');
    this.resetFontSettings();
};

// ---------------------------------------------------------------------------
// Instructions
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawInputPrompt = function() {
    const cx = this.contents.width;
    const cy = this.contents.height;

    this.contents.fontSize = 16;
    this.changeTextColor('#cccccc');
    this.drawText('[Z / ↵] Tirer une carte    [X / Échap] Rester', 0, cy - 40, cx, 'center');
    this.resetFontSettings();
};

// ---------------------------------------------------------------------------
// Écran fin de partie
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawGameEndScreen = function() {
    const sc   = this._scene;
    const cx   = this.contents.width;
    const cy   = this.contents.height;
    const win  = sc._playerScore > sc._npcScore;
    const cheat = sc._cheatDetected;

    let title: string;
    let subtitle: string;
    let color: string;

    if (cheat) {
        title    = "TRICHEUR !";
        subtitle = "Phillipe est démasqué !";
        color    = RE_RED;
    } else if (win) {
        title    = "VICTOIRE !";
        subtitle = `${sc._playerScore} - ${sc._npcScore}`;
        color    = RE_GOLD;
    } else {
        title    = "DÉFAITE";
        subtitle = `${sc._playerScore} - ${sc._npcScore}`;
        color    = '#888';
    }

    this.contents.fillRect(0, cy / 2 - 80, cx, 160, 'rgba(0,0,0,0.85)');
    this.drawBorderRect(0, cy / 2 - 80, cx, 160, color, 3);

    this.contents.fontSize = 40;
    this.changeTextColor(color);
    this.drawText(title, 0, cy / 2 - 52, cx, 'center');

    this.contents.fontSize = 22;
    this.changeTextColor(RE_WHITE);
    this.drawText(subtitle, 0, cy / 2 + 8, cx, 'center');

    this.contents.fontSize = 14;
    this.changeTextColor('#aaa');
    this.drawText('[Appuyez sur une touche]', 0, cy / 2 + 50, cx, 'center');
    this.resetFontSettings();
};

// ---------------------------------------------------------------------------
// Primitives graphiques
// ---------------------------------------------------------------------------

Window_RedEmpress.prototype.drawRoundRect = function(
    x: number, y: number, w: number, h: number, r: number, color: string
) {
    this.contents.fillRect(x + r, y,     w - r * 2, h, color);
    this.contents.fillRect(x,     y + r, w,         h - r * 2, color);
    this.contents.fillRect(x,     y + r, r,         h - r * 2, color);
    this.contents.fillRect(x + w - r, y + r, r, h - r * 2, color);
};

Window_RedEmpress.prototype.drawBorderRect = function(
    x: number, y: number, w: number, h: number, color: string, thickness: number
) {
    const t = thickness;
    this.contents.fillRect(x,         y,         w, t, color);
    this.contents.fillRect(x,         y + h - t, w, t, color);
    this.contents.fillRect(x,         y,         t, h, color);
    this.contents.fillRect(x + w - t, y,         t, h, color);
};
