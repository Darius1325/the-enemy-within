const TEW = {};
export default TEW;
// $StartCompilation
var Imported = Imported || {};
Imported.TEW_Constants = true;
// var TEW = TEW || {};
//
export var Stat;
(function (Stat) {
    Stat["MHP"] = "mhp";
    Stat["WEAS"] = "weas";
    Stat["BALS"] = "bals";
    Stat["STRG"] = "strg";
    Stat["TOUG"] = "toug";
    Stat["AGIL"] = "agil";
    Stat["DEXT"] = "dext";
    Stat["INIT"] = "init";
    Stat["INTL"] = "intl";
    Stat["FELW"] = "felw";
    Stat["WILL"] = "will";
})(Stat || (Stat = {}));
;
/**
 * Armor types
 */
export var ArmorGroup;
(function (ArmorGroup) {
    ArmorGroup[ArmorGroup["SOFT_KIT"] = 0] = "SOFT_KIT";
    ArmorGroup[ArmorGroup["BOILED_LEATHER"] = 1] = "BOILED_LEATHER";
    ArmorGroup[ArmorGroup["PLATE"] = 2] = "PLATE";
    ArmorGroup[ArmorGroup["BREASTPLATE"] = 3] = "BREASTPLATE";
    ArmorGroup[ArmorGroup["CHAINMAIL"] = 4] = "CHAINMAIL";
    ArmorGroup[ArmorGroup["BRIGANDINE"] = 5] = "BRIGANDINE";
})(ArmorGroup || (ArmorGroup = {}));
;
/**
 * Armor types for display
 */
export var ArmorGroupLabel;
(function (ArmorGroupLabel) {
    ArmorGroupLabel["SOFT_KIT"] = "Soft Kit";
    ArmorGroupLabel["BOILED_LEATHER"] = "Boiled Leather";
    ArmorGroupLabel["PLATE"] = "Plate";
    ArmorGroupLabel["BREASTPLATE"] = "Breastplate";
    ArmorGroupLabel["CHAINMAIL"] = "Chainmail";
    ArmorGroupLabel["BRIGANDINE"] = "Brigandine";
})(ArmorGroupLabel || (ArmorGroupLabel = {}));
;
/**
 * Availibility of Armor, Weapon or Item
 */
export var Availability;
(function (Availability) {
    Availability[Availability["COMMON"] = 0] = "COMMON";
    Availability[Availability["RARE"] = 1] = "RARE";
    Availability[Availability["EXOTIC"] = 2] = "EXOTIC";
    Availability[Availability["SCARCE"] = 3] = "SCARCE";
})(Availability || (Availability = {}));
;
export var BodyLocation;
(function (BodyLocation) {
    BodyLocation[BodyLocation["ARMS"] = 0] = "ARMS";
    BodyLocation[BodyLocation["LEGS"] = 1] = "LEGS";
    BodyLocation[BodyLocation["HEAD"] = 2] = "HEAD";
    BodyLocation[BodyLocation["BODY"] = 3] = "BODY";
})(BodyLocation || (BodyLocation = {}));
;
export var ArmorQuality;
(function (ArmorQuality) {
    ArmorQuality[ArmorQuality["PARTIAL"] = 0] = "PARTIAL";
    ArmorQuality[ArmorQuality["REINFORCED"] = 1] = "REINFORCED";
    ArmorQuality[ArmorQuality["IMPENETRABLE"] = 2] = "IMPENETRABLE";
    ArmorQuality[ArmorQuality["OVERCOAT"] = 3] = "OVERCOAT";
    ArmorQuality[ArmorQuality["VISOR"] = 4] = "VISOR";
    ArmorQuality[ArmorQuality["WEAKPOINTS"] = 5] = "WEAKPOINTS";
    ArmorQuality[ArmorQuality["REQUIRES_KIT"] = 6] = "REQUIRES_KIT";
})(ArmorQuality || (ArmorQuality = {}));
;
export var ItemGroup;
(function (ItemGroup) {
    ItemGroup[ItemGroup["CLOTHES"] = 0] = "CLOTHES";
    ItemGroup[ItemGroup["FOOD"] = 1] = "FOOD";
    ItemGroup[ItemGroup["TOOLS"] = 2] = "TOOLS";
    ItemGroup[ItemGroup["BOOKS"] = 3] = "BOOKS";
    ItemGroup[ItemGroup["DRUGS"] = 4] = "DRUGS";
})(ItemGroup || (ItemGroup = {}));
export var ItemGroupLabel;
(function (ItemGroupLabel) {
    ItemGroupLabel["CLOTHES"] = "Clothes";
    ItemGroupLabel["FOOD"] = "Food";
    ItemGroupLabel["TOOLS"] = "Tools";
    ItemGroupLabel["BOOKS"] = "Books";
    ItemGroupLabel["DRUGS"] = "Drugs";
})(ItemGroupLabel || (ItemGroupLabel = {}));
export var Status;
(function (Status) {
    Status[Status["BRASS_1"] = 0] = "BRASS_1";
    Status[Status["BRASS_2"] = 1] = "BRASS_2";
    Status[Status["BRASS_3"] = 2] = "BRASS_3";
    Status[Status["SILVER_1"] = 3] = "SILVER_1";
    Status[Status["SILVER_2"] = 4] = "SILVER_2";
    Status[Status["SILVER_3"] = 5] = "SILVER_3";
    Status[Status["GOLD_1"] = 6] = "GOLD_1";
    Status[Status["GOLD_2"] = 7] = "GOLD_2";
    Status[Status["GOLD_3"] = 8] = "GOLD_3";
})(Status || (Status = {}));
