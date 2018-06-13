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