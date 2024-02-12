export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER !</h2>
      {winner === undefined ? <p>It's a Draw</p> : <p>{winner} won !</p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
