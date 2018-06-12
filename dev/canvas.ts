class Canvas {
    private canvas : HTMLCanvasElement = <HTMLCanvasElement> document.querySelector('canvas')
    public c : CanvasRenderingContext2D = <CanvasRenderingContext2D> this.canvas.getContext("2d");
    private circle : Circle
    private x : number;
    private y : number;
    private speedX : number
    private speedY : number

    constructor(){
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      this.circle = new Circle(300,300,5,5)


       this.x = Math.random() * window.innerWidth;
       this.y = Math.random() * window.innerHeight;
       this.speedX = (Math.random() - 0.5 * 8);
       this.speedY = (Math.random() - 0.5 * 8);

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
    


      /**
       * Update
       */

    }
    public update() {
          //console.log(123) dit kan naar de Game en dan in de gameLoop
          this.c.clearRect(0,0,window.innerWidth,window.innerHeight)
          this.c.beginPath()
          this.c.arc(this.x,this.y,30,0, Math.PI * 2, false)
          this.c.strokeStyle = "blue"
          this.c.stroke()

          this.circle.draw()
        
          // Dit hoort de Circle x en y en speedX en speedY te zijn. Alleen maar errors. Wat hebben die mensen van OOP es6 javascript zo'n geluk

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

