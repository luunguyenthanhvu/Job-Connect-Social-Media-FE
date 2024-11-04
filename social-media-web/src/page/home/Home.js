import React from "react";
import "./home.css"; // Đảm bảo bạn đã tạo file home.css
import {Box} from "@mui/material";
import RightSidebar from "../../components/home/RightSidebar";
import MainContent from "../../components/home/MainContent";
import LeftSidebar from "../../components/home/LeftSidebar";

const Home = () => {
  return (
      <div style={{display: 'flex'}}>
        <Box sx={{width: '25%'}}>
          <LeftSidebar/>
        </Box>
        <Box sx={{width: '50%'}}>
          <MainContent/>
        </Box>
        <Box sx={{width: '25%',display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto' }}>
          <RightSidebar/>
        </Box>
      </div>
  );
};

export default Home;
