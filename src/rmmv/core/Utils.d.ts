// ----------------------
// Utils

/**
 * The public static class that defines utility methods.
 * Provides helper functions for system checks, device detection, and color conversion.
 */
export declare class Utils {

	// #region ============================== Public static properties ============================== //
	/**
	 * The name of the RPG Maker engine.
	 */
	public static readonly RPGMAKER_NAME: string;

	/**
	 * The version of the RPG Maker engine.
	 */
	public static readonly RPGMAKER_VERSION: string;
	// #endregion =========================== Public static properties ============================== //
	// ============================== //
	// #region ============================== Public static methods ============================== //
	/**
	 * Checks whether the specified option is valid.
	 * @param {string} name - The name of the option.
	 * @returns {boolean} True if the option is valid, false otherwise.
	 */
	public static isOptionValid(name: string): boolean;

	/**
	 * Checks whether the current device is a mobile device.
	 * @returns {boolean} True if running on a mobile device, false otherwise.
	 */
	public static isMobileDevice(): boolean;

	/**
	 * Checks whether the current browser is Mobile Safari.
	 * @returns {boolean} True if running on Mobile Safari, false otherwise.
	 */
	public static isMobileSafari(): boolean;

	/**
	 * Checks whether the current browser is Android Chrome.
	 * @returns {boolean} True if running on Android Chrome, false otherwise.
	 */
	public static isAndroidChrome(): boolean;

	/**
	 * Checks whether the current environment is NW.js.
	 * @returns {boolean} True if running in NW.js, false otherwise.
	 */
	public static isNwjs(): boolean;

	/**
	 * Determines whether the game can read local files.
	 * @returns {boolean} True if file reading is allowed, false otherwise.
	 */
	public static canReadGameFiles(): boolean;

	/**
	 * Converts RGB color values to a CSS-compatible color string.
	 * @param {number} r - The red component (0-255).
	 * @param {number} g - The green component (0-255).
	 * @param {number} b - The blue component (0-255).
	 * @returns {string} The CSS color string in `rgb(r, g, b)` format.
	 */
	public static rgbToCssColor(r: number, g: number, b: number): string;
	// #endregion =========================== Public static methods ============================== //
}