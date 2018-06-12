class Circle {
  //  private canvas : Canvas 
    private x: number
    private y: number
    private speedX : number
    private speedY : number

    constructor(x : number, y: number, speedX : number,speedY: number) {
       // this.canvas = new Canvas() <- zo kan ik mijn c niet bereiken. Max call stack error :(
        this.x = x;
        this.y = y;
        this.speedX = speedX
        this.speedY = speedY
    }

    /**
     * draw
     */
    public draw() {
        // this.c.beginPath()
        //   this.c.arc(this.x,this.y,30,0, Math.PI * 2, false)
        //   this.c.strokeStyle = "blue"
        //   this.c.stroke()

        console.log("so close")
    }
}