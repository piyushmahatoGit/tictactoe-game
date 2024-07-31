const StatusMessage = ({winner, next, squares}) => {

    const noMovesLeft = squares.every((squareValue) =>  squareValue !== null)

    const nextPlayer = next ? "X" : "O" ;
   
    
    const renderStatusMessage = () => {
        if(winner) {
            return <>Winner is {winner}</>
        }
        if(!winner && noMovesLeft){
            return <>Draw!</>
        }
        if(!winner && !noMovesLeft) {
            return <>Next Player is {nextPlayer}</>
        }
    }
    return  <h2 className="status-message">
                {renderStatusMessage()}
            </h2>
}

export default StatusMessage;