interface RPG_Audio
{
	name:string;
    pan:number;
    pitch:number;
    volume:number;
}

interface RPG_CachedAudio extends RPG_Audio
{
	pos:number;
}

export interface BGM extends RPG_Audio {}

export interface BGS extends RPG_Audio {}

export interface ME extends RPG_Audio {}

export interface SE extends RPG_Audio {}

export interface BGM_Cached extends RPG_CachedAudio {}

export interface BGS_Cached extends RPG_CachedAudio {}

export interface ME_Cached extends RPG_CachedAudio {}

export interface SE_Cached extends RPG_CachedAudio {}