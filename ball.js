// Ball Function
function Ball() {
    // Ball Properties
    this.x = 400;
    this.y = 250;
    this.width = 50;
    this.height = 50;
    this.color = "purple";
    this.force = 0;
    this.vx = 0;
    this.vy = 0;

    // Draw Method
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(
            this.x,                // x position
            this.y,                // y position
            this.width / 2,        // radius
            0,
            360 * Math.PI / 180,
            true
        );
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    // Move Method
    this.move = function() {
        this.x += this.vx;
        this.y += this.vy;
    };
}

// Canvas setup
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Create Ball
var ball = new Ball();

// Draw Ball
ball.draw();