// $PluginCompiler TEW_Base.js 1

import TEW from "../../types/TEW";

// $StartCompilation

TEW.DATABASE.CHARACTERS.SET = {
    Cecile: 1,
    Cheplu: 2,
    Ciara: 3,
    Elja: 4,
    Gala: 5,
    Wanda: 6
};

TEW.DATABASE.CHARACTERS.STATS = {
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
TEW.DATABASE.CHARACTERS.STATS_VERBOSE = [
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

// 0 for base skills, -1 for acquired
TEW.DATABASE.CHARACTERS.BASE_COMP_VALUES = TEW.DATABASE.COMPS.IDS.reduce((acc: number[], compId) => {
    acc.push(TEW.DATABASE.COMPS.SET[compId].isBase ? 0 : -1);
    return acc;
}, []);
