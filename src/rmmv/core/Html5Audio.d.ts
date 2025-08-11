// ----------------------
// Html5Audio

/**
 * The static class that handles HTML5 Audio.
 * Provides methods for playing, stopping, and managing audio files.
 */
export declare class Html5Audio {

    // #region ============================== Public static properties ============================== //
    /**
     * The URL of the current audio file.
    */
    public static url: string;

    /**
     * The global volume setting for audio playback.
    */
    public static volume: number;
    // #endregion =========================== Public static properties ============================== //
    // ============================== //
    // #region ============================== Private static properties ============================== //
    /**
     * Indicates whether the audio system has been initialized.
     */
    private static _initialized: boolean;

    /**
     * Indicates whether the audio system is unlocked for playback.
     */
    private static _unlocked: boolean;

    /**
     * The HTML audio element used for playing audio files.
     */
    private static _audioElement: HTMLAudioElement;

    /**
     * Interval identifier for gain transition animations.
     */
    private static _gainTweenInterval: number;

    /**
     * The current gain (volume) being transitioned.
     */
    private static _tweenGain: number;

    /**
     * The target gain (volume) for the transition.
     */
    private static _tweenTargetGain: number;

    /**
     * The step amount applied to gain transitions.
     */
    private static _tweenGainStep: number;

    /**
     * The static sound effect file path.
     */
    private static _staticSePath: string;

    /**
     * The internal URL used for loading audio files.
     */
    private static _url: string;
    // #endregion =========================== Private static properties ============================== //
    // ============================== //
    // #region ============================== Public static methods ============================== //
    /**
     * Configures the audio system with the specified URL.
     * @param {string} url - The URL of the audio file to set up.
     */
    public static setup(url: string): void;

    /**
     * Initializes the audio system.
     * @returns {boolean} True if initialization was successful, false otherwise.
     */
    public static initialize(): boolean;

    /**
     * Clears the currently loaded audio data.
     */
    public static clear(): void;

    /**
     * Sets a static sound effect file.
     * @param {string} url - The URL of the sound effect file.
     */
    public static setStaticSe(url: string): void;

    /**
     * Checks whether the audio system is ready to play sounds.
     * @returns {boolean} True if ready, false otherwise.
     */
    public static isReady(): boolean;

    /**
     * Checks if there was an error in the audio system.
     * @returns {boolean} True if an error occurred, false otherwise.
     */
    public static isError(): boolean;

    /**
     * Determines whether an audio track is currently playing.
     * @returns {boolean} True if an audio track is playing, false otherwise.
     */
    public static isPlaying(): boolean;

    /**
     * Starts playing an audio file.
     * @param {boolean} loop - Whether the audio should loop.
     * @param {number} offset - The starting position in seconds.
     */
    public static play(loop: boolean, offset: number): void;

    /**
     * Stops the currently playing audio.
     */
    public static stop(): void;

    /**
     * Fades in the audio over a given duration.
     * @param {number} duration - The duration of the fade-in effect.
     */
    public static fadeIn(duration: number): void;

    /**
     * Fades out the audio over a given duration.
     * @param {number} duration - The duration of the fade-out effect.
     */
    public static fadeOut(duration: number): void;

    /**
     * Retrieves the current playback position.
     * @returns {number} The playback position in seconds.
     */
    public static seek(): number;

    /**
     * Adds an event listener that triggers when the audio loads.
     * @param {Function} listener - The function to execute when loading completes.
     */
    public static addLoadListener(listener: Function): void;
    // #endregion =========================== Public static methods ============================== //
    // ============================== //
    // #region ============================== Private static methods ============================== //
    /**
     * Sets up event handlers for audio-related interactions.
     */
    private static _setEventHandlers(): void;

    /**
     * Handles the touch start event to unlock audio playback.
     */
    private static _onTouchStart(): void;

    /**
     * Handles visibility changes to manage audio playback states.
     */
    private static _onVisibilityChange(): void;

    /**
     * Triggers when the audio data has been successfully loaded.
     */
    private static _onLoadedData(): void;

    /**
     * Handles errors that occur during audio playback.
     */
    private static _onError(): void;

    /**
     * Executes when the audio playback reaches the end.
     */
    private static _onEnded(): void;

    /**
     * Handles the event when the page becomes hidden.
     */
    private static _onHide(): void;

    /**
     * Handles the event when the page becomes visible again.
     */
    private static _onShow(): void;

    /**
     * Loads an audio file from the specified URL.
     * @param {string} url - The URL of the audio file to load.
     */
    private static _load(url: string): void;

    /**
     * Starts playing an audio file with specified loop and offset settings.
     * @param {boolean} loop - Whether the audio should loop.
     * @param {number} offset - The starting position in seconds.
     */
    private static _startPlaying(loop: boolean, offset: number): void;

    /**
     * Triggers when the audio file has fully loaded.
     */
    private static _onLoad(): void;

    /**
     * Starts an animation for gradually changing the gain (volume).
     * @param {number} duration - The duration of the tween effect.
     */
    private static _startGainTween(duration: number): void;

    /**
     * Applies a tween effect when pausing the audio.
     * @param {number} volume - The target volume during the pause.
     */
    private static _applyTweenPause(volume: number): void;
    // #endregion =========================== Private static methods ============================== //
}