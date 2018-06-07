
class Game {
    
    private cells : NodeList;
    public  board : Array<number>;
    private huPlayer: Human // Ik moet dit nog even veranderen object georienteerd
    private aiPlayer : AI; // ik moet dit nog even veranderen object georienteerd
    private combos : any;
    
    constructor() {
        this.board = new Array(9);
        this.huPlayer = 'O' // Moet naar new Human('O')
        this.aiPlayer = 'X' // Moet naar new AI('X') maar krijg een rare stacks

        this.cells = document.querySelectorAll('.cell');
        this.combos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]
        this.StartGame();
    }

  private StartGame() {
     // document.querySelector(".endgame").style.display = "none";

      for (let index = 0; index < this.cells.length; index++) {
        this.board = Array.from(Array(9).keys()); 
          this.cells[index].innerText = '';
          this.cells[index].style.removeProperty('background-color');
          this.cells[index].addEventListener('click', this.turnClick.bind(this),false)     
      }
  }

  private turnClick(square : Event ) : void {
      console.log(square.target.id);
      this.turn(square.target.id, this.huPlayer)
      if (!this.checkTie()) this.turn(this.bestSpot(), this.aiPlayer);
  }

  private turn(squareID : any , player : any) : void {
      this.board[squareID] = player;
      document.getElementById(squareID).innerText = player
      // dit zou de O moeten vullen :(
      let gameWon = this.checkWin(this.board, player)
      if(gameWon) this.gameOver(gameWon)
  }


  private checkWin(board : Array<any>, player : any) {
      // check alle plekken van de board waar al is op gespeeld.
      // check alle elementen in de board array en krijg een waarde terug. a is de waarde die ik terug krijg
      // we initialiseren de accumulator als een empty array. e is de element die in de board element zit waar we door heen gaan.
      // i is de index

      let plays = board.reduce((a, e, i) =>
      (e === player) ? a.concat(i) : a, []);
      let gameWon = null;
          for (let [index, win] of this.combos.entries()) {
              if (win.every(elem => plays.indexOf(elem) > -1)) {
                  gameWon = {index: index,player: player};
            break;
      }
  }
      return gameWon;
  }
  private gameOver(gameWon : any) {
    for (let index of this.combos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == this.huPlayer ? "blue" : "red";
            this.declareWinner("Tie Game!")
    }
    for (var i = 0; i < this.cells.length; i++) {
        this.cells[i].removeEventListener('click', this.turnClick.bind(this), false);
    }
}
    private checkTie() {
        if (this.emptySquares().length == 0) {
            for (var i = 0; i < this.cells.length; i++) {
                this.cells[i].style.backgroundColor = "green";
                this.cells[i].removeEventListener('click', this.turnClick.bind(this), false);
            }
            this.declareWinner("Tie Game!")
            return true;
        }
        return false;
    }

    private declareWinner(who : string) {
        document.querySelector(".endgame").style.display = "block";
        document.querySelector(".endgame .text").innerText = who;
    }

    private emptySquares(){
        return this.board.filter(s => typeof s  == 'number');
    }

    private bestSpot() {
        return this.emptySquares()[0]
    }
 }

window.addEventListener("load", () =>  new Game());