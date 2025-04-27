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
        }
        
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
        }

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
        }

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
        }

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
        }

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
        }
        
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
        }

        /**
         * The NPCS property contains a set of non-player characters (NPCs) used in the game.
         */
        NPCS?: {
            /**
             * The SET property contains a set of NPCs identified by their names.
             */
            SET?: Record<string, NPC>;
        }
    }

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
         * The INVENTORY_WINDOW_TOPBAR_HEIGHT property specifies the height of the inventory window's command window.
         */
        INVENTORY_WINDOW_TOPBAR_HEIGHT?: number;
    }

    /**
     * The CHARACTERS property contains various constants related to the game's characters.
     */
    CHARACTERS?: {
        /**
         * The SET property links character names to their respective ID.
         */
        SET?: Record<string, number>;
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
    }

    /**
     * The DICE property contains various constants related to the game's dice mechanics.
     */
    DICE?: {
        /**
         * The DIE_10_POINTS property contains a set of points for a 10-sided die.
         */
        DIE_10_POINTS?: [number, number][];
        /**
         * drawLine is a function that draws a line on the canvas.
         * It takes a context, start and end points as parameters.
         * @param context the canvas context
         * @param start the starting point of the line
         * @param end the ending point of the line
         * @returns void
         */
        drawLine?: (context: any, start: [number, number], end: [number, number]) => void;
        /**
         * displayDiceRoll is a function that displays the result of a dice roll.
         * @returns void
         */
        displayDiceRoll?: () => number;
        /**
         * rollD100 is a function that rolls a 100-sided die.
         * @returns void
         */
        rollD100?: () => number;
    }

    /**
     * The COMBAT property contains various constants and methods related to the game's combat mechanics.
     */
    COMBAT?: {
        /**
         * The getArmorQualityEffects function returns the effects of armor quality.
         * @param armorId the ID of the armor
         * @returns an object containing the effects of armor quality
         */
        getWeaponQualityEffects: (weaponId: string) => {
            /**
             * The attackMod property specifies the weapon's bonus to attack rolls.
             */
            attackMod: number;
            /**
             * The defenceMod property specifies the weapon's bonus to defence rolls.
             */
            defenceMod: number;
            /**
             * The attackBonusDR property specifies the weapon's bonus DR for attack rolls ('Degré de Réussite' in french).
             */
            attackBonusDR: number;
            /**
             * The defenceBonusDR property specifies the weapon's bonus DR for defence rolls ('Degré de Réussite' in french).
             */
            defenceBonusDR: number;
            /**
             * The bonusPA property specifies the bonus points of armor.
             */
            bonusPA: number;
            /**
             * The ignoredPA property specifies the ignored points of armor.
             */
            ignoredPA: number;
            /**
             * The ignoredArmorTypes property specifies the types of armor that are ignored.
             */
            ignoredArmorTypes: ArmorGroup[];
            /**
             * The effects property specifies some weapon qualities that have special effects.
             * Each effect is represented by a key-value pair, where the key is the name of the effect and the value is a boolean indicating whether the effect is active or not.
             */
            effects: Partial<Record<keyof typeof WeaponQuality, boolean>>;
            /**
             * The slashLevel property specifies the level of a weapon's SLASH quality.
             */
            slashLevel: number;
        };

        /**
         * getArmorInfos is a function that returns the armor information based on the provided armor IDs.
         * @param armorIds the IDs of the armors
         * @returns 
         */
        getArmorInfos: (armorIds: string[]) => {
            /**
             * The headModifier property contains all head armor modifiers.
             * Each modifier is represented by an object containing the type of armor group and the corresponding modifier value.
             */
            headModifier: {
                /**
                 * The type property specifies the armor's group.
                 */
                type: ArmorGroup;
                /**
                 * The modifier property specifies the armor piece's PA.
                 */
                modifier: number;
            }[];
            /**
             * The bodyModifier property contains all body armor modifiers.
             * Each modifier is represented by an object containing the type of armor group and the corresponding modifier value.
             */
            bodyModifier: {
                /**
                 * The type property specifies the armor's group.
                 */
                type: ArmorGroup;
                /**
                 * The modifier property specifies the armor piece's PA.
                 */
                modifier: number;
            }[];
            /**
             * The legsModifier property contains all leg armor modifiers.
             * Each modifier is represented by an object containing the type of armor group and the corresponding modifier value.
             */
            legsModifier: {
                /**
                 * The type property specifies the armor's group.
                 */
                type: ArmorGroup;
                /**
                 * The modifier property specifies the armor piece's PA.
                 */
                modifier: number;
            }[];
            /**
             * The armsModifier property contains all arm armor modifiers.
             * Each modifier is represented by an object containing the type of armor group and the corresponding modifier value.
             */
            armsModifier: {
                /**
                 * The type property specifies the armor's group.
                 */
                type: ArmorGroup;
                /**
                 * The modifier property specifies the armor piece's PA.
                 */
                modifier: number;
            }[];
        };

        /**
         * getCombatCompOrDefault is a function that returns the competence value associated with a weapon group.
         * If the battler does not have that competence, this function returns its base weapon or ballistic skill.
         * @param battler the battler object
         * @param weaponGroup the group of the weapon
         * @param isMelee true if the weapon is melee, false if it is ranged
         * @returns match and value properties
         */
        getCombatCompOrDefault: (battler: any, weaponGroup: WeaponGroup, isMelee: boolean) => {
            /**
             * The match property specifies whether the battler has a competence for this weapon group.
             */
            match: boolean;
            /**
             * The value property specifies the competence value.
             */
            value: number;
        };

        /**
         * getWeaponFromId is a function that returns the weapon object based on the provided weapon ID.
         * @param weaponId the ID of the weapon
         * @returns the weapon object
         */
        getWeaponFromId: (weaponId: string) => MeleeWeapon | RangedWeapon;
    }
} = {};
export default TEW;
