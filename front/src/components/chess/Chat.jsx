import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

function RealTimeMessaging() {
  const [messages, setMessages] = useState([]);
  const [messageBoxValue, setMessageBoxValue] = useState('');

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

    socketRef.current.emit('message', messageBoxValue);
    setMessageBoxValue('');
  }

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
    <h1 className="text-xl font-bold mb-4">Real Time Messaging</h1>
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
