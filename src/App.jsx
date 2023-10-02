import { useState } from 'react';
import './style.scss';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import {calculateWinner} from './winner';

function App() {
  const [squares , setSquares] = useState(Array(9).fill(null));
  const [isXNext , setIsXNext] = useState(false);

  const winner =  calculateWinner(squares);

  const handleSquareclick = clickPosition => {
    if(squares[clickPosition] || winner) {
      return;
    }
    setSquares(currentSquare => {
      return currentSquare.map((squaresValue , position) => {
        if (clickPosition === position) {
          return isXNext ? 'X' : 'O'; 
        } 
        return squaresValue;     
      });
    });
    setIsXNext((currentIsXNext) => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
      <Board squares={squares} handleSquareclick = {handleSquareclick}/>
    </div>
  );
}

export default App;
