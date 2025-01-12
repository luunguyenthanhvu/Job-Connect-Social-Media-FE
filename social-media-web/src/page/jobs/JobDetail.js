import React, {useState} from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import parse from 'html-react-parser';
import WorkIcon from '@mui/icons-material/Work';
import {useLoading} from "../../context/LoadingContext";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS once in your app entry point

const JobDetails = ({job, jobDetail}) => {
  console.log(job)
  const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility
  const [coverLetter, setCoverLetter] = useState('');     // State for cover letter input
  const userRole = localStorage.getItem('userRole');
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  const navigate = useNavigate();
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleApply = async () => {
    try {
      const response = await axios.post(
          `${apiConfig.applyToJob}`,
          {
            jobId: job.id,
            coverLetter: coverLetter,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
      if (response.status === 200) {
        console.log(response)
        toast.success("You have successfully applied to the job!", {
          autoClose: 5000,
          position: 'top-right'
        });
      }
    } catch (error) {
      throwError(error);
    }
    handleCloseModal();
  };

  if (!job || !jobDetail) {
    return <Typography>Loading job details...</Typography>;
  }

  return (
      <Paper sx={{padding: 4, margin: 'auto', maxWidth: 800}}>
        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
          {job.avatarUrl ? (
              <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundImage: `url(${job.avatarUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '50%',
                    marginRight: 2,
                  }}
              />
          ) : (
              <Avatar sx={{
                width: 50,
                height: 50,
                bgcolor: 'primary.main',
                marginRight: 2
              }}>
                <WorkIcon/>
              </Avatar>
          )}
          <Typography variant="h6" fontWeight="bold">
            {job.username || 'Company Name'}
          </Typography>
        </Box>
        <Typography variant="h4" fontWeight="bold" sx={{marginBottom: 2}}>
          {job.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Employment Type: {jobDetail.employmentType}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Number of Positions: {jobDetail.numberOfPositions}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Address: {job.address}
        </Typography>
        <Divider sx={{marginY: 2}}/>
        <Typography variant="h6" fontWeight="bold">Job Description</Typography>
        <Typography paragraph>{parse(jobDetail.jobDescription)}</Typography>
        <Typography variant="h6" fontWeight="bold">Job Requirements</Typography>
        <Typography component="ul" sx={{paddingLeft: 3}}>
          {parse(jobDetail.jobExpertise)}
        </Typography>
        <Divider sx={{marginY: 2}}/>
        <Typography variant="h6" fontWeight="bold">Welfare</Typography>
        <Typography component="ul" sx={{paddingLeft: 3}}>
          {parse(jobDetail.jobWelfare)}
        </Typography>
        <Divider sx={{marginY: 2}}/>
        {userRole !== 'EMPLOYER' && (
            <Button variant="contained" color="primary" fullWidth
                    onClick={handleOpenModal}>
              Apply Now!
            </Button>
        )}

        {/* Cover Letter Modal */}
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Paper sx={{
            padding: 4,
            margin: 'auto',
            maxWidth: 600,
            marginTop: '10%'
          }}>
            <Typography variant="h6" fontWeight="bold" sx={{marginBottom: 2}}>
              Submit Your Application
            </Typography>
            <TextField
                label="Cover Letter"
                multiline
                rows={4}
                fullWidth
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
            />
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 2
            }}>
              <Button onClick={handleCloseModal}
                      sx={{marginRight: 1}}>Cancel</Button>
              <Button variant="contained" color="primary" onClick={handleApply}>
                Submit
              </Button>
            </Box>
          </Paper>
        </Modal>
      </Paper>
  );
};

export default JobDetails;
