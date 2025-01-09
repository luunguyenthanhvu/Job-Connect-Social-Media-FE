import React, {useEffect} from "react";
import {Box} from "@mui/material";
import Footer from "../../components/abstract-components/Footer";
import MainContent from "../../components/notification/MainContent";
import LeftSideBar from "../../components/notification/LeftSideBar";
import {useLoading} from "../../context/LoadingContext";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import axios from "axios";
import apiConfig from "../../api/apiConfig";

const Job = () => {

  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  const token = localStorage.getItem("accessToken");
  const fetchApiData = async () => {
    try {
      showLoading();
      const response = await axios.get(`${apiConfig.listNotification}`
          , {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

      const userData = response.data.result;
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

  return (<div style={{display: 'flex'}}>
    <Box sx={{width: '25%'}}>
      <LeftSideBar/>
    </Box>
    <Box sx={{width: '50%'}}>
      <MainContent/>
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
