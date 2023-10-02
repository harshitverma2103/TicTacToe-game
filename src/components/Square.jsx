const Square = ({ value  , onClick , isWinningSquare }) => {

  const colorClassName = value ==='X' ? 'text-green' : 'text-orange';
  const winnigClassName = isWinningSquare ? 'winning' : ' ';
  return (
    <button type="button" 
    className={`square ${colorClassName} ${ winnigClassName}`} onClick = {onClick}>
      {value}
    </button>
  );
};

export default Square;
