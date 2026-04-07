// Ball Function
function Ball() {
    this.x = 400;
    this.y = 250;
    this.width = 50;
    this.height = 50;
    this.color = "purple";
    this.force = 0;
    this.vx = 2; // horizontal speed
    this.vy = 0;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.width / 2,
            0,
            360 * Math.PI / 180,
            true
        );
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    };

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

// Game loop
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.move();
    ball.draw();

    requestAnimationFrame(update);
}

update();