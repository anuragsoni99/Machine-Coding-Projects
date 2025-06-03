import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const {
    input,
    setinput,
    handleGameStart,
    gameDimension,
    gameTiles,
    handleTileClick,
    gameMessage,
    checkForWinner,
    hasGameStopped,
  } = useTicTacToe();

  if (!hasGameStopped) checkForWinner();

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <span>Tic-Tac-Toe</span>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button onClick={handleGameStart}>start</button>
      </div>
      <div>{gameMessage}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gameDimension}, 50px)`,
          gap: "2px",
          justifyContent: "center",
          margin: "5px",
        }}
      >
        {gameTiles.map((tileValue, index) => (
          <div
            key={index}
            style={{
              border: "2px solid black",
              height: "50px",
              alignContent: "center",
            }}
            onClick={() => handleTileClick(index)}
          >
            {tileValue}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
