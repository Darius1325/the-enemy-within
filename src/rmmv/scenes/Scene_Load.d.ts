//-----------------------------------------------------------------------------
// Scene_Load
//
// The scene class of the load screen.
export declare class Scene_Load extends Scene_File
{
	protected _loadSuccess: boolean;
	
	public onLoadSuccess(): void;
	public onLoadFailure(): void;
	public reloadMapIfUpdated(): void;
}