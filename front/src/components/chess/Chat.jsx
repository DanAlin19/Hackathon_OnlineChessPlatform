import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

function RealTimeMessaging() {
  const [messages, setMessages] = useState([]);
  const [messageBoxValue, setMessageBoxValue] = useState('');

  const [userName, setUserName] = useState(null);
  const userId = localStorage.getItem("id");
  useEffect(() => {

    const fetchUserProfile = async () => {
      if (userId != null) {
        try {
          console.log(`http://localhost:5000/api/v1/user/${userId}`)
          const response = await fetch(`http://localhost:5000/api/v1/user/${userId}`);
          const data = await response.json();
          console.log(data);
          setUserName(data.lastName);
        } catch (error) {
          console.error(error);
        }
      }
      else{
        setUserName("Guest")
      }
    };
    fetchUserProfile();
  }, [userId]);

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:5000');
    socketRef.current.on('connect', () => {
      console.log('Connected!');
    });
    socketRef.current.on('message', (data) => {
      if (typeof data === 'string') {
        setMessages(prevMessages => [...prevMessages, data]);
      } else if (data instanceof Blob) {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
          const text = reader.result;
          setMessages(prevMessages => [...prevMessages, text]);
        });
        reader.readAsText(data);
      } else {
        // If the message is an object with a name and data property, display the name along with the message data
        const message = `${data.name}: ${data.data}`;
        setMessages(prevMessages => [...prevMessages, message]);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  function handleSend() {
    if (!socketRef.current.connected) {
      setMessages(prevMessages => [...prevMessages, 'No WebSocket connection :(']);
      return;
    }

    //if (!userProfile.lastName) return; // If the user doesn't enter a name, do nothing

    const message = {
      name: userName,
      data: messageBoxValue,
    };

    socketRef.current.emit('message', message); // Send the message object with the name and data
    setMessageBoxValue('');
  }

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 my-10">
      <h1 className="text-xl font-bold mb-4">Chat </h1>
      <pre id="messages" className="h-80 overflow-scroll mb-4">
        {messages.join('\n\n')}
      </pre>
      <input
        type="text"
        id="messageBox"
        placeholder="Type your message here"
        value={messageBoxValue}
        onChange={(e) => setMessageBoxValue(e.target.value)}
        className="block w-full mb-4 p-4 border border-gray-300 rounded-lg"
      />
      <button
        id="send"
        title="Send Message!"
        className="block w-full bg-black text-white font-bold rounded-lg py-3"
        style={{ height: '50px' }}
        onClick={handleSend}
      >
        Send Message
      </button>
    </div>
  );
}

export default RealTimeMessaging;
