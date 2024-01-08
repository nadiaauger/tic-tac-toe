export default function Log({ turnsLogs }) {
  return (
    <ol id="log">
      {turnsLogs.map((log) => (
        <li key={`$${log.square.row}${log.square.col}`}>
          {log.player} selected {log.square.row} - {log.square.col}
        </li>
      ))}
    </ol>
  );
}
