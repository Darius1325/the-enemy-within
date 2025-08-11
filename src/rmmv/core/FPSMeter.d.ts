// ----------------------
// FPSMeter

/**
 * Monitors and displays frames per second (FPS) performance statistics.
 * Provides methods for showing, hiding, and tracking frame durations.
 */
export declare class FPSMeter {

    // #region ============================== public properties ============================== //
    /**
     * Indicates whether the FPS meter is currently paused.
     */
    public isPaused: boolean;
    // #endregion =========================== public properties ============================== //
    // ============================== //
    // #region ============================== public methods ============================== //
    /**
     * Displays the FPS meter on screen.
     */
    public show(): void;

    /**
     * Hides the FPS meter from view.
     */
    public hide(): void;

    /**
     * Switches the display mode to show FPS statistics.
     */
    public showFps(): void;

    /**
     * Switches the display mode to show frame duration statistics.
     */
    public showDuration(): void;

    /**
     * Starts tracking a new frame cycle.
     */
    public tickStart(): void;

    /**
     * Completes the tracking of the current frame cycle.
     */
    public tick(): void;
    // #endregion =========================== public methods ============================== //
}