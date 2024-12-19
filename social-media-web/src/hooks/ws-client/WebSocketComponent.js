import {useEffect, useState} from "react";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const WebSocketComponent = () => {
  const [notifications, setNotifications] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState(null); // Keep stompClient in state

  useEffect(() => {
    const socket = new SockJS('http://localhost:8087/websocket-service/ws');
    const client = Stomp.over(socket);

    client.connect({}, () => {
      setIsConnected(true);
      setStompClient(client); // Save stompClient in state

      client.subscribe('/topic/notifications', (message) => {
        setNotifications(
            prevNotifications => [...prevNotifications, message.body]);
      });
    }, (error) => {
      console.error("WebSocket connection error:", error);
      setIsConnected(false);
    });

    // Cleanup when component unmounts
    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
      setIsConnected(false);
    };
  }, []);

  const handleSendMessage = (message) => {
    if (isConnected && stompClient) {
      stompClient.send('/app/notifications', {}, JSON.stringify({message}));
    } else {
      console.log('WebSocket not connected yet');
    }
  };

  return (
      <div>
        <h1>Notifications</h1>
        {isConnected ? (
            <p>Connected to WebSocket</p>
        ) : (
            <p>Connecting...</p>
        )}

        <button onClick={() => handleSendMessage('Hello WebSocket!')}>
          Send Message
        </button>

        <ul>
          {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
          ))}
        </ul>
      </div>
  );
};

export default WebSocketComponent;
