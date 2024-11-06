import React from "react";
import "./home.css"; // Đảm bảo bạn đã tạo file home.css
import {Box} from "@mui/material";
import Footer from "../../components/abstract-components/Footer";
import MainContent from "../../components/home/MainContent";
import LeftSideBar from "../../components/home/LeftSideBar";

const Home = () => {
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
