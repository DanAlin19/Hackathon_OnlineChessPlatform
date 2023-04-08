import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayRandomMoveEngine() {
    const [game, setGame] = useState(new Chess());
    const [moves, setMoves] = useState([]);
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0);

    function makeAMove(move) {
        const gameCopy = new Chess(game.fen());
        const result = gameCopy.move(move);
        setGame(gameCopy);
        setMoves((moves) => [...moves, gameCopy.fen()]);
        return result;
    }

    function makeRandomMove() {
        const possibleMoves = game.moves();
        if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) {
            alert(game.isCheckmate() ? "Checkmate! You win!" : "Draw!");
            return;
        }
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        const move = possibleMoves[randomIndex];
        const gameCopy = new Chess(game.fen());
        gameCopy.move(move);
        setGame(gameCopy);
        //setMoves((moves) => [...moves, gameCopy.fen()]);
        if (gameCopy.isGameOver() || gameCopy.isDraw()) {
            alert(gameCopy.isCheckmate() ? "Checkmate! You lose!" : "Draw!");
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

    function handlePrevMove() {
        if (currentMoveIndex > 0) {
            setCurrentMoveIndex(currentMoveIndex - 1);
        }
    }

    function handleNextMove() {
        if (currentMoveIndex < moves.length - 1) {
            setCurrentMoveIndex(currentMoveIndex + 1);
        }
    }

    return (
        <div>
            {!game.isGameOver() && (
                <Chessboard position={game.fen()} onPieceDrop={onDrop} className="w-5" />
            )}
            {game.isGameOver() && (
                <div>
                    <h2>Game Over!</h2>
                    <p>{game.isCheckmate() ? "Checkmate!" : "Draw!"}</p>
                    <h3>Moves:</h3>
                    <div>
                        <button disabled={currentMoveIndex === 0} onClick={handlePrevMove}>
                            Prev
                        </button>
                        <button
                            disabled={currentMoveIndex === moves.length - 1}
                            onClick={handleNextMove}
                        >
                            Next
                        </button>
                    </div>
                    <h3>Move {currentMoveIndex + 1}</h3>
                    <Chessboard position={moves[currentMoveIndex]} />
                </div>
            )}
        </div>
    );
}