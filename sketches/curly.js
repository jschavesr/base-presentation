var sketch = function( p ) {
    var a = [5, 20, 25, 45, 70]; 
    
    p.setup = function() {
        p.createCanvas(400, 400);
        p.noLoop();
    };
    
    p.draw = function() { 
        p.background(255,255,0);
        for (var i=0; i < a.length; i++) {
            p.line(0, a[i], 50, a[i]);
        }
        
    };
};

var myp5 = new p5(sketch, 'curly_id');