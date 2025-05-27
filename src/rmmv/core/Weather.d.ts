// ----------------------
// Weather

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";
import { Point } from "./Point";
import { Sprite } from "./Sprite";

/**
 * The weather effect which displays rain, storm, or snow.
 * Extends `PIXI.Container` to manage dynamic weather rendering.
 */
export declare class Weather extends PIXI.Container {

	// #region ============================== Public properties ============================== //
	/**
	 * The type of weather effect (e.g., "rain", "storm", "snow").
	 */
	public type: string;

	/**
	 * The intensity of the weather effect.
	 */
	public power: number;

	/**
	 * The origin point of the weather effect, defining its starting position.
	 */
	public origin: Point;
	// #endregion =========================== Public properties ============================== //
	// ============================== //
	// #region ============================== Protected properties ============================== //
	/**
	 * The width of the weather effect area.
	 */
	protected _width: number;

	/**
	 * The height of the weather effect area.
	 */
	protected _height: number;

	/**
	 * The array of sprite objects used for rendering weather particles.
	 */
	protected _sprites: Sprite[];
	// #endregion =========================== Protected properties ============================== //
	// ============================== //
	// #region ============================== Public methods ============================== //
	/**
	 * Updates the weather effect, animating particles and adjusting intensity.
	 */
	public update(): void;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Creates bitmap textures for rendering weather effects.
	 */
	protected _createBitmaps(): void;

	/**
	 * Creates a dimmer effect for the weather.
	 */
	protected _createDimmer(): void;

	/**
	 * Updates the dimmer effect based on the weather intensity.
	 */
	protected _updateDimmer(): void;

	/**
	 * Updates all sprites used in the weather effect.
	 */
	protected _updateAllSprites(): void;

	/**
	 * Adds a new weather sprite to the scene.
	 */
	protected _addSprite(): void;

	/**
	 * Removes an existing weather sprite from the scene.
	 */
	protected _removeSprite(): void;

	/**
	 * Updates a rain sprite’s position and animation.
	 * @param {Sprite} sprite - The rain sprite to update.
	 */
	protected _updateRainSprite(sprite: Sprite): void;

	/**
	 * Updates a storm sprite’s position and animation.
	 * @param {Sprite} sprite - The storm sprite to update.
	 */
	protected _updateStormSprite(sprite: Sprite): void;

	/**
	 * Updates a snow sprite’s position and animation.
	 * @param {Sprite} sprite - The snow sprite to update.
	 */
	protected _updateSnowSprite(sprite: Sprite): void;

	/**
	 * Reinitializes a sprite when it reaches the end of its animation cycle.
	 * @param {Sprite} sprite - The sprite to reset.
	 */
	protected _rebornSprite(sprite: Sprite): void;
	// #endregion =========================== Protected methods ============================== //
}