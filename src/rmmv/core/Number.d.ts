//-----------------------------------------------------------------------------
// Number Extensions
export declare interface Number
{
    clamp(min:number, max:number):number;
    mod(n:number):number;
    padZero(length:number):string;
}