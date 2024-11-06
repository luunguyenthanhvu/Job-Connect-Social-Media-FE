import React, {useState} from 'react';
import Card from "@mui/material/Card";
import {Box, List, Typography} from "@mui/material";
import JobItem from './JobItem';

const MainContent = () => {
  const mockPosts = [
    {
      id: 1,
      avt: "https://media.licdn.com/dms/image/v2/C560BAQFVx7L2Y-Fz2w/company-logo_200_200/company-logo_200_200/0/1630588427440/kms_technology_logo?e=1738800000&v=beta&t=3B0OV23L3uQ9Envj04rr_LzFbkbhio5-P7eJcJKD_6c",
      jobTitle: "Middle Java Developer",
      companyName: "KMS Technology",
      address: "Ho Chi Minh City, Vietnam",
      timePost: "9 hours ago",
      type: "Full Time"
    },
    {
      id: 2,
      avt: "https://media.licdn.com/dms/image/v2/C510BAQFdNUkdQtNukA/company-logo_200_200/company-logo_200_200/0/1630582291357/fpt_software_logo?e=1738800000&v=beta&t=DgmQWQBBHQuckr-FtRvNbxM4XbLWLoKmnSCjJ3u1LCU",
      jobTitle: "Software Engineer",
      companyName: "FPT Software",
      address: "Hanoi, Vietnam",
      timePost: "9 hours ago",
      type: "Part Time"
    },
    {
      id: 3,
      avt: "https://media.licdn.com/dms/image/v2/D560BAQGkH2h8p-Fh6w/company-logo_200_200/company-logo_200_200/0/1624398242955/abc_company_logo?e=1738800000&v=beta&t=HaWq2KwWtv9jKLKvGTXn8nW1djzxhUbKMgcvn7p6V-g",
      jobTitle: "Front-end Developer",
      companyName: "ABC Company",
      address: "Da Nang, Vietnam",
      timePost: "2 days ago",
      type: "Full Time"
    },
    {
      id: 4,
      avt: "https://media.licdn.com/dms/image/v2/C560BAQGQH9L2A-Fz1w/company-logo_200_200/company-logo_200_200/0/1634599524575/xyz_company_logo?e=1738800000&v=beta&t=3FNhTbgdrQsjPZvw1n5x5XG6toB9l5eT-EzScn55t8I",
      jobTitle: "Data Scientist",
      companyName: "XYZ Corp",
      address: "Ho Chi Minh City, Vietnam",
      timePost: "3 days ago",
      type: "Internship"
    },
    {
      id: 5,
      avt: "https://media.licdn.com/dms/image/v2/D560BAQHHiZ8jPQJWkQ/company-logo_200_200/company-logo_200_200/0/1638589430245/tech_co_logo?e=1738800000&v=beta&t=5Dw8gqK8KQt3fT7bBlyD1uAb2ApBQLIFlv5MRRt_j38",
      jobTitle: "Mobile App Developer",
      companyName: "TechCo",
      address: "Hanoi, Vietnam",
      timePost: "5 hours ago",
      type: "Full Time"
    },
    {
      id: 6,
      avt: "https://media.licdn.com/dms/image/v2/C560BAQGLdu3R3W3dQ0/company-logo_200_200/company-logo_200_200/0/1636722085000/xyz_financial_logo?e=1738800000&v=beta&t=Rkz8ABWzYJl6kOjo5D5U8DW0Y9hLzAfybLS9-JHfaA4",
      jobTitle: "Business Analyst",
      companyName: "XYZ Financial Services",
      address: "Ho Chi Minh City, Vietnam",
      timePost: "7 hours ago",
      type: "Contract"
    },
    {
      id: 7,
      avt: "https://media.licdn.com/dms/image/v2/C560BAQGV8f8o0QowkA/company-logo_200_200/company-logo_200_200/0/1630582292293/tech_corp_logo?e=1738800000&v=beta&t=Kw6d6h19rly7F3xEflV6YxkxyZY73gOmQ8xfGsduw4k",
      jobTitle: "Product Manager",
      companyName: "TechCorp",
      address: "Da Nang, Vietnam",
      timePost: "1 day ago",
      type: "Full Time"
    }
  ];


  const [savedJobs, setSavedJobs] = useState({});

  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  return (
      <Box>
        <Card sx={{boxShadow: 3, borderRadius: 2, marginBottom: '10px'}}>
          <Box sx={{padding: "10px 20px"}}>
            <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                }}
            >
              More jobs for you.
            </Typography>
            <Typography
                component="span"
                variant="body2"
                sx={{
                  color: "text.secondary",
                  display: "inline",
                  fontSize: "0.875rem",
                }}
            >
              Based on your profile, preferences, and activity like applies,
              searches, and saves.
            </Typography>
          </Box>

          <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {mockPosts.map((job) => (
                <JobItem
                    key={job.id}
                    job={job}
                    isSaved={savedJobs[job.id]}
                    onToggleSave={toggleSaveJob}
                />
            ))}
          </List>
        </Card>
      </Box>
  );
};

export default MainContent;
