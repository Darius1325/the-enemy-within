var Imported = Imported || {};
Imported.TEW_Constants = true;
var TEW = TEW || {};

TEW.MELEE_WEAPONS = TEW.MELEE_WEAPONS || {
    AXE: {
        name: "Axe",
        group: "BASIC",
        twoHanded: false,
        price: "0/10/0",
        enc: 1,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["HACK","UNBALANCED"]
    },
    BALLOCK_KNIFE: {
        name: "Ballock Knife",
        group: "BASIC",
        twoHanded: false,
        price: "0/16/0",
        enc: 0,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: ["IMPALE","PENETRATING","PRECISE"] //TODO if prone or surprised ?
    },
    CLUB: {
        name: "Club",
        group: "BASIC",
        twoHanded: false,
        price: "0/4/0",
        enc: 0,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["UNDAMAGING","UNBALANCED"]
    },
    DAGGER: {
        name: "Dagger",
        group: "BASIC",
        twoHanded: false,
        price: "0/16/0",
        enc: 0,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: []
    },
    IMPROVISED_WEAPON: {
        name: "Improvised Weapon",
        group: "BASIC",
        twoHanded: false,
        price: "0/0/0",
        enc: 1,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: ["UNDAMAGING","UNBALANCED"]
    },
    KNIFE: {
        name: "Knife",
        group: "BASIC",
        twoHanded: false,
        price: "0/8/0",
        enc: 0,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: ["UNDAMAGING"]
    },
    MACE: {
        name: "Mace",
        group: "BASIC",
        twoHanded: false,
        price: "0/15/0",
        enc: 1,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["PUMMEL","UNBALANCED"]
    },
    MILITARY_PICK: {
        name: "Military Pick",
        group: "BASIC",
        twoHanded: false,
        price: "0/15/0",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["PENETRATING","UNBALANCED"]
    },
    SCIMITAR: {
        name: "Scimitar",
        group: "BASIC",
        twoHanded: false,
        price: "1/0/0",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["SLASH_1"]
    },
    SWORD: {
        name: "Sword",
        group: "BASIC",
        twoHanded: false,
        price: "1/0/0",
        enc: 1,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: []
    },
    WARHAMMER: {
        name: "Warhammer",
        group: "BASIC",
        twoHanded: false,
        price: "1/0/0",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["PENETRATING","PUMMEL","UNBALANCED"] //TODO Penetrating OR Pummel
    },
    SHIELD_BUCKLER: {
        name: "Shield (Buckler)",
        group: "BASIC",
        twoHanded: false,
        price: "0/18/2",
        enc: 0,
        availability: "COMMON",
        reach: "Personnal",
        strBonus: true,
        damage: 1,
        qualities: ["SHIELD_1","DEFENSIVE","UNDAMAGING"]
    },
    SHIELD: {
        name: "Shield",
        group: "BASIC",
        twoHanded: false,
        price: "2/0/0",
        enc: 1,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["SHIELD_2","DEFENSIVE","UNDAMAGING"]
    },
    SHIELD_LARGE: {
        name: "Shield (Large)",
        group: "BASIC",
        twoHanded: false,
        price: "3/0/0",
        enc: 3,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["SHIELD_3","DEFENSIVE","UNDAMAGING"]
    },
    PAVISE: {
        name: "Pavise",
        group: "BASIC",
        twoHanded: false,
        price: "3/15/0",
        enc: 4,
        availability: "RARE",
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["SHIELD_5"]
    },
    CAVALRY_HAMMER: {
        name: "Cavalry Hammer (2H)",
        group: "CAVALRY",
        twoHanded: true,
        price: "3/0/0",
        enc: 3,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["PUMMEL"]
    },
    DEMI_LANCE: {
        name: "Demi-Lance",
        group: "CAVALRY",
        twoHanded: false,
        onlyCharge: true,
        price: "1/0/0",
        enc: 2,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["IMPACT","IMPALE"]
    },
    LANCE: {
        name: "Lance",
        group: "CAVALRY",
        twoHanded: false,
        onlyCharge: true,
        price: "1/0/0",
        enc: 3,
        availability: "RARE",
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: ["IMPACT","IMPALE"]
    },
    SABRE: {
        name: "Sabre",
        group: "CAVALRY",
        twoHanded: false,
        price: "0/10/0",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["SLASH_1"]
    },
    FOIL: {
        name: "Foil",
        group: "FENCING",
        twoHanded: false,
        price: "5/0/0",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["FAST","IMPALE","PRECISE","UNDAMAGING"]
    },
    RAPIER: {
        name: "Rapier",
        group: "FENCING",
        twoHanded: false,
        price: "5/0/0",
        enc: 1,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["FAST","IMPALE"]
    },
    SMALLSWORD: {
        name: "Smallsword",
        group: "FENCING",
        twoHanded: false,
        price: "4/0/0",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["FAST","IMPALE","PRECISE"]
    },
    SPIKED_GAUNTLET: {
        name: "Spiked Gauntlet",
        group: "BRAWLING",
        twoHanded: false,
        price: "2/0/0",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["IMPALE","UNBALANCED"]
    },
    BOAT_HOOK: {
        name: "Boat Hook",
        group: "BRAWLING",
        twoHanded: false,
        price: "0/6/0",
        enc: 0,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["TRIP","UNDAMAGING"]
    },
    GARROTE: {
        name: "Garrote (2H)",
        group: "BRAWLING",
        twoHanded: true,
        price: "0/1/0",
        enc: 0,
        availability: "RARE",
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["ENTANGLE","SLOW","UNBALANCED","UNDAMAGING"]
    },
    UNARMED: {
        name: "Unarmed",
        group: "BRAWLING",
        twoHanded: false,
        price: "0/0/0",
        enc: 0,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: ["UNDAMAGING"]
    },
    KNUCKLEDUSTERS: {
        name: "Knuckledusters",
        group: "BRAWLING",
        twoHanded: false,
        price: "0/2/6",
        enc: 0,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: []
    },
    LOCKED_GAUNTLET: { //TODO
        name: "Locked Gauntlet",
        group: "BRAWLING",
        twoHanded: false,
        price: "1/0/0",
        enc: 1,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["UNDAMAGING"]
    },
    SAP: {
        name: "Sap",
        group: "BRAWLING",
        twoHanded: false,
        price: "0/1/0",
        enc: 0,
        availability: "RARE",
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: ["PUMMEL","UNBALANCED","UNDAMAGING"]
    },
    GRAIN_FLAIL: {
        name: "Grain Flail",
        group: "FLAIL",
        twoHanded: false,
        price: "0/10/0",
        enc: 1,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["DISTRACT","IMPRECISE","WRAP"]
    },
    FLAIL: {
        name: "Flail",
        group: "FLAIL",
        twoHanded: false,
        price: "2/0/0",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 5,
        qualities: ["DISTRACT","WRAP"]
    },
    MILITARY_FLAIL: {
        name: "Military Flail (2H)",
        group: "FLAIL",
        twoHanded: true,
        price: "3/0/0",
        enc: 2,
        availability: "RARE",
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: ["DISTRACT","IMPRECISE","TIRING","WRAP"]
    },
    CLOAK: {
        name: "Cloak",
        group: "PARRY",
        twoHanded: false,
        price: "0/10/0",
        enc: 1,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: ["ENTANGLE","DEFENSIVE","UNDAMAGING"]
    },
    MAIN_GAUCHE: {
        name: "Main Gauche",
        group: "PARRY",
        twoHanded: false,
        price: "1/0/0",
        enc: 0,
        availability: "RARE",
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["DEFENSIVE"]
    },
    SWORDBREAKER: {
        name: "Swordbreaker",
        group: "PARRY",
        twoHanded: false,
        price: "1/2/6",
        enc: 1,
        availability: "SCARCE",
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["DEFENSIVE","TRAP_BLADE"]
    },
    WEIGHTED_NET: {
        name: "Weighted Net (2H)",
        group: "PARRY",
        twoHanded: true,
        price: "0/10/0",
        enc: 1,
        availability: "RARE",
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: ["ENTANGLE","DEFENSIVE","SHIELD_1","SLOW","UNDAMAGING","WRAP"]
    },
    AHLSPIESS: {
        name: "Ahlspiess (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "2/0/0",
        enc: 2,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 3,
        qualities: ["IMPALE","PENETRATING"]
    },
    BILL: {
        name: "Bill (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE","HACK","TRIP"] //TODO Hack OR Trip
    },
    HALBERD: {
        name: "Halberd (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "2/0/0",
        enc: 3,
        availability: "COMMON",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE","HACK","IMPALE"] //TODO Hack OR Impale
    },
    MANCATCHER: {
        name: "Mancatcher (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "2/0/0",
        enc: 3,
        availability: "RARE",
        longReach: true,
        strBonus: true,
        damage: 2,
        qualities: ["DEFENSIVE","ENTANGLE"]
    },
    PARTIZAN: {
        name: "Partizan (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE","IMPALE","SLASH_2"] //TODO Impale OR Slash
    },
    POLLAXE: {
        name: "Pollaxe (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE","HACK","IMPALE","PUMMEL"] //TODO Hack OR Impale OR Pummel
    },
    SPEAR: {
        name: "Spear (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "0/15/0",
        enc: 2,
        availability: "COMMON",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["IMPALE"]
    },
    PIKE: {
        name: "Pike (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "0/18/0",
        enc: 4,
        availability: "RARE",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["IMPALE"]
    },
    QUATERSTAFF: {
        name: "Quaterstaff (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "0/3/0",
        enc: 2,
        availability: "COMMON",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE","PUMMEL"]
    },
    ENCHANTED_STAFF: {
        name: "Enchanted Staff (2H)",
        group: "POLE_ARM",
        twoHanded: true,
        price: "15/0/0",
        enc: 2,
        availability: "EXOTIC",
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE","PUMMEL"]
    },
    BASTARD_SWORD: {
        name: "Bastard Sword (2H)",
        group: "TWO_HANDED",
        twoHanded: true,
        price: "8/0/0",
        enc: 3,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["DAMAGING","DEFENSIVE"]
    },
    GREAT_AXE: {
        name: "Great Axe (2H)",
        group: "TWO_HANDED",
        twoHanded: true,
        price: "4/0/0",
        enc: 3,
        availability: "COMMON",
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: ["HACK","IMPACT","TIRING"]
    },
    FLAMBERGE_ZWEIHANDER: {
        name: "Flamberge Zweihander (2H)",
        group: "TWO_HANDED",
        twoHanded: true,
        price: "30/0/0",
        enc: 3,
        availability: "EXOTIC",
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["DAMAGING","HACK","SLASH_2"]
    },
    PICK: {
        name: "Pick (2H)",
        group: "TWO_HANDED",
        twoHanded: true,
        price: "0/9/0",
        enc: 3,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 5,
        qualities: ["DAMAGING","IMPALE","SLOW"]
    },
    WARHAMMER_TH: {
        name: "Warhammer (2H)",
        group: "TWO_HANDED",
        twoHanded: true,
        price: "3/0/0",
        enc: 3,
        availability: "COMMON",
        longReach: false,
        strBonus: true,
        damage: 6,
        qualities: ["DAMAGING","PUMMEL","SLOW"]
    },
    ZWEIHANDER: {
        name: "Zweihander (2H)",
        group: "TWO_HANDED",
        twoHanded: true,
        price: "10/0/0",
        enc: 3,
        availability: "SCARCE",
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["DAMAGING","HACK"]
    }
}

TEW.RANGED_WEAPONS = TEW.RANGED_WEAPONS || {
    ELF_BOW: {
        name: "Elf Bow (2H)",
        group: "BOW",
        twoHanded: true,
        price: "10/0/0",
        enc: 2,
        availability: "EXOTIC",
        range: 150,
        strBonus: true,
        damage: 4,
        qualities: ["DAMAGING","PRECISE"]
    },
    LONGBOW: {
        name: "Longbow (2H)",
        group: "BOW",
        twoHanded: true,
        price: "5/0/0",
        enc: 3,
        availability: "SCARCE",
        range: 100,
        strBonus: true,
        damage: 4,
        qualities: ["DAMAGING"]
    },
    BOW: {
        name: "Bow (2H)",
        group: "BOW",
        twoHanded: true,
        price: "4/0/0",
        enc: 2,
        availability: "COMMON",
        range: 50,
        strBonus: true,
        damage: 3,
        qualities: []
    },
    SHORTBOW: {
        name: "Shortbow (2H)",
        group: "BOW",
        twoHanded: true,
        price: "3/0/0",
        enc: 1,
        availability: "COMMON",
        range: 20,
        strBonus: true,
        damage: 2,
        qualities: []
    },
    CROSSBOW_PISTOL: {
        name: "Crossbow Pistol",
        group: "CROSSBOW",
        twoHanded: false,
        price: "6/0/0",
        enc: 0,
        availability: "SCARCE",
        range: 10,
        strBonus: false,
        damage: 7,
        qualities: ["PISTOL"]
    },
    HEAVY_CROSSBOW: {
        name: "Heavy Crossbow (2H)",
        group: "CROSSBOW",
        twoHanded: true,
        price: "7/0/0",
        enc: 3,
        availability: "RARE",
        range: 100,
        strBonus: false,
        damage: 9,
        qualities: ["DAMAGING","RELOAD_2"]
    },
    CROSSBOW: {
        name: "Crossbow (2H)",
        group: "CROSSBOW",
        twoHanded: true,
        price: "5/0/0",
        enc: 2,
        availability: "COMMON",
        range: 60,
        strBonus: false,
        damage: 9,
        qualities: ["RELOAD_1"]
    },
    LASSO: {
        name: "Lasso",
        group: "ENTANGLING",
        twoHanded: false,
        price: "0/6/0",
        enc: 0,
        availability: "COMMON",
        range: 6,
        strBonus: false,
        damage: 0,
        qualities: ["ENTANGLE"]
    },
    WHIP: {
        name: "Whip",
        group: "ENTANGLING",
        twoHanded: false,
        price: "0/5/0",
        enc: 0,
        availability: "COMMON",
        range: 6,
        strBonus: true,
        damage: 2,
        qualities: ["ENTANGLE"]
    },
    SLING: {
        name: "Sling",
        group: "SLING",
        twoHanded: false,
        price: "0/1/0",
        enc: 0,
        availability: "COMMON",
        range: 60,
        strBonus: false,
        damage: 6,
        qualities: []
    },
    STAFF_SLING: {
        name: "Staff Sling (2H)",
        group: "SLING",
        twoHanded: true,
        price: "0/4/0",
        enc: 2,
        availability: "SCARCE",
        range: 100,
        strBonus: false,
        damage: 7,
        qualities: []
    },
    BOLAS: {
        name: "Bolas",
        group: "THROWING",
        twoHanded: false,
        price: "0/1/0",
        enc: 0,
        availability: "RARE",
        range: 9,
        strBonus: true,
        damage: 0,
        qualities: ["ENTANGLE"]
    },
    DART: {
        name: "Dart",
        group: "THROWING",
        twoHanded: false,
        price: "0/2/0",
        enc: 0,
        availability: "SCARCE",
        range: 6,
        strBonus: true,
        damage: 1,
        qualities: ["IMPALE"]
    },
    JAVELIN: {
        name: "Javelin",
        group: "THROWING",
        twoHanded: false,
        price: "0/10/6",
        enc: 1,
        availability: "SCARCE",
        range: 9,
        strBonus: true,
        damage: 3,
        qualities: ["IMPALE"]
    },
    ROCK: {
        name: "Rock",
        group: "THROWING",
        twoHanded: false,
        price: "0/0/0",
        enc: 0,
        availability: "COMMON",
        range: 9,
        strBonus: true,
        damage: 0,
        qualities: []
    },
    THROWING_AXE: {
        name: "Throwing Axe",
        group: "THROWING",
        twoHanded: false,
        price: "1/0/0",
        enc: 1,
        availability: "COMMON",
        range: 6,
        strBonus: true,
        damage: 3,
        qualities: ["HACK"]
    },
    THROWING_KNIFE: {
        name: "Throwing Knife",
        group: "THROWING",
        twoHanded: false,
        price: "0/18/0",
        enc: 0,
        availability: "COMMON",
        range: 6,
        strBonus: true,
        damage: 2,
        qualities: []
    },
    BOMB: {
        name: "Bomb",
        group: "EXPLOSIVES",
        twoHanded: false,
        price: "3/0/0",
        enc: 0,
        availability: "RARE",
        range: 3,
        strBonus: false,
        damage: 12,
        qualities: ["BLAST_5","DANGEROUS","IMPACT"]
    },
    INCENDIARY: {
        name: "Incendiary",
        group: "EXPLOSIVES",
        twoHanded: false,
        price: "1/0/0",
        enc: 0,
        availability: "SCARCE",
        range: 3,
        strBonus: false,
        damage: 0, //TODO
        qualities: ["BLAST_4","DANGEROUS"]
    },
    BLUNDERBUSS: {
        name: "Blunderbuss (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "2/0/0",
        enc: 1,
        availability: "SCARCE",
        range: 20,
        strBonus: false,
        damage: 8,
        qualities: ["DANGEROUS","RELOAD_2"]
    },
    HOCHLAND_LONG_RIFLE: {
        name: "Hochland Long Rifle (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "100/0/0",
        enc: 3,
        availability: "EXOTIC",
        range: 100,
        strBonus: false,
        damage: 9,
        qualities: ["ACCURATE","PRECISE","RELOAD_4"]
    },
    HANDGUN: {
        name: "Handgun (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "4/0/0",
        enc: 2,
        availability: "SCARCE",
        range: 50,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS","RELOAD_3"]
    },
    PISTOL: {
        name: "Pistol",
        group: "BLACKPOWDER",
        twoHanded: false,
        price: "8/0/0",
        enc: 0,
        availability: "RARE",
        range: 20,
        strBonus: false,
        damage: 8,
        qualities: ["PISTOL","RELOAD_1"]
    },
    MATCHLOCK_HANDGUN: {
        name: "Matchlock Handgun (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "2/0/0",
        enc: 2,
        availability: "RARE",
        range: 50,
        strBonus: false,
        damage: 8,
        qualities: ["DANGEROUS","RELOAD_4"]
    },
    MATCHLOCK_BLUNDERBUSS: {
        name: "Matchlock Blunderbuss (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "1/0/0",
        enc: 1,
        availability: "RARE",
        range: 20,
        strBonus: false,
        damage: 7,
        qualities: ["SPREAD_3","DANGEROUS","RELOAD_3"]
    },
    ARQUEBUS: {
        name: "Arquebus (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "5/0/0",
        enc: 3,
        availability: "EXOTIC",
        range: 40,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS","IMPRECISE","RELOAD_5"]
    },
    DOUBLE_BARRELLED_HANDGUN: {
        name: "Double-Barrelled Handgun (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "7/0/0",
        enc: 3,
        availability: "EXOTIC",
        range: 50,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS","REPEATER","RELOAD_4"]
    },
    GRIFFONSFOOT_PISTOL: {
        name: "Griffonsfoot Pistol",
        group: "BLACKPOWDER",
        twoHanded: false,
        price: "10/0/0",
        enc: 1,
        availability: "EXOTIC",
        range: 10,
        strBonus: false,
        damage: 7,
        qualities: ["IMPRECISE","SPREAD_5","RELOAD_6"]
    },
    GUN_AXE: {
        name: "GunAxe (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "8/0/0",
        enc: 1,
        availability: "EXOTIC",
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS","IMPRECISE","RELOAD_4"]
    },
    GUN_HALBERD: {
        name: "Gun Halberd (2H)",
        group: "BLACKPOWDER",
        twoHanded: true,
        price: "10/0/0",
        enc: 3,
        availability: "EXOTIC",
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS","IMPRECISE","RELOAD_4"]
    },
    REPEATER_HANDGUN: {
        name: "Repeater Handgun (2H)",
        group: "ENGINEERING",
        twoHanded: true,
        price: "10/0/0",
        enc: 3,
        availability: "RARE",
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS","RELOAD_5","REPEATER_4"]
    },
    REPEATER_PISTOL: {
        name: "Repeater Pistol",
        group: "ENGINEERING",
        twoHanded: false,
        price: "15/0/0",
        enc: 1,
        availability: "RARE",
        range: 10,
        strBonus: false,
        damage: 8,
        qualities: ["DANGEROUS","PISTOL","RELOAD_4","REPEATER_4"]
    },
    HAND_MORTAR: {
        name: "Hand Mortar (2H)",
        group: "ENGINEERING",
        twoHanded: true,
        price: "50/0/0",
        enc: 3,
        availability: "EXOTIC",
        range: 30,
        strBonus: false,
        damage: 7,
        qualities: ["DANGEROUS","IMPRECISE","RELOAD_2"]
    },
    CANE_PISTOL: {
        name: "Cane Pistol",
        group: "ENGINEERING",
        twoHanded: false,
        price: "15/0/0",
        enc: 3,
        availability: "EXOTIC",
        range: 10,
        strBonus: false,
        damage: 8,
        qualities: ["DANGEROUS","IMPRECISE","RELOAD_6"]
    }
}

TEW.AMMUNITION = TEW.AMMUNITION || {
    ARROW: {
        name: "Arrow",
        group: "BOW",
        ammountSold: 12,
        price: "0/5/0",
        availability: "COMMON",
        range: "+0",
        damage: "+0",
        qualities: ["IMPALE"]
    },
    BARBED_ARROW: {
        name: "Barbed Arrow",
        group: "BOW",
        ammountSold: 12,
        price: "0/8/0",
        availability: "SCARCE",
        range: "+0",
        damage: "+0",
        qualities: ["IMPALE","SLASH_1"]
    },
    BODKIN_ARROW: {
        name: "Bodkin Arrow",
        group: "BOW",
        ammountSold: 12,
        price: "0/8/0",
        availability: "SCARCE",
        range: "+0",
        damage: "+0",
        qualities: ["IMPALE","PENETRATING"]
    },
    ELF_ARROW: {
        name: "Elf Arrow",
        group: "BOW",
        ammountSold: 1,
        price: "0/6/0",
        availability: "EXOTIC",
        range: "+50",
        damage: "+1",
        qualities: ["ACCURATE","IMPALE","PENETRATING"]
    },
    SHARO_STICK: {
        name: "Sharp Stick",
        group: "BOW",
        ammountSold: 1,
        price: "0/0/0",
        availability: "COMMON",
        range: "/2",
        damage: "-2",
        qualities: ["DANGEROUS","IMPRECISE","UNDAMAGING"]
    },
    BOLT: {
        name: "Bolt",
        group: "CROSSBOW",
        ammountSold: 12,
        price: "0/5/0",
        availability: "COMMON",
        range: "+0",
        damage: "+0",
        qualities: ["IMPALE"]
    },
    LEAD_BULLET: {
        name: "Lead Bullet",
        group: "SLING",
        ammountSold: 12,
        price: "0/0/4",
        availability: "COMMON",
        range: "-10",
        damage: "+1",
        qualities: ["PUMMEL"]
    },
    PEBBLE: {
        name: "Pebble",
        group: "SLING",
        ammountSold: 1,
        price: "0/0/0",
        availability: "SCARCE",
        range: "-10",
        damage: "-2",
        qualities: ["IMPRECISE","UNDAMAGING"]
    },
    STONE_BULLET: {
        name: "Stone Bullet",
        group: "SLING",
        ammountSold: 12,
        price: "0/0/2",
        availability: "COMMON",
        range: "+0",
        damage: "+0",
        qualities: ["PUMMEL"]
    },
    BULLET_AND_POWDER: {
        name: "Bullet and Powder",
        group: "BLACKPOWDER",
        ammountSold: 12,
        price: "0/3/3",
        availability: "COMMON",
        range: "+0",
        damage: "+1",
        qualities: ["IMPALE","PENETRATING"]
    },
    PAPER_CARTRIDGE: {
        name: "Paper Cartridge",
        group: "BLACKPOWDER",
        ammountSold: 12,
        price: "0/5/0",
        availability: "SCARCE",
        range: "+0",
        damage: "+1",
        qualities: ["IMPALE","PENETRATING","FASTER_RELOAD"]
    },
    AQSHY_INFUSED_POWDER: {
        name: "Aqshy-Infused Powder",
        group: "BLACKPOWDER",
        ammountSold: 12,
        price: "1/0/0",
        availability: "EXOTIC",
        range: "+10",
        damage: "+2",
        qualities: ["IMPALE","PENETRATING"]
    },
    PRECISION_SHOT_AND_POWDER: {
        name: "Precison Shot and Powder",
        group: "BLACKPOWDER",
        ammountSold: 1,
        price: "0/3/0",
        availability: "COMMON",
        range: "+0",
        damage: "+1",
        qualities: ["IMPALE","PENETRATING","PRECISE"]
    },
    IMPROVISED_SHOT_AND_POWDER: {
        name: "Improvised Shot and Powder",
        group: "BLACKPOWDER",
        ammountSold: 1,
        price: "0/0/3",
        availability: "COMMON",
        range: "/2",
        damage: "+0",
        qualities: []
    },
    SMALL_SHOT_AND_POWDER: {
        name: "Small Shot and Powder",
        group: "BLACKPOWDER",
        ammountSold: 12,
        price: "0/3/3",
        availability: "COMMON",
        range: "+0",
        damage: "+0",
        qualities: ["SPREAD_3"]
    },
    SCRAP_AND_POWDER: {
        name: "Scrap and Powder",
        group: "BLACKPOWDER",
        ammountSold: 12,
        price: "0/2/0",
        availability: "COMMON",
        range: "/2",
        damage: "-1",
        qualities: ["SPREAD_3","INFECTED"]
    },
    LARGE_BULLET_AND_POWDER: {
        name: "Large Bullet and Powder",
        group: "BLACKPOWDER",
        ammountSold: 12,
        price: "1/0/0",
        availability: "SCARCE",
        range: "+0",
        damage: "+2",
        qualities: ["IMPALE","IMPACT","PENETRATING"]
    }
};
// Icon Ids
TEW.ICON_ID_GROUP_BASIC = 97;
TEW.ICON_ID_GROUP_CAVALRY = 107;
TEW.ICON_ID_GROUP_FENCING = 96;
TEW.ICON_ID_GROUP_BRAWLING = 105;
TEW.ICON_ID_GROUP_FLAIL = 98;
TEW.ICON_ID_GROUP_PARRY = 111;
TEW.ICON_ID_GROUP_POLE_ARM = 99;
TEW.ICON_ID_GROUP_TWO_HANDED = 122;
TEW.ICON_ID_GROUP_BOW = 102;
TEW.ICON_ID_GROUP_CROSSBOW = 103;
TEW.ICON_ID_GROUP_ENTANGLING = 100;
TEW.ICON_ID_GROUP_SLING = 114;
TEW.ICON_ID_GROUP_THROWING = 106;
TEW.ICON_ID_GROUP_EXPLOSIVES = 118;
TEW.ICON_ID_GROUP_BLACKPOWDER = 115;
TEW.ICON_ID_GROUP_ENGINEERING = 117;
TEW.ICON_ID_GROUP_DEFAULT = 0;


TEW.WEAPON_IDS = Object.keys(TEW.MELEE_WEAPONS).sort((a, b) => a.localeCompare(b))
        .concat(Object.keys(TEW.RANGED_WEAPONS).sort((a, b) => a.localeCompare(b)));
TEW.WEAPONS_ARRAY = Object.entries(TEW.MELEE_WEAPONS).sort((a, b) => a[0].localeCompare(b[0]))
        .concat(Object.entries(TEW.RANGED_WEAPONS).sort((a, b) => a[0].localeCompare(b[0])));
TEW.WEAPONS_ARRAY.forEach(element => {
    switch (element[1].group){
    case "BASIC" :          element[1].iconGroupId = TEW.ICON_ID_GROUP_BASIC; break;
    case "CAVALRY" :        element[1].iconGroupId = TEW.ICON_ID_GROUP_CAVALRY; break;
    case "FENCING" :        element[1].iconGroupId = TEW.ICON_ID_GROUP_FENCING; break;
    case "BRAWLING" :       element[1].iconGroupId = TEW.ICON_ID_GROUP_BRAWLING; break;
    case "FLAIL" :          element[1].iconGroupId = TEW.ICON_ID_GROUP_FLAIL; break;
    case "PARRY" :          element[1].iconGroupId = TEW.ICON_ID_GROUP_PARRY; break;
    case "POLE_ARM" :       element[1].iconGroupId = TEW.ICON_ID_GROUP_POLE_ARM; break;
    case "TWO_HANDED" :     element[1].iconGroupId = TEW.ICON_ID_GROUP_TWO_HANDED; break;
    case "BOW" :            element[1].iconGroupId = TEW.ICON_ID_GROUP_BOW; break;
    case "CROSSBOW" :       element[1].iconGroupId = TEW.ICON_ID_GROUP_CROSSBOW; break;
    case "ENTANGLING" :     element[1].iconGroupId = TEW.ICON_ID_GROUP_ENTANGLING; break;
    case "SLING" :          element[1].iconGroupId = TEW.ICON_ID_GROUP_SLING; break;
    case "THROWING" :       element[1].iconGroupId = TEW.ICON_ID_GROUP_THROWING; break;
    case "EXPLOSIVES" :     element[1].iconGroupId = TEW.ICON_ID_GROUP_EXPLOSIVES; break;
    case "BLACKPOWDER" :    element[1].iconGroupId = TEW.ICON_ID_GROUP_BLACKPOWDER; break;
    case "ENGINEERING" :    element[1].iconGroupId = TEW.ICON_ID_GROUP_ENGINEERING; break;
    default :               element[1].iconGroupId = TEW.ICON_ID_GROUP_DEFAULT; break;
    }
});
