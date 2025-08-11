// ----------------------
// LZString

/**
 * The static namespace that handles LZ-based compression and decompression.
 * Provides methods for compressing and decompressing data using various formats.
 */
export declare namespace LZString {

    // #region ============================== Public static methods ============================== //
    /**
     * Compresses a string using Base64 encoding.
     * @param {string} input - The string to compress.
     * @returns {string} The compressed Base64 string.
     */
    export function compressToBase64(input: string): string;

    /**
     * Decompresses a Base64-encoded string.
     * @param {string} input - The compressed Base64 string.
     * @returns {string} The original uncompressed string.
     */
    export function decompressFromBase64(input: string): string;

    /**
     * Compresses a string using UTF-16 encoding.
     * @param {string} input - The string to compress.
     * @returns {string} The compressed UTF-16 string.
     */
    export function compressToUTF16(input: string): string;

    /**
     * Decompresses a UTF-16 encoded string.
     * @param {string} compressed - The compressed UTF-16 string.
     * @returns {string} The original uncompressed string.
     */
    export function decompressFromUTF16(compressed: string): string;

    /**
     * Compresses a string into a Uint8Array.
     * @param {string} uncompressed - The string to compress.
     * @returns {Uint8Array} The compressed data as a Uint8Array.
     */
    export function compressToUint8Array(uncompressed: string): Uint8Array;

    /**
     * Decompresses a Uint8Array back into a string.
     * @param {Uint8Array} compressed - The compressed Uint8Array.
     * @returns {string} The original uncompressed string.
     */
    export function decompressFromUint8Array(compressed: Uint8Array): string;

    /**
     * Compresses a string into an encoded URI component format.
     * @param {string} input - The string to compress.
     * @returns {string} The compressed string formatted for URI encoding.
     */
    export function compressToEncodedURIComponent(input: string): string;

    /**
     * Decompresses a URI-encoded compressed string.
     * @param {string} compressed - The compressed URI-encoded string.
     * @returns {string} The original uncompressed string.
     */
    export function decompressFromEncodedURIComponent(compressed: string): string;

    /**
     * Compresses a string using default LZ-based compression.
     * @param {string} input - The string to compress.
     * @returns {string} The compressed string.
     */
    export function compress(input: string): string;

    /**
     * Decompresses a string using default LZ-based decompression.
     * @param {string} compressed - The compressed string.
     * @returns {string} The original uncompressed string.
     */
    export function decompress(compressed: string): string;
    // #endregion =========================== Public static methods ============================== //
}