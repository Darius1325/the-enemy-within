// ----------------------

// File: tew.ts
// Author: Ersokili, 7evy, Sebibebi67
// Date: 12/04/2025
// Description: This file contains the type definitions for the TEW object. It includes the properties and types of each object in the TEW object, as well as the available constants and methods. The file is used to define the TEW object and its properties in the game.

// ----------------------
// Imports
// ----------------------

import { Armor } from "./armor";
import { Item } from "./item";
import { Competence } from "./competence";
import { NPC } from "./npc";
import { Spell } from "./spell";
import { Talent } from "./talent";
import { MeleeWeapon } from "./meleeWeapon";
import { RangedWeapon } from "./rangedWeapon";
import { Ammunition } from "./ammunition";
import { ArmorGroup, WeaponGroup, WeaponQuality } from "./enum";
import {Game_Actor} from "../base/stats/Game_Actor";
import {Game_BattlerBase} from "../base/stats/Game_BattlerBase";
import { Troop } from "./troop";

/** Storage object for all TEW plugins */
const TEW: {
    /**
     * Fixed game data, duplicated in various data structures to improve performance
     * All entities are referenced by their name in all caps as ID
     */
    DATABASE?: {
    
        /** Icon references for readability */
        ICONS?: {
            SET?: Record<string, number>;
        };
        
        /** Equipable armors */
        ARMORS?: {
            /** All armors by ID */
            SET?: Record<string, Armor>;
            IDS?: string[];
            /** Decoupled map of armors */
            ARRAY?: [string, Armor][];
        };

        /**
         * Equipable weapons
         * No duplicate ID between melee and ranged weapons
         */
        WEAPONS?: {
            /** All melee weapons by ID (based on weapon skill) */
            MELEE_SET?: Record<string, MeleeWeapon>;
            /** All ranged weapons by ID (based on ballistic skill) */
            RANGED_SET?: Record<string, RangedWeapon>;
            /** All ammunition by ID (for weapons with the RELOAD/RELOAD_X quality */
            AMMO_SET?: Record<string, Ammunition>;
            /** All weapon IDs */
            IDS?: string[];
            /** Decoupled map of all weapons */
            ARRAY?: [string, MeleeWeapon | RangedWeapon][];
            /** Weapon group IDs */
            GROUP_IDS?: string[];
        };

        /**
         * Skills for every PC and NPC
         * Called 'competences' or 'comps' internally to avoid conflicts with base RMMV skills
         */
        COMPS?: {
            /** All skills by ID */
            SET?: Record<string, Competence>;
            IDS?: string[];
            /** Decoupled map of base skills (available to every character) */
            BASE_ARRAY?: [string, Competence][];
            /** Decoupled map of advanced skills (unavailable if not unlocked) */
            ADVANCED_ARRAY?: [string, Competence][];
        };

        /** Carriable items */
        ITEMS?: {
            /** All items by ID */
            SET?: Record<string, Item>;
            IDS?: string[];
            /** Decoupled map of items */
            ARRAY?: [string, Item][];
        };

        /** Usable spells */
        SPELLS?: {
            /** All spells by ID */
            SET?: Record<string, Spell>;
            IDS?: string[];
            /** Decoupled map of spells */
            ARRAY?: [string, Spell][];
        };
        
        /** Learnable talents */
        TALENTS?: {
            /** All talents by ID */
            SET?: Record<string, Talent>;
            IDS?: string[];
            /** Decoupled map of talents */
            ARRAY?: [string, Talent][];
        };

        /** Relevant data for NPCs */
        NPCS?: {
            /** All NPCs by ID */
            SET?: Record<string, NPC>;

            TROOPS?: Record<string, Troop>;
        };
    };

    /** Constants used in menu plugins for readability */
    MENU?: {
        /** Links commands (used to control interactions with windows) to human-readable names */
        COMMAND_NAMES?: Record<number, string>;
        /** Common line height for several menus */
        LINE_HEIGHT?: number;

        /** Status menu tab switch height */
        STATUS_WINDOW_TOPBAR_HEIGHT?: number;
        /** Common height for footer help windows */
        STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT?: number;

        /** Inventory menu tab switch height */
        INVENTORY_WINDOW_TOPBAR_HEIGHT?: number;
    };

    /** Playable character data */
    CHARACTERS?: {
        /** Associates PC names to their party number in RMMV's database */
        SET?: Record<string, number>;

        /** PC names */
        ARRAY?: string[];
        /** Associates stat IDs to their param number (0 through 10) */
        STATS?: Record<string, number>;
        /** Stat full names ordered by param number */
        STATS_VERBOSE?: string[];
        /**
         * Skill values for a new character
         * Array of 0 (for base skills) and -1 (for advanced)
         */
        BASE_COMP_VALUES?: number[];
    };

    /** Dice utilities */
    DICE?: {
        /** Set of points to draw a 10-sided die */
        DIE_10_POINTS?: [number, number][];
        /**
         * Compute a stat bonus
         * @param value character's stat value
         * @returns the tens digit
         */
        bonus?: (value: number) => number;
        /**
         * Draw a line on the canvas
         * @param context the canvas
         * @param start the start point
         * @param end the end point
         * @returns void
         */
        drawLine?: (context: any, start: [number, number], end: [number, number]) => void;
        /**
         * Display the result of a dice roll
         * @param range max value of the roll
         * @returns the roll's result
         */
        displayDiceRoll?: (range?: number) => number;
        /**
         * Roll a range-sided die
         * @param range max value of the roll
         * @returns the result between 1 and range included
         */
        roll?: (range?: number) => number;
        /**
         * Roll a 10-sided die and add the result to the actor's initiative bonus.
         * Used to determine turn order
         * @param actor the battler to roll initiative for
         * @returns void
         */
        rollInitiative?: (actor: Game_Actor) => number;
    };

    /** Battle system constants and utilities */
    COMBAT?: {
        /** Constants to control the battle system */
        SYSTEM?: {
            /** Default range for actions, spells and items */
            actionRange?: string;

            /** Max movement in one turn */
            mvp?: number;

            /** ??? */
            durationStartSprite?: number;

            /** Opacity of the tile grid */
            gridOpacity?: number;

            /** Selector PNG filename without extension */
            selectorFile?: string;

            /** How fast the selector moves when maintaining arrow keys */
            selectorSpeed?: number;

            /** Color for highlighting tiles with allies */
            allyScopeColor?: string;

            /** Color for highlighting tiles with enemies */
            enemyScopeColor?: string;

            /** Color for highlighting possible movement */
            moveScopeColor?: string;

            /** Whether to end turn automatically after all characters acted */
            autoTurnEnd?: boolean;

            /** Whether victory requires killing all enemies */
            clearAll?: boolean;

            /** ??? */
            fadeOutEnd?: boolean;

            /** ??? */
            setTransparentUnit?: boolean;

            /** Whether to display text during the transition from map to battle */
            showBattleStart?: boolean;

            /** ??? */
            showFaceUnit?: boolean;

            /** Whether to show HP gauges under battlers */
            showHpGauge?: boolean;

            /** ??? */
            showInformationWindow?: boolean;

            /** Whether to display icons for status */
            showStateIcon?: boolean;

            /** Text displayed during the battle start transition */
            battleStartTerm?: string;

            /** Unused */
            criticalRateTerm?: string;

            /** Unused */
            damageTerm?: string;

            /** Unused */
            drainTerm?: string;

            /** Unused */
            endTurnTerm?: string;

            /** Unused */
            hitRateTerm?: string;

            /** Unused */
            recoverTerm?: string;

            /** Wait action name */
            wait?: string;

            /** Wait skill ID */
            waitSkillId?: number;

            /** ??? */
            battleStartId?: number;

            /** ??? */
            enemyPhaseId?: number;

            /** ??? */
            playerPhaseId?: number;

            /** Which game variable stores ??? */
            phaseVarId?: number;

            /** Which game variable stores ??? */
            battlePhaseVarId?: number;

            /** ??? */
            playerPhaseVarId?: number;

            /** Which game variable stores the ongoing/last battle's turn count */
            turnCountVarId?: number;

            /** Whether the battle is lost */
            isDefeated?: boolean;
        }
        /**
         * Extract effects from a weapon's qualities.
         * @param weaponId from TEW.DATABASE.WEAPONS.IDS
         * @returns Weapon's in-battle effects
         */
        getWeaponQualityEffects?: (weaponId: string) => {
            /** Modifier applied to dice rolls when attacking (before success/failure) */
            attackMod: number;

            /** Modifier applied to dice rolls when defending (before success/failure) */
            defenceMod: number;

            /** Modifier applied to SL when attacking (after success) */
            attackBonusDR: number; // TODO rename to SL

            /** Modifier applied to SL when defending (after success/failure) */
            defenceBonusDR: number; // TODO rename to SL

            /** Bonus armor points when defending */
            bonusPA: number;

            /** Ignored armor points when attacking */
            ignoredPA: number;

            /** Ignored armor types when attacking */
            ignoredArmorTypes: ArmorGroup[];

            /** Standalone effects to be checked for at different steps of the battle phase */
            effects: Partial<Record<keyof typeof WeaponQuality, boolean>>;

            /** SLASH quality level */
            slashLevel: number;
        };

        /**
         * Extract battle info from a combination of armors
         * @param armorIds from TEW.DATABASE.ARMORS.IDS
         * @returns Armor types and PAs for each location
         */
        getArmorInfos?: (armorIds: string[]) => {
            headModifier: {
                type: ArmorGroup;
                modifier: number;
            }[];
            bodyModifier: {
                type: ArmorGroup;
                modifier: number;
            }[];
            legsModifier: {
                type: ArmorGroup;
                modifier: number;
            }[];
            armsModifier: {
                type: ArmorGroup;
                modifier: number;
            }[];
        };

        /**
         * Find the competence value associated with a weapon group.
         * If the battler does not have that competence, this function returns its base weapon or ballistic skill.
         * @param battler Game_BattlerBase
         * @param weaponGroup from TEW.DATABASE.WEAPONS.GROUP_IDS
         * @param isMelee true if the weapon is melee, false if it is ranged
         * @returns Whether the battler has the right competence and the effective value
         */
        getCombatCompOrDefault?: (battler: Game_BattlerBase, weaponGroup: WeaponGroup, isMelee: boolean) => {
            /**
             * True if the battler has the competence matching weaponGroup
             */
            match: boolean;
            /**
             * Competence value used by the battler when fighting with this weaponGroup
             */
            value: number;
        };

        /**
         * Find the weapon object from its ID.
         * @param weaponId from TEW.DATABASE.WEAPONS.IDS
         * @returns A weapon object
         */
        getWeaponFromId?: (weaponId: string) => MeleeWeapon | RangedWeapon;
    };

    /** RMMV base functions stored for overriding */
    MEMORY?: Record<string, any>;
} = {};
export default TEW;
