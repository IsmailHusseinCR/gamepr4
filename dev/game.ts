class Game {
    
     private canvas : Canvas
    // private scherm: StartScherm
    
    constructor() {
        this.canvas = new Canvas()
        this.gameLoop()
    }
    
    private gameLoop(){

        this.canvas.update();
        requestAnimationFrame(()=>this.gameLoop())
    }
} 

window.addEventListener("click", () => new StartScherm())
window.addEventListener("load", () => new Game())