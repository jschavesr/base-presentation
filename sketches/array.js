// took from here http://p5js.org/examples/examples/Arrays_Array.php

var sketch = function( p ) {
    var coswave = [];
    
    p.setup = function() {
        p.createCanvas(720, 360);
        for (var i = 0; i < p.width; i++) {
            var amount = p.map(i, 0, p.width, 0, p.PI);
            coswave[i] = p.abs(p.cos(amount));
        }
        p.background(255);
        p.noLoop();       
    };
    
    p.draw = function() {
        var y1 = 0;
        var y2 = p.height/3;
        for (var i = 0; i < p.width; i+=3) {
            p.stroke(coswave[i]*255);
            p.line(i, y1, i, y2);
        }
        
        y1 = y2;
        y2 = y1 + y1;
        for (var i = 0; i < p.width; i+=3) {
            p.stroke(coswave[i]*255 / 4);
            p.line(i, y1, i, y2);
        }
        
        y1 = y2;
        y2 = p.height;
        for (var i = 0; i < p.width; i+=3) {
            p.stroke(255 - coswave[i]*255);
            p.line(i, y1, i, y2);
        }        
    };
};

var myp5 = new p5(sketch, 'array_id');