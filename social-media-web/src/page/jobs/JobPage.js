import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Modal} from '@mui/material';
import MainContent from "../../components/job/MainContent";
import JobPosting from "./JobPosting";
import JobDetail from "./JobDetail";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import {useLoading} from '../../context/LoadingContext';

const JobPage = () => {

  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [jobDetail, setJobDetail] = useState(null);
  const [filter, setFilter] = useState('');
  const [openPostModal, setOpenPostModal] = useState(false);

  // Loading content
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  // Redirect to other page
  const navigate = useNavigate();

  // Alert info for user
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');

  const handleJobClick = (job) => {
    console.log("Dang chon job nay")
    console.log(job)
    console.log(job.id)
    setSelectedJobId(job.id)
    console.log(selectedJobId)
    setSelectedJob(job);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const token = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");

  const loadJobDetailsData = async () => {
    try {
      console.log("Job id ne" + selectedJobId)
      const response = await axios.get(
          `${apiConfig.getJobDetails}/${selectedJobId}`, {
            headers: {
              'Authorization': `Bearer ${token}` // Thêm token nếu cần
            }
          });

      if (response.status === 200) {
        const resultValue = response.data.result;
        setJobDetail(resultValue);
        // Show success alert
        setAlertMessage('Login successful! Redirecting...');
        setOpenAlert(true);
      }

    } catch (error) {
      throwError(error);
    } finally {

    }

  }

  const loadContentData = async () => {
    try {
      showLoading();
      const response = await axios.get(apiConfig.listJobPost, {
        params: {page, size},
      });

      if (response.status === 200) {
        const resultValue = response.data.result;
        setJobs(resultValue.content);

        // set default job details
        setSelectedJobId(resultValue.content[0].id)
        setOpenAlert(true);
      }

    } catch (error) {
      console.log(error)
      throwError(error);
    } finally {
      hideLoading();
    }

  }

  // for loading list job
  useEffect(() => {
    loadContentData();
  }, [page]);

  // for loading jobdetails
  useEffect(() => {
    loadJobDetailsData();
  }, [selectedJobId]);

  const handleOpenModal = () => setOpenPostModal(true);
  const handleCloseModal = () => setOpenPostModal(false);
  return (
      <Box sx={{
        display: 'flex',
        backgroundColor: '#fff',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '80%',
        margin: 'auto'
      }}>
        {/* Nút đăng tuyển chỉ hiện khi người dùng là nhà tuyển dụng */}
        {true && (
            <Box sx={{display: 'flex', justifyContent: 'flex-end', margin: 2}}>
              <Button variant="contained" color="primary"
                      onClick={handleOpenModal}>
                Đăng Tuyển Dụng
              </Button>
            </Box>
        )}

        {/* Modal đăng bài tuyển dụng */}
        <Modal
            open={openPostModal}
            onClose={handleCloseModal}
            aria-labelledby="post-job-modal-title"
            aria-describedby="post-job-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 1
          }}>
            <JobPosting onClose={handleCloseModal}/>
          </Box>
        </Modal>

        <Grid container sx={{flexGrow: 1, height: 'calc(100vh - 120px)'}}>
          {/* Job List */}
          <Grid item xs={12} md={4} sx={{overflowY: 'auto', height: '100%'}}>
            <MainContent
                onJobClick={handleJobClick}
                jobs={jobs}
                page={page}
                setPage={setPage}
            />
          </Grid>

          {/* Job Detail */}
          <Grid item xs={12} md={8} sx={{overflowY: 'auto', height: '100%'}}>
            {selectedJob ? (
                <JobDetail
                    job={jobDetail}
                />
                //<JobPosting></JobPosting>
            ) : (
                <Box sx={{padding: 2}}>Select a job to see details</Box>
            )}
          </Grid>
        </Grid>
      </Box>
  );
};

export default JobPage;
