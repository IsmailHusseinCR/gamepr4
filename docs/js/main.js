"use strict";
class Canvas {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.c = this.canvas.getContext("2d");
        this.circle = new Circle(300, 300, 5, 5, this.c, 30, 0, Math.PI * 2, false);
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.speedX = (Math.random() - 0.5 * 8);
        this.speedY = (Math.random() - 0.5 * 8);
    }
    update() {
        this.c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.c.beginPath();
        this.c.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
        this.c.strokeStyle = "blue";
        this.c.stroke();
        this.circle.draw();
        if (this.x + 30 > window.innerWidth || this.x - 30 < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + 30 > window.innerHeight || this.y + 30 < 0) {
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }
}
class Shapes {
    constructor(x, y, speedX, speedY, c) {
        this.c = c;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    draw() {
    }
}
class Circle extends Shapes {
    constructor(x, y, speedX, speedY, c, radius, startAngle, endAngle, counterClockWise) {
        super(x, y, speedX, speedY, c);
        this.c = c;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.counterClockwise = counterClockWise;
    }
    draw() {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, false);
        this.c.strokeStyle = "blue";
        this.c.stroke();
    }
}
class Game {
    constructor() {
        this.canvas = new Canvas();
        console.log(this.canvas);
        this.gameLoop();
    }
    gameLoop() {
        this.canvas.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
window.addEventListener("load", () => new Game());
class Rectangle {
    constructor() {
    }
}
class Triangle {
    constructor() {
    }
}
//# sourceMappingURL=main.js.map