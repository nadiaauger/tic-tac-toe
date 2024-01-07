
export default function GameBoard() {
  const initialGameBoard = [
    ["null", "null", "null"],
    ["null", "null", "null"],
    ["null", "null", "null"],
  ];
  return (
    <div id="game-board">
      {console.log(initialGameBoard)}
      <ol>
        {initialGameBoard.map((row, rowIndex) => {
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => {
                <li key={colIndex}>
                  <button>{col}</button>
                </li>;
              })}
            </ol>
          </li>;
        })}
      </ol>
    </div>
  );
}
