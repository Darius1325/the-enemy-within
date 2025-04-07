// $PluginCompiler TEW_Base.js 1
// $StartCompilation
TEW.CHARACTERS = TEW.CHARACTERS || {
    Cecile: 1,
    Cheplu: 2,
    Ciara: 3,
    Elja: 4,
    Gala: 5,
    Wanda: 6
};
TEW.STATS = TEW.STATS || {
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
TEW.STATS_VERBOSE = [
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
TEW.BASE_COMP_VALUES = TEW.COMPS_ARRAY.reduce((acc, compName) => {
    acc.push(TEW.COMPS[compName].isBase ? 0 : -1);
    return acc;
}, []);
