//-----------------------------------------------------------------------------
// String Extensions

/**
 * Extends the `String` interface with additional utility functions.
 * Provides methods for searching, formatting, and padding strings.
 */
export declare interface String {

// #region ============================== Public methods ============================== //
    /**
     * Checks if the string contains the specified substring.
     * @param {string} string - The substring to search for.
     * @returns {boolean} True if the substring is found, false otherwise.
     */
    contains(string: string): boolean;

    /**
     * Formats the string by replacing placeholders with corresponding values.
     * @returns {string} The formatted string.
     */
    format(): string;

    /**
     * Pads the current string with leading zeros to reach a specified length.
     * @param {number} length - The desired string length.
     * @returns {string} The string formatted with leading zeros.
     */
    padZero(length: number): string;
// #endregion =========================== Public methods ============================== //
}