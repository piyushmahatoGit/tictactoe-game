import { useState } from 'react'
import Board from './components/board'
import './styles.scss'
import StatusMessage from './components/StatusMessage'
import checkWinner from "./winner"
import Footer from './components/footer'



function App() {

  const [history, setHistory] = useState([{squares: Array(9).fill(null), next: false}]); 
  const [currMove, setCurrMove] = useState(0);

  const gamingBoard = history[currMove];

  const{ winner, winningSquare }= checkWinner(gamingBoard.squares);
 
  // console.log({history, currMove});
  
  // const message = winner ? `Winner ${winner}` : `Next player ${nextPlayer}`;

  const handleSquareClick = (clickPosition) => {

      if(gamingBoard.squares[clickPosition] || winner){
          return;
      }

      setHistory((currHistory)=>{
        const isTraversing = currMove + 1 !== currHistory.length;

        const lastGamingState = isTraversing ? currHistory[currMove]: currHistory[currHistory.length - 1]

          const nextSquaresState = lastGamingState.squares.map((squareValue, position) => {
              if(clickPosition === position) {
                  console.log(clickPosition)
                  return lastGamingState.next ? 'X' : 'O' ;
              }

              return squareValue;
          })

          const base = isTraversing 
          ? currHistory.slice(0 , currHistory.indexOf(lastGamingState) + 1) 
          : currHistory;

          return base.concat({squares: nextSquaresState, next: !lastGamingState.next})
      })

      setCurrMove(currMove + 1)
  }

  const goBack = () => {
    if (currMove === 0){
      return 0;
    }else {
    setCurrMove(currMove - 1);
    }
  }


  
 
  
  return (
    <div className='app'>
     <p style={{color:"rgb(103, 101, 121)"}}>TIC TAC TOE</p>
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} winningSquare={winningSquare}  />
      <div className='btns'>
        <button type='button' onClick={goBack} className='btn-extra' ><img className='undo-img' src='undo.svg'></img></button>
        <button type='button' onClick={() => location.reload()} className='btn-extra btn-restart' ><img className='restart-img' src='restart.svg'></img></button>
      </div>
      <Footer />
      <div className='bg-balls'></div>
    </div>
  )
}

export default App
