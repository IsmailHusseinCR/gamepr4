class StartScherm {
    
    private div : HTMLElement
    private game: Game
    private text: string
    constructor(g: Game, text: string) {

        this.game = g;
        this.text = text
        this.div = document.createElement('div');
        this.div.id = "startscherm";
        this.div.innerHTML = this.text

        document.body.appendChild(this.div)
        

        this.div.addEventListener("click", (e: Event) =>{
         document.body.removeChild(this.div)
         console.log(this.game)
         this.game.setNewCanvas(new Canvas(this.game))
        })

    }

    
}

