"use strict";
class Canvas {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.shapes = [];
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.c = this.canvas.getContext("2d");
        for (let i = 0; i < 500; i++) {
            this.shapes.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 2 + 1, Math.random() * 2 + 1, this.c, Math.random() * 3 + 1, 0, Math.PI * 2, false));
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
        this.minRadius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.counterClockwise = counterClockWise;
        this.mouse = {
            x: undefined,
            y: undefined,
            maxRadius: 500
        };
        this.colorArray = [
            "#B26430",
            "#FFFDFB",
            "#FF9E5E",
            "#1EABB2",
            "#D6FDFF"
        ];
        this.colors = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
        window.addEventListener("mousemove", (e) => {
            this.mouse.x = event.x;
            this.mouse.y = event.y;
        });
    }
    draw() {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterClockwise = false);
        this.c.strokeStyle = "blue";
        this.c.stroke();
        this.c.fillStyle = this.colors;
        this.c.fill();
        if (this.x + 30 > window.innerWidth || this.x - 30 < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + 30 > window.innerHeight || this.y + 30 < 0) {
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50
            && this.mouse.y - this.y < 50 && this.mouse.y - this.y > -50) {
            if (this.radius < this.mouse.maxRadius) {
                this.radius += 1;
            }
        }
        else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
    }
}
class Game {
    constructor() {
        this.canvas = new Canvas();
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