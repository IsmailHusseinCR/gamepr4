class Endscherm {
    private endscherm: HTMLElement
    private game:Game
   // private endload : HTMLElement
    constructor(g:Game) {
        this.game = g
        this.endscherm = document.createElement('div');
        document.body.appendChild(this.endscherm);
        // window.addEventListener("click", (e: Event) =>{
        //     // this.endscherm = document.getElementById("startscherm") 
        //     // this.endscherm.id = "startscherm";

        //     console.log(document.body)
        //    })

 

        // this.endload = document.createElement('div');
        // this.endload.id = "start"

        // this.game.canvas

        
        window.addEventListener("click", (e: Event) => {

                   
            this.endscherm.id = "startscherm"
            
            this.endscherm.innerHTML = "Game ended";
        })
    }
}