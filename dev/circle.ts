/// <reference path="shapes.ts" />

class Circle extends Shape {
   private radius : number
   private startAngle : number
   private endAngle : number
   private counterClockwise : boolean
   private mouse : any
   private colorArray: any
   private colors: any
   private minRadius: number



    constructor(x : number, y: number, speedX : number,speedY: number, c: CanvasRenderingContext2D, radius: number, startAngle : number, endAngle: number, counterClockWise : boolean) {
        super(x,y,speedX,speedY,c)
        this.c = c;
        this.radius = radius
        this.minRadius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.counterClockwise = counterClockWise
  
        this.mouse = {
            x: undefined,
            y: undefined,
            maxRadius: 500
        }

        this.colorArray = [
            "#B26430",
            "#FFFDFB",
            "#FF9E5E",
            "#1EABB2",
            "#D6FDFF"
        ]
        
        this.colors = this.colorArray[Math.floor(Math.random() * this.colorArray.length)]
        

            
        window.addEventListener("mousemove", (e: Event) => {
          this.mouse.x = event.x
          this.mouse.y = event.y
        })


    }

    /**
     * draw
     */
    public draw() {



        this.c.beginPath()
          this.c.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle, this.counterClockwise = false)
          this.c.strokeStyle = "blue"
          this.c.stroke()
          this.c.fillStyle = this.colors
          this.c.fill()


          if (this.x + 30 > window.innerWidth || this.x - 30 < 0) {
            this.speedX = -this.speedX
        }
  
        if(this.y + 30 > window.innerHeight || this.y + 30 < 0 ){
            this.speedY = -this.speedY
        }
    
          this.x += this.speedX;
          this.y += this.speedY;

     if(this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50
        && this.mouse.y - this.y < 50 && this.mouse.y - this.y > -50)
        {
            if(this.radius < this.mouse.maxRadius){
                this.radius += 1
            }
        }
     else if (this.radius > this.minRadius){
        this.radius -= 1
     }
    }

}