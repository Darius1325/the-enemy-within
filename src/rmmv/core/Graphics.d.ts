// ----------------------
// Graphics

// ----------------------
// Imports
// ----------------------
import { FPSMeter } from "../../../src/rmmv/core/FPSMeter";
import { Stage } from "../../../src/rmmv/core/Stage";
import { PIXI } from "../../../src/rmmv/pixi";

/**
 * A static class that handles graphics processing.
 * Manages rendering, scaling, and various graphical operations.
 */
export declare class Graphics {
    // #region ============================== public static properties ============================== //
    /**
     * The current frame count used for rendering updates.
     */
    public static frameCount: number;

    /**
     * The blend mode for normal rendering.
     */
    public static BLEND_NORMAL: number;

    /**
     * The blend mode for additive rendering.
     */
    public static BLEND_ADD: number;

    /**
     * The blend mode for multiply rendering.
     */
    public static BLEND_MULTIPLY: number;

    /**
     * The blend mode for screen rendering.
     */
    public static BLEND_SCREEN: number;

    /**
     * The width of the graphics rendering area.
     */
    public static width: number;

    /**
     * The height of the graphics rendering area.
     */
    public static height: number;

    /**
     * The box width used for UI rendering.
     */
    public static boxWidth: number;

    /**
     * The box height used for UI rendering.
     */
    public static boxHeight: number;

    /**
     * The global rendering scale.
     */
    public static scale: number;
    // #endregion =========================== public static properties ============================== //
    // ============================== //
    // #region ============================== protected static methods ============================== //
    /**
     * The internal width of the rendering area.
     */
    protected static _width: number;

    /**
     * The internal height of the rendering area.
     */
    protected static _height: number;

    /**
     * The type of renderer currently in use (WebGL or Canvas).
     */
    protected static _rendererType: string;

    /**
     * The box width used for rendering UI elements.
     */
    protected static _boxWidth: number;

    /**
     * The box height used for rendering UI elements.
     */
    protected static _boxHeight: number;

    /**
     * The scale factor used for rendering.
     */
    protected static _scale: number;

    /**
     * The actual rendering scale calculated dynamically.
     */
    protected static _realScale: number;

    /**
     * The error printer used for displaying rendering errors.
     */
    protected static _errorPrinter: HTMLParagraphElement;

    /**
     * The main canvas element used for rendering.
     */
    protected static _canvas: HTMLCanvasElement;

    /**
     * The video element used for rendering video files.
     */
    protected static _video: HTMLVideoElement;

    /**
     * The upper canvas layer used for overlays and additional effects.
     */
    protected static _upperCanvas: HTMLCanvasElement;

    /**
     * The primary renderer used for rendering operations.
     */
    protected static _renderer: PIXI.WebGLRenderer;

    /**
     * The FPS meter used for tracking rendering performance.
     */
    protected static _fpsMeter: FPSMeter;

    /**
     * The mode selection box used for toggling rendering settings.
     */
    protected static _modeBox: HTMLDivElement;

    /**
     * The number of skipped frames to optimize performance.
     */
    protected static _skipCount: number;

    /**
     * The maximum number of frames that can be skipped.
     */
    protected static _maxSkip: number;

    /**
     * Indicates whether a frame has been rendered in the current cycle.
     */
    protected static _rendered: boolean;

    /**
     * The loading image displayed during asset loading.
     */
    protected static _loadingImage: HTMLImageElement;

    /**
     * The count of loading operations currently in progress.
     */
    protected static _loadingCount: number;

    /**
     * Indicates if the FPS meter has been toggled.
     */
    protected static _fpsMeterToggled: boolean;

    /**
     * Indicates whether the "difference" blend mode is supported.
     */
    protected static _canUseDifferenceBlend: boolean;

    /**
     * Indicates whether the "saturation" blend mode is supported.
     */
    protected static _canUseSaturationBlend: boolean;

    /**
     * Determines whether stretching is enabled for full-screen rendering.
     */
    protected static _stretchEnabled: boolean;

    /**
     * An additional hidden canvas used for advanced rendering techniques.
     */
    protected static _hiddenCanvas: HTMLCanvasElement;
    // #endregion =========================== protected static methods ============================== //
    // ============================== //
    // #region ============================== public static methods ============================== //
    /**
     * Marks the beginning of a rendering cycle.
     */
    public static tickStart(): void;

    /**
     * Marks the end of a rendering cycle.
     */
    public static tickEnd(): void;

    /**
     * Renders the given stage using the active renderer.
     * @param {Stage} stage - The stage to render.
     */
    public static render(stage: Stage): void;

    /**
     * Checks if the renderer is using WebGL.
     * @returns {boolean} True if WebGL is used, false otherwise.
     */
    public static isWebGL(): boolean;

    /**
     * Determines whether WebGL is available on the current system.
     * @returns {boolean} True if WebGL is available, false otherwise.
     */
    public static hasWebGL(): boolean;

    /**
     * Checks if the "difference" blend mode is supported.
     * @returns {boolean} True if the difference blend mode is usable, false otherwise.
     */
    public static canUseDifferenceBlend(): boolean;

    /**
     * Checks if the "saturation" blend mode is supported.
     * @returns {boolean} True if the saturation blend mode is usable, false otherwise.
     */
    public static canUseSaturationBlend(): boolean;

    /**
     * Sets the image displayed during loading screens.
     */
    public static setLoadingImage(): void;

    /**
     * Starts the asset loading process.
     */
    public static startLoading(): void;

    /**
     * Updates the loading status visually.
     */
    public static updateLoading(): void;

    /**
     * Ends the asset loading process.
     */
    public static endLoading(): void;

    /**
     * Displays an error message related to rendering issues.
     */
    public static printError(): void;

    /**
     * Displays the FPS meter for performance tracking.
     */
    public static showFps(): void;

    /**
     * Hides the FPS meter from view.
     */
    public static hideFps(): void;

    /**
     * Loads a custom font from a specified URL.
     * @param {string} name - The name of the font.
     * @param {string} url - The URL of the font file.
     */
    public static loadFont(name: string, url: string): void;

    /**
     * Checks if a font has been successfully loaded.
     * @param {string} name - The name of the font to check.
     * @returns {boolean} True if the font is loaded, false otherwise.
     */
    public static isFontLoaded(name: string): boolean;

    /**
     * Plays a video file using the built-in video element.
     * @param {string} src - The source URL of the video file.
     */
    public static playVideo(src: string): void;

    /**
     * Checks whether a video is currently playing.
     * @returns {boolean} True if a video is playing, false otherwise.
     */
    public static isVideoPlaying(): boolean;

    /**
     * Determines whether a specific video format can be played.
     * @param {string} type - The MIME type of the video format.
     * @returns {boolean} True if the format is supported, false otherwise.
     */
    public static canPlayVideoType(type: string): boolean;

    /**
     * Converts a page-based X coordinate into a canvas-based X coordinate.
     * @param {number} x - The X coordinate from the page.
     * @returns {number} The corresponding canvas-based X coordinate.
     */
    public static pageToCanvasX(x: number): number;

    /**
     * Converts a page-based Y coordinate into a canvas-based Y coordinate.
     * @param {number} y - The Y coordinate from the page.
     * @returns {number} The corresponding canvas-based Y coordinate.
     */
    public static pageToCanvasY(y: number): number;

    /**
     * Determines if a given coordinate is inside the canvas boundaries.
     * @param {number} x - The X coordinate.
     * @param {number} y - The Y coordinate.
     * @returns {boolean} True if the point is inside the canvas, false otherwise.
     */
    public static isInsideCanvas(x: number, y: number): boolean;
    // #endregion =========================== public static methods ============================== //
    // ============================== //
    // #region ============================== protected static methods ============================== //
    /**
     * Creates all necessary HTML elements for rendering.
     */
    protected static _createAllElements(): void;

    /**
     * Updates all existing HTML elements associated with rendering.
     */
    protected static _updateAllElements(): void;

    /**
     * Updates the actual rendering scale based on display settings.
     */
    protected static _updareRealScale(): void;

    /**
     * Generates HTML content for displaying error messages.
     * @param {string} name - The name of the error.
     * @param {string} message - The error message.
     * @returns {string} The formatted error HTML.
     */
    protected static _makeErrorHtml(name: string, message: string): string;

    /**
     * Determines the default stretch mode for rendering.
     * @returns {boolean} True if stretching is enabled, false otherwise.
     */
    protected static _defaultStretchMode(): boolean;

    /**
     * Tests if the canvas blend mode works correctly.
     */
    protected static _testCanvasBlendMode(): void;

    /**
     * Modifies existing elements to align with rendering configurations.
     */
    protected static _modifyExistingElements(): void;

    /**
     * Creates an error printer for rendering issues.
     */
    protected static _createErrorPrinter(): void;

    /**
     * Updates the error printer display.
     */
    protected static _updateErrorPrinter(): void;

    /**
     * Creates the main canvas element for rendering.
     */
    protected static _createCanvas(): void;

    /**
     * Updates the video element settings.
     */
    protected static _updateVideo(): void;

    /**
     * Creates the upper canvas layer for overlays.
     */
    protected static _createUpperCanvas(): void;

    /**
     * Updates the upper canvas properties.
     */
    protected static _updateUpperCanvas(): void;

    /**
     * Clears the upper canvas to remove previous renderings.
     */
    protected static _clearUpperCanvas(): void;

    /**
     * Paints the upper canvas with visual effects.
     */
    protected static _paintUpperCanvas(): void;

    /**
     * Creates the renderer used for drawing graphics.
     */
    protected static _createRenderer(): void;

    /**
     * Updates the renderer settings based on changes.
     */
    protected static _updateRenderer(): void;

    /**
     * Creates the FPS meter for performance tracking.
     */
    protected static _createFPSMeter(): void;

    /**
     * Creates the mode selection box for rendering options.
     */
    protected static _createModeBox(): void;

    /**
     * Creates a loader for game-specific fonts.
     */
    protected static _createGameFontLoader(): void;

    /**
     * Creates a font loader for custom fonts.
     */
    protected static _createFontLoader(): void;

    /**
     * Centers an HTML element on the screen.
     * @param {HTMLElement} element - The element to center.
     */
    protected static _centerElement(element: HTMLElement): void;

    /**
     * Disables text selection on rendered content.
     */
    protected static _disableTextSection(): void;

    /**
     * Disables the context menu to prevent right-click interactions.
     */
    protected static _disableContextMenu(): void;

    /**
     * Applies a filter effect to the main canvas.
     */
    protected static _applyCanvasFilter(): void;

    /**
     * Handles the loading event of the video element.
     */
    protected static _onVideoLoad(): void;

    /**
     * Handles video loading errors.
     */
    protected static _onVideoError(): void;

    /**
     * Handles the end of video playback.
     */
    protected static _onVideoEnd(): void;

    /**
     * Updates the visibility of the video element.
     * @param {boolean} videoVisible - Whether the video should be visible.
     */
    protected static _updateVisibility(videoVisible: boolean): void;

    /**
     * Determines if the video is currently visible.
     * @returns {boolean} True if the video is visible, false otherwise.
     */
    protected static _isVideoVisible(): boolean;

    /**
     * Sets up event handlers for graphics interactions.
     */
    protected static _setupEventhandlers(): void;

    /**
     * Handles window resize events.
     */
    protected static _onWindowResize(): void;

    /**
     * Handles key press events related to rendering.
     */
    protected static _onKeyDown(): void;

    /**
     * Toggles the visibility of the FPS meter.
     */
    protected static _switchFPSMeter(): void;

    /**
     * Toggles stretch mode for rendering.
     */
    protected static _switchStretchMode(): void;

    /**
     * Switches between fullscreen and windowed mode.
     */
    protected static _switchFullScreen(): void;

    /**
     * Checks whether fullscreen mode is active.
     * @returns {boolean} True if fullscreen is enabled, false otherwise.
     */
    protected static _isFullScreen(): boolean;

    /**
     * Requests fullscreen mode for the graphics container.
     */
    protected static _requestFullScreen(): void;

    /**
     * Cancels fullscreen mode, returning to windowed mode.
     */
    protected static _cancelFullScreen(): void;
    // #endregion =========================== protected static methods ============================== //
}