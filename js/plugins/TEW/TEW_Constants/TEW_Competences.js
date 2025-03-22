
var Imported = Imported || {};
Imported.TEW_Constants = true;
var TEW = TEW || {};

TEW.COMPS = TEW.COMPS || { 
    ANIMAL_CARE: {
        name: "Animal Care",
        stat: "intl",
        isBase: false
    },
    ANIMAL_TRAINING: {
        name: "Animal Training",
        stat: "intl",
        isBase: false
    },
    ART_CARTOGRAPHY: {
        name: "Art (Cartography)",
        stat: "dext",
        isBase: false
    },
    ART_ENGRAVING: {
        name: "Art (Engraving)",
        stat: "dext",
        isBase: false
    },
    ART_MOSAICS: {
        name: "Art (Mosaics)",
        stat: "dext",
        isBase: false
    },
    ART_SCULPTURE: {
        name: "Art (Sculpture)",
        stat: "dext",
        isBase: false
    },
    ART_TATTOO: {
        name: "Art (Tattoo)",
        stat: "dext",
        isBase: false
    },
    ART_WEAVING: {
        name: "Art (Weaving)",
        stat: "dext",
        isBase: false
    },
    ATHLETICS: {
        name: "Athletics",
        stat: "agil",
        isBase: true
    },
    BRIBERY: {
        name: "Bribery",
        stat: "felw",
        isBase: true
    },
    CHANNELLING_AQSHY: {
        name: "Channelling (Aqshy)",
        stat: "will",
        isBase: false
    },
    CHANNELLING_AZYR: {
        name: "Channelling (Azyr)",
        stat: "will",
        isBase: false
    },
    CHANNELLING_CHAMON: {
        name: "Channelling (Chamon)",
        stat: "will",
        isBase: false
    },
    CHANNELLING_DHAR: {
        name: "Channelling (Dhar)",
        stat: "will",
        isBase: false
    },
    CHANNELLING_GHUR: {
        name: "Channelling (Ghur)",
        stat: "will",
        isBase: false
    },
    CHANNELLING_GHYRAN: {
        name: "Channelling (Ghyran)",
        stat: "will",
        isBase: false
    },
    CHANNELLING_HYSH: {
        name: "Channelling (Hysh)",
        stat: "will",
        isBase: false
    },
    CHANNELLING_SHYISH: {
        name: "Channelling (Shyish)",
        stat: "will",
        isBase: false
    },
    CHANNELLING_ULGU: {
        name: "Channelling (Ulgu)",
        stat: "will",
        isBase: false
    },
    CHARM: {
        name: "Charm",
        stat: "felw",
        isBase: true
    },
    CHARM_ANIMAL: {
        name: "Charm Animal",
        stat: "will",
        isBase: true
    },
    CLIMB: {
        name: "Climb",
        stat: "strg",
        isBase: true
    },
    CONSUME_ALCOHOL: {
        name: "Consume Alcohol",
        stat: "toug",
        isBase: true
    },
    COOL: {
        name: "Cool",
        stat: "will",
        isBase: true
    },
    DODGE: {
        name: "Dodge",
        stat: "agil",
        isBase: true
    },
    DRIVE: {
        name: "Drive",
        stat: "agil",
        isBase: true
    },
    ENDURANCE: {
        name: "Endurance",
        stat: "toug",
        isBase: true
    },
    ENTERTAIN_ACTING: {
        name: "Entertain (Acting)",
        stat: "felw",
        isBase: false
    },
    ENTERTAIN_COMEDY: {
        name: "Entertain (Comedy)",
        stat: "felw",
        isBase: false
    },
    ENTERTAIN_SINGING: {
        name: "Entertain (Singing)",
        stat: "felw",
        isBase: false
    },
    ENTERTAIN_STORYTELLING: {
        name: "Entertain (Storytelling)",
        stat: "felw",
        isBase: false
    },
    EVALUATE: {
        name: "Evaluate",
        stat: "intl",
        isBase: false
    },
    GAMBLE: {
        name: "Gamble",
        stat: "intl",
        isBase: true
    },
    GOSSIP: {
        name: "Gossip",
        stat: "felw",
        isBase: true
    },
    HAGGLE: {
        name: "Haggle",
        stat: "felw",
        isBase: true
    },
    HEAL: {
        name: "Heal",
        stat: "intl",
        isBase: false
    },
    INTIMIDATE: {
        name: "Intimidate",
        stat: "strg",
        isBase: true
    },
    INTUITION: {
        name: "Intuition",
        stat: "init",
        isBase: true
    },
    LANGUAGE_BATTLE: {
        name: "Language (Battle Tongue)",
        stat: "intl",
        isBase: false
    },
    LANGUAGE_BRETONNIAN: {
        name: "Language (Bretonnian)",
        stat: "intl",
        isBase: false
    },
    LANGUAGE_CLASSICAL: {
        name: "Language (Classical)",
        stat: "intl",
        isBase: false
    },
    LANGUAGE_ELTHARIN: {
        name: "Language (Eltharin)",
        stat: "intl",
        isBase: false
    },
    LANGUAGE_GUILDER: {
        name: "Language (Guilder)",
        stat: "intl",
        isBase: false
    },
    LANGUAGE_KHAZALID: {
        name: "Language (Khazalid)",
        stat: "intl",
        isBase: false
    },
    LANGUAGE_MAGICK: {
        name: "Language (Magick)",
        stat: "intl",
        isBase: false
    },
    LANGUAGE_MIDDENLANDER: {
        name: "Language (Middenlander)",
        stat: "intl",
        isBase: false
    },
    LANGUAGE_WASTELANDER: {
        name: "Language (Wastelander)",
        stat: "intl",
        isBase: false
    },
    LEADERSHIP: {
        name: "Leadership",
        stat: "felw",
        isBase: true
    },
    LORE_BEASTS: {
        name: "Lore (Beasts)",
        stat: "intl",
        isBase: false
    },
    LORE_CHEMISTRY: {
        name: "Lore (Chemistry)",
        stat: "intl",
        isBase: false
    },
    LORE_DEMONOLOGY: {
        name: "Lore (Demonology)",
        stat: "intl",
        isBase: false
    },
    LORE_EMPIRE: {
        name: "Lore (Empire)",
        stat: "intl",
        isBase: false
    },
    LORE_ENGINEERING: {
        name: "Lore (Engineering)",
        stat: "intl",
        isBase: false
    },
    LORE_HERALDRY: {
        name: "Lore (Heraldry)",
        stat: "intl",
        isBase: false
    },
    LORE_HERBS: {
        name: "Lore (Herbs)",
        stat: "intl",
        isBase: false
    },
    LORE_HISTORY: {
        name: "Lore (History)",
        stat: "intl",
        isBase: false
    },
    LORE_LAW: {
        name: "Lore (Law)",
        stat: "intl",
        isBase: false
    },
    LORE_MAGIC: {
        name: "Lore (Magic)",
        stat: "intl",
        isBase: false
    },
    LORE_MEDICINE: {
        name: "Lore (Medicine)",
        stat: "intl",
        isBase: false
    },
    LORE_MIDDENHEIM: {
        name: "Lore (Middenheim)",
        stat: "intl",
        isBase: false
    },
    LORE_MIDDENLAND: {
        name: "Lore (Middenland)",
        stat: "intl",
        isBase: false
    },
    LORE_MYRMIDIA: {
        name: "Lore (Myrmidia)",
        stat: "intl",
        isBase: false
    },
    LORE_NECROMANCY: {
        name: "Lore (Necromancy)",
        stat: "intl",
        isBase: false
    },
    LORE_NOBILITY: {
        name: "Lore (Nobility)",
        stat: "intl",
        isBase: false
    },
    LORE_REIKLAND: {
        name: "Lore (Reikland)",
        stat: "intl",
        isBase: false
    },
    LORE_SCIENCE: {
        name: "Lore (Science)",
        stat: "intl",
        isBase: false
    },
    LORE_SIGMAR: {
        name: "Lore (Sigmar)",
        stat: "intl",
        isBase: false
    },
    LORE_THEOLOGY: {
        name: "Lore (Theology)",
        stat: "intl",
        isBase: false
    },
    LORE_ULRIC: {
        name: "Lore (Ulric)",
        stat: "intl",
        isBase: false
    },
    LORE_WAR: {
        name: "Lore (War)",
        stat: "intl",
        isBase: false
    },
    MELEE_BASIC: {
        name: "Melee (Basic)",
        stat: "weas",
        isBase: true
    },
    MELEE_BRAWLING: {
        name: "Melee (Brawling)",
        stat: "weas",
        isBase: false
    },
    MELEE_CAVALRY: {
        name: "Melee (Cavalry)",
        stat: "weas",
        isBase: false
    },
    MELEE_FENCING: {
        name: "Melee (Fencing)",
        stat: "weas",
        isBase: false
    },
    MELEE_FLAIL: {
        name: "Melee (Flail)",
        stat: "weas",
        isBase: false
    },
    MELEE_PARRY: {
        name: "Melee (Parry)",
        stat: "weas",
        isBase: false
    },
    MELEE_POLE_ARM: {
        name: "Melee (Pole-Arm)",
        stat: "weas",
        isBase: false
    },
    MELEE_TWO_HANDED: {
        name: "Melee (Two-Handed)",
        stat: "weas",
        isBase: false
    },
    NAVIGATION: {
        name: "Navigation",
        stat: "init",
        isBase: true
    },
    OUTDOOR_SURVIVAL: {
        name: "Outdoor Survival",
        stat: "intl",
        isBase: true
    },
    PERCEPTION: {
        name: "Perception",
        stat: "init",
        isBase: true
    },
    PERFORM_ACROBATICS: {
        name: "Perform (Acrobatics)",
        stat: "agil",
        isBase: false
    },
    PERFORM_CLOWNING: {
        name: "Perform (Clowning)",
        stat: "agil",
        isBase: false
    },
    PERFORM_DANCING: {
        name: "Perform (Dancing)",
        stat: "agil",
        isBase: false
    },
    PERFORM_FIREBREATHING: {
        name: "Perform (Firebreathing)",
        stat: "agil",
        isBase: false
    },
    PERFORM_JUGGLING: {
        name: "Perform (Juggling)",
        stat: "agil",
        isBase: false
    },
    PERFORM_MIMING: {
        name: "Perform (Miming)",
        stat: "agil",
        isBase: false
    },
    PERFORM_ROPE_WALKING: {
        name: "Perform (Rope Walking)",
        stat: "agil",
        isBase: false
    },
    PICK_LOCK: {
        name: "Pick Lock",
        stat: "dext",
        isBase: false
    },
    PLAY_BAGPIPE: {
        name: "Play (Bagpipe)",
        stat: "dext",
        isBase: false
    },
    PLAY_DRUM: {
        name: "Play (Drum)",
        stat: "dext",
        isBase: false
    },
    PLAY_FLUTE: {
        name: "Play (Flute)",
        stat: "dext",
        isBase: false
    },
    PLAY_LUTE: {
        name: "Play (Lute)",
        stat: "dext",
        isBase: false
    },
    PLAY_HARPSICHORD: {
        name: "Play (Harpsichord)",
        stat: "dext",
        isBase: false
    },
    PLAY_HORN: {
        name: "Play (Horn)",
        stat: "dext",
        isBase: false
    },
    PLAY_VIOLIN: {
        name: "Play (Violin)",
        stat: "dext",
        isBase: false
    },
    PREY: {
        name: "Prey",
        stat: "felw",
        isBase: false
    },
    RANGED_BLACKPOWDER: {
        name: "Ranged (Blackpowder)",
        stat: "bals",
        isBase: false
    },
    RANGED_BOW: {
        name: "Ranged (Bow)",
        stat: "bals",
        isBase: false
    },
    RANGED_CROSSBOW: {
        name: "Ranged (Crossbow)",
        stat: "bals",
        isBase: false
    },
    RANGED_ENGINEERING: {
        name: "Ranged (Engineering)",
        stat: "bals",
        isBase: false
    },
    RANGED_ENTANGLING: {
        name: "Ranged (Entangling)",
        stat: "bals",
        isBase: false
    },
    RANGED_EXPLOSIVES: {
        name: "Ranged (Explosives)",
        stat: "bals",
        isBase: false
    },
    RANGED_SLING: {
        name: "Ranged (Sling)",
        stat: "bals",
        isBase: false
    },
    RANGED_THROWING: {
        name: "Ranged (Throwing)",
        stat: "bals",
        isBase: false
    },
    RESEARCH: {
        name: "Research",
        stat: "intl",
        isBase: false
    },
    RIDE_BADGER: {
        name: "Ride (Badger)",
        stat: "agil",
        isBase: false
    },
    RIDE_HORSE: {
        name: "Ride (Horse)",
        stat: "agil",
        isBase: false
    },
    ROW: {
        name: "Row",
        stat: "strg",
        isBase: true
    },
    SAIL: {
        name: "Sail",
        stat: "agil",
        isBase: false
    },
    SECRET_SIGNS_GUILD: {
        name: "Secret Signs (Guild)",
        stat: "intl",
        isBase: false
    },
    SECRET_SIGNS_RANGER: {
        name: "Secret Signs (Ranger)",
        stat: "intl",
        isBase: false
    },
    SECRET_SIGNS_SCOUT: {
        name: "Secret Signs (Scout)",
        stat: "intl",
        isBase: false
    },
    SECRET_SIGNS_THIEF: {
        name: "Secret Signs (Thief)",
        stat: "intl",
        isBase: false
    },
    SET_TRAP: {
        name: "Set Trap",
        stat: "dext",
        isBase: false
    },
    SLEIGHT_OF_HAND: {
        name: "Sleight Of Hand",
        stat: "dext",
        isBase: false
    },
    STEALTH: {
        name: "Stealth",
        stat: "agil",
        isBase: true
    },
    STEALTH_RURAL: {
        name: "Stealth (Rural)",
        stat: "agil",
        isBase: false
    },
    STEALTH_UNDERGROUND: {
        name: "Stealth (Underground)",
        stat: "agil",
        isBase: false
    },
    STEALTH_URBAN: {
        name: "Stealth (Urban)",
        stat: "agil",
        isBase: false
    },
    TRACK: {
        name: "Track",
        stat: "init",
        isBase: false
    },
    TRADE_ALCHEMIST: {
        name: "Trade (Alchemist)",
        stat: "dext",
        isBase: false
    },
    TRADE_APOTHECARY: {
        name: "Trade (Apothecary)",
        stat: "dext",
        isBase: false
    },
    TRADE_BLACKSMITH: {
        name: "Trade (Blacksmith)",
        stat: "dext",
        isBase: false
    },
    TRADE_BREWING: {
        name: "Trade (Brewing)",
        stat: "dext",
        isBase: false
    },
    TRADE_CALLIGRAPHER: {
        name: "Trade (Calligrapher)",
        stat: "dext",
        isBase: false
    },
    TRADE_CHANDLER: {
        name: "Trade (Chandler)",
        stat: "dext",
        isBase: false
    },
    TRADE_CARPENTER: {
        name: "Trade (Carpenter)",
        stat: "dext",
        isBase: false
    },
    TRADE_COOK: {
        name: "Trade (Cook)",
        stat: "dext",
        isBase: false
    },
    TRADE_EMBALMER: {
        name: "Trade (Embalmer)",
        stat: "dext",
        isBase: false
    },
    TRADE_ENGINEER: {
        name: "Trade (Engineer)",
        stat: "dext",
        isBase: false
    },
    TRADE_FLETCHER: {
        name: "Trade (Fletcher)",
        stat: "dext",
        isBase: false
    },
    TRADE_GOLDSMITH: {
        name: "Trade (Goldsmith)",
        stat: "dext",
        isBase: false
    },
    TRADE_TANNER: {
        name: "Trade (Tanner)",
        stat: "dext",
        isBase: false
    },
};


TEW.COMPS_ARRAY = Object.keys(TEW.COMPS);
TEW.BASE_COMPS = Object.entries(TEW.COMPS).filter((comp) => comp[1].isBase).sort((a, b) => a[0].localeCompare(b[0]));
TEW.ADVANCED_COMPS = Object.entries(TEW.COMPS).filter((comp) => !comp[1].isBase).sort((a, b) => a[0].localeCompare(b[0]));

