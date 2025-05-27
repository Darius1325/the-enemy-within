// ----------------------
// Sprite

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";
import { Bitmap } from "./Bitmap";
import { Point } from "./Point";
import { Rectangle } from "./Rectangle";

/**
 * The basic object that is rendered to the game screen.
 * Extends `PIXI.Sprite` for compatibility with rendering operations.
 */
export declare class Sprite extends PIXI.Sprite {

// #region ============================== Protected static properties ============================== //
    /**
     * Tracks the number of created sprite instances.
     */
    protected static _counter: number;
// #endregion =========================== Protected static properties ============================== //

// ============================== //
// #region ============================== Public properties ============================== //
    /**
     * The bitmap image associated with this sprite.
     */
    public bitmap: Bitmap;

    /**
     * Indicates whether the sprite is fully opaque.
     */
    public opaque: boolean;

    /**
     * Unique identifier for the sprite instance.
     */
    public spriteId: number;

    /**
     * The width of the sprite.
     */
    public width: number;

    /**
     * The height of the sprite.
     */
    public height: number;

    /**
     * The opacity level of the sprite (0-255).
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
     * The rectangle defining the sprite’s frame.
     */
    protected _frame: Rectangle;

    /**
     * The actual frame used for rendering calculations.
     */
    protected _realFrame: Rectangle;

    /**
     * The offset position of the sprite.
     */
    protected _offset: Point;

    /**
     * The blend color applied to the sprite.
     */
    protected _blendColor: number[];

    /**
     * The color tone applied to the sprite.
     */
    protected _colorTone: number[];

    /**
     * The canvas used for rendering operations.
     */
    protected _canvas: PIXI.SystemRenderer;

    /**
     * The context associated with the rendering canvas.
     */
    protected _context: CanvasRenderingContext2D;

    /**
     * The base texture used for tinting effects.
     */
    protected _tintTexture: PIXI.BaseTexture;
// #endregion =========================== Protected properties ============================== //

// ============================== //
// #region ============================== Public methods ============================== //
    /**
     * Updates the sprite’s logic and rendering properties.
     */
    public update(): void;

    /**
     * Moves the sprite to a specified position.
     * @param {number} x - The new x-coordinate.
     * @param {number} y - The new y-coordinate.
     */
    public move(x: number, y: number): void;

    /**
     * Sets the display frame of the sprite.
     * @param {number} x - The x position of the frame.
     * @param {number} y - The y position of the frame.
     * @param {number} width - The width of the frame.
     * @param {number} height - The height of the frame.
     */
    public setFrame(x: number, y: number, width: number, height: number): void;

    /**
     * Retrieves the current blend color applied to the sprite.
     * @returns {number[]} The blend color as an array `[r, g, b, a]`.
     */
    public getBlendColor(): number[];

    /**
     * Sets the blend color for the sprite.
     * @param {number[]} color - The blend color `[r, g, b, a]`.
     */
    public setBlendColor(color: number[]): void;

    /**
     * Retrieves the current color tone of the sprite.
     * @returns {number[]} The color tone as an array `[r, g, b, gray]`.
     */
    public getColorTone(): number[];

    /**
     * Sets the color tone for the sprite.
     * @param {number[]} color - The color tone `[r, g, b, gray]`.
     */
    public setColorTone(color: number[]): void;

    /**
     * Updates the transformation properties of the sprite.
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
     * Refreshes the sprite’s properties and appearance.
     */
    protected _refresh(): void;

    /**
     * Checks if the given coordinates fit within the bitmap rectangle.
     * @param {number} x - The x coordinate.
     * @param {number} y - The y coordinate.
     * @param {number} w - The width.
     * @param {number} h - The height.
     * @returns {boolean} True if within the bitmap rect, false otherwise.
     */
    protected _isInBitmapRect(x: number, y: number, w: number, h: number): boolean;

    /**
     * Determines if the sprite requires tinting.
     * @returns {boolean} True if tinting is needed, false otherwise.
     */
    protected _needsTint(): boolean;

    /**
     * Creates a tinting effect for the sprite.
     * @param {number} w - The width of the tint effect.
     * @param {number} h - The height of the tint effect.
     */
    protected _createTinter(w: number, h: number): void;

    /**
     * Applies the tint effect to the sprite.
     * @param {number} x - The x position of the tint effect.
     * @param {number} y - The y position of the tint effect.
     * @param {number} w - The width of the tint effect.
     * @param {number} h - The height of the tint effect.
     */
    protected _executeTint(x: number, y: number, w: number, h: number): void;

    /**
     * Renders the sprite using WebGL optimizations.
     */
    protected _renderWebGL(): void;
// #endregion =========================== Protected methods ============================== //
}