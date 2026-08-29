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
};

export type Career = {
    name: string;
    level: number;
    path: CareerPath;
    status: CareerStatus;
    improvableStats: Stat[];
    competences: string[];
    talents: string[];
    isMagical: boolean;
};
