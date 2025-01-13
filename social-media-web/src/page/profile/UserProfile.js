import React, {useEffect, useState} from 'react';
import {Avatar, Box, Chip, IconButton, Paper, Typography} from '@mui/material';
import {Edit, Email, LocationOn, Phone} from '@mui/icons-material';
import {useLoading} from "../../context/LoadingContext";
import {useGlobalError} from "../../error-handler/GlobalErrorProvider";
import axios from "axios";
import apiConfig from "../../api/apiConfig";
import {useLocation} from "react-router-dom";
import UserCV from "../../components/cv/UserCV";

const UserProfile = () => {
  const {showLoading, hideLoading} = useLoading();
  const {throwError} = useGlobalError();
  const token = localStorage.getItem("accessToken");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const [user, setUser] = useState({
    img: '',
    name: '',
    position: '',
    phone: '',
    emailUser: '',
    website: '',
    location: '',
    objective: '',
    skills: '',
    education: [],
    projects: [],
    workExperience: []
  });

  const fetchApiData = async () => {
    try {
      showLoading();
      const response = await axios.get(`${apiConfig.applicantProfile}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = response.data.result;
      setUser({
        img: data.img,
        name: `${data.firstname} ${data.lastname}`,
        position: data.position,
        phone: data.phoneNumber,
        emailUser: data.userEmail,
        website: data.website || 'N/A',
        location: data.address,
        objective: data.objective,
        skills: data.skills,
        education: data.educationRequestDTO || [],
        projects: data.projectRequestDTO || [],
        workExperience: data.workExperienceRequestDTO || []
      });
    } catch (error) {
      console.error(error);
      throwError(error);
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
      <Box sx={{padding: 3, width: '80%', margin: 'auto', minHeight: '100vh'}}>
        <Paper elevation={3} sx={{
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 3,
          position: 'relative'
        }}>
          <IconButton sx={{position: 'absolute', top: 16, right: 16}}
                      onClick={() => {
                      }}>
            <Edit/>
          </IconButton>
          <Avatar sx={{width: 120, height: 120, mb: 2}} src={user.img}
                  alt={user.name}/>
          <Typography variant="h4" fontWeight="bold"
                      sx={{textAlign: 'center', mb: 1}}>{user.name}</Typography>
          <Typography variant="h6"
                      color="textSecondary">{user.position}</Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, my: 2}}>
            <Chip icon={<LocationOn/>} label={user.location}
                  variant="outlined"/>
            <Chip icon={<Phone/>} label={user.phone} variant="outlined"/>
            <Chip icon={<Email/>} label={user.emailUser} variant="outlined"/>
          </Box>
        </Paper>

        <UserCV
            img={user.img}
            name={user.name}
            position={user.position}
            phone={user.phone}
            emailUser={user.emailUser}
            website={user.website}
            location={user.location}
            objective={user.objective}
            skills={user.skills}
            education={user.education}
            projects={user.projects}
            workExperience={user.workExperience}
        />
      </Box>
  );
};

export default UserProfile;
