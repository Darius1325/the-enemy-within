// $PluginCompiler TEW_Base.js
// $StartCompilation
// Bitmap
TEW.DIE_10_POINTS = [
    [0, 22],
    [0, 45],
    [38, 67],
    [42, 67],
    [80, 45],
    [80, 22],
    [40, 0],
    [16, 50],
    [40, 63],
    [40, 67],
    [64, 50]
];
TEW.drawLine = function (context, start, end) {
    context.moveTo(start[0], start[1]);
    context.lineTo(end[0], end[1]);
};
Bitmap.prototype.drawDie = function (x, size, value, edgeColor, fillColor) {
    const points = [];
    for (let i = 0; i < TEW.DIE_10_POINTS.length; i++) {
        points.push([TEW.DIE_10_POINTS[i][0] + x, TEW.DIE_10_POINTS[i][1]]);
    }
    var context = this._context;
    context.save();
    context.strokeStyle = edgeColor;
    context.fillStyle = fillColor;
    context.beginPath();
    context.moveTo(...points[0]);
    context.lineTo(...points[1]);
    context.lineTo(...points[2]);
    context.lineTo(...points[3]);
    context.lineTo(...points[4]);
    context.lineTo(...points[5]);
    context.lineTo(...points[6]);
    context.closePath();
    context.fill();
    context.stroke();
    TEW.drawLine(context, points[7], points[1]);
    TEW.drawLine(context, points[7], points[6]);
    TEW.drawLine(context, points[7], points[8]);
    TEW.drawLine(context, points[10], points[8]);
    TEW.drawLine(context, points[10], points[6]);
    TEW.drawLine(context, points[10], points[4]);
    TEW.drawLine(context, points[9], points[8]);
    context.stroke();
    this.drawText(value, 33 + x, 27, 16, 25, 'left');
    context.restore();
    this._setDirty();
};
