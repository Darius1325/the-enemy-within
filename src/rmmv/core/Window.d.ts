// ----------------------
// Window

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";
import { Bitmap } from "./Bitmap";
import { Point } from "./Point";
import { Rectangle } from "./Rectangle";
import { Sprite } from "./Sprite";

/**
 * The window in the game.
 * Extends `PIXI.Container` for compatibility with rendering operations.
 */
export declare class Window extends PIXI.Container {

	// #region ============================== Public properties ============================== //
	/**
	 * The origin point of the window, defining its starting position.
	 */
	public origin: Point;

	/**
	 * Indicates whether the window is active.
	 */
	public active: boolean;

	/**
	 * Determines if the down arrow is visible.
	 */
	public downArrowVisible: boolean;

	/**
	 * Indicates whether the window is paused.
	 */
	public pause: boolean;

	/**
	 * The windowskin used for rendering the window background.
	 */
	public windowskin: {};

	/**
	 * The bitmap image associated with this window.
	 */
	public contents: Bitmap;

	/**
	 * The width of the window.
	 */
	public width: number;

	/**
	 * The height of the window.
	 */
	public height: number;

	/**
	 * The padding surrounding the window contents.
	 */
	public padding: number;

	/**
	 * The margin surrounding the window.
	 */
	public margin: number;

	/**
	 * The opacity level of the window.
	 */
	public opacity: number;

	/**
	 * The opacity level of the window background.
	 */
	public backOpacity: number;

	/**
	 * The opacity level of the window contents.
	 */
	public contentsOpacity: number;

	/**
	 * The openness of the window.
	 */
	public openness: number;
	// #endregion =========================== Public properties ============================== //
	// ============================== //
	// #region ============================== Protected properties ============================== //
	/**
	 * Indicates whether this object is a window.
	 */
	protected _isWindow: boolean;

	/**
	 * The bitmap image used for rendering the window.
	 */
	protected _windowskin: Bitmap;

	/**
	 * The internal width of the window.
	 */
	protected _width: number;

	/**
	 * The internal height of the window.
	 */
	protected _height: number;

	/**
	 * The rectangle defining the window’s cursor.
	 */
	protected _cursorRect: Rectangle;

	/**
	 * The openness value used for animations.
	 */
	protected _opennes: number;

	/**
	 * The animation counter for window effects.
	 */
	protected _animationCount: number;

	/**
	 * The padding value used internally.
	 */
	protected _padding: number;

	/**
	 * The margin value used internally.
	 */
	protected _margin: number;

	/**
	 * The color tone applied to the window.
	 */
	protected _colorTone: number[];

	/**
	 * The container sprite holding window elements.
	 */
	protected _windowSpriteContainer: Sprite;

	/**
	 * The background sprite of the window.
	 */
	protected _windowBackSprite: Sprite;

	/**
	 * The cursor sprite of the window.
	 */
	protected _windowCursorSprite: Sprite;

	/**
	 * The frame sprite of the window.
	 */
	protected _windowFrameSprite: Sprite;

	/**
	 * The sprite displaying the window contents.
	 */
	protected _windowContentsSprite: Sprite;

	/**
	 * The array of arrow sprites used for navigation.
	 */
	protected _windowArrowSprites: Sprite[];
	// #endregion =========================== Protected properties ============================== //
	// ============================== //
	// #region ============================== Public methods ============================== //
	/**
	 * Updates the window state, including animations and effects.
	 */
	public update(): void;

	/**
	 * Moves the window to a specified position and resizes it.
	 * @param {number} x - The new x-coordinate.
	 * @param {number} y - The new y-coordinate.
	 * @param {number} width - The new width of the window.
	 * @param {number} height - The new height of the window.
	 */
	public move(x?: number, y?: number, width?: number, height?: number): void;

	/**
	 * Checks if the window is fully open.
	 * @returns {boolean} True if the window is open, false otherwise.
	 */
	public isOpen(): boolean;

	/**
	 * Checks if the window is fully closed.
	 * @returns {boolean} True if the window is closed, false otherwise.
	 */
	public isClosed(): boolean;

	/**
	 * Sets the cursor rectangle for the window.
	 * @param {number} x - The x position of the cursor.
	 * @param {number} y - The y position of the cursor.
	 * @param {number} width - The width of the cursor.
	 * @param {number} height - The height of the cursor.
	 */
	public setCursorRect(x?: number, y?: number, width?: number, height?: number): void;

	/**
	 * Sets the tone of the window using RGB values.
	 * @param {number} r - The red component (0-255).
	 * @param {number} g - The green component (0-255).
	 * @param {number} b - The blue component (0-255).
	 */
	public setTone(r: number, g: number, b: number): void;

	/**
	 * Adds a child to the back layer of the window.
	 * @param {PIXI.DisplayObject} child - The child to add.
	 * @returns {PIXI.DisplayObject} The added child object.
	 */
	public addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject;

	/**
	 * Updates the transformation properties of the window.
	 */
	public updateTransform(): void;

	/**
	 * Updates the transformation properties of the window.
	 */
	public horizontalBorderPadding(): number;

	/**
	 * Updates the transformation properties of the window.
	 */
	public verticalBorderPadding(): number;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Creates all parts of the window including frame, cursor, and contents.
	 */
	protected _createAllParts(): void;

	/**
	 * Executes operations once the windowskin is loaded.
	 */
	protected _onWindowskinLoad(): void;

	/**
	 * Refreshes all window elements and updates their appearance.
	 */
	protected _refreshAllParts(): void;

	/**
	 * Refreshes the background of the window.
	 */
	protected _refreshBack(): void;

	/**
	 * Refreshes the frame surrounding the window.
	 */
	protected _refreshFrame(): void;

	/**
	 * Refreshes the cursor of the window.
	 */
	public _refreshCursor(): void;

	/**
	 * Refreshes the contents displayed in the window.
	 */
	public _refreshContents(): void;

	/**
	 * Refreshes the arrow indicators for scrolling.
	 */
	protected _refreshArrows(): void;

	/**
	 * Refreshes the pause sign in the window.
	 */
	protected _refreshPauseSign(): void;

	/**
	 * Updates the cursor animation and positioning.
	 */
	protected _updateCursor(): void;

	/**
	 * Updates the window contents visibility and animations.
	 */
	public _updateContents(): void;

	/**
	 * Updates the arrows visibility and position.
	 */
	protected _updateArrows(): void;

	/**
	 * Updates the pause sign animation.
	 */
	protected _updatePauseSign(): void;
	// #endregion =========================== Protected methods ============================== //
}