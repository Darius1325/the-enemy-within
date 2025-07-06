// $PluginCompiler TEW_Base.js 10
// $StartCompilation

//----------------------------------
// Input
//
// Key inputs detection and history.

Input.isAnyKeyTriggered = function() {
    return Object.keys(this._currentState).some((key: string) => this._currentState[key])
            && this._pressedTime === 0;
};
