class Shape {
    protected c : CanvasRenderingContext2D;
    protected x : number
    protected y: number
    protected speedX: number;
    protected speedY: number;


    constructor(x: number,y: number,speedX: number,speedY: number, c: CanvasRenderingContext2D) {
        // this.x = 100;
        // this.y = 100;
        this.c = c;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
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