#!/usr/bin/env python3
"""
patch_intro_maps.py
-------------------
Complète les maps de l'intro "The Enemy Within" avec tous les événements
manquants pour rendre la séquence Coach and Horses jouable de bout en bout.

Événements ajoutés :
  Map001 (RDC1 - Salle principale) :
    - EV012 : Lady Isolde von Strudeldorf (quest var 55)
    - EV013 : Janna Elleiner (servante)
    - EV014 : Marie Schutz (garde du corps)
    - EV015 : Affiche "Wanted : Bold Adventurers" (doc 110, quest 53)
    - EV016 : Escalier vers les chambres (Map003)
    - Correction Hultz (EV006) : dialogue complet
    - Correction Gunnar haggle (EV007 page 1) : remplace "TODO" par Charm test

  Map003 (1er étage - Chambres) :
    - EV001 : Couloir → chambre joueurs
    - EV002 : Lit → séquence sommeil → fondu noir → matin
    - EV003 : Événement nocturne (bruit dans le couloir, Perception test)

  Map004 (Extérieur) :
    - EV009 : Départ en diligence (matin, après V52 = 1000)
"""

import json
import copy
import os

# ============================================================================
# Helpers
# ============================================================================

def empty_conditions():
    return {
        "actorId": 1, "actorValid": False,
        "itemId": 1, "itemValid": False,
        "selfSwitchCh": "A", "selfSwitchValid": False,
        "switch1Id": 1, "switch1Valid": False,
        "switch2Id": 1, "switch2Valid": False,
        "variableId": 1, "variableValid": False, "variableValue": 0
    }

def cond_self_switch(ch, value=True):
    """Page active si self-switch ch = value."""
    c = empty_conditions()
    c["selfSwitchCh"] = ch
    c["selfSwitchValid"] = True
    # RPG Maker n'a pas de "selfSwitchValue" directement dans conditions —
    # on gère ça via des pages multiples (page active si switch A ON).
    return c

def cond_switch(sw_id):
    """Page active si switch global sw_id est ON."""
    c = empty_conditions()
    c["switch1Id"] = sw_id
    c["switch1Valid"] = True
    return c

def cond_variable_ge(var_id, value):
    """Page active si variable var_id >= value."""
    c = empty_conditions()
    c["variableId"] = var_id
    c["variableValid"] = True
    c["variableValue"] = value
    return c

def base_page(trigger=0, char_name="People1", char_idx=0, direction=2,
              conditions=None, priority=1):
    return {
        "conditions": conditions or empty_conditions(),
        "directionFix": False,
        "image": {
            "tileId": 0,
            "characterName": char_name,
            "direction": direction,
            "pattern": 0,
            "characterIndex": char_idx
        },
        "moveFrequency": 3,
        "moveRoute": {"list": [{"code": 0, "parameters": []}], "repeat": True, "skippable": False, "wait": False},
        "moveSpeed": 3,
        "moveType": 0,
        "priorityType": priority,
        "stepAnime": False,
        "through": False,
        "trigger": trigger,
        "walkAnime": True,
        "list": []
    }

# ---- Command builders ----

def cmd_text(lines, face="", face_idx=0, bg=0, pos=2):
    """Show Text command (101) + text data lines (401)."""
    cmds = [{"code": 101, "indent": 0, "parameters": [face, face_idx, bg, pos]}]
    for line in lines:
        cmds.append({"code": 401, "indent": 0, "parameters": [line]})
    return cmds

def cmd_choice(choices, cancel=0):
    """Show Choices (102)."""
    return [{"code": 102, "indent": 0, "parameters": [choices, cancel, 2, 2, 0]}]

def cmd_if_choice(idx, label):
    return [{"code": 402, "indent": 0, "parameters": [idx, label]}]

def cmd_else():
    return [{"code": 411, "indent": 0, "parameters": []}]

def cmd_end_choice():
    return [{"code": 404, "indent": 0, "parameters": []}]

def cmd_self_switch(ch, value=0):
    """Control Self Switch. value: 0=ON, 1=OFF."""
    return [{"code": 123, "indent": 0, "parameters": [ch, value]}]

def cmd_switch(sw_id, value=0):
    """Control Switch. value: 0=ON, 1=OFF."""
    return [{"code": 121, "indent": 0, "parameters": [sw_id, sw_id, value]}]

def cmd_variable(var_id, op, value):
    """Control Variable. op: 0=set, 1=add, 2=sub, 3=mul, 4=div, 5=mod."""
    return [{"code": 122, "indent": 0, "parameters": [var_id, var_id, op, 0, value]}]

def cmd_common_event(ev_id):
    return [{"code": 117, "indent": 0, "parameters": [ev_id]}]

def cmd_transfer(map_id, x, y, direction=0):
    """Transfer Player."""
    return [{"code": 201, "indent": 0, "parameters": [0, map_id, x, y, direction, 0]}]

def cmd_plugin(command):
    """Plugin Command (356)."""
    return [{"code": 356, "indent": 0, "parameters": [command]}]

def cmd_fadeout(frames=30):
    return [{"code": 221, "indent": 0, "parameters": [frames]}]

def cmd_fadein(frames=30):
    return [{"code": 222, "indent": 0, "parameters": [frames]}]

def cmd_wait(frames):
    return [{"code": 230, "indent": 0, "parameters": [frames]}]

def cmd_tint(r, g, b, gray, frames, wait=True):
    """Tint Screen."""
    return [{"code": 223, "indent": 0, "parameters": [[r, g, b, gray], frames, wait]}]

def cmd_script(js):
    """Script (355)."""
    return [{"code": 355, "indent": 0, "parameters": [js]}]

def cmd_end():
    return [{"code": 0, "indent": 0, "parameters": []}]

def cmd_conditional_var(var_id, op, value):
    """Conditional Branch on variable. op: 0=eq,1=ge,2=le,3=gt,4=lt,5=ne"""
    return [{"code": 111, "indent": 0, "parameters": [1, var_id, op, 0, value]}]

def cmd_end_branch():
    return [{"code": 412, "indent": 0, "parameters": []}]

def flatten(*lists):
    result = []
    for lst in lists:
        result.extend(lst)
    return result

def make_event(ev_id, name, x, y, pages):
    return {"id": ev_id, "name": name, "note": "", "pages": pages, "x": x, "y": y}

# ============================================================================
# MAP 001 — Salle principale (RDC1)
# ============================================================================

def build_map001_events():
    """Retourne les événements à ajouter/remplacer dans Map001."""
    events = []

    # ------------------------------------------------------------------
    # EV006 — Hultz (compagnon de Gunnar)
    # Actuellement vide — on lui donne un vrai dialogue
    # ------------------------------------------------------------------
    p1 = base_page(trigger=0, char_name="People1", char_idx=1, direction=2)
    p1["list"] = flatten(
        cmd_text(["A dark-bearded man in his 40s barely registers your approach.",
                  "He is clearly several pints deep."], ""),
        cmd_choice(["Say hello", "Leave him be"]),
        cmd_if_choice(0, "Say hello"),
            cmd_text(["Hultz: Wha— who're you?", "Gunnar! Gunnar, these people wanna talk t'us!"], ""),
        cmd_if_choice(1, "Leave him be"),
        cmd_end_choice(),
        cmd_end()
    )
    events.append(make_event(6, "Hultz", 3, 17, [p1]))

    # ------------------------------------------------------------------
    # EV012 — Lady Isolde von Strudeldorf
    # Quest variable 55 : 0 = pas encore parlé, 1 = présentée, 1000 = complète
    # ------------------------------------------------------------------
    # Page 1 : première rencontre
    p1 = base_page(trigger=0, char_name="People3", char_idx=6, direction=2)
    p1["list"] = flatten(
        cmd_text([
            "Before you stands a willowy young noblewoman with red-golden hair",
            "and green eyes. She wears an elegant travelling dress and an",
            "extraordinary feathered hat. She looks you up and down with barely",
            "concealed disdain."
        ]),
        cmd_text([
            "Lady Isolde: I do hope you are not here to bother us.",
            "My maid and I have had quite enough excitement for one day."
        ], ""),
        cmd_choice([
            "Introduce yourselves",
            "Ask about her destination",
            "Apologise and leave"
        ]),
        cmd_if_choice(0, "Introduce yourselves"),
            cmd_text(["Lady Isolde: How... quaint. Well then, I am Lady Isolde von",
                      "Strudeldorf of Drakwald. And you are decidedly not nobility."], ""),
            cmd_switch(104, 0),   # unlock Lady Isolde character note
            cmd_variable(55, 0, 1),  # quest step 1
        cmd_if_choice(1, "Ask about her destination"),
            cmd_text(["Lady Isolde: Altdorf. Which is where any person of culture",
                      "is heading. Now if you will excuse me."], ""),
            cmd_variable(55, 0, 1),
        cmd_if_choice(2, "Apologise and leave"),
        cmd_end_choice(),
        cmd_self_switch("A", 0),  # ON → switch to page 2
        cmd_end()
    )
    # Page 2 : déjà parlé
    cond2 = empty_conditions()
    cond2["selfSwitchCh"] = "A"
    cond2["selfSwitchValid"] = True
    p2 = base_page(trigger=0, char_name="People3", char_idx=6, direction=2, conditions=cond2)
    p2["list"] = flatten(
        cmd_text([
            "Lady Isolde turns back to her meal, clearly dismissing you.",
        ], ""),
        cmd_end()
    )
    events.append(make_event(12, "Lady Isolde", 11, 8, [p1, p2]))

    # ------------------------------------------------------------------
    # EV013 — Janna Elleiner (servante d'Isolde, assise à côté)
    # ------------------------------------------------------------------
    p1 = base_page(trigger=0, char_name="People3", char_idx=4, direction=2)
    p1["list"] = flatten(
        cmd_text([
            "A slight girl of about 16 with fine, mousy hair and blue-grey eyes.",
            "She looks deeply uncomfortable at being approached."
        ], ""),
        cmd_choice(["Speak to her", "Leave her be"]),
        cmd_if_choice(0, "Speak to her"),
            cmd_text([
                "Janna looks around anxiously, clearly hoping Lady Isolde",
                "is not watching."
            ], ""),
            cmd_text([
                "Janna (whispered): Please... do not make trouble for me.",
                "Her Ladyship does not like it when I speak to strangers."
            ], ""),
            cmd_switch(105, 0),   # unlock Janna character note
        cmd_if_choice(1, "Leave her be"),
        cmd_end_choice(),
        cmd_self_switch("A", 0),
        cmd_end()
    )
    cond2 = empty_conditions(); cond2["selfSwitchCh"] = "A"; cond2["selfSwitchValid"] = True
    p2 = base_page(trigger=0, char_name="People3", char_idx=4, direction=2, conditions=cond2)
    p2["list"] = flatten(
        cmd_text(["Janna avoids your gaze."], ""),
        cmd_end()
    )
    events.append(make_event(13, "Janna Elleiner", 12, 8, [p1, p2]))

    # ------------------------------------------------------------------
    # EV014 — Marie Schutz (garde du corps d'Isolde)
    # ------------------------------------------------------------------
    p1 = base_page(trigger=0, char_name="People3", char_idx=2, direction=2)
    p1["list"] = flatten(
        cmd_text([
            "An unusually tall, powerfully built woman stands just behind Lady",
            "Isolde's chair. Her ice-blue eyes track you like a hawk watches a",
            "mouse. She does not smile."
        ], ""),
        cmd_choice(["Try to speak to her", "Step away"]),
        cmd_if_choice(0, "Try to speak to her"),
            cmd_text([
                "Marie: Her Ladyship is not to be disturbed.",
                "Move along."
            ], ""),
            cmd_text([
                "It is not a request.",
            ], ""),
            cmd_switch(106, 0),   # unlock Marie character note
        cmd_if_choice(1, "Step away"),
        cmd_end_choice(),
        cmd_self_switch("A", 0),
        cmd_end()
    )
    cond2 = empty_conditions(); cond2["selfSwitchCh"] = "A"; cond2["selfSwitchValid"] = True
    p2 = base_page(trigger=0, char_name="People3", char_idx=2, direction=2, conditions=cond2)
    p2["list"] = flatten(
        cmd_text(["Marie watches you with flat, professional suspicion."], ""),
        cmd_end()
    )
    events.append(make_event(14, "Marie Schutz", 13, 8, [p1, p2]))

    # ------------------------------------------------------------------
    # EV015 — Affiche "Wanted : Bold Adventurers" (sur le mur nord)
    # Quest 53 (Wanted Adventurers) — Document 110
    # ------------------------------------------------------------------
    p1 = base_page(trigger=0, char_name="", char_idx=0, direction=2, priority=0)
    p1["image"]["tileId"] = 0
    p1["image"]["characterName"] = ""
    # Un event invisible (tile) sur le mur pour déclencher la lecture de l'affiche
    p1["priorityType"] = 0
    p1["list"] = flatten(
        cmd_text([
            "A notice pinned to the wall, faded at the edges from the hearth smoke.",
            "The heading reads: WANTED — BOLD ADVENTURERS."
        ], ""),
        cmd_choice(["Read it carefully", "Not interested"]),
        cmd_if_choice(0, "Read it carefully"),
            # Déverrouiller le document dans le journal
            cmd_script("$gameSwitches.setValue(110, true);"),
            # Avancer la quête 53 si elle n'a pas encore commencé
            cmd_script("if($gameVariables.value(53) === 0) $gameVariables.setValue(53, 1);"),
            cmd_text([
                "WANTED — BOLD ADVENTURERS",
                "His Excellency the Crown Prince, Hergard von Tasseninck,",
                "of the Grand Principality of Ostland, seeks skilled adventurers",
                "for a mission of the utmost delicacy into the Grey Mountains.",
                "",
                "Minimum 20 Crowns per person, per day.",
                "No laggards, cowards, or dwarfs need apply."
            ], ""),
            cmd_variable(53, 0, 1),
        cmd_if_choice(1, "Not interested"),
        cmd_end_choice(),
        cmd_self_switch("A", 0),
        cmd_end()
    )
    cond2 = empty_conditions(); cond2["selfSwitchCh"] = "A"; cond2["selfSwitchValid"] = True
    p2 = base_page(trigger=0, char_name="", char_idx=0, direction=2, priority=0, conditions=cond2)
    p2["list"] = flatten(
        cmd_text(["You have already read the notice."], ""),
        cmd_end()
    )
    events.append(make_event(15, "Wanted Poster", 8, 3, [p1, p2]))

    # ------------------------------------------------------------------
    # EV016 — Escalier vers les chambres (Map003)
    # Accessible une fois que la quête "good story" est à l'étape 3 (go to sleep)
    # ------------------------------------------------------------------
    p1 = base_page(trigger=0, char_name="", char_idx=0, priority=0)
    p1["list"] = flatten(
        cmd_text([
            "A narrow staircase leads up to the first floor.",
            "Gustav said the rooms are up there."
        ], ""),
        cmd_choice(["Go up to bed", "Stay downstairs"]),
        cmd_if_choice(0, "Go up to bed"),
            cmd_transfer(3, 22, 33, 8),   # Map003 (1er étage), escalier
        cmd_if_choice(1, "Stay downstairs"),
        cmd_end_choice(),
        cmd_end()
    )
    events.append(make_event(16, "Stairs Up", 16, 22, [p1]))

    return events


# ============================================================================
# MAP 003 — 1er étage (Chambres)
# ============================================================================

def build_map003_events():
    events = []

    # ------------------------------------------------------------------
    # EV001 — Couloir, retour en bas
    # ------------------------------------------------------------------
    p1 = base_page(trigger=0, char_name="", char_idx=0, priority=0)
    p1["list"] = flatten(
        cmd_text(["The staircase leads back down to the common room."], ""),
        cmd_choice(["Go back down", "Stay up here"]),
        cmd_if_choice(0, "Go back down"),
            cmd_transfer(1, 16, 22, 2),   # Map001, en bas de l'escalier
        cmd_if_choice(1, "Stay up here"),
        cmd_end_choice(),
        cmd_end()
    )
    events.append(make_event(1, "Stairs Down", 22, 33, [p1]))

    # ------------------------------------------------------------------
    # EV002 — Lit (séquence de sommeil)
    # ------------------------------------------------------------------
    p1 = base_page(trigger=0, char_name="", char_idx=0, priority=0)
    p1["list"] = flatten(
        cmd_text([
            "A straw mattress with a rough woollen blanket.",
            "It is not comfortable, but it will do."
        ], ""),
        cmd_choice(["Go to sleep", "Not yet"]),
        cmd_if_choice(0, "Go to sleep"),
            cmd_text([
                "You settle in for the night. The fire downstairs is dying,",
                "and the sounds of the inn slowly fade..."
            ], ""),
            cmd_fadeout(60),
            cmd_wait(120),
            # Avancer la quête principale étape 3 → 4
            cmd_script("if($gameVariables.value(52) === 3) $gameVariables.setValue(52, 4);"),
            # Teinte nocturne
            cmd_tint(-100, -100, -80, 0, 60, True),
            cmd_wait(60),
            # Nuit — event nocturne (autorun EV003)
            cmd_script("$gameSwitches.setValue(200, true);"),
            cmd_wait(180),
            cmd_script("$gameSwitches.setValue(200, false);"),
            # Matin
            cmd_tint(0, 0, 0, 0, 120, True),
            cmd_fadein(60),
            cmd_text([
                "Dawn breaks. Light filters through the shutters.",
                "Time to find those coachmen."
            ], ""),
            cmd_variable(52, 0, 4),
        cmd_if_choice(1, "Not yet"),
        cmd_end_choice(),
        cmd_end()
    )
    events.append(make_event(2, "Bed", 18, 20, [p1]))

    # ------------------------------------------------------------------
    # EV003 — Événement nocturne (autorun pendant la nuit)
    # Déguisement : bruit dans le couloir, test de Perception
    # ------------------------------------------------------------------
    cond_night = empty_conditions()
    cond_night["switch1Id"] = 200
    cond_night["switch1Valid"] = True

    p_night = base_page(trigger=3, conditions=cond_night)  # trigger 3 = autorun
    p_night["list"] = flatten(
        cmd_wait(90),
        cmd_text([
            "...",
            "You are jolted awake by a sound.",
            "Footsteps in the corridor. Slow. Deliberate.",
            "Someone who does not want to be heard."
        ], ""),
        # Test de Perception caché pour identifier la source
        cmd_script("$gameVariables.setValue(4, 'PERCEPTION'); $gameVariables.setValue(13, 0);"),
        cmd_common_event(6),   # hidden skill test
        # Si succès (switch 6 ON)
        cmd_script("""
(function() {
    if ($gameSwitches.value(6)) {
        // Succès Perception
        $gameMessage.setBackground(0);
        $gameMessage.setPositionType(2);
        $gameMessage.add("You catch a brief glimpse through the keyhole.");
        $gameMessage.add("Ernst Heidlemann. Moving quietly toward the annexe.");
        $gameMessage.add("What is the apprentice doing at this hour ?");
        // Note dans le journal si Ernst a déjà été rencontré
        if ($gameSwitches.value(107)) {
            $gameVariables.setValue(56, Math.max($gameVariables.value(56), 1));
        }
    } else {
        $gameMessage.setBackground(0);
        $gameMessage.setPositionType(2);
        $gameMessage.add("The footsteps fade. Must have been another guest.");
        $gameMessage.add("You drift back to sleep...");
    }
})();
"""),
        cmd_wait(30),
        cmd_script("$gameSwitches.setValue(200, false);"),
        cmd_end()
    )
    events.append(make_event(3, "Night Event", 0, 0, [p_night]))

    return events


# ============================================================================
# MAP 004 — Extérieur (Départ en diligence)
# ============================================================================

def build_map004_events():
    events = []

    # ------------------------------------------------------------------
    # EV009 — Départ en diligence (matin, quête principale étape 4)
    # ------------------------------------------------------------------
    cond_morning = empty_conditions()
    cond_morning["variableId"] = 52
    cond_morning["variableValid"] = True
    cond_morning["variableValue"] = 4

    p1 = base_page(trigger=0, conditions=cond_morning, char_name="Vehicle", char_idx=0, direction=2)
    p1["list"] = flatten(
        cmd_text([
            "Gunnar and Hultz are loading the last bags onto the coach.",
            "Gunnar looks considerably more sober than last night."
        ], ""),
        cmd_text([
            "Gunnar: Right then! Everyone aboard! Altdorf by nightfall",
            "if the roads hold!"
        ], ""),
        cmd_choice(["Board the coach", "Wait a moment"]),
        cmd_if_choice(0, "Board the coach"),
            cmd_text([
                "The group climbs onto the coach.",
                "Lady Isolde and her entourage take the inside.",
                "You and the others ride up top."
            ], ""),
            cmd_text([
                "As the horses are urged forward and the Coach and Horses",
                "disappears behind a bend in the road, you cannot shake",
                "the feeling that something strange began last night.",
                "",
                "The road to Altdorf awaits."
            ], ""),
            cmd_variable(52, 0, 1000),  # quest complete
            cmd_fadeout(90),
            # TODO: transfer to next map (route vers Altdorf)
        cmd_if_choice(1, "Wait a moment"),
        cmd_end_choice(),
        cmd_end()
    )
    events.append(make_event(9, "Departure Coach", 20, 28, [p1]))

    return events


# ============================================================================
# Haggle patch — Map001 EV007 Gunnar (remplace "TODO" du haggle)
# ============================================================================

def patch_gunnar_haggle(events_list):
    """
    Dans l'event Gunnar (id=7), remplace les branches "TODO" du haggle
    par un vrai test de Charm (common event 5 = party skill test).
    """
    gunnar = next((e for e in events_list if e and e.get("id") == 7), None)
    if not gunnar:
        print("WARNING: Gunnar event not found, skipping haggle patch.")
        return

    # La logique de haggle est dans page 1 (index 0), dans le bloc IF_CHOICE[1] "Try to haggle"
    # On reécrit entièrement la liste de la page 1 pour intégrer le test de Charm.
    # NOTE: On garde la même logique générale mais avec skill test intégré.

    p0 = gunnar["pages"][0]
    cmds = p0["list"]

    # Chercher l'index du TODO pour "Try to haggle"
    # On va repérer la séquence et remplacer les deux blocs TODO

    new_cmds = []
    i = 0
    while i < len(cmds):
        cmd = cmds[i]
        # Repérer CMD TEXT contenant "TODO" et le remplacer
        if cmd["code"] == 401 and "TODO" in cmd["parameters"][0]:
            # Remplacer ce TODO par la logique de test de Charm
            new_cmds.extend([
                {"code": 101, "indent": 0, "parameters": ["", 0, 0, 2]},
                {"code": 401, "indent": 0, "parameters": ["You try to sweet-talk Gunnar into a discount."]},
                # Set up skill test variables
                {"code": 122, "indent": 0, "parameters": [4, 4, 0, 4, "'CHARM'"]},
                {"code": 122, "indent": 0, "parameters": [13, 13, 0, 0, 0]},
                # Call party skill test common event
                {"code": 117, "indent": 0, "parameters": [5]},
                # Check result (switch 6 = success)
                {"code": 111, "indent": 0, "parameters": [7, 6, 0]},
                    {"code": 101, "indent": 1, "parameters": ["Ratchett_Coachmen", 0, 0, 2]},
                    {"code": 401, "indent": 1, "parameters": ["Gunnar: Ha! You've got charm, I'll give you that!"]},
                    {"code": 401, "indent": 1, "parameters": ["Tell you what — twenty-four shillings the lot. Final offer!"]},
                    {"code": 122, "indent": 1, "parameters": [51, 51, 0, 0, 24]},
                    {"code": 121, "indent": 1, "parameters": [100, 100, 0]},  # Switch 100 ON = haggle succeeded
                {"code": 411, "indent": 0, "parameters": []},
                    {"code": 101, "indent": 1, "parameters": ["Ratchett_Coachmen", 0, 0, 2]},
                    {"code": 401, "indent": 1, "parameters": ["Gunnar: Nope. Thirty-six, same as before."]},
                    {"code": 401, "indent": 1, "parameters": ["He taps the table firmly. The price is the price."]},
                {"code": 412, "indent": 0, "parameters": []},
            ])
            i += 1
            continue
        new_cmds.append(cmd)
        i += 1

    p0["list"] = new_cmds
    print("  Gunnar haggle patched.")


# ============================================================================
# Red Empress patch — Map001 EV005 (Phillipe) page 3
# ============================================================================

def patch_phillipe_game(events_list):
    """Remplace le placeholder 'Game here' par le lancement du mini-jeu."""
    phillipe = next((e for e in events_list if e and e.get("id") == 5), None)
    if not phillipe:
        print("WARNING: Phillipe event not found.")
        return

    p3 = phillipe["pages"][2]  # page 3 (index 2)
    p3["list"] = flatten(
        cmd_text([
            "Phillipe shuffles the cards with practiced ease,",
            "one eyebrow raised in amusement.",
            "\"Shall we begin ?\""
        ], ""),
        cmd_plugin("StartRedEmpress"),
        # Brancher sur le résultat stocké dans V57
        # V57 : 1=win, 2=lose, 3=cheat detected, 4=cheat not detected
        [{"code": 111, "indent": 0, "parameters": [1, 57, 0, 0, 1]}],  # if V57 == 1
            cmd_text([
                "\"Magnifique !\" Phillipe claps his hands together,",
                "genuinely impressed. He slides your winnings across the table.",
                "\"Another round, perhaps ?\""
            ], ""),
            cmd_script("$gameParty.gainGold(24);"),
            cmd_variable(57, 0, 1000),   # quest gambler complete
        [{"code": 411, "indent": 0, "parameters": []}],
        [{"code": 111, "indent": 1, "parameters": [1, 57, 0, 0, 2]}],  # V57 == 2
            cmd_text([
                "Phillipe smiles warmly. \"Bad luck, my friends !\"",
                "He pockets his winnings with practiced ease.",
            ], ""),
        [{"code": 411, "indent": 1, "parameters": []}],
        [{"code": 111, "indent": 2, "parameters": [1, 57, 0, 0, 3]}],  # V57 == 3 (cheat detected)
            cmd_text([
                "\"Mon Dieu—\" Phillipe's composure cracks for an instant.",
                "Then he bolts."
            ], ""),
            cmd_text([
                "He overturns the table and sprints for the door,",
                "knocking a tankard of ale into Herpin's lap."
            ], ""),
            cmd_variable(57, 0, 2),  # quest step: Cheater!
        [{"code": 411, "indent": 2, "parameters": []}],
            # V57 == 4 (cheat not detected) — Phillipe wins, pockets money
            cmd_text([
                "\"A fine game, mes amis !\" Phillipe collects the coins smoothly,",
                "a small smile playing at the corner of his mouth.",
                "Something about him seems a touch too pleased with himself."
            ], ""),
        [{"code": 412, "indent": 2, "parameters": []}],
        [{"code": 412, "indent": 1, "parameters": []}],
        [{"code": 412, "indent": 0, "parameters": []}],
        cmd_self_switch("B", 1),
        cmd_end()
    )
    print("  Phillipe Red Empress patched.")


# ============================================================================
# Main
# ============================================================================

def patch_map(filepath, new_events_fn, patch_fn=None, extra_patch_fn=None):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    existing = data.get("events", [])
    # Extend with None placeholders if needed
    if patch_fn:
        patch_fn(existing)
    if extra_patch_fn:
        extra_patch_fn(existing)

    # Add new events
    new_events = new_events_fn()
    max_id = max((e["id"] for e in existing if e), default=0)
    for ev in new_events:
        # Si un event avec cet ID existe déjà, le remplacer
        target = next((e for e in existing if e and e["id"] == ev["id"]), None)
        if target is not None:
            idx = existing.index(target)
            existing[idx] = ev
            print(f"  Replaced event {ev['id']} '{ev['name']}'")
        else:
            # Étendre la liste et ajouter
            while len(existing) <= ev["id"]:
                existing.append(None)
            existing[ev["id"]] = ev
            print(f"  Added event {ev['id']} '{ev['name']}'")

    data["events"] = existing

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
    print(f"  Saved {filepath}")


if __name__ == "__main__":
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    data_dir = os.path.join(base, "data")

    print("\n=== Patching Map001 (Barroom) ===")
    patch_map(
        os.path.join(data_dir, "Map001.json"),
        build_map001_events,
        patch_fn=patch_gunnar_haggle,
        extra_patch_fn=patch_phillipe_game
    )

    print("\n=== Patching Map003 (1st Floor) ===")
    patch_map(
        os.path.join(data_dir, "Map003.json"),
        build_map003_events
    )

    print("\n=== Patching Map004 (Exterior) ===")
    patch_map(
        os.path.join(data_dir, "Map004.json"),
        build_map004_events
    )

    print("\n=== All patches applied successfully ===")
