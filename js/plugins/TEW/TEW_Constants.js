// === \$Begin file import
var Imported = Imported || {};
Imported.TEW_Constants = true;
var TEW = TEW || {};
TEW.DATABASE = TEW.DATABASE || {};
// === \$End file import
// ====== //
// === \$Begin file TEW_Icons
TEW.DATABASE.ICONS = {};
TEW.DATABASE.ICONS.SET = {
    // Item groups
    ITEM_CLOTHES: 154,
    ITEM_FOOD: 265,
    ITEM_TOOLS: 216,
    ITEM_BOOKS: 189,
    ITEM_DRUGS: 219,
    // Item availability
    AVAILABILITY_COMMON: 89,
    AVAILABILITY_SCARCE: 88,
    AVAILABILITY_RARE: 87,
    AVAILABILITY_EXOTIC: 90,
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
};
// === \$End file TEW_Icons
// ====== //
// === \$Begin file Window_Dice
//---------------------------------------
// Window_Dice
//
// The window for displaying a dice roll.
function Window_Dice() {
    this.initialize.apply(this, arguments);
}
Window_Dice.prototype = Object.create(Window_Base.prototype);
Window_Dice.prototype.constructor = Window_Dice;
Window_Dice.prototype.initialize = function (x, y, tens, units) {
    Window_Base.prototype.initialize.call(this, x, y, 240, 110); // temp !!
    this._tens = tens;
    this._units = units;
    this.refresh();
};
Window_Dice.prototype.windowWidth = function () {
    return 340;
};
Window_Dice.prototype.windowHeight = function () {
    return 100;
};
Window_Dice.prototype.refresh = function () {
    this.contents.clear();
    this.contents.drawDie(0, 1, this._tens, 'black', 'lightblue');
    this.contents.drawDie(100, 1, this._units, 'black', 'lightblue');
};
Window_Dice.prototype.open = function () {
    this.refresh();
    Window_Base.prototype.open.call(this);
};
// === \$End file Window_Dice
// ====== //
// === \$Begin file TEW_Armors
TEW.DATABASE.ARMORS = {};
TEW.DATABASE.ARMORS.SET = {
    SOFT_KIT: {
        name: "Soft Kit",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 0 /* ArmorGroup.SOFT_KIT */,
        groupLabel: "Soft Kit" /* ArmorGroupLabel.SOFT_KIT */,
        price: "0/18/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */, 1 /* BodyLocation.LEGS */],
        ap: 0,
        qualities: [],
        forbiddenWith: [],
        description: "Description has to be done."
    },
    REINFORCED_SOFT_KIT: {
        name: "Reinforced Soft Kit",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: 0 /* ArmorGroup.SOFT_KIT */,
        groupLabel: "Soft Kit" /* ArmorGroupLabel.SOFT_KIT */,
        price: "2/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */, 1 /* BodyLocation.LEGS */],
        ap: 1,
        qualities: [0 /* ArmorQuality.PARTIAL */, 1 /* ArmorQuality.REINFORCED */],
        forbiddenWith: [],
        description: "Description has to be done."
    },
    LEATHER_JACK: {
        name: "Leather Jack",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 1 /* ArmorGroup.BOILED_LEATHER */,
        groupLabel: "Boiled Leather" /* ArmorGroupLabel.BOILED_LEATHER */,
        price: "0/12/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */],
        ap: 1,
        qualities: [],
        forbiddenWith: [4 /* ArmorGroup.CHAINMAIL */, 2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    LEATHER_JERKIN: {
        name: "Leather Jerkin",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 1 /* ArmorGroup.BOILED_LEATHER */,
        groupLabel: "Boiled Leather" /* ArmorGroupLabel.BOILED_LEATHER */,
        price: "0/10/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [3 /* BodyLocation.BODY */],
        ap: 1,
        qualities: [],
        forbiddenWith: [4 /* ArmorGroup.CHAINMAIL */, 2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    LEATHER_LEGGINGS: {
        name: "Leather Leggings",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_LEGS_SLOT,
        group: 1 /* ArmorGroup.BOILED_LEATHER */,
        groupLabel: "Boiled Leather" /* ArmorGroupLabel.BOILED_LEATHER */,
        price: "0/14/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [1 /* BodyLocation.LEGS */],
        ap: 1,
        qualities: [],
        forbiddenWith: [4 /* ArmorGroup.CHAINMAIL */, 2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    LEATHER_SKULLCAP: {
        name: "Leather Skullcap",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_HEAD_SLOT,
        group: 1 /* ArmorGroup.BOILED_LEATHER */,
        groupLabel: "Boiled Leather" /* ArmorGroupLabel.BOILED_LEATHER */,
        price: "0/8/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 1,
        qualities: [],
        forbiddenWith: [4 /* ArmorGroup.CHAINMAIL */, 2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    CHAINMAIL_CHAUSSES: {
        name: "Chainmail Chausses",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_LEGS_SLOT,
        group: 4 /* ArmorGroup.CHAINMAIL */,
        groupLabel: "Chainmail" /* ArmorGroupLabel.CHAINMAIL */,
        price: "2/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ STEALTH: "-10" }],
        locations: [1 /* BodyLocation.LEGS */],
        ap: 2,
        qualities: [],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    CHAINMAIL_COAT: {
        name: "Chainmail Coat",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: 4 /* ArmorGroup.CHAINMAIL */,
        groupLabel: "Chainmail" /* ArmorGroupLabel.CHAINMAIL */,
        price: "3/0/0",
        enc: 4,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [{ STEALTH: "-10" }],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */],
        ap: 2,
        qualities: [],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    CHAINMAIL_COIF: {
        name: "Chainmail Coif",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 4 /* ArmorGroup.CHAINMAIL */,
        groupLabel: "Chainmail" /* ArmorGroupLabel.CHAINMAIL */,
        price: "1/0/0",
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ PERCEPTION: "-10", STEALTH: "-10" }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 2,
        qualities: [0 /* ArmorQuality.PARTIAL */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    CHAINMAIL_SHIRT: {
        name: "Chainmail Shirt",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: 4 /* ArmorGroup.CHAINMAIL */,
        groupLabel: "Chainmail" /* ArmorGroupLabel.CHAINMAIL */,
        price: "2/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ STEALTH: "-10" }],
        locations: [3 /* BodyLocation.BODY */],
        ap: 2,
        qualities: [],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    BRIGANDINE_JACK: {
        name: "Brigandine Jack",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 5 /* ArmorGroup.BRIGANDINE */,
        groupLabel: "Brigandine" /* ArmorGroupLabel.BRIGANDINE */,
        price: "3/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */],
        ap: 2,
        qualities: [3 /* ArmorQuality.OVERCOAT */],
        forbiddenWith: [2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    BRIGANDINE_JERKIN: {
        name: "Brigandine Jerkin",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 5 /* ArmorGroup.BRIGANDINE */,
        groupLabel: "Brigandine" /* ArmorGroupLabel.BRIGANDINE */,
        price: "2/0/0",
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [3 /* BodyLocation.BODY */],
        ap: 2,
        qualities: [3 /* ArmorQuality.OVERCOAT */],
        forbiddenWith: [2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    BREASTPLATE: {
        name: "Breastplate",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: 3 /* ArmorGroup.BREASTPLATE */,
        groupLabel: "Breastplate" /* ArmorGroupLabel.BREASTPLATE */,
        price: "10/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [3 /* BodyLocation.BODY */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 3 /* ArmorQuality.OVERCOAT */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [2 /* ArmorGroup.PLATE */],
        description: "Description has to be done."
    },
    BRACERS: {
        name: "Bracers",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_ARMS_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: "8/0/0",
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 6 /* ArmorQuality.REQUIRES_KIT */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "Description has to be done."
    },
    OPEN_HELM: {
        name: "Open Helm",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: "2/0/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [{ PERCEPTION: "-10" }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 3,
        qualities: [0 /* ArmorQuality.PARTIAL */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "Description has to be done."
    },
    PLATE_LEGGINGS: {
        name: "Plate Leggings",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_LEGS_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: "10/0/0",
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ STEALTH: "-10" }],
        locations: [1 /* BodyLocation.LEGS */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 6 /* ArmorQuality.REQUIRES_KIT */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "Description has to be done."
    },
    GREAT_HELM: {
        name: "Great Helm",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: "2/0/0",
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "The Great Helm is the archetypal form of a fully enclosed metal helmet. They are considered old fashioned in Tilea and the Empire but are still common in Bretonnia. Early examples of these helmets had a square top. Later designs tend to have a conical top which lessens the impact of hammers and swords."
    },
    BASCINET: {
        name: "Bascinet",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: "3/0/0",
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 4 /* ArmorQuality.VISOR */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "The Bascinet typically incorporates a conical ArmorQuality.VISOR, leading it to be known as a ‘pigs-snout’ helmet by many soldiers. This design provides additional protection against missile fire, as slingshots and arrows are deflected by the conical ArmorQuality.VISOR. If missile fire strikes the wearer of a Bascinet, and originates from in front of the wearer, then the helmet provides 4 APs rather than 3."
    },
    ARMET: {
        name: "Armet",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: "3/0/0",
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 4 /* ArmorQuality.VISOR */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "The Armet is a Tilean design which fits closely on the head, being narrower around the neck. To facilitate the snug fit the helmet has an integral mechanism that must be worked to open and close it. The exacting design of the Armet means that it can withstand blows that might damage other helmets. Every time the helmet might lose a point of AP, roll on the Armet Damage table."
    },
    SALLET: {
        name: "Sallet",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: "4/0/0",
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{
                PERCEPTION: "-20"
            }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 4 /* ArmorQuality.VISOR */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "The Sallet is typified by having heavy plates projecting over the neck to the back, and being combined with separate pieces, either a gorget or bevor, to provide protection to the throat, chin, and face. A wearer of a Sallet who takes a Critical Hit to the head will take 1 less Wound from the Critical Hit than they otherwise would."
    }
};
// TODO order in inventory ?
TEW.DATABASE.ARMORS.IDS = Object.keys(TEW.DATABASE.ARMORS.SET).sort((a, b) => a.localeCompare(b));
// Make an array based on the TEW.ARMORS object for easy access
TEW.DATABASE.ARMORS.ARRAY = TEW.DATABASE.ARMORS.IDS.map((key) => [key, TEW.DATABASE.ARMORS.SET[key]]);
// === \$End file TEW_Armors
// ====== //
// === \$Begin file TEW_Competences
TEW.DATABASE.COMPS = {};
TEW.DATABASE.COMPS.SET = {
    ANIMAL_CARE: {
        name: "Animal Care",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    ANIMAL_TRAINING: {
        name: "Animal Training",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    ART_CARTOGRAPHY: {
        name: "Art (Cartography)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    ART_ENGRAVING: {
        name: "Art (Engraving)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    ART_MOSAICS: {
        name: "Art (Mosaics)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    ART_SCULPTURE: {
        name: "Art (Sculpture)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    ART_TATTOO: {
        name: "Art (Tattoo)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    ART_WEAVING: {
        name: "Art (Weaving)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    ATHLETICS: {
        name: "Athletics",
        stat: "agil" /* Stat.AGIL */,
        isBase: true
    },
    BRIBERY: {
        name: "Bribery",
        stat: "felw" /* Stat.FELW */,
        isBase: true
    },
    CHANNELLING_AQSHY: {
        name: "Channelling (Aqshy)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_AZYR: {
        name: "Channelling (Azyr)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_CHAMON: {
        name: "Channelling (Chamon)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_DHAR: {
        name: "Channelling (Dhar)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_GHUR: {
        name: "Channelling (Ghur)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_GHYRAN: {
        name: "Channelling (Ghyran)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_HYSH: {
        name: "Channelling (Hysh)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_SHYISH: {
        name: "Channelling (Shyish)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_ULGU: {
        name: "Channelling (Ulgu)",
        stat: "will" /* Stat.WILL */,
        isBase: false
    },
    CHARM: {
        name: "Charm",
        stat: "felw" /* Stat.FELW */,
        isBase: true
    },
    CHARM_ANIMAL: {
        name: "Charm Animal",
        stat: "will" /* Stat.WILL */,
        isBase: true
    },
    CLIMB: {
        name: "Climb",
        stat: "strg" /* Stat.STRG */,
        isBase: true
    },
    CONSUME_ALCOHOL: {
        name: "Consume Alcohol",
        stat: "toug" /* Stat.TOUG */,
        isBase: true
    },
    COOL: {
        name: "Cool",
        stat: "will" /* Stat.WILL */,
        isBase: true
    },
    DODGE: {
        name: "Dodge",
        stat: "agil" /* Stat.AGIL */,
        isBase: true
    },
    DRIVE: {
        name: "Drive",
        stat: "agil" /* Stat.AGIL */,
        isBase: true
    },
    ENDURANCE: {
        name: "Endurance",
        stat: "toug" /* Stat.TOUG */,
        isBase: true
    },
    ENTERTAIN_ACTING: {
        name: "Entertain (Acting)",
        stat: "felw" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_COMEDY: {
        name: "Entertain (Comedy)",
        stat: "felw" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_SINGING: {
        name: "Entertain (Singing)",
        stat: "felw" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_STORYTELLING: {
        name: "Entertain (Storytelling)",
        stat: "felw" /* Stat.FELW */,
        isBase: false
    },
    EVALUATE: {
        name: "Evaluate",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    GAMBLE: {
        name: "Gamble",
        stat: "intl" /* Stat.INTL */,
        isBase: true
    },
    GOSSIP: {
        name: "Gossip",
        stat: "felw" /* Stat.FELW */,
        isBase: true
    },
    HAGGLE: {
        name: "Haggle",
        stat: "felw" /* Stat.FELW */,
        isBase: true
    },
    HEAL: {
        name: "Heal",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    INTIMIDATE: {
        name: "Intimidate",
        stat: "strg" /* Stat.STRG */,
        isBase: true
    },
    INTUITION: {
        name: "Intuition",
        stat: "init" /* Stat.INIT */,
        isBase: true
    },
    LANGUAGE_BATTLE: {
        name: "Language (Battle Tongue)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_BRETONNIAN: {
        name: "Language (Bretonnian)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_CLASSICAL: {
        name: "Language (Classical)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_ELTHARIN: {
        name: "Language (Eltharin)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_GUILDER: {
        name: "Language (Guilder)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_KHAZALID: {
        name: "Language (Khazalid)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_MAGICK: {
        name: "Language (Magick)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_MIDDENLANDER: {
        name: "Language (Middenlander)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_WASTELANDER: {
        name: "Language (Wastelander)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LEADERSHIP: {
        name: "Leadership",
        stat: "felw" /* Stat.FELW */,
        isBase: true
    },
    LORE_BEASTS: {
        name: "Lore (Beasts)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_CHEMISTRY: {
        name: "Lore (Chemistry)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_DEMONOLOGY: {
        name: "Lore (Demonology)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_EMPIRE: {
        name: "Lore (Empire)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_ENGINEERING: {
        name: "Lore (Engineering)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_HERALDRY: {
        name: "Lore (Heraldry)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_HERBS: {
        name: "Lore (Herbs)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_HISTORY: {
        name: "Lore (History)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_LAW: {
        name: "Lore (Law)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_MAGIC: {
        name: "Lore (Magic)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_MEDICINE: {
        name: "Lore (Medicine)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_MIDDENHEIM: {
        name: "Lore (Middenheim)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_MIDDENLAND: {
        name: "Lore (Middenland)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_MYRMIDIA: {
        name: "Lore (Myrmidia)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_NECROMANCY: {
        name: "Lore (Necromancy)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_NOBILITY: {
        name: "Lore (Nobility)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_REIKLAND: {
        name: "Lore (Reikland)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_SCIENCE: {
        name: "Lore (Science)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_SIGMAR: {
        name: "Lore (Sigmar)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_THEOLOGY: {
        name: "Lore (Theology)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_ULRIC: {
        name: "Lore (Ulric)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    LORE_WAR: {
        name: "Lore (War)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    MELEE_BASIC: {
        name: "Melee (Basic)",
        stat: "weas" /* Stat.WEAS */,
        isBase: true
    },
    MELEE_BRAWLING: {
        name: "Melee (Brawling)",
        stat: "weas" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_CAVALRY: {
        name: "Melee (Cavalry)",
        stat: "weas" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_FENCING: {
        name: "Melee (Fencing)",
        stat: "weas" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_FLAIL: {
        name: "Melee (Flail)",
        stat: "weas" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_PARRY: {
        name: "Melee (Parry)",
        stat: "weas" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_POLE_ARM: {
        name: "Melee (Pole-Arm)",
        stat: "weas" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_TWO_HANDED: {
        name: "Melee (Two-Handed)",
        stat: "weas" /* Stat.WEAS */,
        isBase: false
    },
    NAVIGATION: {
        name: "Navigation",
        stat: "init" /* Stat.INIT */,
        isBase: true
    },
    OUTDOOR_SURVIVAL: {
        name: "Outdoor Survival",
        stat: "intl" /* Stat.INTL */,
        isBase: true
    },
    PERCEPTION: {
        name: "Perception",
        stat: "init" /* Stat.INIT */,
        isBase: true
    },
    PERFORM_ACROBATICS: {
        name: "Perform (Acrobatics)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_CLOWNING: {
        name: "Perform (Clowning)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_DANCING: {
        name: "Perform (Dancing)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_FIREBREATHING: {
        name: "Perform (Firebreathing)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_JUGGLING: {
        name: "Perform (Juggling)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_MIMING: {
        name: "Perform (Miming)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_ROPE_WALKING: {
        name: "Perform (Rope Walking)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    PICK_LOCK: {
        name: "Pick Lock",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_BAGPIPE: {
        name: "Play (Bagpipe)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_DRUM: {
        name: "Play (Drum)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_FLUTE: {
        name: "Play (Flute)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_LUTE: {
        name: "Play (Lute)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_HARPSICHORD: {
        name: "Play (Harpsichord)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_HORN: {
        name: "Play (Horn)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_VIOLIN: {
        name: "Play (Violin)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    PREY: {
        name: "Prey",
        stat: "felw" /* Stat.FELW */,
        isBase: false
    },
    RANGED_BLACKPOWDER: {
        name: "Ranged (Blackpowder)",
        stat: "bals" /* Stat.BALS */,
        isBase: false
    },
    RANGED_BOW: {
        name: "Ranged (Bow)",
        stat: "bals" /* Stat.BALS */,
        isBase: false
    },
    RANGED_CROSSBOW: {
        name: "Ranged (Crossbow)",
        stat: "bals" /* Stat.BALS */,
        isBase: false
    },
    RANGED_ENGINEERING: {
        name: "Ranged (Engineering)",
        stat: "bals" /* Stat.BALS */,
        isBase: false
    },
    RANGED_ENTANGLING: {
        name: "Ranged (Entangling)",
        stat: "bals" /* Stat.BALS */,
        isBase: false
    },
    RANGED_EXPLOSIVES: {
        name: "Ranged (Explosives)",
        stat: "bals" /* Stat.BALS */,
        isBase: false
    },
    RANGED_SLING: {
        name: "Ranged (Sling)",
        stat: "bals" /* Stat.BALS */,
        isBase: false
    },
    RANGED_THROWING: {
        name: "Ranged (Throwing)",
        stat: "bals" /* Stat.BALS */,
        isBase: false
    },
    RESEARCH: {
        name: "Research",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    RIDE_BADGER: {
        name: "Ride (Badger)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    RIDE_HORSE: {
        name: "Ride (Horse)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    ROW: {
        name: "Row",
        stat: "strg" /* Stat.STRG */,
        isBase: true
    },
    SAIL: {
        name: "Sail",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    SECRET_SIGNS_GUILD: {
        name: "Secret Signs (Guild)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_RANGER: {
        name: "Secret Signs (Ranger)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_SCOUT: {
        name: "Secret Signs (Scout)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_THIEF: {
        name: "Secret Signs (Thief)",
        stat: "intl" /* Stat.INTL */,
        isBase: false
    },
    SET_TRAP: {
        name: "Set Trap",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    SLEIGHT_OF_HAND: {
        name: "Sleight Of Hand",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    STEALTH: {
        name: "Stealth",
        stat: "agil" /* Stat.AGIL */,
        isBase: true
    },
    STEALTH_RURAL: {
        name: "Stealth (Rural)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    STEALTH_UNDERGROUND: {
        name: "Stealth (Underground)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    STEALTH_URBAN: {
        name: "Stealth (Urban)",
        stat: "agil" /* Stat.AGIL */,
        isBase: false
    },
    TRACK: {
        name: "Track",
        stat: "init" /* Stat.INIT */,
        isBase: false
    },
    TRADE_ALCHEMIST: {
        name: "Trade (Alchemist)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_APOTHECARY: {
        name: "Trade (Apothecary)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_BLACKSMITH: {
        name: "Trade (Blacksmith)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_BREWING: {
        name: "Trade (Brewing)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_CALLIGRAPHER: {
        name: "Trade (Calligrapher)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_CHANDLER: {
        name: "Trade (Chandler)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_CARPENTER: {
        name: "Trade (Carpenter)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_COOK: {
        name: "Trade (Cook)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_EMBALMER: {
        name: "Trade (Embalmer)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_ENGINEER: {
        name: "Trade (Engineer)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_FLETCHER: {
        name: "Trade (Fletcher)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_GOLDSMITH: {
        name: "Trade (Goldsmith)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_TANNER: {
        name: "Trade (Tanner)",
        stat: "dext" /* Stat.DEXT */,
        isBase: false
    },
};
TEW.DATABASE.COMPS.IDS = Object.keys(TEW.DATABASE.COMPS.SET);
TEW.DATABASE.COMPS.BASE_ARRAY = Object.keys(TEW.DATABASE.COMPS.SET)
    .filter((comp) => TEW.DATABASE.COMPS.SET[comp].isBase)
    .sort((a, b) => a.localeCompare(b))
    .map(comp => [comp, TEW.DATABASE.COMPS.SET[comp]]);
TEW.DATABASE.COMPS.ADVANCED_ARRAY = Object.keys(TEW.DATABASE.COMPS.SET)
    .filter((comp) => !TEW.DATABASE.COMPS.SET[comp].isBase)
    .sort((a, b) => a.localeCompare(b))
    .map(comp => [comp, TEW.DATABASE.COMPS.SET[comp]]);
// === \$End file TEW_Competences
// ====== //
// === \$Begin file TEW_Npc
TEW.DATABASE.NPCS = {};
TEW.DATABASE.NPCS.SET = {
    GUSTAV_FONDLEBURGER: {
        name: "Gustav Fondleburger",
        stats: [28, 32, 41, 38, 34, 35, 39, 29, 52],
        wounds: 13,
        move: 4,
        status: 4 /* Status.SILVER_2 */,
        comps: {
            HAGGLE: 10,
            INTUITION: 14,
            RANGED_BLACK_POWDER: 10
        },
        talents: ["READ_WRITE", "STURDY"],
        traits: [],
        weapons: ["BLUNDERBUSS"],
        armor: [],
        trappings: {
            SMALL_SHOT_AND_POWDER: 20
        },
        spells: {},
        prayers: {}
    },
    HERPIN_STIGGERWURT: {
        name: "Herpin Stiggerwurt",
        stats: [35, 32, 45, 45, 36, 39, 32, 24, 28, 25],
        wounds: 14,
        move: 4,
        status: 2 /* Status.BRASS_3 */,
        comps: {
            MELEE_BASIC: 10,
            TRADE_BREWING: 17
        },
        talents: ["READ_WRITE", "STURDY"],
        traits: [],
        weapons: ["DAGGER"],
        armor: [],
        trappings: {},
        spells: {},
        prayers: {}
    },
    GUNNAR_ANG_HULTZ: {
        name: "Gunnar and Hultz",
        stats: [32, 42, 31, 34, 36, 44, 29, 27, 30, 27],
        wounds: 12,
        move: 4,
        status: 4 /* Status.SILVER_2 */,
        comps: {
            ANIMAL_CARE: 10,
            CHARM_ANIMAL: 10,
            CONSUME_ALCOHOL: 10,
            DRIVE: 30,
            RANGED_BLACKPOWDER: 10
        },
        talents: [],
        traits: [],
        weapons: ["BLUNDERBUSS", "SWORD"],
        armor: ["LEATHER_JACK", "LEATHER_LEGGINGS", "LEATHER_SKULLCAP"],
        trappings: {
            COAT: 1,
            SMALL_SHOT_AND_POWDER: 20
        },
        spells: {},
        prayers: {}
    },
    ISODE_VON_STRUDELDORF: {
        name: "Isolde Von Strudeldorf",
        stats: [36, 32, 31, 32, 35, 31, 43, 30, 33, 28],
        wounds: 12,
        move: 4,
        status: 6 /* Status.GOLD_1 */,
        comps: {
            INTIMIDATE: 15,
            LEADERSHIP: 14,
            LORE_HERALDRY: 10,
            PLAY_LUTE: 15
        },
        talents: ["ETIQUETTE_NOBLES", "LUCK", "NOBLE_BLOOD", "READ_WRITE"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: {},
        spells: {},
        prayers: {}
    },
    JANNA_ELLEINER: {
        name: "Janna Elleiner",
        stats: [25, 24, 34, 39, 43, 43, 34, 27, 25, 26],
        wounds: 11,
        move: 4,
        status: 5 /* Status.SILVER_3 */,
        comps: {
            INTUITION: 11,
            PERCEPTION: 15
        },
        talents: ["BENEATH_NOTICE", "ETIQUETTE_SERVANTS", "WELL_PREPARED"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: {},
        spells: {},
        prayers: {}
    },
    MARIE_SCHUTZ: {
        name: "Marie Schutz",
        stats: [55, 32, 56, 48, 45, 54, 43, 30, 33, 26],
        wounds: 16,
        move: 4,
        status: 5 /* Status.SILVER_3 */,
        comps: {
            DODGE: 10,
            ENDURANCE: 15,
            HEAL: 10,
            INTIMIDATE: 15,
            INTUITION: 15,
            MELEE_BASIC: 15,
            MELEE_BRAWLING: 10
        },
        talents: ["JUMP_UP", "RELENTLESS", "STRIKE_MIGHTY_BLOW", "STRIKE_TO_STUN", "TENACIOUS", "VERY_STRONG"],
        traits: [],
        weapons: ["SWORD", "KNUCKLEDUSTERS"],
        armor: ["LEATHER_JACK", "LEATHER_LEGGINGS", "LEATHER_SKULLCAP"],
        trappings: {},
        spells: {},
        prayers: {}
    },
    ERNST_HEIDLEMANN: {
        name: "Ernst Heidlemann",
        stats: [30, 32, 30, 26, 31, 34, 44, 33, 30, 29],
        wounds: 10,
        move: 4,
        status: 4 /* Status.SILVER_2 */,
        comps: {
            CHANNELLING_DHAR: 7,
            DODGE: 6,
            INTIMIDATE: 5,
            INTUITION: 5,
            LANGUAGE_CLASSICAL: 10,
            LANGUAGE_MAGICK: 15,
            LORE_MAGICK: 9,
            PERCEPTION: 5
        },
        talents: ["PETTY_MAGICK", "READ_WRITE"],
        traits: [],
        weapons: [],
        armor: [],
        trappings: {},
        spells: {
            ROT: 1,
            SHOCK: 1
        },
        prayers: {}
    },
    PHILLIPE_DESCARTES: {
        name: "Phillipe Descartes",
        stats: [30, 32, 30, 26, 31, 34, 44, 33, 30, 29],
        wounds: 10,
        move: 4,
        status: 0 /* Status.BRASS_1 */,
        comps: {
            ATHLETICS: 26,
            CLIMB: 32,
            CHARM: 15,
            CONSUME_ALCOHOL: 38,
            COOL: 30,
            DODGE: 26,
            ENDURANCE: 27,
            GAMBLE: 17,
            GOSSIP: 15,
            HEAL: 6,
            HAGGLE: 15,
            INTIMIDATE: 22,
            INTUITION: 19,
            LANGUAGE_BATTLE: 16,
            LEADERSHIP: 20,
            MELEE_BRAWLING: 17,
            MELEE_BASIC: 27,
            PERCEPTION: 24,
            PLAY_DRUM: 1,
            OUTDOOR_SURVIVAL: 11,
            RANGED_BLACKPOWDER: 28,
            SLEIGHT_OF_HAND: 20
        },
        talents: ["ATTRACTIVE", "ALLEY_CAT", "CARD_SHARP", "COMBAT_AWARE", "DICEMAN", "DRILLED", "ETIQUETTE_SOLDIERS", "RAPID_RELOAD", "WAR_LEADER"],
        traits: [],
        weapons: ["PISTOL", "SWORD"],
        armor: [],
        trappings: {
            BULLET_AND_POWDER: 30,
            DICE_SET: 2,
            LOADED_DICE_SET: 1,
            PACK_OF_MARKED_CARDS: 1,
            SILVER: 49,
            BRASS: 67
        },
        spells: {},
        prayers: {}
    }
};
// === \$End file TEW_Npc
// ====== //
// === \$Begin file TEW_Talents
TEW.DATABASE.TALENTS = {};
TEW.DATABASE.TALENTS.SET = {
    ACCURATE_SHOT: {
        name: "Accurate Shot",
        description: "You are an exceptional shot and know where to shoot an enemy in order to inflict maximum damage. You deal your Accurate Shot level in extra Damage with all ranged weapons.",
        maxTaken: "bals" /* Stat.BALS */
    },
    ACUTE_SENSE_SIGHT: {
        name: "Acute Sense (Sight)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init" /* Stat.INIT */
    },
    ACUTE_SENSE_TASTE: {
        name: "Acute Sense (Taste)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init" /* Stat.INIT */
    },
    ACUTE_SENSE_SMELL: {
        name: "Acute Sense (Smell)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init" /* Stat.INIT */
    },
    ACUTE_SENSE_HEARING: {
        name: "Acute Sense (Hearing)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init" /* Stat.INIT */
    },
    ACUTE_SENSE_TOUCH: {
        name: "Acute Sense (Touch)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "init" /* Stat.INIT */
    },
    AETHYRIC_ATTUNEMENT: {
        name: "Aethyric Attunement",
        description: "Your experience, talent or training lets you more safely manipulate the Winds of Magic. You do not suffer a Miscast if you roll a double on a successful Channel Test.",
        maxTaken: "init" /* Stat.INIT */
    },
    ALLEY_CAT: {
        name: "Alley Cat",
        description: "You are at home in shadowy backstreets. When using Stealth (Urban), you may reverse the dice of any failed Test if this will score a Success.",
        maxTaken: "init" /* Stat.INIT */
    },
    AMBIDEXTROUS: {
        name: "Ambidextrous",
        description: "You can use your off-hand far better than most folk, either by training or innate talent. You only suffer a penalty of -10 to Tests relying solely on your secondary hand, not -20. If you have this Talent twice, you suffer no penalty at all.",
        maxTaken: 2
    },
    ANIMAL_AFFINITY: {
        name: "Animal Affinity",
        description: "Wild animals feel comfortable in your presence, and often follow your lead. All creatures with the Bestial Trait not trained to be belligerent will automatically be calm in your presence unless they have a reason not to be, such as pain, an attack, being naturally hyper-aggressive, or having nearby young.",
        maxTaken: "will" /* Stat.WILL */
    },
    ARCANE_MAGIC: {
        name: "Arcane Magic",
        description: "You either study one of the 8 Arcane Lores of Magic - Beasts, Death, Fire, Heavens, Metal, Shadow, Light, or Life - or practice a lesser known Lore, such as Hedgecraft or Necromancy. You may now memorise spells from your chosen Lore. Under normal circumstances, you may not learn more than one Arcane Magic (Lore) Talent. Further, you may not learn the Bless or Invoke Talents when you have the Arcane Magic Talent. You can unlearn this Talent for 100 XP, but will immediately lose all of your spells if you do so.",
        maxTaken: 1
    },
    ARGUMENTATIVE: {
        name: "Argumentative",
        description: "You are used to arguing your points and winning. If you roll a successful Charm Test to debate with an opponent, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 24 could be used for +4 SL.",
        maxTaken: "felw" /* Stat.FELW */
    },
    ARTISTIC: {
        name: "Artistic",
        description: "You have a natural talent for art, able to produce precise sketches with nothing but time and appropriate media. This ability has several in-game uses, ranging from creating Wanted Posters to sketching accurate journals, and has spot benefits as determined by the GM. Further to this, add Art (Any) to any Career you enter; if it is already in Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    ATTRACTIVE: {
        name: "Attractive",
        description: "Whether it's your piercing eyes, your strong frame, or maybe the way you flash your perfect teeth, you know how to make the best use of what the gods gave you. When you successfully use Charm to influence those attracted to you, you can choose to either use your rolled SL, or the number rolled on your",
        maxTaken: "felw" /* Stat.FELW */
    },
    BATTLE_RAGE: {
        name: "Battle Rage",
        description: "You are better able to control your Frenzy in combat. You can end your Frenzy with a successful Cool Test at the end of the round.",
        maxTaken: "will" /* Stat.WILL */
    },
    BEAT_BLADE: {
        name: "Beat Blade",
        description: "You are trained to make sharp controlled blows to your opponent's weapon, creating an opening for an attack or simply impeding an incoming attack. For your Action, you can choose to Beat Blade before rolling. Perform a Melee Test; if successful, your opponent loses -1 Advantage, and loses a further -1 per SL you score. This Test is not Opposed. This Talent is of no use if your opponent has no weapon, or has a larger Size than you",
        maxTaken: "weas" /* Stat.WEAS */
    },
    BENEATH_NOTICE: {
        name: "Beneath Notice",
        description: "The high and mighty pay no attention to your presence, knowing you are well beneath their notice. Assuming you are properly attired and not in an incongruous position, those of a higher Status Tier will normally ignore you unless your presence becomes inappropriate, which can make it very easy to listen into conversations you perhaps shouldn't. Further, characters with a higher Status Tier than you gain no Advantage for striking or wounding you in combat, as there is nothing to be gained for defeating such a lowly cur.",
        maxTaken: "felw" /* Stat.FELW */
    },
    BERSERK_CHARGE: {
        name: "Berserk Charge",
        description: "You hurl yourself at your enemies with reckless abandon, using the force of your charge to add weight to your strikes. When you Charge, you gain +1 Damage to all Melee attacks per level in this Talent.",
        maxTaken: "strg" /* Stat.STRG */
    },
    BLATHER: {
        name: "Blather",
        description: "Called 'opening your mouth and letting your belly rumble' in Nordland, or simply 'bullshitting' in Ostland, blathering involves talking rapidly and incessantly, or talking volubly and at-length, about inconsequential or nonsense matters, and is used to verbally confuse and confound a target. You use your Charm Skill to Blather. Attempt an Opposed Charm/Intelligence Test. Success gives your opponent a Stunned Condition. Further, for each level you have in Blather, your opponent gains another Stunned Condition. Targets Stunned by Blather may do nothing other than stare at you dumbfounded as they try to catch-up with or understand what you are saying. Once the last Stunned Condition comes to an end, the target finally gets a word in, and may not be best pleased with you - after all, you have been talking about nothing or nonsense for some time. Should you stop talking, your opponent immediately loses all Stunned Conditions caused by your Blather. Generally, you can only attempt to Blather at a character once per scene, or perhaps longer as determined by the GM, as the target soon wises up to your antics.",
        maxTaken: "felw" /* Stat.FELW */
    },
    BLESS_MANAAN: {
        name: "Bless (Manaan)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_MORR: {
        name: "Bless (Morr)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_MYRMIDIA: {
        name: "Bless (Myrmidia)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_RANALD: {
        name: "Bless (Ranald)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_RHYA: {
        name: "Bless (Rhya)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_SHALLYA: {
        name: "Bless (Shallya)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_SIGMAR: {
        name: "Bless (Sigmar)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_TAAL: {
        name: "Bless (Taal)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_ULRIC: {
        name: "Bless (Ulric)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BLESS_VERENA: {
        name: "Bless (Verena)",
        description: "You are watched over by one of the Gods and can empower simple prayers. You can now deploy the Blessings of your deity. Under normal circumstances, you may only ever know one Divine Lore for the Bless Talent.",
        maxTaken: 1
    },
    BOOKISH: {
        name: "Bookish",
        description: "You are as at home in a library as a seaman at sea or a farmer a-farming. When using Research, you may reverse the dice of any failed Test if this will score a success.",
        maxTaken: "intl" /* Stat.INTL */
    },
    BREAK_AND_ENTER: {
        name: "Break and Enter",
        description: "You are an expert at quickly breaking down doors and forcing entry. You may add +1 Damage for each level in this Talent when determining damage against inanimate objects such as windows, chests, doors, and similar.",
        maxTaken: "strg" /* Stat.STRG */
    },
    BRIBER: {
        name: "Briber",
        description: "You are an exceedingly skilled briber. The GM should reduce the base cost of any required bribe by 10% per level you have in Briber, to a minimum of 10% of the original amount.",
        maxTaken: "felw" /* Stat.FELW */
    },
    CARDSHARP: {
        name: "Cardsharp",
        description: "You are used to playing, and winning, at cards, although your methods may involve a little cheating. When you successfully use Gamble or Sleight of Hand when playing cards, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 28 could be used for +8 SL. If you play a real card game to represent what is happening in-game, you may receive an extra number of cards per deal equal to your level in Cardsharp, then discard down to the appropriate hand-size before each round of play.",
        maxTaken: "intl" /* Stat.INTL */
    },
    CAREFUL_STRIKE: {
        name: "Careful Strike",
        description: "You are skilled at hitting your enemy exactly where you want to, either at range or in melee. You may modify your Hit Location result by up to +/-10 per time you have this Talent. So, if you had this Talent twice and hit location 34, the Right Arm, you could modify this down to 14, the Left Arm, or up to 54, the Body",
        maxTaken: "init" /* Stat.INIT */
    },
    CAROUSER: {
        name: "Carouser",
        description: "You are a seasoned drinker and know how to party hard. You may reverse the dice of any failed Consume Alcohol Test if this will score a Success.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    CATFALL: {
        name: "Catfall",
        description: "You are nimble and balanced like a cat, and are able to fall much greater distances unharmed than others might. Whenever you fall, you attempt an Athletics Test. If successful, reduce the distance fallen by 1 yard, +1 extra yard per +1 SL scored, for the purposes of calculating Damage.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    CAT_TONGUED: {
        name: "Cat-tongued",
        description: "Like Ranald the Trickster God, you blend truth and lies as if there were no difference. When using Charm to lie, listeners do not get to oppose your Charm with their Intuition to detect if there is something fishy in what you say.",
        maxTaken: "felw" /* Stat.FELW */
    },
    COMBAT_AWARE: {
        name: "Combat Aware",
        description: "You are used to scanning the battlefield to make snap decisions informed by the shifting tides of war. You may take a Challenging (+0) Perception Test to ignore Surprise, which is modified by circumstance as normal.",
        maxTaken: "init" /* Stat.INIT */
    },
    COMBAT_MASTER: {
        name: "Combat Master",
        description: "Your accumulated years of combat experience allow you to keep lesser fighters at bay. For each level in this Talent, you count as one more person for the purposes of determining if one side out-numbers the other. This Talent only comes into play when you are out-numbered. See page 162 for the rules for out-numbering.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    COMBAT_REFLEXES: {
        name: "Combat Reflexes",
        description: "You react like a flash of lightning. Add 10 to your Initiative for each level in this Talent when determining Combat Initiative.",
        maxTaken: "init" /* Stat.INIT */
    },
    COMMANDING_PRESENCE: {
        name: "Commanding Presence",
        description: "Your presence fills others with hushed awe and admiration. Such is your aura of authority, those with a lower Status may not resist your Leadership tests with their Willpower. Of course, enemies are still no more likely to respect or obey you, but the common folk rarely stand against you.",
        maxTaken: "felw" /* Stat.FELW */
    },
    CONCOCT: {
        name: "Concoct",
        description: "You are skilled at making potions, philtres, and draughts on the go. You may take one free Crafting Endeavour to use Lore (Apothecary) without need of a Workshop. Other Crafting Endeavours use the normal rules.",
        maxTaken: "intl" /* Stat.INTL */
    },
    CONTORTIONIST: {
        name: "Contortionist",
        description: "You can bend and manipulate your body in a myriad of seemingly unnatural ways. This allows you to squeeze through unlikely gaps and bend your body in crazy ways, giving benefits determined by the GM, possibly with a successful Agility test.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    COOL_HEADED: {
        name: "Coolheaded",
        description: "You gain a permanent +5 bonus to your starting Willpower Characteristic this does not count towards your Advances.",
        maxTaken: 1
    },
    CRACK_THE_WHIP: {
        name: "Crack the Whip",
        description: "You know how to get the most out of your animals. When an animal you control is Fleeing or Running, it gains +1 Movement if you are using a whip.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    CRAFTSMAN: {
        name: "Craftsman",
        description: "You have true creative talent. Add one Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    CRIMINAL: {
        name: "Criminal",
        description: "TODO",
        maxTaken: 1
    },
    DEADEYE_SHOT: {
        name: "Deadeye Shot",
        description: "You always hit an opponent right between the eyes... or wherever else you intended to hit. Instead of reversing the dice to determine which Hit Location is struck with your ranged weapons, you may pick a location.",
        maxTaken: 1
    },
    DEALMAKER: {
        name: "Dealmaker",
        description: "You are a skilled businessman who knows how to close a deal. When using the Haggle skill, you reduce or increase the price of the products by an extra 10%.",
        maxTaken: "felw" /* Stat.FELW */
    },
    DETECT_ARTEFACT: {
        name: "Detect Artefact",
        description: "You are able to sense when magic lies within an artefact. You may attempt an Intuition Test for any magical artefact touched. If successful, you sense the item is magical; further, each SL also provides a specific special rule the item uses, if it has any. Normally, you may only attempt this Test once per artefact touched.",
        maxTaken: "init" /* Stat.INIT */
    },
    DICEMAN: {
        name: "Diceman",
        description: "You are a dicing master, and all claims you cheat are clearly wrong. When you successfully use Gamble or Sleight of Hand when playing with dice, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 06 could be used for +6 SL. If you play any real-life dice games to represent in-game dice games, always roll extra dice equal to your Diceman level and choose the best results.",
        maxTaken: "intl" /* Stat.INTL */
    },
    DIRTY_FIGHTING: {
        name: "Dirty Fighting",
        description: "You have been taught all the dirty tricks of unarmed combat. You may choose to cause an extra +1 Damage for each level in Dirty Fighting with any successful Melee (Brawling) hit. Note: using this Talent will be seen as cheating in any formal bout.",
        maxTaken: "weas" /* Stat.WEAS */
    },
    DISARM: {
        name: "Disarm",
        description: "You are able to disarm an opponent with a careful flick of the wrist or a well-aimed blow to the hand. For your Action, you may attempt an Opposed Melee/Melee test. If you win, your opponent loses a held weapon, which flies 1d10 feet in a random direction (with further effects as determined by the GM). If you win by 2 SL, you can determine how far the weapon is flung instead of rolling randomly; if you win by 4 SL, you can also choose the direction the weapon goes in; if you win by 6 SL or more, you can take your opponent's weapon if you have a free hand, plucking it from the air with a flourish. This Talent is of no use if your opponent has no weapon, or is a larger Size than you.",
        maxTaken: "init" /* Stat.INIT */
    },
    DISTRACT: {
        name: "Distract",
        description: "You are trained in simple movements to distract or startle your opponent, drawing eyes from your true intent. You may use your Move to perform a Distraction. This is resolved by an Opposed Athletics/Cool Test. If you win, your opponent can gain no Advantage until the end of the next Round.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    DOOMED: {
        name: "Doomed",
        description: "At the age of 10, a Priest of Morr called a Doomsayer took you aside to foretell your death in an incense-laden, coming-of-age ritual called the Dooming. In conjunction with your GM, come up with a suitable Dooming. Should your character die in a fashion that matches your Dooming, your next character gains a bonus of half the total XP your dead character accrued during play.",
        maxTaken: 1
    },
    DRILLED: {
        name: "Drilled",
        description: "You have been trained to fight shoulder-to-shoulder with other soldiers. If an enemy causes you to lose Advantage when standing beside an active ally with the Drilled Talent, you may keep 1 lost Advantage for each time you've taken the Drilled Talent.",
        maxTaken: "weas" /* Stat.WEAS */
    },
    DUAL_WIELDER: {
        name: "Dual Wielder",
        description: "When armed with two weapons, you may attack with both for your Action. Roll to hit with the weapon held in your primary hand. If you hit, determine Damage as normal, but remember to keep your dice roll, as you will use it again. If the first strike hits, once it is resolved, the weapon in your secondary hand can then target an available opponent of your choice using the same dice roll for the first strike, but reversed. So, if you rolled 34 to hit with the first weapon, you use 43 to hit with the second. Remember to modify this second roll by your off-hand penalty (-20 unless you have the Ambidextrous Talent). This second attack is Opposed with a new defending roll, and damage for this second strike is calculated as normal. The only exception to this is if you roll a Critical for your first strike. If this happens, use the roll on the Critical Table to also act as the roll for the second attack. So, if you scored a critical to the head and rolled 56 on the Critical table for a Major Eye Wound, your second attack would then strike out with a to-hit value of 56. If you choose to attack with both weapons, all your defensive rolls until the start of your next Turn suffer a penalty of -10. You do not gain an Advantage when you successfully strike or Wound an opponent when Dual Wielding unless both attacks hit.",
        maxTaken: 1
    },
    EMBEZZLE: {
        name: "Embezzle",
        description: "You are skilled at skimming money from your employers without being detected. Whenever you secure money when Earning (during play or performing an Income Endeavour), you may attempt an Opposed Intelligence Test with your employer (assuming you have one). If you win, you skim 2d10 + SL brass pennies, 1d10 + SL silver shillings, or 1 + SL gold crowns (depending upon the size of the business in question, as determined by the GM) without being detected. If your employer wins by 6+ SL, you gain the money, but your embezzling is detected; what then happens is left to the GM. Any other result means you have failed to embezzle any money.",
        maxTaken: "intl" /* Stat.INTL */
    },
    ENCLOSED_FIGHTER: {
        name: "Enclosed Fighter",
        description: "You have learned to make the most benefit out of fighting in enclosed spaces. You ignore penalties to Melee caused by confined spaces such as tunnels, the frontline, small fighting pits, and similar, and can use the Dodge Skill, even if it would normally be disallowed due to lack of space.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    ETIQUETTE_CRIMINALS: {
        name: "Etiquette (Criminals)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw" /* Stat.FELW */
    },
    ETIQUETTE_CULTISTS: {
        name: "Etiquette (Cultists)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw" /* Stat.FELW */
    },
    ETIQUETTE_GUILDERS: {
        name: "Etiquette (Guilders)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw" /* Stat.FELW */
    },
    ETIQUETTE_NOBLES: {
        name: "Etiquette (Nobles)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw" /* Stat.FELW */
    },
    ETIQUETTE_SCHOLARS: {
        name: "Etiquette (Scholars)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw" /* Stat.FELW */
    },
    ETIQUETTE_SERVANTS: {
        name: "Etiquette (Servants)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw" /* Stat.FELW */
    },
    ETIQUETTE_SOLDIERS: {
        name: "Etiquette (Soldiers)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "felw" /* Stat.FELW */
    },
    FAST_HANDS: {
        name: "Fast Hands",
        description: "You can move your hands with surprising dexterity. Bystanders get no passive Perception Tests to spot your use of the Sleight of Hand Skill, instead they only get to Oppose your Sleight of Hand Tests if they actively suspect and are looking for your movements. Further, attempts to use Melee (Brawling) to simply touch an opponent gain a bonus of +10 x your level in Fast Hands.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    FAST_SHOT: {
        name: "Fast Shot",
        description: "If you have a loaded ranged weapon, you can fire it outside the normal Initiative Order before any other combatant reacts in the following Round. You roll to hit using all the normal modifiers. Employing Fast Shot requires both your Action and Move for your upcoming turn, and these will count as having been spent when your next turn arrives. If two or more characters use Fast Shot, the character who has taken this Talent most goes first. If any characters have taken Fast Shot an equal number of times, both shots are fired simultaneously, and should both be handled at the same time.",
        maxTaken: "will" /* Stat.WILL */
    },
    FEARLESS_BEASTMEN: {
        name: "Fearless (Beastmen)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will" /* Stat.WILL */
    },
    FEARLESS_GREENSKINS: {
        name: "Fearless (Greenskins)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will" /* Stat.WILL */
    },
    FEARLESS_OUTLAWS: {
        name: "Fearless (Outlaws)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will" /* Stat.WILL */
    },
    FEARLESS_VAMPIRES: {
        name: "Fearless (Vampires)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will" /* Stat.WILL */
    },
    FEARLESS_WATCHMEN: {
        name: "Fearless (Watchmen)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will" /* Stat.WILL */
    },
    FEARLESS_WITCHES: {
        name: "Fearless (Witches)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "will" /* Stat.WILL */
    },
    FEINT: {
        name: "Feint",
        description: "You have trained how to make false attacks in close combat to fool your opponent. You may now make a Feint for your Action against any opponent using a weapon. This is resolved with an Opposed Melee (Fencing)/Melee Test. If you win, and you attack the same opponent before the end of the next Round, you may add the SL of your Feint to your attack roll.",
        maxTaken: "weas" /* Stat.WEAS */
    },
    FIELD_DRESSING: {
        name: "Field Dressing",
        description: "You are used to treating wounds quickly. If you fail a Heal Test when using Bandages, you may reverse the result if this will score a success; however, if you do so, you may not score more than +1 SL as you focus on speed over accuracy.",
        maxTaken: "intl" /* Stat.INTL */
    },
    FISHERMAN: {
        name: "Fisherman",
        description: "You are a very capable fisherman and know all the best ways to land fish. Assuming a large enough body of water is available, you are automatically assumed to be able to fish enough to feed yourself and a number of others equal to your level in Fisherman, assuming you choose to spend at least an hour or so with a line and bait. You may secure more fish in addition to this using the normal rules for foraging.",
        maxTaken: "init" /* Stat.INIT */
    },
    FLAGELLANT: {
        name: "Flagellant",
        description: "You have dedicated your pain to the service of your God. Each day, you must spend half a bell (half an hour) praying as you maintain a number of Wounds suffered equal to your level in Flagellent. Until you next sleep, if you have the Frenzy Talent you may enter Frenzy immediately without testing. The Frenzy Talent is added to the Talent list of any career you are in. Should you fail to flagellate yourself on any given day, or allow your castigated flesh to be healed, you may not spend any Resilience or Resolve until you flagellate yourself again.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    FLEE: {
        name: "Flee!",
        description: "When your life is on the line you are capable of impressive bursts of speed. Your Movement Attribute counts as 1 higher when Fleeing",
        maxTaken: "agil" /* Stat.AGIL */
    },
    FLEET_FOOTED: {
        name: "Fleet Footed",
        description: "You gain +1 to your Movement Attribute.",
        maxTaken: 1
    },
    FRENZY: {
        name: "Frenzy",
        description: "With a Willpower Test, you can work yourself into a state of frenzy by psyching yourself up, howling, biting your shield, or similar. If you succeed, you become subject to Frenzy. While subject to Frenzy you are immune to all other psychology, and will not flee or retreat for any reason; indeed you must always move at full rate towards the closest enemy you can see in order to attack. Generally, the only Action you may take is a Weapon Skill Test or an Athletics Test to reach an enemy more quickly. Further, you may take a Free Action Melee Test each Round as you are throwing everything you have into your attacks. Lastly, you gain a bonus of +1 Strength Bonus, such is your ferocity. You remain in Frenzy until all enemies in your line of sight are pacified, or you receive the Stunned or Unconscious condition. After your Frenzy is over you immediately receive a Fatigued condition.",
        maxTaken: 1
    },
    FRIGHTENING: {
        name: "Frightening",
        description: "Anyone sane thinks twice before approaching you. If you wish, you have a Fear Rating of 1. Add +1 to this number per extra time you have this Talent.",
        maxTaken: "strg" /* Stat.STRG */
    },
    FURIOUS_ASSAULT: {
        name: "Furious Assault",
        description: "Your blows follow one another in quick succession, raining down on your opponents with the fury of Ulric. Once per Round, if you hit an opponent in close combat, you may immediately spend an Advantage or your Move to make an extra attack (assuming you have your Move remaining).",
        maxTaken: "agil" /* Stat.AGIL */
    },
    GREGARIOUS: {
        name: "Gregarious",
        description: "You just like talking to other folk and it seems they like talking to you. You may reverse any failed Gossip Test if this allows the Test to succeed.",
        maxTaken: "felw" /* Stat.FELW */
    },
    GUNNER: {
        name: "Gunner",
        description: "You can reload blackpowder weapons with practiced ease. Add SL equal to your level in Gunner to any Extended Test to reload a Blackpowder weapon.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    HARDY: {
        name: "Hardy",
        description: "You gain a permanent addition to your Wounds, equal to your Toughness Bonus. If your Toughness Bonus should increase, then the number of Wounds Hardy provides also increases.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    HATRED: {
        name: "Hatred",
        description: "TODO",
        maxTaken: "will" /* Stat.WILL */
    },
    HOLY_HATRED: {
        name: "Holy Hatred",
        description: "Your prayers drip with the hatred you feel for your blasphemous enemies. You deal +1 Damage with Miracles for each level in this Talent.",
        maxTaken: "felw" /* Stat.FELW */
    },
    HOLY_VISIONS: {
        name: "Holy Visions",
        description: "You clearly see the great works of the Gods all around you. You automatically know when you enter Holy Ground, and may take an Intuition Test to receive visions (often obscure, and seen through the paradigm of your cult or individual belief-system) regarding the local area if significant events have occurred there in the past.",
        maxTaken: "init" /* Stat.INIT */
    },
    HUNTERS_EYE: {
        name: "Hunter's Eye",
        description: "You are a skilled hunter and know all the best techniques to find game. When travelling through well-stocked lands, you are automatically assumed to be able to hunt down enough game to feed yourself and a number of others equal to your level in Hunter's Eye, so long as you have time and the correct equipment. You may secure more food in addition to this using the normal rules for foraging.",
        maxTaken: "init" /* Stat.INIT */
    },
    IMPASSIONED_ZEAL: {
        name: "Impassioned Zeal",
        description: "When you talk about your cause, case, or religion, your words fill with passion and fervent zeal. You may double your Fellowship for the purposes of determining the number of people influenced by your Public Speaking when talking about your cause.",
        maxTaken: "felw" /* Stat.FELW */
    },
    IMPLACABLE: {
        name: "Implacable",
        description: "It takes a lot to finish you off. You can ignore the Wound loss from a Bleeding Condition. Each level in this Talent lets you ignore the Wound loss from an extra Bleeding Condition.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    IN_FIGHTER: {
        name: "In-fighter",
        description: "You are skilled at drawing in close to an opponent. You suffer no penalties for fighting against an opponent with a longer weapon than you. Further, if you use the optional rules for In-fighting, gain a bonus of +10 to hit your opponent.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    INSPIRING: {
        name: "Inspiring",
        description: "Your rousing words and pleas can turn the tide of a battle. Refer to the following table to see how many people you can now influence with your Leadership Skill when at war.",
        maxTaken: "felw" /* Stat.FELW */
    },
    INSTINCTIVE_DICTION: {
        name: "Instinctive Diction",
        description: "You instinctively understand the language of Magick, and are capable of articulating the most complex phrases rapidly without error. You do not suffer a Miscast if you roll a double on a successful Language (Magick) Test.",
        maxTaken: "init" /* Stat.INIT */
    },
    INVOKE_MANAAN: {
        name: "Invoke (Manaan)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_MORR: {
        name: "Invoke (Morr)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_MYMIDIA: {
        name: "Invoke (Myrmidia)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_RANALD: {
        name: "Invoke (Ranald)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_RHYA: {
        name: "Invoke (Rhya)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_SHALLYA: {
        name: "Invoke (Shallya)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_SIGMAR: {
        name: "Invoke (Sigmar)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_TAAL: {
        name: "Invoke (Taal)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_ULRIC: {
        name: "Invoke (Ulric)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    INVOKE_VERENA: {
        name: "Invoke (Verena)",
        description: "You are blessed by one of the Gods and can empower one of your Cult's Miracles. Further, you may purchase extra miracles for 100 XP per miracle you currently know. Under normal circumstances, you may not learn more than one Invoke (Divine Lore) Talent. Further, you may not learn the Petty Magic or Arcane Magic Talents when you have the Invoke Talent. You can unlearn this Talent for 100 XP, but will lose all of your miracles if you do so, and will also garner the extreme disfavour of your God.",
        maxTaken: 1
    },
    IRON_JAWS: {
        name: "Iron Jaws",
        description: "You are made of sturdy stuff and can weather even the strongest blows. Whenever you gain one or more Stunned Conditions, you may make an immediate Challenging (+0) Endurance Test to not take one of them, with each SL removing an extra Stunned Condition.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    IRON_WILL: {
        name: "Iron Will",
        description: "You have an indomitable will of iron, and will never willingly bow down before another. Use of the Intimidate skill does not cause Fear in you, and will not stop you speaking out against the intimidating party.",
        maxTaken: "will" /* Stat.WILL */
    },
    JUMP_UP: {
        name: "Jump Up",
        description: "You are hard to keep down. You may perform a Challenging (+0) Athletics Test to immediately regain your feet whenever you gain a Prone Condition. This Athletics Test is often modified by the Strength behind the blow that knocks you down: for every +10 Strength the blow has over your Toughness, you suffer a penalty of -10 to the Athletics Test, and vice versa.",
        maxTaken: 1
    },
    KINGPIN: {
        name: "Kingpin",
        description: "You have earned an air of respectability despite your nefarious ways. You may ignore the Status loss of the Criminal Talent.",
        maxTaken: 1
    },
    LIGHTNING_REFLEXES: {
        name: "Lightning Reflexes",
        description: "You gain a permanent +5 bonus to your starting Agility Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    LINGUISTICS: {
        name: "Linguistics",
        description: "You have a natural affinity for languages. Given a month's exposure to any Language, you count the associated Language Skill as a Basic Skill with a successful Intelligence Test (which can be attempted once per month). Note: Linguistics only works for languages used to frequently communicate with others, so does not work with Language (Magick).",
        maxTaken: "intl" /* Stat.INTL */
    },
    LIP_READING: {
        name: "Lip Reading",
        description: "You can tell what people are saying by simply watching their lips; you do not need to hear what they are saying. If you have an unobstructed view of the speaker's lower face, you can attempt a Perception Test to understand what they are saying.",
        maxTaken: "init" /* Stat.INIT */
    },
    LUCK: {
        name: "Luck",
        description: "They say when you were born, Ranald smiled. Your maximum Fortune Points now equal your current Fate points plus the number of times you've taken Luck.",
        maxTaken: "felw" /* Stat.FELW */
    },
    MAGICAL_SENSE: {
        name: "Magical Sense",
        description: "You are able to sense the Winds of Magic in others. You may attempt an Average (+20) Intuition Test whenever you encounter a spellcaster. If you pass, you sense the target is a witch. Further, if you score an Astounding Success (+6), can also determine the target's highest Channelling Specialisation.",
        maxTaken: "init" /* Stat.INIT */
    },
    MAGIC_RESISTANCE: {
        name: "Magic Resistance",
        description: "You are resistant to magic. The SL of any spell affecting you is reduced by 2 per point you have in this Talent. The SL of a spell is only modified by the highest Magic Resistance Talent within its target area. Further, you may never learn the Arcane Magic, Bless, Invoke, Petty Magic, or Witch! Talents.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    MAGNUM_OPUS: {
        name: "Magnum Opus",
        description: "You are an undisputed master in your field, able to create work of such incredible complexity others can but sit back and marvel at your genius. Each time you take this Talent you may create a single, extraordinary work of art with one of your Art or Trade Skills. This work is unrivalled in your field, a unique piece that will always impress, giving bonuses as determined by the GM, most commonly to Fellowship Tests from those who have witnessed your astounding work. Selling the piece will net you at least ten times its normal value, and sometimes significantly more than this.",
        maxTaken: 10
    },
    MARKSMAN: {
        name: "Marksman",
        description: "You gain a permanent +5 bonus to your starting Ballistic Skill (this does not count towards your Advances).",
        maxTaken: 1
    },
    MASTER_OF_DISGUISE: {
        name: "Master of Disguise",
        description: "You are an expert at taking on the appearance and mannerisms of others. With nothing but posture changes, face twisting, and careful use of appropriate clothing, you no longer look like yourself without having to use a Disguise Kit.",
        maxTaken: "felw" /* Stat.FELW */
    },
    MASTER_ORATOR: {
        name: "Master Orator",
        description: "You are skilled at firing up crowds. You gain a gain a SL bonus equal to your levels of Master Orator to any Charm Test when Public Speaking before a crowd.",
        maxTaken: "felw" /* Stat.FELW */
    },
    MASTER_TRADESMAN: {
        name: "Master Tradesman",
        description: "You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    MENACING: {
        name: "Menacing",
        description: "You have an imposing presence. When using the Intimidate Skill, gain a SL bonus equal to your levels of Menacing.",
        maxTaken: "strg" /* Stat.STRG */
    },
    MIMIC: {
        name: "Mimic",
        description: "You have a good ear for accents and dialects, and can reproduce them accurately. You may replicate any accent you are exposed to for at least a day with an Initiative Test; this Test may be attempted once per day. Once passed, you may always mimic the accent, and locals will believe you to be one of their own.",
        maxTaken: "init" /* Stat.INIT */
    },
    NIGHT_VISION: {
        name: "Night Vision",
        description: "You can see very well in natural darkness. Assuming you have at least a faint source of light (such as starlight, moonlight, or bioluminescence) you can see clearly for 20 yards per level of Night Vision. Further, you can extend the effective illumination distance of any light sources by 20 yards per level of Night Vision.",
        maxTaken: "init" /* Stat.INIT */
    },
    NIMBLE_FINGERED: {
        name: "Nimble Fingered",
        description: "You gain a permanent +5 bonus to your starting Dexterity (this does not count towards your Advances).",
        maxTaken: 1
    },
    NOBLE_BLOOD: {
        name: "Noble Blood",
        description: "You are either born into the nobility, or otherwise elevated to it by in-game events. Assuming you are dressed appropriately, you are always considered of higher Status than others unless they also have the Noble Blood Talent, where Status is compared as normal.",
        maxTaken: 1
    },
    NOSE_FOR_TROUBLE: {
        name: "Nose for Trouble",
        description: "You are used to getting into, and preferably out of, trouble. You may attempt an Intuition Test to spot those seeking to cause trouble or seeking to cause you harm, even if normally you would not be allowed a Test (because of Talents or a Spell, for example). This Test will likely be Opposed if others are hiding, and the GM may prefer to take this Test on your behalf in secret so you do not know the results should you fail. If any troublemakers you spot start combat, you may ignore any Surprised Condition they would normally inflict.",
        maxTaken: "init" /* Stat.INIT */
    },
    NUMISMATICS: {
        name: "Numismatics",
        description: "You are well versed with the different coinage of the Old World, and are adept at determining their value. You can judge the true value of a coin by experience alone, not even requiring a Test. Further, you can identify forged coins with a Simple Evaluate Test; it is never Opposed by the SL of the Forger.",
        maxTaken: "init" /* Stat.INIT */
    },
    OLD_SALT: {
        name: "Old Salt",
        description: "You are an experienced seaman, and are very used to sea life. You can ignore all negative modifiers to Tests at sea derived from poor weather, rolling ships, and similar. Further, you count as two seamen towards the minimum number of crew to pilot a sea-going vessel.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    ORIENTATION: {
        name: "Orientation",
        description: "You have an instinctual feel for direction. You automatically know which direction is north with a glimpse at the stars, trees, or whatever other signs you are familiar with.",
        maxTaken: "init" /* Stat.INIT */
    },
    PANHANDLE: {
        name: "Panhandle",
        description: "You are a skilled beggar, able to get even the most jaded individual to contribute to your cause. You can perform a Charm Test every half hour when Begging, not every hour.",
        maxTaken: "felw" /* Stat.FELW */
    },
    PERFECT_PITCH: {
        name: "Perfect Pitch",
        description: "You have perfect pitch, able to replicate notes perfectly and identify them without even making a Test. Further, add Entertain (Sing) to any Career you enter; if it is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "init" /* Stat.INIT */
    },
    PETTY_MAGIC: {
        name: "Petty Magic",
        description: "You have the spark to cast magic within you and have mastered techniques to control it at a basic level. When you take this Talent, you manifest, and permanently memorise, a number of spells equal to your Willpower Bonus. You can learn extra Petty spells for a cost in XP.",
        maxTaken: 1
    },
    PHARMACIST: {
        name: "Pharmacist",
        description: "You are highly skilled at pharmacy, better able than most to make pills, ointments, unguents, oils, creams, and more. You may reverse any failed Trade (Apothecary) test if this allows the Test to succeed.",
        maxTaken: "intl" /* Stat.INTL */
    },
    PILOT: {
        name: "Pilot",
        description: "You are skilled at leading vessels through dangerous waters. If you fail a Test to pass through dangerous waters, you may reverse the result if it will score a success; however, if you do so, you may not score more than +1 SL as you catch the incoming danger at the last moment.",
        maxTaken: "init" /* Stat.INIT */
    },
    PUBLIC_SPEAKER: {
        name: "Public Speaker",
        description: "You are a skilled orator and know how to work large groups of people.",
        maxTaken: "felw" /* Stat.FELW */
    },
    PURE_SOUL: {
        name: "Pure Soul",
        description: "Your soul is pure, quite resistant to the depredations of Chaos. You may gain extra Corruption points equal to your level of Pure Soul before having to Test to see if you become corrupt.",
        maxTaken: "will" /* Stat.WILL */
    },
    RAPID_RELOAD: {
        name: "Rapid Reload",
        description: "You can reload ranged weapons with practiced ease. You add SL equal to your level in Rapid Reload to any Test to reload a ranged weapon.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    REACTION_STRIKE: {
        name: "Reaction Strike",
        description: "Your fast reactions have allowed you to fell many opponents before they have even swung their blades. When you are Charged, you may attempt a Challenging (+0) Initiative Test to gain an immediate Free Attack outside the normal turn sequence. This attack is resolved with whatever weapon you are carrying in your primary hand. You may make as many Reaction Strikes in a Round as you have levels in this Talent, but can only attack each individual charger once each.",
        maxTaken: "init" /* Stat.INIT */
    },
    READ_WRITE: {
        name: "Read/Write",
        description: "You are one of the rare literate individuals in the Old World. You are assumed to be able to read and write (if appropriate) all of the Languages you can speak.",
        maxTaken: 1
    },
    RELENTLESS: {
        name: "Relentless",
        description: "When you have your mind set on a target, there is nothing anyone can do to stop you reaching them. If you use Advantage when Disengaging, you may keep a number of Advantage equal to your level of Relentless. Further, you may use Advantage to Disengage even if you have lower Advantage than your opponents.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    RESISTANCE_CHAOS: {
        name: "Resistance (Chaos)",
        description: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    RESISTANCE_DISEASE: {
        name: "Resistance (Disease)",
        description: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    RESISTANCE_MAGIC: {
        name: "Resistance (Magic)",
        description: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    RESISTANCE_POISON: {
        name: "Resistance (Poison)",
        description: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    RESOLUTE: {
        name: "Resolute",
        description: "You launch into attacks with grim determination. Add your level of Resolute to your Strength Bonus when you Charge.",
        maxTaken: "strg" /* Stat.STRG */
    },
    REVERSAL: {
        name: "Reversal",
        description: "You are used to desperate combats, able to turn even the direst circumstances to your Advantage. If you win an Opposed Melee Test, instead of gaining +1 Advantage, you may take all your opponent's Current Advantage. If you do this, you do not cause any Damage, even if it is your Turn in the Round.",
        maxTaken: "weas" /* Stat.WEAS */
    },
    RIPOSTE: {
        name: "Riposte",
        description: "Conforming to 'the best defence is offence', you respond to an incoming attack with a lightning-fast counterstrike of your own. If your weapon has the Fast quality, you may cause Damage when you are attacked, just as if it was your Action. You can Riposte a number of attacks per round equal to your Riposte level.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    RIVER_GUIDE: {
        name: "River Guide",
        description: "You know all the tricks for navigating dangerous rivers. You don't need to Test for passing through dangerous stretches of water until the Difficulty for doing so is -10 or lower - you automatically pass all Tests easier than this. Further, if you have the appropriate Lore (Local) Skill, you need never Test for navigating dangerous waters - you are assumed to know the route through.",
        maxTaken: "init" /* Stat.INIT */
    },
    ROBUST: {
        name: "Robust",
        description: "You are as tough as old boots and just soak up damage. You reduce all incoming Damage by an extra +1 per time you have taken the Robust Talent, even if the Damage cannot normally be reduced, but still suffer a minimum of 1 Wound from any Damage source.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    ROUGHRIDER: {
        name: "Roughrider",
        description: "You are at home in the saddle in even the most difficult of circumstances, and know how to get the best out of your mount during conflict. Assuming you have the Ride skill, you can direct your mount to take an Action, not just a Move, without a Ride test.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    ROVER: {
        name: "Rover",
        description: "You are at home roaming the wild places. When using Stealth in a rural environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden spies.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    SAVANT: {
        name: "Savant",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "intl" /* Stat.INTL */
    },
    SAVVY: {
        name: "Savvy",
        description: "You gain a permanent +5 bonus to your starting Intelligence Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    SCLA_SHEER_SURFACE: {
        name: "Scale Sheer Surface",
        description: "You are an exceptional climber. You can attempt to climb even seemingly impossible surfaces such as sheer fortifications, ice shelves, plastered walls, and similar, and you ignore any penalties to Climb Tests derived from the difficulty of the surface climbed.",
        maxTaken: "strg" /* Stat.STRG */
    },
    SCHEMER: {
        name: "Schemer",
        description: "You are a master of politics and see conspiracy around every corner. Once per week, you may ask the GM one question regarding a political situation or entangled web of social connections; the GM will perform a secret Intelligence Test and provide you some observations regarding the situation based upon your SL.",
        maxTaken: "intl" /* Stat.INTL */
    },
    SEA_LEGS: {
        name: "Sea Legs",
        description: "You are used to the rolling motion of the oceans, and are very unlikely to get sea sick, even in the worst storms. Under normal conditions at sea, you need never Test to see if you become Sea Sick. At other times (such as a storm, or a magically induced bout of Sea Sickness), you can ignore any penalties to Tests to avoid Sea Sickness.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    SEASONED_TRAVELLER: {
        name: "Seasoned Traveller",
        description: "You are an inquisitive soul who has travelled far and wide, learning all manner of local information. Add Lore (Local) to any Career you enter; if it is already in Career, you may purchase the Skill, both times - a different Speciality each time, such as Altdorf, Vorbergland, or Ubersreik - for 5 XP fewer per Advance.",
        maxTaken: "intl" /* Stat.INTL */
    },
    SECOND_SIGHT: {
        name: "Second Sight",
        description: "You can perceive the shifting Winds of Magic that course from the Chaos Gates at the poles of the world. You now have the Sight",
        maxTaken: "init" /* Stat.INIT */
    },
    SECRET_IDENTITY: {
        name: "Secret Identity",
        description: "You maintain a secret identity that allows you to appear richer, or perhaps poorer, than you actually are. With GM permission, choose any one Career. As long as you are dressed appropriately, you may use the Social Status of the chosen Career you masquerade as rather than your own for modifying Fellowship Tests, and can even ignore the Criminal Talent. However, maintaining this identity will require Entertain (Acting) rolls when you encounter those who may recognise your falsehood. You may create a new Secret Identity for each level you have in this Talent.",
        maxTaken: "intl" /* Stat.INTL */
    },
    SHADOW: {
        name: "Shadow",
        description: "You are skilled at following people without being spotted. You may use the Shadowing rules on page 130 without doing a Combined Test. Instead you test against just your Perception or your Stealth Skill, whichever is higher.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    SHARP: {
        name: "Sharp",
        description: "You gain a permanent +5 bonus to your starting Initiative Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    SHARPSHOOTER: {
        name: "Sharpshooter",
        description: "You can make aimed shots of exceptional accuracy. You ignore any negative Difficulty modifiers to Ranged Tests due to the size of your target.",
        maxTaken: 1
    },
    SHIELDSMAN: {
        name: "Shieldsman",
        description: "You are skilled at using your shield to manoeuvre others in combat so you can take advantage of a desperate situation. When using a Shield to defend, you gain Advantage equal to the number of levels you have in Shieldsman if you lose the Opposed Test.",
        maxTaken: "strg" /* Stat.STRG */
    },
    SIXTH_SENSE: {
        name: "Sixth Sense",
        description: "You get a strange feeling when you are threatened, and can react accordingly. The GM may warn you if you are walking into danger; this will normally come after a secret Intuition Test on your behalf. Further, you may ignore Surprise if you pass an Intuition Test.",
        maxTaken: "init" /* Stat.INIT */
    },
    SLAYER: {
        name: "Slayer",
        description: "When determining Damage use your opponent's Toughness Bonus as your Strength Bonus if it is higher; always determine this before any other rules modify your Strength or Strength Bonus. Further, if your target is larger than you, and your score a Critical, multiply all melee Damage you cause by the number of steps larger your target is (so, 2 steps = x2, 3 steps = x3, and so on); this multiplication is calculated after all modifiers are applied.",
        maxTaken: 1
    },
    SMALL: {
        name: "Small",
        description: "You are much shorter than most folk in the Old World.",
        maxTaken: 1
    },
    SNIPER: {
        name: "Sniper",
        description: "Distance is of no import to your shooting skills, and you are just as adept at picking off far away targets as those nearby. You suffer no penalties for shooting at Long range, and half the penalties for Extreme range.",
        maxTaken: 4
    },
    SPEED_READER: {
        name: "Speedreader",
        description: "You read books at a voracious pace. You may reverse a failed Research Test if this will grant success. If the speed at which you read is important during combat, a successful Language Test lets you read and fully comprehend a number of pages per Round equal to your SL plus Speedreader level (minimum of 1, even if you fail the Test).",
        maxTaken: "intl" /* Stat.INTL */
    },
    SPRINTER: {
        name: "Sprinter",
        description: "You are a swift runner. Your Movement Attribute counts as 1 higher when Running.",
        maxTaken: "strg" /* Stat.STRG */
    },
    STEP_ASIDE: {
        name: "Step Aside",
        description: "You are skilled at being where enemy weapons are not. If you use Dodge to defend against an incoming attack and win the Opposed Test, you may move up to 2 yards as you dive away, and no longer count as Engaged. None of your opponents will gain a Free Attack when you do this.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    STONE_SOUP: {
        name: "Stone Soup",
        description: "You are used to getting by with less, and know how to survive lean times. You can subsist on half the amount of food required without any negative penalties (bar feeling really hungry), and need only test for Starvation every 3 days, not 2.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    STOUT_HEARTED: {
        name: "Stout-hearted",
        description: "No matter how bad things get, you always seem to come back for more. You may attempt a Cool Test to remove a Broken Condition at the end of each of your Turns as well as at the end of the Round.",
        maxTaken: "will" /* Stat.WILL */
    },
    STRIDER: {
        name: "Strider",
        description: "You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    STRIKE_MIGHTY_BLOW: {
        name: "Strike Mighty Blow",
        description: "You know how to hit hard! You deal your level of Strike Mighty Blow in extra Damage with melee weapons.",
        maxTaken: "strg" /* Stat.STRG */
    },
    STRIKE_TO_INJURE: {
        name: "Strike to Injure",
        description: "You are an expert at striking your enemies most vulnerable areas. You inflict your level of Strike to Injure in additional Wounds when you cause a Critical Wound.",
        maxTaken: "init" /* Stat.INIT */
    },
    STRIKE_TO_STUN: {
        name: "Strike to Stun",
        description: "You know where to hit an opponent to bring him down fast. You ignore the 'Called Shot' penalty to strike the Head Hit Location when using a melee weapon with the Pummel Quality. Further, you count all improvised weapons as having the Pummel Quality.",
        maxTaken: "weas" /* Stat.WEAS */
    },
    STRONG_BACK: {
        name: "Strong Back",
        description: "You have a strong back that is used to hard work. You may add your levels in Strong Back to your SL in any Opposed Strength Tests, and can carry additional Encumbrance points of trappings equal to your level of Strong Back.",
        maxTaken: "strg" /* Stat.STRG */
    },
    STRONG_LEGS: {
        name: "Strong Legs",
        description: "You have strong legs able to carry you great distances when you jump. Add your Strong Legs level to your SL in any Athletics Tests involving Leaping.",
        maxTaken: "strg" /* Stat.STRG */
    },
    STRONG_MINDED: {
        name: "Strong-minded",
        description: "You are the epitome of determination and resolve. Add your level in Strong Minded to your maximum Resolve pool.",
        maxTaken: "will" /* Stat.WILL */
    },
    STRONG_SWIMMER: {
        name: "Strong Swimmer",
        description: "You are an especially strong swimmer and used to holding your breath for a long time underwater. Gain a bonus of your level in Strong Swimmer to your Toughness Bonus for the purposes of holding your breath.",
        maxTaken: "strg" /* Stat.STRG */
    },
    STURDY: {
        name: "Sturdy",
        description: "You have a brawny physique, or are very used to carrying things. Increase the number of Encumbrance Points you can carry by your Sturdy level x2.",
        maxTaken: "strg" /* Stat.STRG */
    },
    SUAVE: {
        name: "Suave",
        description: "You gain a permanent +5 bonus to your starting Fellowship Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    SUPER_NUMERATE: {
        name: "Super Numerate",
        description: "You have a gift for calculation and can work out the solution to most mathematical problems with ease. You may use a simple calculator to represent what your PC is capable of mentally computing.",
        maxTaken: "intl" /* Stat.INTL */
    },
    SUPPORTIVE: {
        name: "Supportive",
        description: "You know what to say and when to make the most impact upon your superiors. When you successfully use a social Skill to influence those with a higher Status tier, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 46 could be used for +6 SL.",
        maxTaken: "felw" /* Stat.FELW */
    },
    SURE_SHOT: {
        name: "Sure Shot",
        description: "You know how to find the weak spots in a target's armour. When you hit a target with a Ranged weapon, you may ignore Armour Points equal to your Sure Shot level.",
        maxTaken: "init" /* Stat.INIT */
    },
    SURGERY: {
        name: "Surgery",
        description: "You are a surgeon, able to open and close the flesh in order to heal others. You can treat any Critical Wound marked as needing Surgery. You can also perform surgery to resolve internal issues with an Extended Challenging (+0) Heal Test with a target SL determined by the GM (usually 5-10) depending upon the difficulty of the procedure at hand. This will cause 1d10 Wounds and 1 Bleeding Condition per Test, meaning surgery has a high chance of killing a patient if the surgeon is not careful. After surgery, the patient must pass an Average (+20) Endurance Test or gain a Minor Infection.",
        maxTaken: "intl" /* Stat.INTL */
    },
    TENACIOUS: {
        name: "Tenacious",
        description: "You never give up, no matter how impossible your travails appear. You can double the length of time successful Endurance Tests allow you to endure a hardship. This includes enduring prolonged riding, exposure, rituals, and similar adversities.",
        maxTaken: "toug" /* Stat.TOUG */
    },
    TINKER: {
        name: "Tinker",
        description: "You are somewhat of a Johann-of-all-trades, able to repair almost anything. You count all non-magical Trade Skills as Basic when repairing broken items.",
        maxTaken: "dext" /* Stat.DEXT */
    },
    TOWER_OF_MEMORIES: {
        name: "Tower of Memories",
        description: "A recollection technique first instigated by the Cult of Verena, reputedly from Elven practices taught by the Loremasters of Hoeth, Tower of Memories allows you to perfectly recall a sequence of facts by storing them in an imaginary spire. You can recall a sequence as long as your Intelligence without having to make a Test. For every 10 more items you attempt to memorise, you must make an increasingly difficult Intelligence Test to recall the list correctly, starting at Very Easy (+60) for +10, Easy (+40) for +20, Average (+20) for +30, and so on. Beyond it's obvious utility for Gamble Tests, where having this Talent adds a bonus of +20 to +60 depending upon how useful recalling sequences is to the game at hand, the GM can apply bonuses to other Tests as appropriate. Each time you take this Talent you may recall an extra sequence without having to forget a previously stored one.",
        maxTaken: "intl" /* Stat.INTL */
    },
    TRAPPER: {
        name: "Trapper",
        description: "You are skilled at spotting and using traps. You may take a Perception Test to spot traps automatically without having to tell the GM of your intention; the GM may prefer to make some of these Tests on your behalf in private.",
        maxTaken: "init" /* Stat.INIT */
    },
    TRICK_RIDING: {
        name: "Trick Riding",
        description: "You are capable of amazing feats of agility on horseback. You can use any of your Performer Skills and unmodified Dodge skill when on horseback. Further, when mounted, you can make your Move at the start of the Round instead of on your Turn.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    TUNNEL_RAT: {
        name: "Tunnel Rat",
        description: "You are at home in tunnels, sewers, and other underground environments. When using Stealth in an underground environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden others.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    UNSHAKABLE: {
        name: "Unshakable",
        description: "You are a jaded veteran who has survived more than one hail of shots from Blackpowder weapons. You need only take a Cool Test to resist a Broken Condition if you are successfully wounded by a Blackpowder weapon, not just if you are shot at.",
        maxTaken: "will" /* Stat.WILL */
    },
    VERY_RESILIENT: {
        name: "Very Resilient",
        description: "You gain a permanent +5 bonus to your starting Toughness Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    VERY_STRONG: {
        name: "Very Strong",
        description: "You gain a permanent +5 bonus to your starting Strength Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    WAR_LEADER: {
        name: "War Leader",
        description: "Your stern gaze and inspiring words motivate your soldiers to fight on to the end. All subordinates able to see you may add your level in War Leader to their SL in one Willpower Test per Round. This bonus does not stack.",
        maxTaken: "felw" /* Stat.FELW */
    },
    WAR_WIZARD: {
        name: "War Wizard",
        description: "You are trained to cast magic while in the thick of combat. On your Turn, you may cast one Spell with a Casting Number of 5 or less for free without using your Action. However, if you do this, you may not cast another spell this Turn.",
        maxTaken: 1
    },
    WARRIOR_BORN: {
        name: "Warrior Born",
        description: "You gain a permanent +5 bonus to your starting Weapon Skill Characteristic (doesn't count as Advances).",
        maxTaken: 1
    },
    WATERMAN: {
        name: "Waterman",
        description: "You are an experienced freshwater sailor and are well-versed with river vessels. You can ignore all negatives to your Tests when onboard a barge derived from rolling waters, swaying vessels, unsure footing, and similar. Further, you count as two boatmen towards the minimum number of crew to pilot a river vessel.",
        maxTaken: "agil" /* Stat.AGIL */
    },
    WEALTHY: {
        name: "Wealthy",
        description: "You are fabulously wealthy, and are rarely ever short of coin. When Earning (including Income Endeavours) you secure +1 GC per time you have this Talent.",
        maxTaken: 10
    },
    WELL_PREPARED: {
        name: "Well-prepared",
        description: "You are used to anticipating the needs of others, and yourself. A number of times per session equal to your level of Well-Prepared, you may pull the trapping required for the current situation from your backpack (or similar) as long as it is Encumbrance 0, could feasibly been bought recently, and doesn't stretch credibility too far. This could be anything from a flask of spirits to fortify a wounded comrade to a pfennig-whistle needed by a passing entertainer. Whenever you do this, you must deduct the cost for the prepared item from your purse, representing the coin you spent earlier.",
        maxTaken: "init" /* Stat.INIT */
    },
    WITCH: {
        name: "Witch!",
        description: "You have learned magic through trial and error. Add Language (Magick) to any Career you enter; if it is already in your Career, you may purchase the Skill for 5 XP fewer per Advance. Further, you may spend 1 Resilience point to immediately cast any spell as if it were one of your Arcane Lore spells; you also instantly memorise that spell as one of your Arcane Lore spells for 0 XP. You can do this a number of times equal to your level in this Talent.",
        maxTaken: "will" /* Stat.WILL */
    }
};
TEW.DATABASE.TALENTS.IDS = Object.keys(TEW.DATABASE.TALENTS.SET);
TEW.DATABASE.TALENTS.ARRAY = Object.keys(TEW.DATABASE.TALENTS.SET)
    .sort((a, b) => a.localeCompare(b))
    .map(talent => [talent, TEW.DATABASE.TALENTS.SET[talent]]);
// === \$End file TEW_Talents
// ====== //
// === \$Begin file TEW_Weapons
TEW.DATABASE.WEAPONS = {};
TEW.DATABASE.WEAPONS.MELEE_SET = {
    AXE: {
        name: "Axe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/10/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [0 /* WeaponQuality.HACK */, 1 /* WeaponQuality.UNBALANCED */],
        description: "Much beloved of Dwarfs, the axe is not as agile in the hand as a sword but the heavy cleaving head can make a mess of armour and shields."
    },
    BALLOCK_KNIFE: {
        name: "Ballock Knife",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_KNIFE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/16/0",
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */, 4 /* WeaponQuality.PRECISE */],
        description: "The short, slim blade of a ballock knife makes for a poor weapon, unless you have a heavily armoured opponent at your mercy."
    },
    CLUB: {
        name: "Club",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/4/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [6 /* WeaponQuality.UNDAMAGING */, 1 /* WeaponQuality.UNBALANCED */],
        description: "Clubs are as often found as they are crafted."
    },
    DAGGER: {
        name: "Dagger",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_KNIFE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/16/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "These blades are crafted specifically for fighting."
    },
    IMPROVISED_WEAPON: {
        name: "Improvised Weapon",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PIPE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/0/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: [6 /* WeaponQuality.UNDAMAGING */, 1 /* WeaponQuality.UNBALANCED */],
        description: "Hard and heavy items that are not intended to be used as a weapon may still serve in a desperate moment. This entry covers such items as chair legs, rocks, snooker cues, and bottles."
    },
    KNIFE: {
        name: "Knife",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_KNIFE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/8/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: [6 /* WeaponQuality.UNDAMAGING */],
        description: "This entry covers short, sharp blades intended for purposes other than fighting, such as kitchen or hunting knives."
    },
    MACE: {
        name: "Mace",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/15/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [7 /* WeaponQuality.PUMMEL */, 1 /* WeaponQuality.UNBALANCED */],
        description: "The typical mace is a metal shaft with a heavy head shaped in flanges or spiked protrusions. Whilst it is less wieldy than a sword it inflicts concussive blows."
    },
    MILITARY_PICK: {
        name: "Military Pick",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/15/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [3 /* WeaponQuality.PENETRATING */, 1 /* WeaponQuality.UNBALANCED */],
        description: "Crude picks are little more than a metal spike on the end of a stick, though better made weapons are fashioned from steel. They are not agile weapons but are well designed to crack armour."
    },
    SCIMITAR: {
        name: "Scimitar",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SABER,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "1/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [8 /* WeaponQuality.SLASH_1 */],
        description: "Popular in the east of the Empire, Kislev and Araby, the scimitar has a curved blade which can inflict terrible cutting wounds. Its design does compromise the welder’s ability to lunge and thrust, meaning that even though scimitars are a similar length to straight swords they have a shorter reach."
    },
    SWORD: {
        name: "Sword",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SWORD,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "1/0/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [],
        description: "The sword is the weapon by which all others are measured. A quality sword has a needle point tip for thrusting, a blade that is razor sharp to either side, and is balanced so that the weight is close to the hand, making it agile for attack and defence."
    },
    WARHAMMER: {
        name: "Warhammer",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "1/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [3 /* WeaponQuality.PENETRATING */, 7 /* WeaponQuality.PUMMEL */, 1 /* WeaponQuality.UNBALANCED */],
        description: "Warhammers come in several designs, but typically have a flat heavy head on one side for inflicting pummelling damage, and a spiked point on the other for penetrating armour."
    },
    SHIELD_BUCKLER: {
        name: "Shield (Buckler)",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SHIELD,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "0/18/2",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        strBonus: true,
        longReach: false,
        damage: 1,
        qualities: [10 /* WeaponQuality.SHIELD_1 */, 15 /* WeaponQuality.DEFENSIVE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "A small shield to save you from harm."
    },
    SHIELD: {
        name: "Shield",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SHIELD,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "2/0/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [11 /* WeaponQuality.SHIELD_2 */, 15 /* WeaponQuality.DEFENSIVE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "A regular shield, ideal for close combat."
    },
    SHIELD_LARGE: {
        name: "Shield (Large)",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SHIELD,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "3/0/0",
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [12 /* WeaponQuality.SHIELD_3 */, 15 /* WeaponQuality.DEFENSIVE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "A large shield to protect you from all enemies"
    },
    PAVISE: {
        name: "Pavise",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SHIELD,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: "3/15/0",
        enc: 4,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [14 /* WeaponQuality.SHIELD_5 */],
        description: "The pavise is a large shield carried by crossbowmen to provide shelter on the battlefield as they reload. Roughly 4 feet tall and often painted with the unit’s coat of arms, the crossbowman plants the pavise on the ground like a personal wall."
    },
    CAVALRY_HAMMER: {
        name: "Cavalry Hammer",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 1 /* WeaponGroup.CAVALRY */,
        groupLabel: "Cavalry" /* WeaponGroupLabel.CAVALRY */,
        price: "3/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: [7 /* WeaponQuality.PUMMEL */],
        description: "Cavalry hammers are large, weighty weapons, favoured by the Knights of the White Wolf. On foot, they may be used with the Melee (Two-Handed) skill."
    },
    DEMI_LANCE: {
        name: "Demi-Lance",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 1 /* WeaponGroup.CAVALRY */,
        groupLabel: "Cavalry" /* WeaponGroupLabel.CAVALRY */,
        price: "1/0/0",
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: [16 /* WeaponQuality.IMPACT */, 2 /* WeaponQuality.IMPALE */],
        description: "Lances resemble spears, but with a weighty grip designed to brace the weapon against the arm and chest of a charging knight. The demi-lance is similar, but shorter and lighter."
    },
    LANCE: {
        name: "Lance",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 1 /* WeaponGroup.CAVALRY */,
        groupLabel: "Cavalry" /* WeaponGroupLabel.CAVALRY */,
        price: "1/0/0",
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: [16 /* WeaponQuality.IMPACT */, 2 /* WeaponQuality.IMPALE */],
        description: "Lances resemble spears, but with a weighty grip designed to brace the weapon against the arm and chest of a charging knight. The demi-lance is similar, but shorter and lighter."
    },
    SABRE: {
        name: "Sabre",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SABER,
        group: 1 /* WeaponGroup.CAVALRY */,
        groupLabel: "Cavalry" /* WeaponGroupLabel.CAVALRY */,
        price: "0/10/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [8 /* WeaponQuality.SLASH_1 */],
        description: "empty"
    },
    FOIL: {
        name: "Foil",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FOIL,
        group: 2 /* WeaponGroup.FENCING */,
        groupLabel: "Fencing" /* WeaponGroupLabel.FENCING */,
        price: "5/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [17 /* WeaponQuality.FAST */, 2 /* WeaponQuality.IMPALE */, 4 /* WeaponQuality.PRECISE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    RAPIER: {
        name: "Rapier",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_RAPIER,
        group: 2 /* WeaponGroup.FENCING */,
        groupLabel: "Fencing" /* WeaponGroupLabel.FENCING */,
        price: "5/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [17 /* WeaponQuality.FAST */, 2 /* WeaponQuality.IMPALE */],
        description: "empty"
    },
    SMALLSWORD: {
        name: "Smallsword",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FOIL,
        group: 2 /* WeaponGroup.FENCING */,
        groupLabel: "Fencing" /* WeaponGroupLabel.FENCING */,
        price: "4/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [17 /* WeaponQuality.FAST */, 2 /* WeaponQuality.IMPALE */, 4 /* WeaponQuality.PRECISE */],
        description: "empty"
    },
    SPIKED_GAUNTLET: {
        name: "Spiked Gauntlet",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: "2/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [2 /* WeaponQuality.IMPALE */, 1 /* WeaponQuality.UNBALANCED */],
        description: "empty"
    },
    BOAT_HOOK: {
        name: "Boat Hook",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: "0/6/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [18 /* WeaponQuality.TRIP */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    GARROTE: {
        name: "Garrote",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CHAINS,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: "0/1/0",
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [19 /* WeaponQuality.ENTANGLE */, 20 /* WeaponQuality.SLOW */, 1 /* WeaponQuality.UNBALANCED */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    UNARMED: {
        name: "Unarmed",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: "0/0/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: [6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    KNUCKLEDUSTERS: {
        name: "Knuckledusters",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: "0/2/6",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "empty"
    },
    LOCKED_GAUNTLET: {
        name: "Locked Gauntlet",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CLAW,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: "1/0/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    SAP: {
        name: "Sap",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: "0/1/0",
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: [7 /* WeaponQuality.PUMMEL */, 1 /* WeaponQuality.UNBALANCED */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    GRAIN_FLAIL: {
        name: "Grain Flail",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FLAIL,
        group: 4 /* WeaponGroup.FLAIL */,
        groupLabel: "Flail" /* WeaponGroupLabel.FLAIL */,
        price: "0/10/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [21 /* WeaponQuality.DISTRACT */, 26 /* WeaponQuality.IMPRECISE */, 22 /* WeaponQuality.WRAP */],
        description: "empty"
    },
    FLAIL: {
        name: "Flail" /* WeaponGroupLabel.FLAIL */,
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FLAIL,
        group: 4 /* WeaponGroup.FLAIL */,
        groupLabel: "Flail" /* WeaponGroupLabel.FLAIL */,
        price: "2/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 5,
        qualities: [21 /* WeaponQuality.DISTRACT */, 22 /* WeaponQuality.WRAP */],
        description: "empty"
    },
    MILITARY_FLAIL: {
        name: "Military Flail",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FLAIL,
        group: 4 /* WeaponGroup.FLAIL */,
        groupLabel: "Flail" /* WeaponGroupLabel.FLAIL */,
        price: "3/0/0",
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: [21 /* WeaponQuality.DISTRACT */, 26 /* WeaponQuality.IMPRECISE */, 23 /* WeaponQuality.TIRING */, 22 /* WeaponQuality.WRAP */],
        description: "empty"
    },
    CLOAK: {
        name: "Cloak",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CHAINS,
        group: 5 /* WeaponGroup.PARRY */,
        groupLabel: "Parry" /* WeaponGroupLabel.PARRY */,
        price: "0/10/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: [19 /* WeaponQuality.ENTANGLE */, 15 /* WeaponQuality.DEFENSIVE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    MAIN_GAUCHE: {
        name: "Main Gauche",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_KNIFE,
        group: 5 /* WeaponGroup.PARRY */,
        groupLabel: "Parry" /* WeaponGroupLabel.PARRY */,
        price: "1/0/0",
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [15 /* WeaponQuality.DEFENSIVE */],
        description: "empty"
    },
    SWORDBREAKER: {
        name: "Swordbreaker",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BREAKER,
        group: 5 /* WeaponGroup.PARRY */,
        groupLabel: "Parry" /* WeaponGroupLabel.PARRY */,
        price: "1/2/6",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 24 /* WeaponQuality.TRAP_BLADE */],
        description: "empty"
    },
    WEIGHTED_NET: {
        name: "Weighted Net",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CHAINS,
        group: 5 /* WeaponGroup.PARRY */,
        groupLabel: "Parry" /* WeaponGroupLabel.PARRY */,
        price: "0/10/0",
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: [19 /* WeaponQuality.ENTANGLE */, 15 /* WeaponQuality.DEFENSIVE */, 10 /* WeaponQuality.SHIELD_1 */, 20 /* WeaponQuality.SLOW */, 6 /* WeaponQuality.UNDAMAGING */, 22 /* WeaponQuality.WRAP */],
        description: "empty"
    },
    AHLSPIESS: {
        name: "Ahlspiess",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "2/0/0",
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 3,
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "empty"
    },
    BILL: {
        name: "Bill",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "2/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 0 /* WeaponQuality.HACK */, 18 /* WeaponQuality.TRIP */],
        description: "empty"
    },
    HALBERD: {
        name: "Halberd",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "2/0/0",
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 0 /* WeaponQuality.HACK */, 2 /* WeaponQuality.IMPALE */],
        description: "empty"
    },
    MANCATCHER: {
        name: "Mancatcher",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "2/0/0",
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 2,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 19 /* WeaponQuality.ENTANGLE */],
        description: "empty"
    },
    PARTIZAN: {
        name: "Partizan",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "2/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 2 /* WeaponQuality.IMPALE */, 9 /* WeaponQuality.SLASH_2 */], // TODO Impale OR Slash
        description: "empty"
    },
    POLLAXE: {
        name: "Pollaxe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "2/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 0 /* WeaponQuality.HACK */, 2 /* WeaponQuality.IMPALE */, 7 /* WeaponQuality.PUMMEL */], // TODO Hack OR Impale OR Pummel
        description: "empty"
    },
    SPEAR: {
        name: "Spear",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "0/15/0",
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "empty"
    },
    PIKE: {
        name: "Pike",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "0/18/0",
        enc: 4,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "empty"
    },
    QUARTERSTAFF: {
        name: "Quarterstaff",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_STAFF,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "0/3/0",
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 7 /* WeaponQuality.PUMMEL */],
        description: "empty"
    },
    ENCHANTED_STAFF: {
        name: "Enchanted Staff",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_STAFF,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: "15/0/0",
        enc: 2,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 7 /* WeaponQuality.PUMMEL */],
        description: "empty"
    },
    BASTARD_SWORD: {
        name: "Bastard Sword",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SWORD,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: "8/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: [5 /* WeaponQuality.DAMAGING */, 15 /* WeaponQuality.DEFENSIVE */],
        description: "empty"
    },
    GREAT_AXE: {
        name: "Great Axe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: "4/0/0",
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: [0 /* WeaponQuality.HACK */, 16 /* WeaponQuality.IMPACT */, 23 /* WeaponQuality.TIRING */],
        description: "empty"
    },
    FLAMBERGE_ZWEIHANDER: {
        name: "Flamberge Zweihander",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SWORD,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: "30/0/0",
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: [5 /* WeaponQuality.DAMAGING */, 0 /* WeaponQuality.HACK */, 9 /* WeaponQuality.SLASH_2 */],
        description: "empty"
    },
    PICK: {
        name: "Pick",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: "0/9/0",
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 5,
        qualities: [5 /* WeaponQuality.DAMAGING */, 2 /* WeaponQuality.IMPALE */, 20 /* WeaponQuality.SLOW */],
        description: "empty"
    },
    WARHAMMER_TH: {
        name: "Warhammer",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: "3/0/0",
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 6,
        qualities: [5 /* WeaponQuality.DAMAGING */, 7 /* WeaponQuality.PUMMEL */, 20 /* WeaponQuality.SLOW */],
        description: "empty"
    },
    ZWEIHANDER: {
        name: "Zweihander",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SWORD,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: "10/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: [5 /* WeaponQuality.DAMAGING */, 0 /* WeaponQuality.HACK */],
        description: "empty"
    }
};
TEW.DATABASE.WEAPONS.RANGED_SET = {
    ELF_BOW: {
        name: "Elf Bow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        twoHanded: true,
        price: "10/0/0",
        enc: 2,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 150,
        strBonus: true,
        damage: 4,
        qualities: [5 /* WeaponQuality.DAMAGING */, 4 /* WeaponQuality.PRECISE */],
        description: "empty"
    },
    LONGBOW: {
        name: "Longbow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        twoHanded: true,
        price: "5/0/0",
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 100,
        strBonus: true,
        damage: 4,
        qualities: [5 /* WeaponQuality.DAMAGING */],
        description: "empty"
    },
    BOW: {
        name: "Bow" /* WeaponGroupLabel.BOW */,
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        twoHanded: true,
        price: "4/0/0",
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 50,
        strBonus: true,
        damage: 3,
        qualities: [],
        description: "empty"
    },
    SHORTBOW: {
        name: "Shortbow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        twoHanded: true,
        price: "3/0/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 20,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "empty"
    },
    CROSSBOW_PISTOL: {
        name: "Crossbow Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CROSSBOW,
        group: 9 /* WeaponGroup.CROSSBOW */,
        groupLabel: "Crossbow" /* WeaponGroupLabel.CROSSBOW */,
        twoHanded: false,
        price: "6/0/0",
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 10,
        strBonus: false,
        damage: 7,
        qualities: [34 /* WeaponQuality.PISTOL */],
        description: "empty"
    },
    HEAVY_CROSSBOW: {
        name: "Heavy Crossbow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CROSSBOW,
        group: 9 /* WeaponGroup.CROSSBOW */,
        groupLabel: "Crossbow" /* WeaponGroupLabel.CROSSBOW */,
        twoHanded: true,
        price: "7/0/0",
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 100,
        strBonus: false,
        damage: 9,
        qualities: [5 /* WeaponQuality.DAMAGING */, 28 /* WeaponQuality.RELOAD_2 */],
        description: "empty"
    },
    CROSSBOW: {
        name: "Crossbow" /* WeaponGroupLabel.CROSSBOW */,
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CROSSBOW,
        group: 9 /* WeaponGroup.CROSSBOW */,
        groupLabel: "Crossbow" /* WeaponGroupLabel.CROSSBOW */,
        twoHanded: true,
        price: "5/0/0",
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 60,
        strBonus: false,
        damage: 9,
        qualities: [27 /* WeaponQuality.RELOAD_1 */],
        description: "empty"
    },
    LASSO: {
        name: "Lasso",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_WHIP,
        group: 10 /* WeaponGroup.ENTANGLING */,
        groupLabel: "Entangling" /* WeaponGroupLabel.ENTANGLING */,
        twoHanded: false,
        price: "0/6/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 6,
        strBonus: false,
        damage: 0,
        qualities: [19 /* WeaponQuality.ENTANGLE */],
        description: "empty"
    },
    WHIP: {
        name: "Whip",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_WHIP,
        group: 10 /* WeaponGroup.ENTANGLING */,
        groupLabel: "Entangling" /* WeaponGroupLabel.ENTANGLING */,
        twoHanded: false,
        price: "0/5/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 2,
        qualities: [19 /* WeaponQuality.ENTANGLE */],
        description: "empty"
    },
    SLING: {
        name: "Sling" /* WeaponGroupLabel.SLING */,
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 11 /* WeaponGroup.SLING */,
        groupLabel: "Sling" /* WeaponGroupLabel.SLING */,
        twoHanded: false,
        price: "0/1/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 60,
        strBonus: false,
        damage: 6,
        qualities: [],
        description: "empty"
    },
    STAFF_SLING: {
        name: "Staff Sling",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 11 /* WeaponGroup.SLING */,
        groupLabel: "Sling" /* WeaponGroupLabel.SLING */,
        twoHanded: true,
        price: "0/4/0",
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 100,
        strBonus: false,
        damage: 7,
        qualities: [],
        description: "empty"
    },
    BOLAS: {
        name: "Bolas",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CHAINS,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        twoHanded: false,
        price: "0/1/0",
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 9,
        strBonus: true,
        damage: 0,
        qualities: [19 /* WeaponQuality.ENTANGLE */],
        description: "empty"
    },
    DART: {
        name: "Dart",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        twoHanded: false,
        price: "0/2/0",
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 6,
        strBonus: true,
        damage: 1,
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "empty"
    },
    JAVELIN: {
        name: "Javelin",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        twoHanded: false,
        price: "0/10/6",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 9,
        strBonus: true,
        damage: 3,
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "empty"
    },
    ROCK: {
        name: "Rock",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        twoHanded: false,
        price: "0/0/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 9,
        strBonus: true,
        damage: 0,
        qualities: [],
        description: "empty"
    },
    THROWING_AXE: {
        name: "Throwing Axe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        twoHanded: false,
        price: "1/0/0",
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 3,
        qualities: [0 /* WeaponQuality.HACK */],
        description: "empty"
    },
    THROWING_KNIFE: {
        name: "Throwing Knife",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_KNIFE,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        twoHanded: false,
        price: "0/18/0",
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "empty"
    },
    BOMB: {
        name: "Bomb",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOMB,
        group: 13 /* WeaponGroup.EXPLOSIVES */,
        groupLabel: "Explosives" /* WeaponGroupLabel.EXPLOSIVES */,
        twoHanded: false,
        price: "3/0/0",
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 3,
        strBonus: false,
        damage: 12,
        qualities: [42 /* WeaponQuality.BLAST_5 */, 25 /* WeaponQuality.DANGEROUS */, 16 /* WeaponQuality.IMPACT */],
        description: "empty"
    },
    INCENDIARY: {
        name: "Incendiary",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOMB,
        group: 13 /* WeaponGroup.EXPLOSIVES */,
        groupLabel: "Explosives" /* WeaponGroupLabel.EXPLOSIVES */,
        twoHanded: false,
        price: "1/0/0",
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 3,
        strBonus: false,
        damage: 0, // TODO
        qualities: [41 /* WeaponQuality.BLAST_4 */, 25 /* WeaponQuality.DANGEROUS */],
        description: "empty"
    },
    BLUNDERBUSS: {
        name: "Blunderbuss",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SHOTGUN,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "2/0/0",
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 20,
        strBonus: false,
        damage: 8,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 28 /* WeaponQuality.RELOAD_2 */],
        description: "empty"
    },
    HOCHLAND_LONG_RIFLE: {
        name: "Hochland Long Rifle",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_RIFLE,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "100/0/0",
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 100,
        strBonus: false,
        damage: 9,
        qualities: [40 /* WeaponQuality.ACCURATE */, 4 /* WeaponQuality.PRECISE */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "empty"
    },
    HANDGUN: {
        name: "Handgun",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "4/0/0",
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 50,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 29 /* WeaponQuality.RELOAD_3 */],
        description: "empty"
    },
    PISTOL: {
        name: "Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: false,
        price: "8/0/0",
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 20,
        strBonus: false,
        damage: 8,
        qualities: [34 /* WeaponQuality.PISTOL */, 27 /* WeaponQuality.RELOAD_1 */],
        description: "empty"
    },
    MATCHLOCK_HANDGUN: {
        name: "Matchlock Handgun",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "2/0/0",
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 50,
        strBonus: false,
        damage: 8,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "empty"
    },
    MATCHLOCK_BLUNDERBUSS: {
        name: "Matchlock Blunderbuss",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SHOTGUN,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "1/0/0",
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 20,
        strBonus: false,
        damage: 7,
        qualities: [38 /* WeaponQuality.SPREAD_3 */, 25 /* WeaponQuality.DANGEROUS */, 29 /* WeaponQuality.RELOAD_3 */],
        description: "empty"
    },
    ARQUEBUS: {
        name: "Arquebus",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_RIFLE,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "5/0/0",
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 40,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 31 /* WeaponQuality.RELOAD_5 */],
        description: "empty"
    },
    DOUBLE_BARRELLED_HANDGUN: {
        name: "Double-Barrelled Handgun",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "7/0/0",
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 50,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 35 /* WeaponQuality.REPEATER */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "empty"
    },
    GRIFFONSFOOT_PISTOL: {
        name: "Griffonsfoot Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: false,
        price: "10/0/0",
        enc: 1,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 10,
        strBonus: false,
        damage: 7,
        qualities: [26 /* WeaponQuality.IMPRECISE */, 39 /* WeaponQuality.SPREAD_5 */, 32 /* WeaponQuality.RELOAD_6 */],
        description: "empty"
    },
    GUN_AXE: {
        name: "GunAxe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "8/0/0",
        enc: 1,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "empty"
    },
    GUN_HALBERD: {
        name: "Gun Halberd",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        twoHanded: true,
        price: "10/0/0",
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "empty"
    },
    REPEATER_HANDGUN: {
        name: "Repeater Handgun",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 15 /* WeaponGroup.ENGINEERING */,
        groupLabel: "Engineering" /* WeaponGroupLabel.ENGINEERING */,
        twoHanded: true,
        price: "10/0/0",
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 31 /* WeaponQuality.RELOAD_5 */, 37 /* WeaponQuality.REPEATER_4 */],
        description: "empty"
    },
    REPEATER_PISTOL: {
        name: "Repeater Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 15 /* WeaponGroup.ENGINEERING */,
        groupLabel: "Engineering" /* WeaponGroupLabel.ENGINEERING */,
        twoHanded: false,
        price: "15/0/0",
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 10,
        strBonus: false,
        damage: 8,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 34 /* WeaponQuality.PISTOL */, 30 /* WeaponQuality.RELOAD_4 */, 37 /* WeaponQuality.REPEATER_4 */],
        description: "empty"
    },
    HAND_MORTAR: {
        name: "Hand Mortar",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 15 /* WeaponGroup.ENGINEERING */,
        groupLabel: "Engineering" /* WeaponGroupLabel.ENGINEERING */,
        twoHanded: true,
        price: "50/0/0",
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 7,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 28 /* WeaponQuality.RELOAD_2 */],
        description: "empty"
    },
    CANE_PISTOL: {
        name: "Cane Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 15 /* WeaponGroup.ENGINEERING */,
        groupLabel: "Engineering" /* WeaponGroupLabel.ENGINEERING */,
        twoHanded: false,
        price: "15/0/0",
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 10,
        strBonus: false,
        damage: 8,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 32 /* WeaponQuality.RELOAD_6 */],
        description: "empty"
    }
};
TEW.DATABASE.WEAPONS.AMMO_SET = {
    ARROW: {
        name: "Arrow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammountSold: 12,
        price: "0/5/0",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "empty"
    },
    BARBED_ARROW: {
        name: "Barbed Arrow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammountSold: 12,
        price: "0/8/0",
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+0",
        qualities: [2 /* WeaponQuality.IMPALE */, 8 /* WeaponQuality.SLASH_1 */],
        description: "empty"
    },
    BODKIN_ARROW: {
        name: "Bodkin Arrow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammountSold: 12,
        price: "0/8/0",
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+0",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "empty"
    },
    ELF_ARROW: {
        name: "Elf Arrow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammountSold: 1,
        price: "0/6/0",
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: "+50",
        damage: "+1",
        qualities: [40 /* WeaponQuality.ACCURATE */, 2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "empty"
    },
    SHARO_STICK: {
        name: "Sharp Stick",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammountSold: 1,
        price: "0/0/0",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "/2",
        damage: "-2",
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    BOLT: {
        name: "Bolt",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CROSSBOW,
        group: 9 /* WeaponGroup.CROSSBOW */,
        groupLabel: "Crossbow" /* WeaponGroupLabel.CROSSBOW */,
        ammountSold: 12,
        price: "0/5/0",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "empty"
    },
    LEAD_BULLET: {
        name: "Lead Bullet",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 11 /* WeaponGroup.SLING */,
        groupLabel: "Sling" /* WeaponGroupLabel.SLING */,
        ammountSold: 12,
        price: "0/0/4",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "-10",
        damage: "+1",
        qualities: [7 /* WeaponQuality.PUMMEL */],
        description: "empty"
    },
    PEBBLE: {
        name: "Pebble",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 11 /* WeaponGroup.SLING */,
        groupLabel: "Sling" /* WeaponGroupLabel.SLING */,
        ammountSold: 1,
        price: "0/0/0",
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "-10",
        damage: "-2",
        qualities: [26 /* WeaponQuality.IMPRECISE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "empty"
    },
    STONE_BULLET: {
        name: "Stone Bullet",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 11 /* WeaponGroup.SLING */,
        groupLabel: "Sling" /* WeaponGroupLabel.SLING */,
        ammountSold: 12,
        price: "0/0/2",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: [7 /* WeaponQuality.PUMMEL */],
        description: "empty"
    },
    BULLET_AND_POWDER: {
        name: "Bullet and Powder",
        icon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammountSold: 12,
        price: "0/3/3",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+1",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "empty"
    },
    PAPER_CARTRIDGE: {
        name: "Paper Cartridge",
        icon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammountSold: 12,
        price: "0/5/0",
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+1",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */, 33 /* WeaponQuality.FASTER_RELOAD */],
        description: "empty"
    },
    AQSHY_INFUSED_POWDER: {
        name: "Aqshy-Infused Powder",
        icon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammountSold: 12,
        price: "1/0/0",
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: "+10",
        damage: "+2",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "empty"
    },
    PRECISION_SHOT_AND_POWDER: {
        name: "Precision Shot and Powder",
        icon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammountSold: 1,
        price: "0/3/0",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+1",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */, 4 /* WeaponQuality.PRECISE */],
        description: "empty"
    },
    IMPROVISED_SHOT_AND_POWDER: {
        name: "Improvised Shot and Powder",
        icon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammountSold: 1,
        price: "0/0/3",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "/2",
        damage: "+0",
        qualities: [],
        description: "empty"
    },
    SMALL_SHOT_AND_POWDER: {
        name: "Small Shot and Powder",
        icon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammountSold: 12,
        price: "0/3/3",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: [38 /* WeaponQuality.SPREAD_3 */],
        description: "empty"
    },
    SCRAP_AND_POWDER: {
        name: "Scrap and Powder",
        icon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammountSold: 12,
        price: "0/2/0",
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "/2",
        damage: "-1",
        qualities: [38 /* WeaponQuality.SPREAD_3 */, 43 /* WeaponQuality.INFECTED */],
        description: "empty"
    },
    LARGE_BULLET_AND_POWDER: {
        name: "Large Bullet and Powder",
        icon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammountSold: 12,
        price: "1/0/0",
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+2",
        qualities: [2 /* WeaponQuality.IMPALE */, 16 /* WeaponQuality.IMPACT */, 3 /* WeaponQuality.PENETRATING */],
        description: "empty"
    }
};
TEW.DATABASE.WEAPONS.IDS = Object.keys(TEW.DATABASE.WEAPONS.MELEE_SET)
    .concat(Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET))
    .sort((a, b) => a.localeCompare(b));
TEW.DATABASE.WEAPONS.ARRAY = TEW.DATABASE.WEAPONS.IDS
    .map((key) => [key, TEW.DATABASE.WEAPONS.MELEE_SET[key] || TEW.DATABASE.WEAPONS.RANGED_SET[key]]);
TEW.DATABASE.WEAPONS.GROUP_IDS = [
    "BASIC",
    "CAVALRY",
    "FENCING",
    "BRAWLING",
    "FLAIL",
    "PARRY",
    "POLE_ARM",
    "TWO_HANDED",
    "BOW",
    "CROSSBOW",
    "ENTANGLING",
    "SLING",
    "THROWING",
    "EXPLOSIVES",
    "BLACKPOWDER",
    "ENGINEERING"
];
// === \$End file TEW_Weapons
// ====== //

