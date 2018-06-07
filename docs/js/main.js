"use strict";
class AI {
    constructor() {
    }
}
class Game {
    constructor() {
        this.board = new Array(9);
        this.huPlayer = 'O';
        this.aiPlayer = 'X';
        this.cells = document.querySelectorAll('.cell');
        this.combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ];
        this.StartGame();
    }
    StartGame() {
        for (let index = 0; index < this.cells.length; index++) {
            this.board = Array.from(Array(9).keys());
            this.cells[index].innerText = '';
            this.cells[index].style.removeProperty('background-color');
            this.cells[index].addEventListener('click', this.turnClick.bind(this), false);
        }
    }
    turnClick(square) {
        console.log(square.target.id);
        this.turn(square.target.id, this.huPlayer);
        if (!this.checkTie())
            this.turn(this.bestSpot(), this.aiPlayer);
    }
    turn(squareID, player) {
        this.board[squareID] = player;
        document.getElementById(squareID).innerText = player;
        let gameWon = this.checkWin(this.board, player);
        if (gameWon)
            this.gameOver(gameWon);
    }
    checkWin(board, player) {
        let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
        let gameWon = null;
        for (let [index, win] of this.combos.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = { index: index, player: player };
                break;
            }
        }
        return gameWon;
    }
    gameOver(gameWon) {
        for (let index of this.combos[gameWon.index]) {
            document.getElementById(index).style.backgroundColor =
                gameWon.player == this.huPlayer ? "blue" : "red";
            this.declareWinner("Tie Game!");
        }
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].removeEventListener('click', this.turnClick.bind(this), false);
        }
    }
    checkTie() {
        if (this.emptySquares().length == 0) {
            for (var i = 0; i < this.cells.length; i++) {
                this.cells[i].style.backgroundColor = "green";
                this.cells[i].removeEventListener('click', this.turnClick.bind(this), false);
            }
            this.declareWinner("Tie Game!");
            return true;
        }
        return false;
    }
    declareWinner(who) {
        document.querySelector(".endgame").style.display = "block";
        document.querySelector(".endgame .text").innerText = who;
    }
    emptySquares() {
        return this.board.filter(s => typeof s == 'number');
    }
    bestSpot() {
        return this.emptySquares()[0];
    }
}
window.addEventListener("load", () => new Game());
class Human {
    constructor() {
    }
}
class Platform {
}
class Player {
    constructor() {
    }
}
//# sourceMappingURL=main.js.map