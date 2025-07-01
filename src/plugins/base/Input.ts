// $PluginCompiler TEW_Base.js
// $StartCompilation

//----------------------------------
// Input
//
// Key inputs detection and history.

Input.prototype.isAnyKeyTriggered = function() {
    return this._currentState.some((key: any) => !!key) && this._pressedTime === 0;
};
