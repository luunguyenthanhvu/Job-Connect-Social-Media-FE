import React, {useEffect, useState} from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import apiConfig from "../../api/apiConfig";
import {useLoading} from "../../context/LoadingContext";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import {useNavigate} from "react-router-dom";

const JobPosting = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobExpertise, setJobExpertise] = useState('');
  const [jobWelfare, setJobWelfare] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [numberOfPositions, setNumberOfPositions] = useState(1);
  const [expirationDate, setExpirationDate] = useState('');
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  const navigate = useNavigate();
  const [listAddress, setListAddress] = useState(null);

  // Alert info for user
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');

  // user role
  const userRole = localStorage.getItem("userRole");
  const handlePostJob = async () => {
    showLoading();
    const jobData = {
      title: jobTitle,
      jobDescription: jobDescription,
      jobExpertise: jobExpertise,
      jobWelfare: jobWelfare,
      addressId: location,
      employmentType: jobType,
      numberOfPositions: numberOfPositions,
      expirationDate: new Date(expirationDate),
    };
    console.log(jobData)
    try {
      const response = await axios.post(
          `${apiConfig.createJob}`,
          jobData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
      );
      if (response.status === 200) {
        setAlertMessage('Create a new jobs successfully! Redirecting...');
        setOpenAlert(true);

        // Redirect after 2 seconds
        setTimeout(() => {
          navigate('/jobs');
        }, 2000);
      }

    } catch (error) {
      console.error('Error posting job:', error);
    } finally {
      hideLoading();
    }
  };

  const loadUserListAddress = async () => {
    showLoading();
    try {
      const response = await axios.get(
          `${apiConfig.getUserListAddress}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
      if (response.status === 200) {
        setListAddress(response.data.result);
      }
    } catch (error) {
      throwError(error);
    } finally {
      hideLoading();
    }
  };

  const loadEmploymentTypes = async () => {
    try {
      // Simulating fetching enum values from the backend
      const response = [
        {value: 'FULL_TIME', label: 'Full-time'},
        {value: 'PART_TIME', label: 'Part-time'},
        {value: 'INTERNSHIP', label: 'Internship'}
      ];
      setEmploymentTypes(response);
    } catch (error) {
      throwError(error);
    }
  };

  useEffect(() => {
    loadUserListAddress();
    loadEmploymentTypes(); // Load the employment types
  }, []);

  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f9',
        padding: '20px',
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          width: '100%',
          maxWidth: '900px',
        }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '24px',
            color: '#333',
            marginBottom: '30px',
          }}>Post Recruitment</h2>

          <TextField
              label="Job name"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              fullWidth
              margin="normal"
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Address</InputLabel>
                <Select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    label="Address"
                >
                  {listAddress && listAddress.map(address => (
                      <MenuItem key={address.addressId}
                                value={address.addressId}>
                        {address.addressDescription}
                      </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Employment Type</InputLabel>
                <Select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    label="Employment Type"
                >
                  {employmentTypes.map(type => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.label}
                      </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                  label="Number of Positions"
                  type="number"
                  value={numberOfPositions}
                  onChange={(e) => setNumberOfPositions(e.target.value)}
                  fullWidth
                  margin="normal"
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                  label="Expiration date"
                  type="date"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
              />
            </Grid>
          </Grid>

          <div style={{marginTop: '20px'}}>
            <h3>Job description</h3>
            <CKEditor
                editor={ClassicEditor}
                data={jobDescription}
                onChange={(event, editor) => setJobDescription(
                    editor.getData())}
            />
          </div>

          <div style={{marginTop: '20px'}}>
            <h3>Professional Skills</h3>
            <CKEditor
                editor={ClassicEditor}
                data={jobExpertise}
                onChange={(event, editor) => setJobExpertise(editor.getData())}
            />
          </div>

          <div style={{marginTop: '20px'}}>
            <h3>Welfare</h3>
            <CKEditor
                editor={ClassicEditor}
                data={jobWelfare}
                onChange={(event, editor) => setJobWelfare(editor.getData())}
            />
          </div>

          {userRole === 'EMPLOYER' && (
              <Button
                  onClick={handlePostJob}
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    marginTop: '30px',
                    padding: '12px',
                    fontSize: '16px',
                  }}
              >
                Post a job
              </Button>
          )}
        </div>
      </div>
  )
      ;
};

export default JobPosting;
