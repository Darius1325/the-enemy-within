TEW.MELEE_WEAPONS = TEW.MELEE_WEAPONS || {
    SOFT_KIT: {
        name: "Soft Kit",
        group: "SOFT_KIT",
        price: "0/18/0",
        enc: 1,
        availability: "SCARCE",
        penalty: [],
        locations: ["ARMS","BODY","LEGS"],
        ap: 0,
        qualities: [],
        forbiddenWith: []
    },
    REINFORCED_SOFT_KIT: {
        name: "Reinforced Soft Kit",
        group: "SOFT_KIT",
        price: "2/0/0",
        enc: 1,
        availability: "SCARCE",
        penalty: [],
        locations: ["ARMS","BODY","LEGS"],
        ap: 1,
        qualities: ["PARTIAL","REINFORCED"],
        forbiddenWith: []
    },
    LEATHER_JACK: {
        name: "Leather Jack",
        group: "BOILED_LEATHER",
        price: "0/12/0",
        enc: 1,
        availability: "COMMON",
        penalty: [],
        locations: ["ARMS","BODY"],
        ap: 1,
        qualities: [],
        forbiddenWith: ["CHAINMAIL","PLATE"]
    },
    LEATHER_JERKIN: {
        name: "Leather Jerkin",
        group: "BOILED_LEATHER",
        price: "0/10/0",
        enc: 1,
        availability: "COMMON",
        penalty: [],
        locations: ["BODY"],
        ap: 1,
        qualities: [],
        forbiddenWith: ["CHAINMAIL","PLATE"]
    },
    LEATHER_JACK: {
        name: "Leather Leggings",
        group: "BOILED_LEATHER",
        price: "0/14/0",
        enc: 1,
        availability: "COMMON",
        penalty: [],
        locations: ["LEGS"],
        ap: 1,
        qualities: [],
        forbiddenWith: ["CHAINMAIL","PLATE"]
    },
    LEATHER_SKULLCAP: {
        name: "Leather Skullcap",
        group: "BOILED_LEATHER",
        price: "0/8/0",
        enc: 0,
        availability: "COMMON",
        penalty: [],
        locations: ["HEAD"],
        ap: 1,
        qualities: [],
        forbiddenWith: ["CHAINMAIL","PLATE"]
    },
    CHAINMAIL_CHAUSSES: {
        name: "Chainmail Chausses",
        group: "CHAINMAIL",
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        penalty: [{
            STEALTH: "-10"
        }],
        locations: ["LEGS"],
        ap: 2,
        qualities: [],
        forbiddenWith: ["BOILED_LEATHER","PLATE"]
    },
    CHAINMAIL_COAT: {
        name: "Chainmail Coat",
        group: "CHAINMAIL",
        price: "3/0/0",
        enc: 4,
        availability: "COMMON",
        penalty: [{
            STEALTH: "-10"
        }],
        locations: ["ARMS","BODY"],
        ap: 2,
        qualities: [],
        forbiddenWith: ["BOILED_LEATHER","PLATE"]
    },
    CHAINMAIL_COIF: {
        name: "Chainmail Coif",
        group: "CHAINMAIL",
        price: "1/0/0",
        enc: 2,
        availability: "SCARCE",
        penalty: [{
            PERCEPTION: "-10",
            STEALTH: "-10"
        }],
        locations: ["HEAD"],
        ap: 2,
        qualities: ["PARTIAL"],
        forbiddenWith: ["BOILED_LEATHER","PLATE"]
    },
    CHAINMAIL_SHIRT: {
        name: "Chainmail Shirt",
        group: "CHAINMAIL",
        price: "2/0/0",
        enc: 3,
        availability: "SCARCE",
        penalty: [{
            STEALTH: "-10"
        }],
        locations: ["BODY"],
        ap: 2,
        qualities: [],
        forbiddenWith: ["BOILED_LEATHER","PLATE"]
    },
    CHAINMAIL_COAT: {
        name: "Chainmail Coat",
        group: "CHAINMAIL",
        price: "3/0/0",
        enc: 4,
        availability: "COMMON",
        penalty: [{
            STEALTH: "-10"
        }],
        locations: ["ARMS","BODY"],
        ap: 2,
        qualities: [],
        forbiddenWith: ["BOILED_LEATHER","PLATE"]
    },
    BRIGANDINE_JACK: {
        name: "Brigandine Jack",
        group: "BRIGANDINE",
        price: "3/0/0",
        enc: 3,
        availability: "SCARCE",
        penalty: [],
        locations: ["ARMS","BODY"],
        ap: 2,
        qualities: ["OVERCOAT"],
        forbiddenWith: ["PLATE"]
    },
    BRIGANDINE_JERKIN: {
        name: "Brigandine Jerkin",
        group: "BRIGANDINE",
        price: "2/0/0",
        enc: 2,
        availability: "SCARCE",
        penalty: [],
        locations: ["BODY"],
        ap: 2,
        qualities: ["OVERCOAT"],
        forbiddenWith: ["PLATE"]
    },
    BREASTPLATE: {
        name: "Breastplate",
        group: "BREASTPLATE",
        price: "10/0/0",
        enc: 3,
        availability: "SCARCE",
        penalty: [],
        locations: ["BODY"],
        ap: 3,
        qualities: ["IMPENETRABLE","OVERCOAT","WEAKPOINTS"],
        forbiddenWith: ["PLATE"]
    },
    BRACERS: {
        name: "Bracers",
        group: "PLATE",
        price: "8/0/0",
        enc: 3,
        availability: "RARE",
        penalty: [],
        locations: ["ARMS"],
        ap: 3,
        qualities: ["IMPENETRABLE","REQUIRES_KIT","WEAKPOINTS"],
        forbiddenWith: ["BREASTPLATE","BOILED_LEATHER","CHAINMAIL","BRIGANDINE"]
    },
    OPEN_HELM: {
        name: "Open Helm",
        group: "PLATE",
        price: "2/0/0",
        enc: 1,
        availability: "COMMON",
        penalty: [{
            PERCEPTION: "-10"
        }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["PARTIAL"],
        forbiddenWith: ["BREASTPLATE","BOILED_LEATHER","CHAINMAIL","BRIGANDINE"]
    },
    PLATE_LEGGINGS: {
        name: "Plate Leggings",
        group: "PLATE",
        price: "10/0/0",
        enc: 3,
        availability: "RARE",
        penalty: [{
            STEALTH: "-10"
        }],
        locations: ["LEGS"],
        ap: 3,
        qualities: ["IMPENETRABLE","REQUIRES_KIT","WEAKPOINTS"],
        forbiddenWith: ["BREASTPLATE","BOILED_LEATHER","CHAINMAIL","BRIGANDINE"]
    },
    GREAT_HELM: {
        name: "Great Helm",
        group: "PLATE",
        price: "2/0/0",
        enc: 2,
        availability: "RARE",
        penalty: [{
            PERCEPTION: "-20"
        }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["IMPENETRABLE","WEAKPOINTS"],
        forbiddenWith: ["BREASTPLATE","BOILED_LEATHER","CHAINMAIL","BRIGANDINE"]
    },
    BASCINET: { //TODO types de casques ?
        name: "Bascinet",
        group: "PLATE",
        price: "3/0/0",
        enc: 2,
        availability: "RARE",
        penalty: [{
            PERCEPTION: "-20"
        }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["IMPENETRABLE","VISOR","WEAKPOINTS"],
        forbiddenWith: ["BREASTPLATE","BOILED_LEATHER","CHAINMAIL","BRIGANDINE"]
    },
    ARMET: {
        name: "Armet",
        group: "PLATE",
        price: "3/0/0",
        enc: 2,
        availability: "RARE",
        penalty: [{
            PERCEPTION: "-20"
        }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["IMPENETRABLE","VISOR","WEAKPOINTS"],
        forbiddenWith: ["BREASTPLATE","BOILED_LEATHER","CHAINMAIL","BRIGANDINE"]
    },
    SALLET: {
        name: "Sallet",
        group: "PLATE",
        price: "4/0/0",
        enc: 2,
        availability: "RARE",
        penalty: [{
            PERCEPTION: "-20"
        }],
        locations: ["HEAD"],
        ap: 3,
        qualities: ["IMPENETRABLE","VISOR","WEAKPOINTS"],
        forbiddenWith: ["BREASTPLATE","BOILED_LEATHER","CHAINMAIL","BRIGANDINE"]
    }
}