import { Stat } from "./enum";

export type Talent = {
    name: string;
    description : string;
    maxTaken : number | Stat;
}
