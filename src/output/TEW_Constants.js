var Imported = Imported || {};
Imported.TEW_Constants = true;
var TEW = TEW || {};
TEW.ICONS_IDS = {
    // Item groups
    ITEM_CLOTHES : 154,
    ITEM_FOOD : 265,
    ITEM_TOOLS : 216,
    ITEM_BOOKS : 189,
    ITEM_DRUGS : 219,

    // Item availability
    AVAILABILITY_COMMON : 89,
    AVAILABILITY_SCARCE : 88,
    AVAILABILITY_RARE : 87,
    AVAILABILITY_EXOTIC : 90,

    // Weapon Equipped
    EQUIPPED_MAIN_HAND: 28,
    EQUIPPED_SECOND_HAND: 29,

    // Weapons
    WEAPON_KNIFE: 320,
    WEAPON_SWORD: 321,
    WEAPON_FLAIL: 322,
    WEAPON_AXE: 323,
    WEAPON_WHIP: 324,
    WEAPON_WAND: 325,
    WEAPON_BOW: 326,
    WEAPON_CROSSBOW: 327,
    WEAPON_PISTOL: 328,
    WEAPON_CLAW: 329,
    WEAPON_GAUNTLET: 330,
    WEAPON_SPEAR: 331,
    WEAPON_SCEPTER1: 332,
    WEAPON_SCEPTER2: 333,
    WEAPON_MACE: 334,
    WEAPON_CHAINS: 335,
    WEAPON_ENERGY_SWORD: 336,
    WEAPON_PIPE: 337,
    WEAPON_SLING: 338,
    WEAPON_SHOTGUN: 339,
    WEAPON_RIFLE: 340,
    WEAPON_CHAINSAW: 341,
    WEAPON_FIRE_BALL: 342,
    WEAPON_BREAKER: 343,
    WEAPON_KATANA: 344,
    WEAPON_BOOK: 345, 
    WEAPON_SCYTHE: 346,
    WEAPON_SABER: 347,
    WEAPON_FOIL: 348,
    WEAPON_RAPIER: 349,
    WEAPON_STAFF: 350, 
    WEAPON_BOMB: 351,   
    WEAPON_SHIELD: 352,

    // Armor equipped
    EQUIPPED_ARMOR: 30,

    // Armors
    ARMOR_LIGHT_HEAD_SLOT: 355,
    ARMOR_HEAVY_HEAD_SLOT: 356,
    ARMOR_LIGHT_BODY_SLOT: 360,
    ARMOR_HEAVY_BODY_SLOT: 361,
    ARMOR_LIGHT_LEGS_SLOT: 364,
    ARMOR_HEAVY_LEGS_SLOT: 365,
    ARMOR_LIGHT_ARMS_SLOT: 366,
    ARMOR_HEAVY_ARMS_SLOT: 367,
}
TEW.ARMORS = TEW.ARMORS || {
    SOFT_KIT: {
        name: "Soft Kit",
        icon: TEW.ICONS_IDS.ARMOR_LIGHT_BODY_SLOT,
        group: "SOFT_KIT",
        groupLabel: "Soft kit",
        price: "0/18/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        penalty: [],
        locations: ["ARMS", "BODY", "LEGS"],
        ap: 0,
        qualities: [],
        forbiddenWith: [],
        description: "Description has to be done."
    },
    REINFORCED_SOFT_KIT: {
        name: "Reinforced Soft Kit",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_BODY_SLOT,
        group: "SOFT_KIT",
        groupLabel: "Soft kit",
        price: "2/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        penalty: [],
        locations: ["ARMS", "BODY", "LEGS"],
        ap: 1,
        qualities: ["PARTIAL", "REINFORCED"],
        forbiddenWith: [],
        description: "Description has to be done."
    },
    LEATHER_JACK: {
        name: "Leather Jack",
        icon: TEW.ICONS_IDS.ARMOR_LIGHT_BODY_SLOT,
        group: "BOILED_LEATHER",
        groupLabel: "Boiled leather",
        price: "0/12/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        penalty: [],
        locations: ["ARMS", "BODY"],
        ap: 1,
        qualities: [],
        forbiddenWith: ["CHAINMAIL", "PLATE"],
        description: "Description has to be done."
    },
    LEATHER_JERKIN: {
        name: "Leather Jerkin",
        icon: TEW.ICONS_IDS.ARMOR_LIGHT_BODY_SLOT,
        group: "BOILED_LEATHER",
        groupLabel: "Boiled leather",
        price: "0/10/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        penalty: [],
        locations: ["BODY"],
        ap: 1,
        qualities: [],
        forbiddenWith: ["CHAINMAIL", "PLATE"],
        description: "Description has to be done."
    },
    LEATHER_LEGGINGS: {
        name: "Leather Leggings",
        icon: TEW.ICONS_IDS.ARMOR_LIGHT_LEGS_SLOT,
        group: "BOILED_LEATHER",
        groupLabel: "Boiled leather",
        price: "0/14/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        penalty: [],
        locations: ["LEGS"],
        ap: 1,
        qualities: [],
        forbiddenWith: ["CHAINMAIL", "PLATE"],
        description: "Description has to be done."
    },
    LEATHER_SKULLCAP: {
        name: "Leather Skullcap",
        icon: TEW.ICONS_IDS.ARMOR_LIGHT_HEAD_SLOT,
        group: "BOILED_LEATHER",
        groupLabel: "Boiled leather",
        price: "0/8/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        penalty: [],
        locations: ["HEAD"],
        ap: 1,
        qualities: [],
        forbiddenWith: ["CHAINMAIL", "PLATE"],
        description: "Description has to be done."
    },
    CHAINMAIL_CHAUSSES: {
        name: "Chainmail Chausses",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_LEGS_SLOT,
        group: "CHAINMAIL",
        groupLabel: "Chainmail",
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        penalty: [{ STEALTH: "-10" }],
        locations: ["LEGS"],
        ap: 2,
        qualities: [],
        forbiddenWith: ["BOILED_LEATHER", "PLATE"],
        description: "Description has to be done."
    },
    CHAINMAIL_COAT: {
        name: "Chainmail Coat",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_BODY_SLOT,
        group: "CHAINMAIL",
        groupLabel: "Chainmail",
        price: "3/0/0",
        enc: 4,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        penalty: [{ STEALTH: "-10" }],
        locations: ["ARMS", "BODY"],
        ap: 2,
        qualities: [],
        forbiddenWith: ["BOILED_LEATHER", "PLATE"],
        description: "Description has to be done."
    },
    CHAINMAIL_COIF: {
        name: "Chainmail Coif",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_HEAD_SLOT,
        group: "CHAINMAIL",
        groupLabel: "Chainmail",
        price: "1/0/0",
        enc: 2,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        penalty: [{ PERCEPTION: "-10", STEALTH: "-10" }],
        locations: ["HEAD"],
        ap: 2,
        qualities: ["PARTIAL"],
        forbiddenWith: ["BOILED_LEATHER", "PLATE"],
        description: "Description has to be done."
    },
    CHAINMAIL_SHIRT: {
        name: "Chainmail Shirt",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_BODY_SLOT,
        group: "CHAINMAIL",
        groupLabel: "Chainmail",
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        penalty: [{ STEALTH: "-10" }],
        locations: ["BODY"],
        ap: 2,
        qualities: [],
        forbiddenWith: ["BOILED_LEATHER", "PLATE"],
        description: "Description has to be done."
    },
    BRIGANDINE_JACK: {
        name: "Brigandine Jack",
        icon: TEW.ICONS_IDS.ARMOR_LIGHT_BODY_SLOT,
        group: "BRIGANDINE",
        groupLabel: "Brigandine",
        price: "3/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        penalty: [],
        locations: ["ARMS", "BODY"],
        ap: 2,
        qualities: ["OVERCOAT"],
        forbiddenWith: ["PLATE"],
        description: "Description has to be done."
    },
    BRIGANDINE_JERKIN: {
        name: "Brigandine Jerkin",
        icon: TEW.ICONS_IDS.ARMOR_LIGHT_BODY_SLOT,
        group: "BRIGANDINE",
        groupLabel: "Brigandine",
        price: "2/0/0",
        enc: 2,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        penalty: [],
        locations: ["BODY"],
        ap: 2,
        qualities: ["OVERCOAT"],
        forbiddenWith: ["PLATE"],
        description: "Description has to be done."
    },
    BREASTPLATE: {
        name: "Breastplate",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_BODY_SLOT,
        group: "BREASTPLATE",
        groupLabel: "Breastplate",
        price: "10/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        penalty: [],
        locations: ["BODY"],
        ap: 3,
        qualities: ["IMPENETRABLE", "OVERCOAT", "WEAKPOINTS"],
        forbiddenWith: ["PLATE"],
        description: "Description has to be done."
    },
    BRACERS: {
        name: "Bracers",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_ARMS_SLOT,
        group: "PLATE",
        groupLabel: "Plate",
        price: "8/0/0",
        enc: 3,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        penalty: [],
        locations: ["ARMS"],
        ap: 3,
        qualities: ["IMPENETRABLE", "REQUIRES_KIT", "WEAKPOINTS"],
        forbiddenWith: ["BOILED_LEATHER", "CHAINMAIL", "BRIGANDINE"],
        description: "Description has to be done."
    },
    OPEN_HELM: {
        name: "Open Helm",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_HEAD_SLOT,
        group: "PLATE",
        groupLabel: "Plate",
        price: "2/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        penalty: [{ PERCEPTION: "-10" }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["PARTIAL"],
        forbiddenWith: ["BOILED_LEATHER", "CHAINMAIL", "BRIGANDINE"],
        description: "Description has to be done."
    },
    PLATE_LEGGINGS: {
        name: "Plate Leggings",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_LEGS_SLOT,
        group: "PLATE",
        groupLabel: "Plate",
        price: "10/0/0",
        enc: 3,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        penalty: [{ STEALTH: "-10" }],
        locations: ["LEGS"],
        ap: 3,
        qualities: ["IMPENETRABLE", "REQUIRES_KIT", "WEAKPOINTS"],
        forbiddenWith: ["BOILED_LEATHER", "CHAINMAIL", "BRIGANDINE"],
        description: "Description has to be done."
    },
    GREAT_HELM: {
        name: "Great Helm",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_HEAD_SLOT,
        group: "PLATE",
        groupLabel: "Plate",
        price: "2/0/0",
        enc: 2,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["IMPENETRABLE", "WEAKPOINTS"],
        forbiddenWith: ["BOILED_LEATHER", "CHAINMAIL", "BRIGANDINE"],
        description: "The Great Helm is the archetypal form of a fully enclosed metal helmet. They are considered old fashioned in Tilea and the Empire but are still common in Bretonnia. Early examples of these helmets had a square top. Later designs tend to have a conical top which lessens the impact of hammers and swords."
    },
    BASCINET: {
        name: "Bascinet",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_HEAD_SLOT,
        group: "PLATE",
        groupLabel: "Plate",
        price: "3/0/0",
        enc: 2,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["IMPENETRABLE", "VISOR", "WEAKPOINTS"],
        forbiddenWith: ["BOILED_LEATHER", "CHAINMAIL", "BRIGANDINE"],
        description: "The Bascinet typically incorporates a conical visor, leading it to be known as a ‘pigs-snout’ helmet by many soldiers. This design provides additional protection against missile fire, as slingshots and arrows are deflected by the conical visor. If missile fire strikes the wearer of a Bascinet, and originates from in front of the wearer, then the helmet provides 4 APs rather than 3."
    },
    ARMET: {
        name: "Armet",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_HEAD_SLOT,
        group: "PLATE",
        groupLabel: "Plate",
        price: "3/0/0",
        enc: 2,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["IMPENETRABLE", "VISOR", "WEAKPOINTS"],
        forbiddenWith: ["BOILED_LEATHER", "CHAINMAIL", "BRIGANDINE"],
        description: "The Armet is a Tilean design which fits closely on the head, being narrower around the neck. To facilitate the snug fit the helmet has an integral mechanism that must be worked to open and close it. The exacting design of the Armet means that it can withstand blows that might damage other helmets. Every time the helmet might lose a point of AP, roll on the Armet Damage table."
    }, 
    SALLET: {
        name: "Sallet",
        icon: TEW.ICONS_IDS.ARMOR_HEAVY_HEAD_SLOT,
        group: "PLATE",
        price: "4/0/0",
        enc: 2,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        penalty: [{
            PERCEPTION: "-20"
        }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["IMPENETRABLE","VISOR","WEAKPOINTS"],
        forbiddenWith: ["BOILED_LEATHER","CHAINMAIL","BRIGANDINE"],
        description: "The Sallet is typified by having heavy plates projecting over the neck to the back, and being combined with separate pieces, either a gorget or bevor, to provide protection to the throat, chin, and face. A wearer of a Sallet who takes a Critical Hit to the head will take 1 less Wound from the Critical Hit than they otherwise would."
    }
};

// TODO order in inventory ?
TEW.ARMOR_IDS = Object.keys(TEW.ARMORS).sort((a, b) => a.localeCompare(b));
TEW.ARMORS_ARRAY = Object.entries(TEW.ARMORS).sort((a, b) => a[0].localeCompare(b[0]));
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
TEW.ITEMS = TEW.ITEMS || {
    AMULET: {
        name: "Amulet",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/0/2",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "A brass amulent representing Sigmar."
    },
    BOOTS: {
        name: "Boots",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/5/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Sturdy boots to keep your feet dry."
    },
    CLOTHING: {
        name: "Clothing",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/6/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Common clothes."
    },
    COAT: {
        name: "Coat",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/18/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Protects you against the elements."
    },
    COSTUME: {
        name: "Costume",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "1/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Expensive clothes to shine in society."
    },
    COURTLY_GARB: {
        name: "Courtly Garb",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "12/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Nobles’ garb features embellishments such as lace cuffs & collars, excessive high-quality fabric and pointed shoes."
    },
    FACE_POWDER: {
        name: "Face Powder",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/10/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Stylish makeup for the noblefolk."
    },
    GLOVES: {
        name: "Gloves",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/4/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "To keep your hands dry and warm."
    },
    HAT: {
        name: "Hat",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/4/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Fine quality hats are status symbols in the Empire's towns and cities. The more flamboyant the hat, the better."
    },
    HOOD: {
        name: "Hood",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/5/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Usefull to keep your head dry, or to hide it."
    },
    JEWELLERY: {
        name: "Jewellery",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "8/0/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Nice jewels with various gemstones."
    },
    PERFUME: {
        name: "Perfume",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/10/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Smells nicer than most people."
    },
    PINS: {
        name: "Pins",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 6,
        price: "0/10/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Small silver pins."
    },
    RELIGIOUS_SYMBOL: {
        name: "Religious Symbol",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/6/8",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Small silver symbol representing a god."
    },
    ROBES_PRACTICAL: {
        name: "Practical Robes",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "1/0/0",
        enc: 1,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "These costumes are inexpensive, comfortable, and relatively plain. A wizard wearing practical robes may even go unrecognised in many situations. Gives +1 SL to any Channeling test."
    },
    ROBES_STANDARD: {
        name: "Standard Robes",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "8/0/0",
        enc: 2,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "These costumes are complex and typically include heavy coats or cloaks and distinctive headwear. Gives +2 SL to any Channeling test."
    },
    ROBES_ELABORATE: {
        name: "Elaborate Robes",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "30/0/0",
        enc: 4,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "These costumes are heavy and impractical, often incorporating bulky accessories and reams of cloth woven from magically infused thread. Anyone wearing these robes will be instantly recognised as a wizard. Gives +3 SL to any Channeling test."
    },
    SCEPTRE: {
        name: "Sceptre",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "8/0/0",
        enc: 1,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "The highest-ranking legal officials carry sceptres to indicate their status."
    },
    SHOES: {
        name: "Shoes",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/5/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Nice shoes to keep your feet dry."
    },
    SIGNET_RING: {
        name: "Signet Ring",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "5/0/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "Gold ring with engraved stamp."
    },
    TATOO: {
        name: "Tatoo",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "0/4/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Definitive mark made with totally clean tools."
    },
    UNIFORM: {
        name: "Uniform",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "1/2/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Outfit with the city's coat of arms."
    },
    WALKING_CANE: {
        name: "Walking Cane",
        group: "CLOTHES",
        groupIcon: TEW.ICONS_IDS.ITEM_CLOTHES,
        groupLabel: "Clothes",
        nb: 1,
        price: "3/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Polished wooden canes with metal caps are status symbols amongst wealthier townsfolk."
    },
    ALE_PINT: {
        name: "Ale, pint",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/0/3",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Pint of the finest ale you can find, not really good though."
    },
    ALE_KEG: {
        name: "Ale, keg",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/3/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Keg full of the finest ale you can find, not really good though."
    },
    BUGMANS_ALE_PINT: {
        name: "Bugman's XXXXXX Ale, pint",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/0/9",
        enc: 0,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "Merchants travel across the Old World to purchase this potent Dwarfen ale from the famous brewery founded by Josef Bugman."
    },
    FOOD_ONE_DAY: {
        name: "Food, Groceries/day",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/0/10",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Enough food to feed one person for one day. Needs to be prepared."
    },
    MEAL_INN: {
        name: "Meal, inn",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/1/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Hot meal served in a wooden plate."
    },
    RATIONS_ONE_DAY: {
        name: "Rations, one day",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/2/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Food to go for one person for one day."
    },
    ROOM_COMMON: {
        name: "Common Room/night",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/0/10",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "One night in the common room for one person. Guests sleeping in common rooms should be wary of thieves."
    },
    ROOM_PRIVATE: {
        name: "Private Room/night",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/10/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "One night in a private room. Accommodates 2 guests."
    },
    SPIRITS_PINT: {
        name: "Spirits, pint",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/2/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "One pint of fine spirits."
    },
    STABLES_NIGHT: {
        name: "Stables/night",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/0/10",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Room for one horse in the stables fon one night."
    },
    WINE_BOTTLE: {
        name: "Wine Bottle",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/0/10",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "A bottle of fine wine."
    },
    WINE_GLASS: {
        name: "Wine Glass",
        group: "FOOD",
        groupIcon: TEW.ICONS_IDS.ITEM_FOOD,
        groupLabel: "Food",
        nb: 1,
        price: "0/0/4",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "A glass of fine wine."
    },
    ABACUS: {
        name: "Abacus",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/3/4",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Mechanical tool facilitating calculus."
    },
    ANIMAL_TRAP: {
        name: "Animal Trap",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/2/6",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Used to catch animals like wolves or rabbits."
    },
    ANTITOXIN_KIT: {
        name: "Antitoxin Kit",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "3/0/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Contains a small knife, herbs, and a jar of leeches. A successful Heal Test with an antitoxin kit removes all Poisoned Conditions. Treatment takes at least two Rounds."
    },
    BOAT_HOOK: {
        name: "Boat Hook",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/5/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Tool used to catch boats from shore."
    },
    BROOM: {
        name: "Broom",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/0/10",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "It's a broom, nothing more."
    },
    BUCKET: {
        name: "Bucket",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/2/6",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Can be used to move liquids."
    },
    CHISEL: {
        name: "Chisel",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/4/2",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Little tool used to scult stone."
    },
    COMB: {
        name: "Comb",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/0/10",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Used to brush your hair."
    },
    CROWBAR: {
        name: "Crowbar",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/2/6",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Metal bar that can be used as an improvised weapon."
    },
    CRUTCH: {
        name: "Crutch",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/3/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Helps you walk."
    },
    DISGUISE_KIT: {
        name: "Disguise Kit",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/6/6",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Contains enough props for four disguises and also materials for changing your appearance used by those with the Entertain (Acting) Skill."
    },
    EAR_PICK: {
        name: "Ear Pick",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/2/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "To clean your ears."
    },
    FISH_HOOKS: {
        name: "Fish Hooks",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 12,
        price: "0/1/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Can be used to catch fish."
    },
    FLOOR_BRUSH: {
        name: "Floor Brush",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/1/6",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Little brush, often used in rich houses."
    },
    GAVEL: {
        name: "Gavel",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "1/0/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Little hammer used by judges and magistrates."
    },
    HAMMER: {
        name: "Hammer",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/3/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Tool used to punch nails."
    },
    HAND_MIRROR: {
        name: "Hand Mirror",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "1/1/6",
        enc: 0,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "Little mirror used by nobles."
    },
    HOE: {
        name: "Hoe",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/4/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Farming tool."
    },
    KEY: {
        name: "Key",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/1/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "No idea what it opens."
    },
    LOCK_PICK: {
        name: "Lock Pick",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/15/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "An assortment of small, variously-shaped tools needed to use the Pick Lock Skill without penalty."
    },
    MANACLES: {
        name: "Manacles",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/18/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Prisoners trying to break out of manacles suffer 1 Wound and must pass a Very Hard (-30) Strength Test."
    },
    MOP: {
        name: "Mop",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/1/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Used to clean the floor."
    },
    NAILS: {
        name: "Nails",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 12,
        price: "0/0/2",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Cna be punched by a hammer."
    },
    PAINT_BRUSH: {
        name: "Paint Brush",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/4/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Brush used by artists to paint on canvas."
    },
    PESTLE_AND_MORTAR: {
        name: "Pestle and Mortar",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/14/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Tools used by an apothecary."
    },
    PICK: {
        name: "Pick",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/18/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Tool used by minors."
    },
    POLE: {
        name: "Pole (3 yards)",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/8/0",
        enc: 3,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "A long pole used for barging; counts as an Improvised Weapon."
    },
    QUILL_PEN: {
        name: "Quill Pen",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/3/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Expensive writing tool."
    },
    RAKE: {
        name: "Rake",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/4/6",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Usefull to removes leaves from your garden."
    },
    READING_LENS: {
        name: "Reading Lens",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "3/0/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "Glass lenses with handles provide a +20 bonus to Read/Write Tests for deciphering tiny or unintelligible writing. Perception Tests to search for fine details such as secret doors or compartments also receive a +20 bonus."
    },
    SAW: {
        name: "Saw",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/6/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Tool used to cut wood."
    },
    SICKLE: {
        name: "Sickle",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "1/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Tool used by herborists to collect herbs."
    },
    SPADE: {
        name: "Spade",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/8/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Farming tool."
    },
    SPIKE: {
        name: "Spike",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/1/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Great spike."
    },
    STAMP: {
        name: "Stamp, engraved",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "5/0/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Stamp engraved with heraldry."
    },
    TONGS: {
        name: "Tongs, steel",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/16/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Usefull to spread laundry."
    },
    TELESCOPE: {
        name: "Telescope",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "5/0/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "Tool used to watch the stars."
    },
    TWEEZERS: {
        name: "Tweezers",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "0/1/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Usefull."
    },
    WRITING_KIT: {
        name: "Writing Kit",
        group: "TOOLS",
        groupIcon: TEW.ICONS_IDS.ITEM_TOOLS,
        groupLabel: "Tools",
        nb: 1,
        price: "2/0/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Contains a quill pen, inkpot, and ink blotter."
    },
    APOTHECARY_BOOK: {
        name: "Apothecary Book",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "8/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Apothecary books are usually hand-written. A basic apothecary book contains ingredient descriptions and diagrammed instructions for brewing processes. Formulas for Digestive Tonics, Healing Draughts, and Vitality Draughts are usually included. Advanced texts contain formulas for more exotic draughts."
    },
    ART_BOOK: {
        name: "Art Book",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "5/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "Plays, poems, and ballads or perhaps musical arrangements scribbled on loose parchment, Art books come inmany forms. They also include treatises on perspective, form, and style, often written by famous painters or sculptors — such as Leonardo da Miragliano — for mass printing."
    },
    CRYPTOGRAPHY_BOOK: {
        name: "Cryptography Book",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "8/0/0",
        enc: 1,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "Where individual ciphers and encryption keys can be written on a single page or two, Cryptography books are often hand-scribed codices dealing with mathematics, numerology, and polyalphabetic encryption."
    },
    ENGINEER_BOOK: {
        name: "Engineer Book",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "3/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "The majority of engineering books are pressprinted. Engineering is an advanced science in the Empire, largely due to the Imperial Engineers’ School in Altdorf and the Dwarf Engineers’ Guild. Because of this, Engineering texts are often authored, co-authored, or edited by Dwarfs."
    },
    LAW_BOOK: {
        name: "Law Book",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "15/0/0",
        enc: 1,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "Laws vary considerably from one region to the next. Cities with printing presses compile legislation in bound volumes, whereas judges in smaller towns often rely on documents handwritten centuries ago. Law books used by travelling lawyers or judges often combine printed and written pages from different towns across the Empire, collated and bound together within the same cover."
    },
    MAGIC_GRIMOIRE: {
        name: "Magic Grimoire",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "20/0/0",
        enc: 1,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "Spell grimoires are usually scribed by wizards, and their covers are often secured with locks. Sometimes grimoires are even protected by magical alarms or wards. Carrying a spell grimoire is punishable as heresy unless the owning wizard is licensed by the Colleges of Magic."
    },
    MEDICINE_BOOK: {
        name: "Medicine Book",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "15/0/0",
        enc: 1,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "Medical texts can either be scribed or pressprinted, depending on the authoring physician’s prestige. Illuminations are common, and usually include detailed autopsy drawings and procedural diagrams."
    },
    RELIGION_BOOK: {
        name: "Religion Book",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "1/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Religions books come in all forms in the Empire, a realm renowned for its religious observances. There is a eager market for the most popular texts, most of which are cheaply produced by printing presses."
    },
    GUILD_LICENSE: {
        name: "Guild License",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "0/0/0",
        enc: 0,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "Guild licenses are usually printed on single sheets of parchment, stamped with an official seal, and signed by the local guild master. Guild licenses are not purchased; instead, they are granted to guild members according to each guild’s traditions and laws."
    },
    LEAFLET: {
        name: "Leaflet",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "0/1/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "Leaflets contain usefull information about the local city and customs."
    },
    LEGAL_DOCUMENT: {
        name: "Legal Document",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "0/3/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "A simple legal document such as a will, IOU or letter of intent."
    },
    MAP: {
        name: "Map",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "3/0/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "A map of the surronding lands."
    },
    PARCHMENT: {
        name: "Parchment",
        group: "BOOKS",
        groupIcon: TEW.ICONS_IDS.ITEM_BOOKS,
        groupLabel: "Books",
        nb: 1,
        price: "0/1/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        description: "A piece of parchment."
    },
    BLACK_LOTUS: {
        name: "Black Lotus",
        group: "DRUGS",
        groupIcon: TEW.ICONS_IDS.ITEM_DRUGS,
        groupLabel: "Drugs",
        nb: 1,
        price: "20/0/0",
        enc: 0,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "This deadly plant grows in Southland jungles and is used for blade venom. Victims who suffer at least 1 Wound from a sap-coated blade immediately take 2 Poisoned Conditions. Resisted with a Difficult (–10) Endurance Test."
    },
    HEARTKILL: {
        name: "Heartkill",
        group: "DRUGS",
        groupIcon: TEW.ICONS_IDS.ITEM_DRUGS,
        groupLabel: "Drugs",
        nb: 1,
        price: "40/0/0",
        enc: 0,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "Combining the venoms from an Amphisbaena (a rare, two-headed serpent) and a Jabberslythe produces an odourless, colourless poison. When ingested, the deadly mixture inflicts 4 Poisoned Conditions. Resisted with a Difficult (–10) Endurance Test."
    },
    MAD_CAP_MUSHROOMS: {
        name: "Mad Cap Mushrooms",
        group: "DRUGS",
        groupIcon: TEW.ICONS_IDS.ITEM_DRUGS,
        groupLabel: "Drugs",
        nb: 1,
        price: "5/0/0",
        enc: 0,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        description: "These hallucinogenic mushrooms are eaten by Goblin fanatics before battle. They induce a berserker rage, adding +10 Strength, +4 Wounds, and the Frenzy Talent. When the effect wears off, the user loses 1d10 Wounds. Non- Greenskins must also pass a Challenging (+0) Endurance Test or contract a Minor Infection. Duration: Active when chewed plus an additional 2d10 minutes."
    },
    MANDRAKE_ROOT: {
        name: "Mandrake Root",
        group: "DRUGS",
        groupIcon: TEW.ICONS_IDS.ITEM_DRUGS,
        groupLabel: "Drugs",
        nb: 1,
        price: "1/0/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "This highly-addictive deliriant grows under gallows, and is chewed to keep an unquiet mind still. Users must pass a Willpower Test every Round to perform an Action or a Move (choose one); further, Movement is halved. However, Cool Tests receive a bonus of +20. Duration: Active when chewed plus an additional 1d10×10 minutes."
    },
    MOONFLOWER: {
        name: "Moonflower",
        group: "DRUGS",
        groupIcon: TEW.ICONS_IDS.ITEM_DRUGS,
        groupLabel: "Drugs",
        nb: 1,
        price: "5/0/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "This tranquilliser is a dried moss which grows only on leaves in the Laurelorn forest. Elves use Moonflower to treat Black Plague, granting a bonus of +30 to any associated Tests for Elves to resist the disease, otherwise it has no effect on their species. Others can inhale vapours from boiling the moss and if they fail a Very Hard (–30) Willpower Test will gain an Unconscious Condition; if passed, they receive a bonus of +20 to Cool Tests and gain a Fatigued Condition. Moonflower is used by the most expensive Physicians as an anesthetic. Duration: 1d10+5 hours."
    },
    RANALDS_DELIGHT: {
        name: "Ranald's Delight",
        group: "DRUGS",
        groupIcon: TEW.ICONS_IDS.ITEM_DRUGS,
        groupLabel: "Drugs",
        nb: 1,
        price: "0/18/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        description: "This highly-addictive stimulant is a synthetic compound made from sulphur, mercury and other elements. Inhaling the powder provides a bonus of +1 to Movement, and +10 to WS, S, T, and Agi. This last for 3 hours, after which the user suffers a penalty of –2 Movement and –20 on Weapon Skill, Strength, Toughness, and Agility. Duration: 1 day."
    },
    SPIT: {
        name: "Spit",
        group: "DRUGS",
        groupIcon: TEW.ICONS_IDS.ITEM_DRUGS,
        groupLabel: "Drugs",
        nb: 1,
        price: "1/5/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "Extracted from Chameleoleeches found in the marshes of the Empire, this extraordinarily powerful hallucinogen brings visions of something deeply desired, such as a lost lover, a dead friend, or a missing child. Called Spit on the streets, it’s popular with those lost to despair. Upon exposure, you must pass a Very Hard (–30) Toughness Test or be lost to a fully real fantasy, which is a matter for the GM to handle. Duration: 1d10 minutes."
    },
    WEIRDROOT: {
        name: "Weirdroot",
        group: "DRUGS",
        groupIcon: TEW.ICONS_IDS.ITEM_DRUGS,
        groupLabel: "Drugs",
        nb: 1,
        price: "0/4/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        description: "One of the most common street-drugs in the Empire, Weirdroot is chewed, bringing a sense of euphoria and pleasant hallucinations, which some suggest may be connected to the Winds of Magic. The drug gives a +10 bonus to Toughness and Willpower Tests, but a penalty of –10 to Agility, Initiative, and Intelligence Tests. Duration: Active when chewed plus an additional 1d10×10 minutes."
    }
};

TEW.ITEM_IDS = Object.keys(TEW.ITEMS);
TEW.ITEMS_ARRAY = Object.entries(TEW.ITEMS).sort((a, b) => a[0].localeCompare(b[0]));
TEW.NPCs = TEW.NPCs || {
    GUSTAV_FONDLEBURGER: {
        name: "Gustav Fondleburger",
        stats: [28,32,41,38,34,35,39,29,52],
        wounds: 13,
        move: 4,
        status: "SILVER 2",
        comps: [
            {
                "HAGGLE": 10,
                "INTUITION": 14,
                "RANGED_BLACK_POWDER": 10
            }
        ],
        talents: ["READ_WRITE", "STURDY"],
        traits: [],
        weapons: ["BLUNDERBUSS"],
        armor: [],
        trappings: [
            {
                "SMALL_SHOT_AND_POWDER": 20
            }
        ],
        spells: [],
        prayers: []
    },
    HERPIN_STIGGERWURT: {
        name: "Herpin Stiggerwurt",
        stats: [35,32,45,45,36,39,32,24,28,25],
        wounds: 14,
        move: 4,
        status: "BRASS 3",
        comps: [
            {
                "MELEE_BASIC": 10,
                "TRADE_BREWING": 17
            }
        ],
        talents: ["READ_WRITE", "STURDY"],
        traits: [],
        weapons: ["DAGGER"],
        armor: [],
        trappings: [],
        spells: [],
        prayers: []
    },
    GUNNAR_ANG_HULTZ: {
        name: "Gunnar and Hultz",
        stats: [32,42,31,34,36,44,29,27,30,27],
        wounds: 12,
        move: 4,
        status: "SILVER 2",
        comps: [
            {
                "ANIMAL_CARE": 10,
                "CHARM_ANIMAL": 10,
                "CONSUME_ALCOHOL": 10,
                "DRIVE": 30,
                "RANGED_BLACKPOWDER": 10
            }
        ],
        talents: [],
        traits: [],
        weapons: ["BLUNDERBUSS", "SWORD"],
        armor: ["LEATHER_JACK", "LEATHER_LEGGINGS", "LEATHER_SKULLCAP"],
        trappings: [
            {
                "COAT": 1,
                "SMALL_SHOT_AND_POWDER": 20
            }
        ],
        spells: [],
        prayers: []
    },
    ISODE_VON_STRUDELDORF: {
        name: "Isolde Von Strudeldorf",
        stats: [36,32,31,32,35,31,43,30,33,28],
        wounds: 12,
        move: 4,
        status: "GOLD 1",
        comps: [
            {
                "INTIMIDATE": 15,
                "LEADERSHIP": 14,
                "LORE_HERALDRY": 10,
                "PLAY_LUTE": 15
            }
        ],
        talents: ["ETIQUETTE_NOBLES", "LUCK", "NOBLE_BLOOD", "READ_WRITE"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: [],
        spells: [],
        prayers: []
    },
    JANNA_ELLEINER: {
        name: "Janna Elleiner",
        stats: [25,24,34,39,43,43,34,27,25,26],
        wounds: 11,
        move: 4,
        status: "SILVER 3",
        comps: [
            {
                "INTUITION": 11,
                "PERCEPTION": 15
            }
        ],
        talents: ["BENEATH_NOTICE", "ETIQUETTE_SERVANTS", "WELL_PREPARED"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: [],
        spells: [],
        prayers: []
    },
    MARIE_SCHUTZ: {
        name: "Marie Schutz",
        stats: [55,32,56,48,45,54,43,30,33,26],
        wounds: 16,
        move: 4,
        status: "SILVER 3",
        comps: [
            {
                "DODGE": 10,
                "ENDURANCE": 15,
                "HEAL": 10,
                "INTIMIDATE": 15,
                "INTUITION": 15,
                "MELEE_BASIC": 15,
                "MELEE_BRAWLING": 10
            }
        ],
        talents: ["JUMP_UP", "RELENTLESS", "STRIKE_MIGHTY_BLOW", "STRIKE_TO_STUN", "TENACIOUS", "VERY_STRONG"],
        traits: [],
        weapons: ["SWORD", "KNUCKLEDUSTERS"],
        armor: ["LEATHER_JACK", "LEATHER_LEGGINGS", "LEATHER_SKULLCAP"],
        trappings: [],
        spells: [],
        prayers: []
    },
    ERNST_HEIDLEMANN: {
        name: "Ernst Heidlemann",
        stats: [30,32,30,26,31,34,44,33,30,29],
        wounds: 10,
        move: 4,
        status: "SILVER 2",
        comps: [
            {
                "CHANNELLING_DHAR": 7,
                "DODGE": 6,
                "INTIMIDATE": 5,
                "INTUITION": 5,
                "LANGUAGE_CLASSICAL": 10,
                "LANGUAGE_MAGICK": 15,
                "LORE_MAGICK": 9,
                "PERCEPTION": 5
            }
        ],
        talents: ["PETTY_MAGICK", "READ_WRITE"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: [],
        spells: ["ROT", "SHOCK"],
        prayers: []
    },
    PHILLIPE_DESCARTES: {
        name: "Phillipe Descartes",
        stats: [30,32,30,26,31,34,44,33,30,29],
        wounds: 10,
        move: 4,
        status: "BRASS 1",
        comps: [
            {
                "ATHLETICS": 26,
                "CLIMB": 32,
                "CHARM": 15,
                "CONSUME_ALCOHOL": 38,
                "COOL": 30,
                "DODGE": 26,
                "ENDURANCE": 27,
                "GAMBLE": 17,
                "GOSSIP": 15,
                "HEAL": 6,
                "HAGGLE": 15,
                "INTIMIDATE": 22,
                "INTUITION": 19,
                "LANGUAGE_BATTLE": 16,
                "LEADERSHIP": 20,
                "MELEE_BRAWLING": 17,
                "MELEE_BASIC": 27,
                "PERCEPTION": 24,
                "PLAY_DRUM": 1,
                "OUTDOOR_SURVIVAL": 11,
                "RANGED_BLACKPOWDER": 28,
                "SLEIGHT_OF_HAND": 20
            }
        ],
        talents: ["ATTRACTIVE", "ALLEY_CAT", "CARD_SHARP", "COMBAT_AWARE", "DICEMAN", "DRILLED", "ETIQUETTE_SOLDIERS", "RAPID_RELOAD", "WAR_LEADER"],
        traits: [],
        weapons: ["PISTOL", "SWORD"],
        armor: [],
        trappings: [
            {
                "BULLET_AND_POWDER": 30,
                "DICE_ SET": 2,
                "LOADED_DICE_SET": 1,
                "PACK_OF_MARKED_CARDS": 1,
                "SILVER": 49,
                "BRASS": 67
            }
        ],
        spells: [],
        prayers: []
    }
}
TEW.SPELLS = TEW.SPELLS || {
    AETHYRIC_ARMOUR: {
        name: "Aethyric Armour",
        type: "SPELL",
        domain: "ARCANE",
        cn: 2,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You gain +1 Armour Point to all Hit Locations as you wrap yourself in a protective swathe of magic."
    },
    AETHYRIC_ARMS: {
        name: "Aethyric Arms",
        type: "SPELL",
        domain: "ARCANE",
        cn: 2,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You create a melee weapon with a Damage equal to your WILLpower Bonus. This may take any form, and so use any Melee Skill you may possess. The weapon counts as Magical."
    },
    ARROW_SHIELD: {
        name: "Arrow Shield",
        type: "SPELL",
        domain: "ARCANE",
        cn: 3,
        range: {
            type: "SELF"
        },
        target: {
            type: "AOE",
            distance: "WILL_BONUS"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "Any missiles containing organic matter, such as arrows with wooden shafts, are automatically destroyed if they pass within the Area of Effect, causing no damage to their target. Missiles comprising only inorganic matter, such as throwing knives or pistol shots, are unaffected."
    },
    BLAST: {
        name: "Blast",
        type: "SPELL",
        domain: "ARCANE",
        cn: 4,
        range: {
            type: "WILL"
        },
        target: {
            type: "AOE",
            distance: "WILL_BONUS"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You channel magic into an explosive blast. This is a magic missile with Damage +3 that targets everyone in the Area of Effect."
    },
    BOLT: {
        name: "Bolt",
        type: "SPELL",
        domain: "ARCANE",
        cn: 4,
        range: {
            type: "WILL"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You channel magic into a damaging bolt. Bolt is a magic missile with a Damage of +4."
    },
    BREATH: {
        name: "Breath",
        type: "SPELL",
        domain: "ARCANE",
        cn: 4,
        range: {
            type: "ONE"
        },
        target: {
            type: "SPECIAL"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You immediately make a Breath attack, as if you had spent 2 Advantage to activate the Breath Creature Trait. Breath is a magic missile with a Damage equal to your Toughness Bonus. The GM decides which type of Breath attack best suits your Arcane Magic Talent."
    },
    CHAIN_ATTACK: {
        name: "Chain Attack",
        type: "SPELL",
        domain: "ARCANE",
        cn: 6,
        range: {
            type: "WILL"
        },
        target: {
            type: "SPECIAL"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You channel a twisting spur of rupturing magic into your target. This is a magic missile with a Damage of +4. If Chain Attack reduces a target to 0 Wounds, it leaps to another target within the spell’s initial range, and within WILLpower Bonus yards of the previous target, inflicting the same Damage again. It may leap a maximum number of times equal to your WILLpower Bonus. For every +2 SL achieved, it may chain to an additional target."
    },
    CORROSIVE_BLOOD: {
        name: "Bolt",
        type: "SPELL",
        domain: "ARCANE",
        cn: 4,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You infuse yourself with magic, lending your blood a fearsome potency. You gain the Corrosive Blood Creature Trait."
    },
    DARK_VISION: {
        name: "Dark Vision",
        type: "SPELL",
        domain: "ARCANE",
        cn: 4,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You boost your Second Sight to assist your mundane senses. While the spell is active, gain the Dark Vision Creature Trait."
    },
    DISTRACTING: {
        name: "Distracting",
        type: "SPELL",
        domain: "ARCANE",
        cn: 4,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You wreathe yourself in magic, which swirls around you, distracting your foes. While the spell is active, gain the Distracting Creature Trait."
    },
    DOME: {
        name: "Dome",
        type: "SPELL",
        domain: "ARCANE",
        cn: 7,
        range: {
            type: "SELF"
        },
        target: {
            type: "AOE",
            distance: "WILL_BONUS"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You create a dome of magical energy overhead, blocking incoming attacks. Anyone within the Area of Effect gains the Ward (6+) Creature Trait against magical or ranged attacks originating outside the dome. Those within may attack out of the dome as normal, and the dome does not impede movement."
    },
    DROP: {
        name: "Drop",
        type: "SPELL",
        domain: "ARCANE",
        cn: 1,
        range: {
            type: "WILL"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You channel magic into an object being held by an opponent. This could be a weapon, a rope, or someone’s hand. Unless a Challenging (+0) Dexterity Test is passed, the item is dropped. For every +2 SL you may impose an additional –10 on the Dexterity Test."
    },
    ENTANGLE: {
        name: "Entangle",
        type: "SPELL",
        domain: "ARCANE",
        cn: 3,
        range: {
            type: "WILL"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "SPECIAL"
        },
        desc: "Using magic, you entrap your target, wrapping them in whatever suits your Lore: vines, shadows, their own clothing… Your target gains one Entangled Condition with a Strength equal to your Intelligence. For every +2 SL, you may give the target +1 additional Entangled Condition. The spell lasts until all Entangled Conditions are removed."
    },
    FEARWOME: {
        name: "Fearsome",
        type: "SPELL",
        domain: "ARCANE",
        cn: 3,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "Shrouding yourself in magic, you become fearsome and intimidating. Gain Fear 1. For every +3 SL, you may increase your Fear value by one."
    },
    MAGIC_SHIELD: {
        name: "Magic Shield",
        type: "SPELL",
        domain: "ARCANE",
        cn: 4,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You encase yourself in bands of protective magic. While the spell is active, add +Willpower Bonus SL to any dispel attempts you make."
    },
    MUNDANE_AURA: {
        name: "Mundane Aura",
        type: "SPELL",
        domain: "ARCANE",
        cn: 4,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL",
            multiplier: 10
        },
        desc: "You drain all the Winds of Magic from within your body and your possessions, removing any magical aura. For the duration of the spell you appear mundane to the Magical Sense Talent and similar. You effectively have no magical ability and your magical nature cannot be detected by any means. While this spell is in effect, you cannot cast any other spells. Mundane Aura is immediately dispelled if you make a Channelling Test."
    },
    PUSH: {
        name: "Push",
        type: "SPELL",
        domain: "ARCANE",
        cn: 6,
        target: {
            type: "SELF"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "All living creatures within Willpower Bonus yards are pushed back your Willpower Bonus in yards and gain the Prone Condition. If this brings them into contact with a wall or other large obstacle, they take Damage equal to the distance travelled in yards. For every +2 SL, you may push creatures back another Willpower Bonus in yards."
    },
    TELEPORT: {
        name: "Teleport",
        type: "SPELL",
        domain: "ARCANE",
        cn: 5,
        target: {
            type: "SELF"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "Using magic, you can teleport up to your Willpower Bonus in yards. This movement allows you to traverse gaps, avoid perils and pitfalls, and ignore obstacles. For every +2 SL you may increase the distance travelled by your Willpower Bonus in yards."
    },
    TERRIFYING: {
        name: "Terrifying",
        type: "SPELL",
        domain: "ARCANE",
        cn: 7,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You gain the Terror (1) Creature Trait."
    },
    WARD: {
        name: "Ward",
        type: "SPELL",
        domain: "ARCANE",
        cn: 5,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You wrap yourself in protective magic, gaining the Ward (9+) Creature Trait."
    },
    ANIMAL_FRIEND: {
        name: "Animal Friend",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "ONE"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "NUMBER",
            duration: 600
        },
        desc: "You make friends with a creature that is smaller than you and possesses the Bestial Creature Trait. The animal trusts you completely and regards you as a friend."
    },
    BEARINGS: {
        name: "Bearings",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        target: {
            type: "SELF"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You sense the influx of the Winds of Magic from their source. You know which direction North is."
    },
    DAZZLE: {
        name: "Dazzle",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "TOUCH"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "The target gains 1 Blinded Condition, and gains 1 Blinded Condition at the start of each round for the duration of the spell."
    },
    CAREFUL_STEP: {
        name: "Careful Step",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL",
            multiplier: 10
        },
        desc: "The magic flowing through your feet ensures any organic matter you tread upon remains undamaged: twigs do not break, grass springs back to its original position, and even delicate flowers are unharmed. Those seeking to use the Track skill to pursue you through rural terrain suffer a –30 penalty to their Tests."
    },
    DART: {
        name: "Dart",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "WILL"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You cause a small dart of magical energy to fly from your fingers. This is a magic missile with a Damage of +0."
    },
    DRAIN: {
        name: "Dart",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "TOUCH"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You touch your targets, draining their life. This counts as a magic missile with Damage +0 that ignores Armour Points. You then Heal 1 Wound."
    },
    EAVESDROP: {
        name: "Eavesdrop",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "WILL"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "INIT_BONUS",
            multiplier: 10
        },
        desc: "You can hear what your targets say as if you were standing right next to them."
    },
    GUST: {
        name: "Gust",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "WILL"
        },
        target: {
            type: "SPECIAL"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You create a brief gust of wind, strong enough to blow out a candle, cause an open door to slam, or blow a few pages to the floor."
    },
    LIGHT: {
        name: "Light",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL",
            multiplier: 10
        },
        desc: "You create a small light, roughly equivalent to a torch, which glows from your hand, staff or some other part of your person. While the spell is active, you may choose to increase the illumination to that of a lantern, or decrease it to that of a candle, if you pass a Average (+20) Channelling Test."
    },
    MAGIC_FLAME: {
        name: "Magic Flame",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You kindle a small flame that flickers to life in the palm of your hand. It will not burn you, but will emit heat and set flammable objects alight, like a natural flame."
    },
    MARSH_LIGHTS: {
        name: "Marsh Lights",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "WILL"
        },
        target: {
            type: "SPECIAL"
        },
        duration: {
            type: "WILL",
            multiplier: 10
        },
        desc: "You cast your voice at a point within Willpower yards, regardless of line of sight. Your voice sounds from this point, and all within earshot will hear it."
    },
    OPEN_LOCK: {
        name: "Open Lock",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "TOUCH"
        },
        target: {
            type: "SPECIAL"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "One non-magical lock you touch opens."
    },
    PURIFY_WATER: {
        name: "Purify Water",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "ONE"
        },
        target: {
            type: "SPECIAL"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You purify all water within a receptacle, such as a water flask, stein, or jug. All non-magical impurities, such as poison or contaminants are removed, leaving crisp, clear, potable water. If the vessel contained another liquid that is predominantly water – such as ale, or wine – this is also purified, turning into delicious, pure, non-alcoholic water."
    },
    SLEEP: {
        name: "Sleep",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "TOUCH"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You touch your opponent, sending them into a deep sleep. If the target has the Prone Condition, they gain the Unconscious Condition as they fall asleep. They remain unconscious for the duration, although loud noises or being moved or jostled will awaken them instantly. If your targets are standing or sitting when affected, they start themselves awake as they hit the ground, gaining the Prone Condition, but remaining conscious. If your targets are not resisting, and are suitably tired, they will, at the spell’s end, pass into a deep and restful sleep."
    },
    SHOCK: {
        name: "Shock",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "TOUCH"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "Your target receives 1 Stunned Condition."
    },
    SOUNDS: {
        name: "Sounds",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "WILL"
        },
        target: {
            type: "SPECIAL"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You create small noises nearby. You can create quiet, indistinct noises that sound as if they come from a specific location within range, regardless of line of sight. The noises can evoke something specific, such as footsteps, whispers or the howl of an animal, but nothing so distinct that it might convey a message. While the spell is active, you may control the sounds by passing a Average (+20) Channelling Test. A success allows you to move the sounds to another point within range, or to increase or decrease their volume."
    },
    WARNING: {
        name: "Warning",
        type: "SPELL",
        domain: "PETTY",
        cn: 0,
        range: {
            type: "ONE"
        },
        target: {
            type: "SPECIAL"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "You channel magic into an object, noticing immediately if it has been poisoned or trapped."
    },
    AQSHYS_AEGIS: {
        name: "Aqshy's Aegis",
        type: "SPELL",
        domain: "FIRE",
        cn: 5,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You wrap yourself in a fiery cloak of Aqshy , which channels flame into the Aegis. You are completely immune to damage from non-magical fire, including the breath attacks of monsters, and ignore any Ablaze Conditions you receive. You receive the Ward (9+) Creature Trait against magical fire attacks including spells from the Lore of Fire."
    },
    CAUTERISE: {
        name: "Cauterise",
        type: "SPELL",
        domain: "FIRE",
        cn: 4,
        range: {
            type: "TOUCH"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "INSTANT"
        },
        desc: "Channelling Aqshy through your hands you lay them on an ally’s wounds. Immediately heal 1d10 Wounds and remove all Bleeding Conditions. Further, the wounds will not become infected. Targets without the Arcane Magic (Fire) Talent, must pass a Challenging (+0) Cool Test or scream in agony.. If Failed by –6 or more SL, the target gains the Unconscious Condition and is permanently scarred, waking up 1d10 hours later"
    },
    CROWN_OF_FLAME: {
        name: "Crown of Flame",
        type: "SPELL",
        domain: "FIRE",
        cn: 8,
        target: {
            type: "SELF"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You channel Aqshy into a majestic crown of inspiring fire about your brow. Gain the Fear (1) Trait and +1 War Leader Talent while the spell is active. For every +2 SL, you may increase your Fear value by +1, or take War Leader Talent again. Furthermore, gain a bonus of +10 on all attempts to Channel and Cast with Aqshy while the spell is in effect."
    },
    FLAMING_HEARTS: {
        name: "Flaming Hearts",
        type: "SPELL",
        domain: "FIRE",
        cn: 8,
        range: {
            type: "WILL"
        },
        target: {
            type: "AOE",
            distance: "WILL_BONUS"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "Your voice takes on a rich resonance, echoing with Aqshy’s fiery passion. Affected allies lose all Broken and Fatigued Conditions, and gain +1 Drilled, Fearless and Stout-hearted Talent while the spell is in effect."
    },
    FIREWALL: {
        name: "Firewall",
        type: "SPELL",
        domain: "FIRE",
        cn: 6,
        range: {
            type: "WILL"
        },
        target: {
            type: "AOE",
            distance: "SPECIAL"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You channel a fiery streak of Aqshy , creating a wall of flame. The Firewall is Willpower Bonus yards wide, and 1 yard deep. For every +2 SL you may extend the length of the Firewall by +Willpower Bonus yards. Anyone crossing the firewall gains 1 Ablaze condition and suffers a hit with a Damage equal to your Willpower Bonus, handled like a magical missile."
    },
    GREAT_FIRES_OF_UZHUL: {
        name: "Great Fires of U'Zhul",
        type: "SPELL",
        domain: "FIRE",
        cn: 10,
        range: {
            type: "WILL"
        },
        target: {
            type: "AOE",
            distance: "WILL_BONUS"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You hurl a great, explosive blast of Aqshy into an enemy, which erupts into a furious blaze, burning with the heat of a forge. This is a magical missile with Damage +10 that ignores Armour Points and inflicts +2 Ablaze Conditions and the Prone Condition on a target. Everyone within the Area of Effect of that target suffers a Damage +5 hit ignoring Armour Points, and must pass a Dodge Test or also gain +1 Ablaze Condition. The spell stops behaving like a magic missile as the fire continues to burn in the Area of Effect for the duration. Anyone within the Area of Effect at the start of a round suffers 1d10+6 Damage, ignoring APs, and gains +1 Ablaze Condition."
    },
    FLAMING_SWORD_OF_RHUIN: {
        name: "Flaming Sword of Rhuin",
        type: "SPELL",
        domain: "FIRE",
        cn: 8,
        range: {
            type: "WILL"
        },
        target: {
            type: "ONE"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You wreathe a sword in magical flames. The weapon has Damage +6 and the Impact Quality (see page 298), and anyone struck by the blade gains +1 Ablaze Condition. If wielders do not possess the Arcane Magic (Fire) Talent, and they fumble an attack with the Flaming Sword, they gain +1 Ablaze Condition."
    },
    PURGE: {
        name: "Purge",
        type: "SPELL",
        domain: "FIRE",
        cn: 10,
        range: {
            type: "WILL"
        },
        target: {
            type: "AOE",
            distance: "WILL_BONUS"
        },
        duration: {
            type: "WILL_BONUS"
        },
        desc: "You funnel intense flame to burn away the taint and corruption in an area. Anything flammable is set alight, and any creatures in the area takes +SL Ablaze conditions. If the location contains a Corrupting Influence, such as Dhar , warpstone, or a Chaostainted object, it too will smoulder and blacken, beginning to burn. This spell may be maintained in subsequent rounds by passing a Challenging (+0) Channelling Test. The precise time needed to eliminate the Corrupting Influence will be determined by your GM. As a rough guideline, a small quantity (smaller than an acorn) of warpstone, or a minor Chaos-tainted object may require 10–Willpower Bonus Rounds (minimum of 1 Round). A larger quantity of warpstone — fist-sized — or a more potent Chaos-tainted object may require double this. A powerful Chaos Artefact may take hours, or even longer…"
    }
};

TEW.SPELLS_IDS = Object.keys(TEW.SPELLS);
TEW.SPELLS_ARRAY = Object.entries(TEW.SPELLS).sort((a, b) => a[0].localeCompare(b[0]));
TEW.TALENTS = TEW.TALENTS || {
    ACCURATE_SHOT : {
        name: "Accurate Shot",
        desc: "You are an exceptional shot and know where to shoot an enemy in order to inflict maximum damage. You deal your Accurate Shot level in extra Damage with all ranged weapons.",
        maxTaken: "bals"
    },
    ACUTE_SENSE_SIGHT: {
        name: "Acute Sense (Sight)",
        desc: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init"
    },
    ACUTE_SENSE_TASTE: {
        name: "Acute Sense (Taste)",
        desc: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init"
    },
    ACUTE_SENSE_SMELL: {
        name: "Acute Sense (Smell)",
        desc: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init"
    },
    ACUTE_SENSE_HEARING: {
        name: "Acute Sense (Hearing)",
        desc: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init"
    },
    ACUTE_SENSE_TOUCH: {
        name: "Acute Sense (Touch)",
        desc: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init"
    },
    AETHYRIC_ATTUNEMENT: {
        name: "Aethyric Attunement",
        desc: "Your experience, talent or training lets you more safely manipulate the Winds of Magic. You do not suffer a Miscast if you roll a double on a successful Channel Test.",
        maxTaken: "init"
    },
    ALLEY_CAT: {
        name: "Alley Cat",
        desc: "You are at home in shadowy backstreets. When using Stealth (Urban), you may reverse the dice of any failed Test if this will score a Success.",
        maxTaken: "init"
    },
    AMBIDEXTROUS: {
        name: "Ambidextrous",
        desc: "You can use your off-hand far better than most folk, either by training or innate talent. You only suffer a penalty of -10 to Tests relying solely on your secondary hand, not -20. If you have this Talent twice, you suffer no penalty at all.",
        maxTaken: 2
    },
    ANIMAL_AFFINITY: {
        name: "Animal Affinity",
        desc: "Wild animals feel comfortable in your presence, and often follow your lead. All creatures with the Bestial Trait not trained to be belligerent will automatically be calm in your presence unless they have a reason not to be, such as pain, an attack, being naturally hyper-aggressive, or having nearby young.",
        maxTaken: "will"
    },
    ARCANE_MAGIC: {
        name: "Arcane Magic",
        desc: "You either study one of the 8 Arcane Lores of Magic - Beasts, Death, Fire, Heavens, Metal, Shadow, Light, or Life - or practice a lesser known Lore, such as Hedgecraft or Necromancy. You may now memorise spells from your chosen Lore. Under normal circumstances, you may not learn more than one Arcane Magic (Lore) Talent. Further, you may not learn the Bless or Invoke Talents when you have the Arcane Magic Talent. You can unlearn this Talent for 100 XP, but will immediately lose all of your spells if you do so.",
        maxTaken: 1
    },
    ARGUMENTATIVE: {
        name: "Argumentative",
        desc: "You are used to arguing your points and winning. If you roll a successful Charm Test to debate with an opponent, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 24 could be used for +4 SL.",
        maxTaken: "felw"
    },
    ARTISTIC: {
        name: "Artistic",
        desc: "You have a natural talent for art, able to produce precise sketches with nothing but time and appropriate media. This ability has several in-game uses, ranging from creating Wanted Posters to sketching accurate journals, and has spot benefits as determined by the GM. Further to this, add Art (Any) to any Career you enter; if it is already in Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "dext"
    },
    ATTRACTIVE: {
        name: "Attractive",
        desc: "Whether it's your piercing eyes, your strong frame, or maybe the way you flash your perfect teeth, you know how to make the best use of what the gods gave you. When you successfully use Charm to influence those attracted to you, you can choose to either use your rolled SL, or the number rolled on your",
        maxTaken: "felw"
    },
    BATTLE_RAGE: {
        name: "Battle Rage",
        desc: "You are better able to control your Frenzy in combat. You can end your Frenzy with a successful Cool Test at the end of the round.",
        maxTaken: "will"
    },
    BEAT_BLADE: {
        name: "Beat Blade",
        desc: "You are trained to make sharp controlled blows to your opponent's weapon, creating an opening for an attack or simply impeding an incoming attack. For your Action, you can choose to Beat Blade before rolling. Perform a Melee Test; if successful, your opponent loses -1 Advantage, and loses a further -1 per SL you score. This Test is not Opposed. This Talent is of no use if your opponent has no weapon, or has a larger Size than you",
        maxTaken: "weas"
    },
    BENEATH_NOTICE: {
        name: "Beneath Notice",
        desc: "The high and mighty pay no attention to your presence, knowing you are well beneath their notice. Assuming you are properly attired and not in an incongruous position, those of a higher Status Tier will normally ignore you unless your presence becomes inappropriate, which can make it very easy to listen into conversations you perhaps shouldn't. Further, characters with a higher Status Tier than you gain no Advantage for striking or wounding you in combat, as there is nothing to be gained for defeating such a lowly cur.",
        maxTaken: "felw"
    },
    BERSERK_CHARGE: {
        name: "Berserk Charge",
        desc: "You hurl yourself at your enemies with reckless abandon, using the force of your charge to add weight to your strikes. When you Charge, you gain +1 Damage to all Melee attacks per level in this Talent.",
        maxTaken: "strg"
    },
    BLATHER: {
        name: "Blather",
        desc: "Called 'opening your mouth and letting your belly rumble' in Nordland, or simply 'bullshitting' in Ostland, blathering involves talking rapidly and incessantly, or talking volubly and at-length, about inconsequential or nonsense matters, and is used to verbally confuse and confound a target. You use your Charm Skill to Blather. Attempt an Opposed Charm/Intelligence Test. Success gives your opponent a Stunned Condition. Further, for each level you have in Blather, your opponent gains another Stunned Condition. Targets Stunned by Blather may do nothing other than stare at you dumbfounded as they try to catch-up with or understand what you are saying. Once the last Stunned Condition comes to an end, the target finally gets a word in, and may not be best pleased with you - after all, you have been talking about nothing or nonsense for some time. Should you stop talking, your opponent immediately loses all Stunned Conditions caused by your Blather. Generally, you can only attempt to Blather at a character once per scene, or perhaps longer as determined by the GM, as the target soon wises up to your antics.",
        maxTaken: "felw"
    },
    BLESS_MANAAN: {
        name: "Bless (Manaan)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_MORR: {
        name: "Bless (Morr)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_MYRMIDIA: {
        name: "Bless (Myrmidia)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_RANALD: {
        name: "Bless (Ranald)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_RHYA: {
        name: "Bless (Rhya)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_SHALLYA: {
        name: "Bless (Shallya)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_SIGMAR: {
        name: "Bless (Sigmar)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_TAAL: {
        name: "Bless (Taal)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_ULRIC: {
        name: "Bless (Ulric)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_VERENA: {
        name: "Bless (Verena)",
        desc: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BOOKISH: {
        name: "Bookish",
        desc: "You are as at home in a library as a seaman at sea or a farmer a-farming. When using Research, you may reverse the dice of any failed Test if this will score a success.",
        maxTaken: "intl"
    },
    BREAK_AND_ENTER: {
        name: "Break and Enter",
        desc: "You are an expert at quickly breaking down doors and forcing entry. You may add +1 Damage for each level in this Talent when determining damage against inanimate objects such as windows, chests, doors, and similar.",
        maxTaken: "strg"
    },
    BRIBER: {
        name: "Briber",
        desc: "You are an exceedingly skilled briber. The GM should reduce the base cost of any required bribe by 10% per level you have in Briber, to a minimum of 10% of the original amount.",
        maxTaken: "felw"
    },
    CARDSHARP: {
        name: "Cardsharp",
        desc: "You are used to playing, and winning, at cards, although your methods may involve a little cheating. When you successfully use Gamble or Sleight of Hand when playing cards, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 28 could be used for +8 SL. If you play a real card game to represent what is happening in-game, you may receive an extra number of cards per deal equal to your level in Cardsharp, then discard down to the appropriate hand-size before each round of play.",
        maxTaken: "intl"
    },
    CAREFUL_STRIKE: {
        name: "Careful Strike",
        desc: "You are skilled at hitting your enemy exactly where you want to, either at range or in melee. You may modify your Hit Location result by up to +/-10 per time you have this Talent. So, if you had this Talent twice and hit location 34, the Right Arm, you could modify this down to 14, the Left Arm, or up to 54, the Body",
        maxTaken: "init"
    },
    CAROUSER: {
        name: "Carouser",
        desc: "You are a seasoned drinker and know how to party hard. You may reverse the dice of any failed Consume Alcohol Test if this will score a Success.",
        maxTaken: "toug"
    },
    CATFALL: {
        name: "Catfall",
        desc: "You are nimble and balanced like a cat, and are able to fall much greater distances unharmed than others might. Whenever you fall, you attempt an Athletics Test. If successful, reduce the distance fallen by 1 yard, +1 extra yard per +1 SL scored, for the purposes of calculating Damage.",
        maxTaken: "agil"
    },
    CAT_TONGUED: {
        name: "Cat-tongued",
        desc: "Like Ranald the Trickster God, you blend truth and lies as if there were no difference. When using Charm to lie, listeners do not get to oppose your Charm with their Intuition to detect if there is something fishy in what you say.",
        maxTaken: "felw"
    },
    COMBAT_AWARE: {
        name: "Combat Aware",
        desc: "You are used to scanning the battlefield to make snap decisions informed by the shifting tides of war. You may take a Challenging (+0) Perception Test to ignore Surprise, which is modified by circumstance as normal.",
        maxTaken: "init"
    },
    COMBAT_MASTER: {
        name: "Combat Master",
        desc: "Your accumulated years of combat experience allow you to keep lesser fighters at bay. For each level in this Talent, you count as one more person for the purposes of determining if one side out-numbers the other. This Talent only comes into play when you are out-numbered. See page 162 for the rules for out-numbering.",
        maxTaken: "agil"
    },
    COMBAT_REFLEXES: {
        name: "Combat Reflexes",
        desc: "You react like a flash of lightning. Add 10 to your Initiative for each level in this Talent when determining Combat Initiative.",
        maxTaken: "init"
    },
    COMMANDING_PRESENCE: {
        name: "Commanding Presence",
        desc: "Your presence fills others with hushed awe and admiration. Such is your aura of authority, those with a lower Status may not resist your Leadership tests with their Willpower. Of course, enemies are still no more likely to respect or obey you, but the common folk rarely stand against you.",
        maxTaken: "felw"
    },
    CONCOCT: {
        name: "Concoct",
        desc: "You are skilled at making potions, philtres, and draughts on the go. You may take one free Crafting Endeavour to use Lore (Apothecary) without need of a Workshop. Other Crafting Endeavours use the normal rules.",
        maxTaken: "intl"
    },
    CONTORTIONIST: {
        name: "Contortionist",
        desc: "You can bend and manipulate your body in a myriad of seemingly unnatural ways. This allows you to squeeze through unlikely gaps and bend your body in crazy ways, giving benefits determined by the GM, possibly with a successful Agility test.",
        maxTaken: "agil"
    },
    COOL_HEADED: {
        name: "Coolheaded",
        desc: "You gain a permanent +5 bonus to your starting Willpower Characteristic this does not count towards your Advances.",
        maxTaken: 1
    },
    CRACK_THE_WHIP: {
        name: "Crack the Whip",
        desc: "You know how to get the most out of your animals. When an animal you control is Fleeing or Running, it gains +1 Movement if you are using a whip.",
        maxTaken: "dext"
    },
    CRAFTSMAN: {
        name: "Craftsman",
        desc: "You have true creative talent. Add one Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "dext"
    },
    CRIMINAL: {//TODO
        name: "Criminal",
        desc: "TODO",
        maxTaken: "oui"
    },
    DEADEYE_SHOT: {
        name: "Deadeye Shot",
        desc: "You always hit an opponent right between the eyes... or wherever else you intended to hit. Instead of reversing the dice to determine which Hit Location is struck with your ranged weapons, you may pick a location.",
        maxTaken: 1
    },
    DEALMAKER: {
        name: "Dealmaker",
        desc: "You are a skilled businessman who knows how to close a deal. When using the Haggle skill, you reduce or increase the price of the products by an extra 10%.",
        maxTaken: "felw"
    },
    DETECT_ARTEFACT: {
        name: "Detect Artefact",
        desc: "You are able to sense when magic lies within an artefact. You may attempt an Intuition Test for any magical artefact touched. If successful, you sense the item is magical; further, each SL also provides a specific special rule the item uses, if it has any. Normally, you may only attempt this Test once per artefact touched.",
        maxTaken: "init"
    },
    DICEMAN: {
        name: "Diceman",
        desc: "You are a dicing master, and all claims you cheat are clearly wrong. When you successfully use Gamble or Sleight of Hand when playing with dice, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 06 could be used for +6 SL. If you play any real-life dice games to represent in-game dice games, always roll extra dice equal to your Diceman level and choose the best results.",
        maxTaken: "intl"
    },
    DIRTY_FIGHTING: {
        name: "Dirty Fighting",
        desc: "You have been taught all the dirty tricks of unarmed combat. You may choose to cause an extra +1 Damage for each level in Dirty Fighting with any successful Melee (Brawling) hit. Note: using this Talent will be seen as cheating in any formal bout.",
        maxTaken: "weas"
    },
    DISARM: {
        name: "Disarm",
        desc: "You are able to disarm an opponent with a careful flick of the wrist or a well-aimed blow to the hand. For your Action, you may attempt an Opposed Melee/Melee test. If you win, your opponent loses a held weapon, which flies 1d10 feet in a random direction (with further effects as determined by the GM). If you win by 2 SL, you can determine how far the weapon is flung instead of rolling randomly; if you win by 4 SL, you can also choose the direction the weapon goes in; if you win by 6 SL or more, you can take your opponent's weapon if you have a free hand, plucking it from the air with a flourish. This Talent is of no use if your opponent has no weapon, or is a larger Size than you.",
        maxTaken: "init"
    },
    DISTRACT: {
        name: "Distract",
        desc: "You are trained in simple movements to distract or startle your opponent, drawing eyes from your true intent. You may use your Move to perform a Distraction. This is resolved by an Opposed Athletics/Cool Test. If you win, your opponent can gain no Advantage until the end of the next Round.",
        maxTaken: "agil"
    },
    DOOMED: { //TODO
        name: "Doomed",
        desc: "At the age of 10, a Priest of Morr called a Doomsayer took you aside to foretell your death in an incense-laden, coming-of-age ritual called the Dooming. In conjunction with your GM, come up with a suitable Dooming. Should your character die in a fashion that matches your Dooming, your next character gains a bonus of half the total XP your dead character accrued during play.",
        maxTaken: 1
    },
    DRILLED: {
        name: "Drilled",
        desc: "You have been trained to fight shoulder-to-shoulder with other soldiers. If an enemy causes you to lose Advantage when standing beside an active ally with the Drilled Talent, you may keep 1 lost Advantage for each time you've taken the Drilled Talent.",
        maxTaken: "weas"
    },
    DUAL_WIELDER: {
        name: "Dual Wielder",
        desc: "When armed with two weapons, you may attack with both for your Action. Roll to hit with the weapon held in your primary hand. If you hit, determine Damage as normal, but remember to keep your dice roll, as you will use it again. If the first strike hits, once it is resolved, the weapon in your secondary hand can then target an available opponent of your choice using the same dice roll for the first strike, but reversed. So, if you rolled 34 to hit with the first weapon, you use 43 to hit with the second. Remember to modify this second roll by your off-hand penalty (-20 unless you have the Ambidextrous Talent). This second attack is Opposed with a new defending roll, and damage for this second strike is calculated as normal. The only exception to this is if you roll a Critical for your first strike. If this happens, use the roll on the Critical Table to also act as the roll for the second attack. So, if you scored a critical to the head and rolled 56 on the Critical table for a Major Eye Wound, your second attack would then strike out with a to-hit value of 56. If you choose to attack with both weapons, all your defensive rolls until the start of your next Turn suffer a penalty of -10. You do not gain an Advantage when you successfully strike or Wound an opponent when Dual Wielding unless both attacks hit."
    },
    EMBEZZLE: {
        name: "Embezzle",
        desc: "You are skilled at skimming money from your employers without being detected. Whenever you secure money when Earning (during play or performing an Income Endeavour), you may attempt an Opposed Intelligence Test with your employer (assuming you have one). If you win, you skim 2d10 + SL brass pennies, 1d10 + SL silver shillings, or 1 + SL gold crowns (depending upon the size of the business in question, as determined by the GM) without being detected. If your employer wins by 6+ SL, you gain the money, but your embezzling is detected; what then happens is left to the GM. Any other result means you have failed to embezzle any money.",
        maxTaken: "intl"
    },
    ENCLOSED_FIGHTER: {
        name: "Enclosed Fighter",
        desc: "You have learned to make the most benefit out of fighting in enclosed spaces. You ignore penalties to Melee caused by confined spaces such as tunnels, the frontline, small fighting pits, and similar, and can use the Dodge Skill, even if it would normally be disallowed due to lack of space.",
        maxTaken: "agil"
    },
    ETIQUETTE_CRIMINALS: {
        name: "Etiquette (Criminals)",
        desc: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw"
    },
    ETIQUETTE_CULTISTS: {
        name: "Etiquette (Cultists)",
        desc: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw"
    },
    ETIQUETTE_GUILDERS: {
        name: "Etiquette (Guilders)",
        desc: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw"
    },
    ETIQUETTE_NOBLES: {
        name: "Etiquette (Nobles)",
        desc: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw"
    },
    ETIQUETTE_SCHOLARS: {
        name: "Etiquette (Scholars)",
        desc: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw"
    },
    ETIQUETTE_SERVANTS: {
        name: "Etiquette (Servants)",
        desc: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw"
    },
    ETIQUETTE_SOLDIERS: {
        name: "Etiquette (Soldiers)",
        desc: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw"
    },
    FAST_HANDS: {
        name: "Fast Hands",
        desc: "You can move your hands with surprising dexterity. Bystanders get no passive Perception Tests to spot your use of the Sleight of Hand Skill, instead they only get to Oppose your Sleight of Hand Tests if they actively suspect and are looking for your movements. Further, attempts to use Melee (Brawling) to simply touch an opponent gain a bonus of +10 x your level in Fast Hands.",
        maxTaken: "dext"
    },
    FAST_SHOT: {
        name: "Fast Shot",
        desc: "If you have a loaded ranged weapon, you can fire it outside the normal Initiative Order before any other combatant reacts in the following Round. You roll to hit using all the normal modifiers. Employing Fast Shot requires both your Action and Move for your upcoming turn, and these will count as having been spent when your next turn arrives. If two or more characters use Fast Shot, the character who has taken this Talent most goes first. If any characters have taken Fast Shot an equal number of times, both shots are fired simultaneously, and should both be handled at the same time.",
        maxTaken: "will"
    },
    FEARLESS_BEASTMEN: {
        name: "Fearless (Beastmen)",
        desc: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will"
    },
    FEARLESS_GREENSKINS: {
        name: "Fearless (Greenskins)",
        desc: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will"
    },
    FEARLESS_OUTLAWS: {
        name: "Fearless (Outlaws)",
        desc: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will"
    },
    FEARLESS_VAMPIRES: {
        name: "Fearless (Vampires)",
        desc: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will"
    },
    FEARLESS_WATCHMEN: {
        name: "Fearless (Watchmen)",
        desc: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will"
    },
    FEARLESS_WITCHES: {
        name: "Fearless (Witches)",
        desc: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will"
    },
    FEINT: {
        name: "Feint",
        desc: "You have trained how to make false attacks in close combat to fool your opponent. You may now make a Feint for your Action against any opponent using a weapon. This is resolved with an Opposed Melee (Fencing)/Melee Test. If you win, and you attack the same opponent before the end of the next Round, you may add the SL of your Feint to your attack roll.",
        maxTaken: "weas"
    },
    FIELD_DRESSING: {
        name: "Field Dressing",
        desc: "You are used to treating wounds quickly. If you fail a Heal Test when using Bandages, you may reverse the result if this will score a success; however, if you do so, you may not score more than +1 SL as you focus on speed over accuracy.",
        maxTaken: "intl"
    },
    FISHERMAN: {
        name: "Fisherman",
        desc: "You are a very capable fisherman and know all the best ways to land fish. Assuming a large enough body of water is available, you are automatically assumed to be able to fish enough to feed yourself and a number of others equal to your level in Fisherman, assuming you choose to spend at least an hour or so with a line and bait. You may secure more fish in addition to this using the normal rules for foraging.",
        maxTaken: "init"
    },
    FLAGELLANT: {
        name: "Flagellant",
        desc: "You have dedicated your pain to the service of your God. Each day, you must spend half a bell (half an hour) praying as you maintain a number of Wounds suffered equal to your level in Flagellent. Until you next sleep, if you have the Frenzy Talent you may enter Frenzy immediately without testing. The Frenzy Talent is added to the Talent list of any career you are in. Should you fail to flagellate yourself on any given day, or allow your castigated flesh to be healed, you may not spend any Resilience or Resolve until you flagellate yourself again.",
        maxTaken: "toug"
    },
    FLEE: {
        name: "Flee!",
        desc: "When your life is on the line you are capable of impressive bursts of speed. Your Movement Attribute counts as 1 higher when Fleeing",
        maxTaken: "agil"
    },
    FLEET_FOOTED: {
        name: "Fleet Footed",
        desc: "You gain +1 to your Movement Attribute.",
        maxTaken: 1
    },
    FRENZY: {
        name: "Frenzy",
        desc: "With a Willpower Test, you can work yourself into a state of frenzy by psyching yourself up, howling, biting your shield, or similar. If you succeed, you become subject to Frenzy. While subject to Frenzy you are immune to all other psychology, and will not flee or retreat for any reason; indeed you must always move at full rate towards the closest enemy you can see in order to attack. Generally, the only Action you may take is a Weapon Skill Test or an Athletics Test to reach an enemy more quickly. Further, you may take a Free Action Melee Test each Round as you are throwing everything you have into your attacks. Lastly, you gain a bonus of +1 Strength Bonus, such is your ferocity. You remain in Frenzy until all enemies in your line of sight are pacified, or you receive the Stunned or Unconscious condition. After your Frenzy is over you immediately receive a Fatigued condition.",
        maxTaken: 1
    },
    FRIGHTENING: {
        name: "Frightening",
        desc: "Anyone sane thinks twice before approaching you. If you wish, you have a Fear Rating of 1. Add +1 to this number per extra time you have this Talent.",
        maxTaken: "strg"
    },
    FURIOUS_ASSAULT: {
        name: "Furious Assault",
        desc: "Your blows follow one another in quick succession, raining down on your opponents with the fury of Ulric. Once per Round, if you hit an opponent in close combat, you may immediately spend an Advantage or your Move to make an extra attack (assuming you have your Move remaining).",
        maxTaken: "agil"
    },
    GREGARIOUS: {
        name: "Gregarious",
        desc: "You just like talking to other folk and it seems they like talking to you. You may reverse any failed Gossip Test if this allows the Test to succeed.",
        maxTaken: "felw"
    },
    GUNNER: {
        name: "Gunner",
        desc: "You can reload blackpowder weapons with practiced ease. Add SL equal to your level in Gunner to any Extended Test to reload a Blackpowder weapon.",
        maxTaken: "dext"
    },
    HARDY: {
        name: "Hardy",
        desc: "You gain a permanent addition to your Wounds, equal to your Toughness Bonus. If your Toughness Bonus should increase, then the number of Wounds Hardy provides also increases.",
        maxTaken: "toug"
    },
    HATRED: {//TODO
        name: "Hatred",
        desc: "TODO",
        maxTaken: "will"
    },
    HOLY_HATRED: {
        name: "Holy Hatred",
        desc: "Your prayers drip with the hatred you feel for your blasphemous enemies. You deal +1 Damage with Miracles for each level in this Talent.",
        maxTaken: "felw"
    },
    HOLY_VISIONS: {
        name: "Holy Visions",
        desc: "You clearly see the great works of the Gods all around you. You automatically know when you enter Holy Ground, and may take an Intuition Test to receive visions (often obscure, and seen through the paradigm of your cult or individual belief-system) regarding the local area if significant events have occurred there in the past.",
        maxTaken: "init"
    },
    HUNTERS_EYE: {
        name: "Hunter's Eye",
        desc: "You are a skilled hunter and know all the best techniques to find game. When travelling through well-stocked lands, you are automatically assumed to be able to hunt down enough game to feed yourself and a number of others equal to your level in Hunter's Eye, so long as you have time and the correct equipment. You may secure more food in addition to this using the normal rules for foraging.",
        maxTaken: "init"
    },
    IMPASSIONED_ZEAL: {
        name: "Impassioned Zeal",
        desc: "When you talk about your cause, case, or religion, your words fill with passion and fervent zeal. You may double your Fellowship for the purposes of determining the number of people influenced by your Public Speaking when talking about your cause.",
        maxTaken: "felw"
    },
    IMPLACABLE: {
        name: "Implacable",
        desc: "It takes a lot to finish you off. You can ignore the Wound loss from a Bleeding Condition. Each level in this Talent lets you ignore the Wound loss from an extra Bleeding Condition.",
        maxTaken: "toug"
    },
    IN_FIGHTER: {
        name: "In-fighter",
        desc: "You are skilled at drawing in close to an opponent. You suffer no penalties for fighting against an opponent with a longer weapon than you. Further, if you use the optional rules for In-fighting, gain a bonus of +10 to hit your opponent.",
        maxTaken: "dext"
    },
    INSPIRING: {
        name: "Inspiring",
        desc: "Your rousing words and pleas can turn the tide of a battle. Refer to the following table to see how many people you can now influence with your Leadership Skill when at war.",
        maxTaken: "felw"
    },
    INSTINCTIVE_DICTION: {
        name: "Instinctive Diction",
        desc: "You instinctively understand the language of Magick, and are capable of articulating the most complex phrases rapidly without error. You do not suffer a Miscast if you roll a double on a successful Language (Magick) Test.",
        maxTaken: "init"
    },
    INVOKE_MANAAN: {
        name: "Invoke (Manaan)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_MORR: {
        name: "Invoke (Morr)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_MYMIDIA: {
        name: "Invoke (Myrmidia)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_RANALD: {
        name: "Invoke (Ranald)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_RHYA: {
        name: "Invoke (Rhya)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_SHALLYA: {
        name: "Invoke (Shallya)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_SIGMAR: {
        name: "Invoke (Sigmar)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_TAAL: {
        name: "Invoke (Taal)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_ULRIC: {
        name: "Invoke (Ulric)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_VERENA: {
        name: "Invoke (Verena)",
        desc: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    IRON_JAWS: {
        name: "Iron Jaws",
        desc: "You are made of sturdy stuff and can weather even the strongest blows. Whenever you gain one or more Stunned Conditions, you may make an immediate Challenging (+0) Endurance Test to not take one of them, with each SL removing an extra Stunned Condition.",
        maxTaken: "toug"
    },
    IRON_WILL: {
        name: "Iron Will",
        desc: "You have an indomitable will of iron, and will never willingly bow down before another. Use of the Intimidate skill does not cause Fear in you, and will not stop you speaking out against the intimidating party.",
        maxTaken: "will"
    },
    JUMP_UP: {
        name: "Jump Up",
        desc: "You are hard to keep down. You may perform a Challenging (+0) Athletics Test to immediately regain your feet whenever you gain a Prone Condition. This Athletics Test is often modified by the Strength behind the blow that knocks you down: for every +10 Strength the blow has over your Toughness, you suffer a penalty of -10 to the Athletics Test, and vice versa.",
        maxTaken: 1
    },
    KINGPIN: {
        name: "Kingpin",
        desc: "You have earned an air of respectability despite your nefarious ways. You may ignore the Status loss of the Criminal Talent.",
        maxTaken: 1
    },
    LIGHTNING_REFLEXES: {
        name: "Lightning Reflexes",
        desc: "You gain a permanent +5 bonus to your starting Agility Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    LINGUISTICS: {
        name: "Linguistics",
        desc: "You have a natural affinity for languages. Given a month's exposure to any Language, you count the associated Language Skill as a Basic Skill with a successful Intelligence Test (which can be attempted once per month). Note: Linguistics only works for languages used to frequently communicate with others, so does not work with Language (Magick).",
        maxTaken: "intl"
    },
    LIP_READING: {
        name: "Lip Reading",
        desc: "You can tell what people are saying by simply watching their lips; you do not need to hear what they are saying. If you have an unobstructed view of the speaker's lower face, you can attempt a Perception Test to understand what they are saying.",
        maxTaken: "init"
    },
    LUCK: {
        name: "Luck",
        desc: "They say when you were born, Ranald smiled. Your maximum Fortune Points now equal your current Fate points plus the number of times you've taken Luck.",
        maxTaken: "felw"
    },
    MAGICAL_SENSE: {
        name: "Magical Sense",
        desc: "You are able to sense the Winds of Magic in others. You may attempt an Average (+20) Intuition Test whenever you encounter a spellcaster. If you pass, you sense the target is a witch. Further, if you score an Astounding Success (+6), can also determine the target's highest Channelling Specialisation.",
        maxTaken: "init"
    },
    MAGIC_RESISTANCE: {
        name: "Magic Resistance",
        desc: "You are resistant to magic. The SL of any spell affecting you is reduced by 2 per point you have in this Talent. The SL of a spell is only modified by the highest Magic Resistance Talent within its target area. Further, you may never learn the Arcane Magic, Bless, Invoke, Petty Magic, or Witch! Talents.",
        maxTaken: "toug"
    },
    MAGNUM_OPUS: {
        name: "Magnum Opus",
        desc: "You are an undisputed master in your field, able to create work of such incredible complexity others can but sit back and marvel at your genius. Each time you take this Talent you may create a single, extraordinary work of art with one of your Art or Trade Skills. This work is unrivalled in your field, a unique piece that will always impress, giving bonuses as determined by the GM, most commonly to Fellowship Tests from those who have witnessed your astounding work. Selling the piece will net you at least ten times its normal value, and sometimes significantly more than this.",
        maxTaken: 10
    },
    MARKSMAN: {
        name: "Marksman",
        desc: "You gain a permanent +5 bonus to your starting Ballistic Skill (this does not count towards your Advances).",
        maxTaken: 1
    },
    MASTER_OF_DISGUISE: {
        name: "Master of Disguise",
        desc: "You are an expert at taking on the appearance and mannerisms of others. With nothing but posture changes, face twisting, and careful use of appropriate clothing, you no longer look like yourself without having to use a Disguise Kit.",
        maxTaken: "felw"
    },
    MASTER_ORATOR: {
        name: "Master Orator",
        desc: "You are skilled at firing up crowds. You gain a gain a SL bonus equal to your levels of Master Orator to any Charm Test when Public Speaking before a crowd.",
        maxTaken: "felw"
    },
    MASTER_TRADESMAN: {
        name: "Master Tradesman",
        desc: "You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.",
        maxTaken: "dext"
    },
    MENACING: {
        name: "Menacing",
        desc: "You have an imposing presence. When using the Intimidate Skill, gain a SL bonus equal to your levels of Menacing.",
        maxTaken: "strg"
    },
    MIMIC: {
        name: "Mimic",
        desc: "You have a good ear for accents and dialects, and can reproduce them accurately. You may replicate any accent you are exposed to for at least a day with an Initiative Test; this Test may be attempted once per day. Once passed, you may always mimic the accent, and locals will believe you to be one of their own.",
        maxTaken: "init"
    },
    NIGHT_VISION: {
        name: "Night Vision",
        desc: "You can see very well in natural darkness. Assuming you have at least a faint source of light (such as starlight, moonlight, or bioluminescence) you can see clearly for 20 yards per level of Night Vision. Further, you can extend the effective illumination distance of any light sources by 20 yards per level of Night Vision.",
        maxTaken: "init"
    },
    NIMBLE_FINGERED: {
        name: "Nimble Fingered",
        desc: "You gain a permanent +5 bonus to your starting Dexterity (this does not count towards your Advances).",
        maxTaken: 1
    },
    NOBLE_BLOOD: {
        name: "Noble Blood",
        desc: "You are either born into the nobility, or otherwise elevated to it by in-game events. Assuming you are dressed appropriately, you are always considered of higher Status than others unless they also have the Noble Blood Talent, where Status is compared as normal.",
        maxTaken: 1
    },
    NOSE_FOR_TROUBLE: {
        name: "Nose for Trouble",
        desc: "You are used to getting into, and preferably out of, trouble. You may attempt an Intuition Test to spot those seeking to cause trouble or seeking to cause you harm, even if normally you would not be allowed a Test (because of Talents or a Spell, for example). This Test will likely be Opposed if others are hiding, and the GM may prefer to take this Test on your behalf in secret so you do not know the results should you fail. If any troublemakers you spot start combat, you may ignore any Surprised Condition they would normally inflict.",
        maxTaken: "init"
    },
    NUMISMATICS: {
        name: "Numismatics",
        desc: "You are well versed with the different coinage of the Old World, and are adept at determining their value. You can judge the true value of a coin by experience alone, not even requiring a Test. Further, you can identify forged coins with a Simple Evaluate Test; it is never Opposed by the SL of the Forger.",
        maxTaken: "init"
    },
    OLD_SALT: {
        name: "Old Salt",
        desc: "You are an experienced seaman, and are very used to sea life. You can ignore all negative modifiers to Tests at sea derived from poor weather, rolling ships, and similar. Further, you count as two seamen towards the minimum number of crew to pilot a sea-going vessel.",
        maxTaken: "agil"
    },
    ORIENTATION: {
        name: "Orientation",
        desc: "You have an instinctual feel for direction. You automatically know which direction is north with a glimpse at the stars, trees, or whatever other signs you are familiar with.",
        maxTaken: "init"
    },
    PANHANDLE: {
        name: "Panhandle",
        desc: "You are a skilled beggar, able to get even the most jaded individual to contribute to your cause. You can perform a Charm Test every half hour when Begging, not every hour.",
        maxTaken: "felw"
    },
    PERFECT_PITCH: {
        name: "Perfect Pitch",
        desc: "You have perfect pitch, able to replicate notes perfectly and identify them without even making a Test. Further, add Entertain (Sing) to any Career you enter; if it is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "init"
    },
    PETTY_MAGIC: {
        name: "Petty Magic",
        desc: "You have the spark to cast magic within you and have mastered techniques to control it at a basic level. When you take this Talent, you manifest, and permanently memorise, a number of spells equal to your Willpower Bonus. You can learn extra Petty spells for a cost in XP.",
        maxTaken: 1
    },
    PHARMACIST: {
        name: "Pharmacist",
        desc: "You are highly skilled at pharmacy, better able than most to make pills, ointments, unguents, oils, creams, and more. You may reverse any failed Trade (Apothecary) test if this allows the Test to succeed.",
        maxTaken: "intl"
    },
    PILOT: {
        name: "Pilot",
        desc: "You are skilled at leading vessels through dangerous waters. If you fail a Test to pass through dangerous waters, you may reverse the result if it will score a success; however, if you do so, you may not score more than +1 SL as you catch the incoming danger at the last moment.",
        maxTaken: "init"
    },
    PUBLIC_SPEAKER: {
        name: "Public Speaker",
        desc: "You are a skilled orator and know how to work large groups of people.",
        maxTaken: "felw"
    },
    PURE_SOUL: {
        name: "Pure Soul",
        desc: "Your soul is pure, quite resistant to the depredations of Chaos. You may gain extra Corruption points equal to your level of Pure Soul before having to Test to see if you become corrupt.",
        maxTaken: "will"
    },
    RAPID_RELOAD: {
        name: "Rapid Reload",
        desc: "You can reload ranged weapons with practiced ease. You add SL equal to your level in Rapid Reload to any Test to reload a ranged weapon.",
        maxTaken: "dext"
    },
    REACTION_STRIKE: {
        name: "Reaction Strike",
        desc: "Your fast reactions have allowed you to fell many opponents before they have even swung their blades. When you are Charged, you may attempt a Challenging (+0) Initiative Test to gain an immediate Free Attack outside the normal turn sequence. This attack is resolved with whatever weapon you are carrying in your primary hand. You may make as many Reaction Strikes in a Round as you have levels in this Talent, but can only attack each individual charger once each.",
        maxTaken: "init"
    },
    READ_WRITE: {
        name: "Read/Write",
        desc: "You are one of the rare literate individuals in the Old World. You are assumed to be able to read and write (if appropriate) all of the Languages you can speak.",
        maxTaken: 1
    },
    RELENTLESS: {
        name: "Relentless",
        desc: "When you have your mind set on a target, there is nothing anyone can do to stop you reaching them. If you use Advantage when Disengaging, you may keep a number of Advantage equal to your level of Relentless. Further, you may use Advantage to Disengage even if you have lower Advantage than your opponents.",
        maxTaken: "agil"
    },
    RESISTANCE_CHAOS: {
        name: "Resistance (Chaos)",
        desc: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "toug"
    },
    RESISTANCE_DISEASE: {
        name: "Resistance (Disease)",
        desc: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "toug"
    },
    RESISTANCE_MAGIC: {
        name: "Resistance (Magic)",
        desc: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "toug"
    },
    RESISTANCE_POISON: {
        name: "Resistance (Poison)",
        desc: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "toug"
    },
    RESOLUTE: {
        name: "Resolute",
        desc: "You launch into attacks with grim determination. Add your level of Resolute to your Strength Bonus when you Charge.",
        maxTaken: "strg"
    },
    REVERSAL: {
        name: "Reversal",
        desc: "You are used to desperate combats, able to turn even the direst circumstances to your Advantage. If you win an Opposed Melee Test, instead of gaining +1 Advantage, you may take all your opponent's Current Advantage. If you do this, you do not cause any Damage, even if it is your Turn in the Round.",
        maxTaken: "weas"
    },
    RIPOSTE: {
        name: "Riposte",
        desc: "Conforming to 'the best defence is offence', you respond to an incoming attack with a lightning-fast counterstrike of your own. If your weapon has the Fast quality, you may cause Damage when you are attacked, just as if it was your Action. You can Riposte a number of attacks per round equal to your Riposte level.",
        maxTaken: "agil"
    },
    RIVER_GUIDE: {
        name: "River Guide",
        desc: "You know all the tricks for navigating dangerous rivers. You don't need to Test for passing through dangerous stretches of water until the Difficulty for doing so is -10 or lower - you automatically pass all Tests easier than this. Further, if you have the appropriate Lore (Local) Skill, you need never Test for navigating dangerous waters - you are assumed to know the route through.",
        maxTaken: "init"
    },
    ROBUST: {
        name: "Robust",
        desc: "You are as tough as old boots and just soak up damage. You reduce all incoming Damage by an extra +1 per time you have taken the Robust Talent, even if the Damage cannot normally be reduced, but still suffer a minimum of 1 Wound from any Damage source.",
        maxTaken: "toug"
    },
    ROUGHRIDER: {
        name: "Roughrider",
        desc: "You are at home in the saddle in even the most difficult of circumstances, and know how to get the best out of your mount during conflict. Assuming you have the Ride skill, you can direct your mount to take an Action, not just a Move, without a Ride test.",
        maxTaken: "agil"
    },
    ROVER: {
        name: "Rover",
        desc: "You are at home roaming the wild places. When using Stealth in a rural environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden spies.",
        maxTaken: "agil"
    },
    SAVANT: {//TODO
        name: "Savant",
        desc: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "intl"
    },
    SAVVY: {
        name: "Savvy",
        desc: "You gain a permanent +5 bonus to your starting Intelligence Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    SCLA_SHEER_SURFACE: {
        name: "Scale Sheer Surface",
        desc: "You are an exceptional climber. You can attempt to climb even seemingly impossible surfaces such as sheer fortifications, ice shelves, plastered walls, and similar, and you ignore any penalties to Climb Tests derived from the difficulty of the surface climbed.",
        maxTaken: "strg"
    },
    SCHEMER: {
        name: "Schemer",
        desc: "You are a master of politics and see conspiracy around every corner. Once per week, you may ask the GM one question regarding a political situation or entangled web of social connections; the GM will perform a secret Intelligence Test and provide you some observations regarding the situation based upon your SL.",
        maxTaken: "intl"
    },
    SEA_LEGS: {
        name: "Sea Legs",
        desc: "You are used to the rolling motion of the oceans, and are very unlikely to get sea sick, even in the worst storms. Under normal conditions at sea, you need never Test to see if you become Sea Sick. At other times (such as a storm, or a magically induced bout of Sea Sickness), you can ignore any penalties to Tests to avoid Sea Sickness.",
        maxTaken: "toug"
    },
    SEASONED_TRAVELLER: {
        name: "Seasoned Traveller",
        desc: "You are an inquisitive soul who has travelled far and wide, learning all manner of local information. Add Lore (Local) to any Career you enter; if it is already in Career, you may purchase the Skill, both times - a different Speciality each time, such as Altdorf, Vorbergland, or Ubersreik - for 5 XP fewer per Advance.",
        maxTaken: "intl"
    },
    SECOND_SIGHT: {
        name: "Second Sight",
        desc: "You can perceive the shifting Winds of Magic that course from the Chaos Gates at the poles of the world. You now have the Sight",
        maxTaken: "init"
    },
    SECRET_IDENTITY: {
        name: "Secret Identity",
        desc: "You maintain a secret identity that allows you to appear richer, or perhaps poorer, than you actually are. With GM permission, choose any one Career. As long as you are dressed appropriately, you may use the Social Status of the chosen Career you masquerade as rather than your own for modifying Fellowship Tests, and can even ignore the Criminal Talent. However, maintaining this identity will require Entertain (Acting) rolls when you encounter those who may recognise your falsehood. You may create a new Secret Identity for each level you have in this Talent.",
        maxTaken: "intl"
    },
    SHADOW: {
        name: "Shadow",
        desc: "You are skilled at following people without being spotted. You may use the Shadowing rules on page 130 without doing a Combined Test. Instead you test against just your Perception or your Stealth Skill, whichever is higher.",
        maxTaken: "agil"
    },
    SHARP: {
        name: "Sharp",
        desc: "You gain a permanent +5 bonus to your starting Initiative Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    SHARPSHOOTER: {
        name: "Sharpshooter",
        desc: "You can make aimed shots of exceptional accuracy. You ignore any negative Difficulty modifiers to Ranged Tests due to the size of your target.",
        maxTaken: 1
    },
    SHIELDSMAN: {
        name: "Shieldsman",
        desc: "You are skilled at using your shield to manoeuvre others in combat so you can take advantage of a desperate situation. When using a Shield to defend, you gain Advantage equal to the number of levels you have in Shieldsman if you lose the Opposed Test.",
        maxTaken: "strg"
    },
    SIXTH_SENSE: {
        name: "Sixth Sense",
        desc: "You get a strange feeling when you are threatened, and can react accordingly. The GM may warn you if you are walking into danger; this will normally come after a secret Intuition Test on your behalf. Further, you may ignore Surprise if you pass an Intuition Test.",
        maxTaken: "init"
    },
    SLAYER: {
        name: "Slayer",
        desc: "When determining Damage use your opponent's Toughness Bonus as your Strength Bonus if it is higher; always determine this before any other rules modify your Strength or Strength Bonus. Further, if your target is larger than you, and your score a Critical, multiply all melee Damage you cause by the number of steps larger your target is (so, 2 steps = x2, 3 steps = x3, and so on); this multiplication is calculated after all modifiers are applied.",
        maxTaken: 1
    },
    SMALL: {
        name: "Small",
        desc: "You are much shorter than most folk in the Old World.",
        maxTaken: 1
    },
    SNIPER: {
        name: "Sniper",
        desc: "Distance is of no import to your shooting skills, and you are just as adept at picking off far away targets as those nearby. You suffer no penalties for shooting at Long range, and half the penalties for Extreme range.",
        maxTaken: 4
    },
    SPEED_READER: {
        name: "Speedreader",
        desc: "You read books at a voracious pace. You may reverse a failed Research Test if this will grant success. If the speed at which you read is important during combat, a successful Language Test lets you read and fully comprehend a number of pages per Round equal to your SL plus Speedreader level (minimum of 1, even if you fail the Test).",
        maxTaken: "intl"
    },
    SPRINTER: {
        name: "Sprinter",
        desc: "You are a swift runner. Your Movement Attribute counts as 1 higher when Running.",
        maxTaken: "strg"
    },
    STEP_ASIDE: {
        name: "Step Aside",
        desc: "You are skilled at being where enemy weapons are not. If you use Dodge to defend against an incoming attack and win the Opposed Test, you may move up to 2 yards as you dive away, and no longer count as Engaged. None of your opponents will gain a Free Attack when you do this.",
        maxTaken: "agil"
    },
    STONE_SOUP: {
        name: "Stone Soup",
        desc: "You are used to getting by with less, and know how to survive lean times. You can subsist on half the amount of food required without any negative penalties (bar feeling really hungry), and need only test for Starvation every 3 days, not 2.",
        maxTaken: "toug"
    },
    STOUT_HEARTED: {
        name: "Stout-hearted",
        desc: "No matter how bad things get, you always seem to come back for more. You may attempt a Cool Test to remove a Broken Condition at the end of each of your Turns as well as at the end of the Round.",
        maxTaken: "will"
    },
    STRIDER: {
        name: "Strider",
        desc: "You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain.",
        maxTaken: "agil"
    },
    STRIKE_MIGHTY_BLOW: {
        name: "Strike Mighty Blow",
        desc: "You know how to hit hard! You deal your level of Strike Mighty Blow in extra Damage with melee weapons.",
        maxTaken: "strg"
    },
    STRIKE_TO_INJURE: {
        name: "Strike to Injure",
        desc: "You are an expert at striking your enemies most vulnerable areas. You inflict your level of Strike to Injure in additional Wounds when you cause a Critical Wound.",
        maxTaken: "init"
    },
    STRIKE_TO_STUN: {
        name: "Strike to Stun",
        desc: "You know where to hit an opponent to bring him down fast. You ignore the 'Called Shot' penalty to strike the Head Hit Location when using a melee weapon with the Pummel Quality. Further, you count all improvised weapons as having the Pummel Quality.",
        maxTaken: "weas"
    },
    STRONG_BACK: {
        name: "Strong Back",
        desc: "You have a strong back that is used to hard work. You may add your levels in Strong Back to your SL in any Opposed Strength Tests, and can carry additional Encumbrance points of trappings equal to your level of Strong Back.",
        maxTaken: "strg"
    },
    STRONG_LEGS: {
        name: "Strong Legs",
        desc: "You have strong legs able to carry you great distances when you jump. Add your Strong Legs level to your SL in any Athletics Tests involving Leaping.",
        maxTaken: "strg"
    },
    STRONG_MINDED: {
        name: "Strong-minded",
        desc: "You are the epitome of determination and resolve. Add your level in Strong Minded to your maximum Resolve pool.",
        maxTaken: "will"
    },
    STRONG_SWIMMER: {
        name: "Strong Swimmer",
        desc: "You are an especially strong swimmer and used to holding your breath for a long time underwater. Gain a bonus of your level in Strong Swimmer to your Toughness Bonus for the purposes of holding your breath.",
        maxTaken: "strg"
    },
    STURDY: {
        name: "Sturdy",
        desc: "You have a brawny physique, or are very used to carrying things. Increase the number of Encumbrance Points you can carry by your Sturdy level x2.",
        maxTaken: "strg"
    },
    SUAVE: {
        name: "Suave",
        desc: "You gain a permanent +5 bonus to your starting Fellowship Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    SUPER_NUMERATE: {
        name: "Super Numerate",
        desc: "You have a gift for calculation and can work out the solution to most mathematical problems with ease. You may use a simple calculator to represent what your PC is capable of mentally computing.",
        maxTaken: "intl"
    },
    SUPPORTIVE: {
        name: "Supportive",
        desc: "You know what to say and when to make the most impact upon your superiors. When you successfully use a social Skill to influence those with a higher Status tier, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 46 could be used for +6 SL.",
        maxTaken: "felw"
    },
    SURE_SHOT: {
        name: "Sure Shot",
        desc: "You know how to find the weak spots in a target's armour. When you hit a target with a Ranged weapon, you may ignore Armour Points equal to your Sure Shot level.",
        maxTaken: "init"
    },
    SURGERY: {
        name: "Surgery",
        desc: "You are a surgeon, able to open and close the flesh in order to heal others. You can treat any Critical Wound marked as needing Surgery. You can also perform surgery to resolve internal issues with an Extended Challenging (+0) Heal Test with a target SL determined by the GM (usually 5-10) depending upon the difficulty of the procedure at hand. This will cause 1d10 Wounds and 1 Bleeding Condition per Test, meaning surgery has a high chance of killing a patient if the surgeon is not careful. After surgery, the patient must pass an Average (+20) Endurance Test or gain a Minor Infection.",
        maxTaken: "intl"
    },
    TENACIOUS: {
        name: "Tenacious",
        desc: "You never give up, no matter how impossible your travails appear. You can double the length of time successful Endurance Tests allow you to endure a hardship. This includes enduring prolonged riding, exposure, rituals, and similar adversities.",
        maxTaken: "toug"
    },
    TINKER: {
        name: "Tinker",
        desc: "You are somewhat of a Johann-of-all-trades, able to repair almost anything. You count all non-magical Trade Skills as Basic when repairing broken items.",
        maxTaken: "dext"
    },
    TOWER_OF_MEMORIES: {//TODO
        name: "Tower of Memories",
        desc: "A recollection technique first instigated by the Cult of Verena, reputedly from Elven practices taught by the Loremasters of Hoeth, Tower of Memories allows you to perfectly recall a sequence of facts by storing them in an imaginary spire. You can recall a sequence as long as your Intelligence without having to make a Test. For every 10 more items you attempt to memorise, you must make an increasingly difficult Intelligence Test to recall the list correctly, starting at Very Easy (+60) for +10, Easy (+40) for +20, Average (+20) for +30, and so on. Beyond it's obvious utility for Gamble Tests, where having this Talent adds a bonus of +20 to +60 depending upon how useful recalling sequences is to the game at hand, the GM can apply bonuses to other Tests as appropriate. Each time you take this Talent you may recall an extra sequence without having to forget a previously stored one.",
        maxTaken: "intl"
    },
    TRAPPER: {
        name: "Trapper",
        desc: "You are skilled at spotting and using traps. You may take a Perception Test to spot traps automatically without having to tell the GM of your intention; the GM may prefer to make some of these Tests on your behalf in private.",
        maxTaken: "init"
    },
    TRICK_RIDING: {
        name: "Trick Riding",
        desc: "You are capable of amazing feats of agility on horseback. You can use any of your Performer Skills and unmodified Dodge skill when on horseback. Further, when mounted, you can make your Move at the start of the Round instead of on your Turn.",
        maxTaken: "agil"
    },
    TUNNEL_RAT: {
        name: "Tunnel Rat",
        desc: "You are at home in tunnels, sewers, and other underground environments. When using Stealth in an underground environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden others.",
        maxTaken: "agil"
    },
    UNSHAKABLE: {
        name: "Unshakable",
        desc: "You are a jaded veteran who has survived more than one hail of shots from Blackpowder weapons. You need only take a Cool Test to resist a Broken Condition if you are successfully wounded by a Blackpowder weapon, not just if you are shot at.",
        maxTaken: "will"
    },
    VERY_RESILIENT: {
        name: "Very Resilient",
        desc: "You gain a permanent +5 bonus to your starting Toughness Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    VERY_STRONG: {
        name: "Very Strong",
        desc: "You gain a permanent +5 bonus to your starting Strength Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    WAR_LEADER: {
        name: "War Leader",
        desc: "Your stern gaze and inspiring words motivate your soldiers to fight on to the end. All subordinates able to see you may add your level in War Leader to their SL in one Willpower Test per Round. This bonus does not stack.",
        maxTaken: "felw"
    },
    WAR_WIZARD: {
        name: "War Wizard",
        desc: "You are trained to cast magic while in the thick of combat. On your Turn, you may cast one Spell with a Casting Number of 5 or less for free without using your Action. However, if you do this, you may not cast another spell this Turn.",
        maxTaken: 1
    },
    WARRIOR_BORN: {
        name: "Warrior Born",
        desc: "You gain a permanent +5 bonus to your starting Weapon Skill Characteristic (doesn't count as Advances).",
        maxTaken: 1
    },
    WATERMAN: {
        name: "Waterman",
        desc: "You are an experienced freshwater sailor and are well-versed with river vessels. You can ignore all negatives to your Tests when onboard a barge derived from rolling waters, swaying vessels, unsure footing, and similar. Further, you count as two boatmen towards the minimum number of crew to pilot a river vessel.",
        maxTaken: "agil"
    },
    WEALTHY: {
        name: "Wealthy",
        desc: "You are fabulously wealthy, and are rarely ever short of coin. When Earning (including Income Endeavours) you secure +1 GC per time you have this Talent.",
        maxTaken: 10
    },
    WELL_PREPARED: {
        name: "Well-prepared",
        desc: "You are used to anticipating the needs of others, and yourself. A number of times per session equal to your level of Well-Prepared, you may pull the trapping required for the current situation from your backpack (or similar) as long as it is Encumbrance 0, could feasibly been bought recently, and doesn't stretch credibility too far. This could be anything from a flask of spirits to fortify a wounded comrade to a pfennig-whistle needed by a passing entertainer. Whenever you do this, you must deduct the cost for the prepared item from your purse, representing the coin you spent earlier.",
        maxTaken: "init"
    },
    WITCH: {
        name: "Witch!",
        desc: "You have learned magic through trial and error. Add Language (Magick) to any Career you enter; if it is already in your Career, you may purchase the Skill for 5 XP fewer per Advance. Further, you may spend 1 Resilience point to immediately cast any spell as if it were one of your Arcane Lore spells; you also instantly memorise that spell as one of your Arcane Lore spells for 0 XP. You can do this a number of times equal to your level in this Talent.",
        maxTaken: "will"
    }
}

TEW.TALENT_IDS = Object.keys(TEW.TALENTS);
TEW.TALENTS_ARRAY = Object.entries(TEW.TALENTS).sort((a, b) => a[0].localeCompare(b[0]));
TEW.MELEE_WEAPONS = TEW.MELEE_WEAPONS || {
    AXE: {
        name: "Axe",
        icon: TEW.ICONS_IDS.WEAPON_AXE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/10/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["HACK", "UNBALANCED"],
        description: "Much beloved of Dwarfs, the axe is not as agile in the hand as a sword but the heavy cleaving head can make a mess of armour and shields."
    },
    BALLOCK_KNIFE: {
        name: "Ballock Knife",
        icon: TEW.ICONS_IDS.WEAPON_KNIFE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/16/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: ["IMPALE", "PENETRATING", "PRECISE"],
        description: "The short, slim blade of a ballock knife makes for a poor weapon, unless you have a heavily armoured opponent at your mercy."
    },
    CLUB: {
        name: "Club",
        icon: TEW.ICONS_IDS.WEAPON_MACE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/4/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["UNDAMAGING", "UNBALANCED"],
        description: "Clubs are as often found as they are crafted."
    },
    DAGGER: {
        name: "Dagger",
        icon: TEW.ICONS_IDS.WEAPON_KNIFE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/16/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "These blades are crafted specifically for fighting."
    },
    IMPROVISED_WEAPON: {
        name: "Improvised Weapon",
        icon: TEW.ICONS_IDS.WEAPON_PIPE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: ["UNDAMAGING", "UNBALANCED"],
        description: "Hard and heavy items that are not intended to be used as a weapon may still serve in a desperate moment. This entry covers such items as chair legs, rocks, snooker cues, and bottles."
    },
    KNIFE: {
        name: "Knife",
        icon: TEW.ICONS_IDS.WEAPON_KNIFE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/8/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: ["UNDAMAGING"],
        description: "This entry covers short, sharp blades intended for purposes other than fighting, such as kitchen or hunting knives."
    },
    MACE: {
        name: "Mace",
        icon: TEW.ICONS_IDS.WEAPON_MACE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/15/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["PUMMEL", "UNBALANCED"],
        description: "The typical mace is a metal shaft with a heavy head shaped in flanges or spiked protrusions. Whilst it is less wieldy than a sword it inflicts concussive blows."
    },
    MILITARY_PICK: {
        name: "Military Pick",
        icon: TEW.ICONS_IDS.WEAPON_MACE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/15/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["PENETRATING", "UNBALANCED"],
        description: "Crude picks are little more than a metal spike on the end of a stick, though better made weapons are fashioned from steel. They are not agile weapons but are well designed to crack armour."
    },
    SCIMITAR: {
        name: "Scimitar",
        icon: TEW.ICONS_IDS.WEAPON_SABER,
        group: "BASIC",
        groupLabel: "Basic",
        price: "1/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["SLASH_1"],
        description: "Popular in the east of the Empire, Kislev and Araby, the scimitar has a curved blade which can inflict terrible cutting wounds. Its design does compromise the welder’s ability to lunge and thrust, meaning that even though scimitars are a similar length to straight swords they have a shorter reach."
    },
    SWORD: {
        name: "Sword",
        icon: TEW.ICONS_IDS.WEAPON_SWORD,
        group: "BASIC",
        groupLabel: "Basic",
        price: "1/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [],
        description: "The sword is the weapon by which all others are measured. A quality sword has a needle point tip for thrusting, a blade that is razor sharp to either side, and is balanced so that the weight is close to the hand, making it agile for attack and defence."
    },
    WARHAMMER: {
        name: "Warhammer",
        icon: TEW.ICONS_IDS.WEAPON_MACE,
        group: "BASIC",
        groupLabel: "Basic",
        price: "1/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["PENETRATING", "PUMMEL", "UNBALANCED"],
        description: "Warhammers come in several designs, but typically have a flat heavy head on one side for inflicting pummelling damage, and a spiked point on the other for penetrating armour."
    },
    SHIELD_BUCKLER: {
        name: "Shield (Buckler)",
        icon: TEW.ICONS_IDS.WEAPON_SHIELD,
        group: "BASIC",
        groupLabel: "Basic",
        price: "0/18/2",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "Personnal",
        strBonus: true,
        damage: 1,
        qualities: ["SHIELD_1", "DEFENSIVE", "UNDAMAGING"],
        description: "A small shield to save you from harm."
    },
    SHIELD: {
        name: "Shield",
        icon: TEW.ICONS_IDS.WEAPON_SHIELD,
        group: "BASIC",
        groupLabel: "Basic",
        price: "2/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["SHIELD_2", "DEFENSIVE", "UNDAMAGING"],
        description: "A regular shield, ideal for close combat."
    },
    SHIELD_LARGE: {
        name: "Shield (Large)",
        icon: TEW.ICONS_IDS.WEAPON_SHIELD,
        group: "BASIC",
        groupLabel: "Basic",
        price: "3/0/0",
        enc: 3,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["SHIELD_3", "DEFENSIVE", "UNDAMAGING"],
        description: "A large shield to protect you from all enemies"
    },
    PAVISE: {
        name: "Pavise",
        icon: TEW.ICONS_IDS.WEAPON_SHIELD,
        group: "BASIC",
        groupLabel: "Basic",
        price: "3/15/0",
        enc: 4,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["SHIELD_5"],
        description: "The pavise is a large shield carried by crossbowmen to provide shelter on the battlefield as they reload. Roughly 4 feet tall and often painted with the unit’s coat of arms, the crossbowman plants the pavise on the ground like a personal wall."
    },
    CAVALRY_HAMMER: {
        name: "Cavalry Hammer",
        icon: TEW.ICONS_IDS.WEAPON_MACE,
        group: "CAVALRY",
        groupLabel: "Cavalry",
        price: "3/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["PUMMEL"],
        description: "Cavalry hammers are large, weighty weapons, favoured by the Knights of the White Wolf. On foot, they may be used with the Melee (Two-Handed) skill."
    },
    DEMI_LANCE: {
        name: "Demi-Lance",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "CAVALRY",
        groupLabel: "Cavalry",
        price: "1/0/0",
        enc: 2,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["IMPACT", "IMPALE"],
        description: "Lances resemble spears, but with a weighty grip designed to brace the weapon against the arm and chest of a charging knight. The demi-lance is similar, but shorter and lighter."
    },
    LANCE: {
        name: "Lance",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "CAVALRY",
        groupLabel: "Cavalry",
        price: "1/0/0",
        enc: 3,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: ["IMPACT", "IMPALE"],
        description: "Lances resemble spears, but with a weighty grip designed to brace the weapon against the arm and chest of a charging knight. The demi-lance is similar, but shorter and lighter."
    },
    SABRE: {
        name: "Sabre",
        icon: TEW.ICONS_IDS.WEAPON_SABER,
        group: "CAVALRY",
        groupLabel: "Cavalry",
        price: "0/10/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["SLASH_1"],
        description: "empty"
    },
    FOIL: {
        name: "Foil",
        icon: TEW.ICONS_IDS.WEAPON_FOIL,
        group: "FENCING",
        groupLabel: "Fencing",
        price: "5/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["FAST", "IMPALE", "PRECISE", "UNDAMAGING"],
        description: "empty"
    },
    RAPIER: {
        name: "Rapier",
        icon: TEW.ICONS_IDS.WEAPON_RAPIER,
        group: "FENCING",
        groupLabel: "Fencing",
        price: "5/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["FAST", "IMPALE"],
        description: "empty"
    },
    SMALLSWORD: {
        name: "Smallsword",
        icon: TEW.ICONS_IDS.WEAPON_FOIL,
        group: "FENCING",
        groupLabel: "Fencing",
        price: "4/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["FAST", "IMPALE", "PRECISE"],
        description: "empty"
    },
    SPIKED_GAUNTLET: {
        name: "Spiked Gauntlet",
        icon: TEW.ICONS_IDS.WEAPON_GAUNTLET,
        group: "BRAWLING",
        groupLabel: "Brawling",
        price: "2/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["IMPALE", "UNBALANCED"],
        description: "empty"
    },
    BOAT_HOOK: {
        name: "Boat Hook",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "BRAWLING",
        groupLabel: "Brawling",
        price: "0/6/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: ["TRIP", "UNDAMAGING"],
        description: "empty"
    },
    GARROTE: {
        name: "Garrote",
        icon: TEW.ICONS_IDS.WEAPON_CHAINS,
        group: "BRAWLING",
        groupLabel: "Brawling",
        price: "0/1/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["ENTANGLE", "SLOW", "UNBALANCED", "UNDAMAGING"],
        description: "empty"
    },
    UNARMED: {
        name: "Unarmed",
        icon: TEW.ICONS_IDS.WEAPON_GAUNTLET,
        group: "BRAWLING",
        groupLabel: "Brawling",
        price: "0/0/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: ["UNDAMAGING"],
        description: "empty"
    },
    KNUCKLEDUSTERS: {
        name: "Knuckledusters",
        group: "BRAWLING",
        groupLabel: "Brawling",
        price: "0/2/6",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "empty"
    },
    LOCKED_GAUNTLET: {
        name: "Locked Gauntlet",
        icon: TEW.ICONS_IDS.WEAPON_CLAW,
        group: "BRAWLING",
        groupLabel: "Brawling",
        price: "1/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["UNDAMAGING"],
        description: "empty"
    },
    SAP: {
        name: "Sap",
        icon: TEW.ICONS_IDS.WEAPON_GAUNTLET,
        group: "BRAWLING",
        groupLabel: "Brawling",
        price: "0/1/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: ["PUMMEL", "UNBALANCED", "UNDAMAGING"],
        description: "empty"
    },
    GRAIN_FLAIL: {
        name: "Grain Flail",
        icon: TEW.ICONS_IDS.WEAPON_FLAIL,
        group: "FLAIL",
        groupLabel: "Flail",
        price: "0/10/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["DISTRACT", "IMPRECISE", "WRAP"],
        description: "empty"
    },
    FLAIL: {
        name: "Flail",
        icon: TEW.ICONS_IDS.WEAPON_FLAIL,
        group: "FLAIL",
        groupLabel: "Flail",
        price: "2/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 5,
        qualities: ["DISTRACT", "WRAP"],
        description: "empty"
    },
    MILITARY_FLAIL: {
        name: "Military Flail",
        icon: TEW.ICONS_IDS.WEAPON_FLAIL,
        group: "FLAIL",
        groupLabel: "Flail",
        price: "3/0/0",
        enc: 2,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: ["DISTRACT", "IMPRECISE", "TIRING", "WRAP"],
        description: "empty"
    },
    CLOAK: {
        name: "Cloak",
        icon: TEW.ICONS_IDS.WEAPON_CHAINS,
        group: "PARRY",
        groupLabel: "Parry",
        price: "0/10/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: ["ENTANGLE", "DEFENSIVE", "UNDAMAGING"],
        description: "empty"
    },
    MAIN_GAUCHE: {
        name: "Main Gauche",
        icon: TEW.ICONS_IDS.WEAPON_KNIFE,
        group: "PARRY",
        groupLabel: "Parry",
        price: "1/0/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: ["DEFENSIVE"],
        description: "empty"
    },
    SWORDBREAKER: {
        name: "Swordbreaker",
        icon: TEW.ICONS_IDS.WEAPON_BREAKER,
        group: "PARRY",
        groupLabel: "Parry",
        price: "1/2/6",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: ["DEFENSIVE", "TRAP_BLADE"],
        description: "empty"
    },
    WEIGHTED_NET: {
        name: "Weighted Net",
        icon: TEW.ICONS_IDS.WEAPON_CHAINS,
        group: "PARRY",
        groupLabel: "Parry",
        price: "0/10/0",
        enc: 1,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: ["ENTANGLE", "DEFENSIVE", "SHIELD_1", "SLOW", "UNDAMAGING", "WRAP"],
        description: "empty"
    },
    AHLSPIESS: {
        name: "Ahlspiess",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "2/0/0",
        enc: 2,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 3,
        qualities: ["IMPALE", "PENETRATING"],
        description: "empty"
    },
    BILL: {
        name: "Bill",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE", "HACK", "TRIP"],
        description: "empty"
    },
    HALBERD: {
        name: "Halberd",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "2/0/0",
        enc: 3,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE", "HACK", "IMPALE"],
        description: "empty"
    },
    MANCATCHER: {
        name: "Mancatcher",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "2/0/0",
        enc: 3,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 2,
        qualities: ["DEFENSIVE", "ENTANGLE"],
        description: "empty"
    },
    PARTIZAN: {
        name: "Partizan",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE", "IMPALE", "SLASH_2"], // TODO Impale OR Slash
        description: "empty"
    },
    POLLAXE: {
        name: "Pollaxe",
        icon: TEW.ICONS_IDS.WEAPON_AXE,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE", "HACK", "IMPALE", "PUMMEL"], // TODO Hack OR Impale OR Pummel
        description: "empty"
    },
    SPEAR: {
        name: "Spear",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "0/15/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["IMPALE"],
        description: "empty"
    },
    PIKE: {
        name: "Pike",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "0/18/0",
        enc: 4,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["IMPALE"],
        description: "empty"
    },
    QUARTERSTAFF: {
        name: "Quarterstaff",
        icon: TEW.ICONS_IDS.WEAPON_STAFF,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "0/3/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE", "PUMMEL"],
        description: "empty"
    },
    ENCHANTED_STAFF: {
        name: "Enchanted Staff",
        icon: TEW.ICONS_IDS.WEAPON_STAFF,
        group: "POLE_ARM",
        groupLabel: "Pole arm",
        price: "15/0/0",
        enc: 2,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: ["DEFENSIVE", "PUMMEL"],
        description: "empty"
    },
    BASTARD_SWORD: {
        name: "Bastard Sword",
        icon: TEW.ICONS_IDS.WEAPON_SWORD,
        group: "TWO_HANDED",
        groupLabel: "Two handed",
        price: "8/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["DAMAGING", "DEFENSIVE"],
        description: "empty"
    },
    GREAT_AXE: {
        name: "Great Axe",
        icon: TEW.ICONS_IDS.WEAPON_AXE,
        group: "TWO_HANDED",
        groupLabel: "Two handed",
        price: "4/0/0",
        enc: 3,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: ["HACK", "IMPACT", "TIRING"],
        description: "empty"
    },
    FLAMBERGE_ZWEIHANDER: {
        name: "Flamberge Zweihander",
        icon: TEW.ICONS_IDS.WEAPON_SWORD,
        group: "TWO_HANDED",
        groupLabel: "Two handed",
        price: "30/0/0",
        enc: 3,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["DAMAGING", "HACK", "SLASH_2"],
        description: "empty"
    },
    PICK: {
        name: "Pick",
        icon: TEW.ICONS_IDS.WEAPON_MACE,
        group: "TWO_HANDED",
        groupLabel: "Two handed",
        price: "0/9/0",
        enc: 3,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 5,
        qualities: ["DAMAGING", "IMPALE", "SLOW"],
        description: "empty"
    },
    WARHAMMER_TH: {
        name: "Warhammer",
        icon: TEW.ICONS_IDS.WEAPON_MACE,
        group: "TWO_HANDED",
        groupLabel: "Two handed",
        price: "3/0/0",
        enc: 3,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 6,
        qualities: ["DAMAGING", "PUMMEL", "SLOW"],
        description: "empty"
    },
    ZWEIHANDER: {
        name: "Zweihander",
        icon: TEW.ICONS_IDS.WEAPON_SWORD,
        group: "TWO_HANDED",
        groupLabel: "Two handed",
        price: "10/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: ["DAMAGING", "HACK"],
        description: "empty"
    }
};

TEW.RANGED_WEAPONS = TEW.RANGED_WEAPONS || {
    ELF_BOW: {
        name: "Elf Bow",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        twoHanded: true,
        price: "10/0/0",
        enc: 2,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 150,
        strBonus: true,
        damage: 4,
        qualities: ["DAMAGING", "PRECISE"],
        description: "empty"
    },
    LONGBOW: {
        name: "Longbow",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        twoHanded: true,
        price: "5/0/0",
        enc: 3,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: 100,
        strBonus: true,
        damage: 4,
        qualities: ["DAMAGING"],
        description: "empty"
    },
    BOW: {
        name: "Bow",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        twoHanded: true,
        price: "4/0/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 50,
        strBonus: true,
        damage: 3,
        qualities: [],
        description: "empty"
    },
    SHORTBOW: {
        name: "Shortbow",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        twoHanded: true,
        price: "3/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 20,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "empty"
    },
    CROSSBOW_PISTOL: {
        name: "Crossbow Pistol",
        icon: TEW.ICONS_IDS.WEAPON_CROSSBOW,
        group: "CROSSBOW",
        groupLabel: "Crossbow",
        twoHanded: false,
        price: "6/0/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: 10,
        strBonus: false,
        damage: 7,
        qualities: ["PISTOL"],
        description: "empty"
    },
    HEAVY_CROSSBOW: {
        name: "Heavy Crossbow",
        icon: TEW.ICONS_IDS.WEAPON_CROSSBOW,
        group: "CROSSBOW",
        groupLabel: "Crossbow",
        twoHanded: true,
        price: "7/0/0",
        enc: 3,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        range: 100,
        strBonus: false,
        damage: 9,
        qualities: ["DAMAGING", "RELOAD_2"],
        description: "empty"
    },
    CROSSBOW: {
        name: "Crossbow",
        icon: TEW.ICONS_IDS.WEAPON_CROSSBOW,
        group: "CROSSBOW",
        groupLabel: "Crossbow",
        twoHanded: true,
        price: "5/0/0",
        enc: 2,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 60,
        strBonus: false,
        damage: 9,
        qualities: ["RELOAD_1"],
        description: "empty"
    },
    LASSO: {
        name: "Lasso",
        icon: TEW.ICONS_IDS.WEAPON_WHIP,
        group: "ENTANGLING",
        groupLabel: "Entangling",
        twoHanded: false,
        price: "0/6/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 6,
        strBonus: false,
        damage: 0,
        qualities: ["ENTANGLE"],
        description: "empty"
    },
    WHIP: {
        name: "Whip",
        icon: TEW.ICONS_IDS.WEAPON_WHIP,
        group: "ENTANGLING",
        groupLabel: "Entangling",
        twoHanded: false,
        price: "0/5/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 2,
        qualities: ["ENTANGLE"],
        description: "empty"
    },
    SLING: {
        name: "Sling",
        icon: TEW.ICONS_IDS.WEAPON_SLING,
        group: "SLING",
        groupLabel: "Sling",
        twoHanded: false,
        price: "0/1/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 60,
        strBonus: false,
        damage: 6,
        qualities: [],
        description: "empty"
    },
    STAFF_SLING: {
        name: "Staff Sling",
        icon: TEW.ICONS_IDS.WEAPON_SLING,
        group: "SLING",
        groupLabel: "Sling",
        twoHanded: true,
        price: "0/4/0",
        enc: 2,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: 100,
        strBonus: false,
        damage: 7,
        qualities: [],
        description: "empty"
    },
    BOLAS: {
        name: "Bolas",
        icon: TEW.ICONS_IDS.WEAPON_CHAINS,
        group: "THROWING",
        groupLabel: "Throwing",
        twoHanded: false,
        price: "0/1/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        range: 9,
        strBonus: true,
        damage: 0,
        qualities: ["ENTANGLE"],
        description: "empty"
    },
    DART: {
        name: "Dart",
        icon: TEW.ICONS_IDS.WEAPON_SLING,
        group: "THROWING",
        groupLabel: "Throwing",
        twoHanded: false,
        price: "0/2/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: 6,
        strBonus: true,
        damage: 1,
        qualities: ["IMPALE"],
        description: "empty"
    },
    JAVELIN: {
        name: "Javelin",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "THROWING",
        groupLabel: "Throwing",
        twoHanded: false,
        price: "0/10/6",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: 9,
        strBonus: true,
        damage: 3,
        qualities: ["IMPALE"],
        description: "empty"
    },
    ROCK: {
        name: "Rock",
        icon: TEW.ICONS_IDS.WEAPON_GAUNTLET,
        group: "THROWING",
        groupLabel: "Throwing",
        twoHanded: false,
        price: "0/0/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 9,
        strBonus: true,
        damage: 0,
        qualities: [],
        description: "empty"
    },
    THROWING_AXE: {
        name: "Throwing Axe",
        icon: TEW.ICONS_IDS.WEAPON_AXE,
        group: "THROWING",
        groupLabel: "Throwing",
        twoHanded: false,
        price: "1/0/0",
        enc: 1,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 3,
        qualities: ["HACK"],
        description: "empty"
    },
    THROWING_KNIFE: {
        name: "Throwing Knife",
        icon: TEW.ICONS_IDS.WEAPON_KNIFE,
        group: "THROWING",
        groupLabel: "Throwing",
        twoHanded: false,
        price: "0/18/0",
        enc: 0,
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "empty"
    },
    BOMB: {
        name: "Bomb",
        icon: TEW.ICONS_IDS.WEAPON_BOMB,
        group: "EXPLOSIVES",
        groupLabel: "Explosives",
        twoHanded: false,
        price: "3/0/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        range: 3,
        strBonus: false,
        damage: 12,
        qualities: ["BLAST_5", "DANGEROUS", "IMPACT"],
        description: "empty"
    },
    INCENDIARY: {
        name: "Incendiary",
        icon: TEW.ICONS_IDS.WEAPON_BOMB,
        group: "EXPLOSIVES",
        groupLabel: "Explosives",
        twoHanded: false,
        price: "1/0/0",
        enc: 0,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: 3,
        strBonus: false,
        damage: 0, // TODO
        qualities: ["BLAST_4", "DANGEROUS"],
        description: "empty"
    },
    BLUNDERBUSS: {
        name: "Blunderbuss",
        icon: TEW.ICONS_IDS.WEAPON_SHOTGUN,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "2/0/0",
        enc: 1,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: 20,
        strBonus: false,
        damage: 8,
        qualities: ["DANGEROUS", "RELOAD_2"],
        description: "empty"
    },
    HOCHLAND_LONG_RIFLE: {
        name: "Hochland Long Rifle",
        icon: TEW.ICONS_IDS.WEAPON_RIFLE,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "100/0/0",
        enc: 3,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 100,
        strBonus: false,
        damage: 9,
        qualities: ["ACCURATE", "PRECISE", "RELOAD_4"],
        description: "empty"
    },
    HANDGUN: {
        name: "Handgun",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "4/0/0",
        enc: 2,
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: 50,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS", "RELOAD_3"],
        description: "empty"
    },
    PISTOL: {
        name: "Pistol",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: false,
        price: "8/0/0",
        enc: 0,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        range: 20,
        strBonus: false,
        damage: 8,
        qualities: ["PISTOL", "RELOAD_1"],
        description: "empty"
    },
    MATCHLOCK_HANDGUN: {
        name: "Matchlock Handgun",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "2/0/0",
        enc: 2,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        range: 50,
        strBonus: false,
        damage: 8,
        qualities: ["DANGEROUS", "RELOAD_4"],
        description: "empty"
    },
    MATCHLOCK_BLUNDERBUSS: {
        name: "Matchlock Blunderbuss",
        icon: TEW.ICONS_IDS.WEAPON_SHOTGUN,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "1/0/0",
        enc: 1,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        range: 20,
        strBonus: false,
        damage: 7,
        qualities: ["SPREAD_3", "DANGEROUS", "RELOAD_3"],
        description: "empty"
    },
    ARQUEBUS: {
        name: "Arquebus",
        icon: TEW.ICONS_IDS.WEAPON_RIFLE,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "5/0/0",
        enc: 3,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 40,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS", "IMPRECISE", "RELOAD_5"],
        description: "empty"
    },
    DOUBLE_BARRELLED_HANDGUN: {
        name: "Double-Barrelled Handgun",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "7/0/0",
        enc: 3,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 50,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS", "REPEATER", "RELOAD_4"],
        description: "empty"
    },
    GRIFFONSFOOT_PISTOL: {
        name: "Griffonsfoot Pistol",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: false,
        price: "10/0/0",
        enc: 1,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 10,
        strBonus: false,
        damage: 7,
        qualities: ["IMPRECISE", "SPREAD_5", "RELOAD_6"],
        description: "empty"
    },
    GUN_AXE: {
        name: "GunAxe",
        icon: TEW.ICONS_IDS.WEAPON_AXE,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "8/0/0",
        enc: 1,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS", "IMPRECISE", "RELOAD_4"],
        description: "empty"
    },
    GUN_HALBERD: {
        name: "Gun Halberd",
        icon: TEW.ICONS_IDS.WEAPON_SPEAR,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        twoHanded: true,
        price: "10/0/0",
        enc: 3,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS", "IMPRECISE", "RELOAD_4"],
        description: "empty"
    },
    REPEATER_HANDGUN: {
        name: "Repeater Handgun",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "ENGINEERING",
        groupLabel: "Engineering",
        twoHanded: true,
        price: "10/0/0",
        enc: 3,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: ["DANGEROUS", "RELOAD_5", "REPEATER_4"],
        description: "empty"
    },
    REPEATER_PISTOL: {
        name: "Repeater Pistol",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "ENGINEERING",
        groupLabel: "Engineering",
        twoHanded: false,
        price: "15/0/0",
        enc: 1,
        availability: "RARE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_RARE,
        range: 10,
        strBonus: false,
        damage: 8,
        qualities: ["DANGEROUS", "PISTOL", "RELOAD_4", "REPEATER_4"],
        description: "empty"
    },
    HAND_MORTAR: {
        name: "Hand Mortar",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "ENGINEERING",
        groupLabel: "Engineering",
        twoHanded: true,
        price: "50/0/0",
        enc: 3,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 7,
        qualities: ["DANGEROUS", "IMPRECISE", "RELOAD_2"],
        description: "empty"
    },
    CANE_PISTOL: {
        name: "Cane Pistol",
        icon: TEW.ICONS_IDS.WEAPON_PISTOL,
        group: "ENGINEERING",
        groupLabel: "Engineering",
        twoHanded: false,
        price: "15/0/0",
        enc: 3,
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: 10,
        strBonus: false,
        damage: 8,
        qualities: ["DANGEROUS", "IMPRECISE", "RELOAD_6"],
        description: "empty"
    }
};

TEW.AMMUNITION = TEW.AMMUNITION || {
    ARROW: {
        name: "Arrow",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        ammountSold: 12,
        price: "0/5/0",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: ["IMPALE"],
        description: "empty"
    },
    BARBED_ARROW: {
        name: "Barbed Arrow",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        ammountSold: 12,
        price: "0/8/0",
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+0",
        qualities: ["IMPALE", "SLASH_1"],
        description: "empty"
    },
    BODKIN_ARROW: {
        name: "Bodkin Arrow",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        ammountSold: 12,
        price: "0/8/0",
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+0",
        qualities: ["IMPALE", "PENETRATING"],
        description: "empty"
    },
    ELF_ARROW: {
        name: "Elf Arrow",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        ammountSold: 1,
        price: "0/6/0",
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: "+50",
        damage: "+1",
        qualities: ["ACCURATE", "IMPALE", "PENETRATING"],
        description: "empty"
    },
    SHARO_STICK: {
        name: "Sharp Stick",
        icon: TEW.ICONS_IDS.WEAPON_BOW,
        group: "BOW",
        groupLabel: "Bow",
        ammountSold: 1,
        price: "0/0/0",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "/2",
        damage: "-2",
        qualities: ["DANGEROUS", "IMPRECISE", "UNDAMAGING"],
        description: "empty"
    },
    BOLT: {
        name: "Bolt",
        icon: TEW.ICONS_IDS.WEAPON_CROSSBOW,
        group: "CROSSBOW",
        groupLabel: "Crossbow",
        ammountSold: 12,
        price: "0/5/0",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: ["IMPALE"],
        description: "empty"
    },
    LEAD_BULLET: {
        name: "Lead Bullet",
        icon: TEW.ICONS_IDS.WEAPON_SLING,
        group: "SLING",
        groupLabel: "Sling",
        ammountSold: 12,
        price: "0/0/4",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "-10",
        damage: "+1",
        qualities: ["PUMMEL"],
        description: "empty"
    },
    PEBBLE: {
        name: "Pebble",
        icon: TEW.ICONS_IDS.WEAPON_SLING,
        group: "SLING",
        groupLabel: "Sling",
        ammountSold: 1,
        price: "0/0/0",
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: "-10",
        damage: "-2",
        qualities: ["IMPRECISE", "UNDAMAGING"],
        description: "empty"
    },
    STONE_BULLET: {
        name: "Stone Bullet",
        icon: TEW.ICONS_IDS.WEAPON_SLING,
        group: "SLING",
        groupLabel: "Sling",
        ammountSold: 12,
        price: "0/0/2",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: ["PUMMEL"],
        description: "empty"
    },
    BULLET_AND_POWDER: {
        name: "Bullet and Powder",
        icon: TEW.ICONS_IDS.PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        ammountSold: 12,
        price: "0/3/3",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+1",
        qualities: ["IMPALE", "PENETRATING"],
        description: "empty"
    },
    PAPER_CARTRIDGE: {
        name: "Paper Cartridge",
        icon: TEW.ICONS_IDS.PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        ammountSold: 12,
        price: "0/5/0",
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+1",
        qualities: ["IMPALE", "PENETRATING", "FASTER_RELOAD"],
        description: "empty"
    },
    AQSHY_INFUSED_POWDER: {
        name: "Aqshy-Infused Powder",
        icon: TEW.ICONS_IDS.PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        ammountSold: 12,
        price: "1/0/0",
        availability: "EXOTIC",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_EXOTIC,
        range: "+10",
        damage: "+2",
        qualities: ["IMPALE", "PENETRATING"],
        description: "empty"
    },
    PRECISION_SHOT_AND_POWDER: {
        name: "Precision Shot and Powder",
        icon: TEW.ICONS_IDS.PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        ammountSold: 1,
        price: "0/3/0",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+1",
        qualities: ["IMPALE", "PENETRATING", "PRECISE"],
        description: "empty"
    },
    IMPROVISED_SHOT_AND_POWDER: {
        name: "Improvised Shot and Powder",
        icon: TEW.ICONS_IDS.PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        ammountSold: 1,
        price: "0/0/3",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "/2",
        damage: "+0",
        qualities: [],
        description: "empty"
    },
    SMALL_SHOT_AND_POWDER: {
        name: "Small Shot and Powder",
        icon: TEW.ICONS_IDS.PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        ammountSold: 12,
        price: "0/3/3",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: ["SPREAD_3"],
        description: "empty"
    },
    SCRAP_AND_POWDER: {
        name: "Scrap and Powder",
        icon: TEW.ICONS_IDS.PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        ammountSold: 12,
        price: "0/2/0",
        availability: "COMMON",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_COMMON,
        range: "/2",
        damage: "-1",
        qualities: ["SPREAD_3", "INFECTED"],
        description: "empty"
    },
    LARGE_BULLET_AND_POWDER: {
        name: "Large Bullet and Powder",
        icon: TEW.ICONS_IDS.PISTOL,
        group: "BLACKPOWDER",
        groupLabel: "Blackpowder",
        ammountSold: 12,
        price: "1/0/0",
        availability: "SCARCE",
        availabilityIcon: TEW.ICONS_IDS.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+2",
        qualities: ["IMPALE", "IMPACT", "PENETRATING"],
        description: "empty"
    }
};

TEW.WEAPON_IDS = Object.keys(TEW.MELEE_WEAPONS).sort((a, b) => a.localeCompare(b))
        .concat(Object.keys(TEW.RANGED_WEAPONS).sort((a, b) => a.localeCompare(b)));
TEW.WEAPONS_ARRAY = Object.entries(TEW.MELEE_WEAPONS).sort((a, b) => a[0].localeCompare(b[0]))
        .concat(Object.entries(TEW.RANGED_WEAPONS).sort((a, b) => a[0].localeCompare(b[0])));

