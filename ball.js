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

    var radius = this.width / 2;

    // Right wall
    if (this.x + radius > canvas.width) {
        this.x = canvas.width - radius;
        this.vx *= -1;
    }

    // Left wall
    if (this.x - radius < 0) {
        this.x = radius;
        this.vx *= -1;
    }

    // Bottom wall
    if (this.y + radius > canvas.height) {
        this.y = canvas.height - radius;
        this.vy *= -1;
    }

    // Top wall
    if (this.y - radius < 0) {
        this.y = radius;
        this.vy *= -1;
    }
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