// $PluginCompiler TEW_Combat.js
// $StartCompilation

//-----------------------------------------------------------------------------
// Window_BattleLog
//
// The window for displaying battle progress. No frame is displayed, but it is
// handled as a window for convenience.

const windowBattleLogShowNormalAnimation = Window_BattleLog.prototype.showNormalAnimation;
Window_BattleLog.prototype.showNormalAnimation = function(targets, animationId, mirror) {
    if ($gamePartyTs.inBattle()) {
        var animation = $dataAnimations[animationId];
        if (animation) {
            targets.forEach(function(target) {
                target.event().requestAnimation(animationId);
            });
        }
    } else {
        windowBattleLogShowNormalAnimation.call(this, targets, animationId, mirror);
    }
};
