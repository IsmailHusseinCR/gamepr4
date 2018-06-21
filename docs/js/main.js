"use strict";
class Canvas {
    constructor(g) {
        this.shapes = [];
        this.game = g;
        this.addCanvas = document.createElement('canvas');
        this.addCanvas.id = "canvas";
        document.body.appendChild(this.addCanvas);
        this.addCanvas.width = window.innerWidth;
        this.addCanvas.height = window.innerHeight;
        this.c = this.addCanvas.getContext("2d");
        for (let i = 0; i < 500; i++) {
            this.shapes.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 2 + 1, Math.random() * 2 + 1, this.c, Math.random() * 3 + 1, 0, Math.PI * 2, false));
        }
        if (this.shapes[0] instanceof Circle) {
        }
    }
    update() {
        this.c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        let check = true;
        for (const shape of this.shapes) {
            shape.draw();
            if (check) {
                if (shape instanceof Circle) {
                    if (shape.wonGame) {
                        this.game.GameOver();
                        shape.resetGame();
                        check = false;
                    }
                }
            }
            else {
                break;
            }
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
        this._wonGame = false;
        this.c = c;
        this.radius = radius;
        this.minRadius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.counterClockwise = counterClockWise;
        this.mouse = {
            x: undefined,
            y: undefined,
            maxRadius: 200
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
            this.radius += 1;
            if (this.radius > this.mouse.maxRadius) {
                this.won();
            }
        }
        else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
    }
    won() {
        this._wonGame = true;
    }
    resetGame() {
        this._wonGame = false;
    }
    get wonGame() {
        return this._wonGame;
    }
}
class Game {
    constructor() {
        this.scherm = new Scherm(this, "Start Game");
        this.gameLoop();
    }
    gameLoop() {
        if (this.canvas !== undefined) {
            this.canvas.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    GameOver() {
        document.body.innerHTML = "";
        new Scherm(this, "End Game, try again");
    }
    setNewCanvas(canvas) {
        this.canvas = canvas;
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
class Scherm {
    constructor(g, text) {
        this.game = g;
        this.text = text;
        this.div = document.createElement('div');
        this.div.id = "startscherm";
        this.div.innerHTML = this.text;
        document.body.appendChild(this.div);
        this.div.addEventListener("click", (e) => {
            document.body.removeChild(this.div);
            console.log(this.game);
            this.game.setNewCanvas(new Canvas(this.game));
        });
    }
}
class Triangle {
    constructor() {
    }
}
//# sourceMappingURL=main.js.map