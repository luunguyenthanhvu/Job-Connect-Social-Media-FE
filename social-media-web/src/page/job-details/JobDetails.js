import React, {useEffect, useState} from 'react';
import {Box, Grid} from '@mui/material';
import MainContent from "./MainContent";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import {useLoading} from '../../context/LoadingContext';

const JobDetails = () => {

  const [selectedJob, setSelectedJob] = useState(null);
  const [jobDetail, setJobDetail] = useState(null);
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  const navigate = useNavigate();
  const location = useLocation();  // Lấy location hiện tại
  const queryParams = new URLSearchParams(location.search);  // Lấy các tham số query string
  const jobId = queryParams.get('id');  // Lấy giá trị của 'id'

  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadJobData = async () => {
    try {
      showLoading();
      const response = await axios.get(
          `${apiConfig.getJobDetailAggregation}/${jobId}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
      if (response.status === 200) {
        console.log(response)
        setJobDetail(response.data.result);
      }
    } catch (error) {
      throwError(error);
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    loadJobData();
  }, []);
  return (
      <div>
        <Box
            sx={{
              display: 'flex',
              backgroundColor: '#fff',
              flexDirection: 'column',
              minHeight: '100vh',
              width: '80%',
              margin: 'auto',
            }}
        >
          <Grid container sx={{flexGrow: 1, padding: '10px 20px'}}>
            <MainContent jobDetail={jobDetail}/>
          </Grid>
        </Box>

      </div>
  );
};

export default JobDetails;
