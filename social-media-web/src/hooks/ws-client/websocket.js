import {useEffect, useState} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const useWebsocket = () => {
  const [notifications, setNotifications] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState(null);
  const [error, setError] = useState(null); // For error handling

  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId"); // Lấy userId từ localStorage (hoặc từ nơi lưu trữ khác)

  useEffect(() => {
    // Kiểm tra nếu không có userId, thì không tạo kết nối
    if (!userId) {
      setError("User ID not found");
      return;
    }

    const socket = new SockJS(
        `http://localhost:8087/websocket-service/ws`);
    const client = Stomp.over(socket);
    const header = {
      "Authorization": `Bearer ${token}`,
      "userId": userId
    }
    client.connect(
        header,
        (frame) => {
          setIsConnected(true);
          setStompClient(client);

          // Subscribe to topic
          client.subscribe("/topic/notifications", (message) => {
            setNotifications((prevNotifications) => [
              ...prevNotifications,
              message.body,
            ]);
          });
        },
        (error) => {
          console.error("WebSocket connection error:", error);
          setError(error);
          setIsConnected(false);
        }
    );

    // Cleanup on component unmount
    return () => {
      if (client && isConnected) {
        client.disconnect(() => {
          console.log("WebSocket disconnected");
        });
      }
    };
  }, [userId, token]); // Re-run when userId or token changes

  const handleSendMessage = (message) => {
    if (isConnected && stompClient) {
      stompClient.send("/app/notifications", {},
          JSON.stringify({message, userId}));
    } else {
      console.log("WebSocket not connected yet");
    }
  };

  return {notifications, handleSendMessage, isConnected, error};
};

export default useWebsocket;
