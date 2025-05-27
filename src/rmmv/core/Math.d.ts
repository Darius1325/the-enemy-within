// ----------------------
// Math Extensions

/**
 * Extends the `Math` interface with additional utility functions.
 * Provides methods for generating random integers.
 */
export declare interface Math {

    // #region ============================== Public methods ============================== //
    /**
     * Generates a random integer between 0 and the specified maximum value (exclusive).
     * @param {number} max - The upper bound (exclusive).
     * @returns {number} A random integer in the range [0, max).
     */
    randomInt(max: number): number;
    // #endregion =========================== Public methods ============================== //
}