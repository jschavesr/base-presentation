var sketch = function( p ) {
    p.setup = function() {
        p.createCanvas(200, 200);
        p.noLoop();
    };
    
    p.draw = function() {
        p.stroke(255,0,255);
        for (var i = 40; i < 80; i = i+5) {
            p.line(30, i, 80, i);
        }
    };
};

var myp5 = new p5(sketch, 'for_id');