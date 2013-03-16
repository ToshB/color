
/*
 * GET home page.
 */
var color = require('onecolor'),
    Canvas = require('canvas');

exports.index = function(req, res){
  var c = color(req.route.params[0]) || color('black'),
    cHex = c.hex(),
    canvas = new Canvas(100,100),
    ctx = canvas.getContext('2d');

  ctx.fillStyle = cHex;
  ctx.fill();

  console.log(c);
  res.render('index', {
    color: c.hex(),
    image: canvas.toDataUrl()
  });
};
