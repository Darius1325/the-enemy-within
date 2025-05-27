// ----------------------
// Number Extensions

/**
 * Extends the `Number` interface with additional utility functions.
 * Provides methods for clamping values, handling modular arithmetic, and padding numbers with zeros.
 */
export declare interface Number {

// #region ============================== Public methods ============================== //
    /**
     * Clamps the current number between a minimum and maximum value.
     * @param {number} min - The lower bound.
     * @param {number} max - The upper bound.
     * @returns {number} The clamped value within the specified range.
     */
    clamp(min: number, max: number): number;

    /**
     * Returns the remainder of the current number divided by `n`, ensuring correct behavior with negative values.
     * @param {number} n - The divisor.
     * @returns {number} The modulo result.
     */
    mod(n: number): number;

    /**
     * Pads the current number with leading zeros to reach a specified length.
     * @param {number} length - The desired string length.
     * @returns {string} The number formatted with leading zeros.
     */
    padZero(length: number): string;
// #endregion =========================== Public methods ============================== //
}