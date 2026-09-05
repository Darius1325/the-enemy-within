// $PluginCompiler TEW_Base.js

import { $dataActors } from "../../../rmmv/variables";
import { Career } from "../../_types/career";
import { ConditionId, Stat } from "../../_types/enum";
import { AnySlot, AnySlotKind, SpecialisationPick } from "../../_types/specialisation";
import TEW from "../../_types/tew";
import { Game_BattlerBase } from "./Game_BattlerBase";
export interface Game_Actor extends Game_BattlerBase {
    _anySlots: AnySlot[];
    param: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;
    paramPlus: (paramId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) => number;

    availableExp: () => number;
    spendExp: (amount: number) => void;
    statAdvances: (paramId: number) => number;
    compAdvances: (compId: string) => number;
    nextStatAdvanceCost: (paramId: number) => number;
    nextCompAdvanceCost: (compId: string) => number;
    applyStatAdvances: (paramId: number, advances: number) => void;
    applyCompAdvances: (compId: string, advances: number) => void;

    career: () => Career;
    careerName: () => string;
    improvableStats: () => number[];
    improvableComps: () => string[];
    careerTalents: () => string[];
    buyableTalents: () => string[];
    canImproveStat: (paramId: number) => boolean;
    canImproveComp: (compId: string) => boolean;
    canBuyTalent: (talentId: string) => boolean;
    canBuyMagicTalent: (talentId: string) => boolean;
    isMagicalCareer: () => boolean;
    canEnterCareer: (careerId: string) => boolean;

    anySlots: () => AnySlot[];
    openAnySlots: () => AnySlot[];
    anySlotIndex: (slot: AnySlot) => number;
    anySlotPick: (slot: AnySlot) => SpecialisationPick;
    anySlotGroup: (slot: AnySlot) => string;
    anySlotName: (slot: AnySlot) => string;
    anySlotPool: (slot: AnySlot) => string[];
    bindAnySlot: (slotIndex: number, specialisationId: string) => void;

    grantFreePettySpells: () => void;
    freePettySpells: () => number;
    spellPoolBonus: (pool: string) => number;
    spellPoolCost: (pool: string) => number;
    spellCost: (pool: string, known: number, free: number) => number;
    buyableSpells: () => string[];
    learnSpell: (spellId: string, free?: boolean) => void;
};

// $StartCompilation

// Game_Actor
Game_Actor.prototype.initialize = function(actorId : number)  {
    Game_Battler.prototype.initialize.call(this);
    this.setup(actorId);
    this.initTEW(actorId);
};

Game_Actor.prototype.setup = function(actorId) {
    var actor = $dataActors[actorId];
    this._actorId = actorId;
    this._name = actor.name;
    this._nickname = actor.nickname;
    this._career = undefined; // TODO add to actors JSON
    this._anySlots = []; // Picks the careers entered so far have granted
    this._exp = actor.exp || 0; // TODO ?
    // this._profile = actor.profile;
    // this._classId = actor.classId;
    // this._level = actor.initialLevel;
    this.initImages();
    // this.initExp();
    // this.initSkills();
    // this.initEquips(actor.equips);
    this.clearParamPlus();
    this.recoverAll();
};

Game_Actor.prototype.initMembers = function() { // TODO remove useless attributes
    Game_Battler.prototype.initMembers.call(this);
    this._actorId = 0;
    this._name = '';
    this._nickname = '';
    this._classId = 1; // TODO
    this._level = 0;
    this._characterName = '';
    this._characterIndex = 0;
    this._faceName = '';
    this._faceIndex = 0;
    this._battlerName = '';
    this._exp = 0;
    // this._skills = [];
    this._equips = []; // TODO remove
    this._actionInputIndex = 0;
    // this._lastMenuSkill = new Game_Item();
    // this._lastBattleSkill = new Game_Item();
    // this._lastCommandSymbol = '';
};

Game_Actor.prototype.paramBase = function(paramId: number) {
    return this._paramBase[paramId];
};

Game_Actor.prototype.paramPlus = function(paramId: number) {
    return Game_Battler.prototype.paramPlus.call(this, paramId);
};

// #region ============================== Levelling ============================== //
// Experience points still available to buy advances
Game_Actor.prototype.availableExp = function() {
    return this._exp;
};

// Consuming experience points. Callers are expected to check availableExp() beforehand
Game_Actor.prototype.spendExp = function(amount: number) {
    this._exp -= amount;
};

// Number of advances already bought for a characteristic (base values are not advances)
Game_Actor.prototype.statAdvances = function(paramId: number) {
    return this.paramPlus(paramId);
};

// Number of advances already bought for a competence (competences have no base value)
Game_Actor.prototype.compAdvances = function(compId: string) {
    return this.compPlus(compId);
};

// Experience cost of the next characteristic advance
Game_Actor.prototype.nextStatAdvanceCost = function(paramId: number) {
    return TEW.LEVELLING.characteristicCost(this.statAdvances(paramId));
};

// Experience cost of the next competence advance
Game_Actor.prototype.nextCompAdvanceCost = function(compId: string) {
    return TEW.LEVELLING.competenceCost(this.compAdvances(compId));
};

// Buying characteristic advances. Max wounds are derived from stats and must be recomputed
Game_Actor.prototype.applyStatAdvances = function(paramId: number, advances: number) {
    if (advances <= 0) {
        return;
    }
    this.addParam(paramId, advances);
    this._paramBase[0] = this.calculateMHP();
};

// Buying competence advances. Advanced competences must be learnt before they can be advanced
Game_Actor.prototype.applyCompAdvances = function(compId: string, advances: number) {
    if (advances <= 0) {
        return;
    }
    this.learnComp(compId);
    this.addComp(compId, advances);
};
// #endregion =========================== Levelling ============================== //

// #region ============================== Magic ============================== //
/**
 * Acquiring a talent.
 * The bare Arcane Magic talent stands for whichever Arcane Lore the actor's wind draws on, and
 * is transformed into it on purchase. Channelling follows along on its own, as its name is
 * derived from the talents held rather than stored.
 */
Game_Actor.prototype.addTalent = function(talentId: string) {
    const acquiredId = talentId === TEW.MAGIC.ARCANE_TALENT && this.arcaneTalent()
        ? this.arcaneTalent()
        : talentId;
    Game_Battler.prototype.addTalent.call(this, acquiredId);
    if (acquiredId === TEW.MAGIC.PETTY_TALENT) {
        this.grantFreePettySpells();
    }
};

/**
 * Petty Magic manifests a number of spells equal to the actor's Willpower bonus. Which ones is
 * the player's choice, so the allowance is stored and spent one spell at a time in levelling
 * mode rather than picked here.
 */
Game_Actor.prototype.grantFreePettySpells = function() {
    this._freePettySpells = this.freePettySpells() + this.paramBonus(Stat.WILL);
};

// Petty spells granted by Petty Magic and not picked yet
Game_Actor.prototype.freePettySpells = function() {
    return this._freePettySpells || 0;
};

// Characteristic bonus setting the width of a pool's cost bracket
Game_Actor.prototype.spellPoolBonus = function(pool: string) {
    return pool === TEW.MAGIC.PETTY_POOL
        ? this.paramBonus(Stat.WILL)
        : this.paramBonus(Stat.INTL);
};

// XP cost of one bracket of the pool
Game_Actor.prototype.spellPoolCost = function(pool: string) {
    return pool === TEW.MAGIC.PETTY_POOL
        ? TEW.LEVELLING.PETTY_SPELL_COST
        : TEW.LEVELLING.ARCANE_SPELL_COST;
};

/**
 * Cost of one more spell in a pool
 * @param pool the spell's cost pool
 * @param known number of spells already known in that pool
 * @param free petty spells still granted by Petty Magic, which cost nothing
 */
Game_Actor.prototype.spellCost = function(pool: string, known: number, free: number) {
    if (pool === TEW.MAGIC.PETTY_POOL && free > 0) {
        return 0;
    }
    return TEW.LEVELLING.spellCost(known, this.spellPoolBonus(pool), this.spellPoolCost(pool));
};

// IDs of the spells the actor's talents open and which are not memorised yet
Game_Actor.prototype.buyableSpells = function() {
    return TEW.DATABASE.SPELLS.IDS.filter(spellId =>
        !this.hasSpell(spellId) && this.canCastDomain(TEW.DATABASE.SPELLS.SET[spellId].domain));
};

/**
 * Memorising a spell, spending one of the free petty spells if the actor still holds any
 * @param spellId ID of the spell to memorise
 * @param free whether the spell is paid for by the Petty Magic allowance
 */
Game_Actor.prototype.learnSpell = function(spellId: string, free = false) {
    if (this.hasSpell(spellId)) {
        return;
    }
    this.addSpell(spellId);
    if (free && this.freePettySpells() > 0) {
        this._freePettySpells = this.freePettySpells() - 1;
    }
};
// #endregion =========================== Magic ============================== //

// #region ============================== Career ============================== //
// Career data of the actor. Every playable character is expected to have one
Game_Actor.prototype.career = function() {
    return TEW.DATABASE.CAREERS.SET[this._career];
};

Game_Actor.prototype.careerName = function() {
    return this.career().name;
};

/**
 * Rebuilding the lists of what the career allows to improve. They only change with the career,
 * and are cached rather than filtered on every draw.
 * Wildcard entries live in the career's own pick lists and are resolved by the slots instead;
 * the one exception left here is Arcane Magic, which is bought bare and transformed into the
 * wind's own talent on purchase.
 */
Game_Actor.prototype.refreshCareerCache = function() {
    const career = this.career();
    this._careerCacheId = this._career;
    this._improvableStats = career.improvableStats
        .map(stat => TEW.CHARACTERS.STATS[stat.toLowerCase()])
        .filter(paramId => paramId !== undefined);
    this._improvableComps = career.competences
        .filter(compId => !!TEW.DATABASE.COMPS.SET[compId]);
    this._careerTalents = career.talents
        .map(talentId => talentId === TEW.MAGIC.ARCANE_MAGIC_ANY ? TEW.MAGIC.ARCANE_TALENT : talentId)
        .filter(talentId => !!TEW.DATABASE.TALENTS.SET[talentId]);
};

// The cache is keyed on the career ID, so that assigning a career directly is enough to drop it
Game_Actor.prototype.checkCareerCache = function() {
    if (this._careerCacheId !== this._career) {
        this.refreshCareerCache();
    }
};

// Param IDs of the characteristics the career allows to improve
Game_Actor.prototype.improvableStats = function() {
    this.checkCareerCache();
    return this._improvableStats;
};

/**
 * IDs of the competences the career allows to improve, learnt or not
 * The specialisations bound to a grouped skill pick are improvable exactly like the concrete
 * entries of the career, and are folded in here rather than stored twice
 */
Game_Actor.prototype.improvableComps = function() {
    this.checkCareerCache();
    return this._improvableComps.concat(this.boundSpecialisations('comp'));
};

// IDs of every talent belonging to the career, acquired or not, bound picks included
Game_Actor.prototype.careerTalents = function() {
    this.checkCareerCache();
    return this._careerTalents.concat(this.boundSpecialisations('talent'));
};

// IDs of the career talents which have not been acquired yet
Game_Actor.prototype.buyableTalents = function() {
    return this.careerTalents().filter(talentId => !this.hasTalent(talentId));
};

Game_Actor.prototype.canImproveStat = function(paramId: number) {
    return this.improvableStats().includes(paramId);
};

Game_Actor.prototype.canImproveComp = function(compId: string) {
    return this.improvableComps().includes(compId);
};

Game_Actor.prototype.canBuyTalent = function(talentId: string) {
    return this.careerTalents().includes(talentId)
        && !this.hasTalent(talentId)
        && this.canBuyMagicTalent(talentId);
};

/**
 * Extra condition carried by the magical talents: they need a wind of magic on top of the
 * career granting them. Arcane Magic further needs that wind to draw on an Arcane Lore, which
 * rules out Dhar, and a career handing out one lore outright only serves the wind it belongs
 * to. The lesser lores are tied to no wind, and every other talent passes.
 */
Game_Actor.prototype.canBuyMagicTalent = function(talentId: string) {
    if (talentId === TEW.MAGIC.PETTY_TALENT) {
        return this.hasWind();
    }
    if (talentId === TEW.MAGIC.ARCANE_TALENT) {
        return this.hasWind() && !!this.arcaneTalent() && !this.hasTalent(this.arcaneTalent());
    }
    if (TEW.MAGIC.isWindArcaneTalent(talentId)) {
        return talentId === this.arcaneTalent();
    }
    return true;
};

// Whether the actor's career opens the way to magic
Game_Actor.prototype.isMagicalCareer = function() {
    return !!this.career() && this.career().isMagical;
};

// A character with no wind has no spark to train, and cannot start a magical career
Game_Actor.prototype.canEnterCareer = function(careerId: string) {
    const career = TEW.DATABASE.CAREERS.SET[careerId];
    return !!career && (!career.isMagical || this.hasWind());
};
// #endregion =========================== Career ============================== //

// #region ============================== Grouped skill picks ============================== //
/**
 * Picks the actor's careers have granted, filled or not.
 * Careers list some entries as `Skill (Any)`, which grant one specialisation of a group without
 * naming it. Each of those entries opens a slot the player fills once, and a career granting the
 * same group twice opens two.
 * Career change is not implemented yet, so the list is reconciled lazily against the current
 * career rather than written when the career is entered: slots already held are left alone, and
 * the missing ones are appended. That keeps working once career change starts adding to it.
 */
Game_Actor.prototype.anySlots = function() {
    this._anySlots = this._anySlots || [];
    const career = this.career();
    if (!career) {
        return this._anySlots;
    }
    this.reconcileAnySlots('comp', career.groupCompetences);
    this.reconcileAnySlots('talent', career.groupTalents);
    return this._anySlots;
};

/**
 * Appending the slots the current career grants and which are missing from the list
 * @param kind whether the entries are competences or talents
 * @param wildcards the career's wildcard entries, repeats meaning several picks
 */
Game_Actor.prototype.reconcileAnySlots = function(kind: AnySlotKind, wildcards: string[]) {
    const held: Record<string, number> = {};
    this._anySlots
        .filter((slot: AnySlot) => slot.kind === kind && slot.career === this._career)
        .forEach((slot: AnySlot) => {
            held[slot.wildcard] = (held[slot.wildcard] || 0) + 1;
        });
    wildcards.forEach(wildcard => {
        if (held[wildcard] > 0) {
            held[wildcard] -= 1;
            return;
        }
        this._anySlots.push({
            kind: kind,
            career: this._career,
            wildcard: wildcard,
            chosen: null
        });
    });
};

// Slots which have not been filled yet, the only ones a picker has anything to offer for
Game_Actor.prototype.openAnySlots = function() {
    return this.anySlots().filter((slot: AnySlot) => !slot.chosen);
};

// Index of a slot in the actor's list, which is how the levelling session refers to it
Game_Actor.prototype.anySlotIndex = function(slot: AnySlot) {
    return this.anySlots().indexOf(slot);
};

// IDs of the specialisations already bound by a pick of the given kind
Game_Actor.prototype.boundSpecialisations = function(kind: AnySlotKind) {
    return this.anySlots()
        .filter((slot: AnySlot) => slot.kind === kind && !!slot.chosen)
        .map((slot: AnySlot) => slot.chosen);
};

// Database the slot's specialisations are drawn from
Game_Actor.prototype.anySlotDatabase = function(slot: AnySlot) {
    return slot.kind === 'comp' ? TEW.DATABASE.COMPS : TEW.DATABASE.TALENTS;
};

// The wildcard entry the slot came from, which carries its pool and its name
Game_Actor.prototype.anySlotPick = function(slot: AnySlot) {
    return this.anySlotDatabase(slot).PICKS[slot.wildcard];
};

// ID of the group a slot picks from, even when it only offers part of that group
Game_Actor.prototype.anySlotGroup = function(slot: AnySlot) {
    const pick = this.anySlotPick(slot);
    return pick ? pick.group : undefined;
};

/**
 * Name the slot goes by while it is unfilled.
 * A pick offering a whole group is named after it — "Melee (Any)" — while the narrower ones
 * carry a name of their own, such as "Stealth (Rural or Urban)".
 */
Game_Actor.prototype.anySlotName = function(slot: AnySlot) {
    const pick = this.anySlotPick(slot);
    if (!pick) {
        return slot.wildcard;
    }
    if (pick.name) {
        return pick.name;
    }
    const group = this.anySlotDatabase(slot).GROUPS[pick.group];
    return `${group.name} (${TextManager.statusAnySpecialisation})`;
};

/**
 * Specialisations a slot may be filled with.
 * The pick's pool is offered whole, minus the specialisations the same career already grants
 * outright — spending a pick on one of those would buy nothing — and minus those another slot
 * has already bound, as two picks of one group are two different specialisations.
 * Specialisations the actor already has advances in are deliberately left in: a character may
 * well want their career to further a skill their species or background gave them.
 */
Game_Actor.prototype.anySlotPool = function(slot: AnySlot) {
    const pick = this.anySlotPick(slot);
    if (!pick) {
        return [];
    }
    const career = TEW.DATABASE.CAREERS.SET[slot.career];
    const granted = career
        ? (slot.kind === 'comp' ? career.competences : career.talents)
        : [];
    const bound = this.boundSpecialisations(slot.kind);
    return pick.members.filter((memberId: string) =>
        granted.indexOf(memberId) < 0
        && bound.indexOf(memberId) < 0
        // A talent cannot be bought twice yet, so binding one already held would waste the pick
        && !(slot.kind === 'talent' && this.hasTalent(memberId)));
};

/**
 * Filling a slot, which the rules make permanent: the choice belongs to the career level, and
 * there is no way back from it
 * @param slotIndex index of the slot in the actor's list
 * @param specialisationId ID of the chosen specialisation
 */
Game_Actor.prototype.bindAnySlot = function(slotIndex: number, specialisationId: string) {
    const slot = this.anySlots()[slotIndex];
    if (!slot || slot.chosen) {
        return;
    }
    slot.chosen = specialisationId;
};
// #endregion =========================== Grouped skill picks ============================== //

Game_Actor.prototype.initTEW = function(actorId : number) {
    switch (actorId) {
        case 1: // Cecile
            this.initCecile();
            break;
        case 2: // Cheplu
            this.initCheplu();
            break;
        case 3: // Ciara
            this.initCiara();
            break;
        default:
            break;
    }
    this.recoverAll(); // Set max wounds to MAX (HP)
}

// #region ============================== Init TEW ============================== //
// Initialization function for Cecile
Game_Actor.prototype.initCecile = function() {
    // Set base parameters for Cecile
    this._paramBase = [
        0, // MHP (13)
        37, // WEAS
        28, // BALS
        35, // STRG
        37, // TOUG
        27, // INIT
        22, // AGIL
        33, // DEXT
        29, // INTL
        40, // WILL
        28  // FELW
    ];
    // this._paramBase = [
    //     0, // MHP (13)
    //     110, // WEAS
    //     110, // BALS
    //     110, // STRG
    //     110, // TOUG
    //     130, // INIT
    //     110, // AGIL
    //     110, // DEXT
    //     110, // INTL
    //     110, // WILL
    //     110  // FELW
    // ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 3;
    this._fortune = 3;
    this._resilience = 3;
    this._resolve = 3;

    // Career
    this._career = 'DUELLIST_2';

    // competences
    this.addComp('CHARM', 3);
    this.addComp('LEADERSHIP', 3);
    this.addComp('LORE_REIKLAND', 3);
    this.addComp('LANGUAGE_BRETONNIAN', 5);
    this.addComp('GOSSIP', 5);
    this.addComp('MELEE_BASIC', 5);
    this.addComp('ATHLETICS', 5);
    this.addComp('DODGE', 5);
    this.addComp('ENDURANCE', 5);
    this.addComp('HEAL', 5);
    this.addComp('INTUITION', 5);
    this.addComp('LANGUAGE_CLASSICAL', 5);
    this.addComp('MELEE_FENCING', 5);
    this.addComp('PERCEPTION', 5);

    // talents
    this.addTalent('SAVVY');
    this.addTalent('PURE_SOUL');
    this.addTalent('COOL_HEADED');
    this.addTalent('WARRIOR_BORN');
    this.addTalent('FEINT');
    // test
    this.addTalent('DUAL_WIELDER');
    

    // spells

    // items
    this.addItem('BANDAGE', 5);
    this.addItem('CLOTHING', 1);
    this.addItem('TWEEZERS', 1);
    this.addItem('EAR_PICK', 1);
    this.addItem('COMB', 1);

    // weapons
    this.addWeapon("GARROTE");
    this.addWeapon("DAGGER");
    this.addWeapon("RAPIER");
    this.addWeapon("SLING");
    this.addWeapon("SHIELD");
    this.addWeapon("CROSSBOW");
    this.equipMainHand(0);

    // armors
    this.addArmor("LEATHER_JACK");
    this.addArmor("LEATHER_LEGGINGS");

    // ammo
    this.addAmmo("PEBBLE", 20);
    this.addAmmo('BOLT', 20);

    // conditions
    this.addCondition("ABLAZE", 3);

    // XP
    this._exp = 500;
}

// Initialization function for Cheplu
Game_Actor.prototype.initCheplu = function() {
    // Set base parameters for Cheplu
    this._paramBase = [
        0, // MHP (12)
        26, // WEAS
        37, // BALS
        28, // STRG
        31, // TOUG
        36, // INIT // 36
        32, // AGIL
        43, // DEXT
        41, // INTL
        42, // WILL
        36  // FELW
    ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 3;
    this._fortune = 3;
    this._resilience = 3;
    this._resolve = 3;

    // Career
    this._career = 'HERBALIST_1';

    // competences
    this.addComp('CHARM', 3);
    this.addComp('LEADERSHIP', 3);
    this.addComp('LORE_REIKLAND', 3);
    this.addComp('GOSSIP', 5);
    this.addComp('MELEE_BASIC', 5);
    this.addComp('RANGED_BOW', 5);
    this.addComp('CHARM_ANIMAL', 5);
    this.addComp('CLIMB', 5);
    this.addComp('ENDURANCE', 5);
    this.addComp('LORE_HERBS', 5);
    this.addComp('OUTDOOR_SURVIVAL', 5);
    this.addComp('PERCEPTION', 5);
    this.addComp('SWIM', 5);
    this.addComp('TRADE_HERBALIST', 5);

    // talents
    this.addTalent('SAVVY');
    this.addTalent('ACUTE_SENSE_TASTE');
    this.addTalent('ACUTE_SENSE_SMELL');
    this.addTalent('NIMBLE_FINGERED');
    this.addTalent('COOL_HEADED');    

    // spells

    // items
    this.addItem('CLOTHING', 1);
    this.addItem('BOOTS', 1);
    //TODO Herbs

    // weapons
    this.addWeapon("CLOAK");
    this.addWeapon("DAGGER");
    this.equipMainHand(1);

    // armors

    // ammo

    // conditions
    this.addCondition(ConditionId.FATIGUED);

    // XP
    this._exp = 500;
}

// Initialization function for Ciara
Game_Actor.prototype.initCiara = function() {
    // Set base parameters for Ciara
    this._paramBase = [
        0, // MHP (14)
        38, // WEAS
        33, // BALS
        33, // STRG
        40, // TOUG
        34, // INIT // 34
        39, // AGIL
        34, // DEXT
        42, // INTL
        37, // WILL
        42  // FELW
    ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 4;
    this._fortune = 4;
    this._resilience = 2;
    this._resolve = 2;

    // Career
    this._career = 'WIZARD_1';

    // Wind of magic, which decides the lore she may study and names her Channelling skill
    this.setWind('AQSHY');

    // competences
    this.addComp('LANGUAGE_BRETONNIAN', 3);
    this.addComp('LANGUAGE_WASTELANDER', 3);
    this.addComp('GOSSIP', 3);
    this.addComp('CHARM', 5);
    this.addComp('COOL', 5);
    this.addComp('MELEE_BASIC', 10);
    this.addComp('CHANNELLING', 5);
    this.addComp('DODGE', 5);
    this.addComp('INTUITION', 5);
    this.addComp('CASTING_MAGICK', 5);
    this.addComp('LORE_MAGIC', 5);
    this.addComp('MELEE_POLE_ARM', 5);
    this.addComp('PERCEPTION', 5);

    // talents
    this.addTalent('SAVVY');
    this.addTalent('SUAVE');
    this.addTalent('NIGHT_VISION');
    this.addTalent('WARRIOR_BORN');
    this.addTalent('PETTY_MAGIC');    

    // spells
    // The first three stand for the ones Petty Magic manifested, and spend that allowance
    this.learnSpell("WARNING", true);
    this.learnSpell("PURIFY_WATER", true);
    this.learnSpell("DART", true);

    // items
    this.addItem('CLOTHING', 1);
    this.addItem('WRITING_KIT', 1);
    this.addItem('PARCHMENT', 5);
    this.addItem('MAGIC_GRIMOIRE', 1);

    // weapons
    this.addWeapon("DAGGER");
    this.addWeapon("QUARTERSTAFF");
    this.equipMainHand(1);

    // armors

    // ammo

    // XP
    this._exp = 500;
}

// Initialization function for Galaandril
Game_Actor.prototype.initGalaandril = function() {
    // Set base parameters for Galaandril
    this._paramBase = [
        0, // MHP (13)
        35, // WEAS
        47, // BALS
        31, // STRG
        36, // TOUG
        46, // INIT
        42, // AGIL
        42, // DEXT
        32, // INTL
        42, // WILL
        24  // FELW
    ];
    this._paramBase[0] = this.calculateMHP();

    // Fate / Resilience
    this._fate = 2;
    this._fortune = 2;
    this._resilience = 0;
    this._resolve = 0;

    // competences
    this.addComp('SWIM', 3);
    this.addComp('PLAY_FLUTE', 3);
    this.addComp('COOL', 8);
    this.addComp('LANGUAGE_ELTHARIN', 5);
    this.addComp('MELEE_BASIC', 5);
    this.addComp('EVALUATE', 5);
    this.addComp('CHARM', 5);
    this.addComp('CLIMB', 5);
    this.addComp('GOSSIP', 5);
    this.addComp('INTUITION', 5);
    this.addComp('PERCEPTION', 5);
    this.addComp('STEALTH_URBAN', 5);
    this.addComp('TRACK', 5);

    // talents
    this.addTalent('ACUTE_SENSE_SIGHT');
    this.addTalent('COOL_HEADED');
    this.addTalent('NIGHT_VISION');
    this.addTalent('SIXTH_SENSE');
    this.addTalent('READ_WRITE');    
    this.addTalent('BENEATH_NOTICE'); 

    // spells

    // items
    this.addItem('CLOTHING', 1);
    this.addItem('HAT', 1);
    this.addItem('LANTERN', 1);
    this.addItem('LAMP_OIL', 1);
    this.addItem('WRITING_KIT', 1);

    // weapons
    this.addWeapon("CLOAK");
    this.addWeapon("DAGGER");
    this.equipMainHand(1);

    // armors

    // ammo
}
// #endregion =========================== Init TEW ============================== //
