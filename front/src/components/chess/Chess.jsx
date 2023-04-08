import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function PlayRandomMoveEngine() {
    const [game, setGame] = useState(new Chess());
    const [moves, setMoves] = useState([]);
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
    const [status, setStatus] = useState("");

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
            setStatus(game.isCheckmate() ? "Checkmate! You win!" : "Draw!");
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
            setStatus(gameCopy.isCheckmate() ? "Checkmate! You lose!" : "Draw!");
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
                    <p className="md:text-xl text-gray-900 font-bold text-center dark:text-white">{status}</p>
                    <h3 className="md:text-xl text-gray-900 font-bold text-center dark:text-white">Moves:</h3>
                    <div className="flex justify-center font-bold align-middle">
                        <button disabled={currentMoveIndex === 0} onClick={handlePrevMove} 
                            className="px-4 py-2 mx-4 text-black bg-orange-100 rounded-lg shadow hover:bg-white font-bold">
                            Prev
                        </button>
                        <button
                            disabled={currentMoveIndex === moves.length - 1}
                            onClick={handleNextMove}
                            className="px-4 py-2 mx-4 text-black bg-orange-100 rounded-lg shadow hover:bg-white font-bold"
                        >
                            Next
                        </button>
                    </div>
                    <h3 className="md:text-xl text-gray-900 font-bold text-center dark:text-white">Move {currentMoveIndex + 1}</h3>
                    <Chessboard position={moves[currentMoveIndex]} />
                </div>
            )}
        </div>
    );
}