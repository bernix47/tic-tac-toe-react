import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const list = {
  width: "150px",
  height: 'auto',
  margin: "1px auto",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXisNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    //if user click on occupied square or the winner is declared
    if (winner || squares[i]) return;
    //Put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move ${move}` : "Go to Start";
      return (
        <li key={move} style={list}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
