import { useState, useEffect } from "react";
import Chess from "../chess/ChessOnline"
import Chat from "../chess/Chat"

export default function OnlineGame() {
    
    return (
        <div className='h-full w-full duration-100 flex items-center justify-center bg-gradient-to-r from-orange-100 to-orange-300 dark:bg-gradient-to-r dark:from-stone-700 dark:to-stone-800 '>
            <div className="w-1/3">
                <Chess/>
            </div>
            {/* <div>
                <Chat/>
            </div> */}
        </div>
    );
}