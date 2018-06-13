/// <reference path="shapes.ts" />

class Circle extends Shape {
   private radius : number
   private startAngle : number
   private endAngle : number
   private counterClockwise : boolean


    constructor(x : number, y: number, speedX : number,speedY: number, c: CanvasRenderingContext2D, radius: number, startAngle : number, endAngle: number, counterClockWise : boolean) {
        super(x,y,speedX,speedY,c)
        this.c = c;
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.counterClockwise = counterClockWise
    }

    /**
     * draw
     */
    public draw() {
        this.c.beginPath()
          this.c.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle, false)
          this.c.strokeStyle = "blue"
          this.c.stroke()


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