export interface DataCommonEvent
{
	id:number;
	list:EventItem[];
	name:string;
	switchId:number;
	trigger:number;
}

export interface EventItem
{
    code:number;
    indent:number;
    parameters:number[];
}