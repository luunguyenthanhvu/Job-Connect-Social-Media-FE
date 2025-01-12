import React, {useEffect, useState} from 'react';
import {Box, Button, Grid} from '@mui/material';
import MainContent from "../../components/job/MainContent";
import JobDetail from "./JobDetail";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import {useLoading} from '../../context/LoadingContext';

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [size, setSize] = useState(5);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobDetail, setJobDetail] = useState(null);
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  const navigate = useNavigate();
  // user role
  const userRole = localStorage.getItem("userRole");
  const loadJobDetailsData = async (jobId) => {
    try {
      const response = await axios.get(
          `${apiConfig.getJobDetails}/${jobId}`, {
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
    }
  };

  const loadContentData = async () => {
    try {
      showLoading();
      const response = await axios.get(apiConfig.listJobPost,
          {params: {page, size}});
      if (response.status === 200) {
        const resultValue = response.data.result;
        setTotalPage(resultValue.totalPages);
        setJobs(resultValue.content);
      }
    } catch (error) {
      throwError(error);
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    loadContentData();
  }, [page]);

  const handleJobClick = (job) => {
    console.log("Đang bấm vào job" + job.id);
    setSelectedJob(job)
    loadJobDetailsData(job.id);
  };

  const handlePostJob = () => {
    navigate("/post-job"); // Điều hướng tới trang đăng tuyển dụng
  };

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
          <Grid container sx={{flexGrow: 1, height: 'calc(100vh - 120px)'}}>
            {/* Job List */}
            <Grid item xs={12} md={4} sx={{overflowY: 'auto', height: '100%'}}>
              <MainContent
                  onJobClick={handleJobClick}
                  jobs={jobs}
                  totalPage={totalPage}
                  page={page}
                  setPage={setPage}
              />
            </Grid>
            {/* Job Detail */}
            <Grid item xs={12} md={8} sx={{overflowY: 'auto', height: '100%'}}>
              {selectedJob ? (
                  <JobDetail
                      job={selectedJob}
                      jobDetail={jobDetail}
                      loadJobDetailsData={loadJobDetailsData}
                  />
              ) : (
                  <Box sx={{padding: 2}}>Select a job to see details</Box>
              )}
            </Grid>
          </Grid>
        </Box>

        {/* Nút nổi */}

        {userRole === 'EMPLOYER' && (
            <Button
                variant="contained"
                color="primary"
                onClick={handlePostJob}
                sx={{
                  position: 'fixed',
                  bottom: 20,
                  right: 20,
                  zIndex: 1000,
                  borderRadius: '50%',
                  width: 60,
                  height: 60,
                }}
            >
              +
            </Button>
        )}
      </div>
  );
};

export default JobPage;
