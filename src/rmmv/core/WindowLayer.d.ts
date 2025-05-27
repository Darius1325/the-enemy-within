// ----------------------
// WindowLayer

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";
import { Sprite } from "./Sprite";

/**
 * The layer which contains game windows.
 * Extends `PIXI.Container` for managing window rendering and masking operations.
 */
export declare class WindowLayer extends PIXI.Container {

	// #region ============================== Public properties ============================== //
	/**
	 * The width of the window layer.
	 */
	public width: number;

	/**
	 * The height of the window layer.
	 */
	public height: number;
	// #endregion =========================== Public properties ============================== //
	// ============================== //
	// #region ============================== Protected properties ============================== //
	/**
	 * The internal width of the window layer.
	 */
	protected _width: number;

	/**
	 * The internal height of the window layer.
	 */
	protected _height: number;

	/**
	 * Temporary canvas used for rendering operations.
	 */
	protected _tempCanvas: PIXI.SystemRenderer;

	/**
	 * The vertex buffer for WebGL rendering.
	 */
	protected _vertexBuffer: {};

	/**
	 * The transformation matrix used for rendering adjustments.
	 */
	protected _translationMatrix: number[];

	/**
	 * Dummy sprite used for fallback rendering operations.
	 */
	protected _dummySprite: Sprite;
	// #endregion =========================== Protected properties ============================== //
	// ============================== //
	// #region ============================== Public methods ============================== //
	/**
	 * Moves the window layer to a specified position and resizes it.
	 * @param {number} x - The new x-coordinate.
	 * @param {number} y - The new y-coordinate.
	 * @param {number} width - The new width of the layer.
	 * @param {number} height - The new height of the layer.
	 */
	public move(x: number, y: number, width: number, height: number): void;

	/**
	 * Updates the window layer state, including rendering operations.
	 */
	public update(): void;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Renders the window layer using the Canvas renderer.
	 * @param {PIXI.SystemRenderer} renderSession - The rendering session.
	 */
	protected _renderCanvas(renderSession: PIXI.SystemRenderer): void;

	/**
	 * Clears the window rectangle in the Canvas renderer.
	 * @param {PIXI.SystemRenderer} renderSession - The rendering session.
	 * @param {Window} window - The window to clear.
	 */
	protected _canvasClearWindowRect(renderSession: PIXI.SystemRenderer, window: Window): void;

	/**
	 * Renders the window layer using WebGL.
	 * @param {PIXI.SystemRenderer} renderSession - The rendering session.
	 */
	protected _renderWebGL(renderSession: PIXI.SystemRenderer): void;

	/**
	 * Applies masking outside the window area in WebGL rendering.
	 * @param {PIXI.SystemRenderer} renderSession - The rendering session.
	 */
	protected _webglMaskOutside(renderSession: PIXI.SystemRenderer): void;

	/**
	 * Applies masking specifically for windows in WebGL rendering.
	 * @param {PIXI.SystemRenderer} renderSession - The rendering session.
	 * @param {Window} window - The window to apply masking.
	 */
	protected _webglMaskWindow(renderSession: PIXI.SystemRenderer, window: Window): void;

	/**
	 * Masks a rectangular area in WebGL rendering.
	 * @param {PIXI.SystemRenderer} renderSession - The rendering session.
	 * @param {number} x - The x-coordinate of the rectangle.
	 * @param {number} y - The y-coordinate of the rectangle.
	 * @param {number} w - The width of the rectangle.
	 * @param {number} h - The height of the rectangle.
	 */
	protected _webglMaskRect(renderSession: PIXI.SystemRenderer, x: number, y: number, w: number, h: number): void;
	// #endregion =========================== Protected methods ============================== //
}