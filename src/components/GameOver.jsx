export default function GameOver({winner, handleRematch}) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    {winner && <p>{winner} won !!</p>}
    {!winner && <p>It's a DRAW</p>}
    <p>
      <button onClick={handleRematch}>Rematch !</button>
    </p>
  </div>
}
