// Counter object
function Counter() {
    this.count = 0;

    this.increase = function() {
        this.count++;
    };

    this.draw = function() {
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Bounces: " + this.count, 10, 30);
    };
}

// create counter
var counter = new Counter();