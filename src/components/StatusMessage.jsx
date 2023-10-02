const statusMessage = ({winner , isXNext , squares}) => {
    const noMoveLeft = squares.every((squaresValue => squaresValue !== null));
        
    const nextPlayer = isXNext? 'X' : 'O';    

    const renderStatusmessage = () => {
        if(winner) {
            return <>winner is {' '} <span className= { winner === 'X' ?  'text-green' : 'text-orange' }>
                {winner}
            </span></>;
        }

        if(!winner && noMoveLeft) {
            return <> <span className="text-orange">O</span> and {' '} <span className="text-green">X</span> tied</>;
        }

        if(!winner && !noMoveLeft) {
            return <>Next player is <span className={isXNext ? 'text-green' : 'text-orange' }>{nextPlayer}</span></>;        
        }

    return null;

    }

    return (
    <h2 className="status-message">{renderStatusmessage()}</h2>
   );
};

export default statusMessage;