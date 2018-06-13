/// <reference path="shapes.ts" />

class Rectangle extends Shape { 
    private height : number
    private width : number 
    constructor(x : number, y: number, speedX : number,speedY: number, c: CanvasRenderingContext2D, height : number, width : number) {
        super(x,y,speedX,speedY,c)
    this.height = height
    this.width = width
    }

    public draw(){
        this.c.beginPath()
        this.c.fillRect(this.x,this.y,this.width,this.height)
        this.c.fillStyle = "red"

        if (this.x + 30 > window.innerWidth || this.x - 30 < 0) {
            this.speedX = -this.speedX
        }
  
        if(this.y + 30 > window.innerHeight || this.y + 30 < 0 ){
            this.speedY = -this.speedY
        }
    
          this.x += this.speedX;
          this.y += this.speedY;
    }
}