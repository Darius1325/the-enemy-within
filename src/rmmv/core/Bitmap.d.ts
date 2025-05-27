// ----------------------
// Bitmap

// ----------------------
// Imports
// ----------------------
import { Rectangle } from "../../../src/rmmv/core/Rectangle";
import { Stage } from "../../../src/rmmv/core/Stage";
import { PIXI } from "../../../src/rmmv/pixi";

/**
 * Represents a basic image object used for rendering and manipulation.
 * Provides methods for loading, modifying, and drawing images within the game engine.
 */
export declare class Bitmap {
    // #region ============================== static methods ============================== //
    /**
     * Loads a bitmap from the specified URL.
     * @param {string} url - The URL of the image file to load.
     * @returns {Bitmap} The loaded Bitmap object.
     */
    public static load(url: string): Bitmap;

    /**
     * Captures a snapshot of the given stage and returns it as a Bitmap.
     * @param {Stage} stage - The stage to capture.
     * @returns {Bitmap} A Bitmap representation of the captured stage.
     */
    public static snap(stage: Stage): Bitmap;
    // #endregion =========================== static methods ============================== //
    // ============================== //
    // #region ============================== public properties ============================== //
    /**
     * The base texture used for rendering the bitmap.
     */
    public baseTexture: PIXI.BaseTexture;

    /**
     * The canvas element used for rendering the bitmap.
     */
    public canvas: HTMLCanvasElement;

    /**
     * The rendering context associated with the canvas.
     */
    public context: CanvasRenderingContext2D;

    /**
     * The font face used for text rendering.
     */
    public fontFace: string;

    /**
     * The font size used for text rendering.
     */
    public fontSize: number;

    /**
     * Indicates whether the font is italicized.
     */
    public fontItalic: boolean;

    /**
     * The height of the bitmap.
     */
    public height: number;

    /**
     * The outline color used for text rendering.
     */
    public outlineColor: string;

    /**
     * The width of the outline applied to text.
     */
    public outlineWidth: number;

    /**
     * The opacity level used for painting operations.
     */
    public paintOpacity: number;

    /**
     * The rectangular region associated with the bitmap.
     */
    public rect: Rectangle;

    /**
     * Indicates whether the bitmap should be smoothed when scaled.
     */
    public smooth: boolean;

    /**
     * The color of the text rendered on the bitmap.
     */
    public textColor: string;

    /**
     * The URL of the source image.
     */
    public url: string;

    /**
     * The width of the bitmap.
     */
    public width: number;
    // #endregion =========================== public properties ============================== //
    // ============================== //
    // #region ============================== protected properties ============================== //
    /**
     * The internal canvas element used for off-screen rendering.
     */
    protected _canvas: HTMLCanvasElement;

    /**
     * The rendering context associated with the internal canvas.
     */
    protected _context: CanvasRenderingContext2D;

    /**
     * The base texture for rendering operations.
     */
    protected _baseTexture: PIXI.BaseTexture;

    /**
     * The image element containing the bitmap's source data.
     */
    protected _image: HTMLImageElement;

    /**
     * The URL of the image source.
     */
    protected _url: string;

    /**
     * The opacity level used for internal painting operations.
     */
    protected _paintOpacity: number;

    /**
     * Indicates whether smoothing is applied to the bitmap when rendered.
     */
    protected _smooth: boolean;

    /**
     * A list of functions to call when the bitmap finishes loading.
     */
    protected _loadListeners: Function[];

    /**
     * Indicates if the bitmap is currently in the process of loading.
     */
    protected _isLoading: boolean;

    /**
     * Indicates if an error occurred while loading the bitmap.
     */
    protected _hasError: boolean;
    // #endregion =========================== protected properties ============================== //
    // ============================== //
    // #region ============================== constructor ============================== //
    /**
     * Constructor for creating a new bitmap.
     * @param {number} [width] - The width of the bitmap.
     * @param {number} [height] - The height of the bitmap.
     */
    public constructor(width?: number, height?: number);
    // #endregion =========================== constructor ============================== //
    // ============================== //
    // #region ============================== public methods ============================== //
    /**
     * Determines if the bitmap is fully loaded and ready for use.
     * @returns {boolean} True if the bitmap is ready, false otherwise.
     */
    public isReady(): boolean;

    /**
     * Checks if an error occurred while loading the bitmap.
     * @returns {boolean} True if an error occurred, false otherwise.
     */
    public isError(): boolean;

    /**
     * Resizes the bitmap to the specified width and height.
     * @param {number} width - The new width of the bitmap.
     * @param {number} height - The new height of the bitmap.
     */
    public resize(width: number, height: number): void;

    /**
     * Performs a block transfer operation, copying pixels from one bitmap to another.
     * @param {Bitmap} source - The source bitmap.
     * @param {number} sx - The source X position.
     * @param {number} sy - The source Y position.
     * @param {number} sw - The source width.
     * @param {number} sh - The source height.
     * @param {number} dx - The destination X position.
     * @param {number} dy - The destination Y position.
     * @param {number} [dw] - The destination width.
     * @param {number} [dh] - The destination height.
     */
    public blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw?: number, dh?: number): void;

    /**
     * Retrieves the color of the specified pixel.
     * @param {number} x - The X coordinate of the pixel.
     * @param {number} y - The Y coordinate of the pixel.
     * @returns {string} The color of the pixel in hexadecimal format.
     */
    public getPixel(x: number, y: number): string;

    /**
     * Retrieves the alpha value of the specified pixel.
     * @param {number} x - The X coordinate of the pixel.
     * @param {number} y - The Y coordinate of the pixel.
     * @returns {number} The alpha transparency of the pixel.
     */
    public getAlphaPixel(x: number, y: number): number;

    /**
     * Clears the specified rectangular region of the bitmap.
     * @param {number} x - The X coordinate of the rectangle.
     * @param {number} y - The Y coordinate of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     */
    public clearRect(x: number, y: number, width: number, height: number): void;

    /**
     * Clears the entire bitmap.
     */
    public clear(): void;

    /**
     * Draws a filled rectangle onto the bitmap.
     * @param {number} x - The X coordinate of the rectangle.
     * @param {number} y - The Y coordinate of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     * @param {string} color - The fill color.
     */
    public fillRect(x: number, y: number, width: number, height: number, color: string): void;

    /**
     * Fills the entire bitmap with a specified color.
     * @param {string} color - The fill color.
     */
    public fillAll(color: string): void;

    /**
     * Draws a gradient-filled rectangle onto the bitmap.
     * @param {number} x - The X coordinate of the rectangle.
     * @param {number} y - The Y coordinate of the rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     * @param {string} color1 - The start gradient color.
     * @param {string} color2 - The end gradient color.
     * @param {boolean} vertical - Whether the gradient is vertical or horizontal.
     */
    public gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void;

    /**
     * Draws a filled circle onto the bitmap.
     * @param {number} x - The X coordinate of the circle center.
     * @param {number} y - The Y coordinate of the circle center.
     * @param {number} radius - The radius of the circle.
     * @param {string} color - The fill color.
     */
    public drawCircle(x: number, y: number, radius: number, color: string): void;

    /**
     * Draws text onto the bitmap.
     * @param {string} text - The text to display.
     * @param {number} x - The X coordinate where the text starts.
     * @param {number} y - The Y coordinate where the text starts.
     * @param {number} maxWidth - The maximum width for the text.
     * @param {number} lineHeight - The height of the text line.
     * @param {string} align - The alignment of the text.
     */
    public drawText(text: string, x: number, y: number, maxWidth: number, lineHeight: number, align: string): void;

    /**
     * Measures the width of the given text when rendered.
     * @param {string} text - The text to measure.
     * @returns {number} The width of the text.
     */
    public measureTextWidth(text: string): number;

	    /**
     * Adjusts the tone of the bitmap by modifying the red, green, and blue channels.
     * @param {number} r - The red channel adjustment (-255 to 255).
     * @param {number} g - The green channel adjustment (-255 to 255).
     * @param {number} b - The blue channel adjustment (-255 to 255).
     */
    public adjustTone(r: number, g: number, b: number): void;

    /**
     * Rotates the hue of the bitmap by a given offset.
     * @param {number} offset - The hue rotation offset (0 to 360).
     */
    public rotateHue(offset: number): void;

    /**
     * Applies a blur effect to the bitmap.
     */
    public blur(): void;

    /**
     * Adds a callback function to be executed once the bitmap is loaded.
     * @param {Function} callback - The function to be called upon successful loading.
     */
    public addLoadListener(callback: Function): void;
    // #endregion =========================== public methods ============================== //
    // ============================== //
    // #region ============================== protected methods ============================== //
    /**
     * Generates the font name string used for text rendering.
     * @returns {string} The formatted font name.
     */
    protected _makeFontNameText(): string;

    /**
     * Draws the text outline onto the bitmap.
     * @param {string} text - The text to outline.
     * @param {number} tx - The X coordinate for the text.
     * @param {number} ty - The Y coordinate for the text.
     * @param {number} maxWidth - The maximum width of the text.
     */
    protected _drawTextOutline(text: string, tx: number, ty: number, maxWidth: number): void;

    /**
     * Draws the main body of the text onto the bitmap.
     * @param {string} text - The text to display.
     * @param {number} tx - The X coordinate for the text.
     * @param {number} ty - The Y coordinate for the text.
     * @param {number} maxWidth - The maximum width of the text.
     */
    protected _drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void;

    /**
     * Handles the bitmap loading event.
     */
    protected _onLoad(): void;

    /**
     * Calls all registered load listeners when the bitmap is ready.
     */
    protected _callLoadListeners(): void;

    /**
     * Handles errors that occur during bitmap loading.
     */
    protected _onError(): void;

    /**
     * Marks the bitmap as needing to be re-rendered.
     */
    protected _setDirty(): void;
    // #endregion =========================== protected methods ============================== //    
}