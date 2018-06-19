# Typescript startproject

Dit is een leeg startproject voor de oefeningen in CMTTHE01-4 en PRG01-8. 

## Het project

- De **docs** map bevat de client side:html en css. De js file wordt hier automatisch in gezet door de compiler.
- De **dev** map bevat de typescript files.
- **game.ts** is het startpunt van de app. Hierin staat de window listener die een `new Game()` maakt.

## Compileren
- Druk op CMD+SHIFT+B en kies voor `watch mode`. Je `.ts` files worden nu samengevoegd in `main.js`.
- tsconfig.json bevat instellingen voor het compileren.

## Bekijken
Open index.html in `localhost`

## Opdracht
- Composition
Ik heb composition toegepast in de canvas en shapes object. Ook bij de canvas en de game object zelf. 
Ik heb de compositie van de canvas en shapes objects toegepast omdat de canvas "shapes" heeft. Daardoor onstaat die compositie. Hetzelfde geldt voor de game object. De game object heeft een canvas.
- Voorbeelden

```
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


```
Ik geef de canvas context mee vanuit de canvas en die stop ik in een constructor zodat ik in mijn canvas class een shape kan tekenen.

- Voorbeeld 2

```
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


class Canvas {
    private canvas : HTMLCanvasElement = <HTMLCanvasElement> document.querySelector('canvas')!
    private c : CanvasRenderingContext2D
    private shapes : Shape[] = []

    constructor(){
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.c = this.canvas.getContext("2d") as CanvasRenderingContext2D
      
      for (let i = 0; i < 500; i++) {
        this.shapes.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight,Math.random() * 2 + 1,Math.random() * 2 + 1, this.c, Math.random() * 3 + 1, 0, Math.PI * 2, false),
        /* new Rectangle(Math.random() * window.innerWidth,Math.random() * window.innerHeight,Math.random() * 8 + 1,Math.random() * 8 + 1,this.c,Math.random() * 100 + 1,Math.random() * 100 + 1)*/ ) 
      }


    }
  
    public update() {
          //console.log(123) dit kan naar de Game en dan in de gameLoop
          this.c.clearRect(0,0,window.innerWidth,window.innerHeight)
          for (const shape of this.shapes) {
            // console.log(shape)
            shape.draw()  
          }
    }
}

```

In de class *Game* geef ik een canvas mee zodat ik mijn update functie van mijn canvas *class*  kan gebruiken.


- Voorbeeld 3

```
class StartScherm {
    
    private div : HTMLElement
    private game: Game
    private text: string
    constructor(g: Game, text: string) {


this.game.setNewCanvas(new Canvas(this.game))


class Game {
    
     public canvas : Canvas
    private scherm: StartScherm
    // private endscherm : Endscherm
    
    constructor() {
        this.scherm = new StartScherm(this, "Start Game")

        //this.canvas = new Canvas(this)
        this.gameLoop()
       console.log(this.canvas)
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
        new StartScherm(this,"End Game, try again");
    }

    public setNewCanvas(canvas: Canvas){
        this.canvas = canvas
    }
} 

```

Het scherm moet praten tegen de game om de game te resetten. Daarom staat deze composition hier.


- Encapsulation

Ik heb gebruik gemaakt van private en public methods. 

```
   private gameLoop(){

        this.canvas.update();
        requestAnimationFrame(()=>this.gameLoop())
    }
```
```
    public update() {
          this.c.clearRect(0,0,window.innerWidth,window.innerHeight)
          for (const shape of this.shapes) {
            shape.draw()  
          }
    }
```
Ook maak ik gebruik van private en protected variablen

```
    protected c : CanvasRenderingContext2D;
    protected x : number
    protected y: number
    protected speedX: number;
    protected speedY: number;
```

Hugo's feedback opgepakt en gebruik gemaakt van een get en set (bij de set een eigen method gebruikt :( )

```
private _wonGame: boolean = false

    public get wonGame(){
        return this._wonGame
    }

        public setNewCanvas(canvas: Canvas){
        this.canvas = canvas
    }


```
- Inheritance

Ik heb gebruik gemaakt van shapes. Dit is dan de parent class. Er kunnen meerdere shape classes kunnen worden gemaakt die overerven van shape

```
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

```

```
class Circle extends Shape {
   private radius : number
   private startAngle : number
   private endAngle : number
   private counterClockwise : boolean
   private mouse : any
   private colorArray: any
   private colors: any
   private minRadius: number

```
En dan kan ik in mijn canvas class cirkels of meerdere shapes tekenen

```
      for (let i = 0; i < 500; i++) {
        this.shapes.push(new Circle(Math.random() * window.innerWidth, Math.random() * window.innerHeight,Math.random() * 2 + 1,Math.random() * 2 + 1, this.c, Math.random() * 3 + 1, 0, Math.PI * 2, false),
        /* new Rectangle(Math.random() * window.innerWidth,Math.random() * window.innerHeight,Math.random() * 8 + 1,Math.random() * 8 + 1,this.c,Math.random() * 100 + 1,Math.random() * 100 + 1)*/ ) 
      }
```

Ik heb het hier toegepast omdat ik dan 500 cirkels kan tekenen in de canvas. Ik push ze ook in shapes array. 


## Klassendiagram

![alt text](https://raw.githubusercontent.com/IsmailHusseinCR/gamepr4/master/diagram.jpg)

## Peer Review
- Ik review de game van Hugo. [Link](https://github.com/Hugocaminada/mijnGame)
- Hij heeft goed gebruik gemaakt van **Encapsulation** en maakt gebruik van private en public variablen/methods
- Maakt ook goed gebruik van **Composition** bijvoorbeeld dit `this.game.showScreen(new Lizardlevel(this.game))` en `private game : Game` , `constructor(g:Game){..}` , `this.game = g`
- Overerving zit er ook in.

```
class GameLevelObject {

    protected healthbar : Healthbar
    protected game : Game
    protected animalName : HTMLElement
    protected buttonwrapper : HTMLElement
    protected eat : Buttonbar
    protected sleep : Buttonbar
    protected health : number
    protected drink : Buttonbar
    protected exercise : Buttonbar
    protected play : Buttonbar
    protected learn : Buttonbar
    protected gameScore : number = 0
    protected scoreText : HTMLElement
    protected gameScoreElement : HTMLElement
    protected textfield : HTMLElement
    protected text : string = "Hoi daar ben ik weer!"
    protected counter : number = 0
    protected modal : Modal

    constructor() {
        
        this.healthbar = new Healthbar()
        
    }
}
```
```
/// <reference path="gamelevelobject.ts" />

class Humanlevel extends GameLevelObject{

    constructor(g:Game){
        super()

```

- Super wordt aangeroepen. Code is begrijpbaar. 8/10