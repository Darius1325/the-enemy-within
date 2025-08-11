// ----------------------
// WebAudio

/**
 * The audio object of the Web Audio API.
 * Manages audio playback, buffering, volume control, and looping.
 */
export declare class WebAudio {

	// #region ============================== Public static methods ============================== //
	/**
	 * Initializes the Web Audio system with or without audio support.
	 * @param {boolean} noAudio - If true, disables audio capabilities.
	 */
	public static initialize(noAudio: boolean): void;

	/**
	 * Checks if the browser can play Ogg audio format.
	 * @returns {boolean} True if Ogg is supported, false otherwise.
	 */
	public static canPlayOgg(): boolean;

	/**
	 * Checks if the browser can play M4A audio format.
	 * @returns {boolean} True if M4A is supported, false otherwise.
	 */
	public static canPlayM4a(): boolean;
	// #endregion =========================== Public static methods ============================== //
	// ============================== //
	// #region ============================== Protected static methods ============================== //
	/**
	 * Creates the Web Audio context for managing audio playback.
	 */
	protected static _createContext(): void;

	/**
	 * Detects supported audio codecs for playback compatibility.
	 */
	protected static _detectCodecs(): void;

	/**
	 * Creates the master gain node to control overall audio volume.
	 */
	protected static _createMasterGainNode(): void;

	/**
	 * Sets up event handlers for touch interactions and visibility changes.
	 */
	protected static _setupEventHandlers(): void;

	/**
	 * Handles touch start event to unlock Web Audio playback.
	 */
	protected static _onTouchStart(): void;

	/**
	 * Handles visibility changes for audio playback management.
	 */
	protected static _onVisibilityChange(): void;

	/**
	 * Executes actions when the page is hidden.
	 */
	protected static _onHide(): void;

	/**
	 * Executes actions when the page is shown again.
	 */
	protected static _onShow(): void;

	/**
	 * Gradually increases the audio volume over the specified duration.
	 * @param {number} duration - The duration of the fade-in effect (in seconds).
	 */
	protected static _fadeIn(duration: number): void;

	/**
	 * Gradually decreases the audio volume over the specified duration.
	 * @param {number} duration - The duration of the fade-out effect (in seconds).
	 */
	protected static _fadeOut(duration: number): void;
	// #endregion =========================== Protected static methods ============================== //
	// ============================== //
	// #region ============================== Public properties ============================== //
	/**
	 * The URL of the audio file.
	 */
	public url: string;

	/**
	 * The volume level of the audio.
	 */
	public volume: number;

	/**
	 * The pitch of the audio playback.
	 */
	public pitch: number;

	/**
	 * The stereo pan position of the audio.
	 */
	public pan: number;
	// #endregion =========================== Public properties ============================== //
	// ============================== //
	// #region ============================== Protected properties ============================== //
	/**
	 * The Web Audio context used for playback.
	 */
	protected _context: AudioContext;

	/**
	 * The master gain node managing overall volume.
	 */
	protected _masterGainNode: GainNode;

	/**
	 * Indicates if the Web Audio system has been initialized.
	 */
	protected _initialized: boolean;

	/**
	 * Indicates if the Web Audio system has been unlocked for playback.
	 */
	protected _unlocked: boolean;

	/**
	 * The audio buffer storing the loaded sound data.
	 */
	protected _buffer: AudioBuffer;

	/**
	 * The source node responsible for playback.
	 */
	protected _sourceNode: AudioBufferSourceNode;

	/**
	 * The gain node managing individual audio volume.
	 */
	protected _gainNode: GainNode;

	/**
	 * The panner node controlling stereo positioning.
	 */
	protected _pannerNode: PannerNode;

	/**
	 * The total duration of the audio in seconds.
	 */
	protected _totalTime: number;

	/**
	 * The sample rate of the audio buffer.
	 */
	protected _sampleRate: number;

	/**
	 * The starting point for audio looping.
	 */
	protected _loopStart: number;

	/**
	 * The length of the audio loop.
	 */
	protected _loopLength: number;

	/**
	 * The timestamp when playback started.
	 */
	protected _startTime: number;

	/**
	 * The current volume level.
	 */
	protected _volume: number;

	/**
	 * The current pitch level.
	 */
	protected _pitch: number;

	/**
	 * The current pan position.
	 */
	protected _pan: number;

	/**
	 * The timer tracking the end of audio playback.
	 */
	protected _endTimer: number;

	/**
	 * The array of load event listeners.
	 */
	protected _loadListeners: Function[];

	/**
	 * The array of stop event listeners.
	 */
	protected _stopListeners: Function[];

	/**
	 * Indicates if an error occurred during audio loading or playback.
	 */
	protected _hasError: boolean;

	/**
	 * Indicates whether the audio should auto-play once loaded.
	 */
	protected _autoPlay: boolean;
	// #endregion =========================== Protected properties ============================== //
	// ============================== //
	// #region ============================== Public constructor ============================== //
	/**
	 * Creates a new `WebAudio` instance and loads the specified audio file.
	 * @param {string} url - The URL of the audio file to load.
	 */
	public constructor(url: string);
	// #endregion =========================== Public constructor ============================== //
	// ============================== //
	// #region ============================== Public methods ============================== //
	/**
	 * Clears the current audio buffer and settings.
	 */
	public clear(): void;

	/**
	 * Checks if the audio is ready for playback.
	 * @returns {boolean} True if audio is ready, false otherwise.
	 */
	public isReady(): boolean;

	/**
	 * Checks if the audio has encountered an error.
	 * @returns {boolean} True if an error occurred, false otherwise.
	 */
	public isError(): boolean;

	/**
	 * Checks if the audio is currently playing.
	 * @returns {boolean} True if the audio is playing, false otherwise.
	 */
	public isPlaying(): boolean;

	/**
	 * Stops the audio playback.
	 */
	public stop(): void;

	/**
	 * Gradually increases the audio volume over the specified duration.
	 * @param {number} duration - The duration of the fade-in effect (in seconds).
	 */
	public fadeIn(duration: number): void;

	/**
	 * Gradually decreases the audio volume over the specified duration.
	 * @param {number} duration - The duration of the fade-out effect (in seconds).
	 */
	public fadeOut(duration: number): void;

	/**
	 * Retrieves the current playback position.
	 * @returns {number} The current playback time in seconds.
	 */
	public seek(): number;

	/**
	 * Adds a listener function that executes when the audio has loaded.
	 * @param {Function} listener - The listener function to add.
	 */
	public addLoadListener(listener: Function): void;

	/**
	 * Adds a listener function that executes when the audio stops playing.
	 * @param {Function} listener - The listener function to add.
	 */
	public addStopListener(listener: Function): void;
	// #endregion =========================== Public methods ============================== //
	// ============================== //
	// #region ============================== Protected methods ============================== //
	/**
	 * Loads the specified audio file into the Web Audio buffer.
	 * @param {string} url - The URL of the audio file to load.
	 */
	protected _load(url: string): void;

	/**
	 * Processes the loaded audio data from an XMLHttpRequest.
	 * @param {XMLHttpRequest} xhr - The XMLHttpRequest containing the audio data.
	 */
	protected _onXhrLoad(xhr: XMLHttpRequest): void;

	/**
	 * Starts playing the loaded audio with specified loop and offset settings.
	 * @param {boolean} loop - Whether to loop the audio.
	 * @param {number} offset - The playback start offset in seconds.
	 */
	protected _startPlaying(loop: boolean, offset: number): void;

	/**
	 * Creates the necessary Web Audio nodes for playback.
	 */
	protected _createNodes(): void;

	/**
	 * Connects the Web Audio nodes for proper playback routing.
	 */
	protected _connectNodes(): void;

	/**
	 * Removes the Web Audio nodes when stopping playback.
	 */
	protected _removeNodes(): void;

	/**
	 * Creates an end timer to manage audio loop duration.
	 */
	protected _createEndTimer(): void;

	/**
	 * Removes the end timer after audio playback completes.
	 */
	protected _removeEndTimer(): void;

	/**
	 * Updates the panner node to apply stereo positioning.
	 */
	protected _updatePanner(): void;

	/**
	 * Executes actions when the audio file has finished loading.
	 */
	protected _onLoad(): void;

	/**
	 * Reads loop comments from the audio metadata.
	 * @param {string[]} array - The array containing metadata information.
	 */
	protected _readLoopComments(array: string[]): void;

	/**
	 * Reads metadata from an Ogg file.
	 * @param {string[]} array - The array containing metadata information.
	 */
	protected _readOgg(array: string[]): void;

	/**
	 * Reads metadata from an MP4 file.
	 * @param {string[]} array - The array containing metadata information.
	 */
	protected _readMp4(array: string[]): void;

	/**
	 * Extracts metadata from the specified array at a given index and size.
	 * @param {string[]} array - The array containing metadata information.
	 * @param {number} index - The index to start reading from.
	 * @param {number} size - The size of the metadata segment.
	 */
	protected _readMetaData(array: string[], index: number, size: number): void;

	/**
	 * Reads a little-endian encoded number from the array.
	 * @param {string[]} array - The array containing data.
	 * @param {number} index - The index to read from.
	 * @returns {number} The decoded number.
	 */
	protected _readLittleEndian(array: string[], index: number): number;

	/**
	 * Reads a big-endian encoded number from the array.
	 * @param {string[]} array - The array containing data.
	 * @param {number} index - The index to read from.
	 * @returns {number} The decoded number.
	 */
	protected _readBigEndian(array: string[], index: number): number;

	/**
	 * Reads four-character strings from the array for metadata extraction.
	 * @param {string[]} array - The array containing data.
	 * @param {number} index - The index to read from.
	 * @returns {string} The extracted four-character string.
	 */
	protected _readFourCharacters(array: string[], index: number): string;
	// #endregion =========================== Protected methods ============================== //
}