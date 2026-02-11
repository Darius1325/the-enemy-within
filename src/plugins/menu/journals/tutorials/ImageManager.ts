// $PluginCompiler TEW_Menus.js 1

// $StartCompilation

ImageManager.reserveTutorial = function(filename: string, reservationId: string) {
    return this.reserveBitmap('img/tutorials/', filename, 0, true, reservationId);
};

ImageManager.loadTutorial = function(filename: string) {
    return this.loadBitmap('img/tutorials/', filename, 0, true);
};
