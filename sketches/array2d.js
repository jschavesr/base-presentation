// took from here http://p5js.org/examples/examples/Arrays_Array_2D.php

var sketch = function( p ) {
    var distances = [];
    var maxDistance;
    var spacer;
    
    p.setup = function() {
        p.createCanvas(720, 360);
        maxDistance = p.dist(p.width/2, p.height/2, p.width, p.height);
        for (var x = 0; x < p.width; x++) {
            distances[x] = []; // create nested array
            for (var y = 0; y < p.height; y++) {
                var distance = p.dist(p.width/2, p.height/2, x, y);
                distances[x][y] = distance/maxDistance * 255;
            }
        }
        spacer = 10;
        p.noLoop();  // Run once and stop
    };
    
    p.draw = function() {
        p.background(0);
        // This embedded loop skips over values in the arrays based on
        // the spacer variable, so there are more values in the array
        // than are drawn here. Change the value of the spacer variable
        // to change the density of the points
        for (var x = 0; x < p.width; x += spacer) {
            for (var y = 0; y < p.height; y += spacer) {
                p.stroke(distances[x][y]);
                p.point(x + spacer/2, y + spacer/2);
            }
        }        
    };
}

var myp5 = new p5(sketch, 'array2d_id');