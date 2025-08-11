// ----------------------
// ScreenSprite

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";
import { Bitmap } from "./Bitmap";

/**
 * The sprite that covers the entire game screen.
 * Extends `PIXI.Sprite` for compatibility with rendering operations.
 */
export declare class ScreenSprite extends PIXI.Sprite {

	// #region ============================== Public properties ============================== //
	/**
	 * The opacity of the screen sprite.
	 */
	public opacity: number;
	// #endregion =========================== Public properties ============================== //
	// ============================== //
	// #region ============================== Protected properties ============================== //
	/**
	 * The bitmap used for rendering the screen sprite.
	 */
	protected _bitmap: Bitmap;

	/**
	 * The red color component of the sprite.
	 */
	protected _red: number;

	/**
	 * The green color component of the sprite.
	 */
	protected _green: number;

	/**
	 * The blue color component of the sprite.
	 */
	protected _blue: number;
	// #endregion =========================== Protected properties ============================== //
	// ============================== //
	// #region ============================== Public methods ============================== //
	/**
	 * Sets the sprite color to black.
	 */
	public setBlack(): void;

	/**
	 * Sets the sprite color to white.
	 */
	public setWhite(): void;

	/**
	 * Sets the sprite color using RGB values.
	 * @param {number} r - The red component (0-255).
	 * @param {number} g - The green component (0-255).
	 * @param {number} b - The blue component (0-255).
	 */
	public setColor(r: number, g: number, b: number): void;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Renders the sprite using the Canvas renderer.
	 * @param {PIXI.SystemRenderer} renderSession - The rendering session.
	 */
	protected _renderCanvas(renderSession: PIXI.SystemRenderer): void;
	// #endregion =========================== Protected methods ============================== //
}