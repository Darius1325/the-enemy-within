// ----------------------
// TouchInput

/**
 * The static class that handles input data from the mouse and touchscreen.
 * Provides methods for detecting touch gestures, clicks, and wheel movement.
 */
export declare class TouchInput {

	// #region ============================== Public static properties ============================== //
	/**
	 * The horizontal wheel movement input.
	 */
	public static wheelX: number;

	/**
	 * The vertical wheel movement input.
	 */
	public static wheelY: number;

	/**
	 * The current x-coordinate of the input.
	 */
	public static x: number;

	/**
	 * The current y-coordinate of the input.
	 */
	public static y: number;

	/**
	 * The timestamp of the latest input event.
	 */
	public static date: Date;
	// #endregion =========================== Public static properties ============================== //
	// ============================== //
	// #region ============================== Protected static properties ============================== //
	/**
	 * Indicates if the mouse is pressed.
	 */
	protected static _mousePressed: boolean;

	/**
	 * Indicates if the screen is pressed.
	 */
	protected static _screenPressed: boolean;

	/**
	 * The duration for which the input has been pressed.
	 */
	protected static _pressedTime: number;

	/**
	 * Indicates whether the input was triggered.
	 */
	protected static _triggered: boolean;

	/**
	 * Indicates whether the input was cancelled.
	 */
	protected static _cancelled: boolean;

	/**
	 * Indicates whether the input was moved.
	 */
	protected static _moved: boolean;

	/**
	 * Indicates whether the input was released.
	 */
	protected static _released: boolean;

	/**
	 * Stores the horizontal wheel movement internally.
	 */
	protected static _wheelX: number;

	/**
	 * Stores the vertical wheel movement internally.
	 */
	protected static _wheelY: number;

	/**
	 * Stores the x-coordinate internally.
	 */
	protected static _x: number;

	/**
	 * Stores the y-coordinate internally.
	 */
	protected static _y: number;

	/**
	 * Stores the latest timestamp internally.
	 */
	protected static _date: Date;

	/**
	 * Stores events related to input actions.
	 */
	protected static _events: {
		triggered: boolean;
		cancelled: boolean;
		moved: boolean;
		released: boolean;
		wheelX: number;
		wheelY: number;
	};
	// #endregion =========================== Protected static properties ============================== //
	// ============================== //
	// #region ============================== Public static methods ============================== //
	/**
	 * Updates the touch input state.
	 */
	public static update(): void;

	/**
	 * Checks whether an input is currently pressed.
	 * @returns {boolean} True if the input is pressed, false otherwise.
	 */
	public static isPressed(): boolean;

	/**
	 * Checks whether an input has been triggered.
	 * @returns {boolean} True if the input was triggered, false otherwise.
	 */
	public static isTriggered(): boolean;

	/**
	 * Checks whether an input is being repeated.
	 * @returns {boolean} True if the input is repeated, false otherwise.
	 */
	public static isRepeated(): boolean;

	/**
	 * Checks whether an input is long pressed.
	 * @returns {boolean} True if the input is long pressed, false otherwise.
	 */
	public static isLongPressed(): boolean;

	/**
	 * Checks whether an input has been cancelled.
	 * @returns {boolean} True if the input was cancelled, false otherwise.
	 */
	public static isCancelled(): boolean;

	/**
	 * Checks whether an input has been moved.
	 * @returns {boolean} True if the input was moved, false otherwise.
	 */
	public static isMoved(): boolean;

	/**
	 * Checks whether an input has been released.
	 * @returns {boolean} True if the input was released, false otherwise.
	 */
	public static isReleased(): boolean;
	// #endregion =========================== Public static methods ============================== //
	// ============================== //
	// #region ============================== Protected static methods ============================== //
	/**
	 * Sets up event handlers for touch and mouse input.
	 */
	protected static _setupEventHandlers(): void;

	/**
	 * Handles the mouse down event.
	 * @param {Event} event - The event object.
	 */
	protected static _onMouseDown(event: Event): void;

	/**
	 * Handles left mouse button press.
	 * @param {Event} event - The event object.
	 */
	protected static _onLeftButtonDown(event: Event): void;

	/**
	 * Handles middle mouse button press.
	 * @param {Event} event - The event object.
	 */
	protected static _onMiddleButtonDown(event: Event): void;

	/**
	 * Handles mouse movement.
	 * @param {Event} event - The event object.
	 */
	protected static _onMouseMove(event: Event): void;

	/**
	 * Handles mouse release.
	 * @param {Event} event - The event object.
	 */
	protected static _onMouseUp(event: Event): void;

	/**
	 * Handles mouse wheel movement.
	 * @param {Event} event - The event object.
	 */
	protected static _onWheel(event: Event): void;

	/**
	 * Handles touch start event.
	 * @param {Event} event - The event object.
	 */
	protected static _onTouchStart(event: Event): void;

	/**
	 * Handles touch movement event.
	 * @param {Event} event - The event object.
	 */
	protected static _onTouchMove(event: Event): void;

	/**
	 * Handles touch end event.
	 * @param {Event} event - The event object.
	 */
	protected static _onTouchEnd(event: Event): void;

	/**
	 * Handles touch cancel event.
	 * @param {Event} event - The event object.
	 */
	protected static _onTouchCancel(event: Event): void;

	/**
	 * Handles pointer down event.
	 * @param {Event} event - The event object.
	 */
	protected static _onPointerDown(event: Event): void;

	/**
	 * Triggers an input event at the specified coordinates.
	 * @param {number} x - The x-coordinate of the event.
	 * @param {number} y - The y-coordinate of the event.
	 */
	protected static _onTrigger(x: number, y: number): void;

	/**
	 * Cancels an input event at the specified coordinates.
	 * @param {number} x - The x-coordinate of the event.
	 * @param {number} y - The y-coordinate of the event.
	 */
	protected static _onCancel(x: number, y: number): void;

	/**
	 * Moves an input event to the specified coordinates.
	 * @param {number} x - The x-coordinate of the event.
	 * @param {number} y - The y-coordinate of the event.
	 */
	protected static _onMove(x: number, y: number): void;

	/**
	 * Releases an input event at the specified coordinates.
	 * @param {number} x - The x-coordinate of the event.
	 * @param {number} y - The y-coordinate of the event.
	 */
	protected static _onRelease(x: number, y: number): void;
	// #endregion =========================== Protected static methods ============================== //
}