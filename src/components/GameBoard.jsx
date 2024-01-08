import { useState } from "react";

export default function GameBoard({ onSelectSquare, gameBoard }) {
  return (
    <div id="game-board">
      <ol>
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button
                    disabled={col !== null}
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
