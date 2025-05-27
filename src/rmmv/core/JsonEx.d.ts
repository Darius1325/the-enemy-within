// ----------------------
// JsonEx

/**
 * The static class that handles JSON with object information.
 * Provides methods for serializing, parsing, and deep copying objects.
 */
export declare class JsonEx {

    // #region ============================== Public static properties ============================== //
    /**
     * The maximum depth allowed for object serialization.
     */
    public static maxDepth: number;
    // #endregion =========================== Public static properties ============================== //
    // ============================== //
    // #region ============================== Public static methods ============================== //
    /**
     * Converts an object into a JSON string representation.
     * @param {Object} object - The object to serialize.
     * @returns {string} The JSON string representing the object.
     */
    public static stringify(object: Object): string;

    /**
     * Parses a JSON string and returns the corresponding object.
     * @param {string} json - The JSON string to parse.
     * @returns {Object} The deserialized object.
     */
    public static parse(json: string): Object;

    /**
     * Creates a deep copy of an object.
     * @param {Object} object - The object to copy.
     * @returns {Object} The deep-copied object.
     */
    public static makeDeepCopy(object: Object): Object;
    // #endregion =========================== Public static methods ============================== //
    // ============================== //
    // #region ============================== Private static methods ============================== //
    /**
     * Encodes an object for serialization.
     * @param {Object} value - The object to encode.
     * @param {number} [depth] - The current serialization depth.
     * @returns {Object} The encoded object.
     */
    private static _encode(value: Object, depth?: number): Object;

    /**
     * Decodes an object from its serialized state.
     * @param {Object} value - The serialized object to decode.
     * @returns {Object} The decoded object.
     */
    private static _decode(value: Object): Object;

    /**
     * Retrieves the constructor name of an object.
     * @param {Object} value - The object to analyze.
     * @returns {string} The constructor name of the object.
     */
    private static _getConstructorName(value: Object): string;

    /**
     * Resets the prototype of an object to ensure correct deserialization.
     * @param {Object} value - The object to modify.
     * @param {Object} prototype - The prototype to apply.
     * @returns {Object} The object with the restored prototype.
     */
    private static _resetPrototype(value: Object, prototype: Object): Object;
    // #endregion =========================== Private static methods ============================== //
}