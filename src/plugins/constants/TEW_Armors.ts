// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Armors.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the armor database for the TEW plugin.

// ----------------------
// Imports
// ----------------------

import { ArmorGroup, ArmorGroupLabel, BodyLocation, ArmorQuality, Availability } from "../_types/enum";
import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

TEW.DATABASE.ARMORS = {};
// #region ====== ARMORS SET === //
TEW.DATABASE.ARMORS.SET = {
    SOFT_KIT: {
        name: "Soft Kit",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: ArmorGroup.SOFT_KIT,
        groupLabel: ArmorGroupLabel.SOFT_KIT,
        price: 216,
        enc: 1,
        availability: Availability.SCARCE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [BodyLocation.ARMS, BodyLocation.BODY, BodyLocation.LEGS],
        ap: 0,
        qualities: [],
        forbiddenWith: [],
        description: "Soft kits are woollen doublets and hose designed to be worn under armour. They provide padding needed to prevent chafing and laces and holes to attach pieces of armour to. They can be worn under any armour and must be worn under certain pieces of plate."
    },
    REINFORCED_SOFT_KIT: {
        name: "Reinforced Soft Kit",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: ArmorGroup.SOFT_KIT,
        groupLabel: ArmorGroupLabel.SOFT_KIT,
        price: 480,
        enc: 1,
        availability: Availability.SCARCE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [BodyLocation.ARMS, BodyLocation.BODY, BodyLocation.LEGS],
        ap: 1,
        qualities: [ArmorQuality.PARTIAL, ArmorQuality.REINFORCED],
        forbiddenWith: [],
        description: "Soft kits are woollen doublets and hose designed to be worn under armour. They provide padding needed to prevent chafing and laces and holes to attach pieces of armour to. They can be worn under any armour and must be worn under certain pieces of plate. This one has been reinforced with sections of mail placed to compensate for chinks in a full suit of plate armour."
    },
    LEATHER_JACK: {
        name: "Leather Jack",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: ArmorGroup.BOILED_LEATHER,
        groupLabel: ArmorGroupLabel.BOILED_LEATHER,
        price: 144,
        enc: 1,
        availability: Availability.COMMON,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [BodyLocation.ARMS, BodyLocation.BODY],
        ap: 1,
        qualities: [],
        forbiddenWith: [ArmorGroup.CHAINMAIL, ArmorGroup.PLATE],
        description: "Boiled leather is constructed from thick pieces of hide. It is rigid and tough and cannot be worn under mail or the more complicated pieces of plate. This jacket will protect your body and arms."
    },
    LEATHER_JERKIN: {
        name: "Leather Jerkin",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: ArmorGroup.BOILED_LEATHER,
        groupLabel: ArmorGroupLabel.BOILED_LEATHER,
        price: 120,
        enc: 1,
        availability: Availability.COMMON,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [BodyLocation.BODY],
        ap: 1,
        qualities: [],
        forbiddenWith: [ArmorGroup.CHAINMAIL, ArmorGroup.PLATE],
        description: "Boiled leather is constructed from thick pieces of hide. It is rigid and tough and cannot be worn under mail or the more complicated pieces of plate. This jerkin will protect your body."
    },
    LEATHER_LEGGINGS: {
        name: "Leather Leggings",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_LEGS_SLOT,
        group: ArmorGroup.BOILED_LEATHER,
        groupLabel: ArmorGroupLabel.BOILED_LEATHER,
        price: 168,
        enc: 1,
        availability: Availability.COMMON,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [BodyLocation.LEGS],
        ap: 1,
        qualities: [],
        forbiddenWith: [ArmorGroup.CHAINMAIL, ArmorGroup.PLATE],
        description: "Boiled leather is constructed from thick pieces of hide. It is rigid and tough and cannot be worn under mail or the more complicated pieces of plate. These leggings will protect your legs."
    },
    LEATHER_SKULLCAP: {
        name: "Leather Skullcap",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_HEAD_SLOT,
        group: ArmorGroup.BOILED_LEATHER,
        groupLabel: ArmorGroupLabel.BOILED_LEATHER,
        price: 96,
        enc: 0,
        availability: Availability.COMMON,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [],
        locations: [BodyLocation.HEAD],
        ap: 1,
        qualities: [],
        forbiddenWith: [ArmorGroup.CHAINMAIL, ArmorGroup.PLATE],
        description: "Boiled leather is constructed from thick pieces of hide. It is rigid and tough and cannot be worn under mail or the more complicated pieces of plate. This skullcap will protect your head."
    },
    CHAINMAIL_CHAUSSES: {
        name: "Chainmail Chausses",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_LEGS_SLOT,
        group: ArmorGroup.CHAINMAIL,
        groupLabel: ArmorGroupLabel.CHAINMAIL,
        price: 480,
        enc: 3,
        availability: Availability.SCARCE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ STEALTH: "-10" }],
        locations: [BodyLocation.LEGS],
        ap: 2,
        qualities: [],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.PLATE],
        description: "Chainmail is made from thousands of interlocking iron rings. It is heavy and requires regular cleaning and oiling to prevent corrosion. These chausses will protect your legs."
    },
    CHAINMAIL_COAT: {
        name: "Chainmail Coat",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: ArmorGroup.CHAINMAIL,
        groupLabel: ArmorGroupLabel.CHAINMAIL,
        price: 720,
        enc: 4,
        availability: Availability.COMMON,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [{ STEALTH: "-10" }],
        locations: [BodyLocation.ARMS, BodyLocation.BODY],
        ap: 2,
        qualities: [],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.PLATE],
        description: "Chainmail is made from thousands of interlocking iron rings. It is heavy and requires regular cleaning and oiling to prevent corrosion. This coat will protect your body and arms."
    },
    CHAINMAIL_COIF: {
        name: "Chainmail Coif",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: ArmorGroup.CHAINMAIL,
        groupLabel: ArmorGroupLabel.CHAINMAIL,
        price: 240,
        enc: 2,
        availability: Availability.SCARCE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ PERCEPTION: "-10", STEALTH: "-10" }],
        locations: [BodyLocation.HEAD],
        ap: 2,
        qualities: [ArmorQuality.PARTIAL],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.PLATE],
        description: "Chainmail is made from thousands of interlocking iron rings. It is heavy and requires regular cleaning and oiling to prevent corrosion. This coif will protect your head."
    },
    CHAINMAIL_SHIRT: {
        name: "Chainmail Shirt",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: ArmorGroup.CHAINMAIL,
        groupLabel: ArmorGroupLabel.CHAINMAIL,
        price: 480,
        enc: 3,
        availability: Availability.SCARCE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [{ STEALTH: "-10" }],
        locations: [BodyLocation.BODY],
        ap: 2,
        qualities: [],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.PLATE],
        description: "Chainmail is made from thousands of interlocking iron rings. It is heavy and requires regular cleaning and oiling to prevent corrosion. This shirt will protect your body."
    },
    BRIGANDINE_JACK: {
        name: "Brigandine Jack",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: ArmorGroup.BRIGANDINE,
        groupLabel: ArmorGroupLabel.BRIGANDINE,
        price: 720,
        enc: 3,
        availability: Availability.SCARCE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [BodyLocation.ARMS, BodyLocation.BODY],
        ap: 2,
        qualities: [ArmorQuality.OVERCOAT],
        forbiddenWith: [ArmorGroup.PLATE],
        description: "Brigandine consists of padded leather or fabric into which many small metal strips, or lames, have been riveted. Brigandine pieces are bulky and cannot be worn under other forms of armour. Lamellar armour, or scale mail, may look rather different to brigandine, but has the same qualities. This jacket will protect your body and arms."
    },
    BRIGANDINE_JERKIN: {
        name: "Brigandine Jerkin",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_LIGHT_BODY_SLOT,
        group: ArmorGroup.BRIGANDINE,
        groupLabel: ArmorGroupLabel.BRIGANDINE,
        price: 480,
        enc: 2,
        availability: Availability.SCARCE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [BodyLocation.BODY],
        ap: 2,
        qualities: [ArmorQuality.OVERCOAT],
        forbiddenWith: [ArmorGroup.PLATE],
        description: "Brigandine consists of padded leather or fabric into which many small metal strips, or lames, have been riveted. Brigandine pieces are bulky and cannot be worn under other forms of armour. Lamellar armour, or scale mail, may look rather different to brigandine, but has the same qualities. This jerkin will protect your body."
    },
    BREASTPLATE: {
        name: "Breastplate",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_BODY_SLOT,
        group: ArmorGroup.BREASTPLATE,
        groupLabel: ArmorGroupLabel.BREASTPLATE,
        price: 2400,
        enc: 3,
        availability: Availability.SCARCE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_SCARCE,
        penalty: [],
        locations: [BodyLocation.BODY],
        ap: 3,
        qualities: [ArmorQuality.IMPENETRABLE, ArmorQuality.OVERCOAT, ArmorQuality.WEAKPOINTS],
        forbiddenWith: [ArmorGroup.PLATE],
        description: "Plate armour is painstakingly crafted from sheets of iron or steel. It is tailor made and close-fitting, so may not normally be worn over other types of armour. Breastplates may be an exception to this general rule, as many of them are designed to be worn over padding or chainmail. This breastplate will protect your body."
    },
    BRACERS: {
        name: "Bracers",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_ARMS_SLOT,
        group: ArmorGroup.PLATE,
        groupLabel: ArmorGroupLabel.PLATE,
        price: 1920,
        enc: 3,
        availability: Availability.RARE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [],
        locations: [BodyLocation.ARMS],
        ap: 3,
        qualities: [ArmorQuality.IMPENETRABLE, ArmorQuality.REQUIRES_KIT, ArmorQuality.WEAKPOINTS],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.CHAINMAIL, ArmorGroup.BRIGANDINE],
        description: "Plate armour is painstakingly crafted from sheets of iron or steel. It is tailor made and close-fitting, so may not normally be worn over other types of armour. These bracers will protect your arms."
    },
    OPEN_HELM: {
        name: "Open Helm",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: ArmorGroup.PLATE,
        groupLabel: ArmorGroupLabel.PLATE,
        price: 480,
        enc: 1,
        availability: Availability.COMMON,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_COMMON,
        penalty: [{ PERCEPTION: "-10" }],
        locations: [BodyLocation.HEAD],
        ap: 3,
        qualities: [ArmorQuality.PARTIAL],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.CHAINMAIL, ArmorGroup.BRIGANDINE],
        description: "Plate armour is painstakingly crafted from sheets of iron or steel. It is tailor made and close-fitting, so may not normally be worn over other types of armour. This helm will protect your head but not your face."
    },
    PLATE_LEGGINGS: {
        name: "Plate Leggings",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_LEGS_SLOT,
        group: ArmorGroup.PLATE,
        groupLabel: ArmorGroupLabel.PLATE,
        price: 2400,
        enc: 3,
        availability: Availability.RARE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ STEALTH: "-10" }],
        locations: [BodyLocation.LEGS],
        ap: 3,
        qualities: [ArmorQuality.IMPENETRABLE, ArmorQuality.REQUIRES_KIT, ArmorQuality.WEAKPOINTS],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.CHAINMAIL, ArmorGroup.BRIGANDINE],
        description: "Plate armour is painstakingly crafted from sheets of iron or steel. It is tailor made and close-fitting, so may not normally be worn over other types of armour. These leggings will protect your legs."
    },
    GREAT_HELM: {
        name: "Great Helm",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: ArmorGroup.PLATE,
        groupLabel: ArmorGroupLabel.PLATE,
        price: 480,
        enc: 2,
        availability: Availability.RARE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: [BodyLocation.HEAD],
        ap: 3,
        qualities: [ArmorQuality.IMPENETRABLE, ArmorQuality.WEAKPOINTS],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.CHAINMAIL, ArmorGroup.BRIGANDINE],
        description: "The Great Helm is the archetypal form of a fully enclosed metal helmet. They are considered old fashioned in Tilea and the Empire but are still common in Bretonnia. Early examples of these helmets had a square top. Later designs tend to have a conical top which lessens the impact of hammers and swords."
    },
    BASCINET: {
        name: "Bascinet",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: ArmorGroup.PLATE,
        groupLabel: ArmorGroupLabel.PLATE,
        price: 720,
        enc: 2,
        availability: Availability.RARE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: [BodyLocation.HEAD],
        ap: 3,
        qualities: [ArmorQuality.IMPENETRABLE, ArmorQuality.VISOR, ArmorQuality.WEAKPOINTS],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.CHAINMAIL, ArmorGroup.BRIGANDINE],
        description: "The Bascinet typically incorporates a conical ArmorQuality.VISOR, leading it to be known as a 'pigs-snout' helmet by many soldiers. This design provides additional protection against missile fire, as slingshots and arrows are deflected by the conical ArmorQuality.VISOR. If missile fire strikes the wearer of a Bascinet, and originates from in front of the wearer, then the helmet provides 4 APs rather than 3."
    },
    ARMET: {
        name: "Armet",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: ArmorGroup.PLATE,
        groupLabel: ArmorGroupLabel.PLATE,
        price: 720,
        enc: 2,
        availability: Availability.RARE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{ PERCEPTION: "-20" }],
        locations: [BodyLocation.HEAD],
        ap: 3,
        qualities: [ArmorQuality.IMPENETRABLE, ArmorQuality.VISOR, ArmorQuality.WEAKPOINTS],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER, ArmorGroup.CHAINMAIL, ArmorGroup.BRIGANDINE],
        description: "The Armet is a Tilean design which fits closely on the head, being narrower around the neck. To facilitate the snug fit the helmet has an integral mechanism that must be worked to open and close it. The exacting design of the Armet means that it can withstand blows that might damage other helmets. Every time the helmet might lose a point of AP, roll on the Armet Damage table."
    },
    SALLET: {
        name: "Sallet",
        icon: TEW.DATABASE.ICONS.SET.ARMOR_HEAVY_HEAD_SLOT,
        group: ArmorGroup.PLATE,
        groupLabel: ArmorGroupLabel.PLATE,
        price: 960,
        enc: 2,
        availability: Availability.RARE,
        availabilityIcon: TEW.DATABASE.ICONS.SET.AVAILABILITY_RARE,
        penalty: [{
            PERCEPTION: "-20"
        }],
        locations: [BodyLocation.HEAD],
        ap: 3,
        qualities: [ArmorQuality.IMPENETRABLE,ArmorQuality.VISOR,ArmorQuality.WEAKPOINTS],
        forbiddenWith: [ArmorGroup.BOILED_LEATHER,ArmorGroup.CHAINMAIL,ArmorGroup.BRIGANDINE],
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
TEW.DATABASE.ARMORS.ARRAY = TEW.DATABASE.ARMORS.IDS.map((key: string) => [key, TEW.DATABASE.ARMORS.SET[key]]);
// #endregion === ARMORS ARRAY === //
