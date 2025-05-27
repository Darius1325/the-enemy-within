// ----------------------
// ShaderTilemap

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";
import { Bitmap } from "./Bitmap";
import { Tilemap } from "./Tilemap";

/**
 * The tilemap which displays a 2D tile-based game map using shaders.
 * Extends `Tilemap` to integrate rendering optimizations with WebGL.
 */
export declare class ShaderTilemap extends Tilemap {

	// #region ============================== Public properties ============================== //
	/**
	 * Indicates whether the rendering should use pixel rounding.
	 */
	public roundPixels: boolean;
	// #endregion =========================== Public properties ============================== //
	// ============================== //
	// #region ============================== Public methods ============================== //
	/**
	 * Renders the tilemap using the Canvas renderer.
	 * @param {PIXI.SystemRenderer} renderer - The rendering session.
	 */
	public renderCanvas(renderer: PIXI.SystemRenderer): void;

	/**
	 * Renders the tilemap using WebGL for optimized performance.
	 * @param {PIXI.SystemRenderer} renderer - The rendering session.
	 */
	public renderWebGL(renderer: PIXI.SystemRenderer): void;

	/**
	 * Refreshes the tilemap, updating its appearance and logic.
	 */
	public refresh(): void;

	/**
	 * Updates the tileset used for rendering the tilemap.
	 */
	public refreshTileset(): void;

	/**
	 * Updates the transformation and positioning of the tilemap layers.
	 */
	public updateTransform(): void;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Applies rendering optimizations to the renderer.
	 * @param {PIXI.SystemRenderer} renderer - The renderer to modify.
	 * @returns {PIXI.SystemRenderer} The modified renderer.
	 */
	protected _hackRenderer(renderer: PIXI.SystemRenderer): PIXI.SystemRenderer;

	/**
	 * Creates the tilemap layers for rendering.
	 */
	protected _createLayers(): void;

	/**
	 * Updates the positions of tilemap layers.
	 * @param {number} startX - The starting X position.
	 * @param {number} startY - The starting Y position.
	 */
	protected _updateLayerPositions(startX: number, startY: number): void;

	/**
	 * Paints the tiles at the specified coordinates.
	 * @param {number} startX - The starting tilemap X position.
	 * @param {number} startY - The starting tilemap Y position.
	 * @param {number} x - The specific tile X position.
	 * @param {number} y - The specific tile Y position.
	 */
	protected _paintTiles(startX: number, startY: number, x: number, y: number): void;

	/**
	 * Draws a tile onto a bitmap layer.
	 * @param {Bitmap} layer - The bitmap layer where the tile is drawn.
	 * @param {number} tileId - The ID of the tile.
	 * @param {number} dx - The destination X coordinate.
	 * @param {number} dy - The destination Y coordinate.
	 */
	protected _drawTile(layer: Bitmap, tileId: number, dx: number, dy: number): void;

	/**
	 * Draws a standard tile onto a bitmap layer.
	 * @param {Bitmap} layer - The bitmap layer where the tile is drawn.
	 * @param {number} tileId - The ID of the tile.
	 * @param {number} dx - The destination X coordinate.
	 * @param {number} dy - The destination Y coordinate.
	 */
	protected _drawNormalTile(layer: Bitmap, tileId: number, dx: number, dy: number): void;

	/**
	 * Draws an autotile, handling complex terrain transitions.
	 * @param {Bitmap} layer - The bitmap layer where the tile is drawn.
	 * @param {number} tileId - The ID of the tile.
	 * @param {number} dx - The destination X coordinate.
	 * @param {number} dy - The destination Y coordinate.
	 */
	protected _drawAutotile(layer: Bitmap, tileId: number, dx: number, dy: number): void;

	/**
	 * Draws the table edge for tiles, ensuring proper layering.
	 * @param {Bitmap} layer - The bitmap layer where the table edge is drawn.
	 * @param {number} tileId - The ID of the tile.
	 * @param {number} dx - The destination X coordinate.
	 * @param {number} dy - The destination Y coordinate.
	 */
	protected _drawTableEdge(layer: Bitmap, tileId: number, dx: number, dy: number): void;

	/**
	 * Draws shadows onto the tilemap.
	 * @param {Bitmap} layer - The bitmap layer where the shadow is drawn.
	 * @param {number} shadowBits - The shadow bitmask.
	 * @param {number} dx - The destination X coordinate.
	 * @param {number} dy - The destination Y coordinate.
	 */
	protected _drawShadow(layer: Bitmap, shadowBits: number, dx: number, dy: number): void;
	// #endregion =========================== Protected methods ============================== //
}