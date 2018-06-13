class Canvas {
    private canvas : HTMLCanvasElement = <HTMLCanvasElement> document.querySelector('canvas')!
    private c : CanvasRenderingContext2D
    private shapes : Shape[] = []
    
    constructor(){
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.c = this.canvas.getContext("2d") as CanvasRenderingContext2D
      
      for (let i = 0; i < 10; i++) {
        this.shapes.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight,Math.random() * 8 + 1,Math.random() * 8 + 1, this.c, Math.random() * 30 + 1, 0, Math.PI * 2, false),
        new Rectangle(Math.random() * window.innerWidth,Math.random() * window.innerHeight,Math.random() * 8 + 1,Math.random() * 8 + 1,this.c,Math.random() * 100 + 1,Math.random() * 100 + 1))
        
      }
      console.log(this.shapes)

     /* Ik maak een parent class aan genaamd Shapes. Daar overeft class rectangle, circle enzovoorts van.
      In de game maak ik een draw of update functie functie. Die roept dan de shape rectangle draw aan. Deze zal dan een rectangle op de canvas tekenen dan. Met de gameloop laat ik ze bewegen. Met een eventlistener klik maak je de scale groter ?? Thats it ??

      In de canvas hoort de shape beschikbaar te zijn. De X en Y coordinaten van de shapes gaan naar de update functie en zo bewegen de shapes.

    */

      // Hardcoded

        // rectangle
    //   this.c.fillStyle = "rgba(255,0,0,0.5)" // Gaat per individuele rect
    //   this.c.fillRect(100,100,100,100)
    //   this.c.fillStyle = "rgba(0,0,255,0.5)"
    //   this.c.fillRect(400,100,100,100)
    //   this.c.fillStyle = "rgba(0,0,255,0.5)"
    //   this.c.fillRect(300,300,100,100)
    
      // een lijn - moveTo gebruikt X en Y

    //   this.c.beginPath()
    //   this.c.moveTo(50,300) // starting point
    //   this.c.lineTo(300,100) // diagonaal
    //   this.c.lineTo(300,400) // Je kunt lijnen stacken
    //   this.c.strokeStyle = "rgba(255,0,0,0.1)" // ook kleuren geven
    //   this.c.stroke() 

      // een Arc of cirkel maar ook meerdere
    
    //   for (let i = 0; i < 3; i++) {
    //     const degrees = Math.random() * 360;
    //     const color = `hsl(${degrees}, 100%, 50%)`; 
    //     let x : number = Math.random() * window.innerWidth
    //     let y : number = Math.random() * window.innerHeight
    //     this.c.beginPath()
    //     this.c.arc(x,y,30,0, Math.PI * 2, false)
    //     this.c.strokeStyle = color
    //     this.c.stroke()
    //   }
       

    }
    public update() {
          //console.log(123) dit kan naar de Game en dan in de gameLoop
          this.c.clearRect(0,0,window.innerWidth,window.innerHeight)

          for (const shape of this.shapes) {
            shape.draw()
          }

    }
}

