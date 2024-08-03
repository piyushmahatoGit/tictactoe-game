const StatusMessage = ({winner, gamingBoard}) => {
    const { squares, next } = gamingBoard;

    const noMovesLeft = squares.every((squareValue) =>  squareValue !== null)

    const nextPlayer = next ? "X" : "O" ;
   
    
    const renderStatusMessage = () => {
        if(winner) {
            return <span>Winner is {winner}</span>
        }
        if(!winner && noMovesLeft){
            return <span className="draw">Draw!</span>
        }
        if(!winner && !noMovesLeft) {
            return <span>Next Player is {nextPlayer}</span>
        }
    }
    return  <h2 className="status-message">
                {renderStatusMessage()}
            </h2>
}

export default StatusMessage;