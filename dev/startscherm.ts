class StartScherm {
    
    private div : any
    constructor() {
        window.addEventListener("click", (e: Event) =>{
         this.div = document.getElementById("startscherm")
         document.body.removeChild(this.div)
        })
    }
}

