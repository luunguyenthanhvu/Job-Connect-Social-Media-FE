import React from "react";
import {Box} from "@mui/material";
import Footer from "../../components/abstract-components/Footer";
import MainContent from "../../components/job/MainContent";
import LeftSideBar from "../../components/job/LeftSideBar";

const Job = () => {
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
