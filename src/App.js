import './App.css';
import { useState } from 'react'
import Left from './components/Left';
import Right from './components/Right';


function App() {

  const [theme, setTheme] = useState('')
  const [icon, setIcon] = useState('./photos/icon-moon.svg')
  const [name, setName] = useState('DARK')

  const changeTheme = () => {
    theme ? setTheme('') : setTheme('light')
    theme ? setIcon('./photos/icon-moon.svg'): setIcon('./photos/icon-sun.svg') 
    theme ? setName("DARK"): setName('LIGHT')
  }
  

// GAME VEIW 
class Gameveiw {

  constructor() {
    // console.log("init game veiw")
  }

  updateBoard(game) {
    // console.log("this is a board within game veiw");
    // console.log(game.board);

    this.updateTurn(game);

    const winningCombination = game.findWinningCombinations()

    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.board-tile[ data-index='${i}']`)
      // console.log(tile.innerText)
      // tile.textContent= game.board[i]
      tile.classList.remove('tile-winner')

      let tileType = game.board[i] == "X" ? "tile-x" : "tile-o"
      tile.innerHTML = `<span class = "${tileType}"> ${game.board[i] ? game.board[i] : ""}  </span>`
    
      if(winningCombination && winningCombination.includes(i)) {
        tile.classList.add('tile-winner');

      }
    }
  }
  
  updateTurn(game) {

  let playerX = document.querySelector(".player-X");
  let playerO = document.querySelector(".player-O");
   playerX.classList.remove("active")
   playerO.classList.remove("active")
 
  if (game.turn == "X") {
    playerX.classList.add("active");
  } else {
    playerO.classList.add("active");
    }
  }
}


/// Game Functionality 
class Game {
 
  constructor() {
    // console.log("Hello")
    this.turn = "X";
    this.board =  new Array(9).fill(null);

  }

  nextTurn() {
    if (this.turn == "X") {
        this.turn = "O";
    } else {
        this.turn = "X"
    }
  }

  makeMove(i) {

    if (this.endofGame()) {
      return;
    }

    if(this.board[i]){
      return;
    }
    this.board[i] = this.turn; // X or O 
    let winningCombination = this.findWinningCombinations();
    // console.log("this is the winner", winningCombination)
    if(!winningCombination) {
      this.nextTurn()
    }
  }

  findWinningCombinations() {
    const winningComdinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2],
    ] 
    for (const combination of winningComdinations) {
      const [a,b,c] = combination;
      
      if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
        return combination
      }
    }
    return null;
  }



////////End of Game 

    endofGame() {
      let winningCombination = this.findWinningCombinations();
      if (winningCombination){
        return true;
      } else {
        return false;
      }
}
}



//////// Main GAME
let game = new Game();
let gameVeiw = new Gameveiw();



let tiles = document.querySelectorAll(".board-tile")

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    onTileClick(tile.dataset.index)
  })
})

const onTileClick = (i) => {
  // do something 
  game.makeMove(i)
  gameVeiw.updateBoard(game)

}

const restartGame  = () => {
  game = new Game();
  gameVeiw.updateBoard(game);
}


gameVeiw.updateBoard(game);





  return (
    <div className={`App ${theme}`}>
        <Left 
        restartGame = {restartGame} 
        icon = {icon} 
        name = {name}
        changeTheme = {changeTheme}/> 
        <Right
        theme = {theme}/>
    </div>
  );
}

export default App;
