// ----------------------
// Rectangle

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";

/**
 * Represents a rectangular area defined by x, y, width, and height.
 * Extends `PIXI.Rectangle` for compatibility with rendering operations.
 */
export declare class Rectangle extends PIXI.Rectangle {

// #region ============================== Public static methods ============================== //
    /**
     * Returns an empty rectangle with zero dimensions.
     * @returns {Rectangle} A rectangle with x, y, width, and height set to 0.
     */
    public static emptyRectangle(): Rectangle;
// #endregion =========================== Public static methods ============================== //

// ============================== //
// #region ============================== Public constructor ============================== //
    /**
     * Creates a new `Rectangle` instance with the specified position and dimensions.
     * @param {number} x - The x coordinate of the rectangle.
     * @param {number} y - The y coordinate of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     */
    public constructor(x: number, y: number, width: number, height: number);
// #endregion =========================== Public constructor ============================== //
}