// ----------------------
// Point

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";

/**
 * Represents a two-dimensional point with x and y coordinates.
 * Extends `PIXI.Point` for compatibility with rendering operations.
 */
export declare class Point extends PIXI.Point {

// #region ============================== Public constructor ============================== //
    /**
     * Creates a new `Point` instance with the specified x and y coordinates.
     * @param {number} x - The x coordinate of the point.
     * @param {number} y - The y coordinate of the point.
     */
    public constructor(x: number, y: number);
// #endregion =========================== Public constructor ============================== //
}