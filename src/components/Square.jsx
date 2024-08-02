
const Square = ({value , onClick, isWinningSquare}) => {

    const colorClassName = value == 'X' ? "text-green" : "text-orange";
    const winningClassName = isWinningSquare ? "winning" : ""
    
    return  <button type="button" onClick={onClick} className= {`square ${colorClassName} ${winningClassName}`} >
                {value}
            </button>
}

export default Square;