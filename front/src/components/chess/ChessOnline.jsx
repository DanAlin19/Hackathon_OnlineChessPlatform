import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // replace with your server URL

function OnlineChess() {
    const [gameResult, setGameResult] = useState(null);
    const [selectedSquare, setSelectedSquare] = useState(null);
    const [legalMoves, setLegalMoves] = useState([]);
    const [gameId, setGameId] = useState(null);
    const [player, setPlayer] = useState(null);
    const [color, setColor] = useState(null);
    const [moves, setMoves] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [fen, setFen] = useState("start");
    const [gameOver, setGameOver] = useState(false);
    const [result, setResult] = useState(null);
    const [gameIdInput, setGameIdInput] = useState("");
    const [droppedPiece, setDroppedPiece] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState("w");

    useEffect(() => {
        socket.on("gameCreated", (gameId) => {
            setGameId(gameId);
            setPlayer("w");
            setColor("w")
        });

        socket.on("gameJoined", ({ gameId, color }) => {
            setGameId(gameId);
            setPlayer("b");
            setColor(color);
        });

        socket.on("playerJoined", (player) => {
            console.log(`Player ${player} joined the game`);
        });

        socket.on("startGame", ({ fen }) => {
            setFen(fen);
            console.log("Game started");
            setGameStarted(true);
        });

        socket.on("moveMade", ({ move, player, fen }) => {
            setFen(fen);
            setDroppedPiece(null);
            setCurrentPlayer(player === "w" ? "b" : "w");
        });

        socket.on("gameOver", ({ result, fen }) => {
            setFen(fen);
            setGameResult(result);
            setGameOver(true);
        });

        socket.on("errorMessage", (message) => {
            console.error(message);
        });

        return () => {
            socket.off("gameCreated");
            socket.off("gameJoined");
            socket.off("playerJoined");
            socket.off("startGame");
            socket.off("moveMade");
            socket.off("gameOver");
            socket.off("errorMessage");
        };
    }, []);

    const handleJoinGame = () => {
        console.log(gameIdInput);
        socket.emit("joinGame", gameIdInput, "b");
    };

    const handlePieceDrop = (fromSquare, toSquare, piece) => {
        if (!gameStarted || gameOver) {
            return;
        }

        const move = {
            from: fromSquare,
            to: toSquare,
            promotion: "q"
        };
        console.log(gameId, move, player);
        socket.emit("makeMove", { gameId, move, player }, () => {
            setDroppedPiece(piece);
        });
    };

    function handleGoHome() {
        // Navigate to home page or reset state as needed
        window.location.href = "/";
    }


    return (
        <div className="relative">
            {gameId ? (
                <>
                    <div className="flex justify-center">
                        <h1 className="font-semibold text-lg dark:text-white text-black pr-96">Game ID: {gameId}</h1>
                        <h2 className="font-semibold text-lg dark:text-white text-black">You play with {player === "w" ? "White" : "Black"}</h2>
                        <h2 className="font-semibold text-lg dark:text-white text-black">{currentPlayer === "w" ? "White turn" : "Black turn"}</h2>
                    </div>
                    {gameOver ? (
                        <div className={`fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center`}>
                            <div className="bg-white rounded-lg p-20">
                                <h2 className="text-3xl font-semibold mb-8">{gameResult === "w" ? "Black Won!" : "White Won!"}</h2>
                                <div className="flex justify-center">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGoHome}>Go Home</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Chessboard
                            position={fen}
                            onPieceDrop={handlePieceDrop}
                            boardOrientation={player === "w" ? "white" : "black"}
                        />
                    )}
                </>
            ) : (

                <div className="flex flex-col items-center justify-center h-screen">
  <h1 className="text-4xl font-bold mb-10">Play with Friend!</h1>
  <div className="flex flex-col items-center">
    <input className="w-96 h-12 mb-5 p-2 border-2 border-gray-400 rounded-lg" type="text" placeholder="Enter game ID" value={gameIdInput} onChange={(e) => setGameIdInput(e.target.value)} />
    <div className="flex">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-5" onClick={() => socket.emit("createGame", "player1")}>Create Game</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleJoinGame}>Join Game</button>
    </div>
  </div>
</div>

            )}
        </div>

    );
}

export default OnlineChess;