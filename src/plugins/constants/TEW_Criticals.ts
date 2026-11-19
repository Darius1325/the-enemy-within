// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_Criticals.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 20/11/2026
// Description: Critical tables: critical wounds (Critical Hits), the Oops! table (Fumbles) and miscasts.
// Effects that are not implemented yet (Injuries, Amputations, durations, psychological conditions...)
// inflict a Bleeding Condition instead, as do all miscasts but Rupture for now. Such entries are flagged
// with implemented: false, and their description holds the effect from the rulebook.
// Reference: WFRP5e Core Rulebook p165 (Oops! table), p171-176 (critical wounds), p238-239 (miscasts)

// ----------------------
// Imports
// ----------------------

import { CompleteBattler } from "../_types/battlerAI";
import { CriticalHandler } from "../_types/critical";
import { ConditionId } from "../_types/enum";
import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

// #region ====== UTILITIES === //
TEW.DATABASE.CRITICAL_UTILITIES = {
    placeholder: (battler: CompleteBattler) => {
        battler.addCondition(ConditionId.BLEEDING, 1);
    },

    death: (battler: CompleteBattler) => {
        battler.gainHp(-battler.hp);
    },

    none: () => {},

    conditions: (stacks) => (battler: CompleteBattler) => {
        for (const conditionId in stacks) {
            battler.addCondition(conditionId as ConditionId, stacks[conditionId]);
        }
    },

    testOrElse: (compId: string, slModifier: number, onFailure: CriticalHandler) => (battler: CompleteBattler) => {
        const testResult = TEW.DICE.skillTest(battler, compId, slModifier, !battler.isActor());
        if (!testResult.success) {
            onFailure(battler);
        }
    },

    combine: (...handlers: CriticalHandler[]) => (battler: CompleteBattler) => {
        handlers.forEach(handler => handler(battler));
    },
};
// #endregion

// Tables are written in a block so the shorthands below do not leak into the compiled TEW_Constants.js
{
    const { placeholder, death, none, conditions, testOrElse, combine } = TEW.DATABASE.CRITICAL_UTILITIES;

    // #region ====== CRITICAL WOUNDS === //
    // Rolled with a d100 on the table of the struck location (wfrp5e.pdf p173-176)
    TEW.DATABASE.WEAPON_CRITICALS = {
        HEAD: [
            {
                name: "Dramatic Injury",
                interval: { min: -Infinity, max: 3 },
                wounds: 0,
                implemented: false,
                description: "1 Bleeding. Leaves a duelling scar: +1 SL to fitting social Tests once healed (only once).",
                handler: placeholder,
            },
            {
                name: "Ear Bash",
                interval: { min: 4, max: 9 },
                wounds: 1,
                implemented: true,
                description: "1 Deafened.",
                handler: conditions({ [ConditionId.DEAFENED]: 1 }),
            },
            {
                name: "Poked Eye",
                interval: { min: 10, max: 12 },
                wounds: 1,
                implemented: true,
                description: "1 Blinded.",
                handler: conditions({ [ConditionId.BLINDED]: 1 }),
            },
            {
                name: "Minor Cut",
                interval: { min: 13, max: 17 },
                wounds: 1,
                implemented: true,
                description: "1 Bleeding.",
                handler: conditions({ [ConditionId.BLEEDING]: 1 }),
            },
            {
                name: "Rattling Blow",
                interval: { min: 18, max: 20 },
                wounds: 1,
                implemented: true,
                description: "1 Stunned.",
                handler: conditions({ [ConditionId.STUNNED]: 1 }),
            },
            {
                name: "Black Eye",
                interval: { min: 21, max: 25 },
                wounds: 2,
                implemented: true,
                description: "2 Blinded.",
                handler: conditions({ [ConditionId.BLINDED]: 2 }),
            },
            {
                name: "Sliced Ear",
                interval: { min: 26, max: 30 },
                wounds: 2,
                implemented: true,
                description: "1 Bleeding, 2 Deafened.",
                handler: conditions({ [ConditionId.BLEEDING]: 1, [ConditionId.DEAFENED]: 2 }),
            },
            {
                name: "Struck Forehead",
                interval: { min: 31, max: 35 },
                wounds: 2,
                implemented: false,
                description: "2 Bleeding, 1 Blinded that cannot be removed while any Bleeding remains.",
                handler: placeholder,
            },
            {
                name: "Fractured Jaw",
                interval: { min: 36, max: 40 },
                wounds: 2,
                implemented: false,
                description: "1 Stunned, Broken Bone (Minor) Injury.",
                handler: placeholder,
            },
            {
                name: "Broken Nose",
                interval: { min: 41, max: 45 },
                wounds: 3,
                implemented: true,
                description: "1 Bleeding. Challenging (+0 SL) Endurance Test or 1 Stunned.",
                handler: combine(
                    conditions({ [ConditionId.BLEEDING]: 1 }),
                    testOrElse('ENDURANCE', 0, conditions({ [ConditionId.STUNNED]: 1 }))
                ),
            },
            {
                name: "Major Eye Wound",
                interval: { min: 46, max: 50 },
                wounds: 3,
                implemented: false,
                description: "1 Bleeding, 1 Blinded that cannot be removed without Medical Attention.",
                handler: placeholder,
            },
            {
                name: "Broken Jaw",
                interval: { min: 51, max: 55 },
                wounds: 3,
                implemented: false,
                description: "2 Stunned, Broken Bone (Major) Injury.",
                handler: placeholder,
            },
            {
                name: "Major Ear Wound",
                interval: { min: 56, max: 60 },
                wounds: 3,
                implemented: false,
                description: "4 Deafened, hearing permanently lost in one ear (in both if suffered again).",
                handler: placeholder,
            },
            {
                name: "Concussive Blow",
                interval: { min: 61, max: 65 },
                wounds: 4,
                implemented: false,
                description: "1 Deafened, 1d10 Stunned, 1 Fatigued lasting 1d10 days.",
                handler: placeholder,
            },
            {
                name: "Smashed Teeth",
                interval: { min: 66, max: 75 },
                wounds: 4,
                implemented: false,
                description: "2 Bleeding, lose 1d10 teeth (Amputation, Easy +4 SL).",
                handler: placeholder,
            },
            {
                name: "Mangled Ear",
                interval: { min: 76, max: 80 },
                wounds: 4,
                implemented: false,
                description: "2 Bleeding, 3 Deafened, lose the ear (Amputation, Average +2 SL).",
                handler: placeholder,
            },
            {
                name: "Devastated Eye",
                interval: { min: 81, max: 85 },
                wounds: 5,
                implemented: false,
                description: "2 Bleeding, 1 Stunned, lose the eye (Amputation, Difficult -1 SL).",
                handler: placeholder,
            },
            {
                name: "Disfiguring Blow",
                interval: { min: 86, max: 94 },
                wounds: 5,
                implemented: false,
                description: "3 Bleeding, 2 Stunned, lose an eye and the nose (Amputation, Hard -2 SL).",
                handler: placeholder,
            },
            {
                name: "Mangled Jaw",
                interval: { min: 95, max: 99 },
                wounds: 5,
                implemented: false,
                description: "4 Bleeding, 3 Stunned, Broken Bone (Major) Injury, lose the tongue and 1d10 teeth (Amputation, Hard -2 SL).",
                handler: placeholder,
            },
            {
                name: "Shattered Skull",
                interval: { min: 100, max: Infinity },
                wounds: 0,
                implemented: true,
                description: "Instant death.",
                handler: death,
            },
        ],

        ARMS: [
            {
                name: "Jolted Wrist",
                interval: { min: -Infinity, max: 10 },
                wounds: 0,
                implemented: false,
                description: "Drop the item held in that hand.",
                handler: placeholder,
            },
            {
                name: "Jarred Arm",
                interval: { min: 11, max: 20 },
                wounds: 0,
                implemented: false,
                description: "Drop the item held in that hand, which is useless for 1d10 - Toughness Bonus Rounds (minimum 1).",
                handler: placeholder,
            },
            {
                name: "Minor Cut",
                interval: { min: 21, max: 25 },
                wounds: 1,
                implemented: true,
                description: "1 Bleeding.",
                handler: conditions({ [ConditionId.BLEEDING]: 1 }),
            },
            {
                name: "Bleeding Hand",
                interval: { min: 26, max: 30 },
                wounds: 1,
                implemented: false,
                description: "1 Bleeding. While it lasts, Average (+2 SL) Dexterity Test before acting with an item in that hand, or drop it.",
                handler: placeholder,
            },
            {
                name: "Sprain",
                interval: { min: 31, max: 45 },
                wounds: 1,
                implemented: false,
                description: "Torn Muscle (Minor) Injury.",
                handler: placeholder,
            },
            {
                name: "Torn Muscles",
                interval: { min: 46, max: 50 },
                wounds: 1,
                implemented: false,
                description: "1 Bleeding, Torn Muscle (Minor) Injury.",
                handler: placeholder,
            },
            {
                name: "Wrenched Arm",
                interval: { min: 51, max: 55 },
                wounds: 2,
                implemented: false,
                description: "Drop the item held in that hand, the arm is useless for 1d10 Rounds.",
                handler: placeholder,
            },
            {
                name: "Gaping Wound",
                interval: { min: 56, max: 60 },
                wounds: 2,
                implemented: false,
                description: "2 Bleeding. Until Surgery, Wounds to that arm inflict 1 more Bleeding.",
                handler: placeholder,
            },
            {
                name: "Ruptured Ligament",
                interval: { min: 61, max: 65 },
                wounds: 2,
                implemented: false,
                description: "Drop the item held in that hand, Torn Muscle (Major) Injury.",
                handler: placeholder,
            },
            {
                name: "Clean Break",
                interval: { min: 66, max: 80 },
                wounds: 2,
                implemented: false,
                description: "Drop the item held in that hand, Broken Bone (Minor) Injury. Difficult (-1 SL) Endurance Test or 1 Stunned.",
                handler: placeholder,
            },
            {
                name: "Deep Cut",
                interval: { min: 81, max: 85 },
                wounds: 3,
                implemented: false,
                description: "2 Bleeding, 1 Stunned, Torn Muscle (Minor) Injury.",
                handler: placeholder,
            },
            {
                name: "Crushed Elbow",
                interval: { min: 86, max: 90 },
                wounds: 3,
                implemented: false,
                description: "Drop the item held in that hand, Broken Bone (Major) Injury.",
                handler: placeholder,
            },
            {
                name: "Damaged Artery",
                interval: { min: 91, max: 95 },
                wounds: 3,
                implemented: true,
                description: "4 Bleeding.",
                handler: conditions({ [ConditionId.BLEEDING]: 4 }),
            },
            {
                name: "Dislocated Shoulder",
                interval: { min: 96, max: 109 },
                wounds: 4,
                implemented: false,
                description: "The arm is useless until reset (Extended Average (+2 SL) Heal Test reaching 6 SL), then -1 SL to Tests using it for 1d10 days.",
                handler: placeholder,
            },
            {
                name: "Severed Finger",
                interval: { min: 110, max: 115 },
                wounds: 4,
                implemented: false,
                description: "1 Bleeding, lose a finger (Amputation, Average +2 SL).",
                handler: placeholder,
            },
            {
                name: "Cleft Hand",
                interval: { min: 116, max: 120 },
                wounds: 4,
                implemented: false,
                description: "2 Bleeding, 1 Stunned, lose a finger (Amputation, Difficult -1 SL), and another every Round without Medical Attention.",
                handler: placeholder,
            },
            {
                name: "Mauled Bicep",
                interval: { min: 121, max: 125 },
                wounds: 5,
                implemented: false,
                description: "Drop the item held in that hand, 2 Bleeding, 1 Stunned, Torn Muscle (Major) Injury.",
                handler: placeholder,
            },
            {
                name: "Mangled Hand",
                interval: { min: 126, max: 130 },
                wounds: 5,
                implemented: false,
                description: "2 Bleeding, lose the hand (Amputation, Hard -2 SL).",
                handler: placeholder,
            },
            {
                name: "Sliced Tendons",
                interval: { min: 131, max: 135 },
                wounds: 5,
                implemented: false,
                description: "3 Bleeding, 1 Stunned, the arm is useless (Amputation, Very Hard -3 SL).",
                handler: placeholder,
            },
            {
                name: "Brutal Dismemberment",
                interval: { min: 136, max: Infinity },
                wounds: 0,
                implemented: true,
                description: "Instant death.",
                handler: death,
            },
        ],

        BODY: [
            {
                name: "Winded",
                interval: { min: -Infinity, max: 10 },
                wounds: 0,
                implemented: false,
                description: "Suffocate for 1 Round.",
                handler: placeholder,
            },
            {
                name: "Gut Blow",
                interval: { min: 11, max: 15 },
                wounds: 1,
                implemented: false,
                description: "Average (+2 SL) Endurance Test or 1 Stunned for 1 Round and Besmirched.",
                handler: placeholder,
            },
            {
                name: "Flesh Wound",
                interval: { min: 16, max: 25 },
                wounds: 1,
                implemented: true,
                description: "1 Bleeding.",
                handler: conditions({ [ConditionId.BLEEDING]: 1 }),
            },
            {
                name: "Low Blow!",
                interval: { min: 26, max: 30 },
                wounds: 1,
                implemented: true,
                description: "1 Stunned.",
                handler: conditions({ [ConditionId.STUNNED]: 1 }),
            },
            {
                name: "Twisted Back",
                interval: { min: 31, max: 35 },
                wounds: 1,
                implemented: false,
                description: "Torn Muscle (Minor) Injury.",
                handler: placeholder,
            },
            {
                name: "Bruised Ribs",
                interval: { min: 36, max: 50 },
                wounds: 2,
                implemented: false,
                description: "-1 SL to Agility Tests for 1d10 days.",
                handler: placeholder,
            },
            {
                name: "Wrenched Collar Bone",
                interval: { min: 51, max: 55 },
                wounds: 2,
                implemented: false,
                description: "A random arm drops its item and is useless for 1d10 Rounds.",
                handler: placeholder,
            },
            {
                name: "Ragged Wound",
                interval: { min: 56, max: 60 },
                wounds: 2,
                implemented: true,
                description: "2 Bleeding.",
                handler: conditions({ [ConditionId.BLEEDING]: 2 }),
            },
            {
                name: "Cracked Ribs",
                interval: { min: 61, max: 65 },
                wounds: 2,
                implemented: false,
                description: "1 Stunned, Broken Bone (Minor) Injury.",
                handler: placeholder,
            },
            {
                name: "Gaping Wound",
                interval: { min: 66, max: 70 },
                wounds: 3,
                implemented: false,
                description: "3 Bleeding. Until Surgery, Wounds to the body inflict 1 more Bleeding.",
                handler: placeholder,
            },
            {
                name: "Painful Cut",
                interval: { min: 71, max: 75 },
                wounds: 3,
                implemented: true,
                description: "2 Bleeding, 1 Stunned. Hard (-2 SL) Endurance Test: Unconscious on an Astounding Failure (-6 SL or less).",
                handler: combine(
                    conditions({ [ConditionId.BLEEDING]: 2, [ConditionId.STUNNED]: 1 }),
                    (battler: CompleteBattler) => {
                        const testResult = TEW.DICE.skillTest(battler, 'ENDURANCE', -2, !battler.isActor());
                        if (testResult.sl <= -6) {
                            battler.addCondition(ConditionId.UNCONSCIOUS, 1);
                        }
                    }
                ),
            },
            {
                name: "Pulled Back",
                interval: { min: 76, max: 80 },
                wounds: 3,
                implemented: false,
                description: "1 Stunned, Torn Muscle (Major) Injury.",
                handler: placeholder,
            },
            {
                name: "Arterial Damage",
                interval: { min: 81, max: 85 },
                wounds: 3,
                implemented: false,
                description: "4 Bleeding. Until Surgery, Damage to the body inflicts 2 more Bleeding.",
                handler: placeholder,
            },
            {
                name: "Gut Wound",
                interval: { min: 86, max: 90 },
                wounds: 4,
                implemented: false,
                description: "2 Bleeding, contract a Festering Wound.",
                handler: placeholder,
            },
            {
                name: "Fractured Hip",
                interval: { min: 91, max: 95 },
                wounds: 4,
                implemented: false,
                description: "1 Stunned, Broken Bone (Minor) Injury. Challenging (+0 SL) Endurance Test or Prone.",
                handler: placeholder,
            },
            {
                name: "Major Chest Wound",
                interval: { min: 96, max: 100 },
                wounds: 4,
                implemented: false,
                description: "4 Bleeding. Until Surgery, Wounds to the body inflict 2 more Bleeding.",
                handler: placeholder,
            },
            {
                name: "Smashed Rib Cage",
                interval: { min: 101, max: 105 },
                wounds: 5,
                implemented: false,
                description: "1 Stunned that only Medical Attention removes, 1 Bleeding, Broken Bone (Major) Injury.",
                handler: placeholder,
            },
            {
                name: "Spinal Cord Damage",
                interval: { min: 106, max: 110 },
                wounds: 5,
                implemented: false,
                description: "3 Stunned, Broken Bone (Major) Injury, the legs never work again (Amputation, Very Hard -3 SL).",
                handler: placeholder,
            },
            {
                name: "Internal Bleeding",
                interval: { min: 111, max: 115 },
                wounds: 5,
                implemented: false,
                description: "1 Bleeding that only Surgery removes, contract Blood Rot.",
                handler: placeholder,
            },
            {
                name: "Torn Apart",
                interval: { min: 116, max: Infinity },
                wounds: 0,
                implemented: true,
                description: "Instant death.",
                handler: death,
            },
        ],

        LEGS: [
            {
                name: "Jabbed Toe",
                interval: { min: -Infinity, max: 10 },
                wounds: 0,
                implemented: false,
                description: "Average (+2 SL) Endurance Test or Disadvantage on Agility Tests until the end of the Turn.",
                handler: placeholder,
            },
            {
                name: "Lost Footing",
                interval: { min: 11, max: 20 },
                wounds: 0,
                implemented: true,
                description: "Challenging (+0 SL) Athletics Test or Prone.",
                handler: testOrElse('ATHLETICS', 0, conditions({ [ConditionId.PRONE]: 1 })),
            },
            {
                name: "Twisted Ankle",
                interval: { min: 21, max: 25 },
                wounds: 1,
                implemented: false,
                description: "Disadvantage on Tests using the leg for 1d10 - Toughness Bonus Rounds (minimum 1).",
                handler: placeholder,
            },
            {
                name: "Minor Cut",
                interval: { min: 26, max: 40 },
                wounds: 1,
                implemented: true,
                description: "1 Bleeding.",
                handler: conditions({ [ConditionId.BLEEDING]: 1 }),
            },
            {
                name: "Thigh Strike",
                interval: { min: 41, max: 45 },
                wounds: 1,
                implemented: true,
                description: "1 Bleeding. Average (+2 SL) Endurance Test or Prone.",
                handler: combine(
                    conditions({ [ConditionId.BLEEDING]: 1 }),
                    testOrElse('ENDURANCE', 2, conditions({ [ConditionId.PRONE]: 1 }))
                ),
            },
            {
                name: "Sprained Ankle",
                interval: { min: 46, max: 50 },
                wounds: 1,
                implemented: false,
                description: "Torn Muscle (Minor) Injury.",
                handler: placeholder,
            },
            {
                name: "Twisted Knee",
                interval: { min: 51, max: 55 },
                wounds: 2,
                implemented: false,
                description: "Disadvantage on Tests using the leg for 1d10 Rounds.",
                handler: placeholder,
            },
            {
                name: "Bad Cut",
                interval: { min: 56, max: 60 },
                wounds: 2,
                implemented: true,
                description: "2 Bleeding. Challenging (+0 SL) Endurance Test or Prone.",
                handler: combine(
                    conditions({ [ConditionId.BLEEDING]: 2 }),
                    testOrElse('ENDURANCE', 0, conditions({ [ConditionId.PRONE]: 1 }))
                ),
            },
            {
                name: "Badly Twisted Knee",
                interval: { min: 61, max: 65 },
                wounds: 2,
                implemented: false,
                description: "Torn Muscle (Major) Injury.",
                handler: placeholder,
            },
            {
                name: "Badly Cut Toe",
                interval: { min: 66, max: 70 },
                wounds: 2,
                implemented: false,
                description: "1 Bleeding. After the encounter, Challenging (+0 SL) Endurance Test or lose a toe (Amputation, Average +2 SL).",
                handler: placeholder,
            },
            {
                name: "Ruptured Tendon",
                interval: { min: 71, max: 75 },
                wounds: 3,
                implemented: false,
                description: "1 Stunned, Prone, Torn Muscle (Major) Injury. Hard (-2 SL) Endurance Test or Unconscious.",
                handler: placeholder,
            },
            {
                name: "Torn Thigh",
                interval: { min: 76, max: 80 },
                wounds: 3,
                implemented: false,
                description: "3 Bleeding. Until Surgery, Wounds to that leg inflict 1 more Bleeding.",
                handler: placeholder,
            },
            {
                name: "Hacked Leg",
                interval: { min: 81, max: 85 },
                wounds: 3,
                implemented: false,
                description: "2 Bleeding, 1 Stunned, Prone, Broken Bone (Minor) Injury.",
                handler: placeholder,
            },
            {
                name: "Dislocated Knee",
                interval: { min: 86, max: 95 },
                wounds: 4,
                implemented: false,
                description: "Prone, the leg is useless until reset (Extended Average (+2 SL) Heal Test reaching 6 SL), then Movement is halved for 1d10 days.",
                handler: placeholder,
            },
            {
                name: "Cracked Shin",
                interval: { min: 96, max: 100 },
                wounds: 4,
                implemented: false,
                description: "1 Stunned, Prone, Broken Bone (Minor) and Torn Muscle (Major) Injuries.",
                handler: placeholder,
            },
            {
                name: "Broken Knee",
                interval: { min: 101, max: 105 },
                wounds: 4,
                implemented: false,
                description: "1 Bleeding, 1 Stunned, Prone, Broken Bone (Major) Injury.",
                handler: placeholder,
            },
            {
                name: "Crushed Foot",
                interval: { min: 106, max: 115 },
                wounds: 4,
                implemented: false,
                description: "2 Bleeding. Average (+2 SL) Endurance Test or Prone and lose 1 toe, plus 1 per SL below 0 (Amputation, Average +2 SL). The foot is lost without Surgery within Toughness Bonus days.",
                handler: placeholder,
            },
            {
                name: "Severed Foot",
                interval: { min: 116, max: 120 },
                wounds: 5,
                implemented: false,
                description: "3 Bleeding, 2 Stunned, Prone, lose the foot (Amputation, Hard -2 SL).",
                handler: placeholder,
            },
            {
                name: "Cut Tendon",
                interval: { min: 121, max: 125 },
                wounds: 5,
                implemented: false,
                description: "2 Bleeding, 2 Stunned, Prone, the leg never works again (Amputation, Very Hard -3 SL).",
                handler: placeholder,
            },
            {
                name: "Shattered Pelvis",
                interval: { min: 126, max: Infinity },
                wounds: 0,
                implemented: true,
                description: "Instant death.",
                handler: death,
            },
        ],
    };
    // #endregion

    // #region ====== FUMBLES === //
    // Rolled with a d10 (wfrp5e.pdf p165). For now, a single entry covers the whole range.
    TEW.DATABASE.WEAPON_FUMBLES = [
        {
            name: "Oops!",
            interval: { min: -Infinity, max: Infinity },
            wounds: 1,
            implemented: true,
            description: "Lose 1 Wound, ignoring Toughness Bonus and Armour Points.",
            handler: none,
        },
    ];

    // Draft of the full Oops! table, to replace the entry above once its effects are implemented:
    //  1-2   Lose 1 Wound, ignoring Toughness Bonus and Armour Points
    //  3-4   The weapon suffers 1 Damage, and the fumbler acts last next Round
    //  5-6   -1 SL to the fumbler's Action next Round
    //  7     Lose the next Move
    //  8     Miss the next Action
    //  9     -1 SL to Tests using a random leg for 1d10 Rounds (counts as a Critical Wound)
    //  10    Hit a random ally in range, with the units die of the roll as SL. With none in range, gain 1 Stunned
    // Blackpowder, Engineering and Explosive weapons rolling 99 or 00 Misfire instead (d10):
    //  1-8   The weapon fails to fire (must be reloaded) or the explosive is a dud
    //  9-10  The weapon explodes, dealing its full Damage to the wielder's primary arm with +0 SL
    // #endregion

    // #region ====== MISCASTS === //
    // Rolled with a d100 (wfrp5e.pdf p238-239). For now, every miscast has the effect of Rupture: 1 Bleeding.
    TEW.DATABASE.MAGIC_CRITICALS = {
        MINOR: [
            {
                name: "Cloyed Tongue",
                interval: { min: -Infinity, max: 5 },
                wounds: 0,
                implemented: false,
                description: "-1 SL to Language Tests (Casting included) for 1d10 Rounds.",
                handler: placeholder,
            },
            {
                name: "Witchsign",
                interval: { min: 6, max: 10 },
                wounds: 0,
                implemented: false,
                description: "The next creature born within a mile is mutated.",
                handler: placeholder,
            },
            {
                name: "Driven to Distraction",
                interval: { min: 11, max: 15 },
                wounds: 0,
                implemented: false,
                description: "Surprised if in combat.",
                handler: placeholder,
            },
            {
                name: "Intestinal Rebellion",
                interval: { min: 16, max: 20 },
                wounds: 0,
                implemented: false,
                description: "Besmirched.",
                handler: placeholder,
            },
            {
                name: "Unfasten",
                interval: { min: 21, max: 25 },
                wounds: 0,
                implemented: false,
                description: "Every buckle and lace on the caster comes undone.",
                handler: placeholder,
            },
            {
                name: "Wayward Garb",
                interval: { min: 26, max: 30 },
                wounds: 0,
                implemented: false,
                description: "1 Entangled, with a Strength of 1d10 x 5.",
                handler: placeholder,
            },
            {
                name: "Unholy Visions",
                interval: { min: 31, max: 35 },
                wounds: 0,
                implemented: false,
                description: "1 Blinded. Challenging (+0 SL) Cool Test or 1 more.",
                handler: placeholder,
            },
            {
                name: "Soured Milk",
                interval: { min: 36, max: 40 },
                wounds: 0,
                implemented: false,
                description: "Milk within 1d100 yards goes sour.",
                handler: placeholder,
            },
            {
                name: "Freezing Breath",
                interval: { min: 41, max: 45 },
                wounds: 0,
                implemented: false,
                description: "For 1 minute, people within Willpower Bonus yards take a Challenging (+0 SL) Endurance Test or suffer -1 SL to Ballistic Skill, Agility and Dexterity Tests while in the area.",
                handler: placeholder,
            },
            {
                name: "Rupture",
                interval: { min: 46, max: 50 },
                wounds: 0,
                implemented: true,
                description: "1 Bleeding.",
                handler: placeholder,
            },
            {
                name: "Curse of Temperance",
                interval: { min: 51, max: 55 },
                wounds: 0,
                implemented: false,
                description: "Alcohol within 1d100 yards goes bad.",
                handler: placeholder,
            },
            {
                name: "The Horror!",
                interval: { min: 56, max: 60 },
                wounds: 0,
                implemented: false,
                description: "Hard (-2 SL) Psychology Test or 1 Broken.",
                handler: placeholder,
            },
            {
                name: "Darkling Sight",
                interval: { min: 61, max: 65 },
                wounds: 0,
                implemented: false,
                description: "Lose Second Sight for 1d10 hours, with -2 SL to Channelling Tests meanwhile.",
                handler: placeholder,
            },
            {
                name: "Ululating Scream",
                interval: { min: 66, max: 70 },
                wounds: 0,
                implemented: false,
                description: "1 Deafened lasting 1d10 Rounds.",
                handler: placeholder,
            },
            {
                name: "Regurgitation",
                interval: { min: 71, max: 75 },
                wounds: 0,
                implemented: false,
                description: "Besmirched, 1 Stunned lasting 1d10 Rounds.",
                handler: placeholder,
            },
            {
                name: "Fell Whispers",
                interval: { min: 76, max: 80 },
                wounds: 0,
                implemented: false,
                description: "Average (+2 SL) Cool Test or 1 Corruption Point.",
                handler: placeholder,
            },
            {
                name: "Curse of Corruption",
                interval: { min: 81, max: 85 },
                wounds: 0,
                implemented: false,
                description: "1 Corruption Point.",
                handler: placeholder,
            },
            {
                name: "Marked by Magic",
                interval: { min: 86, max: 90 },
                wounds: 0,
                implemented: false,
                description: "The Wind leaves a permanent mark on the caster's body.",
                handler: placeholder,
            },
            {
                name: "Multiplying Misfortune",
                interval: { min: 91, max: 95 },
                wounds: 0,
                implemented: false,
                description: "Roll twice on this table, rerolling results of 91 or more and ignoring modifiers.",
                handler: placeholder,
            },
            {
                name: "Cascading Chaos",
                interval: { min: 96, max: Infinity },
                wounds: 0,
                implemented: false,
                description: "Roll on the Major Miscast Table, carrying over anything above 100.",
                handler: placeholder,
            },
        ],

        MAJOR: [
            {
                name: "Jibbering",
                interval: { min: -Infinity, max: 5 },
                wounds: 0,
                implemented: false,
                description: "Cannot speak nor use Language Skills for 1d10 Rounds.",
                handler: placeholder,
            },
            {
                name: "Hellish Stench",
                interval: { min: 6, max: 10 },
                wounds: 0,
                implemented: false,
                description: "Distracting Creature Trait for 1d10 hours.",
                handler: placeholder,
            },
            {
                name: "Ragdoll",
                interval: { min: 11, max: 15 },
                wounds: 0,
                implemented: false,
                description: "Thrown 1d10 yards in a random direction, 1d10 Damage ignoring Armour Points, Prone.",
                handler: placeholder,
            },
            {
                name: "Power Drain",
                interval: { min: 16, max: 20 },
                wounds: 0,
                implemented: false,
                description: "Cannot use the Talent used to cast for 1d10 minutes.",
                handler: placeholder,
            },
            {
                name: "Levitation",
                interval: { min: 21, max: 25 },
                wounds: 0,
                implemented: false,
                description: "Float 1d10 yards above the ground for 1d10 minutes.",
                handler: placeholder,
            },
            {
                name: "Aethyric Shock",
                interval: { min: 26, max: 30 },
                wounds: 0,
                implemented: false,
                description: "1d10 Wounds ignoring Toughness Bonus and Armour Points. Average (+2 SL) Endurance Test or 1 Stunned.",
                handler: placeholder,
            },
            {
                name: "Chaos Quake",
                interval: { min: 31, max: 35 },
                wounds: 0,
                implemented: false,
                description: "Creatures within 1d100 yards take an Average (+2 SL) Athletics Test or fall Prone.",
                handler: placeholder,
            },
            {
                name: "Hexeyes",
                interval: { min: 36, max: 40 },
                wounds: 0,
                implemented: false,
                description: "1 Blinded that nothing removes for 1d10 hours, without Magical Sense nor Second Sight meanwhile.",
                handler: placeholder,
            },
            {
                name: "Limb Frozen",
                interval: { min: 41, max: 45 },
                wounds: 0,
                implemented: false,
                description: "A random limb is useless for 1d10 hours.",
                handler: placeholder,
            },
            {
                name: "Death Walker",
                interval: { min: 46, max: 50 },
                wounds: 0,
                implemented: false,
                description: "Plants trodden on wither for 1d10 hours.",
                handler: placeholder,
            },
            {
                name: "Aethyric Repulsion",
                interval: { min: 51, max: 55 },
                wounds: 0,
                implemented: false,
                description: "-3 SL to Casting and Channelling Tests for 2d10 hours.",
                handler: placeholder,
            },
            {
                name: "Magefire",
                interval: { min: 56, max: 60 },
                wounds: 0,
                implemented: false,
                description: "1 Ablaze.",
                handler: placeholder,
            },
            {
                name: "Swarmed",
                interval: { min: 61, max: 65 },
                wounds: 0,
                implemented: false,
                description: "Engaged by an aethyric swarm, which retreats after 1d10 Rounds.",
                handler: placeholder,
            },
            {
                name: "Chaotic Foresight",
                interval: { min: 66, max: 70 },
                wounds: 0,
                implemented: false,
                description: "Gain 1 Fortune Point for the session, but every Fortune Point spent gives 1 Corruption Point.",
                handler: placeholder,
            },
            {
                name: "Blight",
                interval: { min: 71, max: 75 },
                wounds: 0,
                implemented: false,
                description: "Willpower Bonus fields within Willpower Bonus miles are blighted.",
                handler: placeholder,
            },
            {
                name: "Foul Enfeeblement",
                interval: { min: 76, max: 80 },
                wounds: 0,
                implemented: false,
                description: "1 Corruption Point, 1 Fatigued, Prone.",
                handler: placeholder,
            },
            {
                name: "Traitor's Heart",
                interval: { min: 81, max: 85 },
                wounds: 0,
                implemented: false,
                description: "No Fortune Point regained until the next downtime or until betraying another Character.",
                handler: placeholder,
            },
            {
                name: "Ghostly Voices",
                interval: { min: 86, max: 90 },
                wounds: 0,
                implemented: false,
                description: "Everyone within Willpower Bonus yards takes an Average (+2 SL) Cool Test or gains 1 Corruption Point.",
                handler: placeholder,
            },
            {
                name: "Slipped from Memory",
                interval: { min: 91, max: 95 },
                wounds: 0,
                implemented: false,
                description: "The Spell being cast is forgotten and must be learnt again.",
                handler: placeholder,
            },
            {
                name: "Aethyric Feedback",
                interval: { min: 96, max: Infinity },
                wounds: 0,
                implemented: false,
                description: "Everyone within Willpower Bonus yards suffers 1d10 Wounds ignoring Toughness Bonus and Armour Points, and falls Prone. With nobody in range, the caster dies.",
                handler: placeholder,
            },
        ],
    };
    // #endregion
}
