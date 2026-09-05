// $PluginCompiler TEW_Base.js 1

import TEW from "../../_types/tew";

// $StartCompilation

TEW.CHARACTERS.SET = {
    Cecile: 1,
    Cheplu: 2,
    Ciara: 3,
    Elja: 4,
    Galaandril: 5,
    Wanda: 6
};
TEW.CHARACTERS.ARRAY = [
    'Cécile',
    'Cheplu',
    'Ciara',
    'Elja',
    'Galaandril',
    'Wanda'
];

TEW.CHARACTERS.STATS = {
    mhp: 0,
    weas: 1,
    bals: 2,
    strg: 3,
    toug: 4,
    init: 5,
    agil: 6,
    dext: 7,
    intl: 8,
    will: 9,
    felw: 10
};
TEW.CHARACTERS.STATS_VERBOSE = [
    'Max Wounds',
    'Weapon skill',
    'Ballistic skill',
    'Strength',
    'Toughness',
    'Initiative',
    'Agility',
    'Dexterity',
    'Intelligence',
    'Willpower',
    'Fellowship'
];

/**
 * Competence values a new character starts with
 * Base skills start at 0 advances, advanced ones are simply absent until they are learnt
 */
TEW.CHARACTERS.BASE_COMP_VALUES = TEW.DATABASE.COMPS.IDS.reduce((acc: Record<string, number>, compId) => {
    if (TEW.DATABASE.COMPS.SET[compId].isBase) {
        acc[compId] = 0;
    }
    return acc;
}, {});
