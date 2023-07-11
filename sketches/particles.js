var sketch = function( p ) {
let angle1 = 0;
let angle2 = 0;
let scalar = 70;

p.setup = function() {
  p.createCanvas(710, 400);
  p.noStroke();
  p.rectMode(p.CENTER);
  
};

p.draw = function(){
  p.background(0);

  let ang1 = p.radians(angle1);
  let ang2 = p.radians(angle2);


  let x1 = p.width / 2 + scalar * p.cos(ang1);
  let x2 = p.width / 2 + scalar * p.cos(ang2);

  let y1 = p.height / 2 + scalar * p.sin(ang1);
  let y2 = p.height / 2 + scalar * p.sin(ang2);

  p.fill(255);
  p.rect(p.width * 0.5, p.height * 0.5, 140, 140);

  p.fill(0, 102, 153);
  p.ellipse(x1, p.height * 0.5 - 120, scalar, scalar);
  p.ellipse(x2, p.height * 0.5 + 120, scalar, scalar);

  p.fill(255, 204, 0);
  p.ellipse(p.width * 0.5 - 120, y1, scalar, scalar);
  p.ellipse(p.width * 0.5 + 120, y2, scalar, scalar);

  angle1 += 2;
  angle2 += 3;
}

};

var myp5 = new p5(sketch, 'particles');