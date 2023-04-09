import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function ReviewPage() {
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
    console.log(moves);
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
        <div className='h-screen w-full duration-100 flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-300 dark:bg-gradient-to-r dark:from-stone-700 dark:to-stone-800 '>
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
            <div className="w-1/3">
                <Chessboard position={moves[currentMoveIndex]} />
            </div>
        </div>
    );
}