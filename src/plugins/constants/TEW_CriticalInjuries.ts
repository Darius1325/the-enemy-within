// $PluginCompiler TEW_Constants.js

// ----------------------

// File: TEW_CriticalInjuries.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 25/03/2026
// Description: Critical Injury tables, one per hit location.
// Roll = d100 + excess damage dealt (damage beyond 0 Wounds).
// Reference: WFRP4e Core Rulebook p.159-163 (condensed & adapted for tactical play)

// ----------------------
// Imports
// ----------------------

import { BodyLocation } from "../_types/enum";
import TEW from "../_types/tew";

// ----------------------
// $StartCompilation
// ----------------------

TEW.DATABASE.CRITICAL_INJURIES = [];

// ===========================================================================
// HEAD — Blessures à la Tête
// ===========================================================================
TEW.DATABASE.CRITICAL_INJURIES.push(

    // ----- Minor (1–20) -----
    { id: "HEAD_DAZED",           location: BodyLocation.HEAD, minRoll: 1,  maxRoll: 5,
      name: "Dazed",              description: "A glancing blow to the skull. You see stars.",
      applyConditions: { STUNNED: 1 }, healModifier: 0 },

    { id: "HEAD_BLEEDING_EAR",    location: BodyLocation.HEAD, minRoll: 6,  maxRoll: 10,
      name: "Bleeding Ear",       description: "Your ear is cut open, pouring blood over your neck.",
      applyConditions: { BLEEDING: 1 }, healModifier: 0 },

    { id: "HEAD_BRUISED_NOSE",    location: BodyLocation.HEAD, minRoll: 11, maxRoll: 20,
      name: "Bruised Nose",       description: "Your nose is smashed flat. Breathing hurts.",
      applyConditions: { FATIGUED: 1 }, healModifier: 0 },

    // ----- Moderate (21–45) -----
    { id: "HEAD_EYE_GOUGE",       location: BodyLocation.HEAD, minRoll: 21, maxRoll: 30,
      name: "Eye Gouge",          description: "Something sharp catches your eye. Vision blurs.",
      applyConditions: { STUNNED: 1, FATIGUED: 1 }, permanentTestModifier: -10, healModifier: -10 },

    { id: "HEAD_CHEEKBONE",       location: BodyLocation.HEAD, minRoll: 31, maxRoll: 45,
      name: "Fractured Cheekbone", description: "Bone splinters beneath your skin. The pain is immense.",
      applyConditions: { STUNNED: 1 }, permanentTestModifier: -10, healModifier: -10 },

    // ----- Serious (46–65) -----
    { id: "HEAD_JAW_SHATTERED",   location: BodyLocation.HEAD, minRoll: 46, maxRoll: 55,
      name: "Shattered Jaw",      description: "Your jaw is wrenched sideways. You cannot speak clearly.",
      applyConditions: { STUNNED: 2 }, permanentTestModifier: -20,
      healModifier: -20, gmNote: "Cannot cast spells with verbal components until healed." },

    { id: "HEAD_SKULL_FRAGMENT",  location: BodyLocation.HEAD, minRoll: 56, maxRoll: 65,
      name: "Skull Fragment",     description: "A piece of your skull is driven inward. Blood pours freely.",
      applyConditions: { BLEEDING: 2, STUNNED: 2 }, healModifier: -20 },

    // ----- Severe (66–80) -----
    { id: "HEAD_CONCUSSION",      location: BodyLocation.HEAD, minRoll: 66, maxRoll: 75,
      name: "Severe Concussion",  description: "Your brain rattles inside your skull. The world spins.",
      applyConditions: { STUNNED: 3, FATIGUED: 2 }, permanentTestModifier: -20, healModifier: -30 },

    { id: "HEAD_CRACKED_SKULL",   location: BodyLocation.HEAD, minRoll: 76, maxRoll: 80,
      name: "Cracked Skull",      description: "Your skull cracks. Blood streams down your face.",
      applyConditions: { STUNNED: 2, BLEEDING: 2 }, statReduction: { INTL: 5 },
      permanentTestModifier: -20, healModifier: -30 },

    // ----- Critical (81–90) -----
    { id: "HEAD_BRAIN_DAMAGE",    location: BodyLocation.HEAD, minRoll: 81, maxRoll: 90,
      name: "Brain Damage",       description: "The blow caves in a section of your skull. You may never fully recover.",
      applyConditions: { STUNNED: 3, BLEEDING: 3 }, statReduction: { INTL: 10, WILL: 5 },
      permanentTestModifier: -30, healModifier: -40,
      gmNote: "Requires a Chirurgeon within 6 hours or injury becomes permanent." },

    // ----- Fatal (91+) -----
    { id: "HEAD_FATAL",           location: BodyLocation.HEAD, minRoll: 91, maxRoll: 200,
      name: "Skull Caved In",     description: "The killing blow caves in your skull. Nothing can save you now.",
      fatal: true, applyConditions: { UNCONSCIOUS: 1 }, healModifier: -100 }
);

// ===========================================================================
// BODY — Blessures au Torse
// ===========================================================================
TEW.DATABASE.CRITICAL_INJURIES.push(

    { id: "BODY_WINDED",          location: BodyLocation.BODY, minRoll: 1,  maxRoll: 5,
      name: "Winded",             description: "The impact knocks the air from your lungs.",
      applyConditions: { FATIGUED: 1 }, healModifier: 0 },

    { id: "BODY_BRUISED_RIB",     location: BodyLocation.BODY, minRoll: 6,  maxRoll: 15,
      name: "Bruised Rib",        description: "A rib cracks but holds. Every breath burns.",
      applyConditions: { FATIGUED: 1 }, permanentTestModifier: -10, healModifier: 0 },

    { id: "BODY_GASHED_SIDE",     location: BodyLocation.BODY, minRoll: 16, maxRoll: 30,
      name: "Gashed Side",        description: "A deep gash opens along your ribs. Blood soaks your clothes.",
      applyConditions: { BLEEDING: 2 }, healModifier: -10 },

    { id: "BODY_BROKEN_RIB",      location: BodyLocation.BODY, minRoll: 31, maxRoll: 45,
      name: "Broken Rib",         description: "A rib snaps with an audible crack. Movement is agonising.",
      applyConditions: { FATIGUED: 2, BLEEDING: 1 }, permanentTestModifier: -10, healModifier: -20 },

    { id: "BODY_PUNCTURED_LUNG",  location: BodyLocation.BODY, minRoll: 46, maxRoll: 60,
      name: "Punctured Lung",     description: "Something pierces your lung. You cough up blood with every breath.",
      applyConditions: { BLEEDING: 2, FATIGUED: 2 }, permanentTestModifier: -20,
      statReduction: { TOUG: 5 }, healModifier: -30,
      gmNote: "Requires immediate First Aid or loses 1 additional Wound each turn." },

    { id: "BODY_RUPTURED_ORGAN",  location: BodyLocation.BODY, minRoll: 61, maxRoll: 75,
      name: "Ruptured Organ",     description: "Internal bleeding. The pain is unlike anything you have felt.",
      applyConditions: { BLEEDING: 3, STUNNED: 1 }, statReduction: { TOUG: 10 },
      permanentTestModifier: -20, healModifier: -40 },

    { id: "BODY_SHATTERED_SPINE", location: BodyLocation.BODY, minRoll: 76, maxRoll: 85,
      name: "Shattered Spine",    description: "Your spine is cracked. Your legs may never work again.",
      applyConditions: { PRONE: 1, STUNNED: 2, BLEEDING: 2 }, statReduction: { AGIL: 10 },
      permanentTestModifier: -30, healModifier: -50,
      gmNote: "Character cannot move until treated by a Chirurgeon (TN −30)." },

    { id: "BODY_DISEMBOWELLED",   location: BodyLocation.BODY, minRoll: 86, maxRoll: 92,
      name: "Disembowelled",      description: "Your guts spill from the wound. You are dying.",
      applyConditions: { BLEEDING: 4, PRONE: 1 }, fatal: false,
      permanentTestModifier: -40, healModifier: -60,
      gmNote: "Unless treated within 3 rounds the character dies." },

    { id: "BODY_FATAL",           location: BodyLocation.BODY, minRoll: 93, maxRoll: 200,
      name: "Mortal Wound",       description: "The blow drives through your body. You are dead before you hit the ground.",
      fatal: true, applyConditions: { UNCONSCIOUS: 1 }, healModifier: -100 }
);

// ===========================================================================
// ARMS — Blessures aux Bras
// ===========================================================================
TEW.DATABASE.CRITICAL_INJURIES.push(

    { id: "ARM_BRUISED",          location: BodyLocation.ARMS, minRoll: 1,  maxRoll: 10,
      name: "Bruised Arm",        description: "A sharp blow numbs your arm for a moment.",
      applyConditions: { FATIGUED: 1 }, healModifier: 0 },

    { id: "ARM_DISARMED",         location: BodyLocation.ARMS, minRoll: 11, maxRoll: 25,
      name: "Disarmed",           description: "The impact wrenches your weapon from your grip.",
      applyConditions: {}, healModifier: 0,
      gmNote: "The character's held weapon is knocked 1d10 feet away." },

    { id: "ARM_GASHED",           location: BodyLocation.ARMS, minRoll: 26, maxRoll: 40,
      name: "Gashed Arm",         description: "A deep cut opens along your forearm.",
      applyConditions: { BLEEDING: 1 }, healModifier: -10 },

    { id: "ARM_MUSCLE_TEAR",      location: BodyLocation.ARMS, minRoll: 41, maxRoll: 55,
      name: "Torn Muscle",        description: "Something tears deep in your arm. Your grip weakens.",
      applyConditions: { FATIGUED: 1, BLEEDING: 1 }, statReduction: { STRG: 5 },
      permanentTestModifier: -10, healModifier: -20 },

    { id: "ARM_FRACTURED",        location: BodyLocation.ARMS, minRoll: 56, maxRoll: 70,
      name: "Fractured Arm",      description: "Bone crunches. Your arm hangs at a wrong angle.",
      applyConditions: { BLEEDING: 1 }, statReduction: { STRG: 10 },
      permanentTestModifier: -20, healModifier: -30,
      gmNote: "Cannot use a two-handed weapon or shield with this arm until healed." },

    { id: "ARM_COMPOUND_FRACTURE",location: BodyLocation.ARMS, minRoll: 71, maxRoll: 85,
      name: "Compound Fracture",  description: "Bone splinters through skin. The sight alone is horrifying.",
      applyConditions: { BLEEDING: 3, STUNNED: 1 }, statReduction: { STRG: 10, DEXT: 5 },
      permanentTestModifier: -30, healModifier: -40 },

    { id: "ARM_SEVERED",          location: BodyLocation.ARMS, minRoll: 86, maxRoll: 200,
      name: "Arm Severed",        description: "Your arm is cut clean off. Blood fountains from the stump.",
      applyConditions: { BLEEDING: 5, STUNNED: 2 }, fatal: false,
      statReduction: { STRG: 20 }, permanentTestModifier: -30,
      healModifier: -60,
      gmNote: "Arm is permanently lost. Requires immediate tourniquet or character dies in 3 rounds." }
);

// ===========================================================================
// LEGS — Blessures aux Jambes
// ===========================================================================
TEW.DATABASE.CRITICAL_INJURIES.push(

    { id: "LEG_BRUISED",          location: BodyLocation.LEGS, minRoll: 1,  maxRoll: 10,
      name: "Bruised Leg",        description: "A jarring blow slows your step momentarily.",
      applyConditions: { FATIGUED: 1 }, healModifier: 0 },

    { id: "LEG_HAMSTRUNG_MINOR",  location: BodyLocation.LEGS, minRoll: 11, maxRoll: 25,
      name: "Pulled Muscle",      description: "A muscle strains in your thigh. Every step is painful.",
      applyConditions: { FATIGUED: 1 }, permanentTestModifier: -10, healModifier: 0 },

    { id: "LEG_GASHED",           location: BodyLocation.LEGS, minRoll: 26, maxRoll: 40,
      name: "Gashed Leg",         description: "A cut opens along your leg, trailing blood as you move.",
      applyConditions: { BLEEDING: 1 }, healModifier: -10 },

    { id: "LEG_KNOCKED_DOWN",     location: BodyLocation.LEGS, minRoll: 41, maxRoll: 55,
      name: "Knocked Down",       description: "The blow sweeps your legs from under you.",
      applyConditions: { PRONE: 1, BLEEDING: 1 }, healModifier: -10 },

    { id: "LEG_HAMSTRUNG",        location: BodyLocation.LEGS, minRoll: 56, maxRoll: 70,
      name: "Hamstrung",          description: "A tendon in the back of your knee is severed. Running is impossible.",
      applyConditions: { PRONE: 1, BLEEDING: 2 }, statReduction: { AGIL: 10 },
      permanentTestModifier: -20, healModifier: -30,
      gmNote: "Movement is halved (rounded down) until healed." },

    { id: "LEG_FRACTURED",        location: BodyLocation.LEGS, minRoll: 71, maxRoll: 85,
      name: "Fractured Leg",      description: "The bone snaps. You crumple to the ground.",
      applyConditions: { PRONE: 1, BLEEDING: 2, STUNNED: 1 }, statReduction: { AGIL: 15 },
      permanentTestModifier: -30, healModifier: -40,
      gmNote: "Cannot stand or move until treated. Movement 0 until healed." },

    { id: "LEG_SEVERED",          location: BodyLocation.LEGS, minRoll: 86, maxRoll: 200,
      name: "Leg Severed",        description: "Your leg is cut off at the knee in a spray of blood.",
      applyConditions: { BLEEDING: 5, PRONE: 1, STUNNED: 2 }, fatal: false,
      statReduction: { AGIL: 20 }, permanentTestModifier: -40,
      healModifier: -60,
      gmNote: "Leg is permanently lost. Requires immediate tourniquet or character dies in 3 rounds." }
);
