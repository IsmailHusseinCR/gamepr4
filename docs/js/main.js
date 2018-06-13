"use strict";
class Canvas {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.shapes = [];
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.c = this.canvas.getContext("2d");
        for (let i = 0; i < 10; i++) {
            this.shapes.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 8 + 1, Math.random() * 8 + 1, this.c, Math.random() * 30 + 1, 0, Math.PI * 2, false), new Rectangle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 8 + 1, Math.random() * 8 + 1, this.c, Math.random() * 100 + 1, Math.random() * 100 + 1));
        }
    }
    update() {
        this.c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (const shape of this.shapes) {
            shape.draw();
        }
    }
}
class Shape {
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
class Circle extends Shape {
    constructor(x, y, speedX, speedY, c, radius, startAngle, endAngle, counterClockWise) {
        super(x, y, speedX, speedY, c);
        this.c = c;
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
class Rectangle extends Shape {
    constructor(x, y, speedX, speedY, c, height, width) {
        super(x, y, speedX, speedY, c);
        this.height = height;
        this.width = width;
    }
    draw() {
        this.c.beginPath();
        this.c.fillRect(this.x, this.y, this.width, this.height);
        this.c.fillStyle = "red";
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
class Triangle {
    constructor() {
    }
}
//# sourceMappingURL=main.js.map