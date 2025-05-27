// ----------------------
// TilingSprite

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";
import { Bitmap } from "./Bitmap";
import { Point } from "./Point";
import { Rectangle } from "./Rectangle";

/**
 * The sprite object for a tiling image.
 * Extends `PIXI.Container` for compatibility with rendering operations.
 */
export declare class TilingSprite extends PIXI.Container {

	// #region ============================== Public properties ============================== //
	/**
	 * The origin point of the tiling sprite, defining its starting position.
	 */
	public origin: Point;

	/**
	 * The bitmap image associated with this tiling sprite.
	 */
	public bitmap: Bitmap;

	/**
	 * The opacity level of the tiling sprite (0-255).
	 */
	public opacity: number;
	// #endregion =========================== Public properties ============================== //
	// ============================== //
	// #region ============================== Protected properties ============================== //
	/**
	 * Internal bitmap used for rendering.
	 */
	protected _bitmap: Bitmap;

	/**
	 * The width of the tiling sprite.
	 */
	protected _width: number;

	/**
	 * The height of the tiling sprite.
	 */
	protected _height: number;

	/**
	 * The rectangle defining the sprite’s frame.
	 */
	protected _frame: Rectangle;
	// #endregion =========================== Protected properties ============================== //
	// ============================== //
	// #region ============================== Public constructor ============================== //
	/**
	 * Creates a new `TilingSprite` instance with the specified bitmap.
	 * @param {Bitmap} bitmap - The bitmap used for rendering the tiling sprite.
	 */
	public constructor(bitmap: Bitmap);
	// #endregion =========================== Public constructor ============================== //
	// ============================== //
	// #region ============================== Public methods ============================== //
	/**
	 * Moves the tiling sprite to a specified position and resizes it.
	 * @param {number} x - The new x-coordinate.
	 * @param {number} y - The new y-coordinate.
	 * @param {number} width - The new width of the tiling sprite.
	 * @param {number} height - The new height of the tiling sprite.
	 */
	public move(x: number, y: number, width: number, height: number): void;

	/**
	 * Sets the display frame of the tiling sprite.
	 * @param {number} x - The x position of the frame.
	 * @param {number} y - The y position of the frame.
	 * @param {number} width - The width of the frame.
	 * @param {number} height - The height of the frame.
	 */
	public setFrame(x: number, y: number, width: number, height: number): void;

	/**
	 * Updates the transformation properties of the tiling sprite.
	 */
	public updateTransform(): void;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Executes operations once the bitmap is loaded.
	 */
	protected _onBitmapLoad(): void;

	/**
	 * Refreshes the tiling sprite’s properties and appearance.
	 */
	protected _refresh(): void;
	// #endregion =========================== Protected methods ============================== //
}