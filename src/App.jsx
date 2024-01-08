import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameOver from "./components/GameOver.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function derivedWinner(gameBoard, playersList) {
  let winner = false;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playersList[firstSquareSymbol];
    }
  }
  return winner;
}

function derivedGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((element) => [...element])];

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard
}

function App() {
  const [playersList, setPlayersList] = useState(PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = derivedGameBoard(gameTurns);

  const winner = derivedWinner(gameBoard, playersList);

  const hasDraw = gameTurns.length === 9 && !winner;

  const handlePlayersList = (symbol, playerName) => {
    setPlayersList((prevPlayersList) => {
      return { ...prevPlayersList, [symbol]: playerName };
    });
  };

  const handleSelectSquare = (rowIndex, columnIndex) => {
    setGameTurns((previousArray) => {
      let currentPlayer = derivedActivePlayer(previousArray);

      let turnsLogs = [
        { player: currentPlayer, square: { row: rowIndex, col: columnIndex } },
        ...previousArray,
      ];

      return turnsLogs;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={derivedActivePlayer(gameTurns) === "X"}
            onChangeName={handlePlayersList}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={derivedActivePlayer(gameTurns) === "O"}
            onChangeName={handlePlayersList}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRematch={handleRematch}></GameOver>
        )}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turnsLogs={gameTurns}></Log>
    </main>
  );
}

export default App;
