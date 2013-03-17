var color = require('onecolor'),
    Canvas = require('canvas');

function getSolidColorCanvas(size, color){
  var canvas = new Canvas(size, size),
    ctx = canvas.getContext('2d');

  ctx.fillStyle = color;
  ctx.fillRect(0,0,size,size);
  ctx.fill();
  return canvas;
}

exports.index = function(req, res){
  var colorName = req.route.params[0],
    col = color(colorName),
    cHex,
    canvas;

  if(!col){
    colorName = 'black';
  }

  cHex = color(colorName).hex();
  canvas = getSolidColorCanvas(64, cHex);
  canvas.toDataURL('image/png', function (err, dataUrl){
    res.render('index', {
      colorName: colorName,
      color: cHex,
      imageUrl: dataUrl,
      pageUrl: req.protocol + '://' + req.get('host') + req.url
    });
  });
};
