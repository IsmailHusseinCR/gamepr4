class Game {
    
     private canvas : Canvas
    
    constructor() {
        this.canvas = new Canvas()
        this.gameLoop()
    }
    
    private gameLoop(){

        this.canvas.update();
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("load", () => new Game())