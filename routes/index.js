
/*
 * GET home page.
 */
var color = require('onecolor'),
    Canvas = require('canvas');

exports.index = function(req, res){
  var colorName = req.route.params[0],
    col = color(colorName),
    cHex,
    canvas = new Canvas(200,200),
    ctx = canvas.getContext('2d');

  if(!col){
    colorName = 'black';
  }
  cHex = color(colorName).hex();

  ctx.fillStyle = cHex;
  ctx.fillRect(0,0,200,200);
  ctx.fill();

  res.render('index', {
    colorName: colorName,
    color: cHex,
    imageUrl: canvas.toDataURL()
  });
};
