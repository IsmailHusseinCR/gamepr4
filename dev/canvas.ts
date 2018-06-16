class Canvas {
    private canvas : HTMLCanvasElement = <HTMLCanvasElement> document.querySelector('canvas')!
    private c : CanvasRenderingContext2D
    private shapes : Shape[] = []

    constructor(){
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.c = this.canvas.getContext("2d") as CanvasRenderingContext2D
      
      for (let i = 0; i < 500; i++) {
        this.shapes.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight,Math.random() * 2 + 1,Math.random() * 2 + 1, this.c, Math.random() * 3 + 1, 0, Math.PI * 2, false),
        /* new Rectangle(Math.random() * window.innerWidth,Math.random() * window.innerHeight,Math.random() * 8 + 1,Math.random() * 8 + 1,this.c,Math.random() * 100 + 1,Math.random() * 100 + 1)*/ ) 
      }


    }
  
    public update() {
          //console.log(123) dit kan naar de Game en dan in de gameLoop
          this.c.clearRect(0,0,window.innerWidth,window.innerHeight)
          for (const shape of this.shapes) {
            // console.log(shape)
            shape.draw()  
          }
    }
}

