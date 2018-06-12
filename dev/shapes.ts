class Shapes {
    protected x : number
    protected y: number
    constructor() {
        this.x = 100;
        this.y = 100;
    }

    /**
     * draw
     * Elke individuele shape heeft een draw method. Die erven zij nu over van deze class.
     * 
     * probleem die ik heb is. Rectangle en Circle en driehoek gaan anders om met de canvas context. Maar ze hebben allemaal dezelfde draw method. Hoe pak ik dit aan.
     * 
     */
    public draw() {
        
    }

}