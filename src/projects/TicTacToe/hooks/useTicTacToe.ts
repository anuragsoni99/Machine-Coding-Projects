import { useState } from "react";

const useTicTacToe = () => {
  const [input, setinput] = useState("");
  const [gameDimension, setGameDimension] = useState(0);
  const [gameTiles, setGameTiles] = useState([]);
  const [isNextX, setisNextX] = useState(true);
  const [gameMessage, setGameMessage] = useState("");
  const [hasGameStopped, setHasGameStopped] = useState(false);
  const [gameWinnerIndexex, setGameWinnerIndexex] = useState([]);

  const handleGameStart = () => {
    if (Number(input) < 3) {
      alert("input should be equal or greater than 3!");
      return;
    }

    setisNextX(true);
    setHasGameStopped(false);
    setGameMessage("");

    let dimension = Number(input);
    setGameDimension(dimension);
    let gameTilesArr = new Array(dimension * dimension).fill(null);
    setGameTiles(gameTilesArr);

    configureWinningTiles(dimension);
  };

  const handleTileClick = (tileIndex) => {
    if (gameTiles[tileIndex] || hasGameStopped) return;
    const newTiles = [...gameTiles];
    newTiles[tileIndex] = isNextX ? "X" : "O";
    setGameTiles(newTiles);
    setisNextX((prev) => !prev);
  };

  const checkForWinner = () => {
    let hasGameStopped = false;
    for (const winningTiles of gameWinnerIndexex) {
      const [first, ...rest] = winningTiles;
      if (
        gameTiles[first] &&
        rest.every((index) => gameTiles[index] === gameTiles[first])
      ) {
        setGameMessage(`${gameTiles[first]} has won the game!!`);
        setHasGameStopped(true);
        hasGameStopped = true;
        break;
      }
    }
    if (!hasGameStopped && gameTiles.length > 0 && gameTiles.every(Boolean)) {
      setGameMessage(`It's a draw`);
      setHasGameStopped(true);
    }
  };

  const configureWinningTiles = (dimension) => {
    let winningTiles = [];

    for (let i = 0; i < dimension; i++) {
      let winningRows = [];
      for (let j = 0; j < dimension; j++) {
        winningRows.push(i * dimension + j);
      }
      winningTiles.push(winningRows);
    }

    for (let i = 0; i < dimension; i++) {
      let winningColumns = [];
      for (let j = 0; j < dimension; j++) {
        winningColumns.push(j * dimension + i);
      }
      winningTiles.push(winningColumns);
    }

    let winningDiagonals = [];
    for (let i = 0; i < dimension; i++) {
      winningDiagonals.push(i * dimension + i);
    }
    winningTiles.push(winningDiagonals);

    let winningAntiDiagonal = [];
    for (let i = 0; i < dimension; i++) {
      winningAntiDiagonal.push(i * dimension + (dimension - 1 - i));
    }
    winningTiles.push(winningAntiDiagonal);
    setGameWinnerIndexex(winningTiles);
  };

  return {
    input,
    setinput,
    handleGameStart,
    gameDimension,
    gameTiles,
    handleTileClick,
    gameMessage,
    checkForWinner,
    hasGameStopped,
  };
};

export default useTicTacToe;
