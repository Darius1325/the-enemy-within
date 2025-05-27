// ----------------------
// Tilemap

// ----------------------
// Imports
// ----------------------
import { PIXI } from "../pixi";
import { Bitmap } from "./Bitmap";
import { Point } from "./Point";

/**
 * The tilemap which displays a 2D tile-based game map.
 * Extends `PIXI.Container` for compatibility with rendering operations.
 */
export declare class Tilemap extends PIXI.Container {

    // #region ============================== Public static properties ============================== //
    /**
     * Tile ID for type B terrain.
     */
    public static TILE_ID_B: number;

    /**
     * Tile ID for type C terrain.
     */
    public static TILE_ID_C: number;

    /**
     * Tile ID for type D terrain.
     */
    public static TILE_ID_D: number;

    /**
     * Tile ID for type E terrain.
     */
    public static TILE_ID_E: number;

    /**
     * Tile ID for type A5 terrain.
     */
    public static TILE_ID_A5: number;

    /**
     * Tile ID for type A1 terrain.
     */
    public static TILE_ID_A1: number;

    /**
     * Tile ID for type A2 terrain.
     */
    public static TILE_ID_A2: number;

    /**
     * Tile ID for type A3 terrain.
     */
    public static TILE_ID_A3: number;

    /**
     * Tile ID for type A4 terrain.
     */
    public static TILE_ID_A4: number;

    /**
     * Maximum tile ID value.
     */
    public static TILE_ID_MAX: number;

    /**
     * Lookup table for floor autotiles.
     */
    public static FLOOR_AUTOTILE_TABLE: number[][][];

    /**
     * Lookup table for wall autotiles.
     */
    public static WALL_AUTOTILE_TABLE: number[][][];

    /**
     * Lookup table for waterfall autotiles.
     */
    public static WATERFALL_AUTOTILE_TABLE: number[][][];
    // #endregion =========================== Public static properties ============================== //
    // ============================== //
    // #region ============================== Public static methods ============================== //
    /**
     * Determines if the specified tile is visible.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile is visible, false otherwise.
     */
    public static isVisibleTile(tileId: number): boolean;

    /**
     * Determines if the specified tile is an autotile.
     * @param {number} tileId - The ID of the tile.
     * @returns {number} The autotile type if applicable, otherwise 0.
     */
    public static isAutotile(tileId: number): number;

    /**
     * Retrieves the kind of an autotile.
     * @param {number} tileId - The ID of the autotile.
     * @returns {number} The kind of the autotile.
     */
    public static getAutotileKind(tileId: number): number;

    /**
     * Retrieves the shape of an autotile.
     * @param {number} tileId - The ID of the autotile.
     * @returns {number} The shape of the autotile.
     */
    public static getAutotileShape(tileId: number): number;

    /**
     * Generates an autotile ID based on its kind and shape.
     * @param {number} kind - The kind of the autotile.
     * @param {number} shape - The shape of the autotile.
     * @returns {number} The generated autotile ID.
     */
    public static makeAutotileId(kind: number, shape: number): number;

    /**
     * Checks if two tiles belong to the same kind.
     * @param {number} tileId1 - The first tile ID.
     * @param {number} tileId2 - The second tile ID.
     * @returns {boolean} True if the tiles are of the same kind, false otherwise.
     */
    public static isSameKindTile(tileId1: number, tileId2: number): boolean;

    /**
     * Checks whether the specified tile belongs to the A1 set.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile belongs to A1, false otherwise.
     */
    public static isTileA1(tileId: number): boolean;

    /**
     * Checks whether the specified tile belongs to the A2 set.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile belongs to A2, false otherwise.
     */
    public static isTileA2(tileId: number): boolean;

    /**
     * Checks whether the specified tile belongs to the A3 set.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile belongs to A3, false otherwise.
     */
    public static isTileA3(tileId: number): boolean;

    /**
     * Checks whether the specified tile belongs to the A4 set.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile belongs to A4, false otherwise.
     */
    public static isTileA4(tileId: number): boolean;

    /**
     * Checks whether the specified tile belongs to the A5 set.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile belongs to A5, false otherwise.
     */
    public static isTileA5(tileId: number): boolean;

    /**
     * Checks if the specified tile represents water.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile is water, false otherwise.
     */
    public static isWaterTile(tileId: number): boolean;

    /**
     * Checks if the specified tile represents a waterfall.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile is a waterfall, false otherwise.
     */
    public static isWaterfallTile(tileId: number): boolean;

    /**
     * Checks if the specified tile is a ground tile.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile is a ground tile, false otherwise.
     */
    public static isGroundTile(tileId: number): boolean;

    /**
     * Checks if the specified tile is a shadowing tile.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile has shadowing properties, false otherwise.
     */
    public static isShadowingTile(tileId: number): boolean;

    /**
     * Checks if the specified tile is a roof tile.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile is a roof tile, false otherwise.
     */
    public static isRoofTile(tileId: number): boolean;

    /**
     * Checks if the specified tile is the top of a wall.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile represents the top of a wall, false otherwise.
     */
    public static isWallTopTile(tileId: number): boolean;

    /**
     * Checks if the specified tile is the side of a wall.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile represents the side of a wall, false otherwise.
     */
    public static isWallSideTile(tileId: number): boolean;

    /**
     * Checks if the specified tile is a wall tile.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile is a wall tile, false otherwise.
     */
    public static isWallTile(tileId: number): boolean;

    /**
     * Checks if the specified tile is an autotile of the floor type.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if it is a floor-type autotile, false otherwise.
     */
    public static isFloorTypeAutotile(tileId: number): boolean;

    /**
     * Checks if the specified tile is an autotile of the wall type.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if it is a wall-type autotile, false otherwise.
     */
    public static isWallTypeAutotile(tileId: number): boolean;

    /**
     * Checks if the specified tile is an autotile of the waterfall type.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if it is a waterfall-type autotile, false otherwise.
     */
    public static isWaterfallTypeAutotile(tileId: number): boolean;
    // #endregion =========================== Public static methods ============================== //
    // ============================== //
    // #region ============================== Public properties ============================== //
    /**
     * The array of bitmap layers used for rendering tiles.
     */
    public bitmaps: Bitmap[];

    /**
     * The origin point of the tilemap, defining its starting position.
     */
    public origin: Point;

    /**
     * An array of tile flags determining special properties.
     */
    public flags: number[];

    /**
     * The animation count used to track tile animations.
     */
    public animationCount: number;

    /**
     * Indicates whether the tilemap wraps horizontally.
     */
    public horizontalWrap: boolean;

    /**
     * Indicates whether the tilemap wraps vertically.
     */
    public verticalWrap: boolean;

    /**
     * The width of the tilemap.
     */
    public width: number;

    /**
     * The height of the tilemap.
     */
    public height: number;

    /**
     * The width of a single tile.
     */
    public tileWidth: number;

    /**
     * The height of a single tile.
     */
    public tileHeight: number;
    // #endregion =========================== Public properties ============================== //
    // ============================== //
    // #region ============================== Protected properties ============================== //
    /**
     * The margin surrounding the tilemap.
     */
    protected _margin: number;

    /**
     * The internal width of the tilemap.
     */
    protected _width: number;

    /**
     * The internal height of the tilemap.
     */
    protected _height: number;

    /**
     * The width of a single tile.
     */
    protected _tileWidth: number;

    /**
     * The height of a single tile.
     */
    protected _tileHeight: number;

    /**
     * The total width of the map in tiles.
     */
    protected _mapWidth: number;

    /**
     * The total height of the map in tiles.
     */
    protected _mapHeight: number;

    /**
     * The array storing map data, representing each tile.
     */
    protected _mapData: number[];

    /**
     * The width of the tilemap layers.
     */
    protected _layerWidth: number;

    /**
     * The height of the tilemap layers.
     */
    protected _layerHeight: number;

    /**
     * Stores the last rendered tiles for optimization purposes.
     */
    protected _lastTiles: number[][][][];
    // #endregion =========================== Protected properties ============================== //
    // ============================== //
    // #region ============================== Public methods ============================== //
    /**
     * Creates a new `Tilemap` instance with the specified bitmap.
     * @param {Bitmap} bitmap - The bitmap used for rendering the tilemap.
     */
    public constructor(bitmap: Bitmap);

    /**
     * Sets the tilemap data, defining its width, height, and tile arrangement.
     * @param {number} width - The width of the tilemap in tiles.
     * @param {number} height - The height of the tilemap in tiles.
     * @param {number[]} data - The array representing tile data.
     */
    public setData(width: number, height: number, data: number[]): void;

    /**
     * Determines if the tilemap is fully loaded and ready for use.
     * @returns {boolean} True if the tilemap is ready, false otherwise.
     */
    public isReady(): boolean;

    /**
     * Updates the tilemap state, including animations and positioning.
     */
    public update(): void;

    /**
     * Refreshes the tilemap, recalculating tile arrangements and rendering updates.
     */
    public refresh(): void;

    /**
     * Updates the tilemap transformation, applying position and scaling changes.
     */
    public updateTransform(): void;
    // #endregion =========================== Public methods ============================== //
    // ============================== //
    // #region ============================== Protected methods ============================== //
    /**
     * Creates the necessary layers for rendering the tilemap.
     */
    protected _createLayers(): void;

    /**
     * Updates the positions of tilemap layers based on the given start coordinates.
     * @param {number} startX - The starting X position in tiles.
     * @param {number} startY - The starting Y position in tiles.
     */
    protected _updateLayerPositions(startX: number, startY: number): void;

    /**
     * Renders all tiles in the current viewport.
     * @param {number} startX - The starting X position in tiles.
     * @param {number} startY - The starting Y position in tiles.
     */
    protected _paintAllTiles(startX: number, startY: number): void;

    /**
     * Renders specific tiles at the given position.
     * @param {number} startX - The starting tilemap X position.
     * @param {number} startY - The starting tilemap Y position.
     * @param {number} x - The specific tile X position.
     * @param {number} y - The specific tile Y position.
     */
    protected _paintTiles(startX: number, startY: number, x: number, y: number): void;

    /**
     * Retrieves the last rendered tile data for optimization.
     * @param {number} i - The layer index.
     * @param {number} x - The X position in tiles.
     * @param {number} t - The tile index.
     * @returns {number[]} The last rendered tile data.
     */
    protected _readLastTiles(i: number, x: number, t: number): number[];

    /**
     * Stores the rendered tile data for future reference.
     * @param {number} i - The layer index.
     * @param {number} x - The X position in tiles.
     * @param {number} y - The Y position in tiles.
     * @param {number[]} tiles - The tile data to store.
     */
    protected _writeLastTiles(i: number, x: number, y: number, tiles: number[]): void;

    /**
     * Draws a tile onto the specified bitmap layer.
     * @param {Bitmap} bitmap - The bitmap layer where the tile is drawn.
     * @param {number} tileId - The ID of the tile.
     * @param {number} dx - The destination X coordinate in pixels.
     * @param {number} dy - The destination Y coordinate in pixels.
     */
    protected _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * Draws a normal tile onto the specified bitmap layer.
     * @param {Bitmap} bitmap - The bitmap layer where the tile is drawn.
     * @param {number} tileId - The ID of the tile.
     * @param {number} dx - The destination X coordinate in pixels.
     * @param {number} dy - The destination Y coordinate in pixels.
     */
    protected _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * Draws an autotile onto the specified bitmap layer.
     * @param {Bitmap} bitmap - The bitmap layer where the tile is drawn.
     * @param {number} tileId - The ID of the autotile.
     * @param {number} dx - The destination X coordinate in pixels.
     * @param {number} dy - The destination Y coordinate in pixels.
     */
    protected _drawAutotile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * Draws the table edge for proper layering of tiles.
     * @param {Bitmap} bitmap - The bitmap layer where the table edge is drawn.
     * @param {number} tileId - The ID of the tile.
     * @param {number} dx - The destination X coordinate in pixels.
     * @param {number} dy - The destination Y coordinate in pixels.
     */
    protected _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;

    /**
     * Draws shadows onto the tilemap.
     * @param {Bitmap} bitmap - The bitmap layer where the shadow is drawn.
     * @param {number} shadowBits - The shadow bitmask.
     * @param {number} dx - The destination X coordinate in pixels.
     * @param {number} dy - The destination Y coordinate in pixels.
     */
    protected _drawShadow(bitmap: Bitmap, shadowBits: number, dx: number, dy: number): void;

    /**
     * Reads tile data at the specified map coordinates.
     * @param {number} x - The X coordinate in tiles.
     * @param {number} y - The Y coordinate in tiles.
     * @param {number} z - The layer index.
     * @returns {number} The tile ID at the specified coordinates.
     */
    protected _readMapData(x: number, y: number, z: number): number;

    /**
     * Determines whether a tile is part of a higher elevation.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile is part of a higher elevation, false otherwise.
     */
    protected _isHigherTile(tileId: number): boolean;

    /**
     * Checks if a tile is designated as a table tile.
     * @param {number} tileId - The ID of the tile.
     * @returns {boolean} True if the tile is a table tile, false otherwise.
     */
    protected _isTableTile(tileId: number): boolean;

    /**
     * Determines if the given map coordinates correspond to an overpass position.
     * @param {number} mx - The X coordinate in map units.
     * @param {number} my - The Y coordinate in map units.
     * @returns {boolean} True if the position is an overpass, false otherwise.
     */
    protected _isOverpassPosition(mx: number, my: number): boolean;

    /**
     * Sorts the children of the tilemap for correct rendering order.
     */
    protected _sortChildren(): void;

    /**
     * Compares two display objects to determine rendering order.
     * @param {PIXI.DisplayObject} a - The first display object.
     * @param {PIXI.DisplayObject} b - The second display object.
     * @returns {number} The sorting order value.
     */
    protected _compareChildOrder(a: PIXI.DisplayObject, b: PIXI.DisplayObject): number;
    // #endregion =========================== Protected methods ============================== //
}