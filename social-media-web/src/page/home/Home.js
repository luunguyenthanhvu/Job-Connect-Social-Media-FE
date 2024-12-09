import React, {useEffect} from 'react';
import "./home.css"; // Đảm bảo bạn đã tạo file home.css
import {Box} from "@mui/material";
import Footer from "../../components/abstract-components/Footer";
import MainContent from "../../components/home/MainContent";
import LeftSideBar from "../../components/home/LeftSideBar";
import {useLoading} from "../../context/LoadingContext";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import axios from "axios";
import apiConfig from "../../api/apiConfig";

const Home = () => {
  // Loading axios here
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  const token = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");
  const fetchApiData = async () => {
    if (email === "") {
      try {
        showLoading();
        const response = await axios.get(`${apiConfig.userBasicInfo}`
            , {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

        const userData = response.data.result;
        localStorage.setItem("username", userData.username);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("img", userData.img);
        localStorage.setItem("userId", userData.id);
        localStorage.setItem("userRole", userData.roles[0].roleName);
      } catch (error) {
        throwError(error);
      } finally {
        hideLoading();
      }
    }

  };

  useEffect(() => {
    // Gọi API lần đầu tiên
    fetchApiData();
  }, []);

  return (
      <div style={{display: 'flex'}}>
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
      </div>
  );
};

export default Home;
