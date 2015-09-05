var sketch = function( p ) {
    p.setup = function() {
        p.createCanvas(200, 200);
        p.noLoop(); 
    };
    
    p.draw = function() {
        for (var i = 5; i < p.height; i += 5) {
            p.stroke(255);   // Set the color to white
            if (i < 35) {  // When 'i' is less than 35...
                p.stroke(0);   //...set the color to black
            }
            p.line(30, i, 80, i);
        } 
    };
};

var myp5 = new p5(sketch, 'if_id');