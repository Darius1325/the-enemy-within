// $PluginCompiler TEW_Menus.js 1

// $StartCompilation

ImageManager.reserveImage = function(folder: string, filename: string, reservationId: string) {
    return this.reserveBitmap('img/' + folder + '/', filename, 0, true, reservationId);
};

ImageManager.loadImage = function(folder: string, filename: string) {
    return this.loadBitmap('img/' + folder + '/', filename, 0, true);
};
