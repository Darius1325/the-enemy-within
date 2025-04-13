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
             * The SET property contains a set of icons identified by their names.
             * Each icon is represented by a string value and its corresponding icon ID.
             */
            SET?: Record<string, number>;
        }
        
        /**
         * The ARMORS property contains a set of armors used in the game.
         * It includes a set of armors identified by their names, an array of armor IDs.
         */
        ARMORS?: {
            /**
             * The SET property contains a set of armors identified by their names.
             * Each armor is represented by a string value and its corresponding armor object.
             */
            SET?: Record<string, Armor>;
            /**
             * The IDS property contains an array of armor IDs.
             * Each ID is represented as a string value.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains an array of armor objects.
             * Each object is represented as a tuple containing the armor ID and the corresponding armor object.
             */
            ARRAY?: [string, Armor][];
        }

        /**
         * The WEAPONS property contains a set of weapons used in the game.
         * It includes a set of melee weapons, ranged weapons, ammunition, weapon IDs, an array of weapon objects and a list of group IDs.
         */
        WEAPONS?: {
            /**
             * The SET property contains a set of melee weapons identified by their names.
             * Each melee weapon is represented by a string value and its corresponding melee weapon object.
             */
            MELEE_SET?: Record<string, MeleeWeapon>;
            /**
             * The SET property contains a set of ranged weapons identified by their names.
             * Each ranged weapon is represented by a string value and its corresponding ranged weapon object.
             */
            RANGED_SET?: Record<string, RangedWeapon>;
            /**
             * The SET property contains a set of ammunition identified by their names.
             * Each ammunition is represented by a string value and its corresponding ammunition object.
             */
            AMMO_SET?: Record<string, Ammunition>;
            /**
             * The IDS property contains an array of weapon IDs.
             * Each ID is represented as a string value.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains an array of weapon objects.
             * Each object is represented as a tuple containing the weapon ID and the corresponding weapon object.
             */
            ARRAY?: [string, MeleeWeapon | RangedWeapon][];
            /**
             * The IDS property contains an array of group IDs.
             * Each ID is represented as a string value.
             */
            GROUP_IDS?: string[];
        }

        /**
         * The COMPS property contains a set of competences used in the game.
         * It includes a set of competences identified by their names, an array of competence IDs, and two arrays of competence objects, one for the basic ones, the other for the advanced.
         */
        COMPS?: {
            /**
             * The SET property contains a set of competences identified by their names.
             * Each competence is represented by a string value and its corresponding competence object.
             */
            SET?: Record<string, Competence>;
            /**
             * The IDS property contains an array of competence IDs.
             * Each ID is represented as a string value.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains an array of basic competence objects.
             * Each object is represented as a tuple containing the competence ID and the corresponding competence object.
             */
            BASE_ARRAY?: [string, Competence][];
            /**
             * The ARRAY property contains an array of advanced competence objects.
             * Each object is represented as a tuple containing the competence ID and the corresponding competence object.
             */
            ADVANCED_ARRAY?: [string, Competence][];
        }

        /**
         * The ITEMS property contains a set of items used in the game.
         * It includes a set of items identified by their names, an array of item IDs, and an array of item objects.
         */
        ITEMS?: {
            /**
             * The SET property contains a set of items identified by their names.
             * Each item is represented by a string value and its corresponding item object.
             */
            SET?: Record<string, Item>;
            /**
             * The IDS property contains an array of item IDs.
             * Each ID is represented as a string value.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains an array of item objects.
             * Each object is represented as a tuple containing the item ID and the corresponding item object.
             */
            ARRAY?: [string, Item][];
        }

        /**
         * The SPELLS property contains a set of spells used in the game.
         * It includes a set of spells identified by their names, an array of spell IDs, and an array of spell objects.
         */
        SPELLS?: {
            /**
             * The SET property contains a set of spells identified by their names.
             * Each spell is represented by a string value and its corresponding spell object.
             */
            SET?: Record<string, Spell>;
            /**
             * The IDS property contains an array of spell IDs.
             * Each ID is represented as a string value.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains an array of spell objects.
             * Each object is represented as a tuple containing the spell ID and the corresponding spell object.
             */
            ARRAY?: [string, Spell][];
        }
        
        /**
         * The TALENTS property contains a set of talents used in the game.
         * It includes a set of talents identified by their names, an array of talent IDs, and an array of talent objects.
         */
        TALENTS?: {
            /**
             * The SET property contains a set of talents identified by their names.
             * Each talent is represented by a string value and its corresponding talent object.
             */
            SET?: Record<string, Talent>;
            /**
             * The IDS property contains an array of talent IDs.
             * Each ID is represented as a string value.
             */
            IDS?: string[];
            /**
             * The ARRAY property contains an array of talent objects.
             * Each object is represented as a tuple containing the talent ID and the corresponding talent object.
             */
            ARRAY?: [string, Talent][];
        }

        /**
         * The NPCS property contains a set of non-player characters (NPCs) used in the game.
         * It includes a set of NPCs identified by their names.
         */
        NPCS?: {
            /**
             * The SET property contains a set of NPCs identified by their names.
             * Each NPC is represented by a string value and its corresponding NPC object.
             */
            SET?: Record<string, NPC>;
        }
    }

    /**
     * The MENU property contains various constants related to the game's menus.
     * It includes command names, menu constants.
     */
    MENU?: {
        /**
         * The COMMAND_NAMES property contains a set of command names used in the game.
         * Each command is represented by a number and its corresponding name.
         */
        COMMAND_NAMES?: Record<number, string>;
        /**
         * The LINE_HEIGHT property specifies the height of a common line in the menu.
         */
        LINE_HEIGHT?: number;
        /**
         * the STATUS_WINDOW_TOPBAR_HEIGHT property specifies the height of the status window's command window.
         */
        STATUS_WINDOW_TOPBAR_HEIGHT?: number;
        /**
         * The inVENTORY_WINDOW_TOPBAR_HEIGHT property specifies the height of the inventory window's command window.
         */
        INVENTORY_WINDOW_TOPBAR_HEIGHT?: number;
    }

    /**
     * The CHARACTERS property contains various constants related to the game's characters.
     * It includes a set of character IDs, a set of character stats, a set of character stats in verbose format, and a set of base competence values.
     */
    CHARACTERS?: {
        /**
         * The SET property contains a set of character IDs.
         * Each character is represented by a string value and its corresponding ID.
         */
        SET?: Record<string, number>;
        /**
         * The STATS property contains a set of character stats.
         * Each stat is represented by a string value and its corresponding value.
         */
        STATS?: Record<string, number>;
        /**
         * The STATS_VERBOSE property contains a set of character stats in verbose format.
         */
        STATS_VERBOSE?: string[];
        /**
         * The BASE_COMP_VALUES property contains a set of base competence values.
         * Each value is represented as a number.
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
             * The attackMod property specifies the attack modifier of the weapon.
             */
            attackMod: number;
            /**
             * The defenceMod property specifies the defence modifier of the weapon.
             */
            defenceMod: number;
            /**
             * The attackBonusDR property specifies the attack bonus linked to the degree of success ("Degré de Réussite" in french).
             */
            attackBonusDR: number;
            /**
             * The defenceBonusDR property specifies the defence bonus linked to the degree of success ("Degré de Réussite" in french).
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
             * The effects property specifies the effects of the weapon quality.
             * Each effect is represented by a key-value pair, where the key is the name of the effect and the value is a boolean indicating whether the effect is active or not.
             */
            effects: Partial<Record<keyof typeof WeaponQuality, boolean>>;
            /**
             * The slashLevel property specifies the slash level of the weapon.
             * It is used to determine the type of damage dealt by the weapon.
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
             * The headModifier property specifies the head modifier of the armor.
             * Each modifier is represented by an object containing the type of armor group and the corresponding modifier value.
             */
            headModifier: {
                /**
                 * The type property specifies the type of armor group.
                 */
                type: ArmorGroup;
                /**
                 * The modifier property specifies the modifier of the armor group.
                 */
                modifier: number;
            }[];
            /**
             * The bodyModifier property specifies the body modifier of the armor.
             * Each modifier is represented by an object containing the type of armor group and the corresponding modifier value.
             */
            bodyModifier: {
                /**
                 * The type property specifies the type of armor group.
                 */
                type: ArmorGroup;
                /**
                 * The modifier property specifies the modifier of the armor group.
                 */
                modifier: number;
            }[];
            /**
             * The legsModifier property specifies the legs modifier of the armor.
             * Each modifier is represented by an object containing the type of armor group and the corresponding modifier value.
             */
            legsModifier: {
                /**
                 * The type property specifies the type of armor group.
                 */
                type: ArmorGroup;
                /**
                 * The modifier property specifies the modifier of the armor group.
                 */
                modifier: number;
            }[];
            /**
             * The armsModifier property specifies the arms modifier of the armor.
             * Each modifier is represented by an object containing the type of armor group and the corresponding modifier value.
             */
            armsModifier: {
                /**
                 * The type property specifies the type of armor group. 
                 */
                type: ArmorGroup;
                /**
                 * The modifier property specifies the modifier of the armor group.
                 */
                modifier: number;
            }[];
        };

        /**
         * getArmorCompOrDefault is a function that returns the armor competence or default value based on the provided parameters.
         * @param battler the battler object
         * @param weaponGroup the group of the weapon
         * @param isMelee true if the weapon is melee, false if it is ranged
         * @returns match and value properties
         */
        getCombatCompOrDefault: (battler: any, weaponGroup: WeaponGroup, isMelee: boolean) => {
            /**
             * The match property specifies whether the competence matches the weapon group.
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
