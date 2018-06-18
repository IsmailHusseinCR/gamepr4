class Canvas {
    private addCanvas: HTMLCanvasElement
    //private canvas : HTMLCanvasElement = <HTMLCanvasElement> document.querySelector('canvas')!
    private c : CanvasRenderingContext2D
    private shapes : Shape[] = []
    private game: Game
  

    constructor(g:Game){
      this.game = g
      

      this.addCanvas = document.createElement('canvas')
      this.addCanvas.id = "canvas";

      document.body.appendChild(this.addCanvas);


      this.addCanvas.width = window.innerWidth;
      this.addCanvas.height = window.innerHeight;
      this.c = this.addCanvas.getContext("2d") as CanvasRenderingContext2D

      
      
      
      
      for (let i = 0; i < 500; i++) {
        this.shapes.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight,Math.random() * 2 + 1,Math.random() * 2 + 1, this.c, Math.random() * 3 + 1, 0, Math.PI * 2, false),
        /* new Rectangle(Math.random() * window.innerWidth,Math.random() * window.innerHeight,Math.random() * 8 + 1,Math.random() * 8 + 1,this.c,Math.random() * 100 + 1,Math.random() * 100 + 1)*/ ) 

        
      }
      if(this.shapes[0] instanceof Circle ){
       // console.log(this.shapes[0])
      }

    }
    
  
    public update() {
          this.c.clearRect(0,0,window.innerWidth,window.innerHeight)

          let check = true
          for (const shape of this.shapes) {
            shape.draw()
        
            if(check){
              if(shape instanceof Circle ){
                //console.log("hallo")
                if(shape.wonGame){ 
                  this.game.GameOver();
                  shape.resetGame();
                  check = false
                }
              }
            }else{
              break
            }
          }
    }
}

