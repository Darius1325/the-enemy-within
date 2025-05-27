// ----------------------
// ToneFilter

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";

/**
 * The color matrix filter for WebGL.
 * Extends `PIXI.filters.ColorMatrixFilter` to provide hue, saturation, and tone adjustments.
 */
export declare class ToneFilter extends PIXI.filters.ColorMatrixFilter {

	// #region ============================== Public methods ============================== //
	/**
	 * Resets the color matrix, restoring default tone settings.
	 */
	public reset(): void;

	/**
	 * Adjusts the hue of the filter.
	 * @param {number} value - The hue adjustment value.
	 */
	public adjustHue(value: number): void;

	/**
	 * Adjusts the saturation of the filter.
	 * @param {number} value - The saturation adjustment value.
	 */
	public adjustSaturation(value: number): void;

	/**
	 * Adjusts the red, green, and blue tones of the filter.
	 * @param {number} r - The red component adjustment.
	 * @param {number} g - The green component adjustment.
	 * @param {number} b - The blue component adjustment.
	 */
	public adjustTone(r: number, g: number, b: number): void;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Multiplies the current color matrix by the specified matrix.
	 * @param {number[]} matrix - The matrix to apply.
	 */
	protected _multiplyMatrix(matrix: number[]): void;
	// #endregion =========================== Protected methods ============================== //
}