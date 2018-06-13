/// <reference path="shapes.ts" />

class Circle extends Shapes {
   private radius : number
   private startAngle : number
   private endAngle : number
   private counterClockwise : boolean


    constructor(x : number, y: number, speedX : number,speedY: number, c: CanvasRenderingContext2D, radius: number, startAngle : number, endAngle: number, counterClockWise : boolean) {
        super(x,y,speedX,speedY,c)
        this.c = c;
        // this.x = x;
        // this.y = y;
        this.speedX = speedX
        this.speedY = speedY
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

    }
}