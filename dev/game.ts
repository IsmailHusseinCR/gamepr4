class Game {
    
    public canvas : Canvas
    private scherm: Scherm
   
    
    constructor() {
        this.scherm = new Scherm(this, "Start Game")

        //this.canvas = new Canvas(this)
        this.gameLoop()
       //console.log(this.canvas)
    }

    
    
    private gameLoop(){

        if(this.canvas !== undefined){
        this.canvas.update()
        }
        requestAnimationFrame(()=>this.gameLoop())
        
    }
    
    public GameOver(){
        // new StartScherm()
        document.body.innerHTML = ""
        // new Endscherm(this)
        new Scherm(this,"End Game, try again");
    }

    public setNewCanvas(canvas: Canvas){
        this.canvas = canvas
    }
} 

// window.addEventListener("load", () => new StartScherm(this))
window.addEventListener("load", () => new Game())
//window.addEventListener("load", () => new Endscherm())