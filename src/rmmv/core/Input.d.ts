// ----------------------
// Input

/**
 * The static class that handles input data from the keyboard and gamepads.
 * Provides methods for tracking key presses, gamepad states, and user interactions.
 */
export declare class Input {

	// #region ============================== Public static properties ============================== //
	/**
	 * The initial delay before a key repeat starts.
	 */
	public static keyRepeatWait: number;

	/**
	 * The interval between repeated key inputs.
	 */
	public static keyRepeatInterval: number;

	/**
	 * Maps key codes to their corresponding action names.
	 */
	public static keyMapper: { [key: number]: string };

	/**
	 * Maps gamepad button codes to their corresponding action names.
	 */
	public static gamepadMapper: { [key: number]: string };
	// #endregion =========================== Public static properties ============================== //
	// ============================== //
	// #region ============================== Protected static properties ============================== //
	/**
	 * Stores the current state of all keys.
	 */
	protected static _currentState: { [key: number]: boolean };

	/**
	 * Stores the previous state of all keys.
	 */
	protected static _previousState: { [key: number]: boolean };

	/**
	 * Stores the states of all connected gamepads.
	 */
	protected static _gamepadStates: { [key: number]: boolean }[];

	/**
	 * Holds the latest button pressed by the user.
	 */
	protected static _latestButton: string;

	/**
	 * Tracks the duration a key has been held down.
	 */
	protected static _pressedTime: number;

	/**
	 * Stores the four-directional input state.
	 */
	protected static _dir4: number;

	/**
	 * Stores the eight-directional input state.
	 */
	protected static _dir8: number;

	/**
	 * Identifies the preferred axis for movement input.
	 */
	protected static _preferredAxis: string;

	/**
	 * Stores the timestamp of the last input event.
	 */
	protected static _date: Date;
	// #endregion =========================== Protected static properties ============================== //
	// ============================== //
	// #region ============================== Public static methods ============================== //
	/**
	 * Clears all input states, resetting keyboard and gamepad tracking.
	 */
	public static clear(): void;

	/**
	 * Updates the input states, processing new keyboard and gamepad interactions.
	 */
	public static update(): void;

	/**
	 * Checks if a key is currently being pressed.
	 * @param {string} keyName - The name of the key.
	 * @returns {boolean} True if the key is pressed, false otherwise.
	 */
	public static isPressed(keyName: string): boolean;

	/**
	 * Checks if a key has just been triggered.
	 * @param {string} keyName - The name of the key.
	 * @returns {boolean} True if the key was triggered, false otherwise.
	 */
	public static isTriggered(keyName: string): boolean;

	/**
	 * Checks if a key is being repeated.
	 * @param {string} keyName - The name of the key.
	 * @returns {boolean} True if the key is repeated, false otherwise.
	 */
	public static isRepeated(keyName: string): boolean;

	/**
	 * Checks if a key is being long-pressed.
	 * @param {string} keyName - The name of the key.
	 * @returns {boolean} True if the key is long-pressed, false otherwise.
	 */
	public static isLongPressed(keyName: string): boolean;
	// #endregion =========================== Public static methods ============================== //
	// ============================== //

	// #region ============================== Protected static methods ============================== //
	/**
	 * Wraps the NW.js alert functionality to ensure compatibility.
	 */
	protected static _wrapNwjsAlert(): void;

	/**
	 * Sets up event handlers for keyboard and gamepad interactions.
	 */
	protected static _setupEventHandlers(): void;

	/**
	 * Handles keydown events to update the input state.
	 * @param {Event} event - The keyboard event.
	 */
	protected static _onKeyDown(event: Event): void;

	/**
	 * Determines whether a key press should prevent the default browser action.
	 * @param {number} keyCode - The code of the key.
	 * @returns {boolean} True if the default action should be prevented, false otherwise.
	 */
	protected static _shouldPreventDefault(keyCode: number): boolean;

	/**
	 * Handles keyup events to reset the input state.
	 * @param {Event} event - The keyboard event.
	 */
	protected static _onKeyUp(event: Event): void;

	/**
	 * Handles focus loss events, resetting input states.
	 */
	protected static _onFocusLost(): void;

	/**
	 * Polls connected gamepads for their current states.
	 */
	protected static _pollGamepads(): void;

	/**
	 * Updates the input state based on gamepad interactions.
	 * @param {Gamepad} gamepad - The gamepad object.
	 */
	protected static _updateGamepadState(gamepad: Gamepad): void;

	/**
	 * Updates directional input states.
	 */
	protected static _updateDirection(): void;

	/**
	 * Retrieves the X-axis movement sign.
	 * @returns {number} The X-axis sign (-1, 0, or 1).
	 */
	protected static _signX(): number;

	/**
	 * Retrieves the Y-axis movement sign.
	 * @returns {number} The Y-axis sign (-1, 0, or 1).
	 */
	protected static _signY(): number;

	/**
	 * Converts X and Y coordinates into a numpad-style directional input.
	 * @param {number} x - The X coordinate.
	 * @param {number} y - The Y coordinate.
	 * @returns {number} The corresponding numpad direction.
	 */
	protected static _makeNumpadDirection(x: number, y: number): number;

	/**
	 * Determines whether a key is compatible with the "Escape" function.
	 * @param {string} keyName - The name of the key.
	 * @returns {boolean} True if the key is mapped to "Escape", false otherwise.
	 */
	protected static _isEscapeCompatible(keyName: string): boolean;
	// #endregion =========================== Protected static methods ============================== //
}