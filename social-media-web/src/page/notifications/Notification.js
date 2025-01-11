import React, {useEffect} from "react";
import {Box} from "@mui/material";
import Footer from "../../components/abstract-components/Footer";
import MainContent from "../../components/notification/MainContent";
import LeftSideBar from "../../components/notification/LeftSideBar";
import {useLoading} from "../../context/LoadingContext";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import {useWebSocketContext} from "../../hooks/ws-client/WebSocketContext";

const Job = () => {
  const [notifications, setNotifications] = React.useState([]);
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  const token = localStorage.getItem("accessToken");

  // websocket
  const {notificationsCount, isConnected} = useWebSocketContext();
  const fetchApiData = async () => {
    try {
      showLoading();
      const response = await axios.get(`${apiConfig.listNotification}`
          , {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

      // Format dữ liệu thông báo
      const userData = response.data.result;
      setNotifications(userData);
      console.log(userData)
    } catch (error) {
      console.log(error)
      throwError(error);
    } finally {
      hideLoading();
    }

  };

  useEffect(() => {
    // Gọi API lần đầu tiên
    fetchApiData();
  }, []);

  useEffect(() => {
    // Gọi API lần đầu tiên
    fetchApiData();
  }, notificationsCount);

  return (<div style={{display: 'flex'}}>
    <Box sx={{width: '25%'}}>
      <LeftSideBar/>
    </Box>
    <Box sx={{width: '50%'}}>
      <MainContent
          notifications={notifications}
      />
    </Box>
    <Box sx={{
      width: '25%',
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft: 'auto'
    }}>
      <Footer/>
    </Box>
  </div>);
};

export default Job;
