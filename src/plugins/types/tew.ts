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

const TEW: {
    // Constants
    DATABASE?: {

        CHARACTERS?: {
            SET?: Record<string, number>;
            STATS?: Record<string, number>;
            STATS_VERBOSE?: string[];
            BASE_COMP_VALUES?: number[];
        }
    
        ICONS?: {
            SET?: Record<string, number>;
        }
        
        ARMORS?: {
            SET?: Record<string, Armor>;
            IDS?: string[];
            ARRAY?: [string, Armor][];
        }

        WEAPONS?: {
            MELEE_SET?: Record<string, MeleeWeapon>;
            RANGED_SET?: Record<string, RangedWeapon>;
            AMMO_SET?: Record<string, Ammunition>;
            IDS?: string[];
            ARRAY?: [string, MeleeWeapon | RangedWeapon][];
            GROUP_IDS?: string[];
        }

        COMPS?: {
            SET?: Record<string, Competence>;
            IDS?: string[];
            BASE_ARRAY?: [string, Competence][];
            ADVANCED_ARRAY?: [string, Competence][];
        }

        ITEMS?: {
            SET?: Record<string, Item>;
            IDS?: string[];
            ARRAY?: [string, Item][];
        }

        SPELLS?: {
            SET?: Record<string, Spell>;
            IDS?: string[];
            ARRAY?: [string, Spell][];
        }
        
        TALENTS?: {
            SET?: Record<string, Talent>;
            IDS?: string[];
            ARRAY?: [string, Talent][];
        }

        NPCS?: {
            SET?: Record<string, NPC>;
        }
    }

    // Menus
    MENU?: {
        COMMAND_NAMES?: Record<number, string>;
    
        MENU_LINE_HEIGHT?: number;
        STATUS_WINDOW_TOPBAR_HEIGHT?: number;
    }

    // Dice
    DICE?: {
        DIE_10_POINTS?: [number, number][];
        drawLine?: (context: any, start: [number, number], end: [number, number]) => void;
        displayDiceRoll?: () => number;
        rollD100?: () => number;
    }

    COMBAT?: {
        getWeaponQualityEffects: (weaponId: string) => {
            attackMod: number;
            defenceMod: number;
            attackBonusDR: number;
            defenceBonusDR: number;
            bonusPA: number;
            ignoredPA: number;
            ignoredArmorTypes: ArmorGroup[];
            effects: Partial<Record<keyof typeof WeaponQuality, boolean>>;
            slashLevel: number;
        };

        getArmorInfos: (armorIds: string[]) => {
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

        getCombatCompOrDefault: (battler: any, weaponGroup: WeaponGroup, isMelee: boolean) => {
            match: boolean;
            value: number;
        };

        getWeaponFromId: (weaponId: string) => MeleeWeapon | RangedWeapon;
    }
} = {};
export default TEW;
