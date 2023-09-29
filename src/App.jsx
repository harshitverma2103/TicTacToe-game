import { useState } from 'react';
import './style.scss';
import Board from './components/Board';
import {calculateWinner} from './winner';

function App() {
  const [squares , setSquares] = useState(Array(9).fill(null));
  const [isXNest , setIsXNext] = useState(false);

  const winner =  calculateWinner(squares);
  const nextPlayer = isXNest? 'X' : 'O';
  const statusMessage = winner ? `Winner is ${winner}` : `next player is ${nextPlayer}`;
  
  console.log(winner);

  const handleSquareclick = clickPosition => {
    if(squares[clickPosition] || winner) {
      return;
    }
    setSquares((currentSquare) => {
      return currentSquare.map((squaresValue , position) => {
        if (clickPosition === position) {
          return isXNest ? 'X' : 'O'; 
        } 
        return squaresValue;     
      });
    });

    setIsXNext((currentIsXNext) => !currentIsXNext);
  }
  return (
    <div className="app">
      <h2> {statusMessage} </h2>
      <Board squares={squares} handleSquareclick = {handleSquareclick}/>
    </div>
  );
}

export default App;
