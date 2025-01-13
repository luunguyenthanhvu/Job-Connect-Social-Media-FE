import {useEffect, useState} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useWebsocket = () => {
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [stompClient, setStompClient] = useState(null);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Hàm mở Snackbar
  const showSnackbar = (message, severity = "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };
  const token = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // Kiểm tra nếu không có userId, thì không tạo kết nối
    if (!userId) {
      setError("User ID not found");
      return;
    }
    const socket = new SockJS(`http://localhost:8087/websocket-service/ws`);
    const client = Stomp.over(socket);
    setStompClient(client); // Set stompClient after it's initialized

  }, [userId, token]);

  useEffect(() => {
    // Make sure stompClient is not null and connected
    if (stompClient && !isConnected) {
      const connectHeaders = {
        'userId': localStorage.getItem("userId")
      };
      stompClient.connect(
          connectHeaders,
          onConnected,
          onError
      );
    }
  }, [stompClient, isConnected]); // Run this effect after stompClient is set

  const onConnected = () => {
    // Set the connected state
    setIsConnected(true);
    // Subscribe to user-specific and public topics
    stompClient.subscribe(`/user/${userId}/queue/notifications`,
        onMessageReceived);
    // stompClient.subscribe(`/user/${userId}/queue/messages`,
    //     onMessageReceived);
    // stompClient.subscribe('/user/public', onMessageReceived);

    // Send the connected user info
    stompClient.send(
        '/app/user.addUser',
        {},
        JSON.stringify({userId: userId})
    );

  };

  const onMessageReceived = (message) => {
    console.log(message)
    let notificationsCount = parseInt(localStorage.getItem("notifications")) || 0;
    notificationsCount += 1;
    localStorage.setItem("notifications", notificationsCount);
    setNotificationsCount(notificationsCount);
    notifyNewInfo();
  };
  const notifyNewInfo = () => {
    console.log("ok ne")
    toast.info("You got new notification!", {
      autoClose: 5000,
      position: 'top-right'
    });
  }

  const onError = (error) => {
    console.error("WebSocket error:", error);
    setError(error);
  };

  return {notificationsCount, isConnected, error};
};

export default useWebsocket;
