// ----------------------
// Decrypter

// ----------------------
// Imports
// ----------------------
import { Bitmap } from "./Bitmap";
import { BGM } from "../data/RPG_Audio";

/**
 * Handles the decryption of encrypted assets such as images and audio.
 * Provides methods for decrypting array buffers and verifying encryption states.
 */
export declare class Decrypter {

	// #region ============================== static properties ============================== //
    /**
     * The signature used for encrypted files.
     */
    public static readonly SIGNATURE: string;

    /**
     * The encryption version identifier.
     */
    public static readonly VER: string;

    /**
     * The remaining data marker for encrypted files.
     */
    public static readonly REMAIN: string;

    /**
     * Indicates if encrypted images are present.
     */
    public static hasEncryptedImages: boolean;

    /**
     * Indicates if encrypted audio files are present.
     */
    public static hasEncryptedAudio: boolean;
    // #endregion =========================== static properties ============================== //
	// ============================== //
    // #region ============================== private properties ============================== //
    /**
	 * The length of the encryption header in bytes.
	*/
    private static _headerlength: number;
	
    /**
	 * The success status code for XMLHttpRequest operations.
	*/
    private static _xhrOk: number;
	
    /**
	 * The encryption key used for decryption operations.
	*/
    private static _encryptionKey: string;
	
    /**
	 * List of files that should be ignored during decryption checks.
	*/
    private static _ignoreList: string[];
	// #endregion =========================== private properties ============================== //
	// ============================== //
	// #region ============================== static methods ============================== //
	/**
     * Checks if the given image URL should be ignored based on the internal ignore list.
     * @param {string} url - The URL of the image to check.
     * @returns {boolean} True if the image should be ignored, false otherwise.
     */
    public static checkImgIgnore(url: string): boolean;

    /**
     * Decrypts an image file and applies the decrypted data to a Bitmap object.
     * @param {string} url - The URL of the encrypted image.
     * @param {Bitmap} bitmap - The Bitmap object where the decrypted image will be stored.
     */
    public static decryptImg(url: string, bitmap: Bitmap): void;

    /**
     * Decrypts an HTML5 audio file.
     * @param {string} url - The URL of the encrypted audio file.
     * @param {BGM} bgm - The background music object associated with the decrypted audio.
     * @param {number} pos - The position in the audio file where playback resumes.
     */
    public static decryptHTML5Audio(url: string, bgm: BGM, pos: number): void;

    /**
     * Decrypts a given array buffer containing encrypted data.
     * @param {ArrayBuffer} arrayBuffer - The encrypted data buffer.
     * @returns {ArrayBuffer} The decrypted array buffer.
     */
    public static decryptArrayBuffer(arrayBuffer: ArrayBuffer): ArrayBuffer;

    /**
     * Removes the encryption header from an array buffer, extracting only the relevant data.
     * @param {ArrayBuffer} arrayBuffer - The buffer containing the encrypted data.
     * @param {number} length - The length of the header to remove.
     * @returns {ArrayBuffer} The processed array buffer without the encryption header.
     */
    public static cutArrayHeader(arrayBuffer: ArrayBuffer, length: number): ArrayBuffer;

    /**
     * Creates a Blob URL from a decrypted array buffer, allowing it to be used for rendering.
     * @param {ArrayBuffer} arrayBuffer - The decrypted data buffer.
     * @returns {string} The generated Blob URL.
     */
    public static createBlobUrl(arrayBuffer: ArrayBuffer): string;

    /**
     * Converts a standard file extension to its encrypted equivalent.
     * @param {string} url - The URL of the file to convert.
     * @returns {string} The modified URL with an encrypted file extension.
     */
    public static extToEncryptExt(url: string): string;

    /**
     * Reads the encryption key from the internal system.
     * Initializes the key for decryption operations.
     */
    public static readEncryptionkey(): void;
	// #endregion =========================== static methods ============================== //
}