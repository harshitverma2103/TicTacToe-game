import { useState } from 'react';
import './style.scss';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import {calculateWinner} from './winner';


const NEW_GAME = [{squares :Array(9).fill(null) , isXNext : false }];

function App() {
  const[history , setHistory] = useState(NEW_GAME);

  const [currentMove , setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const {winner , winningSquares} =  calculateWinner(gamingBoard.squares);

  const handleSquareclick = clickPosition => {
    if(gamingBoard.squares[clickPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing ? currentHistory[currentMove] : history[history.length - 1 ];
      const nextSquareState = lastGamingState.squares.map((squaresValue , position) => {
        if (clickPosition === position) {
          return lastGamingState.isXNext ? 'X' : 'O'; 
        } 
        return squaresValue;     
      });

      const base = isTraversing ? currentHistory.slice(0 , currentHistory.indexOf(lastGamingState) + 1) 
      : currentHistory;  
      
      return base.concat({ 
        squares: nextSquareState ,
         isXNext: !lastGamingState.isXNext 
        });
    });

    setCurrentMove(move => move + 1 );   
  };

  const moveTo = (move) =>{
    setCurrentMove(move);
  }

  const onNewGameStart = () =>{
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
    <div className="app">
      <h1><span className="text-orange">TIC</span> <span className="text-green">TAC</span> <span className="text-orange">TOE</span></h1>
      <StatusMessage 
      winner={winner} gamingBoard={gamingBoard} 
      />
      <Board
       squares={gamingBoard.squares} 
       handleSquareclick = {handleSquareclick}
       winningSquares = {winningSquares} 
      />

      <button type="button" onClick = {onNewGameStart} className={
       `btn-reset ${winner ? 'active' : ''}`}>
        Start new game
      </button>

      <h2 style={
        {
        fontWeight: 'normal',}}>
        Current game history 
      </h2>
      <History  history = {history}  moveTo = {moveTo} currentMove = {currentMove}/>
      <div className='bg-balls'/>
    </div>
  );
}

export default App;
