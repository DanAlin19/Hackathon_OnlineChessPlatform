import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayRandomMoveEngine() {
  const [game, setGame] = useState(new Chess());

  function makeAMove(move) {
    const gameCopy = new Chess(game.fen());
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result;
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.isGameOver()|| game.isDraw() || possibleMoves.length === 0) {
        alert(game.isCheckmate() ? "Checkmate! You win!" : "Draw!");
        return;
    }
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const move = possibleMoves[randomIndex];
    const gameCopy = new Chess(game.fen());
    gameCopy.move(move);
    setGame(gameCopy);
    if (gameCopy.isGameOver() || gameCopy.isDraw()) {
        alert(gameCopy.in_checkmate() ? "Checkmate! You lose!" : "Draw!");
      }
  }
  

  useEffect(() => {
    if (game.turn() === "b") {
      const timer = setTimeout(() => {
        makeRandomMove();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [game]);

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;
    return true;
  }

  return <Chessboard position={game.fen()} onPieceDrop={onDrop} className="w-5"/>;
}
