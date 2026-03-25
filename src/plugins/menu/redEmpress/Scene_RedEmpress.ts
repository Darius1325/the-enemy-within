// $PluginCompiler TEW_Menus.js

// ----------------------
// File: Scene_RedEmpress.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Mini-jeu de cartes "Red Empress" contre Phillipe Descartes.
//
// RÈGLES (adaptées de WFRP4e) :
//   - Chaque joueur reçoit 2 cartes. Cartes : valeurs 1-10 + "Impératrice Rouge" = 11.
//   - À son tour : Draw (tirer une carte) ou Hold (passer).
//   - Maximum 5 cartes par joueur.
//   - Bust = dépasser 21 → on perd immédiatement.
//   - L'Impératrice Rouge bat tout, sauf une autre Impératrice Rouge.
//   - En cas d'égalité de total, le joueur gagne (dealer perd sur égalité).
//   - Best of 3 rounds.
//   - Tour 3 si Phillipe perd : il triche (échange une carte).
//     → Test de PERCEPTION ou GAMBLE pour détecter la triche.
//     → Succès = Phillipe est démasqué, fuit ; Échec = il emporte la mise.
//
// Résultat stocké en $gameVariables[57] (quête "The Gambler") :
//   1 = joueur gagne proprement
//   2 = joueur perd
//   3 = triche détectée
//   4 = triche non détectée
// ----------------------

import TEW from "../../_types/tew";
import Window_RedEmpress from "./Window_RedEmpress";

// $StartCompilation

// ============================================================================
// Helpers
// ============================================================================

/** Tire une carte : 1-10 ou 11 (Impératrice Rouge). Probabilité : 1/11 */
function drawCard(): number {
    return TEW.DICE.roll(11);
}

function cardLabel(value: number): string {
    if (value === 11) return "R.E.";
    return String(value);
}

function handTotal(cards: number[]): number {
    return cards.reduce((s, c) => s + c, 0);
}

function isBust(cards: number[]): boolean {
    return handTotal(cards) > 21;
}

function hasEmpress(cards: number[]): boolean {
    return cards.includes(11);
}

/**
 * Compare deux mains.
 * Retourne 1 si playerCards gagne, -1 si npcCards gagne, 0 si égalité.
 */
function compareHands(playerCards: number[], npcCards: number[]): number {
    const playerBust = isBust(playerCards);
    const npcBust    = isBust(npcCards);

    if (playerBust && npcBust) return 0;
    if (playerBust) return -1;
    if (npcBust)    return 1;

    const playerEmpress = hasEmpress(playerCards);
    const npcEmpress    = hasEmpress(npcCards);

    if (playerEmpress && !npcEmpress) return 1;
    if (!playerEmpress && npcEmpress) return -1;

    const pt = handTotal(playerCards);
    const nt = handTotal(npcCards);

    if (pt > nt) return 1;
    if (pt < nt) return -1;
    return 1; // égalité → joueur gagne (règle de la maison)
}

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
    this._playerCards   = [];
    this._npcCards      = [];
    this._round         = 1;        // 1-3
    this._playerScore   = 0;
    this._npcScore      = 0;
    this._phase         = 'intro';  // intro|deal|player_turn|npc_turn|reveal|round_end|game_end
    this._cheatAttempted  = false;
    this._cheatDetected   = false;
    this._npcCardRevealed = false;
    this._ticker        = 0;
    this._roundWinner   = null;     // 'player' | 'npc' | 'draw'
    this._flashTimer    = 0;
    this._resultMessage = '';
};

Scene_RedEmpress.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this._tableWindow  = new Window_RedEmpress(this, 0, 0, Graphics.boxWidth, Graphics.boxHeight);
    this.addWindow(this._tableWindow);
    this._startTicker = 120; // 2 secondes d'intro
};

Scene_RedEmpress.prototype.startRound = function() {
    this._playerCards      = [drawCard(), drawCard()];
    this._npcCards         = [drawCard(), drawCard()];
    this._npcCardRevealed  = false;
    this._cheatAttempted   = false;
    this._roundWinner      = null;
    this._phase            = 'player_turn';
    this._tableWindow.refresh();
};

// ---------------------------------------------------------------------------
// Update loop
// ---------------------------------------------------------------------------

Scene_RedEmpress.prototype.update = function() {
    Scene_MenuBase.prototype.update.call(this);
    this._ticker++;
    if (this._flashTimer > 0) this._flashTimer--;

    switch (this._phase) {
        case 'intro':     this.updateIntro();      break;
        case 'player_turn': this.updatePlayerTurn(); break;
        case 'npc_turn':  this.updateNpcTurn();    break;
        case 'reveal':    this.updateReveal();     break;
        case 'round_end': this.updateRoundEnd();   break;
        case 'game_end':  this.updateGameEnd();    break;
    }
    this._tableWindow.refresh();
};

Scene_RedEmpress.prototype.updateIntro = function() {
    this._startTicker--;
    if (this._startTicker <= 0) {
        this.startRound();
    }
};

Scene_RedEmpress.prototype.updatePlayerTurn = function() {
    // Z / Enter = Tirer une carte
    if (Input.isTriggered('ok')) {
        if (this._playerCards.length < 5) {
            this._playerCards.push(drawCard());
            AudioManager.playSe({ name: 'Sword1', volume: 80, pitch: 120, pan: 0 });
            if (isBust(this._playerCards) || this._playerCards.length === 5) {
                this._phase = 'npc_turn';
                this._npcDelay = 45;
            }
        }
    }
    // X / Escape = Rester
    if (Input.isTriggered('cancel')) {
        this._phase = 'npc_turn';
        this._npcDelay = 45;
    }
};

Scene_RedEmpress.prototype.updateNpcTurn = function() {
    this._npcDelay--;
    if (this._npcDelay > 0) return;

    const npcTotal = handTotal(this._npcCards);

    // Tour 3 : triche si Phillipe perd
    const wouldLose = compareHands(this._playerCards, this._npcCards) === 1;
    if (this._round === 3 && wouldLose && !this._cheatAttempted) {
        this._cheatAttempted = true;
        // Phillipe échange sa première carte pour une Impératrice Rouge (11)
        this._npcCards[0] = 11;
        this._resultMessage = "Phillipe glisse sa main sous la table...";
        this._flashTimer = 90;
    }

    // IA : tire jusqu'à 16+
    if (!isBust(this._npcCards) && npcTotal < 16 && this._npcCards.length < 5) {
        this._npcCards.push(drawCard());
    }

    this._phase = 'reveal';
    this._revealDelay = 60;
};

Scene_RedEmpress.prototype.updateReveal = function() {
    this._revealDelay--;
    if (this._revealDelay > 0) return;

    this._npcCardRevealed = true;

    // Si triche tentée : test de Perception pour la détecter
    if (this._cheatAttempted) {
        const perceptionTest = TEW.DICE.skillTest(
            $gameActors.actor(1),   // meilleur perso
            'PERCEPTION',
            0,
            false
        );
        const gambleTest = TEW.DICE.skillTest(
            $gameActors.actor(1),
            'GAMBLE',
            0,
            true
        );
        this._cheatDetected = perceptionTest.success || gambleTest.success;

        if (this._cheatDetected) {
            this._resultMessage = "Vous surprenez Phillipe en train de tricher !";
            AudioManager.playSe({ name: 'Buzzer1', volume: 90, pitch: 80, pan: 0 });
        }
    }

    const result = compareHands(this._playerCards, this._npcCards);
    if (isBust(this._playerCards)) {
        this._roundWinner = 'npc';
        this._resultMessage = "Trop de cartes ! Vous perdez ce round.";
    } else if (isBust(this._npcCards)) {
        this._roundWinner = 'player';
        this._resultMessage = "Phillipe dépasse 21 ! Vous gagnez ce round !";
    } else if (result === 1) {
        this._roundWinner = 'player';
        this._resultMessage = "Vous remportez ce round !";
    } else if (result === -1) {
        this._roundWinner = 'npc';
        this._resultMessage = "Phillipe remporte ce round.";
    } else {
        this._roundWinner = 'draw';
        this._resultMessage = "Égalité ! Personne ne marque.";
    }

    if (this._roundWinner === 'player') this._playerScore++;
    if (this._roundWinner === 'npc')    this._npcScore++;

    AudioManager.playSe({
        name: this._roundWinner === 'player' ? 'Healing1' : 'Darkness1',
        volume: 80, pitch: 100, pan: 0
    });

    this._phase = 'round_end';
    this._roundEndDelay = 180; // 3 secondes
};

Scene_RedEmpress.prototype.updateRoundEnd = function() {
    this._roundEndDelay--;

    if (Input.isTriggered('ok') || Input.isTriggered('cancel')) {
        this._roundEndDelay = 0;
    }

    if (this._roundEndDelay <= 0) {
        // Fin de partie ?
        if (this._round === 3 || this._playerScore === 2 || this._npcScore === 2) {
            this._phase = 'game_end';
            this._gameEndDelay = 60;
        } else {
            this._round++;
            this.startRound();
        }
    }
};

Scene_RedEmpress.prototype.updateGameEnd = function() {
    this._gameEndDelay--;
    if (this._gameEndDelay > 0) return;

    // Stocker le résultat dans la variable quête
    let result: number;
    if (this._cheatDetected) {
        result = 3; // triche détectée
    } else if (this._cheatAttempted && !this._cheatDetected) {
        result = 4; // triche non détectée
    } else if (this._playerScore > this._npcScore) {
        result = 1; // victoire propre
    } else {
        result = 2; // défaite
    }

    $gameVariables.setValue(57, result);
    SceneManager.pop();
};

// ============================================================================
// Expose globally
// ============================================================================

(window as any).Scene_RedEmpress = Scene_RedEmpress;
TEW.MENU = TEW.MENU || {} as any;
(TEW as any).MENU.Scene_RedEmpress = Scene_RedEmpress;

// Plugin command to start the scene
const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command: string, args: string[]) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'StartRedEmpress') {
        SceneManager.push(Scene_RedEmpress);
    }
};
