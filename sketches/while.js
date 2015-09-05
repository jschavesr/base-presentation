var sketch = function( p ) {
    p.setup = function() {
        p.createCanvas(200, 200);
        p.noLoop();
    };
    
    p.draw = function() {
        p.stroke(255,255,0);
        var i = 0;
        while (i < 80) {
            p.line(30, i, 80, i);
            i = i + 5;
        } 
    };
};

var myp5 = new p5(sketch, 'while_id');