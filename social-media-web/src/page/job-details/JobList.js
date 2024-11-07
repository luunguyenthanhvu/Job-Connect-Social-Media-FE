import React from 'react';
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';

const JobList = ({filter, onJobClick}) => {
  const jobs = [
    {
      id: 1,
      title: 'Web Developer',
      company: 'FPT Software',
      description: 'Developing web applications',
      location: 'Hanoi'
    },
    {
      id: 2,
      title: 'Mobile Developer',
      company: 'VNG Corporation',
      description: 'Building mobile apps',
      location: 'Ho Chi Minh City'
    },
    // Add more jobs here...
  ];

  const filteredJobs = jobs.filter(job =>
      job.title.toLowerCase().includes(filter.toLowerCase()) ||
      job.company.toLowerCase().includes(filter.toLowerCase()) ||
      job.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <Box>
        <Box sx={{padding: "10px 20px",border: "1px solid #333"}}>
          <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "text.primary",
              }}
          >
            Top job picks for you
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
        <List>
          {filteredJobs.map((job) => (
              <ListItem button key={job.id} onClick={() => onJobClick(job)}>
                <Avatar alt={job.company} src="https://via.placeholder.com/40"/>
                <ListItemText primary={job.title}
                              secondary={`${job.company} - ${job.location}`}/>
              </ListItem>
          ))}
        </List>
      </Box>
  );
};

export default JobList;
