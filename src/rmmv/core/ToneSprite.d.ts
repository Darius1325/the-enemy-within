// ----------------------
// ToneSprite

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";

/**
 * The sprite which changes the screen color in 2D canvas mode.
 * Extends `PIXI.DisplayObject` for compatibility with rendering operations.
 */
export declare class ToneSprite extends PIXI.DisplayObject {

	// #region ============================== Public methods ============================== //
	/**
	 * Clears the tone effect applied to the screen.
	 */
	public clear(): void;

	/**
	 * Sets the tone of the screen using RGB and grayscale values.
	 * @param {number} r - The red component adjustment.
	 * @param {number} g - The green component adjustment.
	 * @param {number} b - The blue component adjustment.
	 * @param {number} gray - The grayscale adjustment.
	 */
	public setTone(r: number, g: number, b: number, gray: number): void;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Renders the tone effect using the Canvas renderer.
	 * @param {HTMLCanvasElement} renderSession - The rendering session.
	 */
	protected _renderCanvas(renderSession: HTMLCanvasElement): void;

	/**
	 * Renders the tone effect using WebGL.
	 * @param {HTMLCanvasElement} renderSession - The rendering session.
	 */
	protected _renderWebGL(renderSession: HTMLCanvasElement): void;
	// #endregion =========================== Protected methods ============================== //
}