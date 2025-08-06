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

/**
 * The TEW object contains various constants and methods related to the game "The Enemy Within".
 * It includes information about the database, menus, characters, dice, and combat mechanics.
 */
const TEW: {
    /**
     * The DATABASE property contains various sets of data related to the game.
     * It includes icons, armors, weapons, items, spells, talents, and NPCs.
     */
    DATABASE?: {
    
        /**
         * The ICONS property contains a set of icons used in the game.
         */
        ICONS?: {
            /**
             * The SET property links each icon's ID to an index indicating its position in img/system/IconSet.png
             */
            SET?: Record<string, number>;
        };
        
        /**
         * The ARMORS property contains a set of armors used in the game.
         */
        ARMORS?: {
            /**
             * The SET property contains a set of armors identified by their names.
             */
            SET?: Record<string, Armor>;
            /**
             * The IDS property is a list of all armor IDs.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains the pre-computed decoupled entries of the SET for performance purposes.
             */
            ARRAY?: [string, Armor][];
        };

        /**
         * The WEAPONS property contains a set of weapons used in the game.
         */
        WEAPONS?: {
            /**
             * The SET property contains a set of melee weapons identified by their names.
             */
            MELEE_SET?: Record<string, MeleeWeapon>;
            /**
             * The SET property contains a set of ranged weapons identified by their names.
             */
            RANGED_SET?: Record<string, RangedWeapon>;
            /**
             * The SET property contains a set of ammunition identified by their names.
             */
            AMMO_SET?: Record<string, Ammunition>;
            /**
             * The IDS property is a list of all weapon IDs.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains the pre-computed decoupled entries of MELEE_SET and RANGED_SET, for performance purposes.
             */
            ARRAY?: [string, MeleeWeapon | RangedWeapon][];
            /**
             * The IDS property is a list of all weapon group IDs.
             */
            GROUP_IDS?: string[];
        };

        /**
         * The COMPS property contains a set of competences used in the game.
         */
        COMPS?: {
            /**
             * The SET property contains a set of competences identified by their names.
             */
            SET?: Record<string, Competence>;
            /**
             * The IDS property is a list of all competence IDs.
             */
            IDS?: string[];
            /**
             * The BASE_ARRAY property contains the pre-computed decoupled entries where isBase == true, for performance purposes.
             */
            BASE_ARRAY?: [string, Competence][];
            /**
             * The ADVANCED_ARRAY property contains the pre-computed decoupled entries where isBase == false, for performance purposes.
             */
            ADVANCED_ARRAY?: [string, Competence][];
        };

        /**
         * The ITEMS property contains a set of items used in the game.
         */
        ITEMS?: {
            /**
             * The SET property contains a set of items identified by their names.
             */
            SET?: Record<string, Item>;
            /**
             * The IDS property is a list of all item IDs.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains the pre-computed decoupled entries of the SET for performance purposes.
             */
            ARRAY?: [string, Item][];
        };

        /**
         * The SPELLS property contains a set of spells used in the game.
         */
        SPELLS?: {
            /**
             * The SET property contains a set of spells identified by their names.
             */
            SET?: Record<string, Spell>;
            /**
             * The IDS property is a list of all spell IDs.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains the pre-computed decoupled entries of the SET for performance purposes.
             */
            ARRAY?: [string, Spell][];
        };
        
        /**
         * The TALENTS property contains a set of talents used in the game.
         */
        TALENTS?: {
            /**
             * The SET property contains a set of talents identified by their names.
             */
            SET?: Record<string, Talent>;
            /**
             * The IDS property is a list of all talent IDs.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains the pre-computed decoupled entries of the SET for performance purposes.
             */
            ARRAY?: [string, Talent][];
        };

        /**
         * The NPCS property contains a set of non-player characters (NPCs) used in the game.
         */
        NPCS?: {
            /**
             * The SET property contains a set of NPCs identified by their names.
             */
            SET?: Record<string, NPC>;
        };
    };

    /**
     * The MENU property contains various constants related to the game's menus.
     * It includes command names and menu constants.
     */
    MENU?: {
        /**
         * The COMMAND_NAMES property links internal command number to their respective human-readable name.
         */
        COMMAND_NAMES?: Record<number, string>;
        /**
         * The LINE_HEIGHT property specifies the height of a common line in the menu.
         */
        LINE_HEIGHT?: number;
        /**
         * The STATUS_WINDOW_TOPBAR_HEIGHT property specifies the height of the status window's command window.
         */
        STATUS_WINDOW_TOPBAR_HEIGHT?: number;

        /**
         * the STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT property specifies the height of the status window's bottom bar.
         */
        STATUS_WINDOW_BOTTOM_DESCRIPTION_HEIGHT?: number;
        /**
         * The INVENTORY_WINDOW_TOPBAR_HEIGHT property specifies the height of the inventory window's command window.
         */
        INVENTORY_WINDOW_TOPBAR_HEIGHT?: number;
    };

    /**
     * The CHARACTERS property contains various constants related to the game's characters.
     */
    CHARACTERS?: {
        /**
         * The SET property links character names to their respective ID.
         */
        SET?: Record<string, number>;

        /**
         * The Array property defines the character names.
         */
        ARRAY?: string[];
        /**
         * The STATS property links character stat IDs to their param number.
         */
        STATS?: Record<string, number>;
        /**
         * The STATS_VERBOSE property contains the display names of character stats.
         */
        STATS_VERBOSE?: string[];
        /**
         * The BASE_COMP_VALUES property contains base competence values:
         * 0 for innate competences and -1 (unavailable) for acquired ones.
         */
        BASE_COMP_VALUES?: number[];
    };

    /**
     * The DICE property contains various constants related to the game's dice mechanics.
     */
    DICE?: {
        /**
         * The DIE_10_POINTS property contains a set of points for a 10-sided die.
         */
        DIE_10_POINTS?: [number, number][];
        /**
         * bonus returns the bonus value associated with a stat, i.e. Math.floor(stat / 10)
         * @returns stat bonus
         */
        bonus?: (value: number) => number;
        /**
         * drawLine draws a line on the canvas.
         * It takes a context, start and end points as parameters.
         * @param context the canvas context
         * @param start the starting point of the line
         * @param end the ending point of the line
         * @returns void
         */
        drawLine?: (context: any, start: [number, number], end: [number, number]) => void;
        /**
         * displayDiceRoll displays the result of a dice roll.
         * @returns the roll's result
         */
        displayDiceRoll?: (range?: number) => number;
        /**
         * roll rolls a range-sided die.
         * @returns the result between 1 and range included
         */
        roll?: (range?: number) => number;
        /**
         * rollInitiative rolls a 10-sided die and adds the result to the actor's initiative bonus.
         * Used to determine turn order
         * @returns void
         */
        rollInitiative?: (actor: Game_Actor) => number;
    };

    /**
     * The COMBAT property contains various constants and methods related to the game's combat mechanics.
     */
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
