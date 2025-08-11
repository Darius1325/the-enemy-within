// ----------------------
// Array Extensions
// ----------------------

/**
 * Extends the built-in Array type with additional utility methods.
 * Provides functionality for cloning arrays, checking element existence, and comparing arrays.
 */
export declare interface Array<T> {
    // #region ============================== Public methods ============================== //
    /**
     * Creates and returns a copy of the current array.
     * @returns {ArrayConstructor} A new array containing the same elements.
     */
    clone(): ArrayConstructor;

    /**
     * Checks if the array contains a specific element.
     * @param {any} element - The element to search for.
     * @returns {boolean} True if the element exists in the array, otherwise false.
     */
    contains(element: any): boolean;

    /**
     * Compares the current array with another array to check if they are equal.
     * @param {ArrayConstructor} array - The array to compare with.
     * @returns {boolean} True if both arrays have identical elements, otherwise false.
     */
    equals(array: ArrayConstructor): boolean;
    // #endregion =========================== Public methods ============================== //
}