import { CareerClass, CareerStatusTier, Stat } from "./enum";

export type CareerStatus = {
    tier: CareerStatusTier;
    level: number;
};

export type CareerPathLevel = {
    /** Career ID, as found in TEW.DATABASE.CAREERS.SET */
    career: string;
    /** Career level within the path, from 1 to 4 */
    level: number;
};

export type CareerPath = {
    name: string;
    class: CareerClass;
    levels: CareerPathLevel[];
    isMagical: boolean;
};

export type Career = {
    name: string;
    level: number;
    path: CareerPath;
    status: CareerStatus;
    improvableStats: Stat[];
    /** Concrete competence IDs the career grants outright, unique */
    competences: string[];
    /**
     * Wildcard competence entries, one per pick the career grants
     * A career granting two picks of the same group lists it twice
     * @example ["LORE_ANY", "LORE_ANY", "MELEE_ANY"]
     * @see {@link ./specialisation.ts#AnySlot}
     */
    groupCompetences: string[];
    /** Concrete talent IDs the career grants outright, unique */
    talents: string[];
    /** Wildcard talent entries, one per pick the career grants, same convention */
    groupTalents: string[];
    /** Derived at load from the presence of Language (Magick) */
    isMagical: boolean;
};
