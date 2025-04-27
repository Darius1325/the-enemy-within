// $PluginCompiler TEW_Constants.js

import { SpellDomain, SpellDuration, SpellRange, SpellTarget, SpellTargetRadius, SpellType } from "../types/enum";
import TEW from "../types/tew";

// $StartCompilation
TEW.DATABASE.SPELLS = {};
// #region ====== SPELLS SET === //
TEW.DATABASE.SPELLS.SET = {
    AETHYRIC_ARMOUR: {
        name: "Aethyric Armour",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 2,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You gain +1 Armour Point to all Hit Locations as you wrap yourself in a protective swathe of magic."
    },
    AETHYRIC_ARMS: {
        name: "Aethyric Arms",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 2,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You create a melee weapon with a Damage equal to your WILLpower Bonus. This may take any form, and so use any Melee Skill you may possess. The weapon counts as Magical."
    },
    ARROW_SHIELD: {
        name: "Arrow Shield",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 3,
        range: {
            type: SpellRange.SELF
        },
        target: {
            type: SpellTarget.AOE,
            distance: SpellTargetRadius.WILL_BONUS
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "Any missiles containing organic matter, such as arrows with wooden shafts, are automatically destroyed if they pass within the Area of Effect, causing no damage to their target. Missiles comprising only inorganic matter, such as throwing knives or pistol shots, are unaffected."
    },
    BLAST: {
        name: "Blast",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 4,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.AOE,
            distance: SpellTargetRadius.WILL_BONUS
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You channel magic into an explosive blast. This is a magic missile with Damage +3 that targets everyone in the Area of Effect."
    },
    BOLT: {
        name: "Bolt",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 4,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You channel magic into a damaging bolt. Bolt is a magic missile with a Damage of +4."
    },
    BREATH: {
        name: "Breath",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 4,
        range: {
            type: SpellRange.ONE
        },
        target: {
            type: SpellTarget.SPECIAL
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You immediately make a Breath attack, as if you had spent 2 Advantage to activate the Breath Creature Trait. Breath is a magic missile with a Damage equal to your Toughness Bonus. The GM decides which type of Breath attack best suits your Arcane Magic Talent."
    },
    CHAIN_ATTACK: {
        name: "Chain Attack",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 6,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.SPECIAL
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You channel a twisting spur of rupturing magic into your target. This is a magic missile with a Damage of +4. If Chain Attack reduces a target to 0 Wounds, it leaps to another target within the spell's initial range, and within WILLpower Bonus yards of the previous target, inflicting the same Damage again. It may leap a maximum number of times equal to your WILLpower Bonus. For every +2 SL achieved, it may chain to an additional target."
    },
    CORROSIVE_BLOOD: {
        name: "Bolt",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 4,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You infuse yourself with magic, lending your blood a fearsome potency. You gain the Corrosive Blood Creature Trait."
    },
    DARK_VISION: {
        name: "Dark Vision",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 4,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You boost your Second Sight to assist your mundane senses. While the spell is active, gain the Dark Vision Creature Trait."
    },
    DISTRACTING: {
        name: "Distracting",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 4,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You wreathe yourself in magic, which swirls around you, distracting your foes. While the spell is active, gain the Distracting Creature Trait."
    },
    DOME: {
        name: "Dome",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 7,
        range: {
            type: SpellRange.SELF
        },
        target: {
            type: SpellTarget.AOE,
            distance: SpellTargetRadius.WILL_BONUS
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You create a dome of magical energy overhead, blocking incoming attacks. Anyone within the Area of Effect gains the Ward (6+) Creature Trait against magical or ranged attacks originating outside the dome. Those within may attack out of the dome as normal, and the dome does not impede movement."
    },
    DROP: {
        name: "Drop",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 1,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You channel magic into an object being held by an opponent. This could be a weapon, a rope, or someone's hand. Unless a Challenging (+0) Dexterity Test is passed, the item is dropped. For every +2 SL you may impose an additional -10 on the Dexterity Test."
    },
    ENTANGLE: {
        name: "Entangle",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 3,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.SPECIAL
        },
        desc: "Using magic, you entrap your target, wrapping them in whatever suits your Lore: vines, shadows, their own clothing… Your target gains one Entangled Condition with a Strength equal to your Intelligence. For every +2 SL, you may give the target +1 additional Entangled Condition. The spell lasts until all Entangled Conditions are removed."
    },
    FEARWOME: {
        name: "Fearsome",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 3,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "Shrouding yourself in magic, you become fearsome and intimidating. Gain Fear 1. For every +3 SL, you may increase your Fear value by one."
    },
    MAGIC_SHIELD: {
        name: "Magic Shield",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 4,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You encase yourself in bands of protective magic. While the spell is active, add +Willpower Bonus SL to any dispel attempts you make."
    },
    MUNDANE_AURA: {
        name: "Mundane Aura",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 4,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL,
            multiplier: 10
        },
        desc: "You drain all the Winds of Magic from within your body and your possessions, removing any magical aura. For the duration of the spell you appear mundane to the Magical Sense Talent and similar. You effectively have no magical ability and your magical nature cannot be detected by any means. While this spell is in effect, you cannot cast any other spells. Mundane Aura is immediately dispelled if you make a Channelling Test."
    },
    PUSH: {
        name: "Push",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 6,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "All living creatures within Willpower Bonus yards are pushed back your Willpower Bonus in yards and gain the Prone Condition. If this brings them into contact with a wall or other large obstacle, they take Damage equal to the distance travelled in yards. For every +2 SL, you may push creatures back another Willpower Bonus in yards."
    },
    TELEPORT: {
        name: "Teleport",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 5,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "Using magic, you can teleport up to your Willpower Bonus in yards. This movement allows you to traverse gaps, avoid perils and pitfalls, and ignore obstacles. For every +2 SL you may increase the distance travelled by your Willpower Bonus in yards."
    },
    TERRIFYING: {
        name: "Terrifying",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 7,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You gain the Terror (1) Creature Trait."
    },
    WARD: {
        name: "Ward",
        type: SpellType.SPELL,
        domain: SpellDomain.ARCANE,
        cn: 5,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You wrap yourself in protective magic, gaining the Ward (9+) Creature Trait."
    },
    ANIMAL_FRIEND: {
        name: "Animal Friend",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.ONE
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.NUMBER,
            duration: 600
        },
        desc: "You make friends with a creature that is smaller than you and possesses the Bestial Creature Trait. The animal trusts you completely and regards you as a friend."
    },
    BEARINGS: {
        name: "Bearings",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You sense the influx of the Winds of Magic from their source. You know which direction North is."
    },
    DAZZLE: {
        name: "Dazzle",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.TOUCH
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "The target gains 1 Blinded Condition, and gains 1 Blinded Condition at the start of each round for the duration of the spell."
    },
    CAREFUL_STEP: {
        name: "Careful Step",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellRange.WILL,
            multiplier: 10
        },
        desc: "The magic flowing through your feet ensures any organic matter you tread upon remains undamaged: twigs do not break, grass springs back to its original position, and even delicate flowers are unharmed. Those seeking to use the Track skill to pursue you through rural terrain suffer a -30 penalty to their Tests."
    },
    DART: {
        name: "Dart",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You cause a small dart of magical energy to fly from your fingers. This is a magic missile with a Damage of +0."
    },
    DRAIN: {
        name: "Dart",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.TOUCH
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You touch your targets, draining their life. This counts as a magic missile with Damage +0 that ignores Armour Points. You then Heal 1 Wound."
    },
    EAVESDROP: {
        name: "Eavesdrop",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.INIT_BONUS,
            multiplier: 10
        },
        desc: "You can hear what your targets say as if you were standing right next to them."
    },
    GUST: {
        name: "Gust",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.SPECIAL
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You create a brief gust of wind, strong enough to blow out a candle, cause an open door to slam, or blow a few pages to the floor."
    },
    LIGHT: {
        name: "Light",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellRange.WILL,
            multiplier: 10
        },
        desc: "You create a small light, roughly equivalent to a torch, which glows from your hand, staff or some other part of your person. While the spell is active, you may choose to increase the illumination to that of a lantern, or decrease it to that of a candle, if you pass a Average (+20) Channelling Test."
    },
    MAGIC_FLAME: {
        name: "Magic Flame",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You kindle a small flame that flickers to life in the palm of your hand. It will not burn you, but will emit heat and set flammable objects alight, like a natural flame."
    },
    MARSH_LIGHTS: {
        name: "Marsh Lights",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.SPECIAL
        },
        duration: {
            type: SpellRange.WILL,
            multiplier: 10
        },
        desc: "You cast your voice at a point within Willpower yards, regardless of line of sight. Your voice sounds from this point, and all within earshot will hear it."
    },
    OPEN_LOCK: {
        name: "Open Lock",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.TOUCH
        },
        target: {
            type: SpellTarget.SPECIAL
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "One non-magical lock you touch opens."
    },
    PURIFY_WATER: {
        name: "Purify Water",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.ONE
        },
        target: {
            type: SpellTarget.SPECIAL
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You purify all water within a receptacle, such as a water flask, stein, or jug. All non-magical impurities, such as poison or contaminants are removed, leaving crisp, clear, potable water. If the vessel contained another liquid that is predominantly water - such as ale, or wine - this is also purified, turning into delicious, pure, non-alcoholic water."
    },
    SLEEP: {
        name: "Sleep",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.TOUCH
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You touch your opponent, sending them into a deep sleep. If the target has the Prone Condition, they gain the Unconscious Condition as they fall asleep. They remain unconscious for the duration, although loud noises or being moved or jostled will awaken them instantly. If your targets are standing or sitting when affected, they start themselves awake as they hit the ground, gaining the Prone Condition, but remaining conscious. If your targets are not resisting, and are suitably tired, they will, at the spell's end, pass into a deep and restful sleep."
    },
    SHOCK: {
        name: "Shock",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.TOUCH
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "Your target receives 1 Stunned Condition."
    },
    SOUNDS: {
        name: "Sounds",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.SPECIAL
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You create small noises nearby. You can create quiet, indistinct noises that sound as if they come from a specific location within range, regardless of line of sight. The noises can evoke something specific, such as footsteps, whispers or the howl of an animal, but nothing so distinct that it might convey a message. While the spell is active, you may control the sounds by passing a Average (+20) Channelling Test. A success allows you to move the sounds to another point within range, or to increase or decrease their volume."
    },
    WARNING: {
        name: "Warning",
        type: SpellType.SPELL,
        domain: SpellDomain.PETTY,
        cn: 0,
        range: {
            type: SpellRange.ONE
        },
        target: {
            type: SpellTarget.SPECIAL
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "You channel magic into an object, noticing immediately if it has been poisoned or trapped."
    },
    AQSHYS_AEGIS: {
        name: "Aqshy's Aegis",
        type: SpellType.SPELL,
        domain: SpellDomain.FIRE,
        cn: 5,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You wrap yourself in a fiery cloak of Aqshy , which channels flame into the Aegis. You are completely immune to damage from non-magical fire, including the breath attacks of monsters, and ignore any Ablaze Conditions you receive. You receive the Ward (9+) Creature Trait against magical fire attacks including spells from the Lore of Fire."
    },
    CAUTERISE: {
        name: "Cauterise",
        type: SpellType.SPELL,
        domain: SpellDomain.FIRE,
        cn: 4,
        range: {
            type: SpellRange.TOUCH
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.INSTANT
        },
        desc: "Channelling Aqshy through your hands you lay them on an ally's wounds. Immediately heal 1d10 Wounds and remove all Bleeding Conditions. Further, the wounds will not become infected. Targets without the Arcane Magic (Fire) Talent, must pass a Challenging (+0) Cool Test or scream in agony.. If Failed by -6 or more SL, the target gains the Unconscious Condition and is permanently scarred, waking up 1d10 hours later"
    },
    CROWN_OF_FLAME: {
        name: "Crown of Flame",
        type: SpellType.SPELL,
        domain: SpellDomain.FIRE,
        cn: 8,
        target: {
            type: SpellTarget.SELF
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You channel Aqshy into a majestic crown of inspiring fire about your brow. Gain the Fear (1) Trait and +1 War Leader Talent while the spell is active. For every +2 SL, you may increase your Fear value by +1, or take War Leader Talent again. Furthermore, gain a bonus of +10 on all attempts to Channel and Cast with Aqshy while the spell is in effect."
    },
    FLAMING_HEARTS: {
        name: "Flaming Hearts",
        type: SpellType.SPELL,
        domain: SpellDomain.FIRE,
        cn: 8,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.AOE,
            distance: SpellTargetRadius.WILL_BONUS
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "Your voice takes on a rich resonance, echoing with Aqshy's fiery passion. Affected allies lose all Broken and Fatigued Conditions, and gain +1 Drilled, Fearless and Stout-hearted Talent while the spell is in effect."
    },
    FIREWALL: {
        name: "Firewall",
        type: SpellType.SPELL,
        domain: SpellDomain.FIRE,
        cn: 6,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.AOE,
            distance: SpellTargetRadius.SPECIAL
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You channel a fiery streak of Aqshy , creating a wall of flame. The Firewall is Willpower Bonus yards wide, and 1 yard deep. For every +2 SL you may extend the length of the Firewall by +Willpower Bonus yards. Anyone crossing the firewall gains 1 Ablaze condition and suffers a hit with a Damage equal to your Willpower Bonus, handled like a magical missile."
    },
    GREAT_FIRES_OF_UZHUL: {
        name: "Great Fires of U'Zhul",
        type: SpellType.SPELL,
        domain: SpellDomain.FIRE,
        cn: 10,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.AOE,
            distance: SpellTargetRadius.WILL_BONUS
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You hurl a great, explosive blast of Aqshy into an enemy, which erupts into a furious blaze, burning with the heat of a forge. This is a magical missile with Damage +10 that ignores Armour Points and inflicts +2 Ablaze Conditions and the Prone Condition on a target. Everyone within the Area of Effect of that target suffers a Damage +5 hit ignoring Armour Points, and must pass a Dodge Test or also gain +1 Ablaze Condition. The spell stops behaving like a magic missile as the fire continues to burn in the Area of Effect for the duration. Anyone within the Area of Effect at the start of a round suffers 1d10+6 Damage, ignoring APs, and gains +1 Ablaze Condition."
    },
    FLAMING_SWORD_OF_RHUIN: {
        name: "Flaming Sword of Rhuin",
        type: SpellType.SPELL,
        domain: SpellDomain.FIRE,
        cn: 8,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.ONE
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You wreathe a sword in magical flames. The weapon has Damage +6 and the Impact Quality (see page 298), and anyone struck by the blade gains +1 Ablaze Condition. If wielders do not possess the Arcane Magic (Fire) Talent, and they fumble an attack with the Flaming Sword, they gain +1 Ablaze Condition."
    },
    PURGE: {
        name: "Purge",
        type: SpellType.SPELL,
        domain: SpellDomain.FIRE,
        cn: 10,
        range: {
            type: SpellRange.WILL
        },
        target: {
            type: SpellTarget.AOE,
            distance: SpellTargetRadius.WILL_BONUS
        },
        duration: {
            type: SpellDuration.WILL_BONUS
        },
        desc: "You funnel intense flame to burn away the taint and corruption in an area. Anything flammable is set alight, and any creatures in the area takes +SL Ablaze conditions. If the location contains a Corrupting Influence, such as Dhar , warpstone, or a Chaostainted object, it too will smoulder and blacken, beginning to burn. This spell may be maintained in subsequent rounds by passing a Challenging (+0) Channelling Test. The precise time needed to eliminate the Corrupting Influence will be determined by your GM. As a rough guideline, a small quantity (smaller than an acorn) of warpstone, or a minor Chaos-tainted object may require 10-Willpower Bonus Rounds (minimum of 1 Round). A larger quantity of warpstone - fist-sized - or a more potent Chaos-tainted object may require double this. A powerful Chaos Artefact may take hours, or even longer..."
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
