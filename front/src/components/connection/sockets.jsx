import io from 'socket.io-client'

const URL = 'http://localhost:5000'

const socket = io(URL);


var mySocketId
// register preliminary event listeners here:

export {
    socket,
    mySocketId
}