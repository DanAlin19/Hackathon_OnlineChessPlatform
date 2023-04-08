import React from 'react'
import { useParams } from 'react-router-dom'
//const socket  = require('../connection/sockets').socket
import { socket } from '../connection/sockets'

/**
 * 'Join game' is where we actually join the game room. 
 */


const JoinGameRoom = (gameid, userName, isCreator) => {
    /**
     * For this browser instance, we want 
     * to join it to a gameRoom. For now
     * assume that the game room exists 
     * on the backend. 
     *  
     * 
     * TODO: handle the case when the game room doesn't exist. 
     */
    const idData = {
        gameId : gameid,
        userName : userName,
        isCreator: isCreator
    }
    console.log(gameid)
    console.log(userName)
    console.log(isCreator)
    socket.emit("playerJoinGame", idData)
}
  
  
const JoinGame = (props) => {
    /**
     * Extract the 'gameId' from the URL. 
     * the 'gameId' is the gameRoom ID. 
     */
    const { gameid } = useParams()
    JoinGameRoom(gameid, props.userName, props.isCreator)
    return <div>
        <h1 style = {{textAlign: "center"}}>Welcome to Chess with Friend!</h1>
    </div>
}

export default JoinGame
  