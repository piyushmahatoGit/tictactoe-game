import { useState } from 'react'
import Board from './components/board'
import './styles.scss'
import checkWinner from "./winner"

function App() {

  const [squares, setSquare] = useState(Array(9).fill(null));
  const [next, setNext] = useState(false);

  const winner = checkWinner(squares);
  const nextPlayer = next ? "X" : "O" ;
  console.log(winner);
  const message = winner ? `Winner ${winner}` : `Next player ${nextPlayer}`;

  
  // const message = winner ? `Winner ${winner}` : `Next player ${nextPlayer}`;

  const handleSquareClick = (clickPosition) => {

      if(squares[clickPosition] || winner){
          return;
      }

      setSquare((currSquares)=>{
          return currSquares.map((squareValue, position) => {
              if(clickPosition === position) {
                  return next ? 'X': 'O' ;
              }

              return squareValue;
          })
      })

      setNext((currNextValue) => !currNextValue)
  }

 
  
  return (
    <div className='app'>
      <h2>{message}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  )
}

export default App
