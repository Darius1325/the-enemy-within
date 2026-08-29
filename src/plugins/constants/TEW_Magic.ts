// $PluginCompiler TEW_Constants.js 1

// ----------------------

// File: TEW_Magic.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 29/08/2026
// Description: This file contains the constants tying the winds of magic together. A wind decides which Arcane Magic talent a character may take, how their Channelling skill is named, and which lore spells they may learn. Petty and generic arcane spells are open to every caster holding the matching talent and belong to no wind, which is why they are listed apart. Hedgecraft and Witchery are lesser lores granted by specific careers rather than by a wind, so they have no entry here.

// ----------------------
// Imports
// ----------------------

import { SpellDomain, Wind, WindName } from "../_types/enum";
import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

TEW.MAGIC = TEW.MAGIC || {};

// #region ====== WINDS === //
// Every wind a character may be tied to, NONE excluded
TEW.MAGIC.WIND_IDS = [
    'AQSHY',
    'AZYR',
    'CHAMON',
    'DHAR',
    'GHUR',
    'GHYRAN',
    'HYSH',
    'SHYISH',
    'ULGU'
] as WindName[];

// Display name of a wind, used to name the Channelling competence
TEW.MAGIC.WIND_NAMES = {
    NONE: Wind.NONE,
    AQSHY: Wind.AQSHY,
    AZYR: Wind.AZYR,
    CHAMON: Wind.CHAMON,
    DHAR: Wind.DHAR,
    GHUR: Wind.GHUR,
    GHYRAN: Wind.GHYRAN,
    HYSH: Wind.HYSH,
    SHYISH: Wind.SHYISH,
    ULGU: Wind.ULGU
} as Record<string, Wind>;
// #endregion === WINDS === //
// === //
// #region ====== TALENTS AND COMPETENCES === //
// Talent opening petty magic, which no wind is needed to cast but a wind is needed to hold
TEW.MAGIC.PETTY_TALENT = 'PETTY_MAGIC';

// Talent bought to gain arcane magic, transformed into the wind's own talent once acquired
TEW.MAGIC.ARCANE_TALENT = 'ARCANE_MAGIC';

/**
 * Arcane Magic talent granted by each wind
 * Dhar is dark magic rather than one of the eight Arcane Lores and grants none, so a character
 * tied to it cannot buy the Arcane Magic talent
 */
TEW.MAGIC.ARCANE_TALENTS = {
    AQSHY: 'ARCANE_MAGIC_AQSHY',
    AZYR: 'ARCANE_MAGIC_AZYR',
    CHAMON: 'ARCANE_MAGIC_CHAMON',
    GHUR: 'ARCANE_MAGIC_GHUR',
    GHYRAN: 'ARCANE_MAGIC_GHYRAN',
    HYSH: 'ARCANE_MAGIC_HYSH',
    SHYISH: 'ARCANE_MAGIC_SHYISH',
    ULGU: 'ARCANE_MAGIC_ULGU'
} as Record<string, string>;

/**
 * Lesser lores, which no wind grants and which specific careers hand out instead
 * They open the generic arcane spells like the eight Arcane Lores do, but have no lore spells
 * of their own and never specialise Channelling
 */
TEW.MAGIC.LESSER_ARCANE_TALENTS = [
    'ARCANE_MAGIC_HEDGECRAFT',
    'ARCANE_MAGIC_WITCHERY'
];

// Whether a talent is one of the eight Arcane Lores keyed on a wind
TEW.MAGIC.isWindArcaneTalent = function(talentId: string) {
    return TEW.MAGIC.WIND_IDS.some(windId => TEW.MAGIC.ARCANE_TALENTS[windId] === talentId);
};

// Channelling is a single ungrouped competence, renamed after the caster's wind once attuned
TEW.MAGIC.CHANNELLING_COMP = 'CHANNELLING';

// Competence marking a career as magical
TEW.MAGIC.MAGICK_COMP = 'LANGUAGE_MAGICK';

// Career entries picking a specialisation, resolved to the entries above rather than to a group
TEW.MAGIC.CHANNELLING_ANY = 'CHANNELLING_ANY';
TEW.MAGIC.ARCANE_MAGIC_ANY = 'ARCANE_MAGIC_ANY';
// #endregion === TALENTS AND COMPETENCES === //
// === //
// #region ====== SPELL DOMAINS === //
// Lore spells each wind gives access to
TEW.MAGIC.WIND_DOMAINS = {
    AQSHY: SpellDomain.AQSHY,
    AZYR: SpellDomain.AZYR,
    CHAMON: SpellDomain.CHAMON,
    DHAR: SpellDomain.DHAR,
    GHUR: SpellDomain.GHUR,
    GHYRAN: SpellDomain.GHYRAN,
    HYSH: SpellDomain.HYSH,
    SHYISH: SpellDomain.SHYISH,
    ULGU: SpellDomain.ULGU
} as Record<string, SpellDomain>;

/**
 * Pool a spell domain is priced in
 * The Arcane Magic talent covers the generic arcane spells and the caster's lore at once, so
 * both count towards the same cost bracket. Petty magic keeps its own.
 */
TEW.MAGIC.PETTY_POOL = 'PETTY';
TEW.MAGIC.ARCANE_POOL = 'ARCANE';

TEW.MAGIC.spellPool = function(domain: SpellDomain) {
    return domain === SpellDomain.PETTY ? TEW.MAGIC.PETTY_POOL : TEW.MAGIC.ARCANE_POOL;
};
// #endregion === SPELL DOMAINS === //
