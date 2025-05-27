// ----------------------
// CacheEntry

// ----------------------
// Imports
// ----------------------
import { CacheMap } from "./CacheMap";

/**
 * Represents a resource that can be cached and freed based on usage and time.
 * Allows garbage collection if unused for a specified duration.
 */
export declare class CacheEntry {

    // #region ============================== public properties ============================== //
    /**
     * The cache map that stores this entry.
     */
    public cache: CacheMap;

    /**
     * The unique key identifying this cache entry.
     */
    public key: string;

    /**
     * The actual cached item.
     */
    public item: any;

    /**
     * Indicates whether the item is currently stored in the cache.
     */
    public cached: boolean;

    /**
     * The number of ticks since the last touch event.
     */
    public touchTicks: number;

    /**
     * The number of seconds since the last touch event.
     */
    public touchSeconds: number;

    /**
     * The time-to-live in ticks before the entry is freed.
     */
    public ttlTicks: number;

    /**
     * The time-to-live in seconds before the entry is freed.
     */
    public ttlSeconds: number;

    /**
     * Indicates if the entry was freed due to TTL expiration.
     */
    public freedByTTL: boolean;
    // #endregion =========================== public properties ============================== //
    // ============================== //
    // #region ============================== constructor ============================== //
    /**
     * Creates a new cache entry.
     * @param {CacheMap} cache - The cache map where this entry is stored.
     * @param {string} key - The unique identifier for this entry.
     * @param {any} item - The resource to cache.
     */
    public constructor(cache: CacheMap, key: string, item: any);
    // #endregion =========================== constructor ============================== //
    // ============================== //
    // #region ============================== public methods ============================== //
    /**
     * Frees the cache entry, optionally due to TTL expiration.
     * @param {boolean} byTTL - Whether the entry is freed due to TTL expiration.
     */
    public free(byTTL: boolean): void;

    /**
     * Allocates the cache entry, ensuring it remains in use.
     * @returns {CacheEntry} The current cache entry.
     */
    public allocate(): CacheEntry;

    /**
     * Sets the time-to-live for the cache entry in both ticks and seconds.
     * @param {number} ticks - The number of ticks before expiration.
     * @param {number} seconds - The number of seconds before expiration.
     * @returns {CacheEntry} The current cache entry.
     */
    public setTimeToLive(ticks: number, seconds: number): CacheEntry;

    /**
     * Determines whether the cache entry is still valid and has not expired.
     * @returns {boolean} True if the entry is still valid, false otherwise.
     */
    public isStillAlive(): boolean;

    /**
     * Updates the touch counters, marking the entry as recently accessed.
     */
    public touch(): void;
    // #endregion =========================== public methods ============================== //
}