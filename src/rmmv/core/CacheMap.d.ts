// ----------------------
// CacheMap

// ----------------------
// Imports
// ----------------------
import { CacheEntry } from "../../../src/rmmv/core/CacheEntry";

/**
 * Manages the caching of various resources such as images, audio, or other data.
 * Provides methods for storing, retrieving, and clearing cache entries efficiently.
 */
export declare class CacheMap {

	// #region ============================== public properties ============================== //
    /**
     * The cache manager responsible for handling the cache operations.
     */
    public manager: any;

    /**
     * Number of ticks since the last update.
     */
    public updateTicks: number;

    /**
     * Time of the last TTL (Time-To-Live) check.
     */
    public lastCheckTTL: number;

    /**
     * Delay before performing another TTL check.
     */
    public delayCheckTTL: number;

    /**
     * Number of seconds since the last update.
     */
    public updateSeconds: number;
    // #endregion =========================== public properties ============================== //
    // ============================== //
    // #region ============================== private properties ============================== //
    /**
     * The internal cache storage containing cache entries.
     */
    private _inner: { [s: string]: CacheEntry };

    /**
     * Stores entries that were removed from the cache.
     */
    private _lastRemovedEntries: CacheEntry[];
    // #endregion =========================== private properties ============================== //
    // ============================== //
    // #region ============================== constructor ============================== //
    /**
     * Creates a new cache map for resource management.
     * @param {any} manager - The cache manager instance.
     */
    public constructor(manager: any);
    // #endregion =========================== constructor ============================== //
    // ============================== //
    // #region ============================== public methods ============================== //
    /**
     * Performs a time-to-live (TTL) check on cached entries and removes expired ones.
     */
    public checkTTL(): void;

    /**
     * Clears all entries from the cache.
     */
    public clear(): void;

    /**
     * Retrieves an item from the cache using its key.
     * @param {string} key - The key of the cache entry.
     * @returns {any} The cached item, or undefined if not found.
     */
    public getItem(key: string): any;

    /**
     * Stores an item in the cache with the given key.
     * @param {string} key - The key to associate with the cached item.
     * @param {any} item - The resource to store.
     * @returns {CacheEntry} The cache entry that was created.
     */
    public setItem(key: string, item: any): CacheEntry;

    /**
     * Updates the cache entries over time based on ticks and time passed.
     * @param {number} ticks - The number of ticks since the last update.
     * @param {number} delta - The elapsed time in seconds.
     */
    public update(ticks: number, delta: number): void;
	// #region ============================== public methods ============================== //
}