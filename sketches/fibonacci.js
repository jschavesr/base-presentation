var sketch = function( p ) {
    var squares = 5; 
    
    p.setup = function() {
        p.createCanvas(400, 400);
        p.noLoop();
    };
    
    p.draw = function() {
        p.background(255,0, 255);
        var w = p.width / squares;
        for(var i = 0; i < squares; i++) {
            p.fill(p.map(fibonacci(i+1), fibonacci(squares), 0, 0, 255));
            //p.fill(fibonacci(i+1));
            p.rect(i*w,0,w,50);
        }
    };
    
    function fibonacci(n) {
        var x = 0, y = 1, z = 1;
        for (var i = 1; i < n; i++) {
            x = y;
            y = z;
            z = x + y;
        }
        return x;
    }
};

var myp5 = new p5(sketch, 'fibonacci_id');