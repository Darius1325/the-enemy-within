// #region ============================== import ============================== //
// ----------------------
var Imported = Imported || {};
Imported.TEW_Constants = true;
var TEW = TEW || {};
TEW.DATABASE = TEW.DATABASE || {};
TEW.LEVELLING = TEW.LEVELLING || {};
// #endregion =========================== import ============================== //
// ============================== //
// #region ============================== TEW_Icons ============================== //
// ----------------------
TEW.DATABASE.ICONS = {};
TEW.DATABASE.ICONS.SET = {
    // #region ====== ICON ITEM === //
    ITEM_CLOTHES: 154,
    ITEM_FOOD: 265,
    ITEM_TOOLS: 216,
    ITEM_BOOKS: 189,
    ITEM_DRUGS: 219,
    // #endregion === ICON ITEM === //
    // === //
    // #region ====== ICON AVAILABILITY === //
    AVAILABILITY_COMMON: 89,
    AVAILABILITY_SCARCE: 88,
    AVAILABILITY_RARE: 87,
    AVAILABILITY_EXOTIC: 90,
    // #endregion === AVAILABILITY === //
    // === //
    // #region ====== ICON WEAPON === //
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
    // #endregion === WEAPON === //
    // === //
    // #region ====== ICON ARMOR === //
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
    // #endregion === ARMOR === //
};
// #endregion =========================== TEW_Icons ============================== //
// ============================== //
// #region ============================== TEW_Armors ============================== //
// ----------------------
TEW.DATABASE.ARMORS = {};
// #region ====== ARMORS SET === //
TEW.DATABASE.ARMORS.SET = {
    SOFT_KIT: {
        name: "Soft Kit",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 0 /* ArmorGroup.SOFT_KIT */,
        groupLabel: "Soft Kit" /* ArmorGroupLabel.SOFT_KIT */,
        price: 216,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */, 1 /* BodyLocation.LEGS */],
        ap: 0,
        qualities: [],
        forbiddenWith: [],
        description: "Soft kits are woollen doublets and hose designed to be worn under armour. They provide padding needed to prevent chafing and laces and holes to attach pieces of armour to. They can be worn under any armour and must be worn under certain pieces of plate."
    },
    REINFORCED_SOFT_KIT: {
        name: "Reinforced Soft Kit",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: 0 /* ArmorGroup.SOFT_KIT */,
        groupLabel: "Soft Kit" /* ArmorGroupLabel.SOFT_KIT */,
        price: 480,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */, 1 /* BodyLocation.LEGS */],
        ap: 1,
        qualities: [0 /* ArmorQuality.PARTIAL */, 1 /* ArmorQuality.REINFORCED */],
        forbiddenWith: [],
        description: "Soft kits are woollen doublets and hose designed to be worn under armour. They provide padding needed to prevent chafing and laces and holes to attach pieces of armour to. They can be worn under any armour and must be worn under certain pieces of plate. This one has been reinforced with sections of mail placed to compensate for chinks in a full suit of plate armour."
    },
    LEATHER_JACK: {
        name: "Leather Jack",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 1 /* ArmorGroup.BOILED_LEATHER */,
        groupLabel: "Boiled Leather" /* ArmorGroupLabel.BOILED_LEATHER */,
        price: 144,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */],
        ap: 1,
        qualities: [],
        forbiddenWith: [4 /* ArmorGroup.CHAINMAIL */, 2 /* ArmorGroup.PLATE */],
        description: "Boiled leather is constructed from thick pieces of hide. It is rigid and tough and cannot be worn under mail or the more complicated pieces of plate. This jacket will protect your body and arms."
    },
    LEATHER_JERKIN: {
        name: "Leather Jerkin",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 1 /* ArmorGroup.BOILED_LEATHER */,
        groupLabel: "Boiled Leather" /* ArmorGroupLabel.BOILED_LEATHER */,
        price: 120,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [3 /* BodyLocation.BODY */],
        ap: 1,
        qualities: [],
        forbiddenWith: [4 /* ArmorGroup.CHAINMAIL */, 2 /* ArmorGroup.PLATE */],
        description: "Boiled leather is constructed from thick pieces of hide. It is rigid and tough and cannot be worn under mail or the more complicated pieces of plate. This jerkin will protect your body."
    },
    LEATHER_LEGGINGS: {
        name: "Leather Leggings",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_LEGS_SLOT,
        group: 1 /* ArmorGroup.BOILED_LEATHER */,
        groupLabel: "Boiled Leather" /* ArmorGroupLabel.BOILED_LEATHER */,
        price: 168,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [1 /* BodyLocation.LEGS */],
        ap: 1,
        qualities: [],
        forbiddenWith: [4 /* ArmorGroup.CHAINMAIL */, 2 /* ArmorGroup.PLATE */],
        description: "Boiled leather is constructed from thick pieces of hide. It is rigid and tough and cannot be worn under mail or the more complicated pieces of plate. These leggings will protect your legs."
    },
    LEATHER_SKULLCAP: {
        name: "Leather Skullcap",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_HEAD_SLOT,
        group: 1 /* ArmorGroup.BOILED_LEATHER */,
        groupLabel: "Boiled Leather" /* ArmorGroupLabel.BOILED_LEATHER */,
        price: 96,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 1,
        qualities: [],
        forbiddenWith: [4 /* ArmorGroup.CHAINMAIL */, 2 /* ArmorGroup.PLATE */],
        description: "Boiled leather is constructed from thick pieces of hide. It is rigid and tough and cannot be worn under mail or the more complicated pieces of plate. This skullcap will protect your head."
    },
    CHAINMAIL_CHAUSSES: {
        name: "Chainmail Chausses",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_LEGS_SLOT,
        group: 4 /* ArmorGroup.CHAINMAIL */,
        groupLabel: "Chainmail" /* ArmorGroupLabel.CHAINMAIL */,
        price: 480,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ STEALTH: "-10" }],
        locations: [1 /* BodyLocation.LEGS */],
        ap: 2,
        qualities: [],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 2 /* ArmorGroup.PLATE */],
        description: "Chainmail is made from thousands of interlocking iron rings. It is heavy and requires regular cleaning and oiling to prevent corrosion. These chausses will protect your legs."
    },
    CHAINMAIL_COAT: {
        name: "Chainmail Coat",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: 4 /* ArmorGroup.CHAINMAIL */,
        groupLabel: "Chainmail" /* ArmorGroupLabel.CHAINMAIL */,
        price: 720,
        enc: 4,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [{ STEALTH: "-10" }],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */],
        ap: 2,
        qualities: [],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 2 /* ArmorGroup.PLATE */],
        description: "Chainmail is made from thousands of interlocking iron rings. It is heavy and requires regular cleaning and oiling to prevent corrosion. This coat will protect your body and arms."
    },
    CHAINMAIL_COIF: {
        name: "Chainmail Coif",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 4 /* ArmorGroup.CHAINMAIL */,
        groupLabel: "Chainmail" /* ArmorGroupLabel.CHAINMAIL */,
        price: 240,
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ PERCEPTION: "-10", STEALTH: "-10" }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 2,
        qualities: [0 /* ArmorQuality.PARTIAL */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 2 /* ArmorGroup.PLATE */],
        description: "Chainmail is made from thousands of interlocking iron rings. It is heavy and requires regular cleaning and oiling to prevent corrosion. This coif will protect your head."
    },
    CHAINMAIL_SHIRT: {
        name: "Chainmail Shirt",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: 4 /* ArmorGroup.CHAINMAIL */,
        groupLabel: "Chainmail" /* ArmorGroupLabel.CHAINMAIL */,
        price: 480,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ STEALTH: "-10" }],
        locations: [3 /* BodyLocation.BODY */],
        ap: 2,
        qualities: [],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 2 /* ArmorGroup.PLATE */],
        description: "Chainmail is made from thousands of interlocking iron rings. It is heavy and requires regular cleaning and oiling to prevent corrosion. This shirt will protect your body."
    },
    BRIGANDINE_JACK: {
        name: "Brigandine Jack",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 5 /* ArmorGroup.BRIGANDINE */,
        groupLabel: "Brigandine" /* ArmorGroupLabel.BRIGANDINE */,
        price: 720,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */, 3 /* BodyLocation.BODY */],
        ap: 2,
        qualities: [3 /* ArmorQuality.OVERCOAT */],
        forbiddenWith: [2 /* ArmorGroup.PLATE */],
        description: "Brigandine consists of padded leather or fabric into which many small metal strips, or lames, have been riveted. Brigandine pieces are bulky and cannot be worn under other forms of armour. Lamellar armour, or scale mail, may look rather different to brigandine, but has the same qualities. This jacket will protect your body and arms."
    },
    BRIGANDINE_JERKIN: {
        name: "Brigandine Jerkin",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: 5 /* ArmorGroup.BRIGANDINE */,
        groupLabel: "Brigandine" /* ArmorGroupLabel.BRIGANDINE */,
        price: 480,
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [3 /* BodyLocation.BODY */],
        ap: 2,
        qualities: [3 /* ArmorQuality.OVERCOAT */],
        forbiddenWith: [2 /* ArmorGroup.PLATE */],
        description: "Brigandine consists of padded leather or fabric into which many small metal strips, or lames, have been riveted. Brigandine pieces are bulky and cannot be worn under other forms of armour. Lamellar armour, or scale mail, may look rather different to brigandine, but has the same qualities. This jerkin will protect your body."
    },
    BREASTPLATE: {
        name: "Breastplate",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: 3 /* ArmorGroup.BREASTPLATE */,
        groupLabel: "Breastplate" /* ArmorGroupLabel.BREASTPLATE */,
        price: 2400,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [3 /* BodyLocation.BODY */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 3 /* ArmorQuality.OVERCOAT */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [2 /* ArmorGroup.PLATE */],
        description: "Plate armour is painstakingly crafted from sheets of iron or steel. It is tailor made and close-fitting, so may not normally be worn over other types of armour. Breastplates may be an exception to this general rule, as many of them are designed to be worn over padding or chainmail. This breastplate will protect your body."
    },
    BRACERS: {
        name: "Bracers",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_ARMS_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: 1920,
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [],
        locations: [0 /* BodyLocation.ARMS */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 6 /* ArmorQuality.REQUIRES_KIT */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "Plate armour is painstakingly crafted from sheets of iron or steel. It is tailor made and close-fitting, so may not normally be worn over other types of armour. These bracers will protect your arms."
    },
    OPEN_HELM: {
        name: "Open Helm",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: 480,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [{ PERCEPTION: "-10" }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 3,
        qualities: [0 /* ArmorQuality.PARTIAL */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "Plate armour is painstakingly crafted from sheets of iron or steel. It is tailor made and close-fitting, so may not normally be worn over other types of armour. This helm will protect your head but not your face."
    },
    PLATE_LEGGINGS: {
        name: "Plate Leggings",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_LEGS_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: 2400,
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ STEALTH: "-10" }],
        locations: [1 /* BodyLocation.LEGS */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 6 /* ArmorQuality.REQUIRES_KIT */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "Plate armour is painstakingly crafted from sheets of iron or steel. It is tailor made and close-fitting, so may not normally be worn over other types of armour. These leggings will protect your legs."
    },
    GREAT_HELM: {
        name: "Great Helm",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: 480,
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
        price: 720,
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: [2 /* BodyLocation.HEAD */],
        ap: 3,
        qualities: [2 /* ArmorQuality.IMPENETRABLE */, 4 /* ArmorQuality.VISOR */, 5 /* ArmorQuality.WEAKPOINTS */],
        forbiddenWith: [1 /* ArmorGroup.BOILED_LEATHER */, 4 /* ArmorGroup.CHAINMAIL */, 5 /* ArmorGroup.BRIGANDINE */],
        description: "The Bascinet typically incorporates a conical ArmorQuality.VISOR, leading it to be known as a 'pigs-snout' helmet by many soldiers. This design provides additional protection against missile fire, as slingshots and arrows are deflected by the conical ArmorQuality.VISOR. If missile fire strikes the wearer of a Bascinet, and originates from in front of the wearer, then the helmet provides 4 APs rather than 3."
    },
    ARMET: {
        name: "Armet",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: 2 /* ArmorGroup.PLATE */,
        groupLabel: "Plate" /* ArmorGroupLabel.PLATE */,
        price: 720,
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
        price: 960,
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
// #endregion === ARMORS SET === //
// === //
// #region ====== ARMORS IDS === //
// The IDs are the keys of the SET object
TEW.DATABASE.ARMORS.IDS = Object.keys(TEW.DATABASE.ARMORS.SET).sort((a, b) => a.localeCompare(b));
// #endregion === ARMORS IDS === //
// === //
// #region ====== ARMORS ARRAY === //
// This is a 2D array, where the first element is the key and the second element is the value
TEW.DATABASE.ARMORS.ARRAY = TEW.DATABASE.ARMORS.IDS.map((key) => [key, TEW.DATABASE.ARMORS.SET[key]]);
// #endregion === ARMORS ARRAY === //
// #endregion =========================== TEW_Armors ============================== //
// ============================== //
// #region ============================== TEW_Careers ============================== //
// ----------------------
TEW.DATABASE.CAREERS = {};
// #region ====== CAREER PATHS === //
// Career IDs are made of their path ID and their level, and refer to the CAREERS set below
TEW.DATABASE.CAREERS.PATHS = {
    // --- ACADEMIC --- //
    APOTHECARY: {
        name: "Apothecary",
        class: "Academic" /* CareerClass.ACADEMIC */,
        levels: [
            { career: "APOTHECARY_1", level: 1 },
            { career: "APOTHECARY_2", level: 2 },
            { career: "APOTHECARY_3", level: 3 },
            { career: "APOTHECARY_4", level: 4 }
        ]
    },
    ENGINEER: {
        name: "Engineer",
        class: "Academic" /* CareerClass.ACADEMIC */,
        levels: [
            { career: "ENGINEER_1", level: 1 },
            { career: "ENGINEER_2", level: 2 },
            { career: "ENGINEER_3", level: 3 },
            { career: "ENGINEER_4", level: 4 }
        ]
    },
    LAWYER: {
        name: "Lawyer",
        class: "Academic" /* CareerClass.ACADEMIC */,
        levels: [
            { career: "LAWYER_1", level: 1 },
            { career: "LAWYER_2", level: 2 },
            { career: "LAWYER_3", level: 3 },
            { career: "LAWYER_4", level: 4 }
        ]
    },
    NUN: {
        name: "Nun",
        class: "Academic" /* CareerClass.ACADEMIC */,
        levels: [
            { career: "NUN_1", level: 1 },
            { career: "NUN_2", level: 2 },
            { career: "NUN_3", level: 3 },
            { career: "NUN_4", level: 4 }
        ]
    },
    PHYSICIAN: {
        name: "Physician",
        class: "Academic" /* CareerClass.ACADEMIC */,
        levels: [
            { career: "PHYSICIAN_1", level: 1 },
            { career: "PHYSICIAN_2", level: 2 },
            { career: "PHYSICIAN_3", level: 3 },
            { career: "PHYSICIAN_4", level: 4 }
        ]
    },
    PRIEST: {
        name: "Priest",
        class: "Academic" /* CareerClass.ACADEMIC */,
        levels: [
            { career: "PRIEST_1", level: 1 },
            { career: "PRIEST_2", level: 2 },
            { career: "PRIEST_3", level: 3 },
            { career: "PRIEST_4", level: 4 }
        ]
    },
    SCHOLAR: {
        name: "Scholar",
        class: "Academic" /* CareerClass.ACADEMIC */,
        levels: [
            { career: "SCHOLAR_1", level: 1 },
            { career: "SCHOLAR_2", level: 2 },
            { career: "SCHOLAR_3", level: 3 },
            { career: "SCHOLAR_4", level: 4 }
        ]
    },
    WIZARD: {
        name: "Wizard",
        class: "Academic" /* CareerClass.ACADEMIC */,
        levels: [
            { career: "WIZARD_1", level: 1 },
            { career: "WIZARD_2", level: 2 },
            { career: "WIZARD_3", level: 3 },
            { career: "WIZARD_4", level: 4 }
        ]
    },
    // --- BURGHER --- //
    AGITATOR: {
        name: "Agitator",
        class: "Burgher" /* CareerClass.BURGHER */,
        levels: [
            { career: "AGITATOR_1", level: 1 },
            { career: "AGITATOR_2", level: 2 },
            { career: "AGITATOR_3", level: 3 },
            { career: "AGITATOR_4", level: 4 }
        ]
    },
    ARTISAN: {
        name: "Artisan",
        class: "Burgher" /* CareerClass.BURGHER */,
        levels: [
            { career: "ARTISAN_1", level: 1 },
            { career: "ARTISAN_2", level: 2 },
            { career: "ARTISAN_3", level: 3 },
            { career: "ARTISAN_4", level: 4 }
        ]
    },
    BEGGAR: {
        name: "Beggar",
        class: "Burgher" /* CareerClass.BURGHER */,
        levels: [
            { career: "BEGGAR_1", level: 1 },
            { career: "BEGGAR_2", level: 2 },
            { career: "BEGGAR_3", level: 3 },
            { career: "BEGGAR_4", level: 4 }
        ]
    },
    INVESTIGATOR: {
        name: "Investigator",
        class: "Burgher" /* CareerClass.BURGHER */,
        levels: [
            { career: "INVESTIGATOR_1", level: 1 },
            { career: "INVESTIGATOR_2", level: 2 },
            { career: "INVESTIGATOR_3", level: 3 },
            { career: "INVESTIGATOR_4", level: 4 }
        ]
    },
    MERCHANT: {
        name: "Merchant",
        class: "Burgher" /* CareerClass.BURGHER */,
        levels: [
            { career: "MERCHANT_1", level: 1 },
            { career: "MERCHANT_2", level: 2 },
            { career: "MERCHANT_3", level: 3 },
            { career: "MERCHANT_4", level: 4 }
        ]
    },
    RAT_CATCHER: {
        name: "Rat Catcher",
        class: "Burgher" /* CareerClass.BURGHER */,
        levels: [
            { career: "RAT_CATCHER_1", level: 1 },
            { career: "RAT_CATCHER_2", level: 2 },
            { career: "RAT_CATCHER_3", level: 3 },
            { career: "RAT_CATCHER_4", level: 4 }
        ]
    },
    TOWNSMAN: {
        name: "Townsman",
        class: "Burgher" /* CareerClass.BURGHER */,
        levels: [
            { career: "TOWNSMAN_1", level: 1 },
            { career: "TOWNSMAN_2", level: 2 },
            { career: "TOWNSMAN_3", level: 3 },
            { career: "TOWNSMAN_4", level: 4 }
        ]
    },
    WATCHMAN: {
        name: "Watchman",
        class: "Burgher" /* CareerClass.BURGHER */,
        levels: [
            { career: "WATCHMAN_1", level: 1 },
            { career: "WATCHMAN_2", level: 2 },
            { career: "WATCHMAN_3", level: 3 },
            { career: "WATCHMAN_4", level: 4 }
        ]
    },
    // --- COURTIER --- //
    ADVISOR: {
        name: "Advisor",
        class: "Courtier" /* CareerClass.COURTIER */,
        levels: [
            { career: "ADVISOR_1", level: 1 },
            { career: "ADVISOR_2", level: 2 },
            { career: "ADVISOR_3", level: 3 },
            { career: "ADVISOR_4", level: 4 }
        ]
    },
    ARTIST: {
        name: "Artist",
        class: "Courtier" /* CareerClass.COURTIER */,
        levels: [
            { career: "ARTIST_1", level: 1 },
            { career: "ARTIST_2", level: 2 },
            { career: "ARTIST_3", level: 3 },
            { career: "ARTIST_4", level: 4 }
        ]
    },
    DUELLIST: {
        name: "Duellist",
        class: "Courtier" /* CareerClass.COURTIER */,
        levels: [
            { career: "DUELLIST_1", level: 1 },
            { career: "DUELLIST_2", level: 2 },
            { career: "DUELLIST_3", level: 3 },
            { career: "DUELLIST_4", level: 4 }
        ]
    },
    ENVOY: {
        name: "Envoy",
        class: "Courtier" /* CareerClass.COURTIER */,
        levels: [
            { career: "ENVOY_1", level: 1 },
            { career: "ENVOY_2", level: 2 },
            { career: "ENVOY_3", level: 3 },
            { career: "ENVOY_4", level: 4 }
        ]
    },
    NOBLE: {
        name: "Noble",
        class: "Courtier" /* CareerClass.COURTIER */,
        levels: [
            { career: "NOBLE_1", level: 1 },
            { career: "NOBLE_2", level: 2 },
            { career: "NOBLE_3", level: 3 },
            { career: "NOBLE_4", level: 4 }
        ]
    },
    SERVANT: {
        name: "Servant",
        class: "Courtier" /* CareerClass.COURTIER */,
        levels: [
            { career: "SERVANT_1", level: 1 },
            { career: "SERVANT_2", level: 2 },
            { career: "SERVANT_3", level: 3 },
            { career: "SERVANT_4", level: 4 }
        ]
    },
    SPY: {
        name: "Spy",
        class: "Courtier" /* CareerClass.COURTIER */,
        levels: [
            { career: "SPY_1", level: 1 },
            { career: "SPY_2", level: 2 },
            { career: "SPY_3", level: 3 },
            { career: "SPY_4", level: 4 }
        ]
    },
    WARDEN: {
        name: "Warden",
        class: "Courtier" /* CareerClass.COURTIER */,
        levels: [
            { career: "WARDEN_1", level: 1 },
            { career: "WARDEN_2", level: 2 },
            { career: "WARDEN_3", level: 3 },
            { career: "WARDEN_4", level: 4 }
        ]
    },
    // --- PEASANT --- //
    BAILIFF: {
        name: "Bailiff",
        class: "Peasant" /* CareerClass.PEASANT */,
        levels: [
            { career: "BAILIFF_1", level: 1 },
            { career: "BAILIFF_2", level: 2 },
            { career: "BAILIFF_3", level: 3 },
            { career: "BAILIFF_4", level: 4 }
        ]
    },
    HEDGE_WITCH: {
        name: "Hedge Witch",
        class: "Peasant" /* CareerClass.PEASANT */,
        levels: [
            { career: "HEDGE_WITCH_1", level: 1 },
            { career: "HEDGE_WITCH_2", level: 2 },
            { career: "HEDGE_WITCH_3", level: 3 },
            { career: "HEDGE_WITCH_4", level: 4 }
        ]
    },
    HERBALIST: {
        name: "Herbalist",
        class: "Peasant" /* CareerClass.PEASANT */,
        levels: [
            { career: "HERBALIST_1", level: 1 },
            { career: "HERBALIST_2", level: 2 },
            { career: "HERBALIST_3", level: 3 },
            { career: "HERBALIST_4", level: 4 }
        ]
    },
    HUNTER: {
        name: "Hunter",
        class: "Peasant" /* CareerClass.PEASANT */,
        levels: [
            { career: "HUNTER_1", level: 1 },
            { career: "HUNTER_2", level: 2 },
            { career: "HUNTER_3", level: 3 },
            { career: "HUNTER_4", level: 4 }
        ]
    },
    MINER: {
        name: "Miner",
        class: "Peasant" /* CareerClass.PEASANT */,
        levels: [
            { career: "MINER_1", level: 1 },
            { career: "MINER_2", level: 2 },
            { career: "MINER_3", level: 3 },
            { career: "MINER_4", level: 4 }
        ]
    },
    MYSTIC: {
        name: "Mystic",
        class: "Peasant" /* CareerClass.PEASANT */,
        levels: [
            { career: "MYSTIC_1", level: 1 },
            { career: "MYSTIC_2", level: 2 },
            { career: "MYSTIC_3", level: 3 },
            { career: "MYSTIC_4", level: 4 }
        ]
    },
    SCOUT: {
        name: "Scout",
        class: "Peasant" /* CareerClass.PEASANT */,
        levels: [
            { career: "SCOUT_1", level: 1 },
            { career: "SCOUT_2", level: 2 },
            { career: "SCOUT_3", level: 3 },
            { career: "SCOUT_4", level: 4 }
        ]
    },
    VILLAGER: {
        name: "Villager",
        class: "Peasant" /* CareerClass.PEASANT */,
        levels: [
            { career: "VILLAGER_1", level: 1 },
            { career: "VILLAGER_2", level: 2 },
            { career: "VILLAGER_3", level: 3 },
            { career: "VILLAGER_4", level: 4 }
        ]
    },
    // --- RANGER --- //
    BOUNTY_HUNTER: {
        name: "Bounty Hunter",
        class: "Ranger" /* CareerClass.RANGER */,
        levels: [
            { career: "BOUNTY_HUNTER_1", level: 1 },
            { career: "BOUNTY_HUNTER_2", level: 2 },
            { career: "BOUNTY_HUNTER_3", level: 3 },
            { career: "BOUNTY_HUNTER_4", level: 4 }
        ]
    },
    COACHMAN: {
        name: "Coachman",
        class: "Ranger" /* CareerClass.RANGER */,
        levels: [
            { career: "COACHMAN_1", level: 1 },
            { career: "COACHMAN_2", level: 2 },
            { career: "COACHMAN_3", level: 3 },
            { career: "COACHMAN_4", level: 4 }
        ]
    },
    ENTERTAINER: {
        name: "Entertainer",
        class: "Ranger" /* CareerClass.RANGER */,
        levels: [
            { career: "ENTERTAINER_1", level: 1 },
            { career: "ENTERTAINER_2", level: 2 },
            { career: "ENTERTAINER_3", level: 3 },
            { career: "ENTERTAINER_4", level: 4 }
        ]
    },
    FLAGELLANT: {
        name: "Flagellant",
        class: "Ranger" /* CareerClass.RANGER */,
        levels: [
            { career: "FLAGELLANT_1", level: 1 },
            { career: "FLAGELLANT_2", level: 2 },
            { career: "FLAGELLANT_3", level: 3 },
            { career: "FLAGELLANT_4", level: 4 }
        ]
    },
    MESSENGER: {
        name: "Messenger",
        class: "Ranger" /* CareerClass.RANGER */,
        levels: [
            { career: "MESSENGER_1", level: 1 },
            { career: "MESSENGER_2", level: 2 },
            { career: "MESSENGER_3", level: 3 },
            { career: "MESSENGER_4", level: 4 }
        ]
    },
    PEDLAR: {
        name: "Pedlar",
        class: "Ranger" /* CareerClass.RANGER */,
        levels: [
            { career: "PEDLAR_1", level: 1 },
            { career: "PEDLAR_2", level: 2 },
            { career: "PEDLAR_3", level: 3 },
            { career: "PEDLAR_4", level: 4 }
        ]
    },
    ROAD_WARDEN: {
        name: "Road Warden",
        class: "Ranger" /* CareerClass.RANGER */,
        levels: [
            { career: "ROAD_WARDEN_1", level: 1 },
            { career: "ROAD_WARDEN_2", level: 2 },
            { career: "ROAD_WARDEN_3", level: 3 },
            { career: "ROAD_WARDEN_4", level: 4 }
        ]
    },
    WITCH_HUNTER: {
        name: "Witch Hunter",
        class: "Ranger" /* CareerClass.RANGER */,
        levels: [
            { career: "WITCH_HUNTER_1", level: 1 },
            { career: "WITCH_HUNTER_2", level: 2 },
            { career: "WITCH_HUNTER_3", level: 3 },
            { career: "WITCH_HUNTER_4", level: 4 }
        ]
    },
    // --- Riverfolk --- //
    BOATMAN: {
        name: "Boatman",
        class: "Riverfolk" /* CareerClass.RIVERFOLK */,
        levels: [
            { career: "BOATMAN_1", level: 1 },
            { career: "BOATMAN_2", level: 2 },
            { career: "BOATMAN_3", level: 3 },
            { career: "BOATMAN_4", level: 4 }
        ]
    },
    HUFFER: {
        name: "Huffer",
        class: "Riverfolk" /* CareerClass.RIVERFOLK */,
        levels: [
            { career: "HUFFER_1", level: 1 },
            { career: "HUFFER_2", level: 2 },
            { career: "HUFFER_3", level: 3 },
            { career: "HUFFER_4", level: 4 }
        ]
    },
    RIVERWARDEN: {
        name: "Riverwarden",
        class: "Riverfolk" /* CareerClass.RIVERFOLK */,
        levels: [
            { career: "RIVERWARDEN_1", level: 1 },
            { career: "RIVERWARDEN_2", level: 2 },
            { career: "RIVERWARDEN_3", level: 3 },
            { career: "RIVERWARDEN_4", level: 4 }
        ]
    },
    RIVERWOMAN: {
        name: "Riverwoman",
        class: "Riverfolk" /* CareerClass.RIVERFOLK */,
        levels: [
            { career: "RIVERWOMAN_1", level: 1 },
            { career: "RIVERWOMAN_2", level: 2 },
            { career: "RIVERWOMAN_3", level: 3 },
            { career: "RIVERWOMAN_4", level: 4 }
        ]
    },
    SEAMAN: {
        name: "Seaman",
        class: "Riverfolk" /* CareerClass.RIVERFOLK */,
        levels: [
            { career: "SEAMAN_1", level: 1 },
            { career: "SEAMAN_2", level: 2 },
            { career: "SEAMAN_3", level: 3 },
            { career: "SEAMAN_4", level: 4 }
        ]
    },
    SMUGGLER: {
        name: "Smuggler",
        class: "Riverfolk" /* CareerClass.RIVERFOLK */,
        levels: [
            { career: "SMUGGLER_1", level: 1 },
            { career: "SMUGGLER_2", level: 2 },
            { career: "SMUGGLER_3", level: 3 },
            { career: "SMUGGLER_4", level: 4 }
        ]
    },
    STEVEDORE: {
        name: "Stevedore",
        class: "Riverfolk" /* CareerClass.RIVERFOLK */,
        levels: [
            { career: "STEVEDORE_1", level: 1 },
            { career: "STEVEDORE_2", level: 2 },
            { career: "STEVEDORE_3", level: 3 },
            { career: "STEVEDORE_4", level: 4 }
        ]
    },
    WRECKER: {
        name: "Wrecker",
        class: "Riverfolk" /* CareerClass.RIVERFOLK */,
        levels: [
            { career: "WRECKER_1", level: 1 },
            { career: "WRECKER_2", level: 2 },
            { career: "WRECKER_3", level: 3 },
            { career: "WRECKER_4", level: 4 }
        ]
    },
    // --- ROGUE --- //
    BAWD: {
        name: "Bawd",
        class: "Rogue" /* CareerClass.ROGUE */,
        levels: [
            { career: "BAWD_1", level: 1 },
            { career: "BAWD_2", level: 2 },
            { career: "BAWD_3", level: 3 },
            { career: "BAWD_4", level: 4 }
        ]
    },
    CHARLATAN: {
        name: "Charlatan",
        class: "Rogue" /* CareerClass.ROGUE */,
        levels: [
            { career: "CHARLATAN_1", level: 1 },
            { career: "CHARLATAN_2", level: 2 },
            { career: "CHARLATAN_3", level: 3 },
            { career: "CHARLATAN_4", level: 4 }
        ]
    },
    FENCE: {
        name: "Fence",
        class: "Rogue" /* CareerClass.ROGUE */,
        levels: [
            { career: "FENCE_1", level: 1 },
            { career: "FENCE_2", level: 2 },
            { career: "FENCE_3", level: 3 },
            { career: "FENCE_4", level: 4 }
        ]
    },
    GRAVE_ROBBER: {
        name: "Grave Robber",
        class: "Rogue" /* CareerClass.ROGUE */,
        levels: [
            { career: "GRAVE_ROBBER_1", level: 1 },
            { career: "GRAVE_ROBBER_2", level: 2 },
            { career: "GRAVE_ROBBER_3", level: 3 },
            { career: "GRAVE_ROBBER_4", level: 4 }
        ]
    },
    OUTLAW: {
        name: "Outlaw",
        class: "Rogue" /* CareerClass.ROGUE */,
        levels: [
            { career: "OUTLAW_1", level: 1 },
            { career: "OUTLAW_2", level: 2 },
            { career: "OUTLAW_3", level: 3 },
            { career: "OUTLAW_4", level: 4 }
        ]
    },
    RACKETEER: {
        name: "Racketeer",
        class: "Rogue" /* CareerClass.ROGUE */,
        levels: [
            { career: "RACKETEER_1", level: 1 },
            { career: "RACKETEER_2", level: 2 },
            { career: "RACKETEER_3", level: 3 },
            { career: "RACKETEER_4", level: 4 }
        ]
    },
    THIEF: {
        name: "Thief",
        class: "Rogue" /* CareerClass.ROGUE */,
        levels: [
            { career: "THIEF_1", level: 1 },
            { career: "THIEF_2", level: 2 },
            { career: "THIEF_3", level: 3 },
            { career: "THIEF_4", level: 4 }
        ]
    },
    WITCH: {
        name: "Witch",
        class: "Rogue" /* CareerClass.ROGUE */,
        levels: [
            { career: "WITCH_1", level: 1 },
            { career: "WITCH_2", level: 2 },
            { career: "WITCH_3", level: 3 },
            { career: "WITCH_4", level: 4 }
        ]
    },
    // --- WARRIOR --- //
    CAVALRYMAN: {
        name: "Cavalryman",
        class: "Warrior" /* CareerClass.WARRIOR */,
        levels: [
            { career: "CAVALRYMAN_1", level: 1 },
            { career: "CAVALRYMAN_2", level: 2 },
            { career: "CAVALRYMAN_3", level: 3 },
            { career: "CAVALRYMAN_4", level: 4 }
        ]
    },
    GUARD: {
        name: "Guard",
        class: "Warrior" /* CareerClass.WARRIOR */,
        levels: [
            { career: "GUARD_1", level: 1 },
            { career: "GUARD_2", level: 2 },
            { career: "GUARD_3", level: 3 },
            { career: "GUARD_4", level: 4 }
        ]
    },
    KNIGHT: {
        name: "Knight",
        class: "Warrior" /* CareerClass.WARRIOR */,
        levels: [
            { career: "KNIGHT_1", level: 1 },
            { career: "KNIGHT_2", level: 2 },
            { career: "KNIGHT_3", level: 3 },
            { career: "KNIGHT_4", level: 4 }
        ]
    },
    PIT_FIGHTER: {
        name: "Pit Fighter",
        class: "Warrior" /* CareerClass.WARRIOR */,
        levels: [
            { career: "PIT_FIGHTER_1", level: 1 },
            { career: "PIT_FIGHTER_2", level: 2 },
            { career: "PIT_FIGHTER_3", level: 3 },
            { career: "PIT_FIGHTER_4", level: 4 }
        ]
    },
    PROTAGONIST: {
        name: "Protagonist",
        class: "Warrior" /* CareerClass.WARRIOR */,
        levels: [
            { career: "PROTAGONIST_1", level: 1 },
            { career: "PROTAGONIST_2", level: 2 },
            { career: "PROTAGONIST_3", level: 3 },
            { career: "PROTAGONIST_4", level: 4 }
        ]
    },
    SLAYER: {
        name: "Slayer",
        class: "Warrior" /* CareerClass.WARRIOR */,
        levels: [
            { career: "SLAYER_1", level: 1 },
            { career: "SLAYER_2", level: 2 },
            { career: "SLAYER_3", level: 3 },
            { career: "SLAYER_4", level: 4 }
        ]
    },
    SOLDIER: {
        name: "Soldier",
        class: "Warrior" /* CareerClass.WARRIOR */,
        levels: [
            { career: "SOLDIER_1", level: 1 },
            { career: "SOLDIER_2", level: 2 },
            { career: "SOLDIER_3", level: 3 },
            { career: "SOLDIER_4", level: 4 }
        ]
    },
    WARRIOR_PRIEST: {
        name: "Warrior Priest",
        class: "Warrior" /* CareerClass.WARRIOR */,
        levels: [
            { career: "WARRIOR_PRIEST_1", level: 1 },
            { career: "WARRIOR_PRIEST_2", level: 2 },
            { career: "WARRIOR_PRIEST_3", level: 3 },
            { career: "WARRIOR_PRIEST_4", level: 4 }
        ]
    },
};
// #endregion === CAREER PATHS === //
// === //
// #region ====== CAREER SET === //
TEW.DATABASE.CAREERS.SET = {
    // --- ACADEMIC --- //
    // Apothecary
    APOTHECARY_1: {
        name: "Apothecary's Apprentice",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */],
        competences: [
            "CONSUME_ALCOHOL", "HEAL", "LANGUAGE_CLASSICAL", "LORE_CHEMISTRY", "LORE_MEDICINE", "LORE_PLANTS",
            "TRADE_APOTHECARY", "TRADE_POISONER"
        ],
        talents: ["CONCOCT", "CRAFTSMAN_APOTHECARY", "ETIQUETTE_SCHOLARS", "READ_WRITE"]
    },
    APOTHECARY_2: {
        name: "Apothecary",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "CONSUME_ALCOHOL", "HEAL", "LANGUAGE_CLASSICAL", "LORE_CHEMISTRY", "LORE_MEDICINE", "LORE_PLANTS",
            "TRADE_APOTHECARY", "TRADE_POISONER", "CHARM", "HAGGLE", "LORE_SCIENCE", "GOSSIP", "LANGUAGE_GUILDER",
            "PERCEPTION"
        ],
        talents: ["CRIMINAL", "DEALMAKER", "ETIQUETTE_GUILDERS", "PHARMACIST"]
    },
    APOTHECARY_3: {
        name: "Master Apothecary",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */],
        competences: [
            "CONSUME_ALCOHOL", "HEAL", "LANGUAGE_CLASSICAL", "LORE_CHEMISTRY", "LORE_MEDICINE", "LORE_PLANTS",
            "TRADE_APOTHECARY", "TRADE_POISONER", "CHARM", "HAGGLE", "LORE_SCIENCE", "GOSSIP", "LANGUAGE_GUILDER",
            "PERCEPTION", "INTUITION", "LEADERSHIP", "RESEARCH", "SECRET_SIGNS_GUILD"
        ],
        talents: ["BOOKISH", "MASTER_TRADESMAN_APOTHECARY", "RESISTANCE_POISON", "SAVVY"]
    },
    APOTHECARY_4: {
        name: "Apothecary-General",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */],
        competences: [
            "CONSUME_ALCOHOL", "HEAL", "LANGUAGE_CLASSICAL", "LORE_CHEMISTRY", "LORE_MEDICINE", "LORE_PLANTS",
            "TRADE_APOTHECARY", "TRADE_POISONER", "CHARM", "HAGGLE", "LORE_SCIENCE", "GOSSIP", "LANGUAGE_GUILDER",
            "PERCEPTION", "INTUITION", "LEADERSHIP", "RESEARCH", "SECRET_SIGNS_GUILD", "INTIMIDATE", "RIDE_HORSE"
        ],
        talents: ["ACUTE_SENSE_TASTE", "COOL_HEADED", "MASTER_TRADESMAN_POISONER", "SAVANT_APOTHECARY"]
    },
    // Engineer
    ENGINEER_1: {
        name: "Student Engineer",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["BALS" /* Stat.BALS */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "LANGUAGE_CLASSICAL", "LORE_ENGINEERING", "PERCEPTION",
            "RANGED_BLACKPOWDER", "TRADE_ENGINEER"
        ],
        talents: ["ARTISTIC", "GUNNER", "READ_WRITE", "TINKER"]
    },
    ENGINEER_2: {
        name: "Engineer",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["BALS" /* Stat.BALS */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "INIT" /* Stat.INIT */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "LANGUAGE_CLASSICAL", "LORE_ENGINEERING", "PERCEPTION",
            "RANGED_BLACKPOWDER", "TRADE_ENGINEER", "DRIVE", "DODGE", "NAVIGATION", "RANGED_ENGINEERING",
            "RESEARCH", "LANGUAGE_GUILDER"
        ],
        talents: ["CRAFTSMAN_ENGINEER", "ETIQUETTE_GUILDERS", "MARKSMAN", "ORIENTATION"]
    },
    ENGINEER_3: {
        name: "Master Engineer",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["BALS" /* Stat.BALS */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "INIT" /* Stat.INIT */, "TOUG" /* Stat.TOUG */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "LANGUAGE_CLASSICAL", "LORE_ENGINEERING", "PERCEPTION",
            "RANGED_BLACKPOWDER", "TRADE_ENGINEER", "DRIVE", "DODGE", "NAVIGATION", "RANGED_ENGINEERING",
            "RESEARCH", "LANGUAGE_GUILDER", "LANGUAGE_KHAZALID", "LEADERSHIP", "RIDE_HORSE", "SECRET_SIGNS_GUILD"
        ],
        talents: ["ETIQUETTE_SCHOLARS", "MASTER_TRADESMAN_ENGINEERING", "SNIPER", "SUPER_NUMERATE"]
    },
    ENGINEER_4: {
        name: "Chartered Engineer",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["BALS" /* Stat.BALS */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "INIT" /* Stat.INIT */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "LANGUAGE_CLASSICAL", "LORE_ENGINEERING", "PERCEPTION",
            "RANGED_BLACKPOWDER", "TRADE_ENGINEER", "DRIVE", "DODGE", "NAVIGATION", "RANGED_ENGINEERING",
            "RESEARCH", "LANGUAGE_GUILDER", "LANGUAGE_KHAZALID", "LEADERSHIP", "RIDE_HORSE", "SECRET_SIGNS_GUILD",
            "LANGUAGE_ANY", "LORE_ANY"
        ],
        talents: ["MAGNUM_OPUS", "RAPID_RELOAD", "SAVANT_ENGINEERING", "UNSHAKABLE"]
    },
    // Lawyer
    LAWYER_1: {
        name: "Student Lawyer",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_LAW", "LORE_THEOLOGY",
            "PERCEPTION", "RESEARCH"
        ],
        talents: ["BLATHER", "ETIQUETTE_SCHOLARS", "READ_WRITE", "SPEED_READER"]
    },
    LAWYER_2: {
        name: "Lawyer",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_LAW", "LORE_THEOLOGY",
            "PERCEPTION", "RESEARCH", "BRIBERY", "CHARM", "GOSSIP", "INTUITION", "LANGUAGE_GUILDER",
            "SECRET_SIGNS_GUILD"
        ],
        talents: ["ARGUMENTATIVE", "CRIMINAL", "ETIQUETTE_GUILDERS", "SUAVE"]
    },
    LAWYER_3: {
        name: "Barrister",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_LAW", "LORE_THEOLOGY",
            "PERCEPTION", "RESEARCH", "BRIBERY", "CHARM", "GOSSIP", "INTUITION", "LANGUAGE_GUILDER",
            "SECRET_SIGNS_GUILD", "ART_WRITING", "ENTERTAIN_SPEECHES", "INTIMIDATE", "LORE_ANY"
        ],
        talents: ["BOOKISH", "CAT_TONGUED", "IMPASSIONED_ZEAL", "SAVVY"]
    },
    LAWYER_4: {
        name: "Judge",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "TOUG" /* Stat.TOUG */],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_LAW", "LORE_THEOLOGY",
            "PERCEPTION", "RESEARCH", "BRIBERY", "CHARM", "GOSSIP", "INTUITION", "LANGUAGE_GUILDER",
            "SECRET_SIGNS_GUILD", "ART_WRITING", "ENTERTAIN_SPEECHES", "INTIMIDATE", "LORE_ANY", "COOL"
        ],
        talents: ["COMMANDING_PRESENCE", "KINGPIN", "SAVANT_LAW", "WEALTHY"]
    },
    // Nun
    NUN_1: {
        name: "Novitiate",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "ART_CALLIGRAPHY", "COOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "LORE_THEOLOGY",
            "PRAY"
        ],
        talents: ["BLESS_ANY", "STONE_SOUP", "PANHANDLE", "READ_WRITE"]
    },
    NUN_2: {
        name: "Nun",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "ART_CALLIGRAPHY", "COOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "LORE_THEOLOGY",
            "PRAY", "CHARM", "MELEE_ANY", "RESEARCH", "TRADE_BREWING", "TRADE_HERBALIST", "TRADE_VINTNER"
        ],
        talents: ["ETIQUETTE_CULTISTS", "FIELD_DRESSING", "HOLY_VISIONS", "INVOKE_ANY"]
    },
    NUN_3: {
        name: "Abbess",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */],
        competences: [
            "ART_CALLIGRAPHY", "COOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "LORE_THEOLOGY",
            "PRAY", "CHARM", "MELEE_ANY", "RESEARCH", "TRADE_BREWING", "TRADE_HERBALIST", "TRADE_VINTNER",
            "LEADERSHIP", "LORE_LOCAL", "LORE_POLITICS", "PERCEPTION"
        ],
        talents: ["RESISTANCE_ANY", "ROBUST", "SAVANT_THEOLOGY", "STOUT_HEARTED"]
    },
    NUN_4: {
        name: "Prioress General",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "TOUG" /* Stat.TOUG */],
        competences: [
            "ART_CALLIGRAPHY", "COOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "LORE_THEOLOGY",
            "PRAY", "CHARM", "MELEE_ANY", "RESEARCH", "TRADE_BREWING", "TRADE_HERBALIST", "TRADE_VINTNER",
            "LEADERSHIP", "LORE_LOCAL", "LORE_POLITICS", "PERCEPTION", "LANGUAGE_ANY", "LORE_ANY"
        ],
        talents: ["COMMANDING_PRESENCE", "IRON_WILL", "PURE_SOUL", "STRONG_MINDED"]
    },
    // Physician
    PHYSICIAN_1: {
        name: "Physician's Apprentice",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */],
        competences: ["BRIBERY", "COOL", "DRIVE", "ENDURANCE", "GOSSIP", "HEAL", "PERCEPTION", "SLEIGHT_OF_HAND"],
        talents: ["BOOKISH", "FIELD_DRESSING", "READ_WRITE", "STRIKE_TO_STUN"]
    },
    PHYSICIAN_2: {
        name: "Physician",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */],
        competences: [
            "BRIBERY", "COOL", "DRIVE", "ENDURANCE", "GOSSIP", "HEAL", "PERCEPTION", "SLEIGHT_OF_HAND", "CHARM",
            "HAGGLE", "LANGUAGE_GUILDER", "LORE_ANATOMY", "LORE_MEDICINE", "TRADE_BARBER"
        ],
        talents: ["COOL_HEADED", "CRIMINAL", "ETIQUETTE_GUILDERS", "SURGERY"]
    },
    PHYSICIAN_3: {
        name: "Doktor",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */],
        competences: [
            "BRIBERY", "COOL", "DRIVE", "ENDURANCE", "GOSSIP", "HEAL", "PERCEPTION", "SLEIGHT_OF_HAND", "CHARM",
            "HAGGLE", "LANGUAGE_GUILDER", "LORE_ANATOMY", "LORE_MEDICINE", "TRADE_BARBER", "CONSUME_ALCOHOL",
            "INTIMIDATE", "LEADERSHIP", "RESEARCH"
        ],
        talents: ["ETIQUETTE_SCHOLARS", "RESISTANCE_DISEASE", "SAVVY", "STRIKE_TO_INJURE"]
    },
    PHYSICIAN_4: {
        name: "Court Physician",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */],
        competences: [
            "BRIBERY", "COOL", "DRIVE", "ENDURANCE", "GOSSIP", "HEAL", "PERCEPTION", "SLEIGHT_OF_HAND", "CHARM",
            "HAGGLE", "LANGUAGE_GUILDER", "LORE_ANATOMY", "LORE_MEDICINE", "TRADE_BARBER", "CONSUME_ALCOHOL",
            "INTIMIDATE", "LEADERSHIP", "RESEARCH", "LORE_NOBILITY", "PERFORM_DANCING"
        ],
        talents: ["ETIQUETTE_NOBLES", "NIMBLE_FINGERED", "SAVANT_MEDICINE", "STRONG_MINDED"]
    },
    // Priest
    PRIEST_1: {
        name: "Initiate",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "COOL", "ENDURANCE", "INTUITION", "LORE_THEOLOGY", "PERCEPTION", "PRAY", "RESEARCH"
        ],
        talents: ["BLESS_ANY", "HOLY_VISIONS", "READ_WRITE", "SUAVE"]
    },
    PRIEST_2: {
        name: "Priest",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "COOL", "ENDURANCE", "INTUITION", "LORE_THEOLOGY", "PERCEPTION", "PRAY", "RESEARCH",
            "CHARM", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "INTIMIDATE", "MELEE_BASIC"
        ],
        talents: ["BLATHER", "BOOKISH", "ETIQUETTE_CULTISTS", "INVOKE_ANY"]
    },
    PRIEST_3: {
        name: "High Priest",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "COOL", "ENDURANCE", "INTUITION", "LORE_THEOLOGY", "PERCEPTION", "PRAY", "RESEARCH",
            "CHARM", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "INTIMIDATE", "MELEE_BASIC", "ART_WRITING",
            "ENTERTAIN_SPEECHES", "LEADERSHIP", "LORE_HERALDRY"
        ],
        talents: ["ACUTE_SENSE_ANY", "HATRED_ANY", "IMPASSIONED_ZEAL", "STRONG_MINDED"]
    },
    PRIEST_4: {
        name: "Lector",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "COOL", "ENDURANCE", "INTUITION", "LORE_THEOLOGY", "PERCEPTION", "PRAY", "RESEARCH",
            "CHARM", "ENTERTAIN_STORYTELLING", "GOSSIP", "HEAL", "INTIMIDATE", "MELEE_BASIC", "ART_WRITING",
            "ENTERTAIN_SPEECHES", "LEADERSHIP", "LORE_HERALDRY", "LANGUAGE_ANY", "LORE_POLITICS"
        ],
        talents: ["MASTER_ORATOR", "PURE_SOUL", "RESISTANCE_ANY", "SAVANT_THEOLOGY"]
    },
    // Scholar
    SCHOLAR_1: {
        name: "Student",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */],
        competences: [
            "CONSUME_ALCOHOL", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL",
            "LORE_ANY", "RESEARCH"
        ],
        talents: ["CAROUSER", "READ_WRITE", "SAVVY", "SUPER_NUMERATE"]
    },
    SCHOLAR_2: {
        name: "Scholar",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */],
        competences: [
            "CONSUME_ALCOHOL", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL",
            "LORE_ANY", "RESEARCH", "ART_WRITING", "INTUITION", "LANGUAGE_ANY", "PERCEPTION", "TRADE_ANY"
        ],
        talents: ["BOOKISH", "ETIQUETTE_SCHOLARS", "SPEED_READER", "SUAVE"]
    },
    SCHOLAR_3: {
        name: "Fellow",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "CONSUME_ALCOHOL", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL",
            "LORE_ANY", "RESEARCH", "ART_WRITING", "INTUITION", "LANGUAGE_ANY", "PERCEPTION", "TRADE_ANY",
            "ENTERTAIN_LECTURE", "INTIMIDATE"
        ],
        talents: ["LINGUISTICS", "PUBLIC_SPEAKER", "SAVANT_ANY", "TOWER_OF_MEMORIES"]
    },
    SCHOLAR_4: {
        name: "Professor",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CONSUME_ALCOHOL", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL",
            "LORE_ANY", "RESEARCH", "ART_WRITING", "INTUITION", "LANGUAGE_ANY", "PERCEPTION", "TRADE_ANY",
            "ENTERTAIN_LECTURE", "INTIMIDATE", "ENTERTAIN_RHETORIC"
        ],
        talents: ["MAGNUM_OPUS", "MASTER_ORATOR", "SAVANT_ANY", "SHARP"]
    },
    // Wizard
    WIZARD_1: {
        name: "Wizard's Apprentice",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */],
        competences: [
            "CHANNELLING_ANY", "DODGE", "INTUITION", "LANGUAGE_MAGICK", "LORE_MAGIC", "MELEE_BASIC",
            "MELEE_POLE_ARM", "PERCEPTION"
        ],
        talents: ["AETHYRIC_ATTUNEMENT", "PETTY_MAGIC", "READ_WRITE", "SECOND_SIGHT"]
    },
    WIZARD_2: {
        name: "Wizard",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */],
        competences: [
            "CHANNELLING_ANY", "DODGE", "INTUITION", "LANGUAGE_MAGICK", "LORE_MAGIC", "MELEE_BASIC",
            "MELEE_POLE_ARM", "PERCEPTION", "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "LANGUAGE_BATTLE",
            "LANGUAGE_ANY"
        ],
        talents: ["ARCANE_MAGIC_ANY", "DETECT_ARTEFACT", "FAST_HANDS", "SIXTH_SENSE"]
    },
    WIZARD_3: {
        name: "Master Wizard",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */],
        competences: [
            "CHANNELLING_ANY", "DODGE", "INTUITION", "LANGUAGE_MAGICK", "LORE_MAGIC", "MELEE_BASIC",
            "MELEE_POLE_ARM", "PERCEPTION", "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "LANGUAGE_BATTLE",
            "LANGUAGE_ANY", "ANIMAL_CARE", "EVALUATE", "LORE_WAR", "RIDE_HORSE"
        ],
        talents: ["DUAL_WIELDER", "INSTINCTIVE_DICTION", "MAGICAL_SENSE", "MENACING"]
    },
    WIZARD_4: {
        name: "Wizard Lord",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "CHANNELLING_ANY", "DODGE", "INTUITION", "LANGUAGE_MAGICK", "LORE_MAGIC", "MELEE_BASIC",
            "MELEE_POLE_ARM", "PERCEPTION", "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "LANGUAGE_BATTLE",
            "LANGUAGE_ANY", "ANIMAL_CARE", "EVALUATE", "LORE_WAR", "RIDE_HORSE", "LORE_ANY"
        ],
        talents: ["COMBAT_AWARE", "FRIGHTENING", "IRON_WILL", "WAR_WIZARD"]
    },
    // --- BURGHER --- //
    // Agitator
    AGITATOR_1: {
        name: "Pamphleteer",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["BALS" /* Stat.BALS */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "ART_WRITING", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "GOSSIP", "HAGGLE", "LORE_POLITICS",
            "TRADE_PRINTING"
        ],
        talents: ["BLATHER", "GREGARIOUS", "PANHANDLE", "READ_WRITE"]
    },
    AGITATOR_2: {
        name: "Agitator",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["BALS" /* Stat.BALS */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ART_WRITING", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "GOSSIP", "HAGGLE", "LORE_POLITICS",
            "TRADE_PRINTING", "COOL", "DODGE", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTUITION", "LEADERSHIP"
        ],
        talents: ["ALLEY_CAT", "ARGUMENTATIVE", "IMPASSIONED_ZEAL", "PUBLIC_SPEAKER"]
    },
    AGITATOR_3: {
        name: "Rabble Rouser",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["BALS" /* Stat.BALS */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ART_WRITING", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "GOSSIP", "HAGGLE", "LORE_POLITICS",
            "TRADE_PRINTING", "COOL", "DODGE", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTUITION", "LEADERSHIP",
            "ATHLETICS", "INTIMIDATE", "MELEE_BRAWLING", "PERCEPTION"
        ],
        talents: ["CAT_TONGUED", "DIRTY_FIGHTING", "FLEE", "STEP_ASIDE"]
    },
    AGITATOR_4: {
        name: "Demagogue",
        level: 4,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["BALS" /* Stat.BALS */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */],
        competences: [
            "ART_WRITING", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "GOSSIP", "HAGGLE", "LORE_POLITICS",
            "TRADE_PRINTING", "COOL", "DODGE", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTUITION", "LEADERSHIP",
            "ATHLETICS", "INTIMIDATE", "MELEE_BRAWLING", "PERCEPTION", "LORE_HERALDRY", "RIDE_HORSE"
        ],
        talents: ["ETIQUETTE_ANY", "MASTER_ORATOR", "SCHEMER", "SUAVE"]
    },
    // Artisan
    ARTISAN_1: {
        name: "Apprentice Artisan",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */],
        competences: [
            "ATHLETICS", "COOL", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "EVALUATE", "STEALTH_URBAN", "TRADE_ANY"
        ],
        talents: ["ARTISTIC", "CRAFTSMAN_ANY", "STRONG_BACK", "VERY_STRONG"]
    },
    ARTISAN_2: {
        name: "Artisan",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "COOL", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "EVALUATE", "STEALTH_URBAN", "TRADE_ANY",
            "CHARM", "HAGGLE", "LORE_LOCAL", "GOSSIP", "LANGUAGE_GUILDER", "PERCEPTION"
        ],
        talents: ["DEALMAKER", "ETIQUETTE_GUILDERS", "NIMBLE_FINGERED", "STURDY"]
    },
    ARTISAN_3: {
        name: "Master Artisan",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "COOL", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "EVALUATE", "STEALTH_URBAN", "TRADE_ANY",
            "CHARM", "HAGGLE", "LORE_LOCAL", "GOSSIP", "LANGUAGE_GUILDER", "PERCEPTION", "INTUITION", "LEADERSHIP",
            "RESEARCH", "SECRET_SIGNS_GUILD"
        ],
        talents: ["ACUTE_SENSE_TASTE", "ACUTE_SENSE_TOUCH", "MASTER_TRADESMAN_ANY", "READ_WRITE", "TINKER"]
    },
    ARTISAN_4: {
        name: "Guildmaster",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "COOL", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "EVALUATE", "STEALTH_URBAN", "TRADE_ANY",
            "CHARM", "HAGGLE", "LORE_LOCAL", "GOSSIP", "LANGUAGE_GUILDER", "PERCEPTION", "INTUITION", "LEADERSHIP",
            "RESEARCH", "SECRET_SIGNS_GUILD", "BRIBERY", "INTIMIDATE"
        ],
        talents: ["BRIBER", "MAGNUM_OPUS", "PUBLIC_SPEAKER", "SCHEMER"]
    },
    // Beggar
    BEGGAR_1: {
        name: "Pauper",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 0 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CHARM", "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTUITION", "STEALTH_URBAN"
        ],
        talents: ["PANHANDLE", "RESISTANCE_DISEASE", "STONE_SOUP", "VERY_RESILIENT"]
    },
    BEGGAR_2: {
        name: "Beggar",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "CHARM", "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTUITION", "STEALTH_URBAN",
            "ENTERTAIN_ACTING", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERCEPTION", "SLEIGHT_OF_HAND"
        ],
        talents: ["ALLEY_CAT", "BENEATH_NOTICE", "CRIMINAL", "ETIQUETTE_CRIMINALS"]
    },
    BEGGAR_3: {
        name: "Master Beggar",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ATHLETICS", "CHARM", "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTUITION", "STEALTH_URBAN",
            "ENTERTAIN_ACTING", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERCEPTION", "SLEIGHT_OF_HAND",
            "CHARM_ANIMAL", "LEADERSHIP", "LORE_LOCAL", "SECRET_SIGNS_VAGABOND"
        ],
        talents: ["BLATHER", "DIRTY_FIGHTING", "HARDY", "STEP_ASIDE"]
    },
    BEGGAR_4: {
        name: "Beggar King",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "CHARM", "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTUITION", "STEALTH_URBAN",
            "ENTERTAIN_ACTING", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERCEPTION", "SLEIGHT_OF_HAND",
            "CHARM_ANIMAL", "LEADERSHIP", "LORE_LOCAL", "SECRET_SIGNS_VAGABOND", "BRIBERY", "INTIMIDATE"
        ],
        talents: ["CAT_TONGUED", "FEARLESS_WATCHMEN", "KINGPIN", "SUAVE"]
    },
    // Investigator
    INVESTIGATOR_1: {
        name: "Sleuth",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */],
        competences: ["CHARM", "CLIMB", "COOL", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_URBAN", "TRACK"],
        talents: ["ALLEY_CAT", "BENEATH_NOTICE", "READ_WRITE", "SHARP"]
    },
    INVESTIGATOR_2: {
        name: "Investigator",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "CHARM", "CLIMB", "COOL", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_URBAN", "TRACK",
            "CONSUME_ALCOHOL", "DODGE", "LORE_LAW", "MELEE_BRAWLING", "PICK_LOCK", "SLEIGHT_OF_HAND"
        ],
        talents: ["ETIQUETTE_ANY", "SAVVY", "SHADOW", "TENACIOUS"]
    },
    INVESTIGATOR_3: {
        name: "Master Investigator",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CHARM", "CLIMB", "COOL", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_URBAN", "TRACK",
            "CONSUME_ALCOHOL", "DODGE", "LORE_LAW", "MELEE_BRAWLING", "PICK_LOCK", "SLEIGHT_OF_HAND", "BRIBERY",
            "EVALUATE", "LEADERSHIP", "LORE_ANY"
        ],
        talents: ["BOOKISH", "BREAK_AND_ENTER", "SIXTH_SENSE", "SUAVE"]
    },
    INVESTIGATOR_4: {
        name: "Detective",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */],
        competences: [
            "CHARM", "CLIMB", "COOL", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_URBAN", "TRACK",
            "CONSUME_ALCOHOL", "DODGE", "LORE_LAW", "MELEE_BRAWLING", "PICK_LOCK", "SLEIGHT_OF_HAND", "BRIBERY",
            "EVALUATE", "LEADERSHIP", "LORE_ANY", "INTIMIDATE"
        ],
        talents: ["ACUTE_SENSE_ANY", "SAVANT_ANY", "SPEED_READER", "TOWER_OF_MEMORIES"]
    },
    // Merchant
    MERCHANT_1: {
        name: "Trader",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */],
        competences: ["ANIMAL_CARE", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "DRIVE", "GAMBLE", "GOSSIP", "HAGGLE"],
        talents: ["BLATHER", "DEALMAKER", "READ_WRITE", "SUAVE"]
    },
    MERCHANT_2: {
        name: "Merchant",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "ANIMAL_CARE", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "DRIVE", "GAMBLE", "GOSSIP", "HAGGLE", "EVALUATE",
            "INTUITION", "LANGUAGE_ANY", "LANGUAGE_GUILDER", "LORE_LOCAL", "PERCEPTION"
        ],
        talents: ["BRIBER", "EMBEZZLE", "ETIQUETTE_GUILDERS", "SAVVY"]
    },
    MERCHANT_3: {
        name: "Master Merchant",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */, "INIT" /* Stat.INIT */],
        competences: [
            "ANIMAL_CARE", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "DRIVE", "GAMBLE", "GOSSIP", "HAGGLE", "EVALUATE",
            "INTUITION", "LANGUAGE_ANY", "LANGUAGE_GUILDER", "LORE_LOCAL", "PERCEPTION", "COOL",
            "LANGUAGE_CLASSICAL", "NAVIGATION", "SECRET_SIGNS_GUILD"
        ],
        talents: ["CAT_TONGUED", "ETIQUETTE_ANY", "NUMISMATICS", "SHARP"]
    },
    MERCHANT_4: {
        name: "Merchant Prince",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */, "INIT" /* Stat.INIT */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ANIMAL_CARE", "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "DRIVE", "GAMBLE", "GOSSIP", "HAGGLE", "EVALUATE",
            "INTUITION", "LANGUAGE_ANY", "LANGUAGE_GUILDER", "LORE_LOCAL", "PERCEPTION", "COOL",
            "LANGUAGE_CLASSICAL", "NAVIGATION", "SECRET_SIGNS_GUILD", "LORE_ANY", "INTIMIDATE"
        ],
        talents: ["IRON_WILL", "LUCK", "SCHEMER", "WEALTHY"]
    },
    // Rat Catcher
    RAT_CATCHER_1: {
        name: "Rat Hunter",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "BALS" /* Stat.BALS */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "ANIMAL_TRAINING_DOG", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "ENDURANCE", "MELEE_BASIC",
            "RANGED_SLING", "STEALTH_UNDERGROUND", "STEALTH_URBAN"
        ],
        talents: ["NIGHT_VISION", "RESISTANCE_DISEASE", "STRIKE_MIGHTY_BLOW", "STRIKE_TO_STUN"]
    },
    RAT_CATCHER_2: {
        name: "Rat Catcher",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "BALS" /* Stat.BALS */, "WILL" /* Stat.WILL */, "TOUG" /* Stat.TOUG */],
        competences: [
            "ATHLETICS", "ANIMAL_TRAINING_DOG", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "ENDURANCE", "MELEE_BASIC",
            "RANGED_SLING", "STEALTH_UNDERGROUND", "STEALTH_URBAN", "ANIMAL_CARE", "GOSSIP", "HAGGLE",
            "LORE_POISON", "PERCEPTION", "SET_TRAP"
        ],
        talents: ["ENCLOSED_FIGHTER", "ETIQUETTE_GUILDERS", "FEARLESS_RATS", "VERY_RESILIENT"]
    },
    RAT_CATCHER_3: {
        name: "Sewer Jack",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "BALS" /* Stat.BALS */, "WILL" /* Stat.WILL */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "ANIMAL_TRAINING_DOG", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "ENDURANCE", "MELEE_BASIC",
            "RANGED_SLING", "STEALTH_UNDERGROUND", "STEALTH_URBAN", "ANIMAL_CARE", "GOSSIP", "HAGGLE",
            "LORE_POISON", "PERCEPTION", "SET_TRAP", "CLIMB", "COOL", "DODGE", "RANGED_CROSSBOW"
        ],
        talents: ["HARDY", "STOUT_HEARTED", "STRONG_LEGS", "TUNNEL_RAT"]
    },
    RAT_CATCHER_4: {
        name: "Exterminator",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "BALS" /* Stat.BALS */, "WILL" /* Stat.WILL */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "STRG" /* Stat.STRG */],
        competences: [
            "ATHLETICS", "ANIMAL_TRAINING_DOG", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "ENDURANCE", "MELEE_BASIC",
            "RANGED_SLING", "STEALTH_UNDERGROUND", "STEALTH_URBAN", "ANIMAL_CARE", "GOSSIP", "HAGGLE",
            "LORE_POISON", "PERCEPTION", "SET_TRAP", "CLIMB", "COOL", "DODGE", "RANGED_CROSSBOW", "LEADERSHIP",
            "TRACK"
        ],
        talents: ["FEARLESS_SKAVEN", "MENACING", "ROBUST", "STRONG_MINDED"]
    },
    // Townsman
    TOWNSMAN_1: {
        name: "Clerk",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: ["CHARM", "CLIMB", "CONSUME_ALCOHOL", "DRIVE", "DODGE", "GAMBLE", "GOSSIP", "HAGGLE"],
        talents: ["ALLEY_CAT", "BENEATH_NOTICE", "ETIQUETTE_SERVANTS", "STURDY"]
    },
    TOWNSMAN_2: {
        name: "Townsman",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */],
        competences: [
            "CHARM", "CLIMB", "CONSUME_ALCOHOL", "DRIVE", "DODGE", "GAMBLE", "GOSSIP", "HAGGLE", "BRIBERY",
            "EVALUATE", "INTUITION", "LORE_LOCAL", "MELEE_BRAWLING", "PLAY_ANY"
        ],
        talents: ["DEALMAKER", "EMBEZZLE", "ETIQUETTE_ANY", "GREGARIOUS"]
    },
    TOWNSMAN_3: {
        name: "Town Councillor",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CHARM", "CLIMB", "CONSUME_ALCOHOL", "DRIVE", "DODGE", "GAMBLE", "GOSSIP", "HAGGLE", "BRIBERY",
            "EVALUATE", "INTUITION", "LORE_LOCAL", "MELEE_BRAWLING", "PLAY_ANY", "COOL", "LORE_LAW", "PERCEPTION",
            "RESEARCH"
        ],
        talents: ["BRIBER", "PUBLIC_SPEAKER", "READ_WRITE", "SUPPORTIVE"]
    },
    TOWNSMAN_4: {
        name: "Burgomeister",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */],
        competences: [
            "CHARM", "CLIMB", "CONSUME_ALCOHOL", "DRIVE", "DODGE", "GAMBLE", "GOSSIP", "HAGGLE", "BRIBERY",
            "EVALUATE", "INTUITION", "LORE_LOCAL", "MELEE_BRAWLING", "PLAY_ANY", "COOL", "LORE_LAW", "PERCEPTION",
            "RESEARCH", "LORE_POLITICS", "INTIMIDATE"
        ],
        talents: ["COMMANDING_PRESENCE", "MASTER_ORATOR", "SCHEMER", "SUAVE"]
    },
    // Watchman
    WATCHMAN_1: {
        name: "Watch Recruit",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GAMBLE", "MELEE_ANY", "PERCEPTION"
        ],
        talents: ["DRILLED", "HARDY", "STRIKE_TO_STUN", "TENACIOUS"]
    },
    WATCHMAN_2: {
        name: "Watchman",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GAMBLE", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "INTUITION", "LORE_LOCAL"
        ],
        talents: ["BREAK_AND_ENTER", "CRIMINAL", "NIGHT_VISION", "SPRINTER"]
    },
    WATCHMAN_3: {
        name: "Watch Sergeant",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GAMBLE", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "INTUITION", "LORE_LOCAL", "ENTERTAIN_STORYTELLING", "HAGGLE",
            "LEADERSHIP", "LORE_LAW"
        ],
        talents: ["DISARM", "ETIQUETTE_SOLDIERS", "FEARLESS_CRIMINALS", "NOSE_FOR_TROUBLE"]
    },
    WATCHMAN_4: {
        name: "Watch Captain",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GAMBLE", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GOSSIP", "INTIMIDATE", "INTUITION", "LORE_LOCAL", "ENTERTAIN_STORYTELLING", "HAGGLE",
            "LEADERSHIP", "LORE_LAW", "LORE_POLITICS", "RIDE_HORSE"
        ],
        talents: ["PUBLIC_SPEAKER", "ROBUST", "KINGPIN", "SCHEMER"]
    },
    // --- COURTIER --- //
    // Advisor
    ADVISOR_1: {
        name: "Aide",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_POLITICS",
            "PERCEPTION"
        ],
        talents: ["BENEATH_NOTICE", "ETIQUETTE_ANY", "GREGARIOUS", "READ_WRITE"]
    },
    ADVISOR_2: {
        name: "Advisor",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_POLITICS",
            "PERCEPTION", "CHARM", "COOL", "EVALUATE", "GAMBLE", "INTUITION", "LORE_LOCAL"
        ],
        talents: ["BLATHER", "CRIMINAL", "SCHEMER", "SUPPORTIVE"]
    },
    ADVISOR_3: {
        name: "Counsellor",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_POLITICS",
            "PERCEPTION", "CHARM", "COOL", "EVALUATE", "GAMBLE", "INTUITION", "LORE_LOCAL",
            "ENTERTAIN_STORYTELLING", "LEADERSHIP", "LANGUAGE_ANY", "LORE_ANY"
        ],
        talents: ["ARGUMENTATIVE", "BRIBER", "CAROUSER", "CAT_TONGUED"]
    },
    ADVISOR_4: {
        name: "Chancellor",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "HAGGLE", "LANGUAGE_CLASSICAL", "LORE_POLITICS",
            "PERCEPTION", "CHARM", "COOL", "EVALUATE", "GAMBLE", "INTUITION", "LORE_LOCAL",
            "ENTERTAIN_STORYTELLING", "LEADERSHIP", "LANGUAGE_ANY", "LORE_ANY", "LORE_HERALDRY", "RIDE_HORSE"
        ],
        talents: ["COMMANDING_PRESENCE", "EMBEZZLE", "KINGPIN", "SUAVE"]
    },
    // Artist
    ARTIST_1: {
        name: "Apprentice Artist",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */],
        competences: [
            "ART_ANY", "COOL", "CONSUME_ALCOHOL", "EVALUATE", "ENDURANCE", "GOSSIP", "PERCEPTION", "STEALTH_URBAN"
        ],
        talents: ["ARTISTIC", "SHARP", "STRONG_BACK", "TENACIOUS"]
    },
    ARTIST_2: {
        name: "Artist",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: [
            "ART_ANY", "COOL", "CONSUME_ALCOHOL", "EVALUATE", "ENDURANCE", "GOSSIP", "PERCEPTION", "STEALTH_URBAN",
            "CLIMB", "GAMBLE", "HAGGLE", "INTUITION", "LANGUAGE_CLASSICAL", "TRADE_ART_SUPPLIES"
        ],
        talents: ["CAROUSER", "CRIMINAL", "GREGARIOUS", "NIMBLE_FINGERED"]
    },
    ARTIST_3: {
        name: "Master Artist",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "ART_ANY", "COOL", "CONSUME_ALCOHOL", "EVALUATE", "ENDURANCE", "GOSSIP", "PERCEPTION", "STEALTH_URBAN",
            "CLIMB", "GAMBLE", "HAGGLE", "INTUITION", "LANGUAGE_CLASSICAL", "TRADE_ART_SUPPLIES", "CHARM",
            "LEADERSHIP", "LORE_ART", "LORE_HERALDRY"
        ],
        talents: ["ACUTE_SENSE_ANY", "DEALMAKER", "ETIQUETTE_ANY", "NOSE_FOR_TROUBLE"]
    },
    ARTIST_4: {
        name: "Maestro",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "INTL" /* Stat.INTL */],
        competences: [
            "ART_ANY", "COOL", "CONSUME_ALCOHOL", "EVALUATE", "ENDURANCE", "GOSSIP", "PERCEPTION", "STEALTH_URBAN",
            "CLIMB", "GAMBLE", "HAGGLE", "INTUITION", "LANGUAGE_CLASSICAL", "TRADE_ART_SUPPLIES", "CHARM",
            "LEADERSHIP", "LORE_ART", "LORE_HERALDRY", "RESEARCH", "RIDE_HORSE"
        ],
        talents: ["AMBIDEXTROUS", "KINGPIN", "MAGNUM_OPUS", "READ_WRITE"]
    },
    // Duellist
    DUELLIST_1: {
        name: "Fencer",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "HEAL", "INTUITION", "LANGUAGE_CLASSICAL", "MELEE_ANY", "PERCEPTION"
        ],
        talents: ["BEAT_BLADE", "DISTRACT", "FEINT", "STEP_ASIDE"]
    },
    DUELLIST_2: {
        name: "Duellist",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "HEAL", "INTUITION", "LANGUAGE_CLASSICAL", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GAMBLE", "MELEE_PARRY", "RANGED_BLACKPOWDER", "TRADE_GUNSMITH"
        ],
        talents: ["COMBAT_REFLEXES", "ETIQUETTE_ANY", "FAST_SHOT", "REVERSAL"]
    },
    DUELLIST_3: {
        name: "Duelmaster",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */, "STRG" /* Stat.STRG */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "HEAL", "INTUITION", "LANGUAGE_CLASSICAL", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GAMBLE", "MELEE_PARRY", "RANGED_BLACKPOWDER", "TRADE_GUNSMITH", "INTIMIDATE",
            "LEADERSHIP", "MELEE_BASIC", "PERFORM_ACROBATICS"
        ],
        talents: ["AMBIDEXTROUS", "DISARM", "DUAL_WIELDER", "RIPOSTE"]
    },
    DUELLIST_4: {
        name: "Judicial Champion",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */, "STRG" /* Stat.STRG */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "HEAL", "INTUITION", "LANGUAGE_CLASSICAL", "MELEE_ANY", "PERCEPTION",
            "CHARM", "COOL", "GAMBLE", "MELEE_PARRY", "RANGED_BLACKPOWDER", "TRADE_GUNSMITH", "INTIMIDATE",
            "LEADERSHIP", "MELEE_BASIC", "PERFORM_ACROBATICS", "LORE_LAW"
        ],
        talents: ["COMBAT_MASTER", "MENACING", "REACTION_STRIKE", "STRIKE_TO_INJURE"]
    },
    // Envoy
    ENVOY_1: {
        name: "Herald",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */],
        competences: ["ATHLETICS", "CHARM", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "RIDE_HORSE", "ROW"],
        talents: ["BLATHER", "ETIQUETTE_NOBLES", "READ_WRITE", "SUAVE"]
    },
    ENVOY_2: {
        name: "Envoy",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "CHARM", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "RIDE_HORSE", "ROW", "ART_WRITING",
            "BRIBERY", "COOL", "GOSSIP", "HAGGLE", "LORE_POLITICS"
        ],
        talents: ["ATTRACTIVE", "CAT_TONGUED", "ETIQUETTE_ANY", "SEASONED_TRAVELLER"]
    },
    ENVOY_3: {
        name: "Diplomat",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "CHARM", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "RIDE_HORSE", "ROW", "ART_WRITING",
            "BRIBERY", "COOL", "GOSSIP", "HAGGLE", "LORE_POLITICS", "INTIMIDATE", "LANGUAGE_ANY", "LEADERSHIP",
            "NAVIGATION"
        ],
        talents: ["CAROUSER", "DEALMAKER", "GREGARIOUS", "SCHEMER"]
    },
    ENVOY_4: {
        name: "Ambassador",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 5 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "CHARM", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "RIDE_HORSE", "ROW", "ART_WRITING",
            "BRIBERY", "COOL", "GOSSIP", "HAGGLE", "LORE_POLITICS", "INTIMIDATE", "LANGUAGE_ANY", "LEADERSHIP",
            "NAVIGATION", "LORE_ANY"
        ],
        talents: ["BRIBER", "COMMANDING_PRESENCE", "NOBLE_BLOOD", "SAVVY"]
    },
    // Noble
    NOBLE_1: {
        name: "Scion",
        level: 1,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "INTIMIDATE", "LEADERSHIP", "LORE_HERALDRY", "MELEE_FENCING",
            "PLAY_ANY"
        ],
        talents: ["ETIQUETTE_NOBLES", "LUCK", "NOBLE_BLOOD", "READ_WRITE"]
    },
    NOBLE_2: {
        name: "Noble",
        level: 2,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "INTIMIDATE", "LEADERSHIP", "LORE_HERALDRY", "MELEE_FENCING",
            "PLAY_ANY", "CHARM", "GOSSIP", "LANGUAGE_CLASSICAL", "LORE_LOCAL", "RIDE_HORSE", "MELEE_PARRY"
        ],
        talents: ["ATTRACTIVE", "BRIBER", "CAROUSER", "SUAVE"]
    },
    NOBLE_3: {
        name: "Magnate",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "INTIMIDATE", "LEADERSHIP", "LORE_HERALDRY", "MELEE_FENCING",
            "PLAY_ANY", "CHARM", "GOSSIP", "LANGUAGE_CLASSICAL", "LORE_LOCAL", "RIDE_HORSE", "MELEE_PARRY",
            "LANGUAGE_ANY", "INTUITION", "LORE_POLITICS", "PERCEPTION"
        ],
        talents: ["COOL_HEADED", "DEALMAKER", "PUBLIC_SPEAKER", "SCHEMER"]
    },
    NOBLE_4: {
        name: "Noble Lord",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 7 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "INTIMIDATE", "LEADERSHIP", "LORE_HERALDRY", "MELEE_FENCING",
            "PLAY_ANY", "CHARM", "GOSSIP", "LANGUAGE_CLASSICAL", "LORE_LOCAL", "RIDE_HORSE", "MELEE_PARRY",
            "LANGUAGE_ANY", "INTUITION", "LORE_POLITICS", "PERCEPTION", "LORE_ANY", "TRACK"
        ],
        talents: ["COMMANDING_PRESENCE", "IRON_WILL", "WAR_LEADER", "WEALTHY"]
    },
    // Servant
    SERVANT_1: {
        name: "Menial",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */],
        competences: ["ATHLETICS", "CLIMB", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_ANY"],
        talents: ["BENEATH_NOTICE", "STRONG_BACK", "STRONG_MINDED", "STURDY"]
    },
    SERVANT_2: {
        name: "Servant",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "CLIMB", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_ANY",
            "ANIMAL_CARE", "CONSUME_ALCOHOL", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE"
        ],
        talents: ["ETIQUETTE_SERVANTS", "SHADOW", "TENACIOUS", "WELL_PREPARED"]
    },
    SERVANT_3: {
        name: "Attendant",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "CLIMB", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_ANY",
            "ANIMAL_CARE", "CONSUME_ALCOHOL", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "CHARM", "COOL",
            "INTIMIDATE", "LORE_LOCAL"
        ],
        talents: ["EMBEZZLE", "RESISTANCE_POISON", "SUAVE", "SUPPORTIVE"]
    },
    SERVANT_4: {
        name: "Steward",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CLIMB", "DRIVE", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_ANY",
            "ANIMAL_CARE", "CONSUME_ALCOHOL", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "CHARM", "COOL",
            "INTIMIDATE", "LORE_LOCAL", "LEADERSHIP", "MELEE_BASIC"
        ],
        talents: ["ETIQUETTE_ANY", "NUMISMATICS", "READ_WRITE", "SAVVY"]
    },
    // Spy
    SPY_1: {
        name: "Informer",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */],
        competences: ["BRIBERY", "CHARM", "COOL", "GAMBLE", "GOSSIP", "HAGGLE", "PERCEPTION", "STEALTH_ANY"],
        talents: ["BLATHER", "CAROUSER", "GREGARIOUS", "SHADOW"]
    },
    SPY_2: {
        name: "Spy",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */],
        competences: [
            "BRIBERY", "CHARM", "COOL", "GAMBLE", "GOSSIP", "HAGGLE", "PERCEPTION", "STEALTH_ANY", "CLIMB",
            "ENTERTAIN_ACTING", "INTUITION", "MELEE_BASIC", "SECRET_SIGNS_ANY", "SLEIGHT_OF_HAND"
        ],
        talents: ["ETIQUETTE_ANY", "LIP_READING", "READ_WRITE", "SECRET_IDENTITY"]
    },
    SPY_3: {
        name: "Agent",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */],
        competences: [
            "BRIBERY", "CHARM", "COOL", "GAMBLE", "GOSSIP", "HAGGLE", "PERCEPTION", "STEALTH_ANY", "CLIMB",
            "ENTERTAIN_ACTING", "INTUITION", "MELEE_BASIC", "SECRET_SIGNS_ANY", "SLEIGHT_OF_HAND", "ANIMAL_CARE",
            "ANIMAL_TRAINING_PIGEON", "LANGUAGE_ANY", "LEADERSHIP"
        ],
        talents: ["ATTRACTIVE", "CAT_TONGUED", "MASTER_OF_DISGUISE", "MIMIC"]
    },
    SPY_4: {
        name: "Spymaster",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 4 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */],
        competences: [
            "BRIBERY", "CHARM", "COOL", "GAMBLE", "GOSSIP", "HAGGLE", "PERCEPTION", "STEALTH_ANY", "CLIMB",
            "ENTERTAIN_ACTING", "INTUITION", "MELEE_BASIC", "SECRET_SIGNS_ANY", "SLEIGHT_OF_HAND", "ANIMAL_CARE",
            "ANIMAL_TRAINING_PIGEON", "LANGUAGE_ANY", "LEADERSHIP", "LORE_ANY", "RESEARCH"
        ],
        talents: ["BRIBER", "SCHEMER", "SUAVE", "TOWER_OF_MEMORIES"]
    },
    // Warden
    WARDEN_1: {
        name: "Custodian",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL",
            "PERCEPTION"
        ],
        talents: ["MENACING", "NIGHT_VISION", "SHARP", "STRIKE_TO_STUN"]
    },
    WARDEN_2: {
        name: "Warden",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ATHLETICS", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL",
            "PERCEPTION", "ANIMAL_CARE", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "RANGED_BOW", "RIDE_HORSE", "SWIM"
        ],
        talents: ["ANIMAL_AFFINITY", "ETIQUETTE_SERVANTS", "STRIDER_ANY", "ROVER"]
    },
    WARDEN_3: {
        name: "Seneschal",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL",
            "PERCEPTION", "ANIMAL_CARE", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "RANGED_BOW", "RIDE_HORSE", "SWIM",
            "BRIBERY", "CHARM", "GOSSIP", "LEADERSHIP"
        ],
        talents: ["EMBEZZLE", "NUMISMATICS", "READ_WRITE", "SUPPORTIVE"]
    },
    WARDEN_4: {
        name: "Governor",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL",
            "PERCEPTION", "ANIMAL_CARE", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "RANGED_BOW", "RIDE_HORSE", "SWIM",
            "BRIBERY", "CHARM", "GOSSIP", "LEADERSHIP", "EVALUATE", "LANGUAGE_ANY"
        ],
        talents: ["COMMANDING_PRESENCE", "ETIQUETTE_ANY", "SAVANT_LOCAL", "SUAVE"]
    },
    // --- PEASANT --- //
    // Bailiff
    BAILIFF_1: {
        name: "Tax Collector",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */],
        competences: ["COOL", "DODGE", "ENDURANCE", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_BASIC", "PERCEPTION"],
        talents: ["EMBEZZLE", "NUMISMATICS", "STRONG_BACK", "TENACIOUS"]
    },
    BAILIFF_2: {
        name: "Bailiff",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_BASIC", "PERCEPTION", "BRIBERY",
            "CHARM", "EVALUATE", "INTUITION", "LEADERSHIP", "LORE_LOCAL"
        ],
        talents: ["BREAK_AND_ENTER", "CRIMINAL", "PUBLIC_SPEAKER", "STRIKE_TO_STUN"]
    },
    BAILIFF_3: {
        name: "Reeve",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "AGIL" /* Stat.AGIL */],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_BASIC", "PERCEPTION", "BRIBERY",
            "CHARM", "EVALUATE", "INTUITION", "LEADERSHIP", "LORE_LOCAL", "ANIMAL_CARE", "LORE_HERALDRY",
            "NAVIGATION", "RIDE_HORSE"
        ],
        talents: ["KINGPIN", "MENACING", "NOSE_FOR_TROUBLE", "READ_WRITE"]
    },
    BAILIFF_4: {
        name: "Magistrate",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_BASIC", "PERCEPTION", "BRIBERY",
            "CHARM", "EVALUATE", "INTUITION", "LEADERSHIP", "LORE_LOCAL", "ANIMAL_CARE", "LORE_HERALDRY",
            "NAVIGATION", "RIDE_HORSE", "LANGUAGE_CLASSICAL", "LORE_LAW"
        ],
        talents: ["COMMANDING_PRESENCE", "IRON_WILL", "SAVVY", "SCHEMER"]
    },
    // Hedge Witch
    HEDGE_WITCH_1: {
        name: "Hedge Apprentice",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CHANNELLING_ANY", "ENDURANCE", "INTUITION", "LANGUAGE_MAGICK", "LORE_FOLKLORE", "LORE_HERBS",
            "OUTDOOR_SURVIVAL", "PERCEPTION"
        ],
        talents: ["FAST_HANDS", "PETTY_MAGIC", "ROVER", "STRIDER_WOODLANDS"]
    },
    HEDGE_WITCH_2: {
        name: "Hedge Witch",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */],
        competences: [
            "CHANNELLING_ANY", "ENDURANCE", "INTUITION", "LANGUAGE_MAGICK", "LORE_FOLKLORE", "LORE_HERBS",
            "OUTDOOR_SURVIVAL", "PERCEPTION", "COOL", "GOSSIP", "HEAL", "LORE_LOCAL", "TRADE_CHARMS",
            "TRADE_HERBALIST"
        ],
        talents: ["AETHYRIC_ATTUNEMENT", "ANIMAL_AFFINITY", "ARCANE_MAGIC_HEDGECRAFT", "SIXTH_SENSE"]
    },
    HEDGE_WITCH_3: {
        name: "Hedge Master",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "CHANNELLING_ANY", "ENDURANCE", "INTUITION", "LANGUAGE_MAGICK", "LORE_FOLKLORE", "LORE_HERBS",
            "OUTDOOR_SURVIVAL", "PERCEPTION", "COOL", "GOSSIP", "HEAL", "LORE_LOCAL", "TRADE_CHARMS",
            "TRADE_HERBALIST", "HAGGLE", "LORE_GENEALOGY", "LORE_MAGIC", "LORE_SPIRITS"
        ],
        talents: ["CRAFTSMAN_HERBALIST", "MAGICAL_SENSE", "PURE_SOUL", "RESISTANCE_DISEASE"]
    },
    HEDGE_WITCH_4: {
        name: "Hedgewise",
        level: 4,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "CHANNELLING_ANY", "ENDURANCE", "INTUITION", "LANGUAGE_MAGICK", "LORE_FOLKLORE", "LORE_HERBS",
            "OUTDOOR_SURVIVAL", "PERCEPTION", "COOL", "GOSSIP", "HEAL", "LORE_LOCAL", "TRADE_CHARMS",
            "TRADE_HERBALIST", "HAGGLE", "LORE_GENEALOGY", "LORE_MAGIC", "LORE_SPIRITS", "INTIMIDATE", "PRAY"
        ],
        talents: ["ACUTE_SENSE_ANY", "MASTER_TRADESMAN_HERBALIST", "NIGHT_VISION", "STRONG_MINDED"]
    },
    // Herbalist
    HERBALIST_1: {
        name: "Herb Gatherer",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_HERBS", "OUTDOOR_SURVIVAL", "PERCEPTION", "SWIM",
            "TRADE_HERBALIST"
        ],
        talents: ["ACUTE_SENSE_TASTE", "ORIENTATION", "ROVER", "STRIDER_ANY"]
    },
    HERBALIST_2: {
        name: "Herbalist",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_HERBS", "OUTDOOR_SURVIVAL", "PERCEPTION", "SWIM",
            "TRADE_HERBALIST", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "HAGGLE", "HEAL", "LORE_LOCAL"
        ],
        talents: ["DEALMAKER", "NIMBLE_FINGERED", "SHARP", "STURDY"]
    },
    HERBALIST_3: {
        name: "Herb Master",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_HERBS", "OUTDOOR_SURVIVAL", "PERCEPTION", "SWIM",
            "TRADE_HERBALIST", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "HAGGLE", "HEAL", "LORE_LOCAL", "INTUITION",
            "LEADERSHIP", "LORE_MEDICINE", "TRADE_POISONER"
        ],
        talents: ["CRAFTSMAN_HERBALIST", "FIELD_DRESSING", "HARDY", "SAVVY"]
    },
    HERBALIST_4: {
        name: "Herbwise",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_HERBS", "OUTDOOR_SURVIVAL", "PERCEPTION", "SWIM",
            "TRADE_HERBALIST", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "HAGGLE", "HEAL", "LORE_LOCAL", "INTUITION",
            "LEADERSHIP", "LORE_MEDICINE", "TRADE_POISONER", "DRIVE", "NAVIGATION"
        ],
        talents: ["CONCOCT", "MASTER_TRADESMAN_HERBALIST", "RESISTANCE_POISON", "SAVANT_HERBS"]
    },
    // Hunter
    HUNTER_1: {
        name: "Trapper",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_BEASTS", "OUTDOOR_SURVIVAL", "PERCEPTION", "RANGED_SLING",
            "SET_TRAP"
        ],
        talents: ["HARDY", "ROVER", "STRIDER_ANY", "TRAPPER"]
    },
    HUNTER_2: {
        name: "Hunter",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "BALS" /* Stat.BALS */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_BEASTS", "OUTDOOR_SURVIVAL", "PERCEPTION", "RANGED_SLING",
            "SET_TRAP", "COOL", "INTUITION", "MELEE_BASIC", "RANGED_BOW", "SECRET_SIGNS_HUNTER", "STEALTH_RURAL"
        ],
        talents: ["ACCURATE_SHOT", "FAST_SHOT", "HUNTERS_EYE", "MARKSMAN"]
    },
    HUNTER_3: {
        name: "Tracker",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "BALS" /* Stat.BALS */, "INIT" /* Stat.INIT */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_BEASTS", "OUTDOOR_SURVIVAL", "PERCEPTION", "RANGED_SLING",
            "SET_TRAP", "COOL", "INTUITION", "MELEE_BASIC", "RANGED_BOW", "SECRET_SIGNS_HUNTER", "STEALTH_RURAL",
            "NAVIGATION", "RIDE_HORSE", "SWIM", "TRACK"
        ],
        talents: ["ACUTE_SENSE_ANY", "DEADEYE_SHOT", "FEARLESS_ANIMALS", "SHARPSHOOTER"]
    },
    HUNTER_4: {
        name: "Huntsmaster",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "BALS" /* Stat.BALS */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "LORE_BEASTS", "OUTDOOR_SURVIVAL", "PERCEPTION", "RANGED_SLING",
            "SET_TRAP", "COOL", "INTUITION", "MELEE_BASIC", "RANGED_BOW", "SECRET_SIGNS_HUNTER", "STEALTH_RURAL",
            "NAVIGATION", "RIDE_HORSE", "SWIM", "TRACK", "ANIMAL_CARE", "ANIMAL_TRAINING_ANY"
        ],
        talents: ["FEARLESS_MONSTERS", "ROBUST", "SNIPER", "SURE_SHOT"]
    },
    // Miner
    MINER_1: {
        name: "Prospector",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: [
            "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "SWIM"
        ],
        talents: ["ROVER", "STRIDER_ROCKY", "STURDY", "TENACIOUS"]
    },
    MINER_2: {
        name: "Miner",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "SWIM", "CLIMB", "CONSUME_ALCOHOL", "EVALUATE", "MELEE_BASIC", "SECRET_SIGNS_MINER", "TRADE_EXPLOSIVES"
        ],
        talents: ["NIGHT_VISION", "STRIKE_MIGHTY_BLOW", "STRONG_BACK", "VERY_STRONG"]
    },
    MINER_3: {
        name: "Master Miner",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */],
        competences: [
            "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "SWIM", "CLIMB", "CONSUME_ALCOHOL", "EVALUATE", "MELEE_BASIC", "SECRET_SIGNS_MINER", "TRADE_EXPLOSIVES",
            "GOSSIP", "LORE_GEOLOGY", "STEALTH_UNDERGROUND", "TRADE_ENGINEER"
        ],
        talents: ["CAREFUL_STRIKE", "CRAFTSMAN_EXPLOSIVES", "TINKER", "TUNNEL_RAT"]
    },
    MINER_4: {
        name: "Mine Foreman",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "COOL", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "SWIM", "CLIMB", "CONSUME_ALCOHOL", "EVALUATE", "MELEE_BASIC", "SECRET_SIGNS_MINER", "TRADE_EXPLOSIVES",
            "GOSSIP", "LORE_GEOLOGY", "STEALTH_UNDERGROUND", "TRADE_ENGINEER", "CHARM", "LEADERSHIP"
        ],
        talents: ["ARGUMENTATIVE", "STRONG_MINDED", "EMBEZZLE", "READ_WRITE"]
    },
    // Mystic
    MYSTIC_1: {
        name: "Fortune Teller",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: [
            "CHARM", "ENTERTAIN_FORTUNE_TELLING", "DODGE", "GOSSIP", "HAGGLE", "INTUITION", "PERCEPTION",
            "SLEIGHT_OF_HAND"
        ],
        talents: ["ATTRACTIVE", "LUCK", "SECOND_SIGHT", "SUAVE"]
    },
    MYSTIC_2: {
        name: "Mystic",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "CHARM", "ENTERTAIN_FORTUNE_TELLING", "DODGE", "GOSSIP", "HAGGLE", "INTUITION", "PERCEPTION",
            "SLEIGHT_OF_HAND", "BRIBERY", "COOL", "ENTERTAIN_PROPHECY", "EVALUATE", "INTIMIDATE", "LORE_ASTROLOGY"
        ],
        talents: ["DETECT_ARTEFACT", "HOLY_VISIONS", "SIXTH_SENSE", "WELL_PREPARED"]
    },
    MYSTIC_3: {
        name: "Sage",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */],
        competences: [
            "CHARM", "ENTERTAIN_FORTUNE_TELLING", "DODGE", "GOSSIP", "HAGGLE", "INTUITION", "PERCEPTION",
            "SLEIGHT_OF_HAND", "BRIBERY", "COOL", "ENTERTAIN_PROPHECY", "EVALUATE", "INTIMIDATE", "LORE_ASTROLOGY",
            "ART_WRITING", "CHARM_ANIMAL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY"
        ],
        talents: ["NOSE_FOR_TROUBLE", "PETTY_MAGIC", "READ_WRITE", "WITCH"]
    },
    MYSTIC_4: {
        name: "Seer",
        level: 4,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */],
        competences: [
            "CHARM", "ENTERTAIN_FORTUNE_TELLING", "DODGE", "GOSSIP", "HAGGLE", "INTUITION", "PERCEPTION",
            "SLEIGHT_OF_HAND", "BRIBERY", "COOL", "ENTERTAIN_PROPHECY", "EVALUATE", "INTIMIDATE", "LORE_ASTROLOGY",
            "ART_WRITING", "CHARM_ANIMAL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY", "LORE_PROPHECY",
            "CHANNELLING_AZYR"
        ],
        talents: ["ARCANE_MAGIC_CELESTIAL", "MAGICAL_SENSE", "MENACING", "STRONG_MINDED"]
    },
    // Scout
    SCOUT_1: {
        name: "Guide",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION"
        ],
        talents: ["ORIENTATION", "ROVER", "SHARP", "STRIDER_ANY"]
    },
    SCOUT_2: {
        name: "Scout",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "ATHLETICS", "NAVIGATION", "RANGED_BOW", "RIDE_HORSE", "STEALTH_RURAL", "TRACK"
        ],
        talents: ["COMBAT_AWARE", "NIGHT_VISION", "NOSE_FOR_TROUBLE", "SEASONED_TRAVELLER"]
    },
    SCOUT_3: {
        name: "Pathfinder",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */, "INTL" /* Stat.INTL */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "ATHLETICS", "NAVIGATION", "RANGED_BOW", "RIDE_HORSE", "STEALTH_RURAL", "TRACK",
            "ANIMAL_CARE", "HAGGLE", "SECRET_SIGNS_HUNTER", "SWIM"
        ],
        talents: ["ACUTE_SENSE_SIGHT", "SIXTH_SENSE", "STRONG_LEGS", "VERY_RESILIENT"]
    },
    SCOUT_4: {
        name: "Explorer",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */, "INTL" /* Stat.INTL */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CHARM_ANIMAL", "CLIMB", "ENDURANCE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "ATHLETICS", "NAVIGATION", "RANGED_BOW", "RIDE_HORSE", "STEALTH_RURAL", "TRACK",
            "ANIMAL_CARE", "HAGGLE", "SECRET_SIGNS_HUNTER", "SWIM", "LANGUAGE_ANY", "TRADE_CARTOGRAPHER"
        ],
        talents: ["HARDY", "LINGUISTICS", "SAVANT_LOCAL", "TENACIOUS"]
    },
    // Villager
    VILLAGER_1: {
        name: "Peasant",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ANIMAL_CARE", "ATHLETICS", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "LORE_LOCAL",
            "OUTDOOR_SURVIVAL"
        ],
        talents: ["ROVER", "STRONG_BACK", "STRONG_MINDED", "STONE_SOUP"]
    },
    VILLAGER_2: {
        name: "Villager",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ANIMAL_CARE", "ATHLETICS", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "LORE_LOCAL",
            "OUTDOOR_SURVIVAL", "DODGE", "DRIVE", "ENTERTAIN_STORYTELLING", "HAGGLE", "MELEE_BASIC", "TRADE_ANY"
        ],
        talents: ["ANIMAL_AFFINITY", "HARDY", "TENACIOUS", "VERY_STRONG"]
    },
    VILLAGER_3: {
        name: "Councillor",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */, "FELW" /* Stat.FELW */],
        competences: [
            "ANIMAL_CARE", "ATHLETICS", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "LORE_LOCAL",
            "OUTDOOR_SURVIVAL", "DODGE", "DRIVE", "ENTERTAIN_STORYTELLING", "HAGGLE", "MELEE_BASIC", "TRADE_ANY",
            "BRIBERY", "CHARM", "INTIMIDATE", "LEADERSHIP"
        ],
        talents: ["CRAFTSMAN_ANY", "DEALMAKER", "STOUT_HEARTED", "VERY_RESILIENT"]
    },
    VILLAGER_4: {
        name: "Village Elder",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "ANIMAL_CARE", "ATHLETICS", "CONSUME_ALCOHOL", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "LORE_LOCAL",
            "OUTDOOR_SURVIVAL", "DODGE", "DRIVE", "ENTERTAIN_STORYTELLING", "HAGGLE", "MELEE_BASIC", "TRADE_ANY",
            "BRIBERY", "CHARM", "INTIMIDATE", "LEADERSHIP", "INTUITION", "LORE_HISTORY"
        ],
        talents: ["MASTER_TRADESMAN_ANY", "NIMBLE_FINGERED", "PUBLIC_SPEAKER", "SAVANT_LOCAL"]
    },
    // --- RANGER --- //
    // Bounty Hunter
    BOUNTY_HUNTER_1: {
        name: "Thief-taker",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */],
        competences: [
            "BRIBERY", "CHARM", "GOSSIP", "HAGGLE", "INTUITION", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "PERCEPTION"
        ],
        talents: ["BREAK_AND_ENTER", "SHADOW", "STRIKE_TO_STUN", "SUAVE"]
    },
    BOUNTY_HUNTER_2: {
        name: "Bounty Hunter",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */],
        competences: [
            "BRIBERY", "CHARM", "GOSSIP", "HAGGLE", "INTUITION", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "ATHLETICS", "ENDURANCE", "INTIMIDATE", "RANGED_CROSSBOW", "RANGED_ENTANGLING", "TRACK"
        ],
        talents: ["MARKSMAN", "RELENTLESS", "SEASONED_TRAVELLER", "STRONG_BACK"]
    },
    BOUNTY_HUNTER_3: {
        name: "Master Bounty Hunter",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */, "STRG" /* Stat.STRG */],
        competences: [
            "BRIBERY", "CHARM", "GOSSIP", "HAGGLE", "INTUITION", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "ATHLETICS", "ENDURANCE", "INTIMIDATE", "RANGED_CROSSBOW", "RANGED_ENTANGLING", "TRACK", "ANIMAL_CARE",
            "CLIMB", "RIDE_HORSE", "SWIM"
        ],
        talents: ["ACCURATE_SHOT", "CAREFUL_STRIKE", "DUAL_WIELDER", "SPRINTER"]
    },
    BOUNTY_HUNTER_4: {
        name: "Bounty Hunter General",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */, "STRG" /* Stat.STRG */, "INTL" /* Stat.INTL */],
        competences: [
            "BRIBERY", "CHARM", "GOSSIP", "HAGGLE", "INTUITION", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "PERCEPTION",
            "ATHLETICS", "ENDURANCE", "INTIMIDATE", "RANGED_CROSSBOW", "RANGED_ENTANGLING", "TRACK", "ANIMAL_CARE",
            "CLIMB", "RIDE_HORSE", "SWIM", "DRIVE", "LORE_LAW"
        ],
        talents: ["DEADEYE_SHOT", "FEARLESS_BOUNTIES", "HARDY", "SURE_SHOT"]
    },
    // Coachman
    COACHMAN_1: {
        name: "Postilion",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "CLIMB", "DRIVE", "ENDURANCE", "PERCEPTION", "RANGED_ENTANGLING",
            "RIDE_HORSE"
        ],
        talents: ["ANIMAL_AFFINITY", "SEASONED_TRAVELLER", "TRICK_RIDING", "TENACIOUS"]
    },
    COACHMAN_2: {
        name: "Coachman",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "CLIMB", "DRIVE", "ENDURANCE", "PERCEPTION", "RANGED_ENTANGLING",
            "RIDE_HORSE", "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "NAVIGATION", "RANGED_BLACKPOWDER"
        ],
        talents: ["COOL_HEADED", "CRACK_THE_WHIP", "GUNNER", "STRONG_MINDED"]
    },
    COACHMAN_3: {
        name: "Coach Master",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "CLIMB", "DRIVE", "ENDURANCE", "PERCEPTION", "RANGED_ENTANGLING",
            "RIDE_HORSE", "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "NAVIGATION",
            "RANGED_BLACKPOWDER", "ANIMAL_TRAINING_HORSE", "INTIMIDATE", "LANGUAGE_ANY", "LORE_ROUTES"
        ],
        talents: ["ACCURATE_SHOT", "DEALMAKER", "FEARLESS_OUTLAWS", "NOSE_FOR_TROUBLE"]
    },
    COACHMAN_4: {
        name: "Route Master",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "CLIMB", "DRIVE", "ENDURANCE", "PERCEPTION", "RANGED_ENTANGLING",
            "RIDE_HORSE", "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "NAVIGATION",
            "RANGED_BLACKPOWDER", "ANIMAL_TRAINING_HORSE", "INTIMIDATE", "LANGUAGE_ANY", "LORE_ROUTES", "CHARM",
            "LEADERSHIP"
        ],
        talents: ["FEARLESS_BEASTMEN", "MARKSMAN", "ORIENTATION", "RAPID_RELOAD"]
    },
    // Entertainer
    ENTERTAINER_1: {
        name: "Busker",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CHARM", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERFORM_ANY", "PLAY_ANY", "SLEIGHT_OF_HAND"
        ],
        talents: ["ATTRACTIVE", "MIMIC", "PUBLIC_SPEAKER", "SUAVE"]
    },
    ENTERTAINER_2: {
        name: "Entertainer",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ATHLETICS", "CHARM", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERFORM_ANY", "PLAY_ANY", "SLEIGHT_OF_HAND",
            "RIDE_ANY", "MELEE_BASIC", "RANGED_THROWING"
        ],
        talents: ["CONTORTIONIST", "JUMP_UP", "SHARPSHOOTER", "TRICK_RIDING"]
    },
    ENTERTAINER_3: {
        name: "Troubadour",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */, "BALS" /* Stat.BALS */],
        competences: [
            "ATHLETICS", "CHARM", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERFORM_ANY", "PLAY_ANY", "SLEIGHT_OF_HAND",
            "RIDE_ANY", "MELEE_BASIC", "RANGED_THROWING", "ANIMAL_CARE", "ANIMAL_TRAINING_ANY", "ART_WRITING",
            "LANGUAGE_ANY"
        ],
        talents: ["BLATHER", "MASTER_OF_DISGUISE", "PERFECT_PITCH", "READ_WRITE"]
    },
    ENTERTAINER_4: {
        name: "Troupe Leader",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */, "BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */],
        competences: [
            "ATHLETICS", "CHARM", "ENTERTAIN_ANY", "GOSSIP", "HAGGLE", "PERFORM_ANY", "PLAY_ANY", "SLEIGHT_OF_HAND",
            "RIDE_ANY", "MELEE_BASIC", "RANGED_THROWING", "ANIMAL_CARE", "ANIMAL_TRAINING_ANY", "ART_WRITING",
            "LANGUAGE_ANY", "DRIVE", "LEADERSHIP"
        ],
        talents: ["DEALMAKER", "ETIQUETTE_ANY", "SEASONED_TRAVELLER", "SHARP"]
    },
    // Flagellant
    FLAGELLANT_1: {
        name: "Zealot",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 0 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */],
        competences: [
            "DODGE", "ENDURANCE", "HEAL", "INTIMIDATE", "INTUITION", "LORE_SIGMAR", "MELEE_FLAIL",
            "OUTDOOR_SURVIVAL"
        ],
        talents: ["BERSERK_CHARGE", "FRENZY", "READ_WRITE", "STONE_SOUP"]
    },
    FLAGELLANT_2: {
        name: "Flagellant",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 0 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: [
            "DODGE", "ENDURANCE", "HEAL", "INTIMIDATE", "INTUITION", "LORE_SIGMAR", "MELEE_FLAIL",
            "OUTDOOR_SURVIVAL", "ART_ICONS", "ATHLETICS", "COOL", "LANGUAGE_CLASSICAL", "LORE_EMPIRE",
            "RANGED_SLING"
        ],
        talents: ["HARDY", "HATRED_HERETICS", "FLAGELLANT", "IMPLACABLE"]
    },
    FLAGELLANT_3: {
        name: "Penitent",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 0 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */],
        competences: [
            "DODGE", "ENDURANCE", "HEAL", "INTIMIDATE", "INTUITION", "LORE_SIGMAR", "MELEE_FLAIL",
            "OUTDOOR_SURVIVAL", "ART_ICONS", "ATHLETICS", "COOL", "LANGUAGE_CLASSICAL", "LORE_EMPIRE",
            "RANGED_SLING", "CHARM", "LANGUAGE_ANY", "LORE_THEOLOGY", "PERCEPTION"
        ],
        talents: ["FIELD_DRESSING", "FURIOUS_ASSAULT", "MENACING", "SEASONED_TRAVELLER"]
    },
    FLAGELLANT_4: {
        name: "Prophet of Doom",
        level: 4,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 0 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "DODGE", "ENDURANCE", "HEAL", "INTIMIDATE", "INTUITION", "LORE_SIGMAR", "MELEE_FLAIL",
            "OUTDOOR_SURVIVAL", "ART_ICONS", "ATHLETICS", "COOL", "LANGUAGE_CLASSICAL", "LORE_EMPIRE",
            "RANGED_SLING", "CHARM", "LANGUAGE_ANY", "LORE_THEOLOGY", "PERCEPTION", "ENTERTAIN_SPEECHES",
            "LEADERSHIP"
        ],
        talents: ["BATTLE_RAGE", "FEARLESS_HERETICS", "FRIGHTENING", "IMPASSIONED_ZEAL"]
    },
    // Messenger
    MESSENGER_1: {
        name: "Runner",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ATHLETICS", "CLIMB", "DODGE", "ENDURANCE", "GOSSIP", "NAVIGATION", "PERCEPTION", "MELEE_BRAWLING"
        ],
        talents: ["FLEE", "FLEET_FOOTED", "SPRINTER", "STEP_ASIDE"]
    },
    MESSENGER_2: {
        name: "Messenger",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ATHLETICS", "CLIMB", "DODGE", "ENDURANCE", "GOSSIP", "NAVIGATION", "PERCEPTION", "MELEE_BRAWLING",
            "ANIMAL_CARE", "CHARM", "COOL", "LORE_LOCAL", "MELEE_BASIC", "RIDE_HORSE"
        ],
        talents: ["CRACK_THE_WHIP", "CRIMINAL", "ORIENTATION", "SEASONED_TRAVELLER"]
    },
    MESSENGER_3: {
        name: "Courier",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "CLIMB", "DODGE", "ENDURANCE", "GOSSIP", "NAVIGATION", "PERCEPTION", "MELEE_BRAWLING",
            "ANIMAL_CARE", "CHARM", "COOL", "LORE_LOCAL", "MELEE_BASIC", "RIDE_HORSE", "CHARM_ANIMAL", "BRIBERY",
            "CONSUME_ALCOHOL", "OUTDOOR_SURVIVAL"
        ],
        talents: ["NOSE_FOR_TROUBLE", "RELENTLESS", "TENACIOUS", "TRICK_RIDING"]
    },
    MESSENGER_4: {
        name: "Courier-Captain",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CLIMB", "DODGE", "ENDURANCE", "GOSSIP", "NAVIGATION", "PERCEPTION", "MELEE_BRAWLING",
            "ANIMAL_CARE", "CHARM", "COOL", "LORE_LOCAL", "MELEE_BASIC", "RIDE_HORSE", "CHARM_ANIMAL", "BRIBERY",
            "CONSUME_ALCOHOL", "OUTDOOR_SURVIVAL", "INTIMIDATE", "LEADERSHIP"
        ],
        talents: ["DEALMAKER", "HATRED_OUTLAWS", "KINGPIN", "VERY_RESILIENT"]
    },
    // Pedlar
    PEDLAR_1: {
        name: "Vagabond",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */],
        competences: [
            "CHARM", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HAGGLE", "INTUITION", "OUTDOOR_SURVIVAL",
            "STEALTH_RURAL", "STEALTH_URBAN"
        ],
        talents: ["FISHERMAN", "FLEE", "ROVER", "TINKER"]
    },
    PEDLAR_2: {
        name: "Pedlar",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */],
        competences: [
            "CHARM", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HAGGLE", "INTUITION", "OUTDOOR_SURVIVAL",
            "STEALTH_RURAL", "STEALTH_URBAN", "ANIMAL_CARE", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "EVALUATE",
            "RIDE_HORSE", "TRADE_TINKER"
        ],
        talents: ["DEALMAKER", "ORIENTATION", "SEASONED_TRAVELLER", "STRONG_BACK"]
    },
    PEDLAR_3: {
        name: "Master Pedlar",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */],
        competences: [
            "CHARM", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HAGGLE", "INTUITION", "OUTDOOR_SURVIVAL",
            "STEALTH_RURAL", "STEALTH_URBAN", "ANIMAL_CARE", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "EVALUATE",
            "RIDE_HORSE", "TRADE_TINKER", "DRIVE", "INTIMIDATE", "LANGUAGE_ANY", "PERCEPTION"
        ],
        talents: ["NUMISMATICS", "STURDY", "WELL_PREPARED", "VERY_RESILIENT"]
    },
    PEDLAR_4: {
        name: "Wandering Trader",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */],
        competences: [
            "CHARM", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GOSSIP", "HAGGLE", "INTUITION", "OUTDOOR_SURVIVAL",
            "STEALTH_RURAL", "STEALTH_URBAN", "ANIMAL_CARE", "CHARM_ANIMAL", "CONSUME_ALCOHOL", "EVALUATE",
            "RIDE_HORSE", "TRADE_TINKER", "DRIVE", "INTIMIDATE", "LANGUAGE_ANY", "PERCEPTION", "LORE_LOCAL",
            "LORE_GEOGRAPHY"
        ],
        talents: ["CAT_TONGUED", "STRONG_MINDED", "SUAVE", "TENACIOUS"]
    },
    // Road Warden
    ROAD_WARDEN_1: {
        name: "Toll Keeper",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "PERCEPTION",
            "RANGED_CROSSBOW"
        ],
        talents: ["COOL_HEADED", "EMBEZZLE", "MARKSMAN", "NUMISMATICS"]
    },
    ROAD_WARDEN_2: {
        name: "Road Warden",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "WEAS" /* Stat.WEAS */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "PERCEPTION",
            "RANGED_CROSSBOW", "ANIMAL_CARE", "ENDURANCE", "INTIMIDATE", "INTUITION", "OUTDOOR_SURVIVAL",
            "RIDE_HORSE"
        ],
        talents: ["CRACK_THE_WHIP", "CRIMINAL", "ROUGHRIDER", "SEASONED_TRAVELLER"]
    },
    ROAD_WARDEN_3: {
        name: "Road Sergeant",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "WEAS" /* Stat.WEAS */, "FELW" /* Stat.FELW */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "PERCEPTION",
            "RANGED_CROSSBOW", "ANIMAL_CARE", "ENDURANCE", "INTIMIDATE", "INTUITION", "OUTDOOR_SURVIVAL",
            "RIDE_HORSE", "ATHLETICS", "CHARM", "LEADERSHIP", "RANGED_BLACKPOWDER"
        ],
        talents: ["ETIQUETTE_SOLDIERS", "FEARLESS_OUTLAWS", "HATRED_ANY", "NOSE_FOR_TROUBLE"]
    },
    ROAD_WARDEN_4: {
        name: "Road Captain",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["BALS" /* Stat.BALS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "WEAS" /* Stat.WEAS */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "PERCEPTION",
            "RANGED_CROSSBOW", "ANIMAL_CARE", "ENDURANCE", "INTIMIDATE", "INTUITION", "OUTDOOR_SURVIVAL",
            "RIDE_HORSE", "ATHLETICS", "CHARM", "LEADERSHIP", "RANGED_BLACKPOWDER", "LORE_EMPIRE", "NAVIGATION"
        ],
        talents: ["COMBAT_AWARE", "COMMANDING_PRESENCE", "KINGPIN", "PUBLIC_SPEAKER"]
    },
    // Witch Hunter
    WITCH_HUNTER_1: {
        name: "Interrogator",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "HEAL", "INTIMIDATE", "INTUITION", "LORE_TORTURE", "MELEE_BRAWLING",
            "PERCEPTION"
        ],
        talents: ["COOL_HEADED", "MENACING", "READ_WRITE", "RESOLUTE"]
    },
    WITCH_HUNTER_2: {
        name: "Witch Hunter",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "BALS" /* Stat.BALS */],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "HEAL", "INTIMIDATE", "INTUITION", "LORE_TORTURE", "MELEE_BRAWLING",
            "PERCEPTION", "COOL", "GOSSIP", "MELEE_BASIC", "LORE_WITCHES", "RANGED_ANY", "RIDE_HORSE"
        ],
        talents: ["DUAL_WIELDER", "MARKSMAN", "SEASONED_TRAVELLER", "SHADOW"]
    },
    WITCH_HUNTER_3: {
        name: "Inquisitor",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "BALS" /* Stat.BALS */, "FELW" /* Stat.FELW */],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "HEAL", "INTIMIDATE", "INTUITION", "LORE_TORTURE", "MELEE_BRAWLING",
            "PERCEPTION", "COOL", "GOSSIP", "MELEE_BASIC", "LORE_WITCHES", "RANGED_ANY", "RIDE_HORSE", "ENDURANCE",
            "LEADERSHIP", "LORE_LAW", "LORE_LOCAL"
        ],
        talents: ["FEARLESS_WITCHES", "NOSE_FOR_TROUBLE", "RELENTLESS", "STRONG_MINDED"]
    },
    WITCH_HUNTER_4: {
        name: "Witchfinder General",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "BALS" /* Stat.BALS */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "HEAL", "INTIMIDATE", "INTUITION", "LORE_TORTURE", "MELEE_BRAWLING",
            "PERCEPTION", "COOL", "GOSSIP", "MELEE_BASIC", "LORE_WITCHES", "RANGED_ANY", "RIDE_HORSE", "ENDURANCE",
            "LEADERSHIP", "LORE_LAW", "LORE_LOCAL", "LORE_CHAOS", "LORE_POLITICS"
        ],
        talents: ["FRIGHTENING", "IRON_WILL", "MAGICAL_SENSE", "PURE_SOUL"]
    },
    // --- Riverfolk --- //
    // Boatman
    BOATMAN_1: {
        name: "Boat-hand",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */],
        competences: ["CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "ROW", "SAIL", "SWIM"],
        talents: ["DIRTY_FIGHTING", "FISHERMAN", "STRONG_BACK", "STRONG_SWIMMER"]
    },
    BOATMAN_2: {
        name: "Boatman",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */],
        competences: [
            "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "ROW", "SAIL", "SWIM", "ATHLETICS",
            "ENTERTAIN_STORYTELLING", "HAGGLE", "INTUITION", "LORE_RIVERWAYS", "PERCEPTION"
        ],
        talents: ["ETIQUETTE_GUILDERS", "SEASONED_TRAVELLER", "VERY_STRONG", "WATERMAN"]
    },
    BOATMAN_3: {
        name: "Bargeswain",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "ROW", "SAIL", "SWIM", "ATHLETICS",
            "ENTERTAIN_STORYTELLING", "HAGGLE", "INTUITION", "LORE_RIVERWAYS", "PERCEPTION", "CLIMB",
            "ENTERTAIN_SINGING", "HEAL", "TRADE_BOATBUILDING"
        ],
        talents: ["DEALMAKER", "EMBEZZLE", "NOSE_FOR_TROUBLE", "STRIKE_MIGHTY_BLOW"]
    },
    BOATMAN_4: {
        name: "Barge Master",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */],
        competences: [
            "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BRAWLING", "ROW", "SAIL", "SWIM", "ATHLETICS",
            "ENTERTAIN_STORYTELLING", "HAGGLE", "INTUITION", "LORE_RIVERWAYS", "PERCEPTION", "CLIMB",
            "ENTERTAIN_SINGING", "HEAL", "TRADE_BOATBUILDING", "LEADERSHIP", "NAVIGATION"
        ],
        talents: ["MENACING", "ORIENTATION", "PILOT", "PUBLIC_SPEAKER"]
    },
    // Huffer
    HUFFER_1: {
        name: "Riverguide",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */],
        competences: [
            "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "LORE_RIVERWAYS", "PERCEPTION", "ROW", "SWIM"
        ],
        talents: ["FISHERMAN", "NIGHT_VISION", "ORIENTATION", "WATERMAN"]
    },
    HUFFER_2: {
        name: "Huffer",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */],
        competences: [
            "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "LORE_RIVERWAYS", "PERCEPTION", "ROW", "SWIM",
            "CHARM", "COOL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY", "MELEE_BASIC", "NAVIGATION"
        ],
        talents: ["DEALMAKER", "ETIQUETTE_GUILDERS", "NOSE_FOR_TROUBLE", "RIVER_GUIDE"]
    },
    HUFFER_3: {
        name: "Pilot",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "INTL" /* Stat.INTL */],
        competences: [
            "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "LORE_RIVERWAYS", "PERCEPTION", "ROW", "SWIM",
            "CHARM", "COOL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY", "MELEE_BASIC", "NAVIGATION", "HAGGLE",
            "INTIMIDATE", "LORE_WRECKS"
        ],
        talents: ["ACUTE_SENSE_SIGHT", "PILOT", "SEA_LEGS", "VERY_STRONG"]
    },
    HUFFER_4: {
        name: "Master Pilot",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "CONSUME_ALCOHOL", "GOSSIP", "INTUITION", "LORE_LOCAL", "LORE_RIVERWAYS", "PERCEPTION", "ROW", "SWIM",
            "CHARM", "COOL", "ENTERTAIN_STORYTELLING", "LANGUAGE_ANY", "MELEE_BASIC", "NAVIGATION", "HAGGLE",
            "INTIMIDATE", "LORE_WRECKS", "LEADERSHIP", "SAIL"
        ],
        talents: ["SIXTH_SENSE", "SHARP", "STRONG_SWIMMER", "TENACIOUS"]
    },
    // Riverwarden
    RIVERWARDEN_1: {
        name: "River Recruit",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["BALS" /* Stat.BALS */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */],
        competences: ["ATHLETICS", "DODGE", "ENDURANCE", "MELEE_BASIC", "PERCEPTION", "ROW", "SAIL", "SWIM"],
        talents: ["STRONG_SWIMMER", "STRONG_BACK", "VERY_STRONG", "WATERMAN"]
    },
    RIVERWARDEN_2: {
        name: "Riverwarden",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["BALS" /* Stat.BALS */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "MELEE_BASIC", "PERCEPTION", "ROW", "SAIL", "SWIM", "BRIBERY",
            "CHARM", "INTIMIDATE", "GOSSIP", "LORE_RIVERWAYS", "RANGED_BLACKPOWDER"
        ],
        talents: ["CRIMINAL", "GUNNER", "FISHERMAN", "SEASONED_TRAVELLER"]
    },
    RIVERWARDEN_3: {
        name: "Shipsword",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["BALS" /* Stat.BALS */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "MELEE_BASIC", "PERCEPTION", "ROW", "SAIL", "SWIM", "BRIBERY",
            "CHARM", "INTIMIDATE", "GOSSIP", "LORE_RIVERWAYS", "RANGED_BLACKPOWDER", "CLIMB", "COOL", "INTUITION",
            "LEADERSHIP"
        ],
        talents: ["FEARLESS_WRECKERS", "HATRED_ANY", "PILOT", "SEA_LEGS"]
    },
    RIVERWARDEN_4: {
        name: "Shipsword Master",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["BALS" /* Stat.BALS */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "MELEE_BASIC", "PERCEPTION", "ROW", "SAIL", "SWIM", "BRIBERY",
            "CHARM", "INTIMIDATE", "GOSSIP", "LORE_RIVERWAYS", "RANGED_BLACKPOWDER", "CLIMB", "COOL", "INTUITION",
            "LEADERSHIP", "LORE_LAW", "NAVIGATION"
        ],
        talents: ["COMMANDING_PRESENCE", "KINGPIN", "MENACING", "ORIENTATION"]
    },
    // Riverwoman
    RIVERWOMAN_1: {
        name: "Greenfish",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "OUTDOOR_SURVIVAL", "ROW", "SWIM"
        ],
        talents: ["FISHERMAN", "GREGARIOUS", "STRIDER_MARSHES", "STRONG_SWIMMER"]
    },
    RIVERWOMAN_2: {
        name: "Riverwoman",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "OUTDOOR_SURVIVAL", "ROW", "SWIM",
            "GAMBLE", "LORE_LOCAL", "LORE_RIVERWAYS", "RANGED_ENTANGLING", "RANGED_THROWING", "SET_TRAP"
        ],
        talents: ["CRAFTSMAN_BOATBUILDER", "ROVER", "STRONG_BACK", "WATERMAN"]
    },
    RIVERWOMAN_3: {
        name: "Riverwise",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "OUTDOOR_SURVIVAL", "ROW", "SWIM",
            "GAMBLE", "LORE_LOCAL", "LORE_RIVERWAYS", "RANGED_ENTANGLING", "RANGED_THROWING", "SET_TRAP", "CHARM",
            "INTUITION", "MELEE_POLE_ARM", "PERCEPTION"
        ],
        talents: ["SAVANT_RIVERWAYS", "STOUT_HEARTED", "TENACIOUS", "VERY_STRONG"]
    },
    RIVERWOMAN_4: {
        name: "River Elder",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "OUTDOOR_SURVIVAL", "ROW", "SWIM",
            "GAMBLE", "LORE_LOCAL", "LORE_RIVERWAYS", "RANGED_ENTANGLING", "RANGED_THROWING", "SET_TRAP", "CHARM",
            "INTUITION", "MELEE_POLE_ARM", "PERCEPTION", "ENTERTAIN_STORYTELLING", "LORE_FOLKLORE"
        ],
        talents: ["MASTER_TRADESMAN_BOATBUILDER", "PUBLIC_SPEAKER", "SHARP", "STRONG_MINDED"]
    },
    // Seaman
    SEAMAN_1: {
        name: "Landsman",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: ["CLIMB", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "ROW", "MELEE_BRAWLING", "SAIL", "SWIM"],
        talents: ["FISHERMAN", "STRIDER_COASTAL", "STRONG_BACK", "STRONG_SWIMMER"]
    },
    SEAMAN_2: {
        name: "Seaman",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "ROW", "MELEE_BRAWLING", "SAIL", "SWIM", "ATHLETICS",
            "DODGE", "ENDURANCE", "ENTERTAIN_SINGING", "LANGUAGE_ANY", "MELEE_BASIC"
        ],
        talents: ["CATFALL", "SEA_LEGS", "SEASONED_TRAVELLER", "STRONG_LEGS"]
    },
    SEAMAN_3: {
        name: "Boatswain",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "ROW", "MELEE_BRAWLING", "SAIL", "SWIM", "ATHLETICS",
            "DODGE", "ENDURANCE", "ENTERTAIN_SINGING", "LANGUAGE_ANY", "MELEE_BASIC", "COOL", "LEADERSHIP",
            "PERCEPTION", "TRADE_CARPENTER"
        ],
        talents: ["OLD_SALT", "STRIKE_MIGHTY_BLOW", "TENACIOUS", "VERY_STRONG"]
    },
    SEAMAN_4: {
        name: "Ship's Master",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WEAS" /* Stat.WEAS */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "ROW", "MELEE_BRAWLING", "SAIL", "SWIM", "ATHLETICS",
            "DODGE", "ENDURANCE", "ENTERTAIN_SINGING", "LANGUAGE_ANY", "MELEE_BASIC", "COOL", "LEADERSHIP",
            "PERCEPTION", "TRADE_CARPENTER", "CHARM", "NAVIGATION"
        ],
        talents: ["ORIENTATION", "PILOT", "PUBLIC_SPEAKER", "SAVVY"]
    },
    // Smuggler
    SMUGGLER_1: {
        name: "River Runner",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "BRIBERY", "COOL", "CONSUME_ALCOHOL", "ROW", "SAIL", "STEALTH_RURAL", "STEALTH_URBAN",
            "SWIM"
        ],
        talents: ["CRIMINAL", "FISHERMAN", "STRIDER_MARSHES", "STRONG_BACK"]
    },
    SMUGGLER_2: {
        name: "Smuggler",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "BRIBERY", "COOL", "CONSUME_ALCOHOL", "ROW", "SAIL", "STEALTH_RURAL", "STEALTH_URBAN",
            "SWIM", "HAGGLE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "SECRET_SIGNS_SMUGGLER"
        ],
        talents: ["DEALMAKER", "ETIQUETTE_CRIMINALS", "WATERMAN", "VERY_STRONG"]
    },
    SMUGGLER_3: {
        name: "Master Smuggler",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "BRIBERY", "COOL", "CONSUME_ALCOHOL", "ROW", "SAIL", "STEALTH_RURAL", "STEALTH_URBAN",
            "SWIM", "HAGGLE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "SECRET_SIGNS_SMUGGLER",
            "EVALUATE", "INTIMIDATE", "INTUITION", "LORE_RIVERWAYS"
        ],
        talents: ["BRIBER", "FEARLESS_RIVERWARDENS", "PILOT", "STRONG_SWIMMER"]
    },
    SMUGGLER_4: {
        name: "Smuggler King",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "INTL" /* Stat.INTL */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "BRIBERY", "COOL", "CONSUME_ALCOHOL", "ROW", "SAIL", "STEALTH_RURAL", "STEALTH_URBAN",
            "SWIM", "HAGGLE", "GOSSIP", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "SECRET_SIGNS_SMUGGLER",
            "EVALUATE", "INTIMIDATE", "INTUITION", "LORE_RIVERWAYS", "LANGUAGE_ANY", "LEADERSHIP"
        ],
        talents: ["KINGPIN", "SAVVY", "STRIDER_COASTAL", "SEA_LEGS"]
    },
    // Stevedore
    STEVEDORE_1: {
        name: "Dockhand",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BASIC", "SWIM"
        ],
        talents: ["DIRTY_FIGHTING", "STRONG_BACK", "STURDY", "VERY_STRONG"]
    },
    STEVEDORE_2: {
        name: "Stevedore",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "STRG" /* Stat.STRG */],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BASIC", "SWIM",
            "BRIBERY", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTIMIDATE", "PERCEPTION", "STEALTH_URBAN"
        ],
        talents: ["CRIMINAL", "ETIQUETTE_GUILDERS", "STRONG_LEGS", "TENACIOUS"]
    },
    STEVEDORE_3: {
        name: "Foreman",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "STRG" /* Stat.STRG */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BASIC", "SWIM",
            "BRIBERY", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTIMIDATE", "PERCEPTION", "STEALTH_URBAN", "COOL",
            "EVALUATE", "INTUITION", "LEADERSHIP"
        ],
        talents: ["DEALMAKER", "EMBEZZLE", "ETIQUETTE_CRIMINALS", "PUBLIC_SPEAKER"]
    },
    STEVEDORE_4: {
        name: "Dock Master",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "STRG" /* Stat.STRG */, "WILL" /* Stat.WILL */, "INTL" /* Stat.INTL */],
        competences: [
            "ATHLETICS", "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "GOSSIP", "MELEE_BASIC", "SWIM",
            "BRIBERY", "ENTERTAIN_STORYTELLING", "GAMBLE", "INTIMIDATE", "PERCEPTION", "STEALTH_URBAN", "COOL",
            "EVALUATE", "INTUITION", "LEADERSHIP", "CHARM", "LORE_TAXES"
        ],
        talents: ["KINGPIN", "MENACING", "NUMISMATICS", "READ_WRITE"]
    },
    // Wrecker
    WRECKER_1: {
        name: "Cargo Scavenger",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "ROW", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "SWIM"
        ],
        talents: ["BREAK_AND_ENTER", "CRIMINAL", "FISHERMAN", "STRONG_BACK"]
    },
    WRECKER_2: {
        name: "Wrecker",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "ROW", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "SWIM",
            "BRIBERY", "COOL", "INTUITION", "NAVIGATION", "PERCEPTION", "SET_TRAP"
        ],
        talents: ["FLEE", "ROVER", "STRONG_SWIMMER", "TRAPPER"]
    },
    WRECKER_3: {
        name: "River Pirate",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "BALS" /* Stat.BALS */],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "ROW", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "SWIM",
            "BRIBERY", "COOL", "INTUITION", "NAVIGATION", "PERCEPTION", "SET_TRAP", "GOSSIP", "INTIMIDATE",
            "RANGED_CROSSBOW", "STEALTH_RURAL"
        ],
        talents: ["DIRTY_FIGHTING", "ETIQUETTE_CRIMINALS", "MENACING", "WATERMAN"]
    },
    WRECKER_4: {
        name: "Wrecker Captain",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "BALS" /* Stat.BALS */, "FELW" /* Stat.FELW */],
        competences: [
            "CLIMB", "CONSUME_ALCOHOL", "DODGE", "ENDURANCE", "ROW", "MELEE_BASIC", "OUTDOOR_SURVIVAL", "SWIM",
            "BRIBERY", "COOL", "INTUITION", "NAVIGATION", "PERCEPTION", "SET_TRAP", "GOSSIP", "INTIMIDATE",
            "RANGED_CROSSBOW", "STEALTH_RURAL", "LEADERSHIP", "LORE_RIVERWAYS"
        ],
        talents: ["FURIOUS_ASSAULT", "IN_FIGHTER", "PILOT", "WARRIOR_BORN"]
    },
    // --- ROGUE --- //
    // Bawd
    BAWD_1: {
        name: "Hustler",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: [
            "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "ENTERTAIN_ANY", "GAMBLE", "GOSSIP", "HAGGLE", "INTIMIDATE"
        ],
        talents: ["ATTRACTIVE", "ALLEY_CAT", "BLATHER", "GREGARIOUS"]
    },
    BAWD_2: {
        name: "Bawd",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */],
        competences: [
            "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "ENTERTAIN_ANY", "GAMBLE", "GOSSIP", "HAGGLE", "INTIMIDATE",
            "DODGE", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION"
        ],
        talents: ["AMBIDEXTROUS", "CAROUSER", "CRIMINAL", "RESISTANCE_DISEASE"]
    },
    BAWD_3: {
        name: "Procurer",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */],
        competences: [
            "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "ENTERTAIN_ANY", "GAMBLE", "GOSSIP", "HAGGLE", "INTIMIDATE",
            "DODGE", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "COOL", "EVALUATE",
            "LANGUAGE_ANY", "LORE_LAW"
        ],
        talents: ["DEALMAKER", "EMBEZZLE", "ETIQUETTE_ANY", "SUAVE"]
    },
    BAWD_4: {
        name: "Ringleader",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["AGIL" /* Stat.AGIL */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "INTL" /* Stat.INTL */],
        competences: [
            "BRIBERY", "CHARM", "CONSUME_ALCOHOL", "ENTERTAIN_ANY", "GAMBLE", "GOSSIP", "HAGGLE", "INTIMIDATE",
            "DODGE", "ENDURANCE", "INTUITION", "LORE_LOCAL", "MELEE_BASIC", "PERCEPTION", "COOL", "EVALUATE",
            "LANGUAGE_ANY", "LORE_LAW", "LEADERSHIP", "LORE_HERALDRY"
        ],
        talents: ["BRIBER", "KINGPIN", "NUMISMATICS", "SAVVY"]
    },
    // Charlatan
    CHARLATAN_1: {
        name: "Swindler",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "CHARM", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE",
            "SLEIGHT_OF_HAND"
        ],
        talents: ["CARDSHARP", "DICEMAN", "ETIQUETTE_ANY", "LUCK"]
    },
    CHARLATAN_2: {
        name: "Charlatan",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "CHARM", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE",
            "SLEIGHT_OF_HAND", "COOL", "DODGE", "ENTERTAIN_ACTING", "EVALUATE", "INTUITION", "PERCEPTION"
        ],
        talents: ["BLATHER", "CRIMINAL", "FAST_HANDS", "SECRET_IDENTITY"]
    },
    CHARLATAN_3: {
        name: "Con Artist",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "CHARM", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE",
            "SLEIGHT_OF_HAND", "COOL", "DODGE", "ENTERTAIN_ACTING", "EVALUATE", "INTUITION", "PERCEPTION",
            "LANGUAGE_THIEF", "LORE_HERALDRY", "PICK_LOCK", "SECRET_SIGNS_THIEF"
        ],
        talents: ["ATTRACTIVE", "CAT_TONGUED", "DEALMAKER", "READ_WRITE"]
    },
    CHARLATAN_4: {
        name: "Scoundrel",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["INIT" /* Stat.INIT */, "DEXT" /* Stat.DEXT */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "AGIL" /* Stat.AGIL */, "INTL" /* Stat.INTL */],
        competences: [
            "BRIBERY", "CONSUME_ALCOHOL", "CHARM", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "HAGGLE",
            "SLEIGHT_OF_HAND", "COOL", "DODGE", "ENTERTAIN_ACTING", "EVALUATE", "INTUITION", "PERCEPTION",
            "LANGUAGE_THIEF", "LORE_HERALDRY", "PICK_LOCK", "SECRET_SIGNS_THIEF", "LORE_GENEALOGY", "RESEARCH"
        ],
        talents: ["GREGARIOUS", "MASTER_OF_DISGUISE", "NOSE_FOR_TROUBLE", "SUAVE"]
    },
    // Fence
    FENCE_1: {
        name: "Broker",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */],
        competences: ["CHARM", "CONSUME_ALCOHOL", "DODGE", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC"],
        talents: ["ALLEY_CAT", "CARDSHARP", "DEALMAKER", "GREGARIOUS"]
    },
    FENCE_2: {
        name: "Fence",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "DODGE", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "COOL",
            "INTIMIDATE", "INTUITION", "PERCEPTION", "SECRET_SIGNS_THIEF", "TRADE_ENGRAVER"
        ],
        talents: ["CRIMINAL", "ETIQUETTE_CRIMINALS", "NUMISMATICS", "SAVVY"]
    },
    FENCE_3: {
        name: "Master Fence",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "DODGE", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "COOL",
            "INTIMIDATE", "INTUITION", "PERCEPTION", "SECRET_SIGNS_THIEF", "TRADE_ENGRAVER", "BRIBERY",
            "ENTERTAIN_STORYTELLING", "LORE_ART", "LORE_LOCAL"
        ],
        talents: ["KINGPIN", "STRIKE_TO_STUN", "SUAVE", "SUPER_NUMERATE"]
    },
    FENCE_4: {
        name: "Black Marketeer",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */, "WILL" /* Stat.WILL */],
        competences: [
            "CHARM", "CONSUME_ALCOHOL", "DODGE", "EVALUATE", "GAMBLE", "GOSSIP", "HAGGLE", "MELEE_BASIC", "COOL",
            "INTIMIDATE", "INTUITION", "PERCEPTION", "SECRET_SIGNS_THIEF", "TRADE_ENGRAVER", "BRIBERY",
            "ENTERTAIN_STORYTELLING", "LORE_ART", "LORE_LOCAL", "LORE_HERALDRY", "RESEARCH"
        ],
        talents: ["DIRTY_FIGHTING", "IRON_WILL", "MENACING", "BRIBER"]
    },
    // Grave Robber
    GRAVE_ROBBER_1: {
        name: "Body Snatcher",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */],
        competences: ["CLIMB", "COOL", "DODGE", "ENDURANCE", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_ANY"],
        talents: ["ALLEY_CAT", "CRIMINAL", "FLEE", "STRONG_BACK"]
    },
    GRAVE_ROBBER_2: {
        name: "Grave Robber",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "CLIMB", "COOL", "DODGE", "ENDURANCE", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_ANY", "BRIBERY",
            "DRIVE", "EVALUATE", "HAGGLE", "LORE_MEDICINE", "MELEE_BASIC"
        ],
        talents: ["BREAK_AND_ENTER", "NIGHT_VISION", "RESISTANCE_DISEASE", "VERY_STRONG"]
    },
    GRAVE_ROBBER_3: {
        name: "Tomb Robber",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */, "DEXT" /* Stat.DEXT */],
        competences: [
            "CLIMB", "COOL", "DODGE", "ENDURANCE", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_ANY", "BRIBERY",
            "DRIVE", "EVALUATE", "HAGGLE", "LORE_MEDICINE", "MELEE_BASIC", "LORE_HISTORY", "PICK_LOCK", "RESEARCH",
            "SET_TRAP"
        ],
        talents: ["READ_WRITE", "STRIKE_MIGHTY_BLOW", "TENACIOUS", "TUNNEL_RAT"]
    },
    GRAVE_ROBBER_4: {
        name: "Treasure Hunter",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "WILL" /* Stat.WILL */, "WEAS" /* Stat.WEAS */, "DEXT" /* Stat.DEXT */, "INTL" /* Stat.INTL */],
        competences: [
            "CLIMB", "COOL", "DODGE", "ENDURANCE", "GOSSIP", "INTUITION", "PERCEPTION", "STEALTH_ANY", "BRIBERY",
            "DRIVE", "EVALUATE", "HAGGLE", "LORE_MEDICINE", "MELEE_BASIC", "LORE_HISTORY", "PICK_LOCK", "RESEARCH",
            "SET_TRAP", "NAVIGATION", "TRADE_ENGINEER"
        ],
        talents: ["FEARLESS_UNDEAD", "SIXTH_SENSE", "STRONG_MINDED", "TRAPPER"]
    },
    // Outlaw
    OUTLAW_1: {
        name: "Brigand",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_BASIC",
            "OUTDOOR_SURVIVAL"
        ],
        talents: ["COMBAT_AWARE", "CRIMINAL", "ROVER", "FLEE"]
    },
    OUTLAW_2: {
        name: "Outlaw",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "BALS" /* Stat.BALS */],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_BASIC",
            "OUTDOOR_SURVIVAL", "DODGE", "HEAL", "LORE_LOCAL", "PERCEPTION", "RANGED_BOW", "STEALTH_RURAL"
        ],
        talents: ["DIRTY_FIGHTING", "MARKSMAN", "STRIKE_TO_STUN", "TRAPPER"]
    },
    OUTLAW_3: {
        name: "Outlaw Chief",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "BALS" /* Stat.BALS */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_BASIC",
            "OUTDOOR_SURVIVAL", "DODGE", "HEAL", "LORE_LOCAL", "PERCEPTION", "RANGED_BOW", "STEALTH_RURAL",
            "GOSSIP", "INTUITION", "LEADERSHIP", "RIDE_HORSE"
        ],
        talents: ["RAPID_RELOAD", "ROUGHRIDER", "MENACING", "VERY_RESILIENT"]
    },
    OUTLAW_4: {
        name: "Bandit King",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "BALS" /* Stat.BALS */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CONSUME_ALCOHOL", "COOL", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_BASIC",
            "OUTDOOR_SURVIVAL", "DODGE", "HEAL", "LORE_LOCAL", "PERCEPTION", "RANGED_BOW", "STEALTH_RURAL",
            "GOSSIP", "INTUITION", "LEADERSHIP", "RIDE_HORSE", "CHARM", "LORE_EMPIRE"
        ],
        talents: ["DEADEYE_SHOT", "FEARLESS_ROAD_WARDENS", "IRON_WILL", "ROBUST"]
    },
    // Racketeer
    RACKETEER_1: {
        name: "Thug",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LORE_LOCAL", "MELEE_BRAWLING",
            "STEALTH_URBAN"
        ],
        talents: ["CRIMINAL", "ETIQUETTE_CRIMINALS", "MENACING", "STRIKE_MIGHTY_BLOW"]
    },
    RACKETEER_2: {
        name: "Racketeer",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "FELW" /* Stat.FELW */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LORE_LOCAL", "MELEE_BRAWLING",
            "STEALTH_URBAN", "BRIBERY", "CHARM", "EVALUATE", "GOSSIP", "LANGUAGE_ESTALIAN", "LANGUAGE_TILEAN",
            "MELEE_BASIC"
        ],
        talents: ["DIRTY_FIGHTING", "EMBEZZLE", "STRIKE_TO_STUN", "WARRIOR_BORN"]
    },
    RACKETEER_3: {
        name: "Gang Boss",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LORE_LOCAL", "MELEE_BRAWLING",
            "STEALTH_URBAN", "BRIBERY", "CHARM", "EVALUATE", "GOSSIP", "LANGUAGE_ESTALIAN", "LANGUAGE_TILEAN",
            "MELEE_BASIC", "INTUITION", "LEADERSHIP", "PERCEPTION", "RANGED_CROSSBOW"
        ],
        talents: ["FEARLESS_WATCHMEN", "IRON_WILL", "RESISTANCE_POISON", "ROBUST"]
    },
    RACKETEER_4: {
        name: "Crime Lord",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "FELW" /* Stat.FELW */, "WILL" /* Stat.WILL */, "INTL" /* Stat.INTL */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LORE_LOCAL", "MELEE_BRAWLING",
            "STEALTH_URBAN", "BRIBERY", "CHARM", "EVALUATE", "GOSSIP", "LANGUAGE_ESTALIAN", "LANGUAGE_TILEAN",
            "MELEE_BASIC", "INTUITION", "LEADERSHIP", "PERCEPTION", "RANGED_CROSSBOW", "LORE_LAW", "LORE_POLITICS"
        ],
        talents: ["COMMANDING_PRESENCE", "KINGPIN", "FRIGHTENING", "WEALTHY"]
    },
    // Thief
    THIEF_1: {
        name: "Prowler",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_URBAN"
        ],
        talents: ["ALLEY_CAT", "CRIMINAL", "FLEE", "STRIKE_TO_STUN"]
    },
    THIEF_2: {
        name: "Thief",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "DEXT" /* Stat.DEXT */],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_URBAN",
            "EVALUATE", "GOSSIP", "LORE_LOCAL", "PICK_LOCK", "SECRET_SIGNS_THIEF", "SLEIGHT_OF_HAND"
        ],
        talents: ["BREAK_AND_ENTER", "ETIQUETTE_CRIMINALS", "FAST_HANDS", "SHADOW"]
    },
    THIEF_3: {
        name: "Master Thief",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "DEXT" /* Stat.DEXT */, "STRG" /* Stat.STRG */],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_URBAN",
            "EVALUATE", "GOSSIP", "LORE_LOCAL", "PICK_LOCK", "SECRET_SIGNS_THIEF", "SLEIGHT_OF_HAND", "BRIBERY",
            "GAMBLE", "INTIMIDATE", "RANGED_CROSSBOW"
        ],
        talents: ["NIGHT_VISION", "NIMBLE_FINGERED", "STEP_ASIDE", "TRAPPER"]
    },
    THIEF_4: {
        name: "Cat Burglar",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WILL" /* Stat.WILL */, "DEXT" /* Stat.DEXT */, "STRG" /* Stat.STRG */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "INTUITION", "PERCEPTION", "STEALTH_URBAN",
            "EVALUATE", "GOSSIP", "LORE_LOCAL", "PICK_LOCK", "SECRET_SIGNS_THIEF", "SLEIGHT_OF_HAND", "BRIBERY",
            "GAMBLE", "INTIMIDATE", "RANGED_CROSSBOW", "CHARM", "SET_TRAP"
        ],
        talents: ["CATFALL", "SCLA_SHEER_SURFACE", "STRONG_LEGS", "WEALTHY"]
    },
    // Witch
    WITCH_1: {
        name: "Hexer",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: [
            "CHANNELLING_ANY", "COOL", "ENDURANCE", "GOSSIP", "INTIMIDATE", "LANGUAGE_MAGICK", "SLEIGHT_OF_HAND",
            "STEALTH_RURAL"
        ],
        talents: ["CRIMINAL", "INSTINCTIVE_DICTION", "MENACING", "PETTY_MAGIC"]
    },
    WITCH_2: {
        name: "Witch",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */],
        competences: [
            "CHANNELLING_ANY", "COOL", "ENDURANCE", "GOSSIP", "INTIMIDATE", "LANGUAGE_MAGICK", "SLEIGHT_OF_HAND",
            "STEALTH_RURAL", "CHARM_ANIMAL", "DODGE", "INTUITION", "MELEE_POLE_ARM", "PERCEPTION", "TRADE_HERBALIST"
        ],
        talents: ["ARCANE_MAGIC_WITCHERY", "ATTRACTIVE", "SECOND_SIGHT", "WITCH"]
    },
    WITCH_3: {
        name: "Wyrd",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "CHANNELLING_ANY", "COOL", "ENDURANCE", "GOSSIP", "INTIMIDATE", "LANGUAGE_MAGICK", "SLEIGHT_OF_HAND",
            "STEALTH_RURAL", "CHARM_ANIMAL", "DODGE", "INTUITION", "MELEE_POLE_ARM", "PERCEPTION",
            "TRADE_HERBALIST", "BRIBERY", "CHARM", "HAGGLE", "LORE_DARK_MAGIC"
        ],
        talents: ["ANIMAL_AFFINITY", "FAST_HANDS", "FRIGHTENING", "MAGICAL_SENSE"]
    },
    WITCH_4: {
        name: "Warlock",
        level: 4,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */, "INTL" /* Stat.INTL */],
        competences: [
            "CHANNELLING_ANY", "COOL", "ENDURANCE", "GOSSIP", "INTIMIDATE", "LANGUAGE_MAGICK", "SLEIGHT_OF_HAND",
            "STEALTH_RURAL", "CHARM_ANIMAL", "DODGE", "INTUITION", "MELEE_POLE_ARM", "PERCEPTION",
            "TRADE_HERBALIST", "BRIBERY", "CHARM", "HAGGLE", "LORE_DARK_MAGIC", "LORE_DEMONOLOGY", "LORE_MAGIC"
        ],
        talents: ["AETHYRIC_ATTUNEMENT", "LUCK", "STRONG_MINDED", "VERY_RESILIENT"]
    },
    // --- WARRIOR --- //
    // Cavalryman
    CAVALRYMAN_1: {
        name: "Horseman",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "RIDE_HORSE"
        ],
        talents: ["COMBAT_AWARE", "CRACK_THE_WHIP", "LIGHTNING_REFLEXES", "ROUGHRIDER"]
    },
    CAVALRYMAN_2: {
        name: "Cavalryman",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "RIDE_HORSE", "CHARM", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "MELEE_CAVALRY",
            "RANGED_BLACKPOWDER"
        ],
        talents: ["ETIQUETTE_SOLDIERS", "GUNNER", "SEASONED_TRAVELLER", "TRICK_RIDING"]
    },
    CAVALRYMAN_3: {
        name: "Cavalry Sergeant",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */, "INIT" /* Stat.INIT */],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "RIDE_HORSE", "CHARM", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "MELEE_CAVALRY",
            "RANGED_BLACKPOWDER", "INTIMIDATE", "INTUITION", "LEADERSHIP", "LORE_WAR"
        ],
        talents: ["COMBAT_REFLEXES", "FAST_SHOT", "HATRED_ANY", "WAR_LEADER"]
    },
    CAVALRYMAN_4: {
        name: "Cavalry Officer",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "AGIL" /* Stat.AGIL */, "BALS" /* Stat.BALS */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "ANIMAL_CARE", "CHARM_ANIMAL", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "OUTDOOR_SURVIVAL",
            "PERCEPTION", "RIDE_HORSE", "CHARM", "CONSUME_ALCOHOL", "COOL", "GOSSIP", "MELEE_CAVALRY",
            "RANGED_BLACKPOWDER", "INTIMIDATE", "INTUITION", "LEADERSHIP", "LORE_WAR", "GAMBLE", "LORE_HERALDRY"
        ],
        talents: ["ACCURATE_SHOT", "INSPIRING", "REACTION_STRIKE", "ROBUST"]
    },
    // Guard
    GUARD_1: {
        name: "Sentry",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "INTUITION",
            "MELEE_BASIC", "PERCEPTION"
        ],
        talents: ["DICEMAN", "ETIQUETTE_SERVANTS", "STRIKE_TO_STUN", "TENACIOUS"]
    },
    GUARD_2: {
        name: "Guard",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "INTUITION",
            "MELEE_BASIC", "PERCEPTION", "ATHLETICS", "COOL", "DODGE", "INTIMIDATE", "MELEE_POLE_ARM", "RANGED_BOW"
        ],
        talents: ["RELENTLESS", "REVERSAL", "SHIELDSMAN", "STRIKE_MIGHTY_BLOW"]
    },
    GUARD_3: {
        name: "Honour Guard",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "STRG" /* Stat.STRG */],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "INTUITION",
            "MELEE_BASIC", "PERCEPTION", "ATHLETICS", "COOL", "DODGE", "INTIMIDATE", "MELEE_POLE_ARM", "RANGED_BOW",
            "HEAL", "LANGUAGE_BATTLE", "LORE_ETIQUETTE", "MELEE_TWO_HANDED"
        ],
        talents: ["FEARLESS_INTRUDERS", "JUMP_UP", "STOUT_HEARTED", "UNSHAKABLE"]
    },
    GUARD_4: {
        name: "Guard Officer",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "STRG" /* Stat.STRG */, "INTL" /* Stat.INTL */],
        competences: [
            "CONSUME_ALCOHOL", "ENDURANCE", "ENTERTAIN_STORYTELLING", "GAMBLE", "GOSSIP", "INTUITION",
            "MELEE_BASIC", "PERCEPTION", "ATHLETICS", "COOL", "DODGE", "INTIMIDATE", "MELEE_POLE_ARM", "RANGED_BOW",
            "HEAL", "LANGUAGE_BATTLE", "LORE_ETIQUETTE", "MELEE_TWO_HANDED", "LEADERSHIP", "LORE_WAR"
        ],
        talents: ["COMBAT_MASTER", "FURIOUS_ASSAULT", "IRON_WILL", "ROBUST"]
    },
    // Knight
    KNIGHT_1: {
        name: "Squire",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ATHLETICS", "ANIMAL_CARE", "CHARM_ANIMAL", "HEAL", "LORE_HERALDRY", "MELEE_CAVALRY", "RIDE_HORSE",
            "TRADE_FARRIER"
        ],
        talents: ["ETIQUETTE_ANY", "ROUGHRIDER", "STURDY", "WARRIOR_BORN"]
    },
    KNIGHT_2: {
        name: "Knight",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */],
        competences: [
            "ATHLETICS", "ANIMAL_CARE", "CHARM_ANIMAL", "HEAL", "LORE_HERALDRY", "MELEE_CAVALRY", "RIDE_HORSE",
            "TRADE_FARRIER", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LANGUAGE_BATTLE", "MELEE_ANY"
        ],
        talents: ["MENACING", "SEASONED_TRAVELLER", "SHIELDSMAN", "STRIKE_MIGHTY_BLOW"]
    },
    KNIGHT_3: {
        name: "First Knight",
        level: 3,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "ANIMAL_CARE", "CHARM_ANIMAL", "HEAL", "LORE_HERALDRY", "MELEE_CAVALRY", "RIDE_HORSE",
            "TRADE_FARRIER", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LANGUAGE_BATTLE", "MELEE_ANY", "CHARM",
            "CONSUME_ALCOHOL", "LEADERSHIP", "LORE_WAR"
        ],
        talents: ["FEARLESS_ANY", "STOUT_HEARTED", "UNSHAKABLE", "WAR_LEADER"]
    },
    KNIGHT_4: {
        name: "Knight of the Inner Circle",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 4 },
        improvableStats: ["STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "WEAS" /* Stat.WEAS */, "WILL" /* Stat.WILL */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "ANIMAL_CARE", "CHARM_ANIMAL", "HEAL", "LORE_HERALDRY", "MELEE_CAVALRY", "RIDE_HORSE",
            "TRADE_FARRIER", "COOL", "DODGE", "ENDURANCE", "INTIMIDATE", "LANGUAGE_BATTLE", "MELEE_ANY", "CHARM",
            "CONSUME_ALCOHOL", "LEADERSHIP", "LORE_WAR", "LORE_ANY", "SECRET_SIGNS_KNIGHTLY_ORDER"
        ],
        talents: ["DISARM", "INSPIRING", "IRON_WILL", "STRIKE_TO_INJURE"]
    },
    // Pit Fighter
    PIT_FIGHTER_1: {
        name: "Pugilist",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 4 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */],
        competences: [
            "ATHLETICS", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_ANY", "MELEE_BRAWLING"
        ],
        talents: ["DIRTY_FIGHTING", "IN_FIGHTER", "IRON_JAWS", "REVERSAL"]
    },
    PIT_FIGHTER_2: {
        name: "Pit Fighter",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_ANY", "MELEE_BRAWLING",
            "HAGGLE", "INTUITION", "MELEE_BASIC", "MELEE_FLAIL", "MELEE_TWO_HANDED", "PERCEPTION",
            "RANGED_ENTANGLING"
        ],
        talents: ["AMBIDEXTROUS", "COMBAT_REFLEXES", "DUAL_WIELDER", "SHIELDSMAN"]
    },
    PIT_FIGHTER_3: {
        name: "Pit Champion",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ATHLETICS", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_ANY", "MELEE_BRAWLING",
            "HAGGLE", "INTUITION", "MELEE_BASIC", "MELEE_FLAIL", "MELEE_TWO_HANDED", "PERCEPTION",
            "RANGED_ENTANGLING", "CONSUME_ALCOHOL", "GOSSIP", "LORE_ANATOMY", "PERFORM_FIGHT"
        ],
        talents: ["COMBAT_MASTER", "DISARM", "MENACING", "ROBUST"]
    },
    PIT_FIGHTER_4: {
        name: "Pit Legend",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "TOUG" /* Stat.TOUG */, "INIT" /* Stat.INIT */, "AGIL" /* Stat.AGIL */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "INTIMIDATE", "MELEE_ANY", "MELEE_BRAWLING",
            "HAGGLE", "INTUITION", "MELEE_BASIC", "MELEE_FLAIL", "MELEE_TWO_HANDED", "PERCEPTION",
            "RANGED_ENTANGLING", "CONSUME_ALCOHOL", "GOSSIP", "LORE_ANATOMY", "PERFORM_FIGHT", "CHARM", "RANGED_ANY"
        ],
        talents: ["FRIGHTENING", "FURIOUS_ASSAULT", "IMPLACABLE", "REACTION_STRIKE"]
    },
    // Protagonist
    PROTAGONIST_1: {
        name: "Braggart",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "ENTERTAIN_TAUNT", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_ANY"
        ],
        talents: ["IN_FIGHTER", "DIRTY_FIGHTING", "MENACING", "WARRIOR_BORN"]
    },
    PROTAGONIST_2: {
        name: "Protagonist",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "ENTERTAIN_TAUNT", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_ANY",
            "BRIBERY", "CHARM", "INTUITION", "MELEE_BASIC", "PERCEPTION", "RIDE_HORSE"
        ],
        talents: ["COMBAT_REFLEXES", "CRIMINAL", "REVERSAL", "STRIKE_TO_STUN"]
    },
    PROTAGONIST_3: {
        name: "Hitman",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "BALS" /* Stat.BALS */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "ENTERTAIN_TAUNT", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_ANY",
            "BRIBERY", "CHARM", "INTUITION", "MELEE_BASIC", "PERCEPTION", "RIDE_HORSE", "CLIMB", "COOL",
            "NAVIGATION", "RANGED_THROWING"
        ],
        talents: ["CAREFUL_STRIKE", "DISARM", "MARKSMAN", "RELENTLESS"]
    },
    PROTAGONIST_4: {
        name: "Assassin",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */, "BALS" /* Stat.BALS */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "DODGE", "ENDURANCE", "ENTERTAIN_TAUNT", "GOSSIP", "HAGGLE", "INTIMIDATE", "MELEE_ANY",
            "BRIBERY", "CHARM", "INTUITION", "MELEE_BASIC", "PERCEPTION", "RIDE_HORSE", "CLIMB", "COOL",
            "NAVIGATION", "RANGED_THROWING", "ENTERTAIN_ACTING", "RANGED_CROSSBOW"
        ],
        talents: ["ACCURATE_SHOT", "AMBIDEXTROUS", "FURIOUS_ASSAULT", "STRIKE_TO_INJURE"]
    },
    // Slayer
    SLAYER_1: {
        name: "Troll Slayer",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "WILL" /* Stat.WILL */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "HEAL", "LORE_TROLLS", "MELEE_BASIC"
        ],
        talents: ["DUAL_WIELDER", "FEARLESS_EVERYTHING", "FRENZY", "SLAYER"]
    },
    SLAYER_2: {
        name: "Giant Slayer",
        level: 2,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "WILL" /* Stat.WILL */, "TOUG" /* Stat.TOUG */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "HEAL", "LORE_TROLLS", "MELEE_BASIC",
            "EVALUATE", "INTIMIDATE", "LANGUAGE_BATTLE", "LORE_GIANTS", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL"
        ],
        talents: ["HARDY", "IMPLACABLE", "MENACING", "REVERSAL"]
    },
    SLAYER_3: {
        name: "Dragon Slayer",
        level: 3,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "WILL" /* Stat.WILL */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "HEAL", "LORE_TROLLS", "MELEE_BASIC",
            "EVALUATE", "INTIMIDATE", "LANGUAGE_BATTLE", "LORE_GIANTS", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL",
            "ENTERTAIN_STORYTELLING", "LORE_DRAGONS", "PERCEPTION", "RANGED_THROWING"
        ],
        talents: ["AMBIDEXTROUS", "FURIOUS_ASSAULT", "RELENTLESS", "ROBUST"]
    },
    SLAYER_4: {
        name: "Daemon Slayer",
        level: 4,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "STRG" /* Stat.STRG */, "WILL" /* Stat.WILL */, "TOUG" /* Stat.TOUG */, "AGIL" /* Stat.AGIL */, "INIT" /* Stat.INIT */],
        competences: [
            "CONSUME_ALCOHOL", "COOL", "DODGE", "ENDURANCE", "GAMBLE", "HEAL", "LORE_TROLLS", "MELEE_BASIC",
            "EVALUATE", "INTIMIDATE", "LANGUAGE_BATTLE", "LORE_GIANTS", "MELEE_TWO_HANDED", "OUTDOOR_SURVIVAL",
            "ENTERTAIN_STORYTELLING", "LORE_DRAGONS", "PERCEPTION", "RANGED_THROWING", "INTUITION", "LORE_CHAOS"
        ],
        talents: ["COMBAT_MASTER", "FRIGHTENING", "STRIKE_MIGHTY_BLOW", "VERY_STRONG"]
    },
    // Soldier
    SOLDIER_1: {
        name: "Recruit",
        level: 1,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "PLAY_DRUM",
            "PLAY_FIFE"
        ],
        talents: ["DICEMAN", "MARKSMAN", "STRONG_BACK", "WARRIOR_BORN"]
    },
    SOLDIER_2: {
        name: "Soldier",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "BALS" /* Stat.BALS */],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "PLAY_DRUM",
            "PLAY_FIFE", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "MELEE_ANY", "RANGED_ANY", "OUTDOOR_SURVIVAL"
        ],
        talents: ["DRILLED", "ETIQUETTE_SOLDIERS", "RAPID_RELOAD", "SHIELDSMAN"]
    },
    SOLDIER_3: {
        name: "Sergeant",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 5 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "BALS" /* Stat.BALS */, "INIT" /* Stat.INIT */],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "PLAY_DRUM",
            "PLAY_FIFE", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "MELEE_ANY", "RANGED_ANY", "OUTDOOR_SURVIVAL",
            "HEAL", "INTUITION", "LEADERSHIP", "PERCEPTION"
        ],
        talents: ["COMBAT_AWARE", "ENCLOSED_FIGHTER", "UNSHAKABLE", "WAR_LEADER"]
    },
    SOLDIER_4: {
        name: "Officer",
        level: 4,
        status: { tier: "Gold" /* CareerStatusTier.GOLD */, level: 1 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "BALS" /* Stat.BALS */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "ATHLETICS", "CLIMB", "COOL", "DODGE", "ENDURANCE", "LANGUAGE_BATTLE", "MELEE_BASIC", "PLAY_DRUM",
            "PLAY_FIFE", "CONSUME_ALCOHOL", "GAMBLE", "GOSSIP", "MELEE_ANY", "RANGED_ANY", "OUTDOOR_SURVIVAL",
            "HEAL", "INTUITION", "LEADERSHIP", "PERCEPTION", "LORE_WAR", "NAVIGATION"
        ],
        talents: ["INSPIRING", "PUBLIC_SPEAKER", "SEASONED_TRAVELLER", "STOUT_HEARTED"]
    },
    // Warrior Priest
    WARRIOR_PRIEST_1: {
        name: "Novitiate",
        level: 1,
        status: { tier: "Brass" /* CareerStatusTier.BRASS */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */],
        competences: ["COOL", "DODGE", "ENDURANCE", "HEAL", "LEADERSHIP", "LORE_THEOLOGY", "MELEE_ANY", "PRAY"],
        talents: ["BLESS_ANY", "ETIQUETTE_CULTISTS", "READ_WRITE", "STRONG_MINDED"]
    },
    WARRIOR_PRIEST_2: {
        name: "Warrior Priest",
        level: 2,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 2 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "STRG" /* Stat.STRG */],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "HEAL", "LEADERSHIP", "LORE_THEOLOGY", "MELEE_ANY", "PRAY", "CHARM",
            "ENTERTAIN_SPEECHES", "INTIMIDATE", "LANGUAGE_BATTLE", "RANGED_ANY"
        ],
        talents: ["DUAL_WIELDER", "INSPIRING", "INVOKE_ANY", "SEASONED_TRAVELLER"]
    },
    WARRIOR_PRIEST_3: {
        name: "Priest Sergeant",
        level: 3,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 3 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "HEAL", "LEADERSHIP", "LORE_THEOLOGY", "MELEE_ANY", "PRAY", "CHARM",
            "ENTERTAIN_SPEECHES", "INTIMIDATE", "LANGUAGE_BATTLE", "RANGED_ANY", "ANIMAL_CARE", "INTUITION",
            "PERCEPTION", "RIDE_HORSE"
        ],
        talents: ["COMBAT_AWARE", "HOLY_VISIONS", "PURE_SOUL", "STOUT_HEARTED"]
    },
    WARRIOR_PRIEST_4: {
        name: "Priest Captain",
        level: 4,
        status: { tier: "Silver" /* CareerStatusTier.SILVER */, level: 4 },
        improvableStats: ["WEAS" /* Stat.WEAS */, "TOUG" /* Stat.TOUG */, "WILL" /* Stat.WILL */, "STRG" /* Stat.STRG */, "INIT" /* Stat.INIT */, "FELW" /* Stat.FELW */],
        competences: [
            "COOL", "DODGE", "ENDURANCE", "HEAL", "LEADERSHIP", "LORE_THEOLOGY", "MELEE_ANY", "PRAY", "CHARM",
            "ENTERTAIN_SPEECHES", "INTIMIDATE", "LANGUAGE_BATTLE", "RANGED_ANY", "ANIMAL_CARE", "INTUITION",
            "PERCEPTION", "RIDE_HORSE", "CONSUME_ALCOHOL", "LORE_WAR"
        ],
        talents: ["FEARLESS_ANY", "FURIOUS_ASSAULT", "HOLY_HATRED", "WAR_LEADER"]
    },
};
// #endregion === CAREER SET === //
// === //
// #region ====== CAREER PATH LINKING === //
// Careers only know their path once it is linked, as paths reference them by ID
Object.keys(TEW.DATABASE.CAREERS.PATHS).forEach((pathId) => {
    const path = TEW.DATABASE.CAREERS.PATHS[pathId];
    path.levels.forEach((pathLevel) => {
        TEW.DATABASE.CAREERS.SET[pathLevel.career].path = path;
    });
});
// #endregion === CAREER PATH LINKING === //
// === //
// #region ====== CAREER IDS === //
// The path IDs are the keys of the PATHS object, the career IDs those of the SET object
TEW.DATABASE.CAREERS.PATH_IDS = Object.keys(TEW.DATABASE.CAREERS.PATHS);
TEW.DATABASE.CAREERS.IDS = Object.keys(TEW.DATABASE.CAREERS.SET);
// #endregion === CAREER IDS === //
// #endregion =========================== TEW_Careers ============================== //
// ============================== //
// #region ============================== TEW_CharacterDescriptions ============================== //
// #region ====== CHARACTERS === //
TEW.DATABASE.CHARACTER_DESCRIPTIONS = [
    {
        id: 101,
        title: "Gustav Fondleburger",
        paragraphs: [
            {
                image: "gustav"
            },
            {
                content: "Gustav is 5'7\", bald, and has bushy grey side-whiskers and blue eyes. In his mid-fifties, he is a large and jolly fellow who always has plenty to say to everyone, whether or not they show any inclination to listen."
            },
            {
                content: "Gustav is the landlord of the Coach and Horses Inn, on the Middenheim road."
            },
            {
                content: "Most of Gustav's conversation revolves around ensuring his guests are well looked after, the state of the weather, the condition of the roads, and anything else that springs into his mind."
            }
        ]
    },
    {
        id: 102,
        title: "Herpin Stiggerwurt",
        paragraphs: [
            {
                image: "herpin"
            },
            {
                content: "Herpin has a thick Middenlander accent, greying mid-brown hair, and blue eyes. He is almost 30, but looks older. He’s tall, thin, and taciturn, and has no desire to make anyone feel welcome."
            },
            {
                content: "He hails from the nearby hamlet of Moersum, and is employed for his brewing skills and work ethic, not his interpersonal skills."
            }
        ]
    },
    {
        id: 103,
        title: "Gunnar and Hultz",
        paragraphs: [
            {
                image: "gunnar"
            },
            {
                content: "Sandy-haired Gunnar and dark-bearded Hultz are the coachmen for Ratchett Lines. Both men are of medium height; but Hultz, now in his 40s, is a good bit fatter."
            }
        ]
    },
    {
        id: 104,
        title: "Lady Isolde von Strudeldorf",
        paragraphs: [
            {
                image: "isolde"
            },
            {
                content: "A typical Drakwalder noblewoman, Lady Isolde von Strudeldorf is willowy with red-golden hair, green eyes, and a refined Reiklander noble accent."
            },
            {
                content: "She is young, headstrong, and covers her lack of confidence with an air of snobbishness. She dresses in the finest clothing and has a variety of unusual, elegant hats."
            }
        ]
    },
    {
        id: 105,
        title: "Janna Elleiner",
        paragraphs: [
            {
                image: "janna"
            },
            {
                content: "Only 16, Janna is thin with fine, mousy hair and blue-grey eyes."
            },
            {
                content: "She says very little, although sometimes Lady Isolde forces her to speak on her behalf. When this happens, she speaks with a soft Drakwalder accent, and looks deeply uncomfortable. For all her timidity, Janna is very good at her job."
            }
        ]
    },
    {
        id: 106,
        title: "Marie Schutz",
        paragraphs: [
            {
                image: "marie"
            },
            {
                content: "Like a Middenlander warrior-woman of legend, Marie is unusually tall, athletic, and muscular, and has thick, dark-blonde hair and ice-blue eyes."
            },
            {
                content: "In her early 30s, she wears dark, sombre clothing, and never smiles. Marie has worked for the von Strudeldorf family for 15 years, and is more than capable of looking after her Lady Isolde."
            }
        ]
    },
    {
        id: 107,
        title: "Ernst Heidlemann",
        paragraphs: [
            {
                image: "ernst"
            },
            {
                content: "In his early 20s, Heidlemann is of average height and is trying hard to grow a beard. He has lank, brown hair and paleblue eyes."
            }
        ]
    },
    {
        id: 108,
        title: "Phillipe Descartes",
        paragraphs: [
            {
                image: "phillipe"
            },
            {
                content: "Phillipe is from Parravon in Bretonnia, and has been travelling the Empire for six months. Now in his 40s, he was previously a mercenary sergeant in the army of a local duke"
            },
            {
                content: "He is tall, handsome, and wears a lace-trimmed shirt and embroidered jacket and breeches. He has long, dark curly hair and an artificial ‘beauty spot’ on his left cheek."
            }
        ]
    }
];
// #endregion =========================== TEW_CharacterDescriptions ============================== //
// ============================== //
// #region ============================== TEW_Competences ============================== //
// ----------------------
TEW.DATABASE.COMPS = {};
// #region ====== COMPS SET === //
TEW.DATABASE.COMPS.SET = {
    ANIMAL_CARE: {
        name: "Animal Care",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    ANIMAL_TRAINING: {
        name: "Animal Training",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    ANIMAL_TRAINING_DOG: {
        name: "Animal Training (Dog)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    ANIMAL_TRAINING_HORSE: {
        name: "Animal Training (Horse)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    ANIMAL_TRAINING_PIGEON: {
        name: "Animal Training (Pigeon)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    ART_CALLIGRAPHY: {
        name: "Art (Calligraphy)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ART_CARTOGRAPHY: {
        name: "Art (Cartography)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ART_ENGRAVING: {
        name: "Art (Engraving)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ART_ICONS: {
        name: "Art (Icons)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ART_MOSAICS: {
        name: "Art (Mosaics)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ART_SCULPTURE: {
        name: "Art (Sculpture)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ART_TATTOO: {
        name: "Art (Tattoo)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ART_WEAVING: {
        name: "Art (Weaving)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ART_WRITING: {
        name: "Art (Writing)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    ATHLETICS: {
        name: "Athletics",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: true
    },
    BRIBERY: {
        name: "Bribery",
        stat: "FELW" /* Stat.FELW */,
        isBase: true
    },
    CHANNELLING_AQSHY: {
        name: "Channelling (Aqshy)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_AZYR: {
        name: "Channelling (Azyr)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_CHAMON: {
        name: "Channelling (Chamon)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_DHAR: {
        name: "Channelling (Dhar)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_GHUR: {
        name: "Channelling (Ghur)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_GHYRAN: {
        name: "Channelling (Ghyran)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_HYSH: {
        name: "Channelling (Hysh)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_SHYISH: {
        name: "Channelling (Shyish)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHANNELLING_ULGU: {
        name: "Channelling (Ulgu)",
        stat: "WILL" /* Stat.WILL */,
        isBase: false
    },
    CHARM: {
        name: "Charm",
        stat: "FELW" /* Stat.FELW */,
        isBase: true
    },
    CHARM_ANIMAL: {
        name: "Charm Animal",
        stat: "WILL" /* Stat.WILL */,
        isBase: true
    },
    CLIMB: {
        name: "Climb",
        stat: "STRG" /* Stat.STRG */,
        isBase: true
    },
    CONSUME_ALCOHOL: {
        name: "Consume Alcohol",
        stat: "TOUG" /* Stat.TOUG */,
        isBase: true
    },
    COOL: {
        name: "Cool",
        stat: "WILL" /* Stat.WILL */,
        isBase: true
    },
    DODGE: {
        name: "Dodge",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: true
    },
    DRIVE: {
        name: "Drive",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: true
    },
    ENDURANCE: {
        name: "Endurance",
        stat: "TOUG" /* Stat.TOUG */,
        isBase: true
    },
    ENTERTAIN_ACTING: {
        name: "Entertain (Acting)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_COMEDY: {
        name: "Entertain (Comedy)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_FORTUNE_TELLING: {
        name: "Entertain (Fortune Telling)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_LECTURE: {
        name: "Entertain (Lecture)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_PROPHECY: {
        name: "Entertain (Prophecy)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_RHETORIC: {
        name: "Entertain (Rhetoric)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_SINGING: {
        name: "Entertain (Singing)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_SPEECHES: {
        name: "Entertain (Speeches)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_STORYTELLING: {
        name: "Entertain (Storytelling)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    ENTERTAIN_TAUNT: {
        name: "Entertain (Taunt)",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    EVALUATE: {
        name: "Evaluate",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    GAMBLE: {
        name: "Gamble",
        stat: "INTL" /* Stat.INTL */,
        isBase: true
    },
    GOSSIP: {
        name: "Gossip",
        stat: "FELW" /* Stat.FELW */,
        isBase: true
    },
    HAGGLE: {
        name: "Haggle",
        stat: "FELW" /* Stat.FELW */,
        isBase: true
    },
    HEAL: {
        name: "Heal",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    INTIMIDATE: {
        name: "Intimidate",
        stat: "STRG" /* Stat.STRG */,
        isBase: true
    },
    INTUITION: {
        name: "Intuition",
        stat: "INIT" /* Stat.INIT */,
        isBase: true
    },
    LANGUAGE_BATTLE: {
        name: "Language (Battle Tongue)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_BRETONNIAN: {
        name: "Language (Bretonnian)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_CLASSICAL: {
        name: "Language (Classical)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_ELTHARIN: {
        name: "Language (Eltharin)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_ESTALIAN: {
        name: "Language (Estalian)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_GUILDER: {
        name: "Language (Guilder)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_KHAZALID: {
        name: "Language (Khazalid)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_MAGICK: {
        name: "Language (Magick)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_MIDDENLANDER: {
        name: "Language (Middenlander)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_THIEF: {
        name: "Language (Thief)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_TILEAN: {
        name: "Language (Tilean)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LANGUAGE_WASTELANDER: {
        name: "Language (Wastelander)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LEADERSHIP: {
        name: "Leadership",
        stat: "FELW" /* Stat.FELW */,
        isBase: true
    },
    LORE_ANATOMY: {
        name: "Lore (Anatomy)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_ART: {
        name: "Lore (Art)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_ASTROLOGY: {
        name: "Lore (Astrology)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_BEASTS: {
        name: "Lore (Beasts)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_CHAOS: {
        name: "Lore (Chaos)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_CHEMISTRY: {
        name: "Lore (Chemistry)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_DARK_MAGIC: {
        name: "Lore (Dark Magic)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_DEMONOLOGY: {
        name: "Lore (Demonology)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_DRAGONS: {
        name: "Lore (Dragons)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_EMPIRE: {
        name: "Lore (Empire)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_ENGINEERING: {
        name: "Lore (Engineering)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_ETIQUETTE: {
        name: "Lore (Etiquette)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_FOLKLORE: {
        name: "Lore (Folklore)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_GENEALOGY: {
        name: "Lore (Genealogy)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_GEOGRAPHY: {
        name: "Lore (Geography)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_GEOLOGY: {
        name: "Lore (Geology)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_GIANTS: {
        name: "Lore (Giants)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_HERALDRY: {
        name: "Lore (Heraldry)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_HERBS: {
        name: "Lore (Herbs)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_HISTORY: {
        name: "Lore (History)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_LAW: {
        name: "Lore (Law)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_LOCAL: {
        name: "Lore (Local)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_MAGIC: {
        name: "Lore (Magic)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_MEDICINE: {
        name: "Lore (Medicine)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_MIDDENHEIM: {
        name: "Lore (Middenheim)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_MIDDENLAND: {
        name: "Lore (Middenland)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_MYRMIDIA: {
        name: "Lore (Myrmidia)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_NECROMANCY: {
        name: "Lore (Necromancy)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_NOBILITY: {
        name: "Lore (Nobility)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_PLANTS: {
        name: "Lore (Plants)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_POISON: {
        name: "Lore (Poison)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_POLITICS: {
        name: "Lore (Politics)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_PROPHECY: {
        name: "Lore (Prophecy)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_REIKLAND: {
        name: "Lore (Reikland)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_RIVERWAYS: {
        name: "Lore (Riverways)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_ROUTES: {
        name: "Lore (Routes)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_SCIENCE: {
        name: "Lore (Science)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_SIGMAR: {
        name: "Lore (Sigmar)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_SPIRITS: {
        name: "Lore (Spirits)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_TAXES: {
        name: "Lore (Taxes)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_THEOLOGY: {
        name: "Lore (Theology)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_TORTURE: {
        name: "Lore (Torture)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_TROLLS: {
        name: "Lore (Trolls)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_ULRIC: {
        name: "Lore (Ulric)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_WAR: {
        name: "Lore (War)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_WITCHES: {
        name: "Lore (Witches)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    LORE_WRECKS: {
        name: "Lore (Wrecks)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    MELEE_BASIC: {
        name: "Melee (Basic)",
        stat: "WEAS" /* Stat.WEAS */,
        isBase: true
    },
    MELEE_BRAWLING: {
        name: "Melee (Brawling)",
        stat: "WEAS" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_CAVALRY: {
        name: "Melee (Cavalry)",
        stat: "WEAS" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_FENCING: {
        name: "Melee (Fencing)",
        stat: "WEAS" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_FLAIL: {
        name: "Melee (Flail)",
        stat: "WEAS" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_PARRY: {
        name: "Melee (Parry)",
        stat: "WEAS" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_POLE_ARM: {
        name: "Melee (Pole-Arm)",
        stat: "WEAS" /* Stat.WEAS */,
        isBase: false
    },
    MELEE_TWO_HANDED: {
        name: "Melee (Two-Handed)",
        stat: "WEAS" /* Stat.WEAS */,
        isBase: false
    },
    NAVIGATION: {
        name: "Navigation",
        stat: "INIT" /* Stat.INIT */,
        isBase: true
    },
    OUTDOOR_SURVIVAL: {
        name: "Outdoor Survival",
        stat: "INTL" /* Stat.INTL */,
        isBase: true
    },
    PERCEPTION: {
        name: "Perception",
        stat: "INIT" /* Stat.INIT */,
        isBase: true
    },
    PERFORM_ACROBATICS: {
        name: "Perform (Acrobatics)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_CLOWNING: {
        name: "Perform (Clowning)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_DANCING: {
        name: "Perform (Dancing)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_FIGHT: {
        name: "Perform (Fight)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_FIREBREATHING: {
        name: "Perform (Firebreathing)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_JUGGLING: {
        name: "Perform (Juggling)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_MIMING: {
        name: "Perform (Miming)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    PERFORM_ROPE_WALKING: {
        name: "Perform (Rope Walking)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    PICK_LOCK: {
        name: "Pick Lock",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_BAGPIPE: {
        name: "Play (Bagpipe)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_DRUM: {
        name: "Play (Drum)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_FIFE: {
        name: "Play (Fife)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_FLUTE: {
        name: "Play (Flute)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_LUTE: {
        name: "Play (Lute)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_HARPSICHORD: {
        name: "Play (Harpsichord)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_HORN: {
        name: "Play (Horn)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PLAY_VIOLIN: {
        name: "Play (Violin)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    PRAY: {
        name: "Pray",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    PREY: {
        name: "Prey",
        stat: "FELW" /* Stat.FELW */,
        isBase: false
    },
    RANGED_BLACKPOWDER: {
        name: "Ranged (Blackpowder)",
        stat: "BALS" /* Stat.BALS */,
        isBase: false
    },
    RANGED_BOW: {
        name: "Ranged (Bow)",
        stat: "BALS" /* Stat.BALS */,
        isBase: false
    },
    RANGED_CROSSBOW: {
        name: "Ranged (Crossbow)",
        stat: "BALS" /* Stat.BALS */,
        isBase: false
    },
    RANGED_ENGINEERING: {
        name: "Ranged (Engineering)",
        stat: "BALS" /* Stat.BALS */,
        isBase: false
    },
    RANGED_ENTANGLING: {
        name: "Ranged (Entangling)",
        stat: "BALS" /* Stat.BALS */,
        isBase: false
    },
    RANGED_EXPLOSIVES: {
        name: "Ranged (Explosives)",
        stat: "BALS" /* Stat.BALS */,
        isBase: false
    },
    RANGED_SLING: {
        name: "Ranged (Sling)",
        stat: "BALS" /* Stat.BALS */,
        isBase: false
    },
    RANGED_THROWING: {
        name: "Ranged (Throwing)",
        stat: "BALS" /* Stat.BALS */,
        isBase: false
    },
    RESEARCH: {
        name: "Research",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    RIDE_BADGER: {
        name: "Ride (Badger)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    RIDE_HORSE: {
        name: "Ride (Horse)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    ROW: {
        name: "Row",
        stat: "STRG" /* Stat.STRG */,
        isBase: true
    },
    SAIL: {
        name: "Sail",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    SECRET_SIGNS_GUILD: {
        name: "Secret Signs (Guild)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_HUNTER: {
        name: "Secret Signs (Hunter)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_KNIGHTLY_ORDER: {
        name: "Secret Signs (Knightly Order)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_MINER: {
        name: "Secret Signs (Miner)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_RANGER: {
        name: "Secret Signs (Ranger)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_SCOUT: {
        name: "Secret Signs (Scout)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_SMUGGLER: {
        name: "Secret Signs (Smuggler)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_THIEF: {
        name: "Secret Signs (Thief)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SECRET_SIGNS_VAGABOND: {
        name: "Secret Signs (Vagabond)",
        stat: "INTL" /* Stat.INTL */,
        isBase: false
    },
    SET_TRAP: {
        name: "Set Trap",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    SLEIGHT_OF_HAND: {
        name: "Sleight Of Hand",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    STEALTH: {
        name: "Stealth",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: true
    },
    STEALTH_RURAL: {
        name: "Stealth (Rural)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    STEALTH_UNDERGROUND: {
        name: "Stealth (Underground)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    STEALTH_URBAN: {
        name: "Stealth (Urban)",
        stat: "AGIL" /* Stat.AGIL */,
        isBase: false
    },
    SWIM: {
        name: "Swim",
        stat: "STRG" /* Stat.STRG */,
        isBase: false
    },
    TRACK: {
        name: "Track",
        stat: "INIT" /* Stat.INIT */,
        isBase: false
    },
    TRADE_ALCHEMIST: {
        name: "Trade (Alchemist)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_APOTHECARY: {
        name: "Trade (Apothecary)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_ART_SUPPLIES: {
        name: "Trade (Art Supplies)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_BARBER: {
        name: "Trade (Barber)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_BLACKSMITH: {
        name: "Trade (Blacksmith)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_BOATBUILDING: {
        name: "Trade (Boatbuilding)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_BREWING: {
        name: "Trade (Brewing)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_CALLIGRAPHER: {
        name: "Trade (Calligrapher)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_CARTOGRAPHER: {
        name: "Trade (Cartographer)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_CHANDLER: {
        name: "Trade (Chandler)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_CARPENTER: {
        name: "Trade (Carpenter)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_CHARMS: {
        name: "Trade (Charms)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_COOK: {
        name: "Trade (Cook)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_EMBALMER: {
        name: "Trade (Embalmer)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_ENGINEER: {
        name: "Trade (Engineer)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_ENGRAVER: {
        name: "Trade (Engraver)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_EXPLOSIVES: {
        name: "Trade (Explosives)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_FARRIER: {
        name: "Trade (Farrier)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_FLETCHER: {
        name: "Trade (Fletcher)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_GOLDSMITH: {
        name: "Trade (Goldsmith)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_GUNSMITH: {
        name: "Trade (Gunsmith)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_HERBALIST: {
        name: "Trade (Herbalist)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_POISONER: {
        name: "Trade (Poisoner)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_PRINTING: {
        name: "Trade (Printing)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_TANNER: {
        name: "Trade (Tanner)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_TINKER: {
        name: "Trade (Tinker)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
    TRADE_VINTNER: {
        name: "Trade (Vintner)",
        stat: "DEXT" /* Stat.DEXT */,
        isBase: false
    },
};
// #endregion === COMPS SET === //
// === //
// #region ====== COMPS IDS === //
// The IDs are the keys of the SET object
TEW.DATABASE.COMPS.IDS = Object.keys(TEW.DATABASE.COMPS.SET);
// #endregion === COMPS IDS === //
// === //
// #region ====== COMPS ARRAYS === //
// Those are 2 2D arrays, where the first element is the key and the second element is the value
TEW.DATABASE.COMPS.BASE_ARRAY = Object.keys(TEW.DATABASE.COMPS.SET)
    .filter((comp) => TEW.DATABASE.COMPS.SET[comp].isBase)
    .sort((a, b) => a.localeCompare(b))
    .map(comp => [comp, TEW.DATABASE.COMPS.SET[comp]]);
TEW.DATABASE.COMPS.ADVANCED_ARRAY = Object.keys(TEW.DATABASE.COMPS.SET)
    .filter((comp) => !TEW.DATABASE.COMPS.SET[comp].isBase)
    .sort((a, b) => a.localeCompare(b))
    .map(comp => [comp, TEW.DATABASE.COMPS.SET[comp]]);
// #endregion === COMPS ARRAYS === //
// #endregion =========================== TEW_Competences ============================== //
// ============================== //
// #region ============================== TEW_Conditions ============================== //
// ----------------------
// #region ====== CONDITIONS SET === //
TEW.DATABASE.CONDITIONS = {
    // ---------------------------------------------------------------------------
    // ABLAZE — Le personnage est en feu.
    // Reçoit 1 blessure par pile au début de son tour (ignorant les armures).
    // Peut se retirer en dépensant son Action (test d'Athlétisme TN 0).
    // ---------------------------------------------------------------------------
    ABLAZE: {
        id: "ABLAZE" /* ConditionId.ABLAZE */,
        name: "Ablaze",
        icon: 64,
        message: "burned",
        description: "You are on fire! You suffer 1 Wound per stack at the start of your turn, ignoring Armour Points. You may spend your Action to attempt an Athletics Test (SL 0) to extinguish the flames.",
        maxStacks: Infinity,
        removal: 1 /* ConditionRemoval.TEST */,
        removalTest: {
            comp: 'ATHLETICS',
        },
        damageOverTime: true,
    },
    // ---------------------------------------------------------------------------
    // BLEEDING — Blessure ouverte qui saigne.
    // Reçoit 1 blessure par pile au début de son tour.
    // Un test de Premiers Soins SL≥stack retire toutes les piles.
    // ---------------------------------------------------------------------------
    BLEEDING: {
        id: "BLEEDING" /* ConditionId.BLEEDING */,
        name: "Bleeding",
        message: "bled",
        description: "You are bleeding from an open wound. You suffer 1 Wound per stack at the start of your turn. A First Aid Test with SL equal to or greater than your stacks removes all stacks.",
        maxStacks: Infinity,
        removal: 2 /* ConditionRemoval.NONE */,
        fatiguedOnRemoval: true,
        damageOverTime: true,
    },
    BLINDED: {
        id: "BLINDED" /* ConditionId.BLINDED */,
        name: "Blinded",
        description: "You are blinded and suffer a penalty to all tests that depend on sight.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
            comps: ['EVALUATE', 'NAVIGATION', 'PERCEPTION', 'TRACK', 'MELEE_BASIC', 'MELEE_BRAWLING', 'MELEE_CAVALRY', 'MELEE_FENCING', 'MELEE_PARRY', 'MELEE_FLAIL', 'MELEE_POLE_ARM', 'MELEE_TWO_HANDED', 'RANGED_BOW', 'RANGED_BLACKPOWDER', 'RANGED_CROSSBOW', 'RANGED_ENGINEERING', 'RANGED_ENTANGLING', 'RANGED_EXPLOSIVES', 'RANGED_SLING', 'RANGED_THROWING'],
        },
        removal: 0 /* ConditionRemoval.AUTO */,
    },
    DEAFENED: {
        id: "DEAFENED" /* ConditionId.DEAFENED */,
        name: "Deafened",
        description: "You are deafened and suffer a penalty to all tests that depend on hearing.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
            comps: ['LANGUAGE_BATTLE', 'LANGUAGE_BRETONNIAN', 'LANGUAGE_CLASSICAL', 'LANGUAGE_ELTHARIN', 'LANGUAGE_GUILDER', 'LANGUAGE_KHAZALID', 'LANGUAGE_MAGICK', 'LANGUAGE_MIDDENLANDER', 'LANGUAGE_WASTELANDER'],
        },
        removal: 0 /* ConditionRemoval.AUTO */,
    },
    // ---------------------------------------------------------------------------
    // ENTANGLED — Immobilisé par un filet, corde ou tendon.
    // Ne peut pas se déplacer. -20 à tous les tests.
    // ---------------------------------------------------------------------------
    ENTANGLED: {
        id: "ENTANGLED" /* ConditionId.ENTANGLED */,
        name: "Entangled",
        description: "You are caught in a net, rope, or similar restraint. You cannot move voluntarily. You suffer −20 to all Tests. You may spend your Action attempting a Strength Test (SL 0) to free yourself.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
            comps: ['ATHLETICS', 'DODGE'],
        },
        removal: 1 /* ConditionRemoval.TEST */,
        blocksMovement: true,
    },
    // ---------------------------------------------------------------------------
    // FATIGUED — Épuisé par l'effort ou la maladie.
    // -10 à tous les tests par pile.
    // ---------------------------------------------------------------------------
    FATIGUED: {
        id: "FATIGUED" /* ConditionId.FATIGUED */,
        name: "Fatigued",
        description: "You are exhausted. You suffer −10 to all Tests per stack. Resting for at least 1 hour removes 1 stack.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
        },
        removal: 2 /* ConditionRemoval.NONE */,
    },
    // ---------------------------------------------------------------------------
    // POISONED — Empoisonné.
    // -10 à tous les tests. Reçoit 1 blessure par tour.
    // Un Antidote ou test de Premiers Soins SL≥1 retire 1 pile.
    // ---------------------------------------------------------------------------
    POISONED: {
        id: "POISONED" /* ConditionId.POISONED */,
        name: "Poisoned",
        message: "were poisoned",
        description: "Venom courses through your veins. You suffer −10 to all Tests and 1 Wound per stack at the start of your turn. An antidote or successful First Aid Test (SL 1+) removes 1 stack.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
        },
        removal: 1 /* ConditionRemoval.TEST */,
        removalTest: {
            comp: 'ENDURANCE',
        },
        fatiguedOnRemoval: true,
        damageOverTime: true,
    },
    // ---------------------------------------------------------------------------
    // PRONE — À terre.
    // -20 aux attaques à distance contre la cible (couverte).
    // +20 aux attaques de mêlée contre la cible (avantage de position).
    // Dépenser son déplacement pour se relever.
    // ---------------------------------------------------------------------------
    PRONE: {
        id: "PRONE" /* ConditionId.PRONE */,
        name: "Prone",
        description: "You have been knocked down. Ranged attacks against you suffer −20; melee attacks against you gain +20. You must spend your full Movement to stand up.",
        maxStacks: 1,
        testModifier: {
            mod: -20,
            comps: ['ATHLETICS', 'DODGE'],
        },
        removal: 0 /* ConditionRemoval.AUTO */,
        blocksMovement: true,
    },
    // ---------------------------------------------------------------------------
    // STUNNED — Étourdi. Perd son Action ce tour.
    // Retire 1 pile à la fin de son tour.
    // ---------------------------------------------------------------------------
    STUNNED: {
        id: "STUNNED" /* ConditionId.STUNNED */,
        name: "Stunned",
        description: "You are dazed. You lose your Action each turn. Remove 1 stack at the end of your turn.",
        maxStacks: Infinity,
        testModifier: {
            mod: -10,
        },
        removal: 1 /* ConditionRemoval.TEST */,
        removalTest: {
            comp: 'ENDURANCE',
        },
        fatiguedOnRemoval: true,
    },
    // ---------------------------------------------------------------------------
    // SURPRISED — Pris par surprise. Perd son tour complet.
    // Retiré automatiquement au début du prochain tour du personnage.
    // ---------------------------------------------------------------------------
    SURPRISED: {
        id: "SURPRISED" /* ConditionId.SURPRISED */,
        name: "Surprised",
        description: "You have been caught off guard. You lose your turn entirely. This condition is automatically removed at the start of your next turn.",
        maxStacks: 1,
        removal: 0 /* ConditionRemoval.AUTO */,
        blocksAction: true,
        blocksMovement: true,
    },
    // ---------------------------------------------------------------------------
    // UNCONSCIOUS — Inconscient. Complètement hors de combat.
    // Les Blessures ne peuvent pas descendre en dessous de 0.
    // ---------------------------------------------------------------------------
    UNCONSCIOUS: {
        id: "UNCONSCIOUS" /* ConditionId.UNCONSCIOUS */,
        name: "Unconscious",
        description: "You have lost consciousness and are completely helpless. You cannot take any actions and cannot be further Wounded beyond 0.",
        maxStacks: 1,
        removal: 2 /* ConditionRemoval.NONE */,
        blocksAction: true,
        blocksMovement: true,
    }
};
// #endregion
// #endregion =========================== TEW_Conditions ============================== //
// ============================== //
// #region ============================== TEW_EnemyAI ============================== //
// ----------------------
TEW.DATABASE.NPCS = TEW.DATABASE.NPCS || {};
TEW.DATABASE.NPCS.AI = {
    DEFAULT: {
        actions: [
            {
                conditionParam1: 0,
                conditionParam2: 0,
                conditionType: 0,
                rating: 5,
                skillId: 1
            }
        ]
    }
};
// #endregion =========================== TEW_EnemyAI ============================== //
// ============================== //
// #region ============================== TEW_Glossary ============================== //
// #region ====== GLOSSARY === //
TEW.DATABASE.GLOSSARY = [
    {
        id: 0,
        title: "Debug",
        paragraphs: [
            {
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id elit pellentesque, congue nisl pretium, placerat arcu. Curabitur dictum blandit mattis. Ut non consequat diam. Phasellus tempus a eros ut convallis. Nullam dignissim libero suscipit augue dignissim molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus dictum, mi a sodales dapibus, sem mi accumsan sapien, at congue est lacus in tellus. Praesent vestibulum sollicitudin tellus quis dictum. Donec scelerisque nisi a interdum laoreet. Nunc dui libero, rhoncus vitae mi eget, efficitur efficitur sem. Nullam sit amet mi orci. Nulla convallis ante ut nibh rutrum, vitae sagittis lectus vestibulum. Suspendisse vehicula suscipit lacus non maximus. In sit amet finibus tellus. Mauris et gravida mi. Vestibulum dictum dui quis nisi consequat ullamcorper sit amet et eros."
            },
            {
                content: "Nullam ut felis imperdiet, vestibulum sapien a, tristique erat. In ut nibh ipsum. Proin commodo, mi non ultricies ullamcorper, ipsum ante pulvinar est, eu molestie diam odio non augue. Suspendisse eget dui dui. Nunc facilisis turpis sit amet dolor euismod faucibus. Vivamus in nunc in justo sagittis tempor. Aenean tempor ultrices tincidunt. Proin quis tempor lacus, in pharetra justo."
            },
            {
                content: "Sed feugiat felis vel libero suscipit fermentum. Curabitur venenatis felis ut tortor tristique, at porttitor mi porta. Sed sed consectetur massa. Ut sed porta quam. Cras eu magna vel massa porttitor tincidunt ac in justo. Mauris vitae nisl placerat, commodo dolor eu, consequat mauris. Etiam hendrerit, nibh volutpat porttitor semper, lectus nibh auctor justo, interdum porta velit purus vel eros. Vestibulum nec ex ut massa dapibus feugiat."
            },
            {
                content: "Proin dapibus interdum metus sed iaculis. Donec eu sem vitae lorem bibendum ornare a eget arcu. Sed semper non lacus eget pellentesque. Praesent a ex at neque gravida posuere. Sed pretium finibus nibh ut tincidunt. Aenean pulvinar, velit et ultrices dignissim, justo felis efficitur metus, a malesuada libero augue nec sapien. Integer semper a ipsum at molestie. In hac habitasse platea dictumst. Pellentesque lacinia, sem non tempus gravida, felis metus dapibus ex, laoreet rhoncus velit odio non urna. Duis fermentum mi non dui pellentesque, hendrerit accumsan felis eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam interdum purus justo, eu lacinia ipsum gravida at. Mauris at lectus tellus. Nulla a pharetra elit. Nulla vel dolor est."
            },
            {
                content: "Suspendisse potenti. Duis vitae euismod neque, vel molestie orci. Maecenas vitae orci commodo, tempus erat a, dignissim nibh. Vestibulum pulvinar, justo at ultricies varius, purus justo volutpat neque, vel auctor magna elit non est. Cras non ipsum vehicula, molestie felis et, feugiat justo. Etiam rhoncus mi vel arcu laoreet posuere. Maecenas mattis lectus id lacus dignissim, accumsan rutrum ante venenatis. Aenean at feugiat lectus, vel eleifend eros. Proin laoreet mollis erat."
            }
        ]
    }, {
        id: 1,
        title: "Reikland",
        paragraphs: [
            {
                content: "Standing proud in the heart of the Old World, the Reikland is the richest and most powerful of the Empire's grand provinces. Known for its engineers, wizards, and merchants, and for being the birthplace of the Cult of Sigmar, it is a realm of soaring mountains, snaking rivers, dark forests, and powerful trading centres. From his throne in the city of high-spired Altdorf, Emperor Karl-Franz I rules not only the Reikland, but all the Empire that lies beyond."
            },
            {
                content: "'Truly, to be born a Reiklander is to be born blessed by the Gods Themselves. Give thanks to Sigmar and be praised.' Holy Mother Halma Habermann of Sigmar in 2510 IC."
            }
        ]
    }, {
        id: 2,
        title: "Empire",
        paragraphs: [
            {
                content: "It is the most powerful nation in the Old World, stretching from the borders of Bretonnia in the south-west to the inhospitable plains of Kislev in the north-east. The Empire is home to vast forests, immense mountains and prosperous, cosmopolitan cities, places of learning and culture, where the arts of war and science go hand in hand. But it is also a dangerous land, steeped in superstition and fear, where peasants cling to their protective talismans to ward off evil and the ruinous powers of Chaos. Since it was founded by the legendary warrior-king Sigmar, the Empire has withstood invasions, plagues and civil wars, triumphing thanks to the courage of its armies and the tenacity of its people. However, evil haunts the very heart of the country, thriving in the darkness of caves or in ancient fortresses lost in the woods. Greenskins raid the borders of the Empire and the threat of invasion from the Nordic tribes, worshippers of the monstrous Chaos gods, is ever-present."
            },
            {
                content: "'Men of Sigmar ! I see in your eyes the fear of the enemy. I see in your eyes that you do not know how to fight these monsters. Men of the Empire, I have the answers to your questions. We will fight them with iron, we will fight them with courage, but above all, we will fight them with our faith in Sigmar !' Magnus the Pious, before the Battle of the Kislev's Doors."
            }
        ]
    }, {
        id: 3,
        title: "Bretonnia",
        paragraphs: [
            {
                content: "People travelling through Bretonnia discover a land of fertile farms, rolling hills, breathtakingly beautiful mountains and unreal forests. Unlike the Empire, Bretonnia has a temperate climate and the land is more easily farmed. Its immense forests and wilderness are separated by fertile plains and valleys where the Bretonnian nobility have established their feudal estates. It is a rich region, well defended by its powerful knighthood. The population is made up of courtly aristocrats and knights, fine ladies and satisfied, respectful peasants. Bretonnian chefs are renowned for their culinary skills and the country's wines are renowned throughout the Old World. This is the image that Bretonnians seek to project of their nation, and it is not entirely misleading."
            },
            {
                content: "'With our spears and our swords, we will strike down our cowardly enemies. We, the proud Knights of Bretonnia, will keep them at bay. As long as we have faith in the Lady, their weapons will not harm us. Our glory will never fade, for our deeds will live on. For the King, Bretonnia and the Lady, charge ! Hail the enemy !' Duke Bohémond, the Scourge of Beasts, at the Battle of the ford of Grismar."
            }
        ]
    }, {
        id: 4,
        title: "Kislev",
        paragraphs: [
            {
                content: "These lands, with their harsh, icy climate, are inhabited by hardy, hardy people, accustomed to life on the immense steppes that stretch on forever, with no relief whatsoever. Surrounded by the Sea of Claws to the west, the Land of the Trolls to the north and the Mountains of the Edge of the World to the east, its inhabitants struggle to survive, constantly under attack from raiders descending from Norsca, from the tribes of Greenskins hiding in the mountains and from the bands of nomadic marauders who infest the steppe itself. The lands of Kislev are the bulwark that protects the Empire from invasions from the north, and the two nations have fought side by side many times over the centuries to defend their territories from the infamous followers of Chaos."
            },
            {
                content: "'The strength of Kislev lies in each and every one of you. The land has summoned you all here and it is here that you will put that strength to the test by standing up to Chaos. There is great power in this land and tomorrow it will run through your veins. Use it wisely.' Tsarina Katarina, Ice Queen of Kislev."
            }
        ]
    }, {
        id: 5,
        title: "Manann",
        paragraphs: [
            {
                content: "Volatile Manann, the son of Taal and Rhya, is the capricious King of the Sea, Master of the Maelstroms, and Summoner of Storms. Known for his black moods and erratic temper, folk claim his cult is needed more than any other, for if ever there is a god that must be appeased, it's Manaan. He's depicted as an enormous, blackbearded man with seaweed in his hair and a great, five-pointed crown of black iron upon his troubled brow. He's said to dwell at the bottom of the ocean, the rise and fall of his massive chest forming the waves and tides as the greatest monsters of the deep gather in his court."
            },
            {
                content: "'As far as I know, the Lord of the Tide is as ticklish as an Averheim damsel. You have to court him, offer him presents and speak to him very softly. But the slightest false move and you're in for a lifetime of suffering. Yeah boy!' Amos The Black, pirate."
            }
        ]
    }, {
        id: 6,
        title: "Morr",
        paragraphs: [
            {
                content: "Urbane Morr, God of Death and King of the Underworld, is husband to Verena, brother to murderous Khaine, and father of Myrmidia and Shallya. He sends divine ravens to guide dead souls to the Portal, the pillared gateway between the mortal realms and the realm of the gods. He then leads each soul from there to its final resting place: either Morr's Underworld, or the afterlife of another god. He is commonly portrayed as a tall, darkhaired man of aristocratic bearing, with a brooding, intense air."
            },
            {
                content: "'Father's resting in the Morr estate now. And we've taken up a general collection to pay the Priests to make sure the old bastard stays there.' Ludmilla von Thieldorf, Reikland aristocrat."
            }
        ]
    }, {
        id: 7,
        title: "Myrmidia",
        paragraphs: [
            {
                content: "In the Empire, bronzed Myrmidia, daughter of Verena and Morr, sister of Shallya, is the Goddess of Strategy and Scientific Warfare. However, in the sun-drenched south, Myrmidia is much more than this: she acts as the patron deity of both the Estalian Kingdoms and the Tilean City States, and is fanatically worshipped in both realms. Because of this, her cult is the largest in the Old World, for all it has a limited presence in the Empire. She is commonly portrayed as a tall, muscular, young woman armed and equipped in archaic, southern stylings. She is known for her calm, honourable approach to all matters, and her clerics do what they can to emulate this."
            },
            {
                content: "'I served alongside mercenaries from Tilea. They were all amazing warriors, but they spent far too much time with their noses in their Myrmidia bibles. I'd never seen anything like it. These guys planned everything down to the last detail. They had ready-made tactics to deal with any situation on the battlefield. They even had diagrams for digging their latrines! Unfortunately, all their preparations came to nothing when the demons attacked us, but at least they got away in an orderly and disciplined fashion !' Lewis Heigermann, mercenary."
            }
        ]
    }, {
        id: 8,
        title: "Ranald",
        paragraphs: [
            {
                content: "According to myth, Ranald was once mortal, a gentle bandit who robbed from the rich and gave to the poor. This so charmed Shallya that the goddess fell in love. One fateful day, she found Ranald dying, fatally touched by the plagues of the Fly Lord. Unable to accept this, she let Ranald drink from her holy chalice, granting the rogue eternal life. But it was all a trick — Ranald had faked it all — and, laughing, the new god gleefully danced into the heavens. While generally portrayed as a dapper Human wearing a perpetual smile, there is little consistency to the height, weight, skin colour, or even gender of Ranald, though the god is more commonly portrayed as male in the Empire. More a cheerful trickster than outright criminal, Ranald is said to have a love of deflating pride with clever tricks and ruses."
            },
            {
                content: "'Everyone knows that those great lords who call Ranald a thief, an agitator and a liar when everyone hears them are going to pray to him in secret when the storm breaks.' Otto Potbelly, Stirlander farmer."
            }
        ]
    }, {
        id: 9,
        title: "Rhya",
        paragraphs: [
            {
                content: "Bountiful Rhya is the Goddess of Fertility and Summer, widely known as the Earth Mother and She Who Sustains Life. Though typically depicted as the wife of Taal, myths connect her to many gods, and she has children from many of those relationships. Most commonly portrayed as a tall, beautiful women wreathed in leaves and bedecked in fruit, Rhya's statues are normally nude, pregnant, and surrounded by her children. Many theologians tie Rhya to the Old Faith, a prehistoric cult comprised of ancient farmers and hunters who wrested a living from the land before the Empire was born, and one still found in secluded communities to this day."
            },
            {
                content: "'Of course I pay homage to Taal and Rhya, but as I see fit. It seems that some of their followers live in the woods like animals, dressed in animal skins. We're humans, not beasts... Someone needs to remind them of that.' Siegfried Kant, Marienburg bourgeois."
            }
        ]
    }, {
        id: 10,
        title: "Shallya",
        paragraphs: [
            {
                content: "Shallya is the Goddess of Healing, Mercy, and Compassion. She is the daughter of Verena and Morr, and the sister of Myrmidia. Shallya is normally portrayed as a young, beautiful maiden whose eyes are perpetually welling with tears as she weeps for the world's pain. It is said Shallya's compassion knows no bounds, and in some myths — such as the stories of Ranald tricking her into granting him immortality, or Manaan trapping her at the bottom of the sea — she seems trusting to the point of foolishness. However, her cultists maintain her mercy is available to all, without judgment. True foolishness consists of presuming to judge who is worthy of Shallya's grace and who is not."
            },
            {
                content: "'Don't go upsetting the Shallyans. Oh, of course she won't do anything to you, she's the Merciful Heart, but you don't want to alienate her parents.' Adeline Burgerkampf, brigand chieftain."
            }
        ]
    }, {
        id: 10,
        title: "Sigmar",
        paragraphs: [
            {
                content: "Sigmar is the Empire's patron, and his cult dominates the realm. Because Sigmar was once the emperor, his worship is inextricably interwoven with politics, and three of the cult's highest-ranking members are directly involved with electing new emperors. According to legend, 2,500 years ago Sigmar's birth was heralded by a twin-tailed comet, and he was born the first son of the chief of the Unberogen tribe. When older, he received the magical warhammer Ghal-maraz ('Skull-splitter') as a gift from the Dwarf king Kurgan Ironbeard for saving his life from Greenskins. Sigmar later allied with the Dwarfs and their combined forces defeated the Greenskins. He was then crowned as the first emperor of the Human tribes he'd united. After fifty years of extraordinary rule, Sigmar mysteriously vanished, only to later ascend to divinity, crowned as a god by Ulric, Sigmar's patron in life."
            },
            {
                content: "'Sigmar protects us all equally, but some, like the Electors Counts and nobles, are more equal than others.' Heinrich, Warrior-priest of Sigmar."
            }
        ]
    }, {
        id: 11,
        title: "Taal",
        paragraphs: [
            {
                content: "Taal is the God of Wild Places and Animals, and the King of Nature. He is the husband to Rhya, and father to Manaan, and is perceived by Taalites to be the king of the gods, though other cults dispute this. All nature is under his purview, from the snaking rivers to the tallest mountains, from the smallest insect to the greatest beast. He is normally portrayed as a powerfully built, virile man with long, wild hair and great spreading antlers, and is known for his volatile moods and his need to hunt."
            },
            {
                content: "'With all due respect to the followers of Taal, the next time I come across one who prevents me from hunting deer in the Sacred Grove, I'm going to put my arrow through his hide !' Ralt from Nuln, farmer."
            }
        ]
    }, {
        id: 12,
        title: "Ulric",
        paragraphs: [
            {
                content: "Ulric is the ferocious God of Wolves, Winter, and Warfare. He is the brother of Taal and, according to Ulrican lore, the king of the gods, although other cults dispute this. He is normally portrayed as a massive, heavily bearded barbarian wearing a white wolfpelt cloak, and bearing a mighty war-axe named Blitzbeil. He's a distant, harsh, and unforgiving god who expects his cultists to rely on individual strength and prowess. He despises weakness, cowardice, and trickery, and favours the direct approach in all matters."
            },
            {
                content: "'My friends, let me explain what I mean by this: Sigmar was an Ulrican. Sigmar founded this Empire. Therefore, the Empire is Ulric's nation. We are all Ulricans! This slavish devotion to Sigmar must stop !' Johann von Schattenlas, politician from Carroburg."
            }
        ]
    }, {
        id: 13,
        title: "Verena",
        paragraphs: [
            {
                content: "Wise Verena, the Goddess of Learning and Justice, is the wife of dark Morr and the mother of Myrmidia and Shallya. She is generally depicted as a tall, classically beautiful woman, and usually carries a sword and a set of scales. As the patron of justice she is concerned with fairness rather than the letter of the law: she opposes tyranny and oppression as much as crime."
            },
            {
                content: "'All this may be true, but no man or woman, not even Dame Verena, can pronounce a sentence before the opposing party has presented its arguments. Then, once both claimants have spoken, the judgement will be handed down.' Judge Wilhelm Manfred."
            }
        ]
    }, {
        id: 14,
        title: "Humans",
        paragraphs: [
            {
                content: "Humans are the most numerous and widespread of the civilised species of the Old World. From the plains of the Estalian Kingdoms to the frozen oblasts of Imperial Kislev, Humans occupy every corner of the continent, and they thrive. The largest, most powerful Human realm is the Empire, a patchwork of powerful provinces blanketed in seemingly endless forests. Standing proud at the heart of this Empire, the Reikland is its richest, most cosmopolitan region."
            },
            {
                content: "'They are corrupt, jealous, and rapacious in their short-lived hungers. But, when mindful of their petty needs and their fear of what we represent, they are easily shaped.' Imryth Emberfell, Ambassador from Caledor."
            }
        ]
    }, {
        id: 15,
        title: "Dwarfs",
        paragraphs: [
            {
                content: "Dwarfs — or 'Dawi' as they call themselves — are legendarily gruff and stubborn. While the majority reside in vast mountainside fortresses known as Holds, most larger towns and the capital of the Reikland also have Dwarf populations. Given their clannish nature, they tend to band together, forming enclaves or districts wherever they settle. Many of the Dwarfs living in Reikland are the descendants of those driven from Fallen Holds many centuries ago, but most still consider themselves as Dwarfs of the Grey Mountains, although some have never seen a hill, let alone a mountain. Dwarfs are squat with thick, muscular limbs and stout, broad torsos. Their features are heavy and their hair is thick. Length of hair is a mark of pride and status amongst Dwarfs, with elaborate braids and adornments demonstrating rank: to shave a Dwarf causes terrible shame. Indeed, honour is a fundamental aspect of their character. Given their long memories and proud natures, they bear grudges against those who have slighted or dishonoured them, gripping tight to their grievances for many years, even taking on the grudges borne by their ancestors, knowing their forebears will be watching over them, nursing their bitterness long after death. Whilst it might be hard for others to win a Dwarf's friendship, once given it is absolute. While not as ageless as the near-immortal Elves, Dwarfs can live for many centuries. Indeed, some say that as long as a Dwarf has a purpose, they will not die unless struck down in battle, such is the strength of their conviction."
            },
            {
                content: "'My aunt Bessi was the greediest, as were six of her sons. But Bessi has nothing on them Dwarfs. Eyes grow as big as Mannslieb at even a scratch of gold. But, if you tell them that, they'll growl at you like you've taken the last honeycake, and start scribbling notes in one of their damned books about insulting their family honour or whatnot.' 'Lilly' Joseppinalina Hayfoot, Pedlar in the Reikland."
            }
        ]
    }, {
        id: 16,
        title: "Halflings",
        paragraphs: [
            {
                content: "Halflings are ubiquitous across the Reikland, found working in service industries in all towns, with an entire district of Reikland's capital of Altdorf, known as Haffenstadt, packed tight with hundreds of extended Halfling families supporting restaurants, taverns, pipeweed stores, and an enormous number of street-food hawkers. Halflings are also a common sight in many of Reikland's villages, where it is not uncommon to find them employed to staff an inn or run a farm. They are communal creatures, preferring to live in close-knit family groups, sharing houses, rooms,and even beds with dozens of friends and relatives; everyone contributes and everyone shares. This interdependent lifestyle leaves many Halflings struggling with the concept of private ownership and space. Halflings are short, apple-cheeked and beardless, resembling big-eyed, round-faced (and round bodied) Human children, and their sunny dispositions and curly locks only reinforce this impression. They are known for their enormous appetites in all things and their lack of concern for personal space (they're huggers), social boundaries ('Well me' great aunt's just shacked up with me best mate, and you should hear what they've been up to!'), and property rights ('It's not like he's using it!'); this last has landed more than one Halfling in jail for thievery."
            },
            {
                content: "'If I gets meself the sort wot eats and smokes all day, then I'm happy as Ranald in catnip. It's when I get them without proper manners nicking me crockery or knives and forks: that I just can't abide! They're all smiles and shrugs when the watch come to pick 'em up, like they don't understand what they done wrong.' Stefan Krause, Innkeeper from Stirgau."
            }
        ]
    }, {
        id: 17,
        title: "High Elves",
        paragraphs: [
            {
                content: "High Elves are a relatively common sight on the rivers of Reikland. Both Altdorf and Nuln boast sizeable districts populated by High Elf merchants who ship goods down the Reik through Marienburg to the sea. These merchants are by far the most numerous of the High Elves found in Reikland, alongside diplomatic entourages and support staff. Aloof, alien, and long-lived, they are a passionate, emotional folk widely perceived in the Reikland to be the most beautiful of the species, and also the most arrogant. Tall and slender with delicately pointed ears, most Elves have long, fine hair and melodious voices. Although they might look frail, their physiology is not only surprisingly strong, but also extraordinarily agile and dextrous. There are very few noticeable gender differences between Elves, which often causes confusion among Humans who interact with them. The High Elves, who call themselves 'Asur', are native to Ulthuan, a magical island lying to the west of the Old World. A proud species, they boast of being amongst the oldest of the world's civilisations. High Elves show considerable disdain for Dwarfs, with whom they have a long history of conflict. Since their abandonment of the Old World in the aftermath of the War of the Beard, the Asur have been torn apart by civil war, the 'kinstrife', although this isn't something they discuss openly with outsiders. As a result of this millennia-long struggle, Elves from the war-torn north of Ulthuan tend to be hard-bitten, practical, and ruthless."
            },
            {
                content: "'Don't talk to me about those bloody bastards! Alrug Skycaster, my ultimate granduncle, was bloody betrayed in the bloody War of bloody Vengeance by those… those… ARGH! It's our clan's oldest grudge! Stood for thousands of bloody years! When I find the descendants of bloody Galanthiel Whisperthorn, by Grungni! I'm going to teach them all — every single last one of them — a lesson in manners with my axe !' Snorrt Leivvusson, Diplomat from Karak Ziflin."
            }
        ]
    }, {
        id: 18,
        title: "Wood Elves",
        paragraphs: [
            {
                content: "Wood Elves are a rare sight in the Reikland, and for good reason. During the closing stages of the War of the Beard, most Elves retreated from the Old World, but a few remained and withdrew to the depths of the magical forests they now called home. Over three thousand years of isolation, hardship, and warfare then ensued, leaving 'Wood Elves' culturally very different to their High Elf cousins. There are two kiths of Wood Elves most commonly seen in Reikland. The 'Asrai' from Athel Loren across the Grey Mountains, and 'Eonir' of the Laurelorn Forest far to the north in Nordland."
            },
            {
                content: "'Elves living in the woods? Don't be bloody ridiculous. Elves live in white towers and pretty boats over in Altdorf-town, you idiot.' 'Jammy' Mercimaus Alderflower II, Scholar from Fielbach."
            }
        ]
    }, {
        id: 19,
        title: "Altdorf",
        paragraphs: [
            {
                content: "Emperor Karl-Franz I holds court in Altdorf, the capital of the Reikland and the Empire as a whole. It stands proudly at the confluence of the mighty Reik and Talabec rivers, as well as at the end of many major trade routes, and is easily the wealthiest city in the Empire. This ensures it is always expanding and renewing, with fresh, wide-eyed hopefuls arriving daily, and more commissions for new bridges, buildings, and engineering marvels presented weekly to the city's burgomeisters than most cities consider in a year."
            },
            {
                content: "'Just look at this palace! Such opulence makes me sick. The whole world is on fire and Karl Franz is hiding behind these stone and marble walls. The end of time is nigh !' Nolan Eberhardt, flagellant."
            }
        ]
    }, {
        id: 20,
        title: "Nuln",
        paragraphs: [
            {
                content: "Once the capital, the technological centre of the Empire's military power and the heart of humanity's intellectual influence, Nuln is often described as 'a crown glittering with the brilliance of its hundred jewels'. Although Altdorf, 145 leagues away outnumbered Nuln in terms of population, it remained the leading city in the arts and social life. However, like the rest of the Empire, Nuln has its secrets, its vulnerabilities and its shadows, and it does its best to confine them to its sprawling network of sewers and the heart of its poorest districts."
            },
            {
                content: "'Nuln is the most glittering jewel in the crown of our great Empire. She represents what our civilisation could become...' Herr Borgen von Hauger."
            }
        ]
    }, {
        id: 21,
        title: "Ubersreik",
        paragraphs: [
            {
                content: "The town of Ubersreik is situated near Grey Lady Pass, one of only two major passes over the Grey Mountains into Bretonnia. Because of this, the town regularly sees traders and travellers from across the Old World. The mighty fortress known as the Black Rock is connected to the walls of the town should any less welcome travellers attempt ingress."
            },
            {
                content: "" //TODO
            }
        ]
    }, {
        id: 22,
        title: "Karl Franz I",
        paragraphs: [
            {
                content: "The current Emperor is Karl Franz (full name Karl-Franz Holswig Schliestein), Prince of Altdorf and Count Elector of the Reikland. He was elected Emperor in 2502 in all the vigour of his youth, when the Empire was enjoying a period of relative peace and stability. However, the new sovereign knew that this situation would not last and that he would need all his talents as a general and statesman to protect his people and his domains."
            },
            {
                content: "'If we die, it will be brandishing our swords, for there is no better death for a warrior. We will sit at Sigmar's banquet like the heroes of old, and our names will be remembered in the songs of our people until the end of time !' Karl Franz's speech to his men."
            }
        ]
    }, {
        id: 23,
        title: "Colleges of Magic",
        paragraphs: [
            {
                content: "There are eight Colleges of Magic, all located in Altdorf, which are the most important schools of Magic in the Old World, where even the Sorcerers of Kislev and Bretonnia go. Each teaches its own type of magic, linked to a specific magical current. Some energies are denser than others. The rarer ones billow like a cloud in the upper atmosphere, while darker, denser varieties run across the ground, or saturate the earth itself. The eight Colleges of Magic (Luminous, Golden, Jade, Celestial, Grey, Amethyst, Blazing and Amber) are identified by their colour and a specific rune. A Sorcerer belonging to one of these eight Colleges can be recognised by the name of that College, and he or she also wears robes in the colours of that College, so, for example, a Sorcerer could be a Luminous Sorcerer or a Golden Sorcerer."
            },
            {
                content: "'When I see a human clumsily trying to master the Winds of Magic, I always feel like I'm watching a young child playing with an incredibly powerful weapon. They are far too impatient and limited to acquire the discipline needed to control the Winds of Magic, let alone the art of combining them. This is why the great Teclis decreed that humans should divide their studies into different Colleges, one for each element.' Galgarast, Archmage of the White Tower of Hœth."
            }
        ]
    }, {
        id: 24,
        title: "Kemperbad",
        paragraphs: [
            {
                content: "An ancient town with a long and convoluted history, the Grand Freistadt of Kemperbad is known and celebrated for producing the finest brandy in the Reikland. Though part of the Reikland, Kemperbad lies on the eastern bank of the Reik; historically the town has been fought over, and ruled by, nobles from Talabecland, Stirland, and the Reikland, changing hands time and again through a series of marriages, treaties, and wars. Since gaining a charter affording it the right to self-rule in 1066IC from Boris Goldgather, Kemberbad has been a Freistadt led by a local council."
            },
            {
                content: "" //TODO
            }
        ]
    }, {
        id: 25,
        title: "Elector Counts",
        paragraphs: [
            {
                content: "The Elector Counts are the rulers of the Empire's major provinces, and it is they who order the raising of the imperial armies. In theory, they are the Emperor's loyal advisors and work to ensure that justice and peace are maintained in their territories. Originally, the Counts were warlords subject to Sigmar, and each controlled a vast province of the Empire. Over time, the various provinces prospered or declined, so that today the Empire comprises ten Elector Counts - although there were once twelve - each ruling over a vast region. Within the borders of their provinces, the Electors can generally act as they wish, although the Emperor retains a right of supervision. The title of Count is hereditary, and the noble families from which they come have a long and glorious history. The Emperor is chosen from among the Electors. Karl Franz, the current Emperor, is also Prince of Altdorf and Count Elector of the Reikland."
            },
            {
                content: "'On this day, Count Elector Theoric Gausser, Grand Baron of Nordland, Prince of Salzenmund, Lord of Laurelorn, Duke of Marienburg and Terror of the Nordics, stopped off at this inn to spend the night and described his accommodation as 'suitable'.' Plaque on the wall of the Grimmenhagen guest house."
            }
        ]
    }, {
        id: 26,
        title: "Reik",
        paragraphs: [
            {
                content: "The Reik carries more traffic and trade than all the other rivers in the Old World combined. Indeed, so massive is the river that almost half the fresh water of the Old World flows down its length, for it not only drains all the Reikland with its many tributaries, but most of the Empire beyond. By the time the Reik flows into the Reikland, it is already so wide it frequently appears more lake than river, leaving it impossible to bridge using standard engineering methods. As this immense watercourse approaches Altdorf to meet the dark waters of the Talabec, both rivers split into a complex network of channels that spread outwards to form the foggy Altdorf Flats. Many of the thinner distributaries caused by this are bridgeable, ensuring Altdorf is a natural centre for trade as it is the only place where the Reik can be crossed on foot for many hundreds of miles. This single fact has secured Altdorf's dominance of the area, both militarily and fiscally."
            },
            {
                content: "'At Reikdorf Sigmar the Great stopped off, It was here, on the banks of the mighty Reik that he would found the Empire, his majestic kingdom For here were heroes and gentlemen ready to build a masterpiece that would defy time.' Sighardt Schneider-Koller, extract from Sigmar Emperor, 1797 IC."
            }
        ]
    }
];
// #endregion =========================== TEW_Glossary ============================== //
// ============================== //
// #region ============================== TEW_Items ============================== //
// ----------------------
TEW.DATABASE.ITEMS = {};
// #region ====== ITEMS SET === //
TEW.DATABASE.ITEMS.SET = {
    AMULET: {
        name: "Amulet",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 2,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A brass amulet representing Sigmar."
    },
    BOOTS: {
        name: "Boots",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 60,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Sturdy boots to keep your feet dry."
    },
    CLOTHING: {
        name: "Clothing",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 72,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Common clothes."
    },
    COAT: {
        name: "Coat",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 216,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Protects you against the elements."
    },
    COSTUME: {
        name: "Costume",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 240,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Expensive clothes to shine in society."
    },
    COURTLY_GARB: {
        name: "Courtly Garb",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 2880,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Nobles' garb features embellishments such as lace cuffs & collars, excessive high-quality fabric and pointed shoes."
    },
    FACE_POWDER: {
        name: "Face Powder",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 120,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Stylish makeup for the noblefolk."
    },
    GLOVES: {
        name: "Gloves",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 48,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "To keep your hands dry and warm."
    },
    HAT: {
        name: "Hat",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 48,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Fine quality hats are status symbols in the Empire's towns and cities. The more flamboyant the hat, the better."
    },
    HOOD: {
        name: "Hood",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 60,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Useful to keep your head dry, or to hide it."
    },
    JEWELLERY: {
        name: "Jewellery",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 1920,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Nice jewels with various gemstones."
    },
    PERFUME: {
        name: "Perfume",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 120,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Smells nicer than most people."
    },
    PINS: {
        name: "Pins",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 6,
        price: 120,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Small silver pins."
    },
    RELIGIOUS_SYMBOL: {
        name: "Religious Symbol",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 80,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Small silver symbol representing a god."
    },
    ROBES_PRACTICAL: {
        name: "Practical Robes",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 240,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "These costumes are inexpensive, comfortable, and relatively plain. A wizard wearing practical robes may even go unrecognised in many situations. Gives +1 SL to any Channelling test."
    },
    ROBES_STANDARD: {
        name: "Standard Robes",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 1920,
        enc: 2,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "These costumes are complex and typically include heavy coats or cloaks and distinctive headwear. Gives +2 SL to any Channelling test."
    },
    ROBES_ELABORATE: {
        name: "Elaborate Robes",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 7200,
        enc: 4,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "These costumes are heavy and impractical, often incorporating bulky accessories and reams of cloth woven from magically infused thread. Anyone wearing these robes will be instantly recognised as a wizard. Gives +3 SL to any Channelling test."
    },
    SCEPTRE: {
        name: "Sceptre",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 1920,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "The highest-ranking legal officials carry sceptres to indicate their status."
    },
    SHOES: {
        name: "Shoes",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 60,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Nice shoes to keep your feet dry."
    },
    SIGNET_RING: {
        name: "Signet Ring",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 1200,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "Gold ring with engraved stamp."
    },
    TATOO: {
        name: "Tatoo",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 48,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Definitive mark made with totally clean tools."
    },
    UNIFORM: {
        name: "Uniform",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 264,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Outfit with the city's coat of arms."
    },
    WALKING_CANE: {
        name: "Walking Cane",
        group: 0 /* ItemGroup.CLOTHES */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_CLOTHES,
        groupLabel: "Clothes" /* ItemGroupLabel.CLOTHES */,
        nb: 1,
        price: 720,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Polished wooden canes with metal caps are status symbols amongst wealthier townsfolk."
    },
    ALE_PINT: {
        name: "Ale, pint",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 3,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Pint of the finest ale you can find, not really good though."
    },
    ALE_KEG: {
        name: "Ale, keg",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 36,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Keg full of the finest ale you can find, not really good though."
    },
    BUGMANS_ALE_PINT: {
        name: "Bugman's XXXXXX Ale, pint",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 9,
        enc: 0,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "Merchants travel across the Old World to purchase this potent Dwarfen ale from the famous brewery founded by Josef Bugman."
    },
    FOOD_ONE_DAY: {
        name: "Food, Groceries/day",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 10,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Enough food to feed one person for one day. Needs to be prepared."
    },
    MEAL_INN: {
        name: "Meal, inn",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Hot meal served in a wooden plate."
    },
    RATIONS_ONE_DAY: {
        name: "Rations, one day",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 24,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Food to go for one person for one day."
    },
    ROOM_COMMON: {
        name: "Common Room/night",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 10,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "One night in the common room for one person. Guests sleeping in common rooms should be wary of thieves."
    },
    ROOM_PRIVATE: {
        name: "Private Room/night",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 120,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "One night in a private room. Accommodates 2 guests."
    },
    SPIRITS_PINT: {
        name: "Spirits, pint",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 24,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "One pint of fine spirits."
    },
    STABLES_NIGHT: {
        name: "Stables/night",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 10,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Room for one horse in the stables fon one night."
    },
    WINE_BOTTLE: {
        name: "Wine Bottle",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 10,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A bottle of fine wine."
    },
    WINE_GLASS: {
        name: "Wine Glass",
        group: 1 /* ItemGroup.FOOD */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_FOOD,
        groupLabel: "Food" /* ItemGroupLabel.FOOD */,
        nb: 1,
        price: 4,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A glass of fine wine."
    },
    ABACUS: {
        name: "Abacus",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 40,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Mechanical tool facilitating calculus."
    },
    ANIMAL_TRAP: {
        name: "Animal Trap",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 30,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Used to catch animals like wolves or rabbits."
    },
    ANTITOXIN_KIT: {
        name: "Antitoxin Kit",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 720,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Contains a small knife, herbs, and a jar of leeches. A successful Heal Test with an antitoxin kit removes all Poisoned Conditions. Treatment takes at least two Rounds."
    },
    BOAT_HOOK: {
        name: "Boat Hook",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 60,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Tool used to catch boats from shore."
    },
    BROOM: {
        name: "Broom",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 10,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "It's a broom, nothing more."
    },
    BUCKET: {
        name: "Bucket",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 30,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Can be used to move liquids."
    },
    CHISEL: {
        name: "Chisel",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 50,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Little tool used to scult stone."
    },
    COMB: {
        name: "Comb",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 10,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Used to brush your hair."
    },
    CROWBAR: {
        name: "Crowbar",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 30,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Metal bar that can be used as an improvised weapon."
    },
    CRUTCH: {
        name: "Crutch",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 36,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Helps you walk."
    },
    DISGUISE_KIT: {
        name: "Disguise Kit",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 78,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Contains enough props for four disguises and also materials for changing your appearance used by those with the Entertain (Acting) Skill."
    },
    EAR_PICK: {
        name: "Ear Pick",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 24,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "To clean your ears."
    },
    FISH_HOOKS: {
        name: "Fish Hooks",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 12,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Can be used to catch fish."
    },
    FLOOR_BRUSH: {
        name: "Floor Brush",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 18,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Little brush, often used in rich houses."
    },
    GAVEL: {
        name: "Gavel",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 240,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Little hammer used by judges and magistrates."
    },
    HAMMER: {
        name: "Hammer",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 36,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Tool used to punch nails."
    },
    HAND_MIRROR: {
        name: "Hand Mirror",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 258,
        enc: 0,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "Little mirror used by nobles."
    },
    HOE: {
        name: "Hoe",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 48,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Farming tool."
    },
    KEY: {
        name: "Key",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "No idea what it opens."
    },
    LOCK_PICK: {
        name: "Lock Pick",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 180,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "An assortment of small, variously-shaped tools needed to use the Pick Lock Skill without penalty."
    },
    MANACLES: {
        name: "Manacles",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 216,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Prisoners trying to break out of manacles suffer 1 Wound and must pass a Very Hard (-30) Strength Test."
    },
    MOP: {
        name: "Mop",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 12,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Used to clean the floor."
    },
    NAILS: {
        name: "Nails",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 12,
        price: 2,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Cna be punched by a hammer."
    },
    PAINT_BRUSH: {
        name: "Paint Brush",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 48,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Brush used by artists to paint on canvas."
    },
    PESTLE_AND_MORTAR: {
        name: "Pestle and Mortar",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 168,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Tools used by an apothecary."
    },
    PICK: {
        name: "Pick",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 216,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Tool used by minors."
    },
    POLE: {
        name: "Pole (3 yards)",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 96,
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A long pole used for barging; counts as an Improvised Weapon."
    },
    QUILL_PEN: {
        name: "Quill Pen",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 36,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Expensive writing tool."
    },
    RAKE: {
        name: "Rake",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 54,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Useful to removes leaves from your garden."
    },
    READING_LENS: {
        name: "Reading Lens",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 720,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "Glass lenses with handles provide a +20 bonus to Read/Write Tests for deciphering tiny or unintelligible writing. Perception Tests to search for fine details such as secret doors or compartments also receive a +20 bonus."
    },
    SAW: {
        name: "Saw",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 72,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Tool used to cut wood."
    },
    SICKLE: {
        name: "Sickle",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 240,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Tool used by herborists to collect herbs."
    },
    SPADE: {
        name: "Spade",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 96,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Farming tool."
    },
    SPIKE: {
        name: "Spike",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Great spike."
    },
    STAMP: {
        name: "Stamp, engraved",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 1200,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Stamp engraved with heraldry."
    },
    TONGS: {
        name: "Tongs, steel",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 192,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Useful to spread laundry."
    },
    TELESCOPE: {
        name: "Telescope",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 1200,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "Tool used to watch the stars."
    },
    TWEEZERS: {
        name: "Tweezers",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Useful."
    },
    WRITING_KIT: {
        name: "Writing Kit",
        group: 2 /* ItemGroup.TOOLS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_TOOLS,
        groupLabel: "Tools" /* ItemGroupLabel.TOOLS */,
        nb: 1,
        price: 480,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Contains a quill pen, inkpot, and ink blotter."
    },
    APOTHECARY_BOOK: {
        name: "Apothecary Book",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 1920,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Apothecary books are usually hand-written. A basic apothecary book contains ingredient descriptions and diagrammed instructions for brewing processes. Formulas for Digestive Tonics, Healing Draughts, and Vitality Draughts are usually included. Advanced texts contain formulas for more exotic draughts."
    },
    ART_BOOK: {
        name: "Art Book",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 1200,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Plays, poems, and ballads or perhaps musical arrangements scribbled on loose parchment, Art books come inmany forms. They also include treatises on perspective, form, and style, often written by famous painters or sculptors - such as Leonardo da Miragliano - for mass printing."
    },
    CRYPTOGRAPHY_BOOK: {
        name: "Cryptography Book",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 1920,
        enc: 1,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "Where individual ciphers and encryption keys can be written on a single page or two, Cryptography books are often hand-scribed codices dealing with mathematics, numerology, and polyalphabetic encryption."
    },
    ENGINEER_BOOK: {
        name: "Engineer Book",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 720,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "The majority of engineering books are pressprinted. Engineering is an advanced science in the Empire, largely due to the Imperial Engineers' School in Altdorf and the Dwarf Engineers' Guild. Because of this, Engineering texts are often authored, co-authored, or edited by Dwarfs."
    },
    LAW_BOOK: {
        name: "Law Book",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 3600,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "Laws vary considerably from one region to the next. Cities with printing presses compile legislation in bound volumes, whereas judges in smaller towns often rely on documents handwritten centuries ago. Law books used by travelling lawyers or judges often combine printed and written pages from different towns across the Empire, collated and bound together within the same cover."
    },
    MAGIC_GRIMOIRE: {
        name: "Magic Grimoire",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 4800,
        enc: 1,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "Spell grimoires are usually scribed by wizards, and their covers are often secured with locks. Sometimes grimoires are even protected by magical alarms or wards. Carrying a spell grimoire is punishable as heresy unless the owning wizard is licensed by the Colleges of Magic."
    },
    MEDICINE_BOOK: {
        name: "Medicine Book",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 3600,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "Medical texts can either be scribed or pressprinted, depending on the authoring physician's prestige. Illuminations are common, and usually include detailed autopsy drawings and procedural diagrams."
    },
    RELIGION_BOOK: {
        name: "Religion Book",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 240,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Religions books come in all forms in the Empire, a realm renowned for its religious observances. There is a eager market for the most popular texts, most of which are cheaply produced by printing presses."
    },
    GUILD_LICENSE: {
        name: "Guild License",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 0,
        enc: 0,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "Guild licenses are usually printed on single sheets of parchment, stamped with an official seal, and signed by the local guild master. Guild licenses are not purchased; instead, they are granted to guild members according to each guild's traditions and laws."
    },
    LEAFLET: {
        name: "Leaflet",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Leaflets contain useful information about the local city and customs."
    },
    LEGAL_DOCUMENT: {
        name: "Legal Document",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 36,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A simple legal document such as a will, IOU or letter of intent."
    },
    MAP: {
        name: "Map",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 720,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "A map of the surronding lands."
    },
    PARCHMENT: {
        name: "Parchment",
        group: 3 /* ItemGroup.BOOKS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_BOOKS,
        groupLabel: "Books" /* ItemGroupLabel.BOOKS */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A piece of parchment."
    },
    BLACK_LOTUS: {
        name: "Black Lotus",
        group: 4 /* ItemGroup.DRUGS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS,
        groupLabel: "Drugs" /* ItemGroupLabel.DRUGS */,
        nb: 1,
        price: 4800,
        enc: 0,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "This deadly plant grows in Southland jungles and is used for blade venom. Victims who suffer at least 1 Wound from a sap-coated blade immediately take 2 Poisoned Conditions. Resisted with a Difficult (-10) Endurance Test."
    },
    HEARTKILL: {
        name: "Heartkill",
        group: 4 /* ItemGroup.DRUGS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS,
        groupLabel: "Drugs" /* ItemGroupLabel.DRUGS */,
        nb: 1,
        price: 9600,
        enc: 0,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "Combining the venoms from an Amphisbaena (a rare, two-headed serpent) and a Jabberslythe produces an odourless, colourless poison. When ingested, the deadly mixture inflicts 4 Poisoned Conditions. Resisted with a Difficult (-10) Endurance Test."
    },
    MAD_CAP_MUSHROOMS: {
        name: "Mad Cap Mushrooms",
        group: 4 /* ItemGroup.DRUGS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS,
        groupLabel: "Drugs" /* ItemGroupLabel.DRUGS */,
        nb: 1,
        price: 1200,
        enc: 0,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "These hallucinogenic mushrooms are eaten by Goblin fanatics before battle. They induce a berserker rage, adding +10 Strength, +4 Wounds, and the Frenzy Talent. When the effect wears off, the user loses 1d10 Wounds. Non- Greenskins must also pass a Challenging (+0) Endurance Test or contract a Minor Infection. Duration: Active when chewed plus an additional 2d10 minutes."
    },
    MANDRAKE_ROOT: {
        name: "Mandrake Root",
        group: 4 /* ItemGroup.DRUGS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS,
        groupLabel: "Drugs" /* ItemGroupLabel.DRUGS */,
        nb: 1,
        price: 240,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "This highly-addictive deliriant grows under gallows, and is chewed to keep an unquiet mind still. Users must pass a Willpower Test every Round to perform an Action or a Move (choose one); further, Movement is halved. However, Cool Tests receive a bonus of +20. Duration: Active when chewed plus an additional 1d10x10 minutes."
    },
    MOONFLOWER: {
        name: "Moonflower",
        group: 4 /* ItemGroup.DRUGS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS,
        groupLabel: "Drugs" /* ItemGroupLabel.DRUGS */,
        nb: 1,
        price: 1200,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "This tranquilliser is a dried moss which grows only on leaves in the Laurelorn forest. Elves use Moonflower to treat Black Plague, granting a bonus of +30 to any associated Tests for Elves to resist the disease, otherwise it has no effect on their species. Others can inhale vapours from boiling the moss and if they fail a Very Hard (-30) Willpower Test will gain an Unconscious Condition; if passed, they receive a bonus of +20 to Cool Tests and gain a Fatigued Condition. Moonflower is used by the most expensive Physicians as an anesthetic. Duration: 1d10+5 hours."
    },
    RANALDS_DELIGHT: {
        name: "Ranald's Delight",
        group: 4 /* ItemGroup.DRUGS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS,
        groupLabel: "Drugs" /* ItemGroupLabel.DRUGS */,
        nb: 1,
        price: 216,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "This highly-addictive stimulant is a synthetic compound made from sulphur, mercury and other elements. Inhaling the powder provides a bonus of +1 to Movement, and +10 to WS, S, T, and Agi. This last for 3 hours, after which the user suffers a penalty of -2 Movement and -20 on Weapon Skill, Strength, Toughness, and Agility. Duration: 1 day."
    },
    SPIT: {
        name: "Spit",
        group: 4 /* ItemGroup.DRUGS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS,
        groupLabel: "Drugs" /* ItemGroupLabel.DRUGS */,
        nb: 1,
        price: 300,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "Extracted from Chameleoleeches found in the marshes of the Empire, this extraordinarily powerful hallucinogen brings visions of something deeply desired, such as a lost lover, a dead friend, or a missing child. Called Spit on the streets, it's popular with those lost to despair. Upon exposure, you must pass a Very Hard (-30) Toughness Test or be lost to a fully real fantasy, which is a matter for the GM to handle. Duration: 1d10 minutes."
    },
    WEIRDROOT: {
        name: "Weirdroot",
        group: 4 /* ItemGroup.DRUGS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS,
        groupLabel: "Drugs" /* ItemGroupLabel.DRUGS */,
        nb: 1,
        price: 48,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "One of the most common street-drugs in the Empire, Weirdroot is chewed, bringing a sense of euphoria and pleasant hallucinations, which some suggest may be connected to the Winds of Magic. The drug gives a +10 bonus to Toughness and Willpower Tests, but a penalty of -10 to Agility, Initiative, and Intelligence Tests. Duration: Active when chewed plus an additional 1d10x10 minutes."
    },
    DIGESTIVE_TONIC: {
        name: "Digestive Tonic",
        group: 5 /* ItemGroup.HERBS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Herbs and Draughts" /* ItemGroupLabel.HERBS */,
        nb: 1,
        price: 36,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A draught used to help with stomach illness. Provides +20 to recovery tests from stomach ailments such as Galloping Trots or Bloody Flux."
    },
    EARTH_ROOT: {
        name: "Earth Root",
        group: 5 /* ItemGroup.HERBS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Herbs and Draughts" /* ItemGroupLabel.HERBS */,
        nb: 1,
        price: 1200,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "This herb is ingested to negate the effects of Buboes caused by the Black Plague (though the swellings are still significant). Further, gain a bonus of +10 on all Tests concerning the disease. Usable once per day"
    },
    FAXTORYLL: {
        name: "Faxtoryll",
        group: 5 /* ItemGroup.HERBS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Herbs and Draughts" /* ItemGroupLabel.HERBS */,
        nb: 1,
        price: 180,
        enc: 0,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "When smeared on a wound, poultices made from this herbal coagulant remove all Bleeding Conditions without a Heal Test."
    },
    HEALING_DRAUGHT: {
        name: "Healing Draught",
        group: 5 /* ItemGroup.HERBS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Herbs and Draughts" /* ItemGroupLabel.HERBS */,
        nb: 1,
        price: 120,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "If you have more than 0 Wounds, recover Toughness Bonus Wounds immediately. Usable once per encounter"
    },
    HEALING_POULTICE: {
        name: "Healing Poultice",
        group: 5 /* ItemGroup.HERBS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Herbs and Draughts" /* ItemGroupLabel.HERBS */,
        nb: 1,
        price: 144,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "This foul-smelling medicinal wrap is made from animal dung and urine combined with any number of common herbs such as Sigmafoil, Tarrabeth, and Valerian. You do not suffer any Minor Infections from a Critical Wound treated with a Healing Poultice."
    },
    NIGHTSHADE: {
        name: "Nightshade",
        group: 5 /* ItemGroup.HERBS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Herbs and Draughts" /* ItemGroupLabel.HERBS */,
        nb: 1,
        price: 720,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "Consuming this herb causes the victim to fall into a deep sleep after 2-3 hours, unless an Endurance Test is passed. A Nightshade slumber lasts 1d10+4 hours."
    },
    SALWORT: {
        name: "Salwort",
        group: 5 /* ItemGroup.HERBS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Herbs and Draughts" /* ItemGroupLabel.HERBS */,
        nb: 1,
        price: 144,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "When held under someone's nose, the aroma from a crushed sprig of this herb removes 1 Stunned Condition. Usable once per encounter"
    },
    VITALITY_DRAUGHT: {
        name: "Vitality Draught",
        group: 5 /* ItemGroup.HERBS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Herbs and Draughts" /* ItemGroupLabel.HERBS */,
        nb: 1,
        price: 216,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Drinking this draught instantly removes all Fatigued Conditions."
    },
    EYE_PATCH: {
        name: "Eye Patch",
        group: 6 /* ItemGroup.PROSTHETICS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Prosthetics" /* ItemGroupLabel.PROSTHETICS */,
        nb: 1,
        price: 6,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Often decorated, an eye patch is used to cover scarred eye sockets."
    },
    FALSE_EYE: {
        name: "False Eye",
        group: 6 /* ItemGroup.PROSTHETICS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Prosthetics" /* ItemGroupLabel.PROSTHETICS */,
        nb: 1,
        price: 240,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "Particularly popular amongst the rich who prefer not to wear cruder eye-patches, false eyes come in many forms, from wooden to polished glass."
    },
    FALSE_LEG: {
        name: "False Leg",
        group: 6 /* ItemGroup.PROSTHETICS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Prosthetics" /* ItemGroupLabel.PROSTHETICS */,
        nb: 1,
        price: 192,
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "A False Leg, allows you to ignore 1 point of Movement loss due to the missing body part. Further, for 100 XP you can regain the last point of Movement Loss as you train yourself to use your new body part, and for 200 XP you relearn how to use Dodge again. This all requires you not to lose your False Leg, though."
    },
    GILDED_NOSE: {
        name: "Gilded Nose",
        group: 6 /* ItemGroup.PROSTHETICS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Prosthetics" /* ItemGroupLabel.PROSTHETICS */,
        nb: 1,
        price: 216,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Though most are made of wood or ceramic, the term gilded nose is widely used regardless. You can ignore the Fellowship loss for having no nose."
    },
    HOOK: {
        name: "Hook",
        group: 6 /* ItemGroup.PROSTHETICS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Prosthetics" /* ItemGroupLabel.PROSTHETICS */,
        nb: 1,
        price: 40,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "You have a hook strapped where you used to have a hand. A surprisingly nimble tool once you are used to it, you can buy back the -20 penalty on all Tests involving two hands for 100 XP per 5 you subtract from the penalty, removing the penalty completely for 400 XP."
    },
    ENGINEERING_MARVEL: {
        name: "Engineering Marvel",
        group: 6 /* ItemGroup.PROSTHETICS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Prosthetics" /* ItemGroupLabel.PROSTHETICS */,
        nb: 1,
        price: 4800,
        enc: 1,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        description: "Only for the exceedingly rich, you commission a work of art from one of the Engineers' Guilds, allowing you to completely ignore the loss of an ear, hand, arm, or leg, as steam hisses and machinery clicks in place of blood and muscle. Should you ever receive a Critical Wound to the marvel, it automatically breaks down, and needs to be taken back for costly repair."
    },
    WOODEN_TEETH: {
        name: "Wooden Teeth",
        group: 6 /* ItemGroup.PROSTHETICS */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Prosthetics" /* ItemGroupLabel.PROSTHETICS */,
        nb: 1,
        price: 120,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "False Teeth are often beautifully carved and painted, and sometimes a significant improvement to the originals. You ignore all penalties for loss of teeth."
    },
    BALL: {
        name: "Ball",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 5,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Simply a ball."
    },
    BANDAGE: {
        name: "Bandage",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 4,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Bandages are used to cure bleeding wounds. A successful Heal or Dexterity Test removes +1 extra Bleeding Status."
    },
    BATON: {
        name: "BATON",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Go fetch !"
    },
    BEDROLL: {
        name: "Bedroll",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 72,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Used to sleep outside without freezing. Endurance Tests rolled to resist cold exposure gain a bonus of +20 when resting."
    },
    BLANKET: {
        name: "Blanket",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 8,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Not as effective as a bedroll but makes nights more confortable."
    },
    CANDLE: {
        name: "Candle",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 12,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Provides illumination for 10 yards when lit."
    },
    CANVAS_TARP: {
        name: "Canvas Tarp",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 96,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A simple tarp made of canvas."
    },
    CHALK: {
        name: "Chalk",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 10,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A bit of chalk."
    },
    CHARCOAL_STICK: {
        name: "Charcoal Stick",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 10,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A piece of charcoal used to write or draw."
    },
    CUTLERY: {
        name: "Cutlery",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 42,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A set of cutlery composed of a plate, a glass, a knife and a fork."
    },
    DAVRISH_LAMP: {
        name: "Davrish Lamp",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 480,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "A safety lamp emitting the light of a candle, first developed for Reikland's mines by Master Engineer Davrich Stephansson. It flares brightly in 'firedamp' (explosive gasses); after 1d10 rounds of exposure to the lamp the firedamp will explode. It is wise to withdraw before this happens."
    },
    DECK_OF_CARDS: {
        name: "Deck of cards",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A set of cards used in a variety of games like The Red Empress."
    },
    COOKING_POT: {
        name: "Cooking Pot",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 96,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A pot used for cooking in the wilderness."
    },
    CUP: {
        name: "Cup",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 8,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A wooden cup often used by adventurers."
    },
    DICE: {
        name: "Dice",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 10,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A normal dice used in games of chance."
    },
    DOLL: {
        name: "Doll",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 24,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A nice gift for children."
    },
    GRAPPLING_HOOK: {
        name: "Grappling Hook",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 250,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Coupled with a rope, allows unscalable surfaces to be climbed."
    },
    INSTRUMENT: {
        name: "Instrument",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 480,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        description: "A well made music instrument."
    },
    LAMP_OIL: {
        name: "Lamp Oil",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 24,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Used to refill lanterns. Contains enough fuel for 4 hours of standard use, or 8 hours of low flame equivalent to a candle."
    },
    LANTERN: {
        name: "Lantern",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 144,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Provides illumination for 20 yards."
    },
    STORM_LANTERN: {
        name: "Storm Lantern",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 240,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Shutters protect the flame from wind, and also enable the light to be directed in a 90 degrees arc or darkened altogether. Provides illumination for 20 yards, or 30 when targeted."
    },
    MATCH: {
        name: "Match",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 1,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A single match, don't blow it."
    },
    PAN: {
        name: "Pan",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 90,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A simple frying pan. Some would say it is even better than a sword."
    },
    PIPE_AND_TOBACCO: {
        name: "Pipe and tobacco",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 40,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "Smoking kill ! But it gives a certain style."
    },
    PLATE: {
        name: "Plate",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A wooden plate."
    },
    BOWL: {
        name: "Bowl",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "A wooden bowl."
    },
    RAGS: {
        name: "Rags",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 1,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "Dirty rags worn by street rats."
    },
    ROPE: {
        name: "Rope, 10 yards",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 52,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        description: "10 yards of good rope."
    },
    TENT: {
        name: "Tent",
        group: 7 /* ItemGroup.MISC */,
        groupIcon: TEW.DATABASE.ICONS.SET.ITEM_DRUGS, //TODO change icon
        groupLabel: "Miscellaneous Trappings" /* ItemGroupLabel.MISC */,
        nb: 1,
        price: 144,
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        description: "A medium-sized tent accommodating four people sleeping in close quarters."
    }
};
// #endregion === ITEMS SET === //
// === //
// #region ====== ITEMS IDS === //
// The IDs are the keys of the SET object
TEW.DATABASE.ITEMS.IDS = Object.keys(TEW.DATABASE.ITEMS.SET).sort((a, b) => a.localeCompare(b));
// #endregion === ITEMS IDS === //
// === //
// #region ====== ITEMS ARRAY === //
// This is a 2D array, where the first element is the key and the second element is the value
TEW.DATABASE.ITEMS.ARRAY = Object.keys(TEW.DATABASE.ITEMS.SET).map(item => [item, TEW.DATABASE.ITEMS.SET[item]]);
// #endregion === ITEMS ARRAY === //
// #endregion =========================== TEW_Items ============================== //
// ============================== //
// #region ============================== TEW_JournalDocuments ============================== //
// #region ====== DOCUMENTS === //
TEW.DATABASE.JOURNAL_DOCUMENTS = [
    {
        id: 110,
        title: "Wanted! Bold Adventurers!",
        image: "wanted_bold_adventurers",
        paragraphs: [
            {
                content: "His Excellency, the Crown Prince, Hergard von Tasseninck, of the Grand Principality of Ostland, hereby gives notice that he is currently resident in Altdorf and wishes to engage the services of a party of skilled adventurers. Employment is to begin as soon as possible, for an indefinite period."
            },
            {
                content: "Would-be applicants are forewarned that they shall be required to undertake a most perilous mission into unexplored regions of the Grey Mountains. The matter is of the utmost delicacy and absolute discretion is required."
            },
            {
                content: "Remuneration is negotiable, depending on Experience, but a mnimum of 20 Crowns per person per day is guaranteed, in addition to a generous bonus on completion of the mission. No laggards, cowards, or dwarfs need apply."
            },
            {
                content: "Signed: Personal scribe to Crown Prince Hergard"
            }
        ]
    }
];
// #endregion =========================== TEW_JournalDocuments ============================== //
// ============================== //
// #region ============================== TEW_Levelling ============================== //
// ----------------------
// #region ====== COST BRACKETS === //
TEW.LEVELLING.BRACKET_SIZE = 5;
TEW.LEVELLING.LAST_BRACKET = 14;
// Talents have a flat cost for now, as buying one several times is not implemented yet
TEW.LEVELLING.TALENT_COST = 100;
// Brackets: 0-5, 6-10, 11-15, ..., 66-70, 71+
TEW.LEVELLING.CHARACTERISTIC_COSTS = [
    25, // 0 - 5
    30, // 6 - 10
    40, // 11 - 15
    50, // 16 - 20
    70, // 21 - 25
    90, // 26 - 30
    120, // 31 - 35
    150, // 36 - 40
    190, // 41 - 45
    230, // 46 - 50
    280, // 51 - 55
    330, // 56 - 60
    390, // 61 - 65
    450, // 66 - 70
    520 // 71 +
];
TEW.LEVELLING.COMPETENCE_COSTS = [
    10, // 0 - 5
    15, // 6 - 10
    20, // 11 - 15
    30, // 16 - 20
    40, // 21 - 25
    60, // 26 - 30
    80, // 31 - 35
    110, // 36 - 40
    140, // 41 - 45
    180, // 46 - 50
    220, // 51 - 55
    270, // 56 - 60
    320, // 61 - 65
    380, // 66 - 70
    440 // 71 +
];
// #endregion === COST BRACKETS === //
// === //
// #region ====== COST COMPUTATION === //
TEW.LEVELLING.bracket = function (advances) {
    if (advances <= TEW.LEVELLING.BRACKET_SIZE) {
        return 0;
    }
    return Math.min(Math.ceil(advances / TEW.LEVELLING.BRACKET_SIZE) - 1, TEW.LEVELLING.LAST_BRACKET);
};
TEW.LEVELLING.characteristicCost = function (advances) {
    return TEW.LEVELLING.CHARACTERISTIC_COSTS[TEW.LEVELLING.bracket(advances)];
};
TEW.LEVELLING.competenceCost = function (advances) {
    return TEW.LEVELLING.COMPETENCE_COSTS[TEW.LEVELLING.bracket(advances)];
};
TEW.LEVELLING.characteristicRangeCost = function (fromAdvances, toAdvances) {
    let total = 0;
    for (let advances = fromAdvances; advances < toAdvances; advances++) {
        total += TEW.LEVELLING.characteristicCost(advances);
    }
    return total;
};
TEW.LEVELLING.competenceRangeCost = function (fromAdvances, toAdvances) {
    let total = 0;
    for (let advances = fromAdvances; advances < toAdvances; advances++) {
        total += TEW.LEVELLING.competenceCost(advances);
    }
    return total;
};
// #endregion === COST COMPUTATION === //
// #endregion =========================== TEW_Levelling ============================== //
// ============================== //
// #region ============================== TEW_Npc ============================== //
// ----------------------
TEW.DATABASE.NPCS = TEW.DATABASE.NPCS || {};
// #region ====== NPCS SET === //
TEW.DATABASE.NPCS.SET = {
    GUSTAV_FONDLEBURGER: {
        name: "Gustav Fondleburger",
        stats: {
            WEAS: 28,
            BALS: 32,
            STRG: 31,
            TOUG: 41,
            INIT: 38,
            AGIL: 34,
            DEXT: 35,
            INTL: 39,
            WILL: 29,
            FELW: 52
        },
        wounds: 2, // 13
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
// #endregion === NPCS SET === //
// #region ====== BATTLE TROOPS === //
TEW.DATABASE.NPCS.TROOPS = {
    BATTLE_TEST: {
        members: ["GUSTAV_FONDLEBURGER"]
    }
};
// #endregion === BATTLE TROOPS === //
// #endregion =========================== TEW_Npc ============================== //
// ============================== //
// #region ============================== TEW_Quests ============================== //
// #region ====== QUESTS === //
TEW.DATABASE.QUESTS = [{
        gameVariableId: 52,
        icon: TEW.DATABASE.ICONS.SET.EMPIRE_CROSS,
        title: "Every good story starts with an inn",
        paragraphs: [{
                content: "On their way to Altdorf to find a well paid job, the group is caught up by nightfall and must find a place to stay for the night."
            }],
        steps: [{
                title: "A nice place to sleep",
                paragraphs: [{
                        content: "The Reikland is full of coaching inns, maybe one is nearby."
                    }, {
                        content: "Speak to each customer in the barroom."
                    }]
            }, {
                title: "The Coach and Horses",
                paragraphs: [{
                        content: "While Gustav is preparing food and drinks, the group meets the other clients. Maybe one could bring them to their destination."
                    }, {
                        content: "Speak to each customer in the barroom."
                    }]
            }, {
                title: "A good night sleep",
                paragraphs: [{
                        content: "Now that the transport for Altdorf is assured, the group can go to sleep."
                    }, {
                        content: "Go to sleep."
                    }]
            }, {
                title: "Rise and Shine !",
                paragraphs: [{
                        content: "The coachmen are nowhere to be seen, it might be a good idea to wake them up."
                    }, {
                        content: "Find the coachmen and wake them up."
                    }]
            }, {
                title: "The journey begins",
                paragraphs: [{
                        content: "Everyone is ready, it is time to leave."
                    }, {
                        content: "Get on the coach and leave to Altdorf."
                    }]
            }]
    }, {
        gameVariableId: 53,
        title: "Wanted : Bold Adventurers",
        paragraphs: [{
                content: "The group found an interesting job offer."
            }],
        steps: [{
                title: "What does it say ?",
                paragraphs: [{
                        content: "On the wall of the Coach and Horses, the group found a wanted poster for bold adventurers."
                    }, {
                        content: "Read the poster."
                    }]
            }, {
                title: "Who is that ?",
                paragraphs: [{
                        content: "The wanted poster was emmited by the Crown Prince of Ostland Hergard von Tasseninck. He needs a group of skilled adventurers to form an expedition to the Grey Mountains."
                    }, {
                        content: "Ask the bartender about the Crown Prince of Ostland."
                    }]
            }, {
                title: "Let's apply !",
                paragraphs: [{
                        content: "The job offer seems legitimate, the group is heading to Altdorf to meet with their backer."
                    }, {
                        content: "Meet the Crown Prince in Altdorf."
                    }]
            }]
    }, {
        gameVariableId: 54,
        title: "The Coachmen",
        paragraphs: [{
                content: "Two coachmen are drinking."
            }, {
                content: "Speak to the coachmen"
            }],
        steps: [{
                title: "Drunk drivers",
                paragraphs: [{
                        content: "The coachmen are heading to Altdorf. The group needs to find money to buy tickets."
                    }, {
                        content: "Find enough money to get on the next coach and buy these seats."
                    }]
            }]
    }, {
        gameVariableId: 55,
        title: "The Noblewoman",
        paragraphs: [{
                content: "A Noblewoman is dining with her entourage."
            }, {
                content: "Speak to the Noblewoman."
            }],
        steps: []
    }, {
        gameVariableId: 56,
        title: "The Apprentice",
        paragraphs: [{
                content: "A young man is reading a book."
            }, {
                content: "Speak to the young man."
            }],
        steps: []
    }, {
        gameVariableId: 57,
        title: "The Gambler",
        paragraphs: [{
                content: "A well dressed and good-looking man drinks at the bar."
            }, {
                content: "Speak to the man."
            }],
        steps: [{
                title: "A game of chance",
                paragraphs: [{
                        content: "Phillipe Descartes suggests a game of Red Empress to the group. It might be a good way to earn some money."
                    }, {
                        content: "Beat Phillipe at his own game."
                    }],
            }, {
                title: "Cheater !",
                paragraphs: [{
                        content: "Phillipe was caught cheating by the group ! He is going for the run."
                    }, {
                        content: "Catch Phillipe and get your money back."
                    }],
            }, {
                title: "Welcome to the lockup",
                paragraphs: [{
                        content: "The group has caught the cheater and must now decide what to do with him."
                    }, {
                        content: "Talk to the gambler and decide his fate."
                    }],
            }]
    }];
// #endregion =========================== TEW_Quests ============================== //
// ============================== //
// #region ============================== TEW_Spells ============================== //
// ----------------------
TEW.DATABASE.SPELLS = {};
// #region ====== SPELLS SET === //
TEW.DATABASE.SPELLS.SET = {
    AETHYRIC_ARMOUR: {
        name: "Aethyric Armour",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 2,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You gain +1 Armor Point to all Hit Locations as you wrap yourself in a protective swathe of magic.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    AETHYRIC_ARMS: {
        name: "Aethyric Arms",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 2,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You create a melee weapon with a Damage equal to your Willpower Bonus. This may take any form, and so use any Melee Skill you may possess. The weapon counts as Magical.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    ARROW_SHIELD: {
        name: "Arrow Shield",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 3,
        range: {
            type: "Self" /* SpellRange.SELF */
        },
        target: {
            type: "AoE" /* SpellTarget.AOE */,
            distance: "Willpower Bonus" /* SpellTargetRadius.WILL_BONUS */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "Any missiles containing organic matter, such as arrows with wooden shafts, are automatically destroyed if they pass within the Area of Effect, causing no damage to their target. Missiles comprising only inorganic matter, such as throwing knives or pistol shots, are unaffected.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    BLAST: {
        name: "Blast",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 4,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "AoE" /* SpellTarget.AOE */,
            distance: "Willpower Bonus" /* SpellTargetRadius.WILL_BONUS */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You channel magic into an explosive blast. This is a magic missile with Damage +3 that targets everyone in the Area of Effect.",
        effect: {
            type: 0 /* SpellEffectType.MAGIC_MISSILE */,
            damage: 3,
        }
    },
    BOLT: {
        name: "Bolt",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 4,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You channel magic into a damaging bolt. Bolt is a magic missile with a Damage of +4.",
        effect: {
            type: 0 /* SpellEffectType.MAGIC_MISSILE */,
            damage: 4,
        }
    },
    BREATH: {
        name: "Breath",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 4,
        range: {
            type: "One" /* SpellRange.ONE */
        },
        target: {
            type: "See Description" /* SpellTarget.SPECIAL */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You immediately make a Breath attack, as if you had spent 2 Advantage to activate the Breath Creature Trait. Breath is a magic missile with a Damage equal to your Toughness Bonus. The GM decides which type of Breath attack best suits your Arcane Magic Talent.",
        effect: {
            type: 1 /* SpellEffectType.SCALING_DAMAGE */,
            stat: "TOUG" /* Stat.TOUG */,
        }
    },
    CHAIN_ATTACK: {
        name: "Chain Attack",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 6,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "See Description" /* SpellTarget.SPECIAL */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You channel a twisting spur of rupturing magic into your target. This is a magic missile with a Damage of +4. If Chain Attack reduces a target to 0 Wounds, it leaps to another target within the spell's initial range, and within WILLpower Bonus yards of the previous target, inflicting the same Damage again. It may leap a maximum number of times equal to your WILLpower Bonus. For every +2 SL achieved, it may chain to an additional target.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    CORROSIVE_BLOOD: {
        name: "Bolt",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 4,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You infuse yourself with magic, lending your blood a fearsome potency. You gain the Corrosive Blood Creature Trait.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    DARK_VISION: {
        name: "Dark Vision",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 4,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You boost your Second Sight to assist your mundane senses. While the spell is active, gain the Dark Vision Creature Trait.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    DISTRACTING: {
        name: "Distracting",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 4,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You wreathe yourself in magic, which swirls around you, distracting your foes. While the spell is active, gain the Distracting Creature Trait.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    DOME: {
        name: "Dome",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 7,
        range: {
            type: "Self" /* SpellRange.SELF */
        },
        target: {
            type: "AoE" /* SpellTarget.AOE */,
            distance: "Willpower Bonus" /* SpellTargetRadius.WILL_BONUS */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You create a dome of magical energy overhead, blocking incoming attacks. Anyone within the Area of Effect gains the Ward (6+) Creature Trait against magical or ranged attacks originating outside the dome. Those within may attack out of the dome as normal, and the dome does not impede movement.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    DROP: {
        name: "Drop",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 1,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You channel magic into an object being held by an opponent. This could be a weapon, a rope, or someone's hand. Unless a Challenging (+0) Dexterity Test is passed, the item is dropped. For every +2 SL you may impose an additional -10 on the Dexterity Test.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    ENTANGLE: {
        name: "Entangle",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 3,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Special" /* SpellDuration.SPECIAL */
        },
        desc: "Using magic, you entrap your target, wrapping them in whatever suits your Lore: vines, shadows, their own clothing... Your target gains one Entangled Condition with a Strength equal to your Intelligence. For every +2 SL, you may give the target +1 additional Entangled Condition. The spell lasts until all Entangled Conditions are removed.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, target, sl) => {
                const stacks = 1 + Math.floor(sl / 2);
                target.addCondition("ENTANGLED" /* ConditionId.ENTANGLED */, stacks, caster.paramByName("INTL" /* Stat.INTL */));
            },
        }
    },
    FEARSOME: {
        name: "Fearsome",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 3,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "Shrouding yourself in magic, you become fearsome and intimidating. Gain Fear 1. For every +3 SL, you may increase your Fear value by one.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    MAGIC_SHIELD: {
        name: "Magic Shield",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 4,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You encase yourself in bands of protective magic. While the spell is active, add +Willpower Bonus SL to any dispel attempts you make.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    MUNDANE_AURA: {
        name: "Mundane Aura",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 4,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower" /* SpellDuration.WILL */,
            multiplier: 10
        },
        desc: "You drain all the Winds of Magic from within your body and your possessions, removing any magical aura. For the duration of the spell you appear mundane to the Magical Sense Talent and similar. You effectively have no magical ability and your magical nature cannot be detected by any means. While this spell is in effect, you cannot cast any other spells. Mundane Aura is immediately dispelled if you make a Channelling Test.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    PUSH: {
        name: "Push",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 6,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "All living creatures within Willpower Bonus yards are pushed back your Willpower Bonus in yards and gain the Prone Condition. If this brings them into contact with a wall or other large obstacle, they take Damage equal to the distance travelled in yards. For every +2 SL, you may push creatures back another Willpower Bonus in yards.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    TELEPORT: {
        name: "Teleport",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 5,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "Using magic, you can teleport up to your Willpower Bonus in yards. This movement allows you to traverse gaps, avoid perils and pitfalls, and ignore obstacles. For every +2 SL you may increase the distance travelled by your Willpower Bonus in yards.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    TERRIFYING: {
        name: "Terrifying",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 7,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You gain the Terror (1) Creature Trait.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    WARD: {
        name: "Ward",
        type: 0 /* SpellType.SPELL */,
        domain: "Arcane" /* SpellDomain.ARCANE */,
        cn: 5,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You wrap yourself in protective magic, gaining the Ward (9+) Creature Trait.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    ANIMAL_FRIEND: {
        name: "Animal Friend",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "One" /* SpellRange.ONE */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Number" /* SpellDuration.NUMBER */,
            duration: 600
        },
        desc: "You make friends with a creature that is smaller than you and possesses the Bestial Creature Trait. The animal trusts you completely and regards you as a friend.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    BEARINGS: {
        name: "Bearings",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Self" /* SpellRange.SELF */
        },
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You sense the influx of the Winds of Magic from their source. You know which direction North is.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    DAZZLE: {
        name: "Dazzle",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Touch" /* SpellRange.TOUCH */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "The target gains 1 Blinded Condition, and gains 1 Blinded Condition at the start of each round for the duration of the spell.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    CAREFUL_STEP: {
        name: "Careful Step",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Self" /* SpellRange.SELF */
        },
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower" /* SpellDuration.WILL */,
            multiplier: 10
        },
        desc: "The magic flowing through your feet ensures any organic matter you tread upon remains undamaged: twigs do not break, grass springs back to its original position, and even delicate flowers are unharmed. Those seeking to use the Track skill to pursue you through rural terrain suffer a -30 penalty to their Tests.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    DART: {
        name: "Dart",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You cause a small dart of magical energy to fly from your fingers. This is a magic missile with a Damage of +0.",
        effect: {
            type: 0 /* SpellEffectType.MAGIC_MISSILE */,
            damage: 0,
        }
    },
    DRAIN: {
        name: "Drain",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Touch" /* SpellRange.TOUCH */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You touch your targets, draining their life. This counts as a magic missile with Damage +0 that ignores Armour Points. You then Heal 1 Wound.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    EAVESDROP: {
        name: "Eavesdrop",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Initiative Bonus" /* SpellDuration.INIT_BONUS */,
            multiplier: 10
        },
        desc: "You can hear what your targets say as if you were standing right next to them.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    GUST: {
        name: "Gust",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "See Description" /* SpellTarget.SPECIAL */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You create a brief gust of wind, strong enough to blow out a candle, cause an open door to slam, or blow a few pages to the floor.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    LIGHT: {
        name: "Light",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Self" /* SpellRange.SELF */
        },
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower" /* SpellDuration.WILL */,
            multiplier: 10
        },
        desc: "You create a small light, roughly equivalent to a torch, which glows from your hand, staff or some other part of your person. While the spell is active, you may choose to increase the illumination to that of a lantern, or decrease it to that of a candle, if you pass a Average (+20) Channelling Test.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    MAGIC_FLAME: {
        name: "Magic Flame",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Self" /* SpellRange.SELF */
        },
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You kindle a small flame that flickers to life in the palm of your hand. It will not burn you, but will emit heat and set flammable objects alight, like a natural flame.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    MARSH_LIGHTS: {
        name: "Marsh Lights",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "See Description" /* SpellTarget.SPECIAL */
        },
        duration: {
            type: "Willpower" /* SpellDuration.WILL */,
            multiplier: 10
        },
        desc: "You cast your voice at a point within Willpower yards, regardless of line of sight. Your voice sounds from this point, and all within earshot will hear it.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    OPEN_LOCK: {
        name: "Open Lock",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Touch" /* SpellRange.TOUCH */
        },
        target: {
            type: "See Description" /* SpellTarget.SPECIAL */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "One non-magical lock you touch opens.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    PURIFY_WATER: {
        name: "Purify Water",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "One" /* SpellRange.ONE */
        },
        target: {
            type: "See Description" /* SpellTarget.SPECIAL */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You purify all water within a receptacle, such as a water flask, stein, or jug. All non-magical impurities, such as poison or contaminants are removed, leaving crisp, clear, potable water. If the vessel contained another liquid that is predominantly water - such as ale, or wine - this is also purified, turning into delicious, pure, non-alcoholic water.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    SLEEP: {
        name: "Sleep",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Touch" /* SpellRange.TOUCH */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You touch your opponent, sending them into a deep sleep. If the target has the Prone Condition, they gain the Unconscious Condition as they fall asleep. They remain unconscious for the duration, although loud noises or being moved or jostled will awaken them instantly. If your targets are standing or sitting when affected, they start themselves awake as they hit the ground, gaining the Prone Condition, but remaining conscious. If your targets are not resisting, and are suitably tired, they will, at the spell's end, pass into a deep and restful sleep.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    SHOCK: {
        name: "Shock",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Touch" /* SpellRange.TOUCH */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "Your target receives 1 Stunned Condition.",
        effect: {
            type: 2 /* SpellEffectType.CONDITION */,
            conditionId: "STUNNED" /* ConditionId.STUNNED */,
        }
    },
    SOUNDS: {
        name: "Sounds",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "See Description" /* SpellTarget.SPECIAL */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You create small noises nearby. You can create quiet, indistinct noises that sound as if they come from a specific location within range, regardless of line of sight. The noises can evoke something specific, such as footsteps, whispers or the howl of an animal, but nothing so distinct that it might convey a message. While the spell is active, you may control the sounds by passing a Average (+20) Channelling Test. A success allows you to move the sounds to another point within range, or to increase or decrease their volume.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    WARNING: {
        name: "Warning",
        type: 0 /* SpellType.SPELL */,
        domain: "Petty" /* SpellDomain.PETTY */,
        cn: 0,
        range: {
            type: "One" /* SpellRange.ONE */
        },
        target: {
            type: "See Description" /* SpellTarget.SPECIAL */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "You channel magic into an object, noticing immediately if it has been poisoned or trapped.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    AQSHYS_AEGIS: {
        name: "Aqshy's Aegis",
        type: 0 /* SpellType.SPELL */,
        domain: "Fire" /* SpellDomain.FIRE */,
        cn: 5,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You wrap yourself in a fiery cloak of Aqshy, which channels flame into the Aegis. You are completely immune to damage from non-magical fire, including the breath attacks of monsters, and ignore any Ablaze Conditions you receive. You receive the Ward (9+) Creature Trait against magical fire attacks including spells from the Lore of Fire.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    CAUTERISE: {
        name: "Cauterise",
        type: 0 /* SpellType.SPELL */,
        domain: "Fire" /* SpellDomain.FIRE */,
        cn: 4,
        range: {
            type: "Touch" /* SpellRange.TOUCH */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Instant" /* SpellDuration.INSTANT */
        },
        desc: "Channelling Aqshy through your hands you lay them on an ally's wounds. Immediately heal 1d10 Wounds and remove all Bleeding Conditions. Further, the wounds will not become infected. Targets without the Arcane Magic (Fire) Talent, must pass a Challenging (+0) Cool Test or scream in agony.. If Failed by -6 or more SL, the target gains the Unconscious Condition and is permanently scarred, waking up 1d10 hours later",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    CROWN_OF_FLAME: {
        name: "Crown of Flame",
        type: 0 /* SpellType.SPELL */,
        domain: "Fire" /* SpellDomain.FIRE */,
        cn: 8,
        target: {
            type: "Self" /* SpellTarget.SELF */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You channel Aqshy into a majestic crown of inspiring fire about your brow. Gain the Fear (1) Trait and +1 War Leader Talent while the spell is active. For every +2 SL, you may increase your Fear value by +1, or take War Leader Talent again. Furthermore, gain a bonus of +10 on all attempts to Channel and Cast with Aqshy while the spell is in effect.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    FLAMING_HEARTS: {
        name: "Flaming Hearts",
        type: 0 /* SpellType.SPELL */,
        domain: "Fire" /* SpellDomain.FIRE */,
        cn: 8,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "AoE" /* SpellTarget.AOE */,
            distance: "Willpower Bonus" /* SpellTargetRadius.WILL_BONUS */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "Your voice takes on a rich resonance, echoing with Aqshy's fiery passion. Affected allies lose all Broken and Fatigued Conditions, and gain +1 Drilled, Fearless and Stout-hearted Talent while the spell is in effect.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    FIREWALL: {
        name: "Firewall",
        type: 0 /* SpellType.SPELL */,
        domain: "Fire" /* SpellDomain.FIRE */,
        cn: 6,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "AoE" /* SpellTarget.AOE */,
            distance: "Special" /* SpellTargetRadius.SPECIAL */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You channel a fiery streak of Aqshy , creating a wall of flame. The Firewall is Willpower Bonus yards wide, and 1 yard deep. For every +2 SL you may extend the length of the Firewall by +Willpower Bonus yards. Anyone crossing the firewall gains 1 Ablaze condition and suffers a hit with a Damage equal to your Willpower Bonus, handled like a magical missile.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    GREAT_FIRES_OF_UZHUL: {
        name: "Great Fires of U'Zhul",
        type: 0 /* SpellType.SPELL */,
        domain: "Fire" /* SpellDomain.FIRE */,
        cn: 10,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "AoE" /* SpellTarget.AOE */,
            distance: "Willpower Bonus" /* SpellTargetRadius.WILL_BONUS */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You hurl a great, explosive blast of Aqshy into an enemy, which erupts into a furious blaze, burning with the heat of a forge. This is a magical missile with Damage +10 that ignores Armour Points and inflicts +2 Ablaze Conditions and the Prone Condition on a target. Everyone within the Area of Effect of that target suffers a Damage +5 hit ignoring Armour Points, and must pass a Dodge Test or also gain +1 Ablaze Condition. The spell stops behaving like a magic missile as the fire continues to burn in the Area of Effect for the duration. Anyone within the Area of Effect at the start of a round suffers 1d10+6 Damage, ignoring APs, and gains +1 Ablaze Condition.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    FLAMING_SWORD_OF_RHUIN: {
        name: "Flaming Sword of Rhuin",
        type: 0 /* SpellType.SPELL */,
        domain: "Fire" /* SpellDomain.FIRE */,
        cn: 8,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "One" /* SpellTarget.ONE */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You wreathe a sword in magical flames. The weapon has Damage +6 and the Impact Quality (see page 298), and anyone struck by the blade gains +1 Ablaze Condition. If wielders do not possess the Arcane Magic (Fire) Talent, and they fumble an attack with the Flaming Sword, they gain +1 Ablaze Condition.",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    },
    PURGE: {
        name: "Purge",
        type: 0 /* SpellType.SPELL */,
        domain: "Fire" /* SpellDomain.FIRE */,
        cn: 10,
        range: {
            type: "Willpower" /* SpellRange.WILL */
        },
        target: {
            type: "AoE" /* SpellTarget.AOE */,
            distance: "Willpower Bonus" /* SpellTargetRadius.WILL_BONUS */
        },
        duration: {
            type: "Willpower Bonus" /* SpellDuration.WILL_BONUS */
        },
        desc: "You funnel intense flame to burn away the taint and corruption in an area. Anything flammable is set alight, and any creatures in the area takes +SL Ablaze conditions. If the location contains a Corrupting Influence, such as Dhar, warpstone, or a Chaostainted object, it too will smoulder and blacken, beginning to burn. This spell may be maintained in subsequent rounds by passing a Channelling Test. As a rough guideline, a small quantity of warpstone, or a minor Chaos-tainted object may require 10-Willpower Bonus Rounds (minimum of 1 Round). A larger quantity of warpstone or a more potent Chaos-tainted object may require double this. A powerful Chaos Artefact may take hours, or even longer...",
        effect: {
            type: 3 /* SpellEffectType.SPECIAL */,
            handler: (caster, targets) => { },
        }
    }
};
// #endregion === SPELLS SET === //
// === //
// #region ====== SPELLS IDS === //
// The IDs are the keys of the SET object
TEW.DATABASE.SPELLS.IDS = Object.keys(TEW.DATABASE.SPELLS.SET);
// #endregion === SPELLS IDS === //
// === //
// #region ====== SPELLS ARRAY === //
// This is a 2D array, where the first element is the key and the second element is the value
TEW.DATABASE.SPELLS.ARRAY = Object.keys(TEW.DATABASE.SPELLS.SET)
    .sort((a, b) => a.localeCompare(b))
    .map(spell => [spell, TEW.DATABASE.SPELLS.SET[spell]]);
// #endregion === SPELLS ARRAY === //
// #endregion =========================== TEW_Spells ============================== //
// ============================== //
// #region ============================== TEW_Talents ============================== //
// ----------------------
TEW.DATABASE.TALENTS = {};
// #region ====== TALENTS SET === //
TEW.DATABASE.TALENTS.SET = {
    ACCURATE_SHOT: {
        name: "Accurate Shot",
        description: "You are an exceptional shot and know where to shoot an enemy in order to inflict maximum damage. You deal your Accurate Shot level in extra Damage with all ranged weapons.",
        maxTaken: "BALS" /* Stat.BALS */
    },
    ACUTE_SENSE_SIGHT: {
        name: "Acute Sense (Sight)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    ACUTE_SENSE_TASTE: {
        name: "Acute Sense (Taste)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    ACUTE_SENSE_SMELL: {
        name: "Acute Sense (Smell)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    ACUTE_SENSE_HEARING: {
        name: "Acute Sense (Hearing)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    ACUTE_SENSE_TOUCH: {
        name: "Acute Sense (Touch)",
        description: "One of your primary five senses is highly developed, allowing you to spot what others miss. You may take Perception Tests to detect normally imperceptible details with the associated sense, as dictated by the GM. This could include: seeing an eagle beyond everyone else's eyeshot, smelling an almost odourless poison, hearing the breath of an unmoving mouse within a wall, feeling a worn away letter in a carving, or tasting that two beers from the same brewer have been drawn from two different barrels.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    AETHYRIC_ATTUNEMENT: {
        name: "Aethyric Attunement",
        description: "Your experience, talent or training lets you more safely manipulate the Winds of Magic. You do not suffer a Miscast if you roll a double on a successful Channel Test.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    ALLEY_CAT: {
        name: "Alley Cat",
        description: "You are at home in shadowy backstreets. When using Stealth (Urban), you may reverse the dice of any failed Test if this will score a Success.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    AMBIDEXTROUS: {
        name: "Ambidextrous",
        description: "You can use your off-hand far better than most folk, either by training or innate talent. You only suffer a penalty of -10 to Tests relying solely on your secondary hand, not -20. If you have this Talent twice, you suffer no penalty at all.",
        maxTaken: 2
    },
    ANIMAL_AFFINITY: {
        name: "Animal Affinity",
        description: "Wild animals feel comfortable in your presence, and often follow your lead. All creatures with the Bestial Trait not trained to be belligerent will automatically be calm in your presence unless they have a reason not to be, such as pain, an attack, being naturally hyper-aggressive, or having nearby young.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    ARCANE_MAGIC: {
        name: "Arcane Magic",
        description: "You either study one of the 8 Arcane Lores of Magic - Beasts, Death, Fire, Heavens, Metal, Shadow, Light, or Life - or practice a lesser known Lore, such as Hedgecraft or Necromancy. You may now memorise spells from your chosen Lore. Under normal circumstances, you may not learn more than one Arcane Magic (Lore) Talent. Further, you may not learn the Bless or Invoke Talents when you have the Arcane Magic Talent. You can unlearn this Talent for 100 XP, but will immediately lose all of your spells if you do so.",
        maxTaken: 1
    },
    ARCANE_MAGIC_CELESTIAL: {
        name: "Arcane Magic (Celestial)",
        description: "You either study one of the 8 Arcane Lores of Magic - Beasts, Death, Fire, Heavens, Metal, Shadow, Light, or Life - or practice a lesser known Lore, such as Hedgecraft or Necromancy. You may now memorise spells from your chosen Lore. Under normal circumstances, you may not learn more than one Arcane Magic (Lore) Talent. Further, you may not learn the Bless or Invoke Talents when you have the Arcane Magic Talent. You can unlearn this Talent for 100 XP, but will immediately lose all of your spells if you do so.",
        maxTaken: 1
    },
    ARCANE_MAGIC_HEDGECRAFT: {
        name: "Arcane Magic (Hedgecraft)",
        description: "You either study one of the 8 Arcane Lores of Magic - Beasts, Death, Fire, Heavens, Metal, Shadow, Light, or Life - or practice a lesser known Lore, such as Hedgecraft or Necromancy. You may now memorise spells from your chosen Lore. Under normal circumstances, you may not learn more than one Arcane Magic (Lore) Talent. Further, you may not learn the Bless or Invoke Talents when you have the Arcane Magic Talent. You can unlearn this Talent for 100 XP, but will immediately lose all of your spells if you do so.",
        maxTaken: 1
    },
    ARCANE_MAGIC_WITCHERY: {
        name: "Arcane Magic (Witchery)",
        description: "You either study one of the 8 Arcane Lores of Magic - Beasts, Death, Fire, Heavens, Metal, Shadow, Light, or Life - or practice a lesser known Lore, such as Hedgecraft or Necromancy. You may now memorise spells from your chosen Lore. Under normal circumstances, you may not learn more than one Arcane Magic (Lore) Talent. Further, you may not learn the Bless or Invoke Talents when you have the Arcane Magic Talent. You can unlearn this Talent for 100 XP, but will immediately lose all of your spells if you do so.",
        maxTaken: 1
    },
    ARGUMENTATIVE: {
        name: "Argumentative",
        description: "You are used to arguing your points and winning. If you roll a successful Charm Test to debate with an opponent, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 24 could be used for +4 SL.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    ARTISTIC: {
        name: "Artistic",
        description: "You have a natural talent for art, able to produce precise sketches with nothing but time and appropriate media. This ability has several in-game uses, ranging from creating Wanted Posters to sketching accurate journals, and has spot benefits as determined by the GM. Further to this, add Art (Any) to any Career you enter; if it is already in Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    ATTRACTIVE: {
        name: "Attractive",
        description: "Whether it's your piercing eyes, your strong frame, or maybe the way you flash your perfect teeth, you know how to make the best use of what the gods gave you. When you successfully use Charm to influence those attracted to you, you can choose to either use your rolled SL, or the number rolled on your",
        maxTaken: "FELW" /* Stat.FELW */
    },
    BATTLE_RAGE: {
        name: "Battle Rage",
        description: "You are better able to control your Frenzy in combat. You can end your Frenzy with a successful Cool Test at the end of the round.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    BEAT_BLADE: {
        name: "Beat Blade",
        description: "You are trained to make sharp controlled blows to your opponent's weapon, creating an opening for an attack or simply impeding an incoming attack. For your Action, you can choose to Beat Blade before rolling. Perform a Melee Test; if successful, your opponent loses -1 Advantage, and loses a further -1 per SL you score. This Test is not Opposed. This Talent is of no use if your opponent has no weapon, or has a larger Size than you",
        maxTaken: "WEAS" /* Stat.WEAS */
    },
    BENEATH_NOTICE: {
        name: "Beneath Notice",
        description: "The high and mighty pay no attention to your presence, knowing you are well beneath their notice. Assuming you are properly attired and not in an incongruous position, those of a higher Status Tier will normally ignore you unless your presence becomes inappropriate, which can make it very easy to listen into conversations you perhaps shouldn't. Further, characters with a higher Status Tier than you gain no Advantage for striking or wounding you in combat, as there is nothing to be gained for defeating such a lowly cur.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    BERSERK_CHARGE: {
        name: "Berserk Charge",
        description: "You hurl yourself at your enemies with reckless abandon, using the force of your charge to add weight to your strikes. When you Charge, you gain +1 Damage to all Melee attacks per level in this Talent.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    BLATHER: {
        name: "Blather",
        description: "Called 'opening your mouth and letting your belly rumble' in Nordland, or simply 'bullshitting' in Ostland, blathering involves talking rapidly and incessantly, or talking volubly and at-length, about inconsequential or nonsense matters, and is used to verbally confuse and confound a target. You use your Charm Skill to Blather. Attempt an Opposed Charm/Intelligence Test. Success gives your opponent a Stunned Condition. Further, for each level you have in Blather, your opponent gains another Stunned Condition. Targets Stunned by Blather may do nothing other than stare at you dumbfounded as they try to catch-up with or understand what you are saying. Once the last Stunned Condition comes to an end, the target finally gets a word in, and may not be best pleased with you - after all, you have been talking about nothing or nonsense for some time. Should you stop talking, your opponent immediately loses all Stunned Conditions caused by your Blather. Generally, you can only attempt to Blather at a character once per scene, or perhaps longer as determined by the GM, as the target soon wises up to your antics.",
        maxTaken: "FELW" /* Stat.FELW */
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
        maxTaken: "INTL" /* Stat.INTL */
    },
    BREAK_AND_ENTER: {
        name: "Break and Enter",
        description: "You are an expert at quickly breaking down doors and forcing entry. You may add +1 Damage for each level in this Talent when determining damage against inanimate objects such as windows, chests, doors, and similar.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    BRIBER: {
        name: "Briber",
        description: "You are an exceedingly skilled briber. The GM should reduce the base cost of any required bribe by 10% per level you have in Briber, to a minimum of 10% of the original amount.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    CARDSHARP: {
        name: "Cardsharp",
        description: "You are used to playing, and winning, at cards, although your methods may involve a little cheating. When you successfully use Gamble or Sleight of Hand when playing cards, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 28 could be used for +8 SL. If you play a real card game to represent what is happening in-game, you may receive an extra number of cards per deal equal to your level in Cardsharp, then discard down to the appropriate hand-size before each round of play.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    CAREFUL_STRIKE: {
        name: "Careful Strike",
        description: "You are skilled at hitting your enemy exactly where you want to, either at range or in melee. You may modify your Hit Location result by up to +/-10 per time you have this Talent. So, if you had this Talent twice and hit location 34, the Right Arm, you could modify this down to 14, the Left Arm, or up to 54, the Body",
        maxTaken: "INIT" /* Stat.INIT */
    },
    CAROUSER: {
        name: "Carouser",
        description: "You are a seasoned drinker and know how to party hard. You may reverse the dice of any failed Consume Alcohol Test if this will score a Success.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    CATFALL: {
        name: "Catfall",
        description: "You are nimble and balanced like a cat, and are able to fall much greater distances unharmed than others might. Whenever you fall, you attempt an Athletics Test. If successful, reduce the distance fallen by 1 yard, +1 extra yard per +1 SL scored, for the purposes of calculating Damage.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    CAT_TONGUED: {
        name: "Cat-tongued",
        description: "Like Ranald the Trickster God, you blend truth and lies as if there were no difference. When using Charm to lie, listeners do not get to oppose your Charm with their Intuition to detect if there is something fishy in what you say.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    COMBAT_AWARE: {
        name: "Combat Aware",
        description: "You are used to scanning the battlefield to make snap decisions informed by the shifting tides of war. You may take a Challenging (+0) Perception Test to ignore Surprise, which is modified by circumstance as normal.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    COMBAT_MASTER: {
        name: "Combat Master",
        description: "Your accumulated years of combat experience allow you to keep lesser fighters at bay. For each level in this Talent, you count as one more person for the purposes of determining if one side out-numbers the other. This Talent only comes into play when you are out-numbered. See page 162 for the rules for out-numbering.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    COMBAT_REFLEXES: {
        name: "Combat Reflexes",
        description: "You react like a flash of lightning. Add 10 to your Initiative for each level in this Talent when determining Combat Initiative.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    COMMANDING_PRESENCE: {
        name: "Commanding Presence",
        description: "Your presence fills others with hushed awe and admiration. Such is your aura of authority, those with a lower Status may not resist your Leadership tests with their Willpower. Of course, enemies are still no more likely to respect or obey you, but the common folk rarely stand against you.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    CONCOCT: {
        name: "Concoct",
        description: "You are skilled at making potions, philtres, and draughts on the go. You may take one free Crafting Endeavour to use Lore (Apothecary) without need of a Workshop. Other Crafting Endeavours use the normal rules.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    CONTORTIONIST: {
        name: "Contortionist",
        description: "You can bend and manipulate your body in a myriad of seemingly unnatural ways. This allows you to squeeze through unlikely gaps and bend your body in crazy ways, giving benefits determined by the GM, possibly with a successful Agility test.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    COOL_HEADED: {
        name: "Coolheaded",
        description: "You gain a permanent +5 bonus to your starting Willpower Characteristic this does not count towards your Advances.",
        maxTaken: 1
    },
    CRACK_THE_WHIP: {
        name: "Crack the Whip",
        description: "You know how to get the most out of your animals. When an animal you control is Fleeing or Running, it gains +1 Movement if you are using a whip.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    CRAFTSMAN: {
        name: "Craftsman",
        description: "You have true creative talent. Add one Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    CRAFTSMAN_APOTHECARY: {
        name: "Craftsman (Apothecary)",
        description: "You have true creative talent. Add one Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    CRAFTSMAN_BOATBUILDER: {
        name: "Craftsman (Boatbuilder)",
        description: "You have true creative talent. Add one Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    CRAFTSMAN_ENGINEER: {
        name: "Craftsman (Engineer)",
        description: "You have true creative talent. Add one Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    CRAFTSMAN_EXPLOSIVES: {
        name: "Craftsman (Explosives)",
        description: "You have true creative talent. Add one Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    CRAFTSMAN_HERBALIST: {
        name: "Craftsman (Herbalist)",
        description: "You have true creative talent. Add one Trade Skill to any Career you enter. If the Trade Skill is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "DEXT" /* Stat.DEXT */
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
        maxTaken: "FELW" /* Stat.FELW */
    },
    DETECT_ARTEFACT: {
        name: "Detect Artefact",
        description: "You are able to sense when magic lies within an artefact. You may attempt an Intuition Test for any magical artefact touched. If successful, you sense the item is magical; further, each SL also provides a specific special rule the item uses, if it has any. Normally, you may only attempt this Test once per artefact touched.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    DICEMAN: {
        name: "Diceman",
        description: "You are a dicing master, and all claims you cheat are clearly wrong. When you successfully use Gamble or Sleight of Hand when playing with dice, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 06 could be used for +6 SL. If you play any real-life dice games to represent in-game dice games, always roll extra dice equal to your Diceman level and choose the best results.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    DIRTY_FIGHTING: {
        name: "Dirty Fighting",
        description: "You have been taught all the dirty tricks of unarmed combat. You may choose to cause an extra +1 Damage for each level in Dirty Fighting with any successful Melee (Brawling) hit. Note: using this Talent will be seen as cheating in any formal bout.",
        maxTaken: "WEAS" /* Stat.WEAS */
    },
    DISARM: {
        name: "Disarm",
        description: "You are able to disarm an opponent with a careful flick of the wrist or a well-aimed blow to the hand. For your Action, you may attempt an Opposed Melee/Melee test. If you win, your opponent loses a held weapon, which flies 1d10 feet in a random direction (with further effects as determined by the GM). If you win by 2 SL, you can determine how far the weapon is flung instead of rolling randomly; if you win by 4 SL, you can also choose the direction the weapon goes in; if you win by 6 SL or more, you can take your opponent's weapon if you have a free hand, plucking it from the air with a flourish. This Talent is of no use if your opponent has no weapon, or is a larger Size than you.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    DISTRACT: {
        name: "Distract",
        description: "You are trained in simple movements to distract or startle your opponent, drawing eyes from your true intent. You may use your Move to perform a Distraction. This is resolved by an Opposed Athletics/Cool Test. If you win, your opponent can gain no Advantage until the end of the next Round.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    DOOMED: {
        name: "Doomed",
        description: "At the age of 10, a Priest of Morr called a Doomsayer took you aside to foretell your death in an incense-laden, coming-of-age ritual called the Dooming. In conjunction with your GM, come up with a suitable Dooming. Should your character die in a fashion that matches your Dooming, your next character gains a bonus of half the total XP your dead character accrued during play.",
        maxTaken: 1
    },
    DRILLED: {
        name: "Drilled",
        description: "You have been trained to fight shoulder-to-shoulder with other soldiers. If an enemy causes you to lose Advantage when standing beside an active ally with the Drilled Talent, you may keep 1 lost Advantage for each time you've taken the Drilled Talent.",
        maxTaken: "WEAS" /* Stat.WEAS */
    },
    DUAL_WIELDER: {
        name: "Dual Wielder",
        description: "When armed with two weapons, you may attack with both for your Action. Roll to hit with the weapon held in your primary hand. If you hit, determine Damage as normal, but remember to keep your dice roll, as you will use it again. If the first strike hits, once it is resolved, the weapon in your secondary hand can then target an available opponent of your choice using the same dice roll for the first strike, but reversed. So, if you rolled 34 to hit with the first weapon, you use 43 to hit with the second. Remember to modify this second roll by your off-hand penalty (-20 unless you have the Ambidextrous Talent). This second attack is Opposed with a new defending roll, and damage for this second strike is calculated as normal. The only exception to this is if you roll a Critical for your first strike. If this happens, use the roll on the Critical Table to also act as the roll for the second attack. So, if you scored a critical to the head and rolled 56 on the Critical table for a Major Eye Wound, your second attack would then strike out with a to-hit value of 56. If you choose to attack with both weapons, all your defensive rolls until the start of your next Turn suffer a penalty of -10. You do not gain an Advantage when you successfully strike or Wound an opponent when Dual Wielding unless both attacks hit.",
        maxTaken: 1
    },
    EMBEZZLE: {
        name: "Embezzle",
        description: "You are skilled at skimming money from your employers without being detected. Whenever you secure money when Earning (during play or performing an Income Endeavour), you may attempt an Opposed Intelligence Test with your employer (assuming you have one). If you win, you skim 2d10 + SL brass pennies, 1d10 + SL silver shillings, or 1 + SL gold crowns (depending upon the size of the business in question, as determined by the GM) without being detected. If your employer wins by 6+ SL, you gain the money, but your embezzling is detected; what then happens is left to the GM. Any other result means you have failed to embezzle any money.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    ENCLOSED_FIGHTER: {
        name: "Enclosed Fighter",
        description: "You have learned to make the most benefit out of fighting in enclosed spaces. You ignore penalties to Melee caused by confined spaces such as tunnels, the frontline, small fighting pits, and similar, and can use the Dodge Skill, even if it would normally be disallowed due to lack of space.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    ETIQUETTE_CRIMINALS: {
        name: "Etiquette (Criminals)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    ETIQUETTE_CULTISTS: {
        name: "Etiquette (Cultists)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    ETIQUETTE_GUILDERS: {
        name: "Etiquette (Guilders)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    ETIQUETTE_NOBLES: {
        name: "Etiquette (Nobles)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    ETIQUETTE_SCHOLARS: {
        name: "Etiquette (Scholars)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    ETIQUETTE_SERVANTS: {
        name: "Etiquette (Servants)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    ETIQUETTE_SOLDIERS: {
        name: "Etiquette (Soldiers)",
        description: "You can blend in socially with the chosen group so long as you are dressed and acting appropriately. If you do not have the Talent, those with it will note your discomfort in the unfamiliar environment. This is primarily a matter for roleplaying, but may confer a bonus to Fellowship Tests at the GM's discretion.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    FAST_HANDS: {
        name: "Fast Hands",
        description: "You can move your hands with surprising dexterity. Bystanders get no passive Perception Tests to spot your use of the Sleight of Hand Skill, instead they only get to Oppose your Sleight of Hand Tests if they actively suspect and are looking for your movements. Further, attempts to use Melee (Brawling) to simply touch an opponent gain a bonus of +10 x your level in Fast Hands.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    FAST_SHOT: {
        name: "Fast Shot",
        description: "If you have a loaded ranged weapon, you can fire it outside the normal Initiative Order before any other combatant reacts in the following Round. You roll to hit using all the normal modifiers. Employing Fast Shot requires both your Action and Move for your upcoming turn, and these will count as having been spent when your next turn arrives. If two or more characters use Fast Shot, the character who has taken this Talent most goes first. If any characters have taken Fast Shot an equal number of times, both shots are fired simultaneously, and should both be handled at the same time.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_ANIMALS: {
        name: "Fearless (Animals)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_BEASTMEN: {
        name: "Fearless (Beastmen)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_BOUNTIES: {
        name: "Fearless (Bounties)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_CRIMINALS: {
        name: "Fearless (Criminals)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_EVERYTHING: {
        name: "Fearless (Everything)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_GREENSKINS: {
        name: "Fearless (Greenskins)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_HERETICS: {
        name: "Fearless (Heretics)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_INTRUDERS: {
        name: "Fearless (Intruders)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_MONSTERS: {
        name: "Fearless (Monsters)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_OUTLAWS: {
        name: "Fearless (Outlaws)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_RATS: {
        name: "Fearless (Rats)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_RIVERWARDENS: {
        name: "Fearless (Riverwardens)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_ROAD_WARDENS: {
        name: "Fearless (Road Wardens)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_SKAVEN: {
        name: "Fearless (Skaven)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_UNDEAD: {
        name: "Fearless (Undead)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_VAMPIRES: {
        name: "Fearless (Vampires)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_WATCHMEN: {
        name: "Fearless (Watchmen)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_WITCHES: {
        name: "Fearless (Witches)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEARLESS_WRECKERS: {
        name: "Fearless (Wreckers)",
        description: "You are either brave enough or crazy enough that fear of certain enemies has become a distant memory. With a single Average (+20%) Cool Test, you may ignore any Intimidate, Fear, or Terror effects from the specified enemy when encountered.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    FEINT: {
        name: "Feint",
        description: "You have trained how to make false attacks in close combat to fool your opponent. You may now make a Feint for your Action against any opponent using a weapon.\n \n This is resolved with an Opposed Melee (Fencing)/Melee Test.\n \n If you win, and you attack the same opponent before the end of the next Round, you may add the SL of your Feint to your attack roll.",
        maxTaken: "WEAS" /* Stat.WEAS */
    },
    FIELD_DRESSING: {
        name: "Field Dressing",
        description: "You are used to treating wounds quickly. If you fail a Heal Test when using Bandages, you may reverse the result if this will score a success; however, if you do so, you may not score more than +1 SL as you focus on speed over accuracy.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    FISHERMAN: {
        name: "Fisherman",
        description: "You are a very capable fisherman and know all the best ways to land fish. Assuming a large enough body of water is available, you are automatically assumed to be able to fish enough to feed yourself and a number of others equal to your level in Fisherman, assuming you choose to spend at least an hour or so with a line and bait. You may secure more fish in addition to this using the normal rules for foraging.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    FLAGELLANT: {
        name: "Flagellant",
        description: "You have dedicated your pain to the service of your God. Each day, you must spend half a bell (half an hour) praying as you maintain a number of Wounds suffered equal to your level in Flagellent. Until you next sleep, if you have the Frenzy Talent you may enter Frenzy immediately without testing. The Frenzy Talent is added to the Talent list of any career you are in. Should you fail to flagellate yourself on any given day, or allow your castigated flesh to be healed, you may not spend any Resilience or Resolve until you flagellate yourself again.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    FLEE: {
        name: "Flee!",
        description: "When your life is on the line you are capable of impressive bursts of speed. Your Movement Attribute counts as 1 higher when Fleeing",
        maxTaken: "AGIL" /* Stat.AGIL */
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
        maxTaken: "STRG" /* Stat.STRG */
    },
    FURIOUS_ASSAULT: {
        name: "Furious Assault",
        description: "Your blows follow one another in quick succession, raining down on your opponents with the fury of Ulric. Once per Round, if you hit an opponent in close combat, you may immediately spend an Advantage or your Move to make an extra attack (assuming you have your Move remaining).",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    GREGARIOUS: {
        name: "Gregarious",
        description: "You just like talking to other folk and it seems they like talking to you. You may reverse any failed Gossip Test if this allows the Test to succeed.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    GUNNER: {
        name: "Gunner",
        description: "You can reload blackpowder weapons with practiced ease. Add SL equal to your level in Gunner to any Extended Test to reload a Blackpowder weapon.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    HARDY: {
        name: "Hardy",
        description: "You gain a permanent addition to your Wounds, equal to your Toughness Bonus. If your Toughness Bonus should increase, then the number of Wounds Hardy provides also increases.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    HATRED: {
        name: "Hatred",
        description: "TODO",
        maxTaken: "WILL" /* Stat.WILL */
    },
    HATRED_HERETICS: {
        name: "Hatred (Heretics)",
        description: "TODO",
        maxTaken: "WILL" /* Stat.WILL */
    },
    HATRED_OUTLAWS: {
        name: "Hatred (Outlaws)",
        description: "TODO",
        maxTaken: "WILL" /* Stat.WILL */
    },
    HOLY_HATRED: {
        name: "Holy Hatred",
        description: "Your prayers drip with the hatred you feel for your blasphemous enemies. You deal +1 Damage with Miracles for each level in this Talent.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    HOLY_VISIONS: {
        name: "Holy Visions",
        description: "You clearly see the great works of the Gods all around you. You automatically know when you enter Holy Ground, and may take an Intuition Test to receive visions (often obscure, and seen through the paradigm of your cult or individual belief-system) regarding the local area if significant events have occurred there in the past.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    HUNTERS_EYE: {
        name: "Hunter's Eye",
        description: "You are a skilled hunter and know all the best techniques to find game. When travelling through well-stocked lands, you are automatically assumed to be able to hunt down enough game to feed yourself and a number of others equal to your level in Hunter's Eye, so long as you have time and the correct equipment. You may secure more food in addition to this using the normal rules for foraging.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    IMPASSIONED_ZEAL: {
        name: "Impassioned Zeal",
        description: "When you talk about your cause, case, or religion, your words fill with passion and fervent zeal. You may double your Fellowship for the purposes of determining the number of people influenced by your Public Speaking when talking about your cause.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    IMPLACABLE: {
        name: "Implacable",
        description: "It takes a lot to finish you off. You can ignore the Wound loss from a Bleeding Condition. Each level in this Talent lets you ignore the Wound loss from an extra Bleeding Condition.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    IN_FIGHTER: {
        name: "In-fighter",
        description: "You are skilled at drawing in close to an opponent. You suffer no penalties for fighting against an opponent with a longer weapon than you. Further, if you use the optional rules for In-fighting, gain a bonus of +10 to hit your opponent.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    INSPIRING: {
        name: "Inspiring",
        description: "Your rousing words and pleas can turn the tide of a battle. Refer to the following table to see how many people you can now influence with your Leadership Skill when at war.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    INSTINCTIVE_DICTION: {
        name: "Instinctive Diction",
        description: "You instinctively understand the language of Magick, and are capable of articulating the most complex phrases rapidly without error. You do not suffer a Miscast if you roll a double on a successful Language (Magick) Test.",
        maxTaken: "INIT" /* Stat.INIT */
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
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    IRON_WILL: {
        name: "Iron Will",
        description: "You have an indomitable will of iron, and will never willingly bow down before another. Use of the Intimidate skill does not cause Fear in you, and will not stop you speaking out against the intimidating party.",
        maxTaken: "WILL" /* Stat.WILL */
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
        maxTaken: "INTL" /* Stat.INTL */
    },
    LIP_READING: {
        name: "Lip Reading",
        description: "You can tell what people are saying by simply watching their lips; you do not need to hear what they are saying. If you have an unobstructed view of the speaker's lower face, you can attempt a Perception Test to understand what they are saying.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    LUCK: {
        name: "Luck",
        description: "They say when you were born, Ranald smiled. Your maximum Fortune Points now equal your current Fate points plus the number of times you've taken Luck.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    MAGICAL_SENSE: {
        name: "Magical Sense",
        description: "You are able to sense the Winds of Magic in others. You may attempt an Average (+20) Intuition Test whenever you encounter a spellcaster. If you pass, you sense the target is a witch. Further, if you score an Astounding Success (+6), can also determine the target's highest Channelling Specialisation.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    MAGIC_RESISTANCE: {
        name: "Magic Resistance",
        description: "You are resistant to magic. The SL of any spell affecting you is reduced by 2 per point you have in this Talent. The SL of a spell is only modified by the highest Magic Resistance Talent within its target area. Further, you may never learn the Arcane Magic, Bless, Invoke, Petty Magic, or Witch! Talents.",
        maxTaken: "TOUG" /* Stat.TOUG */
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
        maxTaken: "FELW" /* Stat.FELW */
    },
    MASTER_ORATOR: {
        name: "Master Orator",
        description: "You are skilled at firing up crowds. You gain a gain a SL bonus equal to your levels of Master Orator to any Charm Test when Public Speaking before a crowd.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    MASTER_TRADESMAN: {
        name: "Master Tradesman",
        description: "You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    MASTER_TRADESMAN_APOTHECARY: {
        name: "Master Tradesman (Apothecary)",
        description: "You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    MASTER_TRADESMAN_BOATBUILDER: {
        name: "Master Tradesman (Boatbuilder)",
        description: "You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    MASTER_TRADESMAN_ENGINEERING: {
        name: "Master Tradesman (Engineering)",
        description: "You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    MASTER_TRADESMAN_HERBALIST: {
        name: "Master Tradesman (Herbalist)",
        description: "You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    MASTER_TRADESMAN_POISONER: {
        name: "Master Tradesman (Poisoner)",
        description: "You are exceptionally skilled at your specified Trade skill. You reduce the required SL of any Extended Test using your Trade Skill by the level of your Master Tradesman Talent.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    MENACING: {
        name: "Menacing",
        description: "You have an imposing presence. When using the Intimidate Skill, gain a SL bonus equal to your levels of Menacing.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    MIMIC: {
        name: "Mimic",
        description: "You have a good ear for accents and dialects, and can reproduce them accurately. You may replicate any accent you are exposed to for at least a day with an Initiative Test; this Test may be attempted once per day. Once passed, you may always mimic the accent, and locals will believe you to be one of their own.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    NIGHT_VISION: {
        name: "Night Vision",
        description: "You can see very well in natural darkness. Assuming you have at least a faint source of light (such as starlight, moonlight, or bioluminescence) you can see clearly for 20 yards per level of Night Vision. Further, you can extend the effective illumination distance of any light sources by 20 yards per level of Night Vision.",
        maxTaken: "INIT" /* Stat.INIT */
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
        maxTaken: "INIT" /* Stat.INIT */
    },
    NUMISMATICS: {
        name: "Numismatics",
        description: "You are well versed with the different coinage of the Old World, and are adept at determining their value. You can judge the true value of a coin by experience alone, not even requiring a Test. Further, you can identify forged coins with a Simple Evaluate Test; it is never Opposed by the SL of the Forger.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    OLD_SALT: {
        name: "Old Salt",
        description: "You are an experienced seaman, and are very used to sea life. You can ignore all negative modifiers to Tests at sea derived from poor weather, rolling ships, and similar. Further, you count as two seamen towards the minimum number of crew to pilot a sea-going vessel.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    ORIENTATION: {
        name: "Orientation",
        description: "You have an instinctual feel for direction. You automatically know which direction is north with a glimpse at the stars, trees, or whatever other signs you are familiar with.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    PANHANDLE: {
        name: "Panhandle",
        description: "You are a skilled beggar, able to get even the most jaded individual to contribute to your cause. You can perform a Charm Test every half hour when Begging, not every hour.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    PERFECT_PITCH: {
        name: "Perfect Pitch",
        description: "You have perfect pitch, able to replicate notes perfectly and identify them without even making a Test. Further, add Entertain (Sing) to any Career you enter; if it is already in your Career, you may instead purchase the Skill for 5 XP fewer per Advance.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    PETTY_MAGIC: {
        name: "Petty Magic",
        description: "You have the spark to cast magic within you and have mastered techniques to control it at a basic level. When you take this Talent, you manifest, and permanently memorise, a number of spells equal to your Willpower Bonus. You can learn extra Petty spells for a cost in XP.",
        maxTaken: 1
    },
    PHARMACIST: {
        name: "Pharmacist",
        description: "You are highly skilled at pharmacy, better able than most to make pills, ointments, unguents, oils, creams, and more. You may reverse any failed Trade (Apothecary) test if this allows the Test to succeed.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    PILOT: {
        name: "Pilot",
        description: "You are skilled at leading vessels through dangerous waters. If you fail a Test to pass through dangerous waters, you may reverse the result if it will score a success; however, if you do so, you may not score more than +1 SL as you catch the incoming danger at the last moment.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    PUBLIC_SPEAKER: {
        name: "Public Speaker",
        description: "You are a skilled orator and know how to work large groups of people.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    PURE_SOUL: {
        name: "Pure Soul",
        description: "Your soul is pure, quite resistant to the depredations of Chaos. You may gain extra Corruption points equal to your level of Pure Soul before having to Test to see if you become corrupt.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    RAPID_RELOAD: {
        name: "Rapid Reload",
        description: "You can reload ranged weapons with practiced ease. You add SL equal to your level in Rapid Reload to any Test to reload a ranged weapon.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    REACTION_STRIKE: {
        name: "Reaction Strike",
        description: "Your fast reactions have allowed you to fell many opponents before they have even swung their blades. When you are Charged, you may attempt a Challenging (+0) Initiative Test to gain an immediate Free Attack outside the normal turn sequence. This attack is resolved with whatever weapon you are carrying in your primary hand. You may make as many Reaction Strikes in a Round as you have levels in this Talent, but can only attack each individual charger once each.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    READ_WRITE: {
        name: "Read/Write",
        description: "You are one of the rare literate individuals in the Old World. You are assumed to be able to read and write (if appropriate) all of the Languages you can speak.",
        maxTaken: 1
    },
    RELENTLESS: {
        name: "Relentless",
        description: "When you have your mind set on a target, there is nothing anyone can do to stop you reaching them. If you use Advantage when Disengaging, you may keep a number of Advantage equal to your level of Relentless. Further, you may use Advantage to Disengage even if you have lower Advantage than your opponents.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    RESISTANCE_CHAOS: {
        name: "Resistance (Chaos)",
        description: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    RESISTANCE_DISEASE: {
        name: "Resistance (Disease)",
        description: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    RESISTANCE_MAGIC: {
        name: "Resistance (Magic)",
        description: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    RESISTANCE_POISON: {
        name: "Resistance (Poison)",
        description: "Your strong constitution allows you to more readily survive a specific threat. You may automatically pass the first Test to resist the specified threat every day. If SL is important, use your Toughness Bonus as SL for the Test.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    RESOLUTE: {
        name: "Resolute",
        description: "You launch into attacks with grim determination. Add your level of Resolute to your Strength Bonus when you Charge.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    REVERSAL: {
        name: "Reversal",
        description: "You are used to desperate combats, able to turn even the direst circumstances to your Advantage. If you win an Opposed Melee Test, instead of gaining +1 Advantage, you may take all your opponent's Current Advantage. If you do this, you do not cause any Damage, even if it is your Turn in the Round.",
        maxTaken: "WEAS" /* Stat.WEAS */
    },
    RIPOSTE: {
        name: "Riposte",
        description: "Conforming to 'the best defence is offence', you respond to an incoming attack with a lightning-fast counterstrike of your own. If your weapon has the Fast quality, you may cause Damage when you are attacked, just as if it was your Action. You can Riposte a number of attacks per round equal to your Riposte level.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    RIVER_GUIDE: {
        name: "River Guide",
        description: "You know all the tricks for navigating dangerous rivers. You don't need to Test for passing through dangerous stretches of water until the Difficulty for doing so is -10 or lower - you automatically pass all Tests easier than this. Further, if you have the appropriate Lore (Local) Skill, you need never Test for navigating dangerous waters - you are assumed to know the route through.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    ROBUST: {
        name: "Robust",
        description: "You are as tough as old boots and just soak up damage. You reduce all incoming Damage by an extra +1 per time you have taken the Robust Talent, even if the Damage cannot normally be reduced, but still suffer a minimum of 1 Wound from any Damage source.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    ROUGHRIDER: {
        name: "Roughrider",
        description: "You are at home in the saddle in even the most difficult of circumstances, and know how to get the best out of your mount during conflict. Assuming you have the Ride skill, you can direct your mount to take an Action, not just a Move, without a Ride test.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    ROVER: {
        name: "Rover",
        description: "You are at home roaming the wild places. When using Stealth in a rural environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden spies.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    SAVANT: {
        name: "Savant",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVANT_APOTHECARY: {
        name: "Savant (Apothecary)",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVANT_ENGINEERING: {
        name: "Savant (Engineering)",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVANT_HERBS: {
        name: "Savant (Herbs)",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVANT_LAW: {
        name: "Savant (Law)",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVANT_LOCAL: {
        name: "Savant (Local)",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVANT_MEDICINE: {
        name: "Savant (Medicine)",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVANT_RIVERWAYS: {
        name: "Savant (Riverways)",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVANT_THEOLOGY: {
        name: "Savant (Theology)",
        description: "You are exceptionally learned, and have a significant degree of specialised knowledge in a single field of study. You automatically know a number of pieces of correct information equal to you Savant (Lore) level about a relevant issue without having to test your Lore Skill.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SAVVY: {
        name: "Savvy",
        description: "You gain a permanent +5 bonus to your starting Intelligence Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    SCLA_SHEER_SURFACE: {
        name: "Scale Sheer Surface",
        description: "You are an exceptional climber. You can attempt to climb even seemingly impossible surfaces such as sheer fortifications, ice shelves, plastered walls, and similar, and you ignore any penalties to Climb Tests derived from the difficulty of the surface climbed.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    SCHEMER: {
        name: "Schemer",
        description: "You are a master of politics and see conspiracy around every corner. Once per week, you may ask the GM one question regarding a political situation or entangled web of social connections; the GM will perform a secret Intelligence Test and provide you some observations regarding the situation based upon your SL.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SEA_LEGS: {
        name: "Sea Legs",
        description: "You are used to the rolling motion of the oceans, and are very unlikely to get sea sick, even in the worst storms. Under normal conditions at sea, you need never Test to see if you become Sea Sick. At other times (such as a storm, or a magically induced bout of Sea Sickness), you can ignore any penalties to Tests to avoid Sea Sickness.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    SEASONED_TRAVELLER: {
        name: "Seasoned Traveller",
        description: "You are an inquisitive soul who has travelled far and wide, learning all manner of local information. Add Lore (Local) to any Career you enter; if it is already in Career, you may purchase the Skill, both times - a different Speciality each time, such as Altdorf, Vorbergland, or Ubersreik - for 5 XP fewer per Advance.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SECOND_SIGHT: {
        name: "Second Sight",
        description: "You can perceive the shifting Winds of Magic that course from the Chaos Gates at the poles of the world. You now have the Sight",
        maxTaken: "INIT" /* Stat.INIT */
    },
    SECRET_IDENTITY: {
        name: "Secret Identity",
        description: "You maintain a secret identity that allows you to appear richer, or perhaps poorer, than you actually are. With GM permission, choose any one Career. As long as you are dressed appropriately, you may use the Social Status of the chosen Career you masquerade as rather than your own for modifying Fellowship Tests, and can even ignore the Criminal Talent. However, maintaining this identity will require Entertain (Acting) rolls when you encounter those who may recognise your falsehood. You may create a new Secret Identity for each level you have in this Talent.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SHADOW: {
        name: "Shadow",
        description: "You are skilled at following people without being spotted. You may use the Shadowing rules on page 130 without doing a Combined Test. Instead you test against just your Perception or your Stealth Skill, whichever is higher.",
        maxTaken: "AGIL" /* Stat.AGIL */
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
        maxTaken: "STRG" /* Stat.STRG */
    },
    SIXTH_SENSE: {
        name: "Sixth Sense",
        description: "You get a strange feeling when you are threatened, and can react accordingly. The GM may warn you if you are walking into danger; this will normally come after a secret Intuition Test on your behalf. Further, you may ignore Surprise if you pass an Intuition Test.",
        maxTaken: "INIT" /* Stat.INIT */
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
        maxTaken: "INTL" /* Stat.INTL */
    },
    SPRINTER: {
        name: "Sprinter",
        description: "You are a swift runner. Your Movement Attribute counts as 1 higher when Running.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    STEP_ASIDE: {
        name: "Step Aside",
        description: "You are skilled at being where enemy weapons are not. If you use Dodge to defend against an incoming attack and win the Opposed Test, you may move up to 2 yards as you dive away, and no longer count as Engaged. None of your opponents will gain a Free Attack when you do this.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    STONE_SOUP: {
        name: "Stone Soup",
        description: "You are used to getting by with less, and know how to survive lean times. You can subsist on half the amount of food required without any negative penalties (bar feeling really hungry), and need only test for Starvation every 3 days, not 2.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    STOUT_HEARTED: {
        name: "Stout-hearted",
        description: "No matter how bad things get, you always seem to come back for more. You may attempt a Cool Test to remove a Broken Condition at the end of each of your Turns as well as at the end of the Round.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    STRIDER: {
        name: "Strider",
        description: "You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    STRIDER_COASTAL: {
        name: "Strider (Coastal)",
        description: "You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    STRIDER_MARSHES: {
        name: "Strider (Marshes)",
        description: "You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    STRIDER_ROCKY: {
        name: "Strider (Rocky)",
        description: "You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    STRIDER_WOODLANDS: {
        name: "Strider (Woodlands)",
        description: "You are experienced in traversing difficult ground. You ignore all movement penalties when crossing over or through a specified terrain.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    STRIKE_MIGHTY_BLOW: {
        name: "Strike Mighty Blow",
        description: "You know how to hit hard! You deal your level of Strike Mighty Blow in extra Damage with melee weapons.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    STRIKE_TO_INJURE: {
        name: "Strike to Injure",
        description: "You are an expert at striking your enemies most vulnerable areas. You inflict your level of Strike to Injure in additional Wounds when you cause a Critical Wound.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    STRIKE_TO_STUN: {
        name: "Strike to Stun",
        description: "You know where to hit an opponent to bring him down fast. You ignore the 'Called Shot' penalty to strike the Head Hit Location when using a melee weapon with the Pummel Quality. Further, you count all improvised weapons as having the Pummel Quality.",
        maxTaken: "WEAS" /* Stat.WEAS */
    },
    STRONG_BACK: {
        name: "Strong Back",
        description: "You have a strong back that is used to hard work. You may add your levels in Strong Back to your SL in any Opposed Strength Tests, and can carry additional Encumbrance points of trappings equal to your level of Strong Back.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    STRONG_LEGS: {
        name: "Strong Legs",
        description: "You have strong legs able to carry you great distances when you jump. Add your Strong Legs level to your SL in any Athletics Tests involving Leaping.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    STRONG_MINDED: {
        name: "Strong-minded",
        description: "You are the epitome of determination and resolve. Add your level in Strong Minded to your maximum Resolve pool.",
        maxTaken: "WILL" /* Stat.WILL */
    },
    STRONG_SWIMMER: {
        name: "Strong Swimmer",
        description: "You are an especially strong swimmer and used to holding your breath for a long time underwater. Gain a bonus of your level in Strong Swimmer to your Toughness Bonus for the purposes of holding your breath.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    STURDY: {
        name: "Sturdy",
        description: "You have a brawny physique, or are very used to carrying things. Increase the number of Encumbrance Points you can carry by your Sturdy level x2.",
        maxTaken: "STRG" /* Stat.STRG */
    },
    SUAVE: {
        name: "Suave",
        description: "You gain a permanent +5 bonus to your starting Fellowship Characteristic (this does not count towards your Advances).",
        maxTaken: 1
    },
    SUPER_NUMERATE: {
        name: "Super Numerate",
        description: "You have a gift for calculation and can work out the solution to most mathematical problems with ease. You may use a simple calculator to represent what your PC is capable of mentally computing.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    SUPPORTIVE: {
        name: "Supportive",
        description: "You know what to say and when to make the most impact upon your superiors. When you successfully use a social Skill to influence those with a higher Status tier, you can choose to either use your rolled SL, or the number rolled on your units die. So, a successful roll of 46 could be used for +6 SL.",
        maxTaken: "FELW" /* Stat.FELW */
    },
    SURE_SHOT: {
        name: "Sure Shot",
        description: "You know how to find the weak spots in a target's armour. When you hit a target with a Ranged weapon, you may ignore Armour Points equal to your Sure Shot level.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    SURGERY: {
        name: "Surgery",
        description: "You are a surgeon, able to open and close the flesh in order to heal others. You can treat any Critical Wound marked as needing Surgery. You can also perform surgery to resolve internal issues with an Extended Challenging (+0) Heal Test with a target SL determined by the GM (usually 5-10) depending upon the difficulty of the procedure at hand. This will cause 1d10 Wounds and 1 Bleeding Condition per Test, meaning surgery has a high chance of killing a patient if the surgeon is not careful. After surgery, the patient must pass an Average (+20) Endurance Test or gain a Minor Infection.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    TENACIOUS: {
        name: "Tenacious",
        description: "You never give up, no matter how impossible your travails appear. You can double the length of time successful Endurance Tests allow you to endure a hardship. This includes enduring prolonged riding, exposure, rituals, and similar adversities.",
        maxTaken: "TOUG" /* Stat.TOUG */
    },
    TINKER: {
        name: "Tinker",
        description: "You are somewhat of a Johann-of-all-trades, able to repair almost anything. You count all non-magical Trade Skills as Basic when repairing broken items.",
        maxTaken: "DEXT" /* Stat.DEXT */
    },
    TOWER_OF_MEMORIES: {
        name: "Tower of Memories",
        description: "A recollection technique first instigated by the Cult of Verena, reputedly from Elven practices taught by the Loremasters of Hoeth, Tower of Memories allows you to perfectly recall a sequence of facts by storing them in an imaginary spire. You can recall a sequence as long as your Intelligence without having to make a Test. For every 10 more items you attempt to memorise, you must make an increasingly difficult Intelligence Test to recall the list correctly, starting at Very Easy (+60) for +10, Easy (+40) for +20, Average (+20) for +30, and so on. Beyond it's obvious utility for Gamble Tests, where having this Talent adds a bonus of +20 to +60 depending upon how useful recalling sequences is to the game at hand, the GM can apply bonuses to other Tests as appropriate. Each time you take this Talent you may recall an extra sequence without having to forget a previously stored one.",
        maxTaken: "INTL" /* Stat.INTL */
    },
    TRAPPER: {
        name: "Trapper",
        description: "You are skilled at spotting and using traps. You may take a Perception Test to spot traps automatically without having to tell the GM of your intention; the GM may prefer to make some of these Tests on your behalf in private.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    TRICK_RIDING: {
        name: "Trick Riding",
        description: "You are capable of amazing feats of agility on horseback. You can use any of your Performer Skills and unmodified Dodge skill when on horseback. Further, when mounted, you can make your Move at the start of the Round instead of on your Turn.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    TUNNEL_RAT: {
        name: "Tunnel Rat",
        description: "You are at home in tunnels, sewers, and other underground environments. When using Stealth in an underground environment, bystanders do not get passive Perception Tests to detect you; they can only spot you if they are specifically on look-out, or watching for hidden others.",
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    UNSHAKABLE: {
        name: "Unshakable",
        description: "You are a jaded veteran who has survived more than one hail of shots from Blackpowder weapons. You need only take a Cool Test to resist a Broken Condition if you are successfully wounded by a Blackpowder weapon, not just if you are shot at.",
        maxTaken: "WILL" /* Stat.WILL */
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
        maxTaken: "FELW" /* Stat.FELW */
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
        maxTaken: "AGIL" /* Stat.AGIL */
    },
    WEALTHY: {
        name: "Wealthy",
        description: "You are fabulously wealthy, and are rarely ever short of coin. When Earning (including Income Endeavours) you secure +1 GC per time you have this Talent.",
        maxTaken: 10
    },
    WELL_PREPARED: {
        name: "Well-prepared",
        description: "You are used to anticipating the needs of others, and yourself. A number of times per session equal to your level of Well-Prepared, you may pull the trapping required for the current situation from your backpack (or similar) as long as it is Encumbrance 0, could feasibly been bought recently, and doesn't stretch credibility too far. This could be anything from a flask of spirits to fortify a wounded comrade to a pfennig-whistle needed by a passing entertainer. Whenever you do this, you must deduct the cost for the prepared item from your purse, representing the coin you spent earlier.",
        maxTaken: "INIT" /* Stat.INIT */
    },
    WITCH: {
        name: "Witch!",
        description: "You have learned magic through trial and error. Add Language (Magick) to any Career you enter; if it is already in your Career, you may purchase the Skill for 5 XP fewer per Advance. Further, you may spend 1 Resilience point to immediately cast any spell as if it were one of your Arcane Lore spells; you also instantly memorise that spell as one of your Arcane Lore spells for 0 XP. You can do this a number of times equal to your level in this Talent.",
        maxTaken: "WILL" /* Stat.WILL */
    }
};
// #endregion === TALENTS SET === //
// === //
// #region ====== TALENTS IDS === //
// The IDs are the keys of the SET object
TEW.DATABASE.TALENTS.IDS = Object.keys(TEW.DATABASE.TALENTS.SET);
// #endregion === TALENTS IDS === //
// #region ====== TALENTS ARRAY === //
// This is a 2D array, where the first element is the key and the second element is the value
TEW.DATABASE.TALENTS.ARRAY = Object.keys(TEW.DATABASE.TALENTS.SET)
    .sort((a, b) => a.localeCompare(b))
    .map(talent => [talent, TEW.DATABASE.TALENTS.SET[talent]]);
// #endregion === TALENTS ARRAY === //
// #endregion =========================== TEW_Talents ============================== //
// ============================== //
// #region ============================== TEW_Tutorials ============================== //
// #region ====== TUTORIALS === //
TEW.DATABASE.TUTORIALS = [
    {
        category: "Test tutorial",
        subTutorials: [
            {
                title: "Sub-tutorial title",
                paragraphs: [
                    {
                        content: "This is content for a sub-tutorial."
                    },
                    {
                        image: "debug"
                    }
                ]
            }
        ]
    },
    {
        category: "Key Binds",
        subTutorials: [
            {
                title: "",
                paragraphs: [
                    {
                        content: ""
                    }
                ]
            }
        ]
    },
    {
        category: "Tests",
        subTutorials: [
            {
                title: "Generalities",
                paragraphs: [
                    {
                        content: "When a character takes an action with an unsure outcome, a test is made. A test consist of comparing a dice roll to one of the characteristics or skills of the character."
                    },
                    {
                        image: "debug" //TODO placeholder, replace with dice image 
                    }
                ]
            },
            {
                title: "Simple tests",
                paragraphs: [
                    {
                        content: "Simple tests are used when the need is to determine if a character succeeds or fails at a simple task, such as leap a churning stream. To perform a Simple test, a d100 is rolled and the result is compared to the Skill or Characteristic best suited to the action."
                    },
                    {
                        content: "If the roll is lower or equal to the Skill or Characteristic, the Test's outcome is a success and the Character performs the task."
                    },
                    {
                        content: "If the roll is higher than the Skill or Characteristic, the Test's outcom is a failure, and the Character does not perform the task."
                    },
                    {
                        content: "Note that some tests may be modified based on the difficulty of the action. See the Difficulty tutorial for more on the matter."
                    }
                ]
            },
            {
                title: "Automatic failure and success",
                paragraphs: [
                    {
                        content: "No matter how skilled or talented a character is, there is always a chance of failure. Equally, there is always a chance of success, no matter the odds stacked against a Character."
                    },
                    {
                        content: "If a Character rolls 96-00 on any Test, it is always a failure, even if the modified Characteristic or Skill is 96 or higher. Similarly, if a Character rolls 01-05 on a Test, it is always a success, even if the modified Characteristic or Skill is less than 01-05."
                    }
                ]
            },
            {
                title: "Success Levels",
                paragraphs: [
                    {
                        content: "Simply knowing if a Tests is passed or failed is not always enough. Sometimes it is useful to know how well a Character succeeds or how badly he fails a Test. This detail is governed by Success Levels."
                    },
                    {
                        content: "Success Levels (shortened to SL) are used to describe the effctiveness of a Test. To determine the SL of a Test, the 10s number of the rolled dice is substracted from the 10s number of the Skill or Characteristic being tested, including any modifiers. The higher the SL, the better the outcome."
                    },
                    {
                        content: "If a Test is automatically succeeded due to rolling 01-05, the SL scored is +1SL or the SL rolled, whichever is higher."
                    },
                    {
                        content: "If a Test is automatically failed due to rolling 96-00, the SL scored is -1SL or the SL rolled, whichever is lower."
                    }
                ]
            },
            {
                title: "Difficulty",
                paragraphs: [
                    {
                        content: "Not all the Tests are equal. Climbing a fence is easy but ascending the face of a sheer cliff is encredibly tough. To represent this, some Tests are assigned bonuses or penalties called Difficulty."
                    }
                ]
            },
            {
                title: "Opposed Tests",
                paragraphs: [
                    {
                        content: "Sometimes a Character matched his capabilities directly against those of an opponent. Such a Test is called an Opposed Test."
                    },
                    {
                        content: "An Opposed Test is handled just like any other Test, but both parties make a Test. The party with the higher SL wins the Test. If both participants score the same SL, the party with the higher tested Characteristic wins."
                    }
                ]
            },
            {
                title: "Extended Tests",
                paragraphs: [
                    {
                        content: "Sometimes the adventure will call for a specific number of SLs be achieved to fully succeed at a time-consuming or especially taxing task. Doing this requires a Test called an Extended Test."
                    },
                    {
                        content: "Extended Tests are handled in the same fashion as any other Test, but the SL scored from multiple rolls are added together to reach a specified target. If the total SL scored falls bellow 0, you can start again from scratch with the next roll."
                    }
                ]
            }
        ]
    }
];
// #endregion =========================== TEW_Tutorials ============================== //
// ============================== //
// #region ============================== TEW_Weapons ============================== //
// ----------------------
TEW.DATABASE.WEAPONS = {};
// #region ====== WEAPONS MELEE SET === //
TEW.DATABASE.WEAPONS.MELEE_SET = {
    AXE: {
        name: "Axe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: 120,
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
        price: 192,
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
        price: 48,
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
        price: 192,
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
        price: 0,
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
        price: 96,
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
        price: 180,
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
        price: 180,
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
        price: 240,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [8 /* WeaponQuality.SLASH_1 */],
        description: "Popular in the east of the Empire, Kislev and Araby, the scimitar has a curved blade which can inflict terrible cutting wounds. Its design does compromise the welder's ability to lunge and thrust, meaning that even though scimitars are a similar length to straight swords they have a shorter reach."
    },
    SWORD: {
        name: "Sword",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SWORD,
        group: 0 /* WeaponGroup.BASIC */,
        groupLabel: "Basic" /* WeaponGroupLabel.BASIC */,
        price: 240,
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
        price: 240,
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
        price: 218,
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
        price: 480,
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
        price: 720,
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
        price: 900,
        enc: 4,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [14 /* WeaponQuality.SHIELD_5 */],
        description: "The pavise is a large shield carried by crossbowmen to provide shelter on the battlefield as they reload. Roughly 4 feet tall and often painted with the unit's coat of arms, the crossbowman plants the pavise on the ground like a personal wall."
    },
    CAVALRY_HAMMER: {
        name: "Cavalry Hammer",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 1 /* WeaponGroup.CAVALRY */,
        groupLabel: "Cavalry" /* WeaponGroupLabel.CAVALRY */,
        price: 720,
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
        price: 240,
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
        price: 240,
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
        price: 120,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [8 /* WeaponQuality.SLASH_1 */],
        description: "The sabre is similar to the scimitar, but a little longer and straighter. It may be used on foot with Melee (Basic)."
    },
    FOIL: {
        name: "Foil",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FOIL,
        group: 2 /* WeaponGroup.FENCING */,
        groupLabel: "Fencing" /* WeaponGroupLabel.FENCING */,
        price: 1200,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [17 /* WeaponQuality.FAST */, 2 /* WeaponQuality.IMPALE */, 4 /* WeaponQuality.PRECISE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "The foil is a light sword with a blade like a thin sharpened spike. They are light in the hand with a balance at the hilt, but short of a dramatic lunge they tend to only inflict small prinking injuries."
    },
    RAPIER: {
        name: "Rapier",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_RAPIER,
        group: 2 /* WeaponGroup.FENCING */,
        groupLabel: "Fencing" /* WeaponGroupLabel.FENCING */,
        price: 1200,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [17 /* WeaponQuality.FAST */, 2 /* WeaponQuality.IMPALE */],
        description: "The rapier is a long thin sword. Like the foil it comes to a fine point for thrusting, but the sharp blade retains much of the cutting power of a traditional sword."
    },
    SMALLSWORD: {
        name: "Smallsword",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FOIL,
        group: 2 /* WeaponGroup.FENCING */,
        groupLabel: "Fencing" /* WeaponGroupLabel.FENCING */,
        price: 960,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [17 /* WeaponQuality.FAST */, 2 /* WeaponQuality.IMPALE */, 4 /* WeaponQuality.PRECISE */],
        description: "A light version of the foil. The smallsword is not considered a serious weapon and is more often employed in sporting contests or duels to first blood. Smallswords with blunt tips and blades are often used as sport weapons, gaining the Undamaging Flaw."
    },
    SPIKED_GAUNTLET: {
        name: "Spiked Gauntlet",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: 480,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [2 /* WeaponQuality.IMPALE */, 1 /* WeaponQuality.UNBALANCED */],
        description: "A spiked gauntlet may be purchased as part of a set of plate armour for the arm. Add the price of the spiked gauntlet to that of the armour, but just use the Encumbrance of the armour itself; the spiked gauntlet does not involve significant additional weight or bulk."
    },
    BOAT_HOOK: {
        name: "Boat Hook",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: 72,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 4,
        qualities: [18 /* WeaponQuality.TRIP */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "Hooks are used by stevedores to help with loading and securing cargoes, but they can make vicious weapons if wielded with intent."
    },
    GARROTE: {
        name: "Garrote",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CHAINS,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: 12,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [19 /* WeaponQuality.ENTANGLE */, 20 /* WeaponQuality.SLOW */, 1 /* WeaponQuality.UNBALANCED */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "A garotte is a length of cord or wire intended to be slipped around the neck and drawn tight with the wielder's hands."
    },
    UNARMED: {
        name: "Unarmed",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: 0,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: [6 /* WeaponQuality.UNDAMAGING */],
        description: "Your bare fists."
    },
    KNUCKLEDUSTERS: {
        name: "Knuckledusters",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: 30,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "Brass knuckles can add considerable power to a fighter's strikes, but a set of knuckledusters could be improvised from textiles and tools."
    },
    LOCKED_GAUNTLET: {
        name: "Locked Gauntlet",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CLAW,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: 240,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [6 /* WeaponQuality.UNDAMAGING */],
        description: "A locked gauntlet is formed from plates of steel that encase the fist and can be held shut with a screw or catch. Whilst the gauntlet may be used as a Brawling Weapon it is more commonly employed as a method to ensure that the wielder does not drop a weapon held in the gauntleted hand."
    },
    SAP: {
        name: "Sap",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 3 /* WeaponGroup.BRAWLING */,
        groupLabel: "Brawling" /* WeaponGroupLabel.BRAWLING */,
        price: 12,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 1,
        qualities: [7 /* WeaponQuality.PUMMEL */, 1 /* WeaponQuality.UNBALANCED */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "A well-made Sap consists of a leather or textile sheath stuffed with sand, musket balls, iron rods or similar small heavy items."
    },
    GRAIN_FLAIL: {
        name: "Grain Flail",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FLAIL,
        group: 4 /* WeaponGroup.FLAIL */,
        groupLabel: "Flail" /* WeaponGroupLabel.FLAIL */,
        price: 120,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [21 /* WeaponQuality.DISTRACT */, 26 /* WeaponQuality.IMPRECISE */, 22 /* WeaponQuality.WRAP */],
        description: "The common adage that peasants can beat their ploughshares into weapons is overstated, but a grain flail in the right hands is dangerous. A grain flail consists of a wooden handle connected to a heavy stick, known as a swipple, by a length of chain."
    },
    FLAIL: {
        name: "Flail" /* WeaponGroupLabel.FLAIL */,
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FLAIL,
        group: 4 /* WeaponGroup.FLAIL */,
        groupLabel: "Flail" /* WeaponGroupLabel.FLAIL */,
        price: 480,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 5,
        qualities: [21 /* WeaponQuality.DISTRACT */, 22 /* WeaponQuality.WRAP */],
        description: "Flails made for the battlefield incorporate metal swipples and reinforcements to the handle, enabling them to pack a heftier punch."
    },
    MILITARY_FLAIL: {
        name: "Military Flail",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_FLAIL,
        group: 4 /* WeaponGroup.FLAIL */,
        groupLabel: "Flail" /* WeaponGroupLabel.FLAIL */,
        price: 720,
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: [21 /* WeaponQuality.DISTRACT */, 26 /* WeaponQuality.IMPRECISE */, 23 /* WeaponQuality.TIRING */, 22 /* WeaponQuality.WRAP */],
        description: "Flails made for the battlefield incorporate metal swipples and reinforcements to the handle, enabling them to pack a heftier punch."
    },
    CLOAK: {
        name: "Cloak",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CHAINS,
        group: 5 /* WeaponGroup.PARRY */,
        groupLabel: "Parry" /* WeaponGroupLabel.PARRY */,
        price: 120,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: [19 /* WeaponQuality.ENTANGLE */, 15 /* WeaponQuality.DEFENSIVE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "Some experts in fencing and parrying recommend keeping a cloak of heavy fabric handy. When bunched around the arm it can be used to distract opponents or divert their attacks. It can even be flung over an opponent in the hope that they will become lost in its folds. However, cloaks are not well suited for entangling attacks. When making a Test to see if an opponent becomes entangled in a cloak, the cloak has a Strength of 25."
    },
    MAIN_GAUCHE: {
        name: "Main Gauche",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_KNIFE,
        group: 5 /* WeaponGroup.PARRY */,
        groupLabel: "Parry" /* WeaponGroupLabel.PARRY */,
        price: 240,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 2,
        qualities: [15 /* WeaponQuality.DEFENSIVE */],
        description: "A main gauche is a specially designed dagger used in fencing. It is so called because it is typically wielded in the left hand by right-handed fighters to complement a fencing weapon used as a primary weapon. A fighter with no Melee (Parrying) Skill could still use a main gauche, though they would call it a dagger and it would lose the Defensive Quality."
    },
    SWORDBREAKER: {
        name: "Swordbreaker",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BREAKER,
        group: 5 /* WeaponGroup.PARRY */,
        groupLabel: "Parry" /* WeaponGroupLabel.PARRY */,
        price: 270,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: false,
        strBonus: true,
        damage: 3,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 24 /* WeaponQuality.TRAP_BLADE */],
        description: "These weapons are designed like long daggers or sturdy shortswords. Their blades are thicker than those of swords, and along one side several deep grooves are cut into the blade. This design greatly compromises the weapon's ability to cut, but enables a skilled user to catch an opponent's blade and hold it fast."
    },
    WEIGHTED_NET: {
        name: "Weighted Net",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CHAINS,
        group: 5 /* WeaponGroup.PARRY */,
        groupLabel: "Parry" /* WeaponGroupLabel.PARRY */,
        price: 120,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: false,
        strBonus: true,
        damage: 0,
        qualities: [19 /* WeaponQuality.ENTANGLE */, 15 /* WeaponQuality.DEFENSIVE */, 10 /* WeaponQuality.SHIELD_1 */, 20 /* WeaponQuality.SLOW */, 6 /* WeaponQuality.UNDAMAGING */, 22 /* WeaponQuality.WRAP */],
        description: "A weighted net is cumbersome and clumsy, but capable of severely impeding an opponent's fighting ability when used in a timely fashion. When making a Test to see if an opponent becomes entangled in a weighted net, the net has a Strength of 55."
    },
    AHLSPIESS: {
        name: "Ahlspiess",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 480,
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 3,
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "The ahlspiess mounts a long thin spike on a spear shaft, compromising its ability to inflict cutting wounds in order to better penetrate armour."
    },
    BILL: {
        name: "Bill",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 480,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 0 /* WeaponQuality.HACK */, 18 /* WeaponQuality.TRIP */],
        description: "Derived from a farming tool the bill features a hooked blade that can be used to snag foes or chop them down."
    },
    HALBERD: {
        name: "Halberd",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 480,
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 0 /* WeaponQuality.HACK */, 2 /* WeaponQuality.IMPALE */],
        description: "The archetypal weapon of the forces of the Empire, the halberd can be employed to similar effect as either a spear or an axe."
    },
    MANCATCHER: {
        name: "Mancatcher",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 480,
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 2,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 19 /* WeaponQuality.ENTANGLE */],
        description: "The mancatcher is a strange polearm with a semi-circular head festooned with short spikes. The weapon may catch a person around the neck, forcing them to cease struggling for fear of further injury. The wielder benefits from a bonus of +20 to any Strength Tests made to entangle someone with the weapon."
    },
    PARTIZAN: {
        name: "Partizan",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 480,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 2 /* WeaponQuality.IMPALE */, 9 /* WeaponQuality.SLASH_2 */], // TODO Impale OR Slash
        description: "Partizans are spears with thick leafshaped blades, sacrificing some of the reach of the spear to inflict heavier cutting blows."
    },
    POLLAXE: {
        name: "Pollaxe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 480,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 0 /* WeaponQuality.HACK */, 2 /* WeaponQuality.IMPALE */, 7 /* WeaponQuality.PUMMEL */], // TODO Hack OR Impale OR Pummel
        description: "The pollaxe takes many forms, but the archetypal design features a head with a short spike on the top for thrusting, an axe head to one side for cutting, and a hammer head on the other side for pummelling."
    },
    SPEAR: {
        name: "Spear",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 180,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "Besides the club, the spear is probably the most ubiquitous weapon in the Old World. Almost all species and nations employ troops armed with spears, aside from the Dwarfs who tend to eschew polearms in general."
    },
    PIKE: {
        name: "Pike",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 216,
        enc: 4,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "These very long heavy spears are not commonly employed outside of specially trained regiments. Tilean mercenaries are particularly famed for their mastery of pikes and pike formations."
    },
    QUARTERSTAFF: {
        name: "Quarterstaff",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_STAFF,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 36,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 7 /* WeaponQuality.PUMMEL */],
        description: "Quarterstaffs are straight lengths of wood about as tall as their wielder. They are as often found as they are crafted."
    },
    ENCHANTED_STAFF: {
        name: "Enchanted Staff",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_STAFF,
        group: 6 /* WeaponGroup.POLE_ARM */,
        groupLabel: "Pole arm" /* WeaponGroupLabel.POLE_ARM */,
        price: 3600,
        enc: 2,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        longReach: true,
        strBonus: true,
        damage: 4,
        qualities: [15 /* WeaponQuality.DEFENSIVE */, 7 /* WeaponQuality.PUMMEL */],
        description: "Wizards typically bear staffs. They are badges of a Wizard's office as well as magical tools. A Wizard's staff is typically designed and decorated in a manner that attracts the Winds of Magic the Wizard works with. Staffs work by attracting the Winds with which they are associated. If a spellcaster bears a staff made to attract a Wind of Magic, spells from the corresponding Lore have their CN reduced by 1 (to a minimum of 0)."
    },
    BASTARD_SWORD: {
        name: "Bastard Sword",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SWORD,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: 1920,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: [5 /* WeaponQuality.DAMAGING */, 15 /* WeaponQuality.DEFENSIVE */],
        description: "Also known as a hand-and-a-half sword, the bastard sword is longer and heavier than a typical blade, but shorter and lighter than a zweihander. A fighter with Melee (Basic) could use a bastard sword as a singlehanded weapon, but it gains the Tiring and Slow Flaws."
    },
    GREAT_AXE: {
        name: "Great Axe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: 960,
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: true,
        strBonus: true,
        damage: 6,
        qualities: [0 /* WeaponQuality.HACK */, 16 /* WeaponQuality.IMPACT */, 23 /* WeaponQuality.TIRING */],
        description: "Rarely used by the Empire, but often employed by Norse tribes as a counter to heavy armour."
    },
    FLAMBERGE_ZWEIHANDER: {
        name: "Flamberge Zweihander",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SWORD,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: 7200,
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: [5 /* WeaponQuality.DAMAGING */, 0 /* WeaponQuality.HACK */, 9 /* WeaponQuality.SLASH_2 */],
        description: "The Empire's famous greatsword regiments are armed with massive steel blades, as long as many polearms. Certain master armourers go to even greater lengths in adding waves and serrated edges to their swords. These weapons are known as flamberge blades, and the wounds they inflict can be deeper as a result of their cutting power."
    },
    PICK: {
        name: "Pick",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: 108,
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 5,
        qualities: [5 /* WeaponQuality.DAMAGING */, 2 /* WeaponQuality.IMPALE */, 20 /* WeaponQuality.SLOW */],
        description: "Two-handed military picks are rarely seen, their use being superseded by various forms of polearm. Certain subterranean species are known to employ them."
    },
    WARHAMMER_TH: {
        name: "Warhammer",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_MACE,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: 720,
        enc: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        longReach: false,
        strBonus: true,
        damage: 6,
        qualities: [5 /* WeaponQuality.DAMAGING */, 7 /* WeaponQuality.PUMMEL */, 20 /* WeaponQuality.SLOW */],
        description: "The two-handed warhammer is a difficult weapon to master, but it is associated with the Dwarfs and the Sigmarite cult."
    },
    ZWEIHANDER: {
        name: "Zweihander",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SWORD,
        group: 7 /* WeaponGroup.TWO_HANDED */,
        groupLabel: "Two-Handed" /* WeaponGroupLabel.TWO_HANDED */,
        price: 2400,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        longReach: true,
        strBonus: true,
        damage: 5,
        qualities: [5 /* WeaponQuality.DAMAGING */, 0 /* WeaponQuality.HACK */],
        description: "The Empire's famous greatsword regiments are armed with massive steel blades, as long as many polearms. Certain master armourers go to even greater lengths in adding waves and serrated edges to their swords."
    }
};
// #endregion === WEAPONS MELEE SET === //
// === //
// #region ====== WEAPONS RANGED SET === //
TEW.DATABASE.WEAPONS.RANGED_SET = {
    ELF_BOW: {
        name: "Elf Bow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammunition: [0 /* AmmunitionGroup.ARROW */],
        twoHanded: true,
        price: 2400,
        enc: 2,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 150,
        strBonus: true,
        damage: 4,
        qualities: [5 /* WeaponQuality.DAMAGING */, 4 /* WeaponQuality.PRECISE */],
        description: "A bow made with the finests materials by the finests elven hands on Ulthuan."
    },
    LONGBOW: {
        name: "Longbow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammunition: [0 /* AmmunitionGroup.ARROW */],
        twoHanded: true,
        price: 1200,
        enc: 3,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 100,
        strBonus: true,
        damage: 4,
        qualities: [5 /* WeaponQuality.DAMAGING */],
        description: "A bow often used by bretonnian archers for better range."
    },
    BOW: {
        name: "Bow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammunition: [0 /* AmmunitionGroup.ARROW */],
        twoHanded: true,
        price: 960,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 50,
        strBonus: true,
        damage: 3,
        qualities: [],
        description: "A classic bow to shoot arrows."
    },
    SHORTBOW: {
        name: "Shortbow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 8 /* WeaponGroup.BOW */,
        groupLabel: "Bow" /* WeaponGroupLabel.BOW */,
        ammunition: [0 /* AmmunitionGroup.ARROW */],
        twoHanded: true,
        price: 720,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 20,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "A lighter bow but with limited range and damage."
    },
    CROSSBOW_PISTOL: {
        name: "Crossbow Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CROSSBOW,
        group: 9 /* WeaponGroup.CROSSBOW */,
        groupLabel: "Crossbow" /* WeaponGroupLabel.CROSSBOW */,
        ammunition: [1 /* AmmunitionGroup.BOLT */],
        twoHanded: false,
        price: 1440,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 10,
        strBonus: false,
        damage: 7,
        qualities: [34 /* WeaponQuality.PISTOL */],
        description: "A small crossbow whitch can be used in close combat and has no need to reload."
    },
    HEAVY_CROSSBOW: {
        name: "Heavy Crossbow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CROSSBOW,
        group: 9 /* WeaponGroup.CROSSBOW */,
        groupLabel: "Crossbow" /* WeaponGroupLabel.CROSSBOW */,
        ammunition: [1 /* AmmunitionGroup.BOLT */],
        twoHanded: true,
        price: 1680,
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 100,
        strBonus: false,
        damage: 9,
        qualities: [5 /* WeaponQuality.DAMAGING */, 28 /* WeaponQuality.RELOAD_2 */],
        description: "A heavy crossbow, hard to reload but devastating."
    },
    CROSSBOW: {
        name: "Crossbow",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_CROSSBOW,
        group: 9 /* WeaponGroup.CROSSBOW */,
        groupLabel: "Crossbow" /* WeaponGroupLabel.CROSSBOW */,
        ammunition: [1 /* AmmunitionGroup.BOLT */],
        twoHanded: true,
        price: 1200,
        enc: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 60,
        strBonus: false,
        damage: 9,
        qualities: [27 /* WeaponQuality.RELOAD_1 */],
        description: "A classic crossbow to shoot bolts."
    },
    LASSO: {
        name: "Lasso",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_WHIP,
        group: 10 /* WeaponGroup.ENTANGLING */,
        groupLabel: "Entangling" /* WeaponGroupLabel.ENTANGLING */,
        ammunition: [],
        twoHanded: false,
        price: 72,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 6,
        strBonus: false,
        damage: 0,
        qualities: [19 /* WeaponQuality.ENTANGLE */],
        description: "A rope with a sliding knot, often used to catch livestock."
    },
    WHIP: {
        name: "Whip",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_WHIP,
        group: 10 /* WeaponGroup.ENTANGLING */,
        groupLabel: "Entangling" /* WeaponGroupLabel.ENTANGLING */,
        ammunition: [],
        twoHanded: false,
        price: 60,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 2,
        qualities: [19 /* WeaponQuality.ENTANGLE */],
        description: "A whip, often used by tamers."
    },
    SLING: {
        name: "Sling" /* WeaponGroupLabel.SLING */,
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 11 /* WeaponGroup.SLING */,
        groupLabel: "Sling" /* WeaponGroupLabel.SLING */,
        ammunition: [2 /* AmmunitionGroup.STONE */],
        twoHanded: false,
        price: 12,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 60,
        strBonus: false,
        damage: 6,
        qualities: [],
        description: "A Halfing's favorite weapon, after the saucage pick of course."
    },
    STAFF_SLING: {
        name: "Staff Sling",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 11 /* WeaponGroup.SLING */,
        groupLabel: "Sling" /* WeaponGroupLabel.SLING */,
        ammunition: [2 /* AmmunitionGroup.STONE */],
        twoHanded: true,
        price: 48,
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
        ammunition: [],
        twoHanded: false,
        price: 12,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 9,
        strBonus: true,
        damage: 0,
        qualities: [19 /* WeaponQuality.ENTANGLE */],
        description: "A weighted rope used to entangle people from a distance."
    },
    DART: {
        name: "Dart",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        ammunition: [],
        twoHanded: false,
        price: 24,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 6,
        strBonus: true,
        damage: 1,
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "A dart, mostly used in tavern games."
    },
    JAVELIN: {
        name: "Javelin",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        ammunition: [],
        twoHanded: false,
        price: 126,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 9,
        strBonus: true,
        damage: 3,
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "A weapon whitch could be used for sports."
    },
    ROCK: {
        name: "Rock",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_GAUNTLET,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        ammunition: [],
        twoHanded: false,
        price: 0,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 9,
        strBonus: true,
        damage: 0,
        qualities: [],
        description: "Just a pebble really."
    },
    THROWING_AXE: {
        name: "Throwing Axe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        ammunition: [],
        twoHanded: false,
        price: 240,
        enc: 1,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 3,
        qualities: [0 /* WeaponQuality.HACK */],
        description: "An axe balanced to be thrown rather than being used in close combat."
    },
    THROWING_KNIFE: {
        name: "Throwing Knife",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_KNIFE,
        group: 12 /* WeaponGroup.THROWING */,
        groupLabel: "Throwing" /* WeaponGroupLabel.THROWING */,
        ammunition: [],
        twoHanded: false,
        price: 216,
        enc: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: 6,
        strBonus: true,
        damage: 2,
        qualities: [],
        description: "That is not made to cut meat but more to thrw to an opponent."
    },
    BOMB: {
        name: "Bomb",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOMB,
        group: 13 /* WeaponGroup.EXPLOSIVES */,
        groupLabel: "Explosives" /* WeaponGroupLabel.EXPLOSIVES */,
        ammunition: [],
        twoHanded: false,
        price: 720,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 3,
        strBonus: false,
        damage: 12,
        qualities: [42 /* WeaponQuality.BLAST_5 */, 25 /* WeaponQuality.DANGEROUS */, 16 /* WeaponQuality.IMPACT */],
        description: "Goes BOOM !"
    },
    INCENDIARY: {
        name: "Incendiary",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_BOMB,
        group: 13 /* WeaponGroup.EXPLOSIVES */,
        groupLabel: "Explosives" /* WeaponGroupLabel.EXPLOSIVES */,
        ammunition: [],
        twoHanded: false,
        price: 240,
        enc: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 3,
        strBonus: false,
        damage: 0, // TODO
        qualities: [41 /* WeaponQuality.BLAST_4 */, 25 /* WeaponQuality.DANGEROUS */],
        description: "A throwing bomb that sprays fire."
    },
    BLUNDERBUSS: {
        name: "Blunderbuss",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SHOTGUN,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 480,
        enc: 1,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 20,
        strBonus: false,
        damage: 8,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 28 /* WeaponQuality.RELOAD_2 */],
        description: "An early form of firearm, the Blunderbuss features a wide bore that exchanges accuracy for ease of operation. It is typically loaded with powder, wadding, and many small projectiles to improve the chance of scoring a hit. It may be loaded with either Small Shot and Powder or Scrap and Powder."
    },
    HOCHLAND_LONG_RIFLE: {
        name: "Hochland Long Rifle",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_RIFLE,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 24000,
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 100,
        strBonus: false,
        damage: 9,
        qualities: [40 /* WeaponQuality.ACCURATE */, 4 /* WeaponQuality.PRECISE */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "One of the legendary and incredibly precise weapons used by the hunters of Hochland, such rifles are incredibly prized. Often used to target enemy officers, such weapons are considered unsporting by many nobles and enemy soldiers caught with when them are summarily hanged."
    },
    HANDGUN: {
        name: "Handgun",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 960,
        enc: 2,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: 50,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 29 /* WeaponQuality.RELOAD_3 */],
        description: "A simple two-handed firearm, typically using a wheellock or flintlock design. Thousands of these are employed by the Empire state troops."
    },
    PISTOL: {
        name: "Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: false,
        price: 1920,
        enc: 0,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 20,
        strBonus: false,
        damage: 8,
        qualities: [34 /* WeaponQuality.PISTOL */, 27 /* WeaponQuality.RELOAD_1 */],
        description: "A smaller blackpowder weapon designed to be fired with one hand, these are often used in duels or by cavalry soldiers such as Outriders who require one hand to hold the reins of their mount. Wealthy individuals sometimes carry a brace pistols in lieue of reloading."
    },
    MATCHLOCK_HANDGUN: {
        name: "Matchlock Handgun",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 480,
        enc: 2,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 50,
        strBonus: false,
        damage: 8,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "An earlier design of handgun, a few of these relics persist around the Empire, and can often be had quite cheaply. Before use, a user must spend one action to light the fuse on their weapon. A lit fuse will burn for quite a while unless doused by rain or wind."
    },
    MATCHLOCK_BLUNDERBUSS: {
        name: "Matchlock Blunderbuss",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SHOTGUN,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 240,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 20,
        strBonus: false,
        damage: 7,
        qualities: [38 /* WeaponQuality.SPREAD_3 */, 25 /* WeaponQuality.DANGEROUS */, 29 /* WeaponQuality.RELOAD_3 */],
        description: "An earlier design of Blunderbuss, this weapon has the same drawbacks as the Matchlock Handgun, above."
    },
    ARQUEBUS: {
        name: "Arquebus",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_RIFLE,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 1200,
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 40,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 31 /* WeaponQuality.RELOAD_5 */],
        description: "Little more than a scaled down cannon, the Arquebus is an ancient design indeed, often eschewing such innovations as sights, a trigger, or even a handle or grip. While early examples fired shot similar to or smaller than that used in modern blackpowder weapons, those surviving into current use in the Empire are typically larger bore weapons kept by nobles seeking to impress visitors. However, the sheer size of these relics renders them useful when the calibre of newer designs leaves something to be desired."
    },
    DOUBLE_BARRELLED_HANDGUN: {
        name: "Double-Barrelled Handgun",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 1680,
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 50,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 35 /* WeaponQuality.REPEATER */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "If one barrel is good, surely two is better? About as complex as a firearm can be while still being used by the common soldier, a double-barrelled handgun has two barrels and two triggers. Though heavy, most come with a device for reloading both barrels at once, allowing the user to fire more frequently."
    },
    GRIFFONSFOOT_PISTOL: {
        name: "Griffonsfoot Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: false,
        price: 2400,
        enc: 1,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 10,
        strBonus: false,
        damage: 7,
        qualities: [26 /* WeaponQuality.IMPRECISE */, 39 /* WeaponQuality.SPREAD_5 */, 32 /* WeaponQuality.RELOAD_6 */],
        description: "This weapon is best employed against a tight group of enemies. A single trigger discharges all six barrels, and reloading requires six shots and commensurate amount of powder."
    },
    GUN_AXE: {
        name: "GunAxe",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_AXE,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 1920,
        enc: 1,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "This weapon is much as one might imagine - a handgun combined with an axe. It may be used as either a Hand Weapon or a Handgun. However, if used as an axe while loaded, any critical fumble will discharge the weapon into the torso of the user."
    },
    GUN_HALBERD: {
        name: "Gun Halberd",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_SPEAR,
        group: 14 /* WeaponGroup.BLACKPOWDER */,
        groupLabel: "Blackpowder" /* WeaponGroupLabel.BLACKPOWDER */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 2400,
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 30 /* WeaponQuality.RELOAD_4 */],
        description: "Employing the same principles as the Gun Axe, this weapon functions both as a halberd and as a handgun, with the firearm's barrel built into the haft of the Halberd. If used as a halberd while loaded, any critical fumble will discharge the weapon into anyone unlucky enough to be standing directly behind the user."
    },
    REPEATER_HANDGUN: {
        name: "Repeater Handgun",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 15 /* WeaponGroup.ENGINEERING */,
        groupLabel: "Engineering" /* WeaponGroupLabel.ENGINEERING */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: true,
        price: 2400,
        enc: 3,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 30,
        strBonus: false,
        damage: 9,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 31 /* WeaponQuality.RELOAD_5 */, 37 /* WeaponQuality.REPEATER_4 */],
        description: "A Repeater Handgun uses a cunning method, often involving clockwork or other intricate mechanisms, to place fresh ammunition into a position to fire each time the weapon is discharged. Rarely are two such weapons identical, though rotating mechanisms are a common feature."
    },
    REPEATER_PISTOL: {
        name: "Repeater Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 15 /* WeaponGroup.ENGINEERING */,
        groupLabel: "Engineering" /* WeaponGroupLabel.ENGINEERING */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: false,
        price: 3600,
        enc: 1,
        availability: 1 /* Availability.RARE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        range: 10,
        strBonus: false,
        damage: 8,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 34 /* WeaponQuality.PISTOL */, 30 /* WeaponQuality.RELOAD_4 */, 37 /* WeaponQuality.REPEATER_4 */],
        description: "Even more challenging to create than a Repeater Handgun due to their smaller size, RepeaterPistols otherwise share much in common with their larger cousins. Clockwork mechanisms are common, as are rotating chambers filled with ammunition. Minute adjustments are required constantly, and in the hands of an untrained user such weapons often misfire spectacularly."
    },
    HAND_MORTAR: {
        name: "Hand Mortar",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 15 /* WeaponGroup.ENGINEERING */,
        groupLabel: "Engineering" /* WeaponGroupLabel.ENGINEERING */,
        ammunition: [3 /* AmmunitionGroup.BOMB */],
        twoHanded: true,
        price: 12000,
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 30,
        strBonus: false,
        damage: 7,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 28 /* WeaponQuality.RELOAD_2 */],
        description: "Looking like a short, squat Blunderbuss, the Hand Mortar is a scaled down mortar designed to lob bombs and other large items in a desired direction. It is quite dangerous to use, as loading a little too much powder, or mistiming the fuse on a loaded bomb, will see the weapon explode quite spectacularly. Any fumble while reloading the weapon causes it to explode. However, the device does open up many opportunities for those willing to risk its use."
    },
    CANE_PISTOL: {
        name: "Cane Pistol",
        icon: TEW.DATABASE.ICONS.SET.WEAPON_PISTOL,
        group: 15 /* WeaponGroup.ENGINEERING */,
        groupLabel: "Engineering" /* WeaponGroupLabel.ENGINEERING */,
        ammunition: [4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */],
        twoHanded: false,
        price: 3600,
        enc: 3,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: 10,
        strBonus: false,
        damage: 8,
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 32 /* WeaponQuality.RELOAD_6 */],
        description: "A small-bore pistol concealed in a walking stick or cane, this weapon is somewhat impractical, but very hard to spot."
    }
};
// #endregion === WEAPONS RANGED SET === //
// === //
// #region ====== WEAPONS AMMO SET === //
TEW.DATABASE.WEAPONS.AMMO_SET = {
    ARROW: {
        name: "Arrow",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 0 /* AmmunitionGroup.ARROW */,
        groupLabel: "Arrow" /* AmmunitionGroupLabel.ARROW */,
        ammountSold: 12,
        price: 60,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "A classic arrow to use with a bow."
    },
    BARBED_ARROW: {
        name: "Barbed Arrow",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 0 /* AmmunitionGroup.ARROW */,
        groupLabel: "Arrow" /* AmmunitionGroupLabel.ARROW */,
        ammountSold: 12,
        price: 96,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+0",
        qualities: [2 /* WeaponQuality.IMPALE */, 8 /* WeaponQuality.SLASH_1 */],
        description: "A sharp arrow designed to remain in the flesh of the target."
    },
    BODKIN_ARROW: {
        name: "Bodkin Arrow",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 0 /* AmmunitionGroup.ARROW */,
        groupLabel: "Arrow" /* AmmunitionGroupLabel.ARROW */,
        ammountSold: 12,
        price: 96,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+0",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "A square-based arrow, used to penetrate heavy armor."
    },
    ELF_ARROW: {
        name: "Elf Arrow",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 0 /* AmmunitionGroup.ARROW */,
        groupLabel: "Arrow" /* AmmunitionGroupLabel.ARROW */,
        ammountSold: 1,
        price: 72,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: "+50",
        damage: "+1",
        qualities: [40 /* WeaponQuality.ACCURATE */, 2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "A perfectly balanced an sharpened arrow, designed by the High Elves."
    },
    SHARP_STICK: {
        name: "Sharp Stick",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_BOW,
        group: 0 /* AmmunitionGroup.ARROW */,
        groupLabel: "Arrow" /* AmmunitionGroupLabel.ARROW */,
        ammountSold: 1,
        price: 0,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "/2",
        damage: "-2",
        qualities: [25 /* WeaponQuality.DANGEROUS */, 26 /* WeaponQuality.IMPRECISE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "Just a pointy stick."
    },
    BOLT: {
        name: "Bolt",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_CROSSBOW,
        group: 1 /* AmmunitionGroup.BOLT */,
        groupLabel: "Bolt" /* AmmunitionGroupLabel.BOLT */,
        ammountSold: 12,
        price: 60,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: [2 /* WeaponQuality.IMPALE */],
        description: "A simple bolt to use with a crossbow."
    },
    LEAD_BULLET: {
        name: "Lead Bullet",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 2 /* AmmunitionGroup.STONE */,
        groupLabel: "Stone" /* AmmunitionGroupLabel.STONE */,
        ammountSold: 12,
        price: 4,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "-10",
        damage: "+1",
        qualities: [7 /* WeaponQuality.PUMMEL */],
        description: "A bullet made of lead to throw with a sling."
    },
    PEBBLE: {
        name: "Pebble",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 2 /* AmmunitionGroup.STONE */,
        groupLabel: "Stone" /* AmmunitionGroupLabel.STONE */,
        ammountSold: 1,
        price: 0,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "-10",
        damage: "-2",
        qualities: [26 /* WeaponQuality.IMPRECISE */, 6 /* WeaponQuality.UNDAMAGING */],
        description: "A simple pebble picked up from the ground."
    },
    STONE_BULLET: {
        name: "Stone Bullet",
        groupIcon: TEW.DATABASE.ICONS.SET.WEAPON_SLING,
        group: 2 /* AmmunitionGroup.STONE */,
        groupLabel: "Stone" /* AmmunitionGroupLabel.STONE */,
        ammountSold: 12,
        price: 2,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: [7 /* WeaponQuality.PUMMEL */],
        description: "A projectile made of stone to be throwned by a sling."
    },
    BULLET_AND_POWDER: {
        name: "Bullet and Powder",
        groupIcon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */,
        groupLabel: "Light Blackpowder" /* AmmunitionGroupLabel.LIGHT_BLACKPOWDER */,
        ammountSold: 12,
        price: 39,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+1",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "Fired from most Pistols, Handguns and their variants, bullets come in a small oiled sack and are typically sold with enough powder to fire them under normal circumstances."
    },
    PAPER_CARTRIDGE: {
        name: "Paper Cartridge",
        groupIcon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */,
        groupLabel: "Light Blackpowder" /* AmmunitionGroupLabel.LIGHT_BLACKPOWDER */,
        ammountSold: 12,
        price: 60,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+1",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */, 33 /* WeaponQuality.FASTER_RELOAD */],
        description: "These are pre prepared packages of shot, powder, and wadding, making reloading blackpowder weapons far easier. Tests made to reload a suitable weapon with this ammunition benefit from a +10 bonus."
    },
    AQSHY_INFUSED_POWDER: {
        name: "Aqshy-Infused Powder",
        groupIcon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */,
        groupLabel: "Light Blackpowder" /* AmmunitionGroupLabel.LIGHT_BLACKPOWDER */,
        ammountSold: 12,
        price: 240,
        availability: 2 /* Availability.EXOTIC */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_EXOTIC,
        range: "+10",
        damage: "+2",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */],
        description: "For the very brave or foolish, this powder is created from sand from the Nehekeran desert, infused with additional Aqshy by means known only to the Bright College in Altdorf. It is more explosive than normal powder but does wear down barrels far more quickly than its mundane counterpart. Any failed Test that includes either an 8 or 9 on either the 10s or units die counts as a Fumble when using this powder."
    },
    PRECISION_SHOT_AND_POWDER: {
        name: "Precision Shot and Powder",
        groupIcon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */,
        groupLabel: "Light Blackpowder" /* AmmunitionGroupLabel.LIGHT_BLACKPOWDER */,
        ammountSold: 1,
        price: 36,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+1",
        qualities: [2 /* WeaponQuality.IMPALE */, 3 /* WeaponQuality.PENETRATING */, 4 /* WeaponQuality.PRECISE */],
        description: "Expertly prepared powder and carefully smoothed and rounded bullets can be combined to allow for more reliable, precise shots with any suitable Blackpowder weapon."
    },
    IMPROVISED_SHOT_AND_POWDER: {
        name: "Improvised Shot and Powder",
        groupIcon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */,
        groupLabel: "Light Blackpowder" /* AmmunitionGroupLabel.LIGHT_BLACKPOWDER */,
        ammountSold: 1,
        price: 3,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "/2",
        damage: "+0",
        qualities: [],
        description: "A smidge of powder, possibly damp, and whatever stone looks like it might fit down the barrel of a gun."
    },
    SMALL_SHOT_AND_POWDER: {
        name: "Small Shot and Powder",
        groupIcon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */,
        groupLabel: "Light Blackpowder" /* AmmunitionGroupLabel.LIGHT_BLACKPOWDER */,
        ammountSold: 12,
        price: 39,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "+0",
        damage: "+0",
        qualities: [38 /* WeaponQuality.SPREAD_3 */],
        description: "Often used for hunting birds and other small, fast moving creatures, Small Shot is far smaller than the barrels of most weapons, and the user is expected to use a dozen or so for each load."
    },
    SCRAP_AND_POWDER: {
        name: "Scrap and Powder",
        groupIcon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */,
        groupLabel: "Light Blackpowder" /* AmmunitionGroupLabel.LIGHT_BLACKPOWDER */,
        ammountSold: 12,
        price: 24,
        availability: 0 /* Availability.COMMON */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        range: "/2",
        damage: "-1",
        qualities: [38 /* WeaponQuality.SPREAD_3 */, 43 /* WeaponQuality.INFECTED */],
        description: "Scrap is a catch-all term for old roofing nails, used horseshoe fragments, arrow heads, and other bits of sharp and pointy material scavenged from whatever pile or rust or slag can be found. Attacks made using this shot benefit from the Infected Creature Trait."
    },
    LARGE_BULLET_AND_POWDER: {
        name: "Large Bullet and Powder",
        groupIcon: TEW.DATABASE.ICONS.SET.PISTOL,
        group: 4 /* AmmunitionGroup.LIGHT_BLACKPOWDER */,
        groupLabel: "Light Blackpowder" /* AmmunitionGroupLabel.LIGHT_BLACKPOWDER */,
        ammountSold: 12,
        price: 240,
        availability: 3 /* Availability.SCARCE */,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        range: "+0",
        damage: "+2",
        qualities: [2 /* WeaponQuality.IMPALE */, 16 /* WeaponQuality.IMPACT */, 3 /* WeaponQuality.PENETRATING */],
        description: "Technically a small cannonball, these shots are loaded into large bore weapons such as an Arquebus or Hand Mortar. Those firing such a device, or standing within 2 yards of the user, must make a Challenging (+0) Endurance Test or gain a Deafened Condition."
    }
};
// #endregion === WEAPONS AMMO SET === //
// === //
// #region ====== WEAPONS IDS === //
// The IDs are the keys of the SET objects MELE_SET, RANGED_SET
TEW.DATABASE.WEAPONS.IDS = Object.keys(TEW.DATABASE.WEAPONS.MELEE_SET)
    .concat(Object.keys(TEW.DATABASE.WEAPONS.RANGED_SET))
    .sort((a, b) => a.localeCompare(b));
// Those are the IDs of the groups
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
// #endregion === WEAPONS IDS === //
// === //
// #region ====== WEAPONS ARRAY === //
// This is a 2D array, where the first element is the key and the second element is the value
TEW.DATABASE.WEAPONS.ARRAY = TEW.DATABASE.WEAPONS.IDS
    .map((key) => [key, TEW.DATABASE.WEAPONS.MELEE_SET[key] || TEW.DATABASE.WEAPONS.RANGED_SET[key]]);
// #endregion === WEAPONS ARRAY === //
TEW.DATABASE.WEAPONS.AMMO_IDS = Object.keys(TEW.DATABASE.WEAPONS.AMMO_SET).sort((a, b) => a.localeCompare(b));
TEW.DATABASE.WEAPONS.AMMO_ARRAY = TEW.DATABASE.WEAPONS.AMMO_IDS.map((key) => [key, TEW.DATABASE.WEAPONS.AMMO_SET[key]]);
// #endregion =========================== TEW_Weapons ============================== //
// ============================== //

